import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import workshop from "@/assets/hero-leather.jpg";
import artisans from "@/assets/community-artisans.jpg";
import juti from "@/assets/product-juti.jpg";
import goods from "@/assets/product-leather-goods.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/ofpo")({
  head: () => ({
    meta: [
      { title: "OFPO Division — Handmade Leather Juti, Shoes & Goods | SPECTRA" },
      {
        name: "description",
        content:
          "SPECTRA's OFPO division works with 600 leather artisans crafting vegetable-tanned juti, hand-stitched shoes and leather goods using traditional skills.",
      },
      {
        property: "og:title",
        content: "OFPO Division — Handmade Leather Juti, Shoes & Goods | SPECTRA",
      },
      {
        property: "og:description",
        content: "Vegetable-tanned, hand-stitched leather craft from village artisan clusters.",
      },
      { property: "og:url", content: "/ofpo" },
    ],
    links: [{ rel: "canonical", href: "/ofpo" }],
  }),
  component: Ofpo,
});

const process = [
  { step: "01", title: "Selecting the hide", body: "Vegetable-tanned goat and buffalo hides are inspected by hand for grain, thickness and evenness." },
  { step: "02", title: "Cutting", body: "Patterns are laid out to follow the natural stretch of the hide — a decision no machine makes well." },
  { step: "03", title: "Embroidery", body: "Tilla and salma work is stitched on the vamp before assembly, one motif at a time." },
  { step: "04", title: "Lasting & Stitching", body: "Uppers are shaped over wooden lasts and saddle- or welt-stitched with waxed linen thread." },
  { step: "05", title: "Finishing", body: "Edges burnished, soles trimmed, beeswax rubbed in and buffed — then rested for two days before dispatch." },
];

function Ofpo() {
  const ofpoProducts = products.filter((p) => p.division === "ofpo");

  return (
    <>
      <PageHero
        eyebrow="OFPO · Leather Craft"
        title="Leather shaped by hands that inherited the skill."
        intro="Our Other Farmer Producer Organisation supports 600 artisans across village clusters — cutters, embroiderers, lasters and finishers making juti, shoes and leather goods the way their families always have."
        image={workshop}
        alt="Artisan finishing a handmade leather shoe at a workbench"
        tone="leather"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <SectionHeading
                eyebrow="Our Artisans"
                title="A craft that survives only if it pays"
                intro="Leather work in our region has been passed down for four generations. It was also, until recently, disappearing — squeezed by cheap synthetics and unpredictable contract work."
                tone="leather"
              />
              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">
                The OFPO exists to change the economics: tool grants, a shared finishing unit,
                design collaboration with city retailers, and order books planned a season ahead so
                that a young apprentice can see a future in the trade.
              </p>
            </div>
            <div className="overflow-hidden">
              <img
                src={artisans}
                alt="Artisans cutting and stitching leather in a village workshop"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="Crafting Process"
              title="Five stages, no shortcuts"
              intro="A single pair of embroidered juti passes through four sets of hands over three days."
              tone="leather"
            />
          </Reveal>
          <ol className="mt-14 grid gap-px bg-border md:grid-cols-3 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06} className="bg-cream p-8">
                <p className="eyebrow text-gold">{p.step}</p>
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Traditional Skills"
            title="Tilla embroidery, saddle stitching, hand burnishing"
            intro="Techniques that take years to learn and minutes to notice — the reason a handmade juti outlives three machine-made pairs."
            tone="leather"
          />
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <Reveal className="overflow-hidden">
            <img
              src={juti}
              alt="Hand-embroidered leather juti with gold tilla work"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />
          </Reveal>
          <Reveal delay={0.08} className="overflow-hidden">
            <img
              src={goods}
              alt="Handmade leather satchel and belt on linen"
              loading="lazy"
              width={1024}
              height={1024}
              className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
          <Reveal>
            <SectionHeading
              eyebrow="OFPO Products"
              title="Juti, shoes and leather goods"
              tone="leather"
            />
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {ofpoProducts.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="Artisan Stories" title="Voices from the bench" tone="leather" />
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              name: "Iqbal Khan",
              place: "Master laster, 31 years",
              quote:
                "My father made forty pairs a week for a contractor who paid when he felt like it. I make twelve pairs and they are paid for before they leave the room.",
            },
            {
              name: "Zarina Bano",
              place: "Tilla embroiderer",
              quote:
                "The motif on the vamp is my grandmother's. Nobody asked me for it in twenty years. Last season we sent three hundred pairs of it to Jaipur.",
            },
            {
              name: "Sohan Lal",
              place: "Finishing unit",
              quote:
                "We have proper light, proper tools and a place to rest the shoes before packing. Small things. They are the whole difference in a finish.",
            },
          ].map((s, i) => (
            <Reveal key={s.name} delay={i * 0.08} className="border-t border-border pt-6">
              <blockquote className="font-display text-xl leading-snug">“{s.quote}”</blockquote>
              <p className="eyebrow mt-5 text-muted-foreground">
                {s.name} · {s.place}
              </p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-leather text-leather-foreground">
        <div className="mx-auto flex max-w-7xl flex-col items-start gap-8 px-5 py-16 sm:px-8 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl leading-tight sm:text-4xl">
            Stocking handmade leather? Let's talk sizes and lead times.
          </h2>
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
