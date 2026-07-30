import spices from "@/assets/product-spices.jpg";
import milk from "@/assets/product-milk.jpg";
import dairy from "@/assets/product-dairy.jpg";
import juti from "@/assets/product-juti.jpg";
import shoes from "@/assets/product-shoes.jpg";
import goods from "@/assets/product-leather-goods.jpg";

export type Division = "fpo" | "ofpo";

export interface Product {
  slug: string;
  name: string;
  division: Division;
  category: string;
  short: string;
  story: string;
  material: string;
  sizes?: string[];
  price?: string;
  availability: "In Stock" | "Made to Order" | "Seasonal";
  image: string;
  gallery: string[];
  featured?: boolean;
}

export const divisionMeta: Record<
  Division,
  { label: string; long: string; accent: string }
> = {
  fpo: { label: "FPO", long: "Agriculture", accent: "text-primary" },
  ofpo: { label: "OFPO", long: "Leather Craft", accent: "text-leather" },
};

export const products: Product[] = [
  {
    slug: "single-origin-turmeric",
    name: "Single-Origin Turmeric",
    division: "fpo",
    category: "Spices",
    short: "Sun-dried, stone-ground turmeric with a deep 4.2% curcumin count.",
    story:
      "Grown on rain-fed plots by eighteen member families, our turmeric is lifted by hand, boiled the traditional way, then sun-dried on open terraces for eleven days. Stone grinding keeps the rhizome cool so the colour and aroma survive the mill. Nothing is added, nothing is polished.",
    material: "Whole rhizome, stone-ground",
    sizes: ["250 g", "500 g", "1 kg"],
    price: "From ₹240",
    availability: "In Stock",
    image: spices,
    gallery: [spices, dairy, milk],
    featured: true,
  },
  {
    slug: "hand-pounded-chilli",
    name: "Hand-Pounded Red Chilli",
    division: "fpo",
    category: "Spices",
    short: "Slow-dried Mathania chillies, coarse pounded for colour over heat.",
    story:
      "Selected for colour rather than sheer heat, these chillies are shade-cured over three weeks before being pounded in small batches. The result is a warm, rounded pungency that carries a deep red across a dish.",
    material: "Whole dried chilli",
    sizes: ["200 g", "500 g"],
    price: "From ₹190",
    availability: "Seasonal",
    image: spices,
    gallery: [spices, milk],
  },
  {
    slug: "farm-fresh-milk",
    name: "Farm-Fresh Milk",
    division: "fpo",
    category: "Milk",
    short: "Morning-collected whole milk from indigenous-breed herds.",
    story:
      "Collected before sunrise at village level and chilled within ninety minutes, our milk travels a short distance from udder to bottle. Every batch is tested at the collection centre, and every rupee above cost returns to the member household that produced it.",
    material: "Whole cow milk, 4.2% fat",
    sizes: ["500 ml", "1 L"],
    price: "₹62 / litre",
    availability: "In Stock",
    image: milk,
    gallery: [milk, dairy],
    featured: true,
  },
  {
    slug: "bilona-ghee",
    name: "Bilona Cultured Ghee",
    division: "fpo",
    category: "Dairy",
    short: "Hand-churned from cultured curd, simmered slowly in clay-lined vessels.",
    story:
      "We set the curd overnight, churn it at dawn with a wooden bilona, and simmer the butter gently until it turns amber and grainy. It takes close to thirty litres of milk to fill a single litre jar — which is exactly why it tastes the way it does.",
    material: "Cultured cow butter",
    sizes: ["250 ml", "500 ml", "1 L"],
    price: "From ₹690",
    availability: "In Stock",
    image: dairy,
    gallery: [dairy, milk],
    featured: true,
  },
  {
    slug: "village-paneer",
    name: "Village Paneer",
    division: "fpo",
    category: "Dairy",
    short: "Soft-set paneer pressed the same morning the milk arrives.",
    story:
      "Set with lemon, pressed under stone weights, and dispatched the same day. No emulsifiers, no shelf-life chemistry — just milk that had a short journey and a careful pair of hands.",
    material: "Whole milk paneer",
    sizes: ["200 g", "500 g"],
    availability: "Made to Order",
    image: dairy,
    gallery: [dairy, milk],
  },
  {
    slug: "embroidered-juti",
    name: "Hand-Embroidered Juti",
    division: "ofpo",
    category: "Juti",
    short: "Vegetable-tanned leather juti with gold tilla embroidery.",
    story:
      "Each pair passes through four sets of hands: the cutter, the embroiderer, the laster and the finisher. The tilla motif on the vamp takes a full day alone. Wear them a week and the leather remembers the shape of your foot.",
    material: "Vegetable-tanned goat leather, tilla thread",
    sizes: ["UK 5", "UK 6", "UK 7", "UK 8", "UK 9", "UK 10"],
    price: "From ₹2,450",
    availability: "Made to Order",
    image: juti,
    gallery: [juti, shoes, goods],
    featured: true,
  },
  {
    slug: "hand-stitched-derby",
    name: "Hand-Stitched Derby",
    division: "ofpo",
    category: "Shoes",
    short: "Full-grain derby, welted and finished entirely by hand.",
    story:
      "Built on a wooden last over five days, welted with waxed linen thread and burnished with beeswax. A resoleable shoe in a disposable market — made by artisans who learned the craft from their fathers.",
    material: "Full-grain buffalo leather, leather sole",
    sizes: ["UK 6", "UK 7", "UK 8", "UK 9", "UK 10", "UK 11"],
    price: "From ₹5,900",
    availability: "Made to Order",
    image: shoes,
    gallery: [shoes, juti, goods],
    featured: true,
  },
  {
    slug: "artisan-satchel",
    name: "Artisan Satchel",
    division: "ofpo",
    category: "Leather Goods",
    short: "Saddle-stitched satchel in vegetable-tanned hide that ages honestly.",
    story:
      "Cut from a single hide, saddle-stitched by hand so a broken thread never unravels the seam, and finished with solid brass hardware. It leaves us pale tan and turns deep honey within a year of daily use.",
    material: "Vegetable-tanned buffalo hide, brass fittings",
    price: "From ₹7,200",
    availability: "In Stock",
    image: goods,
    gallery: [goods, shoes, juti],
    featured: true,
  },
  {
    slug: "hand-cut-belt",
    name: "Hand-Cut Leather Belt",
    division: "ofpo",
    category: "Leather Goods",
    short: "A single strip of hide, edge-burnished and hand-punched.",
    story:
      "No bonded layers, no filler. One strip of thick vegetable-tanned hide, bevelled, burnished and buckled — the sort of belt that outlasts the trousers it holds up.",
    material: "Vegetable-tanned hide, brass buckle",
    sizes: ['30"', '32"', '34"', '36"', '38"', '40"'],
    price: "From ₹1,850",
    availability: "In Stock",
    image: goods,
    gallery: [goods, juti],
  },
];

export const categoriesByDivision: Record<Division, string[]> = {
  fpo: ["Spices", "Milk", "Dairy"],
  ofpo: ["Juti", "Shoes", "Leather Goods"],
};

export function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

export function relatedProducts(product: Product) {
  return products
    .filter((p) => p.slug !== product.slug && p.division === product.division)
    .slice(0, 3);
}
