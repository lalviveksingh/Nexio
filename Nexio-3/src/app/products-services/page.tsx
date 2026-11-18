import type { Metadata } from "next";
import { pillars } from "@/data/content";
import { Eyebrow } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { ProductCatalogue } from "@/components/ProductCatalogue";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "IT products and accessories, technology solutions, sales and distribution, technical support and research and development — plus a catalogue of classroom and IT categories.",
};

export default function ProductsServicesPage() {
  return (
    <>
      <section className="bold-hero page short" aria-labelledby="ps-title">
        <div className="container">
          <Reveal y={10}>
            <Eyebrow>Products &amp; Services</Eyebrow>
          </Reveal>
          <div id="ps-title">
            <WordReveal text={"Everything\nyour technology needs."} accentWords={["needs."]} rise={20} className="giant-2" />
          </div>
          <Reveal delay={0.45} className="page-intro">
            <p className="lead">Five service pillars and ten catalogue categories — from the device on a desk to the network behind it.</p>
            <nav className="anchor-nav" aria-label="On this page">
              <a href="#services">Service pillars</a>
              <a href="#catalogue">Catalogue</a>
            </nav>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section" style={{ paddingTop: 0 }} aria-labelledby="services-title">
        <div className="container">
          <h2 id="services-title" className="sr-only">
            Service pillars
          </h2>
          <RevealGroup as="ol" className="service-rows">
            {pillars.map((p, i) => (
              <RevealItem as="li" key={p.id} className="service-row">
                <span className="service-num">{String(i + 1).padStart(2, "0")}</span>
                <div className="service-main">
                  <h3>
                    <Icon name={p.icon} size={28} /> {p.title}
                  </h3>
                  <p>{p.description}</p>
                </div>
                <ul className="mini-tags">
                  {p.points.map((pt) => (
                    <li key={pt}>{pt}</li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="catalogue" className="section paper" aria-labelledby="catalogue-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>Catalogue</Eyebrow>
              <h2 id="catalogue-title">
                Browse by category<span className="accent">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">Filter, then enquire. Specific models, availability and specifications are confirmed on enquiry.</p>
            </Reveal>
          </div>
          <ProductCatalogue />
        </div>
      </section>

      <Cta title={"One partner.\nComplete set-up."} accent="set-up." text="NEXIO can combine products, integration, installation and after-sales support into a single solution for your institution or business." />
    </>
  );
}
