/* Long-form page content for the standalone pages (About, How It Works,
   Privacy) in every locale. Typed as Record<Locale, …> so TypeScript fails
   the build if any locale is missing content — same guarantee as ui.ts. */
import type { Locale } from './ui';

export interface HowContent {
  pageTitle: string;
  description: string;
  heading: string;
  intro: string;
  steps: { title: string; body: string }[];
  localTitle: string;
  localBefore: string;
  localLink: string;
  localAfter: string;
  cta: string;
}

export interface AboutContent {
  pageTitle: string;
  description: string;
  heading: string;
  intro: string;
  whyTitle: string;
  whyBody: string;
  whatTitle: string;
  whatItems: string[];
  principlesTitle: string;
  principles: { label: string; text: string }[];
  ossTitle: string;
  ossBefore: string;
  cta: string;
}

export interface PrivacyContent {
  pageTitle: string;
  heading: string;
  updated: string;
  sections: { title: string; body: string }[];
}

/* ---------------- English ---------------- */

const howEn: HowContent = {
  pageTitle: 'How It Works — VectorForge',
  description:
    'How VectorForge converts SVG to code entirely in your browser: add an SVG, edit with a live preview, optimize, convert to 11 formats, and export — nothing is ever uploaded.',
  heading: 'How it works',
  intro: 'From an SVG file to production-ready code in five steps — all of them inside your browser.',
  steps: [
    {
      title: '1. Add your SVG',
      body: 'Upload a file, drag and drop it anywhere on the page, or paste SVG code straight into the editor. Working with several files? Drop them all at once — batch mode loads each one, and can download every result together as a single ZIP.',
    },
    {
      title: '2. Edit with a live preview',
      body: 'The editor highlights your markup and validates it as you type. The preview updates instantly — on a transparency grid, light, white, dark, or your own custom background, with zoom and pan. If the SVG is invalid, you get the exact parse problem instead of a blank box.',
    },
    {
      title: '3. Optimize and clean up',
      body: 'One click runs SVGO optimization and shows exactly how much you saved. You can also prettify messy markup or minify it for production. Anything unsafe — scripts, event handlers, foreign objects — is stripped from the preview automatically.',
    },
    {
      title: '4. Pick your format',
      body: 'Eleven outputs, all generated from the code in the editor: Raw SVG, JSX, a typed React component (.tsx), Vue SFC, Svelte, React Native, an HTML <img> tag, a CSS data-URI, a CSS mask, an SVG sprite, and Base64 — so what you see is exactly what you get.',
    },
    {
      title: '5. Copy, download, or export PNG',
      body: 'Copy the result straight to your clipboard, download it as a file, or export a crisp PNG at 1x, 2x, or 4x for design tools and documents.',
    },
  ],
  localTitle: '100% in your browser',
  localBefore:
    'Every step above happens on your own device. Your files are never uploaded to a server, there are no accounts, and the converter keeps working offline once it has loaded. Read the ',
  localLink: 'privacy policy',
  localAfter: ' for the details.',
  cta: 'Open the converter',
};

const aboutEn: AboutContent = {
  pageTitle: 'About — VectorForge',
  description:
    'VectorForge is a free browser-based SVG toolkit: convert SVG to JSX, React components, data URIs, Base64 and PNG — privately, with no uploads, no sign-up and no watermarks.',
  heading: 'About VectorForge',
  intro: 'A free SVG toolkit that turns images into code — and code back into images — without your files ever leaving your device.',
  whyTitle: 'Why it exists',
  whyBody:
    "Developers and designers move SVGs into code every day: an icon pasted inline into a React app, a logo embedded as a data-URI, an illustration exported as PNG. Most converters make you upload your files to a stranger's server for what is, at heart, a text transformation. VectorForge does the whole job locally in your browser instead — faster, and private by design rather than by promise.",
  whatTitle: 'What you can do',
  whatItems: [
    'Convert one SVG into 11 outputs: Raw SVG, JSX, a typed React component, Vue SFC, Svelte, React Native, an HTML <img> tag, a CSS data-URI, a CSS mask, an SVG sprite, and Base64.',
    'Optimize with SVGO and see the exact savings, or prettify and minify markup.',
    'Edit with syntax highlighting, validation, and a live preview on five backgrounds with zoom and pan.',
    'Convert many files at once in batch mode and download everything as a ZIP.',
    'Export crisp PNGs at 1x, 2x, and 4x.',
    'Use it in 23 languages — including right-to-left Arabic and Urdu — and install it as an app that works offline.',
  ],
  principlesTitle: 'Principles',
  principles: [
    { label: 'Private:', text: 'no uploads, no accounts, no tracking of your files.' },
    { label: 'Free:', text: 'every feature, no sign-up, no watermarks, no "pro" tier.' },
    { label: 'Honest:', text: 'the code you see in the editor is exactly what gets converted — nothing is silently rewritten on a server.' },
  ],
  ossTitle: 'Open source',
  ossBefore: 'VectorForge is built with modern web technology and SVGO, and its source is available under the MIT license:',
  cta: 'Open the converter',
};

const privacyEn: PrivacyContent = {
  pageTitle: 'Privacy Policy — VectorForge',
  heading: 'Privacy Policy',
  updated: 'Last updated: October 2026',
  sections: [
    {
      title: 'Runs entirely in your browser',
      body: 'VectorForge processes everything on your device. Files you upload, code you paste or edit, and everything the tool generates stay in your browser — nothing is uploaded to any server, and no conversion work happens anywhere but your own machine.',
    },
    {
      title: 'What is stored locally',
      body: "The only thing VectorForge saves is your theme preference (light, dark, or system), kept in your browser's local storage so the site looks right when you come back. It is never sent anywhere.",
    },
    {
      title: 'Analytics',
      body: 'VectorForge currently runs no analytics at all — no cookies, no trackers. If analytics is ever added in the future, it will be cookieless, and this page will say so first.',
    },
    {
      title: 'Third-party requests',
      body: 'The site loads its interface fonts (Inter, JetBrains Mono) from Google Fonts. Apart from that, it makes no requests to third-party services.',
    },
    { title: 'Contact', body: 'Questions about this policy:' },
  ],
};

/* ---------------- Hindi ---------------- */

const howHi: HowContent = {
  pageTitle: 'यह कैसे काम करता है — VectorForge',
  description:
    'VectorForge आपके ब्राउज़र में ही SVG को कोड में कैसे बदलता है: SVG जोड़ें, लाइव प्रीव्यू के साथ एडिट करें, ऑप्टिमाइज़ करें, 11 फ़ॉर्मेट में बदलें और एक्सपोर्ट करें — कुछ भी अपलोड नहीं होता।',
  heading: 'यह कैसे काम करता है',
  intro: 'SVG फ़ाइल से प्रोडक्शन-रेडी कोड तक, पाँच आसान चरणों में — और ये सब आपके ब्राउज़र के अंदर।',
  steps: [
    {
      title: '1. अपना SVG जोड़ें',
      body: 'फ़ाइल अपलोड करें, उसे पेज पर कहीं भी ड्रैग-ड्रॉप करें, या SVG कोड सीधे एडिटर में पेस्ट करें। कई फ़ाइलें हैं? सब एक साथ डाल दें — बैच मोड हर फ़ाइल लोड करता है और सारे नतीजे एक ZIP में डाउनलोड कर सकता है।',
    },
    {
      title: '2. लाइव प्रीव्यू के साथ एडिट करें',
      body: 'एडिटर आपके मार्कअप को हाईलाइट करता है और टाइप करते ही उसे जांचता है। प्रीव्यू तुरंत अपडेट होता है — पारदर्शिता ग्रिड, हल्की, सफ़ेद, गहरी या आपकी अपनी कस्टम पृष्ठभूमि पर, ज़ूम और पैन के साथ। SVG गलत हो तो खाली बॉक्स की जगह आपको ठीक-ठीक समस्या दिखाई देती है।',
    },
    {
      title: '3. ऑप्टिमाइज़ और साफ़-सफ़ाई',
      body: 'एक क्लिक में SVGO ऑप्टिमाइज़ेशन चलता है और ठीक-ठीक दिखता है कि कितनी बचत हुई। आप बिखरे मार्कअप को सुंदर भी कर सकते हैं या प्रोडक्शन के लिए मिनिफ़ाई भी। जो कुछ असुरक्षित है — स्क्रिप्ट, इवेंट हैंडलर, foreign object — वह प्रीव्यू से अपने आप हट जाता है।',
    },
    {
      title: '4. अपना फ़ॉर्मेट चुनें',
      body: 'ग्यारह आउटपुट, सभी एडिटर के कोड से ही बनते हैं: Raw SVG, JSX, टाइप किया हुआ React कॉम्पोनेंट (.tsx), Vue SFC, Svelte, React Native, HTML <img> टैग, CSS data-URI, CSS मास्क, SVG स्प्राइट और Base64 — जैसा दिखता है, वैसा ही मिलता है।',
    },
    {
      title: '5. कॉपी, डाउनलोड या PNG एक्सपोर्ट',
      body: 'नतीजा सीधे क्लिपबोर्ड पर कॉपी करें, फ़ाइल के रूप में डाउनलोड करें, या डिज़ाइन टूल और दस्तावेज़ों के लिए 1x, 2x या 4x पर साफ़ PNG एक्सपोर्ट करें।',
    },
  ],
  localTitle: '100% आपके ब्राउज़र में',
  localBefore:
    'ऊपर का हर चरण आपके अपने डिवाइस पर होता है। आपकी फ़ाइलें कभी किसी सर्वर पर अपलोड नहीं होतीं, कोई खाता नहीं है, और एक बार लोड हो जाने पर कन्वर्टर ऑफ़लाइन भी चलता रहता है। विस्तार के लिए ',
  localLink: 'गोपनीयता नीति',
  localAfter: ' पढ़ें।',
  cta: 'कन्वर्टर खोलें',
};

const aboutHi: AboutContent = {
  pageTitle: 'परिचय — VectorForge',
  description:
    'VectorForge एक मुफ़्त, ब्राउज़र-आधारित SVG टूलकिट है: SVG को JSX, React कॉम्पोनेंट, data URI, Base64 और PNG में बदलें — निजी तरीके से, बिना अपलोड, बिना साइन-अप और बिना वॉटरमार्क।',
  heading: 'VectorForge के बारे में',
  intro: 'एक मुफ़्त SVG टूलकिट जो छवियों को कोड में — और कोड को वापस छवियों में — बदलता है, और आपकी फ़ाइलें कभी आपके डिवाइस से बाहर नहीं जातीं।',
  whyTitle: 'यह क्यों बनाया गया',
  whyBody:
    'डेवलपर और डिज़ाइनर हर दिन SVG को कोड में डालते हैं: कोई आइकन React ऐप में इनलाइन पेस्ट होता है, कोई लोगो data-URI बनकर जुड़ता है, कोई इलस्ट्रेशन PNG बनकर एक्सपोर्ट होता है। ज़्यादातर कन्वर्टर इसके लिए आपकी फ़ाइलें किसी अजनबी के सर्वर पर अपलोड करवाते हैं, जबकि असल में यह बस टेक्स्ट का रूपांतरण है। VectorForge पूरा काम आपके ब्राउज़र में ही करता है — तेज़ भी, और वादे के बजाय डिज़ाइन से ही निजी।',
  whatTitle: 'आप क्या कर सकते हैं',
  whatItems: [
    'एक SVG को 11 आउटपुट में बदलें: Raw SVG, JSX, टाइप किया हुआ React कॉम्पोनेंट, Vue SFC, Svelte, React Native, HTML <img> टैग, CSS data-URI, CSS मास्क, SVG स्प्राइट और Base64।',
    'SVGO से ऑप्टिमाइज़ करें और ठीक-ठीक बचत देखें, या मार्कअप को सुंदर और मिनिफ़ाई करें।',
    'सिंटैक्स हाईलाइटिंग, जांच और पाँच पृष्ठभूमियों पर ज़ूम-पैन वाले लाइव प्रीव्यू के साथ एडिट करें।',
    'बैच मोड में कई फ़ाइलें एक साथ बदलें और सब कुछ ZIP में डाउनलोड करें।',
    '1x, 2x और 4x पर साफ़ PNG एक्सपोर्ट करें।',
    'इसे 23 भाषाओं में इस्तेमाल करें — दाएँ-से-बाएँ चलने वाली अरबी और उर्दू समेत — और ऑफ़लाइन चलने वाले ऐप की तरह इंस्टॉल करें।',
  ],
  principlesTitle: 'हमारे सिद्धांत',
  principles: [
    { label: 'निजी:', text: 'कोई अपलोड नहीं, कोई खाता नहीं, आपकी फ़ाइलों की कोई ट्रैकिंग नहीं।' },
    { label: 'मुफ़्त:', text: 'हर सुविधा, बिना साइन-अप, बिना वॉटरमार्क, कोई "प्रो" टियर नहीं।' },
    { label: 'ईमानदार:', text: 'एडिटर में जो कोड दिखता है, वही बदलता है — कोई सर्वर चुपके से कुछ नहीं बदलता।' },
  ],
  ossTitle: 'ओपन सोर्स',
  ossBefore: 'VectorForge आधुनिक वेब तकनीक और SVGO से बना है, और इसका सोर्स MIT लाइसेंस के तहत उपलब्ध है:',
  cta: 'कन्वर्टर खोलें',
};

const privacyHi: PrivacyContent = {
  pageTitle: 'गोपनीयता नीति — VectorForge',
  heading: 'गोपनीयता नीति',
  updated: 'अंतिम अपडेट: अक्टूबर 2026',
  sections: [
    {
      title: 'पूरी तरह आपके ब्राउज़र में चलता है',
      body: 'VectorForge सब कुछ आपके डिवाइस पर ही प्रोसेस करता है। आप जो फ़ाइलें अपलोड करते हैं, जो कोड पेस्ट या एडिट करते हैं, और टूल जो कुछ भी बनाता है — सब आपके ब्राउज़र में ही रहता है। कुछ भी किसी सर्वर पर अपलोड नहीं होता, और कोई भी रूपांतरण आपकी अपनी मशीन के अलावा कहीं नहीं होता।',
    },
    {
      title: 'स्थानीय रूप से क्या सहेजा जाता है',
      body: 'VectorForge सिर्फ़ आपकी थीम पसंद (हल्की, गहरी या सिस्टम) सहेजता है, जो आपके ब्राउज़र के लोकल स्टोरेज में रहती है ताकि अगली बार साइट ठीक दिखे। यह कहीं भेजी नहीं जाती।',
    },
    {
      title: 'एनालिटिक्स',
      body: 'VectorForge फ़िलहाल कोई एनालिटिक्स नहीं चलाता — न कुकीज़, न ट्रैकर। भविष्य में कभी एनालिटिक्स जुड़ा भी तो वह कुकी-रहित होगा, और यह पेज पहले बताएगा।',
    },
    {
      title: 'तृतीय-पक्ष अनुरोध',
      body: 'साइट अपने इंटरफ़ेस फ़ॉन्ट (Inter, JetBrains Mono) Google Fonts से लोड करती है। इसके अलावा यह किसी तृतीय-पक्ष सेवा से कोई अनुरोध नहीं करती।',
    },
    { title: 'संपर्क', body: 'इस नीति के बारे में सवाल?' },
  ],
};

/* ---------------- Spanish ---------------- */

const howEs: HowContent = {
  pageTitle: 'Cómo funciona — VectorForge',
  description:
    'Cómo VectorForge convierte SVG en código por completo en tu navegador: añade un SVG, edítalo con vista previa en vivo, optimiza, convierte a 11 formatos y exporta. Nunca se sube nada.',
  heading: 'Cómo funciona',
  intro: 'De un archivo SVG a código listo para producción en cinco pasos, todos dentro de tu navegador.',
  steps: [
    {
      title: '1. Añade tu SVG',
      body: 'Sube un archivo, arrástralo y suéltalo en cualquier parte de la página, o pega código SVG directamente en el editor. ¿Trabajas con varios archivos? Suéltalos todos a la vez: el modo por lotes carga cada uno y puede descargar todos los resultados juntos en un único ZIP.',
    },
    {
      title: '2. Edita con vista previa en vivo',
      body: 'El editor resalta tu marcado y lo valida mientras escribes. La vista previa se actualiza al instante: sobre cuadrícula de transparencia, fondo claro, blanco, oscuro o uno personalizado, con zoom y desplazamiento. Si el SVG no es válido, verás el problema exacto en lugar de un cuadro vacío.',
    },
    {
      title: '3. Optimiza y limpia',
      body: 'Un clic ejecuta la optimización SVGO y muestra exactamente cuánto has ahorrado. También puedes embellecer marcado desordenado o minificarlo para producción. Todo lo inseguro — scripts, controladores de eventos, objetos externos — se elimina de la vista previa automáticamente.',
    },
    {
      title: '4. Elige tu formato',
      body: 'Once salidas, todas generadas desde el código del editor: SVG sin procesar, JSX, un componente React tipado (.tsx), Vue SFC, Svelte, React Native, una etiqueta HTML <img>, un data-URI de CSS, una máscara CSS, un sprite SVG y Base64. Lo que ves es exactamente lo que obtienes.',
    },
    {
      title: '5. Copia, descarga o exporta a PNG',
      body: 'Copia el resultado directamente al portapapeles, descárgalo como archivo o exporta un PNG nítido a 1x, 2x o 4x para herramientas de diseño y documentos.',
    },
  ],
  localTitle: '100 % en tu navegador',
  localBefore:
    'Cada paso anterior ocurre en tu propio dispositivo. Tus archivos nunca se suben a un servidor, no hay cuentas, y el conversor sigue funcionando sin conexión una vez cargado. Lee la ',
  localLink: 'política de privacidad',
  localAfter: ' para conocer los detalles.',
  cta: 'Abrir el conversor',
};

const aboutEs: AboutContent = {
  pageTitle: 'Acerca de — VectorForge',
  description:
    'VectorForge es un kit de herramientas SVG gratuito que funciona en el navegador: convierte SVG a JSX, componentes React, data URI, Base64 y PNG, de forma privada, sin subidas, sin registro y sin marcas de agua.',
  heading: 'Acerca de VectorForge',
  intro: 'Un kit de herramientas SVG gratuito que convierte imágenes en código — y código de nuevo en imágenes — sin que tus archivos salgan nunca de tu dispositivo.',
  whyTitle: 'Por qué existe',
  whyBody:
    'Desarrolladores y diseñadores trasladan SVG al código cada día: un icono pegado en línea en una app React, un logotipo incrustado como data-URI, una ilustración exportada como PNG. La mayoría de los conversores te obligan a subir tus archivos al servidor de un desconocido para lo que, en el fondo, es una transformación de texto. VectorForge hace todo el trabajo localmente en tu navegador: más rápido, y privado por diseño, no por promesa.',
  whatTitle: 'Qué puedes hacer',
  whatItems: [
    'Convertir un SVG en 11 salidas: SVG sin procesar, JSX, un componente React tipado, Vue SFC, Svelte, React Native, una etiqueta HTML <img>, un data-URI de CSS, una máscara CSS, un sprite SVG y Base64.',
    'Optimizar con SVGO y ver el ahorro exacto, o embellecer y minificar el marcado.',
    'Editar con resaltado de sintaxis, validación y vista previa en vivo sobre cinco fondos, con zoom y desplazamiento.',
    'Convertir muchos archivos a la vez en modo por lotes y descargar todo como ZIP.',
    'Exportar PNG nítidos a 1x, 2x y 4x.',
    'Usarlo en 23 idiomas — incluido el árabe y el urdu, de derecha a izquierda — e instalarlo como una app que funciona sin conexión.',
  ],
  principlesTitle: 'Principios',
  principles: [
    { label: 'Privado:', text: 'sin subidas, sin cuentas, sin rastreo de tus archivos.' },
    { label: 'Gratuito:', text: 'todas las funciones, sin registro, sin marcas de agua, sin nivel «pro».' },
    { label: 'Honesto:', text: 'el código que ves en el editor es exactamente el que se convierte; ningún servidor reescribe nada en silencio.' },
  ],
  ossTitle: 'Código abierto',
  ossBefore: 'VectorForge está construido con tecnología web moderna y SVGO, y su código está disponible bajo la licencia MIT:',
  cta: 'Abrir el conversor',
};

const privacyEs: PrivacyContent = {
  pageTitle: 'Política de privacidad — VectorForge',
  heading: 'Política de privacidad',
  updated: 'Última actualización: octubre de 2026',
  sections: [
    {
      title: 'Funciona por completo en tu navegador',
      body: 'VectorForge procesa todo en tu dispositivo. Los archivos que subes, el código que pegas o editas y todo lo que genera la herramienta permanecen en tu navegador: nada se sube a ningún servidor y ninguna conversión ocurre en otra máquina que no sea la tuya.',
    },
    {
      title: 'Qué se guarda localmente',
      body: 'Lo único que VectorForge guarda es tu preferencia de tema (claro, oscuro o del sistema), en el almacenamiento local de tu navegador para que el sitio se vea bien cuando vuelvas. Nunca se envía a ningún sitio.',
    },
    {
      title: 'Analítica',
      body: 'VectorForge no usa ninguna analítica por el momento: ni cookies ni rastreadores. Si algún día se añade analítica, será sin cookies, y esta página lo dirá primero.',
    },
    {
      title: 'Solicitudes a terceros',
      body: 'El sitio carga sus fuentes de interfaz (Inter, JetBrains Mono) desde Google Fonts. Aparte de eso, no realiza solicitudes a servicios de terceros.',
    },
    { title: 'Contacto', body: '¿Preguntas sobre esta política?' },
  ],
};

/* ---------------- Portuguese ---------------- */

const howPt: HowContent = {
  pageTitle: 'Como funciona — VectorForge',
  description:
    'Como o VectorForge converte SVG em código inteiramente no seu navegador: adicione um SVG, edite com pré-visualização ao vivo, otimize, converta para 11 formatos e exporte — nada é enviado.',
  heading: 'Como funciona',
  intro: 'De um arquivo SVG a código pronto para produção em cinco passos — todos dentro do seu navegador.',
  steps: [
    {
      title: '1. Adicione o seu SVG',
      body: 'Envie um arquivo, arraste e solte em qualquer lugar da página ou cole o código SVG direto no editor. Trabalhando com vários arquivos? Solte todos de uma vez — o modo em lote carrega cada um e pode baixar todos os resultados juntos em um único ZIP.',
    },
    {
      title: '2. Edite com pré-visualização ao vivo',
      body: 'O editor destaca a sua marcação e a valida enquanto você digita. A pré-visualização atualiza na hora — em grade de transparência, fundo claro, branco, escuro ou personalizado, com zoom e arrastar. Se o SVG for inválido, você vê o problema exato em vez de uma caixa vazia.',
    },
    {
      title: '3. Otimize e limpe',
      body: 'Um clique executa a otimização SVGO e mostra exatamente quanto você economizou. Você também pode embelezar marcação bagunçada ou minificá-la para produção. Tudo que é inseguro — scripts, manipuladores de eventos, objetos externos — é removido da pré-visualização automaticamente.',
    },
    {
      title: '4. Escolha o formato',
      body: 'Onze saídas, todas geradas a partir do código no editor: SVG bruto, JSX, um componente React tipado (.tsx), Vue SFC, Svelte, React Native, uma tag HTML <img>, um data-URI CSS, uma máscara CSS, um sprite SVG e Base64 — o que você vê é exatamente o que você recebe.',
    },
    {
      title: '5. Copie, baixe ou exporte em PNG',
      body: 'Copie o resultado direto para a área de transferência, baixe como arquivo ou exporte um PNG nítido em 1x, 2x ou 4x para ferramentas de design e documentos.',
    },
  ],
  localTitle: '100% no seu navegador',
  localBefore:
    'Cada passo acima acontece no seu próprio dispositivo. Seus arquivos nunca são enviados a um servidor, não há contas, e o conversor continua funcionando offline depois de carregado. Leia a ',
  localLink: 'política de privacidade',
  localAfter: ' para os detalhes.',
  cta: 'Abrir o conversor',
};

