import { Link, useRouterState } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { motion } from "motion/react";

import { useEffect, useState } from "react";
import { Logo } from "./Logo";
import { ScrollProgress } from "./ScrollProgress";
import { navigation } from "@/data/site";
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
        setScrolled(window.scrollY > 16);
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
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[background-color,border-color,box-shadow] duration-200",
        // Blur is expensive on touch devices — solid background there, blur only on fine-pointer screens.
        scrolled || open
          ? "border-border bg-background shadow-[0_1px_24px_-16px_var(--color-ink)] lg:bg-background/95 lg:backdrop-blur-md"
          : "border-transparent bg-background lg:bg-background/70 lg:backdrop-blur-sm",
      )}
    >
      <div
        className={cn(
          "shell flex items-center justify-between transition-[height] duration-200",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Logo />

        <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="eyebrow stitch-link text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground", "data-status": "active" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Link to="/contact" className="btn-ghost !px-5 !py-2.5">
            Enquire
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center text-foreground lg:hidden"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <ScrollProgress />

      {open ? (
        <nav
          aria-label="Mobile"
          className={cn(
            "fixed inset-x-0 bottom-0 overflow-y-auto border-t border-border bg-background lg:hidden",
            scrolled ? "top-16" : "top-20",
          )}
        >
          <div className="shell flex min-h-full flex-col py-6">
            <ul>
              {navigation.map((item, i) => (
                <li key={item.to} className="border-b border-border/60">
                  <motion.div
                    initial={{ opacity: 0, x: -14 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.03 * i, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      to={item.to}
                      className="block py-4 font-display text-[1.75rem] leading-none text-foreground"
                      activeProps={{ className: "text-primary" }}
                      activeOptions={{ exact: item.to === "/" }}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
            <Link to="/contact" className="btn-primary mt-8 w-full">
              Enquire
            </Link>
            <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
              Pahchan Leather Work (Est. 2023) · An Initiative by SPECTRA · Alwar, Rajasthan
            </p>
          </div>
        </nav>
      ) : null}
    </header>
  );
}
