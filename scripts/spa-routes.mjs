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
  'jak-zaczac': ['Od czego zacząć w Twoim domu', 'Nowy dom, gotowe mieszkanie albo najpierw wejście i kamery: co zwykle robimy i od czego zależy cena.'],
  faq: ['Pytania i odpowiedzi', 'Czy dom działa bez internetu, czy trzeba kuć ściany, ile trwa montaż. Odpowiedzi prostym językiem.'],
  zapytanie: ['Zapytanie o Twój dom', 'Zaznacz, co Cię interesuje, i zostaw kontakt. Oddzwonimy z propozycją, zwykle w 24 godziny robocze.'],
  'inteligentny-dom-warszawa': ['Inteligentny dom w Warszawie i okolicach', 'Światło, rolety, ogrzewanie i ochrona przed zalaniem, które działają same i z telefonu. Także w gotowym mieszkaniu, bez kucia ścian.'],
  'wideodomofon-i-kamery-warszawa': ['Wideodomofon i kamery w Warszawie i okolicach', 'Rozmowa z gościem przy furtce z telefonu, kamery z kolorowym obrazem w nocy i nagrania na dysku w domu, bez abonamentu.'],
  'ochrona-przed-zalaniem': ['Ochrona przed zalaniem: czujnik sam zakręca wodę', 'Czujnik pod pralką czy zmywarką wykrywa wyciek, a woda od razu się zakręca. Powiadomienie w telefonie, działa bez internetu.'],
  'automatyka-bez-kucia': ['Inteligentne mieszkanie bez kucia ścian', 'Małe moduły za zwykłymi włącznikami, głowice na grzejnikach i czujniki na baterie. Ściany, płytki i gładzie zostają całe.'],
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
    .replace('</head>', `  <link rel="canonical" href="${url}" />\n  </head>`)
    .replace(/(<meta property="og:url" content=")[^"]*(")/, `$1${url}$2`);

writeFileSync('dist/index.html', html.replace('</head>', `  <link rel="canonical" href="${SITE}" />\n  </head>`));
for (const [route, [title, desc]] of Object.entries(ROUTES)) {
  mkdirSync(`dist/${route}`, { recursive: true });
  writeFileSync(`dist/${route}/index.html`, withMeta(title, desc, `${SITE}${route}/`));
}
// Old addresses keep working: a static page that forwards to the new one
const REDIRECTS = { pakiety: 'jak-zaczac' };
for (const [from, to] of Object.entries(REDIRECTS)) {
  mkdirSync(`dist/${from}`, { recursive: true });
  writeFileSync(`dist/${from}/index.html`, `<!doctype html><meta charset="utf-8"><title>DOMENCE</title><link rel="canonical" href="${SITE}${to}/"><meta name="robots" content="noindex"><meta http-equiv="refresh" content="0; url=${SITE}${to}/"><a href="${SITE}${to}/">${SITE}${to}/</a>\n`);
}
writeFileSync('dist/404.html', html.replace('</head>', '  <meta name="robots" content="noindex" />\n  </head>'));

const urls = ['', ...Object.keys(ROUTES).map((r) => `${r}/`)];
writeFileSync('dist/sitemap.xml', `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map((u) => `  <url><loc>${SITE}${u}</loc></url>`).join('\n')}\n</urlset>\n`);
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nSitemap: ${SITE}sitemap.xml\n`);
console.log(`spa-routes: ${Object.keys(ROUTES).length} routes, 404.html, sitemap.xml, robots.txt`);
