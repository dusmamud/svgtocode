# SvgToCode — SVG to Code Converter

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

23 locales configured: `en` (default, prefix-less), `hi`, `es`, `fr`, `de`, `pt`, `ru`,
`ja`, `ko`, `zh-cn`, `ar`, `bn`, `as`, `ur`, `ta`, `te`, `mr`, `id`, `tr`, `it`, `nl`, `pl`, `vi`.

- **Full native UI translations (23/23)** — completed 2026-10-18. Every locale
  has a complete dictionary in `src/i18n/ui.ts`, its own static route, correct
  `<html lang>` (+ `dir="rtl"` for `ar`/`ur`), canonical, localized
  `<title>`/meta description, and is included in `hreflang` alternates and the
  sitemap (driven by `FULLY_TRANSLATED` in `src/i18n/ui.ts`, consumed by
  `astro.config.mjs` + `Layout.astro`).
- To add a locale, add it to `LOCALES`, add a dictionary next to the others in
  `src/i18n/ui.ts`, return it from `getDict`, and add it to `FULLY_TRANSLATED`
  (sitemap + hreflang pick it up automatically).

## Deploy to Cloudflare Pages

Production deploys run through **GitHub Actions** (`.github/workflows/deploy.yml`) —
Cloudflare's Git integration is not used.

- **Target:** Cloudflare Pages project `svg2code-dr` (https://svg2code-dr.pages.dev),
  production domain https://svgtocode.dusrel.com.
- **Flow:** every push to `main` runs a verify job (typecheck + tests + build) first;
  only if it passes does the deploy job publish the built `dist/` with Wrangler
  (`pages deploy dist --project-name=svg2code-dr --branch main`).
- **Required repo secrets** (Settings → Secrets and variables → Actions):
  `CLOUDFLARE_API_TOKEN` (custom token, single permission
  *Account → Cloudflare Pages → Edit*) and `CLOUDFLARE_ACCOUNT_ID`.
  Never commit these values anywhere.
- Node version comes from `.nvmrc`. Every locale is a static HTML file,
  so no functions/SSR config is needed.

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
  i18n/ui.ts          # dictionaries (all 23 locales fully translated)
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

Copyright (c) 2026 dusmamud. All rights reserved — this project is **not** open source. The code is publicly viewable for reference only; copying, modifying, or hosting it (in original or modified form) requires prior written permission. See [LICENSE](./LICENSE).
