import type { Metadata } from "next";
import { company, photos, pillars, values } from "@/data/content";
import { Eyebrow, Photo } from "@/components/ui";
import { MaskReveal, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "About NEXIO",
  description: "NEXIO R&D TECH PRIVATE LIMITED — our story, vision, mission, values and promise.",
};

export default function AboutPage() {
  return (
    <>
      <section className="bold-hero page" aria-labelledby="about-title">
        <div className="container">
          <Reveal y={10}>
            <Eyebrow>About — NEXIO R&amp;D Tech Private Limited</Eyebrow>
          </Reveal>
          <div id="about-title">
            <WordReveal text={"Make technology\nmatter."} accentWords={["matter."]} rise={20} className="giant" />
          </div>
          <div className="bold-hero-grid">
            <Reveal className="bold-hero-copy" delay={0.45}>
              <p className="lead">{company.belief}</p>
            </Reveal>
            <figure className="bleed-right">
              <MaskReveal onMount delay={0.3} direction="left">
                <Photo photo={photos.displayInstalled} priority sizes="(max-width: 1023px) 100vw, 70vw" position="65% 50%" className="hero-photo" />
              </MaskReveal>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="story-title">
        <div className="container intro-bold">
          <div>
            <Reveal>
              <Eyebrow>01 — Our story</Eyebrow>
              <h2 id="story-title" className="big-statement">
                Technology, creativity and practical expertise<span className="accent">.</span> Combined<span className="accent">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="intro-bold-side" delay={0.1}>
            <p>{company.intro}</p>
            <ul className="mini-tags">
              {pillars.map((p) => (
                <li key={p.id}>{p.title}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      <section className="carbon angled" aria-labelledby="vm-title">
        <div className="container">
          <Reveal>
            <Eyebrow>02 — Direction</Eyebrow>
            <h2 id="vm-title" className="sr-only">
              Vision and mission
            </h2>
          </Reveal>
          <RevealGroup className="vm-bold">
            <RevealItem className="vm-bold-item">
              <span className="vm-label">Vision</span>
              <p>{company.vision}</p>
            </RevealItem>
            <RevealItem className="vm-bold-item">
              <span className="vm-label">Mission</span>
              <p>{company.mission}</p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="section" aria-labelledby="values-title">
        <div className="container why-bold">
          <div className="why-bold-head">
            <Reveal>
              <Eyebrow>03 — Values</Eyebrow>
              <h2 id="values-title">
                Five values<span className="accent">.</span>
              </h2>
              <p className="lead" style={{ marginTop: 24 }}>
                The standard behind every product we supply and every solution we deliver.
              </p>
            </Reveal>
          </div>
          <RevealGroup as="ol" className="value-stack numbered">
            {values.map((v, i) => (
              <RevealItem as="li" key={v.title}>
                <span className="value-index">{String(i + 1).padStart(2, "0")}</span>
                <span className="value-big">{v.title}</span>
                <p>{v.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section paper" aria-labelledby="promise-title">
        <div className="container promise-bold">
          <Reveal>
            <Eyebrow>04 — The NEXIO Promise</Eyebrow>
            <h2 id="promise-title" className="sr-only">
              The NEXIO Promise
            </h2>
          </Reveal>
          <RevealGroup as="ol" className="promise-list">
            {["Create opportunities", "Solve challenges", "Build trust", "Move forward"].map((w, i) => (
              <RevealItem as="li" key={w}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <span>{w}</span>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <p className="lead">We promise to create opportunities, solve challenges, build trust and help people and businesses move forward.</p>
          </Reveal>
        </div>
      </section>

      <Cta title={"Let’s build\nwhat’s next."} accent="next." />
    </>
  );
}
