const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const themeToggle = document.querySelector('.theme-toggle');
const languageSelect = document.querySelector('#site-language');

const savedTheme = localStorage.getItem('revolution-theme');
const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
const savedLanguage = localStorage.getItem('revolution-language');
const supportedLanguages = ['en', 'de', 'tr', 'fr', 'zh', 'es', 'ar'];
const initialLanguage = supportedLanguages.includes(savedLanguage) ? savedLanguage : 'en';
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
  'Activewear': 'Sportbekleidung',
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

const turkishText = {
  'Home': 'Ana Sayfa',
  'Manufacturing': 'Üretim',
  'Categories': 'Kategoriler',
  'Capabilities': 'Yeteneklerimiz',
  'Process': 'Süreç',
  'About': 'Hakkımızda',
  'FAQ': 'SSS',
  'Contact': 'İletişim',
  'Select language': 'Dil seçin',
  'Custom Clothing Manufacturer': 'Özel Giyim Üreticisi',
  'OEM & ODM Apparel Production.': 'OEM ve ODM Giyim Üretimi.',
  'Partner with Revolution Clo for end-to-end custom clothing manufacturing. We specialize in OEM, ODM, and cut & sew production for hoodies, t-shirts, activewear, and more.': 'Uçtan uca özel giyim üretimi için Revolution Clo ile çalışın. Hoodie, tişört, spor giyim ve daha fazlasında OEM, ODM ve kesim-dikim üretiminde uzmanız.',
  'COUNTRIES': 'ÜLKE',
  'MOQ': 'Minimum Adet',
  'TURNAROUND': 'ÜRETİM SÜRESİ',
  'Premium manufacturing': 'Üstün Kalitede Üretim',
  'Premium Custom Clothing Manufacturing for Global Brands': 'Küresel Markalar İçin Üstün Kalitede Özel Giyim Üretimi',
  'OEM Apparel Manufacturing': 'OEM Giyim Üretimi',
  'Our Original Equipment Manufacturing (OEM) services enable you to produce custom clothing and private label apparel under your brand name. We work with your designs, tech packs, and specifications to manufacture garments that meet your exact requirements.': 'Orijinal Ekipman Üretimi (OEM) hizmetimizle markanıza özel giyim ürünleri üretiyoruz. Tasarımlarınız, teknik föyleriniz ve belirttiğiniz özellikler doğrultusunda tam ihtiyaçlarınıza uygun ürünler hazırlıyoruz.',
  'ODM Clothing Production': 'ODM Giyim Üretimi',
  'Original Design Manufacturing (ODM) services provide complete design-to-production solutions for custom clothing manufacturing. If you have a concept but need design development, pattern making, and manufacturing support, our ODM clothing factory services streamline the entire process.': 'Orijinal Tasarım Üretimi (ODM) hizmetimiz, tasarımdan üretime kadar eksiksiz çözümler sunar. Bir fikriniz varsa ancak tasarım geliştirme, kalıp hazırlama ve üretim desteğine ihtiyaç duyuyorsanız tüm süreci sizin için kolaylaştırıyoruz.',
  'Cut & Sew Manufacturing Services': 'Kesim ve Dikim Üretim Hizmetleri',
  'Our cut & sew manufacturing capabilities handle complex garment construction with precision for custom clothing production. From pattern cutting to final stitching, we ensure consistent quality.': 'Kesim ve dikim uzmanlığımız, karmaşık giysi yapılarını hassasiyetle üretmemizi sağlar. Kalıp kesiminden son dikişe kadar istikrarlı kalite sunuyoruz.',
  'Our promise': 'Sözümüz',
  'Crafting Modern Streetwear.': 'Modern Sokak Modasını Üretiyoruz.',
  'From concept to retail-ready, we manufacture the garments that define modern storefronts. Our partners trust us for consistent quality, perfect fit, and technical innovation.': 'Fikir aşamasından satışa hazır ürüne kadar modern markaları tanımlayan giysiler üretiyoruz. İş ortaklarımız bize tutarlı kalite, kusursuz kalıp ve teknik yenilik için güveniyor.',
  'Premium Cotton': 'Üstün Kalitede Pamuk',
  'Durable Stitching': 'Dayanıklı Dikiş',
  'Bespoke Fit': 'Özel Kalıp',
  'Behind the scenes': 'Üretimden Kareler',
  'Our Production in Motion.': 'Üretimimiz Hareket Halinde.',
  'Take a closer look at our production facility and the meticulous processes we follow to ensure every garment meets the highest quality standards.': 'Her ürünün en yüksek kalite standartlarını karşılaması için üretim tesisimize ve titizlikle yürüttüğümüz süreçlere yakından göz atın.',
  'Our Facility': 'Üretim Tesisimiz',
  'Production Process': 'Üretim Aşamaları',
  'Specialized product categories': 'Uzmanlaştığımız Ürün Grupları',
  'Specialized Product Categories': 'Uzmanlaştığımız Ürün Grupları',
  'MOQ 75-100': 'Minimum 75-100 Adet',
  'Activewear': 'Spor Giyim',
  'Denim & Jackets': 'Denim ve Ceketler',
  'Heavyweight T-Shirts': 'Kalın Kumaş Tişörtler',
  'Hoodies & Sweats': 'Hoodie ve Sweatshirtler',
  'Quality in every detail': 'Her Detayda Kalite',
  'Precision in Every Stitch.': 'Her Dikişte Kusursuzluk.',
  'High-Volume Production': 'Yüksek Hacimli Üretim',
  'Capable of 50,000 units/month.': 'Ayda 50.000 adet üretim kapasitesi.',
  'Premium Fabrics': 'Üstün Kalitede Kumaşlar',
  'Curated textiles and material sourcing for your product range.': 'Ürün grubunuza özel kumaş ve malzeme tedariği.',
  'Sustainability': 'Sürdürülebilirlik',
  'Eco-minded production and responsible material choices.': 'Çevreye duyarlı üretim ve sorumlu malzeme seçimi.',
  'Production expertise': 'Üretim Uzmanlığımız',
  'Our Manufacturing Capabilities': 'Üretim Yeteneklerimiz',
  'We handle the heavy lifting. From tech packs to logistics.': 'Teknik föylerden lojistiğe kadar tüm detayları biz üstleniyoruz.',
  'Pattern Making & Tech Pack Development': 'Kalıp ve Teknik Föy Geliştirme',
  'Translate your concept into production-ready specifications with accurate sizing and fit consistency.': 'Fikrinizi doğru beden ve tutarlı kalıplarla üretime hazır teknik özelliklere dönüştürüyoruz.',
  'Fabric Sourcing & Custom Dyeing': 'Kumaş Tedariki ve Özel Boyama',
  'Source premium materials and coordinate bespoke color matching for exact visual specifications.': 'Üstün kaliteli malzemeler tedarik ediyor, renkleri görsel beklentilerinize göre eşleştiriyoruz.',
  'Quality Control & Inspection': 'Kalite Kontrol ve İnceleme',
  'Implement strict inspection checkpoints to maintain consistent quality throughout every run.': 'Her üretim serisinde tutarlı kalite için sıkı kontrol aşamaları uyguluyoruz.',
  'Global Shipping & Logistics': 'Uluslararası Gönderim ve Lojistik',
  'Coordinate air or sea freight and export documents so your inventory reaches destination smoothly.': 'Ürünlerinizin sorunsuz ulaşması için hava veya deniz taşımacılığını ve ihracat belgelerini koordine ediyoruz.',
  'Our process': 'Sürecimiz',
  'The Manufacturing Process': 'Üretim Süreci',
  'Sampling': 'Numune Hazırlama',
  'For each order we create a prototype for your approval, allowing you to test and refine the functionality of your design before bulk production.': 'Her sipariş için onayınıza bir prototip hazırlıyoruz. Böylece seri üretim öncesinde tasarımınızı deneyip geliştirebilirsiniz.',
  'Production & QC': 'Üretim ve Kalite Kontrol',
  'Bulk manufacture takes place on our production line, where all items are handmade and quality checked throughout the manufacturing journey.': 'Seri üretim hattımızda her ürün özenle hazırlanır ve üretimin her aşamasında kalite kontrolünden geçer.',
  'Delivery': 'Teslimat',
  'Once your order is complete and quality checked, it is approved for delivery via our network of reliable global couriers.': 'Siparişiniz tamamlanıp kalite kontrolünden geçtikten sonra güvenilir uluslararası kargo ağımızla gönderilir.',
  'About us': 'Hakkımızda',
  'About Us': 'Hakkımızda',
  'Revolution Manufacturing is a leading custom clothing manufacturer based in Istanbul, Turkey, specializing in premium streetwear, hoodies, t-shirts, and activewear production.': 'Revolution Manufacturing, İstanbul merkezli bir özel giyim üreticisidir. Üstün kalitede sokak modası, hoodie, tişört ve spor giyim üretiminde uzmanlaşır.',
  'We collaborate with various brands from Europe and America, providing private label clothing manufacturing, cut & sew services, and comprehensive production solutions.': 'Avrupa ve Amerika’daki markalarla çalışıyor; markaya özel üretim, kesim-dikim hizmetleri ve kapsamlı üretim çözümleri sunuyoruz.',
  'Our Istanbul-based factory offers low MOQ options (75-100 units) for standard products, making us an ideal partner for emerging brands and established labels seeking reliable custom clothing production.': 'İstanbul’daki fabrikamız standart ürünlerde 75-100 adet gibi düşük minimum sipariş seçenekleri sunar. Bu sayede özel giyim üretiminde güvenilir bir çözüm ortağı arayan yeni ve köklü markalar için ideal bir iş ortağıyız.',
  '“We searched for a long time until we finally found the production facility in Turkey that suits us best!”': '“Uzun süre aradıktan sonra sonunda Türkiye’de bize en uygun üretim tesisini bulduk!”',
  'Streetwear Brand in the United Kingdom': 'Birleşik Krallık Sokak Modası Markası',
  'Frequently asked questions': 'Sıkça Sorulan Sorular',
  'Frequently Asked Questions': 'Sıkça Sorulan Sorular',
  'What is the Minimum Order Quantity (MOQ)?': 'Minimum Sipariş Miktarı (MOQ) nedir?',
  'The minimum order quantity for our standard products such as hoodies, t-shirts, cardigans, croptops, shorts, and tracksuits is set at 75-100. For products like bags, jackets, or accessories, an individual arrangement is necessary.': 'Hoodie, tişört, hırka, crop top, şort ve eşofman gibi standart ürünlerde minimum sipariş miktarı 75-100 adettir. Çanta, ceket ve aksesuarlar için miktar ayrıca belirlenir.',
  'How long does delivery take?': 'Teslimat ne kadar sürer?',
  'Classic products like hoodies, t-shirts, or cardigans are essential in our daily work and therefore, even with larger quantities, short delivery times are not a problem for us.': 'Hoodie, tişört ve hırka gibi temel ürünler günlük üretimimizin parçasıdır. Bu nedenle yüksek adetlerde bile kısa teslimat süreleri sunabiliyoruz.',
  'Can we receive a sample?': 'Numune alabilir miyiz?',
  'We are always happy to send our own samples after the introductory conversation. Please note that there may be an additional charge for samples with printing or embroidery.': 'İlk görüşmenin ardından numunelerimizi memnuniyetle göndeririz. Baskı veya nakış içeren numuneler için ek ücret alınabilir.',
  'What is the difference between OEM and ODM?': 'OEM ve ODM arasındaki fark nedir?',
  'OEM means we produce garments based on your existing designs and specifications. ODM includes design development, pattern making, and manufacturing services for brands with concepts but needing full design-to-production support.': 'OEM, mevcut tasarım ve özelliklerinize göre üretim yapmamızdır. ODM ise tasarım geliştirme, kalıp hazırlama ve üretim dahil konseptten ürüne kapsamlı destek sunar.',
  'Do you offer private label clothing manufacturing?': 'Markaya özel giyim üretimi sunuyor musunuz?',
  'Yes, we specialize in private label clothing manufacturing. We produce custom garments under your brand name with your labels, tags, and packaging.': 'Evet. Markanıza özel giysiler üretir; ürünleri kendi etiket, marka ve ambalajlarınızla hazırlarız.',
  'Premium apparel manufacturing partner for the world\'s most ambitious brands.': 'Dünyanın en iddialı markaları için üstün kaliteli giyim üretim ortağı.',
  'Additional Links': 'Ek Bağlantılar',
  'Halkali Central Neighborhood, Dereboyu Avenue No. 58, Floor 4': 'Halkalı Merkez Mahallesi, Dereboyu Caddesi No: 58, Kat: 4',
  'Kucukcekmece, Istanbul, Turkey': 'Küçükçekmece, İstanbul, Türkiye',
  '© 2025 Revolution Manufacturing. All rights reserved.': '© 2025 Revolution Manufacturing. Tüm hakları saklıdır.'
};

