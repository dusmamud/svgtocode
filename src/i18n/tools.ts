/* Landing-page content for the 6 tool pages, in every locale.
   Typed as Record<ToolSlug, Record<Locale, ToolContent>> so the build fails
   if any tool is missing content in any locale — same guarantee as ui.ts. */
import type { Locale } from './ui';
import type { OutputFormat } from '../lib/svg';

export const TOOL_SLUGS = [
  'svg-to-jsx',
  'svg-to-react',
  'svg-to-base64',
  'svg-to-data-uri',
  'svg-optimizer',
  'svg-to-png',
] as const;

export type ToolSlug = (typeof TOOL_SLUGS)[number];

export const TOOL_FORMATS: Record<ToolSlug, OutputFormat> = {
  'svg-to-jsx': 'jsx',
  'svg-to-react': 'component',
  'svg-to-base64': 'base64',
  'svg-to-data-uri': 'css',
  'svg-optimizer': 'raw',
  'svg-to-png': 'raw',
};

export interface ToolContent {
  title: string;
  description: string;
  heading: string;
  intro: string;
  steps: [string, string, string];
  faqs: { q: string; a: string }[];
  howToUse: string;
  faqHeading: string;
  moreTools: string;
}

/* ---------------- English ---------------- */

const jsxEn: ToolContent = {
  title: 'SVG to JSX Converter — Free Online Tool | VectorForge',
  description:
    'Convert SVG markup to JSX in seconds. Free online SVG to JSX converter with automatic attribute renaming, style-object conversion and live preview. Runs 100% in your browser.',
  heading: 'SVG to JSX Converter',
  intro:
    'Paste any SVG and get clean JSX, ready for your React components. VectorForge renames attributes automatically (class becomes className, stroke-width becomes strokeWidth), converts inline styles to style objects and turns XML comments into JSX comments — instantly, with a live preview. Nothing is uploaded; everything happens in your browser.',
  steps: [
    'Paste your SVG markup into the editor, or drop an .svg file anywhere on the page.',
    'The JSX tab is already selected — review the converted output updating live as you type.',
    'Copy the JSX with one click, or download it as a .jsx file for your project.',
  ],
  faqs: [
    {
      q: 'Does this tool upload my SVG to a server?',
      a: 'No. All conversion runs locally in your browser using JavaScript. Your files never leave your device.',
    },
    {
      q: 'Why do attribute names change in JSX?',
      a: 'JSX follows JavaScript naming conventions, so hyphenated SVG attributes like stroke-width must become camelCase (strokeWidth) and class becomes className. This converter applies those mappings automatically.',
    },
    {
      q: 'Can I convert multiple SVGs to JSX at once?',
      a: 'Yes. Drop several files onto the page, switch between them in the batch bar, and download everything as a ZIP with each file converted to JSX.',
    },
  ],
  howToUse: 'How to use',
  faqHeading: 'Frequently asked questions',
  moreTools: 'More SVG tools',
};

const reactEn: ToolContent = {
  title: 'SVG to React Component Converter — Free Online | VectorForge',
  description:
    'Turn any SVG into a typed React (.tsx) component instantly. Free SVG to React component converter with props support, clean output and live preview.',
  heading: 'SVG to React Component Converter',
  intro:
    'Get a production-ready TypeScript React component from any SVG. The generated component accepts standard SVG props, spreads them onto the root element and strips the unnecessary xmlns declaration that triggers React warnings — ready to drop straight into your codebase.',
  steps: [
    'Paste your SVG markup into the editor, or drop an .svg file anywhere on the page.',
    'The React Component tab is already selected — the component name is derived from your file name.',
    'Copy the .tsx code with one click, or download it and import it like any other component.',
  ],
  faqs: [
    {
      q: 'How do I use the generated component?',
      a: 'Import it like any component and pass standard SVG props, for example <SampleIcon width={24} height={24} fill="currentColor" />. Props spread onto the root element.',
    },
    {
      q: 'Why is xmlns removed from the output?',
      a: 'React handles SVG namespaces itself; keeping xmlns causes a console warning, so the converter strips it from the root element.',
    },
    {
      q: 'Does this work with React Native?',
      a: 'This output targets web React. For React Native, switch to the React Native tab to get a react-native-svg component instead.',
    },
  ],
  howToUse: 'How to use',
  faqHeading: 'Frequently asked questions',
  moreTools: 'More SVG tools',
};

const base64En: ToolContent = {
  title: 'SVG to Base64 Converter — Free Online Encoder | VectorForge',
  description:
    'Encode SVG as Base64 online. Free SVG to Base64 converter with Unicode-safe encoding, live preview and one-click copy.',
  heading: 'SVG to Base64 Converter',
  intro:
    "Base64-encode any SVG for places where raw markup won't fit — CSS files, JSON configs or API payloads. Encoding is Unicode-safe (Devanagari, emoji and CJK text survive the round-trip), and the output updates live as you edit the source.",
  steps: [
    'Paste your SVG markup into the editor, or drop an .svg file anywhere on the page.',
    'The Base64 tab is already selected — the encoded string appears in the output pane instantly.',
    'Copy the Base64 string with one click, or download it as a .txt file.',
  ],
  faqs: [
    {
      q: 'Is Base64 output larger than the original SVG?',
      a: 'Yes — Base64 adds roughly 33% overhead. If size matters, prefer a percent-encoded data URI (the CSS Data-URI tab) for CSS, which is usually smaller for SVG.',
    },
    {
      q: 'Why does my Base64 output end with padding characters (=)?',
      a: 'Padding is part of the Base64 specification and decoders expect it. Keep it in the output.',
    },
    {
      q: 'Can Base64 handle Unicode text inside my SVG?',
      a: 'Yes. This tool encodes as UTF-8 first, so non-Latin text and emoji round-trip correctly instead of corrupting.',
    },
  ],
  howToUse: 'How to use',
  faqHeading: 'Frequently asked questions',
  moreTools: 'More SVG tools',
};

const dataUriEn: ToolContent = {
  title: 'SVG to Data URI / CSS Background Generator — Free | VectorForge',
  description:
    'Convert SVG to a CSS-ready data URI for background-image. Free generator with minification, optimized encoding and live preview.',
  heading: 'SVG to Data URI Converter',
  intro:
    'Turn any SVG into a compact data URI you can paste straight into background-image. VectorForge minifies the SVG first and percent-encodes it, which keeps the URI smaller than Base64 for typical icons — and you can see it render in the live preview before copying.',
  steps: [
    'Paste your SVG markup into the editor, or drop an .svg file anywhere on the page.',
    'The CSS Data-URI tab is already selected — the snippet updates live as you edit.',
    'Copy the CSS snippet with one click, or download it as a .css file.',
  ],
  faqs: [
    {
      q: 'Data URI or Base64 — which one is smaller?',
      a: 'For SVG, a percent-encoded data URI is usually smaller than Base64 (you avoid the ~33% encoding overhead), and this tool minifies the SVG first to shrink it further.',
    },
    {
      q: 'Why is the SVG minified before encoding?',
      a: 'Stripping comments, whitespace and metadata shrinks the URI without changing how the image renders.',
    },
    {
      q: 'Does the data URI keep the xmlns attribute?',
      a: 'Yes. Standalone usage (img tags, CSS backgrounds) requires xmlns, so it is preserved here — unlike JSX or React component output.',
    },
  ],
  howToUse: 'How to use',
  faqHeading: 'Frequently asked questions',
  moreTools: 'More SVG tools',
};

const optimizerEn: ToolContent = {
  title: 'SVG Optimizer — Free Online SVGO Tool | VectorForge',
  description:
    'Optimize SVG files online with SVGO. Free SVG optimizer that shrinks file size while preserving the viewBox and visual quality.',
  heading: 'SVG Optimizer',
  intro:
    'Shrink SVG files without changing how they look. VectorForge runs SVGO multipass optimization right in your browser — and deliberately preserves the viewBox, so responsive scaling keeps working after optimization. You see exactly how many bytes and what percentage you saved.',
  steps: [
    'Paste your SVG markup into the editor, or drop an .svg file anywhere on the page.',
    'Press the Optimize button in the toolbar — the editor updates with the minified result.',
    'Check the saved-bytes notice, then copy or download the optimized SVG.',
  ],
  faqs: [
    {
      q: 'Does optimization change how my SVG looks?',
      a: 'No. SVGO only removes redundancy — metadata, excess precision, whitespace. Use the live preview to verify the result renders identically.',
    },
    {
      q: 'Why do you keep the viewBox?',
      a: 'Some optimizers drop the viewBox when width and height are present, which silently breaks responsive scaling. This tool forces viewBox preservation.',
    },
    {
      q: 'Can I get my original SVG back after optimizing?',
      a: 'Yes — just paste or re-drop the original file. Nothing is overwritten unless you copy or download the optimized result.',
    },
  ],
  howToUse: 'How to use',
  faqHeading: 'Frequently asked questions',
  moreTools: 'More SVG tools',
};

const pngEn: ToolContent = {
  title: 'SVG to PNG Converter — Free 1x/2x/4x Export | VectorForge',
  description:
    'Convert SVG to PNG at 1x, 2x and 4x resolution online. Free, unlimited, in-browser SVG to PNG converter with live preview.',
  heading: 'SVG to PNG Converter',
  intro:
    'Export crisp PNGs from any SVG at 1x, 2x or 4x scale — perfect for favicons, app icons and social images. If the SVG lacks explicit dimensions, the viewBox is used automatically, and transparency is preserved.',
  steps: [
    'Paste your SVG markup into the editor, or drop an .svg file anywhere on the page.',
    'Preview the SVG on any background to verify it before exporting.',
    'Pick 1x, 2x or 4x from the PNG export buttons and download your raster image.',
  ],
  faqs: [
    {
      q: 'What resolutions can I export?',
      a: "1x, 2x and 4x of the SVG's natural size, taken from its width/height attributes or its viewBox.",
    },
    {
      q: 'Is transparency preserved in the PNG?',
      a: "Yes — the exported PNG keeps the SVG's alpha channel.",
    },
    {
      q: 'Why does my PNG look different from the preview?',
      a: "External fonts or linked images referenced inside the SVG can't be rasterized in the browser. Convert text to outlines for pixel-perfect results.",
    },
  ],
  howToUse: 'How to use',
  faqHeading: 'Frequently asked questions',
  moreTools: 'More SVG tools',
};

/* ---------------- Hindi ---------------- */

const jsxHi: ToolContent = {
  title: 'SVG से JSX कन्वर्टर — मुफ़्त ऑनलाइन टूल | VectorForge',
  description:
    'सेकंडों में SVG मार्कअप को JSX में बदलें। मुफ़्त ऑनलाइन SVG से JSX कन्वर्टर — ऑटोमैटिक एट्रिब्यूट नाम बदलना, स्टाइल-ऑब्जेक्ट रूपांतरण और लाइव प्रीव्यू के साथ। 100% आपके ब्राउज़र में चलता है।',
  heading: 'SVG से JSX कन्वर्टर',
  intro:
    'कोई भी SVG पेस्ट करें और अपने React कॉम्पोनेंट के लिए तैयार साफ़ JSX पाएं। VectorForge एट्रिब्यूट अपने आप बदल देता है (class बनता है className, stroke-width बनता है strokeWidth), इनलाइन स्टाइल को स्टाइल ऑब्जेक्ट में बदलता है और XML टिप्पणियों को JSX टिप्पणियों में बदल देता है — तुरंत, लाइव प्रीव्यू के साथ। कुछ भी अपलोड नहीं होता; सब कुछ आपके ब्राउज़र में होता है।',
  steps: [
    'अपना SVG मार्कअप एडिटर में पेस्ट करें, या .svg फ़ाइल पेज पर कहीं भी छोड़ें।',
    'JSX टैब पहले से चुना हुआ है — टाइप करते ही बदलता हुआ आउटपुट लाइव देखें।',
    'एक क्लिक में JSX कॉपी करें, या अपने प्रोजेक्ट के लिए .jsx फ़ाइल के रूप में डाउनलोड करें।',
  ],
  faqs: [
    {
      q: 'क्या यह टूल मेरी SVG को सर्वर पर अपलोड करता है?',
      a: 'नहीं। सारा रूपांतरण JavaScript से आपके ब्राउज़र में ही स्थानीय रूप से चलता है। आपकी फ़ाइलें कभी आपके डिवाइस से बाहर नहीं जातीं।',
    },
    {
      q: 'JSX में एट्रिब्यूट के नाम क्यों बदलते हैं?',
      a: 'JSX JavaScript नामकरण नियमों का पालन करता है, इसलिए stroke-width जैसे हाइफ़न वाले SVG एट्रिब्यूट को camelCase (strokeWidth) बनना पड़ता है और class बनता है className। यह कन्वर्टर ये मिलान अपने आप लागू करता है।',
    },
    {
      q: 'क्या मैं एक साथ कई SVG को JSX में बदल सकता हूँ?',
      a: 'हाँ। पेज पर कई फ़ाइलें छोड़ें, बैच बार में उनके बीच स्विच करें, और सब कुछ ZIP के रूप में डाउनलोड करें — हर फ़ाइल JSX में बदली हुई।',
    },
  ],
  howToUse: 'कैसे उपयोग करें',
  faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
  moreTools: 'और SVG टूल',
};

const reactHi: ToolContent = {
  title: 'SVG से React कॉम्पोनेंट कन्वर्टर — मुफ़्त ऑनलाइन | VectorForge',
  description:
    'किसी भी SVG को तुरंत टाइप किए हुए React (.tsx) कॉम्पोनेंट में बदलें। मुफ़्त SVG से React कॉम्पोनेंट कन्वर्टर — प्रॉप्स समर्थन, साफ़ आउटपुट और लाइव प्रीव्यू के साथ।',
  heading: 'SVG से React कॉम्पोनेंट कन्वर्टर',
  intro:
    'किसी भी SVG से प्रोडक्शन-रेडी TypeScript React कॉम्पोनेंट पाएं। बना हुआ कॉम्पोनेंट मानक SVG प्रॉप्स स्वीकार करता है, उन्हें रूट एलिमेंट पर फैलाता है और वह अनावश्यक xmlns घोषणा हटा देता है जो React चेतावनियाँ देती है — सीधे आपके कोडबेस में डालने के लिए तैयार।',
  steps: [
    'अपना SVG मार्कअप एडिटर में पेस्ट करें, या .svg फ़ाइल पेज पर कहीं भी छोड़ें।',
    'React Component टैब पहले से चुना हुआ है — कॉम्पोनेंट का नाम आपकी फ़ाइल के नाम से लिया जाता है।',
    'एक क्लिक में .tsx कोड कॉपी करें, या उसे डाउनलोड करके किसी भी अन्य कॉम्पोनेंट की तरह इम्पोर्ट करें।',
  ],
  faqs: [
    {
      q: 'बने हुए कॉम्पोनेंट का उपयोग कैसे करूँ?',
      a: 'उसे किसी भी कॉम्पोनेंट की तरह इम्पोर्ट करें और मानक SVG प्रॉप्स दें, उदाहरण के लिए <SampleIcon width={24} height={24} fill="currentColor" />। प्रॉप्स रूट एलिमेंट पर फैल जाते हैं।',
    },
    {
      q: 'आउटपुट से xmlns क्यों हटाया जाता है?',
      a: 'React SVG नेमस्पेस खुद संभालता है; xmlns रखे रहने से कंसोल चेतावनी आती है, इसलिए कन्वर्टर उसे रूट एलिमेंट से हटा देता है।',
    },
    {
      q: 'क्या यह React Native के साथ काम करता है?',
      a: 'यह आउटपुट वेब React के लिए है। React Native के लिए React Native टैब पर जाएं — वहाँ react-native-svg कॉम्पोनेंट मिलेगा।',
    },
  ],
  howToUse: 'कैसे उपयोग करें',
  faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
  moreTools: 'और SVG टूल',
};

const base64Hi: ToolContent = {
  title: 'SVG से Base64 कन्वर्टर — मुफ़्त ऑनलाइन एनकोडर | VectorForge',
  description:
    'SVG को Base64 में ऑनलाइन एनकोड करें। मुफ़्त SVG से Base64 कन्वर्टर — Unicode-सुरक्षित एनकोडिंग, लाइव प्रीव्यू और एक-क्लिक कॉपी के साथ।',
  heading: 'SVG से Base64 कन्वर्टर',
  intro:
    'किसी भी SVG को उन जगहों के लिए Base64-एनकोड करें जहाँ कच्चा मार्कअप नहीं चलता — CSS फ़ाइलें, JSON कॉन्फ़िग या API पेलोड। एनकोडिंग Unicode-सुरक्षित है (देवनागरी, इमोजी और CJK टेक्स्ट आने-जाने में सुरक्षित रहते हैं), और स्रोत संपादित करते ही आउटपुट लाइव अपडेट होता है।',
  steps: [
    'अपना SVG मार्कअप एडिटर में पेस्ट करें, या .svg फ़ाइल पेज पर कहीं भी छोड़ें।',
    'Base64 टैब पहले से चुना हुआ है — एनकोड की गई स्ट्रिंग आउटपुट पेन में तुरंत दिखती है।',
    'एक क्लिक में Base64 स्ट्रिंग कॉपी करें, या उसे .txt फ़ाइल के रूप में डाउनलोड करें।',
  ],
  faqs: [
    {
      q: 'क्या Base64 आउटपुट मूल SVG से बड़ा होता है?',
      a: 'हाँ — Base64 लगभग 33% अतिरिक्त जोड़ता है। आकार महत्वपूर्ण हो तो CSS के लिए प्रतिशत-एनकोड किया data URI (CSS Data-URI टैब) चुनें, जो SVG के लिए आमतौर पर छोटा होता है।',
    },
    {
      q: 'मेरा Base64 आउटपुट पैडिंग वर्णों (=) पर क्यों खत्म होता है?',
      a: 'पैडिंग Base64 विनिर्देश का हिस्सा है और डिकोडर उसकी अपेक्षा करते हैं। उसे आउटपुट में रहने दें।',
    },
    {
      q: 'क्या Base64 मेरे SVG के अंदर के Unicode टेक्स्ट को संभाल सकता है?',
      a: 'हाँ। यह टूल पहले UTF-8 में एनकोड करता है, इसलिए गैर-लैटिन टेक्स्ट और इमोजी बिगड़ने के बजाय सही-सलामत आने-जाने करते हैं।',
    },
  ],
  howToUse: 'कैसे उपयोग करें',
  faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
  moreTools: 'और SVG टूल',
};

const dataUriHi: ToolContent = {
  title: 'SVG से Data URI / CSS बैकग्राउंड जनरेटर — मुफ़्त | VectorForge',
  description:
    'SVG को background-image के लिए तैयार CSS data URI में बदलें। मुफ़्त जनरेटर — मिनिफ़िकेशन, बेहतर एनकोडिंग और लाइव प्रीव्यू के साथ।',
  heading: 'SVG से Data URI कन्वर्टर',
  intro:
    'किसी भी SVG को एक संक्षिप्त data URI में बदलें जिसे आप सीधे background-image में पेस्ट कर सकें। VectorForge पहले SVG को मिनिफ़ाई करता है और फिर प्रतिशत-एनकोड करता है, जिससे सामान्य आइकनों के लिए URI Base64 से छोटा रहता है — और कॉपी करने से पहले आप उसे लाइव प्रीव्यू में रेंडर होते देख सकते हैं।',
  steps: [
    'अपना SVG मार्कअप एडिटर में पेस्ट करें, या .svg फ़ाइल पेज पर कहीं भी छोड़ें।',
    'CSS Data-URI टैब पहले से चुना हुआ है — संपादित करते ही स्निपेट लाइव अपडेट होता है।',
    'एक क्लिक में CSS स्निपेट कॉपी करें, या उसे .css फ़ाइल के रूप में डाउनलोड करें।',
  ],
  faqs: [
    {
      q: 'Data URI या Base64 — कौन छोटा है?',
      a: 'SVG के लिए प्रतिशत-एनकोड किया data URI आमतौर पर Base64 से छोटा होता है (लगभग 33% एनकोडिंग ओवरहेड बचता है), और यह टूल पहले SVG को मिनिफ़ाई करके उसे और छोटा करता है।',
    },
    {
      q: 'एनकोडिंग से पहले SVG को मिनिफ़ाई क्यों किया जाता है?',
      a: 'टिप्पणियाँ, रिक्त स्थान और मेटाडेटा हटाने से छवि के रेंडर होने का तरीका बदले बिना URI छोटा हो जाता है।',
    },
    {
      q: 'क्या data URI में xmlns एट्रिब्यूट रहता है?',
      a: 'हाँ। स्वतंत्र उपयोग (img टैग, CSS बैकग्राउंड) के लिए xmlns ज़रूरी है, इसलिए यहाँ वह बना रहता है — JSX या React कॉम्पोनेंट आउटपुट के विपरीत।',
    },
  ],
  howToUse: 'कैसे उपयोग करें',
  faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
  moreTools: 'और SVG टूल',
};

const optimizerHi: ToolContent = {
  title: 'SVG ऑप्टिमाइज़र — मुफ़्त ऑनलाइन SVGO टूल | VectorForge',
  description:
    'SVGO से SVG फ़ाइलों को ऑनलाइन ऑप्टिमाइज़ करें। मुफ़्त SVG ऑप्टिमाइज़र जो viewBox और दृश्य गुणवत्ता बनाए रखते हुए फ़ाइल का आकार घटाता है।',
  heading: 'SVG ऑप्टिमाइज़र',
  intro:
    'SVG फ़ाइलों को बिना उनका रूप बदले छोटा करें। VectorForge SVGO मल्टीपास ऑप्टिमाइज़ेशन सीधे आपके ब्राउज़र में चलाता है — और जानबूझकर viewBox बनाए रखता है, ताकि ऑप्टिमाइज़ेशन के बाद भी रेस्पॉन्सिव स्केलिंग काम करती रहे। आप ठीक-ठीक देखते हैं कि कितने बाइट और कितने प्रतिशत की बचत हुई।',
  steps: [
    'अपना SVG मार्कअप एडिटर में पेस्ट करें, या .svg फ़ाइल पेज पर कहीं भी छोड़ें।',
    'टूलबार में Optimize बटन दबाएं — एडिटर मिनिफ़ाई किए परिणाम के साथ अपडेट हो जाता है।',
    'बचे हुए बाइट की सूचना देखें, फिर ऑप्टिमाइज़ किया SVG कॉपी या डाउनलोड करें।',
  ],
  faqs: [
    {
      q: 'क्या ऑप्टिमाइज़ेशन से मेरी SVG का रूप बदलता है?',
      a: 'नहीं। SVGO केवल अनावश्यकता हटाता है — मेटाडेटा, अतिरिक्त सटीकता, रिक्त स्थान। लाइव प्रीव्यू से जांचें कि परिणाम हूबहू वैसा ही रेंडर होता है।',
    },
    {
      q: 'आप viewBox क्यों बनाए रखते हैं?',
      a: 'कुछ ऑप्टिमाइज़र width और height मौजूद होने पर viewBox हटा देते हैं, जिससे रेस्पॉन्सिव स्केलिंग चुपचाप टूट जाती है। यह टूल viewBox की रक्षा ज़बरदस्ती सुनिश्चित करता है।',
    },
    {
      q: 'ऑप्टिमाइज़ करने के बाद क्या मैं अपनी मूल SVG वापस पा सकता हूँ?',
      a: 'हाँ — बस मूल फ़ाइल फिर से पेस्ट करें या छोड़ें। जब तक आप ऑप्टिमाइज़ किया परिणाम कॉपी या डाउनलोड नहीं करते, कुछ भी ऊपर नहीं लिखा जाता।',
    },
  ],
  howToUse: 'कैसे उपयोग करें',
  faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
  moreTools: 'और SVG टूल',
};

const pngHi: ToolContent = {
  title: 'SVG से PNG कन्वर्टर — मुफ़्त 1x/2x/4x एक्सपोर्ट | VectorForge',
  description:
    'SVG को 1x, 2x और 4x रिज़ॉल्यूशन पर PNG में ऑनलाइन बदलें। मुफ़्त, असीमित, ब्राउज़र-मध्य SVG से PNG कन्वर्टर — लाइव प्रीव्यू के साथ।',
  heading: 'SVG से PNG कन्वर्टर',
  intro:
    'किसी भी SVG से 1x, 2x या 4x स्केल पर साफ़ PNG एक्सपोर्ट करें — फ़ेविकॉन, ऐप आइकन और सोशल छवियों के लिए उत्तम। SVG में स्पष्ट आयाम न हों तो viewBox अपने आप उपयोग होता है, और पारदर्शिता बनी रहती है।',
  steps: [
    'अपना SVG मार्कअप एडिटर में पेस्ट करें, या .svg फ़ाइल पेज पर कहीं भी छोड़ें।',
    'एक्सपोर्ट से पहले जांचने के लिए SVG को किसी भी पृष्ठभूमि पर प्रीव्यू करें।',
    'PNG एक्सपोर्ट बटनों से 1x, 2x या 4x चुनें और अपनी रास्टर छवि डाउनलोड करें।',
  ],
  faqs: [
    {
      q: 'मैं किन रिज़ॉल्यूशन पर एक्सपोर्ट कर सकता हूँ?',
      a: 'SVG के प्राकृतिक आकार के 1x, 2x और 4x — उसके width/height एट्रिब्यूट या उसके viewBox से लिए गए।',
    },
    {
      q: 'क्या PNG में पारदर्शिता बनी रहती है?',
      a: 'हाँ — एक्सपोर्ट किया गया PNG SVG का अल्फ़ा चैनल बनाए रखता है।',
    },
    {
      q: 'मेरा PNG प्रीव्यू से अलग क्यों दिखता है?',
      a: 'SVG के अंदर संदर्भित बाहरी फ़ॉन्ट या जुड़ी हुई छवियाँ ब्राउज़र में रास्टराइज़ नहीं हो सकतीं। पिक्सेल-परफ़ेक्ट परिणामों के लिए टेक्स्ट को आउटलाइन में बदलें।',
    },
  ],
  howToUse: 'कैसे उपयोग करें',
  faqHeading: 'अक्सर पूछे जाने वाले प्रश्न',
  moreTools: 'और SVG टूल',
};

/* ---------------- Spanish ---------------- */

const jsxEs: ToolContent = {
  title: 'Conversor de SVG a JSX — Herramienta en línea gratuita | VectorForge',
  description:
    'Convierte marcado SVG a JSX en segundos. Conversor en línea gratuito de SVG a JSX con cambio automático de nombres de atributos, conversión de estilos a objetos y vista previa en vivo. Funciona 100 % en tu navegador.',
  heading: 'Conversor de SVG a JSX',
  intro:
    'Pega cualquier SVG y obtén JSX limpio, listo para tus componentes React. VectorForge renombra los atributos automáticamente (class se convierte en className, stroke-width en strokeWidth), convierte los estilos en línea en objetos de estilo y transforma los comentarios XML en comentarios JSX — al instante, con vista previa en vivo. No se sube nada; todo ocurre en tu navegador.',
  steps: [
    'Pega tu marcado SVG en el editor, o suelta un archivo .svg en cualquier parte de la página.',
    'La pestaña JSX ya está seleccionada: revisa la salida convertida que se actualiza en vivo mientras escribes.',
    'Copia el JSX con un clic, o descárgalo como archivo .jsx para tu proyecto.',
  ],
  faqs: [
    {
      q: '¿Esta herramienta sube mi SVG a un servidor?',
      a: 'No. Toda la conversión se ejecuta localmente en tu navegador con JavaScript. Tus archivos nunca salen de tu dispositivo.',
    },
    {
      q: '¿Por qué cambian los nombres de los atributos en JSX?',
      a: 'JSX sigue las convenciones de nombres de JavaScript, así que los atributos SVG con guion como stroke-width deben convertirse a camelCase (strokeWidth) y class se convierte en className. Este conversor aplica esas correspondencias automáticamente.',
    },
    {
      q: '¿Puedo convertir varios SVG a JSX a la vez?',
      a: 'Sí. Suelta varios archivos en la página, cambia entre ellos en la barra de lote y descarga todo como ZIP con cada archivo convertido a JSX.',
    },
  ],
  howToUse: 'Cómo usarlo',
  faqHeading: 'Preguntas frecuentes',
  moreTools: 'Más herramientas SVG',
};

const reactEs: ToolContent = {
  title: 'Conversor de SVG a componente React — Gratis en línea | VectorForge',
  description:
    'Convierte cualquier SVG en un componente React tipado (.tsx) al instante. Conversor gratuito de SVG a componente React con soporte de props, salida limpia y vista previa en vivo.',
  heading: 'Conversor de SVG a componente React',
  intro:
    'Obtén un componente React en TypeScript listo para producción desde cualquier SVG. El componente generado acepta props SVG estándar, las extiende sobre el elemento raíz y elimina la declaración xmlns innecesaria que provoca advertencias de React — listo para soltarlo directamente en tu código.',
  steps: [
    'Pega tu marcado SVG en el editor, o suelta un archivo .svg en cualquier parte de la página.',
    'La pestaña React Component ya está seleccionada: el nombre del componente se deriva del nombre de tu archivo.',
    'Copia el código .tsx con un clic, o descárgalo e impórtalo como cualquier otro componente.',
  ],
  faqs: [
    {
      q: '¿Cómo uso el componente generado?',
      a: 'Impórtalo como cualquier componente y pásale props SVG estándar, por ejemplo <SampleIcon width={24} height={24} fill="currentColor" />. Las props se extienden sobre el elemento raíz.',
    },
    {
      q: '¿Por qué se elimina xmlns de la salida?',
      a: 'React gestiona los espacios de nombres SVG por sí mismo; mantener xmlns provoca una advertencia en la consola, así que el conversor lo elimina del elemento raíz.',
    },
    {
      q: '¿Funciona con React Native?',
      a: 'Esta salida está pensada para React web. Para React Native, cambia a la pestaña React Native y obtén en su lugar un componente react-native-svg.',
    },
  ],
  howToUse: 'Cómo usarlo',
  faqHeading: 'Preguntas frecuentes',
  moreTools: 'Más herramientas SVG',
};

const base64Es: ToolContent = {
  title: 'Conversor de SVG a Base64 — Codificador en línea gratuito | VectorForge',
  description:
    'Codifica SVG como Base64 en línea. Conversor gratuito de SVG a Base64 con codificación segura para Unicode, vista previa en vivo y copia con un clic.',
  heading: 'Conversor de SVG a Base64',
  intro:
    'Codifica cualquier SVG en Base64 para los lugares donde el marcado sin procesar no cabe: archivos CSS, configuraciones JSON o cargas de API. La codificación es segura para Unicode (el texto en devanagari, los emoji y el texto CJK sobreviven al viaje de ida y vuelta), y la salida se actualiza en vivo mientras editas el origen.',
  steps: [
    'Pega tu marcado SVG en el editor, o suelta un archivo .svg en cualquier parte de la página.',
    'La pestaña Base64 ya está seleccionada: la cadena codificada aparece al instante en el panel de salida.',
    'Copia la cadena Base64 con un clic, o descárgala como archivo .txt.',
  ],
  faqs: [
    {
      q: '¿La salida Base64 es más grande que el SVG original?',
      a: 'Sí: Base64 añade aproximadamente un 33 % de sobrecarga. Si el tamaño importa, prefiere un data URI con codificación porcentual (la pestaña CSS Data-URI) para CSS, que suele ser más pequeño para SVG.',
    },
    {
      q: '¿Por qué mi salida Base64 termina con caracteres de relleno (=)?',
      a: 'El relleno forma parte de la especificación Base64 y los decodificadores lo esperan. Déjalo en la salida.',
    },
    {
      q: '¿Puede Base64 manejar texto Unicode dentro de mi SVG?',
      a: 'Sí. Esta herramienta codifica primero como UTF-8, así que el texto no latino y los emoji viajan correctamente en lugar de corromperse.',
    },
  ],
  howToUse: 'Cómo usarlo',
  faqHeading: 'Preguntas frecuentes',
  moreTools: 'Más herramientas SVG',
};

const dataUriEs: ToolContent = {
  title: 'Generador de SVG a Data URI / fondo CSS — Gratis | VectorForge',
  description:
    'Convierte SVG en un data URI listo para CSS y background-image. Generador gratuito con minificación, codificación optimizada y vista previa en vivo.',
  heading: 'Conversor de SVG a Data URI',
  intro:
    'Convierte cualquier SVG en un data URI compacto que puedes pegar directamente en background-image. VectorForge minifica primero el SVG y lo codifica porcentualmente, lo que mantiene el URI más pequeño que Base64 para iconos típicos — y puedes verlo renderizado en la vista previa antes de copiarlo.',
  steps: [
    'Pega tu marcado SVG en el editor, o suelta un archivo .svg en cualquier parte de la página.',
    'La pestaña CSS Data-URI ya está seleccionada: el fragmento se actualiza en vivo mientras editas.',
    'Copia el fragmento CSS con un clic, o descárgalo como archivo .css.',
  ],
  faqs: [
    {
      q: 'Data URI o Base64: ¿cuál es más pequeño?',
      a: 'Para SVG, un data URI con codificación porcentual suele ser más pequeño que Base64 (evitas la sobrecarga de codificación de ~33 %), y esta herramienta minifica primero el SVG para reducirlo aún más.',
    },
    {
      q: '¿Por qué se minifica el SVG antes de codificarlo?',
      a: 'Eliminar comentarios, espacios en blanco y metadatos reduce el URI sin cambiar cómo se renderiza la imagen.',
    },
    {
      q: '¿El data URI conserva el atributo xmlns?',
      a: 'Sí. El uso independiente (etiquetas img, fondos CSS) requiere xmlns, así que aquí se conserva — a diferencia de la salida JSX o de componente React.',
    },
  ],
  howToUse: 'Cómo usarlo',
  faqHeading: 'Preguntas frecuentes',
  moreTools: 'Más herramientas SVG',
};

const optimizerEs: ToolContent = {
  title: 'Optimizador de SVG — Herramienta SVGO en línea gratuita | VectorForge',
  description:
    'Optimiza archivos SVG en línea con SVGO. Optimizador de SVG gratuito que reduce el tamaño del archivo preservando el viewBox y la calidad visual.',
  heading: 'Optimizador de SVG',
  intro:
    'Reduce archivos SVG sin cambiar su aspecto. VectorForge ejecuta la optimización multipase de SVGO directamente en tu navegador — y preserva deliberadamente el viewBox, para que el escalado adaptable siga funcionando tras la optimización. Ves exactamente cuántos bytes y qué porcentaje has ahorrado.',
  steps: [
    'Pega tu marcado SVG en el editor, o suelta un archivo .svg en cualquier parte de la página.',
    'Pulsa el botón Optimize en la barra de herramientas: el editor se actualiza con el resultado minificado.',
    'Revisa el aviso de bytes ahorrados y luego copia o descarga el SVG optimizado.',
  ],
  faqs: [
    {
      q: '¿La optimización cambia el aspecto de mi SVG?',
      a: 'No. SVGO solo elimina redundancia: metadatos, precisión excesiva, espacios en blanco. Usa la vista previa en vivo para verificar que el resultado se renderiza idéntico.',
    },
    {
      q: '¿Por qué conserváis el viewBox?',
      a: 'Algunos optimizadores eliminan el viewBox cuando hay ancho y alto, lo que rompe silenciosamente el escalado adaptable. Esta herramienta fuerza la conservación del viewBox.',
    },
    {
      q: '¿Puedo recuperar mi SVG original tras optimizar?',
      a: 'Sí: basta con pegar o soltar de nuevo el archivo original. Nada se sobrescribe a menos que copies o descargues el resultado optimizado.',
    },
  ],
  howToUse: 'Cómo usarlo',
  faqHeading: 'Preguntas frecuentes',
  moreTools: 'Más herramientas SVG',
};

const pngEs: ToolContent = {
  title: 'Conversor de SVG a PNG — Exportación gratuita 1x/2x/4x | VectorForge',
  description:
    'Convierte SVG a PNG en resolución 1x, 2x y 4x en línea. Conversor de SVG a PNG gratuito, ilimitado y en el navegador, con vista previa en vivo.',
  heading: 'Conversor de SVG a PNG',
  intro:
    'Exporta PNG nítidos desde cualquier SVG a escala 1x, 2x o 4x — perfectos para faviconos, iconos de app e imágenes sociales. Si el SVG carece de dimensiones explícitas, el viewBox se usa automáticamente, y la transparencia se conserva.',
  steps: [
    'Pega tu marcado SVG en el editor, o suelta un archivo .svg en cualquier parte de la página.',
    'Previsualiza el SVG sobre cualquier fondo para verificarlo antes de exportar.',
    'Elige 1x, 2x o 4x en los botones de exportación PNG y descarga tu imagen rasterizada.',
  ],
  faqs: [
    {
      q: '¿Qué resoluciones puedo exportar?',
      a: '1x, 2x y 4x del tamaño natural del SVG, tomado de sus atributos width/height o de su viewBox.',
    },
    {
      q: '¿Se conserva la transparencia en el PNG?',
      a: 'Sí: el PNG exportado mantiene el canal alfa del SVG.',
    },
    {
      q: '¿Por qué mi PNG se ve distinto de la vista previa?',
      a: 'Las fuentes externas o las imágenes enlazadas referenciadas dentro del SVG no pueden rasterizarse en el navegador. Convierte el texto a contornos para obtener resultados perfectos al píxel.',
    },
  ],
  howToUse: 'Cómo usarlo',
  faqHeading: 'Preguntas frecuentes',
  moreTools: 'Más herramientas SVG',
};

/* ---------------- Portuguese ---------------- */

const jsxPt: ToolContent = {
  title: 'Conversor de SVG para JSX — Ferramenta online gratuita | VectorForge',
  description:
    'Converta marcação SVG em JSX em segundos. Conversor online gratuito de SVG para JSX com renomeação automática de atributos, conversão de estilos em objetos e pré-visualização ao vivo. Funciona 100% no seu navegador.',
  heading: 'Conversor de SVG para JSX',
  intro:
    'Cole qualquer SVG e obtenha JSX limpo, pronto para os seus componentes React. O VectorForge renomeia os atributos automaticamente (class vira className, stroke-width vira strokeWidth), converte estilos inline em objetos de estilo e transforma comentários XML em comentários JSX — instantaneamente, com pré-visualização ao vivo. Nada é enviado; tudo acontece no seu navegador.',
  steps: [
    'Cole a marcação SVG no editor, ou solte um arquivo .svg em qualquer lugar da página.',
    'A guia JSX já está selecionada — revise a saída convertida atualizando ao vivo enquanto você digita.',
    'Copie o JSX com um clique, ou baixe-o como um arquivo .jsx para o seu projeto.',
  ],
  faqs: [
    {
      q: 'Esta ferramenta envia meu SVG para um servidor?',
      a: 'Não. Toda a conversão roda localmente no seu navegador usando JavaScript. Seus arquivos nunca saem do seu dispositivo.',
    },
    {
      q: 'Por que os nomes dos atributos mudam em JSX?',
      a: 'O JSX segue as convenções de nomenclatura do JavaScript, então atributos SVG com hífen como stroke-width precisam virar camelCase (strokeWidth) e class vira className. Este conversor aplica esses mapeamentos automaticamente.',
    },
    {
      q: 'Posso converter vários SVGs para JSX de uma vez?',
      a: 'Sim. Solte vários arquivos na página, alterne entre eles na barra de lote e baixe tudo como ZIP com cada arquivo convertido para JSX.',
    },
  ],
  howToUse: 'Como usar',
  faqHeading: 'Perguntas frequentes',
  moreTools: 'Mais ferramentas SVG',
};

const reactPt: ToolContent = {
  title: 'Conversor de SVG para componente React — Grátis online | VectorForge',
  description:
    'Transforme qualquer SVG em um componente React tipado (.tsx) instantaneamente. Conversor gratuito de SVG para componente React com suporte a props, saída limpa e pré-visualização ao vivo.',
  heading: 'Conversor de SVG para componente React',
  intro:
    'Obtenha um componente React em TypeScript pronto para produção a partir de qualquer SVG. O componente gerado aceita props SVG padrão, espalha-as no elemento raiz e remove a declaração xmlns desnecessária que dispara avisos do React — pronto para entrar direto no seu código.',
  steps: [
    'Cole a marcação SVG no editor, ou solte um arquivo .svg em qualquer lugar da página.',
    'A guia React Component já está selecionada — o nome do componente é derivado do nome do seu arquivo.',
    'Copie o código .tsx com um clique, ou baixe-o e importe-o como qualquer outro componente.',
  ],
  faqs: [
    {
      q: 'Como uso o componente gerado?',
      a: 'Importe-o como qualquer componente e passe props SVG padrão, por exemplo <SampleIcon width={24} height={24} fill="currentColor" />. As props se espalham no elemento raiz.',
    },
    {
      q: 'Por que o xmlns é removido da saída?',
      a: 'O React cuida dos namespaces SVG sozinho; manter o xmlns causa um aviso no console, então o conversor o remove do elemento raiz.',
    },
    {
      q: 'Isso funciona com React Native?',
      a: 'Esta saída é voltada ao React web. Para React Native, mude para a guia React Native para obter um componente react-native-svg.',
    },
  ],
  howToUse: 'Como usar',
  faqHeading: 'Perguntas frequentes',
  moreTools: 'Mais ferramentas SVG',
};

const base64Pt: ToolContent = {
  title: 'Conversor de SVG para Base64 — Codificador online gratuito | VectorForge',
  description:
    'Codifique SVG como Base64 online. Conversor gratuito de SVG para Base64 com codificação segura para Unicode, pré-visualização ao vivo e cópia com um clique.',
  heading: 'Conversor de SVG para Base64',
  intro:
    'Codifique qualquer SVG em Base64 para lugares onde a marcação bruta não cabe — arquivos CSS, configurações JSON ou cargas de API. A codificação é segura para Unicode (texto em devanágari, emoji e texto CJK sobrevivem à ida e volta), e a saída atualiza ao vivo enquanto você edita a fonte.',
  steps: [
    'Cole a marcação SVG no editor, ou solte um arquivo .svg em qualquer lugar da página.',
    'A guia Base64 já está selecionada — a cadeia codificada aparece instantaneamente no painel de saída.',
    'Copie a cadeia Base64 com um clique, ou baixe-a como um arquivo .txt.',
  ],
  faqs: [
    {
      q: 'A saída Base64 é maior que o SVG original?',
      a: 'Sim — o Base64 adiciona cerca de 33% de sobrecarga. Se o tamanho importar, prefira um data URI com codificação percentual (a guia CSS Data-URI) para CSS, que costuma ser menor para SVG.',
    },
    {
      q: 'Por que minha saída Base64 termina com caracteres de preenchimento (=)?',
      a: 'O preenchimento faz parte da especificação Base64 e os decodificadores o esperam. Mantenha-o na saída.',
    },
    {
      q: 'O Base64 consegue lidar com texto Unicode dentro do meu SVG?',
      a: 'Sim. Esta ferramenta codifica primeiro como UTF-8, então texto não latino e emoji fazem a ida e volta corretamente em vez de corromper.',
    },
  ],
  howToUse: 'Como usar',
  faqHeading: 'Perguntas frequentes',
  moreTools: 'Mais ferramentas SVG',
};

const dataUriPt: ToolContent = {
  title: 'Gerador de SVG para Data URI / fundo CSS — Grátis | VectorForge',
  description:
    'Converta SVG em um data URI pronto para CSS e background-image. Gerador gratuito com minificação, codificação otimizada e pré-visualização ao vivo.',
  heading: 'Conversor de SVG para Data URI',
  intro:
    'Transforme qualquer SVG em um data URI compacto que você pode colar direto em background-image. O VectorForge minifica o SVG primeiro e o codifica percentualmente, o que mantém o URI menor que o Base64 para ícones típicos — e você pode vê-lo renderizado na pré-visualização antes de copiar.',
  steps: [
    'Cole a marcação SVG no editor, ou solte um arquivo .svg em qualquer lugar da página.',
    'A guia CSS Data-URI já está selecionada — o trecho atualiza ao vivo enquanto você edita.',
    'Copie o trecho CSS com um clique, ou baixe-o como um arquivo .css.',
  ],
  faqs: [
    {
      q: 'Data URI ou Base64 — qual é menor?',
      a: 'Para SVG, um data URI com codificação percentual costuma ser menor que o Base64 (você evita a sobrecarga de codificação de ~33%), e esta ferramenta minifica o SVG primeiro para encolhê-lo ainda mais.',
    },
    {
      q: 'Por que o SVG é minificado antes da codificação?',
      a: 'Remover comentários, espaços em branco e metadados encolhe o URI sem mudar como a imagem é renderizada.',
    },
    {
      q: 'O data URI mantém o atributo xmlns?',
      a: 'Sim. O uso autônomo (tags img, fundos CSS) exige xmlns, então ele é preservado aqui — diferentemente da saída JSX ou de componente React.',
    },
  ],
  howToUse: 'Como usar',
  faqHeading: 'Perguntas frequentes',
  moreTools: 'Mais ferramentas SVG',
};

const optimizerPt: ToolContent = {
  title: 'Otimizador de SVG — Ferramenta SVGO online gratuita | VectorForge',
  description:
    'Otimize arquivos SVG online com SVGO. Otimizador de SVG gratuito que reduz o tamanho do arquivo preservando o viewBox e a qualidade visual.',
  heading: 'Otimizador de SVG',
  intro:
    'Encolha arquivos SVG sem mudar a aparência deles. O VectorForge executa a otimização multipasse do SVGO direto no seu navegador — e preserva deliberadamente o viewBox, para que o dimensionamento responsivo continue funcionando após a otimização. Você vê exatamente quantos bytes e qual porcentagem economizou.',
  steps: [
    'Cole a marcação SVG no editor, ou solte um arquivo .svg em qualquer lugar da página.',
    'Pressione o botão Optimize na barra de ferramentas — o editor atualiza com o resultado minificado.',
    'Verifique o aviso de bytes economizados e então copie ou baixe o SVG otimizado.',
  ],
  faqs: [
    {
      q: 'A otimização muda a aparência do meu SVG?',
      a: 'Não. O SVGO remove apenas redundância — metadados, precisão excessiva, espaços em branco. Use a pré-visualização ao vivo para verificar que o resultado renderiza de forma idêntica.',
    },
    {
      q: 'Por que vocês mantêm o viewBox?',
      a: 'Alguns otimizadores descartam o viewBox quando width e height estão presentes, o que quebra silenciosamente o dimensionamento responsivo. Esta ferramenta força a preservação do viewBox.',
    },
    {
      q: 'Posso recuperar meu SVG original depois de otimizar?',
      a: 'Sim — basta colar ou soltar o arquivo original de novo. Nada é sobrescrito a menos que você copie ou baixe o resultado otimizado.',
    },
  ],
  howToUse: 'Como usar',
  faqHeading: 'Perguntas frequentes',
  moreTools: 'Mais ferramentas SVG',
};

const pngPt: ToolContent = {
  title: 'Conversor de SVG para PNG — Exportação gratuita 1x/2x/4x | VectorForge',
  description:
    'Converta SVG para PNG nas resoluções 1x, 2x e 4x online. Conversor de SVG para PNG gratuito, ilimitado e no navegador, com pré-visualização ao vivo.',
  heading: 'Conversor de SVG para PNG',
  intro:
    'Exporte PNGs nítidos de qualquer SVG em escala 1x, 2x ou 4x — perfeitos para favicons, ícones de app e imagens sociais. Se o SVG não tiver dimensões explícitas, o viewBox é usado automaticamente, e a transparência é preservada.',
  steps: [
    'Cole a marcação SVG no editor, ou solte um arquivo .svg em qualquer lugar da página.',
    'Pré-visualize o SVG em qualquer fundo para verificá-lo antes de exportar.',
    'Escolha 1x, 2x ou 4x nos botões de exportação PNG e baixe sua imagem rasterizada.',
  ],
  faqs: [
    {
      q: 'Quais resoluções posso exportar?',
      a: '1x, 2x e 4x do tamanho natural do SVG, retirados de seus atributos width/height ou de seu viewBox.',
    },
    {
      q: 'A transparência é preservada no PNG?',
      a: 'Sim — o PNG exportado mantém o canal alfa do SVG.',
    },
    {
      q: 'Por que meu PNG parece diferente da pré-visualização?',
      a: 'Fontes externas ou imagens vinculadas referenciadas dentro do SVG não podem ser rasterizadas no navegador. Converta o texto em contornos para resultados perfeitos em pixels.',
    },
  ],
  howToUse: 'Como usar',
  faqHeading: 'Perguntas frequentes',
  moreTools: 'Mais ferramentas SVG',
};

/* ---------------- French ---------------- */

const jsxFr: ToolContent = {
  title: 'Convertisseur SVG en JSX — Outil en ligne gratuit | VectorForge',
  description:
    'Convertissez le balisage SVG en JSX en quelques secondes. Convertisseur SVG en JSX en ligne gratuit avec renommage automatique des attributs, conversion des styles en objets et aperçu en direct. Fonctionne à 100 % dans votre navigateur.',
  heading: 'Convertisseur SVG en JSX',
  intro:
    'Collez n’importe quel SVG et obtenez du JSX propre, prêt pour vos composants React. VectorForge renomme les attributs automatiquement (class devient className, stroke-width devient strokeWidth), convertit les styles inline en objets de style et transforme les commentaires XML en commentaires JSX — instantanément, avec un aperçu en direct. Rien n’est téléversé ; tout se passe dans votre navigateur.',
  steps: [
    'Collez votre balisage SVG dans l’éditeur, ou déposez un fichier .svg n’importe où sur la page.',
    'L’onglet JSX est déjà sélectionné — vérifiez la sortie convertie qui se met à jour en direct pendant la saisie.',
    'Copiez le JSX en un clic, ou téléchargez-le comme fichier .jsx pour votre projet.',
  ],
  faqs: [
    {
      q: 'Cet outil téléverse-t-il mon SVG sur un serveur ?',
      a: 'Non. Toute la conversion s’exécute localement dans votre navigateur en JavaScript. Vos fichiers ne quittent jamais votre appareil.',
    },
    {
      q: 'Pourquoi les noms d’attributs changent-ils en JSX ?',
      a: 'JSX suit les conventions de nommage de JavaScript, donc les attributs SVG à trait d’union comme stroke-width doivent devenir camelCase (strokeWidth) et class devient className. Ce convertisseur applique ces correspondances automatiquement.',
    },
    {
      q: 'Puis-je convertir plusieurs SVG en JSX à la fois ?',
      a: 'Oui. Déposez plusieurs fichiers sur la page, passez de l’un à l’autre dans la barre de lot et téléchargez tout en ZIP, chaque fichier converti en JSX.',
    },
  ],
  howToUse: 'Mode d’emploi',
  faqHeading: 'Questions fréquentes',
  moreTools: 'Plus d’outils SVG',
};

const reactFr: ToolContent = {
  title: 'Convertisseur SVG en composant React — Gratuit en ligne | VectorForge',
  description:
    'Transformez n’importe quel SVG en composant React typé (.tsx) instantanément. Convertisseur gratuit de SVG en composant React avec prise en charge des props, sortie propre et aperçu en direct.',
  heading: 'Convertisseur SVG en composant React',
  intro:
    'Obtenez un composant React TypeScript prêt pour la production à partir de n’importe quel SVG. Le composant généré accepte les props SVG standard, les étale sur l’élément racine et supprime la déclaration xmlns inutile qui déclenche les avertissements React — prêt à être déposé directement dans votre code.',
  steps: [
    'Collez votre balisage SVG dans l’éditeur, ou déposez un fichier .svg n’importe où sur la page.',
    'L’onglet React Component est déjà sélectionné — le nom du composant est déduit du nom de votre fichier.',
    'Copiez le code .tsx en un clic, ou téléchargez-le et importez-le comme n’importe quel autre composant.',
  ],
  faqs: [
    {
      q: 'Comment utiliser le composant généré ?',
      a: 'Importez-le comme n’importe quel composant et passez-lui des props SVG standard, par exemple <SampleIcon width={24} height={24} fill="currentColor" />. Les props s’étalent sur l’élément racine.',
    },
    {
      q: 'Pourquoi xmlns est-il retiré de la sortie ?',
      a: 'React gère lui-même les espaces de noms SVG ; conserver xmlns provoque un avertissement dans la console, le convertisseur le retire donc de l’élément racine.',
    },
    {
      q: 'Cela fonctionne-t-il avec React Native ?',
      a: 'Cette sortie vise le React web. Pour React Native, basculez vers l’onglet React Native afin d’obtenir plutôt un composant react-native-svg.',
    },
  ],
  howToUse: 'Mode d’emploi',
  faqHeading: 'Questions fréquentes',
  moreTools: 'Plus d’outils SVG',
};

const base64Fr: ToolContent = {
  title: 'Convertisseur SVG en Base64 — Encodeur en ligne gratuit | VectorForge',
  description:
    'Encodez le SVG en Base64 en ligne. Convertisseur gratuit de SVG en Base64 avec encodage sûr pour Unicode, aperçu en direct et copie en un clic.',
  heading: 'Convertisseur SVG en Base64',
  intro:
    'Encodez n’importe quel SVG en Base64 pour les endroits où le balisage brut ne tient pas — fichiers CSS, configurations JSON ou charges utiles d’API. L’encodage est sûr pour Unicode (le devanagari, les emoji et le texte CJK survivent à l’aller-retour), et la sortie se met à jour en direct pendant que vous modifiez la source.',
  steps: [
    'Collez votre balisage SVG dans l’éditeur, ou déposez un fichier .svg n’importe où sur la page.',
    'L’onglet Base64 est déjà sélectionné — la chaîne encodée apparaît instantanément dans le panneau de sortie.',
    'Copiez la chaîne Base64 en un clic, ou téléchargez-la comme fichier .txt.',
  ],
  faqs: [
    {
      q: 'La sortie Base64 est-elle plus grande que le SVG d’origine ?',
      a: 'Oui — le Base64 ajoute environ 33 % de surcharge. Si la taille compte, préférez un data URI encodé en pour-cent (l’onglet CSS Data-URI) pour le CSS, généralement plus petit pour le SVG.',
    },
    {
      q: 'Pourquoi ma sortie Base64 se termine-t-elle par des caractères de remplissage (=) ?',
      a: 'Le remplissage fait partie de la spécification Base64 et les décodeurs l’attendent. Conservez-le dans la sortie.',
    },
    {
      q: 'Le Base64 peut-il gérer le texte Unicode dans mon SVG ?',
      a: 'Oui. Cet outil encode d’abord en UTF-8, de sorte que le texte non latin et les emoji font l’aller-retour correctement au lieu de se corrompre.',
    },
  ],
  howToUse: 'Mode d’emploi',
  faqHeading: 'Questions fréquentes',
  moreTools: 'Plus d’outils SVG',
};

const dataUriFr: ToolContent = {
  title: 'Générateur SVG en Data URI / arrière-plan CSS — Gratuit | VectorForge',
  description:
    'Convertissez le SVG en data URI prêt pour le CSS et background-image. Générateur gratuit avec minification, encodage optimisé et aperçu en direct.',
  heading: 'Convertisseur SVG en Data URI',
  intro:
    'Transformez n’importe quel SVG en data URI compact que vous pouvez coller directement dans background-image. VectorForge minifie d’abord le SVG puis l’encode en pour-cent, ce qui garde l’URI plus petit que le Base64 pour les icônes typiques — et vous pouvez le voir s’afficher dans l’aperçu en direct avant de le copier.',
  steps: [
    'Collez votre balisage SVG dans l’éditeur, ou déposez un fichier .svg n’importe où sur la page.',
    'L’onglet CSS Data-URI est déjà sélectionné — l’extrait se met à jour en direct pendant vos modifications.',
    'Copiez l’extrait CSS en un clic, ou téléchargez-le comme fichier .css.',
  ],
  faqs: [
    {
      q: 'Data URI ou Base64 — lequel est le plus petit ?',
      a: 'Pour le SVG, un data URI encodé en pour-cent est généralement plus petit que le Base64 (vous évitez la surcharge d’encodage d’environ 33 %), et cet outil minifie d’abord le SVG pour le réduire encore.',
    },
    {
      q: 'Pourquoi le SVG est-il minifié avant l’encodage ?',
      a: 'Retirer commentaires, espaces et métadonnées réduit l’URI sans changer le rendu de l’image.',
    },
    {
      q: 'Le data URI conserve-t-il l’attribut xmlns ?',
      a: 'Oui. L’usage autonome (balises img, arrière-plans CSS) exige xmlns, il est donc conservé ici — contrairement à la sortie JSX ou composant React.',
    },
  ],
  howToUse: 'Mode d’emploi',
  faqHeading: 'Questions fréquentes',
  moreTools: 'Plus d’outils SVG',
};

const optimizerFr: ToolContent = {
  title: 'Optimiseur SVG — Outil SVGO en ligne gratuit | VectorForge',
  description:
    'Optimisez les fichiers SVG en ligne avec SVGO. Optimiseur SVG gratuit qui réduit la taille des fichiers tout en préservant le viewBox et la qualité visuelle.',
  heading: 'Optimiseur SVG',
  intro:
    'Réduisez les fichiers SVG sans changer leur apparence. VectorForge exécute l’optimisation multipasse SVGO directement dans votre navigateur — et préserve délibérément le viewBox, afin que la mise à l’échelle adaptative continue de fonctionner après l’optimisation. Vous voyez exactement combien d’octets et quel pourcentage vous avez économisés.',
  steps: [
    'Collez votre balisage SVG dans l’éditeur, ou déposez un fichier .svg n’importe où sur la page.',
    'Appuyez sur le bouton Optimize dans la barre d’outils — l’éditeur se met à jour avec le résultat minifié.',
    'Vérifiez l’avis d’octets économisés, puis copiez ou téléchargez le SVG optimisé.',
  ],
  faqs: [
    {
      q: 'L’optimisation change-t-elle l’apparence de mon SVG ?',
      a: 'Non. SVGO ne retire que la redondance — métadonnées, précision excessive, espaces. Utilisez l’aperçu en direct pour vérifier que le résultat s’affiche à l’identique.',
    },
    {
      q: 'Pourquoi conservez-vous le viewBox ?',
      a: 'Certains optimiseurs suppriment le viewBox lorsque la largeur et la hauteur sont présentes, ce qui casse silencieusement la mise à l’échelle adaptative. Cet outil force la préservation du viewBox.',
    },
    {
      q: 'Puis-je récupérer mon SVG d’origine après l’optimisation ?',
      a: 'Oui — il suffit de coller ou redéposer le fichier d’origine. Rien n’est écrasé tant que vous ne copiez ou ne téléchargez pas le résultat optimisé.',
    },
  ],
  howToUse: 'Mode d’emploi',
  faqHeading: 'Questions fréquentes',
  moreTools: 'Plus d’outils SVG',
};

const pngFr: ToolContent = {
  title: 'Convertisseur SVG en PNG — Export gratuit 1x/2x/4x | VectorForge',
  description:
    'Convertissez le SVG en PNG aux résolutions 1x, 2x et 4x en ligne. Convertisseur SVG en PNG gratuit, illimité et dans le navigateur, avec aperçu en direct.',
  heading: 'Convertisseur SVG en PNG',
  intro:
    'Exportez des PNG nets depuis n’importe quel SVG à l’échelle 1x, 2x ou 4x — parfaits pour les favicons, les icônes d’applications et les images sociales. Si le SVG n’a pas de dimensions explicites, le viewBox est utilisé automatiquement, et la transparence est préservée.',
  steps: [
    'Collez votre balisage SVG dans l’éditeur, ou déposez un fichier .svg n’importe où sur la page.',
    'Prévisualisez le SVG sur n’importe quel arrière-plan pour le vérifier avant l’export.',
    'Choisissez 1x, 2x ou 4x parmi les boutons d’export PNG et téléchargez votre image rasterisée.',
  ],
  faqs: [
    {
      q: 'Quelles résolutions puis-je exporter ?',
      a: '1x, 2x et 4x de la taille naturelle du SVG, tirée de ses attributs width/height ou de son viewBox.',
    },
    {
      q: 'La transparence est-elle préservée dans le PNG ?',
      a: 'Oui — le PNG exporté conserve le canal alpha du SVG.',
    },
    {
      q: 'Pourquoi mon PNG diffère-t-il de l’aperçu ?',
      a: 'Les polices externes ou les images liées référencées dans le SVG ne peuvent pas être rasterisées dans le navigateur. Convertissez le texte en contours pour des résultats parfaits au pixel près.',
    },
  ],
  howToUse: 'Mode d’emploi',
  faqHeading: 'Questions fréquentes',
  moreTools: 'Plus d’outils SVG',
};

/* ---------------- German ---------------- */

const jsxDe: ToolContent = {
  title: 'SVG zu JSX Konverter — Kostenloses Online-Tool | VectorForge',
  description:
    'Wandeln Sie SVG-Markup in Sekunden in JSX um. Kostenloser Online-Konverter von SVG zu JSX mit automatischer Attributumbenennung, Style-Objekt-Umwandlung und Live-Vorschau. Läuft zu 100 % in Ihrem Browser.',
  heading: 'SVG zu JSX Konverter',
  intro:
    'Fügen Sie ein beliebiges SVG ein und erhalten Sie sauberes JSX, bereit für Ihre React-Komponenten. VectorForge benennt Attribute automatisch um (aus class wird className, aus stroke-width wird strokeWidth), wandelt Inline-Styles in Style-Objekte um und macht aus XML-Kommentaren JSX-Kommentare — sofort, mit Live-Vorschau. Nichts wird hochgeladen; alles geschieht in Ihrem Browser.',
  steps: [
    'Fügen Sie Ihr SVG-Markup in den Editor ein oder ziehen Sie eine .svg-Datei irgendwo auf die Seite.',
    'Der JSX-Tab ist bereits ausgewählt — prüfen Sie die umgewandelte Ausgabe, die sich beim Tippen live aktualisiert.',
    'Kopieren Sie das JSX mit einem Klick oder laden Sie es als .jsx-Datei für Ihr Projekt herunter.',
  ],
  faqs: [
    {
      q: 'Lädt dieses Tool mein SVG auf einen Server hoch?',
      a: 'Nein. Die gesamte Umwandlung läuft lokal in Ihrem Browser per JavaScript. Ihre Dateien verlassen nie Ihr Gerät.',
    },
    {
      q: 'Warum ändern sich Attributnamen in JSX?',
      a: 'JSX folgt den JavaScript-Namenskonventionen, daher müssen SVG-Attribute mit Bindestrich wie stroke-width zu camelCase (strokeWidth) werden und aus class wird className. Dieser Konverter wendet diese Zuordnungen automatisch an.',
    },
    {
      q: 'Kann ich mehrere SVGs auf einmal in JSX umwandeln?',
      a: 'Ja. Ziehen Sie mehrere Dateien auf die Seite, wechseln Sie in der Stapelleiste zwischen ihnen und laden Sie alles als ZIP herunter, jede Datei in JSX umgewandelt.',
    },
  ],
  howToUse: 'So geht’s',
  faqHeading: 'Häufige Fragen',
  moreTools: 'Mehr SVG-Tools',
};

const reactDe: ToolContent = {
  title: 'SVG zu React-Komponenten Konverter — Kostenlos online | VectorForge',
  description:
    'Verwandeln Sie jedes SVG sofort in eine typisierte React-Komponente (.tsx). Kostenloser Konverter von SVG zu React-Komponente mit Props-Unterstützung, sauberer Ausgabe und Live-Vorschau.',
  heading: 'SVG zu React-Komponenten Konverter',
  intro:
    'Erhalten Sie aus jedem SVG eine produktionsreife TypeScript-React-Komponente. Die erzeugte Komponente akzeptiert Standard-SVG-Props, verteilt sie auf das Wurzelelement und entfernt die unnötige xmlns-Deklaration, die React-Warnungen auslöst — bereit, direkt in Ihre Codebasis übernommen zu werden.',
  steps: [
    'Fügen Sie Ihr SVG-Markup in den Editor ein oder ziehen Sie eine .svg-Datei irgendwo auf die Seite.',
    'Der Tab „React Component“ ist bereits ausgewählt — der Komponentenname wird aus Ihrem Dateinamen abgeleitet.',
    'Kopieren Sie den .tsx-Code mit einem Klick oder laden Sie ihn herunter und importieren Sie ihn wie jede andere Komponente.',
  ],
  faqs: [
    {
      q: 'Wie verwende ich die erzeugte Komponente?',
      a: 'Importieren Sie sie wie jede Komponente und übergeben Sie Standard-SVG-Props, zum Beispiel <SampleIcon width={24} height={24} fill="currentColor" />. Die Props werden auf das Wurzelelement verteilt.',
    },
    {
      q: 'Warum wird xmlns aus der Ausgabe entfernt?',
      a: 'React kümmert sich selbst um SVG-Namensräume; xmlns zu behalten verursacht eine Konsolenwarnung, daher entfernt der Konverter es aus dem Wurzelelement.',
    },
    {
      q: 'Funktioniert das mit React Native?',
      a: 'Diese Ausgabe zielt auf Web-React. Für React Native wechseln Sie zum Tab „React Native“, um stattdessen eine react-native-svg-Komponente zu erhalten.',
    },
  ],
  howToUse: 'So geht’s',
  faqHeading: 'Häufige Fragen',
  moreTools: 'Mehr SVG-Tools',
};

const base64De: ToolContent = {
  title: 'SVG zu Base64 Konverter — Kostenloser Online-Encoder | VectorForge',
  description:
    'Kodieren Sie SVG online als Base64. Kostenloser Konverter von SVG zu Base64 mit Unicode-sicherer Kodierung, Live-Vorschau und Kopieren mit einem Klick.',
  heading: 'SVG zu Base64 Konverter',
  intro:
    'Kodieren Sie ein beliebiges SVG als Base64 für Orte, an denen rohes Markup nicht hineinpasst — CSS-Dateien, JSON-Konfigurationen oder API-Nutzdaten. Die Kodierung ist Unicode-sicher (Devanagari, Emoji und CJK-Text überstehen die Hin- und Rückwandlung), und die Ausgabe aktualisiert sich live, während Sie die Quelle bearbeiten.',
  steps: [
    'Fügen Sie Ihr SVG-Markup in den Editor ein oder ziehen Sie eine .svg-Datei irgendwo auf die Seite.',
    'Der Base64-Tab ist bereits ausgewählt — die kodierte Zeichenkette erscheint sofort im Ausgabebereich.',
    'Kopieren Sie die Base64-Zeichenkette mit einem Klick oder laden Sie sie als .txt-Datei herunter.',
  ],
  faqs: [
    {
      q: 'Ist die Base64-Ausgabe größer als das ursprüngliche SVG?',
      a: 'Ja — Base64 fügt rund 33 % Overhead hinzu. Wenn die Größe zählt, bevorzugen Sie für CSS eine prozentkodierte Data-URI (der Tab „CSS Data-URI“), die für SVG meist kleiner ist.',
    },
    {
      q: 'Warum endet meine Base64-Ausgabe mit Füllzeichen (=)?',
      a: 'Die Auffüllung ist Teil der Base64-Spezifikation und Decoder erwarten sie. Belassen Sie sie in der Ausgabe.',
    },
    {
      q: 'Kann Base64 Unicode-Text in meinem SVG verarbeiten?',
      a: 'Ja. Dieses Tool kodiert zuerst als UTF-8, sodass nicht-lateinischer Text und Emoji korrekt hin- und zurückwandeln, statt beschädigt zu werden.',
    },
  ],
  howToUse: 'So geht’s',
  faqHeading: 'Häufige Fragen',
  moreTools: 'Mehr SVG-Tools',
};

const dataUriDe: ToolContent = {
  title: 'SVG zu Data-URI / CSS-Hintergrund Generator — Kostenlos | VectorForge',
  description:
    'Wandeln Sie SVG in eine CSS-fertige Data-URI für background-image um. Kostenloser Generator mit Minifizierung, optimierter Kodierung und Live-Vorschau.',
  heading: 'SVG zu Data-URI Konverter',
  intro:
    'Verwandeln Sie ein beliebiges SVG in eine kompakte Data-URI, die Sie direkt in background-image einfügen können. VectorForge minifiziert das SVG zuerst und prozentkodiert es, was die URI für typische Icons kleiner hält als Base64 — und Sie sehen sie vor dem Kopieren in der Live-Vorschau gerendert.',
  steps: [
    'Fügen Sie Ihr SVG-Markup in den Editor ein oder ziehen Sie eine .svg-Datei irgendwo auf die Seite.',
    'Der Tab „CSS Data-URI“ ist bereits ausgewählt — der Ausschnitt aktualisiert sich live beim Bearbeiten.',
    'Kopieren Sie den CSS-Ausschnitt mit einem Klick oder laden Sie ihn als .css-Datei herunter.',
  ],
  faqs: [
    {
      q: 'Data-URI oder Base64 — was ist kleiner?',
      a: 'Für SVG ist eine prozentkodierte Data-URI meist kleiner als Base64 (Sie vermeiden den Kodierungs-Overhead von ~33 %), und dieses Tool minifiziert das SVG zuerst, um es weiter zu verkleinern.',
    },
    {
      q: 'Warum wird das SVG vor der Kodierung minifiziert?',
      a: 'Kommentare, Leerraum und Metadaten zu entfernen verkleinert die URI, ohne zu ändern, wie das Bild gerendert wird.',
    },
    {
      q: 'Behält die Data-URI das xmlns-Attribut?',
      a: 'Ja. Eigenständige Verwendung (img-Tags, CSS-Hintergründe) erfordert xmlns, daher bleibt es hier erhalten — anders als bei JSX- oder React-Komponenten-Ausgabe.',
    },
  ],
  howToUse: 'So geht’s',
  faqHeading: 'Häufige Fragen',
  moreTools: 'Mehr SVG-Tools',
};

const optimizerDe: ToolContent = {
  title: 'SVG Optimizer — Kostenloses Online-SVGO-Tool | VectorForge',
  description:
    'Optimieren Sie SVG-Dateien online mit SVGO. Kostenloser SVG-Optimizer, der die Dateigröße verkleinert und dabei viewBox und visuelle Qualität erhält.',
  heading: 'SVG Optimizer',
  intro:
    'Verkleinern Sie SVG-Dateien, ohne ihr Aussehen zu verändern. VectorForge führt die SVGO-Multipass-Optimierung direkt in Ihrem Browser aus — und erhält bewusst die viewBox, damit responsives Skalieren nach der Optimierung weiter funktioniert. Sie sehen genau, wie viele Bytes und wie viel Prozent Sie gespart haben.',
  steps: [
    'Fügen Sie Ihr SVG-Markup in den Editor ein oder ziehen Sie eine .svg-Datei irgendwo auf die Seite.',
    'Drücken Sie den Optimize-Button in der Werkzeugleiste — der Editor aktualisiert sich mit dem minifizierten Ergebnis.',
    'Prüfen Sie den Hinweis zu den gesparten Bytes und kopieren oder laden Sie dann das optimierte SVG herunter.',
  ],
  faqs: [
    {
      q: 'Verändert die Optimierung das Aussehen meines SVG?',
      a: 'Nein. SVGO entfernt nur Redundanz — Metadaten, überflüssige Präzision, Leerraum. Nutzen Sie die Live-Vorschau, um zu prüfen, dass das Ergebnis identisch gerendert wird.',
    },
    {
      q: 'Warum behaltet ihr die viewBox?',
      a: 'Manche Optimizer verwerfen die viewBox, wenn Breite und Höhe vorhanden sind, was responsives Skalieren still bricht. Dieses Tool erzwingt den Erhalt der viewBox.',
    },
    {
      q: 'Kann ich mein ursprüngliches SVG nach dem Optimieren zurückbekommen?',
      a: 'Ja — fügen Sie die Originaldatei einfach erneut ein oder ziehen Sie sie wieder auf die Seite. Nichts wird überschrieben, solange Sie das optimierte Ergebnis nicht kopieren oder herunterladen.',
    },
  ],
  howToUse: 'So geht’s',
  faqHeading: 'Häufige Fragen',
  moreTools: 'Mehr SVG-Tools',
};

const pngDe: ToolContent = {
  title: 'SVG zu PNG Konverter — Kostenloser 1x/2x/4x Export | VectorForge',
  description:
    'Wandeln Sie SVG online in PNG mit 1x-, 2x- und 4x-Auflösung um. Kostenloser, unbegrenzter SVG-zu-PNG-Konverter im Browser mit Live-Vorschau.',
  heading: 'SVG zu PNG Konverter',
  intro:
    'Exportieren Sie scharfe PNGs aus jedem SVG im Maßstab 1x, 2x oder 4x — perfekt für Favicons, App-Icons und Social-Bilder. Fehlen dem SVG explizite Maße, wird automatisch die viewBox verwendet, und Transparenz bleibt erhalten.',
  steps: [
    'Fügen Sie Ihr SVG-Markup in den Editor ein oder ziehen Sie eine .svg-Datei irgendwo auf die Seite.',
    'Sehen Sie sich das SVG auf beliebigem Hintergrund in der Vorschau an, um es vor dem Export zu prüfen.',
    'Wählen Sie 1x, 2x oder 4x bei den PNG-Exportbuttons und laden Sie Ihr Rasterbild herunter.',
  ],
  faqs: [
    {
      q: 'Welche Auflösungen kann ich exportieren?',
      a: '1x, 2x und 4x der natürlichen Größe des SVG, entnommen aus seinen width/height-Attributen oder seiner viewBox.',
    },
    {
      q: 'Bleibt Transparenz im PNG erhalten?',
      a: 'Ja — das exportierte PNG behält den Alphakanal des SVG.',
    },
    {
      q: 'Warum sieht mein PNG anders aus als die Vorschau?',
      a: 'Externe Schriften oder verlinkte Bilder, auf die im SVG verwiesen wird, können im Browser nicht gerastert werden. Wandeln Sie Text für pixelgenaue Ergebnisse in Pfade um.',
    },
  ],
  howToUse: 'So geht’s',
  faqHeading: 'Häufige Fragen',
  moreTools: 'Mehr SVG-Tools',
};

/* ---------------- Indonesian ---------------- */

const jsxId: ToolContent = {
  title: 'Konverter SVG ke JSX — Alat Online Gratis | VectorForge',
  description:
    'Ubah markup SVG menjadi JSX dalam hitungan detik. Konverter SVG ke JSX online gratis dengan penggantian nama atribut otomatis, konversi gaya menjadi objek, dan pratinjau langsung. Berjalan 100% di browser Anda.',
  heading: 'Konverter SVG ke JSX',
  intro:
    'Tempel SVG apa pun dan dapatkan JSX yang bersih, siap untuk komponen React Anda. VectorForge mengganti nama atribut secara otomatis (class menjadi className, stroke-width menjadi strokeWidth), mengubah gaya sebaris menjadi objek gaya, dan mengubah komentar XML menjadi komentar JSX — seketika, dengan pratinjau langsung. Tidak ada yang diunggah; semuanya terjadi di browser Anda.',
  steps: [
    'Tempel markup SVG Anda ke editor, atau letakkan file .svg di mana saja pada halaman.',
    'Tab JSX sudah dipilih — tinjau keluaran terkonversi yang diperbarui secara langsung saat Anda mengetik.',
    'Salin JSX dengan satu klik, atau unduh sebagai file .jsx untuk proyek Anda.',
  ],
  faqs: [
    {
      q: 'Apakah alat ini mengunggah SVG saya ke server?',
      a: 'Tidak. Semua konversi berjalan secara lokal di browser Anda menggunakan JavaScript. File Anda tidak pernah meninggalkan perangkat Anda.',
    },
    {
      q: 'Mengapa nama atribut berubah di JSX?',
      a: 'JSX mengikuti konvensi penamaan JavaScript, jadi atribut SVG bertanda hubung seperti stroke-width harus menjadi camelCase (strokeWidth) dan class menjadi className. Konverter ini menerapkan pemetaan tersebut secara otomatis.',
    },
    {
      q: 'Bisakah saya mengonversi banyak SVG ke JSX sekaligus?',
      a: 'Ya. Letakkan beberapa file ke halaman, beralih di antara mereka di bilah batch, dan unduh semuanya sebagai ZIP dengan setiap file terkonversi ke JSX.',
    },
  ],
  howToUse: 'Cara menggunakan',
  faqHeading: 'Pertanyaan yang sering diajukan',
  moreTools: 'Alat SVG lainnya',
};

const reactId: ToolContent = {
  title: 'Konverter SVG ke Komponen React — Gratis Online | VectorForge',
  description:
    'Ubah SVG apa pun menjadi komponen React bertipe (.tsx) seketika. Konverter SVG ke komponen React gratis dengan dukungan props, keluaran bersih, dan pratinjau langsung.',
  heading: 'Konverter SVG ke Komponen React',
  intro:
    'Dapatkan komponen React TypeScript siap produksi dari SVG apa pun. Komponen yang dihasilkan menerima props SVG standar, menyebarkannya ke elemen akar, dan menghapus deklarasi xmlns yang tidak perlu yang memicu peringatan React — siap dimasukkan langsung ke basis kode Anda.',
  steps: [
    'Tempel markup SVG Anda ke editor, atau letakkan file .svg di mana saja pada halaman.',
    'Tab React Component sudah dipilih — nama komponen diturunkan dari nama file Anda.',
    'Salin kode .tsx dengan satu klik, atau unduh dan impor seperti komponen lainnya.',
  ],
  faqs: [
    {
      q: 'Bagaimana cara menggunakan komponen yang dihasilkan?',
      a: 'Impor seperti komponen apa pun dan berikan props SVG standar, misalnya <SampleIcon width={24} height={24} fill="currentColor" />. Props menyebar ke elemen akar.',
    },
    {
      q: 'Mengapa xmlns dihapus dari keluaran?',
      a: 'React menangani namespace SVG sendiri; mempertahankan xmlns menyebabkan peringatan konsol, jadi konverter menghapusnya dari elemen akar.',
    },
    {
      q: 'Apakah ini bekerja dengan React Native?',
      a: 'Keluaran ini ditujukan untuk React web. Untuk React Native, beralihlah ke tab React Native untuk mendapatkan komponen react-native-svg sebagai gantinya.',
    },
  ],
  howToUse: 'Cara menggunakan',
  faqHeading: 'Pertanyaan yang sering diajukan',
  moreTools: 'Alat SVG lainnya',
};

const base64Id: ToolContent = {
  title: 'Konverter SVG ke Base64 — Pengenkode Online Gratis | VectorForge',
  description:
    'Enkode SVG sebagai Base64 secara online. Konverter SVG ke Base64 gratis dengan pengkodean aman Unicode, pratinjau langsung, dan penyalinan sekali klik.',
  heading: 'Konverter SVG ke Base64',
  intro:
    'Enkode SVG apa pun ke Base64 untuk tempat-tempat di mana markup mentah tidak muat — file CSS, konfigurasi JSON, atau muatan API. Pengkodeannya aman untuk Unicode (teks Devanagari, emoji, dan teks CJK selamat dalam perjalanan pulang-pergi), dan keluarannya diperbarui secara langsung saat Anda mengedit sumbernya.',
  steps: [
    'Tempel markup SVG Anda ke editor, atau letakkan file .svg di mana saja pada halaman.',
    'Tab Base64 sudah dipilih — string terenkode muncul seketika di panel keluaran.',
    'Salin string Base64 dengan satu klik, atau unduh sebagai file .txt.',
  ],
  faqs: [
    {
      q: 'Apakah keluaran Base64 lebih besar dari SVG aslinya?',
      a: 'Ya — Base64 menambahkan sekitar 33% beban tambahan. Jika ukuran penting, lebih baik data URI terenkode persen (tab CSS Data-URI) untuk CSS, yang biasanya lebih kecil untuk SVG.',
    },
    {
      q: 'Mengapa keluaran Base64 saya berakhir dengan karakter pengisi (=)?',
      a: 'Pengisi adalah bagian dari spesifikasi Base64 dan dekoder mengharapkannya. Biarkan tetap di keluaran.',
    },
    {
      q: 'Bisakah Base64 menangani teks Unicode di dalam SVG saya?',
      a: 'Ya. Alat ini mengenkode sebagai UTF-8 terlebih dahulu, jadi teks non-Latin dan emoji melakukan perjalanan pulang-pergi dengan benar alih-alih rusak.',
    },
  ],
  howToUse: 'Cara menggunakan',
  faqHeading: 'Pertanyaan yang sering diajukan',
  moreTools: 'Alat SVG lainnya',
};

const dataUriId: ToolContent = {
  title: 'Generator SVG ke Data URI / Latar CSS — Gratis | VectorForge',
  description:
    'Ubah SVG menjadi data URI siap CSS untuk background-image. Generator gratis dengan minifikasi, pengkodean teroptimalkan, dan pratinjau langsung.',
  heading: 'Konverter SVG ke Data URI',
  intro:
    'Ubah SVG apa pun menjadi data URI ringkas yang dapat Anda tempel langsung ke background-image. VectorForge meminifikasi SVG terlebih dahulu dan mengenkodenya secara persen, yang membuat URI lebih kecil daripada Base64 untuk ikon pada umumnya — dan Anda dapat melihatnya dirender di pratinjau langsung sebelum menyalin.',
  steps: [
    'Tempel markup SVG Anda ke editor, atau letakkan file .svg di mana saja pada halaman.',
    'Tab CSS Data-URI sudah dipilih — cuplikan diperbarui secara langsung saat Anda mengedit.',
    'Salin cuplikan CSS dengan satu klik, atau unduh sebagai file .css.',
  ],
  faqs: [
    {
      q: 'Data URI atau Base64 — mana yang lebih kecil?',
      a: 'Untuk SVG, data URI terenkode persen biasanya lebih kecil daripada Base64 (Anda menghindari beban pengkodean ~33%), dan alat ini meminifikasi SVG terlebih dahulu untuk mengecilkannya lebih jauh.',
    },
    {
      q: 'Mengapa SVG diminifikasi sebelum pengkodean?',
      a: 'Menghapus komentar, spasi, dan metadata mengecilkan URI tanpa mengubah cara gambar dirender.',
    },
    {
      q: 'Apakah data URI mempertahankan atribut xmlns?',
      a: 'Ya. Penggunaan mandiri (tag img, latar CSS) memerlukan xmlns, jadi atribut itu dipertahankan di sini — tidak seperti keluaran JSX atau komponen React.',
    },
  ],
  howToUse: 'Cara menggunakan',
  faqHeading: 'Pertanyaan yang sering diajukan',
  moreTools: 'Alat SVG lainnya',
};

const optimizerId: ToolContent = {
  title: 'Pengoptimal SVG — Alat SVGO Online Gratis | VectorForge',
  description:
    'Optimalkan file SVG secara online dengan SVGO. Pengoptimal SVG gratis yang mengecilkan ukuran file sambil mempertahankan viewBox dan kualitas visual.',
  heading: 'Pengoptimal SVG',
  intro:
    'Kecilkan file SVG tanpa mengubah tampilannya. VectorForge menjalankan optimasi multipass SVGO langsung di browser Anda — dan dengan sengaja mempertahankan viewBox, sehingga penskalaan responsif tetap bekerja setelah optimasi. Anda melihat dengan tepat berapa byte dan berapa persen yang Anda hemat.',
  steps: [
    'Tempel markup SVG Anda ke editor, atau letakkan file .svg di mana saja pada halaman.',
    'Tekan tombol Optimize di bilah alat — editor diperbarui dengan hasil yang diminifikasi.',
    'Periksa pemberitahuan byte yang dihemat, lalu salin atau unduh SVG yang dioptimalkan.',
  ],
  faqs: [
    {
      q: 'Apakah optimasi mengubah tampilan SVG saya?',
      a: 'Tidak. SVGO hanya menghapus redundansi — metadata, presisi berlebih, spasi. Gunakan pratinjau langsung untuk memverifikasi hasilnya dirender secara identik.',
    },
    {
      q: 'Mengapa kalian mempertahankan viewBox?',
      a: 'Beberapa pengoptimal membuang viewBox ketika width dan height ada, yang secara diam-diam merusak penskalaan responsif. Alat ini memaksakan pelestarian viewBox.',
    },
    {
      q: 'Bisakah saya mendapatkan kembali SVG asli saya setelah mengoptimalkan?',
      a: 'Ya — cukup tempel atau letakkan kembali file aslinya. Tidak ada yang ditimpa kecuali Anda menyalin atau mengunduh hasil yang dioptimalkan.',
    },
  ],
  howToUse: 'Cara menggunakan',
  faqHeading: 'Pertanyaan yang sering diajukan',
  moreTools: 'Alat SVG lainnya',
};

const pngId: ToolContent = {
  title: 'Konverter SVG ke PNG — Ekspor Gratis 1x/2x/4x | VectorForge',
  description:
    'Ubah SVG menjadi PNG pada resolusi 1x, 2x, dan 4x secara online. Konverter SVG ke PNG gratis, tanpa batas, di browser, dengan pratinjau langsung.',
  heading: 'Konverter SVG ke PNG',
  intro:
    'Ekspor PNG yang tajam dari SVG apa pun pada skala 1x, 2x, atau 4x — sempurna untuk favicon, ikon aplikasi, dan gambar sosial. Jika SVG tidak memiliki dimensi eksplisit, viewBox digunakan secara otomatis, dan transparansi dipertahankan.',
  steps: [
    'Tempel markup SVG Anda ke editor, atau letakkan file .svg di mana saja pada halaman.',
    'Pratinjau SVG pada latar apa pun untuk memverifikasinya sebelum mengekspor.',
    'Pilih 1x, 2x, atau 4x dari tombol ekspor PNG dan unduh gambar raster Anda.',
  ],
  faqs: [
    {
      q: 'Resolusi apa saja yang dapat saya ekspor?',
      a: '1x, 2x, dan 4x dari ukuran alami SVG, diambil dari atribut width/height-nya atau viewBox-nya.',
    },
    {
      q: 'Apakah transparansi dipertahankan dalam PNG?',
      a: 'Ya — PNG yang diekspor mempertahankan saluran alfa SVG.',
    },
    {
      q: 'Mengapa PNG saya terlihat berbeda dari pratinjau?',
      a: 'Font eksternal atau gambar tertaut yang dirujuk di dalam SVG tidak dapat dirasterisasi di browser. Ubah teks menjadi garis luar untuk hasil yang sempurna per piksel.',
    },
  ],
  howToUse: 'Cara menggunakan',
  faqHeading: 'Pertanyaan yang sering diajukan',
  moreTools: 'Alat SVG lainnya',
};

/* ---------------- Japanese ---------------- */

const jsxJa: ToolContent = {
  title: 'SVG から JSX へのコンバーター — 無料オンラインツール | VectorForge',
  description:
    'SVG マークアップを数秒で JSX に変換。属性の自動リネーム、スタイルオブジェクト変換、ライブプレビューを備えた無料のオンライン SVG→JSX コンバーター。ブラウザで 100% 動作します。',
  heading: 'SVG から JSX へのコンバーター',
  intro:
    '任意の SVG を貼り付けるだけで、React コンポーネントに使えるクリーンな JSX が得られます。VectorForge は属性を自動的にリネームし（class は className に、stroke-width は strokeWidth に）、インラインスタイルをスタイルオブジェクトに変換し、XML コメントを JSX コメントに変えます — ライブプレビュー付きで即座に。アップロードは一切なく、すべてブラウザの中で行われます。',
  steps: [
    'SVG マークアップをエディタに貼り付けるか、.svg ファイルをページのどこへでもドロップしてください。',
    'JSX タブはすでに選択されています — 入力しながらライブで更新される変換結果を確認してください。',
    'ワンクリックで JSX をコピーするか、プロジェクト用に .jsx ファイルとしてダウンロードしてください。',
  ],
  faqs: [
    {
      q: 'このツールは SVG をサーバーにアップロードしますか？',
      a: 'いいえ。すべての変換は JavaScript を使ってブラウザ内でローカルに実行されます。ファイルがデバイスの外に出ることは決してありません。',
    },
    {
      q: 'JSX では属性名がなぜ変わるのですか？',
      a: 'JSX は JavaScript の命名規則に従うため、stroke-width のようなハイフン付き SVG 属性は camelCase（strokeWidth）になり、class は className になります。このコンバーターはこれらの対応を自動的に適用します。',
    },
    {
      q: '複数の SVG を一度に JSX に変換できますか？',
      a: 'はい。ページに複数のファイルをドロップし、バッチバーで切り替えながら、すべてを ZIP でダウンロードできます。各ファイルは JSX に変換されます。',
    },
  ],
  howToUse: '使い方',
  faqHeading: 'よくある質問',
  moreTools: 'その他の SVG ツール',
};

const reactJa: ToolContent = {
  title: 'SVG から React コンポーネントへのコンバーター — 無料オンライン | VectorForge',
  description:
    '任意の SVG を型付き React（.tsx）コンポーネントに即座に変換。props 対応、クリーンな出力、ライブプレビューを備えた無料の SVG→React コンポーネントコンバーター。',
  heading: 'SVG から React コンポーネントへのコンバーター',
  intro:
    '任意の SVG から本番投入できる TypeScript React コンポーネントを取得します。生成されたコンポーネントは標準の SVG props を受け取り、ルート要素に展開し、React の警告を引き起こす不要な xmlns 宣言を取り除きます — そのままコードベースに入れられます。',
  steps: [
    'SVG マークアップをエディタに貼り付けるか、.svg ファイルをページのどこへでもドロップしてください。',
    'React Component タブはすでに選択されています — コンポーネント名はファイル名から導かれます。',
    'ワンクリックで .tsx コードをコピーするか、ダウンロードして他のコンポーネントと同じようにインポートしてください。',
  ],
  faqs: [
    {
      q: '生成されたコンポーネントはどう使いますか？',
      a: '他のコンポーネントと同じようにインポートし、標準の SVG props を渡します。たとえば <SampleIcon width={24} height={24} fill="currentColor" /> のように。props はルート要素に展開されます。',
    },
    {
      q: '出力から xmlns が取り除かれるのはなぜですか？',
      a: 'React は SVG の名前空間を自前で処理します。xmlns を残すとコンソール警告が出るため、コンバーターはルート要素からそれを取り除きます。',
    },
    {
      q: 'React Native でも使えますか？',
      a: 'この出力は Web 版 React 向けです。React Native には React Native タブに切り替えて react-native-svg コンポーネントを取得してください。',
    },
  ],
  howToUse: '使い方',
  faqHeading: 'よくある質問',
  moreTools: 'その他の SVG ツール',
};

const base64Ja: ToolContent = {
  title: 'SVG から Base64 へのコンバーター — 無料オンラインエンコーダー | VectorForge',
  description:
    'SVG をオンラインで Base64 にエンコード。Unicode セーフなエンコーディング、ライブプレビュー、ワンクリックコピーを備えた無料の SVG→Base64 コンバーター。',
  heading: 'SVG から Base64 へのコンバーター',
  intro:
    '生のマークアップが入らない場所 — CSS ファイル、JSON 設定、API ペイロード — のために、任意の SVG を Base64 エンコードします。エンコーディングは Unicode セーフ（デーヴァナーガリー、絵文字、CJK テキストが往復しても壊れません）で、ソースを編集すると出力はライブで更新されます。',
  steps: [
    'SVG マークアップをエディタに貼り付けるか、.svg ファイルをページのどこへでもドロップしてください。',
    'Base64 タブはすでに選択されています — エンコードされた文字列が出力ペインに即座に表示されます。',
    'ワンクリックで Base64 文字列をコピーするか、.txt ファイルとしてダウンロードしてください。',
  ],
  faqs: [
    {
      q: 'Base64 出力は元の SVG より大きくなりますか？',
      a: 'はい — Base64 はおよそ 33% のオーバーヘッドを加えます。サイズが重要な場合は、CSS にはパーセントエンコードされたデータ URI（CSS Data-URI タブ）を優先してください。SVG では通常そちらの方が小さくなります。',
    },
    {
      q: 'Base64 出力がパディング文字（=）で終わるのはなぜですか？',
      a: 'パディングは Base64 仕様の一部であり、デコーダーはそれを期待します。出力に残しておいてください。',
    },
    {
      q: 'Base64 は SVG 内の Unicode テキストを扱えますか？',
      a: 'はい。このツールはまず UTF-8 としてエンコードするため、非ラテン文字や絵文字が壊れることなく正しく往復します。',
    },
  ],
  howToUse: '使い方',
  faqHeading: 'よくある質問',
  moreTools: 'その他の SVG ツール',
};

const dataUriJa: ToolContent = {
  title: 'SVG からデータ URI / CSS 背景ジェネレーター — 無料 | VectorForge',
  description:
    'SVG を background-image 用の CSS 対応データ URI に変換。ミニファイ、最適化されたエンコーディング、ライブプレビューを備えた無料ジェネレーター。',
  heading: 'SVG からデータ URI へのコンバーター',
  intro:
    '任意の SVG を、background-image にそのまま貼れるコンパクトなデータ URI に変えます。VectorForge はまず SVG をミニファイしてからパーセントエンコードするため、典型的なアイコンでは URI が Base64 より小さくなります — コピーする前にライブプレビューで描画を確認できます。',
  steps: [
    'SVG マークアップをエディタに貼り付けるか、.svg ファイルをページのどこへでもドロップしてください。',
    'CSS Data-URI タブはすでに選択されています — 編集中にスニペットがライブで更新されます。',
    'ワンクリックで CSS スニペットをコピーするか、.css ファイルとしてダウンロードしてください。',
  ],
  faqs: [
    {
      q: 'データ URI と Base64、どちらが小さいですか？',
      a: 'SVG の場合、パーセントエンコードされたデータ URI は通常 Base64 より小さいです（約 33% のエンコーディングオーバーヘッドを回避できます）。さらにこのツールは先に SVG をミニファイして、もっと小さくします。',
    },
    {
      q: 'エンコード前に SVG をミニファイするのはなぜですか？',
      a: 'コメント、空白、メタデータを取り除くことで、画像の描画を変えずに URI を小さくできます。',
    },
    {
      q: 'データ URI は xmlns 属性を保持しますか？',
      a: 'はい。独立した使用（img タグ、CSS 背景）には xmlns が必要なので、ここでは保持されます — JSX や React コンポーネント出力とは異なります。',
    },
  ],
  howToUse: '使い方',
  faqHeading: 'よくある質問',
  moreTools: 'その他の SVG ツール',
};

const optimizerJa: ToolContent = {
  title: 'SVG オプティマイザー — 無料オンライン SVGO ツール | VectorForge',
  description:
    'SVGO で SVG ファイルをオンライン最適化。viewBox と視覚品質を保ちながらファイルサイズを縮小する無料の SVG オプティマイザー。',
  heading: 'SVG オプティマイザー',
  intro:
    '見た目を変えずに SVG ファイルを縮小します。VectorForge はブラウザの中で直接 SVGO のマルチパス最適化を実行し、意図的に viewBox を保持するため、最適化後もレスポンシブなスケーリングが機能し続けます。何バイト、何パーセント節約できたかが正確に分かります。',
  steps: [
    'SVG マークアップをエディタに貼り付けるか、.svg ファイルをページのどこへでもドロップしてください。',
    'ツールバーの Optimize ボタンを押してください — エディタがミニファイ結果で更新されます。',
    '節約バイト数の通知を確認してから、最適化された SVG をコピーまたはダウンロードしてください。',
  ],
  faqs: [
    {
      q: '最適化で SVG の見た目は変わりますか？',
      a: 'いいえ。SVGO は冗長性 — メタデータ、過剰な精度、空白 — だけを取り除きます。ライブプレビューで結果が同一に描画されることを確認してください。',
    },
    {
      q: 'viewBox を保持するのはなぜですか？',
      a: '一部のオプティマイザーは width と height があると viewBox を落としてしまい、レスポンシブなスケーリングが静かに壊れます。このツールは viewBox の保持を強制します。',
    },
    {
      q: '最適化後に元の SVG を取り戻せますか？',
      a: 'はい — 元のファイルを再び貼り付けるかドロップするだけです。最適化結果をコピーまたはダウンロードしない限り、何も上書きされません。',
    },
  ],
  howToUse: '使い方',
  faqHeading: 'よくある質問',
  moreTools: 'その他の SVG ツール',
};

const pngJa: ToolContent = {
  title: 'SVG から PNG へのコンバーター — 無料 1x/2x/4x 書き出し | VectorForge',
  description:
    'SVG を 1x、2x、4x 解像度で PNG にオンライン変換。ライブプレビュー付きの無料・無制限・ブラウザ内 SVG→PNG コンバーター。',
  heading: 'SVG から PNG へのコンバーター',
  intro:
    '任意の SVG から 1x、2x、4x スケールの鮮明な PNG を書き出します — ファビコン、アプリアイコン、ソーシャル画像に最適です。SVG に明示的な寸法がない場合、viewBox が自動的に使用され、透明度は保持されます。',
  steps: [
    'SVG マークアップをエディタに貼り付けるか、.svg ファイルをページのどこへでもドロップしてください。',
    '書き出し前に、任意の背景で SVG をプレビューして確認してください。',
    'PNG 書き出しボタンから 1x、2x、4x を選び、ラスター画像をダウンロードしてください。',
  ],
  faqs: [
    {
      q: 'どの解像度で書き出せますか？',
      a: 'SVG の自然なサイズの 1x、2x、4x です。width/height 属性または viewBox から取得されます。',
    },
    {
      q: 'PNG で透明度は保持されますか？',
      a: 'はい — 書き出された PNG は SVG のアルファチャンネルを保持します。',
    },
    {
      q: 'PNG がプレビューと違って見えるのはなぜですか？',
      a: 'SVG 内で参照される外部フォントやリンク画像はブラウザでラスタライズできません。ピクセルパーフェクトな結果にはテキストをアウトラインに変換してください。',
    },
  ],
  howToUse: '使い方',
  faqHeading: 'よくある質問',
  moreTools: 'その他の SVG ツール',
};

/* ---------------- Russian ---------------- */

const jsxRu: ToolContent = {
  title: 'Конвертер SVG в JSX — бесплатный онлайн-инструмент | VectorForge',
  description:
    'Преобразуйте разметку SVG в JSX за секунды. Бесплатный онлайн-конвертер SVG в JSX с автоматическим переименованием атрибутов, преобразованием стилей в объекты и живым предпросмотром. Работает на 100 % в вашем браузере.',
  heading: 'Конвертер SVG в JSX',
  intro:
    'Вставьте любой SVG и получите чистый JSX, готовый для ваших компонентов React. VectorForge автоматически переименовывает атрибуты (class становится className, stroke-width становится strokeWidth), превращает встроенные стили в объекты стилей, а комментарии XML — в комментарии JSX — мгновенно, с живым предпросмотром. Ничего не загружается на сервер; всё происходит в вашем браузере.',
  steps: [
    'Вставьте разметку SVG в редактор или перетащите файл .svg в любое место страницы.',
    'Вкладка JSX уже выбрана — проверяйте преобразованный результат, который обновляется вживую по мере ввода.',
    'Скопируйте JSX одним щелчком или скачайте его как файл .jsx для своего проекта.',
  ],
  faqs: [
    {
      q: 'Загружает ли этот инструмент мой SVG на сервер?',
      a: 'Нет. Вся конвертация выполняется локально в вашем браузере на JavaScript. Ваши файлы никогда не покидают ваше устройство.',
    },
    {
      q: 'Почему имена атрибутов меняются в JSX?',
      a: 'JSX следует соглашениям об именах в JavaScript, поэтому атрибуты SVG с дефисом, такие как stroke-width, должны стать camelCase (strokeWidth), а class становится className. Этот конвертер применяет эти соответствия автоматически.',
    },
    {
      q: 'Можно ли конвертировать несколько SVG в JSX за раз?',
      a: 'Да. Перетащите несколько файлов на страницу, переключайтесь между ними на панели пакета и скачивайте всё архивом ZIP, где каждый файл преобразован в JSX.',
    },
  ],
  howToUse: 'Как пользоваться',
  faqHeading: 'Частые вопросы',
  moreTools: 'Ещё инструменты SVG',
};

const reactRu: ToolContent = {
  title: 'Конвертер SVG в компонент React — бесплатно онлайн | VectorForge',
  description:
    'Превратите любой SVG в типизированный компонент React (.tsx) мгновенно. Бесплатный конвертер SVG в компонент React с поддержкой пропсов, чистой выдачей и живым предпросмотром.',
  heading: 'Конвертер SVG в компонент React',
  intro:
    'Получите готовый к продакшену компонент React на TypeScript из любого SVG. Сгенерированный компонент принимает стандартные пропсы SVG, распределяет их на корневой элемент и убирает ненужное объявление xmlns, которое вызывает предупреждения React, — готов к прямому помещению в вашу кодовую базу.',
  steps: [
    'Вставьте разметку SVG в редактор или перетащите файл .svg в любое место страницы.',
    'Вкладка «React Component» уже выбрана — имя компонента выводится из имени вашего файла.',
    'Скопируйте код .tsx одним щелчком или скачайте его и импортируйте как любой другой компонент.',
  ],
  faqs: [
    {
      q: 'Как использовать сгенерированный компонент?',
      a: 'Импортируйте его как любой компонент и передавайте стандартные пропсы SVG, например <SampleIcon width={24} height={24} fill="currentColor" />. Пропсы распределяются на корневой элемент.',
    },
    {
      q: 'Почему xmlns удаляется из выдачи?',
      a: 'React сам обрабатывает пространства имён SVG; сохранение xmlns вызывает предупреждение в консоли, поэтому конвертер убирает его из корневого элемента.',
    },
    {
      q: 'Работает ли это с React Native?',
      a: 'Эта выдача рассчитана на веб-React. Для React Native переключитесь на вкладку «React Native», чтобы вместо этого получить компонент react-native-svg.',
    },
  ],
  howToUse: 'Как пользоваться',
  faqHeading: 'Частые вопросы',
  moreTools: 'Ещё инструменты SVG',
};

const base64Ru: ToolContent = {
  title: 'Конвертер SVG в Base64 — бесплатный онлайн-кодировщик | VectorForge',
  description:
    'Кодируйте SVG в Base64 онлайн. Бесплатный конвертер SVG в Base64 с кодировкой, безопасной для Юникода, живым предпросмотром и копированием в один щелчок.',
  heading: 'Конвертер SVG в Base64',
  intro:
    'Кодируйте любой SVG в Base64 для мест, куда сырая разметка не помещается, — файлы CSS, конфигурации JSON или полезные нагрузки API. Кодировка безопасна для Юникода (текст на деванагари, эмодзи и текст CJK переживают путь туда и обратно), а выдача обновляется вживую по мере редактирования исходника.',
  steps: [
    'Вставьте разметку SVG в редактор или перетащите файл .svg в любое место страницы.',
    'Вкладка Base64 уже выбрана — закодированная строка мгновенно появляется на панели вывода.',
    'Скопируйте строку Base64 одним щелчком или скачайте её как файл .txt.',
  ],
  faqs: [
    {
      q: 'Выдача Base64 больше исходного SVG?',
      a: 'Да — Base64 добавляет примерно 33 % накладных расходов. Если размер важен, для CSS предпочитайте data URI с процентным кодированием (вкладка «CSS Data-URI»), который для SVG обычно меньше.',
    },
    {
      q: 'Почему моя выдача Base64 заканчивается символами дополнения (=)?',
      a: 'Дополнение является частью спецификации Base64, и декодеры его ожидают. Оставьте его в выдаче.',
    },
    {
      q: 'Может ли Base64 обрабатывать текст Юникода внутри моего SVG?',
      a: 'Да. Этот инструмент сначала кодирует в UTF-8, поэтому нелатинский текст и эмодзи проходят путь туда и обратно корректно, а не повреждаются.',
    },
  ],
  howToUse: 'Как пользоваться',
  faqHeading: 'Частые вопросы',
  moreTools: 'Ещё инструменты SVG',
};

const dataUriRu: ToolContent = {
  title: 'Генератор SVG в Data URI / фон CSS — бесплатно | VectorForge',
  description:
    'Преобразуйте SVG в готовый для CSS data URI для background-image. Бесплатный генератор с минификацией, оптимизированной кодировкой и живым предпросмотром.',
  heading: 'Конвертер SVG в Data URI',
  intro:
    'Превратите любой SVG в компактный data URI, который можно вставить прямо в background-image. VectorForge сначала минифицирует SVG, а затем кодирует его процентами, что для типичных значков даёт URI меньше, чем Base64, — и вы можете увидеть его отрисовку в живом предпросмотре перед копированием.',
  steps: [
    'Вставьте разметку SVG в редактор или перетащите файл .svg в любое место страницы.',
    'Вкладка «CSS Data-URI» уже выбрана — фрагмент обновляется вживую по мере редактирования.',
    'Скопируйте фрагмент CSS одним щелчком или скачайте его как файл .css.',
  ],
  faqs: [
    {
      q: 'Data URI или Base64 — что меньше?',
      a: 'Для SVG data URI с процентным кодированием обычно меньше, чем Base64 (вы избегаете накладных расходов кодирования ~33 %), а этот инструмент сначала минифицирует SVG, чтобы уменьшить его ещё сильнее.',
    },
    {
      q: 'Почему SVG минифицируется перед кодированием?',
      a: 'Удаление комментариев, пробелов и метаданных уменьшает URI, не меняя того, как изображение отрисовывается.',
    },
    {
      q: 'Сохраняет ли data URI атрибут xmlns?',
      a: 'Да. Для автономного использования (теги img, фоны CSS) xmlns необходим, поэтому здесь он сохраняется — в отличие от выдачи JSX или компонента React.',
    },
  ],
  howToUse: 'Как пользоваться',
  faqHeading: 'Частые вопросы',
  moreTools: 'Ещё инструменты SVG',
};

const optimizerRu: ToolContent = {
  title: 'Оптимизатор SVG — бесплатный онлайн-инструмент SVGO | VectorForge',
  description:
    'Оптимизируйте файлы SVG онлайн с помощью SVGO. Бесплатный оптимизатор SVG, который уменьшает размер файла, сохраняя viewBox и визуальное качество.',
  heading: 'Оптимизатор SVG',
  intro:
    'Уменьшайте файлы SVG, не меняя их внешний вид. VectorForge выполняет многопроходную оптимизацию SVGO прямо в вашем браузере — и намеренно сохраняет viewBox, чтобы адаптивное масштабирование продолжало работать после оптимизации. Вы видите, сколько именно байтов и какой процент вы сэкономили.',
  steps: [
    'Вставьте разметку SVG в редактор или перетащите файл .svg в любое место страницы.',
    'Нажмите кнопку Optimize на панели инструментов — редактор обновится минифицированным результатом.',
    'Проверьте уведомление о сэкономленных байтах, затем скопируйте или скачайте оптимизированный SVG.',
  ],
  faqs: [
    {
      q: 'Меняет ли оптимизация внешний вид моего SVG?',
      a: 'Нет. SVGO удаляет только избыточность — метаданные, лишнюю точность, пробелы. Используйте живой предпросмотр, чтобы убедиться, что результат отрисовывается идентично.',
    },
    {
      q: 'Почему вы сохраняете viewBox?',
      a: 'Некоторые оптимизаторы выбрасывают viewBox, когда присутствуют ширина и высота, что молча ломает адаптивное масштабирование. Этот инструмент принудительно сохраняет viewBox.',
    },
    {
      q: 'Могу ли я вернуть исходный SVG после оптимизации?',
      a: 'Да — просто вставьте или перетащите исходный файл снова. Ничто не перезаписывается, пока вы не скопируете или не скачаете оптимизированный результат.',
    },
  ],
  howToUse: 'Как пользоваться',
  faqHeading: 'Частые вопросы',
  moreTools: 'Ещё инструменты SVG',
};

const pngRu: ToolContent = {
  title: 'Конвертер SVG в PNG — бесплатный экспорт 1x/2x/4x | VectorForge',
  description:
    'Преобразуйте SVG в PNG с разрешением 1x, 2x и 4x онлайн. Бесплатный, безлимитный конвертер SVG в PNG в браузере с живым предпросмотром.',
  heading: 'Конвертер SVG в PNG',
  intro:
    'Экспортируйте чёткие PNG из любого SVG в масштабе 1x, 2x или 4x — идеально для фавиконов, значков приложений и изображений для соцсетей. Если у SVG нет явных размеров, viewBox используется автоматически, а прозрачность сохраняется.',
  steps: [
    'Вставьте разметку SVG в редактор или перетащите файл .svg в любое место страницы.',
    'Предпросмотрите SVG на любом фоне, чтобы проверить его перед экспортом.',
    'Выберите 1x, 2x или 4x на кнопках экспорта PNG и скачайте растровое изображение.',
  ],
  faqs: [
    {
      q: 'Какие разрешения можно экспортировать?',
      a: '1x, 2x и 4x от естественного размера SVG, взятого из его атрибутов width/height или его viewBox.',
    },
    {
      q: 'Сохраняется ли прозрачность в PNG?',
      a: 'Да — экспортированный PNG сохраняет альфа-канал SVG.',
    },
    {
      q: 'Почему мой PNG выглядит иначе, чем предпросмотр?',
      a: 'Внешние шрифты или связанные изображения, на которые ссылается SVG, не могут быть растеризованы в браузере. Преобразуйте текст в контуры для попиксельно точных результатов.',
    },
  ],
  howToUse: 'Как пользоваться',
  faqHeading: 'Частые вопросы',
  moreTools: 'Ещё инструменты SVG',
};

/* ---------------- Korean ---------------- */

const jsxKo: ToolContent = {
  title: 'SVG를 JSX로 변환 — 무료 온라인 도구 | VectorForge',
  description:
    'SVG 마크업을 몇 초 만에 JSX로 변환하세요. 속성 이름 자동 변경, 스타일 객체 변환, 실시간 미리보기를 제공하는 무료 온라인 SVG→JSX 변환기. 브라우저에서 100% 실행됩니다.',
  heading: 'SVG를 JSX로 변환',
  intro:
    'SVG를 붙여넣기만 하면 React 컴포넌트에 바로 쓸 수 있는 깔끔한 JSX를 얻을 수 있습니다. VectorForge는 속성을 자동으로 바꿔주고(class는 className으로, stroke-width는 strokeWidth로), 인라인 스타일을 스타일 객체로 변환하며, XML 주석을 JSX 주석으로 바꿉니다 — 실시간 미리보기와 함께 즉시. 업로드는 전혀 없으며 모든 것이 브라우저 안에서 이루어집니다.',
  steps: [
    'SVG 마크업을 편집기에 붙여넣거나 .svg 파일을 페이지 어디에든 놓으세요.',
    'JSX 탭이 이미 선택되어 있습니다 — 입력하면서 실시간으로 업데이트되는 변환 결과를 확인하세요.',
    '클릭 한 번으로 JSX를 복사하거나 프로젝트용 .jsx 파일로 다운로드하세요.',
  ],
  faqs: [
    {
      q: '이 도구가 제 SVG를 서버에 업로드하나요?',
      a: '아니요. 모든 변환은 JavaScript를 사용해 브라우저 안에서 로컬로 실행됩니다. 파일이 기기를 떠나는 일은 결코 없습니다.',
    },
    {
      q: 'JSX에서는 속성 이름이 왜 바뀌나요?',
      a: 'JSX는 JavaScript 명명 규칙을 따르므로 stroke-width 같은 하이픈이 있는 SVG 속성은 camelCase(strokeWidth)가 되어야 하고 class는 className이 됩니다. 이 변환기는 이러한 대응을 자동으로 적용합니다.',
    },
    {
      q: '여러 SVG를 한 번에 JSX로 변환할 수 있나요?',
      a: '네. 페이지에 여러 파일을 놓고, 일괄 표시줄에서 전환하면서, 각 파일이 JSX로 변환된 상태로 전부 ZIP으로 다운로드할 수 있습니다.',
    },
  ],
  howToUse: '사용 방법',
  faqHeading: '자주 묻는 질문',
  moreTools: '더 많은 SVG 도구',
};

const reactKo: ToolContent = {
  title: 'SVG를 React 컴포넌트로 변환 — 무료 온라인 | VectorForge',
  description:
    '모든 SVG를 타입이 있는 React(.tsx) 컴포넌트로 즉시 바꾸세요. props 지원, 깔끔한 출력, 실시간 미리보기를 제공하는 무료 SVG→React 컴포넌트 변환기.',
  heading: 'SVG를 React 컴포넌트로 변환',
  intro:
    '모든 SVG에서 프로덕션에 바로 쓸 수 있는 TypeScript React 컴포넌트를 얻으세요. 생성된 컴포넌트는 표준 SVG props를 받아 루트 요소에 펼치고, React 경고를 일으키는 불필요한 xmlns 선언을 제거합니다 — 코드베이스에 바로 넣을 수 있습니다.',
  steps: [
    'SVG 마크업을 편집기에 붙여넣거나 .svg 파일을 페이지 어디에든 놓으세요.',
    'React Component 탭이 이미 선택되어 있습니다 — 컴포넌트 이름은 파일 이름에서 파생됩니다.',
    '클릭 한 번으로 .tsx 코드를 복사하거나 다운로드해서 다른 컴포넌트처럼 가져오세요.',
  ],
  faqs: [
    {
      q: '생성된 컴포넌트는 어떻게 사용하나요?',
      a: '다른 컴포넌트처럼 가져와 표준 SVG props를 전달하세요. 예를 들어 <SampleIcon width={24} height={24} fill="currentColor" /> 처럼요. props는 루트 요소에 펼쳐집니다.',
    },
    {
      q: '출력에서 xmlns가 제거되는 이유는 무엇인가요?',
      a: 'React는 SVG 네임스페이스를 자체적으로 처리합니다. xmlns를 유지하면 콘솔 경고가 발생하므로 변환기가 루트 요소에서 이를 제거합니다.',
    },
    {
      q: 'React Native에서도 작동하나요?',
      a: '이 출력은 웹 React를 대상으로 합니다. React Native용으로는 React Native 탭으로 전환해 react-native-svg 컴포넌트를 대신 받으세요.',
    },
  ],
  howToUse: '사용 방법',
  faqHeading: '자주 묻는 질문',
  moreTools: '더 많은 SVG 도구',
};

const base64Ko: ToolContent = {
  title: 'SVG를 Base64로 변환 — 무료 온라인 인코더 | VectorForge',
  description:
    'SVG를 온라인으로 Base64로 인코딩하세요. 유니코드 안전 인코딩, 실시간 미리보기, 원클릭 복사를 제공하는 무료 SVG→Base64 변환기.',
  heading: 'SVG를 Base64로 변환',
  intro:
    '원시 마크업이 들어가지 않는 곳 — CSS 파일, JSON 설정, API 페이로드 — 을 위해 모든 SVG를 Base64로 인코딩하세요. 인코딩은 유니코드 안전합니다(데바나가리, 이모지, CJK 텍스트가 왕복해도 살아남습니다). 소스를 편집하면 출력이 실시간으로 업데이트됩니다.',
  steps: [
    'SVG 마크업을 편집기에 붙여넣거나 .svg 파일을 페이지 어디에든 놓으세요.',
    'Base64 탭이 이미 선택되어 있습니다 — 인코딩된 문자열이 출력 창에 즉시 나타납니다.',
    '클릭 한 번으로 Base64 문자열을 복사하거나 .txt 파일로 다운로드하세요.',
  ],
  faqs: [
    {
      q: 'Base64 출력이 원본 SVG보다 큰가요?',
      a: '네 — Base64는 대략 33%의 오버헤드를 더합니다. 크기가 중요하다면 CSS에는 퍼센트 인코딩된 데이터 URI(CSS Data-URI 탭)를 선호하세요. SVG에서는 보통 그쪽이 더 작습니다.',
    },
    {
      q: 'Base64 출력이 패딩 문자(=)로 끝나는 이유는 무엇인가요?',
      a: '패딩은 Base64 사양의 일부이며 디코더가 이를 기대합니다. 출력에 그대로 두세요.',
    },
    {
      q: 'Base64가 제 SVG 안의 유니코드 텍스트를 처리할 수 있나요?',
      a: '네. 이 도구는 먼저 UTF-8로 인코딩하므로 비라틴 문자와 이모지가 깨지지 않고 올바르게 왕복합니다.',
    },
  ],
  howToUse: '사용 방법',
  faqHeading: '자주 묻는 질문',
  moreTools: '더 많은 SVG 도구',
};

const dataUriKo: ToolContent = {
  title: 'SVG를 데이터 URI / CSS 배경으로 — 무료 생성기 | VectorForge',
  description:
    'SVG를 background-image용 CSS 대응 데이터 URI로 변환하세요. 축소, 최적화된 인코딩, 실시간 미리보기를 제공하는 무료 생성기.',
  heading: 'SVG를 데이터 URI로 변환',
  intro:
    '모든 SVG를 background-image에 바로 붙여넣을 수 있는 간결한 데이터 URI로 바꾸세요. VectorForge는 먼저 SVG를 축소한 뒤 퍼센트 인코딩하므로, 일반적인 아이콘에서는 URI가 Base64보다 작게 유지됩니다 — 복사하기 전에 실시간 미리보기에서 렌더링되는 모습을 볼 수 있습니다.',
  steps: [
    'SVG 마크업을 편집기에 붙여넣거나 .svg 파일을 페이지 어디에든 놓으세요.',
    'CSS Data-URI 탭이 이미 선택되어 있습니다 — 편집하면서 스니펫이 실시간으로 업데이트됩니다.',
    '클릭 한 번으로 CSS 스니펫을 복사하거나 .css 파일로 다운로드하세요.',
  ],
  faqs: [
    {
      q: '데이터 URI와 Base64 중 어느 쪽이 더 작은가요?',
      a: 'SVG의 경우 퍼센트 인코딩된 데이터 URI가 보통 Base64보다 작습니다(약 33%의 인코딩 오버헤드를 피할 수 있습니다). 게다가 이 도구는 먼저 SVG를 축소해 더 작게 만듭니다.',
    },
    {
      q: '인코딩 전에 SVG를 축소하는 이유는 무엇인가요?',
      a: '주석, 공백, 메타데이터를 제거하면 이미지 렌더링 방식을 바꾸지 않고 URI가 작아집니다.',
    },
    {
      q: '데이터 URI가 xmlns 속성을 유지하나요?',
      a: '네. 독립적인 사용(img 태그, CSS 배경)에는 xmlns가 필요하므로 여기서는 보존됩니다 — JSX나 React 컴포넌트 출력과는 다릅니다.',
    },
  ],
  howToUse: '사용 방법',
  faqHeading: '자주 묻는 질문',
  moreTools: '더 많은 SVG 도구',
};

const optimizerKo: ToolContent = {
  title: 'SVG 최적화 도구 — 무료 온라인 SVGO 도구 | VectorForge',
  description:
    'SVGO로 SVG 파일을 온라인에서 최적화하세요. viewBox와 시각적 품질을 유지하면서 파일 크기를 줄이는 무료 SVG 최적화 도구.',
  heading: 'SVG 최적화 도구',
  intro:
    '모습을 바꾸지 않고 SVG 파일을 줄이세요. VectorForge는 브라우저 안에서 직접 SVGO 다중 패스 최적화를 실행하고, 의도적으로 viewBox를 유지하므로 최적화 후에도 반응형 크기 조정이 계속 작동합니다. 몇 바이트, 몇 퍼센트를 절약했는지 정확히 볼 수 있습니다.',
  steps: [
    'SVG 마크업을 편집기에 붙여넣거나 .svg 파일을 페이지 어디에든 놓으세요.',
    '도구 모음의 Optimize 버튼을 누르세요 — 편집기가 축소된 결과로 업데이트됩니다.',
    '절약된 바이트 알림을 확인한 뒤, 최적화된 SVG를 복사하거나 다운로드하세요.',
  ],
  faqs: [
    {
      q: '최적화가 제 SVG의 모습을 바꾸나요?',
      a: '아니요. SVGO는 중복 — 메타데이터, 과도한 정밀도, 공백 — 만 제거합니다. 실시간 미리보기로 결과가 동일하게 렌더링되는지 확인하세요.',
    },
    {
      q: 'viewBox를 유지하는 이유는 무엇인가요?',
      a: '일부 최적화 도구는 너비와 높이가 있으면 viewBox를 버리는데, 그러면 반응형 크기 조정이 조용히 깨집니다. 이 도구는 viewBox 보존을 강제합니다.',
    },
    {
      q: '최적화한 뒤 원본 SVG를 되돌릴 수 있나요?',
      a: '네 — 원본 파일을 다시 붙여넣거나 놓기만 하면 됩니다. 최적화된 결과를 복사하거나 다운로드하지 않는 한 아무것도 덮어써지지 않습니다.',
    },
  ],
  howToUse: '사용 방법',
  faqHeading: '자주 묻는 질문',
  moreTools: '더 많은 SVG 도구',
};

const pngKo: ToolContent = {
  title: 'SVG를 PNG로 변환 — 무료 1x/2x/4x 내보내기 | VectorForge',
  description:
    'SVG를 1x, 2x, 4x 해상도의 PNG로 온라인 변환하세요. 실시간 미리보기를 제공하는 무료, 무제한, 브라우저 내 SVG→PNG 변환기.',
  heading: 'SVG를 PNG로 변환',
  intro:
    '모든 SVG에서 1x, 2x, 4x 배율의 선명한 PNG를 내보내세요 — 파비콘, 앱 아이콘, 소셜 이미지에 완벽합니다. SVG에 명시적 치수가 없으면 viewBox가 자동으로 사용되며, 투명도는 유지됩니다.',
  steps: [
    'SVG 마크업을 편집기에 붙여넣거나 .svg 파일을 페이지 어디에든 놓으세요.',
    '내보내기 전에 모든 배경에서 SVG를 미리보기로 확인하세요.',
    'PNG 내보내기 버튼에서 1x, 2x, 4x를 선택하고 래스터 이미지를 다운로드하세요.',
  ],
  faqs: [
    {
      q: '어떤 해상도로 내보낼 수 있나요?',
      a: 'SVG의 자연 크기(width/height 속성 또는 viewBox에서 가져옴)의 1x, 2x, 4x입니다.',
    },
    {
      q: 'PNG에서 투명도가 유지되나요?',
      a: '네 — 내보낸 PNG는 SVG의 알파 채널을 유지합니다.',
    },
    {
      q: '제 PNG가 미리보기와 다르게 보이는 이유는 무엇인가요?',
      a: 'SVG 내부에서 참조되는 외부 글꼴이나 연결된 이미지는 브라우저에서 래스터화할 수 없습니다. 픽셀 단위로 완벽한 결과를 원하면 텍스트를 윤곽선으로 변환하세요.',
    },
  ],
  howToUse: '사용 방법',
  faqHeading: '자주 묻는 질문',
  moreTools: '더 많은 SVG 도구',
};

/* ---------------- Chinese (Simplified) ---------------- */

const jsxZhCn: ToolContent = {
  title: 'SVG 转 JSX 转换器 — 免费在线工具 | VectorForge',
  description:
    '几秒钟内将 SVG 标记转换为 JSX。免费的在线 SVG 转 JSX 转换器，具有自动属性重命名、样式对象转换和实时预览功能。100% 在您的浏览器中运行。',
  heading: 'SVG 转 JSX 转换器',
  intro:
    '粘贴任何 SVG，即可获得干净的 JSX，可直接用于您的 React 组件。VectorForge 会自动重命名属性（class 变为 className，stroke-width 变为 strokeWidth），将内联样式转换为样式对象，并将 XML 注释转换为 JSX 注释——即时完成，并提供实时预览。没有任何上传；一切都发生在您的浏览器中。',
  steps: [
    '将 SVG 标记粘贴到编辑器中，或将 .svg 文件拖放到页面上的任何位置。',
    'JSX 选项卡已预先选中——在您输入时实时查看转换后的输出更新。',
    '一键复制 JSX，或将其下载为 .jsx 文件用于您的项目。',
  ],
  faqs: [
    {
      q: '这个工具会把我的 SVG 上传到服务器吗？',
      a: '不会。所有转换都使用 JavaScript 在您的浏览器中本地运行。您的文件永远不会离开您的设备。',
    },
    {
      q: '为什么 JSX 中属性名会改变？',
      a: 'JSX 遵循 JavaScript 命名约定，因此像 stroke-width 这样带连字符的 SVG 属性必须变为驼峰式（strokeWidth），class 也变为 className。此转换器会自动应用这些映射。',
    },
    {
      q: '我可以一次将多个 SVG 转换为 JSX 吗？',
      a: '可以。将多个文件拖到页面上，在批量栏中切换它们，并将所有内容下载为 ZIP，每个文件都已转换为 JSX。',
    },
  ],
  howToUse: '使用方法',
  faqHeading: '常见问题',
  moreTools: '更多 SVG 工具',
};

const reactZhCn: ToolContent = {
  title: 'SVG 转 React 组件转换器 — 免费在线 | VectorForge',
  description:
    '立即将任何 SVG 转换为带类型的 React（.tsx）组件。免费的 SVG 转 React 组件转换器，支持 props、输出干净、实时预览。',
  heading: 'SVG 转 React 组件转换器',
  intro:
    '从任何 SVG 获得可直接用于生产的 TypeScript React 组件。生成的组件接受标准 SVG props，将它们展开到根元素上，并删除会触发 React 警告的不必要的 xmlns 声明——可以直接放入您的代码库。',
  steps: [
    '将 SVG 标记粘贴到编辑器中，或将 .svg 文件拖放到页面上的任何位置。',
    'React Component 选项卡已预先选中——组件名称源自您的文件名。',
    '一键复制 .tsx 代码，或下载后像任何其他组件一样导入它。',
  ],
  faqs: [
    {
      q: '如何使用生成的组件？',
      a: '像任何组件一样导入它，并传递标准 SVG props，例如 <SampleIcon width={24} height={24} fill="currentColor" />。props 会展开到根元素上。',
    },
    {
      q: '为什么输出中删除了 xmlns？',
      a: 'React 会自行处理 SVG 命名空间；保留 xmlns 会导致控制台警告，因此转换器会从根元素中删除它。',
    },
    {
      q: '这适用于 React Native 吗？',
      a: '此输出面向 Web React。对于 React Native，请切换到 React Native 选项卡，改为获取 react-native-svg 组件。',
    },
  ],
  howToUse: '使用方法',
  faqHeading: '常见问题',
  moreTools: '更多 SVG 工具',
};

const base64ZhCn: ToolContent = {
  title: 'SVG 转 Base64 转换器 — 免费在线编码器 | VectorForge',
  description:
    '在线将 SVG 编码为 Base64。免费的 SVG 转 Base64 转换器，具有 Unicode 安全编码、实时预览和一键复制功能。',
  heading: 'SVG 转 Base64 转换器',
  intro:
    '将任何 SVG 进行 Base64 编码，用于原始标记放不下的地方——CSS 文件、JSON 配置或 API 载荷。编码对 Unicode 安全（天城文、表情符号和 CJK 文本都能在往返中完好无损），并且在您编辑源文件时输出会实时更新。',
  steps: [
    '将 SVG 标记粘贴到编辑器中，或将 .svg 文件拖放到页面上的任何位置。',
    'Base64 选项卡已预先选中——编码后的字符串会立即出现在输出窗格中。',
    '一键复制 Base64 字符串，或将其下载为 .txt 文件。',
  ],
  faqs: [
    {
      q: 'Base64 输出比原始 SVG 大吗？',
      a: '是的——Base64 会增加大约 33% 的开销。如果大小很重要，对于 CSS 更推荐使用百分比编码的数据 URI（CSS Data-URI 选项卡），它对 SVG 通常更小。',
    },
    {
      q: '为什么我的 Base64 输出以填充字符（=）结尾？',
      a: '填充是 Base64 规范的一部分，解码器会期望它。请将其保留在输出中。',
    },
    {
      q: 'Base64 能处理我 SVG 内部的 Unicode 文本吗？',
      a: '可以。此工具先按 UTF-8 编码，因此非拉丁文本和表情符号能正确往返，而不会损坏。',
    },
  ],
  howToUse: '使用方法',
  faqHeading: '常见问题',
  moreTools: '更多 SVG 工具',
};

const dataUriZhCn: ToolContent = {
  title: 'SVG 转数据 URI / CSS 背景生成器 — 免费 | VectorForge',
  description:
    '将 SVG 转换为可用于 background-image 的 CSS 数据 URI。免费生成器，具有压缩、优化编码和实时预览功能。',
  heading: 'SVG 转数据 URI 转换器',
  intro:
    '将任何 SVG 转换为紧凑的数据 URI，可直接粘贴到 background-image 中。VectorForge 先压缩 SVG，然后对其进行百分比编码，这使 URI 对典型图标来说比 Base64 更小——并且您可以在复制前在实时预览中看到它渲染出来。',
  steps: [
    '将 SVG 标记粘贴到编辑器中，或将 .svg 文件拖放到页面上的任何位置。',
    'CSS Data-URI 选项卡已预先选中——在您编辑时代码片段会实时更新。',
    '一键复制 CSS 代码片段，或将其下载为 .css 文件。',
  ],
  faqs: [
    {
      q: '数据 URI 和 Base64——哪个更小？',
      a: '对于 SVG，百分比编码的数据 URI 通常比 Base64 更小（您避免了约 33% 的编码开销），并且此工具会先压缩 SVG 以进一步减小它。',
    },
    {
      q: '为什么要在编码前压缩 SVG？',
      a: '去除注释、空白和元数据可以在不改变图像渲染方式的情况下缩小 URI。',
    },
    {
      q: '数据 URI 会保留 xmlns 属性吗？',
      a: '会。独立使用（img 标签、CSS 背景）需要 xmlns，因此此处会保留它——与 JSX 或 React 组件输出不同。',
    },
  ],
  howToUse: '使用方法',
  faqHeading: '常见问题',
  moreTools: '更多 SVG 工具',
};

const optimizerZhCn: ToolContent = {
  title: 'SVG 优化器 — 免费在线 SVGO 工具 | VectorForge',
  description:
    '使用 SVGO 在线优化 SVG 文件。免费的 SVG 优化器，在缩小文件大小的同时保留 viewBox 和视觉质量。',
  heading: 'SVG 优化器',
  intro:
    '在不改变外观的情况下缩小 SVG 文件。VectorForge 直接在您的浏览器中运行 SVGO 多遍优化——并有意保留 viewBox，因此优化后响应式缩放仍能继续工作。您可以准确看到节省了多少字节和百分比。',
  steps: [
    '将 SVG 标记粘贴到编辑器中，或将 .svg 文件拖放到页面上的任何位置。',
    '按下工具栏中的 Optimize 按钮——编辑器会更新为压缩后的结果。',
    '查看已节省字节的提示，然后复制或下载优化后的 SVG。',
  ],
  faqs: [
    {
      q: '优化会改变我的 SVG 的外观吗？',
      a: '不会。SVGO 只删除冗余——元数据、过多的精度、空白。请使用实时预览验证结果渲染完全一致。',
    },
    {
      q: '为什么你们保留 viewBox？',
      a: '一些优化器在存在 width 和 height 时会丢弃 viewBox，这会悄无声息地破坏响应式缩放。此工具强制保留 viewBox。',
    },
    {
      q: '优化后还能找回我的原始 SVG 吗？',
      a: '可以——只需重新粘贴或再次拖入原始文件。除非您复制或下载优化结果，否则不会覆盖任何内容。',
    },
  ],
  howToUse: '使用方法',
  faqHeading: '常见问题',
  moreTools: '更多 SVG 工具',
};

const pngZhCn: ToolContent = {
  title: 'SVG 转 PNG 转换器 — 免费 1x/2x/4x 导出 | VectorForge',
  description:
    '在线将 SVG 以 1x、2x 和 4x 分辨率转换为 PNG。免费、无限制、浏览器内的 SVG 转 PNG 转换器，具有实时预览功能。',
  heading: 'SVG 转 PNG 转换器',
  intro:
    '从任何 SVG 以 1x、2x 或 4x 比例导出清晰的 PNG——非常适合网站图标、应用图标和社交图片。如果 SVG 缺少明确尺寸，将自动使用 viewBox，并且透明度会被保留。',
  steps: [
    '将 SVG 标记粘贴到编辑器中，或将 .svg 文件拖放到页面上的任何位置。',
    '在导出前，在任何背景上预览 SVG 以进行验证。',
    '从 PNG 导出按钮中选择 1x、2x 或 4x，并下载您的栅格图像。',
  ],
  faqs: [
    {
      q: '我可以导出哪些分辨率？',
      a: 'SVG 自然大小的 1x、2x 和 4x，取自其 width/height 属性或其 viewBox。',
    },
    {
      q: 'PNG 中会保留透明度吗？',
      a: '会——导出的 PNG 保留 SVG 的 alpha 通道。',
    },
    {
      q: '为什么我的 PNG 看起来与预览不同？',
      a: 'SVG 内部引用的外部字体或链接图像无法在浏览器中栅格化。将文本转换为轮廓以获得像素级完美的结果。',
    },
  ],
  howToUse: '使用方法',
  faqHeading: '常见问题',
  moreTools: '更多 SVG 工具',
};

/* ---------------- Arabic ---------------- */

const jsxAr: ToolContent = {
  title: 'محوّل SVG إلى JSX — أداة مجانية عبر الإنترنت | VectorForge',
  description:
    'حوّل ترميز SVG إلى JSX في ثوانٍ. محوّل مجاني عبر الإنترنت من SVG إلى JSX مع إعادة تسمية السمات تلقائيًا وتحويل الأنماط إلى كائنات ومعاينة مباشرة. يعمل بنسبة 100٪ داخل متصفحك.',
  heading: 'محوّل SVG إلى JSX',
  intro:
    'الصق أي ملف SVG واحصل على JSX نظيف جاهز لمكونات React الخاصة بك. يعيد VectorForge تسمية السمات تلقائيًا (تصبح class ‏className، وتصبح stroke-width ‏strokeWidth)، ويحوّل الأنماط المضمنة إلى كائنات أنماط، ويحوّل تعليقات XML إلى تعليقات JSX — فورًا، مع معاينة مباشرة. لا يُرفع أي شيء؛ كل شيء يحدث في متصفحك.',
  steps: [
    'الصق ترميز SVG في المحرر، أو أفلت ملف .svg في أي مكان بالصفحة.',
    'علامة تبويب JSX محددة مسبقًا — راجع الناتج المحوَّل الذي يتحدث مباشرة أثناء الكتابة.',
    'انسخ JSX بنقرة واحدة، أو نزّله كملف .jsx لمشروعك.',
  ],
  faqs: [
    {
      q: 'هل ترفع هذه الأداة ملف SVG الخاص بي إلى خادم؟',
      a: 'لا. كل التحويل يعمل محليًا في متصفحك باستخدام JavaScript. ملفاتك لا تغادر جهازك أبدًا.',
    },
    {
      q: 'لماذا تتغير أسماء السمات في JSX؟',
      a: 'يتبع JSX اصطلاحات تسمية JavaScript، لذا يجب أن تصبح سمات SVG ذات الشرطات مثل stroke-width بصيغة camelCase ‏(strokeWidth) وتصبح class ‏className. يطبق هذا المحوّل تلك المقابلات تلقائيًا.',
    },
    {
      q: 'هل يمكنني تحويل عدة ملفات SVG إلى JSX دفعة واحدة؟',
      a: 'نعم. أفلت عدة ملفات على الصفحة، وبدّل بينها في شريط الدُفعات، ونزّل كل شيء كملف ZIP مع تحويل كل ملف إلى JSX.',
    },
  ],
  howToUse: 'طريقة الاستخدام',
  faqHeading: 'الأسئلة الشائعة',
  moreTools: 'المزيد من أدوات SVG',
};

const reactAr: ToolContent = {
  title: 'محوّل SVG إلى مكوّن React — مجاني عبر الإنترنت | VectorForge',
  description:
    'حوّل أي ملف SVG إلى مكوّن React مُنمّط (.tsx) فورًا. محوّل مجاني من SVG إلى مكوّن React مع دعم الخصائص وناتج نظيف ومعاينة مباشرة.',
  heading: 'محوّل SVG إلى مكوّن React',
  intro:
    'احصل على مكوّن React بـ TypeScript جاهز للإنتاج من أي ملف SVG. يقبل المكوّن المُولَّد خصائص SVG القياسية، وينشرها على العنصر الجذر، ويحذف إعلان xmlns غير الضروري الذي يثير تحذيرات React — جاهز للإسقاط مباشرة في قاعدة الكود الخاصة بك.',
  steps: [
    'الصق ترميز SVG في المحرر، أو أفلت ملف .svg في أي مكان بالصفحة.',
    'علامة تبويب React Component محددة مسبقًا — يُشتق اسم المكوّن من اسم ملفك.',
    'انسخ كود .tsx بنقرة واحدة، أو نزّله واستورده مثل أي مكوّن آخر.',
  ],
  faqs: [
    {
      q: 'كيف أستخدم المكوّن المُولَّد؟',
      a: 'استورده مثل أي مكوّن ومرّر له خصائص SVG القياسية، على سبيل المثال <SampleIcon width={24} height={24} fill="currentColor" />. تنتشر الخصائص على العنصر الجذر.',
    },
    {
      q: 'لماذا يُحذف xmlns من الناتج؟',
      a: 'يتعامل React مع فضاءات أسماء SVG بنفسه؛ إبقاء xmlns يسبب تحذيرًا في وحدة التحكم، لذا يحذفه المحوّل من العنصر الجذر.',
    },
    {
      q: 'هل يعمل هذا مع React Native؟',
      a: 'هذا الناتج يستهدف React للويب. بالنسبة إلى React Native، بدّل إلى علامة تبويب React Native للحصول على مكوّن react-native-svg بدلًا من ذلك.',
    },
  ],
  howToUse: 'طريقة الاستخدام',
  faqHeading: 'الأسئلة الشائعة',
  moreTools: 'المزيد من أدوات SVG',
};

const base64Ar: ToolContent = {
  title: 'محوّل SVG إلى Base64 — مُشفّر مجاني عبر الإنترنت | VectorForge',
  description:
    'شفّر SVG كـ Base64 عبر الإنترنت. محوّل مجاني من SVG إلى Base64 مع تشفير آمن ليونيكود ومعاينة مباشرة ونسخ بنقرة واحدة.',
  heading: 'محوّل SVG إلى Base64',
  intro:
    'شفّر أي ملف SVG بـ Base64 للأماكن التي لا يتسع فيها الترميز الخام — ملفات CSS أو تكوينات JSON أو حمولات API. التشفير آمن ليونيكود (نص الديفاناغاري والرموز التعبيرية ونص CJK تنجو من رحلة الذهاب والعودة)، ويتحدث الناتج مباشرة أثناء تحرير المصدر.',
  steps: [
    'الصق ترميز SVG في المحرر، أو أفلت ملف .svg في أي مكان بالصفحة.',
    'علامة تبويب Base64 محددة مسبقًا — تظهر السلسلة المشفرة فورًا في لوحة الناتج.',
    'انسخ سلسلة Base64 بنقرة واحدة، أو نزّلها كملف .txt.',
  ],
  faqs: [
    {
      q: 'هل ناتج Base64 أكبر من ملف SVG الأصلي؟',
      a: 'نعم — يضيف Base64 نحو 33٪ من الحجم الإضافي. إذا كان الحجم مهمًا، فضّل data URI مُشفّرًا بالنسبة المئوية (علامة تبويب CSS Data-URI) لـ CSS، فهو عادة أصغر لـ SVG.',
    },
    {
      q: 'لماذا ينتهي ناتج Base64 الخاص بي بأحرف حشو (=)؟',
      a: 'الحشو جزء من مواصفة Base64 وتتوقعه فاكّات التشفير. أبقِه في الناتج.',
    },
    {
      q: 'هل يستطيع Base64 التعامل مع نص يونيكود داخل ملف SVG الخاص بي؟',
      a: 'نعم. تُشفّر هذه الأداة كـ UTF-8 أولًا، لذا يرحل النص غير اللاتيني والرموز التعبيرية ذهابًا وعودة بشكل صحيح بدلًا من أن يفسد.',
    },
  ],
  howToUse: 'طريقة الاستخدام',
  faqHeading: 'الأسئلة الشائعة',
  moreTools: 'المزيد من أدوات SVG',
};

const dataUriAr: ToolContent = {
  title: 'مولّد SVG إلى Data URI / خلفية CSS — مجاني | VectorForge',
  description:
    'حوّل SVG إلى data URI جاهز لـ CSS من أجل background-image. مولّد مجاني مع تصغير وتشفير مُحسَّن ومعاينة مباشرة.',
  heading: 'محوّل SVG إلى Data URI',
  intro:
    'حوّل أي ملف SVG إلى data URI مدمج يمكنك لصقه مباشرة في background-image. يصغّر VectorForge ملف SVG أولًا ثم يشفّره بالنسبة المئوية، ما يجعل URI أصغر من Base64 للرموز المعتادة — ويمكنك رؤيته يُعرَض في المعاينة المباشرة قبل النسخ.',
  steps: [
    'الصق ترميز SVG في المحرر، أو أفلت ملف .svg في أي مكان بالصفحة.',
    'علامة تبويب CSS Data-URI محددة مسبقًا — يتحدث المقتطف مباشرة أثناء التحرير.',
    'انسخ مقتطف CSS بنقرة واحدة، أو نزّله كملف .css.',
  ],
  faqs: [
    {
      q: 'Data URI أم Base64 — أيهما أصغر؟',
      a: 'بالنسبة إلى SVG، عادة ما يكون data URI المشفّر بالنسبة المئوية أصغر من Base64 (تتجنب حمل التشفير البالغ ~33٪)، وتصغّر هذه الأداة ملف SVG أولًا لتقليصه أكثر.',
    },
    {
      q: 'لماذا يُصغَّر ملف SVG قبل التشفير؟',
      a: 'إزالة التعليقات والمساحات البيضاء والبيانات الوصفية تصغّر URI دون تغيير كيفية عرض الصورة.',
    },
    {
      q: 'هل يحتفظ data URI بسمّة xmlns؟',
      a: 'نعم. الاستخدام المستقل (وسوم img وخلفيات CSS) يتطلب xmlns، لذا يُحفَظ هنا — على عكس ناتج JSX أو مكوّن React.',
    },
  ],
  howToUse: 'طريقة الاستخدام',
  faqHeading: 'الأسئلة الشائعة',
  moreTools: 'المزيد من أدوات SVG',
};

const optimizerAr: ToolContent = {
  title: 'مُحسّن SVG — أداة SVGO مجانية عبر الإنترنت | VectorForge',
  description:
    'حسّن ملفات SVG عبر الإنترنت بـ SVGO. مُحسّن SVG مجاني يقلّص حجم الملف مع الحفاظ على viewBox والجودة البصرية.',
  heading: 'مُحسّن SVG',
  intro:
    'قلّص ملفات SVG دون تغيير مظهرها. يشغّل VectorForge تحسين SVGO متعدد التمريرات مباشرة في متصفحك — ويحافظ عمدًا على viewBox، لكي يستمر القياس المتجاوب في العمل بعد التحسين. ترى بالضبط كم بايتًا وأي نسبة وفّرت.',
  steps: [
    'الصق ترميز SVG في المحرر، أو أفلت ملف .svg في أي مكان بالصفحة.',
    'اضغط زر Optimize في شريط الأدوات — يتحدث المحرر بالنتيجة المصغّرة.',
    'تحقق من إشعار البايتات الموفّرة، ثم انسخ أو نزّل ملف SVG المحسَّن.',
  ],
  faqs: [
    {
      q: 'هل يغيّر التحسين مظهر ملف SVG الخاص بي؟',
      a: 'لا. يزيل SVGO التكرار فقط — البيانات الوصفية والدقة الزائدة والمساحات البيضاء. استخدم المعاينة المباشرة للتحقق من أن النتيجة تُعرَض بشكل متطابق.',
    },
    {
      q: 'لماذا تحتفظون بـ viewBox؟',
      a: 'بعض المحسّنات تحذف viewBox عندما تكون العرض والارتفاع موجودين، ما يكسر القياس المتجاوب بصمت. تجبر هذه الأداة الحفاظ على viewBox.',
    },
    {
      q: 'هل يمكنني استعادة ملف SVG الأصلي بعد التحسين؟',
      a: 'نعم — الصق الملف الأصلي أو أفلته من جديد فحسب. لا يُستبدَل أي شيء ما لم تنسخ النتيجة المحسَّنة أو تنزّلها.',
    },
  ],
  howToUse: 'طريقة الاستخدام',
  faqHeading: 'الأسئلة الشائعة',
  moreTools: 'المزيد من أدوات SVG',
};

const pngAr: ToolContent = {
  title: 'محوّل SVG إلى PNG — تصدير مجاني 1x/2x/4x | VectorForge',
  description:
    'حوّل SVG إلى PNG بدقة 1x و2x و4x عبر الإنترنت. محوّل SVG إلى PNG مجاني وغير محدود داخل المتصفح مع معاينة مباشرة.',
  heading: 'محوّل SVG إلى PNG',
  intro:
    'صدّر صور PNG حادة من أي ملف SVG بمقياس 1x أو 2x أو 4x — مثالية للأيقونات المصغّرة وأيقونات التطبيقات وصور التواصل الاجتماعي. إذا افتقر ملف SVG إلى أبعاد صريحة، يُستخدم viewBox تلقائيًا، وتُحفَظ الشفافية.',
  steps: [
    'الصق ترميز SVG في المحرر، أو أفلت ملف .svg في أي مكان بالصفحة.',
    'عاين ملف SVG على أي خلفية للتحقق منه قبل التصدير.',
    'اختر 1x أو 2x أو 4x من أزرار تصدير PNG ونزّل صورتك النقطية.',
  ],
  faqs: [
    {
      q: 'ما الدقات التي يمكنني تصديرها؟',
      a: '1x و2x و4x من الحجم الطبيعي لملف SVG، مأخوذة من سمتي العرض/الارتفاع أو من viewBox الخاص به.',
    },
    {
      q: 'هل تُحفَظ الشفافية في PNG؟',
      a: 'نعم — يحتفظ PNG المُصدَّر بقناة ألفا الخاصة بملف SVG.',
    },
    {
      q: 'لماذا يبدو PNG الخاص بي مختلفًا عن المعاينة؟',
      a: 'الخطوط الخارجية أو الصور المرتبطة المُشار إليها داخل SVG لا يمكن تنقيطها في المتصفح. حوّل النص إلى حدود خارجية للحصول على نتائج دقيقة على مستوى البكسل.',
    },
  ],
  howToUse: 'طريقة الاستخدام',
  faqHeading: 'الأسئلة الشائعة',
  moreTools: 'المزيد من أدوات SVG',
};

/* ---------------- Bengali ---------------- */

const jsxBn: ToolContent = {
  title: 'SVG থেকে JSX রূপান্তরকারী — বিনামূল্যের অনলাইন টুল | VectorForge',
  description:
    'সেকেন্ডের মধ্যে SVG মার্কআপকে JSX-এ রূপান্তর করুন। বিনামূল্যের অনলাইন SVG থেকে JSX রূপান্তরকারী — স্বয়ংক্রিয় বৈশিষ্ট্য পুনঃনামকরণ, স্টাইল-অবজেক্ট রূপান্তর এবং লাইভ প্রিভিউসহ। আপনার ব্রাউজারে ১০০% চলে।',
  heading: 'SVG থেকে JSX রূপান্তরকারী',
  intro:
    'যেকোনো SVG পেস্ট করুন এবং আপনার React কম্পোনেন্টের জন্য প্রস্তুত পরিষ্কার JSX পান। VectorForge বৈশিষ্ট্যগুলো স্বয়ংক্রিয়ভাবে পুনঃনামকরণ করে (class হয়ে যায় className, stroke-width হয়ে যায় strokeWidth), ইনলাইন স্টাইলকে স্টাইল অবজেক্টে রূপান্তর করে এবং XML মন্তব্যকে JSX মন্তব্যে বদলে দেয় — তাৎক্ষণিকভাবে, লাইভ প্রিভিউসহ। কিছুই আপলোড হয় না; সবকিছু আপনার ব্রাউজারেই ঘটে।',
  steps: [
    'আপনার SVG মার্কআপ সম্পাদকে পেস্ট করুন, অথবা পৃষ্ঠার যেকোনো জায়গায় একটি .svg ফাইল ছেড়ে দিন।',
    'JSX ট্যাবটি ইতিমধ্যে নির্বাচিত — আপনি টাইপ করার সময় লাইভ আপডেট হওয়া রূপান্তরিত আউটপুট পর্যালোচনা করুন।',
    'এক ক্লিকে JSX কপি করুন, অথবা আপনার প্রকল্পের জন্য .jsx ফাইল হিসেবে ডাউনলোড করুন।',
  ],
  faqs: [
    {
      q: 'এই টুল কি আমার SVG সার্ভারে আপলোড করে?',
      a: 'না। সমস্ত রূপান্তর JavaScript ব্যবহার করে আপনার ব্রাউজারে স্থানীয়ভাবে চলে। আপনার ফাইল কখনোই আপনার ডিভাইস ছেড়ে যায় না।',
    },
    {
      q: 'JSX-এ বৈশিষ্ট্যের নাম কেন বদলায়?',
      a: 'JSX JavaScript নামকরণ রীতি অনুসরণ করে, তাই stroke-width-এর মতো হাইফেনযুক্ত SVG বৈশিষ্ট্যকে camelCase (strokeWidth) হতে হয় এবং class হয়ে যায় className। এই রূপান্তরকারী সেই মিলানগুলো স্বয়ংক্রিয়ভাবে প্রয়োগ করে।',
    },
    {
      q: 'আমি কি একসাথে একাধিক SVG-কে JSX-এ রূপান্তর করতে পারি?',
      a: 'হ্যাঁ। পৃষ্ঠায় একাধিক ফাইল ছেড়ে দিন, ব্যাচ বারে তাদের মধ্যে বদলান, এবং সবকিছু ZIP হিসেবে ডাউনলোড করুন — প্রতিটি ফাইল JSX-এ রূপান্তরিত।',
    },
  ],
  howToUse: 'কীভাবে ব্যবহার করবেন',
  faqHeading: 'সাধারণ প্রশ্ন',
  moreTools: 'আরও SVG টুল',
};

const reactBn: ToolContent = {
  title: 'SVG থেকে React কম্পোনেন্ট রূপান্তরকারী — বিনামূল্যে অনলাইন | VectorForge',
  description:
    'যেকোনো SVG-কে তাৎক্ষণিকভাবে টাইপসহ React (.tsx) কম্পোনেন্টে বদলে দিন। বিনামূল্যের SVG থেকে React কম্পোনেন্ট রূপান্তরকারী — প্রপস সমর্থন, পরিষ্কার আউটপুট এবং লাইভ প্রিভিউসহ।',
  heading: 'SVG থেকে React কম্পোনেন্ট রূপান্তরকারী',
  intro:
    'যেকোনো SVG থেকে প্রোডাকশন-প্রস্তুত TypeScript React কম্পোনেন্ট পান। তৈরি হওয়া কম্পোনেন্টটি মানক SVG প্রপস গ্রহণ করে, সেগুলোকে মূল উপাদানে ছড়িয়ে দেয় এবং সেই অপ্রয়োজনীয় xmlns ঘোষণাটি মুছে ফেলে যা React সতর্কতা দেয় — সরাসরি আপনার কোডবেসে বসানোর জন্য প্রস্তুত।',
  steps: [
    'আপনার SVG মার্কআপ সম্পাদকে পেস্ট করুন, অথবা পৃষ্ঠার যেকোনো জায়গায় একটি .svg ফাইল ছেড়ে দিন।',
    'React Component ট্যাবটি ইতিমধ্যে নির্বাচিত — কম্পোনেন্টের নামটি আপনার ফাইলের নাম থেকে নেওয়া হয়।',
    'এক ক্লিকে .tsx কোড কপি করুন, অথবা তা ডাউনলোড করে অন্য যেকোনো কম্পোনেন্টের মতো ইমপোর্ট করুন।',
  ],
  faqs: [
    {
      q: 'তৈরি হওয়া কম্পোনেন্টটি কীভাবে ব্যবহার করব?',
      a: 'এটিকে অন্য যেকোনো কম্পোনেন্টের মতো ইমপোর্ট করুন এবং মানক SVG প্রপস দিন, উদাহরণস্বরূপ <SampleIcon width={24} height={24} fill="currentColor" />। প্রপসগুলো মূল উপাদানে ছড়িয়ে যায়।',
    },
    {
      q: 'আউটপুট থেকে xmlns কেন মুছে ফেলা হয়?',
      a: 'React SVG নেমস্পেস নিজেই সামলায়; xmlns রেখে দিলে কনসোল সতর্কতা আসে, তাই রূপান্তরকারী সেটি মূল উপাদান থেকে মুছে ফেলে।',
    },
    {
      q: 'এটি কি React Native-এর সাথে কাজ করে?',
      a: 'এই আউটপুটটি ওয়েব React-এর জন্য। React Native-এর জন্য React Native ট্যাবে যান — সেখানে react-native-svg কম্পোনেন্ট পাবেন।',
    },
  ],
  howToUse: 'কীভাবে ব্যবহার করবেন',
  faqHeading: 'সাধারণ প্রশ্ন',
  moreTools: 'আরও SVG টুল',
};

const base64Bn: ToolContent = {
  title: 'SVG থেকে Base64 রূপান্তরকারী — বিনামূল্যের অনলাইন এনকোডার | VectorForge',
  description:
    'SVG-কে Base64 হিসেবে অনলাইনে এনকোড করুন। বিনামূল্যের SVG থেকে Base64 রূপান্তরকারী — Unicode-নিরাপদ এনকোডিং, লাইভ প্রিভিউ এবং এক-ক্লিক কপিসহ।',
  heading: 'SVG থেকে Base64 রূপান্তরকারী',
  intro:
    'যেসব জায়গায় কাঁচা মার্কআপ ঢুকবে না — CSS ফাইল, JSON কনফিগ বা API পেলোড — তাদের জন্য যেকোনো SVG-কে Base64-এনকোড করুন। এনকোডিং Unicode-নিরাপদ (দেবনাগরী, ইমোজি এবং CJK লেখা যাওয়া-আসায় টিকে থাকে), এবং আপনি উৎস সম্পাদনা করার সময় আউটপুট লাইভ আপডেট হয়।',
  steps: [
    'আপনার SVG মার্কআপ সম্পাদকে পেস্ট করুন, অথবা পৃষ্ঠার যেকোনো জায়গায় একটি .svg ফাইল ছেড়ে দিন।',
    'Base64 ট্যাবটি ইতিমধ্যে নির্বাচিত — এনকোড করা স্ট্রিংটি আউটপুট ফলকে তাৎক্ষণিকভাবে দেখা যায়।',
    'এক ক্লিকে Base64 স্ট্রিং কপি করুন, অথবা .txt ফাইল হিসেবে ডাউনলোড করুন।',
  ],
  faqs: [
    {
      q: 'Base64 আউটপুট কি মূল SVG-এর চেয়ে বড়?',
      a: 'হ্যাঁ — Base64 প্রায় ৩৩% অতিরিক্ত যোগ করে। আকার গুরুত্বপূর্ণ হলে CSS-এর জন্য শতাংশ-এনকোড করা data URI (CSS Data-URI ট্যাব) বেছে নিন, যা SVG-এর জন্য সাধারণত ছোট হয়।',
    },
    {
      q: 'আমার Base64 আউটপুট প্যাডিং অক্ষর (=) দিয়ে কেন শেষ হয়?',
      a: 'প্যাডিং Base64 নির্দিষ্টকরণের অংশ এবং ডিকোডাররা তা প্রত্যাশা করে। এটি আউটপুটে রেখে দিন।',
    },
    {
      q: 'Base64 কি আমার SVG-এর ভিতরের Unicode লেখা সামলাতে পারে?',
      a: 'হ্যাঁ। এই টুলটি প্রথমে UTF-8 হিসেবে এনকোড করে, তাই অ-লাতিন লেখা এবং ইমোজি নষ্ট হওয়ার বদলে সঠিকভাবে যাওয়া-আসা করে।',
    },
  ],
  howToUse: 'কীভাবে ব্যবহার করবেন',
  faqHeading: 'সাধারণ প্রশ্ন',
  moreTools: 'আরও SVG টুল',
};

const dataUriBn: ToolContent = {
  title: 'SVG থেকে Data URI / CSS ব্যাকগ্রাউন্ড জেনারেটর — বিনামূল্যে | VectorForge',
  description:
    'SVG-কে background-image-এর জন্য প্রস্তুত CSS data URI-তে রূপান্তর করুন। বিনামূল্যের জেনারেটর — মিনিফিকেশন, সেরা এনকোডিং এবং লাইভ প্রিভিউসহ।',
  heading: 'SVG থেকে Data URI রূপান্তরকারী',
  intro:
    'যেকোনো SVG-কে একটি সংক্ষিপ্ত data URI-তে বদলে দিন যা আপনি সরাসরি background-image-তে পেস্ট করতে পারেন। VectorForge প্রথমে SVG-কে মিনিফাই করে এবং শতাংশ-এনকোড করে, যা সাধারণ আইকনের জন্য URI-কে Base64-এর চেয়ে ছোট রাখে — এবং কপি করার আগে আপনি লাইভ প্রিভিউতে এটি রেন্ডার হতে দেখতে পারেন।',
  steps: [
    'আপনার SVG মার্কআপ সম্পাদকে পেস্ট করুন, অথবা পৃষ্ঠার যেকোনো জায়গায় একটি .svg ফাইল ছেড়ে দিন।',
    'CSS Data-URI ট্যাবটি ইতিমধ্যে নির্বাচিত — আপনি সম্পাদনা করার সময় স্নিপেট লাইভ আপডেট হয়।',
    'এক ক্লিকে CSS স্নিপেট কপি করুন, অথবা .css ফাইল হিসেবে ডাউনলোড করুন।',
  ],
  faqs: [
    {
      q: 'Data URI নাকি Base64 — কোনটি ছোট?',
      a: 'SVG-এর জন্য শতাংশ-এনকোড করা data URI সাধারণত Base64-এর চেয়ে ছোট হয় (আপনি ~৩৩% এনকোডিং ওভারহেড এড়ান), এবং এই টুলটি আরও ছোট করতে প্রথমে SVG-কে মিনিফাই করে।',
    },
    {
      q: 'এনকোডিংয়ের আগে SVG-কে কেন মিনিফাই করা হয়?',
      a: 'মন্তব্য, ফাঁকা জায়গা এবং মেটাডেটা সরিয়ে দিলে ছবির রেন্ডার হওয়ার ধরন না বদলেই URI ছোট হয়ে যায়।',
    },
    {
      q: 'Data URI কি xmlns বৈশিষ্ট্যটি রাখে?',
      a: 'হ্যাঁ। স্বতন্ত্র ব্যবহারের (img ট্যাগ, CSS ব্যাকগ্রাউন্ড) জন্য xmlns প্রয়োজন, তাই এখানে তা সংরক্ষিত থাকে — JSX বা React কম্পোনেন্ট আউটপুটের বিপরীতে।',
    },
  ],
  howToUse: 'কীভাবে ব্যবহার করবেন',
  faqHeading: 'সাধারণ প্রশ্ন',
  moreTools: 'আরও SVG টুল',
};

const optimizerBn: ToolContent = {
  title: 'SVG অপ্টিমাইজার — বিনামূল্যের অনলাইন SVGO টুল | VectorForge',
  description:
    'SVGO দিয়ে SVG ফাইল অনলাইনে অপ্টিমাইজ করুন। বিনামূল্যের SVG অপ্টিমাইজার যা viewBox এবং দৃশ্য মান বজায় রেখে ফাইলের আকার কমায়।',
  heading: 'SVG অপ্টিমাইজার',
  intro:
    'SVG ফাইলের চেহারা না বদলেই সেগুলোকে ছোট করুন। VectorForge SVGO মাল্টিপাস অপ্টিমাইজেশন সরাসরি আপনার ব্রাউজারেই চালায় — এবং ইচ্ছাকৃতভাবে viewBox সংরক্ষণ করে, যাতে অপ্টিমাইজেশনের পরেও রেসপন্সিভ স্কেলিং কাজ করে। আপনি ঠিক কত বাইট এবং কত শতাংশ সাশ্রয় করলেন তা দেখতে পান।',
  steps: [
    'আপনার SVG মার্কআপ সম্পাদকে পেস্ট করুন, অথবা পৃষ্ঠার যেকোনো জায়গায় একটি .svg ফাইল ছেড়ে দিন।',
    'টুলবারে Optimize বোতাম টিপুন — সম্পাদক মিনিফাই করা ফলাফল নিয়ে আপডেট হয়।',
    'সাশ্রয় হওয়া বাইটের বিজ্ঞপ্তি দেখুন, তারপর অপ্টিমাইজ করা SVG কপি বা ডাউনলোড করুন।',
  ],
  faqs: [
    {
      q: 'অপ্টিমাইজেশন কি আমার SVG-এর চেহারা বদলায়?',
      a: 'না। SVGO শুধু অতিরিক্ত অংশ সরায় — মেটাডেটা, অতিরিক্ত নির্ভুলতা, ফাঁকা জায়গা। ফলাফল হুবহু একইভাবে রেন্ডার হয় কিনা যাচাই করতে লাইভ প্রিভিউ ব্যবহার করুন।',
    },
    {
      q: 'আপনারা viewBox কেন রাখেন?',
      a: 'কিছু অপ্টিমাইজার width এবং height থাকলে viewBox ফেলে দেয়, যা নীরবে রেসপন্সিভ স্কেলিং ভেঙে দেয়। এই টুলটি viewBox সংরক্ষণ জোর করে নিশ্চিত করে।',
    },
    {
      q: 'অপ্টিমাইজ করার পর আমি কি আমার মূল SVG ফিরে পেতে পারি?',
      a: 'হ্যাঁ — শুধু মূল ফাইলটি আবার পেস্ট করুন বা ছেড়ে দিন। আপনি অপ্টিমাইজ করা ফলাফল কপি বা ডাউনলোড না করা পর্যন্ত কিছুই উপরে লেখা হয় না।',
    },
  ],
  howToUse: 'কীভাবে ব্যবহার করবেন',
  faqHeading: 'সাধারণ প্রশ্ন',
  moreTools: 'আরও SVG টুল',
};

const pngBn: ToolContent = {
  title: 'SVG থেকে PNG রূপান্তরকারী — বিনামূল্যে 1x/2x/4x রপ্তানি | VectorForge',
  description:
    'SVG-কে 1x, 2x এবং 4x রেজোলিউশনে PNG-তে অনলাইনে রূপান্তর করুন। বিনামূল্যে, সীমাহীন, ব্রাউজার-মধ্যস্থ SVG থেকে PNG রূপান্তরকারী — লাইভ প্রিভিউসহ।',
  heading: 'SVG থেকে PNG রূপান্তরকারী',
  intro:
    'যেকোনো SVG থেকে 1x, 2x বা 4x স্কেলে ঝকঝকে PNG রপ্তানি করুন — ফেভিকন, অ্যাপ আইকন এবং সামাজিক ছবির জন্য নিখুঁত। SVG-তে স্পষ্ট মাত্রা না থাকলে viewBox স্বয়ংক্রিয়ভাবে ব্যবহৃত হয়, এবং স্বচ্ছতা সংরক্ষিত থাকে।',
  steps: [
    'আপনার SVG মার্কআপ সম্পাদকে পেস্ট করুন, অথবা পৃষ্ঠার যেকোনো জায়গায় একটি .svg ফাইল ছেড়ে দিন।',
    'রপ্তানির আগে যাচাই করতে যেকোনো পটভূমিতে SVG প্রিভিউ করুন।',
    'PNG রপ্তানি বোতাম থেকে 1x, 2x বা 4x বেছে নিন এবং আপনার রাস্টার ছবি ডাউনলোড করুন।',
  ],
  faqs: [
    {
      q: 'আমি কোন কোন রেজোলিউশনে রপ্তানি করতে পারি?',
      a: 'SVG-এর স্বাভাবিক আকারের 1x, 2x এবং 4x — এর width/height বৈশিষ্ট্য বা এর viewBox থেকে নেওয়া।',
    },
    {
      q: 'PNG-তে কি স্বচ্ছতা সংরক্ষিত থাকে?',
      a: 'হ্যাঁ — রপ্তানি করা PNG SVG-এর আলফা চ্যানেল বজায় রাখে।',
    },
    {
      q: 'আমার PNG প্রিভিউ থেকে আলাদা কেন দেখায়?',
      a: 'SVG-এর ভিতরে উল্লেখ করা বাহ্যিক ফন্ট বা সংযুক্ত ছবি ব্রাউজারে রাস্টারাইজ করা যায় না। পিক্সেল-নিখুঁত ফলাফলের জন্য লেখাকে আউটলাইনে রূপান্তর করুন।',
    },
  ],
  howToUse: 'কীভাবে ব্যবহার করবেন',
  faqHeading: 'সাধারণ প্রশ্ন',
  moreTools: 'আরও SVG টুল',
};

/* ---------------- Assamese ---------------- */

const jsxAsm: ToolContent = {
  title: 'SVG ৰ পৰা JSX ৰূপান্তৰক — বিনামূলীয়া অনলাইন টুল | VectorForge',
  description:
    'ছেকেণ্ডৰ ভিতৰত SVG মাৰ্কআপ JSX লৈ ৰূপান্তৰ কৰক। বিনামূলীয়া অনলাইন SVG ৰ পৰা JSX ৰূপান্তৰক — স্বয়ংক্ৰিয় বৈশিষ্ট্য পুনৰ্নামকৰণ, ষ্টাইল-অবজেক্ট ৰূপান্তৰ আৰু লাইভ পূৰ্বদৰ্শনসহ। আপোনাৰ ব্ৰাউজাৰত ১০০% চলে।',
  heading: 'SVG ৰ পৰা JSX ৰূপান্তৰক',
  intro:
    'যিকোনো SVG পেষ্ট কৰক আৰু আপোনাৰ React কম্পোনেন্টৰ বাবে সাজু পৰিষ্কাৰ JSX পাওক। VectorForge এ বৈশিষ্ট্যবোৰ স্বয়ংক্ৰিয়ভাৱে পুনৰ্নামকৰণ কৰে (class হয় className, stroke-width হয় strokeWidth), ইনলাইন ষ্টাইলক ষ্টাইল অবজেক্টলৈ ৰূপান্তৰ কৰে আৰু XML মন্তব্যক JSX মন্তব্যলৈ বদলায় — লগে লগে, লাইভ পূৰ্বদৰ্শনসহ। একো আপলোড নহয়; সকলো আপোনাৰ ব্ৰাউজাৰতেই ঘটে।',
  steps: [
    'আপোনাৰ SVG মাৰ্কআপ সম্পাদকত পেষ্ট কৰক, অথবা পৃষ্ঠাৰ যিকোনো ঠাইত .svg ফাইল এৰক।',
    'JSX টেবটো ইতিমধ্যে বাছনি কৰা আছে — আপুনি টাইপ কৰি থাকোঁতে লাইভ আপডেট হোৱা ৰূপান্তৰিত আউটপুট চাওক।',
    'এটা ক্লিকত JSX কপি কৰক, অথবা আপোনাৰ প্ৰকল্পৰ বাবে .jsx ফাইল হিচাপে ডাউনলোড কৰক।',
  ],
  faqs: [
    {
      q: 'এই টুলে মোৰ SVG চাৰ্ভাৰলৈ আপলোড কৰে নেকি?',
      a: 'নকৰে। সমগ্ৰ ৰূপান্তৰ JavaScript ৰে আপোনাৰ ব্ৰাউজাৰত স্থানীয়ভাৱে চলে। আপোনাৰ ফাইল কেতিয়াও আপোনাৰ ডিভাইচ এৰি নাযায়।',
    },
    {
      q: 'JSX ত বৈশিষ্ট্যৰ নাম কিয় বদলায়?',
      a: 'JSX এ JavaScript নামকৰণ ৰীতি অনুসৰণ কৰে, গতিকে stroke-width ৰ দৰে হাইফেনযুক্ত SVG বৈশিষ্ট্য camelCase (strokeWidth) হ’ব লাগে আৰু class হয় className। এই ৰূপান্তৰকে সেই মিলনবোৰ স্বয়ংক্ৰিয়ভাৱে প্ৰয়োগ কৰে।',
    },
    {
      q: 'মই একেলগে কেইবাটাও SVG JSX লৈ ৰূপান্তৰ কৰিব পাৰোনে?',
      a: 'পাৰে। পৃষ্ঠাত কেইবাটাও ফাইল এৰক, বেচ বাৰত সেইবোৰৰ মাজত বদলাওক, আৰু সকলো ZIP হিচাপে ডাউনলোড কৰক — প্ৰতিটো ফাইল JSX লৈ ৰূপান্তৰিত।',
    },
  ],
  howToUse: 'কেনেকৈ ব্যৱহাৰ কৰিব',
  faqHeading: 'সঘনাই সোধা প্ৰশ্ন',
  moreTools: 'আৰু SVG টুল',
};

const reactAsm: ToolContent = {
  title: 'SVG ৰ পৰা React কম্পোনেন্ট ৰূপান্তৰক — বিনামূলীয়া অনলাইন | VectorForge',
  description:
    'যিকোনো SVG ক লগে লগে টাইপসহ React (.tsx) কম্পোনেন্টলৈ বদলাওক। বিনামূলীয়া SVG ৰ পৰা React কম্পোনেন্ট ৰূপান্তৰক — প্ৰপছ সমৰ্থন, পৰিষ্কাৰ আউটপুট আৰু লাইভ পূৰ্বদৰ্শনসহ।',
  heading: 'SVG ৰ পৰা React কম্পোনেন্ট ৰূপান্তৰক',
  intro:
    'যিকোনো SVG ৰ পৰা প্ৰডাকচন-সাজু TypeScript React কম্পোনেন্ট পাওক। সৃষ্টি হোৱা কম্পোনেন্টটোৱে মানক SVG প্ৰপছ গ্ৰহণ কৰে, সেইবোৰক মূল উপাদানত বিয়পায় আৰু সেই অপ্ৰয়োজনীয় xmlns ঘোষণাটো আঁতৰায় যিয়ে React সতৰ্কতা দিয়ে — পোনে পোনে আপোনাৰ কোডবেছত বহুৱাবলৈ সাজু।',
  steps: [
    'আপোনাৰ SVG মাৰ্কআপ সম্পাদকত পেষ্ট কৰক, অথবা পৃষ্ঠাৰ যিকোনো ঠাইত .svg ফাইল এৰক।',
    'React Component টেবটো ইতিমধ্যে বাছনি কৰা আছে — কম্পোনেন্টৰ নামটো আপোনাৰ ফাইলৰ নামৰ পৰা লোৱা হয়।',
    'এটা ক্লিকত .tsx কোড কপি কৰক, অথবা তাক ডাউনলোড কৰি আন যিকোনো কম্পোনেন্টৰ দৰে ইম্পোৰ্ট কৰক।',
  ],
  faqs: [
    {
      q: 'সৃষ্টি হোৱা কম্পোনেন্টটো কেনেকৈ ব্যৱহাৰ কৰিম?',
      a: 'তাক আন যিকোনো কম্পোনেন্টৰ দৰে ইম্পোৰ্ট কৰক আৰু মানক SVG প্ৰপছ দিয়ক, উদাহৰণস্বৰূপে <SampleIcon width={24} height={24} fill="currentColor" />। প্ৰপছবোৰ মূল উপাদানত বিয়পি যায়।',
    },
    {
      q: 'আউটপুটৰ পৰা xmlns কিয় আঁতৰোৱা হয়?',
      a: 'React এ SVG নেমস্পেচ নিজেই চম্ভালে; xmlns ৰাখিলে কনচোল সতৰ্কতা আহে, গতিকে ৰূপান্তৰকে তাক মূল উপাদানৰ পৰা আঁতৰায়।',
    },
    {
      q: 'ই React Native ৰ সৈতে কাম কৰেনে?',
      a: 'এই আউটপুটটো ৱেব React ৰ বাবে। React Native ৰ বাবে React Native টেবলৈ যাওক — তাত react-native-svg কম্পোনেন্ট পাব।',
    },
  ],
  howToUse: 'কেনেকৈ ব্যৱহাৰ কৰিব',
  faqHeading: 'সঘনাই সোধা প্ৰশ্ন',
  moreTools: 'আৰু SVG টুল',
};

const base64Asm: ToolContent = {
  title: 'SVG ৰ পৰা Base64 ৰূপান্তৰক — বিনামূলীয়া অনলাইন এনকোডাৰ | VectorForge',
  description:
    'SVG ক Base64 হিচাপে অনলাইনত এনকোড কৰক। বিনামূলীয়া SVG ৰ পৰা Base64 ৰূপান্তৰক — Unicode-নিৰাপদ এনকোডিং, লাইভ পূৰ্বদৰ্শন আৰু এক-ক্লিক কপিসহ।',
  heading: 'SVG ৰ পৰা Base64 ৰূপান্তৰক',
  intro:
    'যিবোৰ ঠাইত কেঁচা মাৰ্কআপ নোসোমায় — CSS ফাইল, JSON কনফিগ বা API পেলোড — সেইবোৰৰ বাবে যিকোনো SVG ক Base64-এনকোড কৰক। এনকোডিং Unicode-নিৰাপদ (দেৱনাগৰী, ইমোজি আৰু CJK লেখা যোৱা-অহাত টিকি থাকে), আৰু আপুনি উৎস সম্পাদনা কৰি থাকোঁতে আউটপুট লাইভ আপডেট হয়।',
  steps: [
    'আপোনাৰ SVG মাৰ্কআপ সম্পাদকত পেষ্ট কৰক, অথবা পৃষ্ঠাৰ যিকোনো ঠাইত .svg ফাইল এৰক।',
    'Base64 টেবটো ইতিমধ্যে বাছনি কৰা আছে — এনকোড কৰা ষ্ট্ৰিংটো আউটপুট ফলকত লগে লগে দেখা যায়।',
    'এটা ক্লিকত Base64 ষ্ট্ৰিং কপি কৰক, অথবা .txt ফাইল হিচাপে ডাউনলোড কৰক।',
  ],
  faqs: [
    {
      q: 'Base64 আউটপুট মূল SVG তকৈ ডাঙৰ নেকি?',
      a: 'হয় — Base64 এ প্ৰায় ৩৩% অতিৰিক্ত যোগ কৰে। আকাৰ গুৰুত্বপূৰ্ণ হ’লে CSS ৰ বাবে শতাংশ-এনকোড কৰা data URI (CSS Data-URI টেব) বাছনি কৰক, যি SVG ৰ বাবে সাধাৰণতে সৰু হয়।',
    },
    {
      q: 'মোৰ Base64 আউটপুট পেডিং আখৰ (=) ৰে কিয় শেষ হয়?',
      a: 'পেডিং Base64 নিৰ্দিষ্টকৰণৰ অংশ আৰু ডিকোডাৰে তাক আশা কৰে। তাক আউটপুটত ৰাখক।',
    },
    {
      q: 'Base64 এ মোৰ SVG ৰ ভিতৰৰ Unicode লেখা চম্ভালিব পাৰেনে?',
      a: 'পাৰে। এই টুলে প্ৰথমে UTF-8 হিচাপে এনকোড কৰে, গতিকে অ-লেটিন লেখা আৰু ইমোজি নষ্ট হোৱাৰ সলনি সঠিকভাৱে যোৱা-অহা কৰে।',
    },
  ],
  howToUse: 'কেনেকৈ ব্যৱহাৰ কৰিব',
  faqHeading: 'সঘনাই সোধা প্ৰশ্ন',
  moreTools: 'আৰু SVG টুল',
};

const dataUriAsm: ToolContent = {
  title: 'SVG ৰ পৰা Data URI / CSS পটভূমি সৃষ্টিকৰ্তা — বিনামূলীয়া | VectorForge',
  description:
    'SVG ক background-image ৰ বাবে সাজু CSS data URI লৈ ৰূপান্তৰ কৰক। বিনামূলীয়া সৃষ্টিকৰ্তা — মিনিফিকেচন, উন্নত এনকোডিং আৰু লাইভ পূৰ্বদৰ্শনসহ।',
  heading: 'SVG ৰ পৰা Data URI ৰূপান্তৰক',
  intro:
    'যিকোনো SVG ক এটা সংক্ষিপ্ত data URI লৈ বদলাওক যাক আপুনি পোনে পোনে background-image ত পেষ্ট কৰিব পাৰে। VectorForge এ প্ৰথমে SVG ক মিনিফাই কৰে আৰু শতাংশ-এনকোড কৰে, যিয়ে সাধাৰণ আইকনৰ বাবে URI ক Base64 তকৈ সৰু ৰাখে — আৰু কপি কৰাৰ আগতে আপুনি লাইভ পূৰ্বদৰ্শনত তাক ৰেণ্ডাৰ হোৱা দেখিব পাৰে।',
  steps: [
    'আপোনাৰ SVG মাৰ্কআপ সম্পাদকত পেষ্ট কৰক, অথবা পৃষ্ঠাৰ যিকোনো ঠাইত .svg ফাইল এৰক।',
    'CSS Data-URI টেবটো ইতিমধ্যে বাছনি কৰা আছে — আপুনি সম্পাদনা কৰি থাকোঁতে স্নিপেট লাইভ আপডেট হয়।',
    'এটা ক্লিকত CSS স্নিপেট কপি কৰক, অথবা .css ফাইল হিচাপে ডাউনলোড কৰক।',
  ],
  faqs: [
    {
      q: 'Data URI নে Base64 — কোনটো সৰু?',
      a: 'SVG ৰ বাবে শতাংশ-এনকোড কৰা data URI সাধাৰণতে Base64 তকৈ সৰু হয় (আপুনি ~৩৩% এনকোডিং অভাৰহেড এৰায়), আৰু এই টুলে আৰু সৰু কৰিবলৈ প্ৰথমে SVG ক মিনিফাই কৰে।',
    },
    {
      q: 'এনকোডিংৰ আগতে SVG ক কিয় মিনিফাই কৰা হয়?',
      a: 'মন্তব্য, খালী ঠাই আৰু মেটাডেটা আঁতৰালে ছবিখনৰ ৰেণ্ডাৰ হোৱাৰ ধৰণ নবদলাকৈয়ে URI সৰু হৈ যায়।',
    },
    {
      q: 'Data URI এ xmlns বৈশিষ্ট্যটো ৰাখেনে?',
      a: 'ৰাখে। স্বতন্ত্ৰ ব্যৱহাৰৰ (img টেগ, CSS পটভূমি) বাবে xmlns প্ৰয়োজন, গতিকে ইয়াত সি সংৰক্ষিত থাকে — JSX বা React কম্পোনেন্ট আউটপুটৰ বিপৰীতে।',
    },
  ],
  howToUse: 'কেনেকৈ ব্যৱহাৰ কৰিব',
  faqHeading: 'সঘনাই সোধা প্ৰশ্ন',
  moreTools: 'আৰু SVG টুল',
};

const optimizerAsm: ToolContent = {
  title: 'SVG অপ্টিমাইজাৰ — বিনামূলীয়া অনলাইন SVGO টুল | VectorForge',
  description:
    'SVGO ৰে SVG ফাইল অনলাইনত অপ্টিমাইজ কৰক। বিনামূলীয়া SVG অপ্টিমাইজাৰ যিয়ে viewBox আৰু দৃশ্য মান ৰাখি ফাইলৰ আকাৰ কমায়।',
  heading: 'SVG অপ্টিমাইজাৰ',
  intro:
    'SVG ফাইলৰ চেহেৰা নবদলাকৈ সেইবোৰ সৰু কৰক। VectorForge এ SVGO মাল্টিপাছ অপ্টিমাইজেচন পোনে পোনে আপোনাৰ ব্ৰাউজাৰতেই চলায় — আৰু ইচ্ছাকৃতভাৱে viewBox সংৰক্ষণ কৰে, যাতে অপ্টিমাইজেচনৰ পিছতো ৰেছপন্সিভ স্কেলিং কাম কৰি থাকে। আপুনি ঠিক কিমান বাইট আৰু কিমান শতাংশ ৰাহি কৰিলে দেখিব পায়।',
  steps: [
    'আপোনাৰ SVG মাৰ্কআপ সম্পাদকত পেষ্ট কৰক, অথবা পৃষ্ঠাৰ যিকোনো ঠাইত .svg ফাইল এৰক।',
    'টুলবাৰত Optimize বুটাম টিপক — সম্পাদক মিনিফাই কৰা ফলাফল লৈ আপডেট হয়।',
    'ৰাহি হোৱা বাইটৰ জাননী চাওক, তাৰ পিছত অপ্টিমাইজ কৰা SVG কপি বা ডাউনলোড কৰক।',
  ],
  faqs: [
    {
      q: 'অপ্টিমাইজেচনে মোৰ SVG ৰ চেহেৰা বদলায় নেকি?',
      a: 'নবদলায়। SVGO এ কেৱল অতিৰিক্ত অংশ আঁতৰায় — মেটাডেটা, অতিৰিক্ত নিৰ্ভুলতা, খালী ঠাই। ফলাফল হুবহু একেদৰে ৰেণ্ডাৰ হয় নে যাচাই কৰিবলৈ লাইভ পূৰ্বদৰ্শন ব্যৱহাৰ কৰক।',
    },
    {
      q: 'আপোনালোকে viewBox কিয় ৰাখে?',
      a: 'কিছুমান অপ্টিমাইজাৰে width আৰু height থাকিলে viewBox পেলাই দিয়ে, যিয়ে নিৰৱে ৰেছপন্সিভ স্কেলিং ভাঙি দিয়ে। এই টুলে viewBox সংৰক্ষণ জোৰ কৰি নিশ্চিত কৰে।',
    },
    {
      q: 'অপ্টিমাইজ কৰাৰ পিছত মই মোৰ মূল SVG ঘূৰাই পাব পাৰোনে?',
      a: 'পাৰে — কেৱল মূল ফাইলটো আকৌ পেষ্ট কৰক বা এৰক। আপুনি অপ্টিমাইজ কৰা ফলাফল কপি বা ডাউনলোড নকৰালৈকে একো ওপৰত লিখা নহয়।',
    },
  ],
  howToUse: 'কেনেকৈ ব্যৱহাৰ কৰিব',
  faqHeading: 'সঘনাই সোধা প্ৰশ্ন',
  moreTools: 'আৰু SVG টুল',
};

const pngAsm: ToolContent = {
  title: 'SVG ৰ পৰা PNG ৰূপান্তৰক — বিনামূলীয়া 1x/2x/4x ৰপ্তানি | VectorForge',
  description:
    'SVG ক 1x, 2x আৰু 4x ৰিজোলিউচনত PNG লৈ অনলাইনত ৰূপান্তৰ কৰক। বিনামূলীয়া, সীমাহীন, ব্ৰাউজাৰ-মধ্যস্থ SVG ৰ পৰা PNG ৰূপান্তৰক — লাইভ পূৰ্বদৰ্শনসহ।',
  heading: 'SVG ৰ পৰা PNG ৰূপান্তৰক',
  intro:
    'যিকোনো SVG ৰ পৰা 1x, 2x বা 4x স্কেলত চোকা PNG ৰপ্তানি কৰক — ফেভিকন, এপ আইকন আৰু সামাজিক ছবিৰ বাবে নিখুঁত। SVG ত স্পষ্ট মাত্ৰা নাথাকিলে viewBox স্বয়ংক্ৰিয়ভাৱে ব্যৱহৃত হয়, আৰু স্বচ্ছতা সংৰক্ষিত থাকে।',
  steps: [
    'আপোনাৰ SVG মাৰ্কআপ সম্পাদকত পেষ্ট কৰক, অথবা পৃষ্ঠাৰ যিকোনো ঠাইত .svg ফাইল এৰক।',
    'ৰপ্তানিৰ আগতে যাচাই কৰিবলৈ যিকোনো পটভূমিত SVG পূৰ্বদৰ্শন কৰক।',
    'PNG ৰপ্তানি বুটামৰ পৰা 1x, 2x বা 4x বাছনি কৰক আৰু আপোনাৰ ৰাষ্টাৰ ছবি ডাউনলোড কৰক।',
  ],
  faqs: [
    {
      q: 'মই কোন কোন ৰিজোলিউচনত ৰপ্তানি কৰিব পাৰো?',
      a: 'SVG ৰ স্বাভাৱিক আকাৰৰ 1x, 2x আৰু 4x — ইয়াৰ width/height বৈশিষ্ট্য বা ইয়াৰ viewBox ৰ পৰা লোৱা।',
    },
    {
      q: 'PNG ত স্বচ্ছতা সংৰক্ষিত থাকেনে?',
      a: 'থাকে — ৰপ্তানি কৰা PNG এ SVG ৰ আলফা চেনেল ৰাখে।',
    },
    {
      q: 'মোৰ PNG পূৰ্বদৰ্শনতকৈ বেলেগ কিয় দেখায়?',
      a: 'SVG ৰ ভিতৰত উল্লেখ কৰা বাহ্যিক ফণ্ট বা সংযুক্ত ছবি ব্ৰাউজাৰত ৰাষ্টাৰাইজ কৰিব নোৱাৰি। পিক্সেল-নিখুঁত ফলাফলৰ বাবে লেখাক আউটলাইনলৈ ৰূপান্তৰ কৰক।',
    },
  ],
  howToUse: 'কেনেকৈ ব্যৱহাৰ কৰিব',
  faqHeading: 'সঘনাই সোধা প্ৰশ্ন',
  moreTools: 'আৰু SVG টুল',
};

/* ---------------- Urdu ---------------- */

const jsxUr: ToolContent = {
  title: 'SVG سے JSX کنورٹر — مفت آن لائن ٹول | VectorForge',
  description:
    'سیکنڈوں میں SVG مارک اپ کو JSX میں بدلیں۔ مفت آن لائن SVG سے JSX کنورٹر — خودکار خصوصیت کی تبدیلی نام، اسٹائل آبجیکٹ کی تبدیلی اور لائیو پیش منظر کے ساتھ۔ 100% آپ کے براؤزر میں چلتا ہے۔',
  heading: 'SVG سے JSX کنورٹر',
  intro:
    'کوئی بھی SVG چسپاں کریں اور اپنے React کمپوننٹس کے لیے تیار صاف JSX پائیں۔ VectorForge خصوصیات کو خود ہی بدل دیتا ہے (class بنتا ہے className، stroke-width بنتا ہے strokeWidth)، اِن لائن اسٹائل کو اسٹائل آبجیکٹ میں بدلتا ہے اور XML تبصروں کو JSX تبصروں میں بدل دیتا ہے — فوراً، لائیو پیش منظر کے ساتھ۔ کچھ بھی اپ لوڈ نہیں ہوتا؛ سب کچھ آپ کے براؤزر میں ہوتا ہے۔',
  steps: [
    'اپنا SVG مارک اپ ایڈیٹر میں چسپاں کریں، یا .svg فائل صفحے پر کہیں بھی چھوڑیں۔',
    'JSX ٹیب پہلے سے منتخب ہے — لکھتے ہی بدلتے ہوئے نتائج کو لائیو دیکھیں۔',
    'ایک کلک میں JSX کاپی کریں، یا اپنے منصوبے کے لیے .jsx فائل کے طور پر ڈاؤن لوڈ کریں۔',
  ],
  faqs: [
    {
      q: 'کیا یہ ٹول میری SVG کو سرور پر اپ لوڈ کرتا ہے؟',
      a: 'نہیں۔ ساری تبدیلی JavaScript سے آپ کے براؤزر میں ہی مقامی طور پر چلتی ہے۔ آپ کی فائلیں کبھی آپ کے آلے سے باہر نہیں جاتیں۔',
    },
    {
      q: 'JSX میں خصوصیات کے نام کیوں بدلتے ہیں؟',
      a: 'JSX جاوا اسکرپٹ کے نام رکھنے کے اصولوں کی پیروی کرتا ہے، اس لیے stroke-width جیسی ہائفن والی SVG خصوصیات کو camelCase (strokeWidth) بننا پڑتا ہے اور class بنتا ہے className۔ یہ کنورٹر یہ ملاپ خود ہی لاگو کرتا ہے۔',
    },
    {
      q: 'کیا میں ایک ساتھ کئی SVG کو JSX میں بدل سکتا ہوں؟',
      a: 'ہاں۔ صفحے پر کئی فائلیں چھوڑیں، بیچ بار میں ان کے درمیان بدلیں، اور سب کچھ ZIP کے طور پر ڈاؤن لوڈ کریں — ہر فائل JSX میں بدلی ہوئی۔',
    },
  ],
  howToUse: 'استعمال کا طریقہ',
  faqHeading: 'عمومی سوالات',
  moreTools: 'مزید SVG ٹولز',
};

const reactUr: ToolContent = {
  title: 'SVG سے React کمپوننٹ کنورٹر — مفت آن لائن | VectorForge',
  description:
    'کسی بھی SVG کو فوراً ٹائپ شدہ React (.tsx) کمپوننٹ میں بدلیں۔ مفت SVG سے React کمپوننٹ کنورٹر — پراپس کی سہولت، صاف نتائج اور لائیو پیش منظر کے ساتھ۔',
  heading: 'SVG سے React کمپوننٹ کنورٹر',
  intro:
    'کسی بھی SVG سے پروڈکشن کے لیے تیار TypeScript React کمپوننٹ پائیں۔ بنا ہوا کمپوننٹ معیاری SVG پراپس قبول کرتا ہے، انہیں جڑ عنصر پر پھیلاتا ہے اور وہ غیر ضروری xmlns اعلان مٹا دیتا ہے جو React انتباہات دیتا ہے — سیدھا آپ کے کوڈ بیس میں ڈالنے کے لیے تیار۔',
  steps: [
    'اپنا SVG مارک اپ ایڈیٹر میں چسپاں کریں، یا .svg فائل صفحے پر کہیں بھی چھوڑیں۔',
    'React Component ٹیب پہلے سے منتخب ہے — کمپوننٹ کا نام آپ کی فائل کے نام سے لیا جاتا ہے۔',
    'ایک کلک میں .tsx کوڈ کاپی کریں، یا اسے ڈاؤن لوڈ کر کے کسی بھی دوسرے کمپوننٹ کی طرح درآمد کریں۔',
  ],
  faqs: [
    {
      q: 'بننے والے کمپوننٹ کو کیسے استعمال کروں؟',
      a: 'اسے کسی بھی کمپوننٹ کی طرح درآمد کریں اور معیاری SVG پراپس دیں، مثال کے طور پر <SampleIcon width={24} height={24} fill="currentColor" />۔ پراپس جڑ عنصر پر پھیل جاتے ہیں۔',
    },
    {
      q: 'نتائج سے xmlns کیوں مٹایا جاتا ہے؟',
      a: 'React SVG نیم اسپیس خود سنبھالتا ہے؛ xmlns رکھے رہنے سے کنسول انتباہ آتا ہے، اس لیے کنورٹر اسے جڑ عنصر سے مٹا دیتا ہے۔',
    },
    {
      q: 'کیا یہ React Native کے ساتھ کام کرتا ہے؟',
      a: 'یہ نتائج ویب React کے لیے ہیں۔ React Native کے لیے React Native ٹیب پر جائیں — وہاں react-native-svg کمپوننٹ ملے گا۔',
    },
  ],
  howToUse: 'استعمال کا طریقہ',
  faqHeading: 'عمومی سوالات',
  moreTools: 'مزید SVG ٹولز',
};

const base64Ur: ToolContent = {
  title: 'SVG سے Base64 کنورٹر — مفت آن لائن انکوڈر | VectorForge',
  description:
    'SVG کو Base64 میں آن لائن انکوڈ کریں۔ مفت SVG سے Base64 کنورٹر — Unicode سے محفوظ انکوڈنگ، لائیو پیش منظر اور ایک کلک کاپی کے ساتھ۔',
  heading: 'SVG سے Base64 کنورٹر',
  intro:
    'کسی بھی SVG کو ان جگہوں کے لیے Base64 انکوڈ کریں جہاں کچا مارک اپ نہیں چلتا — CSS فائلیں، JSON ترتیبات یا API پے لوڈ۔ انکوڈنگ Unicode سے محفوظ ہے (دیوناگری، ایموجی اور CJK متن آنے جانے میں محفوظ رہتے ہیں)، اور ماخذ میں ترمیم کرتے ہی نتائج لائیو تازہ ہوتے ہیں۔',
  steps: [
    'اپنا SVG مارک اپ ایڈیٹر میں چسپاں کریں، یا .svg فائل صفحے پر کہیں بھی چھوڑیں۔',
    'Base64 ٹیب پہلے سے منتخب ہے — انکوڈ شدہ تار نتائج کے خانے میں فوراً دکھائی دیتی ہے۔',
    'ایک کلک میں Base64 تار کاپی کریں، یا اسے .txt فائل کے طور پر ڈاؤن لوڈ کریں۔',
  ],
  faqs: [
    {
      q: 'کیا Base64 نتائج اصل SVG سے بڑے ہوتے ہیں؟',
      a: 'ہاں — Base64 تقریباً 33% اضافی جوڑتا ہے۔ حجم اہم ہو تو CSS کے لیے فیصد انکوڈ شدہ data URI (CSS Data-URI ٹیب) چنیں، جو SVG کے لیے عام طور پر چھوٹا ہوتا ہے۔',
    },
    {
      q: 'میرے Base64 نتائج بھرائی حروف (=) پر کیوں ختم ہوتے ہیں؟',
      a: 'بھرائی Base64 کی تفصیل کا حصہ ہے اور ڈیکوڈر اس کی توقع کرتے ہیں۔ اسے نتائج میں رہنے دیں۔',
    },
    {
      q: 'کیا Base64 میری SVG کے اندر کے Unicode متن کو سنبھال سکتا ہے؟',
      a: 'ہاں۔ یہ ٹول پہلے UTF-8 میں انکوڈ کرتا ہے، اس لیے غیر لاطینی متن اور ایموجی بگڑنے کے بجائے درست آنے جانے کرتے ہیں۔',
    },
  ],
  howToUse: 'استعمال کا طریقہ',
  faqHeading: 'عمومی سوالات',
  moreTools: 'مزید SVG ٹولز',
};

const dataUriUr: ToolContent = {
  title: 'SVG سے Data URI / CSS پس منظر جنریٹر — مفت | VectorForge',
  description:
    'SVG کو background-image کے لیے تیار CSS data URI میں بدلیں۔ مفت جنریٹر — منیفیکیشن، بہتر انکوڈنگ اور لائیو پیش منظر کے ساتھ۔',
  heading: 'SVG سے Data URI کنورٹر',
  intro:
    'کسی بھی SVG کو ایک مختصر data URI میں بدلیں جسے آپ سیدھا background-image میں چسپاں کر سکیں۔ VectorForge پہلے SVG کو منیفائی کرتا ہے اور پھر فیصد انکوڈ کرتا ہے، جس سے عام آئیکنز کے لیے URI Base64 سے چھوٹا رہتا ہے — اور کاپی کرنے سے پہلے آپ اسے لائیو پیش منظر میں بنتے دیکھ سکتے ہیں۔',
  steps: [
    'اپنا SVG مارک اپ ایڈیٹر میں چسپاں کریں، یا .svg فائل صفحے پر کہیں بھی چھوڑیں۔',
    'CSS Data-URI ٹیب پہلے سے منتخب ہے — ترمیم کرتے ہی ٹکڑا لائیو تازہ ہوتا ہے۔',
    'ایک کلک میں CSS ٹکڑا کاپی کریں، یا اسے .css فائل کے طور پر ڈاؤن لوڈ کریں۔',
  ],
  faqs: [
    {
      q: 'Data URI یا Base64 — کون چھوٹا ہے؟',
      a: 'SVG کے لیے فیصد انکوڈ شدہ data URI عام طور پر Base64 سے چھوٹا ہوتا ہے (تقریباً 33% انکوڈنگ اضافی بچتا ہے)، اور یہ ٹول پہلے SVG کو منیفائی کر کے اسے مزید چھوٹا کرتا ہے۔',
    },
    {
      q: 'انکوڈنگ سے پہلے SVG کو منیفائی کیوں کیا جاتا ہے؟',
      a: 'تبصرے، خالی جگہیں اور میٹا ڈیٹا مٹانے سے تصویر کے بننے کا طریقہ بدلے بغیر URI چھوٹا ہو جاتا ہے۔',
    },
    {
      q: 'کیا data URI میں xmlns خصوصیت رہتی ہے؟',
      a: 'ہاں۔ آزادانہ استعمال (img ٹیگ، CSS پس منظر) کے لیے xmlns ضروری ہے، اس لیے یہاں وہ محفوظ رہتی ہے — JSX یا React کمپوننٹ نتائج کے برعکس۔',
    },
  ],
  howToUse: 'استعمال کا طریقہ',
  faqHeading: 'عمومی سوالات',
  moreTools: 'مزید SVG ٹولز',
};

const optimizerUr: ToolContent = {
  title: 'SVG آپٹیمائزر — مفت آن لائن SVGO ٹول | VectorForge',
  description:
    'SVGO سے SVG فائلوں کو آن لائن آپٹیمائز کریں۔ مفت SVG آپٹیمائزر جو viewBox اور بصری معیار برقرار رکھتے ہوئے فائل کا حجم گھٹاتا ہے۔',
  heading: 'SVG آپٹیمائزر',
  intro:
    'SVG فائلوں کو ان کی شکل بدلے بغیر چھوٹا کریں۔ VectorForge SVGO کی کثیر مرحلہ آپٹیمائزیشن سیدھا آپ کے براؤزر میں چلاتا ہے — اور جان بوجھ کر viewBox برقرار رکھتا ہے، تاکہ آپٹیمائزیشن کے بعد بھی جوابدہ پیمائش کام کرتی رہے۔ آپ بالکل دیکھتے ہیں کہ کتنے بائٹ اور کتنے فیصد کی بچت ہوئی۔',
  steps: [
    'اپنا SVG مارک اپ ایڈیٹر میں چسپاں کریں، یا .svg فائل صفحے پر کہیں بھی چھوڑیں۔',
    'ٹول بار میں Optimize بٹن دبائیں — ایڈیٹر منیفائی شدہ نتائج کے ساتھ تازہ ہو جاتا ہے۔',
    'بچے ہوئے بائٹ کی اطلاع دیکھیں، پھر آپٹیمائز شدہ SVG کاپی یا ڈاؤن لوڈ کریں۔',
  ],
  faqs: [
    {
      q: 'کیا آپٹیمائزیشن سے میری SVG کی شکل بدلتی ہے؟',
      a: 'نہیں۔ SVGO صرف اضافی چیزیں مٹاتا ہے — میٹا ڈیٹا، اضافی درستگی، خالی جگہیں۔ لائیو پیش منظر سے جانچیں کہ نتائج بالکل ویسے ہی بنتے ہیں۔',
    },
    {
      q: 'آپ viewBox کیوں برقرار رکھتے ہیں؟',
      a: 'کچھ آپٹیمائزر چوڑائی اور اونچائی موجود ہونے پر viewBox مٹا دیتے ہیں، جس سے جوابدہ پیمائش چپکے سے ٹوٹ جاتی ہے۔ یہ ٹول viewBox کی حفاظت زبردستی یقینی بناتا ہے۔',
    },
    {
      q: 'آپٹیمائز کرنے کے بعد کیا میں اپنی اصل SVG واپس پا سکتا ہوں؟',
      a: 'ہاں — بس اصل فائل دوبارہ چسپاں کریں یا چھوڑیں۔ جب تک آپ آپٹیمائز شدہ نتائج کاپی یا ڈاؤن لوڈ نہیں کرتے، کچھ بھی اوپر نہیں لکھا جاتا۔',
    },
  ],
  howToUse: 'استعمال کا طریقہ',
  faqHeading: 'عمومی سوالات',
  moreTools: 'مزید SVG ٹولز',
};

const pngUr: ToolContent = {
  title: 'SVG سے PNG کنورٹر — مفت 1x/2x/4x برآمد | VectorForge',
  description:
    'SVG کو 1x، 2x اور 4x قرارداد پر PNG میں آن لائن بدلیں۔ مفت، لا محدود، براؤزر میں چلنے والا SVG سے PNG کنورٹر — لائیو پیش منظر کے ساتھ۔',
  heading: 'SVG سے PNG کنورٹر',
  intro:
    'کسی بھی SVG سے 1x، 2x یا 4x پیمانے پر صاف PNG برآمد کریں — فیویکن، ایپ آئیکن اور سماجی تصاویر کے لیے بہترین۔ SVG میں واضح پیمائش نہ ہو تو viewBox خود ہی استعمال ہوتا ہے، اور شفافیت برقرار رہتی ہے۔',
  steps: [
    'اپنا SVG مارک اپ ایڈیٹر میں چسپاں کریں، یا .svg فائل صفحے پر کہیں بھی چھوڑیں۔',
    'برآمد سے پہلے جانچنے کے لیے SVG کو کسی بھی پس منظر پر پیش منظر میں دیکھیں۔',
    'PNG برآمد بٹنوں سے 1x، 2x یا 4x چنیں اور اپنی راسٹر تصویر ڈاؤن لوڈ کریں۔',
  ],
  faqs: [
    {
      q: 'میں کن قراردادوں پر برآمد کر سکتا ہوں؟',
      a: 'SVG کے قدرتی حجم کے 1x، 2x اور 4x — اس کی چوڑائی/اونچائی خصوصیات یا اس کے viewBox سے لیے گئے۔',
    },
    {
      q: 'کیا PNG میں شفافیت برقرار رہتی ہے؟',
      a: 'ہاں — برآمد شدہ PNG SVG کا الفا چینل برقرار رکھتا ہے۔',
    },
    {
      q: 'میرا PNG پیش منظر سے الگ کیوں دکھتا ہے؟',
      a: 'SVG کے اندر حوالہ شدہ بیرونی فونٹ یا منسلک تصاویر براؤزر میں راسٹرائز نہیں ہو سکتیں۔ پکسل پرفیکٹ نتائج کے لیے متن کو خاکے میں بدلیں۔',
    },
  ],
  howToUse: 'استعمال کا طریقہ',
  faqHeading: 'عمومی سوالات',
  moreTools: 'مزید SVG ٹولز',
};

/* ---------------- Tamil ---------------- */

const jsxTa: ToolContent = {
  title: 'SVG இலிருந்து JSX மாற்றி — இலவச ஆன்லைன் கருவி | VectorForge',
  description:
    'வினாடிகளில் SVG மார்க்கப்பை JSX ஆக மாற்றவும். தானியங்கு பண்பு மறுபெயரிடல், நடை-பொருள் மாற்றம் மற்றும் நேரடி முன்னோட்டத்துடன் இலவச ஆன்லைன் SVG இலிருந்து JSX மாற்றி. உங்கள் உலாவியில் 100% இயங்குகிறது.',
  heading: 'SVG இலிருந்து JSX மாற்றி',
  intro:
    'எந்த SVG-ஐயும் ஒட்டி, உங்கள் React கூறுகளுக்குத் தயாரான சுத்தமான JSX-ஐப் பெறவும். VectorForge பண்புகளைத் தானாகவே மறுபெயரிடுகிறது (class ஆனது className ஆகிறது, stroke-width ஆனது strokeWidth ஆகிறது), இன்லைன் நடைகளை நடைப் பொருட்களாக மாற்றுகிறது, XML கருத்துகளை JSX கருத்துகளாக மாற்றுகிறது — உடனடியாக, நேரடி முன்னோட்டத்துடன். எதுவும் பதிவேற்றப்படுவதில்லை; எல்லாம் உங்கள் உலாவியிலேயே நடக்கிறது.',
  steps: [
    'உங்கள் SVG மார்க்கப்பை ஆசிரியரில் ஒட்டவும், அல்லது ஒரு .svg கோப்பைப் பக்கத்தில் எங்கும் விடவும்.',
    'JSX தாவல் ஏற்கனவே தேர்ந்தெடுக்கப்பட்டுள்ளது — நீங்கள் தட்டச்சு செய்யும்போது நேரடியாகப் புதுப்பிக்கப்படும் மாற்றப்பட்ட வெளியீட்டை மதிப்பாய்வு செய்யவும்.',
    'ஒரே கிளிக்கில் JSX-ஐ நகலெடுக்கவும், அல்லது உங்கள் திட்டத்திற்காக .jsx கோப்பாகப் பதிவிறக்கவும்.',
  ],
  faqs: [
    {
      q: 'இந்தக் கருவி என் SVG-ஐ சேவையகத்தில் பதிவேற்றுகிறதா?',
      a: 'இல்லை. எல்லா மாற்றமும் JavaScript ஐப் பயன்படுத்தி உங்கள் உலாவியில் உள்ளூரில் இயங்குகிறது. உங்கள் கோப்புகள் உங்கள் சாதனத்தை விட்டு ஒருபோதும் வெளியேறுவதில்லை.',
    },
    {
      q: 'JSX இல் பண்புப் பெயர்கள் ஏன் மாறுகின்றன?',
      a: 'JSX JavaScript பெயரிடல் மரபுகளைப் பின்பற்றுகிறது, எனவே stroke-width போன்ற இணைப்புக்குறி கொண்ட SVG பண்புகள் camelCase (strokeWidth) ஆக வேண்டும், class ஆனது className ஆகிறது. இந்த மாற்றி அந்தப் பொருத்தங்களைத் தானாகவே பயன்படுத்துகிறது.',
    },
    {
      q: 'பல SVG-களை ஒரே நேரத்தில் JSX ஆக மாற்ற முடியுமா?',
      a: 'ஆம். பக்கத்தில் பல கோப்புகளை விடவும், தொகுதிப் பட்டியில் அவற்றுக்கிடையே மாறவும், ஒவ்வொரு கோப்பும் JSX ஆக மாற்றப்பட்ட நிலையில் அனைத்தையும் ZIP ஆகப் பதிவிறக்கவும்.',
    },
  ],
  howToUse: 'எப்படி பயன்படுத்துவது',
  faqHeading: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
  moreTools: 'மேலும் SVG கருவிகள்',
};

const reactTa: ToolContent = {
  title: 'SVG இலிருந்து React கூறு மாற்றி — இலவசம் ஆன்லைன் | VectorForge',
  description:
    'எந்த SVG-ஐயும் உடனடியாக வகைப்படுத்தப்பட்ட React (.tsx) கூறாக மாற்றவும். புராப்ஸ் ஆதரவு, சுத்தமான வெளியீடு மற்றும் நேரடி முன்னோட்டத்துடன் இலவச SVG இலிருந்து React கூறு மாற்றி.',
  heading: 'SVG இலிருந்து React கூறு மாற்றி',
  intro:
    'எந்த SVG இலிருந்தும் தயாரிப்புக்குத் தயாரான TypeScript React கூறைப் பெறவும். உருவாக்கப்பட்ட கூறு தரநிலை SVG புராப்ஸை ஏற்று, அவற்றை வேர் உறுப்பில் பரப்பி, React எச்சரிக்கைகளைத் தூண்டும் தேவையற்ற xmlns அறிவிப்பை நீக்குகிறது — உங்கள் குறியீட்டுத்தளத்தில் நேரடியாகப் போடத் தயார்.',
  steps: [
    'உங்கள் SVG மார்க்கப்பை ஆசிரியரில் ஒட்டவும், அல்லது ஒரு .svg கோப்பைப் பக்கத்தில் எங்கும் விடவும்.',
    'React Component தாவல் ஏற்கனவே தேர்ந்தெடுக்கப்பட்டுள்ளது — கூறின் பெயர் உங்கள் கோப்புப் பெயரிலிருந்து பெறப்படுகிறது.',
    'ஒரே கிளிக்கில் .tsx குறியீட்டை நகலெடுக்கவும், அல்லது அதைப் பதிவிறக்கி வேறு எந்தக் கூறையும் போல இறக்குமதி செய்யவும்.',
  ],
  faqs: [
    {
      q: 'உருவாக்கப்பட்ட கூறை எப்படிப் பயன்படுத்துவது?',
      a: 'அதை வேறு எந்தக் கூறையும் போல இறக்குமதி செய்து தரநிலை SVG புராப்ஸை அனுப்பவும், எடுத்துக்காட்டாக <SampleIcon width={24} height={24} fill="currentColor" />. புராப்ஸ் வேர் உறுப்பில் பரவுகின்றன.',
    },
    {
      q: 'வெளியீட்டிலிருந்து xmlns ஏன் நீக்கப்படுகிறது?',
      a: 'React SVG பெயர்வெளிகளைத் தானே கையாளுகிறது; xmlns ஐ வைத்திருப்பது கன்சோல் எச்சரிக்கையை ஏற்படுத்துகிறது, எனவே மாற்றி அதை வேர் உறுப்பிலிருந்து நீக்குகிறது.',
    },
    {
      q: 'இது React Native உடன் வேலை செய்யுமா?',
      a: 'இந்த வெளியீடு வலை React ஐ இலக்காகக் கொண்டது. React Native க்கு, React Native தாவலுக்கு மாறி அதற்குப் பதிலாக react-native-svg கூறைப் பெறவும்.',
    },
  ],
  howToUse: 'எப்படி பயன்படுத்துவது',
  faqHeading: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
  moreTools: 'மேலும் SVG கருவிகள்',
};

const base64Ta: ToolContent = {
  title: 'SVG இலிருந்து Base64 மாற்றி — இலவச ஆன்லைன் குறியாக்கி | VectorForge',
  description:
    'SVG-ஐ ஆன்லைனில் Base64 ஆகக் குறியாக்கவும். Unicode-பாதுகாப்பான குறியாக்கம், நேரடி முன்னோட்டம் மற்றும் ஒரே-கிளிக் நகலுடன் இலவச SVG இலிருந்து Base64 மாற்றி.',
  heading: 'SVG இலிருந்து Base64 மாற்றி',
  intro:
    'கச்சா மார்க்கப் பொருந்தாத இடங்களுக்காக — CSS கோப்புகள், JSON உள்ளமைவுகள் அல்லது API பேலோடுகள் — எந்த SVG-ஐயும் Base64-குறியாக்கம் செய்யவும். குறியாக்கம் Unicode-பாதுகாப்பானது (தேவநாகரி, ஈமோஜி மற்றும் CJK உரை சுற்றுப் பயணத்தில் தப்பிக்கும்), நீங்கள் மூலத்தைத் திருத்தும்போது வெளியீடு நேரடியாகப் புதுப்பிக்கப்படும்.',
  steps: [
    'உங்கள் SVG மார்க்கப்பை ஆசிரியரில் ஒட்டவும், அல்லது ஒரு .svg கோப்பைப் பக்கத்தில் எங்கும் விடவும்.',
    'Base64 தாவல் ஏற்கனவே தேர்ந்தெடுக்கப்பட்டுள்ளது — குறியாக்கப்பட்ட சரம் வெளியீட்டுப் பலகத்தில் உடனடியாகத் தோன்றும்.',
    'ஒரே கிளிக்கில் Base64 சரத்தை நகலெடுக்கவும், அல்லது .txt கோப்பாகப் பதிவிறக்கவும்.',
  ],
  faqs: [
    {
      q: 'Base64 வெளியீடு அசல் SVG-ஐ விடப் பெரியதா?',
      a: 'ஆம் — Base64 சுமார் 33% கூடுதல் சுமையைச் சேர்க்கிறது. அளவு முக்கியமானால், CSS க்கு சதவீத-குறியாக்கப்பட்ட டேட்டா URI (CSS Data-URI தாவல்) ஐ விரும்பவும், அது SVG க்கு பொதுவாகச் சிறியது.',
    },
    {
      q: 'என் Base64 வெளியீடு திணிப்பு எழுத்துகளில் (=) ஏன் முடிகிறது?',
      a: 'திணிப்பு Base64 விவரக்குறிப்பின் ஒரு பகுதி, மறைகுறியாக்கிகள் அதை எதிர்பார்க்கின்றன. அதை வெளியீட்டில் வைத்திருக்கவும்.',
    },
    {
      q: 'Base64 என் SVG-க்குள் உள்ள Unicode உரையைக் கையாள முடியுமா?',
      a: 'ஆம். இந்தக் கருவி முதலில் UTF-8 ஆகக் குறியாக்கம் செய்கிறது, எனவே லத்தீன் அல்லாத உரையும் ஈமோஜியும் சிதையாமல் சரியாகச் சுற்றுப் பயணம் செய்யும்.',
    },
  ],
  howToUse: 'எப்படி பயன்படுத்துவது',
  faqHeading: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
  moreTools: 'மேலும் SVG கருவிகள்',
};

const dataUriTa: ToolContent = {
  title: 'SVG இலிருந்து Data URI / CSS பின்னணி உருவாக்கி — இலவசம் | VectorForge',
  description:
    'SVG-ஐ background-image க்குத் தயாரான CSS டேட்டா URI ஆக மாற்றவும். சுருக்கம், மேம்படுத்தப்பட்ட குறியாக்கம் மற்றும் நேரடி முன்னோட்டத்துடன் இலவச உருவாக்கி.',
  heading: 'SVG இலிருந்து Data URI மாற்றி',
  intro:
    'எந்த SVG-ஐயும் நீங்கள் background-image இல் நேரடியாக ஒட்டக்கூடிய சிறிய டேட்டா URI ஆக மாற்றவும். VectorForge முதலில் SVG-ஐச் சுருக்கி பின்னர் சதவீத-குறியாக்கம் செய்கிறது, இது வழக்கமான சின்னங்களுக்கு URI-ஐ Base64-ஐ விடச் சிறியதாக வைக்கிறது — நகலெடுப்பதற்கு முன் நேரடி முன்னோட்டத்தில் அது வரையப்படுவதைக் காணலாம்.',
  steps: [
    'உங்கள் SVG மார்க்கப்பை ஆசிரியரில் ஒட்டவும், அல்லது ஒரு .svg கோப்பைப் பக்கத்தில் எங்கும் விடவும்.',
    'CSS Data-URI தாவல் ஏற்கனவே தேர்ந்தெடுக்கப்பட்டுள்ளது — நீங்கள் திருத்தும்போது துணுக்கு நேரடியாகப் புதுப்பிக்கப்படும்.',
    'ஒரே கிளிக்கில் CSS துணுக்கை நகலெடுக்கவும், அல்லது .css கோப்பாகப் பதிவிறக்கவும்.',
  ],
  faqs: [
    {
      q: 'Data URI அல்லது Base64 — எது சிறியது?',
      a: 'SVG க்கு, சதவீத-குறியாக்கப்பட்ட டேட்டா URI பொதுவாக Base64-ஐ விடச் சிறியது (நீங்கள் ~33% குறியாக்கச் சுமையைத் தவிர்க்கிறீர்கள்), இந்தக் கருவி அதை மேலும் சுருக்க முதலில் SVG-ஐச் சுருக்குகிறது.',
    },
    {
      q: 'குறியாக்கத்திற்கு முன் SVG ஏன் சுருக்கப்படுகிறது?',
      a: 'கருத்துகள், வெற்றிடம் மற்றும் மெட்டாடேட்டாவை நீக்குவது, படம் வரையப்படும் விதத்தை மாற்றாமல் URI-ஐச் சுருக்குகிறது.',
    },
    {
      q: 'டேட்டா URI xmlns பண்பை வைத்திருக்கிறதா?',
      a: 'ஆம். தனித்த பயன்பாட்டிற்கு (img குறிச்சொற்கள், CSS பின்னணிகள்) xmlns தேவை, எனவே இங்கே அது பாதுகாக்கப்படுகிறது — JSX அல்லது React கூறு வெளியீட்டைப் போலல்லாமல்.',
    },
  ],
  howToUse: 'எப்படி பயன்படுத்துவது',
  faqHeading: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
  moreTools: 'மேலும் SVG கருவிகள்',
};

const optimizerTa: ToolContent = {
  title: 'SVG மேம்படுத்தி — இலவச ஆன்லைன் SVGO கருவி | VectorForge',
  description:
    'SVGO மூலம் SVG கோப்புகளை ஆன்லைனில் மேம்படுத்தவும். viewBox மற்றும் காட்சித் தரத்தைப் பாதுகாத்துக் கொண்டே கோப்பு அளவைச் சுருக்கும் இலவச SVG மேம்படுத்தி.',
  heading: 'SVG மேம்படுத்தி',
  intro:
    'SVG கோப்புகள் எப்படித் தோன்றுகின்றன என்பதை மாற்றாமல் அவற்றைச் சுருக்கவும். VectorForge SVGO பல-கடவு மேம்படுத்தலை உங்கள் உலாவியிலேயே நேரடியாக இயக்குகிறது — வேண்டுமென்றே viewBox-ஐப் பாதுகாக்கிறது, எனவே மேம்படுத்தலுக்குப் பிறகும் பதிலளிக்கும் அளவீடு தொடர்ந்து வேலை செய்யும். நீங்கள் எத்தனை பைட்டுகள், என்ன சதவீதம் சேமித்தீர்கள் என்பதைத் துல்லியமாகக் காண்பீர்கள்.',
  steps: [
    'உங்கள் SVG மார்க்கப்பை ஆசிரியரில் ஒட்டவும், அல்லது ஒரு .svg கோப்பைப் பக்கத்தில் எங்கும் விடவும்.',
    'கருவிப்பட்டியில் Optimize பொத்தானை அழுத்தவும் — ஆசிரியர் சுருக்கப்பட்ட முடிவுடன் புதுப்பிக்கப்படும்.',
    'சேமிக்கப்பட்ட பைட்டுகள் அறிவிப்பைச் சரிபார்த்து, பின்னர் மேம்படுத்தப்பட்ட SVG-ஐ நகலெடுக்கவும் அல்லது பதிவிறக்கவும்.',
  ],
  faqs: [
    {
      q: 'மேம்படுத்தல் என் SVG எப்படித் தோன்றுகிறது என்பதை மாற்றுகிறதா?',
      a: 'இல்லை. SVGO அதிகப்படியானவற்றை மட்டுமே நீக்குகிறது — மெட்டாடேட்டா, கூடுதல் துல்லியம், வெற்றிடம். முடிவு ஒரே மாதிரியாக வரையப்படுகிறது என்பதைச் சரிபார்க்க நேரடி முன்னோட்டத்தைப் பயன்படுத்தவும்.',
    },
    {
      q: 'நீங்கள் viewBox-ஐ ஏன் வைத்திருக்கிறீர்கள்?',
      a: 'சில மேம்படுத்திகள் அகலமும் உயரமும் இருக்கும்போது viewBox-ஐக் கைவிடுகின்றன, இது பதிலளிக்கும் அளவீட்டை அமைதியாக உடைக்கிறது. இந்தக் கருவி viewBox பாதுகாப்பைக் கட்டாயப்படுத்துகிறது.',
    },
    {
      q: 'மேம்படுத்திய பிறகு என் அசல் SVG-ஐத் திரும்பப் பெற முடியுமா?',
      a: 'ஆம் — அசல் கோப்பை மீண்டும் ஒட்டவும் அல்லது விடவும். மேம்படுத்தப்பட்ட முடிவை நீங்கள் நகலெடுக்கவோ பதிவிறக்கவோ செய்யாத வரை எதுவும் மேலெழுதப்படுவதில்லை.',
    },
  ],
  howToUse: 'எப்படி பயன்படுத்துவது',
  faqHeading: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
  moreTools: 'மேலும் SVG கருவிகள்',
};

const pngTa: ToolContent = {
  title: 'SVG இலிருந்து PNG மாற்றி — இலவச 1x/2x/4x ஏற்றுமதி | VectorForge',
  description:
    'SVG-ஐ 1x, 2x மற்றும் 4x தெளிவுத்திறனில் PNG ஆக ஆன்லைனில் மாற்றவும். நேரடி முன்னோட்டத்துடன் இலவச, வரம்பற்ற, உலாவிக்குள் SVG இலிருந்து PNG மாற்றி.',
  heading: 'SVG இலிருந்து PNG மாற்றி',
  intro:
    'எந்த SVG இலிருந்தும் 1x, 2x அல்லது 4x அளவில் தெளிவான PNG-களை ஏற்றுமதி செய்யவும் — ஃபேவிகான்கள், செயலிச் சின்னங்கள் மற்றும் சமூகப் படங்களுக்கு ஏற்றது. SVG-க்கு வெளிப்படையான அளவுகள் இல்லையென்றால், viewBox தானாகவே பயன்படுத்தப்படும், வெளிப்படைத்தன்மை பாதுகாக்கப்படும்.',
  steps: [
    'உங்கள் SVG மார்க்கப்பை ஆசிரியரில் ஒட்டவும், அல்லது ஒரு .svg கோப்பைப் பக்கத்தில் எங்கும் விடவும்.',
    'ஏற்றுமதிக்கு முன் சரிபார்க்க எந்தப் பின்னணியிலும் SVG-ஐ முன்னோட்டம் காணவும்.',
    'PNG ஏற்றுமதிப் பொத்தான்களிலிருந்து 1x, 2x அல்லது 4x ஐத் தேர்ந்தெடுத்து உங்கள் ராஸ்டர் படத்தைப் பதிவிறக்கவும்.',
  ],
  faqs: [
    {
      q: 'எந்தத் தெளிவுத்திறன்களில் ஏற்றுமதி செய்ய முடியும்?',
      a: 'SVG-இன் இயற்கை அளவின் 1x, 2x மற்றும் 4x, அதன் அகலம்/உயரம் பண்புகளிலிருந்தோ அல்லது viewBox இலிருந்தோ எடுக்கப்பட்டது.',
    },
    {
      q: 'PNG இல் வெளிப்படைத்தன்மை பாதுகாக்கப்படுகிறதா?',
      a: 'ஆம் — ஏற்றுமதி செய்யப்பட்ட PNG SVG-இன் ஆல்ஃபா சேனலை வைத்திருக்கிறது.',
    },
    {
      q: 'என் PNG முன்னோட்டத்திலிருந்து ஏன் வித்தியாசமாகத் தோன்றுகிறது?',
      a: 'SVG-க்குள் குறிப்பிடப்படும் வெளிப்புற எழுத்துருக்கள் அல்லது இணைக்கப்பட்ட படங்களை உலாவியில் ராஸ்டராக்க முடியாது. பிக்சல்-சரியான முடிவுகளுக்கு உரையை வெளிப்புறக் கோடுகளாக மாற்றவும்.',
    },
  ],
  howToUse: 'எப்படி பயன்படுத்துவது',
  faqHeading: 'அடிக்கடி கேட்கப்படும் கேள்விகள்',
  moreTools: 'மேலும் SVG கருவிகள்',
};

/* ---------------- Telugu ---------------- */

const jsxTe: ToolContent = {
  title: 'SVG నుండి JSX కన్వర్టర్ — ఉచిత ఆన్‌లైన్ సాధనం | VectorForge',
  description:
    'సెకన్లలో SVG మార్కప్‌ను JSXగా మార్చండి. స్వయంచాలక అట్రిబ్యూట్ పేరు మార్పు, స్టైల్-ఆబ్జెక్ట్ మార్పిడి మరియు లైవ్ ప్రివ్యూతో ఉచిత ఆన్‌లైన్ SVG నుండి JSX కన్వర్టర్. మీ బ్రౌజర్‌లో 100% నడుస్తుంది.',
  heading: 'SVG నుండి JSX కన్వర్టర్',
  intro:
    'ఏదైనా SVGని అతికించి, మీ React కాంపోనెంట్‌లకు సిద్ధంగా ఉన్న శుభ్రమైన JSX పొందండి. VectorForge అట్రిబ్యూట్‌లను స్వయంచాలకంగా పేరుమారుస్తుంది (class అనేది className అవుతుంది, stroke-width అనేది strokeWidth అవుతుంది), ఇన్‌లైన్ స్టైల్‌లను స్టైల్ ఆబ్జెక్ట్‌లుగా మారుస్తుంది మరియు XML వ్యాఖ్యలను JSX వ్యాఖ్యలుగా మారుస్తుంది — తక్షణమే, లైవ్ ప్రివ్యూతో. ఏదీ అప్‌లోడ్ కాదు; ప్రతిదీ మీ బ్రౌజర్‌లోనే జరుగుతుంది.',
  steps: [
    'మీ SVG మార్కప్‌ను ఎడిటర్‌లో అతికించండి, లేదా .svg ఫైల్‌ను పేజీలో ఎక్కడైనా వదలండి.',
    'JSX ట్యాబ్ ఇప్పటికే ఎంచుకోబడింది — మీరు టైప్ చేస్తున్నప్పుడు లైవ్‌గా నవీకరించబడే మార్చబడిన అవుట్‌పుట్‌ను సమీక్షించండి.',
    'ఒకే క్లిక్‌తో JSXని కాపీ చేయండి, లేదా మీ ప్రాజెక్ట్ కోసం .jsx ఫైల్‌గా డౌన్‌లోడ్ చేయండి.',
  ],
  faqs: [
    {
      q: 'ఈ సాధనం నా SVGని సర్వర్‌కు అప్‌లోడ్ చేస్తుందా?',
      a: 'లేదు. అన్ని మార్పిడులు JavaScript ఉపయోగించి మీ బ్రౌజర్‌లో స్థానికంగా నడుస్తాయి. మీ ఫైళ్లు మీ పరికరాన్ని ఎప్పటికీ వదిలిపెట్టవు.',
    },
    {
      q: 'JSXలో అట్రిబ్యూట్ పేర్లు ఎందుకు మారుతాయి?',
      a: 'JSX జావాస్క్రిప్ట్ పేరు పెట్టే సంప్రదాయాలను అనుసరిస్తుంది, కాబట్టి stroke-width వంటి హైఫన్ ఉన్న SVG అట్రిబ్యూట్‌లు camelCase (strokeWidth) కావాలి మరియు class అనేది className అవుతుంది. ఈ కన్వర్టర్ ఆ మ్యాపింగ్‌లను స్వయంచాలకంగా వర్తిస్తుంది.',
    },
    {
      q: 'నేను అనేక SVGలను ఒకేసారి JSXగా మార్చగలనా?',
      a: 'అవును. పేజీపై అనేక ఫైళ్లను వదలండి, బ్యాచ్ బార్‌లో వాటి మధ్య మారండి, మరియు ప్రతి ఫైల్ JSXగా మార్చబడిన స్థితిలో అన్నిటినీ ZIPగా డౌన్‌లోడ్ చేయండి.',
    },
  ],
  howToUse: 'ఎలా ఉపయోగించాలి',
  faqHeading: 'తరచుగా అడిగే ప్రశ్నలు',
  moreTools: 'మరిన్ని SVG సాధనాలు',
};

const reactTe: ToolContent = {
  title: 'SVG నుండి React కాంపోనెంట్ కన్వర్టర్ — ఉచితం ఆన్‌లైన్ | VectorForge',
  description:
    'ఏదైనా SVGని తక్షణమే టైప్ చేసిన React (.tsx) కాంపోనెంట్‌గా మార్చండి. ప్రాప్స్ మద్దతు, శుభ్రమైన అవుట్‌పుట్ మరియు లైవ్ ప్రివ్యూతో ఉచిత SVG నుండి React కాంపోనెంట్ కన్వర్టర్.',
  heading: 'SVG నుండి React కాంపోనెంట్ కన్వర్టర్',
  intro:
    'ఏదైనా SVG నుండి ప్రొడక్షన్‌కు సిద్ధంగా ఉన్న TypeScript React కాంపోనెంట్ పొందండి. ఉత్పత్తి చేయబడిన కాంపోనెంట్ ప్రామాణిక SVG ప్రాప్స్‌ను అంగీకరిస్తుంది, వాటిని రూట్ మూలకంపై విస్తరిస్తుంది మరియు React హెచ్చరికలను ప్రేరేపించే అనవసర xmlns ప్రకటనను తీసివేస్తుంది — మీ కోడ్‌బేస్‌లో నేరుగా పెట్టడానికి సిద్ధం.',
  steps: [
    'మీ SVG మార్కప్‌ను ఎడిటర్‌లో అతికించండి, లేదా .svg ఫైల్‌ను పేజీలో ఎక్కడైనా వదలండి.',
    'React Component ట్యాబ్ ఇప్పటికే ఎంచుకోబడింది — కాంపోనెంట్ పేరు మీ ఫైల్ పేరు నుండి తీసుకోబడుతుంది.',
    'ఒకే క్లిక్‌తో .tsx కోడ్‌ను కాపీ చేయండి, లేదా దానిని డౌన్‌లోడ్ చేసి ఇతర ఏ కాంపోనెంట్‌లాగైనా దిగుమతి చేయండి.',
  ],
  faqs: [
    {
      q: 'ఉత్పత్తి చేయబడిన కాంపోనెంట్‌ను ఎలా ఉపయోగించాలి?',
      a: 'దానిని ఏ కాంపోనెంట్‌లాగైనా దిగుమతి చేసి ప్రామాణిక SVG ప్రాప్స్ ఇవ్వండి, ఉదాహరణకు <SampleIcon width={24} height={24} fill="currentColor" />. ప్రాప్స్ రూట్ మూలకంపై విస్తరిస్తాయి.',
    },
    {
      q: 'అవుట్‌పుట్ నుండి xmlns ఎందుకు తీసివేయబడుతుంది?',
      a: 'React SVG నేమ్‌స్పేస్‌లను స్వయంగా నిర్వహిస్తుంది; xmlnsను ఉంచడం కన్సోల్ హెచ్చరికకు కారణమవుతుంది, కాబట్టి కన్వర్టర్ దానిని రూట్ మూలకం నుండి తీసివేస్తుంది.',
    },
    {
      q: 'ఇది React Nativeతో పనిచేస్తుందా?',
      a: 'ఈ అవుట్‌పుట్ వెబ్ Reactను లక్ష్యంగా చేసుకుంటుంది. React Native కోసం, React Native ట్యాబ్‌కు మారి బదులుగా react-native-svg కాంపోనెంట్ పొందండి.',
    },
  ],
  howToUse: 'ఎలా ఉపయోగించాలి',
  faqHeading: 'తరచుగా అడిగే ప్రశ్నలు',
  moreTools: 'మరిన్ని SVG సాధనాలు',
};

const base64Te: ToolContent = {
  title: 'SVG నుండి Base64 కన్వర్టర్ — ఉచిత ఆన్‌లైన్ ఎన్‌కోడర్ | VectorForge',
  description:
    'SVGని ఆన్‌లైన్‌లో Base64గా ఎన్‌కోడ్ చేయండి. యూనికోడ్-సురక్షిత ఎన్‌కోడింగ్, లైవ్ ప్రివ్యూ మరియు ఒకే-క్లిక్ కాపీతో ఉచిత SVG నుండి Base64 కన్వర్టర్.',
  heading: 'SVG నుండి Base64 కన్వర్టర్',
  intro:
    'ముడి మార్కప్ సరిపోని ప్రదేశాల కోసం — CSS ఫైళ్లు, JSON కాన్ఫిగ్‌లు లేదా API పేలోడ్‌లు — ఏదైనా SVGని Base64-ఎన్‌కోడ్ చేయండి. ఎన్‌కోడింగ్ యూనికోడ్-సురక్షితం (దేవనాగరి, ఎమోజీ మరియు CJK వచనం రౌండ్-ట్రిప్‌లో మనుగడ సాగిస్తుంది), మరియు మీరు సోర్స్‌ను సవరిస్తున్నప్పుడు అవుట్‌పుట్ లైవ్‌గా నవీకరించబడుతుంది.',
  steps: [
    'మీ SVG మార్కప్‌ను ఎడిటర్‌లో అతికించండి, లేదా .svg ఫైల్‌ను పేజీలో ఎక్కడైనా వదలండి.',
    'Base64 ట్యాబ్ ఇప్పటికే ఎంచుకోబడింది — ఎన్‌కోడ్ చేయబడిన స్ట్రింగ్ అవుట్‌పుట్ పేన్‌లో తక్షణమే కనిపిస్తుంది.',
    'ఒకే క్లిక్‌తో Base64 స్ట్రింగ్‌ను కాపీ చేయండి, లేదా దానిని .txt ఫైల్‌గా డౌన్‌లోడ్ చేయండి.',
  ],
  faqs: [
    {
      q: 'Base64 అవుట్‌పుట్ అసలు SVG కంటే పెద్దదా?',
      a: 'అవును — Base64 సుమారు 33% ఓవర్‌హెడ్‌ను జోడిస్తుంది. పరిమాణం ముఖ్యమైతే, CSS కోసం శాతం-ఎన్‌కోడ్ చేసిన డేటా URI (CSS Data-URI ట్యాబ్)ని ఇష్టపడండి, ఇది SVGకి సాధారణంగా చిన్నది.',
    },
    {
      q: 'నా Base64 అవుట్‌పుట్ ప్యాడింగ్ అక్షరాలతో (=) ఎందుకు ముగుస్తుంది?',
      a: 'ప్యాడింగ్ అనేది Base64 స్పెసిఫికేషన్‌లో భాగం మరియు డీకోడర్‌లు దానిని ఆశిస్తాయి. దానిని అవుట్‌పుట్‌లో ఉంచండి.',
    },
    {
      q: 'Base64 నా SVG లోపల యూనికోడ్ వచనాన్ని నిర్వహించగలదా?',
      a: 'అవును. ఈ సాధనం ముందుగా UTF-8గా ఎన్‌కోడ్ చేస్తుంది, కాబట్టి లాటిన్ కాని వచనం మరియు ఎమోజీ పాడవ్వకుండా సరిగ్గా రౌండ్-ట్రిప్ చేస్తాయి.',
    },
  ],
  howToUse: 'ఎలా ఉపయోగించాలి',
  faqHeading: 'తరచుగా అడిగే ప్రశ్నలు',
  moreTools: 'మరిన్ని SVG సాధనాలు',
};

const dataUriTe: ToolContent = {
  title: 'SVG నుండి Data URI / CSS నేపథ్య జనరేటర్ — ఉచితం | VectorForge',
  description:
    'SVGని background-image కోసం సిద్ధంగా ఉన్న CSS డేటా URIగా మార్చండి. మినిఫికేషన్, ఆప్టిమైజ్ చేసిన ఎన్‌కోడింగ్ మరియు లైవ్ ప్రివ్యూతో ఉచిత జనరేటర్.',
  heading: 'SVG నుండి Data URI కన్వర్టర్',
  intro:
    'ఏదైనా SVGని మీరు నేరుగా background-imageలో అతికించగల కాంపాక్ట్ డేటా URIగా మార్చండి. VectorForge మొదట SVGని మినిఫై చేసి దానిని శాతం-ఎన్‌కోడ్ చేస్తుంది, ఇది సాధారణ చిహ్నాల కోసం URIని Base64 కంటే చిన్నగా ఉంచుతుంది — మరియు మీరు కాపీ చేయడానికి ముందు లైవ్ ప్రివ్యూలో అది రెండర్ అవ్వడాన్ని చూడగలరు.',
  steps: [
    'మీ SVG మార్కప్‌ను ఎడిటర్‌లో అతికించండి, లేదా .svg ఫైల్‌ను పేజీలో ఎక్కడైనా వదలండి.',
    'CSS Data-URI ట్యాబ్ ఇప్పటికే ఎంచుకోబడింది — మీరు సవరిస్తున్నప్పుడు స్నిప్పెట్ లైవ్‌గా నవీకరించబడుతుంది.',
    'ఒకే క్లిక్‌తో CSS స్నిప్పెట్‌ను కాపీ చేయండి, లేదా దానిని .css ఫైల్‌గా డౌన్‌లోడ్ చేయండి.',
  ],
  faqs: [
    {
      q: 'Data URI లేదా Base64 — ఏది చిన్నది?',
      a: 'SVG కోసం, శాతం-ఎన్‌కోడ్ చేసిన డేటా URI సాధారణంగా Base64 కంటే చిన్నది (మీరు ~33% ఎన్‌కోడింగ్ ఓవర్‌హెడ్‌ను నివారిస్తారు), మరియు ఈ సాధనం దానిని మరింత తగ్గించడానికి ముందుగా SVGని మినిఫై చేస్తుంది.',
    },
    {
      q: 'ఎన్‌కోడింగ్‌కు ముందు SVG ఎందుకు మినిఫై చేయబడుతుంది?',
      a: 'వ్యాఖ్యలు, వైట్‌స్పేస్ మరియు మెటాడేటాను తీసివేయడం వల్ల చిత్రం రెండర్ అయ్యే విధానం మారకుండా URI తగ్గుతుంది.',
    },
    {
      q: 'డేటా URI xmlns అట్రిబ్యూట్‌ను ఉంచుతుందా?',
      a: 'అవును. స్వతంత్ర ఉపయోగానికి (img ట్యాగ్‌లు, CSS నేపథ్యాలు) xmlns అవసరం, కాబట్టి ఇక్కడ అది భద్రపరచబడుతుంది — JSX లేదా React కాంపోనెంట్ అవుట్‌పుట్‌కు భిన్నంగా.',
    },
  ],
  howToUse: 'ఎలా ఉపయోగించాలి',
  faqHeading: 'తరచుగా అడిగే ప్రశ్నలు',
  moreTools: 'మరిన్ని SVG సాధనాలు',
};

const optimizerTe: ToolContent = {
  title: 'SVG ఆప్టిమైజర్ — ఉచిత ఆన్‌లైన్ SVGO సాధనం | VectorForge',
  description:
    'SVGOతో SVG ఫైళ్లను ఆన్‌లైన్‌లో ఆప్టిమైజ్ చేయండి. viewBox మరియు దృశ్య నాణ్యతను భద్రపరుస్తూ ఫైల్ పరిమాణాన్ని తగ్గించే ఉచిత SVG ఆప్టిమైజర్.',
  heading: 'SVG ఆప్టిమైజర్',
  intro:
    'SVG ఫైళ్లు ఎలా కనిపిస్తాయో మార్చకుండా వాటిని తగ్గించండి. VectorForge SVGO మల్టీపాస్ ఆప్టిమైజేషన్‌ను నేరుగా మీ బ్రౌజర్‌లోనే నడుపుతుంది — మరియు ఉద్దేశపూర్వకంగా viewBoxను భద్రపరుస్తుంది, కాబట్టి ఆప్టిమైజేషన్ తర్వాత కూడా రెస్పాన్సివ్ స్కేలింగ్ పనిచేస్తూనే ఉంటుంది. మీరు ఎన్ని బైట్‌లు మరియు ఎంత శాతం ఆదా చేశారో ఖచ్చితంగా చూస్తారు.',
  steps: [
    'మీ SVG మార్కప్‌ను ఎడిటర్‌లో అతికించండి, లేదా .svg ఫైల్‌ను పేజీలో ఎక్కడైనా వదలండి.',
    'టూల్‌బార్‌లో Optimize బటన్‌ను నొక్కండి — ఎడిటర్ మినిఫై చేసిన ఫలితంతో నవీకరించబడుతుంది.',
    'ఆదా అయిన బైట్‌ల నోటీసును తనిఖీ చేయండి, ఆపై ఆప్టిమైజ్ చేసిన SVGని కాపీ లేదా డౌన్‌లోడ్ చేయండి.',
  ],
  faqs: [
    {
      q: 'ఆప్టిమైజేషన్ నా SVG ఎలా కనిపిస్తుందో మారుస్తుందా?',
      a: 'లేదు. SVGO అనవసరమైనవి మాత్రమే తీసివేస్తుంది — మెటాడేటా, అధిక ఖచ్చితత్వం, వైట్‌స్పేస్. ఫలితం ఒకేలా రెండర్ అవుతుందని ధృవీకరించడానికి లైవ్ ప్రివ్యూని ఉపయోగించండి.',
    },
    {
      q: 'మీరు viewBoxను ఎందుకు ఉంచుతారు?',
      a: 'కొన్ని ఆప్టిమైజర్‌లు వెడల్పు మరియు ఎత్తు ఉన్నప్పుడు viewBoxను వదిలివేస్తాయి, ఇది రెస్పాన్సివ్ స్కేలింగ్‌ను నిశ్శబ్దంగా విచ్ఛిన్నం చేస్తుంది. ఈ సాధనం viewBox భద్రతను బలవంతం చేస్తుంది.',
    },
    {
      q: 'ఆప్టిమైజ్ చేసిన తర్వాత నా అసలు SVGని తిరిగి పొందగలనా?',
      a: 'అవును — అసలు ఫైల్‌ను మళ్లీ అతికించండి లేదా వదలండి. మీరు ఆప్టిమైజ్ చేసిన ఫలితాన్ని కాపీ లేదా డౌన్‌లోడ్ చేయనంత వరకు ఏదీ తిరిగి రాయబడదు.',
    },
  ],
  howToUse: 'ఎలా ఉపయోగించాలి',
  faqHeading: 'తరచుగా అడిగే ప్రశ్నలు',
  moreTools: 'మరిన్ని SVG సాధనాలు',
};

const pngTe: ToolContent = {
  title: 'SVG నుండి PNG కన్వర్టర్ — ఉచిత 1x/2x/4x ఎగుమతి | VectorForge',
  description:
    'SVGని 1x, 2x మరియు 4x రిజల్యూషన్‌లో PNGగా ఆన్‌లైన్‌లో మార్చండి. లైవ్ ప్రివ్యూతో ఉచిత, అపరిమిత, బ్రౌజర్‌లోని SVG నుండి PNG కన్వర్టర్.',
  heading: 'SVG నుండి PNG కన్వర్టర్',
  intro:
    'ఏదైనా SVG నుండి 1x, 2x లేదా 4x స్కేల్‌లో స్పష్టమైన PNGలను ఎగుమతి చేయండి — ఫేవికాన్‌లు, యాప్ చిహ్నాలు మరియు సామాజిక చిత్రాలకు పరిపూర్ణం. SVGకి స్పష్టమైన పరిమాణాలు లేకపోతే, viewBox స్వయంచాలకంగా ఉపయోగించబడుతుంది, మరియు పారదర్శకత భద్రపరచబడుతుంది.',
  steps: [
    'మీ SVG మార్కప్‌ను ఎడిటర్‌లో అతికించండి, లేదా .svg ఫైల్‌ను పేజీలో ఎక్కడైనా వదలండి.',
    'ఎగుమతి చేయడానికి ముందు ధృవీకరించడానికి ఏ నేపథ్యంపైనైనా SVGని ప్రివ్యూ చేయండి.',
    'PNG ఎగుమతి బటన్‌ల నుండి 1x, 2x లేదా 4x ఎంచుకుని మీ రాస్టర్ చిత్రాన్ని డౌన్‌లోడ్ చేయండి.',
  ],
  faqs: [
    {
      q: 'నేను ఏ రిజల్యూషన్‌లను ఎగుమతి చేయగలను?',
      a: 'SVG సహజ పరిమాణం యొక్క 1x, 2x మరియు 4x, దాని వెడల్పు/ఎత్తు అట్రిబ్యూట్‌ల నుండి లేదా దాని viewBox నుండి తీసుకోబడింది.',
    },
    {
      q: 'PNGలో పారదర్శకత భద్రపరచబడుతుందా?',
      a: 'అవును — ఎగుమతి చేయబడిన PNG SVG యొక్క ఆల్ఫా ఛానెల్‌ను ఉంచుతుంది.',
    },
    {
      q: 'నా PNG ప్రివ్యూ నుండి ఎందుకు భిన్నంగా కనిపిస్తుంది?',
      a: 'SVG లోపల సూచించబడిన బాహ్య ఫాంట్‌లు లేదా లింక్ చేయబడిన చిత్రాలు బ్రౌజర్‌లో రాస్టరైజ్ చేయబడవు. పిక్సెల్-పర్ఫెక్ట్ ఫలితాల కోసం వచనాన్ని అవుట్‌లైన్‌లుగా మార్చండి.',
    },
  ],
  howToUse: 'ఎలా ఉపయోగించాలి',
  faqHeading: 'తరచుగా అడిగే ప్రశ్నలు',
  moreTools: 'మరిన్ని SVG సాధనాలు',
};

/* ---------------- Marathi ---------------- */

const jsxMr: ToolContent = {
  title: 'SVG ते JSX रूपांतरक — विनामूल्य ऑनलाइन साधन | VectorForge',
  description:
    'सेकंदांत SVG मार्कअपचे JSX मध्ये रूपांतर करा. विनामूल्य ऑनलाइन SVG ते JSX रूपांतरक — स्वयंचलित विशेषता नाव बदल, शैली-ऑब्जेक्ट रूपांतर आणि लाइव्ह पूर्वावलोकनासह. तुमच्या ब्राउझरमध्ये 100% चालते.',
  heading: 'SVG ते JSX रूपांतरक',
  intro:
    'कोणतेही SVG चिकटवा आणि तुमच्या React घटकांसाठी तयार स्वच्छ JSX मिळवा. VectorForge विशेषता आपोआप पुन्हा नाव देते (class होतो className, stroke-width होतो strokeWidth), इनलाइन शैली शैली ऑब्जेक्टमध्ये बदलते आणि XML टिप्पण्या JSX टिप्पण्यांमध्ये बदलते — त्वरित, लाइव्ह पूर्वावलोकनासह. काहीही अपलोड होत नाही; सर्व काही तुमच्या ब्राउझरमध्येच घडते.',
  steps: [
    'तुमचे SVG मार्कअप संपादकात चिकटवा, किंवा .svg फाइल पानावर कुठेही सोडा.',
    'JSX टॅब आधीच निवडलेला आहे — तुम्ही टाइप करत असताना लाइव्ह अद्यतनित होणारे रूपांतरित आउटपुट पहा.',
    'एका क्लिकमध्ये JSX कॉपी करा, किंवा तुमच्या प्रकल्पासाठी .jsx फाइल म्हणून डाउनलोड करा.',
  ],
  faqs: [
    {
      q: 'हे साधन माझे SVG सर्व्हरवर अपलोड करते का?',
      a: 'नाही. सर्व रूपांतर JavaScript वापरून तुमच्या ब्राउझरमध्ये स्थानिकरित्या चालते. तुमच्या फाइल्स तुमचे डिव्हाइस कधीही सोडत नाहीत.',
    },
    {
      q: 'JSX मध्ये विशेषतांची नावे का बदलतात?',
      a: 'JSX JavaScript नाव देण्याच्या रूढींचे पालन करते, म्हणून stroke-width सारख्या योजक चिन्हांकित SVG विशेषतांना camelCase (strokeWidth) व्हावे लागते आणि class होतो className. हे रूपांतरक ती जुळणी आपोआप लागू करते.',
    },
    {
      q: 'मी अनेक SVG एकाच वेळी JSX मध्ये बदलू शकतो का?',
      a: 'होय. पानावर अनेक फाइल्स सोडा, बॅच बारमध्ये त्यांच्यामध्ये बदला, आणि सर्व काही ZIP म्हणून डाउनलोड करा — प्रत्येक फाइल JSX मध्ये बदललेली.',
    },
  ],
  howToUse: 'कसे वापरावे',
  faqHeading: 'नेहमी विचारले जाणारे प्रश्न',
  moreTools: 'आणखी SVG साधने',
};

const reactMr: ToolContent = {
  title: 'SVG ते React घटक रूपांतरक — विनामूल्य ऑनलाइन | VectorForge',
  description:
    'कोणतेही SVG त्वरित टाइप केलेल्या React (.tsx) घटकात बदला. विनामूल्य SVG ते React घटक रूपांतरक — प्रॉप्स समर्थन, स्वच्छ आउटपुट आणि लाइव्ह पूर्वावलोकनासह.',
  heading: 'SVG ते React घटक रूपांतरक',
  intro:
    'कोणत्याही SVG मधून प्रोडक्शन-रेडी TypeScript React घटक मिळवा. तयार झालेला घटक मानक SVG प्रॉप्स स्वीकारतो, ते मूळ घटकावर पसरवतो आणि React इशारे देणारी अनावश्यक xmlns घोषणा काढून टाकतो — सरळ तुमच्या कोडबेसमध्ये टाकण्यासाठी तयार.',
  steps: [
    'तुमचे SVG मार्कअप संपादकात चिकटवा, किंवा .svg फाइल पानावर कुठेही सोडा.',
    'React Component टॅब आधीच निवडलेला आहे — घटकाचे नाव तुमच्या फाइलच्या नावावरून घेतले जाते.',
    'एका क्लिकमध्ये .tsx कोड कॉपी करा, किंवा तो डाउनलोड करून इतर कोणत्याही घटकाप्रमाणे आयात करा.',
  ],
  faqs: [
    {
      q: 'तयार झालेला घटक कसा वापरावा?',
      a: 'तो इतर कोणत्याही घटकाप्रमाणे आयात करा आणि मानक SVG प्रॉप्स द्या, उदाहरणार्थ <SampleIcon width={24} height={24} fill="currentColor" />. प्रॉप्स मूळ घटकावर पसरतात.',
    },
    {
      q: 'आउटपुटमधून xmlns का काढले जाते?',
      a: 'React SVG नेमस्पेसेस स्वतः हाताळते; xmlns ठेवल्यास कन्सोल इशारा येतो, म्हणून रूपांतरक ते मूळ घटकातून काढून टाकते.',
    },
    {
      q: 'हे React Native सोबत काम करते का?',
      a: 'हे आउटपुट वेब React साठी आहे. React Native साठी React Native टॅबवर जा — तिथे react-native-svg घटक मिळेल.',
    },
  ],
  howToUse: 'कसे वापरावे',
  faqHeading: 'नेहमी विचारले जाणारे प्रश्न',
  moreTools: 'आणखी SVG साधने',
};

const base64Mr: ToolContent = {
  title: 'SVG ते Base64 रूपांतरक — विनामूल्य ऑनलाइन एन्कोडर | VectorForge',
  description:
    'SVG ला Base64 म्हणून ऑनलाइन एन्कोड करा. विनामूल्य SVG ते Base64 रूपांतरक — Unicode-सुरक्षित एन्कोडिंग, लाइव्ह पूर्वावलोकन आणि एक-क्लिक कॉपीसह.',
  heading: 'SVG ते Base64 रूपांतरक',
  intro:
    'ज्या ठिकाणी कच्चे मार्कअप बसणार नाही — CSS फाइल्स, JSON कॉन्फिग किंवा API पेलोड — त्यांच्यासाठी कोणतेही SVG Base64-एन्कोड करा. एन्कोडिंग Unicode-सुरक्षित आहे (देवनागरी, इमोजी आणि CJK मजकूर जाण्या-येण्यात टिकतो), आणि तुम्ही स्रोत संपादित करत असताना आउटपुट लाइव्ह अद्यतनित होते.',
  steps: [
    'तुमचे SVG मार्कअप संपादकात चिकटवा, किंवा .svg फाइल पानावर कुठेही सोडा.',
    'Base64 टॅब आधीच निवडलेला आहे — एन्कोड केलेली स्ट्रिंग आउटपुट फलकात त्वरित दिसते.',
    'एका क्लिकमध्ये Base64 स्ट्रिंग कॉपी करा, किंवा .txt फाइल म्हणून डाउनलोड करा.',
  ],
  faqs: [
    {
      q: 'Base64 आउटपुट मूळ SVG पेक्षा मोठे असते का?',
      a: 'होय — Base64 सुमारे 33% अतिरिक्त जोडते. आकार महत्त्वाचा असल्यास CSS साठी टक्केवारी-एन्कोड केलेला data URI (CSS Data-URI टॅब) निवडा, जो SVG साठी सहसा लहान असतो.',
    },
    {
      q: 'माझे Base64 आउटपुट पॅडिंग वर्णांनी (=) का संपते?',
      a: 'पॅडिंग हे Base64 तपशीलांचा भाग आहे आणि डिकोडर त्याची अपेक्षा करतात. ते आउटपुटमध्ये राहू द्या.',
    },
    {
      q: 'Base64 माझ्या SVG मधील Unicode मजकूर हाताळू शकते का?',
      a: 'होय. हे साधन प्रथम UTF-8 म्हणून एन्कोड करते, म्हणून अ-लॅटिन मजकूर आणि इमोजी बिघडण्याऐवजी योग्यरित्या जाणे-येणे करतात.',
    },
  ],
  howToUse: 'कसे वापरावे',
  faqHeading: 'नेहमी विचारले जाणारे प्रश्न',
  moreTools: 'आणखी SVG साधने',
};

const dataUriMr: ToolContent = {
  title: 'SVG ते Data URI / CSS पार्श्वभूमी जनरेटर — विनामूल्य | VectorForge',
  description:
    'SVG ला background-image साठी तयार CSS data URI मध्ये बदला. विनामूल्य जनरेटर — मिनिफिकेशन, अनुकूल एन्कोडिंग आणि लाइव्ह पूर्वावलोकनासह.',
  heading: 'SVG ते Data URI रूपांतरक',
  intro:
    'कोणतेही SVG एका संक्षिप्त data URI मध्ये बदला जे तुम्ही थेट background-image मध्ये चिकटवू शकता. VectorForge प्रथम SVG ला मिनिफाय करते आणि टक्केवारी-एन्कोड करते, ज्यामुळे सामान्य चिन्हांसाठी URI Base64 पेक्षा लहान राहतो — आणि कॉपी करण्यापूर्वी तुम्ही तो लाइव्ह पूर्वावलोकनात रंगताना पाहू शकता.',
  steps: [
    'तुमचे SVG मार्कअप संपादकात चिकटवा, किंवा .svg फाइल पानावर कुठेही सोडा.',
    'CSS Data-URI टॅब आधीच निवडलेला आहे — तुम्ही संपादित करत असताना स्निपेट लाइव्ह अद्यतनित होतो.',
    'एका क्लिकमध्ये CSS स्निपेट कॉपी करा, किंवा .css फाइल म्हणून डाउनलोड करा.',
  ],
  faqs: [
    {
      q: 'Data URI की Base64 — कोणते लहान आहे?',
      a: 'SVG साठी टक्केवारी-एन्कोड केलेला data URI सहसा Base64 पेक्षा लहान असतो (तुम्ही ~33% एन्कोडिंग ओव्हरहेड टाळता), आणि हे साधन तो आणखी लहान करण्यासाठी प्रथम SVG ला मिनिफाय करते.',
    },
    {
      q: 'एन्कोडिंगपूर्वी SVG ला मिनिफाय का केले जाते?',
      a: 'टिप्पण्या, मोकळी जागा आणि मेटाडेटा काढून टाकल्याने प्रतिमा कशी रंगते ते न बदलता URI लहान होतो.',
    },
    {
      q: 'Data URI xmlns विशेषता ठेवते का?',
      a: 'होय. स्वतंत्र वापरासाठी (img टॅग, CSS पार्श्वभूमी) xmlns आवश्यक आहे, म्हणून इथे ते जतन केले जाते — JSX किंवा React घटक आउटपुटच्या विपरीत.',
    },
  ],
  howToUse: 'कसे वापरावे',
  faqHeading: 'नेहमी विचारले जाणारे प्रश्न',
  moreTools: 'आणखी SVG साधने',
};

const optimizerMr: ToolContent = {
  title: 'SVG ऑप्टिमायझर — विनामूल्य ऑनलाइन SVGO साधन | VectorForge',
  description:
    'SVGO ने SVG फाइल्स ऑनलाइन ऑप्टिमाइझ करा. विनामूल्य SVG ऑप्टिमायझर जो viewBox आणि दृश्य गुणवत्ता जतन करत फाइल आकार कमी करतो.',
  heading: 'SVG ऑप्टिमायझर',
  intro:
    'SVG फाइल्सचा देखावा न बदलता त्या लहान करा. VectorForge SVGO मल्टीपास ऑप्टिमायझेशन थेट तुमच्या ब्राउझरमध्येच चालवते — आणि हेतुपुरस्सर viewBox जतन करते, ज्यामुळे ऑप्टिमायझेशननंतरही रिस्पॉन्सिव्ह स्केलिंग काम करत राहते. तुम्हाला नेमके किती बाइट आणि किती टक्के बचत झाली ते दिसते.',
  steps: [
    'तुमचे SVG मार्कअप संपादकात चिकटवा, किंवा .svg फाइल पानावर कुठेही सोडा.',
    'टूलबारमधील Optimize बटण दाबा — संपादक मिनिफाय केलेल्या निकालासह अद्यतनित होतो.',
    'बचत झालेल्या बाइट्सची सूचना पहा, मग ऑप्टिमाइझ केलेले SVG कॉपी किंवा डाउनलोड करा.',
  ],
  faqs: [
    {
      q: 'ऑप्टिमायझेशनने माझ्या SVG चा देखावा बदलतो का?',
      a: 'नाही. SVGO फक्त अतिरिक्तपणा काढते — मेटाडेटा, अतिरिक्त अचूकता, मोकळी जागा. निकाल तंतोतंत तसाच रंगतो का ते तपासण्यासाठी लाइव्ह पूर्वावलोकन वापरा.',
    },
    {
      q: 'तुम्ही viewBox का ठेवता?',
      a: 'काही ऑप्टिमायझर रुंदी आणि उंची असल्यास viewBox काढून टाकतात, ज्यामुळे रिस्पॉन्सिव्ह स्केलिंग गुपचूप तुटते. हे साधन viewBox जतन सक्तीने सुनिश्चित करते.',
    },
    {
      q: 'ऑप्टिमाइझ केल्यानंतर मी माझे मूळ SVG परत मिळवू शकतो का?',
      a: 'होय — फक्त मूळ फाइल पुन्हा चिकटवा किंवा सोडा. तुम्ही ऑप्टिमाइझ केलेला निकाल कॉपी किंवा डाउनलोड करत नाही तोपर्यंत काहीही वर लिहिले जात नाही.',
    },
  ],
  howToUse: 'कसे वापरावे',
  faqHeading: 'नेहमी विचारले जाणारे प्रश्न',
  moreTools: 'आणखी SVG साधने',
};

const pngMr: ToolContent = {
  title: 'SVG ते PNG रूपांतरक — विनामूल्य 1x/2x/4x निर्यात | VectorForge',
  description:
    'SVG ला 1x, 2x आणि 4x ठरावावर PNG मध्ये ऑनलाइन बदला. विनामूल्य, अमर्याद, ब्राउझरमधील SVG ते PNG रूपांतरक — लाइव्ह पूर्वावलोकनासह.',
  heading: 'SVG ते PNG रूपांतरक',
  intro:
    'कोणत्याही SVG मधून 1x, 2x किंवा 4x मापावर स्पष्ट PNG निर्यात करा — फेव्हिकॉन, अ‍ॅप चिन्हे आणि सामाजिक प्रतिमांसाठी परिपूर्ण. SVG मध्ये स्पष्ट मापे नसल्यास viewBox आपोआप वापरला जातो, आणि पारदर्शकता जतन केली जाते.',
  steps: [
    'तुमचे SVG मार्कअप संपादकात चिकटवा, किंवा .svg फाइल पानावर कुठेही सोडा.',
    'निर्यातीपूर्वी तपासण्यासाठी कोणत्याही पार्श्वभूमीवर SVG चे पूर्वावलोकन करा.',
    'PNG निर्यात बटणांमधून 1x, 2x किंवा 4x निवडा आणि तुमची रास्टर प्रतिमा डाउनलोड करा.',
  ],
  faqs: [
    {
      q: 'मी कोणत्या ठरावांवर निर्यात करू शकतो?',
      a: 'SVG च्या नैसर्गिक आकाराचे 1x, 2x आणि 4x — त्याच्या रुंदी/उंची विशेषतांमधून किंवा त्याच्या viewBox मधून घेतलेले.',
    },
    {
      q: 'PNG मध्ये पारदर्शकता जतन केली जाते का?',
      a: 'होय — निर्यात केलेले PNG SVG चे अल्फा चॅनेल ठेवते.',
    },
    {
      q: 'माझे PNG पूर्वावलोकनापेक्षा वेगळे का दिसते?',
      a: 'SVG मध्ये संदर्भित बाह्य फॉन्ट किंवा जोडलेल्या प्रतिमा ब्राउझरमध्ये रास्टराइझ करता येत नाहीत. पिक्सेल-परिपूर्ण निकालांसाठी मजकूर बाह्यरेषांमध्ये बदला.',
    },
  ],
  howToUse: 'कसे वापरावे',
  faqHeading: 'नेहमी विचारले जाणारे प्रश्न',
  moreTools: 'आणखी SVG साधने',
};

/* ---------------- Turkish ---------------- */

const jsxTr: ToolContent = {
  title: 'SVG’den JSX’e Dönüştürücü — Ücretsiz Çevrimiçi Araç | VectorForge',
  description:
    'SVG işaretlemesini saniyeler içinde JSX’e dönüştürün. Otomatik öznitelik yeniden adlandırma, stil nesnesi dönüştürme ve canlı önizleme ile ücretsiz çevrimiçi SVG’den JSX’e dönüştürücü. Tarayıcınızda %100 çalışır.',
  heading: 'SVG’den JSX’e Dönüştürücü',
  intro:
    'Herhangi bir SVG’yi yapıştırın ve React bileşenlerinize hazır temiz JSX elde edin. VectorForge öznitelikleri otomatik olarak yeniden adlandırır (class, className olur; stroke-width, strokeWidth olur), satır içi stilleri stil nesnelerine dönüştürür ve XML yorumlarını JSX yorumlarına çevirir — anında, canlı önizlemeyle. Hiçbir şey yüklenmez; her şey tarayıcınızda gerçekleşir.',
  steps: [
    'SVG işaretlemenizi düzenleyiciye yapıştırın ya da bir .svg dosyasını sayfanın herhangi bir yerine bırakın.',
    'JSX sekmesi zaten seçili — yazarken canlı güncellenen dönüştürülmüş çıktıyı inceleyin.',
    'JSX’i tek tıklamayla kopyalayın ya da projeniz için .jsx dosyası olarak indirin.',
  ],
  faqs: [
    {
      q: 'Bu araç SVG’mi bir sunucuya yüklüyor mu?',
      a: 'Hayır. Tüm dönüştürme, JavaScript kullanılarak tarayıcınızda yerel olarak çalışır. Dosyalarınız cihazınızdan asla ayrılmaz.',
    },
    {
      q: 'JSX’te öznitelik adları neden değişiyor?',
      a: 'JSX, JavaScript adlandırma kurallarını izler; bu yüzden stroke-width gibi tireli SVG özniteliklerinin camelCase (strokeWidth) olması ve class’ın className olması gerekir. Bu dönüştürücü bu eşlemeleri otomatik olarak uygular.',
    },
    {
      q: 'Birden çok SVG’yi aynı anda JSX’e dönüştürebilir miyim?',
      a: 'Evet. Sayfaya birkaç dosya bırakın, toplu çubukta aralarında geçiş yapın ve her dosya JSX’e dönüştürülmüş olarak hepsini ZIP olarak indirin.',
    },
  ],
  howToUse: 'Nasıl kullanılır',
  faqHeading: 'Sık sorulan sorular',
  moreTools: 'Diğer SVG araçları',
};

const reactTr: ToolContent = {
  title: 'SVG’den React Bileşenine Dönüştürücü — Ücretsiz Çevrimiçi | VectorForge',
  description:
    'Herhangi bir SVG’yi anında tipli bir React (.tsx) bileşenine çevirin. Props desteği, temiz çıktı ve canlı önizleme ile ücretsiz SVG’den React bileşenine dönüştürücü.',
  heading: 'SVG’den React Bileşenine Dönüştürücü',
  intro:
    'Herhangi bir SVG’den üretime hazır bir TypeScript React bileşeni elde edin. Üretilen bileşen standart SVG props’larını kabul eder, bunları kök öğeye yayar ve React uyarılarını tetikleyen gereksiz xmlns bildirimini kaldırır — doğrudan kod tabanınıza bırakmaya hazır.',
  steps: [
    'SVG işaretlemenizi düzenleyiciye yapıştırın ya da bir .svg dosyasını sayfanın herhangi bir yerine bırakın.',
    'React Component sekmesi zaten seçili — bileşen adı dosya adınızdan türetilir.',
    '.tsx kodunu tek tıklamayla kopyalayın ya da indirip başka herhangi bir bileşen gibi içe aktarın.',
  ],
  faqs: [
    {
      q: 'Üretilen bileşeni nasıl kullanırım?',
      a: 'Onu herhangi bir bileşen gibi içe aktarın ve standart SVG props’ları verin, örneğin <SampleIcon width={24} height={24} fill="currentColor" />. Props’lar kök öğeye yayılır.',
    },
    {
      q: 'Çıktıdan xmlns neden kaldırılıyor?',
      a: 'React, SVG ad alanlarını kendisi yönetir; xmlns’i tutmak konsol uyarısına neden olur, bu yüzden dönüştürücü onu kök öğeden kaldırır.',
    },
    {
      q: 'Bu React Native ile çalışır mı?',
      a: 'Bu çıktı web React’ini hedefler. React Native için React Native sekmesine geçerek bunun yerine bir react-native-svg bileşeni alın.',
    },
  ],
  howToUse: 'Nasıl kullanılır',
  faqHeading: 'Sık sorulan sorular',
  moreTools: 'Diğer SVG araçları',
};

const base64Tr: ToolContent = {
  title: 'SVG’den Base64’e Dönüştürücü — Ücretsiz Çevrimiçi Kodlayıcı | VectorForge',
  description:
    'SVG’yi çevrimiçi olarak Base64 olarak kodlayın. Unicode güvenli kodlama, canlı önizleme ve tek tıklamayla kopyalama ile ücretsiz SVG’den Base64’e dönüştürücü.',
  heading: 'SVG’den Base64’e Dönüştürücü',
  intro:
    'Ham işaretlemenin sığmadığı yerler için — CSS dosyaları, JSON yapılandırmaları veya API yükleri — herhangi bir SVG’yi Base64 ile kodlayın. Kodlama Unicode güvenlidir (Devanagari, emoji ve CJK metni gidiş-dönüşte hayatta kalır) ve siz kaynağı düzenlerken çıktı canlı güncellenir.',
  steps: [
    'SVG işaretlemenizi düzenleyiciye yapıştırın ya da bir .svg dosyasını sayfanın herhangi bir yerine bırakın.',
    'Base64 sekmesi zaten seçili — kodlanmış dize çıktı bölmesinde anında belirir.',
    'Base64 dizesini tek tıklamayla kopyalayın ya da .txt dosyası olarak indirin.',
  ],
  faqs: [
    {
      q: 'Base64 çıktısı orijinal SVG’den daha mı büyük?',
      a: 'Evet — Base64 yaklaşık %33 ek yük ekler. Boyut önemliyse CSS için yüzde kodlu bir veri URI’sini (CSS Data-URI sekmesi) tercih edin; bu, SVG için genellikle daha küçüktür.',
    },
    {
      q: 'Base64 çıktım neden dolgu karakterleriyle (=) bitiyor?',
      a: 'Dolgu, Base64 belirtiminin bir parçasıdır ve kod çözücüler bunu bekler. Çıktıda tutun.',
    },
    {
      q: 'Base64, SVG’min içindeki Unicode metni işleyebilir mi?',
      a: 'Evet. Bu araç önce UTF-8 olarak kodlar, böylece Latin olmayan metin ve emoji bozulmak yerine doğru şekilde gidiş-dönüş yapar.',
    },
  ],
  howToUse: 'Nasıl kullanılır',
  faqHeading: 'Sık sorulan sorular',
  moreTools: 'Diğer SVG araçları',
};

const dataUriTr: ToolContent = {
  title: 'SVG’den Veri URI’sine / CSS Arka Planı Oluşturucu — Ücretsiz | VectorForge',
  description:
    'SVG’yi background-image için CSS’e hazır bir veri URI’sine dönüştürün. Küçültme, optimize edilmiş kodlama ve canlı önizleme ile ücretsiz oluşturucu.',
  heading: 'SVG’den Veri URI’sine Dönüştürücü',
  intro:
    'Herhangi bir SVG’yi doğrudan background-image içine yapıştırabileceğiniz kompakt bir veri URI’sine çevirin. VectorForge önce SVG’yi küçültür ve yüzdeyle kodlar; bu, tipik simgeler için URI’yi Base64’ten daha küçük tutar — ve kopyalamadan önce canlı önizlemede işlendiğini görebilirsiniz.',
  steps: [
    'SVG işaretlemenizi düzenleyiciye yapıştırın ya da bir .svg dosyasını sayfanın herhangi bir yerine bırakın.',
    'CSS Data-URI sekmesi zaten seçili — siz düzenlerken parçacık canlı güncellenir.',
    'CSS parçacığını tek tıklamayla kopyalayın ya da .css dosyası olarak indirin.',
  ],
  faqs: [
    {
      q: 'Veri URI’si mi Base64 mi — hangisi daha küçük?',
      a: 'SVG için yüzdeyle kodlanmış bir veri URI’si genellikle Base64’ten daha küçüktür (~%33 kodlama ek yükünden kaçınırsınız) ve bu araç onu daha da küçültmek için önce SVG’yi küçültür.',
    },
    {
      q: 'SVG kodlamadan önce neden küçültülüyor?',
      a: 'Yorumları, boşlukları ve meta verileri kaldırmak, görüntünün işlenme biçimini değiştirmeden URI’yi küçültür.',
    },
    {
      q: 'Veri URI’si xmlns özniteliğini koruyor mu?',
      a: 'Evet. Bağımsız kullanım (img etiketleri, CSS arka planları) xmlns gerektirir, bu yüzden burada korunur — JSX veya React bileşeni çıktısından farklı olarak.',
    },
  ],
  howToUse: 'Nasıl kullanılır',
  faqHeading: 'Sık sorulan sorular',
  moreTools: 'Diğer SVG araçları',
};

const optimizerTr: ToolContent = {
  title: 'SVG Optimize Edici — Ücretsiz Çevrimiçi SVGO Aracı | VectorForge',
  description:
    'SVG dosyalarını SVGO ile çevrimiçi optimize edin. viewBox’ı ve görsel kaliteyi korurken dosya boyutunu küçülten ücretsiz SVG optimize edici.',
  heading: 'SVG Optimize Edici',
  intro:
    'SVG dosyalarını görünüşlerini değiştirmeden küçültün. VectorForge, SVGO çok geçişli optimizasyonunu doğrudan tarayıcınızda çalıştırır — ve kasıtlı olarak viewBox’ı korur, böylece duyarlı ölçekleme optimizasyondan sonra da çalışmaya devam eder. Kaç bayt ve yüzde kaç kazandığınızı tam olarak görürsünüz.',
  steps: [
    'SVG işaretlemenizi düzenleyiciye yapıştırın ya da bir .svg dosyasını sayfanın herhangi bir yerine bırakın.',
    'Araç çubuğundaki Optimize düğmesine basın — düzenleyici küçültülmüş sonuçla güncellenir.',
    'Kaydedilen bayt bildirimini kontrol edin, ardından optimize edilmiş SVG’yi kopyalayın ya da indirin.',
  ],
  faqs: [
    {
      q: 'Optimizasyon SVG’min görünüşünü değiştirir mi?',
      a: 'Hayır. SVGO yalnızca fazlalığı kaldırır — meta veriler, aşırı hassasiyet, boşluklar. Sonucun aynı şekilde işlendiğini doğrulamak için canlı önizlemeyi kullanın.',
    },
    {
      q: 'viewBox’ı neden koruyorsunuz?',
      a: 'Bazı optimize ediciler genişlik ve yükseklik varken viewBox’ı atar; bu da duyarlı ölçeklemeyi sessizce bozar. Bu araç viewBox korumasını zorunlu kılar.',
    },
    {
      q: 'Optimize ettikten sonra orijinal SVG’mi geri alabilir miyim?',
      a: 'Evet — orijinal dosyayı yeniden yapıştırın ya da bırakın. Optimize edilmiş sonucu kopyalamadığınız ya da indirmediğiniz sürece hiçbir şeyin üzerine yazılmaz.',
    },
  ],
  howToUse: 'Nasıl kullanılır',
  faqHeading: 'Sık sorulan sorular',
  moreTools: 'Diğer SVG araçları',
};

const pngTr: ToolContent = {
  title: 'SVG’den PNG’ye Dönüştürücü — Ücretsiz 1x/2x/4x Dışa Aktarım | VectorForge',
  description:
    'SVG’yi 1x, 2x ve 4x çözünürlükte PNG’ye çevrimiçi dönüştürün. Canlı önizleme ile ücretsiz, sınırsız, tarayıcı içi SVG’den PNG’ye dönüştürücü.',
  heading: 'SVG’den PNG’ye Dönüştürücü',
  intro:
    'Herhangi bir SVG’den 1x, 2x veya 4x ölçekte net PNG’ler dışa aktarın — favicon’lar, uygulama simgeleri ve sosyal görseller için mükemmel. SVG’nin açık boyutları yoksa viewBox otomatik olarak kullanılır ve şeffaflık korunur.',
  steps: [
    'SVG işaretlemenizi düzenleyiciye yapıştırın ya da bir .svg dosyasını sayfanın herhangi bir yerine bırakın.',
    'Dışa aktarmadan önce doğrulamak için SVG’yi herhangi bir arka planda önizleyin.',
    'PNG dışa aktarım düğmelerinden 1x, 2x veya 4x seçin ve raster görüntünüzü indirin.',
  ],
  faqs: [
    {
      q: 'Hangi çözünürlükleri dışa aktarabilirim?',
      a: 'SVG’nin doğal boyutunun (width/height özniteliklerinden veya viewBox’ından alınan) 1x, 2x ve 4x katları.',
    },
    {
      q: 'PNG’de şeffaflık korunuyor mu?',
      a: 'Evet — dışa aktarılan PNG, SVG’nin alfa kanalını korur.',
    },
    {
      q: 'PNG’m neden önizlemeden farklı görünüyor?',
      a: 'SVG içinde başvurulan harici yazı tipleri veya bağlantılı görüntüler tarayıcıda rasterleştirilemez. Piksel kusursuz sonuçlar için metni ana hatlara dönüştürün.',
    },
  ],
  howToUse: 'Nasıl kullanılır',
  faqHeading: 'Sık sorulan sorular',
  moreTools: 'Diğer SVG araçları',
};

/* ---------------- Italian ---------------- */

const jsxIt: ToolContent = {
  title: 'Convertitore da SVG a JSX — Strumento online gratuito | VectorForge',
  description:
    'Converti il markup SVG in JSX in pochi secondi. Convertitore online gratuito da SVG a JSX con ridenominazione automatica degli attributi, conversione degli stili in oggetti e anteprima dal vivo. Funziona al 100% nel tuo browser.',
  heading: 'Convertitore da SVG a JSX',
  intro:
    'Incolla qualsiasi SVG e ottieni JSX pulito, pronto per i tuoi componenti React. VectorForge rinomina gli attributi automaticamente (class diventa className, stroke-width diventa strokeWidth), converte gli stili inline in oggetti di stile e trasforma i commenti XML in commenti JSX — istantaneamente, con un’anteprima dal vivo. Non viene caricato nulla; tutto avviene nel tuo browser.',
  steps: [
    'Incolla il tuo markup SVG nell’editor, o rilascia un file .svg ovunque nella pagina.',
    'La scheda JSX è già selezionata — controlla l’output convertito che si aggiorna dal vivo mentre digiti.',
    'Copia il JSX con un clic, o scaricalo come file .jsx per il tuo progetto.',
  ],
  faqs: [
    {
      q: 'Questo strumento carica il mio SVG su un server?',
      a: 'No. Tutta la conversione viene eseguita localmente nel tuo browser usando JavaScript. I tuoi file non lasciano mai il tuo dispositivo.',
    },
    {
      q: 'Perché i nomi degli attributi cambiano in JSX?',
      a: 'JSX segue le convenzioni di denominazione di JavaScript, quindi gli attributi SVG con trattino come stroke-width devono diventare camelCase (strokeWidth) e class diventa className. Questo convertitore applica queste corrispondenze automaticamente.',
    },
    {
      q: 'Posso convertire più SVG in JSX contemporaneamente?',
      a: 'Sì. Rilascia più file sulla pagina, passa dall’uno all’altro nella barra batch e scarica tutto come ZIP con ogni file convertito in JSX.',
    },
  ],
  howToUse: 'Come si usa',
  faqHeading: 'Domande frequenti',
  moreTools: 'Altri strumenti SVG',
};

const reactIt: ToolContent = {
  title: 'Convertitore da SVG a componente React — Gratis online | VectorForge',
  description:
    'Trasforma qualsiasi SVG in un componente React tipizzato (.tsx) istantaneamente. Convertitore gratuito da SVG a componente React con supporto alle props, output pulito e anteprima dal vivo.',
  heading: 'Convertitore da SVG a componente React',
  intro:
    'Ottieni un componente React TypeScript pronto per la produzione da qualsiasi SVG. Il componente generato accetta props SVG standard, le distribuisce sull’elemento radice e rimuove la dichiarazione xmlns non necessaria che provoca avvisi di React — pronto da inserire direttamente nella tua base di codice.',
  steps: [
    'Incolla il tuo markup SVG nell’editor, o rilascia un file .svg ovunque nella pagina.',
    'La scheda React Component è già selezionata — il nome del componente deriva dal nome del tuo file.',
    'Copia il codice .tsx con un clic, o scaricalo e importalo come qualsiasi altro componente.',
  ],
  faqs: [
    {
      q: 'Come uso il componente generato?',
      a: 'Importalo come qualsiasi componente e passagli props SVG standard, ad esempio <SampleIcon width={24} height={24} fill="currentColor" />. Le props si distribuiscono sull’elemento radice.',
    },
    {
      q: 'Perché xmlns viene rimosso dall’output?',
      a: 'React gestisce da sé gli spazi dei nomi SVG; mantenere xmlns causa un avviso nella console, quindi il convertitore lo rimuove dall’elemento radice.',
    },
    {
      q: 'Funziona con React Native?',
      a: 'Questo output è destinato al React web. Per React Native, passa alla scheda React Native per ottenere invece un componente react-native-svg.',
    },
  ],
  howToUse: 'Come si usa',
  faqHeading: 'Domande frequenti',
  moreTools: 'Altri strumenti SVG',
};

const base64It: ToolContent = {
  title: 'Convertitore da SVG a Base64 — Codificatore online gratuito | VectorForge',
  description:
    'Codifica SVG come Base64 online. Convertitore gratuito da SVG a Base64 con codifica sicura per Unicode, anteprima dal vivo e copia con un clic.',
  heading: 'Convertitore da SVG a Base64',
  intro:
    'Codifica qualsiasi SVG in Base64 per i luoghi in cui il markup grezzo non sta — file CSS, configurazioni JSON o payload API. La codifica è sicura per Unicode (il devanagari, le emoji e il testo CJK sopravvivono all’andata e ritorno), e l’output si aggiorna dal vivo mentre modifichi la sorgente.',
  steps: [
    'Incolla il tuo markup SVG nell’editor, o rilascia un file .svg ovunque nella pagina.',
    'La scheda Base64 è già selezionata — la stringa codificata appare istantaneamente nel pannello di output.',
    'Copia la stringa Base64 con un clic, o scaricala come file .txt.',
  ],
  faqs: [
    {
      q: 'L’output Base64 è più grande dell’SVG originale?',
      a: 'Sì — Base64 aggiunge circa il 33% di sovraccarico. Se la dimensione conta, preferisci un data URI codificato in percentuale (la scheda CSS Data-URI) per il CSS, che di solito è più piccolo per SVG.',
    },
    {
      q: 'Perché il mio output Base64 termina con caratteri di riempimento (=)?',
      a: 'Il riempimento fa parte della specifica Base64 e i decodificatori se lo aspettano. Lascialo nell’output.',
    },
    {
      q: 'Base64 può gestire il testo Unicode dentro il mio SVG?',
      a: 'Sì. Questo strumento codifica prima come UTF-8, quindi il testo non latino e le emoji fanno l’andata e ritorno correttamente invece di corrompersi.',
    },
  ],
  howToUse: 'Come si usa',
  faqHeading: 'Domande frequenti',
  moreTools: 'Altri strumenti SVG',
};

const dataUriIt: ToolContent = {
  title: 'Generatore da SVG a Data URI / sfondo CSS — Gratis | VectorForge',
  description:
    'Converti SVG in un data URI pronto per il CSS e background-image. Generatore gratuito con minificazione, codifica ottimizzata e anteprima dal vivo.',
  heading: 'Convertitore da SVG a Data URI',
  intro:
    'Trasforma qualsiasi SVG in un data URI compatto che puoi incollare direttamente in background-image. VectorForge minifica prima l’SVG e lo codifica in percentuale, il che mantiene l’URI più piccolo del Base64 per le icone tipiche — e puoi vederlo renderizzato nell’anteprima dal vivo prima di copiarlo.',
  steps: [
    'Incolla il tuo markup SVG nell’editor, o rilascia un file .svg ovunque nella pagina.',
    'La scheda CSS Data-URI è già selezionata — lo snippet si aggiorna dal vivo mentre modifichi.',
    'Copia lo snippet CSS con un clic, o scaricalo come file .css.',
  ],
  faqs: [
    {
      q: 'Data URI o Base64 — quale è più piccolo?',
      a: 'Per SVG, un data URI codificato in percentuale è di solito più piccolo del Base64 (eviti il sovraccarico di codifica di ~33%), e questo strumento minifica prima l’SVG per ridurlo ulteriormente.',
    },
    {
      q: 'Perché l’SVG viene minificato prima della codifica?',
      a: 'Rimuovere commenti, spazi bianchi e metadati riduce l’URI senza cambiare il modo in cui l’immagine viene renderizzata.',
    },
    {
      q: 'Il data URI conserva l’attributo xmlns?',
      a: 'Sì. L’uso autonomo (tag img, sfondi CSS) richiede xmlns, quindi qui viene conservato — a differenza dell’output JSX o componente React.',
    },
  ],
  howToUse: 'Come si usa',
  faqHeading: 'Domande frequenti',
  moreTools: 'Altri strumenti SVG',
};

const optimizerIt: ToolContent = {
  title: 'Ottimizzatore SVG — Strumento SVGO online gratuito | VectorForge',
  description:
    'Ottimizza i file SVG online con SVGO. Ottimizzatore SVG gratuito che riduce la dimensione dei file preservando il viewBox e la qualità visiva.',
  heading: 'Ottimizzatore SVG',
  intro:
    'Riduci i file SVG senza cambiare il loro aspetto. VectorForge esegue l’ottimizzazione multipasso SVGO direttamente nel tuo browser — e preserva deliberatamente il viewBox, in modo che il ridimensionamento responsivo continui a funzionare dopo l’ottimizzazione. Vedi esattamente quanti byte e quale percentuale hai risparmiato.',
  steps: [
    'Incolla il tuo markup SVG nell’editor, o rilascia un file .svg ovunque nella pagina.',
    'Premi il pulsante Optimize nella barra degli strumenti — l’editor si aggiorna con il risultato minificato.',
    'Controlla l’avviso dei byte risparmiati, poi copia o scarica l’SVG ottimizzato.',
  ],
  faqs: [
    {
      q: 'L’ottimizzazione cambia l’aspetto del mio SVG?',
      a: 'No. SVGO rimuove solo la ridondanza — metadati, precisione eccessiva, spazi bianchi. Usa l’anteprima dal vivo per verificare che il risultato si renderizzi in modo identico.',
    },
    {
      q: 'Perché conservate il viewBox?',
      a: 'Alcuni ottimizzatori scartano il viewBox quando sono presenti larghezza e altezza, il che rompe silenziosamente il ridimensionamento responsivo. Questo strumento forza la conservazione del viewBox.',
    },
    {
      q: 'Posso riavere il mio SVG originale dopo l’ottimizzazione?',
      a: 'Sì — basta incollare o rilasciare di nuovo il file originale. Niente viene sovrascritto a meno che tu non copi o scarichi il risultato ottimizzato.',
    },
  ],
  howToUse: 'Come si usa',
  faqHeading: 'Domande frequenti',
  moreTools: 'Altri strumenti SVG',
};

const pngIt: ToolContent = {
  title: 'Convertitore da SVG a PNG — Esportazione gratuita 1x/2x/4x | VectorForge',
  description:
    'Converti SVG in PNG alle risoluzioni 1x, 2x e 4x online. Convertitore da SVG a PNG gratuito, illimitato e nel browser, con anteprima dal vivo.',
  heading: 'Convertitore da SVG a PNG',
  intro:
    'Esporta PNG nitidi da qualsiasi SVG a scala 1x, 2x o 4x — perfetti per favicon, icone di app e immagini social. Se l’SVG non ha dimensioni esplicite, il viewBox viene usato automaticamente, e la trasparenza è preservata.',
  steps: [
    'Incolla il tuo markup SVG nell’editor, o rilascia un file .svg ovunque nella pagina.',
    'Visualizza l’anteprima dell’SVG su qualsiasi sfondo per verificarlo prima dell’esportazione.',
    'Scegli 1x, 2x o 4x dai pulsanti di esportazione PNG e scarica la tua immagine raster.',
  ],
  faqs: [
    {
      q: 'Quali risoluzioni posso esportare?',
      a: '1x, 2x e 4x della dimensione naturale dell’SVG, ricavati dai suoi attributi width/height o dal suo viewBox.',
    },
    {
      q: 'La trasparenza è preservata nel PNG?',
      a: 'Sì — il PNG esportato conserva il canale alfa dell’SVG.',
    },
    {
      q: 'Perché il mio PNG appare diverso dall’anteprima?',
      a: 'I caratteri esterni o le immagini collegate referenziati dentro l’SVG non possono essere rasterizzati nel browser. Converti il testo in contorni per risultati perfetti al pixel.',
    },
  ],
  howToUse: 'Come si usa',
  faqHeading: 'Domande frequenti',
  moreTools: 'Altri strumenti SVG',
};

/* ---------------- Dutch ---------------- */

const jsxNl: ToolContent = {
  title: 'SVG naar JSX converter — Gratis online tool | VectorForge',
  description:
    'Zet SVG-markup in seconden om naar JSX. Gratis online SVG naar JSX converter met automatische attribuuthernoeming, stijl-naar-object-conversie en live voorbeeld. Draait 100% in je browser.',
  heading: 'SVG naar JSX converter',
  intro:
    'Plak een willekeurige SVG en krijg schone JSX, klaar voor je React-componenten. VectorForge hernoemt attributen automatisch (class wordt className, stroke-width wordt strokeWidth), zet inline stijlen om in stijlobjecten en verandert XML-opmerkingen in JSX-opmerkingen — direct, met een live voorbeeld. Er wordt niets geüpload; alles gebeurt in je browser.',
  steps: [
    'Plak je SVG-markup in de editor, of zet een .svg-bestand ergens op de pagina neer.',
    'Het JSX-tabblad is al geselecteerd — bekijk de geconverteerde uitvoer die live bijwerkt terwijl je typt.',
    'Kopieer de JSX met één klik, of download hem als .jsx-bestand voor je project.',
  ],
  faqs: [
    {
      q: 'Uploadt deze tool mijn SVG naar een server?',
      a: 'Nee. Alle conversie draait lokaal in je browser met JavaScript. Je bestanden verlaten je apparaat nooit.',
    },
    {
      q: 'Waarom veranderen attribuutnamen in JSX?',
      a: 'JSX volgt de JavaScript-naamgevingsconventies, dus SVG-attributen met streepjes zoals stroke-width moeten camelCase worden (strokeWidth) en class wordt className. Deze converter past die koppelingen automatisch toe.',
    },
    {
      q: 'Kan ik meerdere SVG’s tegelijk naar JSX omzetten?',
      a: 'Ja. Zet meerdere bestanden op de pagina, wissel ertussen in de batchbalk en download alles als ZIP, elk bestand omgezet naar JSX.',
    },
  ],
  howToUse: 'Hoe te gebruiken',
  faqHeading: 'Veelgestelde vragen',
  moreTools: 'Meer SVG-tools',
};

const reactNl: ToolContent = {
  title: 'SVG naar React-component converter — Gratis online | VectorForge',
  description:
    'Verander elke SVG direct in een getypeerde React (.tsx) component. Gratis SVG naar React-component converter met props-ondersteuning, schone uitvoer en live voorbeeld.',
  heading: 'SVG naar React-component converter',
  intro:
    'Krijg een productierijpe TypeScript React-component uit elke SVG. De gegenereerde component accepteert standaard SVG-props, spreidt ze over het wortelelement en verwijdert de onnodige xmlns-declaratie die React-waarschuwingen veroorzaakt — klaar om direct in je codebase te plaatsen.',
  steps: [
    'Plak je SVG-markup in de editor, of zet een .svg-bestand ergens op de pagina neer.',
    'Het tabblad React Component is al geselecteerd — de componentnaam wordt afgeleid van je bestandsnaam.',
    'Kopieer de .tsx-code met één klik, of download hem en importeer hem als elke andere component.',
  ],
  faqs: [
    {
      q: 'Hoe gebruik ik de gegenereerde component?',
      a: 'Importeer hem als elke component en geef standaard SVG-props mee, bijvoorbeeld <SampleIcon width={24} height={24} fill="currentColor" />. Props worden over het wortelelement gespreid.',
    },
    {
      q: 'Waarom wordt xmlns uit de uitvoer verwijderd?',
      a: 'React handelt SVG-naamruimten zelf af; xmlns behouden veroorzaakt een consolewaarschuwing, dus de converter verwijdert het uit het wortelelement.',
    },
    {
      q: 'Werkt dit met React Native?',
      a: 'Deze uitvoer richt zich op web-React. Schakel voor React Native over naar het tabblad React Native om in plaats daarvan een react-native-svg component te krijgen.',
    },
  ],
  howToUse: 'Hoe te gebruiken',
  faqHeading: 'Veelgestelde vragen',
  moreTools: 'Meer SVG-tools',
};

const base64Nl: ToolContent = {
  title: 'SVG naar Base64 converter — Gratis online encoder | VectorForge',
  description:
    'Codeer SVG online als Base64. Gratis SVG naar Base64 converter met Unicode-veilige codering, live voorbeeld en kopiëren met één klik.',
  heading: 'SVG naar Base64 converter',
  intro:
    'Codeer elke SVG als Base64 voor plaatsen waar ruwe markup niet past — CSS-bestanden, JSON-configuraties of API-payloads. De codering is Unicode-veilig (Devanagari, emoji en CJK-tekst overleven de heen-en-terugreis), en de uitvoer werkt live bij terwijl je de bron bewerkt.',
  steps: [
    'Plak je SVG-markup in de editor, of zet een .svg-bestand ergens op de pagina neer.',
    'Het Base64-tabblad is al geselecteerd — de gecodeerde tekenreeks verschijnt direct in het uitvoerpaneel.',
    'Kopieer de Base64-tekenreeks met één klik, of download hem als .txt-bestand.',
  ],
  faqs: [
    {
      q: 'Is Base64-uitvoer groter dan de originele SVG?',
      a: 'Ja — Base64 voegt ongeveer 33% overhead toe. Als de grootte telt, verkies dan een procentgecodeerde data-URI (het tabblad CSS Data-URI) voor CSS, die voor SVG meestal kleiner is.',
    },
    {
      q: 'Waarom eindigt mijn Base64-uitvoer met opvultekens (=)?',
      a: 'Opvulling maakt deel uit van de Base64-specificatie en decoders verwachten het. Laat het in de uitvoer staan.',
    },
    {
      q: 'Kan Base64 Unicode-tekst in mijn SVG aan?',
      a: 'Ja. Deze tool codeert eerst als UTF-8, zodat niet-Latijnse tekst en emoji correct heen en terug reizen in plaats van beschadigd te raken.',
    },
  ],
  howToUse: 'Hoe te gebruiken',
  faqHeading: 'Veelgestelde vragen',
  moreTools: 'Meer SVG-tools',
};

const dataUriNl: ToolContent = {
  title: 'SVG naar Data URI / CSS-achtergrondgenerator — Gratis | VectorForge',
  description:
    'Zet SVG om in een CSS-klare data-URI voor background-image. Gratis generator met minificatie, geoptimaliseerde codering en live voorbeeld.',
  heading: 'SVG naar Data URI converter',
  intro:
    'Verander elke SVG in een compacte data-URI die je rechtstreeks in background-image kunt plakken. VectorForge minificeert de SVG eerst en codeert hem procentueel, wat de URI voor typische pictogrammen kleiner houdt dan Base64 — en je kunt hem in het live voorbeeld gerenderd zien voordat je kopieert.',
  steps: [
    'Plak je SVG-markup in de editor, of zet een .svg-bestand ergens op de pagina neer.',
    'Het tabblad CSS Data-URI is al geselecteerd — het fragment werkt live bij terwijl je bewerkt.',
    'Kopieer het CSS-fragment met één klik, of download het als .css-bestand.',
  ],
  faqs: [
    {
      q: 'Data-URI of Base64 — welke is kleiner?',
      a: 'Voor SVG is een procentgecodeerde data-URI meestal kleiner dan Base64 (je vermijdt de codeeroverhead van ~33%), en deze tool minificeert de SVG eerst om hem verder te verkleinen.',
    },
    {
      q: 'Waarom wordt de SVG vóór het coderen geminificeerd?',
      a: 'Opmerkingen, witruimte en metadata verwijderen verkleint de URI zonder te veranderen hoe de afbeelding wordt gerenderd.',
    },
    {
      q: 'Behoudt de data-URI het xmlns-attribuut?',
      a: 'Ja. Zelfstandig gebruik (img-tags, CSS-achtergronden) vereist xmlns, dus het wordt hier bewaard — anders dan bij JSX- of React-componentuitvoer.',
    },
  ],
  howToUse: 'Hoe te gebruiken',
  faqHeading: 'Veelgestelde vragen',
  moreTools: 'Meer SVG-tools',
};

const optimizerNl: ToolContent = {
  title: 'SVG optimizer — Gratis online SVGO-tool | VectorForge',
  description:
    'Optimaliseer SVG-bestanden online met SVGO. Gratis SVG optimizer die de bestandsgrootte verkleint terwijl de viewBox en visuele kwaliteit bewaard blijven.',
  heading: 'SVG optimizer',
  intro:
    'Verklein SVG-bestanden zonder te veranderen hoe ze eruitzien. VectorForge draait SVGO-multipass-optimalisatie rechtstreeks in je browser — en bewaart bewust de viewBox, zodat responsief schalen na optimalisatie blijft werken. Je ziet precies hoeveel bytes en welk percentage je bespaard hebt.',
  steps: [
    'Plak je SVG-markup in de editor, of zet een .svg-bestand ergens op de pagina neer.',
    'Druk op de knop Optimize in de werkbalk — de editor werkt bij met het geminificeerde resultaat.',
    'Controleer de melding over bespaarde bytes en kopieer of download dan de geoptimaliseerde SVG.',
  ],
  faqs: [
    {
      q: 'Verandert optimalisatie hoe mijn SVG eruitziet?',
      a: 'Nee. SVGO verwijdert alleen redundantie — metadata, overmatige precisie, witruimte. Gebruik het live voorbeeld om te verifiëren dat het resultaat identiek wordt gerenderd.',
    },
    {
      q: 'Waarom bewaren jullie de viewBox?',
      a: 'Sommige optimizers gooien de viewBox weg wanneer breedte en hoogte aanwezig zijn, wat responsief schalen stilletjes breekt. Deze tool dwingt het behoud van de viewBox af.',
    },
    {
      q: 'Kan ik mijn originele SVG terugkrijgen na optimaliseren?',
      a: 'Ja — plak of zet het originele bestand gewoon opnieuw neer. Er wordt niets overschreven, tenzij je het geoptimaliseerde resultaat kopieert of downloadt.',
    },
  ],
  howToUse: 'Hoe te gebruiken',
  faqHeading: 'Veelgestelde vragen',
  moreTools: 'Meer SVG-tools',
};

const pngNl: ToolContent = {
  title: 'SVG naar PNG converter — Gratis 1x/2x/4x export | VectorForge',
  description:
    'Zet SVG online om naar PNG in 1x-, 2x- en 4x-resolutie. Gratis, onbeperkte, in-de-browser SVG naar PNG converter met live voorbeeld.',
  heading: 'SVG naar PNG converter',
  intro:
    'Exporteer scherpe PNG’s uit elke SVG op schaal 1x, 2x of 4x — perfect voor favicons, app-pictogrammen en sociale afbeeldingen. Als de SVG geen expliciete afmetingen heeft, wordt de viewBox automatisch gebruikt, en transparantie blijft bewaard.',
  steps: [
    'Plak je SVG-markup in de editor, of zet een .svg-bestand ergens op de pagina neer.',
    'Bekijk de SVG op een willekeurige achtergrond om hem vóór het exporteren te verifiëren.',
    'Kies 1x, 2x of 4x bij de PNG-exportknoppen en download je rasterafbeelding.',
  ],
  faqs: [
    {
      q: 'Welke resoluties kan ik exporteren?',
      a: '1x, 2x en 4x van de natuurlijke grootte van de SVG, genomen uit de width/height-attributen of de viewBox.',
    },
    {
      q: 'Blijft transparantie in de PNG bewaard?',
      a: 'Ja — de geëxporteerde PNG behoudt het alfakanaal van de SVG.',
    },
    {
      q: 'Waarom ziet mijn PNG er anders uit dan het voorbeeld?',
      a: 'Externe lettertypen of gekoppelde afbeeldingen waarnaar in de SVG wordt verwezen, kunnen in de browser niet worden gerasterd. Zet tekst om in contouren voor pixelperfecte resultaten.',
    },
  ],
  howToUse: 'Hoe te gebruiken',
  faqHeading: 'Veelgestelde vragen',
  moreTools: 'Meer SVG-tools',
};

/* ---------------- Polish ---------------- */

const jsxPl: ToolContent = {
  title: 'Konwerter SVG na JSX — darmowe narzędzie online | VectorForge',
  description:
    'Zamieniaj znaczniki SVG na JSX w kilka sekund. Darmowy konwerter online SVG na JSX z automatyczną zmianą nazw atrybutów, konwersją stylów na obiekty i podglądem na żywo. Działa w 100% w Twojej przeglądarce.',
  heading: 'Konwerter SVG na JSX',
  intro:
    'Wklej dowolny SVG i otrzymaj czysty JSX, gotowy do Twoich komponentów React. VectorForge automatycznie zmienia nazwy atrybutów (class staje się className, stroke-width staje się strokeWidth), konwertuje style wbudowane na obiekty stylów i zamienia komentarze XML na komentarze JSX — natychmiast, z podglądem na żywo. Nic nie jest przesyłane; wszystko dzieje się w Twojej przeglądarce.',
  steps: [
    'Wklej swoje znaczniki SVG do edytora albo upuść plik .svg w dowolnym miejscu strony.',
    'Karta JSX jest już wybrana — przejrzyj skonwertowane wyjście aktualizujące się na żywo podczas pisania.',
    'Skopiuj JSX jednym kliknięciem albo pobierz je jako plik .jsx do swojego projektu.',
  ],
  faqs: [
    {
      q: 'Czy to narzędzie przesyła mój SVG na serwer?',
      a: 'Nie. Cała konwersja działa lokalnie w Twojej przeglądarce przy użyciu JavaScript. Twoje pliki nigdy nie opuszczają Twojego urządzenia.',
    },
    {
      q: 'Dlaczego nazwy atrybutów zmieniają się w JSX?',
      a: 'JSX stosuje konwencje nazewnictwa JavaScript, więc atrybuty SVG z myślnikiem, takie jak stroke-width, muszą stać się camelCase (strokeWidth), a class staje się className. Ten konwerter stosuje te mapowania automatycznie.',
    },
    {
      q: 'Czy mogę konwertować wiele SVG na JSX naraz?',
      a: 'Tak. Upuść kilka plików na stronę, przełączaj się między nimi na pasku wsadowym i pobierz wszystko jako ZIP, z każdym plikiem skonwertowanym na JSX.',
    },
  ],
  howToUse: 'Jak używać',
  faqHeading: 'Najczęstsze pytania',
  moreTools: 'Więcej narzędzi SVG',
};

const reactPl: ToolContent = {
  title: 'Konwerter SVG na komponent React — darmowy online | VectorForge',
  description:
    'Zamień dowolny SVG w typowany komponent React (.tsx) natychmiast. Darmowy konwerter SVG na komponent React z obsługą propsów, czystym wyjściem i podglądem na żywo.',
  heading: 'Konwerter SVG na komponent React',
  intro:
    'Uzyskaj gotowy do produkcji komponent React w TypeScript z dowolnego SVG. Wygenerowany komponent przyjmuje standardowe propsy SVG, rozprzestrzenia je na element główny i usuwa niepotrzebną deklarację xmlns, która powoduje ostrzeżenia React — gotowy do wstawienia prosto do Twojej bazy kodu.',
  steps: [
    'Wklej swoje znaczniki SVG do edytora albo upuść plik .svg w dowolnym miejscu strony.',
    'Karta React Component jest już wybrana — nazwa komponentu pochodzi od nazwy Twojego pliku.',
    'Skopiuj kod .tsx jednym kliknięciem albo pobierz go i zaimportuj jak każdy inny komponent.',
  ],
  faqs: [
    {
      q: 'Jak używać wygenerowanego komponentu?',
      a: 'Zaimportuj go jak każdy komponent i przekaż standardowe propsy SVG, na przykład <SampleIcon width={24} height={24} fill="currentColor" />. Propsy rozprzestrzeniają się na element główny.',
    },
    {
      q: 'Dlaczego xmlns jest usuwane z wyjścia?',
      a: 'React sam obsługuje przestrzenie nazw SVG; zachowanie xmlns powoduje ostrzeżenie w konsoli, więc konwerter usuwa je z elementu głównego.',
    },
    {
      q: 'Czy to działa z React Native?',
      a: 'To wyjście jest przeznaczone dla webowego React. Dla React Native przełącz na kartę React Native, aby zamiast tego otrzymać komponent react-native-svg.',
    },
  ],
  howToUse: 'Jak używać',
  faqHeading: 'Najczęstsze pytania',
  moreTools: 'Więcej narzędzi SVG',
};

const base64Pl: ToolContent = {
  title: 'Konwerter SVG na Base64 — darmowy koder online | VectorForge',
  description:
    'Koduj SVG jako Base64 online. Darmowy konwerter SVG na Base64 z kodowaniem bezpiecznym dla Unicode, podglądem na żywo i kopiowaniem jednym kliknięciem.',
  heading: 'Konwerter SVG na Base64',
  intro:
    'Koduj dowolny SVG do Base64 dla miejsc, w których surowe znaczniki się nie zmieszczą — plików CSS, konfiguracji JSON lub ładunków API. Kodowanie jest bezpieczne dla Unicode (tekst w dewanagari, emoji i tekst CJK przetrwają podróż w obie strony), a wyjście aktualizuje się na żywo podczas edycji źródła.',
  steps: [
    'Wklej swoje znaczniki SVG do edytora albo upuść plik .svg w dowolnym miejscu strony.',
    'Karta Base64 jest już wybrana — zakodowany ciąg pojawia się natychmiast w panelu wyjściowym.',
    'Skopiuj ciąg Base64 jednym kliknięciem albo pobierz go jako plik .txt.',
  ],
  faqs: [
    {
      q: 'Czy wyjście Base64 jest większe od oryginalnego SVG?',
      a: 'Tak — Base64 dodaje około 33% narzutu. Jeśli rozmiar ma znaczenie, dla CSS wol data URI kodowany procentowo (karta CSS Data-URI), który dla SVG jest zwykle mniejszy.',
    },
    {
      q: 'Dlaczego moje wyjście Base64 kończy się znakami wypełnienia (=)?',
      a: 'Wypełnienie jest częścią specyfikacji Base64 i dekodery go oczekują. Pozostaw je w wyjściu.',
    },
    {
      q: 'Czy Base64 poradzi sobie z tekstem Unicode wewnątrz mojego SVG?',
      a: 'Tak. To narzędzie najpierw koduje jako UTF-8, więc tekst spoza alfabetu łacińskiego i emoji podróżują w obie strony poprawnie, zamiast się uszkodzić.',
    },
  ],
  howToUse: 'Jak używać',
  faqHeading: 'Najczęstsze pytania',
  moreTools: 'Więcej narzędzi SVG',
};

const dataUriPl: ToolContent = {
  title: 'Generator SVG na Data URI / tło CSS — darmowy | VectorForge',
  description:
    'Konwertuj SVG na gotowy dla CSS data URI dla background-image. Darmowy generator z minifikacją, zoptymalizowanym kodowaniem i podglądem na żywo.',
  heading: 'Konwerter SVG na Data URI',
  intro:
    'Zamień dowolny SVG w zwarty data URI, który możesz wkleić prosto do background-image. VectorForge najpierw minifikuje SVG i koduje go procentowo, co dla typowych ikon utrzymuje URI mniejsze niż Base64 — i możesz zobaczyć, jak renderuje się w podglądzie na żywo, zanim skopiujesz.',
  steps: [
    'Wklej swoje znaczniki SVG do edytora albo upuść plik .svg w dowolnym miejscu strony.',
    'Karta CSS Data-URI jest już wybrana — fragment aktualizuje się na żywo podczas edycji.',
    'Skopiuj fragment CSS jednym kliknięciem albo pobierz go jako plik .css.',
  ],
  faqs: [
    {
      q: 'Data URI czy Base64 — co jest mniejsze?',
      a: 'Dla SVG data URI kodowany procentowo jest zwykle mniejszy niż Base64 (unikasz około 33% narzutu kodowania), a to narzędzie najpierw minifikuje SVG, aby zmniejszyć go jeszcze bardziej.',
    },
    {
      q: 'Dlaczego SVG jest minifikowany przed kodowaniem?',
      a: 'Usunięcie komentarzy, białych znaków i metadanych zmniejsza URI bez zmiany sposobu renderowania obrazu.',
    },
    {
      q: 'Czy data URI zachowuje atrybut xmlns?',
      a: 'Tak. Samodzielne użycie (tagi img, tła CSS) wymaga xmlns, więc jest tutaj zachowany — w przeciwieństwie do wyjścia JSX lub komponentu React.',
    },
  ],
  howToUse: 'Jak używać',
  faqHeading: 'Najczęstsze pytania',
  moreTools: 'Więcej narzędzi SVG',
};

const optimizerPl: ToolContent = {
  title: 'Optymalizator SVG — darmowe narzędzie SVGO online | VectorForge',
  description:
    'Optymalizuj pliki SVG online za pomocą SVGO. Darmowy optymalizator SVG, który zmniejsza rozmiar pliku, zachowując viewBox i jakość wizualną.',
  heading: 'Optymalizator SVG',
  intro:
    'Zmniejszaj pliki SVG bez zmiany ich wyglądu. VectorForge uruchamia wieloprzebiegową optymalizację SVGO bezpośrednio w Twojej przeglądarce — i celowo zachowuje viewBox, aby skalowanie responsywne działało po optymalizacji. Widzisz dokładnie, ile bajtów i jaki procent zaoszczędziłeś.',
  steps: [
    'Wklej swoje znaczniki SVG do edytora albo upuść plik .svg w dowolnym miejscu strony.',
    'Naciśnij przycisk Optimize na pasku narzędzi — edytor zaktualizuje się zminifikowanym wynikiem.',
    'Sprawdź powiadomienie o zaoszczędzonych bajtach, a następnie skopiuj lub pobierz zoptymalizowany SVG.',
  ],
  faqs: [
    {
      q: 'Czy optymalizacja zmienia wygląd mojego SVG?',
      a: 'Nie. SVGO usuwa tylko nadmiarowość — metadane, nadmierną precyzję, białe znaki. Użyj podglądu na żywo, aby zweryfikować, że wynik renderuje się identycznie.',
    },
    {
      q: 'Dlaczego zachowujecie viewBox?',
      a: 'Niektóre optymalizatory odrzucają viewBox, gdy obecne są szerokość i wysokość, co po cichu psuje skalowanie responsywne. To narzędzie wymusza zachowanie viewBox.',
    },
    {
      q: 'Czy mogę odzyskać mój oryginalny SVG po optymalizacji?',
      a: 'Tak — po prostu wklej lub upuść oryginalny plik ponownie. Nic nie zostaje nadpisane, dopóki nie skopiujesz lub nie pobierzesz zoptymalizowanego wyniku.',
    },
  ],
  howToUse: 'Jak używać',
  faqHeading: 'Najczęstsze pytania',
  moreTools: 'Więcej narzędzi SVG',
};

const pngPl: ToolContent = {
  title: 'Konwerter SVG na PNG — darmowy eksport 1x/2x/4x | VectorForge',
  description:
    'Konwertuj SVG na PNG w rozdzielczości 1x, 2x i 4x online. Darmowy, nieograniczony konwerter SVG na PNG w przeglądarce z podglądem na żywo.',
  heading: 'Konwerter SVG na PNG',
  intro:
    'Eksportuj ostre PNG z dowolnego SVG w skali 1x, 2x lub 4x — idealne dla faviconów, ikon aplikacji i obrazów społecznościowych. Jeśli SVG nie ma jawnych wymiarów, viewBox jest używany automatycznie, a przezroczystość zostaje zachowana.',
  steps: [
    'Wklej swoje znaczniki SVG do edytora albo upuść plik .svg w dowolnym miejscu strony.',
    'Podglądnij SVG na dowolnym tle, aby zweryfikować go przed eksportem.',
    'Wybierz 1x, 2x lub 4x spośród przycisków eksportu PNG i pobierz swój obraz rastrowy.',
  ],
  faqs: [
    {
      q: 'Jakie rozdzielczości mogę eksportować?',
      a: '1x, 2x i 4x naturalnego rozmiaru SVG, wziętego z jego atrybutów width/height lub jego viewBox.',
    },
    {
      q: 'Czy przezroczystość jest zachowana w PNG?',
      a: 'Tak — wyeksportowany PNG zachowuje kanał alfa SVG.',
    },
    {
      q: 'Dlaczego mój PNG wygląda inaczej niż podgląd?',
      a: 'Zewnętrzne czcionki lub połączone obrazy, do których odwołuje się SVG, nie mogą zostać zrasteryzowane w przeglądarce. Zamień tekst na kontury, aby uzyskać wyniki idealne co do piksela.',
    },
  ],
  howToUse: 'Jak używać',
  faqHeading: 'Najczęstsze pytania',
  moreTools: 'Więcej narzędzi SVG',
};

/* ---------------- Vietnamese ---------------- */

const jsxVi: ToolContent = {
  title: 'Bộ chuyển đổi SVG sang JSX — Công cụ trực tuyến miễn phí | VectorForge',
  description:
    'Chuyển mã đánh dấu SVG thành JSX trong vài giây. Bộ chuyển đổi SVG sang JSX trực tuyến miễn phí với đổi tên thuộc tính tự động, chuyển đổi kiểu thành đối tượng và xem trước trực tiếp. Chạy 100% trong trình duyệt của bạn.',
  heading: 'Bộ chuyển đổi SVG sang JSX',
  intro:
    'Dán bất kỳ SVG nào và nhận JSX sạch, sẵn sàng cho các component React của bạn. VectorForge tự động đổi tên các thuộc tính (class thành className, stroke-width thành strokeWidth), chuyển các kiểu nội tuyến thành đối tượng kiểu và biến các chú thích XML thành chú thích JSX — ngay lập tức, với xem trước trực tiếp. Không có gì được tải lên; mọi thứ diễn ra trong trình duyệt của bạn.',
  steps: [
    'Dán mã đánh dấu SVG của bạn vào trình soạn thảo, hoặc thả một tệp .svg vào bất cứ đâu trên trang.',
    'Tab JSX đã được chọn sẵn — xem lại đầu ra đã chuyển đổi cập nhật trực tiếp khi bạn gõ.',
    'Sao chép JSX bằng một cú nhấp, hoặc tải xuống dưới dạng tệp .jsx cho dự án của bạn.',
  ],
  faqs: [
    {
      q: 'Công cụ này có tải SVG của tôi lên máy chủ không?',
      a: 'Không. Mọi chuyển đổi đều chạy cục bộ trong trình duyệt của bạn bằng JavaScript. Tệp của bạn không bao giờ rời khỏi thiết bị của bạn.',
    },
    {
      q: 'Tại sao tên thuộc tính thay đổi trong JSX?',
      a: 'JSX tuân theo quy ước đặt tên của JavaScript, vì vậy các thuộc tính SVG có dấu gạch nối như stroke-width phải trở thành camelCase (strokeWidth) và class trở thành className. Bộ chuyển đổi này áp dụng các ánh xạ đó tự động.',
    },
    {
      q: 'Tôi có thể chuyển đổi nhiều SVG sang JSX cùng lúc không?',
      a: 'Có. Thả nhiều tệp lên trang, chuyển đổi giữa chúng trong thanh hàng loạt, và tải xuống tất cả dưới dạng ZIP với mỗi tệp đã chuyển thành JSX.',
    },
  ],
  howToUse: 'Cách sử dụng',
  faqHeading: 'Câu hỏi thường gặp',
  moreTools: 'Thêm công cụ SVG',
};

const reactVi: ToolContent = {
  title: 'Bộ chuyển đổi SVG sang component React — Miễn phí trực tuyến | VectorForge',
  description:
    'Biến bất kỳ SVG nào thành một component React có kiểu (.tsx) ngay lập tức. Bộ chuyển đổi SVG sang component React miễn phí với hỗ trợ props, đầu ra sạch và xem trước trực tiếp.',
  heading: 'Bộ chuyển đổi SVG sang component React',
  intro:
    'Nhận một component React TypeScript sẵn sàng cho sản xuất từ bất kỳ SVG nào. Component được tạo chấp nhận các props SVG tiêu chuẩn, trải chúng lên phần tử gốc và loại bỏ khai báo xmlns không cần thiết gây ra cảnh báo React — sẵn sàng thả thẳng vào cơ sở mã của bạn.',
  steps: [
    'Dán mã đánh dấu SVG của bạn vào trình soạn thảo, hoặc thả một tệp .svg vào bất cứ đâu trên trang.',
    'Tab React Component đã được chọn sẵn — tên component được suy ra từ tên tệp của bạn.',
    'Sao chép mã .tsx bằng một cú nhấp, hoặc tải xuống và nhập nó như bất kỳ component nào khác.',
  ],
  faqs: [
    {
      q: 'Tôi sử dụng component đã tạo như thế nào?',
      a: 'Nhập nó như bất kỳ component nào và truyền các props SVG tiêu chuẩn, ví dụ <SampleIcon width={24} height={24} fill="currentColor" />. Các props trải lên phần tử gốc.',
    },
    {
      q: 'Tại sao xmlns bị loại khỏi đầu ra?',
      a: 'React tự xử lý các không gian tên SVG; việc giữ xmlns gây ra cảnh báo trong bảng điều khiển, vì vậy bộ chuyển đổi loại bỏ nó khỏi phần tử gốc.',
    },
    {
      q: 'Điều này có hoạt động với React Native không?',
      a: 'Đầu ra này hướng tới React web. Đối với React Native, hãy chuyển sang tab React Native để thay vào đó nhận một component react-native-svg.',
    },
  ],
  howToUse: 'Cách sử dụng',
  faqHeading: 'Câu hỏi thường gặp',
  moreTools: 'Thêm công cụ SVG',
};

const base64Vi: ToolContent = {
  title: 'Bộ chuyển đổi SVG sang Base64 — Bộ mã hóa trực tuyến miễn phí | VectorForge',
  description:
    'Mã hóa SVG thành Base64 trực tuyến. Bộ chuyển đổi SVG sang Base64 miễn phí với mã hóa an toàn cho Unicode, xem trước trực tiếp và sao chép bằng một cú nhấp.',
  heading: 'Bộ chuyển đổi SVG sang Base64',
  intro:
    'Mã hóa bất kỳ SVG nào thành Base64 cho những nơi mã đánh dấu thô không vừa — tệp CSS, cấu hình JSON hoặc tải trọng API. Việc mã hóa an toàn cho Unicode (văn bản Devanagari, biểu tượng cảm xúc và văn bản CJK sống sót qua chuyến đi khứ hồi), và đầu ra cập nhật trực tiếp khi bạn chỉnh sửa nguồn.',
  steps: [
    'Dán mã đánh dấu SVG của bạn vào trình soạn thảo, hoặc thả một tệp .svg vào bất cứ đâu trên trang.',
    'Tab Base64 đã được chọn sẵn — chuỗi đã mã hóa xuất hiện ngay lập tức trong bảng đầu ra.',
    'Sao chép chuỗi Base64 bằng một cú nhấp, hoặc tải xuống dưới dạng tệp .txt.',
  ],
  faqs: [
    {
      q: 'Đầu ra Base64 có lớn hơn SVG gốc không?',
      a: 'Có — Base64 cộng thêm khoảng 33% chi phí. Nếu kích thước quan trọng, hãy ưu tiên một data URI được mã hóa phần trăm (tab CSS Data-URI) cho CSS, thường nhỏ hơn cho SVG.',
    },
    {
      q: 'Tại sao đầu ra Base64 của tôi kết thúc bằng các ký tự đệm (=)?',
      a: 'Đệm là một phần của đặc tả Base64 và các bộ giải mã mong đợi nó. Hãy giữ nó trong đầu ra.',
    },
    {
      q: 'Base64 có thể xử lý văn bản Unicode bên trong SVG của tôi không?',
      a: 'Có. Công cụ này mã hóa dưới dạng UTF-8 trước, vì vậy văn bản không phải Latinh và biểu tượng cảm xúc đi khứ hồi chính xác thay vì bị hỏng.',
    },
  ],
  howToUse: 'Cách sử dụng',
  faqHeading: 'Câu hỏi thường gặp',
  moreTools: 'Thêm công cụ SVG',
};

const dataUriVi: ToolContent = {
  title: 'Bộ tạo SVG sang Data URI / nền CSS — Miễn phí | VectorForge',
  description:
    'Chuyển SVG thành một data URI sẵn sàng cho CSS dành cho background-image. Bộ tạo miễn phí với thu nhỏ, mã hóa tối ưu và xem trước trực tiếp.',
  heading: 'Bộ chuyển đổi SVG sang Data URI',
  intro:
    'Biến bất kỳ SVG nào thành một data URI nhỏ gọn mà bạn có thể dán thẳng vào background-image. VectorForge thu nhỏ SVG trước rồi mã hóa phần trăm, điều này giữ URI nhỏ hơn Base64 đối với các biểu tượng điển hình — và bạn có thể thấy nó hiển thị trong xem trước trực tiếp trước khi sao chép.',
  steps: [
    'Dán mã đánh dấu SVG của bạn vào trình soạn thảo, hoặc thả một tệp .svg vào bất cứ đâu trên trang.',
    'Tab CSS Data-URI đã được chọn sẵn — đoạn mã cập nhật trực tiếp khi bạn chỉnh sửa.',
    'Sao chép đoạn CSS bằng một cú nhấp, hoặc tải xuống dưới dạng tệp .css.',
  ],
  faqs: [
    {
      q: 'Data URI hay Base64 — cái nào nhỏ hơn?',
      a: 'Đối với SVG, một data URI được mã hóa phần trăm thường nhỏ hơn Base64 (bạn tránh được chi phí mã hóa ~33%), và công cụ này thu nhỏ SVG trước để làm nó nhỏ hơn nữa.',
    },
    {
      q: 'Tại sao SVG được thu nhỏ trước khi mã hóa?',
      a: 'Việc loại bỏ chú thích, khoảng trắng và siêu dữ liệu làm nhỏ URI mà không thay đổi cách hình ảnh hiển thị.',
    },
    {
      q: 'Data URI có giữ thuộc tính xmlns không?',
      a: 'Có. Việc sử dụng độc lập (thẻ img, nền CSS) yêu cầu xmlns, vì vậy nó được bảo toàn ở đây — không giống như đầu ra JSX hoặc component React.',
    },
  ],
  howToUse: 'Cách sử dụng',
  faqHeading: 'Câu hỏi thường gặp',
  moreTools: 'Thêm công cụ SVG',
};

const optimizerVi: ToolContent = {
  title: 'Bộ tối ưu SVG — Công cụ SVGO trực tuyến miễn phí | VectorForge',
  description:
    'Tối ưu các tệp SVG trực tuyến bằng SVGO. Bộ tối ưu SVG miễn phí làm nhỏ kích thước tệp trong khi vẫn giữ viewBox và chất lượng hình ảnh.',
  heading: 'Bộ tối ưu SVG',
  intro:
    'Làm nhỏ các tệp SVG mà không thay đổi vẻ ngoài của chúng. VectorForge chạy tối ưu đa lượt của SVGO ngay trong trình duyệt của bạn — và cố ý bảo toàn viewBox, để việc co giãn đáp ứng tiếp tục hoạt động sau khi tối ưu. Bạn thấy chính xác mình đã tiết kiệm được bao nhiêu byte và bao nhiêu phần trăm.',
  steps: [
    'Dán mã đánh dấu SVG của bạn vào trình soạn thảo, hoặc thả một tệp .svg vào bất cứ đâu trên trang.',
    'Nhấn nút Optimize trên thanh công cụ — trình soạn thảo cập nhật với kết quả đã thu nhỏ.',
    'Kiểm tra thông báo số byte đã tiết kiệm, rồi sao chép hoặc tải xuống SVG đã tối ưu.',
  ],
  faqs: [
    {
      q: 'Việc tối ưu có thay đổi vẻ ngoài của SVG của tôi không?',
      a: 'Không. SVGO chỉ loại bỏ sự dư thừa — siêu dữ liệu, độ chính xác thừa, khoảng trắng. Hãy dùng xem trước trực tiếp để xác minh kết quả hiển thị giống hệt.',
    },
    {
      q: 'Tại sao các bạn giữ viewBox?',
      a: 'Một số bộ tối ưu loại bỏ viewBox khi có chiều rộng và chiều cao, điều này âm thầm phá vỡ việc co giãn đáp ứng. Công cụ này ép buộc bảo toàn viewBox.',
    },
    {
      q: 'Tôi có thể lấy lại SVG gốc sau khi tối ưu không?',
      a: 'Có — chỉ cần dán hoặc thả lại tệp gốc. Không có gì bị ghi đè trừ khi bạn sao chép hoặc tải xuống kết quả đã tối ưu.',
    },
  ],
  howToUse: 'Cách sử dụng',
  faqHeading: 'Câu hỏi thường gặp',
  moreTools: 'Thêm công cụ SVG',
};

const pngVi: ToolContent = {
  title: 'Bộ chuyển đổi SVG sang PNG — Xuất miễn phí 1x/2x/4x | VectorForge',
  description:
    'Chuyển SVG sang PNG ở độ phân giải 1x, 2x và 4x trực tuyến. Bộ chuyển đổi SVG sang PNG miễn phí, không giới hạn, trong trình duyệt với xem trước trực tiếp.',
  heading: 'Bộ chuyển đổi SVG sang PNG',
  intro:
    'Xuất các PNG sắc nét từ bất kỳ SVG nào ở tỷ lệ 1x, 2x hoặc 4x — hoàn hảo cho favicon, biểu tượng ứng dụng và hình ảnh mạng xã hội. Nếu SVG thiếu kích thước rõ ràng, viewBox được dùng tự động, và độ trong suốt được bảo toàn.',
  steps: [
    'Dán mã đánh dấu SVG của bạn vào trình soạn thảo, hoặc thả một tệp .svg vào bất cứ đâu trên trang.',
    'Xem trước SVG trên bất kỳ nền nào để xác minh trước khi xuất.',
    'Chọn 1x, 2x hoặc 4x từ các nút xuất PNG và tải xuống hình ảnh raster của bạn.',
  ],
  faqs: [
    {
      q: 'Tôi có thể xuất những độ phân giải nào?',
      a: '1x, 2x và 4x kích thước tự nhiên của SVG, lấy từ các thuộc tính width/height của nó hoặc viewBox của nó.',
    },
    {
      q: 'Độ trong suốt có được giữ trong PNG không?',
      a: 'Có — PNG đã xuất giữ kênh alpha của SVG.',
    },
    {
      q: 'Tại sao PNG của tôi trông khác với bản xem trước?',
      a: 'Các phông chữ bên ngoài hoặc hình ảnh liên kết được tham chiếu bên trong SVG không thể được raster hóa trong trình duyệt. Hãy chuyển văn bản thành đường viền để có kết quả hoàn hảo theo pixel.',
    },
  ],
  howToUse: 'Cách sử dụng',
  faqHeading: 'Câu hỏi thường gặp',
  moreTools: 'Thêm công cụ SVG',
};

/* ---------------- Record + getter ---------------- */

export const TOOL_CONTENT: Record<ToolSlug, Record<Locale, ToolContent>> = {
  'svg-to-jsx': {
    en: jsxEn, hi: jsxHi, es: jsxEs, fr: jsxFr, de: jsxDe, pt: jsxPt, ru: jsxRu,
    ja: jsxJa, ko: jsxKo, 'zh-cn': jsxZhCn, ar: jsxAr, bn: jsxBn, as: jsxAsm,
    ur: jsxUr, ta: jsxTa, te: jsxTe, mr: jsxMr, id: jsxId, tr: jsxTr, it: jsxIt,
    nl: jsxNl, pl: jsxPl, vi: jsxVi,
  },
  'svg-to-react': {
    en: reactEn, hi: reactHi, es: reactEs, fr: reactFr, de: reactDe, pt: reactPt,
    ru: reactRu, ja: reactJa, ko: reactKo, 'zh-cn': reactZhCn, ar: reactAr,
    bn: reactBn, as: reactAsm, ur: reactUr, ta: reactTa, te: reactTe,
    mr: reactMr, id: reactId, tr: reactTr, it: reactIt, nl: reactNl,
    pl: reactPl, vi: reactVi,
  },
  'svg-to-base64': {
    en: base64En, hi: base64Hi, es: base64Es, fr: base64Fr, de: base64De,
    pt: base64Pt, ru: base64Ru, ja: base64Ja, ko: base64Ko, 'zh-cn': base64ZhCn,
    ar: base64Ar, bn: base64Bn, as: base64Asm, ur: base64Ur, ta: base64Ta,
    te: base64Te, mr: base64Mr, id: base64Id, tr: base64Tr, it: base64It,
    nl: base64Nl, pl: base64Pl, vi: base64Vi,
  },
  'svg-to-data-uri': {
    en: dataUriEn, hi: dataUriHi, es: dataUriEs, fr: dataUriFr, de: dataUriDe,
    pt: dataUriPt, ru: dataUriRu, ja: dataUriJa, ko: dataUriKo,
    'zh-cn': dataUriZhCn, ar: dataUriAr, bn: dataUriBn, as: dataUriAsm,
    ur: dataUriUr, ta: dataUriTa, te: dataUriTe, mr: dataUriMr, id: dataUriId,
    tr: dataUriTr, it: dataUriIt, nl: dataUriNl, pl: dataUriPl, vi: dataUriVi,
  },
  'svg-optimizer': {
    en: optimizerEn, hi: optimizerHi, es: optimizerEs, fr: optimizerFr,
    de: optimizerDe, pt: optimizerPt, ru: optimizerRu, ja: optimizerJa,
    ko: optimizerKo, 'zh-cn': optimizerZhCn, ar: optimizerAr, bn: optimizerBn,
    as: optimizerAsm, ur: optimizerUr, ta: optimizerTa, te: optimizerTe,
    mr: optimizerMr, id: optimizerId, tr: optimizerTr, it: optimizerIt,
    nl: optimizerNl, pl: optimizerPl, vi: optimizerVi,
  },
  'svg-to-png': {
    en: pngEn, hi: pngHi, es: pngEs, fr: pngFr, de: pngDe, pt: pngPt, ru: pngRu,
    ja: pngJa, ko: pngKo, 'zh-cn': pngZhCn, ar: pngAr, bn: pngBn, as: pngAsm,
    ur: pngUr, ta: pngTa, te: pngTe, mr: pngMr, id: pngId, tr: pngTr,
    it: pngIt, nl: pngNl, pl: pngPl, vi: pngVi,
  },
};

export const getToolContent = (slug: string, locale: string): ToolContent =>
  TOOL_CONTENT[slug as ToolSlug]?.[locale as Locale] ?? jsxEn;
