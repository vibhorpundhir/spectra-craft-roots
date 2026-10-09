import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  CheckCircle2,
  Compass,
  Feather,
  Hammer,
  Layers,
  PenTool,
  Scissors,
  Sparkles,
  Star,
  Users,
} from "lucide-react";
import grameenArtisanDisplay from "@/assets/real/grameen-artisan-display.jpg";
import jutiEmbroideredGold from "@/assets/real/juti-embroidered-gold.jpg";
import jutiEmbroideredMaroon from "@/assets/real/juti-embroidered-maroon.jpg";
import jutiSilverZari from "@/assets/real/juti-silver-zari.jpg";
import jutiGoldenBrocade from "@/assets/real/juti-golden-brocade.jpg";
import jutiTanEmbossed from "@/assets/real/juti-tan-embossed.jpg";
import jutiMaroonBeadwork from "@/assets/real/juti-maroon-beadwork.jpg";
import jutiBeadedVelvet from "@/assets/real/juti-beaded-velvet.jpg";
import jutiClassicBrown from "@/assets/real/juti-classic-brown.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { site, whatsappLink } from "@/data/site";
import { craftPageImages } from "@/data/galleryImages";

export const Route = createFileRoute("/ofpo")({
  component: Ofpo,
});

/* ─────────────────────────────────── Craft Journey Stages ─────────────────────────────────── */
const craftStages = [
  {
    step: "01",
    title: "Hide Selection & Vegetable Tanning",
    subtitle: "Organic Babool Bark & Sun Drying",
    body: "Vegetable-tanned goat and buffalo hides are chosen by master lasters for tensile strength, grain character, and natural softness. Cured using traditional tree barks without toxic chromium salts.",
    duration: "4–6 Weeks Curing",
    artisan: "Master Tanner & Cutter",
    image: grameenArtisanDisplay,
  },
  {
    step: "02",
    title: "Pattern Drafting & Hand Cutting",
    subtitle: "Aligned With Natural Grain Stretch",
    body: "Sole and upper patterns are laid out to follow the natural stretch of the hide. Every curve is guided by hand-sharpened knives called rampis — a sensitive judgment no factory punch press can emulate.",
    duration: "3 Hours per Pair",
    artisan: "Pattern Craftsman",
    image: jutiTanEmbossed,
  },
  {
    step: "03",
    title: "Salma & Tilla Zari Embroidery",
    subtitle: "Dabka, Sequins & Pure Metallic Thread",
    body: "The vamp (upper) is stretched on a wooden karchob frame. Women artisans needlework authentic motifs — kalgi, chinar, and ambi — stitch by stitch with silver, brass, and gold wire before shoe assembly.",
    duration: "10–14 Hours Embroidery",
    artisan: "Women Master Artisans",
    image: jutiMaroonBeadwork,
  },
  {
    step: "04",
    title: "Ergonomic Lasting & Welt Stitching",
    subtitle: "Generational Wooden Lasts & Waxed Cord",
    body: "Uppers are shaped over generational neem-wood lasts. The upper, lining, and double-layer sole are saddle-stitched together using thick waxed cotton-linen thread, locking the shoe into lifelong durability.",
    duration: "5 Hours Hand Lasting",
    artisan: "Master Laster",
    image: jutiBeadedVelvet,
  },
  {
    step: "05",
    title: "Edge Burnishing & Natural Wax Polish",
    subtitle: "Smooth Edges & 48-Hour Final Cure",
    body: "Soles are bevelled and edge-burnished with smooth agate stones. Organic beeswax and mustard oil are massaged into the grain. The shoes rest on wooden forms for two days to set memory.",
    duration: "48 Hours Setting",
    artisan: "Finishing Specialist",
    image: jutiSilverZari,
  },
];

/* ─────────────────────────────────── Craft Pillars ─────────────────────────────────── */
const pillars = [
  {
    icon: Feather,
    title: "Chemical-Free Tanning",
    description:
      "Tanned using indigenous babool (acacia) bark and myrobalan nuts. Hypoallergenic, breathable, and gains a deep caramel patina with time.",
  },
  {
    icon: Compass,
    title: "Generational Wooden Lasts",
    description:
      "Carved from dense neem and sheesham wood to conform to the natural contours of the human foot, reducing foot fatigue naturally.",
  },
  {
    icon: Sparkles,
    title: "Authentic Zari & Needlework",
    description:
      "True tilla, dabka, and sitara work stitched by 92 certified women artisans who preserve family motifs from royal Rajput and Mughal courts.",
  },
];

