// Writes the DOMENCE logo files from src/brand/brand.mjs into public/brand
// and the favicon into public. Run by hand: `node scripts/build-brand.mjs`.
import { mkdirSync, writeFileSync } from 'node:fs';
import { COLORS, MARK, TAGLINE, WORDMARK, WORDMARK_BOX } from '../src/brand/brand.mjs';

const OUT = new URL('../public/brand/', import.meta.url);
mkdirSync(OUT, { recursive: true });

const svg = (viewBox, body, title) =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="${viewBox}" role="img" aria-label="${title}">\n` +
  `<title>${title}</title>\n${body}\n</svg>\n`;

// Letters or ring with a gap cut around the status light, then the light itself.
// ink: letters / ring, accent: status light
const withLight = (d, { cx, cy, r, gap }, ink, accent) =>
  `<mask id="gap" maskUnits="userSpaceOnUse" x="-50" y="-50" width="1000" height="200">` +
  `<rect x="-50" y="-50" width="1000" height="200" fill="#fff"/><circle cx="${cx}" cy="${cy}" r="${gap}" fill="#000"/></mask>\n` +
  `<path fill-rule="evenodd" fill="${ink}" mask="url(#gap)" d="${d}"/>\n` +
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="${accent}"/>`;

const wordmarkBody = (ink, accent) => withLight(WORDMARK.d, WORDMARK.light, ink, accent);
const markBody = (ink, accent) => withLight(MARK.ring, MARK.light, ink, accent);

const B = WORDMARK_BOX;
const wordmarkViewBox = `${B.x} ${B.y} ${B.w} ${B.h}`;

// Tagline under the wordmark, stretched to its width. It is live text:
// convert it to outlines before sending the file to print.
const TAG_SIZE = 12.5;
const TAG_GAP = 12;
const tagBaseline = B.y + B.h + TAG_GAP + TAG_SIZE * 0.8;
const taglineViewBox = `${B.x} ${B.y} ${B.w} ${tagBaseline - B.y + TAG_SIZE * 0.3}`;
const taglineText = (fill) =>
  `<text x="0" y="${tagBaseline}" textLength="${B.w}" lengthAdjust="spacing" ` +
  `font-family="'Plus Jakarta Sans', 'Helvetica Neue', Arial, sans-serif" font-weight="600" ` +
  `font-size="${TAG_SIZE}" fill="${fill}">${TAGLINE}</text>`;

const files = {
  // Wordmark: the main logo
  'domence-napis.svg': svg(wordmarkViewBox, wordmarkBody(COLORS.petrol, COLORS.amber), 'DOMENCE'),
  'domence-napis-bialy.svg': svg(wordmarkViewBox, wordmarkBody(COLORS.white, COLORS.amber), 'DOMENCE'),
  'domence-napis-mono-ciemny.svg': svg(wordmarkViewBox, wordmarkBody(COLORS.petrol, COLORS.petrol), 'DOMENCE'),
  'domence-napis-mono-bialy.svg': svg(wordmarkViewBox, wordmarkBody(COLORS.white, COLORS.white), 'DOMENCE'),
  // Wordmark with tagline: only for large sizes
  'domence-logo-z-haslem.svg': svg(taglineViewBox, `${wordmarkBody(COLORS.petrol, COLORS.amber)}\n${taglineText(COLORS.taglineOnLight)}`, 'DOMENCE'),
  'domence-logo-z-haslem-bialy.svg': svg(taglineViewBox, `${wordmarkBody(COLORS.white, COLORS.amber)}\n${taglineText(COLORS.taglineOnDark)}`, 'DOMENCE'),
  // Standalone mark: favicon, avatars, stickers
  'domence-znak.svg': svg('0 0 64 64', markBody(COLORS.petrol, COLORS.amber), 'DOMENCE'),
  'domence-znak-bialy.svg': svg('0 0 64 64', markBody(COLORS.white, COLORS.amber), 'DOMENCE'),
  'domence-znak-mono-ciemny.svg': svg('0 0 64 64', markBody(COLORS.petrol, COLORS.petrol), 'DOMENCE'),
  'domence-znak-mono-bialy.svg': svg('0 0 64 64', markBody(COLORS.white, COLORS.white), 'DOMENCE'),
  // Avatar and iOS icon: smaller mark with room around it, survives a round crop
  'domence-avatar.svg': svg('0 0 64 64', `<rect width="64" height="64" fill="${COLORS.petrol}"/>\n<g transform="translate(32 32) scale(0.72) translate(-32 -32)">\n${markBody(COLORS.white, COLORS.amber)}\n</g>`, 'DOMENCE'),
};

for (const [name, content] of Object.entries(files)) {
  writeFileSync(new URL(name, OUT), content);
}

// Favicon: the mark on a petrol tile
writeFileSync(
  new URL('../public/favicon.svg', import.meta.url),
  svg('0 0 64 64', `<rect width="64" height="64" rx="12" fill="${COLORS.petrol}"/>\n${markBody(COLORS.white, COLORS.amber)}`, 'DOMENCE'),
);

// apple-touch-icon.png is rendered from domence-avatar.svg at 180 px
// (on macOS: qlmanage -t -s 180 -o <dir> public/brand/domence-avatar.svg).

console.log(`brand: ${Object.keys(files).length} files in public/brand, favicon.svg`);
