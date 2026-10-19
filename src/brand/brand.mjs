// DOMENCE logo geometry: the one source for the site logo and the files in public/brand.
// Regenerate the files with `node scripts/build-brand.mjs` after changing anything here.
//
// The logo is the wordmark. Its O carries an amber status light set into the ring,
// like the indicator on a dial: the house is on and everything works.
// (Not a dot in the centre: that reads as an eye or a target, i.e. being watched.)
// The standalone mark is that O alone, for the favicon and avatars.
// Two colours, no gradients. Letters are drawn as outlines, so no font is needed.

export const COLORS = {
  petrol: '#0B3340', // petrol-900: letters and ring on light backgrounds
  amber: '#F29A1F', // amber-500: status light
  white: '#FFFFFF',
  taglineOnLight: '#145566', // petrol-700
  taglineOnDark: '#F9C46A', // amber-300
};

export const TAGLINE = 'Inteligentny dom · kamery · wideodomofony';

const CAP = 40; // cap height
const STEM = 8; // stroke weight of straight letters
const ROUND = 20.8; // outer radius of round letters (slight overshoot)
const ROUND_INNER = 12.4; // round strokes are a little heavier so they look even
const CY = CAP / 2;

const n = (v) => Math.round(v * 100) / 100;

// Each letter returns { d, width } drawn from x.
const letters = {
  D: (x) => ({
    d: `M${x} 0H${x + 16}A20 20 0 0 1 ${x + 16} ${CAP}H${x}Z` +
      `M${x + STEM} ${STEM}V${CAP - STEM}H${x + 16}A12 12 0 0 0 ${x + 16} ${STEM}Z`,
    width: 36,
  }),
  O: (x) => {
    const cx = x + ROUND;
    return {
      d: ring(cx, CY, ROUND, ROUND_INNER),
      width: ROUND * 2,
      light: statusLight(cx, CY, ROUND, ROUND_INNER),
    };
  },
  M: (x) => ({
    d: `M${x} ${CAP}V0H${x + 9}L${x + 20} 19L${x + 31} 0H${x + 40}V${CAP}H${x + 32}V15L${x + 23} 31H${x + 17}L${x + 8} 15V${CAP}Z`,
    width: 40,
  }),
  E: (x) => ({
    d: `M${x} 0H${x + 28}V${STEM}H${x + STEM}V16H${x + 25}V24H${x + STEM}V${CAP - STEM}H${x + 28}V${CAP}H${x}Z`,
    width: 28,
  }),
  N: (x) => ({
    d: `M${x} ${CAP}V0H${x + 9}L${x + 28} 26V0H${x + 36}V${CAP}H${x + 27}L${x + 8} 14V${CAP}Z`,
    width: 36,
  }),
  C: (x) => {
    const cx = x + ROUND;
    const a = (40 * Math.PI) / 180; // opening half-angle
    const ox = n(cx + ROUND * Math.cos(a));
    const oy = ROUND * Math.sin(a);
    const ix = n(cx + ROUND_INNER * Math.cos(a));
    const iy = ROUND_INNER * Math.sin(a);
    return {
      d: `M${ox} ${n(CY - oy)}A${ROUND} ${ROUND} 0 1 0 ${ox} ${n(CY + oy)}` +
        `L${ix} ${n(CY + iy)}A${ROUND_INNER} ${ROUND_INNER} 0 1 1 ${ix} ${n(CY - iy)}Z`,
      width: ox - x,
    };
  },
};

// Amber light sitting on the ring at the 1:30 position, with a gap cut around it.
function statusLight(cx, cy, r, ri) {
  const mid = (r + ri) / 2;
  const a = Math.PI / 4;
  const dot = ((r - ri) / 2) * 1.12;
  return { cx: n(cx + mid * Math.cos(a)), cy: n(cy - mid * Math.sin(a)), r: n(dot), gap: n(dot + (r - ri) * 0.2) };
}

function ring(cx, cy, r, ri) {
  return `M${n(cx - r)} ${cy}A${r} ${r} 0 1 0 ${n(cx + r)} ${cy}A${r} ${r} 0 1 0 ${n(cx - r)} ${cy}Z` +
    `M${n(cx - ri)} ${cy}A${ri} ${ri} 0 1 1 ${n(cx + ri)} ${cy}A${ri} ${ri} 0 1 1 ${n(cx - ri)} ${cy}Z`;
}

// Optical spacing: less room between round sides, more between straight ones.
const SPELLING = [['D', 0], ['O', 4.5], ['M', 4.5], ['E', 6], ['N', 6], ['C', 5], ['E', 5]];

function buildWordmark() {
  let x = 0;
  const paths = [];
  let light = null;
  for (const [ch, gap] of SPELLING) {
    x += gap;
    const l = letters[ch](x);
    paths.push(l.d);
    if (l.light) light = l.light;
    x += l.width;
  }
  return { d: paths.join(''), light, width: n(x) };
}

export const WORDMARK = buildWordmark();
// The O overshoots the cap height a little; the viewBox includes it.
export const WORDMARK_BOX = { x: 0, y: n(CY - ROUND), w: WORDMARK.width, h: n(ROUND * 2) };

// Standalone mark on a 64 grid: the O with its status light, centred.
// Same proportions as the O in the wordmark.
export const MARK = (() => {
  const r = 25;
  const ri = n(r * (ROUND_INNER / ROUND));
  return { ring: ring(32, 32, r, ri), light: statusLight(32, 32, r, ri) };
})();
