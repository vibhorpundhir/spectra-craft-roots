import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle, DollarSign, FileBadge, GraduationCap, ShieldCheck, Users } from "lucide-react";
import womenShgPledge from "@/assets/real/women-shg-pledge.jpg";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";
import womenAwardCertificate from "@/assets/real/women-award-certificate.jpg";
import ofpoExhibitionStall from "@/assets/real/ofpo-exhibition-stall.jpg";

import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Verified Ground Progress | Pahchan Leather Work" },
      {
        name: "description",
        content:
          "Documented progress of Pahchan Ismailpur Leather Producer Company Limited: 200 artisans mobilised, 92 women craftswomen, PM Vishwakarma, Udyam Aadhaar, and FDDI Noida training.",
      },
      { property: "og:title", content: "Our Impact — Verified Ground Progress | Pahchan Leather Work" },
      {
        property: "og:description",
        content:
          "Transforming inherited craft into sustainable livelihoods, verified by official NABARD progress reports.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/impact" },
    ],
    links: [{ rel: "canonical", href: "/impact" }],
  }),
  component: Impact,
});

const verifiedMetrics = [
  {
    icon: Users,
    number: "200",
    label: "Artisans Mobilised",
    detail: "Organised into 6 active Producer Groups across Ismailpur & Kishangarh Bas hamlets.",
  },
  {
    icon: ShieldCheck,
    number: "199",
    label: "SC & ST Shareholders",
    detail: "100% of contributing shareholders are from traditional SC & ST leather-crafting households.",
  },
  {
    icon: Award,
    number: "92",
    label: "Women Leather Artisans",
    detail: "46% female participation, driving traditional tilla embroidery, cutting, and enterprise ownership.",
  },
  {
    icon: GraduationCap,
    number: "35",
    label: "FDDI Noida Trainees",
    detail: "Master artisans trained at premier Footwear Design & Development Institute in modern shoe techniques.",
  },
  {
    icon: FileBadge,
    number: "92",
    label: "Artisan Certificates Distributed",
    detail: "Out of 155 certification applications submitted to the government, establishing official artisan status.",
  },
  {
    icon: CheckCircle,
    number: "50",
    label: "PM Vishwakarma Enrolled",
    detail: "24 artisans already selected for direct financial and toolkit assistance under the national scheme.",
  },
  {
    icon: DollarSign,
    number: "₹11.62 L",
    label: "Quarterly Sales Turnover",
    detail: "Generated through handmade juti, footwear, and leather accessories with ₹1.04 L surplus reinvested.",
  },
  {
    icon: ShieldCheck,
    number: "45",
    label: "Udyam Aadhaar Registered",
    detail: "Enabling individual artisan micro-enterprises to access formal banking and social security.",
  },
];

const initiatives = [
  {
    title: "Common Facility Centre (CFC)",
    body: "Operational since 7th December 2023 with high-grade Head Clicker sole cutting, skiving, and post-bed sewing machines — reducing physical strain while boosting daily artisan earning capacity.",
  },
  {
    title: "Women's Economic Leadership",
    body: "Self-help groups, joint savings, and craft leadership — 92 women artisans now lead tilla needlework, pricing discussions, and producer group governance.",
  },
  {
    title: "National Design Exposure (FDDI Noida)",
    body: "Connecting village artisans to national institutes — 35 artisans attended Footwear Design & Development Institute (FDDI) Noida to learn ergonomic shaping, lasting, and retail presentation.",
  },
  {
    title: "Formal Financial Inclusion",
    body: "Assisting member shareholders with DIC loan facilities (₹2.0 Lakhs sanctioned), bank account linkages with SBI Kishangarh Bas, and BRUPY employment schemes for rural youth.",
  },
  {
    title: "Market Access & Trade Exhibitions",
    body: "Setting up stalls at regional and national craft fairs, directly linking artisans with urban buyers without exploitative middleman cuts.",
  },
  {
    title: "Democratic Producer Governance",
    body: "A registered Producer Company (Companies Act 2013) where 199 artisans hold equity, elect the Board of Directors, and decide on company reinvestment policies.",
  },
];

const stories = [
  {
    img: womenShgPledge,
    eyebrow: "Women Leadership in Craft",
    title: "92 women artisans rewriting the family balance sheet",
    body: "Women who traditionally performed unpaid auxiliary work now hold company shares, run tilla embroidery batches, and lead Producer Groups in Ismailpur.",
  },
  {
    img: ofpoStallInspection,
    eyebrow: "Artisan Enterprise",
    title: "A craft worth handing down to sons and daughters",
    body: "With steady seasonal orders and the Common Facility Centre running, young artisans are choosing to stay in their villages and master their ancestral trade.",
  },
  {
    img: womenAwardCertificate,
    eyebrow: "Official Recognition",
    title: "From anonymous workers to certified master artisans",
    body: "92 Artisan Certificates issued, 45 Udyam Aadhaar registrations, and 50 PM Vishwakarma enrollments have transformed informal workers into recognized craft professionals.",
  },
  {
    img: ofpoExhibitionStall,
    eyebrow: "Market Linkage",
    title: "₹11.62 Lakhs in sales through direct customer trust",
    body: "By displaying at fairs, melas, and online platforms, the producer company achieved a positive profit margin in its first full operational quarter, all reinvested into artisan welfare.",
  },
];

