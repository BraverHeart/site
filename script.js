const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const themeToggle = document.querySelector('.theme-toggle');
const languageSelect = document.querySelector('#site-language');

const savedTheme = localStorage.getItem('revolution-theme');
const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
const savedLanguage = localStorage.getItem('revolution-language');
const initialLanguage = savedLanguage === 'de' ? 'de' : 'en';
let currentLanguage = initialLanguage;

const germanText = {
  'Home': 'Startseite',
  'Manufacturing': 'Fertigung',
  'Categories': 'Kategorien',
  'Capabilities': 'Leistungen',
  'Process': 'Ablauf',
  'About': 'Über uns',
  'FAQ': 'FAQ',
  'Contact': 'Kontakt',
  'Select language': 'Sprache auswählen',
  'Custom Clothing Manufacturer': 'Hersteller für individuelle Bekleidung',
  'OEM & ODM Apparel Production.': 'OEM- und ODM-Bekleidungsproduktion.',
  'Partner with Revolution Clo for end-to-end custom clothing manufacturing. We specialize in OEM, ODM, and cut & sew production for hoodies, t-shirts, activewear, and more.': 'Setzen Sie bei der kompletten Herstellung individueller Bekleidung auf Revolution Clo. Wir sind auf OEM-, ODM- und Cut-and-Sew-Produktion für Hoodies, T-Shirts, Activewear und mehr spezialisiert.',
  'COUNTRIES': 'LÄNDER',
  'MOQ': 'Mindestmenge',
  'TURNAROUND': 'DURCHLAUFZEIT',
  'Premium manufacturing': 'Premiumfertigung',
  'Premium Custom Clothing Manufacturing for Global Brands': 'Hochwertige Maßanfertigung für globale Marken',
  'OEM Apparel Manufacturing': 'OEM-Bekleidungsfertigung',
  'Our Original Equipment Manufacturing (OEM) services enable you to produce custom clothing and private label apparel under your brand name. We work with your designs, tech packs, and specifications to manufacture garments that meet your exact requirements.': 'Mit unserer Original-Equipment-Manufacturing-Leistung (OEM) lassen Sie individuelle Kleidung und Private-Label-Produkte unter Ihrer Marke fertigen. Wir setzen Ihre Designs, Tech Packs und Vorgaben präzise um.',
  'ODM Clothing Production': 'ODM-Bekleidungsproduktion',
  'Original Design Manufacturing (ODM) services provide complete design-to-production solutions for custom clothing manufacturing. If you have a concept but need design development, pattern making, and manufacturing support, our ODM clothing factory services streamline the entire process.': 'Unsere Original-Design-Manufacturing-Leistungen (ODM) begleiten individuelle Bekleidung vom Entwurf bis zur Produktion. Wenn Sie ein Konzept haben und Unterstützung bei Designentwicklung, Schnittkonstruktion und Fertigung benötigen, koordinieren wir den gesamten Prozess.',
  'Cut & Sew Manufacturing Services': 'Cut-and-Sew-Fertigung',
  'Our cut & sew manufacturing capabilities handle complex garment construction with precision for custom clothing production. From pattern cutting to final stitching, we ensure consistent quality.': 'Unsere Cut-and-Sew-Fertigung setzt auch anspruchsvolle Bekleidungskonstruktionen präzise um. Vom Zuschnitt bis zur letzten Naht sichern wir eine gleichbleibend hohe Qualität.',
  'Our promise': 'Unser Versprechen',
  'Crafting Modern Streetwear.': 'Wir gestalten moderne Streetwear.',
  'From concept to retail-ready, we manufacture the garments that define modern storefronts. Our partners trust us for consistent quality, perfect fit, and technical innovation.': 'Vom ersten Konzept bis zur Verkaufsware fertigen wir Kleidung, die moderne Marken prägt. Unsere Partner vertrauen auf gleichbleibende Qualität, optimale Passform und technische Innovation.',
  'Premium Cotton': 'Premium-Baumwolle',
  'Durable Stitching': 'Strapazierfähige Nähte',
  'Bespoke Fit': 'Individuelle Passform',
  'Behind the scenes': 'Ein Blick hinter die Kulissen',
  'Our Production in Motion.': 'Unsere Produktion in Bewegung.',
  'Take a closer look at our production facility and the meticulous processes we follow to ensure every garment meets the highest quality standards.': 'Werfen Sie einen Blick in unsere Produktionsstätte und auf die sorgfältigen Abläufe, mit denen wir höchste Qualitätsstandards für jedes Kleidungsstück sicherstellen.',
  'Our Facility': 'Unsere Produktionsstätte',
  'Production Process': 'Produktionsablauf',
  'Specialized product categories': 'Spezialisierte Produktkategorien',
  'Specialized Product Categories': 'Spezialisierte Produktkategorien',
  'MOQ 75-100': 'Mindestmenge 75–100',
  'Activewear': 'Activewear',
  'Denim & Jackets': 'Denim und Jacken',
  'Heavyweight T-Shirts': 'Schwere T-Shirts',
  'Hoodies & Sweats': 'Hoodies und Sweatshirts',
  'Quality in every detail': 'Qualität bis ins Detail',
  'Precision in Every Stitch.': 'Präzision in jeder Naht.',
  'High-Volume Production': 'Großserienproduktion',
  'Capable of 50,000 units/month.': 'Kapazität: 50.000 Stück pro Monat.',
  'Premium Fabrics': 'Hochwertige Stoffe',
  'Curated textiles and material sourcing for your product range.': 'Sorgfältig ausgewählte Textilien und Materialien für Ihre Kollektion.',
  'Sustainability': 'Nachhaltigkeit',
  'Eco-minded production and responsible material choices.': 'Umweltbewusste Fertigung und verantwortungsvolle Materialauswahl.',
  'Production expertise': 'Fertigungskompetenz',
  'Our Manufacturing Capabilities': 'Unsere Fertigungskompetenzen',
  'We handle the heavy lifting. From tech packs to logistics.': 'Wir kümmern uns um die Details, von Tech Packs bis zur Logistik.',
  'Pattern Making & Tech Pack Development': 'Schnittkonstruktion und Tech-Pack-Entwicklung',
  'Translate your concept into production-ready specifications with accurate sizing and fit consistency.': 'Wir überführen Ihr Konzept in produktionsreife Spezifikationen mit präziser Größen- und Passformabstimmung.',
  'Fabric Sourcing & Custom Dyeing': 'Stoffbeschaffung und individuelle Färbung',
  'Source premium materials and coordinate bespoke color matching for exact visual specifications.': 'Wir beschaffen hochwertige Materialien und stimmen Farben exakt nach Ihren Vorgaben ab.',
  'Quality Control & Inspection': 'Qualitätskontrolle und Prüfung',
  'Implement strict inspection checkpoints to maintain consistent quality throughout every run.': 'Strenge Prüfschritte sichern die gleichbleibende Qualität während jeder Produktionsserie.',
  'Global Shipping & Logistics': 'Weltweiter Versand und Logistik',
  'Coordinate air or sea freight and export documents so your inventory reaches destination smoothly.': 'Wir koordinieren Luft- oder Seefracht und Exportdokumente für eine reibungslose Lieferung Ihrer Ware.',
  'Our process': 'Unser Ablauf',
  'The Manufacturing Process': 'Der Fertigungsprozess',
  'Sampling': 'Musterfertigung',
  'For each order we create a prototype for your approval, allowing you to test and refine the functionality of your design before bulk production.': 'Für jeden Auftrag fertigen wir ein Muster zur Freigabe an. So können Sie Ihr Design vor der Serienproduktion prüfen und optimieren.',
  'Production & QC': 'Produktion und Qualitätskontrolle',
  'Bulk manufacture takes place on our production line, where all items are handmade and quality checked throughout the manufacturing journey.': 'Die Serienfertigung erfolgt an unserer Produktionslinie. Jedes Stück wird sorgfältig gefertigt und während des gesamten Prozesses geprüft.',
  'Delivery': 'Lieferung',
  'Once your order is complete and quality checked, it is approved for delivery via our network of reliable global couriers.': 'Nach Abschluss und Qualitätsprüfung wird Ihre Bestellung für den Versand mit unseren zuverlässigen internationalen Logistikpartnern freigegeben.',
  'About us': 'Über uns',
  'About Us': 'Über uns',
  'Revolution Manufacturing is a leading custom clothing manufacturer based in Istanbul, Turkey, specializing in premium streetwear, hoodies, t-shirts, and activewear production.': 'Revolution Manufacturing ist ein führender Hersteller für individuelle Bekleidung mit Sitz in Istanbul, Türkei. Das Unternehmen ist auf hochwertige Streetwear, Hoodies, T-Shirts und Activewear spezialisiert.',
  'We collaborate with various brands from Europe and America, providing private label clothing manufacturing, cut & sew services, and comprehensive production solutions.': 'Wir arbeiten mit Marken aus Europa und Amerika zusammen und bieten Private-Label-Fertigung, Cut-and-Sew-Services sowie umfassende Produktionslösungen.',
  'Our Istanbul-based factory offers low MOQ options (75-100 units) for standard products, making us an ideal partner for emerging brands and established labels seeking reliable custom clothing production.': 'Unsere Produktionsstätte in Istanbul bietet für Standardprodukte niedrige Mindestmengen von 75 bis 100 Stück. Damit sind wir ein idealer Partner für aufstrebende Marken und etablierte Labels.',
  '“We searched for a long time until we finally found the production facility in Turkey that suits us best!”': '„Wir haben lange gesucht, bis wir endlich die Produktionsstätte in der Türkei gefunden haben, die am besten zu uns passt!“',
  'Streetwear Brand in the United Kingdom': 'Streetwear-Marke aus dem Vereinigten Königreich',
  'Frequently asked questions': 'Häufig gestellte Fragen',
  'Frequently Asked Questions': 'Häufig gestellte Fragen',
  'What is the Minimum Order Quantity (MOQ)?': 'Wie hoch ist die Mindestbestellmenge (MOQ)?',
  'The minimum order quantity for our standard products such as hoodies, t-shirts, cardigans, croptops, shorts, and tracksuits is set at 75-100. For products like bags, jackets, or accessories, an individual arrangement is necessary.': 'Die Mindestbestellmenge für Standardprodukte wie Hoodies, T-Shirts, Cardigans, Croptops, Shorts und Trainingsanzüge beträgt 75 bis 100 Stück. Für Taschen, Jacken und Accessoires vereinbaren wir individuelle Mengen.',
  'How long does delivery take?': 'Wie lange dauert die Lieferung?',
  'Classic products like hoodies, t-shirts, or cardigans are essential in our daily work and therefore, even with larger quantities, short delivery times are not a problem for us.': 'Klassische Produkte wie Hoodies, T-Shirts und Cardigans gehören zu unserem Tagesgeschäft. Deshalb können wir auch bei größeren Mengen kurze Lieferzeiten realisieren.',
  'Can we receive a sample?': 'Können wir ein Muster erhalten?',
  'We are always happy to send our own samples after the introductory conversation. Please note that there may be an additional charge for samples with printing or embroidery.': 'Nach einem ersten Gespräch senden wir Ihnen gerne unsere Muster zu. Für Muster mit Druck oder Stickerei kann ein Aufpreis anfallen.',
  'What is the difference between OEM and ODM?': 'Was ist der Unterschied zwischen OEM und ODM?',
  'OEM means we produce garments based on your existing designs and specifications. ODM includes design development, pattern making, and manufacturing services for brands with concepts but needing full design-to-production support.': 'Bei OEM fertigen wir Kleidung nach Ihren vorhandenen Designs und Spezifikationen. ODM umfasst Designentwicklung, Schnittkonstruktion und Fertigung für Marken, die Unterstützung vom Konzept bis zum fertigen Produkt benötigen.',
  'Do you offer private label clothing manufacturing?': 'Bieten Sie Private-Label-Bekleidungsfertigung an?',
  'Yes, we specialize in private label clothing manufacturing. We produce custom garments under your brand name with your labels, tags, and packaging.': 'Ja. Wir fertigen individuelle Kleidung unter Ihrem Markennamen und versehen sie mit Ihren Labels, Etiketten und Verpackungen.',
  'Premium apparel manufacturing partner for the world\'s most ambitious brands.': 'Premium-Partner für die Bekleidungsproduktion der ambitioniertesten Marken weltweit.',
  'Additional Links': 'Weitere Links',
  'Halkali Central Neighborhood, Dereboyu Avenue No. 58, Floor 4': 'Halkali Merkez, Dereboyu Caddesi Nr. 58, 4. Etage',
  'Kucukcekmece, Istanbul, Turkey': 'Kucukcekmece, Istanbul, Türkei',
  '© 2025 Revolution Manufacturing. All rights reserved.': '© 2025 Revolution Manufacturing. Alle Rechte vorbehalten.'
};

