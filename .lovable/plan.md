# SPECTRA — Design Enhancement Phase

Keep all existing content, routes and structure. This is a visual and layout refinement pass only — no new pages, no backend, no photo swaps (photos come next phase).

## Locked design decisions
- **Palette:** warm earth, refined — deep field green (FPO), leather brown (OFPO), gold accent, cream/sand surfaces. Slightly deeper greens and warmer creams than today for more contrast and richness.
- **Type:** Cormorant Garamond (display) + Karla (body) — kept, but with a proper scale: larger, tighter display sizes, better line-height, wider eyebrow tracking.
- **Layout:** full-width story sections — each section owns the viewport width with alternating tone bands (cream → ink → sand) instead of one flat page.

## 1. Logo and wordmark
- Recreate the wordmark to match the logo file's typography: blue-toned, clean geometric sans, letter-spaced, all caps — replacing the current serif "SPECTRA" text next to the mark.
- Add the logo blue as a semantic token so the wordmark is themable and dark-mode safe.
- Header: mark + wordmark + small "Since 1996 · Alwar" line, tightened sizing so it never crowds nav on laptop or wraps on mobile.
- Footer: same wordmark treatment, inverted on the dark band.

## 2. Design system upgrade (`src/styles.css`)
- Refine the token values: deeper primary green, richer leather, warmer cream, one gold accent, plus a logo-blue token.
- Add reusable tokens for elevation and section bands: soft shadows, hairline borders, subtle gradient overlays for image cards.
- Add utilities for the recurring premium patterns: section band, image frame with warm overlay, gold rule, oversized section numbers.
- Tune the typographic scale and eyebrow utility for a more editorial feel.

## 3. Section and component polish
- **Header:** slimmer, quieter at rest, more solid once scrolled; nav with underline-on-hover; refined mobile drawer (full-height panel, larger tap targets, Enquire CTA inside).
- **Hero (home):** stronger vertical rhythm, larger display headline, gold rule, layered image treatment, subtle scroll cue.
- **Section headings:** consistent eyebrow → rule → headline → intro pattern across every page.
- **Cards (product, impact, gallery, community):** unified image ratios, warm overlay on hover, gentle lift, gold hairline — no boxy shadcn look.
- **Impact / stats bands:** full-bleed dark band with large display numerals for emphasis.
- **Gallery:** tighter grid, consistent aspect ratios per category, smooth category switching.
- **Contact:** two-column on laptop, single column on mobile; refined inputs matching the design system.
- **Footer:** clearer column hierarchy and generous spacing.

## 4. Motion
- Keep the existing `Reveal` scroll animation but standardise it: short distance, soft easing, staggered children, honours reduced-motion.
- Add restrained hover motion on cards, links and buttons. Nothing bouncy.

## 5. Responsive and quality pass
- Verify every route at mobile (390), tablet (768) and laptop (1280): no horizontal scroll, no text overflow, comfortable tap targets, readable line lengths.
- Check dark mode tokens still hold contrast.
- Re-verify all routes render and typecheck cleanly, with screenshots at mobile and laptop widths.

## Technical notes
All colour work stays in `src/styles.css` as semantic OKLCH tokens — no hardcoded colour utilities in components. Changes are confined to `src/styles.css`, `src/components/*` (Logo, Header, Footer, SectionHeading, PageHero, ProductCard, Reveal) and presentation markup inside the existing route files. Data files and route structure are untouched.
