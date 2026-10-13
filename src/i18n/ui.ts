/* UI string dictionaries for VectorForge.
   Full translations: en, hi. All other locales fall back to English
   strings (scaffolded) while still getting their own route, <html lang>,
   and localized <title>/<description> meta. See README.md "i18n status". */

export const LOCALES = [
  'en','hi','es','fr','de','pt','ru','ja','ko','zh-cn','ar','bn','ur',
  'ta','te','mr','id','tr','it','nl','pl','vi',
] as const;

export type Locale = (typeof LOCALES)[number];

export const RTL_LOCALES = new Set(['ar', 'ur']);

export const LOCALE_NAMES: Record<string, string> = {
  en: 'English', hi: 'हिन्दी', es: 'Español', fr: 'Français', de: 'Deutsch',
  pt: 'Português', ru: 'Русский', ja: '日本語', ko: '한국어', 'zh-cn': '简体中文',
  ar: 'العربية', bn: 'বাংলা', ur: 'اردو', ta: 'தமிழ்', te: 'తెలుగు',
  mr: 'मराठी', id: 'Bahasa Indonesia', tr: 'Türkçe', it: 'Italiano',
  nl: 'Nederlands', pl: 'Polski', vi: 'Tiếng Việt',
};

const en = {
  siteTitle: 'VectorForge — SVG to Code Converter',
  siteDescription:
    'Convert SVG images to code and back: JSX, React components, data URIs and more. Free, private, and runs entirely in your browser.',
  tagline: 'Convert SVG images to code — and code back to images.',
  hint: 'Upload an SVG, drop it anywhere, or paste code below.',
  upload: 'Upload SVG',
  paste: 'Paste',
  pasteFailed:
    'Paste failed — clipboard access was blocked. Paste with Ctrl+V anywhere on the page instead.',
  fileTooBig: (max: string) => `File is too large — maximum size is ${max}.`,
  dropHere: 'Drop your SVG file here',
  sample: 'Sample',
  clear: 'Clear',
  optimize: 'Optimize',
  prettify: 'Prettify',
  minify: 'Minify',
  copy: 'Copy',
  copied: 'Copied!',
  download: 'Download',
  pngExport: 'PNG',
  editorLabel: 'SVG code editor',
  previewLabel: 'SVG preview',
  invalidSvg: 'Not a valid SVG',
  invalidHint: 'Paste SVG markup or drop an .svg file to see the preview.',
  emptyHint: 'Your SVG preview will appear here.',
  unsafeStripped: 'Unsafe content (scripts or event handlers) was stripped from the preview.',
  background: 'Background',
  bgChecker: 'Transparency',
  bgLight: 'Light',
  bgWhite: 'White',
  bgDark: 'Dark',
  bgCustom: 'Custom',
  zoom: 'Zoom',
  zoomFit: 'Fit',
  statsSize: 'Size',
  statsElements: 'Elements',
  statsViewBox: 'ViewBox',
  statsDimensions: 'Dimensions',
  tabRaw: 'Raw SVG',
  tabJsx: 'JSX',
  tabComponent: 'React Component',
  tabImg: 'HTML <img>',
  tabCss: 'CSS Data-URI',
  tabBase64: 'Base64',
  optimizedSaved: (before: string, after: string, pct: number) =>
    `Optimized: ${before} → ${after} (−${pct}%)`,
  optimizeFailed: 'Optimization failed.',
  copyFailed: 'Copy failed — your browser blocked clipboard access.',
  pngFailed: 'PNG export failed for this SVG.',
  themeLabel: 'Theme',
  themeLight: 'Light',
  themeDark: 'Dark',
  themeSystem: 'System',
  languageLabel: 'Language',
  howTitle: 'How it works',
  how1: 'SVG files are already code. Drop one in and its markup appears in the editor — edit it and the preview updates live.',
  how2: 'Switch output tabs to get JSX, a typed React component, a data-URI, or Base64 — then copy or download.',
  how3: 'Everything runs 100% in your browser. Nothing is uploaded anywhere.',
  footerMade: 'VectorForge — a free SVG toolkit. All processing happens locally in your browser.',
  aboutTitle: 'About this tool',
};

