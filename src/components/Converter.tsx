import { useCallback, useEffect, useMemo, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
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
  CaretRight,
  Copy,
  Check,
  ClipboardText,
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
  hasUnsafeSvg,
  minifySvg,
  optimizeSvg,
  prettifyXml,
  sanitizeSvg,
  svgToPng,
  toComponentName,
  validateSvg,
  type OutputFormat,
} from '../lib/svg';

/** Interpolate {placeholders} in a dict template string.
    (Dict entries must be plain strings: function values can't survive
    Astro's island-prop serialization — they hydrate as null.) */
function fill(tpl: string, vars: Record<string, string | number>): string {
  return Object.entries(vars).reduce((s, [k, v]) => s.replace(`{${k}}`, String(v)), tpl);
}

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

const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5 MB

const FORMATS: { id: OutputFormat; key: 'tabRaw' | 'tabJsx' | 'tabComponent' | 'tabImg' | 'tabCss' | 'tabBase64' | 'tabVue' | 'tabSvelte' | 'tabRn' | 'tabMask' | 'tabSprite' }[] = [
  { id: 'raw', key: 'tabRaw' },
  { id: 'jsx', key: 'tabJsx' },
  { id: 'component', key: 'tabComponent' },
  { id: 'img', key: 'tabImg' },
  { id: 'css', key: 'tabCss' },
  { id: 'base64', key: 'tabBase64' },
  { id: 'vue', key: 'tabVue' },
  { id: 'svelte', key: 'tabSvelte' },
  { id: 'rn', key: 'tabRn' },
  { id: 'mask', key: 'tabMask' },
  { id: 'sprite', key: 'tabSprite' },
];

const VALID_FORMATS: OutputFormat[] = FORMATS.map((f) => f.id);
const VALID_BGS: BgMode[] = ['checker', 'light', 'white', 'dark', 'custom'];
const VALID_ZOOMS: Zoom[] = ['fit', 0.5, 1, 2];
const SETTINGS_KEY = 'vf-settings';

/** Tracks whether a horizontal scroll strip has more content hidden past its end edge. */
function useMoreIndicator<T extends HTMLElement>() {
  const ref = useRef<T>(null);
  const [more, setMore] = useState(false);
  const update = useCallback(() => {
    const el = ref.current;
    if (el) setMore(el.scrollWidth - el.clientWidth - Math.abs(el.scrollLeft) > 4);
  }, []);
  useEffect(() => {
    update();
    const raf = requestAnimationFrame(update);
    window.addEventListener('resize', update);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', update);
    };
  }, [update]);
  return { ref, more, update };
}

