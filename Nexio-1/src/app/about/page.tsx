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
      <section className="page-hero" aria-labelledby="about-title">
        <div className="container">
          <Reveal y={10}>
            <Eyebrow index="About">NEXIO R&amp;D Tech Private Limited</Eyebrow>
          </Reveal>
          <div id="about-title">
            <WordReveal text={"Technology,\nthoughtfully delivered."} accentWords={["thoughtfully"]} />
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="story-title">
        <div className="container split">
          <figure className="split-media tall">
            <MaskReveal onMount delay={0.3}>
              <Photo photo={photos.classroomHero} priority sizes="(max-width: 1023px) 100vw, 55vw" position="72% 50%" />
            </MaskReveal>
          </figure>
          <div className="split-copy">
            <Reveal>
              <Eyebrow index="01">Our story</Eyebrow>
              <h2 id="story-title">Progress, made practical.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">{company.belief}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="muted">{company.intro}</p>
            </Reveal>
            <Reveal delay={0.2}>
              <ul className="index-points" style={{ gridColumn: "auto" }} aria-label="Areas of work">
                {pillars.map((p) => (
                  <li key={p.id} className="tag">
                    {p.title}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-alt" aria-labelledby="vm-title">
        <div className="container">
          <Reveal>
            <Eyebrow index="02">Direction</Eyebrow>
            <h2 id="vm-title" className="sr-only">
              Vision and mission
            </h2>
          </Reveal>
          <RevealGroup className="vm-grid">
            <RevealItem className="vm-item">
              <p className="mono muted">Vision</p>
              <p className="display">{company.vision}</p>
            </RevealItem>
            <RevealItem className="vm-item">
              <p className="mono muted">Mission</p>
              <p className="display">{company.mission}</p>
            </RevealItem>
          </RevealGroup>
        </div>
      </section>

      <section className="section deep" aria-labelledby="values-title">
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="03">Values</Eyebrow>
              <h2 id="values-title">
                Five values. <span className="accent">One standard.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead muted">The principles that guide how we choose products, design solutions and look after customers.</p>
            </Reveal>
          </div>
          <RevealGroup as="ol" className="values-type">
            {values.map((v, i) => (
              <RevealItem as="li" key={v.title}>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <span className="value-word">{v.title}</span>
                <p>{v.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section" aria-labelledby="promise-title">
        <div className="container">
          <Reveal className="quote-block">
            <Eyebrow index="04">The NEXIO Promise</Eyebrow>
            <h2 id="promise-title" className="sr-only">
              The NEXIO Promise
            </h2>
            <span className="copper-rule" aria-hidden="true" />
            <blockquote>
              <p>
                We promise to create opportunities, solve challenges, build trust and help people and businesses{" "}
                <span className="accent">move forward</span>.
              </p>
            </blockquote>
          </Reveal>
        </div>
      </section>

      <Cta title="Let’s talk about what you’re building next." />
    </>
  );
}
