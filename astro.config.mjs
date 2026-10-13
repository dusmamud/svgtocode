import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export const LOCALES = [
  'en','hi','es','fr','de','pt','ru','ja','ko','zh-cn','ar','bn','ur',
  'ta','te','mr','id','tr','it','nl','pl','vi',
];

const HREFLANG = {
  'en': 'en', 'hi': 'hi', 'es': 'es', 'fr': 'fr', 'de': 'de', 'pt': 'pt',
  'ru': 'ru', 'ja': 'ja', 'ko': 'ko', 'zh-cn': 'zh-CN', 'ar': 'ar',
  'bn': 'bn', 'ur': 'ur', 'ta': 'ta', 'te': 'te', 'mr': 'mr', 'id': 'id',
  'tr': 'tr', 'it': 'it', 'nl': 'nl', 'pl': 'pl', 'vi': 'vi',
};

export default defineConfig({
  site: 'https://vectorforge.dev',
  output: 'static',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: HREFLANG,
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
