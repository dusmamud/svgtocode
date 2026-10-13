/* Pure SVG conversion / validation / stats helpers for VectorForge.
   All functions are framework-free and unit-testable. Browser APIs
   (DOMParser, Blob, canvas) are used — these run inside the client island. */

/** Rename map: HTML/SVG attribute -> JSX-compatible attribute. */
export const ATTRIBUTE_MAPPING: Record<string, string> = {
  class: 'className',
  for: 'htmlFor',
  'accent-height': 'accentHeight',
  'alignment-baseline': 'alignmentBaseline',
  'arabic-form': 'arabicForm',
  'baseline-shift': 'baselineShift',
  'cap-height': 'capHeight',
  'clip-path': 'clipPath',
  'clip-rule': 'clipRule',
  'color-interpolation': 'colorInterpolation',
  'color-interpolation-filters': 'colorInterpolationFilters',
  'color-profile': 'colorProfile',
  'color-rendering': 'colorRendering',
  'dominant-baseline': 'dominantBaseline',
  'enable-background': 'enableBackground',
  'fill-opacity': 'fillOpacity',
  'fill-rule': 'fillRule',
  'flood-color': 'floodColor',
  'flood-opacity': 'floodOpacity',
  'font-family': 'fontFamily',
  'font-size': 'fontSize',
  'font-size-adjust': 'fontSizeAdjust',
  'font-stretch': 'fontStretch',
  'font-style': 'fontStyle',
  'font-variant': 'fontVariant',
  'font-weight': 'fontWeight',
  'glyph-name': 'glyphName',
  'glyph-orientation-horizontal': 'glyphOrientationHorizontal',
  'glyph-orientation-vertical': 'glyphOrientationVertical',
  'horiz-adv-x': 'horizAdvX',
  'horiz-origin-x': 'horizOriginX',
  'image-rendering': 'imageRendering',
  'letter-spacing': 'letterSpacing',
  'lighting-color': 'lightingColor',
  'marker-end': 'markerEnd',
  'marker-mid': 'markerMid',
  'marker-start': 'markerStart',
  'overline-position': 'overlinePosition',
  'overline-thickness': 'overlineThickness',
  'paint-order': 'paintOrder',
  'panose-1': 'panose1',
  'pointer-events': 'pointerEvents',
  'rendering-intent': 'renderingIntent',
  'shape-rendering': 'shapeRendering',
  'stop-color': 'stopColor',
  'stop-opacity': 'stopOpacity',
  'strikethrough-position': 'strikethroughPosition',
  'strikethrough-thickness': 'strikethroughThickness',
  'stroke-dasharray': 'strokeDasharray',
  'stroke-dashoffset': 'strokeDashoffset',
  'stroke-linecap': 'strokeLinecap',
  'stroke-linejoin': 'strokeLinejoin',
  'stroke-miterlimit': 'strokeMiterlimit',
  'stroke-opacity': 'strokeOpacity',
  'stroke-width': 'strokeWidth',
  'text-anchor': 'textAnchor',
  'text-decoration': 'textDecoration',
  'text-rendering': 'textRendering',
  'underline-position': 'underlinePosition',
  'underline-thickness': 'underlineThickness',
  'unicode-bidi': 'unicodeBidi',
  'unicode-range': 'unicodeRange',
  'units-per-em': 'unitsPerEm',
  'v-alphabetic': 'vAlphabetic',
  'v-hanging': 'vHanging',
  'v-ideographic': 'vIdeographic',
  'v-mathematical': 'vMathematical',
  'vector-effect': 'vectorEffect',
  'vert-adv-y': 'vertAdvY',
  'vert-origin-x': 'vertOriginX',
  'vert-origin-y': 'vertOriginY',
  'word-spacing': 'wordSpacing',
  'writing-mode': 'writingMode',
  'x-height': 'xHeight',
  'xlink:actuate': 'xlinkActuate',
  'xlink:arcrole': 'xlinkArcrole',
  'xlink:href': 'xlinkHref',
  'xlink:role': 'xlinkRole',
  'xlink:show': 'xlinkShow',
  'xlink:title': 'xlinkTitle',
  'xlink:type': 'xlinkType',
  'xml:base': 'xmlBase',
  'xml:lang': 'xmlLang',
  'xml:space': 'xmlSpace',
  'xmlns:xlink': 'xmlnsXlink',
};

