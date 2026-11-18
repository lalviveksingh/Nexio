import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { concept } from "@/config/concept";
import { audiences, classroom, company, panelFeatures, photos, pillars, productCategories, values, whyNexio } from "@/data/content";
import { ButtonLink, Eyebrow, Photo, TextLink } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { MaskReveal, Parallax, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { Cta } from "@/components/Cta";

export default function HomePage() {
  const { hero } = concept;
  return (
    <>
      {/* Hero — serif headline with generous white space; image sits BELOW the copy, never behind it. */}
      <section className="hero" aria-labelledby="hero-title">
        <div className="container">
          <Reveal y={10}>
            <Eyebrow index="NEXIO R&amp;D Tech">Innovate. Educate. Elevate.</Eyebrow>
          </Reveal>
          <div className="hero-grid">
            <div id="hero-title">
              <WordReveal text={hero.title} accentWords={["forward"]} />
            </div>
            <Reveal className="hero-aside" delay={0.45}>
              <p className="lead">{hero.support}</p>
              <div className="btn-row">
                <ButtonLink href={hero.primary.href} size="lg">
                  {hero.primary.label}
                </ButtonLink>
                <ButtonLink href={hero.secondary.href} variant="secondary" size="lg">
                  {hero.secondary.label}
                </ButtonLink>
              </div>
            </Reveal>
          </div>
          <figure className="hero-media">
            <MaskReveal onMount delay={0.35}>
              <Photo photo={photos.classroomHero} priority sizes="(max-width: 1320px) 100vw, 1320px" position="38% 55%" />
            </MaskReveal>
            <figcaption className="figcaption">
              <span>Fig. 01 — The interactive learning space</span>
              <span>Illustrative</span>
            </figcaption>
          </figure>
        </div>
      </section>

      {/* Company intro */}
      <section className="section" aria-labelledby="intro-title">
        <div className="container statement">
          <Reveal>
            <Eyebrow index="01">Who we are</Eyebrow>
          </Reveal>
          <div>
            <Reveal>
              <h2 id="intro-title" className="statement-text">
                We see technology as a driver of <span className="accent">progress and possibility</span> — and we make it
                smarter, simpler and more accessible.
              </h2>
            </Reveal>
            <Reveal className="statement-body" delay={0.1}>
              <p style={{ marginTop: 32 }}>{company.intro}</p>
              <TextLink href="/about">More about NEXIO</TextLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Five business pillars — editorial index, not a card grid */}
      <section className="section" aria-labelledby="pillars-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="02">What we do</Eyebrow>
              <h2 id="pillars-title">Five disciplines, one dependable partner.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">From the devices on a desk to the network behind them — supplied, integrated and supported by one team.</p>
            </Reveal>
          </div>
          <RevealGroup as="ol" className="index-list">
            {pillars.map((p, i) => (
              <RevealItem as="li" key={p.id} className="index-row">
                <span className="index-num">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="index-title">{p.title}</h3>
                <p className="index-desc">{p.description}</p>
                <ul className="index-points" aria-label={`${p.title} includes`}>
                  {p.points.map((pt) => (
                    <li key={pt} className="tag">
                      {pt}
                    </li>
                  ))}
                </ul>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <div style={{ marginTop: 32 }}>
              <TextLink href="/products-services">See products &amp; services</TextLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Classroom spotlight — warm paper section */}
      <section className="section bg-alt" aria-labelledby="classroom-title">
        <div className="container split">
          <figure className="split-media">
            <MaskReveal direction="left">
              <Photo photo={photos.teacherLesson} sizes="(max-width: 1023px) 100vw, 60vw" position="40% 40%" />
            </MaskReveal>
            <figcaption className="figcaption">
              <span>Fig. 02 — Visual, participative lessons</span>
              <span>Illustrative</span>
            </figcaption>
          </figure>
          <div className="split-copy">
            <Reveal>
              <Eyebrow index="03">Classroom Solutions</Eyebrow>
              <h2 id="classroom-title">
                Smart classrooms. <span className="accent">Smarter learning.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">{classroom.intro}</p>
            </Reveal>
            <Reveal delay={0.15}>
              <ul className="shift-list" aria-label="How classrooms change">
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
            <Reveal delay={0.2}>
              <ButtonLink href="/classroom-solutions" variant="secondary">
                Explore classroom solutions
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Featured interactive flat panel */}
      <section className="section" aria-labelledby="ifp-title">
        <div className="container split reverse">
          <figure className="split-media tall">
            <Parallax>
              <Photo photo={photos.touchWriting} sizes="(max-width: 1023px) 100vw, 55vw" position="60% 50%" />
            </Parallax>
          </figure>
          <div className="split-copy">
            <Reveal>
              <Eyebrow index="04">Interactive Flat Panels</Eyebrow>
              <h2 id="ifp-title">
                A smarter way to teach, present, <span className="accent">collaborate</span> and inspire.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">{classroom.panelsLine}</p>
            </Reveal>
            <RevealGroup as="ol" className="feature-list">
              {panelFeatures.slice(0, 4).map((f, i) => (
                <RevealItem as="li" key={f.title} className="feature-item">
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{f.title}</h3>
                  <p>{f.text}</p>
                </RevealItem>
              ))}
            </RevealGroup>
            <Reveal>
              <ButtonLink href="/interactive-flat-panels">Discover interactive panels</ButtonLink>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Category preview */}
      <section className="section-tight" aria-labelledby="catalogue-title" style={{ paddingTop: 0 }}>
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="05">The catalogue</Eyebrow>
              <h2 id="catalogue-title">Technology for every room we work in.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <TextLink href="/products-services#catalogue">View all ten categories</TextLink>
            </Reveal>
          </div>
          <RevealGroup className="hairline-grid cols-3">
            {productCategories.slice(0, 6).map((p) => (
              <RevealItem key={p.id} className="module">
                <Link href={p.href ?? `/products-services#catalogue`} className="module-link">
                  <span className="module-icon">
                    <Icon name={p.icon} size={26} />
                  </span>
                  <span className="mono">{p.group}</span>
                  <h3>{p.title}</h3>
                  <p>{p.summary}</p>
                </Link>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Why NEXIO — ink punctuation section */}
      <section className="section deep" aria-labelledby="why-title">
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="06">Why NEXIO</Eyebrow>
              <h2 id="why-title">
                Built on five values we <span className="accent">work by</span>.
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead muted">{company.mission}</p>
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
          <RevealGroup className="why-grid">
            {whyNexio.map((w) => (
              <RevealItem key={w.title} className="why-item">
                <Icon name={w.icon} />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Application environments */}
      <section className="section" aria-labelledby="env-title">
        <div className="container">
          <div className="section-head split">
            <Reveal>
              <Eyebrow index="07">Where we work</Eyebrow>
              <h2 id="env-title">From classrooms to boardrooms.</h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">Solutions shaped for learning institutions and for the businesses and organisations that keep them running.</p>
            </Reveal>
          </div>
          <RevealGroup className="audience-row">
            {audiences.map((a) => (
              <RevealItem key={a.title} className="audience">
                <Icon name={a.icon} />
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
