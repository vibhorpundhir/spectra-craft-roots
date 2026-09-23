import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FilterChips } from "@/components/FilterChips";
import { ProductCard } from "@/components/ProductCard";
import { products, categories } from "@/data/products";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "The Collection — Handmade Juti, Shoes & Leather Goods | Pahchan Leather Work" },
      {
        name: "description",
        content:
          "Every juti, shoe and leather good here is the outcome of an artisan household's patient craft. Read their stories — no prices, no cart, just heritage.",
      },
      { property: "og:title", content: "The Collection — Handmade Leather Craft | Pahchan Leather Work" },
      {
        property: "og:description",
        content:
          "Handmade leather craft, presented as stories of artisan livelihood and heritage.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

function Products() {
  const [category, setCategory] = useState<string>("all");

  const visible = useMemo(
    () =>
      category === "all"
        ? products
        : products.filter((p) => p.category === category),
    [category],
  );

  return (
    <>
      <PageHero
        eyebrow="Our Collection"
        title="Not products. Proof of what artisan hands can do."
        intro="Each piece here is the visible end of a long, patient effort by an artisan household. There is no cart and no price list — only stories, and an open door if you would like to know more."
        tone="leather"
      />

      <section className="shell pb-20 md:pb-28">
        <div className="border-y border-border py-6">
          <FilterChips
            label="Filter by category"
            layoutId="category-filter"
            value={category}
            onChange={setCategory}
            tone="leather"
            options={[
              { key: "all", label: "All" },
              ...categories.map((c) => ({ key: c, label: c })),
            ]}
          />
        </div>

        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "piece" : "pieces"}
        </p>

        <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product) => (
            <div key={product.slug} className="transition-opacity duration-200">
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
