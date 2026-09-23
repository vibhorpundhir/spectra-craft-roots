import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Scissors, PenTool, Layers, Sparkles, Hand } from "lucide-react";

import leather from "@/assets/hero-leather.jpg";
import ofpoExhibitionArtisan from "@/assets/real/ofpo-exhibition-artisan.jpg";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";
import womenShgPledge from "@/assets/real/women-shg-pledge.jpg";
import jutiSilverZari from "@/assets/real/juti-silver-zari.jpg";
import jutiGoldenBrocade from "@/assets/real/juti-golden-brocade.jpg";
import jutiMaroonBeadwork from "@/assets/real/juti-maroon-beadwork.jpg";
import jutiTanEmbossed from "@/assets/real/juti-tan-embossed.jpg";
import jutiBeadedVelvet from "@/assets/real/juti-beaded-velvet.jpg";
import pahchanLogo from "@/assets/pahchan-logo.jpg";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { galleryItems } from "@/data/gallery";
import { impact, site } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Pahchan Leather Work — Crafted by Hands. Carried by Stories." },
      {
        name: "description",
        content:
          "Pahchan Leather Work (Est. 2023 by SPECTRA) empowers rural leather artisans in Rajasthan — preserving traditional craftsmanship through handmade shoes, juti and leather goods. From hands to heritage.",
      },
      { property: "og:title", content: "Pahchan Leather Work — Crafted by Hands. Carried by Stories." },
      {
        property: "og:description",
        content:
          "Each piece reflects the skill, tradition, and dignity of artisans empowered by Pahchan Leather Work and SPECTRA.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const craftSteps = [
  {
    icon: Hand,
    step: "01",
    title: "Selecting the Hide",
    body: "Vegetable-tanned goat and buffalo hides are inspected by hand for grain, thickness and evenness.",
    image: ofpoExhibitionArtisan,
  },
  {
    icon: Scissors,
    step: "02",
    title: "Cutting",
    body: "Patterns are laid out to follow the natural stretch of the hide — a decision no machine makes well.",
    image: jutiTanEmbossed,
  },
  {
    icon: PenTool,
    step: "03",
    title: "Embroidery",
    body: "Tilla and salma work is stitched on the vamp before assembly, one motif at a time.",
    image: jutiMaroonBeadwork,
  },
  {
    icon: Layers,
    step: "04",
    title: "Lasting & Stitching",
    body: "Uppers are shaped over wooden lasts and saddle- or welt-stitched with waxed linen thread.",
    image: jutiBeadedVelvet,
  },
  {
    icon: Sparkles,
    step: "05",
    title: "Finishing",
    body: "Edges burnished, soles trimmed, beeswax rubbed in and buffed — then rested for two days before dispatch.",
    image: jutiSilverZari,
  },
];

