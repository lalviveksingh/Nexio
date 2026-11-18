import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { siteConfig, whatsappHref } from "@/config/site";

/**
 * Contact channels. Every value comes from configuration; unconfigured values show an
 * honest "to be confirmed" note instead of an invented number, email or address.
 */
export function ContactDetails() {
  const { contact } = siteConfig;
  const wa = whatsappHref("Hello NEXIO, I would like to make an enquiry.");
  const pending = <span className="contact-pending">To be confirmed</span>;

  return (
    <div className="contact-details">
      <div className="contact-whatsapp">
        <MessageCircle size={22} aria-hidden="true" />
        <div>
          <p className="contact-label">WhatsApp</p>
          {wa ? (
            <a className="btn btn-primary" href={wa} target="_blank" rel="noopener noreferrer">
              <span>Chat on WhatsApp</span>
            </a>
          ) : (
            <p className="contact-note">The WhatsApp business number will be added here once confirmed.</p>
          )}
        </div>
      </div>
      <dl className="contact-list">
        <div>
          <dt>
            <Phone size={18} aria-hidden="true" /> Phone
          </dt>
          <dd>{contact.phone ? <a href={`tel:${contact.phone.replace(/\s/g, "")}`}>{contact.phone}</a> : pending}</dd>
        </div>
        <div>
          <dt>
            <Mail size={18} aria-hidden="true" /> Email
          </dt>
          <dd>{contact.email ? <a href={`mailto:${contact.email}`}>{contact.email}</a> : pending}</dd>
        </div>
        <div>
          <dt>
            <MapPin size={18} aria-hidden="true" /> Address
          </dt>
          <dd>{contact.address ?? pending}</dd>
        </div>
        {contact.hours && (
          <div>
            <dt>
              <Clock size={18} aria-hidden="true" /> Hours
            </dt>
            <dd>{contact.hours}</dd>
          </div>
        )}
      </dl>
    </div>
  );
}
