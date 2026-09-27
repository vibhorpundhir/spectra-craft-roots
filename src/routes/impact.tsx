import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, CheckCircle, DollarSign, FileBadge, GraduationCap, ShieldCheck, Sparkles, TrendingUp, Users } from "lucide-react";
import womenShgPledge from "@/assets/real/women-shg-pledge.jpg";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";
import womenAwardCertificate from "@/assets/real/women-award-certificate.jpg";
import ofpoExhibitionStall from "@/assets/real/ofpo-exhibition-stall.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { AnimatedCounter } from "@/components/AnimatedCounter";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/impact")({
  head: () => ({
    meta: [
      { title: "Our Impact — Verified Livelihoods Transformed | Promoted by SPECTRA Organisation & NABARD Bank" },
      {
        name: "description",
        content:
          "Documented progress of Pahchan Ismailpur Leather Producer Company Limited: 200 artisans mobilised, 92 women craftswomen, PM Vishwakarma, Udyam Aadhaar, and FDDI Noida training. Promoted by SPECTRA Organisation and NABARD Bank.",
      },
      { property: "og:title", content: "Our Impact — Verified Livelihoods Transformed | Pahchan Leather Work" },
      {
        property: "og:description",
        content:
          "Transforming inherited craft into sustainable livelihoods, verified by official NABARD progress reports. Promoted by SPECTRA Organisation and NABARD Bank.",
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
    detail: "46% female participation, driving traditional tilla embroidery, cutting, and enterprise governance.",
  },
  {
    icon: GraduationCap,
    number: "35",
    label: "FDDI Noida Trainees",
    detail: "Master artisans trained at premier Footwear Design & Development Institute in modern lasting & ergonomics.",
  },
  {
    icon: FileBadge,
    number: "92",
    label: "Artisan Cards Issued",
    detail: "Government of India recognized artisan identity cards distributed out of 155 submitted applications.",
  },
  {
    icon: CheckCircle,
    number: "50",
    label: "PM Vishwakarma Enrolled",
    detail: "24 artisans already selected for direct financial and modern toolkit assistance under the national scheme.",
  },
  {
    icon: DollarSign,
    number: "₹11.62 L",
    label: "Quarterly Turnover",
    detail: "Generated through handmade juti and leather footwear with 100% surplus reinvested into artisan welfare.",
  },
  {
    icon: ShieldCheck,
    number: "45",
    label: "Udyam Aadhaar Registered",
    detail: "Enabling individual artisan micro-enterprises to access formal banking, DIC loans, and social security.",
  },
];

const transformationStories = [
  {
    img: womenShgPledge,
    badge: "Women Leadership",
    title: "92 Women Artisans Rewriting the Household Economy",
    body: "Women who traditionally performed unacknowledged auxiliary work now hold formal company shares, lead tilla embroidery batches, and negotiate fair piece-rates in Ismailpur.",
  },
  {
    img: womenAwardCertificate,
    badge: "Official Identity",
    title: "From Anonymous Labor to Certified Master Craftspeople",
    body: "Holding official Artisan Identity Cards, bank account linkages with SBI Kishangarh Bas, and PM Vishwakarma recognition restores lifelong dignity to artisan families.",
  },
  {
    img: ofpoStallInspection,
    badge: "Generational Continuity",
    title: "A Trade Worth Passing to the Next Generation",
    body: "With steady seasonal orders and the Common Facility Centre running, young village apprentices now see a prosperous, dignified future in handmade footwear rather than migrating for day-labor.",
  },
  {
    img: ofpoExhibitionStall,
    badge: "Direct Market Reach",
    title: "Eliminating the Middleman Cut Forever",
    body: "By showcasing at national trade melas, exhibitions, and direct institutional channels, the full commercial value of each handmade shoe flows directly back into the artisans' pockets.",
  },
];

function Impact() {
  return (
    <>
      {/* ═══════════════════════ Hero Section ═══════════════════════ */}
      <PageHero
        tone="dark"
        eyebrow="Ground Reality · Verified Progress"
        title="Documented Progress. Livelihoods Transformed."
        intro="Pahchan Ismailpur Leather Producer Company Limited, promoted by SPECTRA Organisation and NABARD Bank, turns inherited craft into financial security, certified identity, and social dignity for 200 artisan families across rural Rajasthan."
        image={ofpoExhibitionStall}
        alt="Pahchan artisans displaying handmade leather craft at a national level exhibition"
        badgeText="Promoted by SPECTRA Organisation & NABARD Bank"
      />

      {/* ═══════════════════════ Official NABARD Milestones ═══════════════════════ */}
      <section className="shell -mt-10 relative z-10 mb-16">
        <div className="surface-card rounded-2xl border border-gold/30 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div>
              <span className="eyebrow text-leather font-semibold">Verified Ground Data</span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Quarterly Progress Report Highlights (NABARD OFPO)
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-xs font-bold text-leather border border-gold/40">
              <Award className="h-4 w-4 text-gold" /> Grant Sanction: NB/Raj./1414/OFDD/2022-23
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {verifiedMetrics.map((m, i) => {
              const Icon = m.icon;
              return (
                <Reveal key={m.label} delay={i * 0.04}>
                  <div className="rounded-xl border border-gold/20 bg-card p-6 h-full flex flex-col justify-between hover:border-gold/50 transition-all duration-300">
                    <div>
                      <div className="flex items-center justify-between">
                        <Icon className="h-5 w-5 text-gold" />
                        <span className="text-[0.6rem] font-bold text-leather uppercase tracking-widest">
                          Verified
                        </span>
                      </div>
                      <p className="mt-4 font-display text-3xl sm:text-4xl font-bold text-leather">
                        <AnimatedCounter value={m.number} />
                      </p>
                      <h3 className="mt-2 text-sm font-bold text-foreground">
                        {m.label}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                        {m.detail}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ Ground Transformation Stories ═══════════════════════ */}
      <section className="shell section-y">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-leather flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-gold" />
            Human Dimension of Impact
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Real Lives Behind the Statistics
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            How institutional support from SPECTRA Organisation and NABARD Bank changes the everyday reality of artisan families in Alwar.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {transformationStories.map((story, idx) => (
            <Reveal key={story.title} delay={idx * 0.08}>
              <div className="surface-card rounded-2xl overflow-hidden border border-gold/25 h-full flex flex-col hover:border-gold/50 transition-all duration-300">
                <div className="frame frame-hover aspect-16/9 overflow-hidden bg-sand/40">
                  <img
                    src={story.img}
                    alt={story.title}
                    loading="lazy"
                    decoding="async"
                    width={800}
                    height={450}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="trust-seal rounded-full text-[0.6rem] mb-3">
                      {story.badge}
                    </span>
                    <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                      {story.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {story.body}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ Institutional Promoters Bottom Band ═══════════════════════ */}
      <section className="bg-espresso text-cream border-t border-gold/30 py-16 sm:py-20">
        <div className="shell flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
            <span className="text-xs font-bold tracking-wider text-gold uppercase">
              Promoted by SPECTRA Organisation and NABARD Bank
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream">
            Support Sustainable Artisan Livelihoods
          </h2>
          <p className="text-cream/70 text-sm sm:text-base leading-relaxed">
            By choosing Pahchan handcrafted leather, you are supporting a verified, government-sanctioned rural producer company where 100% of proceeds go directly to artisan equity holders.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link
              to="/products"
              className="btn-gold rounded-sm inline-flex items-center gap-2"
            >
              Explore Handcrafted Products <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-ghost rounded-sm border-gold/30 text-cream hover:bg-gold hover:text-ink"
            >
              Partner With Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
