import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  alt,
  tone = "field",
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
    <section className="relative overflow-hidden bg-cream">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-16 sm:px-8 md:py-24 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className={cn("eyebrow", tone === "leather" ? "text-leather" : "text-primary")}>
            {eyebrow}
          </p>
          <h1 className="mt-5 text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">{title}</h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground">{intro}</p>
        </div>
        {image ? (
          <div className="overflow-hidden">
            <img
              src={image}
              alt={alt ?? ""}
              width={1200}
              height={900}
              className="aspect-4/3 w-full object-cover"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
