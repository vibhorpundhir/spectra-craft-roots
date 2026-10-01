/**
 * Curated gallery images from the Website collection.
 * Images are served from /gallery/ (public directory).
 * Organized by visual categories for use in homepage sections and gallery page.
 */

export type ImageCategory =
  "artisans" | "products" | "exhibitions" | "community" | "workshops" | "awards";

export interface GalleryImage {
  src: string;
  alt: string;
  title: string;
  category: ImageCategory;
  caption?: string;
  /** Masonry aspect hint: 'tall' | 'wide' | 'square' */
  aspect?: "tall" | "wide" | "square";
}

/* ─── Hero Slideshow Images ─── */
export const heroSlideImages: GalleryImage[] = [
  {
    src: "/gallery/stall-grand-display.jpg",
    alt: "Grand stall display at Grameen Bharat Mahotsav with NABARD and SPECTRA branding",
    title: "Grand Exhibition Display",
    category: "exhibitions",
    caption: "Grameen Bharat Mahotsav, Chandigarh 2026",
  },
  {
    src: "/gallery/artisan-stall-full.jpg",
    alt: "Artisan surrounded by handcrafted leather products at exhibition stall",
    title: "Artisan with Full Collection",
    category: "artisans",
    caption: "Every piece, a story told through leather",
  },
  {
    src: "/gallery/colorful-juti-display.jpg",
    alt: "Vibrant collection of handcrafted juti at Surajkund Mela",
    title: "The Color of Craft",
    category: "products",
    caption: "Where tradition meets vibrant design",
  },
  {
    src: "/gallery/surajkund-stall.jpg",
    alt: "Pahchan artisan at Surajkund International Crafts Mela with leather goods",
    title: "Surajkund Mela Stall",
    category: "exhibitions",
    caption: "Surajkund International Crafts Mela, Faridabad",
  },
  {
    src: "/gallery/artisan-proud-portrait.jpg",
    alt: "Artisan standing proudly with handcrafted leather collection",
    title: "Pride in Every Piece",
    category: "artisans",
    caption: "Crafted with pride, carried with stories",
  },
];

/* ─── Collage Strip Images ─── */
export const collageImages: GalleryImage[] = [
  {
    src: "/gallery/artisan-with-display.jpg",
    alt: "Artisan presenting juti display at exhibition",
    title: "Display Master",
    category: "artisans",
    aspect: "tall",
  },
  {
    src: "/gallery/officials-visit.jpg",
    alt: "Government officials inspecting handcrafted leather products",
    title: "Quality Inspection",
    category: "workshops",
    aspect: "wide",
  },
  {
    src: "/gallery/inspection-juti.jpg",
    alt: "Official examining juti craftsmanship up close",
    title: "Craft Excellence",
    category: "workshops",
    aspect: "square",
  },
  {
    src: "/gallery/award-ceremony.jpg",
    alt: "Award ceremony with NABARD and SPECTRA for artisan achievements",
    title: "Recognition Moment",
    category: "awards",
    aspect: "wide",
  },
  {
    src: "/gallery/community-group.jpg",
    alt: "Community members gathered outside the Common Facility Centre",
    title: "The Community",
    category: "community",
    aspect: "wide",
  },
  {
    src: "/gallery/artisan-colorful-collection.jpg",
    alt: "Artisan with colorful juti collection at mela stall",
    title: "Colors of Heritage",
    category: "products",
    aspect: "tall",
  },
  {
    src: "/gallery/workshop-discussion.jpg",
    alt: "Discussion at workshop with juti samples",
    title: "Design Discussion",
    category: "workshops",
    aspect: "wide",
  },
  {
    src: "/gallery/artisan-evening-stall.jpg",
    alt: "Artisan at evening stall with hanging juti display",
    title: "Evening Craft Market",
    category: "exhibitions",
    aspect: "tall",
  },
];

