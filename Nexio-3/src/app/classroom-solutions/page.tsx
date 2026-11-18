import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { audiences, classroom, classroomFeatures, ecosystem, photos } from "@/data/content";
import { ButtonLink, Eyebrow, Photo } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { MaskReveal, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Classroom Solutions",
  description:
    "Smart Classrooms. Smarter Learning. NEXIO classroom solutions turn traditional classrooms into interactive, collaborative and future-ready learning spaces.",
};

export default function ClassroomPage() {
  return (
    <>
      <section className="bold-hero page" aria-labelledby="cr-title">
        <div className="container">
          <Reveal y={10}>
            <Eyebrow>Classroom Solutions — Schools · Colleges · Institutes</Eyebrow>
          </Reveal>
          <div id="cr-title">
            <WordReveal text={"Smart Classrooms.\nSmarter Learning."} accentWords={["Smarter"]} rise={20} className="giant" />
          </div>
          <div className="bold-hero-grid">
            <Reveal className="bold-hero-copy" delay={0.45}>
              <p className="lead">{classroom.intro}</p>
              <div className="btn-row">
                <ButtonLink href="/contact?interest=Smart%20Classroom%20Solutions" size="lg">
                  Plan a classroom
                </ButtonLink>
                <ButtonLink href="#ecosystem" variant="secondary" size="lg">
                  The ecosystem
                </ButtonLink>
              </div>
            </Reveal>
            <figure className="bleed-right">
              <MaskReveal onMount delay={0.3} direction="left">
                <Photo photo={photos.teacherLesson} priority sizes="(max-width: 1023px) 100vw, 70vw" position="45% 38%" className="hero-photo" />
              </MaskReveal>
            </figure>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="shift-title">
        <div className="container intro-bold">
          <div>
            <Reveal>
              <Eyebrow>01 — The shift</Eyebrow>
              <h2 id="shift-title" className="big-statement">
                Same purpose<span className="accent">.</span> New tools<span className="accent">.</span> Teaching stays at the centre
                <span className="accent">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="intro-bold-side" delay={0.1}>
            <p>{classroom.panelsLine}</p>
          </Reveal>
        </div>
        <div className="container">
          <RevealGroup as="ol" className="shift-bold">
            {classroom.transformation.map((t) => (
              <RevealItem as="li" key={t.to}>
                <span className="shift-from">{t.from}</span>
                <ArrowRight size={22} aria-hidden="true" />
                <span className="shift-to">{t.to}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="carbon angled" aria-labelledby="features-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>02 — In the classroom</Eyebrow>
              <h2 id="features-title">
                Six ways lessons change<span className="accent">.</span>
              </h2>
            </Reveal>
          </div>
          <RevealGroup className="pillar-cards six">
            {classroomFeatures.map((f, i) => (
              <RevealItem key={f.title} className="pillar-card">
                <span className="pillar-num">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={f.icon} size={26} />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="ecosystem" className="section" aria-labelledby="eco-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>03 — Complete ecosystem</Eyebrow>
              <h2 id="eco-title">
                Everything the room needs<span className="accent">.</span>
              </h2>
            </Reveal>
          </div>
          <RevealGroup className="eco-bold">
            {ecosystem.map((e, i) => (
              <RevealItem key={e.title} className={`eco-cell ${i === 0 ? "lead-cell" : ""}`}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={e.icon} size={i === 0 ? 34 : 24} />
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section paper" aria-labelledby="aud-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>04 — Who it’s for</Eyebrow>
              <h2 id="aud-title">
                Every learning space<span className="accent">.</span>
              </h2>
            </Reveal>
          </div>
          <RevealGroup as="ol" className="sweep-list static">
            {audiences.slice(0, 4).map((a, i) => (
              <RevealItem as="li" key={a.title} className="sweep-row">
                <span className="sweep-num">{String(i + 1).padStart(2, "0")}</span>
                <span className="sweep-title">{a.title}</span>
                <span className="sweep-meta">{a.text}</span>
                <Icon name={a.icon} size={26} className="sweep-arrow" />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Cta
        title={"Ready for a\nsmarter classroom?"}
        accent="classroom?"
        text="Share the number of rooms, their sizes and how you teach — we’ll help you plan the right classroom set-up."
        primary={{ label: "Enquire about classrooms", href: "/contact?interest=Smart%20Classroom%20Solutions" }}
        secondary={{ label: "Interactive flat panels", href: "/interactive-flat-panels" }}
      />
    </>
  );
}
