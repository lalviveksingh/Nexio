import { ButtonLink, Eyebrow } from "@/components/ui";
import { Reveal } from "@/components/Motion";

export function Cta({
  title = "Let’s plan your next classroom or technology project.",
  text = "Tell us about your institution or business and what you need. The NEXIO team will help you find the right products, solutions and support.",
  primary = { label: "Make an enquiry", href: "/contact" },
  secondary = { label: "Explore solutions", href: "/products-services" },
}: {
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="cta" aria-labelledby="cta-title">
      <div className="container cta-inner">
        <Reveal>
          <Eyebrow>Start a conversation</Eyebrow>
          <h2 id="cta-title">{title}</h2>
        </Reveal>
        <Reveal delay={0.1} className="split-copy">
          <p>{text}</p>
          <div className="btn-row">
            <ButtonLink href={primary.href} size="lg">
              {primary.label}
            </ButtonLink>
            {secondary && (
              <ButtonLink href={secondary.href} variant="secondary" size="lg">
                {secondary.label}
              </ButtonLink>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