const frenchText = {
  'Home': 'Accueil',
  'Manufacturing': 'Fabrication',
  'Categories': 'Catégories',
  'Capabilities': 'Expertises',
  'Process': 'Processus',
  'About': 'À propos',
  'FAQ': 'FAQ',
  'Contact': 'Contact',
  'Select language': 'Choisir la langue',
  'Custom Clothing Manufacturer': 'Fabricant de vêtements sur mesure',
  'OEM & ODM Apparel Production.': 'Production de vêtements OEM et ODM.',
  'Partner with Revolution Clo for end-to-end custom clothing manufacturing. We specialize in OEM, ODM, and cut & sew production for hoodies, t-shirts, activewear, and more.': 'Confiez à Revolution Clo la fabrication complète de vos vêtements personnalisés. Nous sommes spécialisés dans la production OEM, ODM et coupe-couture de sweats à capuche, t-shirts, vêtements de sport et bien plus encore.',
  'COUNTRIES': 'PAYS',
  'MOQ': 'Quantité minimale',
  'TURNAROUND': 'DÉLAI',
  'Premium manufacturing': 'Fabrication haut de gamme',
  'Premium Custom Clothing Manufacturing for Global Brands': 'Fabrication de vêtements haut de gamme pour les marques internationales',
  'OEM Apparel Manufacturing': 'Fabrication de vêtements OEM',
  'Our Original Equipment Manufacturing (OEM) services enable you to produce custom clothing and private label apparel under your brand name. We work with your designs, tech packs, and specifications to manufacture garments that meet your exact requirements.': 'Notre service de fabrication OEM vous permet de produire des vêtements personnalisés et en marque propre sous votre nom. Nous suivons vos créations, dossiers techniques et spécifications pour répondre précisément à vos exigences.',
  'ODM Clothing Production': 'Production de vêtements ODM',
  'Original Design Manufacturing (ODM) services provide complete design-to-production solutions for custom clothing manufacturing. If you have a concept but need design development, pattern making, and manufacturing support, our ODM clothing factory services streamline the entire process.': 'Notre service ODM propose une solution complète, de la conception à la production. Si vous avez un concept et avez besoin d’aide pour le développement du design, la création des patrons et la fabrication, nous coordonnons l’ensemble du processus.',
  'Cut & Sew Manufacturing Services': 'Services de coupe et confection',
  'Our cut & sew manufacturing capabilities handle complex garment construction with precision for custom clothing production. From pattern cutting to final stitching, we ensure consistent quality.': 'Notre expertise en coupe et confection permet de réaliser avec précision des vêtements complexes. De la découpe des patrons aux dernières coutures, nous assurons une qualité constante.',
  'Our promise': 'Notre engagement',
  'Crafting Modern Streetwear.': 'Créer le streetwear moderne.',
  'From concept to retail-ready, we manufacture the garments that define modern storefronts. Our partners trust us for consistent quality, perfect fit, and technical innovation.': 'Du concept au produit prêt à la vente, nous fabriquons les vêtements qui définissent les marques modernes. Nos partenaires comptent sur notre qualité constante, nos coupes précises et notre innovation technique.',
  'Premium Cotton': 'Coton haut de gamme',
  'Durable Stitching': 'Coutures résistantes',
  'Bespoke Fit': 'Coupe personnalisée',
  'Behind the scenes': 'Dans les coulisses',
  'Our Production in Motion.': 'Notre production en mouvement.',
  'Take a closer look at our production facility and the meticulous processes we follow to ensure every garment meets the highest quality standards.': 'Découvrez notre site de production et les processus rigoureux que nous suivons pour garantir les normes de qualité les plus élevées pour chaque vêtement.',
  'Our Facility': 'Notre atelier',
  'Production Process': 'Processus de production',
  'Specialized product categories': 'Nos catégories de produits spécialisées',
  'Specialized Product Categories': 'Catégories de produits spécialisées',
  'MOQ 75-100': 'Minimum 75-100 pièces',
  'Activewear': 'Vêtements de sport',
  'Denim & Jackets': 'Denim et vestes',
  'Heavyweight T-Shirts': 'T-shirts épais',
  'Hoodies & Sweats': 'Sweats à capuche et molletonnés',
  'Quality in every detail': 'La qualité dans chaque détail',
  'Precision in Every Stitch.': 'La précision dans chaque couture.',
  'High-Volume Production': 'Production en grande série',
  'Capable of 50,000 units/month.': 'Capacité de 50 000 pièces par mois.',
  'Premium Fabrics': 'Tissus haut de gamme',
  'Curated textiles and material sourcing for your product range.': 'Sélection de textiles et approvisionnement en matières pour votre collection.',
  'Sustainability': 'Durabilité',
  'Eco-minded production and responsible material choices.': 'Une production respectueuse de l’environnement et des choix de matières responsables.',
  'Production expertise': 'Notre savoir-faire',
  'Our Manufacturing Capabilities': 'Nos capacités de fabrication',
  'We handle the heavy lifting. From tech packs to logistics.': 'Nous prenons en charge chaque étape, des dossiers techniques à la logistique.',
  'Pattern Making & Tech Pack Development': 'Création de patrons et dossiers techniques',
  'Translate your concept into production-ready specifications with accurate sizing and fit consistency.': 'Transformez votre concept en spécifications prêtes à produire, avec des tailles précises et une coupe cohérente.',
  'Fabric Sourcing & Custom Dyeing': 'Approvisionnement en tissus et teinture personnalisée',
  'Source premium materials and coordinate bespoke color matching for exact visual specifications.': 'Nous sélectionnons des matières haut de gamme et coordonnons les couleurs selon vos spécifications.',
  'Quality Control & Inspection': 'Contrôle qualité et inspection',
  'Implement strict inspection checkpoints to maintain consistent quality throughout every run.': 'Des contrôles rigoureux garantissent une qualité constante tout au long de chaque production.',
  'Global Shipping & Logistics': 'Expédition internationale et logistique',
  'Coordinate air or sea freight and export documents so your inventory reaches destination smoothly.': 'Nous coordonnons le fret aérien ou maritime et les documents d’exportation pour livrer vos marchandises sans difficulté.',
  'Our process': 'Notre processus',
  'The Manufacturing Process': 'Le processus de fabrication',
  'Sampling': 'Échantillonnage',
  'For each order we create a prototype for your approval, allowing you to test and refine the functionality of your design before bulk production.': 'Pour chaque commande, nous créons un prototype à valider afin que vous puissiez tester et améliorer votre modèle avant la production en série.',
  'Production & QC': 'Production et contrôle qualité',
  'Bulk manufacture takes place on our production line, where all items are handmade and quality checked throughout the manufacturing journey.': 'La production en série est réalisée sur notre ligne, où chaque pièce est confectionnée et contrôlée à chaque étape.',
  'Delivery': 'Livraison',
  'Once your order is complete and quality checked, it is approved for delivery via our network of reliable global couriers.': 'Une fois votre commande terminée et contrôlée, elle est expédiée par notre réseau fiable de transporteurs internationaux.',
  'About us': 'À propos',
  'About Us': 'À propos de nous',
  'Revolution Manufacturing is a leading custom clothing manufacturer based in Istanbul, Turkey, specializing in premium streetwear, hoodies, t-shirts, and activewear production.': 'Revolution Manufacturing est un fabricant de vêtements personnalisés basé à Istanbul, en Turquie, spécialisé dans le streetwear haut de gamme, les sweats à capuche, les t-shirts et les vêtements de sport.',
  'We collaborate with various brands from Europe and America, providing private label clothing manufacturing, cut & sew services, and comprehensive production solutions.': 'Nous collaborons avec des marques d’Europe et d’Amérique et proposons la fabrication en marque propre, des services de coupe et confection ainsi que des solutions de production complètes.',
  'Our Istanbul-based factory offers low MOQ options (75-100 units) for standard products, making us an ideal partner for emerging brands and established labels seeking reliable custom clothing production.': 'Notre usine d’Istanbul propose des quantités minimales réduites, de 75 à 100 pièces pour les produits standards. Nous sommes un partenaire idéal pour les jeunes marques comme pour les enseignes établies.',
  '“We searched for a long time until we finally found the production facility in Turkey that suits us best!”': '« Nous avons longtemps cherché avant de trouver enfin le site de production en Turquie qui nous convient le mieux ! »',
  'Streetwear Brand in the United Kingdom': 'Marque de streetwear au Royaume-Uni',
  'Frequently asked questions': 'Questions fréquentes',
  'Frequently Asked Questions': 'Foire aux questions',
  'What is the Minimum Order Quantity (MOQ)?': 'Quelle est la quantité minimale de commande (MOQ) ?',
  'The minimum order quantity for our standard products such as hoodies, t-shirts, cardigans, croptops, shorts, and tracksuits is set at 75-100. For products like bags, jackets, or accessories, an individual arrangement is necessary.': 'La quantité minimale pour les produits standards tels que sweats à capuche, t-shirts, cardigans, crop tops, shorts et survêtements est de 75 à 100 pièces. Pour les sacs, vestes et accessoires, les quantités sont convenues au cas par cas.',
  'How long does delivery take?': 'Quel est le délai de livraison ?',
  'Classic products like hoodies, t-shirts, or cardigans are essential in our daily work and therefore, even with larger quantities, short delivery times are not a problem for us.': 'Les produits classiques comme les sweats à capuche, t-shirts et cardigans font partie de notre production quotidienne. Même pour de grandes quantités, nous pouvons donc proposer des délais courts.',
  'Can we receive a sample?': 'Pouvons-nous recevoir un échantillon ?',
  'We are always happy to send our own samples after the introductory conversation. Please note that there may be an additional charge for samples with printing or embroidery.': 'Après un premier échange, nous serons ravis de vous envoyer nos échantillons. Des frais supplémentaires peuvent s’appliquer aux échantillons imprimés ou brodés.',
  'What is the difference between OEM and ODM?': 'Quelle est la différence entre OEM et ODM ?',
  'OEM means we produce garments based on your existing designs and specifications. ODM includes design development, pattern making, and manufacturing services for brands with concepts but needing full design-to-production support.': 'En OEM, nous fabriquons les vêtements selon vos designs et spécifications existants. L’ODM inclut le développement du design, la création des patrons et la fabrication, de l’idée au produit fini.',
  'Do you offer private label clothing manufacturing?': 'Proposez-vous la fabrication de vêtements en marque propre ?',
  'Yes, we specialize in private label clothing manufacturing. We produce custom garments under your brand name with your labels, tags, and packaging.': 'Oui. Nous fabriquons des vêtements personnalisés sous votre marque, avec vos étiquettes, tags et emballages.',
  'Premium apparel manufacturing partner for the world\'s most ambitious brands.': 'Partenaire de fabrication haut de gamme pour les marques les plus ambitieuses au monde.',
  'Additional Links': 'Liens complémentaires',
  'Halkali Central Neighborhood, Dereboyu Avenue No. 58, Floor 4': 'Halkali Merkez, avenue Dereboyu n° 58, 4e étage',
  'Kucukcekmece, Istanbul, Turkey': 'Kucukcekmece, Istanbul, Turquie',
  '© 2025 Revolution Manufacturing. All rights reserved.': '© 2025 Revolution Manufacturing. Tous droits réservés.'
};

