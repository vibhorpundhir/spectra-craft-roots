import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { products, categoriesByDivision, type Division } from "@/data/products";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Product Catalogue — Spices, Dairy & Leather Craft | SPECTRA" },
      {
        name: "description",
        content:
          "Browse SPECTRA's catalogue: stone-ground spices, farm-fresh milk, bilona ghee, hand-embroidered juti, welted leather shoes and handmade leather goods.",
      },
      { property: "og:title", content: "Product Catalogue | SPECTRA" },
      {
        property: "og:description",
        content: "Agricultural produce and handmade leather goods, available on enquiry.",
      },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

type Filter = "all" | Division;

function Products() {
  const [division, setDivision] = useState<Filter>("all");
  const [category, setCategory] = useState<string | null>(null);

  const categories =
    division === "all"
      ? [...categoriesByDivision.fpo, ...categoriesByDivision.ofpo]
      : categoriesByDivision[division];

  const visible = products.filter(
    (p) =>
      (division === "all" || p.division === division) && (!category || p.category === category),
  );

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
        eyebrow="Outcomes of a journey"
        title="Not products. Proof of what rural hands can do."
        intro="Each item here is the visible end of a long, patient effort by a farming family or an artisan household. There is no cart and no price list — only stories, and an open door if you would like to know more."
      />


      <section className="mx-auto max-w-7xl px-5 pb-24 sm:px-8">
        <div className="border-y border-border py-6">
          <div className="flex flex-wrap gap-3" role="group" aria-label="Filter by division">
            {(
              [
                { key: "all", label: "All" },
                { key: "fpo", label: "FPO · Agriculture" },
                { key: "ofpo", label: "OFPO · Leather" },
              ] as const
            ).map((d) => (
              <button
                key={d.key}
                type="button"
                aria-pressed={division === d.key}
                onClick={() => {
                  setDivision(d.key);
                  setCategory(null);
                }}
                className={chip(division === d.key)}
              >
                {d.label}
              </button>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3" role="group" aria-label="Filter by category">
            <button
              type="button"
              aria-pressed={category === null}
              onClick={() => setCategory(null)}
              className={chip(category === null)}
            >
              All categories
            </button>
            {categories.map((c) => (
              <button
                key={c}
                type="button"
                aria-pressed={category === c}
                onClick={() => setCategory(c)}
                className={chip(category === c)}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "product" : "products"}
        </p>

        <div className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((product, i) => (
            <Reveal key={product.slug} delay={i * 0.05}>
              <ProductCard product={product} />
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
