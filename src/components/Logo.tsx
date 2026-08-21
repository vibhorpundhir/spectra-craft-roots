import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import spectraLogo from "@/assets/spectra-logo.jpg";

export function Logo({ className }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex shrink-0 items-center gap-3", className)}
      aria-label="SPECTRA home"
    >
      <img
        src={spectraLogo}
        alt="SPECTRA Logo"
        width={160}
        height={160}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className="h-12 w-12 rounded-full object-contain transition-transform duration-200 group-hover:scale-105 sm:h-14 sm:w-14"
      />
      <div className="flex flex-col">
        <span className="font-display text-2xl font-bold tracking-tight text-foreground transition-colors group-hover:text-primary sm:text-[1.75rem]">
          SPECTRA
        </span>
        <span className="eyebrow -mt-1 text-[0.6rem] text-muted-foreground">
          FPO &amp; OFPO · Alwar
        </span>
      </div>
    </Link>
  );
}