/* ─── "Meet the Hands" Section ─── */
export const artisanPortraits: GalleryImage[] = [
  {
    src: "/gallery/artisan-proud-portrait.jpg",
    alt: "Artisan standing proudly behind handcrafted juti collection",
    title: "Ramu Ram",
    category: "artisans",
    caption: "Master Cutter — 30 years of experience",
  },
  {
    src: "/gallery/artisan-with-display.jpg",
    alt: "Young artisan proudly presenting his display at market",
    title: "Next Generation",
    category: "artisans",
    caption: "Carrying tradition forward",
  },
  {
    src: "/gallery/artisan-at-work-stall.jpg",
    alt: "Artisan managing exhibition stall with juti wall display",
    title: "Kishan Lal",
    category: "artisans",
    caption: "Master Laster & Finisher",
  },
];

/* ─── "From Raw to Real" Process Section ─── */
export const processImages: GalleryImage[] = [
  {
    src: "/gallery/workshop-discussion.jpg",
    alt: "Design discussion and planning at CFC workshop",
    title: "Design & Planning",
    category: "workshops",
    caption: "Expert eyes guide every detail",
  },
  {
    src: "/gallery/product-closeup-stall.jpg",
    alt: "Close-up of handcrafted leather juti showing detailed stitching",
    title: "Cutting & Shaping",
    category: "products",
    caption: "Precision in every cut",
  },
  {
    src: "/gallery/craft-table.jpg",
    alt: "Craft table with tools, materials and unfinished juti",
    title: "Embroidery & Assembly",
    category: "workshops",
    caption: "Where thread meets leather",
  },
  {
    src: "/gallery/product-arrangement.jpg",
    alt: "Finished products arranged beautifully for display",
    title: "Finishing & Curing",
    category: "products",
    caption: "Burnished and buffed to perfection",
  },
];

/* ─── "Details Matter" Close-up Section ─── */
export const detailImages: GalleryImage[] = [
  {
    src: "/gallery/product-table-display.jpg",
    alt: "Table display showing various juti designs and leather products",
    title: "Every Stitch Tells a Story",
    category: "products",
  },
  {
    src: "/gallery/products-row.jpg",
    alt: "Row of handcrafted leather products showing various designs",
    title: "Heritage in Every Thread",
    category: "products",
  },
  {
    src: "/gallery/artisan-colorful-collection.jpg",
    alt: "Colorful collection showing variety of embroidery patterns",
    title: "The Art of Color",
    category: "products",
  },
];

/* ─── Parallax / Cinematic Break Images ─── */
export const cinematicImages: GalleryImage[] = [
  {
    src: "/gallery/stall-grand-display.jpg",
    alt: "Grand stall display at national craft exhibition",
    title: "Behind every stitch is a story",
    category: "exhibitions",
  },
  {
    src: "/gallery/cfc-community-photo.jpg",
    alt: "Community members at the Common Facility Centre",
    title: "Made with patience. Crafted with pride.",
    category: "community",
  },
  {
    src: "/gallery/training-classroom.jpg",
    alt: "Training session for artisans in classroom setting",
    title: "Rooted in tradition. Built for the future.",
    category: "workshops",
  },
];