const aboutPt: AboutContent = {
  pageTitle: 'Sobre — VectorForge',
  description:
    'O VectorForge é um kit de ferramentas SVG gratuito que roda no navegador: converta SVG para JSX, componentes React, data URI, Base64 e PNG — com privacidade, sem envios, sem cadastro e sem marcas d’água.',
  heading: 'Sobre o VectorForge',
  intro: 'Um kit de ferramentas SVG gratuito que transforma imagens em código — e código de volta em imagens — sem que os seus arquivos saiam do seu dispositivo.',
  whyTitle: 'Por que ele existe',
  whyBody:
    'Desenvolvedores e designers levam SVGs para o código todos os dias: um ícone colado inline em um app React, um logotipo embutido como data-URI, uma ilustração exportada como PNG. A maioria dos conversores faz você enviar seus arquivos para o servidor de um desconhecido por algo que, no fundo, é uma transformação de texto. O VectorForge faz todo o trabalho localmente no seu navegador — mais rápido, e privado por design, não por promessa.',
  whatTitle: 'O que você pode fazer',
  whatItems: [
    'Converter um SVG em 11 saídas: SVG bruto, JSX, um componente React tipado, Vue SFC, Svelte, React Native, uma tag HTML <img>, um data-URI CSS, uma máscara CSS, um sprite SVG e Base64.',
    'Otimizar com SVGO e ver a economia exata, ou embelezar e minificar a marcação.',
    'Editar com destaque de sintaxe, validação e pré-visualização ao vivo em cinco fundos, com zoom e arrastar.',
    'Converter muitos arquivos de uma vez no modo em lote e baixar tudo como ZIP.',
    'Exportar PNGs nítidos em 1x, 2x e 4x.',
    'Usar em 23 idiomas — incluindo árabe e urdu, da direita para a esquerda — e instalar como um app que funciona offline.',
  ],
  principlesTitle: 'Princípios',
  principles: [
    { label: 'Privado:', text: 'sem envios, sem contas, sem rastreamento dos seus arquivos.' },
    { label: 'Gratuito:', text: 'todos os recursos, sem cadastro, sem marcas d’água, sem plano “pro”.' },
    { label: 'Honesto:', text: 'o código que você vê no editor é exatamente o que é convertido — nada é reescrito em silêncio em um servidor.' },
  ],
  ossTitle: 'Código aberto',
  ossBefore: 'O VectorForge é construído com tecnologia web moderna e SVGO, e seu código está disponível sob a licença MIT:',
  cta: 'Abrir o conversor',
};

const privacyPt: PrivacyContent = {
  pageTitle: 'Política de privacidade — VectorForge',
  heading: 'Política de privacidade',
  updated: 'Última atualização: outubro de 2026',
  sections: [
    {
      title: 'Funciona inteiramente no seu navegador',
      body: 'O VectorForge processa tudo no seu dispositivo. Os arquivos que você envia, o código que cola ou edita e tudo o que a ferramenta gera permanecem no seu navegador — nada é enviado a qualquer servidor, e nenhuma conversão acontece em outra máquina além da sua.',
    },
    {
      title: 'O que é guardado localmente',
      body: 'A única coisa que o VectorForge guarda é a sua preferência de tema (claro, escuro ou do sistema), no armazenamento local do navegador, para o site aparecer corretamente quando você voltar. Isso nunca é enviado a lugar nenhum.',
    },
    {
      title: 'Análises',
      body: 'O VectorForge atualmente não usa nenhuma análise — sem cookies, sem rastreadores. Se um dia alguma análise for adicionada, será sem cookies, e esta página dirá isso primeiro.',
    },
    {
      title: 'Solicitações a terceiros',
      body: 'O site carrega as fontes da interface (Inter, JetBrains Mono) do Google Fonts. Fora isso, não faz solicitações a serviços de terceiros.',
    },
    { title: 'Contato', body: 'Perguntas sobre esta política?' },
  ],
};

/* ---------------- French ---------------- */

const howFr: HowContent = {
  pageTitle: 'Fonctionnement — VectorForge',
  description:
    'Comment VectorForge convertit le SVG en code entièrement dans votre navigateur : ajoutez un SVG, modifiez-le avec un aperçu en direct, optimisez, convertissez en 11 formats et exportez — rien n’est jamais téléversé.',
  heading: 'Fonctionnement',
  intro: 'D’un fichier SVG à du code prêt pour la production en cinq étapes — toutes dans votre navigateur.',
  steps: [
    {
      title: '1. Ajoutez votre SVG',
      body: 'Importez un fichier, glissez-déposez-le n’importe où sur la page, ou collez du code SVG directement dans l’éditeur. Plusieurs fichiers ? Déposez-les tous d’un coup — le mode lot charge chacun d’eux et peut télécharger tous les résultats ensemble dans un seul ZIP.',
    },
    {
      title: '2. Modifiez avec un aperçu en direct',
      body: 'L’éditeur colore votre balisage et le valide pendant la saisie. L’aperçu se met à jour instantanément — sur grille de transparence, fond clair, blanc, sombre ou personnalisé, avec zoom et déplacement. Si le SVG est invalide, vous voyez le problème exact au lieu d’un cadre vide.',
    },
    {
      title: '3. Optimisez et nettoyez',
      body: 'Un clic lance l’optimisation SVGO et affiche exactement ce que vous avez gagné. Vous pouvez aussi embellir un balisage désordonné ou le minifier pour la production. Tout ce qui est dangereux — scripts, gestionnaires d’événements, objets étrangers — est retiré de l’aperçu automatiquement.',
    },
    {
      title: '4. Choisissez votre format',
      body: 'Onze sorties, toutes générées depuis le code de l’éditeur : SVG brut, JSX, un composant React typé (.tsx), Vue SFC, Svelte, React Native, une balise HTML <img>, un data-URI CSS, un masque CSS, un sprite SVG et du Base64 — ce que vous voyez est exactement ce que vous obtenez.',
    },
    {
      title: '5. Copiez, téléchargez ou exportez en PNG',
      body: 'Copiez le résultat directement dans le presse-papiers, téléchargez-le comme fichier, ou exportez un PNG net en 1x, 2x ou 4x pour vos outils de design et vos documents.',
    },
  ],
  localTitle: '100 % dans votre navigateur',
  localBefore:
    'Chaque étape ci-dessus se déroule sur votre propre appareil. Vos fichiers ne sont jamais téléversés sur un serveur, il n’y a aucun compte, et le convertisseur continue de fonctionner hors ligne une fois chargé. Lisez la ',
  localLink: 'politique de confidentialité',
  localAfter: ' pour les détails.',
  cta: 'Ouvrir le convertisseur',
};

const aboutFr: AboutContent = {
  pageTitle: 'À propos — VectorForge',
  description:
    'VectorForge est une boîte à outils SVG gratuite fonctionnant dans le navigateur : convertissez le SVG en JSX, composants React, data URI, Base64 et PNG — en privé, sans téléversement, sans inscription et sans filigrane.',
  heading: 'À propos de VectorForge',
  intro: 'Une boîte à outils SVG gratuite qui transforme les images en code — et le code en images — sans que vos fichiers quittent jamais votre appareil.',
  whyTitle: 'Pourquoi il existe',
  whyBody:
    'Les développeurs et les designers intègrent des SVG au code chaque jour : une icône collée en ligne dans une application React, un logo intégré comme data-URI, une illustration exportée en PNG. La plupart des convertisseurs vous font téléverser vos fichiers sur le serveur d’un inconnu pour ce qui n’est, au fond, qu’une transformation de texte. VectorForge fait tout le travail localement dans votre navigateur — plus vite, et privé par conception plutôt que par promesse.',
  whatTitle: 'Ce que vous pouvez faire',
  whatItems: [
    'Convertir un SVG en 11 sorties : SVG brut, JSX, un composant React typé, Vue SFC, Svelte, React Native, une balise HTML <img>, un data-URI CSS, un masque CSS, un sprite SVG et du Base64.',
    'Optimiser avec SVGO et voir le gain exact, ou embellir et minifier le balisage.',
    'Modifier avec coloration syntaxique, validation et aperçu en direct sur cinq fonds, avec zoom et déplacement.',
    'Convertir de nombreux fichiers à la fois en mode lot et tout télécharger en ZIP.',
    'Exporter des PNG nets en 1x, 2x et 4x.',
    'L’utiliser en 23 langues — dont l’arabe et l’ourdou, de droite à gauche — et l’installer comme une application qui fonctionne hors ligne.',
  ],
  principlesTitle: 'Principes',
  principles: [
    { label: 'Privé :', text: 'aucun téléversement, aucun compte, aucun suivi de vos fichiers.' },
    { label: 'Gratuit :', text: 'toutes les fonctions, sans inscription, sans filigrane, sans formule « pro ».' },
    { label: 'Honnête :', text: 'le code que vous voyez dans l’éditeur est exactement celui qui est converti — rien n’est réécrit en silence sur un serveur.' },
  ],
  ossTitle: 'Open source',
  ossBefore: 'VectorForge est construit avec des technologies web modernes et SVGO, et son code source est disponible sous licence MIT :',
  cta: 'Ouvrir le convertisseur',
};

const privacyFr: PrivacyContent = {
  pageTitle: 'Politique de confidentialité — VectorForge',
  heading: 'Politique de confidentialité',
  updated: 'Dernière mise à jour : octobre 2026',
  sections: [
    {
      title: 'Fonctionne entièrement dans votre navigateur',
      body: 'VectorForge traite tout sur votre appareil. Les fichiers que vous importez, le code que vous collez ou modifiez et tout ce que l’outil génère restent dans votre navigateur — rien n’est téléversé sur un serveur, et aucune conversion n’a lieu ailleurs que sur votre propre machine.',
    },
    {
      title: 'Ce qui est stocké localement',
      body: 'La seule chose que VectorForge enregistre est votre préférence de thème (clair, sombre ou système), conservée dans le stockage local de votre navigateur pour que le site s’affiche correctement à votre retour. Elle n’est envoyée nulle part.',
    },
    {
      title: 'Analyse d’audience',
      body: 'VectorForge n’utilise actuellement aucune analyse — ni cookies ni traqueurs. Si une analyse est un jour ajoutée, elle sera sans cookies, et cette page l’indiquera d’abord.',
    },
    {
      title: 'Requêtes à des tiers',
      body: 'Le site charge ses polices d’interface (Inter, JetBrains Mono) depuis Google Fonts. À part cela, il n’effectue aucune requête vers des services tiers.',
    },
    { title: 'Contact', body: 'Des questions sur cette politique ?' },
  ],
};

/* ---------------- German ---------------- */

const howDe: HowContent = {
  pageTitle: 'So funktioniert es — VectorForge',
  description:
    'So wandelt VectorForge SVG vollständig in Ihrem Browser in Code um: SVG hinzufügen, mit Live-Vorschau bearbeiten, optimieren, in 11 Formate konvertieren und exportieren — es wird nie etwas hochgeladen.',
  heading: 'So funktioniert es',
  intro: 'Von der SVG-Datei zum produktionsreifen Code in fünf Schritten — alle in Ihrem Browser.',
  steps: [
    {
      title: '1. SVG hinzufügen',
      body: 'Laden Sie eine Datei hoch, ziehen Sie sie per Drag & Drop irgendwo auf die Seite oder fügen Sie SVG-Code direkt in den Editor ein. Mehrere Dateien? Werfen Sie alle auf einmal hinein — der Stapelmodus lädt jede einzelne und kann alle Ergebnisse zusammen als ein ZIP herunterladen.',
    },
    {
      title: '2. Mit Live-Vorschau bearbeiten',
      body: 'Der Editor hebt Ihr Markup hervor und prüft es beim Tippen. Die Vorschau aktualisiert sich sofort — auf Transparenzraster, hellem, weißem, dunklem oder eigenem Hintergrund, mit Zoom und Verschieben. Ist das SVG ungültig, sehen Sie das genaue Problem statt einer leeren Box.',
    },
    {
      title: '3. Optimieren und aufräumen',
      body: 'Ein Klick startet die SVGO-Optimierung und zeigt genau, wie viel Sie gespart haben. Sie können unordentliches Markup auch verschönern oder für die Produktion minifizieren. Alles Unsichere — Skripte, Event-Handler, Fremdobjekte — wird automatisch aus der Vorschau entfernt.',
    },
    {
      title: '4. Format wählen',
      body: 'Elf Ausgaben, alle aus dem Code im Editor erzeugt: Rohes SVG, JSX, eine typisierte React-Komponente (.tsx), Vue SFC, Svelte, React Native, ein HTML-<img>-Tag, eine CSS-Data-URI, eine CSS-Maske, ein SVG-Sprite und Base64 — was Sie sehen, ist genau das, was Sie bekommen.',
    },
    {
      title: '5. Kopieren, herunterladen oder als PNG exportieren',
      body: 'Kopieren Sie das Ergebnis direkt in die Zwischenablage, laden Sie es als Datei herunter oder exportieren Sie ein scharfes PNG in 1x, 2x oder 4x für Design-Tools und Dokumente.',
    },
  ],
  localTitle: '100 % in Ihrem Browser',
  localBefore:
    'Jeder Schritt oben passiert auf Ihrem eigenen Gerät. Ihre Dateien werden nie auf einen Server hochgeladen, es gibt keine Konten, und der Konverter arbeitet nach dem Laden auch offline weiter. Lesen Sie die ',
  localLink: 'Datenschutzerklärung',
  localAfter: ' für die Details.',
  cta: 'Konverter öffnen',
};

const aboutDe: AboutContent = {
  pageTitle: 'Über — VectorForge',
  description:
    'VectorForge ist ein kostenloses SVG-Toolkit im Browser: SVG in JSX, React-Komponenten, Data-URIs, Base64 und PNG umwandeln — privat, ohne Uploads, ohne Anmeldung und ohne Wasserzeichen.',
  heading: 'Über VectorForge',
  intro: 'Ein kostenloses SVG-Toolkit, das Bilder in Code — und Code zurück in Bilder — verwandelt, ohne dass Ihre Dateien je Ihr Gerät verlassen.',
  whyTitle: 'Warum es das gibt',
  whyBody:
    'Entwickler und Designer bringen SVGs jeden Tag in Code: ein Icon, inline in eine React-App eingefügt, ein Logo als Data-URI eingebettet, eine Illustration als PNG exportiert. Die meisten Konverter lassen Sie Ihre Dateien dafür auf den Server eines Fremden hochladen — für etwas, das im Kern eine Textumwandlung ist. VectorForge erledigt die ganze Arbeit lokal in Ihrem Browser: schneller und von Grund auf privat, statt nur per Versprechen.',
  whatTitle: 'Was Sie tun können',
  whatItems: [
    'Ein SVG in 11 Ausgaben umwandeln: Rohes SVG, JSX, eine typisierte React-Komponente, Vue SFC, Svelte, React Native, ein HTML-<img>-Tag, eine CSS-Data-URI, eine CSS-Maske, ein SVG-Sprite und Base64.',
    'Mit SVGO optimieren und die genaue Ersparnis sehen — oder Markup verschönern und minifizieren.',
    'Mit Syntaxhervorhebung, Prüfung und Live-Vorschau auf fünf Hintergründen bearbeiten, inklusive Zoom und Verschieben.',
    'Viele Dateien im Stapelmodus auf einmal umwandeln und alles als ZIP herunterladen.',
    'Scharfe PNGs in 1x, 2x und 4x exportieren.',
    'In 23 Sprachen nutzen — inklusive Arabisch und Urdu von rechts nach links — und als App installieren, die offline funktioniert.',
  ],
  principlesTitle: 'Prinzipien',
  principles: [
    { label: 'Privat:', text: 'keine Uploads, keine Konten, kein Tracking Ihrer Dateien.' },
    { label: 'Kostenlos:', text: 'jede Funktion, keine Anmeldung, keine Wasserzeichen, keine „Pro“-Stufe.' },
    { label: 'Ehrlich:', text: 'der Code, den Sie im Editor sehen, ist genau der, der umgewandelt wird — kein Server schreibt still etwas um.' },
  ],
  ossTitle: 'Open Source',
  ossBefore: 'VectorForge ist mit moderner Webtechnik und SVGO gebaut, und sein Quellcode steht unter der MIT-Lizenz bereit:',
  cta: 'Konverter öffnen',
};

const privacyDe: PrivacyContent = {
  pageTitle: 'Datenschutzerklärung — VectorForge',
  heading: 'Datenschutzerklärung',
  updated: 'Zuletzt aktualisiert: Oktober 2026',
  sections: [
    {
      title: 'Läuft vollständig in Ihrem Browser',
      body: 'VectorForge verarbeitet alles auf Ihrem Gerät. Dateien, die Sie hochladen, Code, den Sie einfügen oder bearbeiten, und alles, was das Tool erzeugt, bleiben in Ihrem Browser — nichts wird auf einen Server hochgeladen, und keine Umwandlung findet irgendwo anders statt als auf Ihrem eigenen Rechner.',
    },
    {
      title: 'Was lokal gespeichert wird',
      body: 'Das Einzige, was VectorForge speichert, ist Ihre Theme-Einstellung (hell, dunkel oder System) im lokalen Speicher Ihres Browsers, damit die Seite beim nächsten Besuch richtig aussieht. Sie wird nirgendwohin gesendet.',
    },
    {
      title: 'Analyse',
      body: 'VectorForge nutzt derzeit keinerlei Analyse — keine Cookies, keine Tracker. Sollte je eine Analyse hinzukommen, wird sie cookiefrei sein, und diese Seite wird es zuerst sagen.',
    },
    {
      title: 'Anfragen an Dritte',
      body: 'Die Seite lädt ihre Interface-Schriften (Inter, JetBrains Mono) von Google Fonts. Abgesehen davon stellt sie keine Anfragen an Dienste Dritter.',
    },
    { title: 'Kontakt', body: 'Fragen zu dieser Erklärung?' },
  ],
};

/* ---------------- Indonesian ---------------- */

const howId: HowContent = {
  pageTitle: 'Cara Kerja — VectorForge',
  description:
    'Cara VectorForge mengubah SVG menjadi kode sepenuhnya di browser Anda: tambahkan SVG, edit dengan pratinjau langsung, optimalkan, konversi ke 11 format, dan ekspor — tidak ada yang diunggah.',
  heading: 'Cara kerja',
  intro: 'Dari file SVG menjadi kode siap produksi dalam lima langkah — semuanya di dalam browser Anda.',
  steps: [
    {
      title: '1. Tambahkan SVG Anda',
      body: 'Unggah file, seret dan letakkan di mana saja pada halaman, atau tempel kode SVG langsung ke editor. Bekerja dengan banyak file? Letakkan semuanya sekaligus — mode batch memuat setiap file dan dapat mengunduh semua hasil bersama dalam satu ZIP.',
    },
    {
      title: '2. Edit dengan pratinjau langsung',
      body: 'Editor menyorot markup Anda dan memvalidasinya saat Anda mengetik. Pratinjau diperbarui seketika — di atas kisi transparansi, latar terang, putih, gelap, atau kustom Anda sendiri, dengan zoom dan geser. Jika SVG tidak valid, Anda melihat masalah persisnya, bukan kotak kosong.',
    },
    {
      title: '3. Optimalkan dan bersihkan',
      body: 'Satu klik menjalankan optimasi SVGO dan menunjukkan dengan tepat berapa banyak yang Anda hemat. Anda juga dapat merapikan markup yang berantakan atau meminifikasinya untuk produksi. Apa pun yang tidak aman — skrip, penangan acara, objek asing — otomatis dihapus dari pratinjau.',
    },
    {
      title: '4. Pilih format Anda',
      body: 'Sebelas keluaran, semuanya dihasilkan dari kode di editor: SVG Mentah, JSX, komponen React bertipe (.tsx), Vue SFC, Svelte, React Native, tag HTML <img>, data-URI CSS, mask CSS, sprite SVG, dan Base64 — apa yang Anda lihat adalah persis apa yang Anda dapatkan.',
    },
    {
      title: '5. Salin, unduh, atau ekspor PNG',
      body: 'Salin hasilnya langsung ke papan klip, unduh sebagai file, atau ekspor PNG yang tajam pada 1x, 2x, atau 4x untuk alat desain dan dokumen.',
    },
  ],
  localTitle: '100% di browser Anda',
  localBefore:
    'Setiap langkah di atas terjadi di perangkat Anda sendiri. File Anda tidak pernah diunggah ke server, tidak ada akun, dan konverter tetap bekerja offline setelah dimuat. Baca ',
  localLink: 'kebijakan privasi',
  localAfter: ' untuk detailnya.',
  cta: 'Buka konverter',
};

const aboutId: AboutContent = {
  pageTitle: 'Tentang — VectorForge',
  description:
    'VectorForge adalah perangkat SVG gratis berbasis browser: ubah SVG menjadi JSX, komponen React, data URI, Base64, dan PNG — secara privat, tanpa unggahan, tanpa pendaftaran, dan tanpa tanda air.',
  heading: 'Tentang VectorForge',
  intro: 'Perangkat SVG gratis yang mengubah gambar menjadi kode — dan kode kembali menjadi gambar — tanpa file Anda pernah meninggalkan perangkat Anda.',
  whyTitle: 'Mengapa ini ada',
  whyBody:
    'Pengembang dan desainer memindahkan SVG ke dalam kode setiap hari: ikon yang ditempel sebaris ke aplikasi React, logo yang disematkan sebagai data-URI, ilustrasi yang diekspor sebagai PNG. Sebagian besar konverter mengharuskan Anda mengunggah file ke server orang asing untuk sesuatu yang pada dasarnya adalah transformasi teks. VectorForge mengerjakan semuanya secara lokal di browser Anda — lebih cepat, dan privat karena desain, bukan karena janji.',
  whatTitle: 'Apa yang bisa Anda lakukan',
  whatItems: [
    'Mengubah satu SVG menjadi 11 keluaran: SVG Mentah, JSX, komponen React bertipe, Vue SFC, Svelte, React Native, tag HTML <img>, data-URI CSS, mask CSS, sprite SVG, dan Base64.',
    'Mengoptimalkan dengan SVGO dan melihat penghematan pastinya, atau merapikan dan meminifikasi markup.',
    'Mengedit dengan penyorotan sintaks, validasi, dan pratinjau langsung pada lima latar, dengan zoom dan geser.',
    'Mengonversi banyak file sekaligus dalam mode batch dan mengunduh semuanya sebagai ZIP.',
    'Mengekspor PNG yang tajam pada 1x, 2x, dan 4x.',
    'Menggunakannya dalam 23 bahasa — termasuk Arab dan Urdu kanan-ke-kiri — dan memasangnya sebagai aplikasi yang bekerja offline.',
  ],
  principlesTitle: 'Prinsip',
  principles: [
    { label: 'Privat:', text: 'tanpa unggahan, tanpa akun, tanpa pelacakan file Anda.' },
    { label: 'Gratis:', text: 'setiap fitur, tanpa pendaftaran, tanpa tanda air, tanpa tingkat "pro".' },
    { label: 'Jujur:', text: 'kode yang Anda lihat di editor adalah persis yang dikonversi — tidak ada server yang diam-diam menulis ulang apa pun.' },
  ],
  ossTitle: 'Sumber terbuka',
  ossBefore: 'VectorForge dibangun dengan teknologi web modern dan SVGO, dan kode sumbernya tersedia di bawah lisensi MIT:',
  cta: 'Buka konverter',
};

