import jutiEmbroideredMaroon from "@/assets/real/juti-embroidered-maroon.jpg";
import jutiEmbroideredGold from "@/assets/real/juti-embroidered-gold.jpg";
import jutiClassicBrown from "@/assets/real/juti-classic-brown.jpg";
import jutiTanPunched from "@/assets/real/juti-tan-punched.jpg";
import jutiBlackStitched from "@/assets/real/juti-black-stitched.jpg";
import jutiTanPlain from "@/assets/real/juti-tan-plain.jpg";
import womenShgPledge from "@/assets/real/women-shg-pledge.jpg";
import womenAwardCertificate from "@/assets/real/women-award-certificate.jpg";
import ofpoExhibitionArtisan from "@/assets/real/ofpo-exhibition-artisan.jpg";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";
import ofpoExhibitionStall from "@/assets/real/ofpo-exhibition-stall.jpg";
import spectraStakeholderMeeting from "@/assets/real/spectra-stakeholder-meeting.jpg";

// New uploaded images
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
  "Artisans at Work",
  "Craft Process",
  "Finished Products",
  "Workshops",
  "Community",
] as const;

export type GalleryCategory = (typeof galleryCategories)[number];

export interface GalleryItem {
  src: string;
  alt: string;
  category: GalleryCategory;
}

export const galleryItems: GalleryItem[] = [
  // Finished Products — real uploaded craft images
  {
    src: jutiSilverZari,
    alt: "Silver zari juti with intricate diamond pattern handwoven by Alwar artisans",
    category: "Finished Products",
  },
  {
    src: jutiBeadedVelvet,
    alt: "Black velvet juti with hand-placed beads and floral heart motif",
    category: "Finished Products",
  },
  {
    src: jutiTanEmbossed,
    alt: "Tan goat leather mojari with hand-punched floral embossing from village workshops",
    category: "Finished Products",
  },
  {
    src: jutiRedPerforated,
    alt: "Crimson leather juti with hand-perforated wave pattern breathing design",
    category: "Finished Products",
  },
  {
    src: jutiGoldenBrocade,
    alt: "Lustrous gold brocade juti with paisley motifs for celebrations and ceremonies",
    category: "Finished Products",
  },
  {
    src: jutiMaroonBeadwork,
    alt: "Deep maroon velvet juti with gold leaf beadwork by Zarina Bano's embroidery circle",
    category: "Finished Products",
  },
  {
    src: jutiGoldZari,
    alt: "Golden zari juti with traditional Rajasthani heart pattern weaving",
    category: "Finished Products",
  },
  {
    src: jutiCreamPearl,
    alt: "Cream pearl juti crafted for weddings with natural bleached goat leather",
    category: "Finished Products",
  },
  {
    src: jutiOrangeCasual,
    alt: "Classic black leather mojari with pointed toe and visible welt stitching",
    category: "Finished Products",
  },

  // Existing craft & artisan images
  {
    src: jutiEmbroideredMaroon,
    alt: "Hand-embroidered velvet juti with intricate circular gold tilla needlework by artisan members",
    category: "Finished Products",
  },
  {
    src: jutiEmbroideredGold,
    alt: "Intricate gold zari and tilla embroidered traditional wedding juti crafted in Rajasthan clusters",
    category: "Craft Process",
  },
  {
    src: jutiClassicBrown,
    alt: "Handmade classic brown leather closed shoes with genuine leather sole and interior lining",
    category: "Finished Products",
  },
  {
    src: jutiTanPunched,
    alt: "Tan vegetable-tanned leather juti featuring perforated heart motif punch detailing",
    category: "Craft Process",
  },
  {
    src: jutiBlackStitched,
    alt: "Classic black hand-stitched leather juti with visible craft welt construction",
    category: "Craft Process",
  },
  {
    src: jutiTanPlain,
    alt: "Traditional tan leather juti showcasing natural grain and hand-crafted inner sole",
    category: "Finished Products",
  },

  // Artisans at Work
  {
    src: ofpoExhibitionArtisan,
    alt: "Artisan member representing SPECTRA at NABARD sponsored leather craft exhibition",
    category: "Artisans at Work",
  },
  {
    src: ofpoStallInspection,
    alt: "Handmade leather juti and craft products on display for institutional visitors and partners",
    category: "Workshops",
  },
  {
    src: ofpoExhibitionStall,
    alt: "National level exhibition stall showcasing SPECTRA rural artisan handcrafts and leather goods",
    category: "Workshops",
  },

  // Community
  {
    src: womenShgPledge,
    alt: "Women SHG leaders taking a solidarity and self-reliance pledge at the annual community meeting",
    category: "Community",
  },
  {
    src: womenAwardCertificate,
    alt: "Recognition and certificate distribution to women leaders by SPECTRA and Mahila Shakti Kendra",
    category: "Community",
  },
  {
    src: spectraStakeholderMeeting,
    alt: "SPECTRA organisation institutional review meeting and programme milestone presentation",
    category: "Community",
  },
];