const germanAttributes = {
  'Revolution Clo home': 'Revolution Clo Startseite',
  'Toggle navigation': 'Navigation umschalten',
  'Main navigation': 'Hauptnavigation',
  'Select language': 'Sprache auswählen',
  'Summary statistics': 'Kennzahlen',
  'Video tour of our production facility': 'Videorundgang durch unsere Produktionsstätte',
  'Video showing our garment production process': 'Video zu unserem Bekleidungsproduktionsprozess',
  'Custom clothing manufacturing factory producing premium garments': 'Bekleidungsfabrik für die Herstellung hochwertiger Kleidung',
  'OEM Apparel Manufacturing': 'OEM-Bekleidungsfertigung',
  'ODM Clothing Production': 'ODM-Bekleidungsproduktion',
  'Cut & Sew Manufacturing Services': 'Cut-and-Sew-Fertigung',
  'Premium fabrics and materials': 'Hochwertige Stoffe und Materialien',
  'Activewear manufacturing': 'Activewear-Fertigung',
  'Denim & Jackets manufacturing': 'Denim- und Jackenfertigung',
  'Heavyweight T-Shirts manufacturing': 'Fertigung schwerer T-Shirts',
  'Hoodies & Sweats manufacturing': 'Fertigung von Hoodies und Sweatshirts'
};

