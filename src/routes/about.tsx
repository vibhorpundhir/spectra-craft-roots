import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Award,
  Building2,
  CheckCircle2,
  ChevronRight,
  Factory,
  FileText,
  GraduationCap,
  MapPin,
  ShieldCheck,
  Sparkles,
  Users,
} from "lucide-react";
import spectraStakeholderMeeting from "@/assets/real/spectra-stakeholder-meeting.jpg";
import womenShgPledge from "@/assets/real/women-shg-pledge.jpg";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";
import womenAwardCertificate from "@/assets/real/women-award-certificate.jpg";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site, whatsappLink } from "@/data/site";
import { aboutPageImages } from "@/data/galleryImages";

export const Route = createFileRoute("/about")({
  component: About,
});

const credentials = [
  { label: "Full Legal Name", value: "Pahchan Ismailpur Leather Producer Company Limited" },
  { label: "Corporate Identity Number (CIN)", value: "U01500RJ2023PTC087293" },
  { label: "Date of Incorporation", value: "28 April 2023 (Companies Act 2013)" },
  {
    label: "Institutional Grant Partner",
    value: "NABARD Bank (Sanction: NB/Raj./1414/OFDD/2022-23)",
  },
  { label: "Promoting Institution (POPI)", value: "SPECTRA Organisation, Alwar (Est. 1996)" },
  { label: "GSTIN / PAN / TAN", value: "08AANCP7187P1Z9 / AANCP7187P / JPRP09059B" },
  { label: "Total Mobilised Artisans", value: "200 Artisans across 6 Village Producer Groups" },
  { label: "Contributing Shareholders", value: "199 SC & ST Artisans (107 Male, 92 Female)" },
  { label: "Common Facility Centre (CFC)", value: "Established 7 Dec 2023, Kishangarh Bas" },
  {
    label: "Design Training Institution",
    value: "FDDI (Footwear Design & Development Institute), Noida",
  },
];

const timeline = [
  {
    year: "1996",
    title: "Grassroots Foundation",
    body: "SPECTRA Organisation begins community empowerment and self-help group mobilization across rural Rajasthan.",
  },
  {
    year: "2022",
    title: "NABARD OFPO Sanction",
    body: "NABARD Bank sanctions ₹50 Lakhs OFPO grant assistance to establish a dedicated leather artisan producer enterprise.",
  },
  {
    year: "28 Apr 2023",
    title: "Official Incorporation",
    body: "Pahchan Ismailpur Leather Producer Company Limited is incorporated under the Companies Act 2013 with 199 SC & ST shareholders.",
  },
  {
    year: "7 Dec 2023",
    title: "Common Facility Centre (CFC)",
    body: "Modern CFC and Design Studio inaugurated at Kishangarh Bas with heavy-duty skiving, sole clicker, and sewing machinery.",
  },
  {
    year: "2024–2025",
    title: "FDDI Noida & Market Expansion",
    body: "35 key artisans complete technical training at FDDI Noida. Direct sales reach ₹11.62 Lakhs/quarter with 100% surplus retained by artisans.",
  },
];

const values = [
  {
    title: "Artisan Democracy & Equity",
    body: "199 SC & ST artisans own 100% of the shareholding equity. Decisions on reinvestment, raw material bulk purchase, and fair wages are made democratically by the elected Board of Directors.",
  },
  {
    title: "Women at the Helm",
    body: "92 women artisans (46% of total membership) lead tilla embroidery batches, hold shareholder voting rights, and participate directly in craft pricing and bank linkages.",
  },
  {
    title: "Certified Professional Dignity",
    body: "Transforming informal village work into documented professional craftsmanship with official Government Artisan Cards, Udyam Aadhaar numbers, and PM Vishwakarma assistance.",
  },
  {
    title: "Modern Tools with Hand Skills",
    body: "Preserving generational hand lasting while relieving painful manual skiving and sole punching through the shared machines at our Kishangarh Bas CFC.",
  },
];