const hi: typeof en = {
  siteTitle: 'VectorForge — SVG to Code Converter',
  siteDescription:
    'SVG इमेज को कोड में और कोड को इमेज में बदलें: JSX, React components, data URIs और भी बहुत कुछ। मुफ़्त, प्राइवेट, और पूरी तरह आपके ब्राउज़र में चलता है।',
  tagline: 'SVG इमेज को कोड में बदलें — और कोड को वापस इमेज में।',
  hint: 'SVG अपलोड करें, कहीं भी ड्रॉप करें, या नीचे कोड पेस्ट करें।',
  upload: 'SVG अपलोड करें',
  paste: 'पेस्ट करें',
  pasteFailed:
    'पेस्ट विफल — क्लिपबोर्ड एक्सेस रोक दिया गया। इसके बजाय पेज पर कहीं भी Ctrl+V से पेस्ट करें।',
  fileTooBig: (max: string) => `फ़ाइल बहुत बड़ी है — अधिकतम आकार ${max} है।`,
  dropHere: 'अपनी SVG फ़ाइल यहाँ ड्रॉप करें',
  sample: 'नमूना',
  clear: 'साफ़ करें',
  optimize: 'ऑप्टिमाइज़',
  prettify: 'सजाएँ',
  minify: 'छोटा करें',
  copy: 'कॉपी',
  copied: 'कॉपी हो गया!',
  download: 'डाउनलोड',
  pngExport: 'PNG',
  editorLabel: 'SVG कोड एडिटर',
  previewLabel: 'SVG प्रीव्यू',
  invalidSvg: 'मान्य SVG नहीं है',
  invalidHint: 'प्रीव्यू देखने के लिए SVG कोड पेस्ट करें या .svg फ़ाइल ड्रॉप करें।',
  emptyHint: 'आपका SVG प्रीव्यू यहाँ दिखेगा।',
  unsafeStripped: 'प्रीव्यू से असुरक्षित सामग्री (स्क्रिप्ट या इवेंट हैंडलर) हटा दी गई है।',
  background: 'बैकग्राउंड',
  bgChecker: 'पारदर्शी',
  bgLight: 'हल्का',
  bgWhite: 'सफ़ेद',
  bgDark: 'गहरा',
  bgCustom: 'कस्टम',
  zoom: 'ज़ूम',
  zoomFit: 'फिट',
  statsSize: 'आकार',
  statsElements: 'एलिमेंट्स',
  statsViewBox: 'ViewBox',
  statsDimensions: 'आयाम',
  tabRaw: 'Raw SVG',
  tabJsx: 'JSX',
  tabComponent: 'React Component',
  tabImg: 'HTML <img>',
  tabCss: 'CSS Data-URI',
  tabBase64: 'Base64',
  optimizedSaved: (before: string, after: string, pct: number) =>
    `ऑप्टिमाइज़ हुआ: ${before} → ${after} (−${pct}%)`,
  optimizeFailed: 'ऑप्टिमाइज़ेशन विफल रहा।',
  copyFailed: 'कॉपी विफल — ब्राउज़र ने क्लिपबोर्ड एक्सेस रोक दिया।',
  pngFailed: 'इस SVG के लिए PNG एक्सपोर्ट विफल रहा।',
  themeLabel: 'थीम',
  themeLight: 'लाइट',
  themeDark: 'डार्क',
  themeSystem: 'सिस्टम',
  languageLabel: 'भाषा',
  howTitle: 'यह कैसे काम करता है',
  how1: 'SVG फ़ाइलें असल में कोड ही होती हैं। एक फ़ाइल ड्रॉप करें और उसका मार्कअप एडिटर में आ जाएगा — एडिट करते ही प्रीव्यू लाइव अपडेट होगा।',
  how2: 'आउटपुट टैब बदलकर JSX, typed React component, data-URI या Base64 पाएँ — फिर कॉपी या डाउनलोड करें।',
  how3: 'सब कुछ 100% आपके ब्राउज़र में चलता है। कुछ भी कहीं अपलोड नहीं होता।',
  footerMade: 'VectorForge — एक मुफ़्त SVG टूलकिट। सारा प्रोसेसिंग आपके ब्राउज़र में ही होती है।',
  aboutTitle: 'इस टूल के बारे में',
};

export type Dict = typeof en;

/** Get the dictionary for a locale (fallback: English). */
export function getDict(locale: string): Dict {
  if (locale === 'hi') return hi;
  return en;
}

/** Check whether a locale has a full native translation. */
export function isFullyTranslated(locale: string): boolean {
  return locale === 'en' || locale === 'hi';
}