/* ─── Full Masonry Gallery (all curated images) ─── */
export const allGalleryImages: GalleryImage[] = [
  // Exhibitions
  {
    src: "/gallery/stall-grand-display.jpg",
    alt: "Grand stall display at Grameen Bharat Mahotsav",
    title: "Grameen Bharat Mahotsav Exhibition",
    category: "exhibitions",
    aspect: "tall",
  },
  {
    src: "/gallery/artisan-stall-full.jpg",
    alt: "Full artisan stall with leather products",
    title: "Complete Artisan Collection",
    category: "exhibitions",
    aspect: "wide",
  },
  {
    src: "/gallery/surajkund-stall.jpg",
    alt: "Stall at Surajkund Mela",
    title: "Surajkund International Mela",
    category: "exhibitions",
    aspect: "wide",
  },
  {
    src: "/gallery/grameen-stall-full.jpg",
    alt: "Full view of Grameen Bharat Mahotsav stall",
    title: "Grameen Bharat Mahotsav",
    category: "exhibitions",
    aspect: "tall",
  },
  {
    src: "/gallery/stall-nabard-banner.jpg",
    alt: "Stall with NABARD promotional banners",
    title: "NABARD Promoted Pavilion",
    category: "exhibitions",
    aspect: "tall",
  },
  {
    src: "/gallery/stall-with-wall.jpg",
    alt: "Stall with wall-mounted juti display",
    title: "Wall of Heritage",
    category: "exhibitions",
    aspect: "tall",
  },
  {
    src: "/gallery/stall-wide-angle.jpg",
    alt: "Wide angle view of exhibition stall",
    title: "Exhibition Panorama",
    category: "exhibitions",
    aspect: "wide",
  },
  {
    src: "/gallery/night-stall.jpg",
    alt: "Night time craft stall with warm lighting",
    title: "Craft Under Stars",
    category: "exhibitions",
    aspect: "square",
  },
  {
    src: "/gallery/outdoor-exhibition.jpg",
    alt: "Outdoor exhibition with craft products",
    title: "Open Air Craftsmanship",
    category: "exhibitions",
    aspect: "wide",
  },
  {
    src: "/gallery/exhibition-wide.jpg",
    alt: "Wide view of exhibition setup",
    title: "Exhibition Setup",
    category: "exhibitions",
    aspect: "wide",
  },

  // Artisans
  {
    src: "/gallery/artisan-with-display.jpg",
    alt: "Young artisan with his handcrafted display",
    title: "The Young Master",
    category: "artisans",
    aspect: "tall",
  },
  {
    src: "/gallery/artisan-proud-portrait.jpg",
    alt: "Artisan portrait at stall",
    title: "Portrait of Pride",
    category: "artisans",
    aspect: "tall",
  },
  {
    src: "/gallery/artisan-at-work-stall.jpg",
    alt: "Artisan managing his exhibition stall",
    title: "Craft & Commerce",
    category: "artisans",
    aspect: "wide",
  },
  {
    src: "/gallery/artisan-evening-stall.jpg",
    alt: "Artisan at evening craft market",
    title: "Evening Market Master",
    category: "artisans",
    aspect: "tall",
  },
  {
    src: "/gallery/artisan-seated-display.jpg",
    alt: "Artisan seated with products around him",
    title: "The Patient Craftsman",
    category: "artisans",
    aspect: "wide",
  },
  {
    src: "/gallery/artisans-duo-stall.jpg",
    alt: "Two artisans at their joint stall",
    title: "Brotherhood of Craft",
    category: "artisans",
    aspect: "wide",
  },
  {
    src: "/gallery/artisan-selling.jpg",
    alt: "Artisan showing product to customer",
    title: "Direct from Artisan",
    category: "artisans",
    aspect: "wide",
  },
  {
    src: "/gallery/artisan-colorful-collection.jpg",
    alt: "Artisan with vibrant colorful juti collection",
    title: "Master of Colors",
    category: "artisans",
    aspect: "tall",
  },

  // Products
  {
    src: "/gallery/colorful-juti-display.jpg",
    alt: "Colorful juti display at exhibition",
    title: "Rainbow of Tradition",
    category: "products",
    aspect: "tall",
  },
  {
    src: "/gallery/product-table-display.jpg",
    alt: "Product table display with various leather goods",
    title: "Curated Collection",
    category: "products",
    aspect: "wide",
  },
  {
    src: "/gallery/product-closeup-stall.jpg",
    alt: "Close-up of products at stall",
    title: "Details in Focus",
    category: "products",
    aspect: "square",
  },
  {
    src: "/gallery/product-arrangement.jpg",
    alt: "Arranged products showing variety",
    title: "Arranged by Hand",
    category: "products",
    aspect: "wide",
  },
  {
    src: "/gallery/products-row.jpg",
    alt: "Products arranged in a row for display",
    title: "Heritage Row",
    category: "products",
    aspect: "wide",
  },
  {
    src: "/gallery/craft-table.jpg",
    alt: "Craft table with finished products",
    title: "The Craft Table",
    category: "products",
    aspect: "wide",
  },

  // Community
  {
    src: "/gallery/community-group.jpg",
    alt: "Community members gathered outside CFC",
    title: "Strength in Numbers",
    category: "community",
    aspect: "wide",
  },
  {
    src: "/gallery/community-visit.jpg",
    alt: "Community leaders visiting workshop",
    title: "Leadership Visit",
    category: "community",
    aspect: "wide",
  },
  {
    src: "/gallery/cfc-community-photo.jpg",
    alt: "Group photo at Common Facility Centre",
    title: "The CFC Family",
    category: "community",
    aspect: "wide",
  },
  {
    src: "/gallery/group-photo.jpg",
    alt: "Group photo of artisan collective",
    title: "Artisan Collective",
    category: "community",
    aspect: "wide",
  },
  {
    src: "/gallery/customers-browsing.jpg",
    alt: "Customers browsing handcrafted products",
    title: "Discovering Heritage",
    category: "community",
    aspect: "tall",
  },

  // Workshops
  {
    src: "/gallery/officials-visit.jpg",
    alt: "Officials visiting and inspecting crafts",
    title: "Quality Assurance Visit",
    category: "workshops",
    aspect: "wide",
  },
  {
    src: "/gallery/visitors-inspecting.jpg",
    alt: "Visitors inspecting craftsmanship",
    title: "Expert Inspection",
    category: "workshops",
    aspect: "wide",
  },
  {
    src: "/gallery/inspection-juti.jpg",
    alt: "Close inspection of juti craftsmanship",
    title: "Precision Check",
    category: "workshops",
    aspect: "wide",
  },
  {
    src: "/gallery/workshop-discussion.jpg",
    alt: "Workshop discussion with craft experts",
    title: "Design Atelier",
    category: "workshops",
    aspect: "wide",
  },
  {
    src: "/gallery/workshop-visit.jpg",
    alt: "Workshop visit and product review",
    title: "Workshop Tour",
    category: "workshops",
    aspect: "wide",
  },
  {
    src: "/gallery/training-classroom.jpg",
    alt: "Artisan training in classroom",
    title: "Building Skills",
    category: "workshops",
    aspect: "wide",
  },
  {
    src: "/gallery/officials-meeting.jpg",
    alt: "Officials in formal meeting",
    title: "Strategic Planning",
    category: "workshops",
    aspect: "wide",
  },
  {
    src: "/gallery/community-workshop.jpg",
    alt: "Community workshop in progress",
    title: "Learning Together",
    category: "workshops",
    aspect: "wide",
  },

  // Awards
  {
    src: "/gallery/award-ceremony.jpg",
    alt: "Award ceremony for artisan achievements",
    title: "Celebrating Excellence",
    category: "awards",
    aspect: "wide",
  },
  {
    src: "/gallery/nabard-award-plaque.jpg",
    alt: "NABARD award and certification plaque",
    title: "NABARD Recognition",
    category: "awards",
    aspect: "wide",
  },
  {
    src: "/gallery/stall-decoration.jpg",
    alt: "Decorated stall with special awards",
    title: "Pride of Rajasthan",
    category: "awards",
    aspect: "wide",
  },
];

