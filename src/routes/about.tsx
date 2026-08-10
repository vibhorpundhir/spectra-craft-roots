import { createFileRoute, Link } from "@tanstack/react-router";
import farmers from "@/assets/community-farmers.jpg";
import foundationDayAsset from "@/assets/real-foundation-day.jpg.asset.json";

const artisans = foundationDayAsset.url;
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { impact } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About SPECTRA — A Voluntary Rural Organisation Since 1996" },
      {
        name: "description",
        content:
          "SPECTRA is a voluntary, non-profit, non-government organisation working since 1996 in rural Rajasthan on education, livelihood, women's empowerment, natural resource management and youth development.",
      },
      { property: "og:title", content: "About SPECTRA — Working in Rural Rajasthan Since 1996" },
      {
        property: "og:description",
        content:
          "A non-institutional, democratic organisation that puts women's participation at the centre of its planning.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const values = [
  {
    title: "Community Participation",
    body: "A non-institutional approach that follows the principle of democracy — programmes are planned, monitored and evaluated with the community, not for it.",
  },
  {
    title: "Women at the Centre",
    body: "Women's participation in decision making is written into how SPECTRA works. Development that leaves women out of the discussion is not development.",
  },
  {
    title: "Justice and Dignity",
    body: "The primary focus is on the problems of the poor in their struggle to obtain a life of justice and dignity — child rights, gender justice and awareness generation included.",
  },
  {
    title: "Livelihood Security",
    body: "Environment stabilisation, food security, sanitation and rural industries for income generation, so that families can stay, work and thrive where they are.",
  },
];

const timeline = [
  {
    year: "1996",
    body: "SPECTRA begins work in the rural and interior pockets of Rajasthan, registered under the Rajasthan Societies Act, 1958.",
  },
  {
    year: "Education",
    body: "Programmes address the educational and social needs of the deprived rural population, especially children and girls.",
  },
  {
    year: "Women",
    body: "Self help groups and awareness generation place women's participation at the heart of programme planning.",
  },
  {
    year: "Livelihoods",
    body: "Food security, sanitation and rural industries create income within the village rather than away from it.",
  },
  {
    year: "Today",
    body: "FPO and OFPO collectives carry the same mission into agriculture, dairy and traditional leather craft.",
  },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="About SPECTRA"
        title="Society for Public Education Cultural Training and Rural Action"
        intro="SPECTRA is a voluntary, non-profit and non-government organisation, registered under the Rajasthan Societies Act 1958, working since 1996 in the rural and interior pockets of Rajasthan to meet the educational and social needs of the deprived rural population."
        image={farmers}
        alt="Farming families standing together in a field in rural Rajasthan"
      />

      <section className="shell section-y">
        <Reveal>
          <SectionHeading
            eyebrow="Our Story"
            title="Three decades of standing with rural families"
            intro="Child rights, women's development and awareness generation, environment stabilisation, food security, sanitation, education, rural industries for income generation, and empowerment of the community for self-governance — these are the components of our mission."
          />
        </Reveal>

        <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.06} className="bg-background p-8">
              <p className="font-display text-3xl text-gold">{t.year}</p>
              <p className="mt-4 text-sm leading-[1.75] text-muted-foreground">{t.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-7xl grid gap-px bg-border sm:grid-cols-2">
          <Reveal className="bg-cream p-8 sm:p-12 lg:p-16">
            <p className="eyebrow text-primary">Mission</p>
            <h2 className="mt-4 text-2xl leading-snug sm:text-3xl">
              To improve the lives of marginalised rural communities through education, livelihood,
              women's empowerment and community participation.
            </h2>
          </Reveal>
          <Reveal delay={0.1} className="bg-cream p-8 sm:p-12 lg:p-16">
            <p className="eyebrow text-leather">Vision</p>
            <h2 className="mt-4 text-2xl leading-snug sm:text-3xl">
              A rural Rajasthan where every family lives with justice, dignity and the means to
              govern its own future.
            </h2>
          </Reveal>
        </div>
      </section>

      <section className="shell section-y">
        <Reveal>
          <SectionHeading
            eyebrow="Our Values"
            title="Four commitments that shape every programme"
          />
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06} className="border-t border-border pt-6">
              <h3 className="text-2xl">{v.title}</h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="band-ink">
        <div className="shell py-16 md:py-24">
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

      <section className="shell section-y">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="frame frame-hover">
              <img
                src={artisans}
                alt="SPECTRA members and artisans gathered at a NABARD foundation day programme in Alwar"
                loading="lazy"
                decoding="async"
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
                  className="btn-ghost border-primary/40 text-primary hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  FPO · Agriculture
                </Link>
                <Link
                  to="/ofpo"
                  className="btn-ghost border-leather/40 text-leather hover:border-leather hover:bg-leather hover:text-leather-foreground"
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