const privacyId: PrivacyContent = {
  pageTitle: 'Kebijakan Privasi — VectorForge',
  heading: 'Kebijakan Privasi',
  updated: 'Terakhir diperbarui: Oktober 2026',
  sections: [
    {
      title: 'Berjalan sepenuhnya di browser Anda',
      body: 'VectorForge memproses semuanya di perangkat Anda. File yang Anda unggah, kode yang Anda tempel atau edit, dan semua yang dihasilkan alat ini tetap berada di browser Anda — tidak ada yang diunggah ke server mana pun, dan tidak ada pekerjaan konversi yang terjadi di tempat lain selain mesin Anda sendiri.',
    },
    {
      title: 'Apa yang disimpan secara lokal',
      body: 'Satu-satunya yang disimpan VectorForge adalah preferensi tema Anda (terang, gelap, atau sistem), disimpan di penyimpanan lokal browser Anda agar situs tampil dengan benar saat Anda kembali. Itu tidak pernah dikirim ke mana pun.',
    },
    {
      title: 'Analitik',
      body: 'VectorForge saat ini tidak menjalankan analitik sama sekali — tanpa cookie, tanpa pelacak. Jika analitik suatu hari ditambahkan, itu akan tanpa cookie, dan halaman ini akan menyatakannya terlebih dahulu.',
    },
    {
      title: 'Permintaan pihak ketiga',
      body: 'Situs ini memuat font antarmukanya (Inter, JetBrains Mono) dari Google Fonts. Selain itu, situs ini tidak membuat permintaan ke layanan pihak ketiga.',
    },
    { title: 'Kontak', body: 'Pertanyaan tentang kebijakan ini?' },
  ],
};

/* ---------------- Japanese ---------------- */

const howJa: HowContent = {
  pageTitle: '使い方 — VectorForge',
  description:
    'VectorForge がブラウザだけで SVG をコードに変換する仕組み：SVG を追加し、ライブプレビューで編集し、最適化して、11 形式に変換・エクスポート。アップロードは一切ありません。',
  heading: '使い方',
  intro: 'SVG ファイルから本番投入できるコードまで、5 つのステップ — すべてブラウザの中で完結します。',
  steps: [
    {
      title: '1. SVG を追加',
      body: 'ファイルをアップロードするか、ページのどこへでもドラッグ＆ドロップするか、SVG コードをエディタに直接貼り付けます。複数のファイルもまとめてドロップできます — バッチモードで各ファイルを読み込み、結果を 1 つの ZIP でまとめてダウンロードできます。',
    },
    {
      title: '2. ライブプレビューで編集',
      body: 'エディタは入力しながらマークアップをハイライトし、検証します。プレビューは即座に更新 — 透明グリッド、ライト、ホワイト、ダーク、カスタム背景に対応し、ズームとパンも可能。SVG が不正な場合は、空白の箱ではなく正確な問題箇所が表示されます。',
    },
    {
      title: '3. 最適化とクリーンアップ',
      body: 'ワンクリックで SVGO 最適化を実行し、どれだけ削減できたかを正確に表示します。乱れたマークアップの整形や、本番向けのミニファイも可能です。スクリプト、イベントハンドラ、外部オブジェクトなどの危険な要素は、プレビューから自動的に除去されます。',
    },
    {
      title: '4. 形式を選ぶ',
      body: 'エディタ内のコードから生成される 11 の出力：Raw SVG、JSX、型付き React コンポーネント（.tsx）、Vue SFC、Svelte、React Native、HTML <img> タグ、CSS データ URI、CSS マスク、SVG スプライト、Base64 — 見たままの結果が得られます。',
    },
    {
      title: '5. コピー、ダウンロード、PNG 書き出し',
      body: '結果をクリップボードへ直接コピー、ファイルとしてダウンロード、またはデザインツールやドキュメント向けに 1x・2x・4x の鮮明な PNG を書き出せます。',
    },
  ],
  localTitle: '100% ブラウザの中で',
  localBefore:
    '上記のすべてのステップは、あなたのデバイス上で行われます。ファイルがサーバーにアップロードされることは決してなく、アカウントも不要で、一度読み込めばオフラインでも変換が続けられます。詳しくは',
  localLink: 'プライバシーポリシー',
  localAfter: 'をご覧ください。',
  cta: 'コンバーターを開く',
};

const aboutJa: AboutContent = {
  pageTitle: '概要 — VectorForge',
  description:
    'VectorForge は無料のブラウザベース SVG ツールキットです。SVG を JSX、React コンポーネント、データ URI、Base64、PNG に変換 — アップロードなし、登録なし、透かしなしでプライベートに。',
  heading: 'VectorForge について',
  intro: '画像をコードに — そしてコードを画像に — 変換する無料の SVG ツールキット。あなたのファイルがデバイスの外に出ることはありません。',
  whyTitle: 'なぜ作られたのか',
  whyBody:
    '開発者とデザイナーは毎日 SVG をコードへ移します。React アプリにインラインで貼るアイコン、data-URI として埋め込むロゴ、PNG として書き出すイラスト。しかし多くのコンバーターは、本質的にはテキスト変換にすぎない処理のために、見知らぬサーバーへファイルのアップロードを求めます。VectorForge はすべての作業をブラウザ内でローカルに行います — より速く、そして約束ではなく設計によってプライベートです。',
  whatTitle: 'できること',
  whatItems: [
    '1 つの SVG を 11 の出力に変換：Raw SVG、JSX、型付き React コンポーネント、Vue SFC、Svelte、React Native、HTML <img> タグ、CSS データ URI、CSS マスク、SVG スプライト、Base64。',
    'SVGO で最適化して正確な削減量を確認。マークアップの整形とミニファイも可能。',
    'シンタックスハイライト、検証、5 つの背景でのライブプレビュー（ズームとパン付き）で編集。',
    'バッチモードで多数のファイルを一括変換し、すべてを ZIP でダウンロード。',
    '1x、2x、4x の鮮明な PNG を書き出し。',
    '右から左へ読むアラビア語とウルドゥー語を含む 23 言語で利用でき、オフラインで動くアプリとしてインストール可能。',
  ],
  principlesTitle: '原則',
  principles: [
    { label: 'プライベート：', text: 'アップロードなし、アカウントなし、あなたのファイルの追跡なし。' },
    { label: '無料：', text: '全機能が使え、登録なし、透かしなし、「Pro」プランなし。' },
    { label: '正直：', text: 'エディタで見えるコードがそのまま変換されます — サーバーが密かに書き換えることはありません。' },
  ],
  ossTitle: 'オープンソース',
  ossBefore: 'VectorForge はモダンな Web 技術と SVGO で構築されており、ソースコードは MIT ライセンスで公開されています：',
  cta: 'コンバーターを開く',
};

const privacyJa: PrivacyContent = {
  pageTitle: 'プライバシーポリシー — VectorForge',
  heading: 'プライバシーポリシー',
  updated: '最終更新：2026年10月',
  sections: [
    {
      title: '完全にブラウザの中で動作',
      body: 'VectorForge はすべてをあなたのデバイス上で処理します。アップロードしたファイル、貼り付けや編集したコード、ツールが生成するすべてはブラウザの中にとどまります — サーバーへアップロードされるものは一切なく、変換作業があなたのマシン以外の場所で行われることもありません。',
    },
    {
      title: 'ローカルに保存されるもの',
      body: 'VectorForge が保存するのはテーマ設定（ライト、ダーク、システム）だけです。ブラウザのローカルストレージに保存され、再訪時にサイトが正しく表示されるために使われます。どこかへ送信されることは決してありません。',
    },
    {
      title: 'アクセス解析',
      body: 'VectorForge は現在、アクセス解析を一切行っていません — Cookie もトラッカーもありません。将来解析を導入する場合も Cookie レスとし、その際はこのページでまずお知らせします。',
    },
    {
      title: '第三者へのリクエスト',
      body: 'サイトはインターフェース用フォント（Inter、JetBrains Mono）を Google Fonts から読み込みます。それ以外に第三者サービスへのリクエストは行いません。',
    },
    { title: 'お問い合わせ', body: 'このポリシーについてのご質問は：' },
  ],
};

/* ---------------- Russian ---------------- */

const howRu: HowContent = {
  pageTitle: 'Как это работает — VectorForge',
  description:
    'Как VectorForge превращает SVG в код полностью в вашем браузере: добавьте SVG, редактируйте с живым предпросмотром, оптимизируйте, конвертируйте в 11 форматов и экспортируйте — ничего никуда не отправляется.',
  heading: 'Как это работает',
  intro: 'От файла SVG до готового к продакшену кода за пять шагов — и все они происходят внутри вашего браузера.',
  steps: [
    {
      title: '1. Добавьте SVG',
      body: 'Загрузите файл, перетащите его в любое место страницы или вставьте код SVG прямо в редактор. Работаете с несколькими файлами? Бросьте их все сразу — пакетный режим загрузит каждый, а результаты можно скачать одним ZIP-архивом.',
    },
    {
      title: '2. Редактируйте с живым предпросмотром',
      body: 'Редактор подсвечивает разметку и проверяет её по мере ввода. Предпросмотр обновляется мгновенно — на сетке прозрачности, светлом, белом, тёмном или вашем собственном фоне, с масштабом и панорамой. Если SVG некорректен, вы увидите точную проблему, а не пустой прямоугольник.',
    },
    {
      title: '3. Оптимизируйте и наведите порядок',
      body: 'Один щелчок запускает оптимизацию SVGO и показывает, сколько именно вы сэкономили. Можно также привести неряшливую разметку в порядок или минифицировать её для продакшена. Всё небезопасное — скрипты, обработчики событий, внешние объекты — автоматически удаляется из предпросмотра.',
    },
    {
      title: '4. Выберите формат',
      body: 'Одиннадцать результатов, и все генерируются из кода в редакторе: исходный SVG, JSX, типизированный компонент React (.tsx), Vue SFC, Svelte, React Native, тег HTML <img>, data-URI для CSS, маска CSS, спрайт SVG и Base64 — что видите, то и получаете.',
    },
    {
      title: '5. Копируйте, скачивайте или экспортируйте в PNG',
      body: 'Скопируйте результат прямо в буфер обмена, скачайте его файлом или экспортируйте чёткий PNG в 1x, 2x или 4x для дизайн-инструментов и документов.',
    },
  ],
  localTitle: '100 % в вашем браузере',
  localBefore:
    'Каждый шаг выше выполняется на вашем собственном устройстве. Ваши файлы никогда не отправляются на сервер, учётных записей нет, а конвертер продолжает работать офлайн после загрузки. Подробности — в ',
  localLink: 'политике конфиденциальности',
  localAfter: '.',
  cta: 'Открыть конвертер',
};

const aboutRu: AboutContent = {
  pageTitle: 'О проекте — VectorForge',
  description:
    'VectorForge — бесплатный браузерный инструментарий для SVG: превращайте SVG в JSX, компоненты React, data URI, Base64 и PNG — приватно, без загрузок на сервер, без регистрации и без водяных знаков.',
  heading: 'О VectorForge',
  intro: 'Бесплатный инструментарий для SVG, который превращает изображения в код — а код обратно в изображения, — и при этом ваши файлы никогда не покидают ваше устройство.',
  whyTitle: 'Зачем он существует',
  whyBody:
    'Разработчики и дизайнеры каждый день переносят SVG в код: значок, вставленный инлайн в приложение React, логотип, встроенный как data-URI, иллюстрация, экспортированная в PNG. Большинство конвертеров заставляют загружать файлы на чужой сервер ради того, что по сути является преобразованием текста. VectorForge делает всю работу локально в вашем браузере — быстрее и приватно по устройству, а не по обещанию.',
  whatTitle: 'Что можно делать',
  whatItems: [
    'Превращать один SVG в 11 результатов: исходный SVG, JSX, типизированный компонент React, Vue SFC, Svelte, React Native, тег HTML <img>, data-URI для CSS, маску CSS, спрайт SVG и Base64.',
    'Оптимизировать через SVGO и видеть точную экономию, а также приводить разметку в порядок и минифицировать её.',
    'Редактировать с подсветкой синтаксиса, проверкой и живым предпросмотром на пяти фонах, с масштабом и панорамой.',
    'Конвертировать много файлов сразу в пакетном режиме и скачивать всё одним ZIP.',
    'Экспортировать чёткие PNG в 1x, 2x и 4x.',
    'Пользоваться на 23 языках — включая арабский и урду с письмом справа налево — и устанавливать как приложение, работающее офлайн.',
  ],
  principlesTitle: 'Принципы',
  principles: [
    { label: 'Приватность:', text: 'никаких загрузок на сервер, никаких учётных записей, никакого отслеживания ваших файлов.' },
    { label: 'Бесплатность:', text: 'все функции, без регистрации, без водяных знаков, без «pro»-тарифа.' },
    { label: 'Честность:', text: 'код, который вы видите в редакторе, — это ровно то, что конвертируется; сервер ничего не переписывает исподтишка.' },
  ],
  ossTitle: 'Открытый исходный код',
  ossBefore: 'VectorForge построен на современных веб-технологиях и SVGO, а его исходный код доступен по лицензии MIT:',
  cta: 'Открыть конвертер',
};

const privacyRu: PrivacyContent = {
  pageTitle: 'Политика конфиденциальности — VectorForge',
  heading: 'Политика конфиденциальности',
  updated: 'Последнее обновление: октябрь 2026 г.',
  sections: [
    {
      title: 'Работает полностью в вашем браузере',
      body: 'VectorForge обрабатывает всё на вашем устройстве. Файлы, которые вы загружаете, код, который вы вставляете или редактируете, и всё, что создаёт инструмент, остаётся в вашем браузере — ничего не отправляется ни на какой сервер, и никакие преобразования не происходят нигде, кроме вашей собственной машины.',
    },
    {
      title: 'Что хранится локально',
      body: 'Единственное, что сохраняет VectorForge, — ваша настройка темы (светлая, тёмная или системная) в локальном хранилище браузера, чтобы сайт правильно выглядел при следующем визите. Она никуда не отправляется.',
    },
    {
      title: 'Аналитика',
      body: 'Сейчас VectorForge не использует никакой аналитики — ни cookie, ни трекеров. Если аналитика когда-нибудь появится, она будет без cookie, и эта страница сообщит об этом первой.',
    },
    {
      title: 'Запросы к третьим сторонам',
      body: 'Сайт загружает свои интерфейсные шрифты (Inter, JetBrains Mono) из Google Fonts. Кроме этого, он не делает запросов к сторонним сервисам.',
    },
    { title: 'Контакты', body: 'Вопросы об этой политике:' },
  ],
};

/* ---------------- Korean ---------------- */

const howKo: HowContent = {
  pageTitle: '작동 방식 — VectorForge',
  description:
    'VectorForge가 브라우저 안에서만 SVG를 코드로 변환하는 방법: SVG를 추가하고 실시간 미리보기로 편집하고, 최적화하고, 11가지 형식으로 변환하고 내보내세요. 업로드는 전혀 없습니다.',
  heading: '작동 방식',
  intro: 'SVG 파일에서 프로덕션에 바로 쓸 수 있는 코드까지, 다섯 단계 — 전부 브라우저 안에서 이루어집니다.',
  steps: [
    {
      title: '1. SVG 추가하기',
      body: '파일을 업로드하거나 페이지 어디에든 끌어다 놓거나, SVG 코드를 편집기에 바로 붙여넣으세요. 여러 파일을 작업하시나요? 한 번에 모두 놓으면 일괄 모드가 각 파일을 불러오고, 모든 결과를 하나의 ZIP으로 다운로드할 수 있습니다.',
    },
    {
      title: '2. 실시간 미리보기로 편집하기',
      body: '편집기는 입력하는 동안 마크업을 강조 표시하고 유효성을 검사합니다. 미리보기는 투명 격자, 밝은 배경, 흰색, 어두운 배경 또는 사용자 지정 배경 위에서 확대/축소와 이동과 함께 즉시 업데이트됩니다. SVG가 잘못되면 빈 상자 대신 정확한 오류 위치를 알려줍니다.',
    },
    {
      title: '3. 최적화하고 정리하기',
      body: '클릭 한 번으로 SVGO 최적화가 실행되고 정확히 얼마나 줄었는지 보여줍니다. 지저분한 마크업을 보기 좋게 정리하거나 프로덕션용으로 축소할 수도 있습니다. 스크립트, 이벤트 핸들러, 외부 객체 같은 안전하지 않은 요소는 미리보기에서 자동으로 제거됩니다.',
    },
    {
      title: '4. 형식 선택하기',
      body: '편집기의 코드에서 생성되는 11가지 출력: Raw SVG, JSX, 타입이 있는 React 컴포넌트(.tsx), Vue SFC, Svelte, React Native, HTML <img> 태그, CSS 데이터 URI, CSS 마스크, SVG 스프라이트, Base64 — 보이는 그대로의 결과를 얻습니다.',
    },
    {
      title: '5. 복사, 다운로드 또는 PNG로 내보내기',
      body: '결과를 클립보드에 바로 복사하거나 파일로 다운로드하거나, 디자인 도구와 문서용으로 1x, 2x, 4x의 선명한 PNG로 내보내세요.',
    },
  ],
  localTitle: '100% 브라우저 안에서',
  localBefore:
    '위의 모든 단계는 사용자 본인의 기기에서 이루어집니다. 파일이 서버에 업로드되는 일은 결코 없고, 계정도 없으며, 한 번 로드되면 오프라인에서도 변환기가 계속 작동합니다. 자세한 내용은 ',
  localLink: '개인정보 처리방침',
  localAfter: '을 확인하세요.',
  cta: '변환기 열기',
};

const aboutKo: AboutContent = {
  pageTitle: '소개 — VectorForge',
  description:
    'VectorForge는 무료 브라우저 기반 SVG 도구 모음입니다. SVG를 JSX, React 컴포넌트, 데이터 URI, Base64, PNG로 변환하세요 — 업로드 없이, 가입 없이, 워터마크 없이 비공개로.',
  heading: 'VectorForge 소개',
  intro: '이미지를 코드로, 코드를 다시 이미지로 바꾸는 무료 SVG 도구 모음 — 파일이 기기를 떠나는 일은 절대 없습니다.',
  whyTitle: '이 도구가 있는 이유',
  whyBody:
    '개발자와 디자이너는 매일 SVG를 코드로 옮깁니다. React 앱에 인라인으로 붙여 넣는 아이콘, data-URI로 삽입하는 로고, PNG로 내보내는 일러스트레이션이 그렇습니다. 대부분의 변환기는 본질적으로 텍스트 변환에 불과한 작업을 위해 낯선 서버에 파일을 업로드하게 만듭니다. VectorForge는 모든 작업을 브라우저 안에서 로컬로 수행합니다 — 더 빠르고, 약속이 아니라 설계로 비공개를 지킵니다.',
  whatTitle: '할 수 있는 일',
  whatItems: [
    '하나의 SVG를 11가지 출력으로 변환: Raw SVG, JSX, 타입이 있는 React 컴포넌트, Vue SFC, Svelte, React Native, HTML <img> 태그, CSS 데이터 URI, CSS 마스크, SVG 스프라이트, Base64.',
    'SVGO로 최적화하고 정확한 절감량을 확인하거나, 마크업을 정리하고 축소할 수 있습니다.',
    '구문 강조, 유효성 검사, 확대/축소와 이동이 가능한 다섯 가지 배경의 실시간 미리보기로 편집할 수 있습니다.',
    '일괄 모드로 여러 파일을 한 번에 변환하고 전부 ZIP으로 다운로드할 수 있습니다.',
    '1x, 2x, 4x의 선명한 PNG를 내보낼 수 있습니다.',
    '오른쪽에서 왼쪽으로 쓰는 아랍어와 우르두어를 포함해 23개 언어로 사용할 수 있고, 오프라인에서 작동하는 앱으로 설치할 수 있습니다.',
  ],
  principlesTitle: '원칙',
  principles: [
    { label: '비공개:', text: '업로드 없음, 계정 없음, 파일 추적 없음.' },
    { label: '무료:', text: '모든 기능, 가입 없음, 워터마크 없음, "프로" 요금제 없음.' },
    { label: '정직:', text: '편집기에서 보이는 코드가 정확히 변환되는 코드이며, 서버가 몰래 다시 쓰는 일은 없습니다.' },
  ],
  ossTitle: '오픈 소스',
  ossBefore: 'VectorForge는 최신 웹 기술과 SVGO로 만들어졌으며, 소스 코드는 MIT 라이선스로 공개되어 있습니다:',
  cta: '변환기 열기',
};

const privacyKo: PrivacyContent = {
  pageTitle: '개인정보 처리방침 — VectorForge',
  heading: '개인정보 처리방침',
  updated: '최종 업데이트: 2026년 10월',
  sections: [
    {
      title: '전적으로 브라우저에서 실행',
      body: 'VectorForge는 모든 것을 사용자의 기기에서 처리합니다. 업로드한 파일, 붙여넣거나 편집한 코드, 도구가 생성하는 모든 것은 브라우저 안에 머뭅니다 — 어떤 서버에도 업로드되지 않으며, 변환 작업은 사용자 본인의 기기 말고는 어디에서도 일어나지 않습니다.',
    },
    {
      title: '로컬에 저장되는 것',
      body: 'VectorForge가 저장하는 유일한 것은 테마 설정(라이트, 다크, 시스템)이며, 다시 방문했을 때 사이트가 올바르게 표시되도록 브라우저의 로컬 스토리지에 보관됩니다. 어디로도 전송되지 않습니다.',
    },
    {
      title: '분석',
      body: 'VectorForge는 현재 어떤 분석도 실행하지 않습니다 — 쿠키도, 추적기도 없습니다. 나중에 분석이 추가되더라도 쿠키 없이 운영될 것이며, 이 페이지에서 가장 먼저 알려드리겠습니다.',
    },
    {
      title: '제3자 요청',
      body: '이 사이트는 인터페이스 글꼴(Inter, JetBrains Mono)을 Google Fonts에서 불러옵니다. 그 외에는 제3자 서비스에 어떤 요청도 하지 않습니다.',
    },
    { title: '문의', body: '이 방침에 대한 문의:' },
  ],
};

/* ---------------- Chinese (Simplified) ---------------- */

