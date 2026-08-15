import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, useReducedMotion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowRight, Leaf, Handshake, ShieldCheck, Sprout } from "lucide-react";

import agriculture from "@/assets/hero-agriculture.jpg";
import leather from "@/assets/hero-leather.jpg";
import farmers from "@/assets/community-farmers.jpg";
import womenExposureAsset from "@/assets/real-women-exposure.jpg.asset.json";
import stitchingAsset from "@/assets/real-stitching-unit.jpg.asset.json";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";

import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { galleryItems } from "@/data/gallery";
import { impact, site } from "@/data/site";

const womenShg = womenExposureAsset.url;
const artisans = stitchingAsset.url;


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "SPECTRA — Every Product Carries a Story of Hope and Dignity" },
      {
        name: "description",
        content:
          "Through Farmer Producer Organizations and Other Farmer Producer Organizations, SPECTRA empowers rural farmers and artisans in Rajasthan with sustainable livelihoods and preserved traditional skills.",
      },
      { property: "og:title", content: "SPECTRA — Hope, Hard Work and Dignity" },
      {
        property: "og:description",
        content:
          "Meet the farmers, women and artisans behind every spice, every litre of milk and every hand-stitched juti.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const reasons = [
  {
    icon: Sprout,
    title: "Who made this",
    body: "Every lot traces back to a named household — a farming family, a dairy member, an artisan bench. Nothing arrives anonymously.",
  },
  {
    icon: Handshake,
    title: "Why it matters",
    body: "Organised together, producers hold bargaining power they never had alone. The value of good work stays where the work happened.",
  },
  {
    icon: ShieldCheck,
    title: "How a life changes",
    body: "Assured procurement, savings groups and steady order books turn seasonal uncertainty into school fees, medicine and repairs that no longer wait.",
  },
  {
    icon: Leaf,
    title: "What endures",
    body: "Traditional knowledge, sustainable practice and inherited craft survive because they finally sustain the people who carry them.",
  },
];

const communities = [
  {
    img: farmers,
    alt: "Farmer members standing together in a field at sunrise",
    eyebrow: "FPO · Farming families",
    title: "Those who grow it",
    body: "Cultivators and dairy households working together — sharing collection centres, grading discipline and a bargaining position no single smallholder can hold alone.",
    to: "/fpo" as const,
    cta: "Meet the farmers",
  },
  {
    img: womenShg,
    alt: "Women members of a self help group during a SPECTRA exposure visit",
    eyebrow: "Women's participation",
    title: "Those who decide it",
    body: "Self help groups where saving becomes confidence, and women take their place in planning, monitoring and every decision that shapes a household.",
    to: "/impact" as const,
    cta: "See our impact",
  },
  {
    img: artisans,
    alt: "Artisan members at work in the shared leather stitching unit",
    eyebrow: "OFPO · Artisan households",
    title: "Those who make it",
    body: "Cutters, embroiderers, lasters and finishers carrying a craft learned from their parents — now with tools, training and orders that make it worth passing on.",
    to: "/ofpo" as const,
    cta: "Meet the artisans",
  },
];

