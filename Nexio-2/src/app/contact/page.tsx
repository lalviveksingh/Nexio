import type { Metadata } from "next";
import { Reveal, WordReveal } from "@/components/Motion";
import { EnquiryForm } from "@/components/EnquiryForm";
import { ContactDetails } from "@/components/ContactDetails";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Enquire about interactive flat panels, smart classroom solutions, IT products, networking and technical support from NEXIO.",
};

export default function ContactPage() {
  return (
    <>
      <section className="sys-hero page compact" aria-labelledby="contact-title">
        <div className="guides" aria-hidden="true" />
        <div className="container page-hero-split">
          <div>
            <Reveal y={10}>
              <p className="status">
                <span className="sys-dot" aria-hidden="true" /> Contact <span className="status-sep">/</span> Enquiries
              </p>
            </Reveal>
            <div id="contact-title">
              <WordReveal text={"Talk to NEXIO."} accentWords={["NEXIO."]} />
            </div>
          </div>
          <Reveal delay={0.4}>
            <p className="lead">
              Tell us about your classroom, campus, office or IT requirement. The more context you share, the more useful our first
              response will be.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Enquiry form and contact details">
        <div className="container form-shell">
          <Reveal className="form-module">
            <div className="frame-bar">
              <span>Enquiry form</span>
              <span>Secure · server-side delivery</span>
            </div>
            <div className="form-module-body">
              <h2 className="sr-only">Enquiry form</h2>
              <EnquiryForm />
            </div>
          </Reveal>
          <Reveal delay={0.1} as="section" className="contact-panel">
            <div>
              <p className="sys-code" style={{ marginBottom: 20 }}>
                <span className="sys-dot" aria-hidden="true" /> Direct channels
              </p>
              <ContactDetails />
            </div>
            <div>
              <p className="sys-code" style={{ marginBottom: 16 }}>
                Process
              </p>
              <ol className="steps">
                <li>We review your requirement and the details you share.</li>
                <li>We get in touch to understand your space, users and goals.</li>
                <li>We recommend suitable products, solutions and support.</li>
              </ol>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