export interface ValidationResult {
  valid: boolean;
  error?: string;
  /** Human-readable parse detail (e.g. from the parsererror element). */
  detail?: string;
  svgElement?: SVGSVGElement;
}

export interface SvgStats {
  bytes: number;
  elements: number;
  viewBox: string | null;
  width: string | null;
  height: string | null;
}

/** Parse and validate SVG markup. Returns the <svg> element when valid. */
export function validateSvg(code: string): ValidationResult {
  const trimmed = code.trim();
  if (!trimmed) return { valid: false, error: 'empty' };
  const parser = new DOMParser();
  const doc = parser.parseFromString(trimmed, 'image/svg+xml');
  const parserError = doc.querySelector('parsererror');
  if (parserError) {
    const detail = (parserError.textContent || '')
      .replace(/\s+/g, ' ')
      .trim()
      .slice(0, 140);
    return { valid: false, error: 'parse', detail: detail || undefined };
  }
  const svg = doc.querySelector('svg');
  if (!svg) {
    return { valid: false, error: 'nosvg' };
  }
  return { valid: true, svgElement: svg as unknown as SVGSVGElement };
}

/** Compute file stats for the given SVG code. */
export function getSvgStats(code: string): SvgStats {
  const bytes = new TextEncoder().encode(code).length;
  const v = validateSvg(code);
  if (!v.valid || !v.svgElement) {
    return { bytes, elements: 0, viewBox: null, width: null, height: null };
  }
  const el = v.svgElement;
  return {
    bytes,
    elements: el.querySelectorAll('*').length,
    viewBox: el.getAttribute('viewBox'),
    width: el.getAttribute('width'),
    height: el.getAttribute('height'),
  };
}

/** Dangerous element names removed from preview/rendered SVG. */
const DANGEROUS_ELEMENTS = new Set([
  'script', 'foreignobject', 'iframe', 'object', 'embed', 'form',
  'input', 'button', 'textarea', 'select', 'link', 'meta', 'base',
]);

/** Sanitize untrusted SVG for safe preview: removes dangerous elements,
 *  event-handler attributes and javascript: URLs. Returns the cleaned
 *  markup plus whether anything was removed. */
export function sanitizeSvg(code: string): { clean: string; removed: boolean } {
  let removed = false;
  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(code, 'image/svg+xml');
    if (doc.querySelector('parsererror')) return { clean: code, removed: false };

    const els = Array.from(doc.querySelectorAll('*'));
    for (const el of els) {
      const name = el.localName ? el.localName.toLowerCase() : '';
      if (DANGEROUS_ELEMENTS.has(name)) {
        removed = true;
        el.remove();
        continue;
      }
      if (name === 'style') {
        const text = (el.textContent || '').toLowerCase();
        if (text.includes('expression(') || text.includes('javascript:')) {
          removed = true;
          el.remove();
          continue;
        }
      }
      const attrs = Array.from(el.attributes);
      for (const attr of attrs) {
        const aName = attr.name.toLowerCase();
        if (aName.startsWith('on')) {
          removed = true;
          el.removeAttribute(attr.name);
          continue;
        }
        if (aName === 'href' || aName === 'xlink:href') {
          const v = attr.value.trim().toLowerCase();
          if (v.startsWith('javascript:') || v.startsWith('vbscript:') || v.startsWith('data:text/html')) {
            removed = true;
            el.removeAttribute(attr.name);
          }
        }
      }
    }
    const serializer = new XMLSerializer();
    const root = doc.documentElement;
    return { clean: serializer.serializeToString(root), removed };
  } catch {
    return { clean: code, removed: false };
  }
}

