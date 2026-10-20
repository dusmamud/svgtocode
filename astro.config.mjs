import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export const LOCALES = [
  'en','hi','es','fr','de','pt','ru','ja','ko','zh-cn','ar','bn','as','ur',
  'ta','te','mr','id','tr','it','nl','pl','vi',
];

// NOTE: this list mirrors FULLY_TRANSLATED in src/i18n/ui.ts.
// All 23 locales have full translations (completed 2026-10-18), so every
// locale gets hreflang alternates and sitemap entries.
const FULLY_TRANSLATED = [
  'en', 'hi', 'es', 'pt', 'fr', 'de', 'id', 'ja',
  'ru', 'ko', 'zh-cn', 'ar', 'bn', 'as', 'ur', 'ta', 'te', 'mr',
  'tr', 'it', 'nl', 'pl', 'vi',
];

// Standalone English content pages linked from the nav.
const STATIC_PAGES = ['about', 'how-it-works'];

// Dedicated English landing pages (each preselects an output format).
const TOOL_SLUGS = [
  'svg-to-jsx',
  'svg-to-react',
  'svg-to-base64',
  'svg-to-data-uri',
  'svg-optimizer',
  'svg-to-png',
];

export default defineConfig({
  site: 'https://svgtocode.dusrel.com',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: Object.fromEntries(FULLY_TRANSLATED.map((l) => [l, l])),
      },
      serialize: (item) => {
        const path = new URL(item.url).pathname;
        const segs = path.split('/').filter(Boolean);
        let priority = 0.6;
        let changefreq = 'monthly';
        if (path === '/') {
          priority = 1.0;
          changefreq = 'weekly';
        } else if (segs.length === 1) {
          // Locale homes and English tool pages are the main entry points.
          priority = FULLY_TRANSLATED.includes(segs[0]) || TOOL_SLUGS.includes(segs[0]) ? 0.9 : 0.5;
        } else if (segs.length === 2) {
          priority = TOOL_SLUGS.includes(segs[1]) ? 0.8 : 0.5;
        }
        return { ...item, priority, changefreq };
      },
      filter: (page) => {
        const path = new URL(page).pathname;
        if (path === '/') return true;
        const m = path.match(/^\/([a-z0-9-]+)(?:\/([a-z0-9-]+))?\/$/);
        if (!m) return false;
        const [, a, b] = m;
        if (!b) {
          return (FULLY_TRANSLATED.includes(a) && a !== 'en') || TOOL_SLUGS.includes(a) || STATIC_PAGES.includes(a);
        }
        // Localized sub-pages: /<locale>/about/, /<locale>/how-it-works/ and
        // /<locale>/<tool-slug>/ (privacy stays out everywhere — noindex by design).
        return FULLY_TRANSLATED.includes(a) && a !== 'en' && (STATIC_PAGES.includes(b) || TOOL_SLUGS.includes(b));
      },
    }),
  ],
  i18n: {
    defaultLocale: 'en',
    locales: LOCALES,
    routing: { prefixDefaultLocale: false },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
