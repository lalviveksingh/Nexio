import { ButtonLink } from "@/components/ui";
import { Reveal } from "@/components/Motion";

export function Cta({
  code = "NX/END",
  title = "Let’s connect the right technology to your space.",
  text = "Share your requirement — a classroom, a campus, an office or an IT upgrade — and the NEXIO team will help you plan the right combination of products, integration and support.",
  primary = { label: "Talk to NEXIO", href: "/contact" },
  secondary = { label: "Explore solutions", href: "/products-services" },
}: {
  code?: string;
  title?: string;
  text?: string;
  primary?: { label: string; href: string };
  secondary?: { label: string; href: string } | null;
}) {
  return (
    <section className="cta-sys" aria-labelledby="cta-title">
      <div className="container">
        <Reveal className="cta-module">
          <div className="cta-grid-guides" aria-hidden="true" />
          <div className="cta-top">
            <span className="sys-code">
              <span className="sys-dot" aria-hidden="true" />
              {code}
            </span>
            <span className="sys-code">Next step</span>
          </div>
          <h2 id="cta-title">{title}</h2>
          <div className="cta-bottom">
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
          </div>
        </Reveal>
      </div>
    </section>
  );
}
