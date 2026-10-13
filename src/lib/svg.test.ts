import { describe, expect, it } from 'vitest';
import {
  SAMPLE_SVG,
  encodeSvgDataUri,
  getOutput,
  getSvgStats,
  hasUnsafeSvg,
  minifySvg,
  optimizeSvg,
  prettifyXml,
  sanitizeSvg,
  svgToBase64,
  svgToCssMask,
  svgToJsx,
  svgToReactComponent,
  svgToReactNative,
  svgToSprite,
  svgToSvelte,
  svgToVue,
  toComponentName,
  validateSvg,
} from './svg';

describe('validateSvg', () => {
  it('accepts a valid SVG', () => {
    const r = validateSvg(SAMPLE_SVG);
    expect(r.valid).toBe(true);
    expect(r.svgElement).toBeDefined();
  });

  it('reports empty input', () => {
    const r = validateSvg('   ');
    expect(r.valid).toBe(false);
    expect(r.error).toBe('empty');
  });

  it('reports XML parse errors', () => {
    const r = validateSvg('<svg><rect');
    expect(r.valid).toBe(false);
    expect(r.error).toBe('parse');
  });

  it('includes a short parse detail', () => {
    const r = validateSvg('<svg><rect');
    expect(r.detail).toBeDefined();
    expect(r.detail!.length).toBeGreaterThan(0);
    expect(r.detail!.length).toBeLessThanOrEqual(140);
  });

  it('rejects non-SVG markup', () => {
    const r = validateSvg('<div><p>hello</p></div>');
    expect(r.valid).toBe(false);
    expect(r.error).toBe('nosvg');
  });
});

describe('getSvgStats', () => {
  it('counts elements and reads viewBox', () => {
    const s = getSvgStats(SAMPLE_SVG);
    expect(s.elements).toBeGreaterThan(10);
    expect(s.viewBox).toBe('0 0 240 240');
    expect(s.width).toBe('240');
    expect(s.height).toBe('240');
    expect(s.bytes).toBeGreaterThan(0);
  });

  it('returns zeros for invalid input', () => {
    const s = getSvgStats('not svg');
    expect(s.elements).toBe(0);
    expect(s.viewBox).toBeNull();
  });
});

describe('svgToJsx', () => {
  it('renames class and stroke-width', () => {
    const out = svgToJsx('<svg class="a"><rect stroke-width="2"/></svg>');
    expect(out).toContain('className="a"');
    expect(out).toContain('strokeWidth="2"');
    expect(out).not.toContain('stroke-width=');
  });

  it('converts style strings to style objects', () => {
    const out = svgToJsx('<rect style="fill: red; stroke-width: 2"/>');
    expect(out).toContain("style={{fill: 'red', strokeWidth: 2}}");
  });

  it('converts XML comments to JSX comments', () => {
    const out = svgToJsx('<svg><!-- hi --></svg>');
    expect(out).toContain('{/* hi */}');
    expect(out).not.toContain('<!--');
  });

  it('leaves data-* and aria-* attributes untouched', () => {
    const out = svgToJsx('<svg data-foo="bar" aria-label="x"><circle/></svg>');
    expect(out).toContain('data-foo="bar"');
    expect(out).toContain('aria-label="x"');
  });
});

describe('svgToReactComponent / toComponentName', () => {
  it('builds a PascalCase name from a file name', () => {
    expect(toComponentName('my-icon.svg')).toBe('MyIcon');
    expect(toComponentName('arrow-left-thin.svg')).toBe('ArrowLeftThin');
  });

  it('strips xmlns, spreads props and names the component', () => {
    const out = svgToReactComponent('<svg xmlns="http://www.w3.org/2000/svg" width="24"><path d="M0 0"/></svg>', 'MyIcon');
    expect(out).not.toContain('xmlns=');
    expect(out).toContain('<svg width="24" {...props}>');
    expect(out).toContain('function MyIcon(props: SVGProps<SVGSVGElement>)');
  });
});

describe('svgToBase64', () => {
  it('round-trips Unicode text (Devanagari + emoji)', () => {
    const svg = '<svg xmlns="http://www.w3.org/2000/svg"><text>नमस्ते 🌍</text></svg>';
    const b64 = svgToBase64(svg);
    const back = Buffer.from(b64, 'base64').toString('utf-8');
    expect(back).toBe(svg);
  });
});

describe('encodeSvgDataUri', () => {
  it('produces a valid prefix and encodes #', () => {
    const uri = encodeSvgDataUri('<svg fill="#ff0000"><rect/></svg>');
    expect(uri.startsWith('data:image/svg+xml,')).toBe(true);
    expect(uri).toContain('%23ff0000');
    expect(uri).not.toContain('#ff0000');
  });
});

describe('minifySvg / prettifyXml', () => {
  it('minify removes comments and collapses whitespace', () => {
    const out = minifySvg('<svg>\n  <!-- c -->\n  <rect/>\n</svg>');
    expect(out).not.toContain('<!--');
    expect(out).toBe('<svg><rect/></svg>');
  });

  it('prettify of a minified sample keeps every tag', () => {
    const pretty = prettifyXml(minifySvg(SAMPLE_SVG));
    for (const tag of ['<svg', '</svg>', '<defs>', '</defs>', '<linearGradient', '<rect', '<circle', '<path', '<text']) {
      expect(pretty).toContain(tag);
    }
    expect(pretty.split('\n').length).toBeGreaterThan(10);
  });
});

