import goods from "@/assets/product-leather-goods.jpg";

import jutiEmbroideredMaroon from "@/assets/real/juti-embroidered-maroon.jpg";
import jutiEmbroideredGold from "@/assets/real/juti-embroidered-gold.jpg";
import jutiClassicBrown from "@/assets/real/juti-classic-brown.jpg";
import jutiTanPunched from "@/assets/real/juti-tan-punched.jpg";
import jutiBlackStitched from "@/assets/real/juti-black-stitched.jpg";
import jutiTanPlain from "@/assets/real/juti-tan-plain.jpg";

// New uploaded product images
import jutiSilverZari from "@/assets/real/juti-silver-zari.jpg";
import jutiBeadedVelvet from "@/assets/real/juti-beaded-velvet.jpg";
import jutiTanEmbossed from "@/assets/real/juti-tan-embossed.jpg";
import jutiRedPerforated from "@/assets/real/juti-red-perforated.jpg";
import jutiMaroonBeadwork from "@/assets/real/juti-maroon-beadwork.jpg";
import jutiGoldenBrocade from "@/assets/real/juti-golden-brocade.jpg";
import jutiGoldZari from "@/assets/real/juti-gold-zari.jpg";
import jutiMojariBrown from "@/assets/real/juti-mojari-brown.jpg";
import jutiFloralTan from "@/assets/real/juti-floral-tan.jpg";
import jutiCreamPearl from "@/assets/real/juti-cream-pearl.jpg";
import jutiOrangeCasual from "@/assets/real/juti-orange-casual.jpg";
import jutiCamelLeather from "@/assets/real/juti-camel-leather.jpg";

export interface Product {
  slug: string;
  name: string;
  category: string;
  short: string;
  story: string;
  material: string;
  image: string;
  gallery: string[];
  featured?: boolean;
}

export const categories = ["Juti", "Shoes", "Leather Goods"] as const;

