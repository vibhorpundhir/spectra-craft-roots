import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site, whatsappLink } from "@/data/site";

const searchSchema = z.object({ product: z.string().max(120).optional() });

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your name").max(100),
  email: z.string().trim().email("Enter a valid email address").max(255),
  phone: z.string().trim().max(20).optional(),
  subject: z.string().trim().min(1, "Please add a subject").max(120),
  message: z.string().trim().min(1, "Please write a message").max(1000),
});

export const Route = createFileRoute("/contact")({
  validateSearch: searchSchema,
  head: () => ({
    meta: [
      { title: "Contact SPECTRA — Alwar, Rajasthan | Enquiries & Visits" },
      {
        name: "description",
        content:
          "Reach SPECTRA at E-11 Patel Nagar, Mannaka Road, Alwar, Rajasthan. Phone, email, WhatsApp, working hours and map for enquiries, visits and partnerships.",
      },
      { property: "og:title", content: "Contact SPECTRA" },
      {
        property: "og:description",
        content: "Write, call or visit our Alwar office — every enquiry reaches a person.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { product } = Route.useSearch();
  const [errors, setErrors] = useState<Record<string, string>>({});

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      return;
    }
    setErrors({});
    const v = parsed.data;
    const body = `Name: ${v.name}\nEmail: ${v.email}\nPhone: ${v.phone ?? "-"}\n\n${v.message}`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(body)}`;
    toast.success("Opening your email app with the enquiry ready to send.");
  }

  const field = "mt-2 w-full border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary";
  const label = "eyebrow text-muted-foreground";

  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Come and see the work for yourself."
        intro="Questions about a product, a partnership, a village visit or volunteering — write, call or message us. Every enquiry reaches a person at our Alwar office."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-5 pb-24 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <form onSubmit={onSubmit} noValidate>
          <h2 className="text-3xl">Write to us</h2>
          <div className="mt-8 space-y-6">
            <div>
              <label className={label} htmlFor="name">Name</label>
              <input id="name" name="name" className={field} maxLength={100} required aria-invalid={!!errors.name} />
              {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name}</p> : null}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="email">Email</label>
                <input id="email" name="email" type="email" className={field} maxLength={255} required aria-invalid={!!errors.email} />
                {errors.email ? <p className="mt-2 text-xs text-destructive">{errors.email}</p> : null}
              </div>
              <div>
                <label className={label} htmlFor="phone">Phone (optional)</label>
                <input id="phone" name="phone" type="tel" className={field} maxLength={20} />
              </div>
            </div>
            <div>
              <label className={label} htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                className={field}
                maxLength={120}
                required
                defaultValue={product ? `Enquiry: ${product}` : ""}
                aria-invalid={!!errors.subject}
              />
              {errors.subject ? <p className="mt-2 text-xs text-destructive">{errors.subject}</p> : null}
            </div>
            <div>
              <label className={label} htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={6}
                className={field}
                maxLength={1000}
                required
                defaultValue={product ? `I would like to know more about ${product}.` : ""}
                aria-invalid={!!errors.message}
              />
              {errors.message ? <p className="mt-2 text-xs text-destructive">{errors.message}</p> : null}
            </div>
            <div className="flex flex-wrap gap-3">
              <button
                type="submit"
                className="eyebrow bg-primary px-8 py-4 text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Send enquiry
              </button>
              <a
                href={whatsappLink("Hello SPECTRA, I have an enquiry.")}
                target="_blank"
                rel="noreferrer noopener"
                className="eyebrow inline-flex items-center gap-2 border border-leather px-8 py-4 text-leather transition-colors hover:bg-leather hover:text-leather-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </form>

        <div>
          <h2 className="text-3xl">Visit or call</h2>
          <ul className="mt-8 space-y-6 text-sm">
            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <address className="not-italic text-muted-foreground">{site.address}</address>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <a href={site.phoneHref} className="text-muted-foreground hover:text-foreground">
                {site.phone}
              </a>
            </li>
            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <a href={site.landlineHref} className="text-muted-foreground hover:text-foreground">
                {site.landline}
              </a>
            </li>
            <li className="flex gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-primary" strokeWidth={1.5} />
              <a href={`mailto:${site.email}`} className="text-muted-foreground hover:text-foreground">
                {site.email}
              </a>
            </li>
          </ul>

          <h3 className="eyebrow mt-10 text-muted-foreground">Working hours</h3>
          <dl className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <div key={h.day} className="flex justify-between border-b border-border py-2">
                <dt className="text-muted-foreground">{h.day}</dt>
                <dd>{h.time}</dd>
              </div>
            ))}
          </dl>

          <div className="mt-10 border border-border">
            <iframe
              title="SPECTRA office location on Google Maps"
              src={site.mapEmbed}
              loading="lazy"
              className="h-72 w-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
