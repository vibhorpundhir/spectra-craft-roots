import jutiEmbroideredMaroon from "@/assets/real/juti-embroidered-maroon.jpg";
import jutiEmbroideredGold from "@/assets/real/juti-embroidered-gold.jpg";
import jutiClassicBrown from "@/assets/real/juti-classic-brown.jpg";
import jutiTanPunched from "@/assets/real/juti-tan-punched.jpg";
import jutiBlackStitched from "@/assets/real/juti-black-stitched.jpg";
import jutiTanPlain from "@/assets/real/juti-tan-plain.jpg";
import grameenArtisanDisplay from "@/assets/real/grameen-artisan-display.jpg";
import pahchanIsmailpurOfficeCommunity from "@/assets/real/pahchan-ismailpur-office-community.jpg";
import officialsInspectingJuti from "@/assets/real/officials-inspecting-juti.jpg";
import pahchanStallGrand from "@/assets/real/pahchan-stall-grand.jpg";
import cfcLeatherWorkshop from "@/assets/real/cfc-leather-workshop.jpg";
import officialsGrameenVisit from "@/assets/real/officials-grameen-visit.jpg";

// New uploaded craft images
import jutiSilverZari from "@/assets/real/juti-silver-zari.jpg";
import jutiBeadedVelvet from "@/assets/real/juti-beaded-velvet.jpg";
import jutiTanEmbossed from "@/assets/real/juti-tan-embossed.jpg";
import jutiRedPerforated from "@/assets/real/juti-red-perforated.jpg";
import jutiGoldenBrocade from "@/assets/real/juti-golden-brocade.jpg";
import jutiMaroonBeadwork from "@/assets/real/juti-maroon-beadwork.jpg";
import jutiGoldZari from "@/assets/real/juti-gold-zari.jpg";
import jutiCreamPearl from "@/assets/real/juti-cream-pearl.jpg";
import jutiOrangeCasual from "@/assets/real/juti-orange-casual.jpg";

export const galleryCategories = [
  "Finished Products",
  "Craft Process",
  "Artisans at Work",
  "Workshops",
  "Community",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  title: string;
  category: GalleryCategory;
  artisanGroup: string;
  story: string;
  materials: string;
  craftTechnique: string;
  cluster: string;
  isOrderable?: boolean;
}