/** True when sanitizeSvg would strip something from the code. */
export function hasUnsafeSvg(code: string): boolean {
  return sanitizeSvg(code).removed;
}

export function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
}

/** Collapse whitespace between tags + strip comments. */
export function minifySvg(code: string): string {
  return code
    .replace(/<!--[\s\S]*?-->/g, '')
    .replace(/>\s+</g, '><')
    .replace(/\s{2,}/g, ' ')
    .trim();
}

/** Indent nested XML for human reading (2 spaces). */
export function prettifyXml(code: string): string {
  const PADDING = '  ';
  let pad = 0;
  const out: string[] = [];
  code
    .replace(/>(?=<)/g, '>\n')
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
    .forEach((node) => {
      const isClosingTag = /^<\//.test(node);
      const isSingleLine =
        isClosingTag === false &&
        (/\/>$/.test(node) ||
          /^<\?/.test(node) ||
          /^<!--/.test(node) ||
          /^<![A-Z]/.test(node) ||
          /<\//.test(node)); // opens and closes on one line, e.g. <text>hi</text>
      if (isClosingTag) pad = Math.max(0, pad - 1);
      out.push(PADDING.repeat(pad) + node);
      const isOpeningTag =
        !isClosingTag && !isSingleLine && /^<[^!?/]/.test(node) && />$/.test(node);
      if (isOpeningTag) pad += 1;
    });
  return out.join('\n');
}

export interface OptimizeResult {
  data: string;
  before: number;
  after: number;
  savedPct: number;
}

/** Optimize with SVGO (browser build). Falls back to a simple optimizer. */
export async function optimizeSvg(code: string): Promise<OptimizeResult> {
  const before = new TextEncoder().encode(code).length;
  let data: string;
  try {
    const { optimize } = await import('svgo/dist/svgo.browser.js');
    const result = optimize(code, {
      multipass: true,
      plugins: [
        {
          name: 'preset-default',
          params: { overrides: { removeViewBox: false } },
        },
      ],
    });
    data = result.data;
  } catch {
    // Fallback: strip comments, editor metadata namespaces, collapse whitespace.
    data = code
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/\s(xmlns:(sodipodi|inkscape|adobe|sketch|figma|illustrator|dc|cc|rdf)="[^"]*")/g, '')
      .replace(/\s(data-name|id)="[^"]*"/g, '')
      .replace(/>\s+</g, '><')
      .trim();
  }
  const after = new TextEncoder().encode(data).length;
  const savedPct = before > 0 ? Math.max(0, Math.round(((before - after) / before) * 100)) : 0;
  return { data, before, after, savedPct };
}

/** Convert an inline CSS style string to a JSX style object literal. */
function styleStringToJsx(style: string): string {
  const pairs = style
    .split(';')
    .map((p) => p.trim())
    .filter(Boolean)
    .map((pair) => {
      const idx = pair.indexOf(':');
      if (idx === -1) return null;
      const prop = pair.slice(0, idx).trim();
      const value = pair.slice(idx + 1).trim();
      const camel = prop.replace(/-([a-z])/g, (_, c: string) => c.toUpperCase());
      const isNumeric = /^[-+]?(\d+\.?\d*|\.\d+)$/.test(value);
      return `${camel}: ${isNumeric ? value : `'${value.replace(/'/g, "\\'")}'`}`;
    })
    .filter(Boolean);
  return `{${pairs.join(', ')}}`;
}