const chineseText = {
  'Home': '首页',
  'Manufacturing': '生产服务',
  'Categories': '产品类别',
  'Capabilities': '生产能力',
  'Process': '生产流程',
  'About': '关于我们',
  'FAQ': '常见问题',
  'Contact': '联系我们',
  'Select language': '选择语言',
  'Custom Clothing Manufacturer': '定制服装制造商',
  'OEM & ODM Apparel Production.': 'OEM 与 ODM 服装生产。',
  'Partner with Revolution Clo for end-to-end custom clothing manufacturing. We specialize in OEM, ODM, and cut & sew production for hoodies, t-shirts, activewear, and more.': '选择 Revolution Clo，获得一站式定制服装制造服务。我们专注于连帽衫、T 恤、运动服等产品的 OEM、ODM 和裁剪缝制生产。',
  'COUNTRIES': '覆盖国家',
  'MOQ': '起订量',
  'TURNAROUND': '生产周期',
  'Premium manufacturing': '高端制造',
  'Premium Custom Clothing Manufacturing for Global Brands': '为全球品牌提供高端定制服装制造',
  'OEM Apparel Manufacturing': 'OEM 服装制造',
  'Our Original Equipment Manufacturing (OEM) services enable you to produce custom clothing and private label apparel under your brand name. We work with your designs, tech packs, and specifications to manufacture garments that meet your exact requirements.': '通过 OEM 服务，您可以使用自己的品牌生产定制服装和自有品牌服饰。我们根据您的设计、技术资料和规格要求，精准制作符合需求的服装。',
  'ODM Clothing Production': 'ODM 服装生产',
  'Original Design Manufacturing (ODM) services provide complete design-to-production solutions for custom clothing manufacturing. If you have a concept but need design development, pattern making, and manufacturing support, our ODM clothing factory services streamline the entire process.': 'ODM 服务为定制服装提供从设计到生产的完整解决方案。如果您已有概念，并需要设计开发、打版和生产支持，我们将为您统筹整个流程。',
  'Cut & Sew Manufacturing Services': '裁剪与缝制服务',
  'Our cut & sew manufacturing capabilities handle complex garment construction with precision for custom clothing production. From pattern cutting to final stitching, we ensure consistent quality.': '我们能够精准完成复杂的服装结构。从纸样裁剪到最后一道缝线，每个环节都保持稳定品质。',
  'Our promise': '我们的承诺',
  'Crafting Modern Streetwear.': '打造现代街头服饰。',
  'From concept to retail-ready, we manufacture the garments that define modern storefronts. Our partners trust us for consistent quality, perfect fit, and technical innovation.': '从创意构想到零售成品，我们打造定义现代品牌的服饰。合作伙伴信赖我们稳定的品质、精准的版型和技术创新。',
  'Premium Cotton': '优质棉料',
  'Durable Stitching': '耐用缝线',
  'Bespoke Fit': '定制版型',
  'Behind the scenes': '幕后实况',
  'Our Production in Motion.': '走进我们的生产现场。',
  'Take a closer look at our production facility and the meticulous processes we follow to ensure every garment meets the highest quality standards.': '深入了解我们的生产设施，以及确保每件服装达到高品质标准的严谨流程。',
  'Our Facility': '我们的工厂',
  'Production Process': '生产流程',
  'Specialized product categories': '专业产品类别',
  'Specialized Product Categories': '专业产品类别',
  'MOQ 75-100': '起订量 75-100 件',
  'Activewear': '运动服',
  'Denim & Jackets': '牛仔服与夹克',
  'Heavyweight T-Shirts': '重磅 T 恤',
  'Hoodies & Sweats': '连帽衫与卫衣',
  'Quality in every detail': '品质体现在每个细节',
  'Precision in Every Stitch.': '每一针都精准。',
  'High-Volume Production': '大批量生产',
  'Capable of 50,000 units/month.': '月产能可达 50,000 件。',
  'Premium Fabrics': '优质面料',
  'Curated textiles and material sourcing for your product range.': '为您的产品系列精选纺织品与生产材料。',
  'Sustainability': '可持续发展',
  'Eco-minded production and responsible material choices.': '采用环保生产方式和负责任的材料选择。',
  'Production expertise': '生产专业能力',
  'Our Manufacturing Capabilities': '我们的生产能力',
  'We handle the heavy lifting. From tech packs to logistics.': '从技术资料到物流配送，我们为您统筹安排。',
  'Pattern Making & Tech Pack Development': '纸样制作与技术资料开发',
  'Translate your concept into production-ready specifications with accurate sizing and fit consistency.': '将您的构想转化为可生产的规格，确保尺寸精准、版型一致。',
  'Fabric Sourcing & Custom Dyeing': '面料采购与定制染色',
  'Source premium materials and coordinate bespoke color matching for exact visual specifications.': '采购优质材料，并按视觉规格精准匹配定制颜色。',
  'Quality Control & Inspection': '质量控制与检验',
  'Implement strict inspection checkpoints to maintain consistent quality throughout every run.': '通过严格的检验环节，确保每批产品品质稳定。',
  'Global Shipping & Logistics': '全球运输与物流',
  'Coordinate air or sea freight and export documents so your inventory reaches destination smoothly.': '协调空运或海运及出口文件，确保货物顺利送达。',
  'Our process': '我们的流程',
  'The Manufacturing Process': '生产流程',
  'Sampling': '样品制作',
  'For each order we create a prototype for your approval, allowing you to test and refine the functionality of your design before bulk production.': '每笔订单都会先制作样品供您确认，便于您在批量生产前测试并完善设计。',
  'Production & QC': '生产与质量控制',
  'Bulk manufacture takes place on our production line, where all items are handmade and quality checked throughout the manufacturing journey.': '批量产品在线上生产，每件服装均经过精细制作，并在生产过程中持续进行质量检查。',
  'Delivery': '交付',
  'Once your order is complete and quality checked, it is approved for delivery via our network of reliable global couriers.': '订单完成并通过质量检查后，我们将通过可靠的全球承运网络安排发货。',
  'About us': '关于我们',
  'About Us': '关于我们',
  'Revolution Manufacturing is a leading custom clothing manufacturer based in Istanbul, Turkey, specializing in premium streetwear, hoodies, t-shirts, and activewear production.': 'Revolution Manufacturing 是一家位于土耳其伊斯坦布尔的定制服装制造商，专注于高端街头服饰、连帽衫、T 恤和运动服生产。',
  'We collaborate with various brands from Europe and America, providing private label clothing manufacturing, cut & sew services, and comprehensive production solutions.': '我们与欧洲和美洲的品牌合作，提供自有品牌服装制造、裁剪缝制服务及完整生产解决方案。',
  'Our Istanbul-based factory offers low MOQ options (75-100 units) for standard products, making us an ideal partner for emerging brands and established labels seeking reliable custom clothing production.': '我们在伊斯坦布尔的工厂为标准产品提供 75-100 件的低起订量，是新兴品牌和成熟品牌值得信赖的定制服装生产伙伴。',
  '“We searched for a long time until we finally found the production facility in Turkey that suits us best!”': '“经过长时间寻找，我们终于在土耳其找到了最适合我们的生产工厂！”',
  'Streetwear Brand in the United Kingdom': '英国街头服饰品牌',
  'Frequently asked questions': '常见问题',
  'Frequently Asked Questions': '常见问题',
  'What is the Minimum Order Quantity (MOQ)?': '最低起订量（MOQ）是多少？',
  'The minimum order quantity for our standard products such as hoodies, t-shirts, cardigans, croptops, shorts, and tracksuits is set at 75-100. For products like bags, jackets, or accessories, an individual arrangement is necessary.': '连帽衫、T 恤、开衫、短款上衣、短裤和运动服等标准产品的最低起订量为 75-100 件。包袋、夹克和配饰的数量可另行协商。',
  'How long does delivery take?': '交货需要多长时间？',
  'Classic products like hoodies, t-shirts, or cardigans are essential in our daily work and therefore, even with larger quantities, short delivery times are not a problem for us.': '连帽衫、T 恤和开衫等常规产品是我们的日常生产项目，因此即使数量较大，我们也能保持较短的交货周期。',
  'Can we receive a sample?': '可以提供样品吗？',
  'We are always happy to send our own samples after the introductory conversation. Please note that there may be an additional charge for samples with printing or embroidery.': '初步沟通后，我们很乐意寄送现有样品。带有印花或刺绣的样品可能需要额外收费。',
  'What is the difference between OEM and ODM?': 'OEM 和 ODM 有什么区别？',
  'OEM means we produce garments based on your existing designs and specifications. ODM includes design development, pattern making, and manufacturing services for brands with concepts but needing full design-to-production support.': 'OEM 是根据您现有的设计和规格进行生产。ODM 则为已有概念但需要支持的品牌提供设计开发、打版和生产服务。',
  'Do you offer private label clothing manufacturing?': '你们提供自有品牌服装制造吗？',
  'Yes, we specialize in private label clothing manufacturing. We produce custom garments under your brand name with your labels, tags, and packaging.': '是的。我们专注于自有品牌服装制造，可按您的品牌名称生产，并使用您的标签、吊牌和包装。',
  'Premium apparel manufacturing partner for the world\'s most ambitious brands.': '为全球最具雄心的品牌提供高端服装制造服务。',
  'Additional Links': '更多链接',
  'Halkali Central Neighborhood, Dereboyu Avenue No. 58, Floor 4': 'Halkali Merkez，Dereboyu 大道 58 号，4 楼',
  'Kucukcekmece, Istanbul, Turkey': '土耳其伊斯坦布尔 Kucukcekmece',
  '© 2025 Revolution Manufacturing. All rights reserved.': '© 2025 Revolution Manufacturing。版权所有。'
};

