import type { Metadata } from "next";
import Link from "next/link";
import { Check } from "lucide-react";
import { pillars } from "@/data/content";
import { Icon } from "@/components/Icon";
import { Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { ProductCatalogue } from "@/components/ProductCatalogue";
import { SysHead } from "@/components/sys";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Products & Services",
  description:
    "IT products and accessories, technology solutions, sales and distribution, technical support and research and development — plus a catalogue of classroom and IT categories.",
};

export default function ProductsServicesPage() {
  return (
    <>
      <section className="sys-hero page compact" aria-labelledby="ps-title">
        <div className="guides" aria-hidden="true" />
        <div className="container">
          <Reveal y={10}>
            <p className="status">
              <span className="sys-dot" aria-hidden="true" /> Products &amp; Services <span className="status-sep">/</span> 5 pillars · 10 categories
            </p>
          </Reveal>
          <div className="page-hero-split">
            <div id="ps-title">
              <WordReveal text={"Products, solutions\nand dependable support."} accentWords={["dependable"]} />
            </div>
            <Reveal delay={0.4}>
              <p className="lead">
                A clear structure for everything NEXIO supplies, integrates and supports — from individual devices to complete
                classroom and IT environments.
              </p>
              <nav className="anchor-nav" aria-label="On this page">
                {pillars.map((p, i) => (
                  <a key={p.id} href={`#${p.id}`}>
                    <span className="sys-code">{String(i + 1).padStart(2, "0")}</span> {p.title}
                  </a>
                ))}
                <a href="#catalogue">
                  <span className="sys-code">C</span> Catalogue
                </a>
              </nav>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="pillars-title">
        <div className="container">
          <SysHead code="S/01" label="Service pillars" id="pillars-title" title="Five pillars of service." />
          <RevealGroup className="pillar-rows">
            {pillars.map((p, i) => (
              <RevealItem key={p.id} className="pillar-row">
                <div id={p.id} className="pillar-row-head">
                  <span className="sys-code">P/{String(i + 1).padStart(2, "0")}</span>
                  <span className="mod-icon">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <h3>{p.title}</h3>
                </div>
                <p className="pillar-row-desc">{p.description}</p>
                <ul className="pillar-row-points">
                  {p.points.map((pt) => (
                    <li key={pt}>
                      <Check size={15} aria-hidden="true" /> {pt}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <p className="muted" style={{ marginTop: 32 }}>
              Need several of these together? <Link href="/contact">Describe your project</Link> and we’ll propose an integrated plan.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="catalogue" className="section bg-alt" aria-labelledby="catalogue-title">
        <div className="container">
          <SysHead
            code="S/02"
            label="Catalogue"
            id="catalogue-title"
            title="Browse categories."
            lead="Filter by area and enquire about the category you need. Specific models and specifications are confirmed on enquiry."
          />
          <ProductCatalogue />
        </div>
      </section>

      <Cta code="S/END" title="Need a complete set-up, not just a product?" text="NEXIO can combine products, integration, installation and after-sales support into one solution for your institution or business." />
    </>
  );
}
