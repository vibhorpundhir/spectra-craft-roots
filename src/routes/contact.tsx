import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { Award, Building, ExternalLink, Mail, MapPin, MessageCircle, Phone, Send, ShieldCheck, Sparkles } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site, whatsappLink } from "@/data/site";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";

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
      { title: "Contact Us — Artisan Enterprise | Promoted by SPECTRA Organisation & NABARD Bank" },
      {
        name: "description",
        content:
          "Reach Pahchan Ismailpur Leather Producer Company Limited (Pahchan Leather Work). Promoted by SPECTRA Organisation and NABARD Bank. Contact CEO Mahesh Chouhan, email pahchanismailpurleatherpcl@gmail.com, exact Google Maps location.",
      },
      { property: "og:title", content: "Contact Pahchan Ismailpur Leather Producer Company" },
      {
        property: "og:description",
        content: "Direct contact, official emails, CFC address, and Google Maps pin for our artisan collective. Promoted by SPECTRA Organisation and NABARD Bank.",
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
    "mt-2 w-full rounded-md border border-input bg-card px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-leather focus:bg-background";
  const label = "eyebrow text-muted-foreground text-[0.62rem]";

  return (
    <>
      <PageHero
        tone="dark"
        eyebrow="Artisan Concierge & Institutional Office"
        title="Connect Directly With Our Artisan Enterprise."
        intro="Questions about artisanal craft orders, institutional partnerships, custom leather sizing, or visiting our Common Facility Centre (CFC) in Kishangarh Bas — our leadership team is ready to assist you."
        image={ofpoStallInspection}
        alt="Pahchan team and artisans at the studio"
        badgeText="Promoted by SPECTRA Organisation & NABARD Bank"
      />

      {/* Official Credentials Banner */}
      <section className="shell -mt-10 relative z-10 mb-16">
        <div className="surface-card rounded-2xl border border-gold/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow text-[0.6rem] text-leather">Legal Form</p>
                <p className="text-xs font-semibold text-foreground">Producer Co. Ltd (Co. Act 2013)</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow text-[0.6rem] text-leather">CIN Registration</p>
                <p className="text-xs font-mono font-semibold text-foreground">{site.cin}</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow text-[0.6rem] text-leather">Institutional Promoters</p>
                <p className="text-xs font-semibold text-foreground">SPECTRA Organisation &amp; NABARD Bank</p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <MapPin className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow text-[0.6rem] text-leather">Cluster Location</p>
                <p className="text-xs font-semibold text-foreground">Ismailpur, Alwar, Rajasthan</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid: Form + Contact Info */}
      <section className="shell pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <div className="surface-card rounded-2xl border border-gold/25 p-8 sm:p-10 shadow-lg">
              <span className="eyebrow text-leather flex items-center gap-2">
                <span className="h-px w-6 bg-gold" />
                Direct Inquiry
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
                Send an Official Enquiry
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We typically respond within 24 hours. For urgent bulk requests, use WhatsApp below.
              </p>

              <form onSubmit={onSubmit} className="mt-8 space-y-6" noValidate>
                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className={label}>
                      Full Name *
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      required
                      placeholder="e.g. Anand Sharma"
                      className={field}
                    />
                    {errors.name ? <p className="mt-1 text-xs text-destructive">{errors.name}</p> : null}
                  </div>

                  <div>
                    <label htmlFor="email" className={label}>
                      Email Address *
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      required
                      placeholder="you@example.com"
                      className={field}
                    />
                    {errors.email ? <p className="mt-1 text-xs text-destructive">{errors.email}</p> : null}
                  </div>
                </div>

                <div className="grid gap-6 sm:grid-cols-2">
                  <div>
                    <label htmlFor="phone" className={label}>
                      Phone / Mobile (Optional)
                    </label>
                    <input
                      id="phone"
                      name="phone"
                      type="tel"
                      placeholder="+91 98765 43210"
                      className={field}
                    />
                  </div>

                  <div>
                    <label htmlFor="subject" className={label}>
                      Enquiry Subject *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      defaultValue={product ? `Bespoke Inquiry: ${product}` : ""}
                      placeholder="e.g. Custom Bridal Juti Order"
                      className={field}
                    />
                    {errors.subject ? <p className="mt-1 text-xs text-destructive">{errors.subject}</p> : null}
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className={label}>
                    Message or Requirements *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Describe your requirement, quantity, preferred leather or delivery location..."
                    className={field}
                  />
                  {errors.message ? <p className="mt-1 text-xs text-destructive">{errors.message}</p> : null}
                </div>

                <button
                  type="submit"
                  className="btn-gold w-full sm:w-auto rounded-md inline-flex items-center justify-center gap-2 cursor-pointer"
                >
                  <Send className="h-4 w-4" /> Send Enquiry via Email
                </button>
              </form>
            </div>
          </div>

          {/* Right: Direct Channels & Maps */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Quick Connect Card */}
            <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-sand/50 to-sand/20 p-8 shadow-md">
              <div className="flex items-center gap-3 text-gold">
                <MessageCircle className="h-6 w-6" />
                <span className="eyebrow text-leather font-bold">Instant Concierge</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                Artisan WhatsApp Desk
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Connect directly with our cluster coordinator for product queries, sizing advice, and workshop visits.
              </p>
              <a
                href={whatsappLink("Hello! I would like to enquire about Pahchan leather craft orders and visiting the CFC studio.")}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn-gold w-full rounded-md text-center inline-flex items-center justify-center gap-2"
              >
                Chat on WhatsApp (+91 94148 57385) <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Direct Contacts Card */}
            <div className="surface-card rounded-2xl border border-gold/25 p-8 shadow-md space-y-6">
              <div>
                <span className="eyebrow text-gold text-[0.62rem]">Leadership Contacts</span>
                <div className="mt-4 space-y-3">
                  <div>
                    <p className="text-xs font-bold text-foreground">CEO — {site.ceo.name}</p>
                    <p className="text-xs text-muted-foreground">Phone: <a href={site.ceoPhoneHref} className="text-leather font-semibold hover:underline">{site.ceoPhone}</a></p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Facilitator — {site.facilitator.name} (SPECTRA)</p>
                    <p className="text-xs text-muted-foreground">Phone: <a href={site.phoneHref} className="text-leather font-semibold hover:underline">{site.phone}</a></p>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-foreground">Company Email</p>
                    <a href={`mailto:${site.email}`} className="text-xs text-leather font-bold hover:underline">{site.email}</a>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-border/60">
                <span className="eyebrow text-gold text-[0.62rem]">Centres &amp; Studio</span>
                <div className="mt-4 space-y-3 text-xs leading-relaxed text-muted-foreground">
                  <div>
                    <strong className="text-foreground block">Head Office:</strong>
                    {site.address}
                  </div>
                  <div>
                    <strong className="text-foreground block">Common Facility Centre (CFC):</strong>
                    {site.cfcAddress}
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl border border-gold/30 overflow-hidden shadow-lg bg-card">
              <div className="p-4 border-b border-gold/20 flex items-center justify-between">
                <span className="eyebrow text-leather flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-gold" /> Google Map Location
                </span>
                <a
                  href={site.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-gold hover:underline inline-flex items-center gap-1"
                >
                  Open in Maps <ExternalLink className="h-3 w-3" />
                </a>
              </div>
              <iframe
                title="Pahchan SPECTRA Location Map"
                src={site.mapEmbed}
                width="100%"
                height="240"
                style={{ border: 0 }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
