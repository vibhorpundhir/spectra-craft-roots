# Use the Official SPECTRA Logo Only

Replace all custom branding text with the uploaded official logo file (mark + "SPECTRA®" wordmark). No recreated wordmark, no separate serif/sans "Spectra" text anywhere.

## 1. New logo assets

- Upload the newly provided logo as the project's brand asset (transparent PNG version for placing on cream and dark bands).
- Create two variants from the same file: the full lockup (circle mark + SPECTRA text) and the mark-only circle for tight spaces such as the favicon.
- Regenerate `public/favicon.png` (square, padded) from the circle mark.
- Remove the older logo/mark assets that are no longer referenced.

## 2. Logo component

- `src/components/Logo.tsx` renders only the full logo image, wrapped in a link to home, with proper alt text.
- Delete the typographic wordmark span and the "Since 1996 · Alwar" sub-line from the logo lockup.
- Sizing tuned per breakpoint so the lockup stays legible on mobile and never crowds the nav on laptop.

## 3. Header and footer

- Header: full logo lockup on the left, height-capped so the bar stays slim when scrolled; nothing else changes.
- Footer: same logo image on the dark band, sized larger, with the organisation's full name kept as body copy below it (not styled as a wordmark).
- Remove the `wordmark` text usage from the footer.

## 4. Cleanup

- Drop the Montserrat wordmark font load and the `wordmark` utility from `src/styles.css` and the root route font link, since no text wordmark remains.
- Keep the logo-blue colour token (still used for accents and link states).

## 5. Verification

- Check header and footer at mobile (390) and laptop (1280) widths: logo crisp, correctly proportioned, no wrapping or overlap, readable on both cream and dark backgrounds.

## Technical notes

Files touched: new asset pointer under `src/assets/`, `src/components/Logo.tsx`, `src/components/Header.tsx`, `src/components/Footer.tsx`, `src/styles.css`, `src/routes/__root.tsx`, `public/favicon.png`. No route structure, data, or content changes.