export const products: Product[] = [
  {
    slug: "silver-zari-juti",
    name: "Silver Zari Juti",
    category: "Juti",
    short:
      "Intricately woven silver zari on black leather — a craft inherited through four generations.",
    story:
      "Each pair takes two full days of patient zari needlework. The diamond motif across the vamp is a signature of the Alwar artisan cluster — a pattern that has travelled from grandmother to granddaughter. The leather sole is hand-stitched with visible welt work, a mark of construction that machines cannot replicate.",
    material: "Vegetable-tanned goat leather, silver zari thread",
    image: jutiSilverZari,
    gallery: [jutiSilverZari, jutiGoldZari, jutiGoldenBrocade],
    featured: true,
  },
  {
    slug: "beaded-velvet-juti",
    name: "Beaded Velvet Juti",
    category: "Juti",
    short: "Black velvet with hand-placed beads, sequins and a floral heart motif on the toe.",
    story:
      "The beadwork on these juti is done entirely by hand — each bead is individually placed and secured by Zarina Bano's embroidery circle. The floral heart on the vamp carries her grandmother's motif, unchanged in twenty years. The leather interior moulds to the foot within a week of wear.",
    material: "Velvet upper, genuine leather lining, hand-placed beadwork",
    image: jutiBeadedVelvet,
    gallery: [jutiBeadedVelvet, jutiMaroonBeadwork, jutiCamelLeather],
    featured: true,
  },
  {
    slug: "tan-embossed-mojari",
    name: "Tan Embossed Mojari",
    category: "Juti",
    short:
      "Sun-tanned goat leather with hand-punched floral embossing — warm, honest craftsmanship.",
    story:
      "The embossing on these mojari is done with hand-carved brass stamps heated over coals — a technique learned over years and executed in seconds. The tan deepens with wear, each pair developing its own patina. Sohan Lal's finishing unit rests them two days before dispatch so the leather settles.",
    material: "Vegetable-tanned goat leather, brass embossing",
    image: jutiTanEmbossed,
    gallery: [jutiTanEmbossed, jutiTanPunched, jutiTanPlain],
    featured: true,
  },
  {
    slug: "red-perforated-juti",
    name: "Red Perforated Juti",
    category: "Juti",
    short:
      "Hand-perforated crimson leather with wave-pattern detailing that breathes like no machine shoe can.",
    story:
      "Each perforation in these juti is punched individually with a hand awl — a full pair takes half a day of careful, rhythmic work. The wave pattern follows the natural flex lines of the foot, ensuring the shoe breathes and moves. Made in Rajasthan's artisan clusters where the craft has survived five generations.",
    material: "Full-grain dyed leather, hand-perforated detailing",
    image: jutiRedPerforated,
    gallery: [jutiRedPerforated, jutiCamelLeather, jutiBeadedVelvet],
  },
  {
    slug: "hand-embroidered-juti",
    name: "Hand-Embroidered Juti",
    category: "Juti",
    short: "Vegetable-tanned leather juti with gold tilla and zari embroidery.",
    story:
      "Each pair passes through four sets of hands: the cutter, the embroiderer, the laster and the finisher. The tilla motif on the vamp takes a full day alone. Wear them a week and the leather remembers the shape of your foot.",
    material: "Vegetable-tanned goat leather, tilla thread, velvet vamp",
    image: jutiEmbroideredMaroon,
    gallery: [jutiEmbroideredMaroon, jutiEmbroideredGold, jutiTanPunched, jutiTanPlain],
    featured: true,
  },
  {
    slug: "golden-brocade-juti",
    name: "Golden Brocade Juti",
    category: "Juti",
    short:
      "Lustrous gold brocade with intricate paisley motifs — traditionally worn for celebrations and ceremonies.",
    story:
      "The golden brocade is sourced from weaving families and married to a leather sole by artisan hands. The paisley motifs carry centuries of meaning — prosperity, fertility, continuity. These are the juti that mark a wedding day, a harvest festival, a homecoming.",
    material: "Gold brocade fabric, leather sole, hand-stitched construction",
    image: jutiGoldenBrocade,
    gallery: [jutiGoldenBrocade, jutiGoldZari, jutiSilverZari],
    featured: true,
  },
  {
    slug: "maroon-beadwork-juti",
    name: "Maroon Velvet Beadwork Juti",
    category: "Juti",
    short:
      "Deep maroon velvet adorned with gold beadwork and leaf motifs — each bead tells a story of patience.",
    story:
      "The leaf pattern on these juti is Zarina Bano's original design — drawn from the neem trees outside her workshop. Gold beads are hand-applied in rows, secured with invisible knots. The velvet catches light differently at every angle, turning a simple shoe into an heirloom.",
    material: "Velvet upper, gold beadwork, genuine leather sole",
    image: jutiMaroonBeadwork,
    gallery: [jutiMaroonBeadwork, jutiBeadedVelvet, jutiEmbroideredMaroon],
    featured: true,
  },
  {
    slug: "hand-stitched-derby",
    name: "Hand-Stitched Leather Shoes",
    category: "Shoes",
    short: "Full-grain handcrafted leather footwear, welted and finished entirely by hand.",
    story:
      "Built on a wooden last over five days, welted with waxed linen thread and burnished with beeswax. A resoleable shoe in a disposable market — made by artisans who learned the craft from their fathers in Rajasthan artisan clusters.",
    material: "Full-grain buffalo leather, genuine leather sole",
    image: jutiClassicBrown,
    gallery: [jutiClassicBrown, jutiBlackStitched, jutiTanPlain, jutiTanPunched],
  },
  {
    slug: "classic-black-mojari",
    name: "Classic Black Mojari",
    category: "Shoes",
    short:
      "Pure black leather mojari with clean lines and traditional hand-stitching — timeless elegance.",
    story:
      "No embroidery, no embellishment — just the honest beauty of hand-finished black leather. The pointed toe follows a last carved by Iqbal Khan's family forty years ago. The visible welt stitching is not decoration; it is the reason this shoe can be resoled and worn for a decade.",
    material: "Full-grain black goat leather, hand-stitched sole",
    image: jutiOrangeCasual,
    gallery: [jutiOrangeCasual, jutiBlackStitched, jutiClassicBrown],
  },
  {
    slug: "mojari-floral-tan",
    name: "Floral Tan Mojari",
    category: "Juti",
    short:
      "Golden-tan leather with delicate floral embroidery — where craft meets everyday comfort.",
    story:
      "The floral motifs are embroidered with thick cotton thread over tanned leather, creating a raised texture you can feel with your fingertips. These mojari are built for daily life — soft enough to wear without socks, strong enough to last years. The artisans call them 'the kind ones'.",
    material: "Vegetable-tanned leather, cotton thread embroidery",
    image: jutiFloralTan,
    gallery: [jutiFloralTan, jutiTanEmbossed, jutiMojariBrown],
  },
  {
    slug: "cream-pearl-juti",
    name: "Cream Pearl Juti",
    category: "Juti",
    short:
      "Soft cream leather with pearl-white hand-stitching — crafted for celebrations and milestones.",
    story:
      "Made for weddings and special occasions, these juti carry the lightest touch of the artisan's hand. The cream colour is achieved through a natural bleaching process, and each stitch of pearl-white thread is placed with the precision of a needle artist working against the clock of a wedding season.",
    material: "Bleached goat leather, pearl-white stitching",
    image: jutiCreamPearl,
    gallery: [jutiCreamPearl, jutiGoldenBrocade, jutiGoldZari],
  },
  {
    slug: "artisan-satchel",
    name: "Artisan Satchel",
    category: "Leather Goods",
    short: "Saddle-stitched satchel in vegetable-tanned hide that ages honestly.",
    story:
      "Cut from a single hide, saddle-stitched by hand so a broken thread never unravels the seam, and finished with solid brass hardware. It leaves us pale tan and turns deep honey within a year of daily use.",
    material: "Vegetable-tanned buffalo hide, brass fittings",
    image: goods,
    gallery: [goods, jutiClassicBrown, jutiEmbroideredGold],
  },
];

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product) {
  return products
    .filter((p) => p.slug !== product.slug && p.category === product.category)
    .slice(0, 3);
}