function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const galleryPreview = galleryItems.slice(0, 4);

  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], ["0%", "26%"]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

  return (
    <>
      {/* Hero */}
      <section
        ref={heroRef}
        className="grain relative isolate min-h-[92svh] overflow-hidden bg-ink"
      >
        <motion.div
          className="kenburns absolute inset-0 grid grid-cols-2"
          style={reduce ? undefined : { y: imageY, scale: 1.06 }}
        >
          <img
            src={agriculture}
            alt="Farmer walking through green fields at sunrise"
            fetchPriority="high"
            decoding="async"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
          <img
            src={leather}
            alt="Artisan finishing a handmade leather shoe in a workshop"
            fetchPriority="high"
            decoding="async"
            width={1200}
            height={1600}
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div
          className="absolute inset-0 bg-linear-to-b from-ink/75 via-ink/65 to-ink/90"
          aria-hidden="true"
        />

        <motion.div
          className="shell relative flex min-h-[92svh] max-w-5xl flex-col items-center justify-center py-28 text-center"
          style={reduce ? undefined : { y: copyY, opacity: copyOpacity }}
        >
          <motion.p
            className="eyebrow text-gold"
            initial={reduce ? undefined : { opacity: 0, y: 12 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          >
            SPECTRA &nbsp;·&nbsp; FPO &amp; OFPO
          </motion.p>
          <motion.span
            className="mt-5 block h-[2px] w-10 origin-left bg-gold"
            initial={reduce ? undefined : { scaleX: 0 }}
            animate={reduce ? undefined : { scaleX: 1 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          />
          <motion.h1
            className="mt-7 max-w-4xl font-display text-[2.5rem] leading-[1.03] text-cream sm:text-[3.5rem] lg:text-[4.75rem]"
            initial={reduce ? undefined : { opacity: 0, y: 20 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.16, ease: [0.22, 1, 0.36, 1] }}
          >
            Every product carries a story of hope, hard work and dignity.
          </motion.h1>
          <motion.p
            className="mt-8 max-w-2xl text-base leading-[1.8] text-cream/85 sm:text-lg"
            initial={reduce ? undefined : { opacity: 0, y: 16 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
          >
            Through our Farmer Producer Organizations (FPO) and Other Farmer Producer Organizations
            (OFPO), SPECTRA empowers rural farmers and skilled artisans by creating sustainable
            livelihood opportunities while preserving traditional knowledge and craftsmanship.
          </motion.p>
          <motion.div
            className="mt-11 flex w-full flex-col gap-3 sm:w-auto sm:flex-row"
            initial={reduce ? undefined : { opacity: 0, y: 14 }}
            animate={reduce ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link to="/impact" className="btn-primary">
              Our journey <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/fpo"
              className="btn-ghost border-cream/40 text-cream hover:border-cream hover:bg-cream hover:text-ink"
            >
              Meet the makers <ArrowRight className="h-4 w-4" />
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
            animate={reduce ? undefined : { scaleY: [0.4, 1, 0.4], opacity: [0.4, 1, 0.4] }}
            style={{ transformOrigin: "top" }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </section>


      {/* About */}
      <section className="section-y">
        <div className="shell">
          <Reveal>
            <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
              <div className="lg:col-span-5">
                <p className="eyebrow text-primary">About SPECTRA</p>
                <span className="gold-rule mt-4" />
                <h2 className="mt-6 text-[2rem] sm:text-4xl md:text-[3.25rem]">
                  Behind every product is a person you would be glad to meet.
                </h2>
              </div>
              <div className="space-y-6 text-base leading-[1.8] text-muted-foreground lg:col-span-7 lg:pt-3">
                <p>
                  SPECTRA — the Society for Public Education Cultural Training and Rural Action — is
                  a voluntary, non-profit, non-government organisation that has worked since 1996 in
                  the rural and interior pockets of Rajasthan, alongside families struggling for a
                  life of justice and dignity.
                </p>
                <p>
                  Our FPO work stands with cultivators and dairy households. Our OFPO work stands
                  with leather artisans whose families have shaped juti and shoes for generations.
                  The spices, milk and handmade shoes you see here are simply what that partnership
                  produces — the real output is a household that can plan its own future.
                </p>
                <Link
                  to="/about"
                  className="eyebrow link-underline inline-flex items-center gap-2 text-primary transition-colors hover:text-leather"
                >
                  Our journey <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="band-cream">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-px bg-border sm:grid-cols-2">
            <Reveal className="band-cream p-8 sm:p-12 lg:p-16">
              <p className="eyebrow text-primary">Our Mission</p>
              <span className="gold-rule mt-4" />
              <h2 className="mt-6 text-2xl leading-snug sm:text-3xl">
                To make honest production financially viable for the people who practise it.
              </h2>
              <p className="mt-5 text-sm leading-[1.8] text-muted-foreground sm:text-base">
                We aggregate, grade, brand and market member produce so that small holdings and
                small workshops can reach buyers who value what they do — without surrendering
                margin to intermediaries.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="band-cream p-8 sm:p-12 lg:p-16">
              <p className="eyebrow text-leather">Our Vision</p>
              <span className="gold-rule mt-4" />
              <h2 className="mt-6 text-2xl leading-snug sm:text-3xl">
                A rural economy where traditional skill is a livelihood, not a memory.
              </h2>
              <p className="mt-5 text-sm leading-[1.8] text-muted-foreground sm:text-base">
                We want the next generation in our villages to inherit a craft worth continuing —
                with training, tools, fair pricing and a market that already knows their name.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured products */}
      <section className="section-y">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading
                eyebrow="Outcomes, not merchandise"
                title="What the work looks like when it reaches your hands"
                intro="Each of these began as somebody's early morning. Open one to read who made it and why it matters to their household."
              />
              <Link
                to="/products"
                className="eyebrow link-underline inline-flex items-center gap-2 text-primary transition-colors hover:text-leather"
              >
                View all stories <ArrowRight className="h-4 w-4" />
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

      {/* Impact */}
      <section className="band-ink section-y">
        <div className="shell">
          <Reveal>
            <p className="eyebrow text-gold">Our Impact</p>
            <span className="gold-rule mt-4" />
            <h2 className="mt-6 max-w-2xl text-[2rem] sm:text-4xl md:text-[3rem]">
              Change measured in households, not in units sold.
            </h2>
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

      {/* Why it matters */}
      <section className="section-y">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Why it matters"
              title="Four questions we answer for every product"
              intro="Who made this, why does it matter, how does it improve a life, and what stays behind when the season ends."
            />
          </Reveal>
          <div className="mt-16 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((reason, i) => (
              <Reveal key={reason.title} delay={i * 0.06} className="bg-background p-8">
                <span className="numeral block text-[2.5rem]">0{i + 1}</span>
                <reason.icon
                  className="mt-6 h-6 w-6 text-primary"
                  strokeWidth={1.5}
                  aria-hidden="true"
                />
                <h3 className="mt-5 text-xl">{reason.title}</h3>
                <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{reason.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Communities */}
      <section className="band-cream section-y">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Our Communities"
              title="Meet the people behind the work"
              intro="Farmers, women's groups and artisan households — the three hands that hold everything SPECTRA does."
              tone="leather"
            />
          </Reveal>
          <div className="mt-16 grid gap-10 md:grid-cols-3">
            {communities.map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="group">
                  <div className="frame frame-hover aspect-4/3">
                    <img
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      decoding="async"
                      width={1200}
                      height={900}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p className="eyebrow mt-6 text-muted-foreground">{c.eyebrow}</p>
                  <h3 className="mt-2.5 text-2xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{c.body}</p>
                  <Link
                    to={c.to}
                    className="eyebrow link-underline mt-6 inline-flex items-center gap-2 text-primary transition-colors hover:text-leather"
                  >
                    {c.cta} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery preview */}
      <section className="section-y">
        <div className="shell">
          <Reveal>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <SectionHeading eyebrow="Gallery" title="Days on the farm and at the bench" />
              <Link
                to="/gallery"
                className="eyebrow link-underline inline-flex items-center gap-2 text-primary transition-colors hover:text-leather"
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

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="shell flex flex-col items-start gap-10 py-16 md:flex-row md:items-center md:justify-between md:py-24">
          <div>
            <h2 className="max-w-xl text-[2rem] sm:text-4xl md:text-[3rem]">
              Want to know the family behind a product?
            </h2>
            <p className="mt-5 max-w-lg text-sm leading-[1.8] text-primary-foreground/80 sm:text-base">
              Write to us about a story, a visit, a partnership or an enquiry. Every message reaches
              a person, and we reply within two working days.
            </p>
            <p className="eyebrow mt-6 text-primary-foreground/60">
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