const howZhCn: HowContent = {
  pageTitle: '工作原理 — VectorForge',
  description:
    'VectorForge 如何完全在浏览器中将 SVG 转换为代码：添加 SVG、通过实时预览编辑、优化、转换为 11 种格式并导出——从不上传任何内容。',
  heading: '工作原理',
  intro: '从 SVG 文件到可用于生产的代码，只需五步 — 全部在您的浏览器中完成。',
  steps: [
    {
      title: '1. 添加您的 SVG',
      body: '上传文件，将其拖放到页面上的任何位置，或者将 SVG 代码直接粘贴到编辑器中。有多个文件？一次性全部拖入即可——批量模式会逐个加载，并可将所有结果打包为一个 ZIP 下载。',
    },
    {
      title: '2. 通过实时预览进行编辑',
      body: '编辑器会在您输入时高亮标记并进行验证。预览会即时更新——支持透明网格、浅色、白色、深色或您自定义的背景，并可缩放和平移。如果 SVG 无效，您会看到确切的问题所在，而不是一个空白框。',
    },
    {
      title: '3. 优化与清理',
      body: '一键运行 SVGO 优化，并准确显示节省了多少。您也可以美化杂乱的标记，或将其压缩以用于生产环境。任何不安全的内容——脚本、事件处理程序、外部对象——都会自动从预览中移除。',
    },
    {
      title: '4. 选择您的格式',
      body: '十一种输出，全部由编辑器中的代码生成：原始 SVG、JSX、带类型的 React 组件（.tsx）、Vue SFC、Svelte、React Native、HTML <img> 标签、CSS 数据 URI、CSS 遮罩、SVG 精灵图和 Base64——所见即所得。',
    },
    {
      title: '5. 复制、下载或导出 PNG',
      body: '将结果直接复制到剪贴板、下载为文件，或以 1x、2x、4x 导出清晰的 PNG，供设计工具和文档使用。',
    },
  ],
  localTitle: '100% 在您的浏览器中',
  localBefore:
    '上述每一步都发生在您自己的设备上。您的文件永远不会上传到服务器，没有账户，加载后转换器在离线状态下也能继续工作。详情请阅读',
  localLink: '隐私政策',
  localAfter: '。',
  cta: '打开转换器',
};

const aboutZhCn: AboutContent = {
  pageTitle: '关于 — VectorForge',
  description:
    'VectorForge 是一款免费的浏览器端 SVG 工具集：将 SVG 转换为 JSX、React 组件、数据 URI、Base64 和 PNG——私密、无需上传、无需注册、无水印。',
  heading: '关于 VectorForge',
  intro: '一款免费的 SVG 工具集，可将图像转换为代码，也可将代码转回图像——您的文件永远不会离开您的设备。',
  whyTitle: '为何存在',
  whyBody:
    '开发者和设计师每天都要把 SVG 放进代码：内联粘贴到 React 应用中的图标、以 data-URI 嵌入的标志、导出为 PNG 的插图。大多数转换器会要求您把文件上传到陌生人的服务器，而这本质上只是一次文本变换。VectorForge 则完全在您的浏览器本地完成全部工作——更快，而且是设计上的隐私，而非口头承诺。',
  whatTitle: '您可以做什么',
  whatItems: [
    '将一个 SVG 转换为 11 种输出：原始 SVG、JSX、带类型的 React 组件、Vue SFC、Svelte、React Native、HTML <img> 标签、CSS 数据 URI、CSS 遮罩、SVG 精灵图和 Base64。',
    '使用 SVGO 优化并查看确切的节省量，或美化和压缩标记。',
    '通过语法高亮、验证功能以及支持缩放和平移的五种背景实时预览进行编辑。',
    '在批量模式下一次转换多个文件，并将所有内容下载为 ZIP。',
    '导出 1x、2x 和 4x 的清晰 PNG。',
    '支持 23 种语言——包括从右到左的阿拉伯语和乌尔都语——并可安装为可离线工作的应用。',
  ],
  principlesTitle: '原则',
  principles: [
    { label: '隐私：', text: '不上传、无账户、不追踪您的文件。' },
    { label: '免费：', text: '全部功能、无需注册、无水印、没有“专业版”层级。' },
    { label: '诚实：', text: '您在编辑器中看到的代码正是被转换的代码——没有任何服务器会悄悄改写。' },
  ],
  ossTitle: '开源',
  ossBefore: 'VectorForge 使用现代 Web 技术和 SVGO 构建，其源代码以 MIT 许可证发布：',
  cta: '打开转换器',
};

const privacyZhCn: PrivacyContent = {
  pageTitle: '隐私政策 — VectorForge',
  heading: '隐私政策',
  updated: '最后更新：2026 年 10 月',
  sections: [
    {
      title: '完全在您的浏览器中运行',
      body: 'VectorForge 在您的设备上处理一切。您上传的文件、粘贴或编辑的代码，以及工具生成的所有内容都保留在您的浏览器中——没有任何内容会上传到任何服务器，任何转换工作都只发生在您自己的机器上。',
    },
    {
      title: '本地存储的内容',
      body: 'VectorForge 唯一保存的是您的主题偏好（浅色、深色或系统），它存放在浏览器的本地存储中，以便您再次访问时网站显示正常。它永远不会被发送到任何地方。',
    },
    {
      title: '分析',
      body: 'VectorForge 目前完全不运行任何分析——没有 Cookie，没有跟踪器。如果将来添加分析功能，也将是无 Cookie 的，并且本页会首先说明。',
    },
    {
      title: '第三方请求',
      body: '本网站从 Google Fonts 加载其界面字体（Inter、JetBrains Mono）。除此之外，它不会向第三方服务发出任何请求。',
    },
    { title: '联系方式', body: '关于本政策的问题：' },
  ],
};

/* ---------------- Arabic ---------------- */

const howAr: HowContent = {
  pageTitle: 'كيف يعمل — VectorForge',
  description:
    'كيف يحوّل VectorForge ملفات SVG إلى كود بالكامل داخل متصفحك: أضف SVG وحرّره بمعاينة مباشرة وحسّنه وحوّله إلى 11 تنسيقًا وصدّره — لا يُرفع أي شيء أبدًا.',
  heading: 'كيف يعمل',
  intro: 'من ملف SVG إلى كود جاهز للإنتاج في خمس خطوات — كلها داخل متصفحك.',
  steps: [
    {
      title: '1. أضف ملف SVG',
      body: 'ارفع ملفًا، أو اسحبه وأفلته في أي مكان بالصفحة، أو الصق كود SVG مباشرة في المحرر. تعمل مع عدة ملفات؟ أفلتها كلها دفعة واحدة — يقرأ وضع الدُفعات كل ملف، ويمكنه تنزيل جميع النتائج معًا في ملف ZIP واحد.',
    },
    {
      title: '2. حرّر بمعاينة مباشرة',
      body: 'يُبرز المحرر ترميزك ويتحقق منه أثناء الكتابة. تتحدث المعاينة فورًا — على شبكة الشفافية أو خلفية فاتحة أو بيضاء أو داكنة أو مخصصة من اختيارك، مع التكبير والتحريك. وإذا كان SVG غير صالح، ترى المشكلة بدقة بدلًا من مربع فارغ.',
    },
    {
      title: '3. حسّن ونظّف',
      body: 'بنقرة واحدة يعمل تحسين SVGO ويعرض مقدار ما وفّرته بالضبط. يمكنك أيضًا تجميل الترميز الفوضوي أو تصغيره للإنتاج. وكل ما هو غير آمن — النصوص البرمجية ومعالجات الأحداث والعناصر الغريبة — يُحذف من المعاينة تلقائيًا.',
    },
    {
      title: '4. اختر التنسيق',
      body: 'أحد عشر مخرجًا، كلها تُولَّد من الكود الموجود في المحرر: SVG خام، وJSX، ومكوّن React مُنمّط (.tsx)، وVue SFC، وSvelte، وReact Native، ووسم HTML <img>، وdata-URI لـ CSS، وقناع CSS، وSVG sprite، وBase64 — ما تراه هو بالضبط ما تحصل عليه.',
    },
    {
      title: '5. انسخ أو نزّل أو صدّر PNG',
      body: 'انسخ النتيجة مباشرة إلى الحافظة، أو نزّلها كملف، أو صدّر PNG حادًا بمقاس 1x أو 2x أو 4x لأدوات التصميم والمستندات.',
    },
  ],
  localTitle: '100٪ داخل متصفحك',
  localBefore:
    'كل خطوة أعلاه تحدث على جهازك الخاص. لا تُرفع ملفاتك أبدًا إلى خادم، ولا توجد حسابات، ويستمر المحوّل في العمل دون اتصال بعد تحميله. اقرأ ',
  localLink: 'سياسة الخصوصية',
  localAfter: ' لمزيد من التفاصيل.',
  cta: 'افتح المحوّل',
};

const aboutAr: AboutContent = {
  pageTitle: 'حول — VectorForge',
  description:
    '‏VectorForge مجموعة أدوات SVG مجانية تعمل في المتصفح: حوّل SVG إلى JSX ومكونات React وdata URI وBase64 وPNG — بخصوصية تامة، دون رفع، ودون تسجيل، ودون علامات مائية.',
  heading: 'حول VectorForge',
  intro: 'مجموعة أدوات SVG مجانية تحوّل الصور إلى كود — والكود إلى صور من جديد — دون أن تغادر ملفاتك جهازك أبدًا.',
  whyTitle: 'لماذا وُجدت',
  whyBody:
    'ينقل المطوّرون والمصممون ملفات SVG إلى الكود كل يوم: أيقونة تُلصق ضمنيًا في تطبيق React، وشعار يُضمَّن كـ data-URI، ورسم يُصدَّر كـ PNG. أغلب المحوّلات تجعلك ترفع ملفاتك إلى خادم شخص غريب من أجل ما هو في جوهره تحويل نصي. أما VectorForge فينجز العمل كله محليًا في متصفحك — أسرع، وخصوصيته بالتصميم لا بالوعد.',
  whatTitle: 'ما يمكنك فعله',
  whatItems: [
    'تحويل SVG واحد إلى 11 مخرجًا: SVG خام، وJSX، ومكوّن React مُنمّط، وVue SFC، وSvelte، وReact Native، ووسم HTML <img>، وdata-URI لـ CSS، وقناع CSS، وSVG sprite، وBase64.',
    'التحسين بـ SVGO ورؤية التوفير الدقيق، أو تجميل الترميز وتصغيره.',
    'التحرير مع إبراز الصياغة والتحقق ومعاينة مباشرة على خمس خلفيات مع التكبير والتحريك.',
    'تحويل ملفات كثيرة دفعة واحدة في وضع الدُفعات وتنزيل كل شيء كملف ZIP.',
    'تصدير صور PNG حادة بمقاسات 1x و2x و4x.',
    'الاستخدام بـ 23 لغة — بما فيها العربية والأردية من اليمين إلى اليسار — والتثبيت كتطبيق يعمل دون اتصال.',
  ],
  principlesTitle: 'المبادئ',
  principles: [
    { label: 'الخصوصية:', text: 'لا رفع، لا حسابات، لا تتبع لملفاتك.' },
    { label: 'المجانية:', text: 'كل المزايا، دون تسجيل، دون علامات مائية، دون فئة «احترافية».' },
    { label: 'الصدق:', text: 'الكود الذي تراه في المحرر هو بالضبط ما يُحوَّل — لا خادم يعيد كتابة أي شيء في الخفاء.' },
  ],
  ossTitle: 'مفتوح المصدر',
  ossBefore: 'بُني VectorForge بتقنيات ويب حديثة وSVGO، وشيفرته المصدرية متاحة برخصة MIT:',
  cta: 'افتح المحوّل',
};

const privacyAr: PrivacyContent = {
  pageTitle: 'سياسة الخصوصية — VectorForge',
  heading: 'سياسة الخصوصية',
  updated: 'آخر تحديث: أكتوبر 2026',
  sections: [
    {
      title: 'يعمل بالكامل داخل متصفحك',
      body: 'يعالج VectorForge كل شيء على جهازك. الملفات التي ترفعها، والكود الذي تلصقه أو تحرّره، وكل ما تولّده الأداة يبقى في متصفحك — لا يُرفع أي شيء إلى أي خادم، ولا يحدث أي عمل تحويل في أي مكان سوى جهازك الخاص.',
    },
    {
      title: 'ما يُحفظ محليًا',
      body: 'الشيء الوحيد الذي يحفظه VectorForge هو تفضيل السمة لديك (فاتحة أو داكنة أو النظام)، محفوظًا في التخزين المحلي لمتصفحك لكي يظهر الموقع بشكل صحيح عند عودتك. ولا يُرسل إلى أي مكان أبدًا.',
    },
    {
      title: 'التحليلات',
      body: 'لا يشغّل VectorForge حاليًا أي تحليلات على الإطلاق — لا ملفات تعريف ارتباط، لا متعقّبات. وإذا أُضيفت تحليلات في المستقبل فستكون بلا ملفات تعريف ارتباط، وستذكر هذه الصفحة ذلك أولًا.',
    },
    {
      title: 'طلبات الطرف الثالث',
      body: 'يحمّل الموقع خطوط واجهته (Inter وJetBrains Mono) من Google Fonts. عدا ذلك، لا يرسل أي طلبات إلى خدمات طرف ثالث.',
    },
    { title: 'اتصل بنا', body: 'أسئلة حول هذه السياسة؟' },
  ],
};

/* ---------------- Bengali ---------------- */

const howBn: HowContent = {
  pageTitle: 'এটি কীভাবে কাজ করে — VectorForge',
  description:
    'VectorForge কীভাবে সম্পূর্ণ আপনার ব্রাউজারেই SVG-কে কোডে রূপান্তর করে: SVG যোগ করুন, লাইভ প্রিভিউসহ সম্পাদনা করুন, অপ্টিমাইজ করুন, ১১টি ফরম্যাটে রূপান্তর করুন এবং রপ্তানি করুন — কিছুই আপলোড হয় না।',
  heading: 'এটি কীভাবে কাজ করে',
  intro: 'একটি SVG ফাইল থেকে প্রোডাকশন-প্রস্তুত কোড — মাত্র পাঁচ ধাপে, সবই আপনার ব্রাউজারের ভিতরে।',
  steps: [
    {
      title: '১. আপনার SVG যোগ করুন',
      body: 'একটি ফাইল আপলোড করুন, পৃষ্ঠার যেকোনো জায়গায় টেনে এনে ছাড়ুন, অথবা SVG কোড সরাসরি সম্পাদকে পেস্ট করুন। একাধিক ফাইল নিয়ে কাজ করছেন? সব একসাথে ছেড়ে দিন — ব্যাচ মোড প্রতিটিকে লোড করে এবং সব ফলাফল একসাথে একটি ZIP আকারে ডাউনলোড করতে পারে।',
    },
    {
      title: '২. লাইভ প্রিভিউসহ সম্পাদনা করুন',
      body: 'আপনি টাইপ করার সময় সম্পাদক আপনার মার্কআপ হাইলাইট করে এবং তা যাচাই করে। প্রিভিউ তাৎক্ষণিক আপডেট হয় — স্বচ্ছতা গ্রিডে, হালকা, সাদা, গাঢ় বা আপনার নিজস্ব কাস্টম পটভূমিতে, জুম ও প্যানসহ। SVG অবৈধ হলে ফাঁকা বাক্সের বদলে আপনি হুবহু সমস্যাটি দেখতে পাবেন।',
    },
    {
      title: '৩. অপ্টিমাইজ ও পরিষ্কার করুন',
      body: 'এক ক্লিকে SVGO অপ্টিমাইজেশন চলে এবং ঠিক কতটা সাশ্রয় হলো তা দেখায়। আপনি এলোমেলো মার্কআপকে সাজাতেও পারেন বা প্রোডাকশনের জন্য মিনিফাইও করতে পারেন। অনিরাপদ যা কিছু — স্ক্রিপ্ট, ইভেন্ট হ্যান্ডলার, বিদেশি অবজেক্ট — প্রিভিউ থেকে স্বয়ংক্রিয়ভাবে মুছে যায়।',
    },
    {
      title: '৪. আপনার ফরম্যাট বেছে নিন',
      body: 'এগারোটি আউটপুট, সবই সম্পাদকের কোড থেকে তৈরি: Raw SVG, JSX, টাইপসহ React কম্পোনেন্ট (.tsx), Vue SFC, Svelte, React Native, HTML <img> ট্যাগ, CSS data-URI, CSS মাস্ক, SVG স্প্রাইট এবং Base64 — যা দেখছেন, হুবহু তাই পাচ্ছেন।',
    },
    {
      title: '৫. কপি, ডাউনলোড বা PNG রপ্তানি',
      body: 'ফলাফল সরাসরি ক্লিপবোর্ডে কপি করুন, ফাইল হিসেবে ডাউনলোড করুন, অথবা ডিজাইন টুল ও নথির জন্য 1x, 2x বা 4x-এ ঝকঝকে PNG রপ্তানি করুন।',
    },
  ],
  localTitle: '১০০% আপনার ব্রাউজারে',
  localBefore:
    'উপরের প্রতিটি ধাপ আপনার নিজের ডিভাইসেই ঘটে। আপনার ফাইল কখনোই কোনো সার্ভারে আপলোড হয় না, কোনো অ্যাকাউন্ট নেই, এবং একবার লোড হলে রূপান্তরকারী অফলাইনেও কাজ করে। বিস্তারিত জানতে ',
  localLink: 'গোপনীয়তা নীতি',
  localAfter: ' পড়ুন।',
  cta: 'রূপান্তরকারী খুলুন',
};

const aboutBn: AboutContent = {
  pageTitle: 'সম্পর্কে — VectorForge',
  description:
    'VectorForge একটি বিনামূল্যের ব্রাউজার-ভিত্তিক SVG টুলকিট: SVG-কে JSX, React কম্পোনেন্ট, data URI, Base64 এবং PNG-তে রূপান্তর করুন — গোপনীয়ভাবে, আপলোড ছাড়া, সাইন-আপ ছাড়া এবং ওয়াটারমার্ক ছাড়া।',
  heading: 'VectorForge সম্পর্কে',
  intro: 'একটি বিনামূল্যের SVG টুলকিট যা ছবিকে কোডে — এবং কোডকে আবার ছবিতে — রূপান্তর করে, আর আপনার ফাইল কখনোই আপনার ডিভাইস ছেড়ে যায় না।',
  whyTitle: 'এটি কেন তৈরি',
  whyBody:
    'ডেভেলপার ও ডিজাইনাররা প্রতিদিন SVG-কে কোডের মধ্যে নিয়ে আসেন: React অ্যাপে ইনলাইন পেস্ট করা একটি আইকন, data-URI হিসেবে বসানো একটি লোগো, PNG হিসেবে রপ্তানি করা একটি চিত্র। অথচ যা আসলে শুধুই লেখার রূপান্তর, তার জন্য বেশিরভাগ রূপান্তরকারী আপনাকে অচেনা কারো সার্ভারে ফাইল আপলোড করতে বাধ্য করে। VectorForge পুরো কাজটি আপনার ব্রাউজারে স্থানীয়ভাবেই করে — দ্রুততর, এবং প্রতিশ্রুতির বদলে নকশাগতভাবেই গোপনীয়।',
  whatTitle: 'আপনি যা করতে পারেন',
  whatItems: [
    'একটি SVG-কে ১১টি আউটপুটে রূপান্তর করুন: Raw SVG, JSX, টাইপসহ React কম্পোনেন্ট, Vue SFC, Svelte, React Native, HTML <img> ট্যাগ, CSS data-URI, CSS মাস্ক, SVG স্প্রাইট এবং Base64।',
    'SVGO দিয়ে অপ্টিমাইজ করে হুবহু সাশ্রয় দেখুন, অথবা মার্কআপ সাজান ও মিনিফাই করুন।',
    'সিনট্যাক্স হাইলাইটিং, যাচাইকরণ এবং জুম ও প্যানসহ পাঁচটি পটভূমিতে লাইভ প্রিভিউসহ সম্পাদনা করুন।',
    'ব্যাচ মোডে একসাথে অনেক ফাইল রূপান্তর করুন এবং সব ZIP আকারে ডাউনলোড করুন।',
    '1x, 2x ও 4x-এ ঝকঝকে PNG রপ্তানি করুন।',
    'ডান-থেকে-বাম আরবি ও উর্দুসহ ২৩টি ভাষায় ব্যবহার করুন — এবং অফলাইনে চলা অ্যাপ হিসেবে ইনস্টল করুন।',
  ],
  principlesTitle: 'নীতি',
  principles: [
    { label: 'গোপনীয়:', text: 'কোনো আপলোড নেই, কোনো অ্যাকাউন্ট নেই, আপনার ফাইলের কোনো পর্যবেক্ষণ নেই।' },
    { label: 'বিনামূল্যে:', text: 'প্রতিটি সুবিধা, সাইন-আপ ছাড়া, ওয়াটারমার্ক ছাড়া, কোনো "প্রো" স্তর নেই।' },
    { label: 'সৎ:', text: 'সম্পাদকে যে কোড দেখছেন, হুবহু সেটাই রূপান্তরিত হয় — কোনো সার্ভার নীরবে কিছু বদলে দেয় না।' },
  ],
  ossTitle: 'ওপেন সোর্স',
  ossBefore: 'VectorForge আধুনিক ওয়েব প্রযুক্তি ও SVGO দিয়ে তৈরি, এবং এর সোর্স MIT লাইসেন্সে উপলব্ধ:',
  cta: 'রূপান্তরকারী খুলুন',
};

const privacyBn: PrivacyContent = {
  pageTitle: 'গোপনীয়তা নীতি — VectorForge',
  heading: 'গোপনীয়তা নীতি',
  updated: 'সর্বশেষ হালনাগাদ: অক্টোবর ২০২৬',
  sections: [
    {
      title: 'সম্পূর্ণ আপনার ব্রাউজারেই চলে',
      body: 'VectorForge সবকিছু আপনার ডিভাইসেই প্রক্রিয়া করে। আপনি যে ফাইল আপলোড করেন, যে কোড পেস্ট বা সম্পাদনা করেন, এবং টুল যা কিছু তৈরি করে — সবই আপনার ব্রাউজারে থাকে। কিছুই কোনো সার্ভারে আপলোড হয় না, এবং কোনো রূপান্তরের কাজ আপনার নিজের মেশিন ছাড়া কোথাও হয় না।',
    },
    {
      title: 'স্থানীয়ভাবে যা সংরক্ষণ হয়',
      body: 'VectorForge একমাত্র যা সংরক্ষণ করে তা হলো আপনার থিমের পছন্দ (হালকা, গাঢ় বা সিস্টেম), যা আপনার ব্রাউজারের লোকাল স্টোরেজে থাকে যাতে ফিরে এলে সাইটটি ঠিকভাবে দেখায়। এটি কোথাও পাঠানো হয় না।',
    },
    {
      title: 'বিশ্লেষণ',
      body: 'VectorForge বর্তমানে কোনো বিশ্লেষণই চালায় না — কোনো কুকি নেই, কোনো ট্র্যাকার নেই। ভবিষ্যতে কখনো বিশ্লেষণ যোগ হলেও তা হবে কুকিবিহীন, এবং এই পৃষ্ঠা সবার আগে তা জানাবে।',
    },
    {
      title: 'তৃতীয় পক্ষের অনুরোধ',
      body: 'সাইটটি তার ইন্টারফেস ফন্ট (Inter, JetBrains Mono) Google Fonts থেকে লোড করে। এর বাইরে এটি তৃতীয় পক্ষের কোনো সেবায় অনুরোধ করে না।',
    },
    { title: 'যোগাযোগ', body: 'এই নীতি সম্পর্কে প্রশ্ন?' },
  ],
};

/* ---------------- Assamese ---------------- */

