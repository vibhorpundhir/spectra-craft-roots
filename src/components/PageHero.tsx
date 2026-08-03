import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  tone = "field",
  children,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string;
  alt?: string;
  tone?: "field" | "leather";
  children?: ReactNode;
}) {
  return (
    <section className="band-cream relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-gold/10 blur-3xl"
      />
      <div className="shell relative grid items-center gap-10 py-16 md:py-24 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-6">
          <p className={cn("eyebrow", tone === "leather" ? "text-leather" : "text-primary")}>
            {eyebrow}
          </p>
          <span className="gold-rule mt-4" />
          <h1 className="mt-6 text-[2.5rem] leading-[1.02] sm:text-5xl lg:text-[4rem]">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-[1.8] text-muted-foreground sm:text-lg">
            {intro}
          </p>
          {children ? <div className="mt-9">{children}</div> : null}
        </div>
        {image ? (
          <div className="frame frame-hover aspect-4/3 lg:col-span-6">
            <img
              src={image}
              alt={alt ?? ""}
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
