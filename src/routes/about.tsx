import { createFileRoute, Link } from "@tanstack/react-router";
import { Award, CheckCircle2, Factory, GraduationCap, Users } from "lucide-react";
import spectraStakeholderMeeting from "@/assets/real/spectra-stakeholder-meeting.jpg";
import womenShgPledge from "@/assets/real/women-shg-pledge.jpg";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";

const artisans = spectraStakeholderMeeting;
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Pahchan Ismailpur Leather Producer Company Limited | By SPECTRA" },
      {
        name: "description",
        content:
          "Pahchan Ismailpur Leather Producer Company Limited (CIN: U01500RJ2023PTC087293) is an artisan-owned producer company incorporated in April 2023, supported by NABARD and promoted by SPECTRA in Alwar, Rajasthan.",
      },
      { property: "og:title", content: "About Pahchan Ismailpur Leather Producer Company Limited" },
      {
        property: "og:description",
        content:
          "Artisan-owned producer company empowering 200 rural leather craftspeople (199 SC/ST shareholders, 92 women artisans) with sustainable livelihoods.",
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
    title: "Artisan Ownership & Democracy",
    body: "Pahchan Ismailpur Leather Producer Company Limited is owned by its 199 SC & ST artisan shareholders. The 5-member Board of Directors is elected by artisans, ensuring decisions serve their community.",
  },
  {
    title: "Women at the Core",
    body: "92 women artisans (46% of total membership) are active producers and shareholders. Women's leadership drives craft design, tilla embroidery, and financial self-reliance.",
  },
  {
    title: "Dignity Through Mastery",
    body: "Transforming 4 generations of inherited leather craftsmanship into recognized, certified artisans holding official Artisan Cards, Udyam Aadhaar, and PM Vishwakarma benefits.",
  },
  {
    title: "Technological & Design Modernization",
    body: "Combining centuries of hand-stitching with our Common Facility Centre (CFC) machinery and design training from FDDI (Footwear Design & Development Institute), Noida.",
  },
];

const timeline = [
  {
    year: "1996",
    body: "SPECTRA begins community development work across rural Rajasthan, registered under the Rajasthan Societies Act, 1958.",
  },
  {
    year: "2022",
    body: "NABARD sanctions ₹50 Lakhs OFPO grant assistance (Sanction: NB/Raj./1414/OFDD/2022-23) to establish a dedicated leather artisan producer company.",
  },
  {
    year: "28 Apr 2023",
    body: "Pahchan Ismailpur Leather Producer Company Limited is officially incorporated under the Companies Act 2013 (CIN: U01500RJ2023PTC087293).",
  },
  {
    year: "7 Dec 2023",
    body: "Common Facility Centre (CFC) & Design Studio established at Kishangarh Bas with specialized sole cutting, skiving, and post-bed sewing machines.",
  },
  {
    year: "2024–2025",
    body: "35 key artisans complete an advanced exposure visit to FDDI Noida. Quarterly turnover reaches ₹11.62 Lakhs with 100% surplus reinvested into artisan welfare.",
  },
];

const credentials = [
  { label: "Full Legal Name", value: "Pahchan Ismailpur Leather Producer Company Limited" },
  { label: "Corporate Identity Number (CIN)", value: "U01500RJ2023PTC087293" },
  { label: "Date of Incorporation", value: "28 April 2023 (Companies Act 2013)" },
  { label: "Institutional Grant Partner", value: "NABARD (Sanctioned Grant: ₹50 Lakhs)" },
  { label: "Promoting Institution (POPI)", value: "SPECTRA Organisation, Alwar (Reg. 1996)" },
  { label: "GSTIN / PAN", value: "08AANCP7187P1Z9 / AANCP7187P" },
  { label: "Total Mobilised Artisans", value: "200 Artisans across 6 Producer Groups" },
  { label: "Contributing Shareholders", value: "199 SC & ST Artisans (107 Male, 92 Female)" },
  { label: "Common Facility Centre (CFC)", value: "Established 7 Dec 2023, Kishangarh Bas" },
  { label: "Key Institutional Training", value: "FDDI (Footwear Design & Development Institute), Noida" },
];

