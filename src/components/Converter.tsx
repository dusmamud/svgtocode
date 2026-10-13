import { useEffect, useMemo, useRef, useState } from 'react';
import { EditorView, basicSetup } from 'codemirror';
import { xml } from '@codemirror/lang-xml';
import { Compartment } from '@codemirror/state';
import {
  UploadSimple,
  Sparkle,
  Trash,
  Lightning,
  BracketsCurly,
  ArrowsIn,
  Copy,
  Check,
  DownloadSimple,
  Image as ImageIcon,
  X,
} from '@phosphor-icons/react';
import type { Dict } from '../i18n/ui';
import {
  SAMPLE_SVG,
  downloadBlob,
  downloadText,
  formatBytes,
  getOutput,
  getSvgStats,
  minifySvg,
  optimizeSvg,
  prettifyXml,
  svgToPng,
  toComponentName,
  validateSvg,
  type OutputFormat,
} from '../lib/svg';

/** CodeMirror theme synced with our CSS variables. */
function buildEditorTheme(dark: boolean) {
  return EditorView.theme(
    {
      '&': {
        backgroundColor: 'var(--code-bg)',
        color: 'var(--text)',
        border: '1px solid var(--border)',
      },
      '.cm-content': { caretColor: 'var(--accent)' },
      '.cm-gutters': {
        backgroundColor: 'var(--code-bg)',
        color: 'var(--muted)',
        borderRight: '1px solid var(--border)',
      },
      '.cm-activeLineGutter': { backgroundColor: 'transparent' },
      '.cm-activeLine': { backgroundColor: dark ? '#2b2c2e' : '#f0f4fa' },
      '.cm-selectionBackground': { backgroundColor: dark ? '#3b4a63' : '#d3e3fd' },
      '&.cm-focused': { outline: '2px solid var(--accent)', outlineOffset: '1px' },
      '.tok-tag': { color: dark ? '#7dd3fc' : '#0b57d0' },
      '.tok-attribute': { color: dark ? '#a8c7fa' : '#5b5bd6' },
      '.tok-attributeValue': { color: dark ? '#81c995' : '#146c2e' },
      '.tok-comment': { color: 'var(--muted)', fontStyle: 'italic' },
      '.tok-string': { color: dark ? '#81c995' : '#146c2e' },
    },
    { dark },
  );
}

type BgMode = 'checker' | 'light' | 'white' | 'dark' | 'custom';
type Zoom = 'fit' | 0.5 | 1 | 2;

const FORMATS: { id: OutputFormat; key: 'tabRaw' | 'tabJsx' | 'tabComponent' | 'tabImg' | 'tabCss' | 'tabBase64' }[] = [
  { id: 'raw', key: 'tabRaw' },
  { id: 'jsx', key: 'tabJsx' },
  { id: 'component', key: 'tabComponent' },
  { id: 'img', key: 'tabImg' },
  { id: 'css', key: 'tabCss' },
  { id: 'base64', key: 'tabBase64' },
];

