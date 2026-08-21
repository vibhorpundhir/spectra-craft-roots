import { Link } from "@tanstack/react-router";
import { navigation, site } from "@/data/site";
import spectraLogo from "@/assets/spectra-logo.jpg";

export function Footer() {
  return (
    <footer className="band-ink mt-0">
      <div className="shell grid gap-12 py-16 md:grid-cols-12 md:py-20">
        <div className="md:col-span-5">
          <Link to="/" className="inline-flex items-center gap-3.5">
            <img
              src={spectraLogo}
              alt="SPECTRA"
              width={160}
              height={160}
              decoding="async"
              className="h-14 w-14 rounded-full bg-white p-1 object-contain"
            />
            <div className="flex flex-col">
              <span className="font-display text-2xl font-bold tracking-tight text-cream">
                SPECTRA
              </span>
              <span className="eyebrow -mt-1 text-[0.6rem] text-cream/60">
                Society for Public Education &amp; Rural Action
              </span>
            </div>
          </Link>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-cream/65">
            Society for Public Education Cultural Training and Rural Action — a voluntary,
            non-profit organisation working since 1996 with rural families across Rajasthan.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="eyebrow link-underline text-cream/55 transition-colors hover:text-gold"
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
                  className="text-sm text-cream/65 transition-colors hover:text-cream"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-4">
          <h2 className="eyebrow text-gold">Contact</h2>
          <span className="gold-rule mt-4 opacity-40" />
          <address className="mt-5 space-y-3 text-sm not-italic leading-relaxed text-cream/65">
            <p>{site.address}</p>
            <p>
              <a className="transition-colors hover:text-cream" href={site.phoneHref}>
                {site.phone}
              </a>
            </p>
            <p>
              <a className="transition-colors hover:text-cream" href={site.landlineHref}>
                {site.landline}
              </a>
            </p>
            <p>
              <a className="transition-colors hover:text-cream" href={`mailto:${site.email}`}>
                {site.email}
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="border-t border-cream/10">
        <div className="shell flex flex-col gap-3 py-6 text-xs text-cream/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} SPECTRA. All rights reserved.</p>
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
