import { ButtonLink, Eyebrow } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="section">
      <div className="container not-found">
        <Eyebrow index="404">Page not found</Eyebrow>
        <h1>This page has moved on.</h1>
        <p className="lead">The page you’re looking for doesn’t exist. Try one of these instead.</p>
        <div className="btn-row">
          <ButtonLink href="/">Back to home</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Make an enquiry
          </ButtonLink>
        </div>
      </div>
    </section>
  );
}
