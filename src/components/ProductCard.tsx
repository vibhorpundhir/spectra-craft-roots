import { Link } from "@tanstack/react-router";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="relative overflow-hidden bg-sand">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          width={1024}
          height={1024}
          className="aspect-4/5 w-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
        />
        <span className="eyebrow absolute left-4 top-4 bg-background/90 px-3 py-1.5 text-foreground">
          {product.division === "fpo" ? "FPO" : "OFPO"}
        </span>
      </div>
      <div className="pt-5">
        <p className="eyebrow text-muted-foreground">{product.category}</p>
        <h3 className="mt-2 text-xl transition-colors group-hover:text-primary">{product.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{product.short}</p>
        <p className="eyebrow mt-4 text-primary">View story</p>

      </div>
    </Link>
  );
}
