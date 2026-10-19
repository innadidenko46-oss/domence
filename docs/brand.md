# DOMENCE logo

All files: `public/brand/` (on the live site: `/domence/brand/`, a page that shows every version with download links).
Source: `src/brand/brand.mjs`. After changing it, run `node scripts/build-brand.mjs` to rewrite the files and the favicon. The site logo (`src/components/Logo.tsx`) draws from the same source.

## What the logo is

- **The logo is the wordmark "DOMENCE".** The name already says "dom", so there is no house picture.
- **The O carries an amber status light** set into the ring at the 1:30 position, with a thin gap around it, like the indicator on a dial or a device that is on. It says "the house is on and everything works". The O must always read as the letter O, so nothing sits above it or inside it.
- **The mark** is that O alone. Use it only where the wordmark does not fit: favicon, app icon, social media avatar, a sticker on a device. Don't put the mark next to the wordmark: the O would appear twice.
- Letters are drawn as outlines, so the files need no font.

## Versions

| File | Use |
|---|---|
| `domence-napis.svg` | Main logo on white or light backgrounds |
| `domence-napis-bialy.svg` | On petrol or other dark backgrounds |
| `domence-logo-z-haslem.svg`, `-bialy.svg` | With the tagline, only at large sizes: banner, van, roll-up, first page of a document |
| `domence-napis-mono-ciemny.svg`, `-mono-bialy.svg` | One colour: stamps, engraving, embroidery, foil, fax-quality print |
| `domence-znak.svg`, `-bialy.svg`, `-mono-*.svg` | Mark alone |
| `domence-avatar.svg`, `apple-touch-icon.png` | Profile pictures (survives a round crop), iPhone home screen icon |
| `/favicon.svg` | Browser tab |

## Why it looks like this

The site promises a calm, private home: things work at home, without the internet and without sending camera images anywhere. The logo must not contradict that.

- **No dot in the centre of the O.** A ring with a centred dot reads as an eye, a camera lens or a target: "someone is watching". For a company that installs cameras this feeds the main worry clients have about them.
- **No wireless arcs.** They say "signal, cloud, online", the opposite of "works without the internet".
- **Petrol** (dark blue-green) reads as calm, reliable and competent. It carries the letters, buttons and dark bands.
- **Amber** is the one warm note: light at home, "on". Keep it small, about a tenth of any layout, so it stays warm and never turns into a warning colour or a discount look.
- **Gray-50 and white** keep the pages quiet; most of every page is these.

## Tagline

"Inteligentny dom · kamery · wideodomofony". Polish, plain words, sentence case. Use it only when the wordmark is at least 160 px wide on screen or 50 mm in print; otherwise use the wordmark alone.

In the `z-haslem` files the tagline is live text in Plus Jakarta Sans. Convert it to outlines before sending a file to print.

## Rules

- **Clear space:** keep empty space around the wordmark at least the height of the letter O on every side.
- **Minimum size:** wordmark 80 px wide on screen, 25 mm in print. Mark 16 px.
- **Two colours, no gradients, shadows, outlines or effects.** Don't stretch, rotate, recolour or re-space the letters.
- **Backgrounds:** petrol version on white, gray-50 or light photos; white version on petrol-900/950 or dark photos. If neither has enough contrast, use a one-colour version.

## Colours

| Name | HEX | RGB | Use |
|---|---|---|---|
| Petrol | `#0B3340` | 11 51 64 | Letters, ring |
| Amber | `#F29A1F` | 242 154 31 | Status light |
| White | `#FFFFFF` | 255 255 255 | Letters on dark backgrounds |

For print, match CMYK or Pantone with the print shop from the HEX values and check a proof; automatic conversion shifts petrol towards gray.

## Legal

Before registering the logo as a trademark (UPRP or EUIPO), search the registers for similar marks in class 9, 37 and 42.
