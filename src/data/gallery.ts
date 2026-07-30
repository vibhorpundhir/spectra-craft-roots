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

export const galleryCategories = [
  "Agriculture",
  "Dairy",
  "Leather Workshop",
  "Products",
  "Events",
  "Training",
  "Community",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryItems: GalleryItem[] = [
  { src: agriculture, alt: "Member farmer walking between crop rows at sunrise", category: "Agriculture" },
  { src: farmers, alt: "SPECTRA farmer members gathered in a field", category: "Community" },
  { src: dairyCentre, alt: "Steel milk cans at a village dairy collection centre", category: "Dairy" },
  { src: milk, alt: "Bottled farm-fresh milk from SPECTRA dairy members", category: "Dairy" },
  { src: dairy, alt: "Clay pot of bilona ghee beside fresh paneer", category: "Products" },
  { src: spices, alt: "Bowls of turmeric, chilli and whole spices on linen", category: "Products" },
  { src: workshop, alt: "Artisan finishing a leather shoe at a workbench", category: "Leather Workshop" },
  { src: artisans, alt: "Artisans cutting and stitching leather together", category: "Leather Workshop" },
  { src: juti, alt: "Hand-embroidered leather juti with gold tilla work", category: "Products" },
  { src: shoes, alt: "Hand-stitched leather derby shoes", category: "Products" },
  { src: goods, alt: "Handmade leather satchel and belt", category: "Products" },
  { src: training, alt: "Farmer training session held under a field tent", category: "Training" },
];
