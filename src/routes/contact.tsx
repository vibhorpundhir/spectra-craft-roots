import { createFileRoute } from "@tanstack/react-router";
import { useState, useMemo } from "react";
import { z } from "zod";
import { toast } from "sonner";
import {
  ArrowRight,
  Award,
  Building,
  Check,
  CheckCircle2,
  Clock,
  Copy,
  ExternalLink,
  HelpCircle,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  RotateCcw,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { site, whatsappLink } from "@/data/site";
import ofpoStallInspection from "@/assets/real/ofpo-stall-inspection.jpg";

const searchSchema = z.object({ product: z.string().max(120).optional() });

const INQUIRY_TYPES = [
  { id: "bespoke", label: "Bespoke / Custom Juti", prefix: "Bespoke Juti Inquiry" },
  { id: "bulk", label: "Bulk / Corporate Gifting", prefix: "Bulk / Institutional Order" },
  { id: "visit", label: "CFC Studio & Workshop Visit", prefix: "CFC Studio Visit Request" },
  { id: "general", label: "General Artisan Inquiry", prefix: "Artisan Enterprise Inquiry" },
] as const;

type InquiryTypeId = (typeof INQUIRY_TYPES)[number]["id"];

const schema = z.object({
  name: z.string().trim().min(1, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().max(25).optional(),
  organization: z.string().trim().max(100).optional(),
  subject: z.string().trim().min(1, "Please provide an enquiry subject").max(120),
  message: z.string().trim().min(5, "Please share a few details about your requirement").max(2000),
});

interface SubmittedData {
  name: string;
  email: string;
  phone?: string;
  organization?: string;
  inquiryType: string;
  subject: string;
  message: string;
}

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
        content:
          "Direct contact, official emails, CFC address, and Google Maps pin for our artisan collective. Promoted by SPECTRA Organisation and NABARD Bank.",
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
  const [selectedType, setSelectedType] = useState<InquiryTypeId>(product ? "bespoke" : "general");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submittedData, setSubmittedData] = useState<SubmittedData | null>(null);
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Compute live open status (IST UTC+5:30)
  const officeStatus = useMemo(() => {
    try {
      const now = new Date();
      // Calculate IST time
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + 3600000 * 5.5);
      const day = istTime.getDay(); // 0 is Sunday, 6 is Saturday
      const hour = istTime.getHours();
      const minute = istTime.getMinutes();
      const timeVal = hour * 60 + minute;

      if (day === 0) {
        return { isOpen: false, text: "Closed on Sundays · Reopens Monday 10:00 AM IST" };
      }
      if (day >= 1 && day <= 5) {
        if (timeVal >= 10 * 60 && timeVal < 18 * 60) {
          return { isOpen: true, text: "Studio Open Now · Closes at 6:00 PM IST" };
        }
        return { isOpen: false, text: "Currently Closed · Open Mon–Fri 10:00 AM – 6:00 PM" };
      }
      if (day === 6) {
        if (timeVal >= 10 * 60 && timeVal < 16 * 60) {
          return { isOpen: true, text: "Studio Open Today · Closes at 4:00 PM IST" };
        }
        return { isOpen: false, text: "Currently Closed · Reopens Monday 10:00 AM" };
      }
    } catch {
      // Fallback
    }
    return { isOpen: true, text: "Common Facility Centre Open Mon–Sat" };
  }, []);

  function handleTypeChange(typeId: InquiryTypeId) {
    setSelectedType(typeId);
  }

  function handleCopy(text: string, key: string) {
    if (navigator?.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      toast.success("Copied to clipboard!");
      setTimeout(() => setCopiedKey(null), 2500);
    }
  }

  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = Object.fromEntries(new FormData(e.currentTarget));
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      const next: Record<string, string> = {};
      for (const issue of parsed.error.issues) next[String(issue.path[0])] = issue.message;
      setErrors(next);
      toast.error("Please fill in the required fields before submitting.");
      return;
    }
    setErrors({});
    const v = parsed.data;

    const payload: SubmittedData = {
      name: v.name,
      email: v.email,
      phone: v.phone || undefined,
      organization: v.organization || undefined,
      inquiryType: INQUIRY_TYPES.find((t) => t.id === selectedType)?.label || "General Inquiry",
      subject: v.subject,
      message: v.message,
    };

    setSubmittedData(payload);

    // Format rich body
    const bodyLines = [
      `Official Artisan Enquiry — Pahchan Leather Work`,
      `--------------------------------------------------`,
      `Enquiry Type: ${payload.inquiryType}`,
      `From: ${payload.name}`,
      `Email: ${payload.email}`,
      `Phone: ${payload.phone || "Not provided"}`,
      payload.organization ? `Organization: ${payload.organization}` : null,
      ``,
      `Requirement:`,
      payload.message,
      ``,
      `--------------------------------------------------`,
      `Sent via Pahchan Online Portal (Promoted by SPECTRA & NABARD)`,
    ].filter(Boolean) as string[];

    const fullBody = bodyLines.join("\n");

    // Launch email client
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(v.subject)}&body=${encodeURIComponent(fullBody)}`;
    toast.success("Enquiry prepared! Opening your mail application.");
  }

  const defaultSubject = useMemo(() => {
    if (product) return `Bespoke Inquiry: ${product}`;
    const curr = INQUIRY_TYPES.find((t) => t.id === selectedType);
    return curr ? `${curr.prefix} — Pahchan Leather Work` : "Artisan Enquiry";
  }, [product, selectedType]);

  const field =
    "mt-2 w-full rounded-md border border-input bg-card px-4 py-3.5 text-sm outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-gold focus:ring-1 focus:ring-gold/30 focus:bg-background";
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
      <section className="shell -mt-10 relative z-10 mb-14">
        <div className="surface-card rounded-2xl border border-gold/30 p-6 sm:p-8 shadow-2xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Building className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow text-[0.6rem] text-leather">Legal Form</p>
                <p className="text-xs font-semibold text-foreground">
                  Producer Co. Ltd (Co. Act 2013)
                </p>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow text-[0.6rem] text-leather">CIN Registration</p>
                <div className="flex items-center gap-1.5">
                  <p className="text-xs font-mono font-semibold text-foreground">{site.cin}</p>
                  <button
                    type="button"
                    onClick={() => handleCopy(site.cin, "cin")}
                    title="Copy CIN"
                    className="text-muted-foreground hover:text-gold transition-colors"
                  >
                    {copiedKey === "cin" ? (
                      <Check className="h-3 w-3 text-green-600" />
                    ) : (
                      <Copy className="h-3 w-3" />
                    )}
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/15 text-gold">
                <Award className="h-5 w-5" />
              </div>
              <div>
                <p className="eyebrow text-[0.6rem] text-leather">Institutional Promoters</p>
                <p className="text-xs font-semibold text-foreground">
                  SPECTRA Organisation &amp; NABARD Bank
                </p>
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

      {/* Main Section: Form & Direct Contact Channels */}
      <section className="shell pb-20 md:pb-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left: Contact Form or Success Confirmation */}
          <div className="lg:col-span-7">
            <div className="surface-card rounded-2xl border border-gold/25 p-7 sm:p-10 shadow-lg relative">
              <span className="eyebrow text-leather flex items-center gap-2">
                <span className="h-px w-6 bg-gold" />
                Direct Inquiry Desk
              </span>
              <h2 className="mt-3 font-display text-3xl font-bold text-foreground">
                Send an Official Enquiry
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                We typically respond within 24 hours. Connect regarding retail bespoke craft, bulk
                wholesale, or workshop visits.
              </p>

              {/* Submitted Feedback State */}
              {submittedData ? (
                <div className="mt-8 rounded-xl border border-emerald-500/30 bg-emerald-500/10 p-6 space-y-6">
                  <div className="flex items-start gap-3.5">
                    <CheckCircle2 className="h-6 w-6 text-emerald-600 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-display text-lg font-bold text-foreground">
                        Enquiry Prepared Successfully!
                      </h3>
                      <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                        Your default email client has been triggered to dispatch this message
                        directly to <strong className="text-foreground">{site.email}</strong>.
                      </p>
                    </div>
                  </div>

                  {/* Summary of what was sent */}
                  <div className="rounded-lg border border-border/70 bg-card/80 p-4 space-y-2 text-xs">
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Subject:</strong> {submittedData.subject}
                    </p>
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Inquirer:</strong> {submittedData.name} (
                      {submittedData.email})
                    </p>
                    {submittedData.phone && (
                      <p className="text-muted-foreground">
                        <strong className="text-foreground">Contact:</strong> {submittedData.phone}
                      </p>
                    )}
                    <p className="text-muted-foreground">
                      <strong className="text-foreground">Type:</strong> {submittedData.inquiryType}
                    </p>
                  </div>

                  {/* WhatsApp Quick Link with identical prefilled text */}
                  <div className="space-y-3 pt-2">
                    <p className="text-xs font-semibold text-foreground">
                      Need an instant response? Send this exact message directly to our WhatsApp
                      Desk:
                    </p>
                    <a
                      href={whatsappLink(
                        `*Artisan Enquiry from Website*\nName: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone || "-"}\nType: ${submittedData.inquiryType}\n\nRequirement:\n${submittedData.message}`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold w-full rounded-md inline-flex items-center justify-center gap-2 py-3 text-center text-sm font-semibold shadow-md"
                    >
                      <MessageCircle className="h-4 w-4" /> Send Instant Message on WhatsApp (+91
                      94148 57385)
                    </a>
                  </div>

                  <div className="flex flex-wrap items-center justify-between gap-3 pt-2 border-t border-emerald-500/20">
                    <button
                      type="button"
                      onClick={() =>
                        handleCopy(
                          `Subject: ${submittedData.subject}\nName: ${submittedData.name}\nEmail: ${submittedData.email}\nPhone: ${submittedData.phone || "-"}\nMessage:\n${submittedData.message}`,
                          "enquiry-text",
                        )
                      }
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {copiedKey === "enquiry-text" ? (
                        <Check className="h-3.5 w-3.5 text-green-600" />
                      ) : (
                        <Copy className="h-3.5 w-3.5" />
                      )}
                      Copy Message Text
                    </button>

                    <button
                      type="button"
                      onClick={() => setSubmittedData(null)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-leather hover:underline"
                    >
                      <RotateCcw className="h-3.5 w-3.5" /> Submit Another Enquiry
                    </button>
                  </div>
                </div>
              ) : (
                /* Contact Form */
                <form onSubmit={onSubmit} className="mt-8 space-y-6" noValidate>
                  {/* Category Chips */}
                  <div>
                    <label className={label}>Select Enquiry Purpose</label>
                    <div className="mt-2.5 flex flex-wrap gap-2">
                      {INQUIRY_TYPES.map((type) => {
                        const active = selectedType === type.id;
                        return (
                          <button
                            key={type.id}
                            type="button"
                            onClick={() => handleTypeChange(type.id)}
                            className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition-all ${
                              active
                                ? "bg-leather text-cream shadow-sm ring-1 ring-gold/40"
                                : "border border-border bg-card text-muted-foreground hover:border-gold/50 hover:text-foreground"
                            }`}
                          >
                            {type.label}
                          </button>
                        );
                      })}
                    </div>
                  </div>

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
                      {errors.name ? (
                        <p className="mt-1 text-xs text-destructive">{errors.name}</p>
                      ) : null}
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
                      {errors.email ? (
                        <p className="mt-1 text-xs text-destructive">{errors.email}</p>
                      ) : null}
                    </div>
                  </div>

                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="phone" className={label}>
                        Phone / WhatsApp (Optional)
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
                      <label htmlFor="organization" className={label}>
                        Organization / Company (Optional)
                      </label>
                      <input
                        id="organization"
                        name="organization"
                        type="text"
                        placeholder="e.g. Design Studio / Export House"
                        className={field}
                      />
                    </div>
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
                      defaultValue={defaultSubject}
                      placeholder="e.g. Bespoke Bridal Juti Order"
                      className={field}
                    />
                    {errors.subject ? (
                      <p className="mt-1 text-xs text-destructive">{errors.subject}</p>
                    ) : null}
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
                      placeholder="Describe your design requirement, preferred size, quantity, custom embroidery pattern, or scheduled visit date..."
                      className={field}
                    />
                    {errors.message ? (
                      <p className="mt-1 text-xs text-destructive">{errors.message}</p>
                    ) : null}
                  </div>

                  <div className="pt-2">
                    <button
                      type="submit"
                      className="btn-gold w-full sm:w-auto rounded-md inline-flex items-center justify-center gap-2 cursor-pointer py-3.5 px-8 text-sm font-semibold shadow-md transition-transform hover:-translate-y-0.5 active:translate-y-0"
                    >
                      <Send className="h-4 w-4" /> Send Enquiry via Official Mail
                    </button>
                    <span className="mt-3 block text-xs text-muted-foreground">
                      * Triggers your default email client with all fields formatted. Direct
                      WhatsApp fallback also provided upon submission.
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Right: Direct Channels, Office Hours & Maps */}
          <div className="lg:col-span-5 space-y-8">
            {/* WhatsApp Quick Connect Card */}
            <div className="rounded-2xl border border-gold/40 bg-gradient-to-br from-sand/50 to-sand/20 p-7 sm:p-8 shadow-md relative overflow-hidden">
              <div className="flex items-center gap-3 text-gold">
                <MessageCircle className="h-6 w-6" />
                <span className="eyebrow text-leather font-bold">Instant Concierge</span>
              </div>
              <h3 className="mt-3 font-display text-2xl font-bold text-foreground">
                Artisan WhatsApp Desk
              </h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                Connect immediately with our cluster coordinator for rapid questions on product
                dimensions, bespoke bridal sizing, wholesale pricing, or studio visits.
              </p>
              <a
                href={whatsappLink(
                  "Hello! I would like to enquire about Pahchan leather craft orders and visiting the CFC studio.",
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 btn-gold w-full rounded-md text-center inline-flex items-center justify-center gap-2 py-3 text-sm font-semibold shadow-md"
              >
                Chat on WhatsApp (+91 94148 57385) <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            {/* Direct Contacts Card */}
            <div className="surface-card rounded-2xl border border-gold/25 p-7 sm:p-8 shadow-md space-y-6">
              {/* Studio Status Live Indicator */}
              <div className="flex items-center justify-between pb-4 border-b border-border/60">
                <div className="flex items-center gap-2">
                  <span
                    className={`h-2.5 w-2.5 rounded-full ${officeStatus.isOpen ? "bg-emerald-500 animate-pulse" : "bg-muted-foreground/60"}`}
                  />
                  <span className="text-xs font-semibold text-foreground">
                    {officeStatus.isOpen ? "Live Status: Open" : "Live Status: After Hours"}
                  </span>
                </div>
                <span className="text-[0.68rem] text-muted-foreground flex items-center gap-1 font-mono">
                  <Clock className="h-3 w-3 text-gold" /> IST (UTC+5:30)
                </span>
              </div>

              <div>
                <span className="eyebrow text-gold text-[0.62rem]">Enterprise Leadership</span>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xs font-bold text-foreground">CEO — {site.ceo.name}</p>
                      <p className="text-[0.72rem] text-muted-foreground">
                        {site.ceo.title} · {site.ceo.qualification}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Direct:{" "}
                        <a
                          href={site.ceoPhoneHref}
                          className="text-leather font-semibold hover:underline"
                        >
                          {site.ceoPhone}
                        </a>
                      </p>
                    </div>
                    <a
                      href={site.ceoPhoneHref}
                      className="shrink-0 rounded-md border border-gold/40 p-2 text-gold hover:bg-gold/10 transition-colors"
                      title="Call CEO"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="flex items-start justify-between gap-4 pt-3 border-t border-border/40">
                    <div>
                      <p className="text-xs font-bold text-foreground">
                        Facilitator — {site.facilitator.name}
                      </p>
                      <p className="text-[0.72rem] text-muted-foreground">
                        {site.facilitator.title}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        Direct:{" "}
                        <a
                          href={site.phoneHref}
                          className="text-leather font-semibold hover:underline"
                        >
                          {site.phone}
                        </a>
                      </p>
                    </div>
                    <a
                      href={site.phoneHref}
                      className="shrink-0 rounded-md border border-gold/40 p-2 text-gold hover:bg-gold/10 transition-colors"
                      title="Call Facilitator"
                    >
                      <Phone className="h-4 w-4" />
                    </a>
                  </div>

                  <div className="pt-3 border-t border-border/40">
                    <p className="text-xs font-bold text-foreground">
                      Official Communications Email
                    </p>
                    <div className="mt-1 flex items-center justify-between">
                      <a
                        href={`mailto:${site.email}`}
                        className="text-xs text-leather font-bold hover:underline"
                      >
                        {site.email}
                      </a>
                      <button
                        type="button"
                        onClick={() => handleCopy(site.email, "email")}
                        title="Copy Email"
                        className="text-muted-foreground hover:text-gold transition-colors p-1"
                      >
                        {copiedKey === "email" ? (
                          <Check className="h-3.5 w-3.5 text-green-600" />
                        ) : (
                          <Copy className="h-3.5 w-3.5" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Physical Locations */}
              <div className="pt-4 border-t border-border/60">
                <span className="eyebrow text-gold text-[0.62rem]">
                  Studio &amp; Office Locations
                </span>
                <div className="mt-4 space-y-3.5 text-xs leading-relaxed text-muted-foreground">
                  <div className="rounded-lg border border-border/60 bg-muted/20 p-3">
                    <strong className="text-foreground block font-semibold">
                      Common Facility Centre (CFC) &amp; Artisan Studio:
                    </strong>
                    <span>{site.cfcAddress}</span>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-muted/20 p-3">
                    <strong className="text-foreground block font-semibold">
                      Registered Head Office:
                    </strong>
                    <span>{site.registeredOffice}</span>
                  </div>
                  <div className="rounded-lg border border-border/60 bg-muted/20 p-3">
                    <strong className="text-foreground block font-semibold">Liaison Office:</strong>
                    <span>{site.address}</span>
                  </div>
                </div>
              </div>

              {/* Visiting Hours */}
              <div className="pt-4 border-t border-border/60">
                <span className="eyebrow text-gold text-[0.62rem]">
                  Common Facility Centre Operating Hours
                </span>
                <div className="mt-3 space-y-1.5 text-xs">
                  {site.hours.map((h) => (
                    <div key={h.day} className="flex justify-between py-0.5 text-muted-foreground">
                      <span>{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Maps Embed */}
            <div className="rounded-2xl border border-gold/30 overflow-hidden shadow-lg bg-card">
              <div className="p-4 border-b border-gold/20 flex items-center justify-between">
                <span className="eyebrow text-leather flex items-center gap-1.5">
                  <MapPin className="h-3.5 w-3.5 text-gold" /> Alwar Common Facility Location
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

        {/* FAQ Section */}
        <div className="mt-20 pt-16 border-t border-gold/20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="eyebrow text-gold flex items-center justify-center gap-2">
              <HelpCircle className="h-4 w-4" /> Frequently Asked Questions
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground">
              Artisan Ordering &amp; Inquiries
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Everything you need to know about placing custom craft orders, sizing, visiting the
              studio, and institutional procurement.
            </p>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
            <div className="surface-card rounded-xl border border-gold/20 p-6">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold shrink-0" /> Can I request bespoke bridal
                embroidery or custom sizing?
              </h3>
              <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                Yes! Every pair can be custom-fitted. We can embroider specific bridal color
                palettes, initials, or use custom foot traces. Share your requirements through our
                form or WhatsApp concierge.
              </p>
            </div>

            <div className="surface-card rounded-xl border border-gold/20 p-6">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold shrink-0" /> What is the minimum quantity for
                corporate or bulk gifting?
              </h3>
              <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                We accommodate batch orders starting from 15 pairs up to 500+ pairs. For
                institutional and corporate clients, we provide personalized branding on insoles and
                luxury fabric dust pouches.
              </p>
            </div>

            <div className="surface-card rounded-xl border border-gold/20 p-6">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold shrink-0" /> Can visitors and students visit
                the Common Facility Centre?
              </h3>
              <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                Yes, our Common Facility Centre in Kishangarh Bas welcomes design researchers,
                institutional buyers, and craft admirers. Please notify us 24–48 hours prior to
                arrange artisan demonstrations.
              </p>
            </div>

            <div className="surface-card rounded-xl border border-gold/20 p-6">
              <h3 className="font-display text-base font-bold text-foreground flex items-center gap-2">
                <Sparkles className="h-4 w-4 text-gold shrink-0" /> Are invoices issued under our
                registered Producer Company?
              </h3>
              <p className="mt-2.5 text-xs text-muted-foreground leading-relaxed">
                Yes. All official transactions, quotes, and bills are issued under Pahchan Ismailpur
                Leather Producer Company Limited (CIN: U01500RJ2023PTC087293, GSTIN:
                08AANCP7187P1Z9), promoted by SPECTRA &amp; NABARD.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