function About() {
  return (
    <>
      <PageHero
        eyebrow="Our Identity & Institutional Roots"
        title="Pahchan: Giving a Name to Inherited Mastery."
        intro="Pahchan Ismailpur Leather Producer Company Limited was incorporated on 28 April 2023 under the Companies Act 2013, supported by NABARD and promoted by SPECTRA. 'Pahchan' means Identity — giving 200 rural leather artisans in Alwar the rightful brand, democratic ownership, and sustainable livelihoods they deserve."
        image={womenShgPledge}
        alt="Pahchan artisan shareholders and SPECTRA leaders gathered at the community meeting in Alwar"
      />

      {/* ═══ Legal & Institutional Credentials Card ═══ */}
      <section className="shell -mt-8 mb-16">
        <div className="rounded-2xl border border-leather/30 bg-card p-6 sm:p-10 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <span className="eyebrow text-leather font-semibold">Institutional Standing</span>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold text-foreground">
                Pahchan Ismailpur Leather Producer Company Limited
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-leather/10 px-4 py-1.5 text-xs font-semibold text-leather border border-leather/20">
              <CheckCircle2 className="h-4 w-4" /> NABARD Supported OFPO
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {credentials.map((c) => (
              <div key={c.label} className="border-b border-border/60 pb-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </dt>
                <dd className="mt-1 text-sm sm:text-base font-medium text-foreground">
                  {c.value}
                </dd>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-muted/40 p-4 text-xs text-muted-foreground">
            <p>
              Official Correspondence:{" "}
              <a href={`mailto:${site.email}`} className="text-leather font-semibold hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              CEO Contact: <span className="font-semibold text-foreground">{site.ceo.name} ({site.ceo.phone})</span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══ Timeline ═══ */}
      <section className="shell section-y">
        <Reveal>
          <SectionHeading
            eyebrow="Our Journey"
            title="From Grassroots Organization to Registered Producer Enterprise"
            intro="How three decades of community action by SPECTRA culminated in a registered, NABARD-backed leather producer company."
          />
        </Reveal>

        <ol className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-5">
          {timeline.map((t, i) => (
            <Reveal key={t.year} delay={i * 0.06} className="bg-background p-8">
              <p className="font-display text-2xl font-bold text-gold">{t.year}</p>
              <p className="mt-4 text-sm leading-[1.75] text-muted-foreground">{t.body}</p>
            </Reveal>
          ))}
        </ol>
      </section>

      {/* ═══ CFC Infrastructure & FDDI Noida Exposure ═══ */}
      <section className="bg-cream">
        <div className="shell section-y">
          <Reveal>
            <SectionHeading
              eyebrow="Production & Innovation"
              title="Modern Tools Honouring Ancient Techniques"
              intro="Pahchan combines the irreplaceable hand-skill of 4 generations with precision machinery at our Common Facility Centre (CFC) and technical training from FDDI Noida."
              tone="leather"
            />
          </Reveal>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            <Reveal className="rounded-xl border border-leather/20 bg-background p-8 shadow-sm">
              <Factory className="h-8 w-8 text-leather" />
              <h3 className="mt-5 text-xl font-bold">Common Facility Centre (CFC)</h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
                Established on 7th December 2023 at Kishangarh Bas. Features high-grade Head Clicker sole cutting,
                sole stitching, leather skiving, and post-bed single needle machines available to all member artisans.
              </p>
            </Reveal>

            <Reveal delay={0.08} className="rounded-xl border border-leather/20 bg-background p-8 shadow-sm">
              <GraduationCap className="h-8 w-8 text-leather" />
              <h3 className="mt-5 text-xl font-bold">FDDI Noida Exposure</h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
                35 key artisans underwent intensive technical training at Footwear Design &amp; Development
                Institute (FDDI), Noida — mastering ergonomic footwear design, hygienic leather processing, and modern packaging.
              </p>
            </Reveal>

            <Reveal delay={0.16} className="rounded-xl border border-leather/20 bg-background p-8 shadow-sm">
              <Users className="h-8 w-8 text-leather" />
              <h3 className="mt-5 text-xl font-bold">Democratic Ownership</h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">
                199 contributing shareholders from SC &amp; ST communities, 92 female artisans, and an elected 5-member
                Board of Directors ensuring 100% of company earnings directly uplift the artisan families.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══ Values ═══ */}
      <section className="shell section-y">
        <Reveal>
          <SectionHeading
            eyebrow="Our Principles"
            title="Four commitments that shape everything we do"
          />
        </Reveal>
        <div className="mt-14 grid gap-10 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.06} className="border-t border-border pt-6">
              <h3 className="text-2xl font-bold">{v.title}</h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{v.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ Impact Numbers Strip ═══ */}
      <section className="band-ink">
        <div className="shell py-16 md:py-20">
          <dl className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            <Reveal>
              <dt className="font-display text-4xl text-gold sm:text-5xl">200</dt>
              <dd className="eyebrow mt-3 text-cream/70">Artisans Mobilised (6 Groups)</dd>
            </Reveal>
            <Reveal delay={0.06}>
              <dt className="font-display text-4xl text-gold sm:text-5xl">199</dt>
              <dd className="eyebrow mt-3 text-cream/70">SC &amp; ST Shareholders</dd>
            </Reveal>
            <Reveal delay={0.12}>
              <dt className="font-display text-4xl text-gold sm:text-5xl">92</dt>
              <dd className="eyebrow mt-3 text-cream/70">Women Craftswomen (46%)</dd>
            </Reveal>
            <Reveal delay={0.18}>
              <dt className="font-display text-4xl text-gold sm:text-5xl">35</dt>
              <dd className="eyebrow mt-3 text-cream/70">FDDI Noida Trained Artisans</dd>
            </Reveal>
          </dl>
        </div>
      </section>

      {/* ═══ Craft Linkage CTA ═══ */}
      <section className="shell section-y">
        <Reveal>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div className="frame frame-hover">
              <img
                src={artisans}
                alt="Pahchan artisan shareholders gathered at the annual meeting in Alwar"
                loading="lazy"
                decoding="async"
                width={1200}
                height={900}
                className="aspect-4/3 w-full object-cover"
              />
            </div>
            <div>
              <SectionHeading
                eyebrow="Explore the craft"
                title="From raw hide to certified heritage"
                intro="See our traditional five-stage process, explore our authentic juti and leather collection, and support rural artisan livelihoods."
                tone="leather"
              />
              <div className="mt-8 flex flex-wrap gap-4">
                <Link to="/ofpo" className="btn-primary">
                  Explore our Craft
                </Link>
                <Link
                  to="/contact"
                  className="btn-ghost border-leather/40 text-leather hover:border-leather hover:bg-leather hover:text-leather-foreground"
                >
                  Contact &amp; Partnerships
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
