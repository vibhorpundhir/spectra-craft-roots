import jutiEmbroideredMaroon from "@/assets/real/juti-embroidered-maroon.jpg";
import jutiEmbroideredGold from "@/assets/real/juti-embroidered-gold.jpg";
import jutiClassicBrown from "@/assets/real/juti-classic-brown.jpg";
import jutiTanPunched from "@/assets/real/juti-tan-punched.jpg";
import jutiBlackStitched from "@/assets/real/juti-black-stitched.jpg";
import jutiTanPlain from "@/assets/real/juti-tan-plain.jpg";
import fpoSpiceStall from "@/assets/real/fpo-spice-stall.jpg";
import fpoSpiceInspection from "@/assets/real/fpo-spice-inspection.jpg";
import fpoOfficeGathering from "@/assets/real/fpo-office-gathering.jpg";
import fpoAgmCrowd from "@/assets/real/fpo-agm-crowd.jpg";
import fpoAgmHall from "@/assets/real/fpo-agm-hall.jpg";
import fpoAgmSpeakers from "@/assets/real/fpo-agm-speakers.jpg";
import womenShgPledge from "@/assets/real/women-shg-pledge.jpg";
import womenAwardCertificate from "@/assets/real/women-award-certificate.jpg";
import ofpoExhibitionArtisan from "@/assets/real/ofpo-exhibition-artisan.jpg";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";
import ofpoExhibitionStall from "@/assets/real/ofpo-exhibition-stall.jpg";
import livestockWeightMeasure from "@/assets/real/livestock-weight-measure.jpg";
import livestockVillageSupport from "@/assets/real/livestock-village-support.jpg";
import livestockMarketProgramme from "@/assets/real/livestock-market-programme.jpg";
import spectraStakeholderMeeting from "@/assets/real/spectra-stakeholder-meeting.jpg";

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
  {
    src: jutiEmbroideredMaroon,
    alt: "Hand-embroidered velvet juti with intricate circular gold tilla needlework by artisan members",
    category: "Leather Craftsmanship",
  },
  {
    src: jutiEmbroideredGold,
    alt: "Intricate gold zari and tilla embroidered traditional wedding juti crafted in Rajasthan clusters",
    category: "Leather Craftsmanship",
  },
  {
    src: jutiClassicBrown,
    alt: "Handmade classic brown leather closed shoes with genuine leather sole and interior lining",
    category: "Leather Craftsmanship",
  },
  {
    src: jutiTanPunched,
    alt: "Tan vegetable-tanned leather juti featuring perforated heart motif punch detailing",
    category: "Leather Craftsmanship",
  },
  {
    src: jutiBlackStitched,
    alt: "Classic black hand-stitched leather juti with visible craft welt construction",
    category: "Leather Craftsmanship",
  },
  {
    src: jutiTanPlain,
    alt: "Traditional tan leather juti showcasing natural grain and hand-crafted inner sole",
    category: "Leather Craftsmanship",
  },
  {
    src: fpoSpiceStall,
    alt: "SPECTRA Aadarsh Mahila Producer Company spice production stall at Pratap Auditorium, Alwar",
    category: "Spice Processing",
  },
  {
    src: fpoSpiceInspection,
    alt: "Quality inspection of packaged turmeric, spices and pickles at the member storage facility",
    category: "Spice Processing",
  },
  {
    src: fpoOfficeGathering,
    alt: "Farmer and women members gathered in front of the SAUMPCL producer company office in Alwar",
    category: "Farmers",
  },
  {
    src: fpoAgmCrowd,
    alt: "Over two hundred women self-help group members attending the FPO Annual General Meeting",
    category: "Women Self Help Groups",
  },
  {
    src: womenShgPledge,
    alt: "Women SHG leaders taking a solidarity and self-reliance pledge on stage during the annual meeting",
    category: "Women Self Help Groups",
  },
  {
    src: fpoAgmHall,
    alt: "Annual General Meeting of Farmer Producer Company members at Hotel Swaroop Vilas Palace, Alwar",
    category: "Women Self Help Groups",
  },
  {
    src: fpoAgmSpeakers,
    alt: "SPECTRA project facilitators presenting progress and annual audit to FPO members",
    category: "Training Sessions",
  },
  {
    src: womenAwardCertificate,
    alt: "Recognition and certificate distribution to women leaders by SPECTRA and Mahila Shakti Kendra",
    category: "Success Stories",
  },
  {
    src: ofpoExhibitionArtisan,
    alt: "Artisan member representing SPECTRA Aadarsh Mahila Producer Company at NABARD sponsored exhibition",
    category: "Leather Craftsmanship",
  },
  {
    src: ofpoStallInspection,
    alt: "Handmade leather juti and agro products on display for institutional visitors and partners",
    category: "Success Stories",
  },
  {
    src: ofpoExhibitionStall,
    alt: "National level exhibition stall showcasing SPECTRA rural artisan handcrafts and leather goods",
    category: "Rural Development",
  },
  {
    src: livestockWeightMeasure,
    alt: "Livestock health check and scientific weight monitoring with rural goat rearers in Alwar",
    category: "Rural Development",
  },
  {
    src: livestockVillageSupport,
    alt: "Doorstep veterinary and animal husbandry livelihood support for smallholder farming families",
    category: "Dairy Activities",
  },
  {
    src: livestockMarketProgramme,
    alt: "Livelihood expansion and goat marketing programme supported by SPECTRA, NABARD & Heifer International",
    category: "Community Programs",
  },
  {
    src: spectraStakeholderMeeting,
    alt: "SPECTRA organisation institutional review meeting and programme milestone presentation",
    category: "Community Programs",
  },
];
