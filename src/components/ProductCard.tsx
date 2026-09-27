import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/data/products";

export function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      to="/products/$slug"
      params={{ slug: product.slug }}
      className="press group block focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-ring"
    >
      <div className="corner-brackets relative aspect-4/5 overflow-hidden rounded-2xl border border-gold/25 bg-sand transition-all duration-400 group-hover:border-gold/60 group-hover:shadow-[0_20px_40px_-15px_rgba(26,18,11,0.25)]">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          decoding="async"
          width={1024}
          height={1024}
          className="h-full w-full object-cover transition-transform duration-700 cubic-bezier(0.22, 1, 0.36, 1) group-hover:scale-108"
        />
        {/* Cinematic gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/15 to-transparent opacity-65 transition-opacity duration-300 group-hover:opacity-85" />

        {/* Handcrafted badge */}
        <span className="eyebrow absolute left-3.5 top-3.5 z-[2] rounded-full border border-gold/40 bg-card/90 px-3 py-1.5 text-[0.55rem] font-bold text-leather backdrop-blur-md shadow-sm">
          Handcrafted
        </span>

        {/* Artisan cluster badge */}
        <span className="eyebrow absolute right-3.5 top-3.5 z-[2] rounded-full bg-gold px-2.5 py-1 text-[0.5rem] text-ink font-black shadow-sm">
          Alwar Cluster
        </span>

        {/* Hover reveal text bar */}
        <div className="absolute inset-x-4 bottom-4 z-[2] translate-y-2 opacity-0 transition-all duration-300 ease-out group-hover:translate-y-0 group-hover:opacity-100 flex items-center justify-between bg-ink/85 backdrop-blur-md px-3.5 py-2 rounded-lg border border-gold/30">
          <span className="eyebrow text-gold text-[0.6rem] font-bold">Read Artisan Story</span>
          <ArrowRight className="h-3.5 w-3.5 text-gold" />
        </div>
      </div>

      <div className="pt-5">
        <div className="flex items-center gap-2">
          <p className="eyebrow text-leather font-semibold text-[0.62rem]">{product.category}</p>
          <span className="h-1 w-1 rounded-full bg-gold" />
          <p className="eyebrow text-muted-foreground text-[0.6rem]">
            {product.material.split(",")[0]}
          </p>
        </div>
        <h3 className="mt-2 font-display text-xl transition-colors duration-200 group-hover:text-leather sm:text-2xl font-semibold">
          {product.name}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground line-clamp-2">
          {product.short}
        </p>
        <p className="eyebrow stitch-link mt-4 inline-flex items-center gap-2 text-leather font-bold text-[0.62rem]">
          Explore Craft Piece
          <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-1 text-gold" />
        </p>
      </div>
    </Link>
  );
}