export const galleryItems: GalleryItem[] = [
  // 1. Finished Products — Silver Zari
  {
    id: "silver-zari-diamond",
    src: jutiSilverZari,
    alt: "Silver zari juti with intricate diamond pattern handwoven by Alwar artisans",
    title: "Silver Zari Diamond-Weave Juti",
    category: "Finished Products",
    artisanGroup: "Ekta Mahila SHG, Ismailpur Cluster",
    story:
      "Hand-crafted using pure metallic silver tilla threads woven into geometric diamond lattices on midnight velvet. Designed for festive and wedding celebrations, this piece reflects centuries of royal court heritage preserved by the women craftswomen of Ismailpur.",
    materials:
      "Supple goat leather lining, metallic silver tilla, velvet upper, cushioned leather insole",
    craftTechnique: "Fine needle tilla couch-work, hand-stretched on seasoned wooden lasts",
    cluster: "Ismailpur, Kishangarh Bas, Alwar",
    isOrderable: true,
  },

  // 2. Finished Products — Beaded Velvet
  {
    id: "beaded-velvet-heart",
    src: jutiBeadedVelvet,
    alt: "Black velvet juti with hand-placed beads and floral heart motif",
    title: "Midnight Velvet Floral Heart Mojari",
    category: "Finished Products",
    artisanGroup: "Zarina Bano & Ismailpur Women Artisans",
    story:
      "Features micro-cut gold beads hand-anchored individually on deep onyx velvet. The floral heart medallion symbolizes enduring affection and heritage, traditionally gifted during auspicious weddings in Mewat.",
    materials: "Deep black silk-velvet, vegetable-tanned buffalo sole, golden micro-beads",
    craftTechnique:
      "Precision needle zardozi beading, double saddle welt stitching with waxed thread",
    cluster: "Common Facility Centre (CFC), Kishangarh Bas",
    isOrderable: true,
  },

  // 3. Finished Products — Tan Embossed
  {
    id: "tan-embossed-mojari",
    src: jutiTanEmbossed,
    alt: "Tan goat leather mojari with hand-punched floral embossing from village workshops",
    title: "Heritage Tan Embossed Goat Leather Mojari",
    category: "Finished Products",
    artisanGroup: "Master Craftsman Babu Lal & Ismailpur Guild",
    story:
      "Crafted from locally sourced, vegetable-tanned goat leather treated with organic babool bark extract. Every floral petal on the upper is embossed using hand-forged brass dies struck with measured wooden mallet blows.",
    materials: "100% full-grain vegetable-tanned goat leather, organic mustard oil conditioning",
    craftTechnique: "Hand-die relief embossing, hand-pegged leather sole, burnished raw edges",
    cluster: "Ismailpur Leather Cluster, Alwar",
    isOrderable: true,
  },

  // 4. Finished Products — Red Perforated
  {
    id: "crimson-perforated-wave",
    src: jutiRedPerforated,
    alt: "Crimson leather juti with hand-perforated wave pattern breathing design",
    title: "Crimson Perforated Wave Juti",
    category: "Finished Products",
    artisanGroup: "Meera Bai Artisan Collective",
    story:
      "Designed for all-day comfort and breathability in arid desert climates. The rhythmic wave perforations allow natural airflow while preserving the full tensile durability of top-grade grain leather.",
    materials: "Naturally dyed crimson leather, unbleached cotton lining, non-slip textured sole",
    craftTechnique: "Hand chisel-punch perforations, turned-edge stitch assembly",
    cluster: "Ismailpur, Alwar",
    isOrderable: true,
  },

  // 5. Finished Products — Golden Brocade
  {
    id: "royal-gold-brocade",
    src: jutiGoldenBrocade,
    alt: "Lustrous gold brocade juti with paisley motifs for celebrations and ceremonies",
    title: "Royal Paisley Gold Brocade Juti",
    category: "Finished Products",
    artisanGroup: "FDDI Noida Trained Women Artisans",
    story:
      "Woven with rich gold brocade featuring timeless kairi (paisley) and floral vines. The gently turned curl (nok) toe honors royal Mewati aesthetics, reinforced with stiffened leather heel counters for secure walking.",
    materials: "Gold zari brocade upper, chrome-free leather heel counter, buffalo leather sole",
    craftTechnique: "Traditional nok shaping, hand-welted sole with waxed linen thread",
    cluster: "CFC Design Studio, Kishangarh Bas",
    isOrderable: true,
  },

  // 6. Finished Products — Maroon Beadwork
  {
    id: "maroon-beadwork-bridal",
    src: jutiMaroonBeadwork,
    alt: "Deep maroon velvet juti with gold leaf beadwork by Zarina Bano's embroidery circle",
    title: "Imperial Maroon Velvet Floral Juti",
    category: "Finished Products",
    artisanGroup: "Zarina Bano's SHG Circle (46% Women Artisans)",
    story:
      "A flagship bridal creation requiring over 18 hours of continuous hand-beading. The concentric floral crest is stenciled by master tracing artists before being meticulously filled with gold cut-dana and bullion wire.",
    materials: "Rich garnet velvet, gold bullion zari wire, latex-cushioned leather footbed",
    craftTechnique: "Aari-zardozi needlework, velvet edge binding, bespoke wooden lasting",
    cluster: "Ismailpur Village, Alwar",
    isOrderable: true,
  },

  // 7. Finished Products — Gold Zari
  {
    id: "gold-zari-lattice",
    src: jutiGoldZari,
    alt: "Golden zari juti with traditional Rajasthani heart pattern weaving",
    title: "Golden Lattice Traditional Rajasthani Juti",
    category: "Finished Products",
    artisanGroup: "Kusum Lata Producer Group",
    story:
      "Celebrates the interlocking geometric lattice weave indigenous to eastern Rajasthan. Gold-coated threads capture and reflect warm ambient light, making it a revered wedding staple.",
    materials: "High-luster golden metallic thread, natural tanned sole, arch-contoured padding",
    craftTechnique: "Cross-warp lattice embroidery, hand-stretched lasting over wooden dies",
    cluster: "Kishangarh Bas Cluster",
    isOrderable: true,
  },

  // 8. Finished Products — Cream Pearl
  {
    id: "cream-pearl-bridal",
    src: jutiCreamPearl,
    alt: "Cream pearl juti crafted for weddings with natural bleached goat leather",
    title: "Pearl White Bridal Celebration Juti",
    category: "Finished Products",
    artisanGroup: "Pahchan Women Artisan Collective",
    story:
      "Tailored for brides and grooms seeking understated luxury. The ivory base is hand-embroidered with seed pearls and matte gold sequins designed to harmonize with sherwanis and pastel lehengas.",
    materials: "Ivory silk-velvet blend, seed pearls, vegetable-tanned goat sole",
    craftTechnique:
      "Delicate seed pearl anchoring, concealed inner welt seams to prevent shoe bite",
    cluster: "CFC Studio, Ismailpur",
    isOrderable: true,
  },

  // 9. Finished Products — Classic Black
  {
    id: "classic-black-mojari",
    src: jutiOrangeCasual,
    alt: "Classic black leather mojari with pointed toe and visible welt stitching",
    title: "Classic Black Gentleman's Mojari",
    category: "Finished Products",
    artisanGroup: "Ram Kishan & Senior Leather Artisans",
    story:
      "An enduring, understated classic. Crafted with oiled full-grain leather that naturally softens and molds to the wearer's foot contours. Prominent contrast welt stitching gives it distinct artisanal prestige.",
    materials: "Full-grain black leather, heavy waxed cord, vegetable-tanned sole",
    craftTechnique: "Visible contrast saddle stitching, edge beveling & organic gum burnishing",
    cluster: "Ismailpur Guild",
    isOrderable: true,
  },

  // 10. Finished Products — Embroidered Maroon
  {
    id: "embroidered-maroon-mandala",
    src: jutiEmbroideredMaroon,
    alt: "Hand-embroidered velvet juti with intricate circular gold tilla needlework by artisan members",
    title: "Heritage Velvet Circular Tilla Juti",
    category: "Finished Products",
    artisanGroup: "Radha Rani SHG & Master Artisans",
    story:
      "Showcases the iconic circular mandala motif representing harmony and auspicious beginnings. Each circle is hand-coiled with metallic gold cord and secured with microscopic anchor stitches.",
    materials: "Plush wine-red velvet, metallic gold cord, moisture-wicking leather insole",
    craftTechnique: "Tilla couch stitching, hand-pegged sole assembly",
    cluster: "Ismailpur, Alwar",
    isOrderable: true,
  },

  // 11. Craft Process — Gold Embroidered Upper
  {
    id: "gold-embroidered-craft-process",
    src: jutiEmbroideredGold,
    alt: "Intricate gold zari and tilla embroidered traditional wedding juti crafted in Rajasthan clusters",
    title: "Adda Frame Zari Embroidery Stage",
    category: "Craft Process",
    artisanGroup: "Ismailpur Embroidery Masters",
    story:
      "Captured on the wooden adda frame before shoe lasting. Every millimeter is covered in dense gold zari, requiring steady hands and up to 14 days of patient needlework by skilled women artisans.",
    materials: "Adda-stretched canvas, gold zari, charcoal stencil tracing",
    craftTechnique: "Adda-frame zardozi embroidery, tension balancing, master tracing",
    cluster: "Ismailpur Common Facility Centre",
    isOrderable: false,
  },

  // 12. Finished Products — Classic Brown
  {
    id: "classic-brown-shoe",
    src: jutiClassicBrown,
    alt: "Handmade classic brown leather closed shoes with genuine leather sole and interior lining",
    title: "Handmade Heritage Brown Leather Shoe",
    category: "Finished Products",
    artisanGroup: "Senior Footwear Guild Members",
    story:
      "A bridge piece uniting traditional Alwar lasting techniques with modern ergonomic slip-on shoe design. Features soft breathable leather lining and a hand-stitched sole built for decades.",
    materials: "Vegetable-tanned brown cow/buff leather, ergonomic footbed",
    craftTechnique: "Hand welt lasting, edge profiling, natural wax finish",
    cluster: "Kishangarh Bas",
    isOrderable: true,
  },

  // 13. Craft Process — Tan Punched Detailing
  {
    id: "tan-punched-process",
    src: jutiTanPunched,
    alt: "Tan vegetable-tanned leather juti featuring perforated heart motif punch detailing",
    title: "Precision Die-Punch Craft Process",
    category: "Craft Process",
    artisanGroup: "Artisan Apprentices & Master Trainers",
    story:
      "Photographed during the punch-die crafting phase. Using custom-forged steel chisels, artisans strike rhythmic patterns to create breathable openwork designs without compromising leather durability.",
    materials: "Natural vegetable-tanned hide, organic conditioning oils",
    craftTechnique: "Precision punch die striking, edge skiving, wet-molding",
    cluster: "Ismailpur Workshop",
    isOrderable: false,
  },

  // 14. Craft Process — Black Stitched Welt
  {
    id: "black-stitched-welt-process",
    src: jutiBlackStitched,
    alt: "Classic black hand-stitched leather juti with visible craft welt construction",
    title: "Two-Needle Saddle Welt Stitching",
    category: "Craft Process",
    artisanGroup: "Master Craftsman Babu Lal",
    story:
      "Detail of the crucial stitching stage where upper and sole are united without toxic glues. Heavy waxed twine is drawn through awl-pierced holes with dual needles, ensuring generational longevity.",
    materials: "Waxed hemp cord, chrome-free sole leather, cobbler's awl",
    craftTechnique: "Two-needle saddle stitch welt construction, sole channel cut",
    cluster: "Ismailpur CFC",
    isOrderable: false,
  },

  // 15. Finished Products — Tan Plain
  {
    id: "tan-plain-natural",
    src: jutiTanPlain,
    alt: "Traditional tan leather juti showcasing natural grain and hand-crafted inner sole",
    title: "Raw Grain Undyed Tan Mojari",
    category: "Finished Products",
    artisanGroup: "Ismailpur Leather Craftsmen",
    story:
      "Celebrates the pure, unmasked grain of vegetable-tanned goat leather. Over months of wear, this mojari develops a distinct golden-amber patina that documents its owner's personal journey.",
    materials: "Raw vegetable-tanned goat leather, organic beeswax finish",
    craftTechnique: "Natural wet lasting, bone burnishing, chemical-free finishing",
    cluster: "Ismailpur Cluster",
    isOrderable: true,
  },

  // 16. Artisans at Work — Grameen Mahotsav Artisan Display
  {
    id: "artisan-exhibition-representative",
    src: grameenArtisanDisplay,
    alt: "Pahchan artisan representing rural footwear craft at Grameen Bharat Mahotsav",
    title: "Artisan Leader at National Craft Pavilion",
    category: "Artisans at Work",
    artisanGroup: "Pahchan Producer Company Member Artisans",
    story:
      "Captured at a prominent NABARD-sponsored national craft expo where rural Alwar artisans represented their collective directly. Eliminating middlemen allows artisans to retain fair value for their craft.",
    materials: "Exhibition display, handcrafted leather collection",
    craftTechnique: "Artisan storytelling, fair-trade market linkage, institutional engagement",
    cluster: "National Pavilion (Promoted by SPECTRA & NABARD)",
    isOrderable: false,
  },

  // 17. Workshops — Officials Inspection Review
  {
    id: "stall-inspection-quality",
    src: officialsInspectingJuti,
    alt: "NABARD and institutional officials inspecting handmade leather juti at Grameen Bharat Mahotsav",
    title: "NABARD & Institutional Quality Review",
    category: "Workshops",
    artisanGroup: "SPECTRA Facilitators & NABARD Officials",
    story:
      "Senior officials reviewing standardized product ranges at the exhibition stall. Quality parameters including stitch consistency, leather thickness, and insole resilience are checked against FDDI standards.",
    materials: "Production batch samples, FDDI standardization charts",
    craftTechnique: "Quality benchmarking, FDDI Noida design standards",
    cluster: "Common Facility Centre, Kishangarh Bas",
    isOrderable: false,
  },

  // 18. Workshops — Full Exhibition Stall Display
  {
    id: "exhibition-stall-showcase",
    src: pahchanStallGrand,
    alt: "Grand Grameen Bharat Mahotsav pavilion showcasing Pahchan rural artisan handcrafts and leather goods",
    title: "Pahchan National Artisan Exhibition Pavilion",
    category: "Workshops",
    artisanGroup: "Pahchan Producer Company Collective",
    story:
      "Full pavilion showcasing traditional mojari, leather folios, and modern accessories. The stall serves as a commercial springboard connecting rural creators with institutional buyers across India.",
    materials: "Authentic mojari, accessories, descriptive craft panels",
    craftTechnique: "Collective marketing, institutional procurement display",
    cluster: "Grameen Bharat Mahotsav Pavilion",
    isOrderable: false,
  },

  // 19. Community — Pahchan Registered Enterprise & Women Collective
  {
    id: "pahchan-office-community-solidarity",
    src: pahchanIsmailpurOfficeCommunity,
    alt: "Pahchan artisan shareholders and women members outside the registered company office in Ismailpur",
    title: "Pahchan Registered Enterprise & Artisan Collective",
    category: "Community",
    artisanGroup: "92 Women Leather Artisans & Shareholders of Ismailpur",
    story:
      "Artisan shareholders and women craftswomen at the registered company office in Ismailpur. 46% of Pahchan's 200 artisans are women who manage their own bank accounts, equity shares, and cooperative savings.",
    materials: "Community registry, shareholder passbooks, enterprise charter",
    craftTechnique: "Producer Company governance, financial empowerment, collective enterprise",
    cluster: "Ismailpur Registered Office",
    isOrderable: false,
  },

  // 20. Community — CFC Design Studio Collaboration
  {
    id: "cfc-design-studio-forum",
    src: cfcLeatherWorkshop,
    alt: "Master craftspeople, women embroiderers, and SPECTRA leadership collaborating at the Common Facility Centre",
    title: "Common Facility Centre Design & Innovation Forum",
    category: "Community",
    artisanGroup: "Women Master Artisans & Design Facilitators",
    story:
      "Master craftspeople, women embroiderers, and SPECTRA leadership collaborating at the Common Facility Centre & Design Studio in Kishangarh Bas to innovate traditional Rajasthani footwear.",
    materials: "Handcrafted prototypes, embroidery patterns, wooden lasts",
    craftTechnique: "Skill enhancement, collaborative design innovation",
    cluster: "CFC & Design Studio, Kishangarh Bas",
    isOrderable: false,
  },

  // 21. Community — Stakeholder Meeting
  {
    id: "spectra-stakeholder-annual-review",
    src: officialsGrameenVisit,
    alt: "SPECTRA organisation institutional review meeting and programme milestone presentation",
    title: "Producer Company Annual Governance Forum",
    category: "Community",
    artisanGroup: "Artisan Board of Directors & SPECTRA Leadership",
    story:
      "Democratic board review where artisan directors review audited accounts, dividend shares, raw material bulk procurement, and CFC equipment upgrades alongside NABARD and SPECTRA mentors.",
    materials: "Annual audit reports, Companies Act 2013 filings, cluster blueprints",
    craftTechnique: "Producer Company democratic governance, institutional transparency",
    cluster: "SPECTRA Alwar Office",
    isOrderable: false,
  },
];
