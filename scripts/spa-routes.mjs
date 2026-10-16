// After `vite build`: give every route its own index.html so GitHub Pages
// answers /domence/systemy/ with 200 and search engines see a page-specific
// title, description and canonical URL. Unknown paths fall back to 404.html.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';

const SITE = 'https://innadidenko46-oss.github.io/domence/';
const ROUTES = {
  systemy: ['Światło, rolety i ogrzewanie z telefonu', 'Sterowanie światłem, roletami i ogrzewaniem z włączników i telefonu. Do nowego domu i gotowego mieszkania, także bez kucia.'],
  teletechnika: ['Kamery, wideodomofon i internet w domu', 'Kamery z kolorowym obrazem w nocy, wideodomofon w telefonie i szybki internet. Nagrania zostają w domu, bez abonamentu.'],
  multimedia: ['Kino w salonie i gość przy furtce', 'Scena „Kino” jednym przyciskiem: rolety, światło i ekran. Gościa przy furtce widzisz na panelu w domu i w telefonie.'],
  scenariusze: ['Scenariusze: co dom robi za Ciebie', 'Przykłady automatyki na co dzień: wyjście z domu, ochrona przed zalaniem, wieczór filmowy, spokojny sen.'],
  pakiety: ['Gotowe zestawy z montażem', 'Zestawy do gotowego mieszkania bez kucia i do nowego domu. Cena na piśmie przed startem.'],
  faq: ['Pytania i odpowiedzi', 'Czy dom działa bez internetu, czy trzeba kuć ściany, ile trwa montaż. Odpowiedzi prostym językiem.'],
  zapytanie: ['Zapytanie o Twój dom', 'Zaznacz, co Cię interesuje, i zostaw kontakt. Oddzwonimy z propozycją, zwykle w 24 godziny robocze.'],
  kontakt: ['Kontakt z inżynierem', 'Warszawa i okolice. Napisz, czego potrzebujesz, a oddzwonimy z propozycją.'],
};

const esc = (s) => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const html = readFileSync('dist/index.html', 'utf8');
const withMeta = (title, desc, url) =>
  html
    .replace(/<title>[^<]*<\/title>/, `<title>${esc(title)} | DOMENCE</title>`)
    .replace(/(<meta name="description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
    .replace(/(<meta property="og:title" content=")[^"]*(")/, `$1${esc(title)} | DOMENCE$2`)
    .replace(/(<meta property="og:description" content=")[^"]*(")/, `$1${esc(desc)}$2`)
    .replace('</head>', `  <link rel="canonical" href="${url}" />\n  </head>`);

writeFileSync('dist/index.html', html.replace('</head>', `  <link rel="canonical" href="${SITE}" />\n  </head>`));
for (const [route, [title, desc]] of Object.entries(ROUTES)) {
  mkdirSync(`dist/${route}`, { recursive: true });
  writeFileSync(`dist/${route}/index.html`, withMeta(title, desc, `${SITE}${route}/`));
}
writeFileSync('dist/404.html', html);

const urls = ['', ...Object.keys(ROUTES).map((r) => `${r}/`)];
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE}sitemap.xml\n`);
console.log(`spa-routes: ${Object.keys(ROUTES).length} routes, 404.html, sitemap.xml, robots.txt`);
