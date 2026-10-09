import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import {
  ArrowRight,
  Scissors,
  PenTool,
  Layers,
  Sparkles,
  Hand,
  Award,
  Users,
  MapPin,
  Star,
  ChevronRight,
  MessageCircle,
  Building2,
  GraduationCap,
  Wrench,
  Phone,
} from "lucide-react";

import leather from "@/assets/hero-leather.jpg";
import grameenArtisanDisplay from "@/assets/real/grameen-artisan-display.jpg";
import grameenStallArtisan from "@/assets/real/grameen-stall-artisan.jpg";
import pahchanIsmailpurOfficeCommunity from "@/assets/real/pahchan-ismailpur-office-community.jpg";
import cfcDesignStudioMeeting from "@/assets/real/cfc-design-studio-meeting.jpg";
import grameenFullStall from "@/assets/real/grameen-full-stall.jpg";
import jutiSilverZari from "@/assets/real/juti-silver-zari.jpg";
import jutiGoldenBrocade from "@/assets/real/juti-golden-brocade.jpg";
import jutiMaroonBeadwork from "@/assets/real/juti-maroon-beadwork.jpg";
import jutiTanEmbossed from "@/assets/real/juti-tan-embossed.jpg";
import jutiBeadedVelvet from "@/assets/real/juti-beaded-velvet.jpg";
import jutiGoldZari from "@/assets/real/juti-gold-zari.jpg";
import jutiEmbroideredMaroon from "@/assets/real/juti-embroidered-maroon.jpg";
import jutiClassicBrown from "@/assets/real/juti-classic-brown.jpg";
import jutiCreamPearl from "@/assets/real/juti-cream-pearl.jpg";
import pahchanLogo from "@/assets/pahchan-logo.jpg";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { impact, site, whatsappLink } from "@/data/site";
import {
  heroSlideImages,
  collageImages,
  artisanPortraits,
  processImages,
  detailImages,
  cinematicImages,
} from "@/data/galleryImages";

export const Route = createFileRoute("/")({
  component: Home,
});

/* ─────────────────────────────────── Craft Journey Steps ─────────────────────────────────── */
const craftSteps = [
  {
    icon: Hand,
    step: "01",
    title: "Selecting the Hide",
    body: "Vegetable-tanned goat and buffalo hides are inspected by hand for grain, thickness and evenness.",
    image: grameenFullStall,
  },
  {
    icon: Scissors,
    step: "02",
    title: "Cutting & Pattern",
    body: "Patterns are laid out to follow the natural stretch of the hide — a decision no machine makes well.",
    image: jutiTanEmbossed,
  },
  {
    icon: PenTool,
    step: "03",
    title: "Embroidery & Zari",
    body: "Tilla and salma work is stitched on the vamp before assembly, one motif at a time.",
    image: jutiMaroonBeadwork,
  },
  {
    icon: Layers,
    step: "04",
    title: "Lasting & Stitching",
    body: "Uppers shaped over wooden lasts and saddle-stitched with waxed linen thread.",
    image: jutiBeadedVelvet,
  },
  {
    icon: Sparkles,
    step: "05",
    title: "Finishing & Curing",
    body: "Edges burnished, soles trimmed, beeswax rubbed in and buffed — then rested two days before dispatch.",
    image: jutiSilverZari,
  },
];

/* ─────────────────────────────────── Artisan Voices ─────────────────────────────────── */
const artisanVoices = [
  {
    name: "Zarina Bano",
    title: "4th Generation Master Embroiderer",
    image: pahchanIsmailpurOfficeCommunity,
    quote:
      "My grandmother taught me that every stitch carries the weight of our ancestors. When I embroider a juti, I am not just making a shoe — I am keeping a promise.",
    metric: "12 hours per pair",
    cluster: "Ismailpur Cluster",
  },
  {
    name: "Ramu Ram",
    title: "Master Cutter & Pattern Maker",
    image: grameenArtisanDisplay,
    quote:
      "A good cutter wastes nothing. The hide tells you where to place the pattern — you just have to listen with your hands.",
    metric: "30 years of experience",
    cluster: "Kishangarh Bas Cluster",
  },
  {
    name: "Kishan Lal",
    title: "Master Laster & Finisher",
    image: grameenStallArtisan,
    quote:
      "The last my father carved is the same one I use today. The foot has not changed, and neither has our craft.",
    metric: "40 pairs finished per month",
    cluster: "Alwar District Cluster",
  },
];

/* ─────────────────────────────────── CFC Machines ─────────────────────────────────── */
const cfcMachines = [
  {
    name: "Head Clicker Sole Cutting Machine",
    description: "Precision die-cutting that saves artisan hands from repetitive strain",
    icon: Scissors,
  },
  {
    name: "Post-Bed Sewing Machine",
    description: "Industrial-grade stitching for soles and heavy leather assembly",
    icon: Wrench,
  },
  {
    name: "Leather Skiving Machine",
    description: "Uniform edge-thinning for seamless joins without bulk",
    icon: Layers,
  },
];

/* ─────────────────────────────────── Anatomy Hotspots ─────────────────────────────────── */
const anatomyParts = [
  {
    id: "vamp",
    label: "The Vamp (Upper)",
    description:
      "Vegetable-tanned goat leather hand-stitched with authentic silver tilla & salma zari. The embroidery alone takes a full day.",
    position: { top: "15%", left: "50%" },
  },
  {
    id: "lining",
    label: "The Inner Lining",
    description:
      "Breathable, moisture-wicking organic inner leather that moulds to the foot's unique shape within a week of wear.",
    position: { top: "45%", left: "25%" },
  },
  {
    id: "sole",
    label: "The Sole & Welt",
    description:
      "Double-layer buffalo leather welt-stitched with waxed linen cord. Zero harmful adhesives. Fully resoleable.",
    position: { top: "78%", left: "50%" },
  },
  {
    id: "heel",
    label: "The Heel & Last",
    description:
      "Ergonomically shaped over generational wooden lasts passed down 4 generations — each foot's contours are honoured.",
    position: { top: "55%", left: "75%" },
  },
];

