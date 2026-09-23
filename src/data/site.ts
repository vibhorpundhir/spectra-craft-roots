export const site = {
  name: "Pahchan Leather Work",
  brandName: "Pahchan Leather Work",
  legalName: "Pahchan Ismailpur Leather Producer Company Limited",
  cin: "U01500RJ2023PTC087293",
  gstin: "08AANCP7187P1Z9",
  pan: "AANCP7187P",
  tan: "JPRP09059B",
  incorporationDate: "28 April 2023",
  parentOrg: "SPECTRA",
  parentFullName: "Society for Public Education Cultural Training and Rural Action (POPI)",
  supportingBody: "NABARD (National Bank for Agriculture and Rural Development)",
  tagline: "From Hands to Heritage · Traditional Handcrafted Leather",
  est: "2023",
  description:
    "Pahchan Ismailpur Leather Producer Company Limited (Pahchan Leather Work) is an artisan-owned producer company incorporated under the Companies Act 2013 on 28 April 2023. Supported by NABARD and promoted by SPECTRA, it unites 200 rural leather artisans (199 SC/ST shareholders, 92 women artisans) across Ismailpur and Kishangarh Bas to preserve generational craft and build sustainable livelihoods.",
  
  // Contacts
  email: "pahchanismailpurleatherpcl@gmail.com",
  secondaryEmail: "spectraalw@gmail.com",
  phone: "+91 94148 57385",
  phoneHref: "tel:+919414857385",
  ceoPhone: "+91 94604 72554",
  ceoPhoneHref: "tel:+919460472554",
  landline: "0144-3500145",
  landlineHref: "tel:01443500145",
  whatsapp: "919414857385",
  
  // Leadership & Team
  ceo: {
    name: "Mahesh Chouhan",
    title: "Chief Executive Officer (CEO)",
    qualification: "MARD, Graduate in Arts (25 Yrs Experience)",
    phone: "+91 94604 72554",
  },
  facilitator: {
    name: "Pradeep Singh Pundhir / Madhu Rani",
    title: "OFPO Facilitator & Director, SPECTRA",
    phone: "+91 94148 57385",
  },

  // Addresses
  registeredOffice: "C/o Kusumlata, W/o Pradeep Kr, Nagla Raysis, Katoriwala, Kishan Garh Bass, Alwar (Khairthal-Tijara), Rajasthan – 301405",
  address: "E-11, Patel Nagar, Mannaka Road, Alwar, Rajasthan – 301001",
  cfcAddress: "Common Facility Centre (CFC) & Design Studio, Ismailpur, Kishangarh Bas (Est. 7 Dec 2023)",
  
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
    "https://maps.google.com/maps?q=SPECTRA%20Organization%2C%20E-11%20Patel%20Nagar%2C%20Mannaka%20Road%2C%20Alwar%2C%20Rajasthan%20301001&t=&z=16&ie=UTF8&iwloc=&output=embed",
  mapLink:
    "https://www.google.com/maps/search/?api=1&query=SPECTRA+Organization,+E-11,+Patel+Nagar,+Mannaka+Road,+Alwar,+Rajasthan+301001",
} as const;

export function whatsappLink(message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message.slice(0, 900))}`;
}

export const navigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Craft", to: "/ofpo" },
  { label: "Gallery", to: "/gallery" },
  { label: "Impact", to: "/impact" },
  { label: "Contact", to: "/contact" },
] as const;

export const impact = [
  { value: "200", label: "Artisans mobilised (6 Producer Groups)" },
  { value: "199", label: "SC & ST artisan shareholders" },
  { value: "92", label: "Women leather craftswomen (46%)" },
  { value: "35", label: "Artisans trained at FDDI Noida" },
];
