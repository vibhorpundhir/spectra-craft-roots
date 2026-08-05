export const site = {
  name: "SPECTRA",
  fullName: "Society for Public Education Cultural Training and Rural Action",
  tagline: "Every product carries a story of hope, hard work and dignity.",
  description:
    "SPECTRA is a voluntary, non-profit, non-government organisation working since 1996 in rural Rajasthan — supporting farmers, women and artisans through education, livelihood, women's empowerment, natural resource management and youth development.",
  phone: "+91 94148 57385",
  phoneHref: "tel:+919414857385",
  landline: "0144-3500145",
  landlineHref: "tel:01443500145",
  whatsapp: "919414857385",
  email: "spectraalw@gmail.com",
  address: "E-11, Patel Nagar, Mannaka Road, Alwar, Rajasthan – 301001",
  hours: [
    { day: "Monday – Friday", time: "10:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  social: [
    { label: "Instagram", href: "https://www.instagram.com/spectraorganisation/" },
    { label: "Facebook", href: "https://www.facebook.com/spectraalwar" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/spectraalwar/" },
    { label: "X (Twitter)", href: "https://twitter.com/spectraalw" },
    { label: "YouTube", href: "https://www.youtube.com/channel/UCP3gJdb8E2GtEMc2mDc63Og" },
  ],
  mapEmbed:
    "https://www.google.com/maps?q=Patel%20Nagar,%20Alwar,%20Rajasthan%20301001&output=embed",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message.slice(0, 900))}`;
}

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Impact", to: "/impact" },
  { label: "FPO", to: "/fpo" },
  { label: "OFPO", to: "/ofpo" },
  { label: "Products", to: "/products" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

export const impact = [
  { value: "1996", label: "Working in rural Rajasthan since" },
  { value: "FPO & OFPO", label: "Producer collectives supported" },
  { value: "8", label: "Areas of community action" },
  { value: "Non-profit", label: "Voluntary, non-government society" },
];