/* ─────────────────────────────────── Hero Interactive Masterpieces ─────────────────────────────────── */
const heroMasterpieces = [
  {
    id: "silver-zari",
    title: "Signature Silver Zari Juti",
    category: "Royal Bridal & Ceremonial",
    subtitle:
      "Real silver tilla & salma metallic thread hand-coiled on vegetable-tanned goat leather. Double-layer buffalo welt.",
    artisan: "Zarina Bano · 4th Generation Master Embroiderer",
    cluster: "Ismailpur Cluster, Alwar",
    stats: "3 Days Crafting · 14h Needlework",
    purity: "100% Babool Veg-Tanned · Waxed Linen Welt",
    image: jutiSilverZari,
    secondaryImage: jutiGoldenBrocade,
  },
  {
    id: "golden-brocade",
    title: "Golden Brocade Heritage Juti",
    category: "Ancestral Festive Craft",
    subtitle:
      "Shaped over neem-wood lasts passed down 4 generations. 100% organic babool bark tanning, zero chemical adhesives.",
    artisan: "Ramu Ram · Master Pattern Maker & Cutter",
    cluster: "Kishangarh Bas Cluster",
    stats: "Generational Wooden Last · Double Buffalo Sole",
    purity: "Chemical-Free · Pure Calf & Goat Hide",
    image: jutiGoldenBrocade,
    secondaryImage: jutiGoldZari,
  },
  {
    id: "maroon-velvet",
    title: "Embroidered Maroon Velvet Mojari",
    category: "Classic Atelier Mojari",
    subtitle:
      "Hand-placed dabka, salma and sequin embellishments on supple velvet with hand-buffed organic beeswax edges.",
    artisan: "Kishan Lal · Master Laster & Finisher",
    cluster: "Alwar Studio Hub",
    stats: "Waxed Saddle Stitch · 48h Natural Setting",
    purity: "Double Welt Construction · Fully Resoleable",
    image: jutiMaroonBeadwork,
    secondaryImage: jutiBeadedVelvet,
  },
];

/* ─────────────────────────────────── Craft Filter Tags ─────────────────────────────────── */
const craftTags = [
  "Bridal Zari",
  "Daily Mojari",
  "Saddle Leather",
  "Artisan Belts",
  "Gift Collection",
];

/* ─────────────────────────────────── Animated Ornamental Seal ─────────────────────────────────── */
function AnimatedSeal() {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className="relative mx-auto flex h-24 w-24 items-center justify-center sm:h-28 sm:w-28"
      initial={reduce ? undefined : { opacity: 0, scale: 0.8, rotate: -10 }}
      animate={reduce ? undefined : { opacity: 1, scale: 1, rotate: 0 }}
      transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
    >
      {/* Outer ring - pure CSS rotation on GPU compositor */}
      <div className="absolute inset-0 rounded-full border border-gold/40 spin-slow" />
      {/* Inner ring - pure CSS rotation on GPU compositor */}
      <div className="absolute inset-1.5 rounded-full border border-gold/25 spin-reverse-slow" />
      {/* Logo center */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={pahchanLogo}
          alt="Pahchan Leather Work"
          width={120}
          height={120}
          className="h-12 w-12 rounded-full object-cover ring-2 ring-gold/50 sm:h-14 sm:w-14"
        />
        <span className="mt-1 text-[0.45rem] font-bold tracking-[0.25em] text-gold uppercase">
          Est. 2023
        </span>
      </div>
    </motion.div>
  );
}

/* ─────────────────────────────────── Hotspot Component ─────────────────────────────────── */
function AnatomyHotspot({
  part,
  isActive,
  onClick,
}: {
  part: (typeof anatomyParts)[0];
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="group absolute z-10 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
      style={{ top: part.position.top, left: part.position.left }}
      aria-label={`Learn about ${part.label}`}
    >
      <span className="relative flex h-8 w-8 items-center justify-center">
        <span
          className={`absolute inset-0 rounded-full transition-all duration-300 ${isActive ? "bg-gold scale-125 shadow-lg shadow-gold/50" : "bg-gold/80 scale-100"}`}
        />
        <span className="absolute inset-0 rounded-full border-2 border-gold animate-ping opacity-60" />
        <span className="relative text-[0.65rem] font-black text-ink">
          {part.id === "vamp" ? "1" : part.id === "lining" ? "2" : part.id === "sole" ? "3" : "4"}
        </span>
      </span>
    </button>
  );
}