const howAsm: HowContent = {
  pageTitle: 'ই কেনেকৈ কাম কৰে — VectorForge',
  description:
    'VectorForge এ আপোনাৰ ব্ৰাউজাৰতেই সম্পূৰ্ণকৈ SVG কোডলৈ কেনেকৈ ৰূপান্তৰ কৰে: SVG যোগ কৰক, লাইভ পূৰ্বদৰ্শনেৰে সম্পাদনা কৰক, অপ্টিমাইজ কৰক, ১১টা ফৰ্মেটলৈ ৰূপান্তৰ কৰক আৰু ৰপ্তানি কৰক — একো আপলোড নহয়।',
  heading: 'ই কেনেকৈ কাম কৰে',
  intro: 'এটা SVG ফাইলৰ পৰা প্ৰডাকচন-সাজু কোডলৈ মাত্ৰ পাঁচটা খোজত — আটাইবোৰ আপোনাৰ ব্ৰাউজাৰৰ ভিতৰতেই।',
  steps: [
    {
      title: '১. আপোনাৰ SVG যোগ কৰক',
      body: 'এটা ফাইল আপলোড কৰক, পৃষ্ঠাৰ যিকোনো ঠাইত টানি আনি এৰক, অথবা SVG কোড পোনে পোনে সম্পাদকত পেষ্ট কৰক। কেইবাটাও ফাইলৰ সৈতে কাম কৰিছে? আটাইবোৰ একেলগে এৰক — বেচ মোডে প্ৰতিটো লোড কৰে আৰু সকলো ফলাফল একেলগে এটা ZIP হিচাপে ডাউনলোড কৰিব পাৰে।',
    },
    {
      title: '২. লাইভ পূৰ্বদৰ্শনেৰে সম্পাদনা কৰক',
      body: 'আপুনি টাইপ কৰি থাকোঁতে সম্পাদকে আপোনাৰ মাৰ্কআপ উজ্জ্বল কৰে আৰু তাক পৰীক্ষা কৰে। পূৰ্বদৰ্শন লগে লগে আপডেট হয় — স্বচ্ছতা গ্ৰিডত, পোহৰ, বগা, আন্ধাৰ বা আপোনাৰ নিজা কাষ্টম পটভূমিত, জুম আৰু পেনসহ। SVG অবৈধ হ’লে খালী বাকচৰ সলনি আপুনি সঠিক সমস্যাটো দেখিব।',
    },
    {
      title: '৩. অপ্টিমাইজ আৰু পৰিষ্কাৰ কৰক',
      body: 'এটা ক্লিকত SVGO অপ্টিমাইজেচন চলে আৰু ঠিক কিমান ৰাহি হ’ল দেখুৱায়। আপুনি বিশৃংখল মাৰ্কআপ সজাবও পাৰে বা প্ৰডাকচনৰ বাবে মিনিফাইও কৰিব পাৰে। অনিৰাপদ যিকোনো বস্তু — স্ক্ৰিপ্ট, ইভেন্ট হেণ্ডলাৰ, বিদেশী অবজেক্ট — পূৰ্বদৰ্শনৰ পৰা স্বয়ংক্ৰিয়ভাৱে আঁতৰি যায়।',
    },
    {
      title: '৪. আপোনাৰ ফৰ্মেট বাছনি কৰক',
      body: 'এঘাৰটা আউটপুট, আটাইবোৰ সম্পাদকৰ কোডৰ পৰাই সৃষ্টি: Raw SVG, JSX, টাইপসহ React কম্পোনেন্ট (.tsx), Vue SFC, Svelte, React Native, HTML <img> টেগ, CSS data-URI, CSS মাস্ক, SVG স্প্ৰাইট আৰু Base64 — যি দেখিছে, ঠিক সেইটোৱেই পাব।',
    },
    {
      title: '৫. কপি, ডাউনলোড বা PNG ৰপ্তানি',
      body: 'ফলাফল পোনে পোনে ক্লিপবোৰ্ডলৈ কপি কৰক, ফাইল হিচাপে ডাউনলোড কৰক, অথবা ডিজাইন টুল আৰু নথিৰ বাবে 1x, 2x বা 4x ত চোকা PNG ৰপ্তানি কৰক।',
    },
  ],
  localTitle: '১০০% আপোনাৰ ব্ৰাউজাৰত',
  localBefore:
    'ওপৰৰ প্ৰতিটো খোজ আপোনাৰ নিজৰ ডিভাইচতেই ঘটে। আপোনাৰ ফাইল কেতিয়াও কোনো চাৰ্ভাৰলৈ আপলোড নহয়, কোনো একাউণ্ট নাই, আৰু এবাৰ লোড হ’লে ৰূপান্তৰক অফলাইনতো কাম কৰে। সবিশেষ জানিবলৈ ',
  localLink: 'গোপনীয়তা নীতি',
  localAfter: ' পঢ়ক।',
  cta: 'ৰূপান্তৰক খোলক',
};

const aboutAsm: AboutContent = {
  pageTitle: 'বিষয়ে — VectorForge',
  description:
    'VectorForge এটা বিনামূলীয়া ব্ৰাউজাৰ-ভিত্তিক SVG টুলকিট: SVG কো JSX, React কম্পোনেন্ট, data URI, Base64 আৰু PNG লৈ ৰূপান্তৰ কৰক — গোপনীয়ভাৱে, আপলোড অবিহনে, চাইন-আপ অবিহনে আৰু ৱাটাৰমাৰ্ক অবিহনে।',
  heading: 'VectorForge ৰ বিষয়ে',
  intro: 'এটা বিনামূলীয়া SVG টুলকিট যিয়ে ছবিক কোডলৈ — আৰু কোডক পুনৰ ছবিলৈ — ৰূপান্তৰ কৰে, আৰু আপোনাৰ ফাইল কেতিয়াও আপোনাৰ ডিভাইচ এৰি নাযায়।',
  whyTitle: 'ই কিয় আছে',
  whyBody:
    'ডেভেলপাৰ আৰু ডিজাইনাৰসকলে প্ৰতিদিনে SVG কোডৰ ভিতৰলৈ আনে: React এপত ইনলাইন পেষ্ট কৰা এটা আইকন, data-URI হিচাপে বহুওৱা এটা লোগো, PNG হিচাপে ৰপ্তানি কৰা এটা চিত্ৰ। যিটো আচলতে কেৱল লেখাৰ ৰূপান্তৰ, তাৰ বাবে বেছিভাগ ৰূপান্তৰকে আপোনাক অচিনাকি কাৰোবাৰ চাৰ্ভাৰলৈ ফাইল আপলোড কৰিবলৈ বাধ্য কৰে। VectorForge এ গোটেই কামটো আপোনাৰ ব্ৰাউজাৰত স্থানীয়ভাৱেই কৰে — বেগীও, আৰু প্ৰতিশ্ৰুতিৰ সলনি নক্সাৰেই গোপনীয়।',
  whatTitle: 'আপুনি কি কৰিব পাৰে',
  whatItems: [
    'এটা SVG ক ১১টা আউটপুটলৈ ৰূপান্তৰ কৰক: Raw SVG, JSX, টাইপসহ React কম্পোনেন্ট, Vue SFC, Svelte, React Native, HTML <img> টেগ, CSS data-URI, CSS মাস্ক, SVG স্প্ৰাইট আৰু Base64।',
    'SVGO ৰে অপ্টিমাইজ কৰি সঠিক ৰাহি চাওক, অথবা মাৰ্কআপ সজাওক আৰু মিনিফাই কৰক।',
    'চিনটেক্স হাইলাইটিং, পৰীক্ষণ আৰু জুম-পেনসহ পাঁচটা পটভূমিত লাইভ পূৰ্বদৰ্শনেৰে সম্পাদনা কৰক।',
    'বেচ মোডত একেলগে বহুতো ফাইল ৰূপান্তৰ কৰক আৰু আটাইবোৰ ZIP হিচাপে ডাউনলোড কৰক।',
    '1x, 2x আৰু 4x ত চোকা PNG ৰপ্তানি কৰক।',
    'সোঁফালৰ পৰা বাওঁফাললৈ যোৱা আৰবী আৰু উৰ্দুসহ ২৩টা ভাষাত ব্যৱহাৰ কৰক — আৰু অফলাইনত চলা এপ হিচাপে ইনষ্টল কৰক।',
  ],
  principlesTitle: 'নীতি',
  principles: [
    { label: 'গোপনীয়:', text: 'কোনো আপলোড নাই, কোনো একাউণ্ট নাই, আপোনাৰ ফাইলৰ কোনো অনুসৰণ নাই।' },
    { label: 'বিনামূলীয়া:', text: 'প্ৰতিটো সুবিধা, চাইন-আপ অবিহনে, ৱাটাৰমাৰ্ক অবিহনে, কোনো "প্ৰো" স্তৰ নাই।' },
    { label: 'সৎ:', text: 'সম্পাদকত যি কোড দেখিছে, ঠিক সেইটোৱেই ৰূপান্তৰিত হয় — কোনো চাৰ্ভাৰে নিৰৱে একো সলনি নকৰে।' },
  ],
  ossTitle: 'মুক্ত উৎস',
  ossBefore: 'VectorForge আধুনিক ৱেব প্ৰযুক্তি আৰু SVGO ৰে নিৰ্মিত, আৰু ইয়াৰ উৎস MIT অনুজ্ঞাপত্ৰৰ অধীনত উপলব্ধ:',
  cta: 'ৰূপান্তৰক খোলক',
};

const privacyAsm: PrivacyContent = {
  pageTitle: 'গোপনীয়তা নীতি — VectorForge',
  heading: 'গোপনীয়তা নীতি',
  updated: 'শেষ আপডেট: অক্টোবৰ ২০২৬',
  sections: [
    {
      title: 'সম্পূৰ্ণ আপোনাৰ ব্ৰাউজাৰতেই চলে',
      body: 'VectorForge এ সকলো আপোনাৰ ডিভাইচতেই প্ৰচেছ কৰে। আপুনি আপলোড কৰা ফাইল, পেষ্ট বা সম্পাদনা কৰা কোড, আৰু টুলে সৃষ্টি কৰা সকলো আপোনাৰ ব্ৰাউজাৰতেই থাকে — একো কোনো চাৰ্ভাৰলৈ আপলোড নহয়, আৰু কোনো ৰূপান্তৰৰ কাম আপোনাৰ নিজৰ মেচিনৰ বাহিৰে ক’তো নহয়।',
    },
    {
      title: 'স্থানীয়ভাৱে কি সংৰক্ষণ হয়',
      body: 'VectorForge এ সংৰক্ষণ কৰা একমাত্ৰ বস্তু হ’ল আপোনাৰ থিমৰ পছন্দ (পোহৰ, আন্ধাৰ বা ছিষ্টেম), যি আপোনাৰ ব্ৰাউজাৰৰ স্থানীয় সংৰক্ষণত থাকে যাতে ঘূৰি আহিলে ছাইটটো ঠিককৈ দেখা যায়। ই ক’লৈকো পঠিওৱা নহয়।',
    },
    {
      title: 'বিশ্লেষণ',
      body: 'VectorForge এ বৰ্তমান কোনো বিশ্লেষণেই নচলায় — কোনো কুকি নাই, কোনো ট্ৰেকাৰ নাই। ভৱিষ্যতে কেতিয়াবা বিশ্লেষণ যোগ হ’লেও সি কুকিবিহীন হ’ব, আৰু এই পৃষ্ঠাই সকলোতকৈ আগতে জনাব।',
    },
    {
      title: 'তৃতীয় পক্ষৰ অনুৰোধ',
      body: 'ছাইটটোৱে ইয়াৰ ইণ্টাৰফেচ ফণ্ট (Inter, JetBrains Mono) Google Fonts ৰ পৰা লোড কৰে। ইয়াৰ বাহিৰে ই তৃতীয় পক্ষৰ কোনো সেৱালৈ অনুৰোধ নকৰে।',
    },
    { title: 'যোগাযোগ', body: 'এই নীতিৰ বিষয়ে প্ৰশ্ন?' },
  ],
};

/* ---------------- Urdu ---------------- */

const howUr: HowContent = {
  pageTitle: 'یہ کیسے کام کرتا ہے — VectorForge',
  description:
    'VectorForge آپ کے براؤزر کے اندر ہی SVG کو کوڈ میں کیسے بدلتا ہے: SVG شامل کریں، لائیو پیش منظر کے ساتھ ترمیم کریں، آپٹیمائز کریں، 11 فارمیٹس میں بدلیں اور برآمد کریں — کچھ بھی اپ لوڈ نہیں ہوتا۔',
  heading: 'یہ کیسے کام کرتا ہے',
  intro: 'SVG فائل سے پروڈکشن کے لیے تیار کوڈ تک، صرف پانچ مراحل میں — اور یہ سب آپ کے براؤزر کے اندر۔',
  steps: [
    {
      title: '1. اپنی SVG شامل کریں',
      body: 'فائل اپ لوڈ کریں، اسے صفحے پر کہیں بھی گھسیٹ کر چھوڑیں، یا SVG کوڈ براہ راست ایڈیٹر میں چسپاں کریں۔ کئی فائلوں کے ساتھ کام کر رہے ہیں؟ سب کو ایک ساتھ چھوڑ دیں — بیچ موڈ ہر فائل لوڈ کرتا ہے اور تمام نتائج ایک ہی ZIP میں ڈاؤن لوڈ کر سکتا ہے۔',
    },
    {
      title: '2. لائیو پیش منظر کے ساتھ ترمیم کریں',
      body: 'آپ کے لکھتے ہی ایڈیٹر آپ کے مارک اپ کو نمایاں کرتا ہے اور اس کی جانچ کرتا ہے۔ پیش منظر فوراً تازہ ہوتا ہے — شفافیت کے گرڈ، ہلکے، سفید، گہرے یا آپ کے اپنے پس منظر پر، زوم اور پین کے ساتھ۔ اگر SVG درست نہ ہو تو خالی خانے کے بجائے آپ کو اصل مسئلہ نظر آتا ہے۔',
    },
    {
      title: '3. آپٹیمائز اور صفائی',
      body: 'ایک کلک میں SVGO آپٹیمائزیشن چلتی ہے اور بالکل دکھاتی ہے کہ کتنی بچت ہوئی۔ آپ بکھرے مارک اپ کو خوبصورت بھی بنا سکتے ہیں یا پروڈکشن کے لیے منیفائی بھی۔ جو کچھ غیر محفوظ ہے — اسکرپٹ، ایونٹ ہینڈلر، بیرونی آبجیکٹ — وہ پیش منظر سے خود ہی حذف ہو جاتا ہے۔',
    },
    {
      title: '4. اپنا فارمیٹ چنیں',
      body: 'گیارہ نتائج، سبھی ایڈیٹر کے کوڈ سے ہی بنتے ہیں: Raw SVG، JSX، ٹائپ شدہ React کمپوننٹ (.tsx)، Vue SFC، Svelte، React Native، HTML <img> ٹیگ، CSS data-URI، CSS ماسک، SVG سپرائٹ اور Base64 — جو دکھتا ہے، ویسا ہی ملتا ہے۔',
    },
    {
      title: '5. کاپی، ڈاؤن لوڈ یا PNG برآمد',
      body: 'نتیجہ براہ راست کلپ بورڈ پر کاپی کریں، فائل کے طور پر ڈاؤن لوڈ کریں، یا ڈیزائن ٹولز اور دستاویزات کے لیے 1x، 2x یا 4x پر صاف PNG برآمد کریں۔',
    },
  ],
  localTitle: '100% آپ کے براؤزر میں',
  localBefore:
    'اوپر کا ہر مرحلہ آپ کے اپنے آلے پر ہوتا ہے۔ آپ کی فائلیں کبھی کسی سرور پر اپ لوڈ نہیں ہوتیں، کوئی حساب نہیں ہے، اور ایک بار لوڈ ہونے پر کنورٹر آف لائن بھی چلتا رہتا ہے۔ تفصیل کے لیے ',
  localLink: 'رازداری کی پالیسی',
  localAfter: ' پڑھیں۔',
  cta: 'کنورٹر کھولیں',
};

const aboutUr: AboutContent = {
  pageTitle: 'تعارف — VectorForge',
  description:
    'VectorForge ایک مفت، براؤزر پر مبنی SVG ٹول کٹ ہے: SVG کو JSX، React کمپوننٹس، data URI، Base64 اور PNG میں بدلیں — نجی طریقے سے، بغیر اپ لوڈ، بغیر سائن اپ اور بغیر واٹر مارک۔',
  heading: 'VectorForge کے بارے میں',
  intro: 'ایک مفت SVG ٹول کٹ جو تصاویر کو کوڈ میں — اور کوڈ کو واپس تصاویر میں — بدلتا ہے، اور آپ کی فائلیں کبھی آپ کے آلے سے باہر نہیں جاتیں۔',
  whyTitle: 'یہ کیوں بنایا گیا',
  whyBody:
    'ڈویلپر اور ڈیزائنر ہر روز SVG کو کوڈ میں ڈالتے ہیں: کوئی آئیکن React ایپ میں اِن لائن چسپاں ہوتا ہے، کوئی لوگو data-URI بن کر جڑتا ہے، کوئی تصویر PNG بن کر برآمد ہوتی ہے۔ زیادہ تر کنورٹر اس کے لیے آپ کی فائلیں کسی اجنبی کے سرور پر اپ لوڈ کرواتے ہیں، جب کہ اصل میں یہ بس متن کی تبدیلی ہے۔ VectorForge سارا کام آپ کے براؤزر میں ہی کرتا ہے — تیز بھی، اور وعدے کے بجائے بناوٹ سے ہی نجی۔',
  whatTitle: 'آپ کیا کر سکتے ہیں',
  whatItems: [
    'ایک SVG کو 11 نتائج میں بدلیں: Raw SVG، JSX، ٹائپ شدہ React کمپوننٹ، Vue SFC، Svelte، React Native، HTML <img> ٹیگ، CSS data-URI، CSS ماسک، SVG سپرائٹ اور Base64۔',
    'SVGO سے آپٹیمائز کریں اور بالکل بچت دیکھیں، یا مارک اپ کو خوبصورت اور منیفائی کریں۔',
    'سنٹیکس ہائی لائٹنگ، جانچ اور پانچ پس منظر پر زوم-پین والے لائیو پیش منظر کے ساتھ ترمیم کریں۔',
    'بیچ موڈ میں کئی فائلیں ایک ساتھ بدلیں اور سب کچھ ZIP میں ڈاؤن لوڈ کریں۔',
    '1x، 2x اور 4x پر صاف PNG برآمد کریں۔',
    'اسے 23 زبانوں میں استعمال کریں — دائیں سے بائیں چلنے والی عربی اور اردو سمیت — اور آف لائن چلنے والے ایپ کی طرح انسٹال کریں۔',
  ],
  principlesTitle: 'ہمارے اصول',
  principles: [
    { label: 'نجی:', text: 'کوئی اپ لوڈ نہیں، کوئی حساب نہیں، آپ کی فائلوں کی کوئی نگرانی نہیں۔' },
    { label: 'مفت:', text: 'ہر سہولت، بغیر سائن اپ، بغیر واٹر مارک، کوئی "پرو" درجہ نہیں۔' },
    { label: 'ایماندار:', text: 'ایڈیٹر میں جو کوڈ دکھتا ہے، وہی بدلتا ہے — کوئی سرور چپکے سے کچھ نہیں بدلتا۔' },
  ],
  ossTitle: 'اوپن سورس',
  ossBefore: 'VectorForge جدید ویب ٹیکنالوجی اور SVGO سے بنا ہے، اور اس کا سورس MIT لائسنس کے تحت دستیاب ہے:',
  cta: 'کنورٹر کھولیں',
};

const privacyUr: PrivacyContent = {
  pageTitle: 'رازداری کی پالیسی — VectorForge',
  heading: 'رازداری کی پالیسی',
  updated: 'آخری تازہ کاری: اکتوبر 2026',
  sections: [
    {
      title: 'مکمل طور پر آپ کے براؤزر میں چلتا ہے',
      body: 'VectorForge سب کچھ آپ کے آلے پر ہی پروسیس کرتا ہے۔ آپ جو فائلیں اپ لوڈ کرتے ہیں، جو کوڈ چسپاں یا ترمیم کرتے ہیں، اور ٹول جو کچھ بھی بناتا ہے — سب آپ کے براؤزر میں ہی رہتا ہے۔ کچھ بھی کسی سرور پر اپ لوڈ نہیں ہوتا، اور کوئی بھی تبدیلی آپ کی اپنی مشین کے علاوہ کہیں نہیں ہوتی۔',
    },
    {
      title: 'مقامی طور پر کیا محفوظ ہوتا ہے',
      body: 'VectorForge صرف آپ کی تھیم کی پسند (ہلکی، گہری یا نظام) محفوظ کرتا ہے، جو آپ کے براؤزر کے مقامی ذخیرے میں رہتی ہے تاکہ اگلی بار سائٹ ٹھیک دکھے۔ یہ کہیں بھیجی نہیں جاتی۔',
    },
    {
      title: 'تجزیات',
      body: 'VectorForge فی الحال کوئی تجزیات نہیں چلاتا — نہ کوکیز، نہ ٹریکر۔ مستقبل میں کبھی تجزیات جڑا بھی تو وہ کوکی کے بغیر ہوگا، اور یہ صفحہ پہلے بتائے گا۔',
    },
    {
      title: 'فریقِ ثالث کی درخواستیں',
      body: 'سائٹ اپنے انٹرفیس فونٹ (Inter، JetBrains Mono) Google Fonts سے لوڈ کرتی ہے۔ اس کے علاوہ یہ کسی فریقِ ثالث کی خدمت سے کوئی درخواست نہیں کرتی۔',
    },
    { title: 'رابطہ', body: 'اس پالیسی کے بارے میں سوال؟' },
  ],
};

/* ---------------- Tamil ---------------- */

