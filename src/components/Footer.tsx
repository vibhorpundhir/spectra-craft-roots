import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin, Mail, Phone, Building2, Award, ExternalLink } from "lucide-react";
import { navigation, site } from "@/data/site";
import pahchanLogo from "@/assets/pahchan-logo.jpg";

export function Footer() {
  return (
    <footer className="relative overflow-hidden" style={{ backgroundColor: "oklch(0.14 0.02 48)" }}>
      {/* Decorative top border */}
      <div
        className="h-[2px]"
        style={{
          background: "linear-gradient(90deg, transparent, var(--color-gold), transparent)",
        }}
      />

      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-24 lg:gap-16">
        {/* Brand Column */}
        <div className="md:col-span-4">
          <Link to="/" className="inline-flex items-center gap-3.5 group">
            <div className="relative shrink-0">
              <img
                src={pahchanLogo}
                alt="Pahchan Leather Work"
                width={160}
                height={160}
                decoding="async"
                className="h-16 w-16 rounded-full bg-white ring-2 ring-gold/40 p-0.5 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-1 -right-1 flex h-5 w-5 items-center justify-center rounded-full bg-gold text-[9px] font-bold text-ink ring-2 ring-ink">
                '23
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-wider text-cream group-hover:text-gold transition-colors leading-none">
                PAHCHAN
              </span>
              <span className="eyebrow -mt-0.5 text-[0.62rem] tracking-widest text-gold font-semibold">
                LEATHER WORK
              </span>
            </div>
          </Link>

          <p className="mt-5 text-[0.68rem] font-semibold text-gold/80 tracking-wider uppercase">
            {site.legalName}
          </p>
          <div className="mt-2 space-y-1">
            <p className="text-[0.65rem] text-cream/40 flex items-center gap-1.5">
              <Building2 className="h-3 w-3" /> CIN: {site.cin}
            </p>
            <p className="text-[0.65rem] text-cream/40">
              GSTIN: {site.gstin} · Registered: {site.incorporationDate}
            </p>
          </div>

          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/55">
            Promoted by SPECTRA Organisation and NABARD Bank, uniting 200 rural artisans and 199
            SC/ST shareholders to preserve generational leather craft with dignified livelihoods.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-5 gap-y-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="eyebrow link-underline text-cream/50 transition-colors hover:text-gold text-[0.6rem]"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Heritage & Story Column */}
        <div className="md:col-span-2">
          <h2 className="eyebrow text-gold text-[0.62rem]">Heritage & Story</h2>
          <span className="gold-rule mt-3 opacity-40" />
          <ul className="mt-5 space-y-3">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-cream/60 transition-colors hover:text-cream inline-flex items-center gap-1 group"
                >
                  {item.label}
                  <ArrowRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity -translate-x-1 group-hover:translate-x-0 transition-transform" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Artisan Centres */}
        <div className="md:col-span-3">
          <h2 className="eyebrow text-gold text-[0.62rem]">Artisan Centres</h2>
          <span className="gold-rule mt-3 opacity-40" />
          <div className="mt-5 space-y-4">
            <div>
              <p className="text-xs font-semibold text-cream/80 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-gold/60" /> Head Office
              </p>
              <p className="mt-1 text-xs text-cream/50 leading-relaxed">{site.address}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-cream/80 uppercase tracking-wider flex items-center gap-1.5">
                <MapPin className="h-3 w-3 text-gold/60" /> Common Facility Centre
              </p>
              <p className="mt-1 text-xs text-cream/50 leading-relaxed">{site.cfcAddress}</p>
            </div>

            <div className="pt-2">
              <p className="text-[0.62rem] font-bold text-gold/70 uppercase tracking-wider">
                Institutional Promoters
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                <span className="trust-seal rounded-full text-[0.55rem]">
                  <Building2 className="h-2.5 w-2.5" /> SPECTRA Organisation
                </span>
                <span className="trust-seal rounded-full text-[0.55rem]">
                  <Award className="h-2.5 w-2.5" /> NABARD Bank
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Column */}
        <div className="md:col-span-3">
          <h2 className="eyebrow text-gold text-[0.62rem]">Direct Contact</h2>
          <span className="gold-rule mt-3 opacity-40" />
          <address className="mt-5 space-y-4 text-sm not-italic leading-relaxed text-cream/60">
            <div>
              <p className="text-[0.62rem] font-bold text-cream/70 uppercase tracking-wider flex items-center gap-1.5">
                <Mail className="h-3 w-3 text-gold/60" /> Company Email
              </p>
              <a
                className="mt-1 block text-gold font-medium text-sm hover:text-cream transition-colors"
                href={`mailto:${site.email}`}
              >
                {site.email}
              </a>
            </div>

            <div>
              <p className="text-[0.62rem] font-bold text-cream/70 uppercase tracking-wider flex items-center gap-1.5">
                <Phone className="h-3 w-3 text-gold/60" /> Leadership
              </p>
              <p className="mt-1 text-xs text-cream/65">
                CEO — {site.ceo.name}:{" "}
                <a
                  className="hover:text-gold text-cream/80 transition-colors"
                  href={site.ceoPhoneHref}
                >
                  {site.ceoPhone}
                </a>
              </p>
              <p className="text-xs text-cream/65">
                Facilitator — {site.facilitator.name}:{" "}
                <a
                  className="hover:text-gold text-cream/80 transition-colors"
                  href={site.phoneHref}
                >
                  {site.phone}
                </a>
              </p>
            </div>

            <p className="pt-1">
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:text-cream transition-colors group"
              >
                <MapPin className="h-3.5 w-3.5" />
                View on Google Maps
                <ExternalLink className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </p>
          </address>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        style={{ borderTopColor: "color-mix(in oklab, var(--color-gold) 15%, transparent)" }}
        className="border-t"
      >
        <div className="shell flex flex-col gap-3 py-6 text-xs text-cream/40 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.legalName}. Promoted by SPECTRA Organisation and
            NABARD Bank.
          </p>
          <div className="flex gap-6">
            <Link to="/privacy" className="transition-colors hover:text-cream">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-cream">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
