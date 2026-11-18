import type { Metadata } from "next";
import { Eyebrow } from "@/components/ui";
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
      <section className="bold-hero page short" aria-labelledby="contact-title">
        <div className="container">
          <Reveal y={10}>
            <Eyebrow>Contact — Enquiries</Eyebrow>
          </Reveal>
          <div id="contact-title">
            <WordReveal text={"Let’s talk."} accentWords={["talk."]} rise={20} className="giant" />
          </div>
          <Reveal delay={0.4} className="page-intro">
            <p className="lead">
              One classroom or a whole campus, a device or a network — share a few details and the NEXIO team will follow up to
              understand your requirement.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-label="Enquiry form and contact details">
        <div className="container form-shell">
          <Reveal>
            <h2 className="sr-only">Enquiry form</h2>
            <EnquiryForm />
          </Reveal>
          <Reveal delay={0.1} as="section" className="contact-panel">
            <div>
              <Eyebrow>Direct</Eyebrow>
              <ContactDetails />
            </div>
            <div>
              <Eyebrow>What happens next</Eyebrow>
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
