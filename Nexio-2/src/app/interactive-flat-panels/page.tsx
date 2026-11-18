import type { Metadata } from "next";
import { ecosystem, panelFeatures, photos } from "@/data/content";
import { ButtonLink, Photo } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { MaskReveal, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { FeatureTabs, SysHead, type FeatureTab } from "@/components/sys";
import { SpecSheet } from "@/components/SpecSheet";
import { Cta } from "@/components/Cta";

export const metadata: Metadata = {
  title: "Interactive Flat Panels",
  description:
    "Interactive flat-panel displays from NEXIO — a smarter way to teach, present, collaborate and inspire. Specifications available on enquiry.",
};

const tabPhotos = [
  { photo: photos.touchWriting, position: "60% 50%" },
  { photo: photos.touchWriting, position: "40% 50%" },
  { photo: photos.teacherLesson, position: "50% 40%" },
  { photo: photos.classroomHero, position: "72% 50%" },
  { photo: photos.opsConnectivity, position: "55% 60%" },
  { photo: photos.teacherLesson, position: "30% 50%" },
];

export default function PanelsPage() {
  const interest = "/contact?interest=Interactive%20Flat%20Panel%20Display";
  const tabs: FeatureTab[] = panelFeatures.map((f, i) => ({ ...f, ...tabPhotos[i] }));
  return (
    <>
      <section className="sys-hero page" aria-labelledby="ifp-title">
        <div className="guides" aria-hidden="true" />
        <div className="container sys-hero-grid">
          <div className="sys-hero-copy">
            <Reveal y={10}>
              <p className="status">
                <span className="sys-dot" aria-hidden="true" /> Interactive Flat Panels <span className="status-sep">/</span> Product focus
              </p>
            </Reveal>
            <div id="ifp-title">
              <WordReveal text={"Teach, present,\ncollaborate, inspire."} accentWords={["inspire."]} />
            </div>
            <Reveal delay={0.45}>
              <p className="lead">
                A smarter way to teach, present, collaborate and inspire: digital writing, annotation, multimedia and screen
                sharing on one large interactive display.
              </p>
            </Reveal>
            <Reveal delay={0.55} className="btn-row">
              <ButtonLink href={interest} size="lg">
                Enquire about panels
              </ButtonLink>
              <ButtonLink href="#specifications" variant="secondary" size="lg">
                Specifications
              </ButtonLink>
            </Reveal>
          </div>
          <figure className="frame">
            <div className="frame-bar">
              <span>MOD 04 · Display</span>
              <span className="frame-ticks" aria-hidden="true">
                <i />
                <i />
                <i />
              </span>
            </div>
            <MaskReveal onMount delay={0.3} className="frame-media">
              <Photo photo={photos.displayInstalled} priority sizes="(max-width: 1023px) 100vw, 50vw" position="66% 50%" ratio="4 / 3" />
            </MaskReveal>
            <figcaption className="frame-bar">
              <span>Product imagery is illustrative</span>
              <span>Models on enquiry</span>
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" aria-labelledby="features-title">
        <div className="container">
          <SysHead code="F/00" label="Feature explorer" id="features-title" title="Six features, one display." lead="Select a feature to see how it fits into the lesson or meeting." />
          <Reveal>
            <FeatureTabs items={tabs} />
          </Reveal>
        </div>
      </section>

      <section className="section bg-alt" aria-labelledby="gallery-title">
        <div className="container">
          <SysHead code="G/01" label="Gallery" id="gallery-title" title="Panels in context." lead="Concept imagery — final product photography will replace these frames." />
          <RevealGroup className="sys-gallery">
            {[
              { p: photos.classroomHero, pos: "65% 45%", cap: "Classroom set-up", cls: "wide" },
              { p: photos.touchWriting, pos: "60% 50%", cap: "Writing & annotation", cls: "" },
              { p: photos.opsConnectivity, pos: "55% 60%", cap: "Computing & ports", cls: "" },
              { p: photos.displayInstalled, pos: "70% 50%", cap: "Wall-mounted display", cls: "wide" },
            ].map((g, i) => (
              <RevealItem key={g.cap} className={`sys-gallery-item ${g.cls}`}>
                <figure className="frame">
                  <div className="frame-media">
                    <Photo photo={g.p} position={g.pos} sizes="(max-width: 767px) 100vw, 60vw" />
                  </div>
                  <figcaption className="frame-bar">
                    <span>G/{String(i + 1).padStart(2, "0")} · {g.cap}</span>
                    <span>Illustrative</span>
                  </figcaption>
                </figure>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section className="section" aria-labelledby="acc-title">
        <div className="container">
          <SysHead code="E/01" label="Ecosystem" id="acc-title" title="Accessories & complete solutions." />
          <RevealGroup className="module-grid three">
            {ecosystem.slice(1).map((e, i) => (
              <RevealItem key={e.title} className="mod">
                <div className="mod-top">
                  <span className="mod-icon">
                    <Icon name={e.icon} size={22} />
                  </span>
                  <span className="sys-code">E/{String(i + 1).padStart(2, "0")}</span>
                </div>
                <h3>{e.title}</h3>
                <p>{e.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <section id="specifications" className="section bg-alt" aria-labelledby="spec-title">
        <div className="container">
          <SysHead
            code="T/01"
            label="Specifications"
            id="spec-title"
            title="Technical specifications."
            lead="Sizes and configurations vary by model. Verified specifications are provided with every quotation."
          />
          <Reveal className="spec-module">
            <SpecSheet />
          </Reveal>
        </div>
      </section>

      <Cta
        code="F/END"
        title="Find the right panel for your rooms."
        text="Tell us about your rooms, the number of panels you need and how they will be used. We’ll share suitable options and verified specifications."
        primary={{ label: "Enquire about panels", href: interest }}
        secondary={{ label: "Classroom solutions", href: "/classroom-solutions" }}
      />
    </>
  );
}