function About() {
  return (
    <>
      {/* ═══════════════════════ Hero Section ═══════════════════════ */}
      <PageHero
        tone="dark"
        eyebrow="Institutional Roots & Governance"
        title="Pahchan: Giving Name and Ownership to Inherited Mastery."
        intro="Pahchan Ismailpur Leather Producer Company Limited was incorporated on 28 April 2023 under the Companies Act 2013, promoted by SPECTRA Organisation and NABARD Bank. 'Pahchan' means Identity — giving 200 rural leather artisans in Alwar the rightful brand, democratic ownership, and sustainable livelihoods they deserve."
        image={womenShgPledge}
        alt="Pahchan artisan shareholders and SPECTRA leaders gathered at the community meeting in Alwar"
        badgeText="Promoted by SPECTRA Organisation & NABARD Bank"
      />

      {/* ═══════════════════════ Legal & Institutional Credentials Card ═══════════════════════ */}
      <section className="shell -mt-10 relative z-10 mb-16">
        <div className="surface-card rounded-2xl border border-gold/30 p-6 sm:p-10 shadow-2xl">
          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-border/80 pb-6">
            <div>
              <span className="eyebrow text-leather font-semibold">Institutional Standing</span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-foreground">
                Pahchan Ismailpur Leather Producer Company Limited
              </h2>
            </div>
            <div className="flex items-center gap-2 rounded-full bg-gold/10 px-4 py-2 text-xs font-bold text-leather border border-gold/40">
              <Award className="h-4 w-4 text-gold" /> Promoted by SPECTRA Organisation &amp; NABARD
              Bank
            </div>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {credentials.map((c) => (
              <div key={c.label} className="border-b border-border/60 pb-3">
                <dt className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  {c.label}
                </dt>
                <dd className="mt-1 text-sm sm:text-base font-semibold text-foreground">
                  {c.value}
                </dd>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center justify-between gap-4 rounded-xl bg-sand/40 p-4 text-xs text-muted-foreground border border-gold/20">
            <p>
              Official Correspondence:{" "}
              <a href={`mailto:${site.email}`} className="text-leather font-bold hover:underline">
                {site.email}
              </a>
            </p>
            <p>
              CEO Contact:{" "}
              <span className="font-bold text-foreground">
                {site.ceo.name} ({site.ceo.phone})
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ Timeline ═══════════════════════ */}
      <section className="shell section-y">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-leather flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-gold" />
            Our Journey
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            From Grassroots Action to a Registered Enterprise
          </h2>
          <p className="mt-4 text-sm sm:text-base text-muted-foreground">
            How decades of dedicated community organizing by SPECTRA Organisation and institutional
            backing from NABARD Bank built Rajasthan's leading leather OFPO.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {timeline.map((item, idx) => (
            <Reveal key={item.year} delay={idx * 0.06}>
              <div className="surface-card rounded-xl p-6 border border-gold/20 h-full flex flex-col justify-between hover:border-gold/50 transition-all">
                <div>
                  <span className="font-display text-3xl font-bold text-gold">{item.year}</span>
                  <h3 className="mt-3 font-display text-xl font-bold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-xs leading-relaxed text-muted-foreground">{item.body}</p>
                </div>
                <div className="mt-6 pt-3 border-t border-border/60">
                  <span className="text-[0.62rem] text-leather font-semibold uppercase tracking-wider">
                    Milestone 0{idx + 1}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ CFC Infrastructure & FDDI Noida Exposure ═══════════════════════ */}
      <section className="bg-sand/30 border-y border-gold/20 py-20 md:py-28">
        <div className="shell">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="eyebrow text-leather flex items-center justify-center gap-2">
              <span className="h-px w-6 bg-gold" />
              Technology &amp; Design Modernization
              <span className="h-px w-6 bg-gold" />
            </span>
            <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
              Modern Machinery Honouring Ancestral Hands
            </h2>
            <p className="mt-4 text-sm sm:text-base text-muted-foreground">
              Pahchan combines centuries of hand-stitching with our Kishangarh Bas Common Facility
              Centre (CFC) and specialized technical training from FDDI Noida.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Reveal>
              <div className="surface-card rounded-2xl p-8 border border-gold/25 h-full hover:border-gold/50 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold mb-5">
                  <Factory className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Common Facility Centre (CFC)
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Established on 7th December 2023 at Kishangarh Bas. Features high-grade Head
                  Clicker sole cutting, sole stitching, skiving, and post-bed single needle machines
                  available to all member artisans.
                </p>
                <div className="mt-6 pt-4 border-t border-border/80 flex items-center gap-2 text-xs font-semibold text-leather">
                  <MapPin className="h-3.5 w-3.5 text-gold" /> Kishangarh Bas, Alwar
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.08}>
              <div className="surface-card rounded-2xl p-8 border border-gold/25 h-full hover:border-gold/50 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold mb-5">
                  <GraduationCap className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  FDDI Noida Exposure
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  35 key artisans underwent intensive technical training at Footwear Design &amp;
                  Development Institute (FDDI), Noida — mastering ergonomic footwear lasts, hygienic
                  leather processing, and modern packaging.
                </p>
                <div className="mt-6 pt-4 border-t border-border/80 flex items-center gap-2 text-xs font-semibold text-leather">
                  <Award className="h-3.5 w-3.5 text-gold" /> 35 Master Artisans Trained
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.16}>
              <div className="surface-card rounded-2xl p-8 border border-gold/25 h-full hover:border-gold/50 transition-all duration-300">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-gold/15 text-gold mb-5">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Democratic Producer Ownership
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  199 contributing shareholders from SC &amp; ST communities, 92 female craftswomen,
                  and an elected 5-member Board of Directors ensuring 100% of company earnings
                  directly uplift artisan households.
                </p>
                <div className="mt-6 pt-4 border-t border-border/80 flex items-center gap-2 text-xs font-semibold text-leather">
                  <ShieldCheck className="h-3.5 w-3.5 text-gold" /> 100% SC/ST Equity Ownership
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ═══════════════════════ Values & Commitments ═══════════════════════ */}
      <section className="shell section-y">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="eyebrow text-leather flex items-center justify-center gap-2">
            <span className="h-px w-6 bg-gold" />
            Our Core Principles
            <span className="h-px w-6 bg-gold" />
          </span>
          <h2 className="mt-4 font-display text-3xl sm:text-4xl lg:text-5xl">
            Four Commitments Guiding Every Decision
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {values.map((v, i) => (
            <Reveal key={v.title} delay={i * 0.08}>
              <div className="surface-card rounded-2xl p-8 border border-gold/20 hover:border-gold/50 transition-colors">
                <div className="flex items-center gap-3">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold/15 text-xs font-bold text-gold">
                    0{i + 1}
                  </span>
                  <h3 className="font-display text-2xl font-bold text-foreground">{v.title}</h3>
                </div>
                <p className="mt-4 text-sm sm:text-base leading-relaxed text-muted-foreground">
                  {v.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ═══════════════════════ Life in the Clusters — Documentary Chronicle ═══════════════════════ */}
      <section className="band-ink section-y-lg relative grain border-t border-gold/20">
        <div className="shell relative z-[3]">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-14">
              <p className="eyebrow text-gold font-semibold">
                Life in the Clusters · Documentary Chronicle
              </p>
              <span className="gold-rule mt-3 mx-auto" />
              <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem] text-cream">
                The Community Behind <span className="italic text-gold font-normal">Pahchan</span>
              </h2>
              <p className="mt-4 text-base leading-[1.75] text-cream/70 sm:text-lg">
                Verified documentary moments from the workshops, meetings, and exhibitions across
                Alwar and Kishangarh Bas.
              </p>
            </div>
          </Reveal>

          {/* Equal Sized Uniform Photo Grid (No White Gaps) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {aboutPageImages.map((img, i) => (
              <Reveal key={img.src} delay={i * 0.08}>
                <div className="group img-hover-overlay rounded-2xl overflow-hidden border border-gold/25 bg-card/40 shadow-lg aspect-[4/3] relative">
                  <img
                    src={img.src}
                    alt={img.alt}
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="img-hover-text">
                    <span className="eyebrow text-gold text-[0.62rem] font-bold">
                      {img.category}
                    </span>
                    <h3 className="mt-1 font-display text-lg font-bold text-cream">{img.title}</h3>
                    {img.caption && (
                      <p className="mt-1 text-xs text-cream/75 line-clamp-2">{img.caption}</p>
                    )}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════ Bottom Callout Strip ═══════════════════════ */}
      <section className="bg-espresso text-cream border-t border-gold/30 py-16 sm:py-20">
        <div className="shell flex flex-col items-center text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5">
            <span className="text-xs font-bold tracking-wider text-gold uppercase">
              Promoted by SPECTRA Organisation and NABARD Bank
            </span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl text-cream">
            Partner With Our Artisan Collective
          </h2>
          <p className="text-cream/70 text-sm sm:text-base leading-relaxed">
            Whether you are an ethical retailer seeking bulk craft supplies, an institution
            exploring artisan welfare, or an enthusiast wanting bespoke shoes — connect with us
            directly.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 pt-2">
            <Link to="/ofpo" className="btn-gold rounded-sm inline-flex items-center gap-2">
              Explore the Craft Process <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/contact"
              className="btn-ghost rounded-sm border-gold/30 text-cream hover:bg-gold hover:text-ink"
            >
              Contact the Leadership Team
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
