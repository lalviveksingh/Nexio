import Link from "next/link";
import { ArrowRight, ArrowUpRight, Check } from "lucide-react";
import { concept } from "@/config/concept";
import { audiences, classroom, classroomFeatures, company, panelFeatures, photos, pillars, productCategories, values, whyNexio } from "@/data/content";
import { ButtonLink, Photo, TextLink } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { MaskReveal, Parallax, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { SysHead } from "@/components/sys";
import { Cta } from "@/components/Cta";

const capabilities = [
  "IT products",
  "Computer peripherals",
  "Technology solutions",
  "System integration",
  "Networking & infrastructure",
  "Sales & distribution",
  "Technical support",
  "Research & development",
];

export default function HomePage() {
  const { hero } = concept;
  return (
    <>
      {/* Hero: copy left, framed image module right — text never sits on the photo. */}
      <section className="sys-hero" aria-labelledby="hero-title">
        <div className="guides" aria-hidden="true" />
        <div className="container sys-hero-grid">
          <div className="sys-hero-copy">
            <Reveal y={10}>
              <p className="status">
                <span className="sys-dot" aria-hidden="true" /> NEXIO R&amp;D Tech <span className="status-sep">/</span> Innovate.
                Educate. Elevate.
              </p>
            </Reveal>
            <div id="hero-title">
              <WordReveal text={hero.title} accentWords={["Smarter"]} />
            </div>
            <Reveal delay={0.45}>
              <p className="lead">{hero.support}</p>
            </Reveal>
            <Reveal delay={0.55} className="btn-row">
              <ButtonLink href={hero.primary.href} size="lg">
                {hero.primary.label}
              </ButtonLink>
              <ButtonLink href={hero.secondary.href} variant="secondary" size="lg">
                {hero.secondary.label}
              </ButtonLink>
            </Reveal>
          </div>

          <figure className="frame">
            <div className="frame-bar">
              <span>MOD 01 · Learning space</span>
              <span className="frame-ticks" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <MaskReveal onMount delay={0.3} className="frame-media">
              <Photo photo={photos.classroomHero} priority sizes="(max-width: 1023px) 100vw, 50vw" position="60% 50%" ratio="4 / 3" />
            </MaskReveal>
            <figcaption className="frame-bar">
              <span>Interactive classroom · illustrative</span>
              <span>NX</span>
            </figcaption>
          </figure>
        </div>

        {/* Pillar index strip */}
        <div className="container">
          <RevealGroup as="ol" className="pillar-strip">
            {pillars.map((p, i) => (
              <RevealItem as="li" key={p.id}>
                <Link href={`/products-services#${p.id}`} className="pillar-cell">
                  <span className="sys-code">{String(i + 1).padStart(2, "0")}</span>
                  <span className="pillar-cell-title">{p.title}</span>
                  <ArrowUpRight className="pillar-cell-arrow" size={18} aria-hidden="true" />
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* System overview */}
      <section className="section" aria-labelledby="overview-title">
        <div className="container">
          <SysHead code="NX/01" label="System overview" id="overview-title" title={<>Practical technology, connected end to end.</>} />
          <div className="overview">
            <Reveal>
              <p className="statement-sys">{company.belief}</p>
            </Reveal>
            <Reveal delay={0.1} className="overview-side">
              <p className="muted">{company.intro}</p>
              <ul className="cap-grid" aria-label="Capabilities">
                {capabilities.map((c) => (
                  <li key={c}>
                    <Check size={14} aria-hidden="true" />
                    {c}
                  </li>
                ))}
              </ul>
              <TextLink href="/about">About NEXIO</TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Five pillars as modules */}
      <section className="section bg-alt" aria-labelledby="pillars-title">
        <div className="container">
          <SysHead
            code="NX/02"
            label="Business pillars"
            id="pillars-title"
            title="Five capabilities. One integrated partner."
            lead="Supply, integration, support and development — designed to work together."
          />
          <RevealGroup className="module-grid five">
            {pillars.map((p, i) => (
              <RevealItem key={p.id} className="mod">
                <div className="mod-top">
                  <span className="mod-icon">
                    <Icon name={p.icon} size={22} />
                  </span>
                  <span className="sys-code">P/{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Classroom spotlight */}
      <section className="section" aria-labelledby="classroom-title">
        <div className="container">
          <SysHead code="NX/03" label="Classroom Solutions" id="classroom-title" title={<>Smart classrooms. <span className="accent">Smarter learning.</span></>} lead={classroom.intro} />
          <div className="spot">
            <figure className="frame">
              <MaskReveal className="frame-media" direction="left">
                <Photo photo={photos.teacherLesson} sizes="(max-width: 1023px) 100vw, 50vw" position="42% 40%" ratio="4 / 3" />
              </MaskReveal>
              <figcaption className="frame-bar">
                <span>MOD 03 · Visual lesson</span>
                <span>Illustrative</span>
              </figcaption>
            </figure>
            <div className="spot-copy">
              <RevealGroup className="mini-grid">
                {classroomFeatures.map((f) => (
                  <RevealItem key={f.title} className="mini">
                    <Icon name={f.icon} size={20} />
                    <h3>{f.title}</h3>
                  </RevealItem>
                ))}
              </RevealGroup>
              <Reveal>
                <p className="muted">{classroom.panelsLine}</p>
              </Reveal>
              <Reveal>
                <ButtonLink href="/classroom-solutions">Explore classroom solutions</ButtonLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Featured IFP — dark product stage, used selectively */}
      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="ifp-title">
        <div className="container">
          <div className="stage">
            <div className="stage-media">
              <Parallax>
                <Photo photo={photos.touchWriting} sizes="(max-width: 1023px) 100vw, 50vw" position="60% 50%" ratio="5 / 4" />
              </Parallax>
            </div>
            <div className="stage-copy">
              <SysHead code="NX/04" label="Featured · Interactive Flat Panel" id="ifp-title" inverse title="A smarter way to teach, present and collaborate." />
              <RevealGroup as="ul" className="tick-list">
                {panelFeatures.map((f) => (
                  <RevealItem as="li" key={f.title}>
                    <span className="tick" aria-hidden="true" />
                    <span>
                      <strong>{f.title}</strong> — {f.text}
                    </span>
                  </RevealItem>
                ))}
              </RevealGroup>
              <Reveal>
                <ButtonLink href="/interactive-flat-panels" variant="inverse">
                  View interactive flat panels
                </ButtonLink>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Category index */}
      <section className="section bg-alt" aria-labelledby="cat-title">
        <div className="container">
          <SysHead
            code="NX/05"
            label="Category index"
            id="cat-title"
            title="Ten categories. One clear structure."
            lead={<TextLink href="/products-services#catalogue">Open the full catalogue</TextLink>}
          />
          <Reveal>
            <ol className="cat-index">
              {productCategories.map((p, i) => (
                <li key={p.id}>
                  <Link href={p.href ?? `/products-services#catalogue`} className="cat-row">
                    <span className="sys-code">C/{String(i + 1).padStart(2, "0")}</span>
                    <span className="cat-icon">
                      <Icon name={p.icon} size={18} />
                    </span>
                    <span className="cat-title">{p.title}</span>
                    <span className="cat-group">{p.group}</span>
                    <ArrowRight className="cat-arrow" size={18} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Why NEXIO */}
      <section className="section" aria-labelledby="why-title">
        <div className="container">
          <SysHead code="NX/06" label="Why NEXIO" id="why-title" title="Built to be dependable." lead={company.mission} />
          <RevealGroup className="module-grid four">
            {whyNexio.map((w, i) => (
              <RevealItem key={w.title} className="mod">
                <div className="mod-top">
                  <span className="mod-icon">
                    <Icon name={w.icon} size={22} />
                  </span>
                  <span className="sys-code">W/{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <ul className="value-chips" aria-label="Our values">
              {values.map((v) => (
                <li key={v.title}>
                  <span className="sys-dot" aria-hidden="true" />
                  {v.title}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Environments */}
      <section className="section-tight" style={{ paddingTop: 0 }} aria-labelledby="env-title">
        <div className="container">
          <SysHead code="NX/07" label="Environments" id="env-title" title="Where NEXIO technology works." />
          <RevealGroup as="ul" className="env-strip">
            {audiences.map((a) => (
              <RevealItem as="li" key={a.title}>
                <Icon name={a.icon} size={24} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Cta />
    </>
  );
}