const spanishText = {
  'Home': 'Inicio',
  'Manufacturing': 'Fabricación',
  'Categories': 'Categorías',
  'Capabilities': 'Capacidades',
  'Process': 'Proceso',
  'About': 'Nosotros',
  'FAQ': 'Preguntas frecuentes',
  'Contact': 'Contacto',
  'Select language': 'Seleccionar idioma',
  'Custom Clothing Manufacturer': 'Fabricante de ropa personalizada',
  'OEM & ODM Apparel Production.': 'Producción de prendas OEM y ODM.',
  'Partner with Revolution Clo for end-to-end custom clothing manufacturing. We specialize in OEM, ODM, and cut & sew production for hoodies, t-shirts, activewear, and more.': 'Confía en Revolution Clo para la fabricación integral de ropa personalizada. Nos especializamos en producción OEM, ODM y corte y confección de sudaderas, camisetas, ropa deportiva y mucho más.',
  'COUNTRIES': 'PAÍSES',
  'MOQ': 'Pedido mínimo',
  'TURNAROUND': 'PLAZO',
  'Premium manufacturing': 'Fabricación prémium',
  'Premium Custom Clothing Manufacturing for Global Brands': 'Fabricación prémium de ropa personalizada para marcas globales',
  'OEM Apparel Manufacturing': 'Fabricación de prendas OEM',
  'Our Original Equipment Manufacturing (OEM) services enable you to produce custom clothing and private label apparel under your brand name. We work with your designs, tech packs, and specifications to manufacture garments that meet your exact requirements.': 'Nuestro servicio de fabricación OEM permite producir ropa personalizada y de marca propia con tu nombre. Trabajamos según tus diseños, fichas técnicas y especificaciones para cumplir exactamente tus requisitos.',
  'ODM Clothing Production': 'Producción de ropa ODM',
  'Original Design Manufacturing (ODM) services provide complete design-to-production solutions for custom clothing manufacturing. If you have a concept but need design development, pattern making, and manufacturing support, our ODM clothing factory services streamline the entire process.': 'Nuestro servicio ODM ofrece soluciones completas desde el diseño hasta la producción. Si tienes un concepto y necesitas desarrollar el diseño, crear patrones y fabricar las prendas, coordinamos todo el proceso.',
  'Cut & Sew Manufacturing Services': 'Servicios de corte y confección',
  'Our cut & sew manufacturing capabilities handle complex garment construction with precision for custom clothing production. From pattern cutting to final stitching, we ensure consistent quality.': 'Nuestra capacidad de corte y confección permite producir prendas complejas con precisión. Desde el corte de patrones hasta la última costura, garantizamos una calidad constante.',
  'Our promise': 'Nuestro compromiso',
  'Crafting Modern Streetwear.': 'Creamos moda urbana moderna.',
  'From concept to retail-ready, we manufacture the garments that define modern storefronts. Our partners trust us for consistent quality, perfect fit, and technical innovation.': 'Desde el concepto hasta el producto listo para la venta, fabricamos prendas que definen marcas modernas. Nuestros socios confían en nuestra calidad constante, ajuste preciso e innovación técnica.',
  'Premium Cotton': 'Algodón prémium',
  'Durable Stitching': 'Costuras resistentes',
  'Bespoke Fit': 'Ajuste personalizado',
  'Behind the scenes': 'Entre bastidores',
  'Our Production in Motion.': 'Nuestra producción en marcha.',
  'Take a closer look at our production facility and the meticulous processes we follow to ensure every garment meets the highest quality standards.': 'Descubre nuestras instalaciones y los rigurosos procesos que seguimos para garantizar los más altos estándares de calidad en cada prenda.',
  'Our Facility': 'Nuestras instalaciones',
  'Production Process': 'Proceso de producción',
  'Specialized product categories': 'Categorías especializadas',
  'Specialized Product Categories': 'Categorías de productos especializadas',
  'MOQ 75-100': 'Pedido mínimo: 75-100',
  'Activewear': 'Ropa deportiva',
  'Denim & Jackets': 'Vaqueros y chaquetas',
  'Heavyweight T-Shirts': 'Camisetas de tejido grueso',
  'Hoodies & Sweats': 'Sudaderas con capucha y sudaderas',
  'Quality in every detail': 'Calidad en cada detalle',
  'Precision in Every Stitch.': 'Precisión en cada puntada.',
  'High-Volume Production': 'Producción de gran volumen',
  'Capable of 50,000 units/month.': 'Capacidad de 50.000 unidades al mes.',
  'Premium Fabrics': 'Tejidos prémium',
  'Curated textiles and material sourcing for your product range.': 'Selección de tejidos y materiales para tu colección.',
  'Sustainability': 'Sostenibilidad',
  'Eco-minded production and responsible material choices.': 'Producción respetuosa con el medioambiente y selección responsable de materiales.',
  'Production expertise': 'Experiencia en producción',
  'Our Manufacturing Capabilities': 'Nuestras capacidades de fabricación',
  'We handle the heavy lifting. From tech packs to logistics.': 'Nos ocupamos de todo, desde las fichas técnicas hasta la logística.',
  'Pattern Making & Tech Pack Development': 'Patronaje y desarrollo de fichas técnicas',
  'Translate your concept into production-ready specifications with accurate sizing and fit consistency.': 'Convertimos tu concepto en especificaciones listas para producción, con tallas precisas y un ajuste uniforme.',
  'Fabric Sourcing & Custom Dyeing': 'Selección de tejidos y tintura personalizada',
  'Source premium materials and coordinate bespoke color matching for exact visual specifications.': 'Buscamos materiales prémium y coordinamos colores personalizados según tus especificaciones.',
  'Quality Control & Inspection': 'Control de calidad e inspección',
  'Implement strict inspection checkpoints to maintain consistent quality throughout every run.': 'Aplicamos controles rigurosos para mantener una calidad uniforme en cada producción.',
  'Global Shipping & Logistics': 'Envíos internacionales y logística',
  'Coordinate air or sea freight and export documents so your inventory reaches destination smoothly.': 'Coordinamos el transporte aéreo o marítimo y la documentación de exportación para que tu mercancía llegue sin problemas.',
  'Our process': 'Nuestro proceso',
  'The Manufacturing Process': 'El proceso de fabricación',
  'Sampling': 'Muestras',
  'For each order we create a prototype for your approval, allowing you to test and refine the functionality of your design before bulk production.': 'Preparamos un prototipo para cada pedido, para que puedas probar y perfeccionar el diseño antes de la producción en serie.',
  'Production & QC': 'Producción y control de calidad',
  'Bulk manufacture takes place on our production line, where all items are handmade and quality checked throughout the manufacturing journey.': 'La producción en serie se realiza en nuestra línea, donde cada prenda se confecciona y se revisa durante todo el proceso.',
  'Delivery': 'Entrega',
  'Once your order is complete and quality checked, it is approved for delivery via our network of reliable global couriers.': 'Una vez terminado y revisado tu pedido, lo enviamos mediante nuestra red de transportistas internacionales de confianza.',
  'About us': 'Sobre nosotros',
  'About Us': 'Sobre nosotros',
  'Revolution Manufacturing is a leading custom clothing manufacturer based in Istanbul, Turkey, specializing in premium streetwear, hoodies, t-shirts, and activewear production.': 'Revolution Manufacturing es un fabricante de ropa personalizada con sede en Estambul, Turquía, especializado en moda urbana prémium, sudaderas con capucha, camisetas y ropa deportiva.',
  'We collaborate with various brands from Europe and America, providing private label clothing manufacturing, cut & sew services, and comprehensive production solutions.': 'Colaboramos con marcas de Europa y América y ofrecemos fabricación de marca propia, servicios de corte y confección y soluciones integrales de producción.',
  'Our Istanbul-based factory offers low MOQ options (75-100 units) for standard products, making us an ideal partner for emerging brands and established labels seeking reliable custom clothing production.': 'Nuestra fábrica en Estambul ofrece pedidos mínimos bajos, de 75 a 100 unidades para productos estándar. Somos el socio ideal para marcas emergentes y consolidadas que buscan una producción fiable.',
  '“We searched for a long time until we finally found the production facility in Turkey that suits us best!”': '«Buscamos durante mucho tiempo hasta encontrar por fin en Turquía la fábrica que mejor se adapta a nosotros».',
  'Streetwear Brand in the United Kingdom': 'Marca de moda urbana del Reino Unido',
  'Frequently asked questions': 'Preguntas frecuentes',
  'Frequently Asked Questions': 'Preguntas frecuentes',
  'What is the Minimum Order Quantity (MOQ)?': '¿Cuál es la cantidad mínima de pedido (MOQ)?',
  'The minimum order quantity for our standard products such as hoodies, t-shirts, cardigans, croptops, shorts, and tracksuits is set at 75-100. For products like bags, jackets, or accessories, an individual arrangement is necessary.': 'La cantidad mínima para productos estándar como sudaderas, camisetas, cárdigans, tops cortos, pantalones cortos y chándales es de 75 a 100 unidades. Para bolsos, chaquetas y accesorios, acordamos la cantidad individualmente.',
  'How long does delivery take?': '¿Cuánto tarda la entrega?',
  'Classic products like hoodies, t-shirts, or cardigans are essential in our daily work and therefore, even with larger quantities, short delivery times are not a problem for us.': 'Las sudaderas, camisetas y cárdigans forman parte de nuestra producción diaria, por lo que podemos ofrecer plazos cortos incluso para cantidades grandes.',
  'Can we receive a sample?': '¿Podemos recibir una muestra?',
  'We are always happy to send our own samples after the introductory conversation. Please note that there may be an additional charge for samples with printing or embroidery.': 'Después de la primera conversación, estaremos encantados de enviarte nuestras muestras. Las muestras con estampado o bordado pueden tener un coste adicional.',
  'What is the difference between OEM and ODM?': '¿Cuál es la diferencia entre OEM y ODM?',
  'OEM means we produce garments based on your existing designs and specifications. ODM includes design development, pattern making, and manufacturing services for brands with concepts but needing full design-to-production support.': 'En OEM fabricamos prendas según tus diseños y especificaciones existentes. ODM incluye desarrollo del diseño, patronaje y fabricación para acompañarte desde el concepto hasta el producto final.',
  'Do you offer private label clothing manufacturing?': '¿Ofrecéis fabricación de ropa de marca propia?',
  'Yes, we specialize in private label clothing manufacturing. We produce custom garments under your brand name with your labels, tags, and packaging.': 'Sí. Fabricamos prendas personalizadas con tu marca, etiquetas, rótulos y embalaje.',
  'Premium apparel manufacturing partner for the world\'s most ambitious brands.': 'Socio de fabricación prémium para las marcas más ambiciosas del mundo.',
  'Additional Links': 'Enlaces adicionales',
  'Halkali Central Neighborhood, Dereboyu Avenue No. 58, Floor 4': 'Halkali Merkez, avenida Dereboyu n.º 58, planta 4',
  'Kucukcekmece, Istanbul, Turkey': 'Kucukcekmece, Estambul, Turquía',
  '© 2025 Revolution Manufacturing. All rights reserved.': '© 2025 Revolution Manufacturing. Todos los derechos reservados.'
};

