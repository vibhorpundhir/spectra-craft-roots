import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import mark from "@/assets/spectra-mark.png.asset.json";

export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-center gap-3", className)}
      aria-label="SPECTRA home"
    >
      <img
        src={mark.url}
        alt="SPECTRA logo — three figures forming a circle"
        width={40}
        height={40}
        className="h-9 w-auto shrink-0 transition-transform duration-500 group-hover:scale-105"
      />
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-2xl tracking-[0.28em]",
            inverted ? "text-primary-foreground" : "text-foreground",
          )}
        >
          SPECTRA
        </span>
        <span
          className={cn(
            "eyebrow mt-1 text-[0.55rem] tracking-[0.3em]",
            inverted ? "text-primary-foreground/70" : "text-muted-foreground",
          )}
        >
          Since 1996 · Alwar
        </span>
      </span>
    </Link>
  );
}
