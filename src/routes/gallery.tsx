import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FilterChips } from "@/components/FilterChips";
import { Lightbox } from "@/components/Lightbox";
import { galleryCategories, galleryItems } from "@/data/gallery";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Gallery — Artisans, Craft Process & Handmade Heritage | Pahchan Leather Work" },
      {
        name: "description",
        content:
          "Documentary photographs of the leather artisans, craft process, finished juti and shoes, workshops and community programmes behind Pahchan Leather Work.",
      },
      { property: "og:title", content: "Gallery | Pahchan Leather Work" },
      {
        property: "og:description",
        content:
          "The artisans behind every piece — in the workshops, the exhibitions and the communities.",
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
  const [filter, setFilter] = useState<string>("all");
  const [active, setActive] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter],
  );

  const options = useMemo(
    () => [{ key: "all", label: "All" }, ...galleryCategories.map((c) => ({ key: c, label: c }))],
    [],
  );

  return (
    <>
      <PageHero
        eyebrow="Gallery"
        title="Hands, heritage and the craft that connects them."
        intro="A documentary record of the artisans, workshops and communities SPECTRA works alongside — the people you are really looking at when you see a piece of handmade craft."
        tone="leather"
      />

      <section className="shell pb-20 md:pb-28">
        <div className="border-y border-border py-6">
          <FilterChips
            options={options}
            value={filter}
            onChange={(k) => {
              setFilter(k);
              setActive(null);
            }}
            label="Filter gallery"
            layoutId="gallery-filter"
          />
        </div>

        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "photograph" : "photographs"}
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <button
              key={`${item.category}-${item.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open photograph: ${item.alt}`}
              className="press group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <figure className="frame frame-hover relative aspect-4/3 overflow-hidden bg-sand/30">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={i < 6 ? "eager" : "lazy"}
                  decoding="async"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 z-[1] bg-linear-to-t from-ink/90 via-ink/25 to-transparent opacity-75 transition-opacity duration-300 group-hover:opacity-95"
                />
                <figcaption className="absolute inset-x-0 bottom-0 z-[2] p-5">
                  <span className="eyebrow text-gold">{item.category}</span>
                  <p className="mt-2 max-w-prose text-sm leading-snug text-cream/90 transition-all duration-300">
                    {item.alt}
                  </p>
                </figcaption>
              </figure>
            </button>
          ))}
        </div>
      </section>

      <Lightbox
        items={visible}
        index={active}
        onClose={() => setActive(null)}
        onIndexChange={setActive}
      />
    </>
  );
}