/** Convert raw SVG markup to JSX-compatible markup. */
export function svgToJsx(code: string): string {
  let out = code;
  // XML comments -> JSX comments
  out = out.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');
  // style="..." -> style={{...}}
  out = out.replace(/style="([^"]*)"/g, (_, s: string) => `style={${styleStringToJsx(s)}}`);
  // attribute renames
  for (const [htmlAttr, jsxAttr] of Object.entries(ATTRIBUTE_MAPPING)) {
    const escaped = htmlAttr.replace(/:/g, '\\:');
    const re = new RegExp(`\\b${escaped}(?=\\s*=)`, 'g');
    out = out.replace(re, jsxAttr);
  }
  return out;
}

/** Turn a file name into a safe PascalCase component name. */
export function toComponentName(fileName: string): string {
  const base = fileName.replace(/\.[^.]*$/, '').replace(/[^a-zA-Z0-9]+/g, ' ');
  const pascal = base
    .split(' ')
    .map((w) => (w ? w[0].toUpperCase() + w.slice(1) : ''))
    .join('');
  const safe = pascal.replace(/^[^a-zA-Z]+/, '') || 'VectorIcon';
  return safe[0].toUpperCase() + safe.slice(1);
}

/** Convert raw SVG to a full TypeScript React component. */
export function svgToReactComponent(code: string, componentName: string): string {
  let inner = svgToJsx(code.trim());
  // Drop xmlns declarations — unnecessary (and warned about) inside React.
  inner = inner.replace(/\sxmlns(:\w+)?="[^"]*"/g, '');
  // Convert the root <svg ...> to accept props, spreading props last.
  inner = inner.replace(
    /^<svg(\s[^>]*)?>/,
    (match) => match.replace(/>$/, '') + ' {...props}>',
  );
  return [
    `import type { SVGProps } from 'react';`,
    ``,
    `export default function ${componentName}(props: SVGProps<SVGSVGElement>) {`,
    `  return (`,
    ...inner.split('\n').map((l) => `    ${l}`),
    `  );`,
    `}`,
    ``,
  ].join('\n');
}

/** Percent-encode SVG for use in data URIs. */
export function encodeSvgDataUri(code: string): string {
  return (
    'data:image/svg+xml,' +
    encodeURIComponent(code)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22')
  );
}

/** Build an <img> tag snippet that embeds the SVG inline. */
export function svgToImgTag(code: string, fileName: string): string {
  const stats = getSvgStats(code);
  const alt = fileName.replace(/\.[^.]*$/, '').replace(/[-_]+/g, ' ') || 'vector image';
  const dims =
    stats.width && stats.height ? ` width="${stats.width}" height="${stats.height}"` : '';
  return `<img src="${encodeSvgDataUri(minifySvg(code))}" alt="${alt}"${dims} />`;
}

/** Build a CSS background-image snippet. */
export function svgToCssDataUri(code: string): string {
  return `.icon {\n  background-image: url("${encodeSvgDataUri(minifySvg(code))}");\n  background-repeat: no-repeat;\n  background-size: contain;\n}`;
}

/** Base64-encode the SVG (UTF-8 safe). */
export function svgToBase64(code: string): string {
  return btoa(unescape(encodeURIComponent(code)));
}

export type OutputFormat = 'raw' | 'jsx' | 'component' | 'img' | 'css' | 'base64';

/** Get the output text + suggested file name for a format tab. */
export function getOutput(
  code: string,
  format: OutputFormat,
  componentName: string,
  fileName: string,
): { text: string; downloadName: string; mime: string } {
  switch (format) {
    case 'jsx':
      return { text: svgToJsx(code), downloadName: fileName.replace(/\.svg$/i, '.jsx') || 'icon.jsx', mime: 'text/plain' };
    case 'component':
      return { text: svgToReactComponent(code, componentName), downloadName: `${componentName}.tsx`, mime: 'text/plain' };
    case 'img':
      return { text: svgToImgTag(code, fileName), downloadName: fileName.replace(/\.svg$/i, '.img.html') || 'image.html', mime: 'text/html' };
    case 'css':
      return { text: svgToCssDataUri(code), downloadName: 'icon.css', mime: 'text/css' };
    case 'base64':
      return { text: svgToBase64(code), downloadName: 'icon.base64.txt', mime: 'text/plain' };
    case 'raw':
    default:
      return { text: code, downloadName: fileName || 'image.svg', mime: 'image/svg+xml' };
  }
}

