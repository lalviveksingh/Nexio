import Link from "next/link";
import { siteConfig, navItems, whatsappHref } from "@/config/site";
import { concept } from "@/config/concept";
import { Logo } from "@/components/Logo";

export function SiteFooter() {
  const { contact } = siteConfig;
  const wa = whatsappHref("Hello NEXIO, I would like to make an enquiry.");
  const year = new Date().getFullYear();
  const hasContact = contact.phone || contact.email || contact.address || wa;

  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div className="footer-brand">
          <Logo />
          <p className="footer-tagline">{siteConfig.tagline}</p>
          <p className="footer-line">{concept.tagline}</p>
        </div>

        <nav className="footer-col" aria-label="Footer">
          <p className="footer-heading">Explore</p>
          <ul>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="footer-col">
          <p className="footer-heading">Contact</p>
          {hasContact ? (
            <ul>
              {contact.phone && (
                <li>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a>
                </li>
              )}
              {contact.email && (
                <li>
                  <a href={`mailto:${contact.email}`}>{contact.email}</a>
                </li>
              )}
              {wa && (
                <li>
                  <a href={wa} target="_blank" rel="noopener noreferrer">
                    WhatsApp
                  </a>
                </li>
              )}
              {contact.address && <li className="footer-address">{contact.address}</li>}
            </ul>
          ) : (
            <p className="footer-muted">
              Contact details will be published soon. Until then, please use the{" "}
              <Link href="/contact">enquiry form</Link>.
            </p>
          )}
          {siteConfig.social.length > 0 && (
            <ul className="footer-social">
              {siteConfig.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div className="container footer-bottom">
        <p>
          © {year} {siteConfig.legalName}. All rights reserved.
        </p>
        <p className="footer-muted">Imagery shown is illustrative concept photography, not specific NEXIO products or installations.</p>
      </div>
    </footer>
  );
}