/* ─── Page-Specific Curated Showcases (Equal-Sized Uniform Cards) ─── */

export const aboutPageImages: GalleryImage[] = [
  {
    src: "/gallery/community-group.jpg",
    alt: "Artisan collective members gathered outside the facility",
    title: "Community Collective",
    category: "community",
    caption: "200 rural artisans united under democratic ownership",
  },
  {
    src: "/gallery/shg-meeting.jpg",
    alt: "Women SHG craftswomen during assembly meeting",
    title: "Women SHG Leadership",
    category: "community",
    caption: "92 women craftswomen leading traditional tilla embroidery",
  },
  {
    src: "/gallery/officials-meeting.jpg",
    alt: "Artisan board of directors in meeting with SPECTRA leadership",
    title: "Democratic Governance",
    category: "workshops",
    caption: "Elected board of directors ensuring 100% equity for artisans",
  },
  {
    src: "/gallery/training-classroom.jpg",
    alt: "Artisans in technical training session",
    title: "Capacity Building",
    category: "workshops",
    caption: "Advanced design training and skill development with FDDI",
  },
  {
    src: "/gallery/award-ceremony.jpg",
    alt: "Artisan award ceremony with dignitaries",
    title: "National Recognition",
    category: "awards",
    caption: "Recognized by NABARD and state leadership for craft excellence",
  },
  {
    src: "/gallery/stall-grand-display.jpg",
    alt: "Grand exhibition stall at Grameen Bharat Mahotsav",
    title: "Market Access",
    category: "exhibitions",
    caption: "Connecting village craft directly with ethical national buyers",
  },
];

