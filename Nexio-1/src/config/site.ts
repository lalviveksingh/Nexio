/**
 * Central business configuration.
 *
 * TODO(client): every contact value below is intentionally EMPTY until NEXIO supplies
 * verified details. Set them through environment variables (see `.env.example`).
 * Nothing here is fabricated — when a value is missing the UI shows an honest
 * "to be confirmed" state instead of a made-up phone, email or address.
 *
 * NEXT_PUBLIC_* values are inlined at build time, so rebuild after changing them.
 */
const clean = (value: string | undefined) => {
  const v = value?.trim();
  return v ? v : null;
};

export const siteConfig = {
  brand: "NEXIO",
  legalName: "NEXIO R&D TECH PRIVATE LIMITED",
  tagline: "Innovate. Educate. Elevate.",
  siteUrl: clean(process.env.NEXT_PUBLIC_SITE_URL) ?? "http://localhost:3000",
  contact: {
    /** TODO(client): business phone, e.g. "+91 …" */
    phone: clean(process.env.NEXT_PUBLIC_CONTACT_PHONE),
    /** TODO(client): public enquiry email address */
    email: clean(process.env.NEXT_PUBLIC_CONTACT_EMAIL),
    /** TODO(client): WhatsApp number, digits only with country code, e.g. 91XXXXXXXXXX */
    whatsapp: clean(process.env.NEXT_PUBLIC_WHATSAPP_NUMBER)?.replace(/\D/g, "") || null,
    /** TODO(client): registered / office address */
    address: clean(process.env.NEXT_PUBLIC_BUSINESS_ADDRESS),
    /** TODO(client): business hours */
    hours: clean(process.env.NEXT_PUBLIC_BUSINESS_HOURS),
  },
  /** TODO(client): official social profile URLs. Empty entries are not rendered. */
  social: [
    { label: "LinkedIn", href: clean(process.env.NEXT_PUBLIC_SOCIAL_LINKEDIN) },
    { label: "Instagram", href: clean(process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM) },
    { label: "Facebook", href: clean(process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK) },
    { label: "YouTube", href: clean(process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE) },
  ].filter((s): s is { label: string; href: string } => Boolean(s.href)),
} as const;

export function whatsappHref(message?: string) {
  const number = siteConfig.contact.whatsapp;
  if (!number) return null;
  const text = message ? `?text=${encodeURIComponent(message)}` : "";
  return `https://wa.me/${number}${text}`;
}

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products-services", label: "Products & Services" },
  { href: "/classroom-solutions", label: "Classroom Solutions" },
  { href: "/interactive-flat-panels", label: "Interactive Flat Panels" },
  { href: "/contact", label: "Contact" },
] as const;
