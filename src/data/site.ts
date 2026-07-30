export const site = {
  name: "SPECTRA",
  tagline: "Empowering Farmers & Artisans Together",
  description:
    "SPECTRA unites Farmer Producer Organisations and Other Farmer Producer Organisations — bringing sustainably grown spices, milk and dairy together with handcrafted leather juti, shoes and goods.",
  phone: "+91 98765 43210",
  phoneHref: "tel:+919876543210",
  whatsapp: "919876543210",
  email: "hello@spectra.org",
  address: "SPECTRA Producer Company, Civil Lines, Alwar, Rajasthan 301001, India",
  hours: [
    { day: "Monday – Friday", time: "9:30 AM – 6:30 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "Facebook", href: "https://facebook.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
    { label: "YouTube", href: "https://youtube.com" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Alwar,Rajasthan,India&output=embed",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message.slice(0, 900))}`;
}

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "FPO", to: "/fpo" },
  { label: "OFPO", to: "/ofpo" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const impact = [
  { value: "2,400+", label: "Farmer members" },
  { value: "600+", label: "Leather artisans" },
  { value: "48", label: "Villages reached" },
  { value: "70+", label: "Products crafted" },
];
