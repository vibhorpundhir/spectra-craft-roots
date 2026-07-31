import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Farms, Workshops & Community | SPECTRA" },
      {
        name: "description",
        content:
          "Photographs from SPECTRA's fields, dairy collection centres, leather workshops, training sessions and community programmes.",
      },
      { property: "og:title", content: "Gallery | SPECTRA" },
      {
        property: "og:description",
        content: "Inside the farms and workshops behind SPECTRA's products.",
      },
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

      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div
          className="flex flex-wrap gap-3 border-y border-border py-6"
          role="group"
          aria-label="Filter gallery"
        >
          <button type="button" onClick={() => setFilter(null)} className={chip(filter === null)}>
            All
          </button>
          {galleryCategories.map((c) => (
            <button key={c} type="button" onClick={() => setFilter(c)} className={chip(filter === c)}>
              {c}
            </button>
          ))}
        </div>

        <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <Reveal key={item.alt} delay={(i % 6) * 0.05}>
              <figure className="overflow-hidden bg-sand">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width={1200}
                  height={900}
                  className="aspect-4/3 w-full object-cover transition-transform duration-[1200ms] ease-out hover:scale-105"
                />
              </figure>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
