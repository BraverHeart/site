const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const themeToggle = document.querySelector('.theme-toggle');
const languageSelect = document.querySelector('#site-language');

const savedTheme = localStorage.getItem('revolution-theme');
const initialTheme = savedTheme === 'light' || savedTheme === 'dark' ? savedTheme : 'dark';
const savedLanguage = localStorage.getItem('revolution-language');
const supportedLanguages = ['en', 'de', 'tr'];
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
      : currentLanguage === 'tr'
        ? (isLight ? 'Gece moduna geç' : 'Gündüz moduna geç')
        : (isLight ? 'Switch to dark mode' : 'Switch to light mode')
  );
  themeToggle.title = currentLanguage === 'de'
    ? 'Design umschalten'
    : currentLanguage === 'tr' ? 'Temayı değiştir' : 'Toggle theme';
  localStorage.setItem('revolution-theme', theme);
};

setTheme(initialTheme);

const applyLanguage = (language) => {
  const resolvedLanguage = supportedLanguages.includes(language) ? language : 'en';
  currentLanguage = resolvedLanguage;
  document.documentElement.lang = resolvedLanguage;
  document.body.dataset.language = resolvedLanguage;

  const textDictionary = resolvedLanguage === 'de' ? germanText : resolvedLanguage === 'tr' ? turkishText : null;
  const attributeDictionary = resolvedLanguage === 'de'
    ? germanAttributes
    : resolvedLanguage === 'tr' ? turkishAttributes : null;

  textNodes.forEach(({ node, key }) => {
    node.nodeValue = textDictionary?.[key] || key;
  });

  translatableAttributes.forEach(({ element, attribute, value }) => {
    element.setAttribute(attribute, attributeDictionary?.[value] || value);
  });

  const description = document.querySelector('meta[name="description"]');
  if (description) {
    description.content = resolvedLanguage === 'de'
      ? 'Revolution Clo ist Hersteller für OEM-, ODM- und Cut-and-Sew-Bekleidung. Hochwertige Streetwear, Hoodies, T-Shirts, Activewear und Private-Label-Produktion.'
      : resolvedLanguage === 'tr'
        ? 'Revolution Clo; OEM, ODM ve kesim-dikim giyim üretiminde uzman, İstanbul merkezli özel giyim üreticisidir.'
        : 'Revolution Clo custom clothing manufacturer for OEM, ODM and cut & sew apparel production. Premium streetwear, hoodies, t-shirts, activewear and private label manufacturing.';
  }

  document.title = resolvedLanguage === 'de'
    ? 'Revolution Clo | OEM- und ODM-Bekleidungsproduktion'
    : resolvedLanguage === 'tr'
      ? 'Revolution Clo | OEM ve ODM Giyim Üretimi'
      : 'Revolution Clo | OEM & ODM Apparel Production';

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
