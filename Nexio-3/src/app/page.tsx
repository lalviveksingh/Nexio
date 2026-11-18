import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { concept } from "@/config/concept";
import { audiences, classroom, company, panelFeatures, photos, pillars, productCategories, values, whyNexio } from "@/data/content";
import { ButtonLink, Eyebrow, Photo, TextLink } from "@/components/ui";
import { Icon } from "@/components/Icon";
import { Drift, MaskReveal, Parallax, Reveal, RevealGroup, RevealItem, WordReveal } from "@/components/Motion";
import { Cta } from "@/components/Cta";

export default function HomePage() {
  const { hero } = concept;
  return (
    <>
      {/* Hero: oversized headline on clean white; photo sits below in an asymmetric bleed crop. */}
      <section className="bold-hero" aria-labelledby="hero-title">
        <div className="container">
          <Reveal y={10}>
            <Eyebrow>NEXIO R&amp;D Tech — Innovate. Educate. Elevate.</Eyebrow>
          </Reveal>
          <div id="hero-title">
            <WordReveal text={hero.title} accentWords={["smarter"]} rise={20} className="giant" />
          </div>
          <div className="bold-hero-grid">
            <Reveal className="bold-hero-copy" delay={0.5}>
              <p className="lead">{hero.support}</p>
              <div className="btn-row">
                <ButtonLink href={hero.primary.href} size="lg">
                  {hero.primary.label}
                </ButtonLink>
                <ButtonLink href={hero.secondary.href} variant="secondary" size="lg">
                  {hero.secondary.label}
                </ButtonLink>
              </div>
              <ul className="meta-list" aria-label="What NEXIO covers">
                <li>IT products</li>
                <li>Technology solutions</li>
                <li>Support &amp; services</li>
                <li>Smart classrooms</li>
              </ul>
            </Reveal>
            <figure className="bleed-right">
              <MaskReveal onMount delay={0.35} direction="left">
                <Photo photo={photos.classroomHero} priority sizes="(max-width: 1023px) 100vw, 70vw" position="55% 50%" className="hero-photo" />
              </MaskReveal>
            </figure>
          </div>
        </div>
      </section>

      {/* Scroll-linked word band (desktop only, no perpetual motion) */}
      <div className="word-band" aria-hidden="true">
        <Drift distance={80}>
          <p>
            Innovate<span>.</span> Educate<span>.</span> Elevate<span>.</span> Innovate<span>.</span> Educate<span>.</span>
          </p>
        </Drift>
      </div>

      {/* Intro statement */}
      <section className="section" aria-labelledby="intro-title">
        <div className="container intro-bold">
          <div>
            <Reveal>
              <Eyebrow>01 — Who we are</Eyebrow>
            </Reveal>
            <Reveal>
              <h2 id="intro-title" className="big-statement">
                Technology is a driver of progress<span className="accent">.</span> We make it smarter, simpler and more accessible
                <span className="accent">.</span>
              </h2>
            </Reveal>
          </div>
          <Reveal className="intro-bold-side" delay={0.1}>
            <p>{company.intro}</p>
            <TextLink href="/about">The NEXIO story</TextLink>
          </Reveal>
        </div>
      </section>

      {/* Five pillars — carbon section with angled transition */}
      <section className="carbon angled" aria-labelledby="pillars-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>02 — What we do</Eyebrow>
              <h2 id="pillars-title">
                Five pillars<span className="accent">.</span>
                <br /> One partner<span className="accent">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <p className="lead">Products, solutions, supply, support and development — working as one system for your organisation.</p>
            </Reveal>
          </div>
          <RevealGroup as="ol" className="pillar-cards">
            {pillars.map((p, i) => (
              <RevealItem as="li" key={p.id} className="pillar-card">
                <span className="pillar-num">{String(i + 1).padStart(2, "0")}</span>
                <Icon name={p.icon} size={26} />
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal>
            <div style={{ marginTop: 40 }}>
              <ButtonLink href="/products-services" variant="inverse">
                Explore products &amp; services
              </ButtonLink>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Classroom spotlight — layered card over the image edge (solid card, not text on a busy photo) */}
      <section className="section" aria-labelledby="classroom-title">
        <div className="container layered">
          <figure className="layered-media">
            <MaskReveal direction="up">
              <Photo photo={photos.teacherLesson} sizes="(max-width: 1023px) 100vw, 65vw" position="45% 40%" />
            </MaskReveal>
          </figure>
          <Reveal className="layered-card" delay={0.15}>
            <Eyebrow>03 — Classroom Solutions</Eyebrow>
            <h2 id="classroom-title">
              Smart classrooms<span className="accent">.</span> Smarter learning<span className="accent">.</span>
            </h2>
            <p>{classroom.intro}</p>
            <ul className="mini-tags">
              {classroom.transformation.map((t) => (
                <li key={t.to}>{t.to}</li>
              ))}
            </ul>
            <ButtonLink href="/classroom-solutions">Explore classrooms</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Featured IFP */}
      <section className="section paper" aria-labelledby="ifp-title">
        <div className="container ifp-feature">
          <div className="ifp-feature-head">
            <Reveal>
              <Eyebrow>04 — Featured product</Eyebrow>
            </Reveal>
            <WordReveal as="h2" text={"Interactive\nFlat Panels."} accentWords={["Panels"]} className="giant-2" inView />
            <Reveal delay={0.1}>
              <p className="lead">A smarter way to teach, present, collaborate and inspire — on one large interactive display.</p>
            </Reveal>
          </div>
          <figure className="ifp-feature-media">
            <Parallax distance={36}>
              <Photo photo={photos.touchWriting} sizes="(max-width: 1023px) 100vw, 50vw" position="62% 50%" />
            </Parallax>
          </figure>
          <RevealGroup as="ol" className="num-features">
            {panelFeatures.map((f, i) => (
              <RevealItem as="li" key={f.title}>
                <span className="num">{String(i + 1).padStart(2, "0")}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
          <Reveal className="ifp-feature-cta">
            <ButtonLink href="/interactive-flat-panels">See interactive flat panels</ButtonLink>
          </Reveal>
        </div>
      </section>

      {/* Category preview — big list with orange sweep */}
      <section className="section" aria-labelledby="cat-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>05 — Catalogue</Eyebrow>
              <h2 id="cat-title">
                What we supply<span className="accent">.</span>
              </h2>
            </Reveal>
            <Reveal delay={0.1}>
              <TextLink href="/products-services#catalogue">All ten categories</TextLink>
            </Reveal>
          </div>
          <Reveal>
            <ol className="sweep-list">
              {productCategories.slice(0, 6).map((p, i) => (
                <li key={p.id}>
                  <Link href={p.href ?? "/products-services#catalogue"} className="sweep-row">
                    <span className="sweep-num">{String(i + 1).padStart(2, "0")}</span>
                    <span className="sweep-title">{p.title}</span>
                    <span className="sweep-meta">{p.group}</span>
                    <ArrowUpRight className="sweep-arrow" size={28} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ol>
          </Reveal>
        </div>
      </section>

      {/* Why NEXIO — typographic values */}
      <section className="section paper" aria-labelledby="why-title">
        <div className="container why-bold">
          <div className="why-bold-head">
            <Reveal>
              <Eyebrow>06 — Why NEXIO</Eyebrow>
              <h2 id="why-title">
                What we stand for<span className="accent">.</span>
              </h2>
              <p className="lead" style={{ marginTop: 24 }}>
                {company.mission}
              </p>
            </Reveal>
          </div>
          <RevealGroup as="ol" className="value-stack">
            {values.map((v) => (
              <RevealItem as="li" key={v.title}>
                <span className="value-big">{v.title}</span>
                <p>{v.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        <div className="container">
          <RevealGroup className="why-row">
            {whyNexio.map((w) => (
              <RevealItem key={w.title} className="why-cell">
                <Icon name={w.icon} size={24} />
                <h3>{w.title}</h3>
                <p>{w.text}</p>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      {/* Environments */}
      <section className="section" aria-labelledby="env-title">
        <div className="container">
          <div className="head-bold">
            <Reveal>
              <Eyebrow>07 — Environments</Eyebrow>
              <h2 id="env-title">
                Built for where<br /> work and learning happen<span className="accent">.</span>
              </h2>
            </Reveal>
          </div>
          <RevealGroup as="ul" className="env-tags">
            {audiences.map((a) => (
              <RevealItem as="li" key={a.title}>
                <Icon name={a.icon} size={22} />
                <span>{a.title}</span>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </section>

      <Cta />
    </>
  );
}