const howTa: HowContent = {
  pageTitle: 'இது எப்படி வேலை செய்கிறது — VectorForge',
  description:
    'VectorForge உங்கள் உலாவியிலேயே SVG-ஐக் குறியீடாக மாற்றுவது எப்படி: SVG-ஐச் சேர்க்கவும், நேரடி முன்னோட்டத்துடன் திருத்தவும், மேம்படுத்தவும், 11 வடிவங்களாக மாற்றவும், ஏற்றுமதி செய்யவும் — எதுவும் பதிவேற்றப்படுவதில்லை.',
  heading: 'இது எப்படி வேலை செய்கிறது',
  intro: 'SVG கோப்பிலிருந்து தயாரிப்புக்குத் தயாரான குறியீடு வரை, வெறும் ஐந்து படிகளில் — அனைத்தும் உங்கள் உலாவிக்குள்ளேயே.',
  steps: [
    {
      title: '1. உங்கள் SVG-ஐச் சேர்க்கவும்',
      body: 'ஒரு கோப்பைப் பதிவேற்றவும், அதைப் பக்கத்தில் எங்கும் இழுத்து விடவும், அல்லது SVG குறியீட்டை நேரடியாக ஆசிரியரில் ஒட்டவும். பல கோப்புகளுடன் வேலை செய்கிறீர்களா? அனைத்தையும் ஒரே நேரத்தில் விடுங்கள் — தொகுதி முறை ஒவ்வொன்றையும் ஏற்றும், எல்லா முடிவுகளையும் ஒரே ZIP ஆகப் பதிவிறக்க முடியும்.',
    },
    {
      title: '2. நேரடி முன்னோட்டத்துடன் திருத்தவும்',
      body: 'நீங்கள் தட்டச்சு செய்யும் போதே ஆசிரியர் உங்கள் மார்க்கப்பைத் தனிப்படுத்தி அதைச் சரிபார்க்கிறார். முன்னோட்டம் உடனடியாகப் புதுப்பிக்கப்படும் — வெளிப்படைத்தன்மை கட்டத்தில், வெளிர், வெள்ளை, இருண்ட அல்லது உங்கள் சொந்த தனிப்பயன் பின்னணியில், பெரிதாக்கம் மற்றும் நகர்த்தலுடன். SVG தவறானதாக இருந்தால், வெற்றுப் பெட்டிக்குப் பதிலாக சரியான சிக்கலைக் காண்பீர்கள்.',
    },
    {
      title: '3. மேம்படுத்தி சுத்தம் செய்யவும்',
      body: 'ஒரே கிளிக்கில் SVGO மேம்படுத்தல் இயங்கி, எவ்வளவு சேமித்தீர்கள் என்பதைத் துல்லியமாகக் காட்டும். குழப்பமான மார்க்கப்பை அழகாக்கவும் அல்லது தயாரிப்புக்காகச் சுருக்கவும் முடியும். பாதுகாப்பற்ற எதுவும் — ஸ்கிரிப்டுகள், நிகழ்வு கையாளுநர்கள், வெளிப்பொருட்கள் — முன்னோட்டத்திலிருந்து தானாகவே நீக்கப்படும்.',
    },
    {
      title: '4. உங்கள் வடிவத்தைத் தேர்ந்தெடுக்கவும்',
      body: 'பதினொரு வெளியீடுகள், அனைத்தும் ஆசிரியரில் உள்ள குறியீட்டிலிருந்தே உருவாக்கப்படுகின்றன: Raw SVG, JSX, வகைப்படுத்தப்பட்ட React கூறு (.tsx), Vue SFC, Svelte, React Native, HTML <img> குறிச்சொல், CSS data-URI, CSS முகமூடி, SVG ஸ்பிரைட் மற்றும் Base64 — நீங்கள் காண்பது சரியாக அதுவே கிடைக்கும்.',
    },
    {
      title: '5. நகலெடுக்கவும், பதிவிறக்கவும் அல்லது PNG ஏற்றுமதி செய்யவும்',
      body: 'முடிவை நேரடியாக கிளிப்போர்டுக்கு நகலெடுக்கவும், கோப்பாகப் பதிவிறக்கவும், அல்லது வடிவமைப்பு கருவிகள் மற்றும் ஆவணங்களுக்காக 1x, 2x அல்லது 4x இல் தெளிவான PNG-ஐ ஏற்றுமதி செய்யவும்.',
    },
  ],
  localTitle: '100% உங்கள் உலாவியில்',
  localBefore:
    'மேலே உள்ள ஒவ்வொரு படியும் உங்கள் சொந்த சாதனத்திலேயே நடக்கிறது. உங்கள் கோப்புகள் ஒருபோதும் சேவையகத்தில் பதிவேற்றப்படுவதில்லை, கணக்குகள் இல்லை, ஒருமுறை ஏற்றப்பட்ட பின் மாற்றி ஆஃப்லைனிலும் வேலை செய்யும். விவரங்களுக்கு ',
  localLink: 'தனியுரிமைக் கொள்கையைப்',
  localAfter: ' படிக்கவும்.',
  cta: 'மாற்றியைத் திறக்கவும்',
};

const aboutTa: AboutContent = {
  pageTitle: 'பற்றி — VectorForge',
  description:
    'VectorForge ஒரு இலவச, உலாவி அடிப்படையிலான SVG கருவித்தொகுப்பு: SVG-ஐ JSX, React கூறுகள், data URI, Base64 மற்றும் PNG ஆக மாற்றவும் — தனிப்பட்ட முறையில், பதிவேற்றங்கள் இல்லாமல், பதிவு இல்லாமல், நீர்க்குறிகள் இல்லாமல்.',
  heading: 'VectorForge பற்றி',
  intro: 'படங்களைக் குறியீடாகவும் — குறியீட்டை மீண்டும் படங்களாகவும் — மாற்றும் ஒரு இலவச SVG கருவித்தொகுப்பு, உங்கள் கோப்புகள் உங்கள் சாதனத்தை விட்டு ஒருபோதும் வெளியேறாமல்.',
  whyTitle: 'இது ஏன் உள்ளது',
  whyBody:
    'டெவலப்பர்களும் வடிவமைப்பாளர்களும் ஒவ்வொரு நாளும் SVG-களைக் குறியீட்டுக்குள் கொண்டு செல்கிறார்கள்: React செயலியில் இன்லைனாக ஒட்டப்பட்ட சின்னம், data-URI ஆகப் பொதிந்த லோகோ, PNG ஆக ஏற்றுமதி செய்யப்பட்ட விளக்கப்படம். அநேக மாற்றிகள், சாராம்சத்தில் வெறும் உரை மாற்றமான ஒன்றிற்காக, உங்கள் கோப்புகளை அந்நியரின் சேவையகத்தில் பதிவேற்றச் செய்கின்றன. VectorForge முழு வேலையையும் உங்கள் உலாவியிலேயே உள்ளூரில் செய்கிறது — வேகமாகவும், வாக்குறுதியால் அல்ல, வடிவமைப்பால் தனிப்பட்டதாகவும்.',
  whatTitle: 'நீங்கள் செய்யக்கூடியவை',
  whatItems: [
    'ஒரு SVG-ஐ 11 வெளியீடுகளாக மாற்றவும்: Raw SVG, JSX, வகைப்படுத்தப்பட்ட React கூறு, Vue SFC, Svelte, React Native, HTML <img> குறிச்சொல், CSS data-URI, CSS முகமூடி, SVG ஸ்பிரைட் மற்றும் Base64.',
    'SVGO மூலம் மேம்படுத்தி சரியான சேமிப்பைக் காணவும், அல்லது மார்க்கப்பை அழகாக்கி சுருக்கவும்.',
    'தொடரியல் தனிப்படுத்தல், சரிபார்ப்பு மற்றும் பெரிதாக்கம்-நகர்த்தலுடன் ஐந்து பின்னணிகளில் நேரடி முன்னோட்டத்துடன் திருத்தவும்.',
    'தொகுதி முறையில் பல கோப்புகளை ஒரே நேரத்தில் மாற்றி, அனைத்தையும் ZIP ஆகப் பதிவிறக்கவும்.',
    '1x, 2x மற்றும் 4x இல் தெளிவான PNG-களை ஏற்றுமதி செய்யவும்.',
    'வலமிருந்து இடமாகச் செல்லும் அரபு மற்றும் உருது உட்பட 23 மொழிகளில் பயன்படுத்தவும் — ஆஃப்லைனில் வேலை செய்யும் செயலியாக நிறுவவும்.',
  ],
  principlesTitle: 'கொள்கைகள்',
  principles: [
    { label: 'தனிப்பட்டது:', text: 'பதிவேற்றங்கள் இல்லை, கணக்குகள் இல்லை, உங்கள் கோப்புகளைக் கண்காணிப்பது இல்லை.' },
    { label: 'இலவசம்:', text: 'ஒவ்வொரு அம்சமும், பதிவு இல்லாமல், நீர்க்குறிகள் இல்லாமல், "புரோ" அடுக்கு இல்லாமல்.' },
    { label: 'நேர்மை:', text: 'ஆசிரியரில் நீங்கள் காணும் குறியீடு சரியாக அதுவே மாற்றப்படுகிறது — எந்தச் சேவையகமும் அமைதியாக எதையும் மீண்டும் எழுதுவதில்லை.' },
  ],
  ossTitle: 'திறந்த மூலம்',
  ossBefore: 'VectorForge நவீன வலைத் தொழில்நுட்பம் மற்றும் SVGO மூலம் உருவாக்கப்பட்டது, அதன் மூலம் MIT உரிமத்தின் கீழ் கிடைக்கிறது:',
  cta: 'மாற்றியைத் திறக்கவும்',
};

const privacyTa: PrivacyContent = {
  pageTitle: 'தனியுரிமைக் கொள்கை — VectorForge',
  heading: 'தனியுரிமைக் கொள்கை',
  updated: 'கடைசியாகப் புதுப்பிக்கப்பட்டது: அக்டோபர் 2026',
  sections: [
    {
      title: 'முழுவதும் உங்கள் உலாவியில் இயங்குகிறது',
      body: 'VectorForge எல்லாவற்றையும் உங்கள் சாதனத்திலேயே செயலாக்குகிறது. நீங்கள் பதிவேற்றும் கோப்புகள், ஒட்டும் அல்லது திருத்தும் குறியீடு, கருவி உருவாக்கும் அனைத்தும் உங்கள் உலாவியிலேயே தங்கும் — எதுவும் எந்தச் சேவையகத்திலும் பதிவேற்றப்படுவதில்லை, எந்த மாற்று வேலையும் உங்கள் சொந்த இயந்திரத்தைத் தவிர வேறு எங்கும் நடப்பதில்லை.',
    },
    {
      title: 'உள்ளூரில் சேமிக்கப்படுவது',
      body: 'VectorForge சேமிக்கும் ஒரே விஷயம் உங்கள் தீம் விருப்பம் (வெளிர், இருண்ட அல்லது அமைப்பு), நீங்கள் திரும்பி வரும்போது தளம் சரியாகத் தோன்ற உங்கள் உலாவியின் உள்ளூர் சேமிப்பில் வைக்கப்படுகிறது. அது எங்கும் அனுப்பப்படுவதில்லை.',
    },
    {
      title: 'பகுப்பாய்வு',
      body: 'VectorForge தற்போது எந்தப் பகுப்பாய்வையும் இயக்குவதில்லை — குக்கீகள் இல்லை, கண்காணிப்பாளர்கள் இல்லை. எதிர்காலத்தில் பகுப்பாய்வு சேர்க்கப்பட்டால், அது குக்கீ இல்லாததாக இருக்கும், இந்தப் பக்கம் அதை முதலில் சொல்லும்.',
    },
    {
      title: 'மூன்றாம் தரப்பு கோரிக்கைகள்',
      body: 'தளம் தனது இடைமுக எழுத்துருக்களை (Inter, JetBrains Mono) Google Fonts இலிருந்து ஏற்றுகிறது. அதைத் தவிர, அது மூன்றாம் தரப்பு சேவைகளுக்கு எந்தக் கோரிக்கையும் செய்வதில்லை.',
    },
    { title: 'தொடர்பு', body: 'இந்தக் கொள்கை பற்றிய கேள்விகள்?' },
  ],
};

/* ---------------- Telugu ---------------- */

const howTe: HowContent = {
  pageTitle: 'ఇది ఎలా పనిచేస్తుంది — VectorForge',
  description:
    'VectorForge మీ బ్రౌజర్‌లోనే పూర్తిగా SVGని కోడ్‌గా ఎలా మారుస్తుంది: SVGని జోడించండి, లైవ్ ప్రివ్యూతో సవరించండి, ఆప్టిమైజ్ చేయండి, 11 ఫార్మాట్‌లలోకి మార్చండి మరియు ఎగుమతి చేయండి — ఏదీ అప్‌లోడ్ కాదు.',
  heading: 'ఇది ఎలా పనిచేస్తుంది',
  intro: 'SVG ఫైల్ నుండి ప్రొడక్షన్‌కు సిద్ధంగా ఉన్న కోడ్ వరకు, కేవలం ఐదు దశల్లో — అన్నీ మీ బ్రౌజర్‌లోనే.',
  steps: [
    {
      title: '1. మీ SVGని జోడించండి',
      body: 'ఫైల్‌ను అప్‌లోడ్ చేయండి, దానిని పేజీలో ఎక్కడైనా లాగి వదలండి, లేదా SVG కోడ్‌ను నేరుగా ఎడిటర్‌లో అతికించండి. అనేక ఫైళ్లతో పనిచేస్తున్నారా? అన్నిటినీ ఒకేసారి వదలండి — బ్యాచ్ మోడ్ ప్రతిదాన్ని లోడ్ చేస్తుంది, అన్ని ఫలితాలను కలిపి ఒకే ZIPగా డౌన్‌లోడ్ చేయగలదు.',
    },
    {
      title: '2. లైవ్ ప్రివ్యూతో సవరించండి',
      body: 'మీరు టైప్ చేస్తున్నప్పుడే ఎడిటర్ మీ మార్కప్‌ను హైలైట్ చేసి ధృవీకరిస్తుంది. ప్రివ్యూ తక్షణమే నవీకరించబడుతుంది — పారదర్శకత గ్రిడ్‌పై, లేత, తెలుపు, ముదురు లేదా మీ స్వంత కస్టమ్ నేపథ్యంపై, జూమ్ మరియు పాన్‌తో. SVG చెల్లకపోతే, ఖాళీ పెట్టెకు బదులుగా మీకు ఖచ్చితమైన సమస్య కనిపిస్తుంది.',
    },
    {
      title: '3. ఆప్టిమైజ్ చేసి శుభ్రం చేయండి',
      body: 'ఒకే క్లిక్‌తో SVGO ఆప్టిమైజేషన్ నడుస్తుంది, ఎంత ఆదా అయిందో ఖచ్చితంగా చూపుతుంది. మీరు చిందరవందర మార్కప్‌ను అందంగా తీర్చిదిద్దవచ్చు లేదా ప్రొడక్షన్ కోసం మినిఫై చేయవచ్చు. అసురక్షితమైనదేదైనా — స్క్రిప్ట్‌లు, ఈవెంట్ హ్యాండ్లర్‌లు, విదేశీ వస్తువులు — ప్రివ్యూ నుండి స్వయంచాలకంగా తీసివేయబడుతుంది.',
    },
    {
      title: '4. మీ ఫార్మాట్‌ను ఎంచుకోండి',
      body: 'పదకొండు అవుట్‌పుట్‌లు, అన్నీ ఎడిటర్‌లోని కోడ్ నుండే ఉత్పత్తి అవుతాయి: Raw SVG, JSX, టైప్ చేసిన React కాంపోనెంట్ (.tsx), Vue SFC, Svelte, React Native, HTML <img> ట్యాగ్, CSS data-URI, CSS మాస్క్, SVG స్ప్రైట్ మరియు Base64 — మీరు చూసేదే ఖచ్చితంగా మీకు లభిస్తుంది.',
    },
    {
      title: '5. కాపీ చేయండి, డౌన్‌లోడ్ చేయండి లేదా PNG ఎగుమతి చేయండి',
      body: 'ఫలితాన్ని నేరుగా క్లిప్‌బోర్డ్‌కు కాపీ చేయండి, ఫైల్‌గా డౌన్‌లోడ్ చేయండి, లేదా డిజైన్ సాధనాలు మరియు పత్రాల కోసం 1x, 2x లేదా 4x వద్ద స్పష్టమైన PNGని ఎగుమతి చేయండి.',
    },
  ],
  localTitle: '100% మీ బ్రౌజర్‌లో',
  localBefore:
    'పైన పేర్కొన్న ప్రతి దశ మీ స్వంత పరికరంలోనే జరుగుతుంది. మీ ఫైళ్లు ఎప్పటికీ సర్వర్‌కు అప్‌లోడ్ కావు, ఖాతాలు లేవు, ఒకసారి లోడ్ అయిన తర్వాత కన్వర్టర్ ఆఫ్‌లైన్‌లో కూడా పనిచేస్తూనే ఉంటుంది. వివరాల కోసం ',
  localLink: 'గోప్యతా విధానాన్ని',
  localAfter: ' చదవండి.',
  cta: 'కన్వర్టర్‌ను తెరవండి',
};

const aboutTe: AboutContent = {
  pageTitle: 'గురించి — VectorForge',
  description:
    'VectorForge అనేది ఉచిత, బ్రౌజర్ ఆధారిత SVG టూల్‌కిట్: SVGని JSX, React కాంపోనెంట్‌లు, data URI, Base64 మరియు PNGగా మార్చండి — ప్రైవేట్‌గా, అప్‌లోడ్‌లు లేకుండా, సైన్-అప్ లేకుండా మరియు వాటర్‌మార్క్‌లు లేకుండా.',
  heading: 'VectorForge గురించి',
  intro: 'చిత్రాలను కోడ్‌గా — మరియు కోడ్‌ను తిరిగి చిత్రాలుగా — మార్చే ఉచిత SVG టూల్‌కిట్, మీ ఫైళ్లు మీ పరికరాన్ని ఎప్పటికీ వదిలిపెట్టకుండా.',
  whyTitle: 'ఇది ఎందుకు ఉంది',
  whyBody:
    'డెవలపర్‌లు మరియు డిజైనర్‌లు ప్రతిరోజూ SVGలను కోడ్‌లోకి తరలిస్తారు: React యాప్‌లో ఇన్‌లైన్‌గా అతికించిన చిహ్నం, data-URIగా పొందుపరిచిన లోగో, PNGగా ఎగుమతి చేసిన దృష్టాంతం. చాలా కన్వర్టర్‌లు, సారాంశంలో కేవలం వచన మార్పిడి అయిన పని కోసం, మీ ఫైళ్లను అపరిచితుడి సర్వర్‌కు అప్‌లోడ్ చేయమని కోరుతాయి. VectorForge మొత్తం పనిని మీ బ్రౌజర్‌లోనే స్థానికంగా చేస్తుంది — వేగంగా, మరియు వాగ్దానంతో కాకుండా రూపకల్పనతోనే ప్రైవేట్‌గా.',
  whatTitle: 'మీరు ఏమి చేయగలరు',
  whatItems: [
    'ఒక SVGని 11 అవుట్‌పుట్‌లుగా మార్చండి: Raw SVG, JSX, టైప్ చేసిన React కాంపోనెంట్, Vue SFC, Svelte, React Native, HTML <img> ట్యాగ్, CSS data-URI, CSS మాస్క్, SVG స్ప్రైట్ మరియు Base64.',
    'SVGOతో ఆప్టిమైజ్ చేసి ఖచ్చితమైన ఆదాను చూడండి, లేదా మార్కప్‌ను అందంగా తీర్చి మినిఫై చేయండి.',
    'సింటాక్స్ హైలైటింగ్, ధృవీకరణ మరియు జూమ్-పాన్‌తో ఐదు నేపథ్యాలపై లైవ్ ప్రివ్యూతో సవరించండి.',
    'బ్యాచ్ మోడ్‌లో అనేక ఫైళ్లను ఒకేసారి మార్చి, అన్నిటినీ ZIPగా డౌన్‌లోడ్ చేయండి.',
    '1x, 2x మరియు 4x వద్ద స్పష్టమైన PNGలను ఎగుమతి చేయండి.',
    'కుడి-నుండి-ఎడమకు వెళ్లే అరబిక్ మరియు ఉర్దూతో సహా 23 భాషల్లో ఉపయోగించండి — మరియు ఆఫ్‌లైన్‌లో పనిచేసే యాప్‌గా ఇన్‌స్టాల్ చేయండి.',
  ],
  principlesTitle: 'సూత్రాలు',
  principles: [
    { label: 'ప్రైవేట్:', text: 'అప్‌లోడ్‌లు లేవు, ఖాతాలు లేవు, మీ ఫైళ్ల ట్రాకింగ్ లేదు.' },
    { label: 'ఉచితం:', text: 'ప్రతి ఫీచర్, సైన్-అప్ లేకుండా, వాటర్‌మార్క్‌లు లేకుండా, "ప్రో" స్థాయి లేకుండా.' },
    { label: 'నిజాయితీ:', text: 'ఎడిటర్‌లో మీరు చూసే కోడ్ ఖచ్చితంగా అదే మార్చబడుతుంది — ఏ సర్వరూ నిశ్శబ్దంగా దేనినీ తిరిగి రాయదు.' },
  ],
  ossTitle: 'ఓపెన్ సోర్స్',
  ossBefore: 'VectorForge ఆధునిక వెబ్ సాంకేతికత మరియు SVGOతో నిర్మించబడింది, దాని సోర్స్ MIT లైసెన్స్ కింద అందుబాటులో ఉంది:',
  cta: 'కన్వర్టర్‌ను తెరవండి',
};

const privacyTe: PrivacyContent = {
  pageTitle: 'గోప్యతా విధానం — VectorForge',
  heading: 'గోప్యతా విధానం',
  updated: 'చివరిగా నవీకరించబడింది: అక్టోబర్ 2026',
  sections: [
    {
      title: 'పూర్తిగా మీ బ్రౌజర్‌లో నడుస్తుంది',
      body: 'VectorForge ప్రతిదాన్ని మీ పరికరంలోనే ప్రాసెస్ చేస్తుంది. మీరు అప్‌లోడ్ చేసే ఫైళ్లు, అతికించే లేదా సవరించే కోడ్, మరియు సాధనం ఉత్పత్తి చేసే ప్రతిదీ మీ బ్రౌజర్‌లోనే ఉంటుంది — ఏదీ ఏ సర్వర్‌కు అప్‌లోడ్ కాదు, ఏ మార్పిడి పనీ మీ స్వంత మెషిన్ తప్ప మరెక్కడా జరగదు.',
    },
    {
      title: 'స్థానికంగా ఏమి నిల్వ చేయబడుతుంది',
      body: 'VectorForge నిల్వ చేసే ఏకైక విషయం మీ థీమ్ ప్రాధాన్యత (లేత, ముదురు లేదా సిస్టమ్), మీరు తిరిగి వచ్చినప్పుడు సైట్ సరిగ్గా కనిపించేలా మీ బ్రౌజర్ స్థానిక నిల్వలో ఉంచబడుతుంది. అది ఎక్కడికీ పంపబడదు.',
    },
    {
      title: 'విశ్లేషణలు',
      body: 'VectorForge ప్రస్తుతం ఎలాంటి విశ్లేషణలను నడపదు — కుక్కీలు లేవు, ట్రాకర్‌లు లేవు. భవిష్యత్తులో విశ్లేషణలు ఎప్పుడైనా జోడించబడితే, అవి కుక్కీలు లేకుండా ఉంటాయి, ఈ పేజీ దానిని ముందుగా చెబుతుంది.',
    },
    {
      title: 'మూడవ పక్ష అభ్యర్థనలు',
      body: 'సైట్ తన ఇంటర్‌ఫేస్ ఫాంట్‌లను (Inter, JetBrains Mono) Google Fonts నుండి లోడ్ చేస్తుంది. అది తప్ప, అది మూడవ పక్ష సేవలకు ఎలాంటి అభ్యర్థనలు చేయదు.',
    },
    { title: 'సంప్రదించండి', body: 'ఈ విధానం గురించి ప్రశ్నలు?' },
  ],
};

/* ---------------- Marathi ---------------- */

