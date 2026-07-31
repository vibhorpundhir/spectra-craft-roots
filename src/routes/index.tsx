import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Handshake, ShieldCheck, Sprout } from "lucide-react";
import agriculture from "@/assets/hero-agriculture.jpg";
import leather from "@/assets/hero-leather.jpg";
import farmers from "@/assets/community-farmers.jpg";
import artisans from "@/assets/community-artisans.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";
import { galleryItems } from "@/data/gallery";
import { impact, site } from "@/data/site";

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


function Home() {
  const featured = products.filter((p) => p.featured).slice(0, 6);
  const galleryPreview = galleryItems.slice(0, 4);

  return (
    <>
      {/* Hero */}
      <section className="relative isolate min-h-[88vh] overflow-hidden bg-ink">
        <div className="absolute inset-0 grid grid-cols-2">
          <img
            src={agriculture}
            alt="Farmer walking through green fields at sunrise"
            width={1200}
            height={1600}
            className="h-full w-full object-cover opacity-70"
          />
          <img
            src={leather}
            alt="Artisan finishing a handmade leather shoe in a workshop"
            width={1200}
            height={1600}
            className="h-full w-full object-cover opacity-70"
          />
        </div>
        <div className="absolute inset-0 bg-ink/55" aria-hidden="true" />

        <div className="relative mx-auto flex min-h-[88vh] max-w-4xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
          <p className="eyebrow text-gold">SPECTRA &nbsp;·&nbsp; FPO &amp; OFPO</p>
          <h1 className="mt-6 max-w-3xl font-display text-4xl leading-[1.08] text-cream sm:text-5xl lg:text-6xl">
            Every product carries a story of hope, hard work and dignity.
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-relaxed text-cream/85 sm:text-lg">
            Through our Farmer Producer Organizations (FPO) and Other Farmer Producer
            Organizations (OFPO), SPECTRA empowers rural farmers and skilled artisans by creating
            sustainable livelihood opportunities while preserving traditional knowledge and
            craftsmanship.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/impact"
              className="eyebrow inline-flex items-center justify-center gap-2 bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Our journey <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/fpo"
              className="eyebrow inline-flex items-center justify-center gap-2 border border-cream/40 px-8 py-4 text-cream transition-colors hover:bg-cream hover:text-ink"
            >
              Meet the makers <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

      </section>

      {/* About */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
            <div className="lg:col-span-5">
              <p className="eyebrow text-primary">About SPECTRA</p>
              <h2 className="mt-4 text-3xl leading-tight sm:text-4xl md:text-5xl">
                Behind every product is a person you would be glad to meet.
              </h2>
            </div>
            <div className="space-y-5 text-base leading-relaxed text-muted-foreground lg:col-span-7">
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
                className="eyebrow inline-flex items-center gap-2 text-primary transition-colors hover:text-leather"
              >
                Our journey <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

          </div>
        </Reveal>
      </section>

      {/* Mission & Vision */}
      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-2">
          <Reveal className="bg-cream p-8 sm:p-12 lg:p-16">
            <p className="eyebrow text-primary">Our Mission</p>
            <h2 className="mt-4 text-2xl leading-snug sm:text-3xl">
              To make honest production financially viable for the people who practise it.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We aggregate, grade, brand and market member produce so that small holdings and
              small workshops can reach buyers who value what they do — without surrendering
              margin to intermediaries.
            </p>
          </Reveal>
          <Reveal delay={0.1} className="bg-cream p-8 sm:p-12 lg:p-16">
            <p className="eyebrow text-leather">Our Vision</p>
            <h2 className="mt-4 text-2xl leading-snug sm:text-3xl">
              A rural economy where traditional skill is a livelihood, not a memory.
            </h2>
            <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
              We want the next generation in our villages to inherit a craft worth continuing —
              with training, tools, fair pricing and a market that already knows their name.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Featured products */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading
              eyebrow="Featured"
              title="From the field and the workshop"
              intro="A small selection from our catalogue. Every product is available for enquiry, wholesale or bulk supply."
            />
            <Link
              to="/products"
              className="eyebrow inline-flex items-center gap-2 text-primary transition-colors hover:text-leather"
            >
              View all products <ArrowRight className="h-4 w-4" />
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
      </section>

      {/* Impact */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-24">
          <Reveal>
            <p className="eyebrow text-gold">Our Impact</p>
            <h2 className="mt-4 max-w-2xl text-3xl leading-tight sm:text-4xl">
              Numbers that belong to households, not to a report.
            </h2>
          </Reveal>
          <dl className="mt-14 grid grid-cols-2 gap-10 lg:grid-cols-4">
            {impact.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <dt className="font-display text-4xl text-gold sm:text-5xl">{stat.value}</dt>
                <dd className="eyebrow mt-3 text-cream/60">{stat.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Why SPECTRA"
            title="Reasons buyers stay with us"
            intro="Partners return for the same four reasons, year after year."
          />
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, i) => (
            <Reveal key={reason.title} delay={i * 0.06}>
              <reason.icon className="h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 text-xl">{reason.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{reason.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Communities */}
      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Our Communities"
              title="The people behind the produce"
              tone="leather"
            />
          </Reveal>
          <div className="mt-14 grid gap-10 md:grid-cols-2">
            {[
              {
                img: farmers,
                alt: "SPECTRA farmer members standing together in a field at sunrise",
                eyebrow: "FPO · Agriculture",
                title: "2,400 farming families",
                body: "Members across 48 villages cultivating spices, running dairy herds and supplying milk to shared collection centres — with input support, soil testing and assured procurement.",
                to: "/fpo" as const,
                cta: "Explore FPO",
              },
              {
                img: artisans,
                alt: "Leather artisans cutting and stitching hides in a workshop",
                eyebrow: "OFPO · Leather Craft",
                title: "600 artisan hands",
                body: "Cutters, embroiderers, lasters and finishers working in village clusters — with tool grants, design collaboration and steady order books that make the craft worth passing on.",
                to: "/ofpo" as const,
                cta: "Explore OFPO",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 0.1}>
                <div className="group">
                  <div className="overflow-hidden">
                    <img
                      src={c.img}
                      alt={c.alt}
                      loading="lazy"
                      width={1200}
                      height={900}
                      className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                    />
                  </div>
                  <p className="eyebrow mt-6 text-muted-foreground">{c.eyebrow}</p>
                  <h3 className="mt-2 text-2xl">{c.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.body}</p>
                  <Link
                    to={c.to}
                    className="eyebrow mt-5 inline-flex items-center gap-2 text-primary transition-colors hover:text-leather"
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
      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6">
            <SectionHeading eyebrow="Gallery" title="Days on the farm and at the bench" />
            <Link
              to="/gallery"
              className="eyebrow inline-flex items-center gap-2 text-primary transition-colors hover:text-leather"
            >
              Open gallery <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </Reveal>
        <div className="mt-12 grid grid-cols-2 gap-3 lg:grid-cols-4">
          {galleryPreview.map((item, i) => (
            <Reveal key={item.alt} delay={i * 0.05}>
              <div className="overflow-hidden bg-sand">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-square w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Contact CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-20 sm:px-8 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-xl text-3xl leading-tight sm:text-4xl">
              Buying wholesale, stocking retail, or simply curious?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-primary-foreground/80">
              Tell us what you need and we will come back with availability, lot sizes and
              pricing within two working days.
            </p>
          </div>
          <Link
            to="/contact"
            className="eyebrow inline-flex shrink-0 items-center gap-2 bg-cream px-8 py-4 text-ink transition-colors hover:bg-gold"
          >
            Send an enquiry <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
