import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use | SPECTRA" },
      {
        name: "description",
        content:
          "Terms governing the use of the SPECTRA website, its product catalogue and enquiry channels.",
      },
      { property: "og:title", content: "Terms of Use | SPECTRA" },
      { property: "og:description", content: "Terms for using the SPECTRA website and catalogue." },
      { property: "og:url", content: "/terms" },
    ],
    links: [{ rel: "canonical", href: "/terms" }],
  }),
  component: Terms,
});

function Terms() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <p className="eyebrow text-primary">Legal</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">Terms of Use</h1>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-2xl text-foreground">Catalogue is for display</h2>
          <p className="mt-3">
            Products shown here are presented for information only. Listing a product is not an
            offer of sale. Availability, sizes, lead times and prices are confirmed in writing in
            response to an enquiry.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Handmade variation</h2>
          <p className="mt-3">
            Agricultural produce varies by season, and handmade leather goods vary by hide and by
            hand. Colour, grain and finish will differ from the photographs, which we consider a
            feature of the work rather than a defect.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Content and imagery</h2>
          <p className="mt-3">
            Text, photographs and marks on this site belong to SPECTRA and its members. Please ask
            before reproducing them commercially.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Changes</h2>
          <p className="mt-3">
            We may update these terms as our operations change. The version published here is the
            current one.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Questions</h2>
          <p className="mt-3">
            Write to{" "}
            <a className="text-primary hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            or call {site.phone}.
          </p>
        </section>
      </div>
    </article>
  );
}