const howMr: HowContent = {
  pageTitle: 'हे कसे काम करते — VectorForge',
  description:
    'VectorForge तुमच्या ब्राउझरमध्येच SVG चे कोडमध्ये रूपांतर कसे करते: SVG जोडा, लाइव्ह पूर्वावलोकनासह संपादित करा, ऑप्टिमाइझ करा, 11 स्वरूपांत बदला आणि निर्यात करा — काहीही अपलोड होत नाही.',
  heading: 'हे कसे काम करते',
  intro: 'SVG फाइलपासून प्रोडक्शन-रेडी कोडपर्यंत, केवळ पाच पावलांत — आणि ती सर्व तुमच्या ब्राउझरमध्येच.',
  steps: [
    {
      title: '1. तुमची SVG जोडा',
      body: 'फाइल अपलोड करा, ती पानावर कुठेही ओढून सोडा, किंवा SVG कोड थेट संपादकात चिकटवा. अनेक फाइल्ससोबत काम करताय? सर्व एकाच वेळी सोडा — बॅच मोड प्रत्येक फाइल लोड करतो आणि सर्व निकाल एकत्र एकाच ZIP मध्ये डाउनलोड करू शकतो.',
    },
    {
      title: '2. लाइव्ह पूर्वावलोकनासह संपादित करा',
      body: 'तुम्ही टाइप करत असतानाच संपादक तुमचे मार्कअप हायलाइट करतो आणि ते तपासतो. पूर्वावलोकन त्वरित अद्यतनित होते — पारदर्शकता ग्रिडवर, फिकट, पांढऱ्या, गडद किंवा तुमच्या स्वतःच्या सानुकूल पार्श्वभूमीवर, झूम आणि पॅनसह. SVG अवैध असल्यास रिकाम्या बॉक्सऐवजी तुम्हाला नेमकी समस्या दिसते.',
    },
    {
      title: '3. ऑप्टिमाइझ आणि स्वच्छता',
      body: 'एका क्लिकमध्ये SVGO ऑप्टिमायझेशन चालते आणि नेमकी किती बचत झाली ते दिसते. तुम्ही विखुरलेले मार्कअप सुसज्जही करू शकता किंवा प्रोडक्शनसाठी मिनिफायही करू शकता. असुरक्षित जे काही आहे — स्क्रिप्ट, इव्हेंट हँडलर, परदेशी ऑब्जेक्ट — ते पूर्वावलोकनातून आपोआप काढले जाते.',
    },
    {
      title: '4. तुमचे स्वरूप निवडा',
      body: 'अकरा आउटपुट, सर्व संपादकातील कोडवरूनच तयार: Raw SVG, JSX, टाइप केलेला React घटक (.tsx), Vue SFC, Svelte, React Native, HTML <img> टॅग, CSS data-URI, CSS मास्क, SVG स्प्राइट आणि Base64 — जे दिसते, तेच मिळते.',
    },
    {
      title: '5. कॉपी, डाउनलोड किंवा PNG निर्यात',
      body: 'निकाल थेट क्लिपबोर्डवर कॉपी करा, फाइल म्हणून डाउनलोड करा, किंवा डिझाइन साधने व कागदपत्रांसाठी 1x, 2x किंवा 4x वर स्पष्ट PNG निर्यात करा.',
    },
  ],
  localTitle: '100% तुमच्या ब्राउझरमध्ये',
  localBefore:
    'वरील प्रत्येक पाऊल तुमच्या स्वतःच्या डिव्हाइसवरच घडते. तुमच्या फाइल्स कधीही कोणत्याही सर्व्हरवर अपलोड होत नाहीत, कोणतेही खाते नाही, आणि एकदा लोड झाल्यावर रूपांतरक ऑफलाइनही काम करत राहते. तपशीलांसाठी ',
  localLink: 'गोपनीयता धोरण',
  localAfter: ' वाचा.',
  cta: 'रूपांतरक उघडा',
};

const aboutMr: AboutContent = {
  pageTitle: 'बद्दल — VectorForge',
  description:
    'VectorForge हे एक विनामूल्य, ब्राउझर-आधारित SVG टूलकिट आहे: SVG चे JSX, React घटक, data URI, Base64 आणि PNG मध्ये रूपांतर करा — गोपनीयतेने, अपलोडशिवाय, साइन-अपशिवाय आणि वॉटरमार्कशिवाय.',
  heading: 'VectorForge बद्दल',
  intro: 'एक विनामूल्य SVG टूलकिट जे प्रतिमांचे कोडमध्ये — आणि कोडचे पुन्हा प्रतिमांमध्ये — रूपांतर करते, आणि तुमच्या फाइल्स तुमचे डिव्हाइस कधीही सोडत नाहीत.',
  whyTitle: 'हे का बनवले',
  whyBody:
    'डेव्हलपर आणि डिझायनर दररोज SVG कोडमध्ये आणतात: React अ‍ॅपमध्ये इनलाइन चिकटवलेले चिन्ह, data-URI म्हणून बसवलेला लोगो, PNG म्हणून निर्यात केलेले चित्र. बहुतेक रूपांतरके, जे प्रत्यक्षात केवळ मजकूराचे रूपांतर आहे, त्यासाठी तुमच्या फाइल्स अनोळखीच्या सर्व्हरवर अपलोड करायला लावतात. VectorForge संपूर्ण काम तुमच्या ब्राउझरमध्येच स्थानिकरित्या करते — जलदही, आणि वचनाऐवजी रचनेनेच गोपनीय.',
  whatTitle: 'तुम्ही काय करू शकता',
  whatItems: [
    'एक SVG अकरा आउटपुटमध्ये बदला: Raw SVG, JSX, टाइप केलेला React घटक, Vue SFC, Svelte, React Native, HTML <img> टॅग, CSS data-URI, CSS मास्क, SVG स्प्राइट आणि Base64.',
    'SVGO ने ऑप्टिमाइझ करून नेमकी बचत पहा, किंवा मार्कअप सुसज्ज व मिनिफाय करा.',
    'सिंटॅक्स हायलाइटिंग, तपासणी आणि झूम-पॅनसह पाच पार्श्वभूमींवर लाइव्ह पूर्वावलोकनासह संपादित करा.',
    'बॅच मोडमध्ये अनेक फाइल्स एकाच वेळी बदला आणि सर्व ZIP म्हणून डाउनलोड करा.',
    '1x, 2x आणि 4x वर स्पष्ट PNG निर्यात करा.',
    'उजवीकडून डावीकडे जाणाऱ्या अरबी व उर्दूसह 23 भाषांमध्ये वापरा — आणि ऑफलाइन चालणारे अ‍ॅप म्हणून स्थापित करा.',
  ],
  principlesTitle: 'आमची तत्त्वे',
  principles: [
    { label: 'गोपनीय:', text: 'कोणतेही अपलोड नाही, कोणतेही खाते नाही, तुमच्या फाइल्सचा कोणताही मागोवा नाही.' },
    { label: 'विनामूल्य:', text: 'प्रत्येक सुविधा, साइन-अपशिवाय, वॉटरमार्कशिवाय, कोणताही "प्रो" स्तर नाही.' },
    { label: 'प्रामाणिक:', text: 'संपादकात जो कोड दिसतो, तोच बदलला जातो — कोणताही सर्व्हर गुपचूप काही बदलत नाही.' },
  ],
  ossTitle: 'मुक्त स्रोत',
  ossBefore: 'VectorForge आधुनिक वेब तंत्रज्ञान आणि SVGO ने बनवलेले आहे, आणि याचा स्रोत MIT परवान्याअंतर्गत उपलब्ध आहे:',
  cta: 'रूपांतरक उघडा',
};

const privacyMr: PrivacyContent = {
  pageTitle: 'गोपनीयता धोरण — VectorForge',
  heading: 'गोपनीयता धोरण',
  updated: 'शेवटचे अद्यतन: ऑक्टोबर 2026',
  sections: [
    {
      title: 'पूर्णपणे तुमच्या ब्राउझरमध्ये चालते',
      body: 'VectorForge सर्व काही तुमच्या डिव्हाइसवरच प्रक्रिया करते. तुम्ही अपलोड केलेल्या फाइल्स, तुम्ही चिकटवलेला किंवा संपादित केलेला कोड, आणि साधन जे काही तयार करते — सर्व तुमच्या ब्राउझरमध्येच राहते. काहीही कोणत्याही सर्व्हरवर अपलोड होत नाही, आणि कोणतेही रूपांतराचे काम तुमच्या स्वतःच्या यंत्राखेरीज कुठेही होत नाही.',
    },
    {
      title: 'स्थानिक पातळीवर काय साठवले जाते',
      body: 'VectorForge फक्त तुमची थीम पसंती (फिकट, गडद किंवा प्रणाली) साठवते, जी तुमच्या ब्राउझरच्या स्थानिक साठ्यात राहते जेणेकरून परत आल्यावर साइट योग्य दिसेल. ती कुठेही पाठवली जात नाही.',
    },
    {
      title: 'विश्लेषण',
      body: 'VectorForge सध्या कोणतेही विश्लेषण चालवत नाही — कुकीज नाहीत, ट्रॅकर नाहीत. भविष्यात कधी विश्लेषण जोडले गेले तरी ते कुकी-विरहित असेल, आणि हे पान आधी सांगेल.',
    },
    {
      title: 'तृतीय-पक्ष विनंत्या',
      body: 'साइट तिचे इंटरफेस फॉन्ट (Inter, JetBrains Mono) Google Fonts वरून लोड करते. त्याखेरीज ती तृतीय-पक्ष सेवांना कोणतीही विनंती करत नाही.',
    },
    { title: 'संपर्क', body: 'या धोरणाबद्दल प्रश्न?' },
  ],
};

/* ---------------- Turkish ---------------- */

const howTr: HowContent = {
  pageTitle: 'Nasıl Çalışır — VectorForge',
  description:
    'VectorForge SVG’yi tamamen tarayıcınızda koda nasıl dönüştürür: SVG ekleyin, canlı önizlemeyle düzenleyin, optimize edin, 11 biçime dönüştürün ve dışa aktarın — hiçbir şey asla yüklenmez.',
  heading: 'Nasıl çalışır',
  intro: 'Bir SVG dosyasından üretime hazır koda beş adımda — hepsi tarayıcınızın içinde.',
  steps: [
    {
      title: '1. SVG’nizi ekleyin',
      body: 'Bir dosya yükleyin, sayfanın herhangi bir yerine sürükleyip bırakın ya da SVG kodunu doğrudan düzenleyiciye yapıştırın. Birden çok dosyayla mı çalışıyorsunuz? Hepsini birden bırakın — toplu mod her birini yükler ve tüm sonuçları tek bir ZIP olarak birlikte indirebilir.',
    },
    {
      title: '2. Canlı önizlemeyle düzenleyin',
      body: 'Düzenleyici, siz yazarken işaretlemenizi vurgular ve doğrular. Önizleme anında güncellenir — şeffaflık ızgarası, açık, beyaz, koyu veya kendi özel arka planınız üzerinde, yakınlaştırma ve kaydırma ile. SVG geçersizse boş bir kutu yerine sorunun tam olarak ne olduğunu görürsünüz.',
    },
    {
      title: '3. Optimize edin ve temizleyin',
      body: 'Tek tıklama SVGO optimizasyonunu çalıştırır ve tam olarak ne kadar kazandığınızı gösterir. Dağınık işaretlemeyi güzelleştirebilir veya üretim için küçültebilirsiniz. Güvenli olmayan her şey — betikler, olay işleyiciler, yabancı nesneler — önizlemeden otomatik olarak çıkarılır.',
    },
    {
      title: '4. Biçiminizi seçin',
      body: 'On bir çıktı, hepsi düzenleyicideki koddan üretilir: Ham SVG, JSX, tipli bir React bileşeni (.tsx), Vue SFC, Svelte, React Native, bir HTML <img> etiketi, bir CSS data-URI, bir CSS maskesi, bir SVG sprite ve Base64 — ne görürseniz tam olarak onu alırsınız.',
    },
    {
      title: '5. Kopyalayın, indirin veya PNG dışa aktarın',
      body: 'Sonucu doğrudan panonuza kopyalayın, dosya olarak indirin ya da tasarım araçları ve belgeler için 1x, 2x veya 4x netliğinde PNG dışa aktarın.',
    },
  ],
  localTitle: '%100 tarayıcınızda',
  localBefore:
    'Yukarıdaki her adım kendi cihazınızda gerçekleşir. Dosyalarınız asla bir sunucuya yüklenmez, hesap yoktur ve dönüştürücü yüklendikten sonra çevrimdışı da çalışmaya devam eder. Ayrıntılar için ',
  localLink: 'gizlilik politikasını',
  localAfter: ' okuyun.',
  cta: 'Dönüştürücüyü aç',
};

const aboutTr: AboutContent = {
  pageTitle: 'Hakkında — VectorForge',
  description:
    'VectorForge, ücretsiz ve tarayıcı tabanlı bir SVG araç setidir: SVG’yi JSX, React bileşenleri, data URI, Base64 ve PNG’ye dönüştürün — gizli bir şekilde, yüklemeden, kayıt olmadan ve filigransız.',
  heading: 'VectorForge hakkında',
  intro: 'Görüntüleri koda — ve kodu yeniden görüntülere — dönüştüren ücretsiz bir SVG araç seti; dosyalarınız cihazınızdan asla ayrılmaz.',
  whyTitle: 'Neden var',
  whyBody:
    'Geliştiriciler ve tasarımcılar her gün SVG’leri koda taşır: bir React uygulamasına satır içi yapıştırılan bir simge, data-URI olarak gömülen bir logo, PNG olarak dışa aktarılan bir illüstrasyon. Çoğu dönüştürücü, özünde bir metin dönüşümü olan bir iş için dosyalarınızı bir yabancının sunucusuna yükletir. VectorForge tüm işi tarayıcınızda yerel olarak yapar — daha hızlı ve vaatle değil, tasarımla gizli.',
  whatTitle: 'Neler yapabilirsiniz',
  whatItems: [
    'Bir SVG’yi 11 çıktıya dönüştürün: Ham SVG, JSX, tipli bir React bileşeni, Vue SFC, Svelte, React Native, bir HTML <img> etiketi, bir CSS data-URI, bir CSS maskesi, bir SVG sprite ve Base64.',
    'SVGO ile optimize edip tam tasarrufu görün ya da işaretlemeyi güzelleştirip küçültün.',
    'Sözdizimi vurgulama, doğrulama ve yakınlaştırma-kaydırma ile beş arka planda canlı önizlemeyle düzenleyin.',
    'Toplu modda çok sayıda dosyayı tek seferde dönüştürün ve hepsini ZIP olarak indirin.',
    '1x, 2x ve 4x netliğinde PNG’ler dışa aktarın.',
    'Sağdan sola Arapça ve Urduca dahil 23 dilde kullanın — ve çevrimdışı çalışan bir uygulama olarak kurun.',
  ],
  principlesTitle: 'İlkeler',
  principles: [
    { label: 'Gizli:', text: 'yükleme yok, hesap yok, dosyalarınızın takibi yok.' },
    { label: 'Ücretsiz:', text: 'her özellik, kayıt yok, filigran yok, "pro" katmanı yok.' },
    { label: 'Dürüst:', text: 'düzenleyicide gördüğünüz kod, dönüştürülen kodun ta kendisidir — hiçbir sunucu sessizce bir şeyleri yeniden yazmaz.' },
  ],
  ossTitle: 'Açık kaynak',
  ossBefore: 'VectorForge, modern web teknolojisi ve SVGO ile inşa edilmiştir ve kaynak kodu MIT lisansı altında mevcuttur:',
  cta: 'Dönüştürücüyü aç',
};

const privacyTr: PrivacyContent = {
  pageTitle: 'Gizlilik Politikası — VectorForge',
  heading: 'Gizlilik Politikası',
  updated: 'Son güncelleme: Ekim 2026',
  sections: [
    {
      title: 'Tamamen tarayıcınızda çalışır',
      body: 'VectorForge her şeyi cihazınızda işler. Yüklediğiniz dosyalar, yapıştırdığınız veya düzenlediğiniz kod ve aracın ürettiği her şey tarayıcınızda kalır — hiçbir şey herhangi bir sunucuya yüklenmez ve hiçbir dönüştürme işi kendi makinenizden başka bir yerde gerçekleşmez.',
    },
    {
      title: 'Yerel olarak ne saklanır',
      body: 'VectorForge’un sakladığı tek şey tema tercihinizdir (açık, koyu veya sistem); geri döndüğünüzde sitenin doğru görünmesi için tarayıcınızın yerel depolamasında tutulur. Hiçbir yere gönderilmez.',
    },
    {
      title: 'Analitik',
      body: 'VectorForge şu anda hiçbir analitik çalıştırmıyor — çerez yok, izleyici yok. Gelecekte analitik eklenirse çerezsiz olacak ve bu sayfa bunu ilk söyleyen olacak.',
    },
    {
      title: 'Üçüncü taraf istekleri',
      body: 'Site, arayüz yazı tiplerini (Inter, JetBrains Mono) Google Fonts’tan yükler. Bunun dışında üçüncü taraf hizmetlere hiçbir istekte bulunmaz.',
    },
    { title: 'İletişim', body: 'Bu politika hakkında sorularınız mı var?' },
  ],
};

/* ---------------- Italian ---------------- */

const howIt: HowContent = {
  pageTitle: 'Come funziona — VectorForge',
  description:
    'Come VectorForge converte SVG in codice interamente nel tuo browser: aggiungi un SVG, modificalo con anteprima dal vivo, ottimizza, converti in 11 formati ed esporta — non viene caricato nulla.',
  heading: 'Come funziona',
  intro: 'Da un file SVG a codice pronto per la produzione in cinque passaggi — tutti dentro il tuo browser.',
  steps: [
    {
      title: '1. Aggiungi il tuo SVG',
      body: 'Carica un file, trascinalo e rilascialo ovunque nella pagina, oppure incolla il codice SVG direttamente nell’editor. Lavori con più file? Rilasciali tutti insieme — la modalità batch carica ciascuno di essi e può scaricare tutti i risultati insieme in un unico ZIP.',
    },
    {
      title: '2. Modifica con anteprima dal vivo',
      body: 'L’editor evidenzia il markup e lo convalida mentre digiti. L’anteprima si aggiorna all’istante — su griglia di trasparenza, sfondo chiaro, bianco, scuro o personalizzato, con zoom e panoramica. Se l’SVG non è valido, vedi il problema esatto invece di un riquadro vuoto.',
    },
    {
      title: '3. Ottimizza e ripulisci',
      body: 'Un clic esegue l’ottimizzazione SVGO e mostra esattamente quanto hai risparmiato. Puoi anche abbellire markup disordinato o minificarlo per la produzione. Tutto ciò che non è sicuro — script, gestori di eventi, oggetti estranei — viene rimosso dall’anteprima automaticamente.',
    },
    {
      title: '4. Scegli il formato',
      body: 'Undici output, tutti generati dal codice nell’editor: SVG grezzo, JSX, un componente React tipizzato (.tsx), Vue SFC, Svelte, React Native, un tag HTML <img>, un data-URI CSS, una maschera CSS, uno sprite SVG e Base64 — ciò che vedi è esattamente ciò che ottieni.',
    },
    {
      title: '5. Copia, scarica o esporta in PNG',
      body: 'Copia il risultato direttamente negli appunti, scaricalo come file oppure esporta un PNG nitido a 1x, 2x o 4x per strumenti di design e documenti.',
    },
  ],
  localTitle: '100% nel tuo browser',
  localBefore:
    'Ogni passaggio qui sopra avviene sul tuo dispositivo. I tuoi file non vengono mai caricati su un server, non ci sono account e il convertitore continua a funzionare offline una volta caricato. Leggi la ',
  localLink: 'informativa sulla privacy',
  localAfter: ' per i dettagli.',
  cta: 'Apri il convertitore',
};

const aboutIt: AboutContent = {
  pageTitle: 'Informazioni — VectorForge',
  description:
    'VectorForge è un toolkit SVG gratuito basato sul browser: converti SVG in JSX, componenti React, data URI, Base64 e PNG — in privato, senza caricamenti, senza registrazione e senza filigrane.',
  heading: 'Informazioni su VectorForge',
  intro: 'Un toolkit SVG gratuito che trasforma le immagini in codice — e il codice di nuovo in immagini — senza che i tuoi file lascino mai il tuo dispositivo.',
  whyTitle: 'Perché esiste',
  whyBody:
    'Sviluppatori e designer portano gli SVG nel codice ogni giorno: un’icona incollata inline in un’app React, un logo incorporato come data-URI, un’illustrazione esportata come PNG. La maggior parte dei convertitori ti fa caricare i file sul server di uno sconosciuto per quella che, in fondo, è una trasformazione di testo. VectorForge fa tutto il lavoro localmente nel tuo browser — più veloce, e privato per progettazione, non per promessa.',
  whatTitle: 'Cosa puoi fare',
  whatItems: [
    'Convertire un SVG in 11 output: SVG grezzo, JSX, un componente React tipizzato, Vue SFC, Svelte, React Native, un tag HTML <img>, un data-URI CSS, una maschera CSS, uno sprite SVG e Base64.',
    'Ottimizzare con SVGO e vedere il risparmio esatto, oppure abbellire e minificare il markup.',
    'Modificare con evidenziazione della sintassi, convalida e anteprima dal vivo su cinque sfondi, con zoom e panoramica.',
    'Convertire molti file in una volta in modalità batch e scaricare tutto come ZIP.',
    'Esportare PNG nitidi a 1x, 2x e 4x.',
    'Usarlo in 23 lingue — incluso arabo e urdu da destra a sinistra — e installarlo come app che funziona offline.',
  ],
  principlesTitle: 'Principi',
  principles: [
    { label: 'Privato:', text: 'nessun caricamento, nessun account, nessun tracciamento dei tuoi file.' },
    { label: 'Gratuito:', text: 'ogni funzione, nessuna registrazione, nessuna filigrana, nessun piano «pro».' },
    { label: 'Onesto:', text: 'il codice che vedi nell’editor è esattamente quello che viene convertito — nessun server riscrive nulla in silenzio.' },
  ],
  ossTitle: 'Open source',
  ossBefore: 'VectorForge è costruito con moderne tecnologie web e SVGO, e il suo codice sorgente è disponibile con licenza MIT:',
  cta: 'Apri il convertitore',
};

const privacyIt: PrivacyContent = {
  pageTitle: 'Informativa sulla privacy — VectorForge',
  heading: 'Informativa sulla privacy',
  updated: 'Ultimo aggiornamento: ottobre 2026',
  sections: [
    {
      title: 'Funziona interamente nel tuo browser',
      body: 'VectorForge elabora tutto sul tuo dispositivo. I file che carichi, il codice che incolli o modifichi e tutto ciò che lo strumento genera restano nel tuo browser — nulla viene caricato su alcun server e nessun lavoro di conversione avviene altrove che sulla tua macchina.',
    },
    {
      title: 'Cosa viene salvato localmente',
      body: 'L’unica cosa che VectorForge salva è la tua preferenza di tema (chiaro, scuro o di sistema), conservata nella memoria locale del browser affinché il sito appaia corretto al tuo ritorno. Non viene mai inviata da nessuna parte.',
    },
    {
      title: 'Analisi',
      body: 'VectorForge attualmente non esegue alcuna analisi — niente cookie, niente tracker. Se un domani venisse aggiunta un’analisi, sarà senza cookie, e questa pagina lo dirà per prima.',
    },
    {
      title: 'Richieste a terzi',
      body: 'Il sito carica i suoi caratteri di interfaccia (Inter, JetBrains Mono) da Google Fonts. A parte questo, non effettua richieste a servizi di terze parti.',
    },
    { title: 'Contatti', body: 'Domande su questa informativa?' },
  ],
};

/* ---------------- Dutch ---------------- */

