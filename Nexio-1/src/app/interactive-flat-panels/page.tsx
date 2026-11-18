import type { Metadata } from "next";
import { ecosystem, panelFeatures, photos } from "@/data/content";
import { ButtonLink, Eyebrow, Photo } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { MaskReveal, Parallax, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { SpecSheet } from "@/components/SpecSheet";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Interactive Flat Panels",
  description:
    "Interactive flat-panel displays from NEXIO — a smarter way to teach, present, collaborate and inspire. Specifications available on enquiry.",
};

const stories = [
  { feature: panelFeatures[0], also: panelFeatures[1], photo: photos.touchWriting, position: "60% 50%" },
  { feature: panelFeatures[2], also: panelFeatures[5], photo: photos.teacherLesson, position: "45% 40%" },
  { feature: panelFeatures[3], also: panelFeatures[4], photo: photos.opsConnectivity, position: "55% 60%" },
];

export default function PanelsPage() {
  const interest = "/contact?interest=Interactive%20Flat%20Panel%20Display";
  return (
    <>
      <section className="page-hero" aria-labelledby="ifp-title">
        <div className="container page-hero-split">
          <div>
            <Reveal y={10}>
              <Eyebrow index="Interactive Flat Panels">Product focus</Eyebrow>
            </Reveal>
            <div id="ifp-title">
              <WordReveal text="A smarter way to teach, present, collaborate and inspire." accentWords={["inspire"]} />
            </div>
            <Reveal delay={0.45}>
              <p className="lead">
                Interactive flat panels bring digital writing, annotation, multimedia presentation and screen sharing together on
                one large touch display — for classrooms, training rooms and meeting spaces.
              </p>
              <div className="btn-row" style={{ marginTop: 28 }}>
                <ButtonLink href={interest}>Enquire about panels</ButtonLink>
                <ButtonLink href="#specifications" variant="secondary">
                  Specifications
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <figure className="split-media tall">
            <MaskReveal onMount delay={0.3} direction="left">
              <Photo photo={photos.displayInstalled} priority sizes="(max-width: 1023px) 100vw, 45vw" position="68% 50%" />
            </MaskReveal>
            <figcaption className="figcaption">
              <span>Product imagery is illustrative</span>
              <span>Models confirmed on enquiry</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Feature storytelling — alternating image / text */}
      <section className="section" aria-labelledby="story-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <h2 id="story-title" className="sr-only">
            Features
          </h2>
          <div style={{ display: "grid", gap: "clamp(72px, 10vw, 140px)" }}>
            {stories.map((s, i) => (
              <div key={s.feature.title} className={`split ${i % 2 ? "reverse" : ""}`}>
                <figure className="split-media">
                  <Parallax>
                    <Photo photo={s.photo} sizes="(max-width: 1023px) 100vw, 55vw" position={s.position} />
                  </Parallax>
                </figure>
                <div className="split-copy">
                  <Reveal>
                    <Eyebrow index={String(i + 1).padStart(2, "0")}>{s.feature.title}</Eyebrow>
                    <h3 className="index-title" style={{ fontSize: "clamp(2rem, 3.6vw, 3.2rem)" }}>
                      {s.feature.title}
                      <span className="accent"> &amp; {s.also.title.toLowerCase()}</span>
                    </h3>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="lead">{s.feature.text}</p>
                  </Reveal>
                  <Reveal delay={0.15}>
                    <p className="muted">{s.also.text}</p>
                  </Reveal>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="section bg-alt" aria-labelledby="gallery-title">
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="Gallery">In context</Eyebrow>
              <h2 id="gallery-title">Panels at work.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">Concept imagery showing how interactive displays fit into learning and working spaces.</p>
            </Reveal>
          </div>
          <div className="gallery">
            {[
              { p: photos.classroomHero, c: "g-a", r: "16 / 10", pos: "60% 45%", cap: "Classroom set-up" },
              { p: photos.touchWriting, c: "g-b", r: "4 / 5", pos: "62% 50%", cap: "Writing & annotation" },
              { p: photos.opsConnectivity, c: "g-c", r: "4 / 3", pos: "55% 60%", cap: "Computing & connectivity" },
              { p: photos.displayInstalled, c: "g-d", r: "16 / 11", pos: "70% 50%", cap: "Wall-mounted display" },
            ].map((g) => (
              <Reveal as="figure" key={g.cap} className={g.c}>
                <Photo photo={g.p} ratio={g.r} position={g.pos} sizes="(max-width: 767px) 100vw, 50vw" />
                <figcaption className="figcaption">
                  <span>{g.cap}</span>
                  <span>Illustrative</span>
                </figcaption>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Accessories / ecosystem */}
      <section className="section" aria-labelledby="acc-title">
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="Ecosystem">Around the panel</Eyebrow>
              <h2 id="acc-title">Accessories &amp; complete solutions.</h2>
            </Reveal>
          </div>
          <RevealGroup className="hairline-grid cols-3">
            {ecosystem.slice(1).map((e) => (
              <RevealItem key={e.title} className="module">
                <span className="module-icon">
                  <Icon name={e.icon} size={26} />
                </span>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Specifications — no invented values */}
      <section id="specifications" className="section bg-soft" aria-labelledby="spec-title">
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="Specifications">Technical overview</Eyebrow>
              <h2 id="spec-title">Specifications.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">
                Panel sizes and configurations vary by model. Verified specifications are shared with every quotation — ask us for
                the details that matter to your rooms.
              </p>
            </Reveal>
          </div>
          <Reveal>
            <SpecSheet />
          </Reveal>
        </div>
      </section>

      <Cta
        title="Find the right panel for your rooms."
        text="Tell us about your rooms, the number of panels you need and how they will be used. We’ll share suitable options and verified specifications."
        primary={{ label: "Enquire about panels", href: interest }}
        secondary={{ label: "Classroom solutions", href: "/classroom-solutions" }}
      />
    </>
  );
}
