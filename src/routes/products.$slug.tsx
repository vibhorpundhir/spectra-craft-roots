import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ArrowLeft,
  ArrowRight,
  Award,
  CheckCircle2,
  Clock,
  MapPin,
  MessageCircle,
  Scissors,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, relatedProducts } from "@/data/products";
import { site, whatsappLink } from "@/data/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { name: product.name, short: product.short };
  },
  component: ProductDetail,
});

function ProductDetail() {
  const { slug } = Route.useParams();
  const product = getProduct(slug)!;
  const [active, setActive] = useState(0);
  const related = relatedProducts(product);

  return (
    <>
      {/* Breadcrumb Navigation */}
      <div className="shell pt-8 pb-4">
        <Link
          to="/products"
          className="eyebrow inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-gold"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Collection
        </Link>
      </div>

      <article className="shell grid gap-12 py-8 lg:grid-cols-12 lg:gap-16 items-start">
        {/* Left Column: Gallery */}
        <div className="lg:col-span-6 space-y-4">
          <div className="relative aspect-square overflow-hidden rounded-2xl border border-gold/30 bg-sand/30 shadow-2xl">
            <img
              src={product.gallery[active]}
              alt={product.name}
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute top-4 left-4 inline-flex items-center gap-1.5 rounded-full bg-ink/75 px-3 py-1 text-[0.62rem] font-bold text-gold uppercase tracking-wider backdrop-blur-sm border border-gold/30">
              <Sparkles className="h-3 w-3" /> Handcrafted Original
            </div>
          </div>

          {product.gallery.length > 1 ? (
            <div className="flex gap-3 overflow-x-auto pb-2">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1} of ${product.name}`}
                  aria-current={active === i}
                  className={`w-20 shrink-0 aspect-square rounded-lg overflow-hidden border-2 transition-all ${
                    active === i
                      ? "border-gold shadow-md scale-105"
                      : "border-border/60 opacity-70 hover:opacity-100"
                  }`}
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={200}
                    height={200}
                    className="h-full w-full object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}

          {/* Institutional Trust Badge */}
          <div className="rounded-xl border border-gold/25 bg-sand/30 p-4 text-xs text-muted-foreground flex items-center justify-between">
            <span className="flex items-center gap-2 font-semibold text-foreground">
              <Award className="h-4 w-4 text-gold" /> Institutional Guarantee
            </span>
            <span className="text-[0.62rem] text-gold uppercase tracking-widest font-bold">
              Promoted by SPECTRA Organisation &amp; NABARD Bank
            </span>
          </div>
        </div>

        {/* Right Column: Product Narrative & Inquiries */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="eyebrow text-leather">{product.category}</span>
              <span className="text-muted-foreground/40">·</span>
              <span className="text-xs text-gold font-semibold uppercase tracking-wider flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Alwar Cluster
              </span>
            </div>
            <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold text-foreground leading-tight">
              {product.name}
            </h1>
            <p className="mt-4 text-base sm:text-lg leading-relaxed text-muted-foreground">
              {product.short}
            </p>
          </div>

          {/* Craft Specifications Grid */}
          <div className="rounded-xl border border-gold/20 bg-card p-6 shadow-sm space-y-4">
            <h3 className="eyebrow text-gold text-[0.62rem]">Technical Specifications</h3>
            <div className="grid grid-cols-2 gap-4 pt-2 border-t border-border/80">
              <div>
                <dt className="eyebrow text-[0.6rem] text-muted-foreground">Primary Material</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">{product.material}</dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.6rem] text-muted-foreground">Sole &amp; Welt</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  Vegetable-Tanned Buffalo
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.6rem] text-muted-foreground">Stitch Method</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">
                  Saddle-Stitched Waxed Cord
                </dd>
              </div>
              <div>
                <dt className="eyebrow text-[0.6rem] text-muted-foreground">Artisan Origin</dt>
                <dd className="mt-1 text-sm font-semibold text-foreground">Ismailpur, Rajasthan</dd>
              </div>
            </div>
          </div>

          {/* Artisan & Workshop Story */}
          <div className="surface-card rounded-xl p-6 border border-gold/25 space-y-3">
            <h3 className="font-display text-2xl font-bold text-foreground">
              Who Crafted This Pair
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">{product.story}</p>
            <div className="pt-2">
              <Link
                to="/ofpo"
                className="eyebrow inline-flex items-center gap-1.5 text-leather hover:text-gold transition-colors text-[0.65rem] font-bold"
              >
                Learn About Our 5-Stage Craft Ritual <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="pt-2 flex flex-wrap gap-4">
            <Link
              to="/contact"
              search={{ product: product.name }}
              className="btn-gold rounded-sm inline-flex items-center gap-2"
            >
              Enquire About This Pair <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href={whatsappLink(
                `Hello Pahchan Leather Work, I would like to inquire about ${product.name} (Material: ${product.material}).`,
              )}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost rounded-sm border-gold/30 text-foreground hover:bg-gold hover:text-ink inline-flex items-center gap-2"
            >
              <MessageCircle className="h-4 w-4" /> Direct WhatsApp Enquiry
            </a>
          </div>
        </div>
      </article>

      {/* Related Products */}
      {related.length ? (
        <section className="shell py-16 md:py-24 border-t border-gold/20 mt-12">
          <div className="flex items-center justify-between mb-10">
            <div>
              <span className="eyebrow text-leather">Artisan Archive</span>
              <h2 className="mt-2 font-display text-3xl font-bold">More From This Collection</h2>
            </div>
            <Link
              to="/products"
              className="eyebrow text-leather hover:text-gold transition-colors inline-flex items-center gap-1"
            >
              All 12 Designs <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      ) : null}
    </>
  );
}
