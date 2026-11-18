import type { Metadata } from "next";
import Link from "next/link";
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
      <section className="page-hero" aria-labelledby="ps-title">
        <div className="container page-hero-split">
          <div>
            <Reveal y={10}>
              <Eyebrow index="Products &amp; Services">What NEXIO offers</Eyebrow>
            </Reveal>
            <div id="ps-title">
              <WordReveal text="Products, solutions and the support behind them." accentWords={["support"]} />
            </div>
          </div>
          <Reveal delay={0.4}>
            <p className="lead">
              Five service pillars and a catalogue of categories that cover classrooms, workplaces and the infrastructure that
              connects them.
            </p>
            <nav className="anchor-nav" aria-label="On this page">
              <a href="#services">Service pillars</a>
              <a href="#catalogue">Catalogue</a>
            </nav>
          </Reveal>
        </div>
      </section>

      <section id="services" className="section" style={{ paddingTop: 0 }} aria-labelledby="services-title">
        <div className="container">
          <Reveal>
            <h2 id="services-title" className="sr-only">
              Service pillars
            </h2>
          </Reveal>
          <RevealGroup className="hairline-grid cols-3">
            {pillars.map((p, i) => (
              <RevealItem key={p.id} className="module" >
                <span className="module-icon">
                  <Icon name={p.icon} size={28} />
                </span>
                <span className="mono">Pillar {String(i + 1).padStart(2, "0")}</span>
                <h3 className="index-title" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2rem)" }}>
                  {p.title}
                </h3>
                <p>{p.description}</p>
                <ul className="index-points">
                  {p.points.map((pt) => (
                    <li className="tag" key={pt}>
                      {pt}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
            <RevealItem className="module" >
              <span className="mono">Not sure where to start?</span>
              <h3 className="index-title" style={{ fontSize: "clamp(1.6rem, 2.4vw, 2rem)" }}>
                Tell us what you need.
              </h3>
              <p>Describe your space, your users and your goals — we’ll recommend the right combination.</p>
              <Link className="text-link" href="/contact">
                <span>Start an enquiry</span>
              </Link>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section id="catalogue" className="section bg-alt" aria-labelledby="catalogue-title">
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="Catalogue">Ten categories</Eyebrow>
              <h2 id="catalogue-title">Browse by category.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">Filter by area, then enquire about the category you need — we’ll come back with suitable options.</p>
            </Reveal>
          </div>
          <ProductCatalogue />
        </div>
      </section>

      <Cta title="Need a complete set-up, not just a product?" text="NEXIO can combine products, integration, installation and after-sales support into one solution for your institution or business." />
    </>
  );
}
