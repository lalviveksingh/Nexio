import type { Metadata } from "next";
import { company, photos, pillars, values } from "@/data/content";
import { Photo } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { MaskReveal, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { SysHead } from "@/components/sys";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "About NEXIO",
  description: "NEXIO R&D TECH PRIVATE LIMITED — our story, vision, mission, values and promise.",
};

export default function AboutPage() {
  return (
    <>
      <section className="sys-hero page" aria-labelledby="about-title">
        <div className="guides" aria-hidden="true" />
        <div className="container sys-hero-grid">
          <div className="sys-hero-copy">
            <Reveal y={10}>
              <p className="status">
                <span className="sys-dot" aria-hidden="true" /> About <span className="status-sep">/</span> NEXIO R&amp;D Tech Private Limited
              </p>
            </Reveal>
            <div id="about-title">
              <WordReveal text={"Connected technology.\nClearer possibilities."} accentWords={["Clearer"]} />
            </div>
            <Reveal delay={0.45}>
              <p className="lead">{company.belief}</p>
            </Reveal>
          </div>
          <figure className="frame">
            <div className="frame-bar">
              <span>MOD 00 · Company</span>
              <span className="frame-ticks" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <MaskReveal onMount delay={0.3} className="frame-media">
              <Photo photo={photos.displayInstalled} priority sizes="(max-width: 1023px) 100vw, 50vw" position="66% 50%" ratio="4 / 3" />
            </MaskReveal>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="story-title">
        <div className="container">
          <SysHead code="A/01" label="Our story" id="story-title" title="A technology company built around practical outcomes." />
          <div className="overview">
            <Reveal>
              <p className="statement-sys">{company.intro}</p>
            </Reveal>
            <Reveal delay={0.1} className="overview-side">
              <ul className="cap-list">
                {pillars.map((p, i) => (
                  <li key={p.id}>
                    <span className="sys-code">P/{String(i + 1).padStart(2, "0")}</span>
                    <Icon name={p.icon} size={18} />
                    <span>{p.title}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-alt" aria-labelledby="vm-title">
        <div className="container">
          <SysHead code="A/02" label="Direction" id="vm-title" title="Vision & mission." />
          <RevealGroup className="module-grid two">
            <RevealItem className="mod mod-lg">
              <span className="sys-code">Vision</span>
              <p className="mod-statement">{company.vision}</p>
            </RevealItem>
            <RevealItem className="mod mod-lg">
              <span className="sys-code">Mission</span>
              <p className="mod-statement">{company.mission}</p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container">
          <SysHead code="A/03" label="Values" id="values-title" title="Five values, one operating system." lead="The principles behind every product we supply, every solution we design and every customer we support." />
          <RevealGroup as="ol" className="values-grid">
            {values.map((v, i) => (
              <RevealItem as="li" key={v.title} className="value-mod">
                <span className="value-num">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={v.icon} size={22} />
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="promise-title">
        <div className="container">
          <div className="stage stage-text">
            <SysHead code="A/04" label="The NEXIO Promise" id="promise-title" inverse title={<>Create opportunities. Solve challenges. Build trust. <span className="accent">Move forward.</span></>} />
            <Reveal>
              <p className="stage-lead">
                We promise to create opportunities, solve challenges, build trust and help people and businesses move forward.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <Cta code="A/END" title="Let’s talk about your next project." />
    </>
  );
}