/* ─────────────────────────────────── Reusable Stat Card ─────────────────────────────────── */
function ImpactCard({
  value,
  label,
  icon: Icon,
  delay = 0,
}: {
  value: string;
  label: string;
  icon: typeof Award;
  delay?: number;
}) {
  return (
    <Reveal delay={delay}>
      <div className="surface-glass-dark rounded-xl p-6 sm:p-8 text-center group hover:border-gold/50 transition-all duration-300">
        <Icon
          className="mx-auto h-6 w-6 text-gold mb-4 transition-transform duration-300 group-hover:scale-110"
          strokeWidth={1.5}
        />
        <dt className="font-display text-[2.5rem] leading-none text-gold sm:text-[3.25rem]">
          <AnimatedCounter value={value} />
        </dt>
        <dd className="eyebrow mt-3 text-cream/70 text-[0.62rem] leading-relaxed">{label}</dd>
      </div>
    </Reveal>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════════════════ */
/*  HOME PAGE                                                                                */
/* ═══════════════════════════════════════════════════════════════════════════════════════════ */
function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [activeMasterpiece, setActiveMasterpiece] = useState(0);
  const [activeHotspot, setActiveHotspot] = useState<string | null>("vamp");
  const [activeArtisan, setActiveArtisan] = useState(0);
  const [productCategory, setProductCategory] = useState<string>("all");
  const [heroSlide, setHeroSlide] = useState(0);

  const { scrollYProgress } = useScroll();

  useEffect(() => {
    setMounted(true);
  }, []);

  /* Hero slideshow auto-advance every 5 seconds */
  useEffect(() => {
    const timer = setInterval(() => {
      setHeroSlide((prev) => (prev + 1) % heroSlideImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentPiece = heroMasterpieces[activeMasterpiece];

  const filteredProducts =
    productCategory === "all"
      ? products.filter((p) => p.featured).slice(0, 6)
      : products
          .filter((p) => p.category.toLowerCase() === productCategory.toLowerCase())
          .slice(0, 6);

  const heroMotion = mounted && !reduce;

  return (
    <>
      {/* Hardware-Accelerated Smooth Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-gold via-ember to-gold z-[100] origin-left pointer-events-none"
        style={{ scaleX: scrollYProgress }}
        aria-hidden="true"
      />

      {/* ═══════════════════════ SECTION 1: Grand Editorial Hero ═══════════════════════ */}
      <section ref={heroRef} className="grain relative isolate min-h-[90vh] overflow-hidden bg-ink">
        {/* Dynamic Hero Slideshow with Smooth Ken Burns */}
        {heroSlideImages.map((slide, idx) => (
          <motion.div
            key={slide.src}
            className={`absolute inset-0 gpu ${idx === heroSlide ? "hero-slide-active" : ""}`}
            initial={false}
            animate={{
              opacity: idx === heroSlide ? 1 : 0,
            }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              fetchPriority={idx === 0 ? "high" : "low"}
              decoding="async"
              width={2400}
              height={1600}
              className="h-full w-full object-cover"
              loading={idx === 0 ? "eager" : "lazy"}
            />
          </motion.div>
        ))}

        {/* Cinematic gradient overlay with warm leather tones */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(24,16,10,0.95) 0%, rgba(24,16,10,0.80) 45%, rgba(24,16,10,0.92) 100%)",
          }}
          aria-hidden="true"
        />

        {/* Ambient warm radial glows */}
        <div className="absolute top-1/4 -left-20 w-96 h-96 rounded-full bg-gold/15 blur-3xl pointer-events-none" />
        <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-leather/25 blur-3xl pointer-events-none" />

        {/* Subtle decorative gold framing lines */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
          <div className="absolute top-0 right-[20%] w-px h-full bg-gradient-to-b from-transparent via-gold/20 to-transparent" />
          <div className="absolute top-0 left-[15%] w-px h-full bg-gradient-to-b from-transparent via-gold/15 to-transparent" />
        </div>

        {/* Hero Content Shell (Rock-solid, zero scroll jitter) */}
        <div className="shell relative flex min-h-[85vh] flex-col justify-center py-16 sm:py-20 lg:py-24">
          <div className="w-full">
            <div className="grid gap-12 lg:grid-cols-12 lg:gap-14 items-center">
              {/* Left Column: Brand Story & CTAs */}
              <div className="lg:col-span-6 text-center lg:text-left">
                {/* Floating Institutional Credential Badge */}
                <motion.div
                  className="inline-flex items-center gap-2.5 rounded-full border border-gold/35 bg-ink/75 px-4 py-2 shadow-2xl backdrop-blur-md mb-6"
                  initial={heroMotion ? { opacity: 0, y: 14 } : undefined}
                  animate={heroMotion ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <span className="flex h-2 w-2 rounded-full bg-gold animate-pulse" />
                  <span className="text-[0.62rem] font-bold tracking-widest text-gold uppercase">
                    Promoted by SPECTRA Organisation &amp; NABARD Bank
                  </span>
                </motion.div>

                {/* Master Headline */}
                <motion.h1
                  className="font-display text-[2.9rem] leading-[1.02] text-cream sm:text-[3.9rem] lg:text-[4.75rem] xl:text-[5.25rem]"
                  initial={heroMotion ? { opacity: 0, y: 22 } : undefined}
                  animate={heroMotion ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                >
                  Crafted by <span className="italic text-gold font-normal">Hands.</span>
                  <br />
                  Carried by <span className="italic text-gold font-normal">Stories.</span>
                </motion.h1>

                {/* Golden horizontal rule */}
                <motion.span
                  className="mt-6 block h-[2px] w-20 bg-gradient-to-r from-gold via-ember to-transparent mx-auto lg:mx-0"
                  initial={heroMotion ? { scaleX: 0 } : undefined}
                  animate={heroMotion ? { scaleX: 1 } : undefined}
                  style={{ transformOrigin: "left" }}
                  transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                />

                {/* Subtext */}
                <motion.p
                  className="mt-6 max-w-xl text-base leading-[1.85] text-cream/80 sm:text-lg mx-auto lg:mx-0"
                  initial={heroMotion ? { opacity: 0, y: 16 } : undefined}
                  animate={heroMotion ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                  Each piece embodies four generations of rural mastery in Alwar, Rajasthan.
                  Empowered through democratic artisan ownership, 100% natural vegetable-tanned
                  leather, and zero synthetic adhesives.
                </motion.p>

                {/* Dual Action CTAs */}
                <motion.div
                  className="mt-9 flex flex-col gap-3.5 sm:flex-row sm:justify-center lg:justify-start"
                  initial={heroMotion ? { opacity: 0, y: 14 } : undefined}
                  animate={heroMotion ? { opacity: 1, y: 0 } : undefined}
                  transition={{ duration: 0.6, delay: 0.32, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link to="/ofpo" className="btn-gold rounded-sm shadow-xl">
                    Explore Craft Collection <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    to="/about"
                    className="btn-ghost rounded-sm border-cream/35 text-cream hover:border-gold hover:bg-gold/10 hover:text-gold"
                  >
                    Our Living Story <ArrowRight className="h-4 w-4" />
                  </Link>
                </motion.div>

                {/* Trust Matrix Badges */}
                <motion.div
                  className="mt-9 grid grid-cols-2 gap-2.5 sm:flex sm:flex-wrap sm:gap-3 justify-center lg:justify-start"
                  initial={heroMotion ? { opacity: 0 } : undefined}
                  animate={heroMotion ? { opacity: 1 } : undefined}
                  transition={{ duration: 0.5, delay: 0.45 }}
                >
                  {[
                    "100% Artisan-Owned Equity",
                    "199 SC/ST Shareholders",
                    "FDDI Noida Certified",
                    "Natural Babool Tanned",
                  ].map((badge) => (
                    <span
                      key={badge}
                      className="inline-flex items-center gap-1.5 text-[0.6rem] font-semibold text-cream/75 bg-cream/5 border border-cream/15 px-3 py-1 rounded-sm"
                    >
                      <Sparkles className="h-2.5 w-2.5 text-gold shrink-0" />
                      {badge}
                    </span>
                  ))}
                </motion.div>

                {/* Quick-Discovery Category Tags */}
                <div className="mt-8 flex flex-wrap gap-2 justify-center lg:justify-start">
                  {craftTags.map((tag) => (
                    <Link
                      key={tag}
                      to="/ofpo"
                      className="rounded-full border border-cream/15 bg-cream/5 px-3 py-1 text-[0.6rem] font-medium tracking-wider text-cream/70 uppercase transition-all hover:border-gold/50 hover:bg-gold/15 hover:text-gold"
                    >
                      {tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Right Column: Interactive Atelier Exhibition Stage */}
              <motion.div
                className="lg:col-span-6"
                initial={heroMotion ? { opacity: 0, scale: 0.95 } : undefined}
                animate={heroMotion ? { opacity: 1, scale: 1 } : undefined}
                transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="relative mx-auto max-w-lg lg:max-w-none">
                  {/* Museum-Grade Showcase Card */}
                  <div className="corner-brackets relative rounded-2xl overflow-hidden border border-gold/30 bg-ink/80 shadow-[0_24px_60px_-15px_rgba(0,0,0,0.8)] backdrop-blur-md">
                    {/* Active Masterpiece Image */}
                    <div className="relative aspect-[4/3] sm:aspect-[16/11] overflow-hidden">
                      <motion.img
                        key={currentPiece.id}
                        src={currentPiece.image}
                        alt={currentPiece.title}
                        initial={{ opacity: 0.6, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        className="h-full w-full object-cover"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/20 to-transparent opacity-90" />

                      {/* Rotating Brand Seal (top right) */}
                      <div className="absolute top-4 right-4 z-20">
                        <div className="surface-glass-dark rounded-full p-2 flex items-center justify-center border border-gold/40 shadow-xl">
                          <img
                            src={pahchanLogo}
                            alt="Pahchan Leather Work"
                            className="h-9 w-9 rounded-full object-cover ring-1 ring-gold"
                          />
                        </div>
                      </div>

                      {/* Category & Cluster Badge (top left) */}
                      <div className="absolute top-4 left-4 z-20">
                        <span className="eyebrow rounded-sm bg-ink/85 border border-gold/40 px-3 py-1.5 text-[0.55rem] font-bold text-gold backdrop-blur-md">
                          {currentPiece.category}
                        </span>
                      </div>
                    </div>

                    {/* Masterpiece Metadata & Story */}
                    <div className="p-6 sm:p-7 relative z-10 bg-gradient-to-b from-ink/90 to-ink border-t border-gold/20">
                      <div className="flex items-baseline justify-between gap-2 flex-wrap">
                        <h2 className="font-display text-2xl sm:text-3xl text-cream font-medium">
                          {currentPiece.title}
                        </h2>
                        <span className="trust-seal rounded-full text-[0.55rem]">
                          {currentPiece.stats}
                        </span>
                      </div>

                      <p className="mt-2.5 text-xs sm:text-sm text-cream/75 leading-relaxed">
                        {currentPiece.subtitle}
                      </p>

                      <div className="mt-4 pt-3.5 border-t border-gold/15 flex items-center justify-between text-xs flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <Hand className="h-3.5 w-3.5 text-gold" strokeWidth={1.5} />
                          <span className="text-[0.7rem] text-gold font-medium">
                            {currentPiece.artisan}
                          </span>
                        </div>
                        <span className="text-[0.65rem] text-cream/50 tracking-wider">
                          {currentPiece.purity}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Interactive Masterpiece Selector Tabs */}
                  <div className="mt-4 grid grid-cols-3 gap-2">
                    {heroMasterpieces.map((piece, idx) => (
                      <button
                        key={piece.id}
                        onClick={() => setActiveMasterpiece(idx)}
                        className={`relative rounded-lg p-2.5 text-left border transition-all duration-300 cursor-pointer ${
                          activeMasterpiece === idx
                            ? "bg-gold/15 border-gold shadow-lg shadow-gold/10"
                            : "bg-ink/50 border-cream/15 hover:border-gold/40 hover:bg-ink/80"
                        }`}
                      >
                        <p
                          className={`eyebrow text-[0.5rem] font-bold ${activeMasterpiece === idx ? "text-gold" : "text-cream/50"}`}
                        >
                          0{idx + 1} Piece
                        </p>
                        <p
                          className={`font-display text-xs sm:text-sm mt-0.5 truncate ${activeMasterpiece === idx ? "text-cream font-semibold" : "text-cream/70"}`}
                        >
                          {piece.title.split(" ")[1] || piece.title}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Hero Slideshow Dots + Caption */}
        <div className="absolute bottom-20 left-0 right-0 z-20 flex flex-col items-center gap-3">
          <p className="text-[0.65rem] text-cream/50 tracking-widest uppercase font-semibold">
            {heroSlideImages[heroSlide]?.caption}
          </p>
          <div className="flex gap-2">
            {heroSlideImages.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setHeroSlide(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 cursor-pointer ${
                  idx === heroSlide ? "w-8 bg-gold" : "w-1.5 bg-cream/30 hover:bg-cream/50"
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Sub-Hero Trust Bar */}
        <div className="border-t border-gold/20 bg-espresso/90 backdrop-blur-md relative z-20">
          <div className="shell flex items-center justify-center gap-6 py-3.5 flex-wrap text-center">
            <span className="text-[0.62rem] text-cream/65 tracking-wider uppercase font-semibold">
              Companies Act 2013 Registered
            </span>
            <span className="h-3 w-px bg-gold/30 hidden sm:block" />
            <span className="text-[0.62rem] text-cream/65 tracking-wider uppercase font-semibold">
              CIN: {site.cin}
            </span>
            <span className="h-3 w-px bg-gold/30 hidden sm:block" />
            <span className="text-[0.62rem] text-gold tracking-wider uppercase font-bold flex items-center gap-1.5">
              <Building2 className="h-3 w-3" /> Promoted by SPECTRA Organisation &amp; NABARD Bank
            </span>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ VISUAL: Collage Mosaic Strip ═══════════════════════ */}
      <section className="bg-ink py-10 sm:py-14 overflow-hidden">
        <div className="shell mb-8">
          <Reveal>
            <p className="eyebrow text-gold font-semibold text-center">Visual Stories</p>
            <p className="mt-2 text-center text-cream/60 text-sm">Swipe to explore our journey</p>
          </Reveal>
        </div>
        <div className="collage-strip px-5">
          {collageImages.map((img, i) => (
            <div key={img.src} className="collage-item img-hover-overlay">
              <img src={img.src} alt={img.alt} loading="lazy" decoding="async" />
              <div className="img-hover-text">
                <p className="font-display text-lg text-cream font-semibold">{img.title}</p>
                <p className="text-xs text-cream/70 mt-1">{img.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ VISUAL: "Meet the Hands" — Artisan Portraits ═══════════════════════ */}
      <section className="band-espresso section-y-lg relative grain">
        <div className="shell relative z-[3]">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="eyebrow text-gold font-semibold">The People Behind the Craft</p>
              <span className="gold-rule mt-3 mx-auto" />
              <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem] text-cream">
                Meet the <span className="italic text-gold font-normal">Hands</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-cream/70 sm:text-lg">
                Every pair of juti carries the fingerprints of master craftspeople who have
                dedicated their lives to this art.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {artisanPortraits.map((portrait, i) => (
              <Reveal key={portrait.src} delay={i * 0.1}>
                <div className="group relative overflow-hidden rounded-2xl border border-gold/30 img-hover-overlay aspect-[3/4]">
                  <img
                    src={portrait.src}
                    alt={portrait.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="img-hover-text">
                    <h3 className="font-display text-2xl text-cream font-semibold">
                      {portrait.title}
                    </h3>
                    {portrait.caption && (
                      <p className="mt-1 text-sm text-gold/90">{portrait.caption}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="mt-10 text-center font-display italic text-xl sm:text-2xl text-gold/80">
              "Built by hands that never stop."
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ VISUAL: "From Raw to Real" — Horizontal Process Scroll ═══════════════════════ */}
      <section className="band-parchment section-y-lg">
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="eyebrow text-leather font-semibold">The Journey of Creation</p>
              <span className="gold-rule mt-3 mx-auto" />
              <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem]">
                From Raw to <span className="italic text-leather font-normal">Real</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                Follow the journey of leather — from raw material to a piece of wearable heritage.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 process-scroll px-4">
            {processImages.map((step, i) => (
              <div key={step.src} className="process-card">
                <div className="corner-brackets relative overflow-hidden rounded-2xl border border-border bg-card shadow-lg img-hover-zoom aspect-[4/3]">
                  <img
                    src={step.src}
                    alt={step.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gold text-[0.6rem] font-black text-ink">
                        0{i + 1}
                      </span>
                    </div>
                    <h3 className="font-display text-xl text-cream font-semibold">{step.title}</h3>
                    {step.caption && <p className="mt-1 text-xs text-cream/70">{step.caption}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <Reveal delay={0.2}>
            <p className="mt-8 text-center text-sm text-muted-foreground">
              ← Swipe to follow the craft journey →
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ CINEMATIC BREAK 1 ═══════════════════════ */}
      <div className="cinematic-break">
        <img
          src={cinematicImages[0].src}
          alt={cinematicImages[0].alt}
          loading="lazy"
          decoding="async"
        />
        <div className="cinematic-overlay" />
        <div className="cinematic-text">
          <Reveal>
            <span className="gold-rule mx-auto mb-6" />
            <p className="font-display italic text-3xl sm:text-5xl md:text-6xl text-cream leading-tight">
              "Behind every stitch
              <br />
              is a <span className="text-gold">story.</span>"
            </p>
            <p className="mt-4 text-sm text-cream/60 tracking-widest uppercase">
              Made with patience. Crafted with pride.
            </p>
          </Reveal>
        </div>
      </div>

      {/* ═══════════════════════ VISUAL: "Details Matter" — Asymmetric Grid ═══════════════════════ */}
      <section className="band-ink section-y-lg relative grain">
        <div className="shell relative z-[3]">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="eyebrow text-gold font-semibold">Craftsmanship in Every Detail</p>
              <span className="gold-rule mt-3 mx-auto" />
              <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem] text-cream">
                Details <span className="italic text-gold font-normal">Matter</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-cream/70 sm:text-lg">
                The beauty is in the close-up. Stitching, textures, edges — each telling a story of
                patience.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 md:grid-cols-3">
            {detailImages.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.08}>
                <div className="group relative overflow-hidden rounded-2xl border border-gold/25 bg-card/40 shadow-lg img-hover-overlay aspect-[4/3]">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="img-hover-text">
                    <p className="font-display text-lg text-cream font-semibold">{img.title}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <p className="mt-10 text-center font-display italic text-xl sm:text-2xl text-gold/80">
              "Rooted in tradition. Built for the future."
            </p>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 2: Interactive Anatomy of a Juti ═══════════════════════ */}
      <section className="band-parchment section-y-lg overflow-hidden relative">
        <div className="shell relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="eyebrow text-leather font-semibold">Interactive Craft Architecture</p>
              <span className="gold-rule mt-3 mx-auto" />
              <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem]">
                Anatomy of an{" "}
                <span className="italic text-leather font-normal">Authentic Juti</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                Click each hotspot on the master shoe to examine how four generations of handcrafted
                techniques create a breathable, lifelong fit that synthetic commercial footwear
                cannot match.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="mt-14 grid gap-8 lg:grid-cols-12 lg:gap-14 items-center">
              {/* Interactive Visual with Hotspots */}
              <div className="lg:col-span-6 relative mx-auto max-w-md lg:max-w-none w-full">
                <div className="corner-brackets relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl border border-gold/30 bg-sand">
                  <img
                    src={jutiGoldZari}
                    alt="Anatomy of a handcrafted juti with interactive hotspots"
                    className="h-full w-full object-cover"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent pointer-events-none" />

                  {/* Hotspots */}
                  {anatomyParts.map((part) => (
                    <AnatomyHotspot
                      key={part.id}
                      part={part}
                      isActive={activeHotspot === part.id}
                      onClick={() => setActiveHotspot(part.id)}
                    />
                  ))}

                  <div className="absolute bottom-4 inset-x-4 bg-ink/80 backdrop-blur-md rounded-lg p-3 border border-gold/25 text-center">
                    <p className="eyebrow text-[0.55rem] text-gold font-bold">
                      Click numbered pins (1–4) to inspect materials &amp; techniques
                    </p>
                  </div>
                </div>
              </div>

              {/* Detail Accordion Cards */}
              <div className="lg:col-span-6 space-y-4">
                {anatomyParts.map((part, i) => (
                  <button
                    key={part.id}
                    onClick={() => setActiveHotspot(part.id)}
                    className={`w-full text-left p-5 sm:p-6 rounded-xl border transition-all duration-300 cursor-pointer ${
                      activeHotspot === part.id
                        ? "border-gold bg-card shadow-xl shadow-gold/10"
                        : "border-border bg-card/60 hover:border-gold/40 hover:bg-card"
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <span
                        className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all ${
                          activeHotspot === part.id
                            ? "bg-gold text-ink shadow-md"
                            : "bg-sand text-leather"
                        }`}
                      >
                        0{i + 1}
                      </span>
                      <div className="flex-1">
                        <div className="flex items-center justify-between">
                          <h3 className="font-display text-xl sm:text-2xl text-foreground font-semibold">
                            {part.label}
                          </h3>
                          {activeHotspot === part.id && (
                            <span className="text-[0.6rem] text-leather font-bold tracking-wider uppercase bg-gold/15 px-2.5 py-0.5 rounded-full">
                              Inspecting
                            </span>
                          )}
                        </div>
                        <p
                          className={`mt-2 text-sm leading-relaxed text-muted-foreground transition-all duration-300 ${
                            activeHotspot === part.id
                              ? "max-h-40 opacity-100"
                              : "max-h-0 opacity-0 overflow-hidden"
                          }`}
                        >
                          {part.description}
                        </p>
                      </div>
                    </div>
                  </button>
                ))}

                {/* Comparative Quality Banner */}
                <div className="mt-6 p-4 rounded-xl border border-gold/30 bg-gold/8 text-xs leading-relaxed text-leather">
                  <p className="font-bold flex items-center gap-1.5 text-foreground text-sm">
                    <Sparkles className="h-4 w-4 text-gold" /> Why Authentic Leather Matters
                  </p>
                  <p className="mt-1 text-muted-foreground">
                    Unlike mass-market shoes made with PVC that trap sweat and split within months,
                    vegetable-tanned leather moulds to the exact anatomy of your foot within seven
                    days, cushioning every step naturally.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 3: Curated Collection with Live Category Filter ═══════════════════════ */}
      <section className="section-y-lg bg-background">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6 pb-4 border-b border-border/80">
              <div className="max-w-2xl">
                <p className="eyebrow text-leather font-semibold">
                  Our Creations · Handcrafted With Care
                </p>
                <span className="gold-rule mt-3" />
                <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem]">
                  Handcrafted Proof of{" "}
                  <span className="italic text-leather font-normal">Generational Mastery</span>
                </h2>
                <p className="mt-4 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                  Each piece is handcrafted with care. Direct from rural master artisans in Alwar —
                  pure vegetable-tanned leather, zero toxic adhesives, and 100% democratic equity.
                </p>
              </div>

              {/* Category Filter Pills */}
              <div className="flex flex-wrap gap-2">
                {[
                  { id: "all", label: "All Crafts" },
                  { id: "juti", label: "Handmade Juti" },
                  { id: "shoes", label: "Leather Shoes" },
                  { id: "leather goods", label: "Leather Goods" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setProductCategory(tab.id)}
                    className={`eyebrow rounded-full px-4 py-2 text-[0.6rem] font-bold cursor-pointer transition-all ${
                      productCategory === tab.id
                        ? "bg-leather text-cream shadow-md"
                        : "border border-border bg-card text-muted-foreground hover:border-gold hover:text-foreground"
                    }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>
          </Reveal>

          {/* Product Grid */}
          <div className="mt-12 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.05}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/ofpo"
              className="btn-gold rounded-sm px-8 py-3.5 inline-flex items-center gap-2"
            >
              Explore Complete Craft Catalog <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 4: Innovation Bridge — CFC & FDDI ═══════════════════════ */}
      <section className="band-espresso section-y-lg relative grain">
        <div className="shell relative z-[3]">
          <Reveal>
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <p className="eyebrow text-gold font-semibold">Innovation Bridge</p>
                <span className="gold-rule mt-3" />
                <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem] text-cream">
                  Where Ancestral Hand Skill{" "}
                  <span className="italic text-gold font-normal">Meets Modern Precision</span>
                </h2>
                <p className="mt-5 text-base leading-[1.8] text-cream/75 sm:text-lg">
                  Supported by NABARD Bank, our Common Facility Centre (CFC) at Kishangarh Bas
                  bridges four generations of hand-stitching with specialized machinery —
                  eliminating physical fatigue while preserving pure artisanal heritage.
                </p>

                {/* CFC Machinery List */}
                <div className="mt-8 space-y-4">
                  {cfcMachines.map((machine) => (
                    <div
                      key={machine.name}
                      className="flex items-start gap-4 p-4 rounded-xl border border-gold/20 bg-ink/60 backdrop-blur-sm"
                    >
                      <machine.icon className="h-5 w-5 text-gold shrink-0 mt-1" strokeWidth={1.5} />
                      <div>
                        <p className="text-sm font-bold text-cream">{machine.name}</p>
                        <p className="mt-1 text-xs text-cream/60 leading-relaxed">
                          {machine.description}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FDDI Certification & CFC Photo Card */}
              <div className="space-y-6">
                <div className="surface-glass-dark rounded-2xl p-7 border border-gold/30">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-6 w-6 text-gold" strokeWidth={1.5} />
                    <p className="eyebrow text-gold text-[0.62rem]">
                      National Institutional Partnership
                    </p>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl text-cream font-bold">
                    35 Master Artisans Certified by FDDI Noida
                  </h3>
                  <p className="mt-2 text-sm text-cream/75 leading-relaxed">
                    Underwent rigorous advanced technical training at the premier Footwear Design
                    &amp; Development Institute, Noida in pattern grading, ergonomic lasts, and
                    international finishing.
                  </p>
                  <div className="mt-5 flex flex-wrap gap-2">
                    {[
                      "Export Standards",
                      "Ergonomic Lasting",
                      "Die Precision",
                      "Zero Waste Cutting",
                    ].map((skill) => (
                      <span key={skill} className="trust-seal rounded-full text-[0.55rem]">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="corner-brackets relative aspect-video rounded-2xl overflow-hidden shadow-2xl border border-gold/30">
                  <img
                    src={cfcDesignStudioMeeting}
                    alt="Pahchan Common Facility Centre exhibition and workshop"
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-cream">
                    <span className="font-semibold">CFC &amp; Design Studio, Kishangarh Bas</span>
                    <span className="text-gold font-bold">Est. 7 Dec 2023</span>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 5: Living Atelier — Master Artisan Voices ═══════════════════════ */}
      <section className="band-ink section-y-lg relative grain">
        <div className="shell relative z-[3]">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="eyebrow text-gold font-semibold">The Living Atelier</p>
              <span className="gold-rule mt-3 mx-auto" />
              <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem] text-cream">
                Artisan Voices &amp;{" "}
                <span className="italic text-gold font-normal">Heritage Lineage</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-cream/70 sm:text-lg">
                Meet the master craftspeople whose hands breathe soul into every piece of leather.
              </p>
            </div>
          </Reveal>

          {/* Artisan Tabs */}
          <div className="mt-10 flex justify-center gap-2.5 flex-wrap">
            {artisanVoices.map((artisan, i) => (
              <button
                key={artisan.name}
                onClick={() => setActiveArtisan(i)}
                className={`eyebrow rounded-full px-5 py-2.5 transition-all duration-300 cursor-pointer ${
                  activeArtisan === i
                    ? "bg-gold text-ink font-bold shadow-lg shadow-gold/25"
                    : "border border-cream/20 text-cream/65 hover:border-gold/50 hover:text-gold"
                }`}
              >
                {artisan.name}
              </button>
            ))}
          </div>

          {/* Active Artisan Profile */}
          <div className="mt-12 max-w-5xl mx-auto">
            {artisanVoices.map(
              (artisan, i) =>
                activeArtisan === i && (
                  <motion.div
                    key={artisan.name}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="grid gap-8 md:grid-cols-12 items-center surface-glass-dark rounded-2xl p-6 sm:p-10 border border-gold/30"
                  >
                    <div className="md:col-span-5 aspect-[4/3] rounded-xl overflow-hidden shadow-xl border border-gold/25">
                      <img
                        src={artisan.image}
                        alt={artisan.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                    </div>
                    <div className="md:col-span-7">
                      <span className="eyebrow text-gold text-[0.62rem] font-bold">
                        {artisan.cluster}
                      </span>
                      <h3 className="mt-2 font-display text-3xl sm:text-4xl text-cream font-bold">
                        {artisan.name}
                      </h3>
                      <p className="text-xs text-gold/80 font-medium">{artisan.title}</p>

                      <blockquote className="mt-5 pl-5 border-l-2 border-gold">
                        <p className="font-display italic text-lg sm:text-xl text-cream/85 leading-relaxed">
                          "{artisan.quote}"
                        </p>
                      </blockquote>

                      <div className="mt-6 flex items-center gap-3">
                        <span className="trust-seal rounded-full">
                          <Star className="h-3 w-3 text-gold" /> {artisan.metric}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ),
            )}
          </div>

          {/* Geographic Cluster Cards */}
          <div className="mt-14 grid gap-4 sm:grid-cols-3 max-w-4xl mx-auto">
            {[
              {
                name: "Ismailpur Cluster",
                district: "Kishangarh Bas, Alwar",
                count: "80+ Master Artisans",
              },
              {
                name: "Khairthal-Tijara",
                district: "Alwar District, Rajasthan",
                count: "60+ Craftsmen",
              },
              {
                name: "Alwar City Hub",
                district: "Patel Nagar, Alwar",
                count: "60+ Finishers & Lasters",
              },
            ].map((cluster) => (
              <div
                key={cluster.name}
                className="surface-glass-dark rounded-xl p-5 text-center border border-gold/20"
              >
                <MapPin className="mx-auto h-5 w-5 text-gold" strokeWidth={1.5} />
                <p className="mt-2 font-display text-lg text-cream font-semibold">{cluster.name}</p>
                <p className="mt-1 text-[0.65rem] text-cream/50">{cluster.district}</p>
                <p className="mt-2 eyebrow text-gold text-[0.55rem] font-bold">{cluster.count}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 6: Verified Impact Dashboard ═══════════════════════ */}
      <section className="band-espresso section-y-lg relative grain">
        <div className="shell relative z-[3]">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="eyebrow text-gold font-semibold">Verified Institutional Impact</p>
              <span className="gold-rule mt-3 mx-auto" />
              <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem] text-cream">
                Dignified Livelihoods,{" "}
                <span className="italic text-gold font-normal">Measured in Equity</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-cream/70 sm:text-lg">
                Pahchan Leather Work is governed democratically by 199 SC/ST artisan shareholders.
                Zero corporate margins, 100% retained surplus for artisan families.
              </p>
            </div>
          </Reveal>

          {/* 4 Core Stat Cards */}
          <div className="mt-14 grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
            <ImpactCard
              value="200"
              label="Artisans Mobilised across 6 Producer Groups"
              icon={Users}
              delay={0}
            />
            <ImpactCard
              value="199"
              label="SC & ST Shareholders (100% Equity Ownership)"
              icon={Award}
              delay={0.06}
            />
            <ImpactCard
              value="92"
              label="Women Artisans (46% Democratic Leadership)"
              icon={Star}
              delay={0.12}
            />
            <ImpactCard
              value="35"
              label="Artisans Certified by FDDI Noida"
              icon={GraduationCap}
              delay={0.18}
            />
          </div>

          {/* Secondary Metric Badges */}
          <div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-3 max-w-4xl mx-auto">
            <div className="surface-glass-dark rounded-xl p-5 text-center border border-gold/20">
              <p className="font-display text-3xl text-gold font-bold">92</p>
              <p className="mt-1 text-[0.62rem] text-cream/60 uppercase tracking-wider font-semibold">
                Government Artisan Cards Issued
              </p>
            </div>
            <div className="surface-glass-dark rounded-xl p-5 text-center border border-gold/20">
              <p className="font-display text-3xl text-gold font-bold">50</p>
              <p className="mt-1 text-[0.62rem] text-cream/60 uppercase tracking-wider font-semibold">
                PM Vishwakarma Scheme Enrolled
              </p>
            </div>
            <div className="surface-glass-dark rounded-xl p-5 text-center col-span-2 lg:col-span-1 border border-gold/20">
              <p className="font-display text-3xl text-gold font-bold">₹11.62L</p>
              <p className="mt-1 text-[0.62rem] text-cream/60 uppercase tracking-wider font-semibold">
                Quarterly Sales (100% Reinvested)
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/impact"
              className="eyebrow link-underline inline-flex items-center gap-2 text-gold hover:text-cream text-xs transition-colors"
            >
              Read Complete Institutional Impact Report <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ CINEMATIC BREAK 2 ═══════════════════════ */}
      <div className="cinematic-break">
        <img
          src={cinematicImages[1].src}
          alt={cinematicImages[1].alt}
          loading="lazy"
          decoding="async"
        />
        <div className="cinematic-overlay" />
        <div className="cinematic-text">
          <Reveal>
            <span className="gold-rule mx-auto mb-6" />
            <p className="font-display italic text-3xl sm:text-5xl md:text-6xl text-cream leading-tight">
              "This is not just a product…
              <br />
              this is <span className="text-gold">someone's life’s work.</span>"
            </p>
            <p className="mt-4 text-sm text-cream/60 tracking-widest uppercase">
              Made with patience · Crafted with pride · Rooted in tradition
            </p>
          </Reveal>
        </div>
      </div>

      {/* ═══════════════════════ SECTION 7: The 5-Stage Craft Journey ═══════════════════════ */}
      <section className="band-parchment section-y-lg">
        <div className="shell">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto">
              <p className="eyebrow text-leather font-semibold">The Ritual of Creation</p>
              <span className="gold-rule mt-3 mx-auto" />
              <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem]">
                Five Stages.{" "}
                <span className="italic text-leather font-normal">Zero Shortcuts.</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-muted-foreground sm:text-lg">
                A single pair of embroidered juti passes through four pairs of master hands over
                three days.
              </p>
            </div>
          </Reveal>

          {/* 5 Steps Grid */}
          <div className="mt-14 grid gap-6 md:grid-cols-5">
            {craftSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.05}>
                <div className="group corner-brackets relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:border-gold/50 hover:shadow-2xl">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={step.image}
                      alt={step.title}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gold text-[0.6rem] font-black text-ink">
                        {step.step}
                      </span>
                      <step.icon className="h-4 w-4 text-gold" strokeWidth={1.5} />
                    </div>
                    <h3 className="font-display text-lg text-cream font-semibold">{step.title}</h3>
                    <p className="mt-1.5 text-[0.7rem] leading-relaxed text-cream/70">
                      {step.body}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ SECTION 8: Royal Artisan Concierge & Alwar Head Office ═══════════════════════ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-espresso via-leather/95 to-ink text-cream py-20 sm:py-24">
        <div className="absolute inset-0 grain" />

        <div className="shell relative z-10">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
            <Reveal>
              <div>
                <p className="eyebrow text-gold font-semibold">Artisan Concierge &amp; Studio</p>
                <span className="gold-rule mt-3" />
                <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem] text-cream">
                  Commission a Custom Pair or{" "}
                  <span className="italic text-gold font-normal">Partner</span> with Us
                </h2>
                <p className="mt-5 max-w-lg text-base leading-[1.8] text-cream/80 sm:text-lg">
                  Every enquiry reaches a dedicated member of our team in Alwar. Whether you seek
                  bespoke bridal footwear, an institutional batch order, or a visit to our Common
                  Facility Centre — we look forward to welcoming you.
                </p>

                <div className="mt-8 space-y-2 text-sm text-cream/80">
                  <p className="flex items-center gap-2">
                    <MapPin className="h-4 w-4 text-gold shrink-0" />
                    <span>E-11, Patel Nagar, Mannaka Road, Alwar, Rajasthan 301001</span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gold shrink-0" />
                    <a href={`tel:${site.phone}`} className="hover:text-gold transition-colors">
                      {site.phone}
                    </a>
                  </p>
                </div>

                <div className="mt-9 flex flex-col gap-3.5 sm:flex-row">
                  <Link to="/contact" className="btn-gold rounded-sm px-7 py-3 text-center">
                    Send Direct Enquiry <ArrowRight className="h-4 w-4" />
                  </Link>
                  <a
                    href={whatsappLink(
                      "Hello! I'm interested in exploring handcrafted pieces from Pahchan Leather Work.",
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-ghost rounded-sm border-cream/35 text-cream hover:bg-gold hover:text-ink hover:border-gold py-3 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="h-4 w-4" /> WhatsApp Concierge
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Embedded Google Map */}
            <Reveal delay={0.1}>
              <div className="corner-brackets relative rounded-2xl overflow-hidden shadow-2xl border border-gold/30 aspect-[4/3]">
                <iframe
                  src={site.mapEmbed}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Pahchan Leather Work — Alwar Office Location"
                  className="h-full w-full"
                />
              </div>
              <div className="mt-3 flex items-center gap-2 text-xs text-cream/70">
                <MapPin className="h-4 w-4 text-gold" />
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gold transition-colors underline"
                >
                  Open in Google Maps — Patel Nagar, Mannaka Road, Alwar
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
