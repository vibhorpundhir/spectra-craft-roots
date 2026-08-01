import { Link } from "@tanstack/react-router";
import { navigation, site } from "@/data/site";

export function Footer() {
  return (
    <footer className="mt-24 bg-ink text-cream">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={mark.url}
              alt="SPECTRA logo"
              width={44}
              height={44}
              className="h-10 w-auto shrink-0"
            />
            <p className="font-display text-2xl tracking-[0.3em]">SPECTRA</p>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-cream/70">
            Society for Public Education Cultural Training and Rural Action — a voluntary,
            non-profit organisation working since 1996 with rural families across Rajasthan.
          </p>
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {site.social.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer noopener"
                  className="eyebrow text-cream/60 transition-colors hover:text-gold"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h2 className="eyebrow text-gold">Explore</h2>
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
        </div>

        <div>
          <h2 className="eyebrow text-gold">Contact</h2>
          <address className="mt-5 space-y-3 text-sm not-italic text-cream/70">
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
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-6 text-xs text-cream/50 sm:flex-row sm:items-center sm:justify-between sm:px-8">
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
