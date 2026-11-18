import type { Metadata } from "next";
import { audiences, classroom, classroomFeatures, ecosystem, photos } from "@/data/content";
import { ButtonLink, Photo } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { MaskReveal, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { EcosystemDiagram, SysHead } from "@/components/sys";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Classroom Solutions",
  description:
    "Smart Classrooms. Smarter Learning. NEXIO classroom solutions turn traditional classrooms into interactive, collaborative and future-ready learning spaces.",
};

export default function ClassroomPage() {
  const [hub, ...nodes] = ecosystem;
  return (
    <>
      <section className="sys-hero page" aria-labelledby="cr-title">
        <div className="guides" aria-hidden="true" />
        <div className="container sys-hero-grid">
          <div className="sys-hero-copy">
            <Reveal y={10}>
              <p className="status">
                <span className="sys-dot" aria-hidden="true" /> Classroom Solutions <span className="status-sep">/</span> Schools · Colleges · Institutes
              </p>
            </Reveal>
            <div id="cr-title">
              <WordReveal text={"Smart Classrooms.\nSmarter Learning."} accentWords={["Smarter"]} />
            </div>
            <Reveal delay={0.45}>
              <p className="lead">{classroom.intro}</p>
            </Reveal>
            <Reveal delay={0.55} className="btn-row">
              <ButtonLink href="/contact?interest=Smart%20Classroom%20Solutions" size="lg">
                Plan a classroom
              </ButtonLink>
              <ButtonLink href="#ecosystem" variant="secondary" size="lg">
                View the ecosystem
              </ButtonLink>
            </Reveal>
          </div>
          <figure className="frame">
            <div className="frame-bar">
              <span>MOD 03 · Classroom</span>
              <span className="frame-ticks" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <MaskReveal onMount delay={0.3} className="frame-media">
              <Photo photo={photos.teacherLesson} priority sizes="(max-width: 1023px) 100vw, 50vw" position="42% 40%" ratio="4 / 3" />
            </MaskReveal>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="shift-title">
        <div className="container">
          <SysHead code="C/01" label="Transformation" id="shift-title" title="From traditional to interactive." lead={classroom.panelsLine} />
          <Reveal>
            <div className="compare" role="table" aria-label="Traditional classroom compared with interactive classroom">
              <div className="compare-row compare-head" role="row">
                <span role="columnheader">Traditional classroom</span>
                <span role="columnheader">Interactive classroom</span>
              </div>
              {classroom.transformation.map((t) => (
                <div className="compare-row" role="row" key={t.to}>
                  <span role="cell" className="compare-from">
                    {t.from}
                  </span>
                  <span role="cell" className="compare-to">
                    <span className="sys-dot" aria-hidden="true" />
                    {t.to}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section bg-alt" aria-labelledby="features-title">
        <div className="container">
          <SysHead code="C/02" label="Feature modules" id="features-title" title="Six modules for everyday teaching." />
          <RevealGroup className="module-grid three">
            {classroomFeatures.map((f, i) => (
              <RevealItem key={f.title} className="mod">
                <div className="mod-top">
                  <span className="mod-icon">
                    <Icon name={f.icon} size={22} />
                  </span>
                  <span className="sys-code">M/{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="ecosystem" className="section" aria-labelledby="eco-title">
        <div className="container">
          <SysHead code="C/03" label="Ecosystem" id="eco-title" title="A complete classroom system." lead="Every component connects back to the interactive panel at the front of the room." />
          <EcosystemDiagram hub={hub} nodes={nodes} />
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="aud-title">
        <div className="container">
          <div className="stage stage-text">
            <SysHead code="C/04" label="Who it’s for" id="aud-title" inverse title="Designed for every kind of learning space." />
            <RevealGroup as="ul" className="env-strip inverse">
              {audiences.slice(0, 4).map((a) => (
                <RevealItem as="li" key={a.title}>
                  <Icon name={a.icon} size={24} />
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <Cta
        code="C/END"
        title="Ready to plan a smarter classroom?"
        text="Share the number of rooms, their sizes and how you teach — we’ll help you plan the right classroom set-up."
        primary={{ label: "Enquire about classrooms", href: "/contact?interest=Smart%20Classroom%20Solutions" }}
        secondary={{ label: "Interactive flat panels", href: "/interactive-flat-panels" }}
      />
    </>
  );
}