const arabicText = {
  'Home': 'الرئيسية',
  'Manufacturing': 'التصنيع',
  'Categories': 'الفئات',
  'Capabilities': 'قدراتنا',
  'Process': 'العملية',
  'About': 'من نحن',
  'FAQ': 'الأسئلة الشائعة',
  'Contact': 'اتصل بنا',
  'Select language': 'اختر اللغة',
  'Custom Clothing Manufacturer': 'مصنّع ملابس حسب الطلب',
  'OEM & ODM Apparel Production.': 'تصنيع الملابس بنظامي OEM وODM.',
  'Partner with Revolution Clo for end-to-end custom clothing manufacturing. We specialize in OEM, ODM, and cut & sew production for hoodies, t-shirts, activewear, and more.': 'تعاون مع Revolution Clo لتصنيع الملابس حسب الطلب من البداية إلى النهاية. نحن متخصصون في إنتاج الملابس بنظامي OEM وODM والقص والخياطة للسترات ذات القلنسوة والقمصان والملابس الرياضية وغيرها.',
  'COUNTRIES': 'دولة',
  'MOQ': 'الحد الأدنى للطلب',
  'TURNAROUND': 'مدة الإنتاج',
  'Premium manufacturing': 'تصنيع فاخر',
  'Premium Custom Clothing Manufacturing for Global Brands': 'تصنيع ملابس مخصصة عالية الجودة للعلامات التجارية العالمية',
  'OEM Apparel Manufacturing': 'تصنيع الملابس بنظام OEM',
  'Our Original Equipment Manufacturing (OEM) services enable you to produce custom clothing and private label apparel under your brand name. We work with your designs, tech packs, and specifications to manufacture garments that meet your exact requirements.': 'تتيح لك خدمات التصنيع الأصلي (OEM) إنتاج ملابس مخصصة وملابس بعلامتك التجارية. نعمل وفق تصميماتك وملفات المواصفات الفنية ومتطلباتك الدقيقة.',
  'ODM Clothing Production': 'إنتاج الملابس بنظام ODM',
  'Original Design Manufacturing (ODM) services provide complete design-to-production solutions for custom clothing manufacturing. If you have a concept but need design development, pattern making, and manufacturing support, our ODM clothing factory services streamline the entire process.': 'توفر خدمات التصميم والتصنيع الأصلي (ODM) حلولاً متكاملة من التصميم إلى الإنتاج. إذا كانت لديك فكرة وتحتاج إلى تطوير التصميم وإعداد النماذج ودعم التصنيع، فإننا ندير العملية بالكامل.',
  'Cut & Sew Manufacturing Services': 'خدمات القص والخياطة',
  'Our cut & sew manufacturing capabilities handle complex garment construction with precision for custom clothing production. From pattern cutting to final stitching, we ensure consistent quality.': 'نتعامل بدقة مع تصاميم الملابس المعقدة. من قص النماذج إلى الغرزة الأخيرة، نضمن جودة ثابتة في كل مرحلة.',
  'Our promise': 'وعدنا',
  'Crafting Modern Streetwear.': 'نصنع أزياء الشارع العصرية.',
  'From concept to retail-ready, we manufacture the garments that define modern storefronts. Our partners trust us for consistent quality, perfect fit, and technical innovation.': 'من الفكرة إلى المنتج الجاهز للبيع، نصنع الملابس التي تميز العلامات التجارية الحديثة. يثق بنا شركاؤنا لجودة ثابتة ومقاس مثالي وابتكار تقني.',
  'Premium Cotton': 'قطن فاخر',
  'Durable Stitching': 'خياطة متينة',
  'Bespoke Fit': 'قَصّة مخصصة',
  'Behind the scenes': 'من خلف الكواليس',
  'Our Production in Motion.': 'الإنتاج لدينا على أرض الواقع.',
  'Take a closer look at our production facility and the meticulous processes we follow to ensure every garment meets the highest quality standards.': 'اكتشف منشأة الإنتاج لدينا والعمليات الدقيقة التي نتبعها لضمان مطابقة كل قطعة لأعلى معايير الجودة.',
  'Our Facility': 'منشأتنا',
  'Production Process': 'مراحل الإنتاج',
  'Specialized product categories': 'فئات منتجاتنا المتخصصة',
  'Specialized Product Categories': 'فئات المنتجات المتخصصة',
  'MOQ 75-100': 'الحد الأدنى 75-100 قطعة',
  'Activewear': 'ملابس رياضية',
  'Denim & Jackets': 'الجينز والسترات',
  'Heavyweight T-Shirts': 'قمصان تي شيرت ثقيلة',
  'Hoodies & Sweats': 'سترات بقلنسوة وملابس رياضية',
  'Quality in every detail': 'الجودة في كل تفصيل',
  'Precision in Every Stitch.': 'دقة في كل غرزة.',
  'High-Volume Production': 'إنتاج بكميات كبيرة',
  'Capable of 50,000 units/month.': 'قدرة إنتاجية تصل إلى 50,000 قطعة شهرياً.',
  'Premium Fabrics': 'أقمشة فاخرة',
  'Curated textiles and material sourcing for your product range.': 'اختيار الأقمشة وتأمين المواد المناسبة لمجموعتك.',
  'Sustainability': 'الاستدامة',
  'Eco-minded production and responsible material choices.': 'إنتاج يراعي البيئة واختيار مسؤول للمواد.',
  'Production expertise': 'خبرة التصنيع',
  'Our Manufacturing Capabilities': 'قدراتنا التصنيعية',
  'We handle the heavy lifting. From tech packs to logistics.': 'نتولى التفاصيل كافة، من ملفات المواصفات الفنية إلى الخدمات اللوجستية.',
  'Pattern Making & Tech Pack Development': 'إعداد النماذج وتطوير ملفات المواصفات الفنية',
  'Translate your concept into production-ready specifications with accurate sizing and fit consistency.': 'نحوّل فكرتك إلى مواصفات جاهزة للإنتاج مع مقاسات دقيقة وقصّة متناسقة.',
  'Fabric Sourcing & Custom Dyeing': 'توريد الأقمشة والصباغة المخصصة',
  'Source premium materials and coordinate bespoke color matching for exact visual specifications.': 'نؤمّن مواد عالية الجودة ونطابق الألوان المخصصة وفقاً لمواصفاتك البصرية.',
  'Quality Control & Inspection': 'مراقبة الجودة والتفتيش',
  'Implement strict inspection checkpoints to maintain consistent quality throughout every run.': 'نطبق نقاط فحص دقيقة للحفاظ على جودة ثابتة في كل دفعة إنتاج.',
  'Global Shipping & Logistics': 'الشحن والخدمات اللوجستية العالمية',
  'Coordinate air or sea freight and export documents so your inventory reaches destination smoothly.': 'ننسق الشحن الجوي أو البحري ووثائق التصدير لضمان وصول بضاعتك بسلاسة.',
  'Our process': 'مراحل عملنا',
  'The Manufacturing Process': 'عملية التصنيع',
  'Sampling': 'إعداد العينات',
  'For each order we create a prototype for your approval, allowing you to test and refine the functionality of your design before bulk production.': 'نعد نموذجاً أولياً لكل طلب لمراجعته، لتتمكن من اختبار تصميمك وتحسينه قبل بدء الإنتاج بكميات كبيرة.',
  'Production & QC': 'الإنتاج ومراقبة الجودة',
  'Bulk manufacture takes place on our production line, where all items are handmade and quality checked throughout the manufacturing journey.': 'يتم الإنتاج بكميات كبيرة على خط الإنتاج لدينا، حيث تُصنع جميع القطع بعناية وتُفحص جودتها في كل مرحلة.',
  'Delivery': 'التسليم',
  'Once your order is complete and quality checked, it is approved for delivery via our network of reliable global couriers.': 'بعد اكتمال طلبك وفحص جودته، نرسله عبر شبكة شركات الشحن الدولية الموثوقة لدينا.',
  'About us': 'من نحن',
  'About Us': 'من نحن',
  'Revolution Manufacturing is a leading custom clothing manufacturer based in Istanbul, Turkey, specializing in premium streetwear, hoodies, t-shirts, and activewear production.': 'Revolution Manufacturing شركة رائدة لتصنيع الملابس حسب الطلب، مقرها إسطنبول في تركيا، ومتخصصة في أزياء الشارع الفاخرة والسترات ذات القلنسوة والقمصان والملابس الرياضية.',
  'We collaborate with various brands from Europe and America, providing private label clothing manufacturing, cut & sew services, and comprehensive production solutions.': 'نتعاون مع علامات تجارية من أوروبا وأمريكا ونقدم تصنيع الملابس بعلامات خاصة وخدمات القص والخياطة وحلول إنتاج متكاملة.',
  'Our Istanbul-based factory offers low MOQ options (75-100 units) for standard products, making us an ideal partner for emerging brands and established labels seeking reliable custom clothing production.': 'يوفر مصنعنا في إسطنبول حداً أدنى منخفضاً للطلبات من 75 إلى 100 قطعة للمنتجات القياسية، مما يجعلنا شريكاً مثالياً للعلامات التجارية الناشئة والراسخة.',
  '“We searched for a long time until we finally found the production facility in Turkey that suits us best!”': '"بحثنا طويلاً حتى وجدنا أخيراً منشأة الإنتاج في تركيا الأنسب لنا!"',
  'Streetwear Brand in the United Kingdom': 'علامة أزياء شارع من المملكة المتحدة',
  'Frequently asked questions': 'الأسئلة الشائعة',
  'Frequently Asked Questions': 'الأسئلة الشائعة',
  'What is the Minimum Order Quantity (MOQ)?': 'ما الحد الأدنى لكمية الطلب؟',
  'The minimum order quantity for our standard products such as hoodies, t-shirts, cardigans, croptops, shorts, and tracksuits is set at 75-100. For products like bags, jackets, or accessories, an individual arrangement is necessary.': 'الحد الأدنى للمنتجات القياسية مثل السترات ذات القلنسوة والقمصان والسترات الصوفية والسراويل القصيرة والبدلات الرياضية هو 75 إلى 100 قطعة. أما الحقائب والسترات والإكسسوارات فتُحدد كمياتها بالاتفاق.',
  'How long does delivery take?': 'كم تستغرق مدة التسليم؟',
  'Classic products like hoodies, t-shirts, or cardigans are essential in our daily work and therefore, even with larger quantities, short delivery times are not a problem for us.': 'تُعد المنتجات الأساسية مثل السترات ذات القلنسوة والقمصان والسترات الصوفية جزءاً من إنتاجنا اليومي، لذلك يمكننا توفير مواعيد تسليم قصيرة حتى للكميات الكبيرة.',
  'Can we receive a sample?': 'هل يمكننا الحصول على عينة؟',
  'We are always happy to send our own samples after the introductory conversation. Please note that there may be an additional charge for samples with printing or embroidery.': 'يسعدنا إرسال عيناتنا بعد المحادثة التعريفية. يرجى ملاحظة أن العينات التي تتضمن طباعة أو تطريزاً قد تخضع لرسوم إضافية.',
  'What is the difference between OEM and ODM?': 'ما الفرق بين OEM وODM؟',
  'OEM means we produce garments based on your existing designs and specifications. ODM includes design development, pattern making, and manufacturing services for brands with concepts but needing full design-to-production support.': 'يعني OEM أننا نصنع الملابس وفق تصميماتك ومواصفاتك الحالية. أما ODM فيشمل تطوير التصميم وإعداد النماذج والتصنيع، من الفكرة حتى المنتج النهائي.',
  'Do you offer private label clothing manufacturing?': 'هل تقدمون تصنيع الملابس بعلامة تجارية خاصة؟',
  'Yes, we specialize in private label clothing manufacturing. We produce custom garments under your brand name with your labels, tags, and packaging.': 'نعم. نحن متخصصون في تصنيع الملابس حسب الطلب باسم علامتك التجارية وملصقاتك وبطاقاتك وعبواتك.',
  'Premium apparel manufacturing partner for the world\'s most ambitious brands.': 'شريك تصنيع ملابس فاخر لأكثر العلامات التجارية طموحاً في العالم.',
  'Additional Links': 'روابط إضافية',
  'Halkali Central Neighborhood, Dereboyu Avenue No. 58, Floor 4': 'Halkali Merkez، شارع Dereboyu رقم 58، الطابق الرابع',
  'Kucukcekmece, Istanbul, Turkey': 'Kucukcekmece، إسطنبول، تركيا',
  '© 2025 Revolution Manufacturing. All rights reserved.': '© 2025 Revolution Manufacturing. جميع الحقوق محفوظة.'
};

