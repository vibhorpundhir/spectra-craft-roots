# Batch 2 — Placing 10 more real photos

I reviewed all 10 uploads. Eight are strong enough for page sections; two work only in the gallery.

## What each photo becomes

| Photo | Placement |
| --- | --- |
| Goat sale programme (SAUMPCL banner, goats in truck) | FPO page — livestock / market linkage section + Gallery (Rural Development) |
| Goat weighing on a spring balance in the village | FPO page — "how the work happens" (grading & weighing) + Gallery (Farmers) |
| Spice production training desk with packed masala samples | Replaces AI spice image in the spice/masala section of the FPO page + Gallery (Spice Processing) |
| Masala & achar retail shelves with visitors inspecting turmeric packs | Products page spice/pickle section + Gallery (Success Stories) |
| Women's outlet handing over an oil/pickle bottle (SAUMPCL signboard) | Homepage community block (replaces AI farmers image) + Gallery (Women Self Help Groups) |
| Certificate handover to women members (AMSPCL banner) | Impact page — Women Empowerment story (replaces AI SHG image) + Gallery (Women SHGs) |
| Large FPO Annual General Meeting, hundreds of women seated | About page — organisation story / scale + Gallery (Community Programs) |
| Second AGM photo with senior speaker at the mic | Impact page — Community Participation story (replaces AI programme image) + Gallery (Community Programs) |

## Photos I'd use in the Gallery only
- Exhibition stall corridor with the SAUMPCL signboard (wide, low subject focus) — Gallery (Success Stories).
- Third AGM crowd shot (near-duplicate of the stronger AGM frame) — skip unless you want it in the Gallery.

## AI images being retired
- `community-farmers.jpg` on homepage and Impact.
- `community-women-shg.jpg` / `community-programme.jpg` usages replaced by the real certificate and AGM photos.
- `community-spice-processing.jpg` / part of `product-spices.jpg` usage in section blocks replaced by the real spice photos. Product catalogue thumbnails for spices stay generated for now unless you want the documentary frames there too.

## Notes
- No dairy/milk or crop close-up photos in this batch, so the dairy sections keep their current generated images.
- Homepage main hero stays as-is; none of these frames is strong enough as a full-bleed hero.

## Technical approach
- Upload each used photo to the CDN with `lovable-assets` and import the `.asset.json` pointers (no binaries in the repo).
- Add the new items to `src/data/gallery.ts` with correct categories.
- Swap the specific imports in `fpo.tsx`, `impact.tsx`, `about.tsx`, `index.tsx` and the products section; use `object-cover` with sensible focal positioning so wide WhatsApp frames don't break the editorial layout.
- Keep lazy loading, `decoding="async"` and descriptive alt text; verify laptop + mobile with screenshots.