function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const galleryPreview = galleryItems.filter(g => g.category === "Finished Products").slice(0, 4);

  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);

  // Only apply motion styles after client mount (prevents SSR flash)
  const heroMotion = mounted && !reduce;

  return (
    <>
      {/* ═══ Hero — Full Cinematic ═══ */}
      <section
        ref={heroRef}
        className="grain relative isolate min-h-[100svh] overflow-hidden bg-ink"
      >
        <motion.div
          className="absolute inset-0 gpu"
          style={heroMotion ? { y: imageY, scale: 1.08 } : undefined}
        >
          <img
            src={leather}
            alt="Artisan finishing a handmade leather shoe in a workshop"
            fetchPriority="high"
            decoding="async"
            width={2400}
            height={1600}
            className="h-full w-full object-cover"
          />
        </motion.div>
        {/* Dark brown gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(62,44,35,0.82) 0%, rgba(62,44,35,0.55) 40%, rgba(62,44,35,0.88) 100%)",
          }}
          aria-hidden="true"
        />

        <motion.div
          className="shell relative flex min-h-[100svh] max-w-5xl flex-col items-center justify-center py-28 text-center"
          style={heroMotion ? { y: copyY } : undefined}
        >
          <motion.div
            className="inline-flex items-center gap-2.5 rounded-full border border-gold/40 bg-ink/70 px-4 py-1.5 shadow-lg backdrop-blur-md"
            initial={heroMotion ? { opacity: 0, y: 12 } : undefined}
            animate={heroMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src={pahchanLogo}
              alt="Pahchan Leather Work"
              className="h-6 w-6 rounded-full object-cover ring-1 ring-gold/70"
            />
            <span className="eyebrow text-[0.68rem] font-bold tracking-widest text-gold">
              PAHCHAN LEATHER WORK · EST. 2023
            </span>
            <span className="hidden sm:inline text-[0.62rem] text-cream/70 font-medium">
              · An Initiative by SPECTRA
            </span>
          </motion.div>
          <motion.span
            className="mt-5 block h-[2px] w-12 origin-left bg-gold"
            initial={heroMotion ? { scaleX: 0 } : undefined}
            animate={heroMotion ? { scaleX: 1 } : undefined}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.h1
            className="mt-6 max-w-4xl font-display text-[2.5rem] leading-[1.03] text-cream sm:text-[3.5rem] lg:text-[4.75rem]"
            initial={heroMotion ? { opacity: 0, y: 20 } : undefined}
            animate={heroMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Crafted by Hands. Carried by Stories.
          </motion.h1>
          <motion.p
            className="mt-7 max-w-2xl text-base leading-[1.8] text-cream/85 sm:text-lg"
            initial={heroMotion ? { opacity: 0, y: 16 } : undefined}
            animate={heroMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            Each piece reflects four generations of skill, tradition, and dignity of rural leather artisans
            empowered through Pahchan Leather Work and SPECTRA's OFPO collective. From hands to heritage.
          </motion.p>
          <motion.div
            className="mt-11 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            initial={heroMotion ? { opacity: 0, y: 14 } : undefined}
            animate={heroMotion ? { opacity: 1, y: 0 } : undefined}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/ofpo" className="btn-primary">
              Explore Craft <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/about"
              className="btn-ghost border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink"
            >
              Our Story <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </motion.div>

        <div
          aria-hidden
          className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        >
          <span className="eyebrow text-[0.55rem] text-cream/50">Scroll</span>
          <motion.span
            className="h-10 w-px bg-linear-to-b from-cream/60 to-transparent"
            animate={heroMotion ? { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] } : undefined}
            style={{ transformOrigin: "top" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>

      {/* ═══ The People Behind the Craft ═══ */}
      <section className="section-y">
        <div className="shell">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow text-leather">The People Behind the Craft</p>
                <span className="gold-rule mt-4" />
                <h2 className="mt-6 text-[2rem] sm:text-4xl md:text-[3.25rem]">
                  Behind every stitch is a pair of hands that inherited the skill.
                </h2>
              </div>
              <div className="space-y-6 text-base leading-[1.8] text-muted-foreground lg:col-span-7 lg:pt-3">
                <p>
                  In the artisan clusters of Alwar, Rajasthan, leather work has been passed down for
                  four generations. Cutters, embroiderers, lasters and finishers — each family holds
                  a piece of a craft that takes a lifetime to master.
                </p>
                <p>
                  Under the banner of <strong>Pahchan Leather Work</strong> (Est. 2023), SPECTRA's OFPO collective
                  stands with these 600 artisan households — providing tools, training, a shared finishing unit,
                  and a direct platform to reach connoisseurs of authentic handcrafted heritage.
                </p>
                <Link
                  to="/about"
                  className="eyebrow link-underline inline-flex items-center gap-2 text-leather transition-colors hover:text-primary"
                >
                  Our journey &amp; brand story <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>

          {/* Artisan portrait grid */}
          <div className="mt-16 grid gap-3 sm:grid-cols-3">
            <Reveal className="frame frame-hover aspect-4/3">
              <img
                src={ofpoExhibitionArtisan}
                alt="Artisan member at SPECTRA leather craft exhibition proudly displaying handmade juti"
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={0.08} className="frame frame-hover aspect-4/3">
              <img
                src={ofpoStallInspection}
                alt="Handmade leather juti and craft products displayed at an artisan exhibition"
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </Reveal>
            <Reveal delay={0.16} className="frame frame-hover aspect-4/3">
              <img
                src={womenShgPledge}
                alt="Women artisan leaders taking solidarity pledge at annual community meeting"
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="h-full w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ Craft Process ═══ */}
      <section className="band-cream">
        <div className="shell section-y">
          <Reveal>
            <SectionHeading
              eyebrow="The Craft Process"
              title="Five stages, no shortcuts"
              intro="A single pair of embroidered juti passes through four sets of hands over three days. Here is how every piece comes to life."
              tone="leather"
            />
          </Reveal>
          <div className="mt-16 grid gap-px bg-border md:grid-cols-3 lg:grid-cols-5">
            {craftSteps.map((step, i) => (
              <Reveal key={step.step} delay={i * 0.06} className="bg-cream p-8">
                <p className="eyebrow text-gold">{step.step}</p>
                <step.icon
                  className="mt-4 h-6 w-6 text-leather"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-4 text-xl">{step.title}</h3>
                <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{step.body}</p>
              </Reveal>
            ))}
          </div>
          {/* Craft images strip */}
          <div className="mt-10 grid grid-cols-5 gap-2">
            {craftSteps.map((step, i) => (
              <Reveal key={`img-${step.step}`} delay={i * 0.05}>
                <div className="frame frame-hover aspect-square">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    decoding="async"
                    width={600}
                    height={600}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Product Showcase (Display Only) ═══ */}
      <section className="section-y">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Our Craft Collection"
                title="Not products. Proof of what artisan hands can do."
                intro="Each piece here is the visible end of a long, patient effort by an artisan household. Open one to read who made it and why it matters."
                tone="leather"
              />
              <Link
                to="/ofpo"
                className="eyebrow link-underline inline-flex items-center gap-2 text-leather transition-colors hover:text-primary"
              >
                View all craft <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Impact ═══ */}
      <section className="band-ink section-y">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-gold">Our Impact</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 max-w-2xl text-[2rem] sm:text-4xl md:text-[3rem]">
              Change measured in livelihoods, not in units sold.
            </h2>
            <p className="mt-5 max-w-xl text-base leading-[1.8] text-cream/75">
              Every juti that leaves our workshops represents a family empowered, a tradition
              preserved, and a skill that will reach the next generation.
            </p>
          </Reveal>
          <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 lg:grid-cols-4">
            {impact.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <div className="border-t border-cream/15 pt-6">
                  <dt className="font-display text-[2.25rem] leading-none text-gold sm:text-[3rem]">
                    <AnimatedCounter value={stat.value} />
                  </dt>
                  <dd className="eyebrow mt-4 text-cream/55">{stat.label}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
          <Reveal delay={0.2}>
            <Link
              to="/impact"
              className="eyebrow link-underline mt-14 inline-flex items-center gap-2 text-gold transition-colors hover:text-cream"
            >
              See our impact <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ═══ Gallery preview ═══ */}
      <section className="section-y">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Gallery"
                title="Hands at work, heritage in every detail"
                tone="leather"
              />
              <Link
                to="/gallery"
                className="eyebrow link-underline inline-flex items-center gap-2 text-leather transition-colors hover:text-primary"
              >
                Open gallery <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
          <div className="mt-14 grid grid-cols-2 gap-3 lg:grid-cols-4">
            {galleryPreview.map((item, i) => (
              <Reveal key={item.alt} delay={i * 0.05}>
                <div className="frame frame-hover aspect-square">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={900}
                    className="h-full w-full object-cover"
                  />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Contact CTA ═══ */}
      <section className="bg-leather text-leather-foreground">
        <div className="shell flex flex-col items-start gap-10 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <div>
            <h2 className="max-w-xl text-[2rem] sm:text-4xl md:text-[3rem]">
              Want to meet the artisans behind a pair?
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-[1.8] text-leather-foreground/80 sm:text-base">
              Write to us about a story, a visit, a partnership or an enquiry. Every message reaches
              a person, and we reply within two working days.
            </p>
            <p className="eyebrow mt-6 text-leather-foreground/60">
              {site.phone} · {site.email}
            </p>
          </div>
          <Link
            to="/contact"
            className="eyebrow inline-flex shrink-0 items-center gap-2 bg-cream px-8 py-4 text-ink transition-colors duration-200 hover:-translate-y-0.5 hover:bg-gold"
          >
            Send an enquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