const turkishAttributes = {
  'Revolution Clo home': 'Revolution Clo ana sayfa',
  'Toggle navigation': 'Menüyü aç veya kapat',
  'Main navigation': 'Ana menü',
  'Select language': 'Dil seçin',
  'Summary statistics': 'Özet istatistikler',
  'Video tour of our production facility': 'Üretim tesisimizi tanıtan video',
  'Video showing our garment production process': 'Giyim üretim sürecimizi gösteren video',
  'Custom clothing manufacturing factory producing premium garments': 'Üstün kaliteli giysiler üreten özel giyim fabrikası',
  'OEM Apparel Manufacturing': 'OEM giyim üretimi',
  'ODM Clothing Production': 'ODM giyim üretimi',
  'Cut & Sew Manufacturing Services': 'Kesim ve dikim üretim hizmetleri',
  'Premium fabrics and materials': 'Üstün kaliteli kumaş ve malzemeler',
  'Activewear manufacturing': 'Spor giyim üretimi',
  'Denim & Jackets manufacturing': 'Denim ve ceket üretimi',
  'Heavyweight T-Shirts manufacturing': 'Kalın kumaş tişört üretimi',
  'Hoodies & Sweats manufacturing': 'Hoodie ve sweatshirt üretimi'
};

const frenchAttributes = {
  'Revolution Clo home': 'Accueil Revolution Clo',
  'Toggle navigation': 'Afficher ou masquer la navigation',
  'Main navigation': 'Navigation principale',
  'Select language': 'Choisir la langue',
  'Summary statistics': 'Chiffres clés',
  'Video tour of our production facility': 'Visite vidéo de notre atelier de production',
  'Video showing our garment production process': 'Vidéo de notre processus de fabrication',
  'Custom clothing manufacturing factory producing premium garments': 'Usine de fabrication de vêtements personnalisés haut de gamme',
  'OEM Apparel Manufacturing': 'Fabrication de vêtements OEM',
  'ODM Clothing Production': 'Production de vêtements ODM',
  'Cut & Sew Manufacturing Services': 'Services de coupe et confection',
  'Premium fabrics and materials': 'Tissus et matières haut de gamme',
  'Activewear manufacturing': 'Fabrication de vêtements de sport',
  'Denim & Jackets manufacturing': 'Fabrication de denim et de vestes',
  'Heavyweight T-Shirts manufacturing': 'Fabrication de t-shirts épais',
  'Hoodies & Sweats manufacturing': 'Fabrication de sweats et sweats à capuche'
};

