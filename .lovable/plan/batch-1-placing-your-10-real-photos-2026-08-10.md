# Batch 1 — Placing your 10 real photos

I reviewed all 10 uploads. Eight are strong and will be used; two are weak and I'd skip them (or keep them only in the gallery).

## What each photo becomes

| Photo | Placement |
| --- | --- |
| Leather juti exhibition stall (man in green shirt, NABARD/Pahchaan Ismailpur banner) | OFPO page hero + Gallery (Leather Craftsmanship). Strongest OFPO image. |
| Second exhibition stall (man in white blazer, rows of juti) | Products / OFPO craft section + Gallery (Success Stories) |
| Large stitching unit with rows of machines and workers | OFPO "how the work happens" section + Gallery (Rural Development) |
| Machine demonstration to artisans (4 men, stitching machine) | Impact page — Handcraft & Rural Industries + Gallery (Training Sessions) |
| Exposure visit flag-off with green flag, women members lined up | Impact page — Livelihood / Youth + Gallery (Community Programs) |
| Members at retail footwear store during exposure visit (women + children) | Impact page — Women Empowerment + Gallery (Women SHGs) |
| Group photo under NABARD 43rd Foundation Day banner | About page — organisation story + Gallery (Community Programs) |
| Classroom-style training session (woman facilitator addressing seated members) | Homepage "training / community" block + Gallery (Training Sessions) |

## Photos I'd skip
- The blue-walled hall photo with mostly empty benches — flat lighting, no clear subject.
- The second auditorium group shot with the banner half-hidden — near-duplicate of the better group photo.

Both can go into the Gallery only if you want them included; they won't sit well on hero or feature sections.

## Notes
- No farming/crop/dairy/spice photos in this batch, so the FPO page, dairy and spice sections keep their current generated images until you send those.
- The homepage main hero stays as-is for now; once you send a strong outdoor farmer or artisan close-up, that becomes the hero.

## Technical approach
- Upload each used photo to the CDN via `lovable-assets` and import the `.asset.json` pointers (no large binaries in the repo).
- Crop/normalise aspect ratios where needed so wide WhatsApp frames don't break the editorial layout; use `object-cover` with sensible focal positioning.
- Update `src/data/gallery.ts` with new items and correct categories, then swap the specific imports in `ofpo.tsx`, `impact.tsx`, `about.tsx`, `index.tsx` and the products section.
- Keep lazy loading and `decoding="async"`; verify laptop + mobile with screenshots.