const howNl: HowContent = {
  pageTitle: 'Hoe het werkt — VectorForge',
  description:
    'Hoe VectorForge SVG volledig in je browser naar code omzet: voeg een SVG toe, bewerk met live voorbeeld, optimaliseer, zet om naar 11 formaten en exporteer — er wordt nooit iets geüpload.',
  heading: 'Hoe het werkt',
  intro: 'Van een SVG-bestand naar productierijpe code in vijf stappen — allemaal binnen je browser.',
  steps: [
    {
      title: '1. Voeg je SVG toe',
      body: 'Upload een bestand, sleep het naar een willekeurige plek op de pagina, of plak SVG-code rechtstreeks in de editor. Werk je met meerdere bestanden? Zet ze er allemaal tegelijk neer — de batchmodus laadt elk bestand en kan alle resultaten samen als één ZIP downloaden.',
    },
    {
      title: '2. Bewerk met live voorbeeld',
      body: 'De editor markeert je markup en valideert die terwijl je typt. Het voorbeeld werkt direct bij — op een transparantieraster, lichte, witte, donkere of je eigen aangepaste achtergrond, met zoomen en slepen. Is de SVG ongeldig, dan zie je precies wat het probleem is in plaats van een leeg vak.',
    },
    {
      title: '3. Optimaliseer en ruim op',
      body: 'Eén klik voert SVGO-optimalisatie uit en laat precies zien hoeveel je bespaard hebt. Je kunt rommelige markup ook netjes opmaken of minificeren voor productie. Alles wat onveilig is — scripts, eventhandlers, vreemde objecten — wordt automatisch uit het voorbeeld verwijderd.',
    },
    {
      title: '4. Kies je formaat',
      body: 'Elf uitvoerformaten, allemaal gegenereerd uit de code in de editor: Ruwe SVG, JSX, een getypeerde React-component (.tsx), Vue SFC, Svelte, React Native, een HTML <img>-tag, een CSS data-URI, een CSS-masker, een SVG-sprite en Base64 — wat je ziet, is precies wat je krijgt.',
    },
    {
      title: '5. Kopieer, download of exporteer als PNG',
      body: 'Kopieer het resultaat rechtstreeks naar je klembord, download het als bestand, of exporteer een scherpe PNG op 1x, 2x of 4x voor ontwerptools en documenten.',
    },
  ],
  localTitle: '100% in je browser',
  localBefore:
    'Elke stap hierboven gebeurt op je eigen apparaat. Je bestanden worden nooit naar een server geüpload, er zijn geen accounts, en de converter blijft na het laden ook offline werken. Lees het ',
  localLink: 'privacybeleid',
  localAfter: ' voor de details.',
  cta: 'Open de converter',
};

const aboutNl: AboutContent = {
  pageTitle: 'Over — VectorForge',
  description:
    'VectorForge is een gratis, browsergebaseerde SVG-toolkit: zet SVG om naar JSX, React-componenten, data-URI’s, Base64 en PNG — privé, zonder uploaden, zonder aanmelden en zonder watermerken.',
  heading: 'Over VectorForge',
  intro: 'Een gratis SVG-toolkit die afbeeldingen omzet in code — en code terug in afbeeldingen — zonder dat je bestanden ooit je apparaat verlaten.',
  whyTitle: 'Waarom het bestaat',
  whyBody:
    'Ontwikkelaars en ontwerpers brengen SVG’s elke dag naar code: een pictogram dat inline in een React-app wordt geplakt, een logo dat als data-URI wordt ingesloten, een illustratie die als PNG wordt geëxporteerd. De meeste converters laten je je bestanden uploaden naar de server van een vreemde voor wat in wezen een teksttransformatie is. VectorForge doet al het werk lokaal in je browser — sneller, en privé door ontwerp in plaats van door belofte.',
  whatTitle: 'Wat je kunt doen',
  whatItems: [
    'Eén SVG omzetten naar 11 uitvoerformaten: Ruwe SVG, JSX, een getypeerde React-component, Vue SFC, Svelte, React Native, een HTML <img>-tag, een CSS data-URI, een CSS-masker, een SVG-sprite en Base64.',
    'Optimaliseren met SVGO en de exacte besparing zien, of markup netjes opmaken en minificeren.',
    'Bewerken met syntaxmarkering, validatie en een live voorbeeld op vijf achtergronden, met zoomen en slepen.',
    'Veel bestanden tegelijk omzetten in batchmodus en alles als ZIP downloaden.',
    'Scherpe PNG’s exporteren op 1x, 2x en 4x.',
    'Het in 23 talen gebruiken — inclusief Arabisch en Urdu van rechts naar links — en installeren als een app die offline werkt.',
  ],
  principlesTitle: 'Principes',
  principles: [
    { label: 'Privé:', text: 'geen uploads, geen accounts, geen tracking van je bestanden.' },
    { label: 'Gratis:', text: 'elke functie, geen aanmelding, geen watermerken, geen "pro"-laag.' },
    { label: 'Eerlijk:', text: 'de code die je in de editor ziet, is precies de code die wordt omgezet — geen server herschrijft stilletjes iets.' },
  ],
  ossTitle: 'Open source',
  ossBefore: 'VectorForge is gebouwd met moderne webtechnologie en SVGO, en de broncode is beschikbaar onder de MIT-licentie:',
  cta: 'Open de converter',
};

const privacyNl: PrivacyContent = {
  pageTitle: 'Privacybeleid — VectorForge',
  heading: 'Privacybeleid',
  updated: 'Laatst bijgewerkt: oktober 2026',
  sections: [
    {
      title: 'Draait volledig in je browser',
      body: 'VectorForge verwerkt alles op je apparaat. Bestanden die je uploadt, code die je plakt of bewerkt, en alles wat de tool genereert, blijft in je browser — er wordt niets naar een server geüpload en er vindt geen conversiewerk plaats ergens anders dan op je eigen machine.',
    },
    {
      title: 'Wat lokaal wordt opgeslagen',
      body: 'Het enige dat VectorForge opslaat, is je themavoorkeur (licht, donker of systeem), bewaard in de lokale opslag van je browser zodat de site er goed uitziet als je terugkomt. Het wordt nooit ergens naartoe gestuurd.',
    },
    {
      title: 'Analyse',
      body: 'VectorForge draait momenteel helemaal geen analyse — geen cookies, geen trackers. Als er ooit analyse wordt toegevoegd, zal die cookieloos zijn, en deze pagina zal dat als eerste vermelden.',
    },
    {
      title: 'Verzoeken aan derden',
      body: 'De site laadt haar interfacelettertypen (Inter, JetBrains Mono) van Google Fonts. Afgezien daarvan doet ze geen verzoeken aan diensten van derden.',
    },
    { title: 'Contact', body: 'Vragen over dit beleid?' },
  ],
};

/* ---------------- Polish ---------------- */

const howPl: HowContent = {
  pageTitle: 'Jak to działa — VectorForge',
  description:
    'Jak VectorForge zamienia SVG na kod w całości w Twojej przeglądarce: dodaj SVG, edytuj z podglądem na żywo, optymalizuj, konwertuj do 11 formatów i eksportuj — nic nigdy nie jest wysyłane.',
  heading: 'Jak to działa',
  intro: 'Od pliku SVG do kodu gotowego do produkcji w pięciu krokach — wszystkie w Twojej przeglądarce.',
  steps: [
    {
      title: '1. Dodaj swój SVG',
      body: 'Prześlij plik, przeciągnij go i upuść w dowolnym miejscu strony albo wklej kod SVG bezpośrednio do edytora. Pracujesz z wieloma plikami? Upuść je wszystkie naraz — tryb wsadowy wczyta każdy z nich i może pobrać wszystkie wyniki razem jako jeden ZIP.',
    },
    {
      title: '2. Edytuj z podglądem na żywo',
      body: 'Edytor podświetla znaczniki i sprawdza je podczas pisania. Podgląd aktualizuje się natychmiast — na siatce przezroczystości, jasnym, białym, ciemnym lub Twoim własnym tle, z powiększaniem i przesuwaniem. Jeśli SVG jest nieprawidłowy, zobaczysz dokładny problem zamiast pustego pola.',
    },
    {
      title: '3. Optymalizuj i porządkuj',
      body: 'Jedno kliknięcie uruchamia optymalizację SVGO i pokazuje dokładnie, ile zaoszczędziłeś. Możesz też uporządkować niechlujne znaczniki albo zminifikować je do produkcji. Wszystko, co niebezpieczne — skrypty, obsługi zdarzeń, obiekty obce — jest automatycznie usuwane z podglądu.',
    },
    {
      title: '4. Wybierz format',
      body: 'Jedenaście wyników, wszystkie generowane z kodu w edytorze: Surowy SVG, JSX, typowany komponent React (.tsx), Vue SFC, Svelte, React Native, tag HTML <img>, data-URI CSS, maska CSS, sprite SVG i Base64 — to, co widzisz, jest dokładnie tym, co otrzymujesz.',
    },
    {
      title: '5. Kopiuj, pobieraj lub eksportuj PNG',
      body: 'Skopiuj wynik prosto do schowka, pobierz go jako plik albo wyeksportuj ostry PNG w 1x, 2x lub 4x do narzędzi projektowych i dokumentów.',
    },
  ],
  localTitle: '100% w Twojej przeglądarce',
  localBefore:
    'Każdy krok powyżej odbywa się na Twoim własnym urządzeniu. Twoje pliki nigdy nie są wysyłane na serwer, nie ma kont, a konwerter po wczytaniu działa dalej także offline. Przeczytaj ',
  localLink: 'politykę prywatności',
  localAfter: ', aby poznać szczegóły.',
  cta: 'Otwórz konwerter',
};

const aboutPl: AboutContent = {
  pageTitle: 'O nas — VectorForge',
  description:
    'VectorForge to darmowy, przeglądarkowy zestaw narzędzi SVG: konwertuj SVG do JSX, komponentów React, data URI, Base64 i PNG — prywatnie, bez przesyłania, bez rejestracji i bez znaków wodnych.',
  heading: 'O VectorForge',
  intro: 'Darmowy zestaw narzędzi SVG, który zamienia obrazy na kod — a kod z powrotem na obrazy — przy czym Twoje pliki nigdy nie opuszczają Twojego urządzenia.',
  whyTitle: 'Dlaczego istnieje',
  whyBody:
    'Programiści i projektanci codziennie przenoszą SVG do kodu: ikonę wklejoną inline do aplikacji React, logo osadzone jako data-URI, ilustrację wyeksportowaną jako PNG. Większość konwerterów każe Ci przesyłać pliki na serwer obcej osoby w zamian za coś, co w istocie jest przekształceniem tekstu. VectorForge wykonuje całą pracę lokalnie w Twojej przeglądarce — szybciej i prywatnie z założenia, a nie z obietnicy.',
  whatTitle: 'Co możesz robić',
  whatItems: [
    'Zamieniać jeden SVG na 11 wyników: Surowy SVG, JSX, typowany komponent React, Vue SFC, Svelte, React Native, tag HTML <img>, data-URI CSS, maskę CSS, sprite SVG i Base64.',
    'Optymalizować przez SVGO i widzieć dokładne oszczędności albo porządkować i minifikować znaczniki.',
    'Edytować z podświetlaniem składni, walidacją i podglądem na żywo na pięciu tłach, z powiększaniem i przesuwaniem.',
    'Konwertować wiele plików naraz w trybie wsadowym i pobierać wszystko jako ZIP.',
    'Eksportować ostre PNG w 1x, 2x i 4x.',
    'Korzystać w 23 językach — w tym po arabsku i urdu od prawej do lewej — i instalować jako aplikację działającą offline.',
  ],
  principlesTitle: 'Zasady',
  principles: [
    { label: 'Prywatność:', text: 'brak przesyłania, brak kont, brak śledzenia Twoich plików.' },
    { label: 'Darmowość:', text: 'każda funkcja, bez rejestracji, bez znaków wodnych, bez poziomu „pro”.' },
    { label: 'Uczciwość:', text: 'kod, który widzisz w edytorze, jest dokładnie tym, który jest konwertowany — żaden serwer nie przepisuje niczego po cichu.' },
  ],
  ossTitle: 'Otwarte źródło',
  ossBefore: 'VectorForge jest zbudowany w nowoczesnej technologii webowej i SVGO, a jego kod źródłowy jest dostępny na licencji MIT:',
  cta: 'Otwórz konwerter',
};

const privacyPl: PrivacyContent = {
  pageTitle: 'Polityka prywatności — VectorForge',
  heading: 'Polityka prywatności',
  updated: 'Ostatnia aktualizacja: październik 2026',
  sections: [
    {
      title: 'Działa w całości w Twojej przeglądarce',
      body: 'VectorForge przetwarza wszystko na Twoim urządzeniu. Pliki, które przesyłasz, kod, który wklejasz lub edytujesz, oraz wszystko, co generuje narzędzie, pozostaje w Twojej przeglądarce — nic nie jest przesyłane na żaden serwer, a żadna praca konwersji nie odbywa się nigdzie poza Twoją własną maszyną.',
    },
    {
      title: 'Co jest zapisywane lokalnie',
      body: 'Jedyną rzeczą, którą VectorForge zapisuje, jest Twoja preferencja motywu (jasny, ciemny lub systemowy), przechowywana w pamięci lokalnej przeglądarki, aby strona wyglądała poprawnie, gdy wrócisz. Nigdy nie jest nigdzie wysyłana.',
    },
    {
      title: 'Analityka',
      body: 'VectorForge obecnie nie uruchamia żadnej analityki — żadnych plików cookie, żadnych trackerów. Jeśli analityka kiedykolwiek zostanie dodana, będzie bez plików cookie, a ta strona powie o tym jako pierwsza.',
    },
    {
      title: 'Żądania do stron trzecich',
      body: 'Strona wczytuje swoje fonty interfejsu (Inter, JetBrains Mono) z Google Fonts. Poza tym nie wykonuje żadnych żądań do usług stron trzecich.',
    },
    { title: 'Kontakt', body: 'Pytania dotyczące tej polityki?' },
  ],
};

/* ---------------- Vietnamese ---------------- */

const howVi: HowContent = {
  pageTitle: 'Cách hoạt động — VectorForge',
  description:
    'Cách VectorForge chuyển SVG thành mã hoàn toàn trong trình duyệt của bạn: thêm SVG, chỉnh sửa với xem trước trực tiếp, tối ưu hóa, chuyển đổi sang 11 định dạng và xuất — không bao giờ tải lên bất cứ thứ gì.',
  heading: 'Cách hoạt động',
  intro: 'Từ tệp SVG đến mã sẵn sàng cho sản xuất chỉ trong năm bước — tất cả đều bên trong trình duyệt của bạn.',
  steps: [
    {
      title: '1. Thêm SVG của bạn',
      body: 'Tải lên một tệp, kéo và thả nó vào bất cứ đâu trên trang, hoặc dán mã SVG thẳng vào trình soạn thảo. Làm việc với nhiều tệp? Thả tất cả cùng lúc — chế độ hàng loạt tải từng tệp và có thể tải xuống mọi kết quả cùng nhau trong một ZIP duy nhất.',
    },
    {
      title: '2. Chỉnh sửa với xem trước trực tiếp',
      body: 'Trình soạn thảo tô sáng mã đánh dấu của bạn và kiểm tra nó trong khi bạn gõ. Bản xem trước cập nhật ngay lập tức — trên lưới trong suốt, nền sáng, trắng, tối hoặc nền tùy chỉnh của riêng bạn, với thu phóng và kéo. Nếu SVG không hợp lệ, bạn sẽ thấy vấn đề chính xác thay vì một ô trống.',
    },
    {
      title: '3. Tối ưu hóa và dọn dẹp',
      body: 'Một cú nhấp chạy tối ưu hóa SVGO và cho thấy chính xác bạn đã tiết kiệm được bao nhiêu. Bạn cũng có thể làm đẹp mã đánh dấu lộn xộn hoặc thu nhỏ nó cho sản xuất. Mọi thứ không an toàn — tập lệnh, trình xử lý sự kiện, đối tượng lạ — đều tự động bị loại khỏi bản xem trước.',
    },
    {
      title: '4. Chọn định dạng của bạn',
      body: 'Mười một đầu ra, tất cả đều được tạo từ mã trong trình soạn thảo: SVG thô, JSX, một component React có kiểu (.tsx), Vue SFC, Svelte, React Native, thẻ HTML <img>, data-URI CSS, mặt nạ CSS, SVG sprite và Base64 — những gì bạn thấy chính xác là những gì bạn nhận được.',
    },
    {
      title: '5. Sao chép, tải xuống hoặc xuất PNG',
      body: 'Sao chép kết quả thẳng vào bảng tạm, tải xuống dưới dạng tệp, hoặc xuất PNG sắc nét ở 1x, 2x hoặc 4x cho các công cụ thiết kế và tài liệu.',
    },
  ],
  localTitle: '100% trong trình duyệt của bạn',
  localBefore:
    'Mọi bước ở trên đều diễn ra trên thiết bị của chính bạn. Tệp của bạn không bao giờ được tải lên máy chủ, không có tài khoản, và bộ chuyển đổi tiếp tục hoạt động ngoại tuyến sau khi đã tải. Đọc ',
  localLink: 'chính sách bảo mật',
  localAfter: ' để biết chi tiết.',
  cta: 'Mở bộ chuyển đổi',
};

const aboutVi: AboutContent = {
  pageTitle: 'Giới thiệu — VectorForge',
  description:
    'VectorForge là bộ công cụ SVG miễn phí chạy trong trình duyệt: chuyển SVG thành JSX, component React, data URI, Base64 và PNG — riêng tư, không tải lên, không đăng ký và không hình mờ.',
  heading: 'Giới thiệu VectorForge',
  intro: 'Một bộ công cụ SVG miễn phí biến hình ảnh thành mã — và mã trở lại thành hình ảnh — mà tệp của bạn không bao giờ rời khỏi thiết bị của bạn.',
  whyTitle: 'Vì sao nó tồn tại',
  whyBody:
    'Các nhà phát triển và nhà thiết kế đưa SVG vào mã mỗi ngày: một biểu tượng dán nội tuyến vào ứng dụng React, một logo nhúng dưới dạng data-URI, một hình minh họa xuất ra PNG. Hầu hết các bộ chuyển đổi bắt bạn tải tệp lên máy chủ của người lạ cho một việc mà về bản chất chỉ là biến đổi văn bản. VectorForge thực hiện toàn bộ công việc ngay trong trình duyệt của bạn — nhanh hơn, và riêng tư theo thiết kế chứ không phải theo lời hứa.',
  whatTitle: 'Bạn có thể làm gì',
  whatItems: [
    'Chuyển một SVG thành 11 đầu ra: SVG thô, JSX, một component React có kiểu, Vue SFC, Svelte, React Native, thẻ HTML <img>, data-URI CSS, mặt nạ CSS, SVG sprite và Base64.',
    'Tối ưu hóa bằng SVGO và xem mức tiết kiệm chính xác, hoặc làm đẹp và thu nhỏ mã đánh dấu.',
    'Chỉnh sửa với tô sáng cú pháp, kiểm tra hợp lệ và xem trước trực tiếp trên năm nền, với thu phóng và kéo.',
    'Chuyển đổi nhiều tệp cùng lúc trong chế độ hàng loạt và tải xuống tất cả dưới dạng ZIP.',
    'Xuất PNG sắc nét ở 1x, 2x và 4x.',
    'Sử dụng bằng 23 ngôn ngữ — bao gồm tiếng Ả Rập và Urdu viết từ phải sang trái — và cài đặt như một ứng dụng hoạt động ngoại tuyến.',
  ],
  principlesTitle: 'Nguyên tắc',
  principles: [
    { label: 'Riêng tư:', text: 'không tải lên, không tài khoản, không theo dõi tệp của bạn.' },
    { label: 'Miễn phí:', text: 'mọi tính năng, không đăng ký, không hình mờ, không gói "pro".' },
    { label: 'Trung thực:', text: 'mã bạn thấy trong trình soạn thảo chính xác là mã được chuyển đổi — không máy chủ nào âm thầm viết lại bất cứ thứ gì.' },
  ],
  ossTitle: 'Mã nguồn mở',
  ossBefore: 'VectorForge được xây dựng bằng công nghệ web hiện đại và SVGO, mã nguồn của nó được phát hành theo giấy phép MIT:',
  cta: 'Mở bộ chuyển đổi',
};

const privacyVi: PrivacyContent = {
  pageTitle: 'Chính sách bảo mật — VectorForge',
  heading: 'Chính sách bảo mật',
  updated: 'Cập nhật lần cuối: tháng 10 năm 2026',
  sections: [
    {
      title: 'Hoạt động hoàn toàn trong trình duyệt của bạn',
      body: 'VectorForge xử lý mọi thứ trên thiết bị của bạn. Các tệp bạn tải lên, mã bạn dán hoặc chỉnh sửa, và mọi thứ công cụ tạo ra đều ở lại trong trình duyệt của bạn — không có gì được tải lên bất kỳ máy chủ nào, và không có công việc chuyển đổi nào diễn ra ở nơi nào khác ngoài máy của chính bạn.',
    },
    {
      title: 'Những gì được lưu cục bộ',
      body: 'Thứ duy nhất VectorForge lưu là tùy chọn giao diện của bạn (sáng, tối hoặc hệ thống), được giữ trong bộ nhớ cục bộ của trình duyệt để trang hiển thị đúng khi bạn quay lại. Nó không bao giờ được gửi đi đâu cả.',
    },
    {
      title: 'Phân tích',
      body: 'VectorForge hiện không chạy bất kỳ phân tích nào — không cookie, không trình theo dõi. Nếu phân tích được thêm vào trong tương lai, nó sẽ không dùng cookie, và trang này sẽ thông báo đầu tiên.',
    },
    {
      title: 'Yêu cầu tới bên thứ ba',
      body: 'Trang web tải phông chữ giao diện của nó (Inter, JetBrains Mono) từ Google Fonts. Ngoài ra, nó không thực hiện yêu cầu nào tới các dịch vụ của bên thứ ba.',
    },
    { title: 'Liên hệ', body: 'Câu hỏi về chính sách này?' },
  ],
};

/* ---------------- Records + getters ---------------- */

export const HOW_CONTENT: Record<Locale, HowContent> = {
  en: howEn, hi: howHi, es: howEs, fr: howFr, de: howDe, pt: howPt, ru: howRu,
  ja: howJa, ko: howKo, 'zh-cn': howZhCn, ar: howAr, bn: howBn, as: howAsm,
  ur: howUr, ta: howTa, te: howTe, mr: howMr, id: howId, tr: howTr, it: howIt,
  nl: howNl, pl: howPl, vi: howVi,
};

export const ABOUT_CONTENT: Record<Locale, AboutContent> = {
  en: aboutEn, hi: aboutHi, es: aboutEs, fr: aboutFr, de: aboutDe, pt: aboutPt,
  ru: aboutRu, ja: aboutJa, ko: aboutKo, 'zh-cn': aboutZhCn, ar: aboutAr,
  bn: aboutBn, as: aboutAsm, ur: aboutUr, ta: aboutTa, te: aboutTe, mr: aboutMr,
  id: aboutId, tr: aboutTr, it: aboutIt, nl: aboutNl, pl: aboutPl, vi: aboutVi,
};

export const PRIVACY_CONTENT: Record<Locale, PrivacyContent> = {
  en: privacyEn, hi: privacyHi, es: privacyEs, fr: privacyFr, de: privacyDe,
  pt: privacyPt, ru: privacyRu, ja: privacyJa, ko: privacyKo,
  'zh-cn': privacyZhCn, ar: privacyAr, bn: privacyBn, as: privacyAsm,
  ur: privacyUr, ta: privacyTa, te: privacyTe, mr: privacyMr, id: privacyId,
  tr: privacyTr, it: privacyIt, nl: privacyNl, pl: privacyPl, vi: privacyVi,
};

export const getHow = (locale: string): HowContent =>
  HOW_CONTENT[locale as Locale] ?? howEn;
export const getAbout = (locale: string): AboutContent =>
  ABOUT_CONTENT[locale as Locale] ?? aboutEn;
export const getPrivacy = (locale: string): PrivacyContent =>
  PRIVACY_CONTENT[locale as Locale] ?? privacyEn;