function Impact() {
  return (
    <>
      <PageHero
        eyebrow="Our Impact · Ground Reality"
        title="Documented progress. Livelihoods transformed."
        intro="Pahchan Ismailpur Leather Producer Company Limited, supported by NABARD and promoted by SPECTRA, turns inherited craft into financial security and social dignity for 200 artisan families across rural Rajasthan."
        image={ofpoExhibitionStall}
        alt="Pahchan artisans displaying handmade leather craft at a national level exhibition"
      />

      {/* ═══ Ground Verified Statistics (From NABARD QPR) ═══ */}
      <section className="shell -mt-8 mb-16">
        <div className="rounded-2xl border border-leather/30 bg-card p-6 sm:p-10 shadow-lg">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border pb-6">
            <div>
              <p className="eyebrow text-leather font-semibold">Documented Milestones</p>
              <h2 className="mt-1 text-2xl sm:text-3xl font-bold">
                NABARD Quarterly Progress Report Highlights
              </h2>
            </div>
            <span className="rounded-full bg-leather/10 px-3.5 py-1 text-xs font-semibold text-leather">
              Period: April – June 2025
            </span>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {verifiedMetrics.map((m) => (
              <div key={m.label} className="rounded-xl border border-border/80 bg-muted/20 p-5">
                <m.icon className="h-6 w-6 text-leather" strokeWidth={1.75} />
                <p className="mt-4 font-display text-3xl font-bold text-foreground">{m.number}</p>
                <p className="mt-1 text-xs font-bold uppercase tracking-wider text-leather">
                  {m.label}
                </p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{m.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ 6 Pillars of Development ═══ */}
      <section className="shell section-y">
        <Reveal>
          <SectionHeading
            eyebrow="Key Focus Areas"
            title="Six pillars building long-term artisan self-reliance"
            intro="From common facility machinery to national footwear design training — how the OFPO creates an ecosystem where artisans thrive."
            tone="leather"
          />
        </Reveal>

        <div className="mt-14 grid gap-px bg-border sm:grid-cols-2 lg:grid-cols-3">
          {initiatives.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.05} className="bg-background p-8">
              <span className="eyebrow text-leather font-semibold">0{i + 1}</span>
              <h3 className="mt-3 text-xl font-bold">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.75] text-muted-foreground">{item.body}</p>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══ Stories from the Ground ═══ */}
      <section className="bg-cream section-y">
        <div className="shell">
          <Reveal>
            <SectionHeading
              eyebrow="Stories from the Field"
              title="What progress looks like in the villages of Alwar"
              intro="Behind every statistic is a household in Ismailpur or Kishangarh Bas with a restored sense of pride."
              tone="leather"
            />
          </Reveal>

          <div className="mt-14 grid gap-10 sm:grid-cols-2">
            {stories.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.06} className="surface-card overflow-hidden">
                <div className="frame aspect-16/10">
                  <img
                    src={s.img}
                    alt={s.title}
                    loading="lazy"
                    decoding="async"
                    width={1200}
                    height={750}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-7 sm:p-9">
                  <p className="eyebrow text-leather">{s.eyebrow}</p>
                  <h3 className="mt-2 text-2xl font-bold">{s.title}</h3>
                  <p className="mt-4 text-sm leading-[1.75] text-muted-foreground">{s.body}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="shell section-y">
        <Reveal>
          <div className="flex flex-col items-center justify-center text-center max-w-2xl mx-auto">
            <span className="eyebrow text-leather font-semibold">Join the Movement</span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-bold">
              Support genuine artisan heritage.
            </h2>
            <p className="mt-4 text-muted-foreground text-sm sm:text-base leading-relaxed">
              Whether you are an institutional buyer, a design enthusiast, or looking for handcrafted corporate gifts — our artisan collective creates pieces that carry authentic cultural value.
            </p>
            <div className="mt-8 flex flex-wrap gap-4 justify-center">
              <Link to="/ofpo" className="btn-primary">
                View Handcrafted Collection
              </Link>
              <Link to="/contact" className="btn-ghost border-leather/40 text-leather hover:bg-leather hover:text-white">
                Contact &amp; Custom Orders
              </Link>
            </div>
          </div>
        </Reveal>
      </section>
    </>
  );
}