/* ─────────────────────────────────── Artisan Tool Archive ─────────────────────────────────── */
const toolArchive = [
  {
    name: "Rampi",
    description:
      "Curved moon-blade hand knife used for precision skiving and edge bevelling without tearing the leather fibres.",
    role: "Cutting & Skiving",
  },
  {
    name: "Kharapa",
    description:
      "Generational hand-carved wooden last that gives each juti its distinctive curved toe and ergonomic heel cradle.",
    role: "Lasting",
  },
  {
    name: "Sua & Katarni",
    description:
      "Hand-forged awl and fine needle shears used to pierce heavy buffalo welt cord without machine punch holes.",
    role: "Saddle Stitching",
  },
  {
    name: "Waxed Cotton Cord",
    description:
      "Multi-ply twisted cotton thread steeped in beeswax and pine rosin to create a water-resistant permanent welt stitch.",
    role: "Assembly",
  },
];

function Ofpo() {
  const craftProducts = products.slice(0, 6);

  return (
    <>
      {/* ═══════════════════════ Hero Section ═══════════════════════ */}
      <PageHero
        tone="dark"
        eyebrow="Artisanal Craftsmanship · Alwar Cluster"
        title="Leather shaped by hands that inherited the skill."
        intro="Pahchan Leather Work supports 200 artisan families across rural Rajasthan — cutters, tilla embroiderers, lasters and finishers making authentic juti, shoes and leather goods the way their families always have. Promoted by SPECTRA Organisation and NABARD Bank."
        image={cfcDesignStudioMeeting}
        alt="Artisans and designers at Common Facility Centre evaluating handcrafted footwear"
        badgeText="Promoted by SPECTRA Organisation & NABARD Bank"
      >
        <div className="flex flex-wrap gap-4 pt-2">
          <a href="#craft-process" className="btn-gold rounded-sm">
            Explore the 5 Stages <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            to="/gallery"
            className="btn-ghost rounded-sm border-gold/30 text-cream hover:bg-gold hover:text-ink"
          >
            View Photo Archive
          </Link>
        </div>
      </PageHero>

      {/* ═══════════════════════ The Three Tenets ═══════════════════════ */}
      <section className="shell -mt-10 relative z-10 mb-16">
        <div className="grid gap-6 md:grid-cols-3">
          {pillars.map((pillar, i) => {
            const Icon = pillar.icon;
            return (
              <Reveal key={pillar.title} delay={i * 0.08}>
                <div className="surface-glass rounded-xl p-8 border border-gold/30 shadow-xl hover:border-gold/60 transition-all duration-300">
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold mb-5">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground">
                    {pillar.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {pillar.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ═══════════════════════ Editorial Story Section ═══════════════════════ */}
      <section className="shell section-y">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="eyebrow text-leather flex items-center gap-2">
              <span className="h-px w-6 bg-gold" />
              Preserving Living Heritage
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl leading-tight">
              A craft that survives only when dignity meets fair economics.
            </h2>
            <div className="space-y-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              <p>
                In the rural hamlets of Ismailpur and Kishangarh Bas, leather craft is not an
                industry — it is an identity passed down for four generations. For decades, however,
                artisans were forced to depend on exploitative middlemen and unstable contract
                wages.
              </p>
              <p>
                With the guidance and promotion of{" "}
                <strong className="text-foreground">SPECTRA Organisation</strong> and sanction from{" "}
                <strong className="text-foreground">NABARD Bank</strong>, Pahchan was incorporated
                as a formal Producer Company. Today, 199 SC &amp; ST artisans own equity in the
                enterprise, work with modernized machinery at our Common Facility Centre (CFC), and
                take pride in shoes that carry their ancestral signatures.
              </p>
            </div>

            <div className="pt-2 grid grid-cols-2 gap-4 border-t border-border/80">
              <div className="rounded-lg bg-sand/40 p-4 border border-gold/20">
                <p className="font-display text-3xl font-bold text-leather">4</p>
                <p className="eyebrow mt-1 text-[0.62rem] text-muted-foreground">
                  Generations of Craft
                </p>
              </div>
              <div className="rounded-lg bg-sand/40 p-4 border border-gold/20">
                <p className="font-display text-3xl font-bold text-leather">100%</p>
                <p className="eyebrow mt-1 text-[0.62rem] text-muted-foreground">
                  Artisan-Owned Equity
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="absolute -inset-3 rounded-2xl border border-gold/25 pointer-events-none" />
              <div className="frame frame-hover aspect-4/3 rounded-xl overflow-hidden shadow-2xl ring-1 ring-gold/30">
                <img
                  src={grameenFullStall}
                  alt="Full showcase of handcrafted leather footwear and artisan heritage"
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ Five Stages of Craftsmanship ═══════════════════════ */}
      <section id="craft-process" className="bg-sand/30 border-y border-gold/20 py-20 md:py-28">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow text-leather flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-gold" />
              The Ritual of Creation
              <span className="h-px w-6 bg-gold" />
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-5xl">Five stages. Zero shortcuts.</h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              A single pair of embroidered Pahchan juti passes through four pairs of dedicated
              artisan hands over three days.
            </p>
          </div>

          <div className="space-y-12">
            {craftStages.map((stage, idx) => (
              <Reveal key={stage.step} delay={idx * 0.05}>
                <div className="surface-card rounded-2xl overflow-hidden border border-gold/25 p-6 sm:p-8 lg:p-10 transition-all duration-300 hover:shadow-2xl">
                  <div className="grid gap-8 lg:grid-cols-12 items-center">
                    {/* Left: Step number and text */}
                    <div className="lg:col-span-7 space-y-4">
                      <div className="flex items-center gap-4">
                        <span className="font-display text-4xl sm:text-5xl font-bold text-gold">
                          {stage.step}
                        </span>
                        <div>
                          <p className="eyebrow text-[0.62rem] text-leather">{stage.subtitle}</p>
                          <h3 className="font-display text-2xl sm:text-3xl font-bold text-foreground">
                            {stage.title}
                          </h3>
                        </div>
                      </div>

                      <p className="text-sm sm:text-base leading-relaxed text-muted-foreground">
                        {stage.body}
                      </p>

                      <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground border-t border-border/60">
                        <span className="inline-flex items-center gap-1.5 text-leather">
                          <CheckCircle2 className="h-3.5 w-3.5 text-gold" /> Time: {stage.duration}
                        </span>
                        <span className="inline-flex items-center gap-1.5 text-leather">
                          <Users className="h-3.5 w-3.5 text-gold" /> Artisan: {stage.artisan}
                        </span>
                      </div>
                    </div>

                    {/* Right: Real documentary photograph */}
                    <div className="lg:col-span-5">
                      <div className="frame frame-hover aspect-4/3 rounded-xl overflow-hidden shadow-lg border border-gold/20">
                        <img
                          src={stage.image}
                          alt={stage.title}
                          loading="lazy"
                          decoding="async"
                          width={800}
                          height={600}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ Traditional Tool Archive ═══════════════════════ */}
      <section className="shell section-y">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="eyebrow text-leather flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-gold" />
            The Artisan Bench
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl">
            Tools Shaped by Generations of Use
          </h2>
          <p className="mt-3 text-sm text-muted-foreground">
            Our artisans wield tools crafted by village blacksmiths that have been honed over
            decades.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {toolArchive.map((tool, i) => (
            <Reveal key={tool.name} delay={i * 0.06}>
              <div className="surface-card rounded-xl p-6 border border-gold/20 h-full flex flex-col justify-between hover:border-gold/50 transition-colors">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="eyebrow text-[0.6rem] text-gold">{tool.role}</span>
                    <Hammer className="h-4 w-4 text-gold/60" />
                  </div>
                  <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                    {tool.name}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">
                    {tool.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-border/60">
                  <span className="text-[0.62rem] text-leather font-semibold uppercase tracking-wider">
                    Traditional Tool
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ Curated Collection Showcase ═══════════════════════ */}
      <section className="bg-sand/40 border-t border-gold/20 py-20 md:py-24">
        <div className="shell">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
            <div>
              <span className="eyebrow text-leather">Artisan Collection</span>
              <h2 className="mt-3 font-display text-3xl sm:text-4xl">
                Handcrafted Juti &amp; Mojari Selection
              </h2>
              <p className="mt-2 text-sm text-muted-foreground max-w-xl">
                Every pair is unique — signed by the hours and hands of our Alwar artisan
                collective.
              </p>
            </div>
            <Link
              to="/products"
              className="btn-gold rounded-sm inline-flex items-center gap-2 self-start"
            >
              View All 12 Designs <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {craftProducts.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.05}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ Artisan Testimonials ═══════════════════════ */}
      <section className="shell section-y">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="eyebrow text-leather">Living Voices</span>
          <h2 className="mt-3 font-display text-3xl sm:text-4xl">From the Benches of Ismailpur</h2>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              quote:
                "The tilla motif on the vamp was handed down to me by my mother. For twenty years, nobody asked for genuine zari work. Now, our collective ships hundreds of pairs across India.",
              author: "Zarina Bano",
              role: "Master Tilla Embroiderer",
              cluster: "Ismailpur Cluster",
            },
            {
              quote:
                "My father made shoes for middleman contractors who paid whenever they felt like it. Here at Pahchan, we own our company and receive our payments with total dignity.",
              author: "Ramu Ram",
              role: "Master Cutter & Laster",
              cluster: "Kishangarh Bas Cluster",
            },
            {
              quote:
                "With the sole cutting and skiving machines at our CFC, we save hours of physical strain while keeping 100% of the hand-stitched character intact.",
              author: "Kishan Lal",
              role: "Finishing & Assembly Specialist",
              cluster: "Alwar Cluster",
            },
          ].map((item, idx) => (
            <Reveal key={item.author} delay={idx * 0.08}>
              <div className="surface-card rounded-2xl p-8 border border-gold/30 flex flex-col justify-between h-full hover:border-gold/60 transition-all duration-300">
                <div>
                  <div className="flex gap-1 text-gold mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <blockquote className="font-display text-lg sm:text-xl leading-relaxed text-foreground italic">
                    "{item.quote}"
                  </blockquote>
                </div>
                <div className="mt-8 pt-4 border-t border-border/80">
                  <p className="font-bold text-sm text-foreground">{item.author}</p>
                  <p className="text-xs text-leather font-medium">{item.role}</p>
                  <p className="text-[0.65rem] text-muted-foreground mt-0.5">{item.cluster}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ Craftsmanship in Motion — Documentary Showcase ═══════════════════════ */}
      <section className="band-ink section-y-lg relative grain border-t border-gold/20">
        <div className="shell relative z-[3]">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="eyebrow text-gold font-semibold">Living Heritage · In the Workshop</p>
              <span className="gold-rule mt-3 mx-auto" />
              <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem] text-cream">
                Craftsmanship in <span className="italic text-gold font-normal">Motion</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-cream/70 sm:text-lg">
                Authentic photographic documentation of our master artisans shaping hides, executing
                zari embroidery, and lasting footwear at the Kishangarh Bas Common Facility Centre.
              </p>
            </div>
          </Reveal>

          {/* Equal Sized Uniform Photo Grid (No White Gaps) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {craftPageImages.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.08}>
                <div className="group img-hover-overlay rounded-2xl overflow-hidden border border-gold/25 bg-card/40 shadow-lg aspect-[4/3] relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="img-hover-text">
                    <span className="eyebrow text-gold text-[0.62rem] font-bold">
                      {img.category}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-cream">{img.title}</h3>
                    {img.caption && (
                      <p className="mt-1 text-xs text-cream/75 line-clamp-2">{img.caption}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ Institutional Promoters Bottom Band ═══════════════════════ */}
      <section className="bg-espresso text-cream border-t border-gold/30 py-16 sm:py-20">
        <div className="shell flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
            <span className="text-xs font-bold tracking-wider text-gold uppercase">
              Promoted by SPECTRA Organisation and NABARD Bank
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream">
            Experience the Timeless Weight of Real Handcrafted Leather
          </h2>
          <p className="text-cream/70 text-sm sm:text-base leading-relaxed">
            Interested in bespoke heritage orders, visiting our Common Facility Centre in Kishangarh
            Bas, or partnering with our producer collective?
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              href={whatsappLink(
                "Hello! I would like to inquire about Pahchan handcrafted leather juti and craft orders.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold rounded-sm inline-flex items-center gap-2"
            >
              Direct WhatsApp Concierge <ArrowRight className="h-4 w-4" />
            </a>
            <Link
              to="/contact"
              className="btn-ghost rounded-sm border-gold/30 text-cream hover:bg-gold hover:text-ink"
            >
              Contact Leadership Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
