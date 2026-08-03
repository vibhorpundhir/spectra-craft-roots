import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import agriculture from "@/assets/hero-agriculture.jpg";
import farmers from "@/assets/community-farmers.jpg";
import dairyCentre from "@/assets/gallery-dairy-centre.jpg";
import training from "@/assets/gallery-training.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { products } from "@/data/products";

export const Route = createFileRoute("/fpo")({
  head: () => ({
    meta: [
      { title: "FPO Division — Spices, Milk & Dairy | SPECTRA" },
      {
        name: "description",
        content:
          "SPECTRA's Farmer Producer Organisation: 2,400 farming families growing spices and supplying milk and dairy through sustainable, traceable practices.",
      },
      { property: "og:title", content: "FPO Division — Spices, Milk & Dairy | SPECTRA" },
      {
        property: "og:description",
        content:
          "Sun-dried spices, morning-collected milk and bilona ghee from SPECTRA's farmer members.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/fpo" },
    ],
    links: [{ rel: "canonical", href: "/fpo" }],
  }),
  component: Fpo,
});

const process = [
  { step: "01", title: "Sowing", body: "Members receive tested seed and soil-health cards; sowing calendars are set cluster by cluster." },
  { step: "02", title: "Growing", body: "Rain-fed and drip-irrigated plots, crop rotation, and farmyard manure over synthetic inputs wherever the crop allows." },
  { step: "03", title: "Harvest & Collection", body: "Harvest is aggregated at village level and graded on arrival; milk is chilled within ninety minutes." },
  { step: "04", title: "Processing", body: "Sun-drying yards, stone mills and bilona churns — slow methods that keep aroma, colour and nutrition intact." },
  { step: "05", title: "Packing & Dispatch", body: "Small-batch packing, lot numbers recorded, and every lot traceable to the households that supplied it." },
];

function Fpo() {
  const fpoProducts = products.filter((p) => p.division === "fpo");

  return (
    <>
      <PageHero
        eyebrow="FPO · Agriculture"
        title="Farming families who decided to stand together."
        intro="Our Farmer Producer Organisation is not a supply chain. It is a group of small farming and dairy households who pooled their land, labour and courage so that a season of work would finally be worth what it costs them."
        image={agriculture}
        alt="Member farmer walking between rows of crops at sunrise"
      />

      <section className="shell section-y">
        <Reveal>
          <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="frame frame-hover">
              <img
                src={farmers}
                alt="SPECTRA farmer members gathered together at sunrise"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Our Farmers"
                title="Small holdings, collective strength"
                intro="Most of our members farm under two hectares. Alone, that means weak bargaining power and distress sales. Together, it means graded lots, cold chains, branded packaging and buyers who come back."
              />
              <p className="mt-5 text-sm leading-[1.75] text-muted-foreground">
                Members hold shares, elect the board, and share in the surplus. Procurement prices
                are published before the season begins, so no household plants a crop without
                knowing what it will fetch.
              </p>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="bg-cream">
        <div className="shell section-y">
          <Reveal>
            <SectionHeading
              eyebrow="Agricultural Process"
              title="From a family's field to a sealed jar"
              intro="Five stages, each carried out by member households in their own villages — the work stays where the people are."
            />
          </Reveal>
          <ol className="mt-14 grid gap-px bg-border md:grid-cols-3 lg:grid-cols-5">
            {process.map((p, i) => (
              <Reveal key={p.step} delay={i * 0.06} className="bg-cream p-8">
                <p className="eyebrow text-gold">{p.step}</p>
                <h3 className="mt-4 text-xl">{p.title}</h3>
                <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{p.body}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section className="shell section-y">
        <Reveal>
          <SectionHeading
            eyebrow="Sustainable Farming"
            title="Methods chosen for the soil, not the spreadsheet"
            intro="Crop rotation, farmyard manure, rain-fed plots and shade curing. We accept lower yields where the alternative costs the land more than it pays the farmer."
          />
        </Reveal>
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <Reveal className="frame frame-hover">
            <img
              src={dairyCentre}
              alt="Steel milk cans at a SPECTRA village collection centre"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
          <Reveal delay={0.08} className="frame frame-hover">
            <img
              src={training}
              alt="Farmer training session under a field tent"
              loading="lazy"
              width={1200}
              height={900}
              className="aspect-4/3 w-full object-cover"
            />
          </Reveal>
        </div>
      </section>

      <section className="bg-cream">
        <div className="shell section-y">
          <Reveal>
            <SectionHeading
              eyebrow="What the journey produces"
              title="Spices, milk and dairy — the outcome, not the point"
              intro="Each of these carries the labour of a household you could visit. Open one to read its story."
            />
          </Reveal>
          <div className="mt-14 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {fpoProducts.map((product, i) => (
              <Reveal key={product.slug} delay={i * 0.06}>
                <ProductCard product={product} />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell section-y">
        <Reveal>
          <SectionHeading eyebrow="Community Stories" title="What membership changes" />
        </Reveal>
        <div className="mt-12 grid gap-10 md:grid-cols-3">
          {[
            {
              name: "Sushila Devi",
              place: "Bansur cluster",
              quote:
                "I used to sell milk to whoever came to the door. Now it is weighed, tested and paid for on the tenth of every month. My daughter finished school on that certainty.",
            },
            {
              name: "Ram Kishan",
              place: "Ramgarh cluster",
              quote:
                "The soil card told me I was over-applying urea for eleven years. Two seasons of correction and my turmeric graded top lot for the first time.",
            },
            {
              name: "Mahesh Yadav",
              place: "Thanagazi cluster",
              quote:
                "Before, a good harvest meant a lower price. Now the price is published before I sow. That is the whole difference.",
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

      <section className="bg-primary text-primary-foreground">
        <div className="shell flex flex-col items-start gap-10 py-16 md:py-24 md:flex-row md:items-center md:justify-between">
          <h2 className="max-w-xl text-3xl leading-tight sm:text-4xl">
            Want to hear a farming family's story first hand?
          </h2>
          <Link
            to="/contact"
            className="eyebrow inline-flex shrink-0 items-center gap-2 bg-cream px-8 py-4 text-ink transition-all duration-500 hover:-translate-y-0.5 hover:bg-gold"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
