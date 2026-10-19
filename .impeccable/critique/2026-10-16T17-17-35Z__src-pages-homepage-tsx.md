---
target: strona główna DOMENCE + /kalkulator
total_score: 22
max_score: 40
na_heuristics: 
p0_count: 1
p1_count: 3
target_identity: "file:/Users/innadidenko/Downloads/lalala-main/src/pages/HomePage.tsx"
target_fingerprint: "sha256:4e8f7ee5f5cbec7bef474b4be2325edc4a5820967e0e9bacb9182d9794888701"
target_path: /Users/innadidenko/Downloads/lalala-main/src/pages/HomePage.tsx
timestamp: 2026-10-16T17-17-35Z
slug: src-pages-homepage-tsx
---
Method: dual-agent (A: design review · B: detector + browser)

## Design Health Score: 22/40 (Acceptable)
| # | Heuristic | Score | Key issue |
|---|---|---|---|
| 1 | Visibility of system status | 2 | Form shows "Dziękujemy" but only opens mailto: (CalculatorSection.tsx:212-213) |
| 2 | Match real world | 2 | Jargon below hero; phone icons, no tel: anywhere |
| 3 | User control | 3 | Back on every step, Esc, persisted answers |
| 4 | Consistency | 2 | Title Case leftovers (Lighting names, Footer legal), 3 label styles, "Trzy pytania" vs "Krok 1 z 4" |
| 5 | Error prevention | 2 | Preselected answers in steps 1-2 |
| 6 | Recognition | 3 | Good summary; step 3 has 20 options in nested scroll |
| 7 | Flexibility | 2 | No fast path (no phone/direct contact) |
| 8 | Minimalism | 1 | Home ~9.8k px desktop / 19.2k px mobile, 1657 words, 30 H3 |
| 9 | Error recovery | 3 | Specific inline errors, focus to first error |
| 10 | Help | 2 | FAQ findable; form help text 2.5:1 contrast |

## Design specificity
Only the hero is product-specific. Below: ~30 photo+text cards, repeated icon tiles and eyebrows, mismatched/duplicated Unsplash photos, no proof of real work.
Detector: CLI 0; overlay 16 (home) / 6 (kalkulator) / 12 (faq): icon-tile-stack x10, low-contrast (2.6:1 gray-400; 4.46:1 copper on gray-100; 4.1:1 badges; 4.4:1 gray-500), undersized logo tagline 8/9.5px, buried PageHeader raster 0.1, FAQ line length ~100ch. Intentional: kicker-above-heading, PageHeader texture.

## Priority issues
- [P0] Form never sends: mailto + immediate success (CalculatorSection.tsx:212-213, ContactPage.tsx:35). Fix: real endpoint, loading/success/error, visible tel/email. /impeccable harden
- [P1] No human/contact proof: no tel:, name, NIP, reviews, real installs. Fix: tel in header/sticky, named engineer + portrait, 2-3 real projects (user-supplied). /impeccable clarify
- [P1] Home ~2.5x too long, interchangeable sections. Fix: hero, 3-4 services, proof, process, FAQ teaser, contact; move AI tech + lighting to subpages. /impeccable distill
- [P1] Mobile: hero image hidden <lg, chrome ~32% of 812px, duplicate CTAs, /kalkulator form below fold, sticky CTA on /kalkulator. /impeccable adapt
- [P2] Form friction + contrast: preselects, 20 options, phone+email required, gray-400 2.5:1, copper xs 4.46:1. /impeccable polish

## Persona red flags
Jordan: "Kino w salonie" vs card content; Scenariusze/Pakiety/Dobierz zestaw; Trzy pytania vs 4 kroki; preselected answer.
Riley: silent lead loss; 1800-char truncation; "123456" passes; 1280-1535px header has no contact path.
Casey: 19k px page; cookie banner over sticky bar; no tap-to-call; form below fold; mailto app switch.

## Minor
Success state emerald-400/gray-400; "Rozumiem i Zamykam"; 7x "Zobacz szczegóły"; ShieldCheck for comfort; Lighting subtitle redundancy; 162px process cards at 1440; grain overlay z-60 above modals; best reassurance line buried as footnote.

## Questions
One thing to remember = local, no subscription? Only three real photos? Qualify vs capture: phone + callback time first?
