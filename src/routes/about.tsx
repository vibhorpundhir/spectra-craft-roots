import { createFileRoute, Link } from "@tanstack/react-router";
import farmers from "@/assets/community-farmers.jpg";
import artisans from "@/assets/community-artisans.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { impact } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SPECTRA — Our Story, Mission & Values" },
      {
        name: "description",
        content:
          "How SPECTRA grew from a village collection centre into a producer-owned collective supporting 2,400 farming families and 600 leather artisans.",
      },
      { property: "og:title", content: "About SPECTRA — Our Story, Mission & Values" },
      {
        property: "og:description",
        content:
          "Eight years of building fair markets for farmers and artisans across 48 villages.",
      },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    title: "Community Development",
    body: "Training programmes, tool grants and shared infrastructure — collection centres, cold storage and finishing units owned by the members who use them.",
  },
  {
    title: "Sustainability",
    body: "Rain-fed cultivation, natural drying, vegetable tanning and minimal packaging. We prefer methods that were sustainable long before the word existed.",
  },
  {
    title: "Quality Commitment",
    body: "Documented curing times, batch testing at intake, and traceable lots. A product carries its origin because the household behind it stands behind it.",
  },
  {
    title: "Social Impact",
    body: "Assured procurement, transparent pricing and surplus distribution — so a good season is felt in the household, not only on a balance sheet.",
  },
];

const timeline = [
  { year: "2017", body: "A single milk collection centre opens with 46 founding member families." },
  { year: "2019", body: "Spice grading and stone-milling unit commissioned; first branded turmeric lot dispatched." },
  { year: "2021", body: "OFPO division formed with three leather artisan clusters and a shared finishing unit." },
  { year: "2023", body: "Bilona ghee and cultured dairy line launched; membership crosses two thousand households." },
  { year: "2025", body: "Design collaboration programme begins, taking artisan-made juti and satchels to city retailers." },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About SPECTRA"
        title="Built by the people whose work it sells."
        intro="SPECTRA is a producer-owned collective operating two divisions — agriculture and leather craft — with a single operating principle: the value of good work should stay with the person who did it."
        image={farmers}
        alt="SPECTRA member farmers standing together in a field"
      />

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <SectionHeading
            eyebrow="Our History"
            title="Eight years, one collection centre at a time"
            intro="We did not begin with a brand. We began with a weighing scale, a chilling unit and forty-six families who were tired of accepting whatever price arrived at the gate."
          />
        </Reveal>
        <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.06} className="bg-background p-8">
              <p className="font-display text-3xl text-gold">{t.year}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{t.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-cream">
        <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-2">
          <Reveal className="bg-cream p-8 sm:p-12 lg:p-16">
            <p className="eyebrow text-primary">Mission</p>
            <h2 className="mt-4 text-2xl leading-snug sm:text-3xl">
              Make honest production financially viable for the people who practise it.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="bg-cream p-8 sm:p-12 lg:p-16">
            <p className="eyebrow text-leather">Vision</p>
            <h2 className="mt-4 text-2xl leading-snug sm:text-3xl">
              A rural economy where traditional skill is a livelihood, not a memory.
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <SectionHeading eyebrow="Our Values" title="Four commitments we are measured against" />
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06} className="border-t border-border pt-6">
              <h3 className="text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8">
          <dl className="grid grid-cols-2 gap-10 lg:grid-cols-4">
            {impact.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.08}>
                <dt className="font-display text-4xl text-gold sm:text-5xl">{stat.value}</dt>
                <dd className="eyebrow mt-3 text-cream/60">{stat.label}</dd>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-20 sm:px-8 md:py-28">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="overflow-hidden">
              <img
                src={artisans}
                alt="Artisans working leather together in a village workshop"
                loading="lazy"
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Two divisions"
                title="Different materials. Identical standard."
                intro="Explore the work of each division — the people, the process and the products they make."
                tone="leather"
              />
              <div className="mt-8 flex flex-wrap gap-3">
                <Link
                  to="/fpo"
                  className="eyebrow border border-primary px-6 py-3.5 text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
                >
                  FPO · Agriculture
                </Link>
                <Link
                  to="/ofpo"
                  className="eyebrow border border-leather px-6 py-3.5 text-leather transition-colors hover:bg-leather hover:text-leather-foreground"
                >
                  OFPO · Leather
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
