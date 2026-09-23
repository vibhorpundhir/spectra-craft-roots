import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Award, Building, ExternalLink, Mail, MapPin, MessageCircle, Phone, ShieldCheck } from "lucide-react";
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
      { title: "Contact Pahchan Ismailpur Leather Producer Company | Alwar, Rajasthan" },
      {
        name: "description",
        content:
          "Reach Pahchan Ismailpur Leather Producer Company Limited (Pahchan Leather Work). Supported by NABARD & SPECTRA. Contact CEO Mahesh Chouhan, email pahchanismailpurleatherpcl@gmail.com, exact Google Maps location.",
      },
      { property: "og:title", content: "Contact Pahchan Ismailpur Leather Producer Company" },
      {
        property: "og:description",
        content: "Direct contact, official emails, CFC address, and Google Maps pin for our artisan collective.",
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
    toast.success("Opening your email client with the enquiry ready to send.");
  }

  const field =
    "mt-2.5 w-full border border-input bg-card px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-leather focus:bg-background";
  const label = "eyebrow text-muted-foreground";

  return (
    <>
      <PageHero
        eyebrow="Contact & Institutional Office"
        title="Connect directly with our artisan collective."
        intro="Questions about artisanal craft orders, institutional partnerships, custom leather designs, or visiting our Common Facility Centre (CFC) in Kishangarh Bas — our leadership team is ready to assist you."
      />

      {/* Official Credentials Banner */}
      <section className="shell -mt-6 mb-12">
        <div className="grid gap-4 rounded-xl border border-leather/30 bg-cream/60 p-5 shadow-sm sm:grid-cols-2 lg:grid-cols-4">
          <div className="flex items-center gap-3">
            <Building className="h-6 w-6 text-leather shrink-0" />
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">Company Form</p>
              <p className="text-xs text-muted-foreground">Producer Co. Ltd (Co. Act 2013)</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <ShieldCheck className="h-6 w-6 text-leather shrink-0" />
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">Registration (CIN)</p>
              <p className="text-xs font-mono text-muted-foreground">{site.cin}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Award className="h-6 w-6 text-leather shrink-0" />
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">Institutional Support</p>
              <p className="text-xs text-muted-foreground">NABARD Sanctioned OFPO</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <MapPin className="h-6 w-6 text-leather shrink-0" />
            <div>
              <p className="text-xs font-bold text-foreground uppercase tracking-wider">POPI / Promotion</p>
              <p className="text-xs text-muted-foreground">SPECTRA Organisation, Alwar</p>
            </div>
          </div>
        </div>
      </section>

      <section className="shell grid gap-14 pb-20 md:pb-28 lg:grid-cols-2 lg:gap-20">
        <form onSubmit={onSubmit} noValidate className="surface-card p-7 sm:p-10 shadow-sm border border-border/80">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-4xl">Write to us</h2>
            <span className="eyebrow text-leather font-semibold">Pahchan Collective</span>
          </div>
          <span className="gold-rule mt-4" />
          <div className="mt-8 space-y-6">
            <div>
              <label className={label} htmlFor="name">
                Name
              </label>
              <input
                id="name"
                name="name"
                className={field}
                maxLength={100}
                required
                aria-invalid={!!errors.name}
              />
              {errors.name ? <p className="mt-2 text-xs text-destructive">{errors.name}</p> : null}
            </div>
            <div className="grid gap-6 sm:grid-cols-2">
              <div>
                <label className={label} htmlFor="email">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className={field}
                  maxLength={255}
                  required
                  aria-invalid={!!errors.email}
                />
                {errors.email ? (
                  <p className="mt-2 text-xs text-destructive">{errors.email}</p>
                ) : null}
              </div>
              <div>
                <label className={label} htmlFor="phone">
                  Phone (optional)
                </label>
                <input id="phone" name="phone" type="tel" className={field} maxLength={20} />
              </div>
            </div>
            <div>
              <label className={label} htmlFor="subject">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                className={field}
                maxLength={120}
                required
                defaultValue={product ? `Enquiry: ${product}` : ""}
                aria-invalid={!!errors.subject}
              />
              {errors.subject ? (
                <p className="mt-2 text-xs text-destructive">{errors.subject}</p>
              ) : null}
            </div>
            <div>
              <label className={label} htmlFor="message">
                Message
              </label>
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
              {errors.message ? (
                <p className="mt-2 text-xs text-destructive">{errors.message}</p>
              ) : null}
            </div>
            <div className="flex flex-wrap gap-3">
              <button type="submit" className="btn-primary">
                Send enquiry
              </button>
              <a
                href={whatsappLink("Hello Pahchan Leather Work, I have an enquiry about your handcrafted leather craft.")}
                target="_blank"
                rel="noreferrer noopener"
                className="btn-ghost border-leather/40 text-leather hover:border-leather hover:bg-leather hover:text-leather-foreground"
              >
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </form>

        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-3xl sm:text-4xl">Direct Contacts</h2>
            <span className="eyebrow text-gold font-semibold">Alwar · Khairthal-Tijara</span>
          </div>
          <span className="gold-rule mt-4" />

          <ul className="mt-8 space-y-6 text-sm">
            <li className="flex gap-4">
              <Mail className="mt-0.5 h-5 w-5 shrink-0 text-leather" strokeWidth={1.8} />
              <div>
                <p className="font-semibold text-foreground">Official Company Email</p>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-leather hover:underline"
                >
                  {site.email}
                </a>
                <p className="text-xs text-muted-foreground mt-0.5">Secondary: {site.secondaryEmail}</p>
              </div>
            </li>

            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-leather" strokeWidth={1.8} />
              <div>
                <p className="font-semibold text-foreground">
                  Chief Executive Officer (CEO) — {site.ceo.name}
                </p>
                <a href={site.ceoPhoneHref} className="text-muted-foreground hover:text-leather transition-colors">
                  {site.ceo.phone}
                </a>
                <p className="text-xs text-muted-foreground mt-0.5">{site.ceo.qualification}</p>
              </div>
            </li>

            <li className="flex gap-4">
              <Phone className="mt-0.5 h-5 w-5 shrink-0 text-leather" strokeWidth={1.8} />
              <div>
                <p className="font-semibold text-foreground">
                  OFPO Facilitator &amp; Director — {site.facilitator.name}
                </p>
                <a href={site.phoneHref} className="text-muted-foreground hover:text-leather transition-colors">
                  {site.phone}
                </a>
                <p className="text-xs text-muted-foreground mt-0.5">POPI (SPECTRA Organisation, Alwar)</p>
              </div>
            </li>

            <li className="flex gap-4">
              <MapPin className="mt-0.5 h-5 w-5 shrink-0 text-leather" strokeWidth={1.8} />
              <div>
                <p className="font-semibold text-foreground">Head &amp; Promoting Office (SPECTRA)</p>
                <address className="not-italic text-muted-foreground mt-0.5 leading-relaxed">
                  {site.address}
                </address>
              </div>
            </li>

            <li className="flex gap-4">
              <Building className="mt-0.5 h-5 w-5 shrink-0 text-leather" strokeWidth={1.8} />
              <div>
                <p className="font-semibold text-foreground">Common Facility Centre (CFC) &amp; Registered Office</p>
                <p className="text-muted-foreground mt-0.5 leading-relaxed">
                  {site.registeredOffice}
                </p>
                <p className="text-xs text-leather font-medium mt-1">
                  Equipped with sole cutting, skiving &amp; post-bed stitching machines (Est. 7 Dec 2023)
                </p>
              </div>
            </li>
          </ul>

          <h3 className="eyebrow mt-10 text-muted-foreground">Visiting &amp; Consultation hours</h3>
          <dl className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <div key={h.day} className="flex justify-between border-b border-border py-2">
                <dt className="text-muted-foreground">{h.day}</dt>
                <dd className="font-medium text-foreground">{h.time}</dd>
              </div>
            ))}
          </dl>

          {/* Google Maps Exact Pin Box */}
          <div className="mt-10 overflow-hidden rounded-lg border border-leather/30 bg-card shadow-sm">
            <div className="flex items-center justify-between border-b border-border bg-muted/40 px-4 py-3">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 text-leather" />
                <span className="text-xs font-semibold uppercase tracking-wider text-foreground">
                  Official Google Maps Pin (SPECTRA Alwar Office)
                </span>
              </div>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-xs font-medium text-leather hover:underline"
              >
                <span>Open in Maps</span>
                <ExternalLink className="h-3 w-3" />
              </a>
            </div>

            <iframe
              title="SPECTRA & Pahchan Leather Work location on Google Maps"
              src={site.mapEmbed}
              loading="lazy"
              className="h-72 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />

            <div className="p-3 bg-muted/20 flex flex-col sm:flex-row items-center justify-between gap-3">
              <p className="text-xs text-muted-foreground text-center sm:text-left">
                E-11, Patel Nagar, Mannaka Road, Alwar — Registered Pin on Google Maps.
              </p>
              <a
                href={site.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary text-xs py-2 px-3 shrink-0"
              >
                Get Directions
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
