import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X, ArrowRight, Phone, MessageCircle, Sparkles } from "lucide-react";
import { motion } from "motion/react";
import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ScrollProgress } from "./ScrollProgress";
import { navigation, site, whatsappLink } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    let frame = 0;
    const onScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(() => {
        frame = 0;
        setScrolled(window.scrollY > 20);
      });
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 transition-all duration-300">
      {/* Top Institutional Accreditation Utility Strip */}
      <div className="bg-espresso text-cream border-b border-gold/20 py-1.5 px-4 text-[0.62rem] tracking-wider">
        <div className="shell flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="flex h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="font-semibold text-gold/90 uppercase tracking-widest truncate">
              Promoted by SPECTRA Organisation &amp; NABARD Bank · 200 Artisans
            </span>
          </div>
          <div className="hidden sm:flex items-center gap-5 text-cream/75">
            <span className="text-[0.6rem] text-gold/80 font-medium">Alwar, Rajasthan</span>
            <span className="h-2.5 w-px bg-gold/25" />
            <a
              href={`tel:${site.phone}`}
              className="flex items-center gap-1.5 hover:text-gold transition-colors font-medium"
            >
              <Phone className="h-3 w-3 text-gold/80" />
              <span>{site.phone}</span>
            </a>
            <span className="h-2.5 w-px bg-gold/25" />
            <a
              href={whatsappLink(
                "Hello! I would like to enquire about Pahchan Leather Work handcrafted collections.",
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gold hover:text-cream transition-colors font-semibold"
            >
              <MessageCircle className="h-3 w-3" />
              <span>Artisan Concierge</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Luxury Navigation Bar */}
      <div
        className={cn(
          "relative transition-all duration-300 border-b backdrop-blur-xl",
          scrolled || open
            ? "bg-card/95 border-gold/25 shadow-[0_8px_30px_-12px_rgba(26,18,11,0.15)]"
            : "bg-card/90 border-gold/15 shadow-sm",
        )}
      >
        {/* Subtle gold hairline trim */}
        <div
          className="absolute top-0 inset-x-0 h-[1.5px]"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, var(--color-gold) 35%, var(--color-ember) 50%, var(--color-gold) 65%, transparent 100%)",
          }}
        />

        <div
          className={cn(
            "shell flex items-center justify-between transition-[height] duration-300",
            scrolled ? "h-16" : "h-20",
          )}
        >
          <Logo />

          <nav aria-label="Primary" className="hidden items-center gap-7 xl:gap-9 lg:flex">
            {navigation.map((item) => {
              const isActive =
                pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "eyebrow stitch-link relative flex items-center gap-1.5 transition-colors duration-200",
                    isActive ? "text-leather font-bold" : "text-foreground/75 hover:text-leather",
                  )}
                  activeOptions={{ exact: item.to === "/" }}
                >
                  {isActive && (
                    <span className="text-gold text-[0.65rem] leading-none animate-pulse">◆</span>
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className="btn-gold rounded-sm px-5 py-2.5 text-[0.62rem] shadow-sm hover:shadow-gold/20"
            >
              Enquire <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-foreground hover:text-leather transition-colors lg:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      <ScrollProgress />

      {/* Mobile Drawer */}
      {open ? (
        <nav
          aria-label="Mobile"
          className="fixed inset-x-0 bottom-0 top-[110px] overflow-y-auto border-t border-gold/20 bg-card/98 backdrop-blur-2xl lg:hidden z-40"
        >
          <div className="shell flex min-h-full flex-col py-8">
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gold/15">
              <Sparkles className="h-4 w-4 text-gold" />
              <span className="eyebrow text-gold text-[0.65rem]">Handcrafted in Rajasthan</span>
            </div>

            <ul className="space-y-1">
              {navigation.map((item, i) => {
                const isActive =
                  pathname === item.to || (item.to !== "/" && pathname.startsWith(item.to));
                return (
                  <li key={item.to} className="border-b border-border/40">
                    <motion.div
                      initial={{ opacity: 0, x: -14 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: 0.03 * i, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <Link
                        to={item.to}
                        className={cn(
                          "flex items-center justify-between py-4 font-display text-[1.65rem] leading-none group",
                          isActive
                            ? "text-leather font-bold"
                            : "text-foreground hover:text-leather",
                        )}
                        activeOptions={{ exact: item.to === "/" }}
                      >
                        <span className="flex items-center gap-2.5">
                          {isActive && <span className="text-gold text-base">◆</span>}
                          {item.label}
                        </span>
                        <ArrowRight className="h-4 w-4 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </Link>
                    </motion.div>
                  </li>
                );
              })}
            </ul>

            <div className="mt-8 space-y-3">
              <Link to="/contact" className="btn-gold w-full rounded-sm text-center py-3.5">
                Send Direct Enquiry <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={whatsappLink(
                  "Hello! I would like to connect with Pahchan Leather Work artisan collective.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost w-full rounded-sm text-center py-3 flex items-center justify-center gap-2 border-leather/30 text-leather"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp Concierge
              </a>
            </div>

            <div className="mt-8 pt-6 border-t border-border/50 text-xs text-muted-foreground space-y-2">
              <p className="font-semibold text-foreground">
                Pahchan Ismailpur Leather Producer Company Limited
              </p>
              <p>Promoted by SPECTRA Organisation &amp; NABARD Bank</p>
              <p className="text-[0.68rem] text-leather font-medium">
                Common Facility Centre (CFC) · Ismailpur, Kishangarh Bas, Alwar
              </p>
            </div>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
