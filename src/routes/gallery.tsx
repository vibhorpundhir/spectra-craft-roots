import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Award, Camera, Eye, Filter } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FilterChips } from "@/components/FilterChips";
import { Lightbox } from "@/components/Lightbox";
import { galleryCategories, galleryItems } from "@/data/gallery";
import ofpoExhibitionArtisan from "@/assets/real/ofpo-exhibition-artisan.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Visual Archive — Handcrafted Leather & Artisans | Promoted by SPECTRA Organisation & NABARD Bank" },
      {
        name: "description",
        content:
          "Documentary photographs of rural leather artisans, traditional craft processes, finished juti, and exhibitions behind Pahchan Leather Work, promoted by SPECTRA Organisation and NABARD Bank.",
      },
      { property: "og:title", content: "Visual Archive | Pahchan Leather Work" },
      {
        property: "og:description",
        content:
          "The artisans and heritage behind every piece — in the workshops, exhibitions and communities of Alwar. Promoted by SPECTRA Organisation and NABARD Bank.",
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
    () => [{ key: "all", label: "All Photographs" }, ...galleryCategories.map((c) => ({ key: c, label: c }))],
    [],
  );

  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Documentary Archive · Living Heritage"
        title="Hands, Heritage & the Craft That Connects Them."
        intro="A verified photographic record of the artisans, workshops, and community collectives behind Pahchan Leather Work — promoted by SPECTRA Organisation and NABARD Bank in Alwar, Rajasthan."
        image={ofpoExhibitionArtisan}
        alt="Artisan presenting handcrafted footwear"
        badgeText="Promoted by SPECTRA Organisation & NABARD Bank"
      />

      <section className="shell py-16 md:py-24">
        {/* Category Filters */}
        <div className="border-b border-gold/20 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <FilterChips
            options={options}
            value={filter}
            onChange={(k) => {
              setFilter(k);
              setActive(null);
            }}
            label="Filter visual archive"
            layoutId="gallery-filter"
          />

          <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground shrink-0" aria-live="polite">
            Showing <span className="text-gold font-bold">{visible.length}</span> photographs
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <button
              key={`${item.category}-${item.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open photograph: ${item.alt}`}
              className="press group corner-brackets relative block w-full text-left rounded-2xl overflow-hidden border border-gold/25 bg-sand/30 shadow-md hover:border-gold/60 hover:shadow-2xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
            >
              <figure className="relative aspect-4/3 overflow-hidden">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading={i < 6 ? "eager" : "lazy"}
                  decoding="async"
                  width={1200}
                  height={900}
                  className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                />

                {/* Dark gradient for text readability */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/90 via-ink/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300"
                />

                {/* View Icon Badge on Hover */}
                <div className="absolute top-4 right-4 flex h-8 w-8 items-center justify-center rounded-full bg-ink/70 text-gold border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Eye className="h-4 w-4" />
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <span className="eyebrow text-gold text-[0.62rem] font-bold">
                    {item.category}
                  </span>
                  <p className="mt-2 text-sm leading-snug text-cream/90 font-medium">
                    {item.alt}
                  </p>
                </figcaption>
              </figure>
            </button>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {active !== null && visible[active] ? (
        <Lightbox
          item={visible[active]}
          index={active}
          total={visible.length}
          onClose={() => setActive(null)}
          onPrev={() => setActive((i) => (i === null ? 0 : (i - 1 + visible.length) % visible.length))}
          onNext={() => setActive((i) => (i === null ? 0 : (i + 1) % visible.length))}
        />
      ) : null}
    </>
  );
}
