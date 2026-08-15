import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FilterChips } from "@/components/FilterChips";
import { Lightbox } from "@/components/Lightbox";
import { galleryCategories, galleryItems } from "@/data/gallery";


export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Farmers, Women, Artisans & Community | SPECTRA" },
      {
        name: "description",
        content:
          "Documentary photographs of the farmers, women's self help groups, dairy and spice work, leather artisans, training sessions and community programmes behind SPECTRA.",
      },
      { property: "og:title", content: "Gallery | SPECTRA" },
      {
        property: "og:description",
        content:
          "The people behind every product — in the fields, the courtyards and the workshops.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/gallery" },
    ],
    links: [{ rel: "canonical", href: "/gallery" }],
  }),
  component: Gallery,
});

function Gallery() {
  const [filter, setFilter] = useState<string | null>(null);
  const visible = filter ? galleryItems.filter((i) => i.category === filter) : galleryItems;

  const chip = (active: boolean) =>
    cn(
      "eyebrow border px-5 py-2.5 transition-colors",
      active
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground",
    );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Faces, hands and the days that build a livelihood."
        intro="A documentary record of the farmers, women's groups, artisans and communities SPECTRA works alongside — the people you are really looking at when you see a product."
      />

      <section className="shell pb-20 md:pb-28">
        <div
          className="flex flex-wrap gap-3 border-y border-border py-6"
          role="group"
          aria-label="Filter gallery"
        >
          <button type="button" onClick={() => setFilter(null)} className={chip(filter === null)}>
            All
          </button>
          {galleryCategories.map((c) => (
            <button
              key={c}
              type="button"
              onClick={() => setFilter(c)}
              className={chip(filter === c)}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal key={item.alt} delay={(i % 6) * 0.05}>
              <figure className="frame frame-hover group relative aspect-4/3">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  decoding="async"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-[1] bg-gradient-to-t from-ink/85 via-ink/25 to-transparent opacity-80 transition-opacity duration-200 group-hover:opacity-100"
                />
                <figcaption className="absolute inset-x-0 bottom-0 z-[2] p-5">
                  <span className="eyebrow text-gold">{item.category}</span>
                  <p className="mt-2 max-w-prose translate-y-1 text-sm leading-snug text-cream opacity-0 transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100">
                    {item.alt}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
