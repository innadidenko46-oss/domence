---
target: DOMENCE strona główna + podstrony
total_score: 23
max_score: 36
na_heuristics: 7
p0_count: 2
p1_count: 2
target_identity: "file:/Users/innadidenko/Downloads/lalala-main/src/pages/HomePage.tsx"
target_fingerprint: "sha256:85532601799fae8416aee614d6be0c8f444ebd92841caf053f45026bee3cfae7"
target_path: /Users/innadidenko/Downloads/lalala-main/src/pages/HomePage.tsx
timestamp: 2026-10-16T21-58-54Z
slug: src-pages-homepage-tsx
---
Method: dual-agent (A: design review + technical audit · B: detector + browser)
## Score 23/36 (7 n/a) - Acceptable (previous 22/40)
H1 3 progress ok, focus lost on step change | H2 2 subpages spec-sheet jargon | H3 2 browser Back on /zapytanie | H4 2 "bez nazw marek" vs SHELLY PRO, two forms differ | H5 3 | H6 3 | H7 n/a | H8 2 long home, spec dumps | H9 3 | H10 3
## Specificity
Mostly authored (palette, offline demo, qualifier). Template residue: 5 stock cards, /systemy and /teletechnika spec language.
Detector: CLI 0. Overlay 32 flags, mostly false positives (gray-on-color 6-9:1, eyebrow pattern, FAQ filter bg). Real: FAQ search placeholder ~3.4:1, skipped heading level (/zapytanie, /teletechnika), nested cards x3 (/teletechnika), amber glow on CTA.
## Priority issues
- [P0] Copy breaks CLAUDE.md: warranty (SystemsComparisonSection:12, HomePage:66), EV "ładuje samochód" (content:737), lock (SystemsPage:83, SystemsComparisonSection:7, home card photo), surge (SystemsPage:52), "Sprawdzone" (HomePage:68, AiFutureTech:36), footer regulamin drawings + HEPA. clarify
- [P0] Leads still mailto in production (no VITE_FORM_ENDPOINT in deploy). harden
- [P1] /systemy, /teletechnika spec-sheet language. distill + clarify
- [P1] Enquiry: focus loss, Back, first question below fold, consent without privacy link. harden
- [P2] /kontakt: unlabelled textarea, Title Case labels, <16px inputs, native validation, no consent, documentation photo. harden + polish
- [P2] Home long, duplicate CTA in mobile first view, "Zanim zadzwonisz" without phone. distill
## Technical
a11y: drawer/legal modal no focus trap, legal icons 1.9:1, heading skips, tiny footer links. Responsive: hero image late on mobile, hamburger 1024-1279, H1 4 lines at 1280. Perf: 640KB single bundle, Unsplash w=2000, fonts. SEO: soft-404, og:image aspect, "bez pyłu".
## Personas
Jordan jargon; Riley Back/2-letter name/both contacts required/stale answers; Casey 15 screens, iOS zoom, tiny links.
