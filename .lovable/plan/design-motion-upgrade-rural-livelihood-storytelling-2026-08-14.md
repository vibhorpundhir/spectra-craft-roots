# Design & Motion Upgrade — Rural Livelihood Storytelling

Goal: make the site feel more premium and alive, with motion that comes from the domain itself (fields, hands at work, thread and stitching, seasons) rather than generic fades. Everything stays smooth on mobile and respects reduced-motion.

## Motion language (domain-rooted)

- **Growing line** — the gold rule under headings draws itself left-to-right on scroll, like a furrow being ploughed.
- **Seed-to-frame images** — photos reveal with a soft clip-path grow plus a slow 6s ken-burns drift while in view, giving documentary photos life without video.
- **Stitch underline** — nav and link hovers use a dashed "stitch" line that runs across, echoing juti stitching.
- **Counting harvest** — impact numbers count up when they scroll into view.
- **Woven grid** — cards in a grid stagger in on a diagonal (like rows being planted) instead of all at once.
- **Layered hero** — homepage hero gets gentle parallax: image drifts slower than text on scroll, with a warm grain/paper texture overlay.
- **Press feel** — cards and buttons get a subtle spring press-down on tap so touch feels physical.

## Interaction upgrades

- Homepage: hero scroll-cue that fades on first scroll; community and product cards lift with a gold hairline and a "View story →" arrow that slides.
- Products index: filter chips animate the active pill with a sliding gold indicator; grid re-orders with a smooth layout transition instead of a jump.
- Product detail: image gallery gets swipe on mobile and a soft crossfade with active thumbnail highlight.
- Gallery: category filter with the same sliding indicator; hover/tap reveals the caption from the bottom; click opens a lightweight full-screen viewer with keyboard and swipe navigation.
- Impact: eight impact areas become an accordion/expanding stack on mobile and staggered cards on desktop, with count-up figures.
- Header: slimmer on scroll (already), plus a thin gold scroll-progress line at the bottom edge.
- Mobile drawer: staggered slide-in of nav items, larger tap targets.

## Visual polish

- Warmer depth: refine card, band and border tokens for slightly stronger contrast; add a soft paper-grain overlay token used on the hero and dark bands.
- Consistent editorial rhythm: unify section spacing, eyebrow → gold rule → headline → intro across every page.
- Better type scale on large screens; tighter measure on body copy for readability.
- Numbered section markers and pull quotes from the field for a documentary-magazine feel.

## Technical notes

- Motion via the already-installed `motion` package. New shared primitives: `Reveal` (extended with variants: fade, rise, clip, stagger), `AnimatedCounter`, `StitchLink`, `ScrollProgress`, `Lightbox`, `FilterBar`.
- All animation gated behind `useReducedMotion` and `(hover: hover)` media queries; transforms/opacity only (no layout-thrashing properties) to keep 60fps on phones.
- Tokens and new utilities added to `src/styles.css`; no hardcoded colors in components.
- Existing content, routes, data files and the official logo stay unchanged — this is presentation only. Image slots stay as they are so your real photos drop in later.

## Scope check

No backend, no content rewrite, no new pages. Pages touched: home, about, fpo, ofpo, impact, gallery, products index + detail, contact, plus shared components and styles.
