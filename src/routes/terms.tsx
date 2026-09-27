import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | Pahchan Leather Work" },
      {
        name: "description",
        content:
          "Terms governing the use of the Pahchan Leather Work website, its craft catalogue and enquiry channels. Promoted by SPECTRA Organisation and NABARD Bank.",
      },
      { property: "og:title", content: "Terms of Use | Pahchan Leather Work" },
      { property: "og:description", content: "Terms for using the Pahchan Leather Work website." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <div className="border-b border-gold/20 pb-6 mb-8">
        <p className="eyebrow text-leather">Official Policy</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Terms of Use</h1>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Pahchan Ismailpur Leather Producer Company Limited · Promoted by SPECTRA Organisation
          &amp; NABARD Bank
        </p>
      </div>

      <div className="space-y-8 text-sm leading-[1.8] text-muted-foreground">
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Catalogue is for Showcase &amp; Storytelling
          </h2>
          <p className="mt-3">
            Handcrafted shoes, juti, and leather accessories displayed on this platform are
            presented to celebrate rural artisan mastery and document heritage traditions. The site
            is a non-commercial storytelling catalogue. Sizing, custom requirements, and delivery
            times are coordinated individually via our direct artisan channels.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Natural Handmade Variations
          </h2>
          <p className="mt-3">
            Each piece is crafted by hand using vegetable-tanned goat and buffalo hides. Natural
            grain textures, slight shade variations, and hand-stitched needlework nuances are
            intentional hallmarks of slow artisanal craft, reflecting authentic hand-work rather
            than factory defects.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Intellectual Property &amp; Craft Imagery
          </h2>
          <p className="mt-3">
            Documentary photography, brand identity, and craft narratives published on this platform
            belong to Pahchan Ismailpur Leather Producer Company Limited, promoted by SPECTRA
            Organisation and NABARD Bank. Unauthorized commercial reproduction is strictly
            prohibited.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground">Corporate Identity</h2>
          <p className="mt-3">
            Pahchan Ismailpur Leather Producer Company Limited is incorporated under the Companies
            Act 2013 (CIN:{" "}
            <span className="font-mono text-foreground font-semibold">{site.cin}</span>, GSTIN:{" "}
            <span className="font-mono text-foreground font-semibold">{site.gstin}</span>), with its
            registered office in Alwar (Khairthal-Tijara), Rajasthan.
          </p>
        </section>
      </div>
    </article>
  );
}
