# VectorForge — SVG to Code Converter

A professional, premium, privacy-first SVG ⇄ code converter. 100% client-side:
nothing is ever uploaded to a server.

## Features

- **Upload via file picker or drag-and-drop** (accepts `image/svg+xml`), plus paste/edit code directly
- **CodeMirror 6 editor** — line numbers, XML syntax highlighting, auto light/dark theme
- **Live preview** with background options (transparency checkerboard, light, white, dark, custom color) and zoom (fit / 50% / 100% / 200%)
- **Validation** — invalid markup shows a clear "Not a valid SVG" state instead of crashing
- **Output formats** — Raw SVG, JSX, typed React Component (`.tsx` with props), HTML `<img>` tag, CSS Data-URI, Base64
- **JSX conversion** — full attribute mapping (`class`→`className`, `stroke-width`→`strokeWidth`, `xlink:href`→`xlinkHref`, …), inline `style="…"` → style objects, `<!-- -->` → `{/* */}`, `xmlns` stripped from React components
- **Optimize with SVGO** (browser build, multipass) with visible before → after size and % saved; **Prettify** and **Minify** buttons
- **Copy to clipboard** (with "Copied" feedback), **Download** of the current output, **PNG export at 1x/2x/4x** via canvas
- **Stats bar** — file size, element count, viewBox, dimensions
- **Sample SVG** and **Clear** buttons, keyboard-accessible controls with aria labels
- **Light / Dark / System theme** — persisted in `localStorage`, applied by an inline `<head>` script before paint (no flash)
- **22 locales** with per-locale routes, SEO meta, hreflang, sitemap, JSON-LD

## Tech stack

Astro 5 (static) + `@astrojs/react` + `@astrojs/sitemap` · React 19 + TypeScript (strict) ·
Tailwind CSS v4 (`@tailwindcss/vite`, CSS-variable theming + `@custom-variant dark`) ·
`@phosphor-icons/react` (named imports only) · CodeMirror 6 (`codemirror`, `@codemirror/lang-xml`) ·
SVGO 3 browser build (`svgo/dist/svgo.browser.js`, bundled — no fallback needed) · plain React state (Zustand not needed at this size).

## Setup

```bash
npm install
npm run dev      # local dev server
npm run build    # static build -> dist/
npm run preview  # serve the built site
```

Requires Node 20+ (tested on Node 24).

## i18n status

22 locales configured: `en` (default, prefix-less), `hi`, `es`, `fr`, `de`, `pt`, `ru`,
`ja`, `ko`, `zh-cn`, `ar`, `bn`, `ur`, `ta`, `te`, `mr`, `id`, `tr`, `it`, `nl`, `pl`, `vi`.

- **Full native UI translations: `en` and `hi`.**
- All other locales are **scaffolded**: each gets its own static route, correct
  `<html lang>` (+ `dir="rtl"` for `ar`/`ur`), canonical, and English-fallback
  `<title>`/meta description — but until translated they are excluded from
  `hreflang` alternates and the sitemap, and carry `<meta name="robots"
  content="noindex, follow" />` (see `astro.config.mjs` + `Layout.astro`).
- To translate a locale, add a dictionary next to `en`/`hi` in `src/i18n/ui.ts`
  and return it from `getDict`. Once `isFullyTranslated(locale)` is true, add
  the locale to `FULLY_TRANSLATED` in `astro.config.mjs` (sitemap + hreflang
  pick it up automatically) — or move the canonical locale list to a shared
  module if `astro.config.mjs` and `ui.ts` drift.

## Deploy to Cloudflare Pages

1. Push this folder to a Git repo (GitHub/GitLab).
2. Cloudflare dashboard → **Workers & Pages** → Create → Pages → connect repo.
3. Build settings: **Framework preset:** Astro · **Build command:** `npm run build` ·
   **Build output directory:** `dist` · Node 20+ (set `NODE_VERSION=20` env var if needed).
4. Deploy. Every locale is a static HTML file, so no functions/SSR config is needed.
5. (Optional) Add your custom domain and update `site:` in `astro.config.mjs`,
   plus the `Sitemap:` line in `public/robots.txt`.

## Project structure

```
src/
  components/
    Converter.tsx     # main tool island (client:load)
    ThemeToggle.tsx   # light/dark/system toggle island
    SitePage.astro    # shared header/main/footer
  layouts/Layout.astro# <head>: theme script, SEO, JSON-LD
  pages/
    index.astro       # en (prefix-less)
    [locale]/index.astro # 21 other locales via getStaticPaths
  lib/svg.ts          # pure conversion/validation/stats logic
  i18n/ui.ts          # dictionaries (en, hi full; others scaffolded)
  styles/global.css   # Tailwind v4 + design tokens
public/
  favicon.svg  robots.txt  _headers   # _headers = security/CSP + cache rules (Cloudflare Pages)
```

All conversion logic lives in `src/lib/svg.ts` as pure, framework-free functions —
easy to unit test or reuse.

## Security

This tool processes **untrusted SVG**. Before rendering the preview, the SVG is
sanitized (`sanitizeSvg` in `src/lib/svg.ts`): dangerous elements (`<script>`,
`<foreignObject>`, `on*` handlers, `javascript:` URLs, …) are stripped, and a
warning is shown when anything was removed. The preview is rendered in an image
context (`<img>` with a blob URL), so previewed SVG cannot run scripts. **Nothing
is uploaded anywhere** — everything runs 100% in your browser.

## License

MIT — see [LICENSE](./LICENSE).
