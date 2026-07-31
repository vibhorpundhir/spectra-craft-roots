import { createFileRoute } from "@tanstack/react-router";
import { site } from "@/data/site";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | SPECTRA" },
      {
        name: "description",
        content:
          "How SPECTRA handles the information you share through enquiry forms, email and WhatsApp.",
      },
      { property: "og:title", content: "Privacy Policy | SPECTRA" },
      { property: "og:description", content: "How SPECTRA handles enquiry information." },
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
      <p className="eyebrow text-primary">Legal</p>
      <h1 className="mt-4 text-4xl sm:text-5xl">Privacy Policy</h1>
      <p className="mt-6 text-sm text-muted-foreground">
        This page is maintained by SPECTRA to explain, in plain terms, what happens to the
        information you share with us. It is not a certification or an independent audit.
      </p>

      <div className="mt-10 space-y-8 text-sm leading-relaxed text-muted-foreground">
        <section>
          <h2 className="text-2xl text-foreground">What we collect</h2>
          <p className="mt-3">
            This is a display website. It has no accounts, no cart and no payment processing. The
            only information we receive is what you choose to send us — your name, email, phone
            number and message — when you submit the enquiry form, email us, or message us on
            WhatsApp.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">How the enquiry form works</h2>
          <p className="mt-3">
            Submitting the form opens your own email application with a pre-filled message. Nothing
            is stored on this website; the enquiry reaches us only once you send that email.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">How we use it</h2>
          <p className="mt-3">
            Solely to answer your enquiry and, where relevant, to continue a supply or partnership
            conversation. We do not sell contact details, and we do not add you to marketing lists
            without you asking.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Third parties</h2>
          <p className="mt-3">
            The contact page embeds a Google Maps frame, and WhatsApp links open WhatsApp. Those
            services handle your data under their own policies once you interact with them.
          </p>
        </section>
        <section>
          <h2 className="text-2xl text-foreground">Contact</h2>
          <p className="mt-3">
            Questions, corrections or deletion requests: write to{" "}
            <a className="text-primary hover:underline" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </section>
      </div>
    </article>
  );
}