/** Fade + chevron pinned to the end edge of a scroll strip, so users can see it scrolls. */
function ScrollMore({ show, fromClass }: { show: boolean; fromClass: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-y-0 end-0 z-10 flex w-12 items-center justify-end bg-gradient-to-l rtl:bg-gradient-to-r ${fromClass} to-transparent pe-1.5 transition-opacity duration-200 sm:hidden ${show ? 'opacity-100' : 'opacity-0'}`}
    >
      <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full border border-border bg-surface text-muted shadow-[var(--shadow-soft)]">
        <CaretRight size={14} weight="bold" className="rtl:-scale-x-100" />
      </span>
    </div>
  );
}

export default function Converter({ t, initialFormat }: { t: Dict; initialFormat?: OutputFormat }) {
  const [code, setCode] = useState(SAMPLE_SVG);
  const [fileName, setFileName] = useState('sample.svg');
  const [format, setFormat] = useState<OutputFormat>(initialFormat ?? 'raw');
  const [bg, setBg] = useState<BgMode>('checker');
  const [customBg, setCustomBg] = useState('#e3e3e3');
  const [zoom, setZoom] = useState<Zoom>('fit');
  const [split, setSplit] = useState(50);
  const [isDesktop, setIsDesktop] = useState(false);
  const [mobilePane, setMobilePane] = useState<'code' | 'preview'>('code');
  const [copied, setCopied] = useState(false);
  const [notice, setNotice] = useState<string | null>(null);
  const [optimizing, setOptimizing] = useState(false);
  const [exporting, setExporting] = useState<number | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [batch, setBatch] = useState<{ name: string; text: string }[]>([]);
  const [zipping, setZipping] = useState(false);

  const editorHost = useRef<HTMLDivElement>(null);
  const viewRef = useRef<EditorView | null>(null);
  const themeCompartment = useRef(new Compartment());
  const codeRef = useRef(code);
  const fileInput = useRef<HTMLInputElement>(null);
  const previewRef = useRef<HTMLDivElement>(null);
  const dragCounter = useRef(0);
  const splitWrapRef = useRef<HTMLDivElement>(null);
  const dragSplit = useRef<{ startX: number; startSplit: number; width: number } | null>(null);
  const panRef = useRef<HTMLDivElement>(null);
  const panDrag = useRef<{ x: number; y: number; sl: number; st: number } | null>(null);
  const tabListRef = useRef<HTMLDivElement>(null);
  const toolbarMore = useMoreIndicator<HTMLDivElement>();
  const tabsMore = useMoreIndicator<HTMLDivElement>();
  const bgMore = useMoreIndicator<HTMLDivElement>();
  const barMore = useMoreIndicator<HTMLDivElement>();
  const [mounted, setMounted] = useState(false);
  codeRef.current = code;

  /* Mounted only in the browser — SSR renders a lightweight placeholder. */
  useEffect(() => {
    setMounted(true);
    // Load persisted settings (format, bg, zoom, split). An explicit
    // initialFormat prop (landing pages) wins over the stored format.
    try {
      const raw = localStorage.getItem(SETTINGS_KEY);
      if (raw) {
        const s = JSON.parse(raw);
        if (!initialFormat && VALID_FORMATS.includes(s.format)) setFormat(s.format);
        if (VALID_BGS.includes(s.bg)) setBg(s.bg);
        if (VALID_ZOOMS.includes(s.zoom)) setZoom(s.zoom);
        if (typeof s.split === 'number' && s.split >= 30 && s.split <= 70) setSplit(s.split);
      }
    } catch {
      /* ignore */
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Desktop detection (lg breakpoint) — the split divider only applies on lg.
  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1024px)');
    const onChange = () => setIsDesktop(mq.matches);
    onChange();
    mq.addEventListener('change', onChange);
    return () => mq.removeEventListener('change', onChange);
  }, []);

  // Persist settings.
  useEffect(() => {
    if (!mounted) return;
    try {
      localStorage.setItem(SETTINGS_KEY, JSON.stringify({ format, bg, zoom, split }));
    } catch {
      /* ignore */
    }
  }, [format, bg, zoom, split, mounted]);

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

  /* When the code pane reappears after being display:none (mobile pane
     switcher), force CodeMirror to re-measure so content renders correctly. */
  const switchPane = (p: 'code' | 'preview') => {
    setMobilePane(p);
    requestAnimationFrame(() => {
      try {
        viewRef.current?.requestMeasure();
      } catch {
        /* ignore */
      }
      /* Strips inside a display:none pane measure 0 — refresh their "more" fades now that the pane is visible. */
      toolbarMore.update();
      tabsMore.update();
      bgMore.update();
      barMore.update();
    });
  };

  /* Keep the active format tab scrolled into view in the scrollable strip. */
  useEffect(() => {
    if (!mounted || !tabListRef.current) return;
    const el = tabListRef.current.querySelector<HTMLElement>(`[data-format="${format}"]`);
    if (el) {
      el.scrollIntoView({ block: 'nearest', inline: 'center', behavior: 'smooth' });
    }
  }, [format, mounted]);

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
  const previewUrl = useRef<string | null>(null);

  useEffect(() => {
    const host = previewRef.current;
    if (!host) return;
    const revoke = () => {
      if (previewUrl.current) {
        URL.revokeObjectURL(previewUrl.current);
        previewUrl.current = null;
      }
    };
    host.innerHTML = '';
    if (mounted && validation.valid) {
      const { clean } = sanitizeSvg(code);
      const blob = new Blob([clean], { type: 'image/svg+xml;charset=utf-8' });
      revoke();
      const url = URL.createObjectURL(blob);
      previewUrl.current = url;
      const img = document.createElement('img');
      img.src = url;
      img.alt = t.previewLabel;
      img.style.display = 'block';
      img.style.margin = '0 auto';
      img.style.height = 'auto';
      img.draggable = false;
      img.style.width = zoom === 'fit' ? '100%' : `${Number(zoom) * 100}%`;
      img.style.maxWidth = zoom === 'fit' ? '100%' : 'none';
      host.appendChild(img);
    }
    return () => {
      revoke();
    };
  }, [code, zoom, validation.valid, mounted, t.previewLabel]);

  /* ---------- unsafe content warning ---------- */
  const unsafeStripped = useMemo(
    () => mounted && validation.valid && hasUnsafeSvg(code),
    [code, validation.valid, mounted],
  );

  /* ---------- paste support ---------- */
  const applyPastedText = (text: string) => {
    if (!text.includes('<svg')) return false;
    writeEditor(text);
    setFileName('pasted.svg');
    setNotice(null);
    return true;
  };

  const doPaste = async () => {
    try {
      const text = await navigator.clipboard.readText();
      if (!applyPastedText(text)) flash(t.pasteFailed);
    } catch {
      flash(t.pasteFailed);
    }
  };

  useEffect(() => {
    const onPaste = (e: ClipboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.closest('input, textarea, select') ||
          target.closest('.cm-content'))
      ) {
        return; // let the editor / inputs handle their own paste
      }
      const cd = e.clipboardData;
      if (!cd) return;
      if (cd.files && cd.files.length > 0) {
        e.preventDefault();
        readFiles(cd.files);
        return;
      }
      const text = cd.getData('text/plain');
      if (text && text.includes('<svg')) {
        e.preventDefault();
        applyPastedText(text);
      }
    };
    document.addEventListener('paste', onPaste);
    return () => document.removeEventListener('paste', onPaste);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const previewStyle: React.CSSProperties =
    bg === 'checker'
      ? {}
      : { background: bg === 'custom' ? customBg : bg === 'light' ? '#f1f3f4' : bg === 'white' ? '#ffffff' : '#202124', backgroundImage: 'none' };

  /* ---------- file handling ---------- */
  const readFile = (file: File | undefined) => {
    if (!file) return;
    setBatch([]);
    if (file.size > MAX_FILE_SIZE) {
      flash(fill(t.fileTooBig, { max: formatBytes(MAX_FILE_SIZE) }));
      return;
    }
    const reader = new FileReader();
    reader.onload = (e) => {
      const text = String(e.target?.result ?? '');
      writeEditor(text);
      setFileName(file.name || 'image.svg');
      setNotice(null);
    };
    reader.readAsText(file);
  };

  /* Read multiple files (batch mode). Single file → same flow as readFile. */
  const readFiles = (files: FileList | File[] | undefined | null) => {
    if (!files) return;
    const list = Array.from(files);
    if (list.length <= 1) {
      readFile(list[0]);
      return;
    }
    const items: { name: string; text: string }[] = [];
    let pending = list.length;
    const finish = () => {
      if (items.length > 0) {
        setBatch(items);
        writeEditor(items[0].text);
        setFileName(items[0].name);
        setNotice(null);
      } else {
        setBatch([]);
      }
    };
    for (const file of list) {
      if (file.size > MAX_FILE_SIZE) {
        flash(fill(t.fileTooBig, { max: formatBytes(MAX_FILE_SIZE) }));
        pending -= 1;
        if (pending === 0) finish();
        continue;
      }
      const reader = new FileReader();
      reader.onload = (e) => {
        items.push({ name: file.name || 'image.svg', text: String(e.target?.result ?? '') });
        pending -= 1;
        if (pending === 0) finish();
      };
      reader.onerror = () => {
        pending -= 1;
        if (pending === 0) finish();
      };
      reader.readAsText(file);
    }
  };

  /* Download every batch file converted with the current format as a ZIP. */
  const doBatchZip = async () => {
    if (batch.length === 0 || zipping) return;
    setZipping(true);
    try {
      const { default: JSZip } = await import('jszip');
      const zip = new JSZip();
      let added = 0;
      for (const item of batch) {
        if (!validateSvg(item.text).valid) continue;
        const out = getOutput(item.text, format, toComponentName(item.name), item.name);
        zip.file(out.downloadName, out.text);
        added += 1;
      }
      if (added === 0) {
        flash(t.invalidSvg);
        return;
      }
      const blob = await zip.generateAsync({ type: 'blob' });
      downloadBlob(blob, 'vectorforge-batch.zip');
    } catch {
      flash(t.zipFailed);
    } finally {
      setZipping(false);
    }
  };

  /* Split-pane drag divider (lg screens only). */
  const onSplitDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0) return;
    const el = splitWrapRef.current;
    if (!el) return;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      /* synthetic events may have no active pointer; drag still works */
    }
    dragSplit.current = { startX: e.clientX, startSplit: split, width: el.getBoundingClientRect().width };
    document.body.style.userSelect = 'none';
  };
  const onSplitMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = dragSplit.current;
    if (!d) return;
    const pct = d.startSplit + ((e.clientX - d.startX) / d.width) * 100;
    setSplit(Math.min(70, Math.max(30, pct)));
  };
  const onSplitUp = () => {
    dragSplit.current = null;
    document.body.style.userSelect = '';
  };

  /* Grab-to-scroll on the preview container. */
  const onPanDown = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (e.button !== 0 || !panRef.current) return;
    try {
      (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    } catch {
      /* synthetic events may have no active pointer; pan still works */
    }
    panDrag.current = {
      x: e.clientX,
      y: e.clientY,
      sl: panRef.current.scrollLeft,
      st: panRef.current.scrollTop,
    };
  };
  const onPanMove = (e: ReactPointerEvent<HTMLDivElement>) => {
    const d = panDrag.current;
    const el = panRef.current;
    if (!d || !el) return;
    el.scrollLeft = d.sl - (e.clientX - d.x);
    el.scrollTop = d.st - (e.clientY - d.y);
  };
  const onPanUp = () => {
    panDrag.current = null;
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
      flash(fill(t.optimizedSaved, { before: formatBytes(r.before), after: formatBytes(r.after), pct: r.savedPct }));
    } catch {
      flash(t.optimizeFailed);
    } finally {
      setOptimizing(false);
    }
  };

  const btn =
    'inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:bg-surface-2 disabled:cursor-not-allowed disabled:opacity-50';
  /* Primary variant without bg-surface/text-text: in the generated CSS those
     utilities sort after bg-accent/text-accent-ink and would override them. */
  const btnPrimary =
    'inline-flex min-h-[44px] shrink-0 items-center gap-2 rounded-full border border-transparent bg-accent px-4 py-2 text-sm font-medium text-accent-ink transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-50';

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
        readFiles(e.dataTransfer.files);
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

      {/* Toolbar — single scrollable row on mobile, wraps on sm+ */}
      <div className="relative mb-4">
        <div
          ref={toolbarMore.ref}
          onScroll={toolbarMore.update}
          className="scrollbar-none flex flex-nowrap items-center gap-2 overflow-x-auto pe-10 sm:flex-wrap sm:overflow-visible sm:pe-0"
        >
        <input
          ref={fileInput}
          type="file"
          accept="image/svg+xml,.svg"
          multiple
          className="sr-only"
          aria-label={t.upload}
          onChange={(e) => readFiles(e.target.files)}
        />
        <button className={btnPrimary} onClick={() => fileInput.current?.click()}>
          <UploadSimple size={18} weight="bold" /> {t.upload}
        </button>
        <button className={btn} onClick={doPaste} aria-label={t.paste}>
          <ClipboardText size={18} weight="bold" /> {t.paste}
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
        <ScrollMore show={toolbarMore.more} fromClass="from-[var(--bg)]" />
      </div>

      {/* Batch bar — shown when more than one file was loaded. */}
      {batch.length > 1 && (
        <div className="mb-4 flex flex-wrap items-center gap-2 rounded-2xl border border-border bg-surface px-4 py-2.5" role="group" aria-label={fill(t.batchFiles, { n: batch.length })}>
          <span className="text-sm font-medium text-muted">{fill(t.batchFiles, { n: batch.length })}</span>
          <div className="flex max-w-full flex-wrap items-center gap-1.5">
            {batch.map((b, i) => (
              <button
                key={`${i}-${b.name}`}
                onClick={() => {
                  writeEditor(b.text);
                  setFileName(b.name);
                  setNotice(null);
                }}
                title={b.name}
                aria-label={b.name}
                className={`max-w-[160px] truncate rounded-full border px-3 py-1 text-xs font-medium transition-colors ${
                  b.name === fileName
                    ? 'border-accent bg-accent-soft text-accent'
                    : 'border-border text-muted hover:text-text'
                }`}
              >
                {b.name}
              </button>
            ))}
          </div>
          <div className="ms-auto flex items-center gap-2">
            <button className={`${btn}`} onClick={doBatchZip} disabled={zipping}>
              <DownloadSimple size={18} weight="bold" /> {zipping ? '…' : t.batchDownload}
            </button>
            <button className={`${btn}`} onClick={() => setBatch([])} aria-label={t.clear} title={t.clear}>
              <Trash size={18} weight="bold" />
            </button>
          </div>
        </div>
      )}

      {/* Mobile pane switcher — below lg only; on lg both panes always show. */}
      <div
        className="mb-3 flex items-center gap-1 rounded-full border border-border bg-surface p-1 lg:hidden"
        role="tablist"
        aria-label={`${t.editorLabel} / ${t.previewLabel}`}
      >
        {(['code', 'preview'] as const).map((p) => (
          <button
            key={p}
            role="tab"
            aria-selected={mobilePane === p}
            onClick={() => switchPane(p)}
            className={`flex min-h-[44px] flex-1 items-center justify-center rounded-full px-3 text-sm font-medium transition-colors ${
              mobilePane === p ? 'bg-accent text-accent-ink' : 'text-muted hover:bg-surface-2 hover:text-text'
            }`}
          >
            {p === 'code' ? t.editorLabel : t.previewLabel}
          </button>
        ))}
      </div>

      {/* Editor + Preview */}
      <div
        ref={splitWrapRef}
        className="grid gap-4 lg:gap-3"
        style={isDesktop ? { gridTemplateColumns: `${split}% 14px 1fr` } : undefined}
      >
        <div
          className={`overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)] ${
            mobilePane === 'code' ? 'block' : 'hidden'
          } lg:block`}
        >
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <h2 className="text-sm font-semibold">{t.editorLabel}</h2>
            <span className="truncate text-xs text-muted" title={fileName}>{fileName}</span>
          </div>
          <div ref={editorHost} dir="ltr" className="h-[380px] sm:h-[440px]" aria-label={t.editorLabel} />
        </div>

        {/* Drag handle — desktop (lg) only; hidden below lg so mobile stacks unchanged. */}
        <div
          className="hidden select-none items-center justify-center lg:flex"
          role="separator"
          aria-orientation="vertical"
          aria-label={t.resizeLabel}
          style={{ cursor: 'col-resize' }}
          onPointerDown={onSplitDown}
          onPointerMove={onSplitMove}
          onPointerUp={onSplitUp}
          onPointerCancel={onSplitUp}
        >
          <div className="h-20 w-1.5 rounded-full bg-border" />
        </div>

        <div
          className={`flex-col overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)] ${
            mobilePane === 'preview' ? 'flex' : 'hidden'
          } lg:flex`}
        >
          <div className="flex flex-wrap items-center gap-2 border-b border-border px-4 py-2.5">
            <h2 className="me-auto text-sm font-semibold">{t.previewLabel}</h2>
            <div className="flex items-center gap-1" role="group" aria-label={t.zoom}>
              {(['fit', 0.5, 1, 2] as Zoom[]).map((z) => (
                <button
                  key={String(z)}
                  onClick={() => setZoom(z)}
                  aria-pressed={zoom === z}
                  className={`min-h-[40px] rounded-lg px-2.5 text-xs font-medium ${zoom === z ? 'bg-accent text-accent-ink' : 'text-muted hover:bg-surface-2 hover:text-text'}`}
                >
                  {z === 'fit' ? t.zoomFit : `${Number(z) * 100}%`}
                </button>
              ))}
            </div>
          </div>
          {unsafeStripped && (
            <div role="status" className="border-b border-amber-500/30 bg-amber-500/10 px-4 py-2 text-xs font-medium text-amber-700 dark:text-amber-400">
              {t.unsafeStripped}
            </div>
          )}
          <div className="relative">
            <div
              ref={bgMore.ref}
              onScroll={bgMore.update}
              className="scrollbar-none flex flex-nowrap items-center gap-1.5 overflow-x-auto py-2 pe-12 ps-4 sm:flex-wrap sm:overflow-visible sm:pe-4"
              role="group"
              aria-label={t.background}
            >
            <span className="me-1 shrink-0 text-xs text-muted">{t.background}:</span>
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
                className={`min-h-[40px] shrink-0 rounded-full border px-3 text-xs font-medium ${bg === o.id ? 'border-accent bg-accent-soft text-accent' : 'border-border text-muted hover:text-text'}`}
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
            <ScrollMore show={bgMore.more} fromClass="from-[var(--surface)]" />
          </div>
          <div
            ref={panRef}
            className={`checkerboard relative flex-1 cursor-grab overflow-auto p-6 active:cursor-grabbing ${bg === 'checker' ? '' : ''}`}
            style={previewStyle}
            onPointerDown={onPanDown}
            onPointerMove={onPanMove}
            onPointerUp={onPanUp}
            onPointerCancel={onPanUp}
          >
            {validation.valid ? (
              <div ref={previewRef} className="mx-auto max-w-full" />
            ) : (
              <div className="flex h-full min-h-[200px] flex-col items-center justify-center gap-2 text-center">
                <X size={28} weight="bold" className="text-danger" />
                <p className="font-semibold text-danger">{t.invalidSvg}</p>
                <p className="max-w-xs text-sm text-muted">{code.trim() ? t.invalidHint : t.emptyHint}</p>
                {validation.detail && (
                  <p dir="ltr" className="max-w-md break-words px-4 font-mono text-xs text-muted/80">
                    {validation.detail}
                  </p>
                )}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Output formats — tab strip on top (one scrollable row on mobile), actions in the card's bottom bar */}
      <div className="mt-4 overflow-hidden rounded-2xl border border-border bg-surface shadow-[var(--shadow-soft)]">
        <div className="relative">
          <div
            ref={(el) => {
              tabListRef.current = el;
              tabsMore.ref.current = el;
            }}
            onScroll={tabsMore.update}
            className="scrollbar-none flex flex-nowrap items-center gap-1 overflow-x-auto border-b border-border py-2 pe-12 ps-3 sm:flex-wrap sm:overflow-visible sm:pe-3"
            role="tablist"
            aria-label={t.formatsLabel}
          >
            {FORMATS.map((f) => (
              <button
                key={f.id}
                role="tab"
                data-format={f.id}
                aria-selected={format === f.id}
                onClick={() => setFormat(f.id)}
                className={`min-h-[44px] shrink-0 rounded-full px-3.5 text-sm font-medium transition-colors ${format === f.id ? 'bg-accent text-accent-ink' : 'text-muted hover:bg-surface-2 hover:text-text'}`}
              >
                {t[f.key]}
              </button>
            ))}
          </div>
          <ScrollMore show={tabsMore.more} fromClass="from-[var(--surface)]" />
        </div>
        <pre
          dir="ltr"
          className="max-h-[320px] overflow-auto bg-code-bg p-4 font-mono text-[13px] leading-relaxed text-text"
          aria-label={output ? output.downloadName : 'output'}
        >
          <code>{output ? output.text : ''}</code>
        </pre>
        {/* Action bar — bottom of the card; ONE scrollable row like the other strips. */}
        <div className="relative border-t border-border">
          <div
            ref={barMore.ref}
            onScroll={barMore.update}
            className="scrollbar-none flex flex-nowrap items-center gap-2 overflow-x-auto py-2.5 pe-12 ps-3 sm:flex-wrap sm:overflow-visible sm:pe-3"
          >
            <button className={btnPrimary} onClick={doCopy} disabled={!output}>
              {copied ? <Check size={18} weight="bold" /> : <Copy size={18} weight="bold" />}
              {copied ? t.copied : t.copy}
            </button>
            <button className={btn} onClick={doDownload} disabled={!output}>
              <DownloadSimple size={18} weight="bold" /> {t.download}
            </button>
            <div className="flex items-center gap-1 sm:ms-auto" role="group" aria-label={t.pngExport}>
              <span className="me-0.5 text-xs font-medium text-muted">{t.pngExport}</span>
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
          <ScrollMore show={barMore.more} fromClass="from-[var(--surface)]" />
        </div>
      </div>

      {/* Stats bar */}
      <dl className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4" aria-label={t.statsLabel}>
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
