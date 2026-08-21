import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import livestockMarketProgramme from "@/assets/real/livestock-market-programme.jpg";
import womenShgPledge from "@/assets/real/women-shg-pledge.jpg";
import livestockWeightMeasure from "@/assets/real/livestock-weight-measure.jpg";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";
import womenAwardCertificate from "@/assets/real/women-award-certificate.jpg";

const programme = livestockMarketProgramme;
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Livelihoods, Women & Rural Development | SPECTRA" },
      {
        name: "description",
        content:
          "SPECTRA's work in rural Rajasthan since 1996: livelihood development, women's empowerment, education, health and nutrition, youth development, natural resource management, producer organisations and rural industries.",
      },
      { property: "og:title", content: "Our Impact | SPECTRA" },
      {
        property: "og:description",
        content:
          "Eight areas of community action that turn skill and effort into dignity and livelihood.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Impact,
});

const initiatives = [
  {
    title: "Livelihood Development",
    body: "Skill training, producer collectives and market linkage so that a household's own labour becomes a dependable income rather than a seasonal gamble.",
  },
  {
    title: "Women Empowerment",
    body: "Self help groups, savings and credit discipline, and women's participation in planning and decision making — a founding principle of SPECTRA, not an add-on.",
  },
  {
    title: "Education",
    body: "Support for the educational needs of deprived rural children, with a non-institutional approach that meets families where they already are.",
  },
  {
    title: "Health & Nutrition",
    body: "Awareness on hygiene, sanitation and food security, alongside dairy and kitchen-garden work that improves what actually reaches the plate.",
  },
  {
    title: "Youth Empowerment",
    body: "Mentorship, vocational skills and leadership opportunities so young people can build futures without leaving their villages behind.",
  },
  {
    title: "Natural Resource Management",
    body: "Environment stabilisation, soil and water care, and cultivation practices that keep land productive for the generation that inherits it.",
  },
  {
    title: "Farmer Producer Organizations",
    body: "Organising cultivators and dairy households into collectives that aggregate, grade and market together — and hold the bargaining power that a lone smallholder never has.",
  },
  {
    title: "Handcraft & Rural Industries",
    body: "Income generation through traditional crafts — leather juti, shoes and goods — so that inherited skill remains a livelihood and a source of pride.",
  },
];

const stories = [
  {
    img: womenShgPledge,
    eyebrow: "Women Self Help Groups",
    title: "A ledger, a tin box, and a different kind of confidence",
    body: "Groups that begin with small weekly savings end up deciding where a household's money goes, which child stays in school, and what the family will plant next season. The change shows up in the meeting long before it shows up in a report.",
  },
  {
    img: livestockWeightMeasure,
    eyebrow: "Livelihood Development",
    title: "When farmers stop selling alone",
    body: "Scientific animal husbandry, livestock weighing and collective market linkage ensure smallholder families receive fair value without middleman distress sales.",
  },
  {
    img: ofpoStallInspection,
    eyebrow: "Handcraft & Rural Industries",
    title: "A craft worth handing down",
    body: "Artisans who were losing work to factory output now have steady order books and younger hands learning beside them. The skill survives because it finally pays.",
  },
  {
    img: womenAwardCertificate,
    eyebrow: "Community Leadership",
    title: "Decisions and recognition in the community",
    body: "Planning, monitoring and evaluation happen with the community present. Women leaders receive institutional recognition and drive forward self-reliant local institutions.",
  },
];

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact"
        title="Measured in dignity, not in units sold."
        intro="Since 1996, SPECTRA has worked in the rural and interior pockets of Rajasthan with one concern: that people struggling for a life of justice and dignity should have the means to build it themselves."
        image={programme}
        alt="SPECTRA members flagged off for an exposure visit in rural Rajasthan"
      />

      <section className="shell section-y">
        <Reveal>
          <SectionHeading
            eyebrow="Areas of action"
            title="Eight ways the work reaches a household"
            intro="Each area supports the others. A woman's savings group leads to a dairy animal; a dairy animal leads to a child's school fees; a producer collective makes the milk worth more."
          />
        </Reveal>
        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-4">
          {initiatives.map((item, i) => (
            <Reveal key={item.title} delay={(i % 4) * 0.06} className="bg-background p-8">
              <p className="font-display text-3xl text-gold">{String(i + 1).padStart(2, "0")}</p>
              <h3 className="mt-5 text-xl leading-snug">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-cream">
        <div className="shell section-y">
          <Reveal>
            <SectionHeading
              eyebrow="Real stories"
              title="What change actually looks like"
              tone="leather"
            />
          </Reveal>
          <div className="mt-14 grid gap-12 md:grid-cols-2">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08}>
                <div className="frame frame-hover">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={900}
                    className="aspect-4/3 w-full object-cover"
                  />
                </div>
                <p className="eyebrow mt-6 text-muted-foreground">{s.eyebrow}</p>
                <h3 className="mt-2 text-2xl leading-snug">{s.title}</h3>
                <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{s.body}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="band-ink">
        <div className="shell flex flex-col items-start gap-10 py-16 md:py-24 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="max-w-xl text-3xl leading-tight sm:text-4xl">
              Want to walk through a village with us?
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream/70">
              Partners, institutions, students and volunteers are welcome. Write to us and we will
              tell you where the work is happening this month.
            </p>
          </div>
          <Link
            to="/contact"
            className="eyebrow inline-flex shrink-0 items-center gap-2 bg-cream px-8 py-4 text-ink transition-colors duration-200 hover:-translate-y-0.5 hover:bg-gold"
          >
            Contact us <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </>
  );
}
