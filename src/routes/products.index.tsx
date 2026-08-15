import { createFileRoute } from "@tanstack/react-router";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { FilterChips } from "@/components/FilterChips";
import { ProductCard } from "@/components/ProductCard";
import { products, categoriesByDivision, type Division } from "@/data/products";


export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Their Work, Made Visible — Spices, Dairy & Leather | SPECTRA" },
      {
        name: "description",
        content:
          "Every spice, dairy product, juti and pair of shoes here is the outcome of a farming or artisan household's work. Read their stories and enquire — no prices, no cart.",
      },
      { property: "og:title", content: "Their Work, Made Visible | SPECTRA" },
      {
        property: "og:description",
        content:
          "Agricultural produce and handmade leather craft, presented as stories of rural livelihood.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/products" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: Products,
});

type Filter = "all" | Division;

function Products() {
  const [division, setDivision] = useState<Filter>("all");
  const [category, setCategory] = useState<string>("all");
  const reduce = useReducedMotion();

  const categories =
    division === "all"
      ? [...categoriesByDivision.fpo, ...categoriesByDivision.ofpo]
      : categoriesByDivision[division];

  const visible = products.filter(
    (p) =>
      (division === "all" || p.division === division) &&
      (category === "all" || p.category === category),
  );

  return (
    <>
      <PageHero
        eyebrow="Outcomes of a journey"
        title="Not products. Proof of what rural hands can do."
        intro="Each item here is the visible end of a long, patient effort by a farming family or an artisan household. There is no cart and no price list — only stories, and an open door if you would like to know more."
      />

      <section className="shell pb-20 md:pb-28">
        <div className="border-y border-border py-6">
          <FilterChips
            label="Filter by division"
            layoutId="division-filter"
            value={division}
            onChange={(k) => {
              setDivision(k as Filter);
              setCategory("all");
            }}
            tone={division === "ofpo" ? "leather" : "field"}
            options={[
              { key: "all", label: "All" },
              { key: "fpo", label: "FPO · Agriculture" },
              { key: "ofpo", label: "OFPO · Leather" },
            ]}
          />
          <div className="mt-4">
            <FilterChips
              label="Filter by category"
              layoutId="category-filter"
              value={category}
              onChange={setCategory}
              tone={division === "ofpo" ? "leather" : "field"}
              options={[
                { key: "all", label: "All categories" },
                ...categories.map((c) => ({ key: c, label: c })),
              ]}
            />
          </div>
        </div>

        <p className="mt-8 text-sm text-muted-foreground" aria-live="polite">
          Showing {visible.length} {visible.length === 1 ? "product" : "products"}
        </p>

        <motion.div layout className="mt-8 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visible.map((product, i) => (
              <motion.div
                key={product.slug}
                layout
                initial={reduce ? undefined : { opacity: 0, y: 18 }}
                animate={reduce ? undefined : { opacity: 1, y: 0 }}
                exit={reduce ? undefined : { opacity: 0, scale: 0.97 }}
                transition={{
                  duration: 0.45,
                  delay: reduce ? 0 : (i % 6) * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </section>
    </>
  );
}

