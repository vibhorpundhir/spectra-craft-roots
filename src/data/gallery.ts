import agriculture from "@/assets/hero-agriculture.jpg";
import workshop from "@/assets/hero-leather.jpg";
import spices from "@/assets/product-spices.jpg";
import milk from "@/assets/product-milk.jpg";
import dairy from "@/assets/product-dairy.jpg";
import juti from "@/assets/product-juti.jpg";
import shoes from "@/assets/product-shoes.jpg";
import goods from "@/assets/product-leather-goods.jpg";
import farmers from "@/assets/community-farmers.jpg";
import artisans from "@/assets/community-artisans.jpg";
import training from "@/assets/gallery-training.jpg";
import dairyCentre from "@/assets/gallery-dairy-centre.jpg";
import womenShg from "@/assets/community-women-shg.jpg";
import spiceProcessing from "@/assets/community-spice-processing.jpg";
import programme from "@/assets/community-programme.jpg";

export const galleryCategories = [
  "Farmers",
  "Women Self Help Groups",
  "Dairy Activities",
  "Spice Processing",
  "Leather Craftsmanship",
  "Community Programs",
  "Training Sessions",
  "Rural Development",
  "Success Stories",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryItems: GalleryItem[] = [
  { src: agriculture, alt: "Member farmer walking between crop rows at sunrise", category: "Farmers" },
  { src: farmers, alt: "Farmer members gathered together at the edge of a field", category: "Farmers" },
  { src: womenShg, alt: "Women's self help group meeting with savings ledger in a village courtyard", category: "Women Self Help Groups" },
  { src: programme, alt: "Village community programme with women, youth and elders seated together", category: "Community Programs" },
  { src: dairyCentre, alt: "Steel milk cans at a village dairy collection centre", category: "Dairy Activities" },
  { src: milk, alt: "Morning milk collected by member dairy households", category: "Dairy Activities" },
  { src: spiceProcessing, alt: "Women spreading turmeric and chillies to dry on a terrace", category: "Spice Processing" },
  { src: spices, alt: "Graded turmeric, chilli and whole spices ready for packing", category: "Spice Processing" },
  { src: workshop, alt: "Artisan finishing a leather shoe at a workbench", category: "Leather Craftsmanship" },
  { src: artisans, alt: "Artisans cutting and stitching leather together", category: "Leather Craftsmanship" },
  { src: juti, alt: "Hand-embroidered leather juti with gold tilla work", category: "Leather Craftsmanship" },
  { src: shoes, alt: "Hand-stitched leather shoes made in a village workshop", category: "Success Stories" },
  { src: goods, alt: "Handmade leather satchel and belt made by artisan members", category: "Success Stories" },
  { src: training, alt: "Farmer training session held under a field tent", category: "Training Sessions" },
  { src: dairy, alt: "Household dairy processing supported by the collective", category: "Rural Development" },
];
