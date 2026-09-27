import type { ReactNode } from "react";
import { Award, Building2, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  tone = "leather",
  children,
  badgeText = "Promoted by SPECTRA Organisation & NABARD Bank",
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  alt?: string;
  tone?: "field" | "leather" | "dark";
  children?: ReactNode;
  badgeText?: string;
}) {
  const isDark = tone === "dark";

  return (
    <section
      className={cn(
        "relative overflow-hidden border-b border-gold/25",
        isDark
          ? "bg-espresso text-cream grain"
          : "bg-gradient-to-b from-card via-parchment/70 to-background text-foreground",
      )}
    >
      {/* Decorative Gold Trim Top Line */}
      <div
        className="h-[2px] w-full"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, var(--color-gold) 35%, var(--color-ember) 50%, var(--color-gold) 65%, transparent 100%)",
        }}
      />

      {/* Ambient warm radial glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -right-20 -top-20 h-96 w-96 rounded-full bg-gold/15 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 bottom-0 h-80 w-80 rounded-full bg-leather/15 blur-3xl"
      />

      <div
        className={cn(
          "shell relative grid items-center gap-12 py-16 sm:py-20 md:py-24 lg:gap-16",
          image && "lg:grid-cols-12",
        )}
      >
        <div className={cn(image ? "lg:col-span-7" : "max-w-4xl")}>
          {/* Institutional Credential Pill */}
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold/10 px-4 py-1.5 backdrop-blur-sm shadow-sm">
            <span className="flex h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
            <span className="text-[0.62rem] font-bold tracking-widest text-gold uppercase">
              {badgeText}
            </span>
          </div>

          <p
            className={cn(
              "eyebrow flex items-center gap-2 font-semibold",
              isDark ? "text-gold" : "text-leather",
            )}
          >
            <span className="h-px w-6 bg-gold/70" />
            {eyebrow}
          </p>

          <h1
            className={cn(
              "mt-5 font-display text-[2.5rem] leading-[1.04] sm:text-5xl lg:text-[3.75rem] text-balance font-medium",
              isDark ? "text-cream" : "text-foreground",
            )}
          >
            {title}
          </h1>

          <p
            className={cn(
              "mt-6 text-base leading-[1.8] sm:text-lg max-w-2xl text-pretty",
              isDark ? "text-cream/80" : "text-muted-foreground",
            )}
          >
            {intro}
          </p>

          {children ? <div className="mt-8">{children}</div> : null}
        </div>

        {image ? (
          <div className="lg:col-span-5">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="corner-brackets relative aspect-4/3 overflow-hidden rounded-2xl bg-sand/30 shadow-2xl border border-gold/30">
                <img
                  src={image}
                  alt={alt ?? ""}
                  fetchPriority="high"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                />
                <div
                  aria-hidden
                  className="absolute inset-0 bg-gradient-to-t from-ink/75 via-transparent to-transparent pointer-events-none"
                />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[0.65rem] text-cream/95 font-medium tracking-wider uppercase bg-ink/80 backdrop-blur-md px-3.5 py-2 rounded-sm border border-gold/30">
                  <span className="flex items-center gap-1.5">
                    <Sparkles className="h-3 w-3 text-gold" /> Authentic Handcraft
                  </span>
                  <span className="text-gold font-bold">Alwar Cluster</span>
                </div>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </section>
  );
}