const textNodes = [];
const textWalker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);

while (textWalker.nextNode()) {
  const node = textWalker.currentNode;
  const key = node.nodeValue.trim().replace(/\s+/g, ' ');
  if (key) textNodes.push({ node, key });
}

const translatableAttributes = [];
document.querySelectorAll('[aria-label], [alt]').forEach((element) => {
  ['aria-label', 'alt'].forEach((attribute) => {
    const value = element.getAttribute(attribute);
    if (value) translatableAttributes.push({ element, attribute, value });
  });
});

document.body.dataset.theme = initialTheme;

const setTheme = (theme) => {
  const isLight = theme === 'light';
  document.body.dataset.theme = theme;
  if (!themeToggle) return;

  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute(
    'aria-label',
    currentLanguage === 'de'
      ? (isLight ? 'Dunkelmodus aktivieren' : 'Hellmodus aktivieren')
      : (isLight ? 'Switch to dark mode' : 'Switch to light mode')
  );
  themeToggle.title = currentLanguage === 'de' ? 'Design umschalten' : 'Toggle theme';
  localStorage.setItem('revolution-theme', theme);
};

setTheme(initialTheme);

const applyLanguage = (language) => {
  const selectedLanguage = language === 'de' ? 'de' : 'en';
  currentLanguage = selectedLanguage;
  document.documentElement.lang = selectedLanguage;
  document.body.dataset.language = selectedLanguage;

  textNodes.forEach(({ node, key }) => {
    node.nodeValue = selectedLanguage === 'de' ? (germanText[key] || key) : key;
  });

  translatableAttributes.forEach(({ element, attribute, value }) => {
    element.setAttribute(attribute, selectedLanguage === 'de' ? (germanAttributes[value] || value) : value);
  });

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = selectedLanguage === 'de'
      ? 'Revolution Clo ist Hersteller für OEM-, ODM- und Cut-and-Sew-Bekleidung. Hochwertige Streetwear, Hoodies, T-Shirts, Activewear und Private-Label-Produktion.'
      : 'Revolution Clo custom clothing manufacturer for OEM, ODM and cut & sew apparel production. Premium streetwear, hoodies, t-shirts, activewear and private label manufacturing.';
  }

  document.title = selectedLanguage === 'de'
    ? 'Revolution Clo | OEM- und ODM-Bekleidungsproduktion'
    : 'Revolution Clo | OEM & ODM Apparel Production';

  if (languageSelect) languageSelect.value = selectedLanguage;
  localStorage.setItem('revolution-language', selectedLanguage);
  setTheme(document.body.dataset.theme);
};

applyLanguage(initialLanguage);

if (languageSelect) {
  languageSelect.addEventListener('change', () => applyLanguage(languageSelect.value));
}

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const nextTheme = document.body.dataset.theme === 'light' ? 'dark' : 'light';
    setTheme(nextTheme);
  });
}

if (navToggle && mainNav) {
  navToggle.addEventListener('click', () => {
    mainNav.classList.toggle('is-open');
  });

  mainNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => mainNav.classList.remove('is-open'));
  });
}

const faqItems = document.querySelectorAll('.faq-item');

faqItems.forEach((item) => {
  const button = item.querySelector('.faq-question');
  button?.addEventListener('click', () => {
    const isActive = item.classList.contains('active');

    faqItems.forEach((faq) => faq.classList.remove('active'));

    if (!isActive) item.classList.add('active');
  });
});
