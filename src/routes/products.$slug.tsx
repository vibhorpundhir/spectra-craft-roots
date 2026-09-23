import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { getProduct, relatedProducts } from "@/data/products";
import { whatsappLink } from "@/data/site";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = getProduct(params.slug);
    if (!product) throw notFound();
    return { name: product.name, short: product.short };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Product not found | SPECTRA" }, { name: "robots", content: "noindex" }],
      };
    }
    return {
      meta: [
        { title: `${loaderData.name} — Handcrafted by Pahchan Artisans` },
        { name: "description", content: loaderData.short },
        { property: "og:title", content: `${loaderData.name} | Pahchan Leather Work` },
        { property: "og:description", content: loaderData.short },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
        { property: "og:url", content: `/products/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/products/${params.slug}` }],
    };
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
      <div className="shell pt-10">
        <Link
          to="/products"
          className="eyebrow inline-flex items-center gap-2 text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft className="h-4 w-4" /> Back to collection
        </Link>
      </div>

      <article className="shell grid gap-12 py-12 lg:grid-cols-2 lg:gap-16">
        <div>
          <div className="overflow-hidden bg-sand">
            <img
              src={product.gallery[active]}
              alt={product.name}
              width={1024}
              height={1024}
              className="aspect-square w-full object-cover"
            />
          </div>
          {product.gallery.length > 1 ? (
            <div className="mt-3 flex gap-3">
              {product.gallery.map((img, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActive(i)}
                  aria-label={`View image ${i + 1} of ${product.name}`}
                  aria-current={active === i}
                  className={
                    active === i
                      ? "w-20 border-2 border-leather"
                      : "w-20 border-2 border-transparent opacity-70 hover:opacity-100"
                  }
                >
                  <img
                    src={img}
                    alt=""
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={1024}
                    className="aspect-square w-full object-cover"
                  />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        <div>
          <p className="eyebrow text-leather">
            Handcrafted · {product.category}
          </p>
          <h1 className="mt-4 text-4xl leading-tight sm:text-5xl">{product.name}</h1>
          <p className="mt-5 text-base leading-[1.75] text-muted-foreground">{product.short}</p>

          <dl className="mt-8 grid gap-px border border-border bg-border">
            <div className="bg-background p-5">
              <dt className="eyebrow text-muted-foreground">Material</dt>
              <dd className="mt-2 text-sm">{product.material}</dd>
            </div>
            <div className="bg-background p-5">
              <dt className="eyebrow text-muted-foreground">Craft Origin</dt>
              <dd className="mt-2 text-sm">Artisan clusters, Alwar, Rajasthan</dd>
            </div>
          </dl>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link to="/contact" search={{ product: product.name }} className="btn-primary">
              Know the Story
            </Link>
            <a
              href={whatsappLink(`Hello Pahchan Leather Work, I would like to know more about ${product.name}.`)}
              target="_blank"
              rel="noreferrer noopener"
              className="btn-ghost border-leather/40 text-leather hover:border-leather hover:bg-leather hover:text-leather-foreground"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp
            </a>
          </div>

          <div className="mt-10 border-t border-border pt-8">
            <h2 className="text-2xl">Who made this</h2>
            <p className="mt-4 text-base leading-[1.75] text-muted-foreground">{product.story}</p>
            <Link
              to="/ofpo"
              className="eyebrow mt-6 inline-flex items-center gap-2 text-leather transition-colors hover:text-primary"
            >
              Meet the makers
            </Link>
          </div>
        </div>
      </article>

      {related.length ? (
        <section className="shell py-16 md:py-24">
          <h2 className="text-3xl">More from this collection</h2>
          <div className="mt-10 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
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