const chineseAttributes = {
  'Revolution Clo home': 'Revolution Clo 首页',
  'Toggle navigation': '切换导航菜单',
  'Main navigation': '主导航',
  'Select language': '选择语言',
  'Summary statistics': '概览数据',
  'Video tour of our production facility': '生产工厂介绍视频',
  'Video showing our garment production process': '服装生产流程视频',
  'Custom clothing manufacturing factory producing premium garments': '生产高品质服装的定制服装工厂',
  'OEM Apparel Manufacturing': 'OEM 服装制造',
  'ODM Clothing Production': 'ODM 服装生产',
  'Cut & Sew Manufacturing Services': '裁剪与缝制服务',
  'Premium fabrics and materials': '优质面料与材料',
  'Activewear manufacturing': '运动服生产',
  'Denim & Jackets manufacturing': '牛仔服与夹克生产',
  'Heavyweight T-Shirts manufacturing': '重磅 T 恤生产',
  'Hoodies & Sweats manufacturing': '连帽衫与卫衣生产'
};

const spanishAttributes = {
  'Revolution Clo home': 'Inicio de Revolution Clo',
  'Toggle navigation': 'Mostrar u ocultar navegación',
  'Main navigation': 'Navegación principal',
  'Select language': 'Seleccionar idioma',
  'Summary statistics': 'Datos resumidos',
  'Video tour of our production facility': 'Vídeo de nuestras instalaciones de producción',
  'Video showing our garment production process': 'Vídeo de nuestro proceso de fabricación',
  'Custom clothing manufacturing factory producing premium garments': 'Fábrica de ropa personalizada de alta calidad',
  'OEM Apparel Manufacturing': 'Fabricación de prendas OEM',
  'ODM Clothing Production': 'Producción de ropa ODM',
  'Cut & Sew Manufacturing Services': 'Servicios de corte y confección',
  'Premium fabrics and materials': 'Tejidos y materiales prémium',
  'Activewear manufacturing': 'Fabricación de ropa deportiva',
  'Denim & Jackets manufacturing': 'Fabricación de vaqueros y chaquetas',
  'Heavyweight T-Shirts manufacturing': 'Fabricación de camisetas gruesas',
  'Hoodies & Sweats manufacturing': 'Fabricación de sudaderas y sudaderas con capucha'
};

