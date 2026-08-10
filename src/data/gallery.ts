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
import stallAsset from "@/assets/real-ofpo-stall.jpg.asset.json";
import jutiDisplayAsset from "@/assets/real-juti-display.jpg.asset.json";
import stitchingAsset from "@/assets/real-stitching-unit.jpg.asset.json";
import machineTrainingAsset from "@/assets/real-machine-training.jpg.asset.json";
import exposureVisitAsset from "@/assets/real-exposure-visit.jpg.asset.json";
import womenExposureAsset from "@/assets/real-women-exposure.jpg.asset.json";
import foundationDayAsset from "@/assets/real-foundation-day.jpg.asset.json";
import trainingSessionAsset from "@/assets/real-training-session.jpg.asset.json";

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
  { src: stallAsset.url, alt: "Artisan member at the Pahchaan Ismailpur Leather Producer Company stall of handmade juti", category: "Leather Craftsmanship" },
  { src: jutiDisplayAsset.url, alt: "Rows of hand-stitched leather juti displayed by artisan members at an exhibition", category: "Success Stories" },
  { src: stitchingAsset.url, alt: "Artisan members at work in the shared leather stitching unit", category: "Rural Development" },
  { src: machineTrainingAsset.url, alt: "Artisans being shown a leather stitching machine during a training visit", category: "Training Sessions" },
  { src: trainingSessionAsset.url, alt: "SPECTRA facilitator addressing farmer and artisan members at a training session", category: "Training Sessions" },
  { src: womenExposureAsset.url, alt: "Women members of a self help group during a SPECTRA exposure visit", category: "Women Self Help Groups" },
  { src: exposureVisitAsset.url, alt: "Exposure visit flagged off for OFPO members in Alwar, Rajasthan", category: "Community Programs" },
  { src: foundationDayAsset.url, alt: "SPECTRA members gathered at a NABARD foundation day programme", category: "Community Programs" },
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
