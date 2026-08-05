import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import lockup from "@/assets/spectra-lockup.png.asset.json";

export function Logo({ className }: { className?: string; inverted?: boolean }) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex shrink-0 items-center", className)}
      aria-label="SPECTRA home"
    >
      <img
        src={lockup.url}
        alt="SPECTRA"
        width={881}
        height={827}
        decoding="async"
        className="h-14 w-auto transition-transform duration-200 group-hover:scale-[1.03] sm:h-16"
      />
    </Link>
  );
}