const arabicAttributes = {
  'Revolution Clo home': 'الصفحة الرئيسية لـ Revolution Clo',
  'Toggle navigation': 'إظهار أو إخفاء القائمة',
  'Main navigation': 'القائمة الرئيسية',
  'Select language': 'اختر اللغة',
  'Summary statistics': 'إحصاءات موجزة',
  'Video tour of our production facility': 'جولة فيديو في منشأة الإنتاج لدينا',
  'Video showing our garment production process': 'فيديو يوضح عملية تصنيع الملابس لدينا',
  'Custom clothing manufacturing factory producing premium garments': 'مصنع ملابس مخصصة ينتج ملابس عالية الجودة',
  'OEM Apparel Manufacturing': 'تصنيع الملابس بنظام OEM',
  'ODM Clothing Production': 'إنتاج الملابس بنظام ODM',
  'Cut & Sew Manufacturing Services': 'خدمات القص والخياطة',
  'Premium fabrics and materials': 'أقمشة ومواد فاخرة',
  'Activewear manufacturing': 'تصنيع الملابس الرياضية',
  'Denim & Jackets manufacturing': 'تصنيع الجينز والسترات',
  'Heavyweight T-Shirts manufacturing': 'تصنيع قمصان تي شيرت ثقيلة',
  'Hoodies & Sweats manufacturing': 'تصنيع السترات ذات القلنسوة والملابس الرياضية'
};

const textDictionaries = {
  de: germanText,
  tr: turkishText,
  fr: frenchText,
  zh: chineseText,
  es: spanishText,
  ar: arabicText
};

const attributeDictionaries = {
  de: germanAttributes,
  tr: turkishAttributes,
  fr: frenchAttributes,
  zh: chineseAttributes,
  es: spanishAttributes,
  ar: arabicAttributes
};

const themeLabels = {
  en: { dark: 'Switch to dark mode', light: 'Switch to light mode', title: 'Toggle theme' },
  de: { dark: 'Dunkelmodus aktivieren', light: 'Hellmodus aktivieren', title: 'Design umschalten' },
  tr: { dark: 'Gece moduna geç', light: 'Gündüz moduna geç', title: 'Temayı değiştir' },
  fr: { dark: 'Activer le mode sombre', light: 'Activer le mode clair', title: 'Changer de thème' },
  zh: { dark: '切换到深色模式', light: '切换到浅色模式', title: '切换主题' },
  es: { dark: 'Activar modo oscuro', light: 'Activar modo claro', title: 'Cambiar tema' },
  ar: { dark: 'التبديل إلى الوضع الداكن', light: 'التبديل إلى الوضع الفاتح', title: 'تغيير المظهر' }
};

const pageMetadata = {
  en: {
    title: 'Revolution Clo | OEM & ODM Apparel Production',
    description: 'Revolution Clo custom clothing manufacturer for OEM, ODM and cut & sew apparel production. Premium streetwear, hoodies, t-shirts, activewear and private label manufacturing.'
  },
  de: {
    title: 'Revolution Clo | OEM- und ODM-Bekleidungsproduktion',
    description: 'Revolution Clo ist Hersteller für OEM-, ODM- und Cut-and-Sew-Bekleidung. Hochwertige Streetwear, Hoodies, T-Shirts, Activewear und Private-Label-Produktion.'
  },
  tr: {
    title: 'Revolution Clo | OEM ve ODM Giyim Üretimi',
    description: 'Revolution Clo; OEM, ODM ve kesim-dikim giyim üretiminde uzman, İstanbul merkezli özel giyim üreticisidir.'
  },
  fr: {
    title: 'Revolution Clo | Production de vêtements OEM et ODM',
    description: 'Revolution Clo, fabricant de vêtements personnalisés spécialisé dans la production OEM, ODM et coupe-couture. Streetwear haut de gamme, sweats, t-shirts, vêtements de sport et marque propre.'
  },
  zh: {
    title: 'Revolution Clo | OEM 与 ODM 服装生产',
    description: 'Revolution Clo 专注于 OEM、ODM 和裁剪缝制服装生产，提供高端街头服饰、连帽衫、T 恤、运动服和自有品牌制造服务。'
  },
  es: {
    title: 'Revolution Clo | Producción de prendas OEM y ODM',
    description: 'Revolution Clo fabrica ropa personalizada y se especializa en producción OEM, ODM y corte y confección. Moda urbana prémium, sudaderas, camisetas, ropa deportiva y marca propia.'
  },
  ar: {
    title: 'Revolution Clo | تصنيع الملابس بنظامي OEM وODM',
    description: 'Revolution Clo شركة متخصصة في تصنيع الملابس حسب الطلب بنظامي OEM وODM والقص والخياطة، بما في ذلك أزياء الشارع والسترات والقمصان والملابس الرياضية والعلامات التجارية الخاصة.'
  }
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
  const labels = themeLabels[currentLanguage] || themeLabels.en;
  document.body.dataset.theme = theme;
  if (!themeToggle) return;

  themeToggle.setAttribute('aria-pressed', String(isLight));
  themeToggle.setAttribute('aria-label', isLight ? labels.dark : labels.light);
  themeToggle.title = labels.title;
  localStorage.setItem('revolution-theme', theme);
};

setTheme(initialTheme);

const applyLanguage = (language) => {
  const resolvedLanguage = supportedLanguages.includes(language) ? language : 'en';
  currentLanguage = resolvedLanguage;
  document.documentElement.lang = resolvedLanguage;
  document.documentElement.dir = resolvedLanguage === 'ar' ? 'rtl' : 'ltr';
  document.body.dataset.language = resolvedLanguage;

  const textDictionary = textDictionaries[resolvedLanguage];
  const attributeDictionary = attributeDictionaries[resolvedLanguage];

  textNodes.forEach(({ node, key }) => {
    node.nodeValue = textDictionary?.[key] || key;
  });

  translatableAttributes.forEach(({ element, attribute, value }) => {
    element.setAttribute(attribute, attributeDictionary?.[value] || value);
  });

  const description = document.querySelector('meta[name="description"]');
  const metadata = pageMetadata[resolvedLanguage] || pageMetadata.en;
  if (description) description.content = metadata.description;

  document.title = metadata.title;

  if (languageSelect) languageSelect.value = resolvedLanguage;
  localStorage.setItem('revolution-language', resolvedLanguage);
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
