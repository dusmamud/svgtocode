import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export const LOCALES = [
  'en','hi','es','fr','de','pt','ru','ja','ko','zh-cn','ar','bn','ur',
  'ta','te','mr','id','tr','it','nl','pl','vi',
];

// NOTE: this list mirrors FULLY_TRANSLATED in src/i18n/ui.ts.
// Only fully translated locales (en, hi) get hreflang alternates and sitemap
// entries; the other 20 locale routes still build and work, but are
// de-indexed (noindex meta in Layout.astro) until their translations land.
const FULLY_TRANSLATED = ['en', 'hi'];

export default defineConfig({
  site: 'https://svgtocode.dusyn.in',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: Object.fromEntries(FULLY_TRANSLATED.map((l) => [l, l])),
      },
      filter: (page) => {
        const path = new URL(page).pathname;
        return path === '/' || path === '/hi/';
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
