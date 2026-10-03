import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, Award, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { FilterChips } from "@/components/FilterChips";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";
import ofpoExhibitionStall from "@/assets/real/ofpo-exhibition-stall.jpg";

export const Route = createFileRoute("/products/")({
  component: Products,
});

function Products() {
  const [category, setCategory] = useState<string>("all");

  const visible = useMemo(
    () => (category === "all" ? products : products.filter((p) => p.category === category)),
    [category],
  );

  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Curated Heritage · Pure Handcraft"
        title="Not Products. Living Proof of Ancestral Mastery."
        intro="Each piece here is the visible outcome of days of patient effort by rural artisan households in Alwar. There are no corporate cart buttons or price tags — only authentic stories, dignified livelihoods, and timeless craftsmanship. Promoted by SPECTRA Organisation and NABARD Bank."
        image={ofpoExhibitionStall}
        alt="Exhibition stall displaying artisanal leather goods"
        badgeText="Promoted by SPECTRA Organisation & NABARD Bank"
      />

      <section className="shell py-16 md:py-24">
        {/* Category Filter */}
        <div className="border-b border-gold/20 pb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <FilterChips
            label="Filter by category"
            layoutId="category-filter"
            value={category}
            onChange={setCategory}
            tone="leather"
            options={[
              { key: "all", label: "All Creations" },
              ...categories.map((c) => ({ key: c, label: c })),
            ]}
          />

          <p
            className="text-xs font-semibold uppercase tracking-widest text-muted-foreground shrink-0"
            aria-live="polite"
          >
            Showing <span className="text-gold font-bold">{visible.length}</span> handcrafted
            designs
          </p>
        </div>

        {/* Product Cards Grid */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <div key={product.slug} className="transition-all duration-300">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
