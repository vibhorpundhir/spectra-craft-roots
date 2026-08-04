import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="frame frame-hover aspect-4/5">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width={1024}
          height={1024}
          className="h-full w-full object-cover"
        />
        <span className="eyebrow absolute left-4 top-4 z-[2] bg-background/90 px-3 py-1.5 text-foreground">
          {product.division === "fpo" ? "FPO" : "OFPO"}
        </span>
      </div>
      <div className="pt-5">
        <p className="eyebrow text-muted-foreground">{product.category}</p>
        <h3 className="mt-2.5 text-xl transition-colors group-hover:text-primary sm:text-2xl">
          {product.name}
        </h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{product.short}</p>
        <p className="eyebrow mt-5 inline-flex items-center gap-2 text-primary">
          View story
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1" />
        </p>
      </div>
    </Link>
  );
}
