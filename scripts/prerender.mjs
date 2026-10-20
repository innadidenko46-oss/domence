// After `vite build` (browser files in dist/) and `vite build --ssr` (dist-ssr/):
// renders every page of src/data/pages.json to static HTML with its own title,
// description, canonical address and structured data, so search engines and visitors
// without JavaScript get the full page. Also writes 404.html, the redirect pages,
// sitemap.xml and robots.txt, and stops the build when the page lists disagree.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, rmSync } from 'node:fs';
import { pathToFileURL } from 'node:url';
import { loadEnv } from 'vite';

const site = JSON.parse(readFileSync('src/config/site.json', 'utf8'));
const pages = JSON.parse(readFileSync('src/data/pages.json', 'utf8'));
const vercel = JSON.parse(readFileSync('vercel.json', 'utf8'));
const { render, ROUTE_PATHS, REDIRECTS } = await import(pathToFileURL('dist-ssr/entry-server.js').href);

const fail = (msg) => {
  console.error(`prerender: ${msg}`);
  process.exit(1);
};

// The page lists must agree: routes (src/routes.tsx), meta (pages.json), redirects (vercel.json)
const listed = Object.keys(pages);
const missingMeta = ROUTE_PATHS.filter((p) => !listed.includes(p));
const missingRoute = listed.filter((p) => !ROUTE_PATHS.includes(p));
if (missingMeta.length) fail(`routes without an entry in src/data/pages.json: ${missingMeta.join(', ')}`);
if (missingRoute.length) fail(`pages.json lists paths that are not routes: ${missingRoute.join(', ')}`);
for (const [from, to] of Object.entries(REDIRECTS)) {
  const rule = (vercel.redirects || []).find((r) => r.source === from);
  if (!rule || rule.destination !== to) fail(`vercel.json needs a redirect ${from} -> ${to}`);
}
for (const [path, { title, description }] of Object.entries(pages)) {
  if (!title || !description) fail(`${path}: title and description are required in pages.json`);
  if (description.length > 170) fail(`${path}: description is ${description.length} characters, keep it under 170`);
}

const SITE_URL = site.url.replace(/\/$/, '');
const pageUrl = (path) => `${SITE_URL}${path === '/' ? '/' : path}`;
const fullTitle = (t) => (t.includes(site.name) ? t : `${t} | ${site.name}`);
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const jsonLd = (data) =>
  `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`;

const template = readFileSync('dist/index.html', 'utf8');
if (!template.includes('<div id="root"></div>')) fail('dist/index.html has no empty #root');

// Preload the two Latin font files so headings don't change font after loading.
// (The hero photo needs no line here: React adds its preload for <img fetchPriority="high">.)
const fontPreloads = readdirSync('dist/assets')
  .filter((f) => /^(outfit|plus-jakarta-sans)-latin-wght-normal-.*\.woff2$/.test(f))
  .map((f) => `<link rel="preload" href="/assets/${f}" as="font" type="font/woff2" crossorigin />`);

// What is true about the company today, nothing more (see CLAUDE.md, content honesty)
const business = () => {
  const legal = site.legal || {};
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE_URL}/#firma`,
    name: site.name,
    url: `${SITE_URL}/`,
    logo: `${SITE_URL}/brand/domence-napis.svg`,
    image: `${SITE_URL}/images/og-domence.jpg`,
    description:
      'Montaż inteligentnego domu, kamer i wideodomofonów w Warszawie i okolicach: światło, rolety, ogrzewanie, ochrona przed zalaniem, wejście i brama.',
    areaServed: { '@type': 'City', name: 'Warszawa' },
    knowsLanguage: 'pl',
  };
  if (site.email) data.email = site.email;
  if (site.phone) data.telephone = site.phone;
  if (legal.companyName) data.legalName = legal.companyName;
  if (legal.nip) data.vatID = `PL${legal.nip.replace(/\D/g, '')}`;
  if (legal.address) data.address = { '@type': 'PostalAddress', streetAddress: legal.address, addressCountry: 'PL' };
  if (site.engineer?.name) data.employee = { '@type': 'Person', name: site.engineer.name, jobTitle: site.engineer.role };
  return data;
};