describe('sanitizeSvg / hasUnsafeSvg', () => {
  const malicious =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 10">' +
    '<script>alert(1)</script>' +
    '<rect onload="x()" onclick="y()" width="10" height="10"/>' +
    '<a href="javascript:alert(1)"><text>hi</text></a>' +
    '<foreignObject width="10" height="10"><span>nope</span></foreignObject>' +
    '<linearGradient id="g"><stop offset="0" stop-color="red"/></linearGradient>' +
    '<path d="M0 0H10"/>' +
    '</svg>';

  it('strips scripts, event handlers, javascript: hrefs and foreignObject', () => {
    const { clean, removed } = sanitizeSvg(malicious);
    expect(removed).toBe(true);
    expect(clean).not.toContain('<script');
    expect(clean).not.toContain('foreignObject');
    expect(clean).not.toMatch(/onload|onclick/i);
    expect(clean).not.toContain('javascript:');
  });

  it('keeps benign graphics (gradient, path) intact', () => {
    const { clean } = sanitizeSvg(malicious);
    expect(clean).toContain('<linearGradient');
    expect(clean).toContain('<path');
  });

  it('hasUnsafeSvg flags malicious but not benign SVGs', () => {
    expect(hasUnsafeSvg(malicious)).toBe(true);
    expect(hasUnsafeSvg(SAMPLE_SVG)).toBe(false);
  });
});

describe('optimizeSvg', () => {
  it('produces smaller output while keeping viewBox', async () => {
    const r = await optimizeSvg(SAMPLE_SVG);
    expect(r.after).toBeLessThan(r.before);
    expect(r.data).toContain('viewBox');
    expect(r.savedPct).toBeGreaterThan(0);
  }, 30000);
});

describe('new output formats', () => {
  it('vue wraps markup in <template> and keeps original attributes', () => {
    const out = svgToVue(SAMPLE_SVG);
    expect(out.startsWith('<template>')).toBe(true);
    expect(out.endsWith('</template>')).toBe(true);
    expect(out).toContain('fill="#ffd43b"');
    expect(out).toContain('stop-color="#4c6ef5"');
    const viaGet = getOutput(SAMPLE_SVG, 'vue', 'Sample', 'sample.svg');
    expect(viaGet.downloadName).toBe('sample.vue');
  });

  it('svelte outputs the raw markup trimmed', () => {
    const out = svgToSvelte(SAMPLE_SVG);
    expect(out).toBe(SAMPLE_SVG.trim());
    const viaGet = getOutput(SAMPLE_SVG, 'svelte', 'Sample', 'sample.svg');
    expect(viaGet.downloadName).toBe('sample.svelte');
  });

  it('rn emits react-native-svg component with used-only imports and no xmlns', () => {
    const out = svgToReactNative(SAMPLE_SVG, 'Sample');
    expect(out).toContain("from 'react-native-svg'");
    expect(out).toContain('<Svg');
    expect(out).toContain('<Path');
    expect(out).toContain('<Circle');
    expect(out).not.toContain('xmlns');
    expect(out).toContain('{...props}');
    // import lists exactly the components used in the sample (plus Svg itself)
    const importLine = out.split('\n').find((l) => l.includes('react-native-svg'))!;
    expect(importLine).toContain('Svg');
    expect(importLine).toContain('LinearGradient');
    expect(importLine).not.toContain('Polygon');
    expect(importLine).not.toMatch(/\bLine\b/);
    expect(out).not.toMatch(/<svg[\s>]/);
    const viaGet = getOutput(SAMPLE_SVG, 'rn', 'Sample', 'sample.svg');
    expect(viaGet.downloadName).toBe('Sample.native.tsx');
  });

  it('rn renames only tags, not attribute values', () => {
    const out = svgToReactNative('<svg><path d="M0 0h10v10z" fill="none"/></svg>', 'Icon');
    expect(out).toContain('<Path');
    expect(out).toContain('d="M0 0h10v10z"');
  });

  it('mask outputs mask-image (incl. -webkit-) with a data URI', () => {
    const out = svgToCssMask(SAMPLE_SVG);
    expect(out).toContain('-webkit-mask-image: url("data:image/svg+xml,');
    expect(out).toContain('mask-image: url("data:image/svg+xml,');
    const viaGet = getOutput(SAMPLE_SVG, 'mask', 'Sample', 'sample.svg');
    expect(viaGet.downloadName).toBe('sample-mask.css');
  });

  it('sprite emits a symbol with viewBox and a use snippet', () => {
    const out = svgToSprite(SAMPLE_SVG, 'Sample');
    expect(out).toContain('<symbol id="sample" viewBox="0 0 240 240">');
    expect(out).toContain('<use href="#sample"/>');
    expect(out).toContain('<path');
    const viaGet = getOutput(SAMPLE_SVG, 'sprite', 'Sample', 'sample.svg');
    expect(viaGet.downloadName).toBe('sample.sprite.svg');
  });
});
