# DOMENCE website: project rules

A marketing site in Polish for an installer of smart home systems, IP cameras and video intercoms. It is built with React, Vite, Tailwind v4 and React Router (`BrowserRouter`, basename `/domence`), and deployed to GitHub Pages from `main`.

- **Adding a page:** add the route in `src/App.tsx` **and** in `scripts/spa-routes.mjs` (its title and description). The build script writes `dist/<route>/index.html`, `404.html`, `sitemap.xml` and `robots.txt`, so each page answers with 200 and has its own meta.
- **Old `#/` links** are rewritten to normal paths in `src/main.tsx`.

## Who the site is for

- **Decided buyers only.** The site is for people who definitely want a smart home and won't waste the team's time. Its job is to bring in qualified enquiries, not a high number of them.
- **Keep the qualifying question.** Both forms ask when the installation is planned (`INSTALL_TIMELINES` in `src/config/site.ts`). Don't remove it to make the form shorter.
- **No exact prices on the site for now.** Scope and price come after a call.
- **No fixed packages.** `/jak-zaczac` shows three starting situations (new house, finished flat, entrance and cameras) and what the price depends on, with no quantities, dates or prices. Each situation opens `/zapytanie?state=…` at step 2. `/pakiety` redirects there.
- **Not a calculator.** The `/zapytanie` page is a short enquiry before the contact details. Never call it a "kalkulator" or an "ankieta".

## Language

- **Words a non-technical client knows.** Write for clients who are not deep into the subject. Describe what the house does for them, e.g. "zakręca wodę, gdy czujnik wykryje wyciek", not the hardware behind it.
- **No model numbers, protocols or jargon in headings and card copy.** For example: 3EM-63T, BLU TRV, ANPR, DeepinViewX, mmWave, NVR, PoE, DALI-2, Gen3/Gen4.
  - If a technical term is truly needed, put it in a secondary "Więcej szczegółów" spot and explain it in plain words next to it.
- **Polish typography.**
  - Sentence case in headings and labels.
  - "i" instead of "&".
  - A non-breaking space after one-letter words (a, i, o, u, w, z).
- **Watch out for non-breaking spaces when editing copy.** Text replacements must match them: use the `[\s ]` regex, not a plain space.

## What the site may promise

- **Only automations and features Shelly and Hikvision products can deliver, and only ones the company actually installs.** That covers:
  - lighting, blinds and heating;
  - leak and gas detection with valve shut-off;
  - energy metering;
  - motion sensors;
  - cameras, video intercoms and access by face, card or code;
  - gate and garage control;
  - network equipment for these devices.
- **Not offered, never mention:**
  - garden watering;
  - alarm systems;
  - surge protection as a service;
  - audio and music, multiroom sound;
  - voice assistants and voice commands;
  - third-party locks;
  - EV chargers;
  - air conditioning.
- **Never state that we work only with these two brands.** Describe features and benefits. Brand names may appear as product facts in secondary detail, but not as a limitation.

## Company facts (2026-10)

- **New company.** No finished projects yet, so no "nasze realizacje", case studies, reviews or "gotowe domy" wording. Use stock photos only for rooms and devices, never as people or projects presented as ours.
- **Region:** Warszawa i okolice. Not the whole of Poland.
- **Before installation:** a free call and a free check of the house, then the plan and price in writing.
- **After installation the client gets only two things:**
  - training for the household;
  - free configuration.

  Do not promise schematics, measurement reports, documentation or service after the warranty.
- **Not on the site for now:** no warranty period, no PN-HD norm, no SEP qualifications. Checking drawings is possible but not a target offer, so don't advertise it.
- **Installation time** depends on the scope. The date is given in writing with the plan.
- **Lead engineer:** Yevhen Mukha, "Inżynier prowadzący". No photo yet, and don't use a stock portrait. The phone number is not shown for now.

## Content honesty

- **No invented facts.** Don't make up phone numbers, names, reviews, project counts or certifications.
- **Company details live in `src/config/site.ts`.** Blocks that use empty fields stay hidden.
- **Photos must match the text next to them.** No duplicate photos within one page.

## Design system (short)

- **Colours from the logo:**
  - petrol for buttons, icons and dark bands: `petrol-700` fills, `petrol-900` bands;
  - amber (the logo's orange) as the warm accent: `amber-700` for small text on light backgrounds, `amber-600` for large emphasis, `amber-400` buttons (`.btn-accent`) only on dark bands;
  - logo blue only inside the logo;
  - gray-50/white backgrounds, 2px radius.
- **Type:** Outfit for display, Plus Jakarta Sans for body.
- **Classes to reuse:**
  - `.eyebrow` for section labels;
  - `.btn-engineering-primary` (petrol) and `.btn-secondary` on light backgrounds, `.btn-accent` on dark bands (all 44px minimum height).
  - At most one `.eyebrow` per three sections.
- **Text contrast:** at least 4.5:1. Don't use `gray-400` text on light backgrounds.

## Checks before committing

- `npx tsc --noEmit` and `npm run build` pass. The build runs `scripts/check-copy.mjs` first: it fails on copy that breaks the rules above (warranty, alarms, audio, EV, "ankieta"/"kalkulator", track-record claims and similar). Fix the copy, don't loosen the rule.
