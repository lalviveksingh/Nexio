import type { Metadata } from "next";
import { ecosystem, panelFeatures, photos } from "@/data/content";
import { ButtonLink, Eyebrow, Photo } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Drift, MaskReveal, Parallax, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { SpecSheet } from "@/components/SpecSheet";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Interactive Flat Panels",
  description:
    "Interactive flat-panel displays from NEXIO — a smarter way to teach, present, collaborate and inspire. Specifications available on enquiry.",
};

const stories = [
  { a: panelFeatures[0], b: panelFeatures[1], photo: photos.touchWriting, pos: "60% 50%" },
  { a: panelFeatures[2], b: panelFeatures[5], photo: photos.teacherLesson, pos: "48% 40%" },
  { a: panelFeatures[3], b: panelFeatures[4], photo: photos.opsConnectivity, pos: "55% 60%" },
];

export default function PanelsPage() {
  const interest = "/contact?interest=Interactive%20Flat%20Panel%20Display";
  return (
    <>
      {/* Product-led hero on a carbon stage — dark used as punctuation for the product page. */}
      <section className="product-hero" aria-labelledby="ifp-title">
        <div className="container product-hero-grid">
          <div className="product-hero-copy">
            <Reveal y={10}>
              <Eyebrow>Interactive Flat Panels</Eyebrow>
            </Reveal>
            <div id="ifp-title">
              <WordReveal text={"Teach. Present.\nCollaborate.\nInspire."} accentWords={["Inspire."]} rise={20} className="giant-2" />
            </div>
            <Reveal delay={0.5}>
              <p className="lead">
                A smarter way to teach, present, collaborate and inspire — digital writing, annotation, multimedia and screen sharing
                on one large interactive display.
              </p>
            </Reveal>
            <Reveal delay={0.6} className="btn-row">
              <ButtonLink href={interest} variant="inverse" size="lg">
                Enquire about panels
              </ButtonLink>
              <ButtonLink href="#specifications" variant="ghost" size="lg">
                Specifications
              </ButtonLink>
            </Reveal>
          </div>
          <figure className="product-hero-media">
            <MaskReveal onMount delay={0.35} direction="right">
              <Photo photo={photos.displayInstalled} priority sizes="(max-width: 1023px) 100vw, 55vw" position="68% 50%" />
            </MaskReveal>
            <figcaption className="caption-bold">Illustrative product imagery — models confirmed on enquiry</figcaption>
          </figure>
        </div>
      </section>

      {/* Feature storytelling */}
      <section className="section" aria-labelledby="story-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>01 — Features</Eyebrow>
              <h2 id="story-title">
                Built for the front of the room<span className="accent">.</span>
              </h2>
            </Reveal>
          </div>
          <div className="stories">
            {stories.map((s, i) => (
              <article key={s.a.title} className={`story ${i % 2 ? "flip" : ""}`}>
                <figure className="story-media">
                  <Parallax>
                    <Photo photo={s.photo} sizes="(max-width: 1023px) 100vw, 58vw" position={s.pos} />
                  </Parallax>
                </figure>
                <Reveal className="story-copy">
                  <span className="story-num">{String(i + 1).padStart(2, "0")}</span>
                  <h3>
                    {s.a.title} <span className="accent">&amp;</span> {s.b.title.toLowerCase()}
                  </h3>
                  <p className="lead">{s.a.text}</p>
                  <p>{s.b.text}</p>
                </Reveal>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery with restrained horizontal drift */}
      <section className="section paper gallery-bold" aria-labelledby="gallery-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>02 — Gallery</Eyebrow>
              <h2 id="gallery-title">
                In context<span className="accent">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">Concept imagery — approved product photography will replace these frames.</p>
            </Reveal>
          </div>
        </div>
        <Drift distance={50}>
          <ul className="gallery-row container">
            {[
              { p: photos.classroomHero, pos: "65% 45%", cap: "Classroom set-up" },
              { p: photos.touchWriting, pos: "60% 50%", cap: "Writing & annotation" },
              { p: photos.displayInstalled, pos: "70% 50%", cap: "Wall-mounted display" },
              { p: photos.opsConnectivity, pos: "55% 60%", cap: "Computing & ports" },
            ].map((g, i) => (
              <li key={g.cap} className={`gallery-tile t${i}`}>
                <Photo photo={g.p} position={g.pos} sizes="(max-width: 767px) 85vw, 40vw" />
                <p className="caption-bold">
                  <span>{String(i + 1).padStart(2, "0")}</span> {g.cap}
                </p>
              </li>
            ))}
          </ul>
        </Drift>
      </section>

      {/* Accessories / ecosystem */}
      <section className="section" aria-labelledby="acc-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>03 — Ecosystem</Eyebrow>
              <h2 id="acc-title">
                Around the panel<span className="accent">.</span>
              </h2>
            </Reveal>
          </div>
          <RevealGroup className="eco-bold">
            {ecosystem.slice(1).map((e, i) => (
              <RevealItem key={e.title} className="eco-cell">
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={e.icon} size={24} />
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Specifications — prepared for verified data */}
      <section id="specifications" className="carbon angled" aria-labelledby="spec-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>04 — Specifications</Eyebrow>
              <h2 id="spec-title">
                The details<span className="accent">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">Sizes and configurations vary by model. Verified specifications are shared with every quotation.</p>
            </Reveal>
          </div>
          <Reveal>
            <SpecSheet />
          </Reveal>
        </div>
      </section>

      <Cta
        title={"Find the right\npanel for your rooms."}
        accent="rooms."
        text="Tell us about your rooms, the number of panels you need and how they will be used. We’ll share suitable options and verified specifications."
        primary={{ label: "Enquire about panels", href: interest }}
        secondary={{ label: "Classroom solutions", href: "/classroom-solutions" }}
      />
    </>
  );
}