const breadcrumbs = (path, title) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Strona główna', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: title, item: pageUrl(path) },
  ],
});

const head = ({ path, title, description, noindex = false }) =>
  [
    `<title>${esc(fullTitle(title))}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    noindex ? '<meta name="robots" content="noindex" />' : `<link rel="canonical" href="${pageUrl(path)}" />`,
    '<meta property="og:type" content="website" />',
    '<meta property="og:locale" content="pl_PL" />',
    `<meta property="og:site_name" content="${esc(site.name)}" />`,
    `<meta property="og:title" content="${esc(fullTitle(title))}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    noindex ? '' : `<meta property="og:url" content="${pageUrl(path)}" />`,
    `<meta property="og:image" content="${SITE_URL}/images/og-domence.jpg" />`,
    '<meta property="og:image:width" content="1200" />',
    '<meta property="og:image:height" content="630" />',
    '<meta property="og:image:alt" content="Telefon z obrazem z kamery przy furtce w wieczornym korytarzu domu" />',
    '<meta name="twitter:card" content="summary_large_image" />',
    ...fontPreloads,
    noindex ? '' : jsonLd(path === '/' ? business() : breadcrumbs(path, title)),
  ]
    .filter(Boolean)
    .join('\n    ');

const page = (meta, body) =>
  template
    .replace('<title>DOMENCE</title>', head(meta))
    .replace('<div id="root"></div>', `<div id="root">${body}</div>`)
    .replaceAll('__SITE_EMAIL__', esc(site.email));

const write = (path, html) => {
  const dir = path === '/' ? 'dist' : `dist${path}`;
  mkdirSync(dir, { recursive: true });
  writeFileSync(`${dir}/index.html`, html);
};

for (const [path, meta] of Object.entries(pages)) {
  const body = await render(path);
  if (body.includes('data-not-found')) fail(`${path} rendered the 404 page: is the route in src/routes.tsx?`);
  write(path, page({ path, ...meta }, body));
}

// Unknown addresses: the host answers 404 with this page
const notFound = await render('/nie-znaleziono-strony');
writeFileSync(
  'dist/404.html',
  page({ path: '/404', title: 'Nie znaleziono strony', description: 'Ta strona nie istnieje.', noindex: true }, notFound),
);

// Old addresses: vercel.json answers with a 308; these pages cover other hosts
for (const [from, to] of Object.entries(REDIRECTS)) {
  write(
    from,
    `<!doctype html><meta charset="utf-8"><title>${esc(site.name)}</title><meta name="robots" content="noindex"><link rel="canonical" href="${pageUrl(to)}"><meta http-equiv="refresh" content="0; url=${to}"><a href="${to}">${pageUrl(to)}</a>\n`,
  );
}

const today = new Date().toISOString().slice(0, 10);
writeFileSync(
  'dist/sitemap.xml',
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${Object.keys(pages)
    .map((p) => `  <url><loc>${pageUrl(p)}</loc><lastmod>${today}</lastmod></url>`)
    .join('\n')}\n</urlset>\n`,
);
writeFileSync('dist/robots.txt', `User-agent: *\nAllow: /\nDisallow: /brand/\nSitemap: ${SITE_URL}/sitemap.xml\n`);

rmSync('dist-ssr', { recursive: true, force: true });
console.log(`prerender: ${Object.keys(pages).length} pages, 404.html, ${Object.keys(REDIRECTS).length} redirects, sitemap.xml, robots.txt`);

// The forms send enquiries only through a form service. Without one they fall back to
// the visitor's own mail program, which many phones don't have set up.
const env = loadEnv('production', process.cwd(), 'VITE_');
if (!env.VITE_FORM_ENDPOINT) {
  console.warn('\n⚠  VITE_FORM_ENDPOINT is empty: enquiries fall back to the visitor\'s mail program. See docs/launch-checklist.md.');
}
if (!env.VITE_PLAUSIBLE_DOMAIN) {
  console.warn('⚠  VITE_PLAUSIBLE_DOMAIN is empty: no visit statistics. See docs/launch-checklist.md.\n');
}