export default function Converter({ t }: { t: Dict }) {
  const [code, setCode] = useState(SAMPLE_SVG);
  const [fileName, setFileName] = useState('sample.svg');
  const [format, setFormat] = useState<OutputFormat>('raw');
  const [bg, setBg] = useState<BgMode>('checker');
  const [customBg, setCustomBg] = useState('#e3e3e3');
  const [zoom, setZoom] = useState<Zoom>('fit');
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [optimizing, setOptimizing] = useState(false);
  const [exporting, setExporting] = useState<number | null>(null);
  const [dragActive, setDragActive] = useState(false);

  const editorHost = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const themeCompartment = useRef(new Compartment());
  const codeRef = useRef(code);
  const fileInput = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const dragCounter = useRef(0);
  const [mounted, setMounted] = useState(false);
  codeRef.current = code;

  /* Mounted only in the browser — SSR renders a lightweight placeholder. */
  useEffect(() => {
    setMounted(true);
  }, []);

  /* ---------- CodeMirror ---------- */
  useEffect(() => {
    if (!mounted || !editorHost.current) return;
    const dark = document.documentElement.classList.contains('dark');
    const view = new EditorView({
      doc: codeRef.current,
      extensions: [
        basicSetup,
        xml(),
        EditorView.lineWrapping,
        themeCompartment.current.of(buildEditorTheme(dark)),
        EditorView.updateListener.of((u) => {
          if (u.docChanged) {
            const next = u.state.doc.toString();
            if (next !== codeRef.current) setCode(next);
          }
        }),
      ],
      parent: editorHost.current,
    });
    viewRef.current = view;

    const observer = new MutationObserver(() => {
      const isDark = document.documentElement.classList.contains('dark');
      view.dispatch({
        effects: themeCompartment.current.reconfigure(buildEditorTheme(isDark)),
      });
    });
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    return () => {
      observer.disconnect();
      view.destroy();
      viewRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mounted]);

  const writeEditor = (next: string) => {
    setCode(next);
    const view = viewRef.current;
    if (view && view.state.doc.toString() !== next) {
      view.dispatch({ changes: { from: 0, to: view.state.doc.length, insert: next } });
    }
  };

  /* ---------- derived (DOM-dependent: browser only) ---------- */
  const validation = useMemo(
    () => (mounted ? validateSvg(code) : { valid: false as const }),
    [code, mounted],
  );
  const stats = useMemo(
    () =>
      mounted
        ? getSvgStats(code)
        : { bytes: 0, elements: 0, viewBox: null as string | null, width: null as string | null, height: null as string | null },
    [code, mounted],
  );
  const componentName = useMemo(() => toComponentName(fileName), [fileName]);
  const output = useMemo(
    () => (mounted && validation.valid ? getOutput(code, format, componentName, fileName) : null),
    [code, format, componentName, fileName, validation.valid, mounted],
  );

  /* ---------- preview ---------- */
  useEffect(() => {
    const host = previewRef.current;
    if (!host) return;
    if (validation.valid) {
      host.innerHTML = code;
      const svg = host.querySelector('svg');
      if (svg) {
        const el = svg as unknown as HTMLElement;
        el.style.maxWidth = '100%';
        el.style.height = 'auto';
        el.style.display = 'block';
        el.style.margin = '0 auto';
        el.style.width = zoom === 'fit' ? '100%' : `${zoom * 100}%`;
      }
    } else {
      host.innerHTML = '';
    }
  }, [code, zoom, validation.valid]);

  const previewStyle: React.CSSProperties =
    bg === 'checker'
      ? {}
      : { background: bg === 'custom' ? customBg : bg === 'light' ? '#f1f3f4' : bg === 'white' ? '#ffffff' : '#202124', backgroundImage: 'none' };

  /* ---------- file handling ---------- */
  const readFile = (file: File | undefined) => {
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = String(e.target?.result ?? '');
      writeEditor(text);
      setFileName(file.name || 'image.svg');
      setNotice(null);
    };
    reader.readAsText(file);
  };

  /* ---------- actions ---------- */
  const flash = (msg: string) => {
    setNotice(msg);
    window.setTimeout(() => setNotice(null), 4000);
  };

  const doCopy = async () => {
    if (!output) return;
    try {
      await navigator.clipboard.writeText(output.text);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = output.text;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      ta.remove();
    }
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1500);
  };

  const doDownload = () => {
    if (!output) return;
    downloadText(output.text, output.downloadName, output.mime);
  };

  const doPng = async (scale: number) => {
    if (!validation.valid) return;
    setExporting(scale);
    try {
      const blob = await svgToPng(code, scale);
      downloadBlob(blob, fileName.replace(/\.svg$/i, '') + `@${scale}x.png`);
    } catch {
      flash(t.pngFailed);
    } finally {
      setExporting(null);
    }
  };

  const doOptimize = async () => {
    if (!validation.valid) return;
    setOptimizing(true);
    try {
      const r = await optimizeSvg(code);
      writeEditor(r.data);
      flash(t.optimizedSaved(formatBytes(r.before), formatBytes(r.after), r.savedPct));
    } catch {
      flash(t.optimizeFailed);
    } finally {
      setOptimizing(false);
    }
  };

  const btn =
    'inline-flex min-h-[40px] items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-50';

  if (!mounted) {
    return (
      <section aria-label={t.tagline} className="animate-pulse">
        <div className="h-[380px] rounded-2xl border border-border bg-surface sm:h-[440px]" />
        <div className="mt-4 h-24 rounded-2xl border border-border bg-surface" />
      </section>
    );
  }

  return (
    <section
      aria-label={t.tagline}
      className="relative"
      onDragEnter={(e) => {
        e.preventDefault();
        dragCounter.current += 1;
        setDragActive(true);
      }}
      onDragLeave={(e) => {
        e.preventDefault();
        dragCounter.current = Math.max(0, dragCounter.current - 1);
        if (dragCounter.current === 0) setDragActive(false);
      }}
      onDragOver={(e) => e.preventDefault()}
      onDrop={(e) => {
        e.preventDefault();
        dragCounter.current = 0;
        setDragActive(false);
        readFile(e.dataTransfer.files?.[0]);
      }}
    >
      {dragActive && (
        <div className="pointer-events-none fixed inset-0 z-50 flex items-center justify-center bg-accent/10 p-6 backdrop-blur-[2px]">
          <div className="flex flex-col items-center gap-3 rounded-3xl border-2 border-dashed border-accent bg-surface px-10 py-12 shadow-[var(--shadow-pop)]">
            <UploadSimple size={40} weight="duotone" className="text-accent" />
            <p className="text-lg font-semibold">{t.dropHere}</p>
          </div>
        </div>
      )}

      {/* Toolbar */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <input
          ref={fileInput}
          type="file"
          accept="image/svg+xml,.svg"
          className="sr-only"
          aria-label={t.upload}
          onChange={(e) => readFile(e.target.files?.[0] ?? undefined)}
        />
        <button className={`${btn} bg-accent !border-transparent text-accent-ink hover:bg-accent-hover`} onClick={() => fileInput.current?.click()}>
          <UploadSimple size={18} weight="bold" /> {t.upload}
        </button>
        <button className={btn} onClick={() => { writeEditor(SAMPLE_SVG); setFileName('sample.svg'); setNotice(null); }}>
          <Sparkle size={18} weight="bold" /> {t.sample}
        </button>
        <button className={btn} onClick={() => { writeEditor(''); setFileName('image.svg'); setNotice(null); }}>
          <Trash size={18} weight="bold" /> {t.clear}
        </button>
        <span className="mx-1 hidden h-6 w-px bg-border sm:block" aria-hidden="true" />
        <button className={btn} onClick={doOptimize} disabled={!validation.valid || optimizing}>
          <Lightning size={18} weight="bold" /> {optimizing ? '…' : t.optimize}
        </button>
        <button className={btn} onClick={() => writeEditor(prettifyXml(code))} disabled={!validation.valid}>
          <BracketsCurly size={18} weight="bold" /> {t.prettify}
        </button>
        <button className={btn} onClick={() => writeEditor(minifySvg(code))} disabled={!validation.valid}>
          <ArrowsIn size={18} weight="bold" /> {t.minify}
        </button>
        {notice && (
          <span role="status" className="ml-auto rounded-full bg-accent-soft px-3 py-1.5 text-xs font-medium text-accent">
            {notice}
          </span>
        )}
      </div>

      {/* Editor + Preview */}
      <div className="grid gap-4 lg:grid-cols-2">
        <div className="overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)]">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <h2 className="text-sm font-semibold">{t.editorLabel}</h2>
            <span className="truncate text-xs text-muted" title={fileName}>{fileName}</span>
          </div>
          <div ref={editorHost} dir="ltr" className="h-[380px] sm:h-[440px]" aria-label={t.editorLabel} />
        </div>

        <div className="flex flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)]">
          <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-2.5">
            <h2 className="me-auto text-sm font-semibold">{t.previewLabel}</h2>
            <div className="flex items-center gap-1" role="group" aria-label={t.zoom}>
              {(['fit', 0.5, 1, 2] as Zoom[]).map((z) => (
                <button
                  key={String(z)}
                  onClick={() => setZoom(z)}
                  aria-pressed={zoom === z}
                  className={`min-h-[32px] rounded-lg px-2.5 text-xs font-medium ${zoom === z ? 'bg-accent text-accent-ink' : 'text-muted hover:bg-surface-2 hover:text-text'}`}
                >
                  {z === 'fit' ? t.zoomFit : `${Number(z) * 100}%`}
                </button>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-1.5 px-4 py-2" role="group" aria-label={t.background}>
            <span className="me-1 text-xs text-muted">{t.background}:</span>
            {(
              [
                { id: 'checker', label: t.bgChecker },
                { id: 'light', label: t.bgLight },
                { id: 'white', label: t.bgWhite },
                { id: 'dark', label: t.bgDark },
                { id: 'custom', label: t.bgCustom },
              ] as { id: BgMode; label: string }[]
            ).map((o) => (
              <button
                key={o.id}
                onClick={() => setBg(o.id)}
                aria-pressed={bg === o.id}
                className={`min-h-[32px] rounded-full border px-3 text-xs font-medium ${bg === o.id ? 'border-accent bg-accent-soft text-accent' : 'border-border text-muted hover:text-text'}`}
              >
                {o.label}
              </button>
            ))}
            {bg === 'custom' && (
              <input
                type="color"
                value={customBg}
                onChange={(e) => setCustomBg(e.target.value)}
                aria-label={t.bgCustom}
                className="h-8 w-10 cursor-pointer rounded border border-border bg-transparent p-0.5"
              />
            )}
          </div>
          <div className={`checkerboard relative flex-1 overflow-auto p-6 ${bg === 'checker' ? '' : ''}`} style={previewStyle}>
            {validation.valid ? (
              <div ref={previewRef} className="mx-auto max-w-full" />
            ) : (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-2 text-center">
                <X size={28} weight="bold" className="text-danger" />
                <p className="font-semibold text-danger">{t.invalidSvg}</p>
                <p className="max-w-xs text-sm text-muted">{code.trim() ? t.invalidHint : t.emptyHint}</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Output formats */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)]">
        <div className="flex flex-wrap items-center gap-1 border-b border-border px-3 py-2" role="tablist" aria-label="output formats">
          {FORMATS.map((f) => (
            <button
              key={f.id}
              role="tab"
              aria-selected={format === f.id}
              onClick={() => setFormat(f.id)}
              className={`min-h-[40px] rounded-xl px-4 text-sm font-medium transition-colors ${format === f.id ? 'bg-accent text-accent-ink' : 'text-muted hover:bg-surface-2 hover:text-text'}`}
            >
              {t[f.key]}
            </button>
          ))}
          <div className="ms-auto flex flex-wrap items-center gap-2 py-1">
            <button className={btn} onClick={doCopy} disabled={!output}>
              {copied ? <Check size={18} weight="bold" /> : <Copy size={18} weight="bold" />}
              {copied ? t.copied : t.copy}
            </button>
            <button className={btn} onClick={doDownload} disabled={!output}>
              <DownloadSimple size={18} weight="bold" /> {t.download}
            </button>
            <div className="flex items-center gap-1" role="group" aria-label={t.pngExport}>
              {[1, 2, 4].map((s) => (
                <button
                  key={s}
                  className={btn + ' !px-3'}
                  onClick={() => doPng(s)}
                  disabled={!validation.valid || exporting !== null}
                  title={`${t.pngExport} ${s}x`}
                >
                  <ImageIcon size={18} weight="bold" />
                  {exporting === s ? '…' : `${s}x`}
                </button>
              ))}
            </div>
          </div>
        </div>
        <pre
          dir="ltr"
          className="max-h-[320px] overflow-auto bg-code-bg p-4 font-mono text-[13px] leading-relaxed text-text"
          aria-label={output ? output.downloadName : 'output'}
        >
          <code>{output ? output.text : ''}</code>
        </pre>
      </div>

      {/* Stats bar */}
      <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label="stats">
        {[
          { k: t.statsSize, v: formatBytes(stats.bytes) },
          { k: t.statsElements, v: String(stats.elements) },
          { k: t.statsViewBox, v: stats.viewBox ?? '—' },
          { k: t.statsDimensions, v: stats.width && stats.height ? `${stats.width} × ${stats.height}` : '—' },
        ].map((s) => (
          <div key={s.k} className="rounded-2xl border border-border bg-surface px-4 py-3 shadow-[var(--shadow-soft)]">
            <dt className="text-xs font-medium uppercase tracking-wide text-muted">{s.k}</dt>
            <dd className="mt-0.5 truncate font-mono text-sm font-semibold" title={s.v}>{s.v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