export const craftPageImages: GalleryImage[] = [
  {
    src: "/gallery/workshop-discussion.jpg",
    alt: "Artisans discussing footwear patterns and designs",
    title: "Pattern Atelier",
    category: "workshops",
    caption: "Designing ergonomic lasts tailored to foot anatomy",
  },
  {
    src: "/gallery/inspection-juti.jpg",
    alt: "Master craftsman inspecting stitch quality",
    title: "Quality Inspection",
    category: "workshops",
    caption: "Examining vegetable-tanned grain and waxed cord welt",
  },
  {
    src: "/gallery/artisan-with-display.jpg",
    alt: "Master craftsman presenting juti collection",
    title: "Master Craftsman",
    category: "artisans",
    caption: "Generational techniques preserved through four generations",
  },
  {
    src: "/gallery/colorful-juti-display.jpg",
    alt: "Colorful handcrafted juti display",
    title: "Natural Color Palette",
    category: "products",
    caption: "Vegetable dye treatments paired with metallic zari cords",
  },
  {
    src: "/gallery/artisan-stall-full.jpg",
    alt: "Complete handcrafted leather footwear display",
    title: "Heirloom Footwear",
    category: "products",
    caption: "Traditional Mojari and bridal juti built for a lifetime",
  },
  {
    src: "/gallery/precision-inspection.jpg",
    alt: "Precision inspection of finished leather footwear",
    title: "Beeswax Burnishing",
    category: "workshops",
    caption: "Soles trimmed by hand and burnished with pure beeswax",
  },
];

export const impactPageImages: GalleryImage[] = [
  {
    src: "/gallery/award-ceremony.jpg",
    alt: "Official felicitation of master artisans",
    title: "Artisan Felicitation",
    category: "awards",
    caption: "Honoring rural craftspeople for preserving cultural heritage",
  },
  {
    src: "/gallery/nabard-award-plaque.jpg",
    alt: "NABARD award plaque and certification",
    title: "NABARD Certification",
    category: "awards",
    caption: "Verified livelihood transformation under the OFPO scheme",
  },
  {
    src: "/gallery/community-group.jpg",
    alt: "Artisan collective members outside CFC",
    title: "199 Shareholder Families",
    category: "community",
    caption: "100% of enterprise equity held by SC & ST artisan households",
  },
  {
    src: "/gallery/officials-visit.jpg",
    alt: "Government and bank officials inspecting craft production",
    title: "Institutional Audit",
    category: "workshops",
    caption: "Periodic review by NABARD Bank and SPECTRA leadership",
  },
  {
    src: "/gallery/artisan-proud-portrait.jpg",
    alt: "Artisan portrait holding leather footwear",
    title: "Livelihood Dignity",
    category: "artisans",
    caption: "Sustainable family income replacing seasonal labor migration",
  },
  {
    src: "/gallery/community-workshop.jpg",
    alt: "Community artisans during collective workshop",
    title: "Collective Enterprise",
    category: "workshops",
    caption: "Bulk material procurement reducing production costs by 28%",
  },
];

export const contactPageImages: GalleryImage[] = [
  {
    src: "/gallery/community-group.jpg",
    alt: "Common Facility Centre exterior in Kishangarh Bas",
    title: "Common Facility Centre",
    category: "community",
    caption: "Kishangarh Bas, Alwar District, Rajasthan (Open Mon–Sat)",
  },
  {
    src: "/gallery/workshop-visit.jpg",
    alt: "Atelier and design studio interior",
    title: "Design Studio & Workshop",
    category: "workshops",
    caption: "Welcoming retail buyers, institutions, and craft scholars",
  },
  {
    src: "/gallery/artisan-stall-full.jpg",
    alt: "Artisan with handcrafted display",
    title: "Bespoke & Institutional Orders",
    category: "artisans",
    caption: "Custom sizing and corporate gifting crafted directly by artisans",
  },
  {
    src: "/gallery/stall-grand-display.jpg",
    alt: "Exhibition display at Grameen Bharat Mahotsav",
    title: "National Exhibition Desk",
    category: "exhibitions",
    caption: "Available at major national craft melas throughout the year",
  },
];
