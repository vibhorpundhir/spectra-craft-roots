import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Award, Camera, Eye, Filter, Sparkles, BookOpen } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FilterChips } from "@/components/FilterChips";
import { Lightbox } from "@/components/Lightbox";
import { galleryCategories, galleryItems } from "@/data/gallery";
import { allGalleryImages, type ImageCategory } from "@/data/galleryImages";
import ofpoExhibitionArtisan from "@/assets/real/ofpo-exhibition-artisan.jpg";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      {
        title:
          "Visual Archive — Handcrafted Leather & Artisans | Promoted by SPECTRA Organisation & NABARD Bank",
      },
      {
        name: "description",
        content:
          "Documentary photographs and design stories of rural leather artisans, traditional craft processes, finished juti, and exhibitions behind Pahchan Leather Work, promoted by SPECTRA Organisation and NABARD Bank.",
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
  const [visualFilter, setVisualFilter] = useState<string>("all");
  const [visualActive, setVisualActive] = useState<number | null>(null);

  const visible = useMemo(
    () => (filter === "all" ? galleryItems : galleryItems.filter((i) => i.category === filter)),
    [filter],
  );

  const filteredVisuals = useMemo(
    () =>
      visualFilter === "all"
        ? allGalleryImages
        : allGalleryImages.filter((i) => i.category === visualFilter),
    [visualFilter],
  );

  const visualLightboxItems = useMemo(
    () =>
      filteredVisuals.map((img) => ({
        src: img.src,
        alt: img.alt,
        title: img.title,
        category: img.category,
        story:
          img.caption ||
          `${img.title} — documented as part of the Pahchan visual heritage collection in Alwar, Rajasthan.`,
      })),
    [filteredVisuals],
  );

  const options = useMemo(
    () => [
      { key: "all", label: "All Photographs" },
      ...galleryCategories.map((c) => ({ key: c, label: c })),
    ],
    [],
  );

  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Documentary Archive · Living Heritage"
        title="Hands, Heritage & the Craft That Connects Them."
        intro="A verified photographic and design archive of the rural artisans, craft processes, finished juti, and community collectives behind Pahchan Leather Work — promoted by SPECTRA Organisation and NABARD Bank in Alwar, Rajasthan."
        image={ofpoExhibitionArtisan}
        alt="Artisan presenting handcrafted footwear"
        badgeText="Promoted by SPECTRA Organisation & NABARD Bank"
      />

      {/* ═══════════════════════ Visual Stories — Masonry Gallery ═══════════════════════ */}
      <section className="band-ink section-y-lg relative grain">
        <div className="shell relative z-[3]">
          <div className="text-center max-w-3xl mx-auto mb-10">
            <p className="eyebrow text-gold font-semibold">Visual Stories</p>
            <span className="gold-rule mt-3 mx-auto" />
            <h2 className="mt-5 text-[2.2rem] sm:text-4xl md:text-[3.25rem] text-cream">
              The Pahchan <span className="italic text-gold font-normal">Visual Archive</span>
            </h2>
            <p className="mt-4 text-base leading-[1.75] text-cream/70 sm:text-lg">
              40 curated photographs documenting the artisans, exhibitions, workshops, and community
              behind Pahchan Leather Work.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="filter-tabs mb-10">
            {(
              [
                "all",
                "artisans",
                "products",
                "exhibitions",
                "community",
                "workshops",
                "awards",
              ] as const
            ).map((cat) => (
              <button
                key={cat}
                onClick={() => setVisualFilter(cat)}
                className={`filter-tab ${visualFilter === cat ? "active !bg-gold !text-ink !border-gold" : "!text-cream/60 !border-cream/20 hover:!border-gold/50"}`}
              >
                {cat === "all" ? "All" : cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>

          {/* Equal-Sized Uniform Visual Grid (No Gaps) */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredVisuals.map((img, i) => (
              <button
                key={`${img.src}-${i}`}
                type="button"
                onClick={() => setVisualActive(i)}
                aria-label={`View full photograph: ${img.title}`}
                className="group img-hover-overlay w-full text-left cursor-pointer focus-visible:outline-2 focus-visible:outline-gold rounded-2xl overflow-hidden block border border-gold/25 bg-card/40 shadow-lg hover:border-gold/60 hover:shadow-2xl transition-all duration-300 aspect-[4/3] relative"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading={i < 8 ? "eager" : "lazy"}
                  decoding="async"
                  className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                />
                <div className="img-hover-text">
                  <span className="eyebrow text-gold text-[0.62rem] font-bold">{img.category}</span>
                  <h3 className="mt-1 font-display text-base sm:text-lg font-bold text-cream">
                    {img.title}
                  </h3>
                  {img.caption && (
                    <p className="mt-1 text-xs text-cream/70 line-clamp-2">{img.caption}</p>
                  )}
                  <span className="mt-2 inline-flex items-center gap-1 text-[0.65rem] text-gold font-semibold uppercase tracking-wider">
                    <Eye className="h-3 w-3" /> View Photo &rarr;
                  </span>
                </div>
              </button>
            ))}
          </div>

          <p className="mt-10 text-center text-sm text-cream/50">
            Showing <span className="text-gold font-bold">{filteredVisuals.length}</span> visual
            stories
          </p>
        </div>
      </section>

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

          <p
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground shrink-0"
            aria-live="polite"
          >
            Showing <span className="text-gold font-bold">{visible.length}</span> documented stories
          </p>
        </div>

        {/* Gallery Grid */}
        <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((item, i) => (
            <button
              key={`${item.category}-${item.src}-${i}`}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open craft details and story: ${item.title}`}
              className="press group corner-brackets relative block w-full text-left rounded-2xl overflow-hidden border border-gold/25 bg-sand/30 shadow-md hover:border-gold/60 hover:shadow-2xl transition-all duration-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring cursor-pointer"
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
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/95 via-ink/50 to-transparent opacity-85 group-hover:opacity-95 transition-opacity duration-300"
                />

                {/* View Icon Badge on Hover */}
                <div className="absolute top-4 right-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-ink/80 text-gold border border-gold/30 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
                  <BookOpen className="h-3.5 w-3.5" />
                  <span className="text-[0.65rem] font-bold uppercase tracking-wider">
                    Read Story
                  </span>
                </div>

                <figcaption className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center justify-between gap-2">
                    <span className="eyebrow text-gold text-[0.62rem] font-bold">
                      {item.category}
                    </span>
                    <span className="text-[0.6rem] text-cream/70 font-mono">
                      {item.cluster.split(",")[0]}
                    </span>
                  </div>

                  <h3 className="mt-1.5 font-display text-base sm:text-lg font-bold text-cream line-clamp-1">
                    {item.title}
                  </h3>

                  <p className="mt-1 text-xs leading-snug text-cream/80 line-clamp-2">
                    {item.story}
                  </p>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-cream/15 text-[0.68rem] text-gold font-semibold">
                    <span className="flex items-center gap-1">
                      <Sparkles className="h-3 w-3" /> View Craft Details
                    </span>
                    <span className="inline-flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                      Details &rarr;
                    </span>
                  </div>
                </figcaption>
              </figure>
            </button>
          ))}
        </div>
      </section>

      {/* Museum-Grade Artisan Story & Craft Showcase Modal */}
      {active !== null && visible[active] ? (
        <Lightbox
          items={visible}
          index={active}
          total={visible.length}
          onClose={() => setActive(null)}
          onIndexChange={(i) => setActive(i)}
          onPrev={() =>
            setActive((i) => (i === null ? 0 : (i - 1 + visible.length) % visible.length))
          }
          onNext={() => setActive((i) => (i === null ? 0 : (i + 1) % visible.length))}
        />
      ) : null}

      {/* Visual Stories Photo Lightbox Modal */}
      {visualActive !== null && visualLightboxItems[visualActive] ? (
        <Lightbox
          items={visualLightboxItems}
          index={visualActive}
          total={visualLightboxItems.length}
          onClose={() => setVisualActive(null)}
          onIndexChange={(i) => setVisualActive(i)}
          onPrev={() =>
            setVisualActive((i) =>
              i === null ? 0 : (i - 1 + visualLightboxItems.length) % visualLightboxItems.length,
            )
          }
          onNext={() =>
            setVisualActive((i) => (i === null ? 0 : (i + 1) % visualLightboxItems.length))
          }
        />
      ) : null}
    </>
  );
}
