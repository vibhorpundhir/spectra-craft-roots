import { Link } from "@tanstack/react-router";
import { cn } from "@/lib/utils";
import pahchanLogo from "@/assets/pahchan-logo.jpg";

export function Logo({
  className,
  inverted = false,
}: {
  className?: string;
  inverted?: boolean;
}) {
  return (
    <Link
      to="/"
      className={cn("group inline-flex shrink-0 items-center gap-3", className)}
      aria-label="Pahchan Leather Work home"
    >
      <div className="relative shrink-0">
        <img
          src={pahchanLogo}
          alt="Pahchan Leather Work Logo"
          width={160}
          height={160}
          loading="eager"
          fetchPriority="high"
          decoding="async"
          className="h-12 w-12 rounded-full object-cover bg-white ring-2 ring-leather/30 shadow-sm transition-all duration-300 group-hover:scale-105 group-hover:ring-leather sm:h-14 sm:w-14"
        />
        <span
          className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-leather text-[8px] font-bold text-cream ring-1 ring-white"
          title="Established 2023"
        >
          '23
        </span>
      </div>
      <div className="flex flex-col">
        <span
          className={cn(
            "font-display text-xl font-bold tracking-wider transition-colors sm:text-2xl leading-none",
            inverted
              ? "text-cream group-hover:text-gold"
              : "text-foreground group-hover:text-leather"
          )}
        >
          PAHCHAN
        </span>
        <div className="mt-0.5 flex flex-col">
          <span
            className={cn(
              "eyebrow text-[0.62rem] font-bold tracking-widest",
              inverted ? "text-gold" : "text-leather"
            )}
          >
            LEATHER WORK
          </span>
          <span
            className={cn(
              "text-[0.58rem] font-medium tracking-tight mt-0.5 leading-tight",
              inverted ? "text-cream/70" : "text-muted-foreground"
            )}
          >
            Promoted by SPECTRA Organisation &amp; NABARD Bank
          </span>
        </div>
      </div>
    </Link>
  );
}