/** Ensure the SVG has explicit width/height so canvas rasterization works. */
function ensureDimensions(code: string): { code: string; width: number; height: number } {
  const v = validateSvg(code);
  let width = 1024;
  let height = 1024;
  if (v.valid && v.svgElement) {
    const el = v.svgElement;
    const w = parseFloat(el.getAttribute('width') || '');
    const h = parseFloat(el.getAttribute('height') || '');
    if (Number.isFinite(w) && w > 0) width = w;
    if (Number.isFinite(h) && h > 0) height = h;
    if ((!Number.isFinite(w) || w <= 0 || !Number.isFinite(h) || h <= 0) && el.getAttribute('viewBox')) {
      const parts = el.getAttribute('viewBox')!.trim().split(/[\s,]+/).map(Number);
      if (parts.length === 4 && parts[2] > 0 && parts[3] > 0) {
        width = parts[2];
        height = parts[3];
      }
    }
    let out = code;
    if (!el.getAttribute('width')) out = out.replace(/<svg(\s|>)/, `<svg width="${width}"$1`);
    if (!el.getAttribute('height')) out = out.replace(/<svg(\s|>)/, `<svg height="${height}"$1`);
    return { code: out, width, height };
  }
  return { code, width, height };
}

/** Rasterize SVG to a PNG blob at the given scale (1x/2x/4x). */
export function svgToPng(code: string, scale: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const { code: sized, width, height } = ensureDimensions(code);
    const blob = new Blob([sized], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const img = new Image();
    img.onload = () => {
      try {
        const canvas = document.createElement('canvas');
        canvas.width = Math.round(width * scale);
        canvas.height = Math.round(height * scale);
        const ctx = canvas.getContext('2d');
        if (!ctx) throw new Error('no-2d-context');
        ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
        URL.revokeObjectURL(url);
        canvas.toBlob((b) => {
          if (b) resolve(b);
          else reject(new Error('encode-failed'));
        }, 'image/png');
      } catch (e) {
        URL.revokeObjectURL(url);
        reject(e);
      }
    };
    img.onerror = () => {
      URL.revokeObjectURL(url);
      reject(new Error('raster-failed'));
    };
    img.src = url;
  });
}

/** Trigger a download of text content in the browser. */
export function downloadText(text: string, fileName: string, mime: string): void {
  const blob = new Blob([text], { type: `${mime};charset=utf-8` });
  downloadBlob(blob, fileName);
}

export function downloadBlob(blob: Blob, fileName: string): void {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 2000);
}

/** Built-in sample: a layered "aurora badge" SVG. */
export const SAMPLE_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240">
  <!-- Aurora badge sample -->
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#4c6ef5"/>
      <stop offset="1" stop-color="#9c36b5"/>
    </linearGradient>
    <linearGradient id="ring" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#ffffff" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#ffffff" stop-opacity="0.2"/>
    </linearGradient>
  </defs>
  <rect x="8" y="8" width="224" height="224" rx="56" fill="url(#bg)"/>
  <circle cx="120" cy="112" r="58" fill="none" stroke="url(#ring)" stroke-width="10"/>
  <path d="M120 62 L134 100 L174 100 L142 124 L154 162 L120 138 L86 162 L98 124 L66 100 L106 100 Z"
        fill="#ffd43b" stroke="#fab005" stroke-width="4" stroke-linejoin="round"/>
  <text x="120" y="208" text-anchor="middle" font-family="system-ui, sans-serif"
        font-size="20" font-weight="700" fill="#ffffff" letter-spacing="2">VECTOR</text>
</svg>
`;
