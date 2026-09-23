import { Link } from "@tanstack/react-router";
import { navigation, site } from "@/data/site";
import pahchanLogo from "@/assets/pahchan-logo.jpg";

export function Footer() {
  return (
    <footer className="band-ink mt-0">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center gap-3.5 group">
            <div className="relative shrink-0">
              <img
                src={pahchanLogo}
                alt="Pahchan Leather Work"
                width={160}
                height={160}
                decoding="async"
                className="h-14 w-14 rounded-full bg-white ring-2 ring-gold/40 p-0.5 object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-gold text-[8px] font-bold text-ink ring-1 ring-ink">
                '23
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-wider text-cream group-hover:text-gold transition-colors">
                PAHCHAN
              </span>
              <span className="eyebrow -mt-0.5 text-[0.65rem] tracking-widest text-gold font-semibold">
                LEATHER WORK <span className="text-cream/60 font-normal">· Supported by NABARD</span>
              </span>
            </div>
          </Link>

          <p className="mt-4 text-xs font-medium text-gold/90 tracking-wide uppercase">
            {site.legalName}
          </p>
          <p className="mt-1 text-[0.7rem] text-cream/50">
            CIN: {site.cin} · Registered: {site.incorporationDate}
          </p>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            Promoted by SPECTRA and supported by NABARD, uniting 200 rural artisans and 199 SC/ST
            shareholders across Ismailpur &amp; Kishangarh Bas to preserve generational leather craft
            with dignified livelihoods.
          </p>

          <ul className="mt-7 flex flex-wrap gap-x-6 gap-y-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="eyebrow link-underline text-cream/60 transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h2 className="eyebrow text-gold">Explore</h2>
          <span className="gold-rule mt-4 opacity-40" />
          <ul className="mt-5 space-y-3">
            {navigation.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  className="text-sm text-cream/70 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="mt-8 border-t border-cream/10 pt-4">
            <p className="text-xs font-semibold text-gold">Institutional Backing</p>
            <p className="mt-1 text-xs text-cream/60">NABARD Supported OFPO Project</p>
            <p className="text-xs text-cream/60">POPI: SPECTRA Organisation, Alwar</p>
            <p className="mt-1 text-[0.7rem] text-cream/45">GSTIN: {site.gstin}</p>
          </div>
        </div>

        <div className="md:col-span-4">
          <h2 className="eyebrow text-gold">Contact &amp; Offices</h2>
          <span className="gold-rule mt-4 opacity-40" />
          <address className="mt-5 space-y-3.5 text-sm not-italic leading-relaxed text-cream/70">
            <div>
              <p className="text-xs font-semibold text-cream/90 uppercase tracking-wider">Company Email</p>
              <a className="transition-colors hover:text-gold text-gold font-medium" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </div>

            <div>
              <p className="text-xs font-semibold text-cream/90 uppercase tracking-wider">Leadership &amp; Facilitation</p>
              <p className="text-xs text-cream/80">
                CEO ({site.ceo.name}):{" "}
                <a className="hover:text-gold text-cream/90" href={site.ceoPhoneHref}>
                  {site.ceoPhone}
                </a>
              </p>
              <p className="text-xs text-cream/80">
                OFPO Facilitator ({site.facilitator.name}):{" "}
                <a className="hover:text-gold text-cream/90" href={site.phoneHref}>
                  {site.phone}
                </a>
              </p>
            </div>

            <div>
              <p className="text-xs font-semibold text-cream/90 uppercase tracking-wider">Head / Promoting Office</p>
              <p className="text-xs text-cream/75">{site.address}</p>
            </div>

            <div>
              <p className="text-xs font-semibold text-cream/90 uppercase tracking-wider">Common Facility Centre (CFC)</p>
              <p className="text-xs text-cream/75">{site.cfcAddress}</p>
            </div>

            <p className="pt-2">
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-gold hover:underline"
              >
                <span>📍 View Location on Google Maps</span>
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} {site.legalName}. Supported by NABARD &amp; Promoted by SPECTRA.</p>
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
