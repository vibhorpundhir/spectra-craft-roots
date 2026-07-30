import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";

export function Logo({ className, inverted }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex items-baseline gap-2", className)}
      aria-label="SPECTRA home"
    >
      <span
        className={cn(
          "font-display text-2xl tracking-[0.3em]",
          inverted ? "text-primary-foreground" : "text-foreground",
        )}
      >
        SPECTRA
      </span>
      <span className="h-1.5 w-1.5 translate-y-[-2px] rounded-full bg-gold transition-transform duration-500 group-hover:scale-150" />
    </Link>
  );
}
