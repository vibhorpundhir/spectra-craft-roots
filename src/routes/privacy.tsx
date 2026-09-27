import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Pahchan Leather Work" },
      {
        name: "description",
        content:
          "How Pahchan Ismailpur Leather Producer Company Limited (promoted by SPECTRA Organisation and NABARD Bank) handles information you share through enquiry forms, email and WhatsApp.",
      },
      { property: "og:title", content: "Privacy Policy | Pahchan Leather Work" },
      {
        property: "og:description",
        content: "How Pahchan Leather Work handles enquiry information.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/privacy" },
    ],
    links: [{ rel: "canonical", href: "/privacy" }],
  }),
  component: Privacy,
});

function Privacy() {
  return (
    <article className="mx-auto max-w-3xl px-5 py-20 sm:px-8">
      <div className="border-b border-gold/20 pb-6 mb-8">
        <p className="eyebrow text-leather">Official Policy</p>
        <h1 className="mt-3 font-display text-4xl sm:text-5xl font-bold">Privacy Policy</h1>
        <p className="mt-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
          Pahchan Ismailpur Leather Producer Company Limited · Promoted by SPECTRA Organisation
          &amp; NABARD Bank
        </p>
      </div>

      <div className="space-y-8 text-sm leading-[1.8] text-muted-foreground">
        <section>
          <h2 className="font-display text-2xl font-bold text-foreground">
            What Information We Collect
          </h2>
          <p className="mt-3">
            This is a cultural and craft showcase website. It has no account logins, no tracking
            cookies, and no online payment gateway. The only information we receive is what you
            choose to communicate — your name, email address, phone number, and enquiry details —
            when you submit our contact form, email us directly, or reach out via WhatsApp.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground">
            How the Enquiry Channels Work
          </h2>
          <p className="mt-3">
            Submitting our contact form opens your local email application with a pre-formatted
            message directed to our company email (
            <span className="text-foreground font-semibold">{site.email}</span>). No user data is
            stored on remote advertising servers.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground">Usage of Information</h2>
          <p className="mt-3">
            Information provided is used solely to answer your questions regarding custom craft
            orders, sizing advice, wholesale inquiries, or scheduling a visit to our Common Facility
            Centre (CFC) in Kishangarh Bas. We never sell or distribute contact details to
            third-party marketing services.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-bold text-foreground">
            Official Correspondence
          </h2>
          <p className="mt-3">
            For any queries regarding this policy, you may contact our Chief Executive Officer at{" "}
            <span className="text-foreground font-semibold">{site.ceo.phone}</span> or write to our
            registered office:{" "}
            <span className="text-foreground font-medium">{site.registeredOffice}</span>.
          </p>
        </section>
      </div>
    </article>
  );
}
