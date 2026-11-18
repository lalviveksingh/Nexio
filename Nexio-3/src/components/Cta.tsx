import { ButtonLink, Eyebrow } from "@/components/ui";
import { Reveal, WordReveal } from "@/components/Motion";

export function Cta({
  title = "Let’s make\ntechnology matter.",
  accent = "matter.",
  text = "Tell us what you’re planning — one classroom, a whole campus or an office network — and NEXIO will help you get it right, from the first product to after-sales support.",
  primary = { label: "Start an enquiry", href: "/contact" },
  secondary = { label: "Products & services", href: "/products-services" },
}: {
  title?: string;
  accent?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="carbon angled cta-bold" aria-labelledby="cta-title">
      <div className="container">
        <Reveal y={10}>
          <Eyebrow>Next step</Eyebrow>
        </Reveal>
        <div id="cta-title">
          <WordReveal as="h2" text={title} accentWords={[accent.replace(/[.,]/g, "")]} className="mega" inView />
        </div>
        <Reveal className="cta-bold-bottom" delay={0.15}>
          <p>{text}</p>
          <div className="btn-row">
            <ButtonLink href={primary.href} variant="inverse" size="lg">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="ghost" size="lg">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
