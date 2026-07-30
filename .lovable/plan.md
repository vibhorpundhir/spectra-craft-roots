## SPECTRA — FPO & OFPO Brand Website

A premium, editorial-style showcase site (no cart, no payments, no admin portal). Enquiry-driven: every product routes to a form or WhatsApp.

### Note on the stack
This project runs on React + TanStack Start (not Next.js) with Tailwind CSS and Motion for animation. Same capabilities — SSR, file-based routing, per-page SEO metadata — so nothing in the brief is lost; deployment is via Lovable Cloud hosting instead of Vercel.

### Design direction
- **Palette:** deep field green (FPO) and warm tan/leather brown (OFPO) as twin primaries, on cream / off-white / light beige surfaces, with gold and earthy-orange accents. Muted red and deep blue reserved for small state/accent use so the palette stays earthy, not flashy.
- **Type:** elegant serif display headings + clean humanist sans body, generous spacing, large hero type.
- **Motion:** restrained — scroll-reveal fades, slow image zoom on hover, soft card lifts. Nothing bouncy.
- All colors defined as semantic tokens in `src/styles.css`, so future rebranding is one file.

### Pages
```
/                Home
/about           About SPECTRA
/fpo             Agriculture division
/ofpo            Leather division
/products        Catalogue (filter: division + category)
/products/$slug  Product detail
/gallery         Categorised gallery
/contact         Contact + map + form
/privacy /terms  Footer legal pages
```

### Homepage composition
1. Split hero — agriculture imagery left, leather workshop right, SPECTRA mark and "Empowering Farmers & Artisans Together" centered, two buttons: Explore FPO / Explore OFPO.
2. About SPECTRA intro band.
3. Mission & Vision (two-panel, green/brown coded).
4. Featured products (6 cards, mixed divisions).
5. Our Impact — counters (farmers, artisans, villages, products).
6. Why Choose SPECTRA — 4 restrained icon points.
7. Our Communities — farmer and artisan story cards.
8. Gallery preview strip.
9. Contact CTA band.

### Division pages (FPO / OFPO)
Each: intro hero, people story (farmers / artisans), process section (sustainable farming / leather craftsmanship, as a numbered step sequence), product strip for that division, gallery grid, community stories, CTA.

### Product catalogue
- Grid with division and category filters, client-side, no reload.
- Detail page: image gallery with thumbnails, name, category, material, sizes, availability, optional price, long description ("story behind the product"), Enquiry button (prefills contact form) + WhatsApp button, related products.
- Products defined in one typed data file (`src/data/products.ts`) — CMS/database-ready later without touching UI.

### Contact
Accessible form (name, email, phone, subject, product-of-interest, message) with validation. Initial version opens a prepared email / WhatsApp message rather than storing submissions — say the word if you'd like enquiries stored in a database and emailed instead, and I'll add Lovable Cloud for that.
Plus phone, email, address, embedded map, working hours, social links.

### SEO & accessibility
Per-route title/description/OG/Twitter tags, canonical URLs, Organization + Product JSON-LD, semantic landmarks, alt text on every image, keyboard-navigable menus and filters, AA contrast, lazy-loaded imagery, sitemap and robots.

### Content & imagery
I'll generate cohesive lifestyle photography (fields, spices, dairy, leather workshop, juti, shoes) and write placeholder brand copy, product names and stories in SPECTRA's voice. Swap in real photos, contact details, and product data whenever you have them.

### Build order
1. Design tokens, fonts, layout shell (header nav, mobile drawer, footer).
2. Imagery generation + product/gallery data files.
3. Home page.
4. FPO, OFPO, About.
5. Catalogue + product detail.
6. Gallery, Contact, legal pages.
7. SEO metadata, animation polish, responsive and accessibility pass.
