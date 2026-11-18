/**
 * Supplied Concept 03 artwork: angular X built from two interlocking strokes + NEXIO wordmark.
 * Geometry is unchanged from Brand/NEXIO-Symbol.svg. Carbon stroke = currentColor (theme-aware),
 * signal-orange strokes = --logo-accent.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`} role="img" aria-label="NEXIO">
      <svg className="logo-symbol" viewBox="0 0 96 96" aria-hidden="true" focusable="false">
        <path d="M9 12 L36 12 L79 78 L52 78 Z" fill="currentColor" />
        <path d="M60 12 H87 L44 88 H17 Z" fill="var(--logo-accent)" />
        <path d="M36 12 L52 12 L44 28 Z" fill="var(--logo-accent)" />
      </svg>
      <span className="logo-word" aria-hidden="true">
        NEXIO
      </span>
    </span>
  );
}
