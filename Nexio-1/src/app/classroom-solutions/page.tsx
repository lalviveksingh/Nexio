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
      <section className="page-hero" aria-labelledby="cr-title">
        <div className="container">
          <Reveal y={10}>
            <Eyebrow index="Classroom Solutions">For schools, colleges &amp; institutes</Eyebrow>
          </Reveal>
          <div className="page-hero-split">
            <div id="cr-title">
              <WordReveal text={"Smart Classrooms.\nSmarter Learning."} accentWords={["Smarter"]} />
            </div>
            <Reveal delay={0.4}>
              <p className="lead">{classroom.intro}</p>
              <div className="btn-row" style={{ marginTop: 28 }}>
                <ButtonLink href="/contact?interest=Smart%20Classroom%20Solutions">Plan a classroom</ButtonLink>
                <ButtonLink href="#ecosystem" variant="secondary">
                  See the ecosystem
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <figure className="hero-media">
            <MaskReveal onMount delay={0.3}>
              <Photo photo={photos.teacherLesson} priority sizes="(max-width: 1320px) 100vw, 1320px" position="45% 35%" />
            </MaskReveal>
          </figure>
        </div>
      </section>

      <section className="section" style={{ paddingTop: 0 }} aria-labelledby="shift-title">
        <div className="container statement">
          <Reveal>
            <Eyebrow index="01">The shift</Eyebrow>
          </Reveal>
          <div>
            <Reveal>
              <h2 id="shift-title" className="statement-text">
                The classroom isn’t changing its purpose — only its tools. <span className="accent">Teaching stays at the centre.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="statement-body">
              <p style={{ marginTop: 28 }}>{classroom.panelsLine}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="shift-list" style={{ marginTop: 40 }} aria-label="From traditional to interactive">
                {classroom.transformation.map((t) => (
                  <li className="shift-row" key={t.to}>
                    <span className="shift-from">{t.from}</span>
                    <span className="shift-to">
                      <ArrowRight size={16} aria-hidden="true" />
                      {t.to}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="section bg-alt" aria-labelledby="features-title">
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="02">In the classroom</Eyebrow>
              <h2 id="features-title">Six things that change the lesson.</h2>
            </Reveal>
          </div>
          <RevealGroup className="hairline-grid cols-3">
            {classroomFeatures.map((f, i) => (
              <RevealItem key={f.title} className="module">
                <span className="module-icon">
                  <Icon name={f.icon} size={26} />
                </span>
                <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="ecosystem" className="section" aria-labelledby="eco-title">
        <div className="container split reverse">
          <figure className="split-media tall">
            <MaskReveal direction="right">
              <Photo photo={photos.displayInstalled} sizes="(max-width: 1023px) 100vw, 45vw" position="65% 50%" />
            </MaskReveal>
          </figure>
          <div className="split-copy">
            <Reveal>
              <Eyebrow index="03">The complete ecosystem</Eyebrow>
              <h2 id="eco-title">Everything a smart classroom needs.</h2>
            </Reveal>
            <RevealGroup as="ol" className="feature-list">
              {ecosystem.map((e, i) => (
                <RevealItem as="li" key={e.title} className="feature-item">
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{e.title}</h3>
                  <p>{e.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
          </div>
        </div>
      </section>

      <section className="section deep" aria-labelledby="aud-title">
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="04">Who it’s for</Eyebrow>
              <h2 id="aud-title">
                Learning spaces of <span className="accent">every size</span>.
              </h2>
            </Reveal>
          </div>
          <RevealGroup className="why-grid">
            {audiences.slice(0, 4).map((a) => (
              <RevealItem key={a.title} className="why-item">
                <Icon name={a.icon} />
                <h3>{a.title}</h3>
                <p>{a.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Cta
        title="Ready to plan a smarter classroom?"
        text="Share the number of rooms, their sizes and how you teach — we’ll help you plan the right classroom set-up."
        primary={{ label: "Enquire about classrooms", href: "/contact?interest=Smart%20Classroom%20Solutions" }}
        secondary={{ label: "Interactive flat panels", href: "/interactive-flat-panels" }}
      />
    </>
  );
}
