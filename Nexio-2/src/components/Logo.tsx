/**
 * Supplied Concept 02 artwork: modular NX symbol (four connected planes) + NEXIO wordmark.
 * Geometry is unchanged from Brand/NEXIO-Symbol.svg. The midnight plane uses currentColor so the
 * mark stays legible in dark mode; cobalt and lime planes keep their brand colours.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`} role="img" aria-label="NEXIO">
      <svg className="logo-symbol" viewBox="0 0 96 96" aria-hidden="true" focusable="false">
        <path d="M9 25 L37 8 L61 22 L34 39 Z" fill="var(--logo-a)" />
        <path d="M36 43 L64 26 L88 40 L60 57 Z" fill="currentColor" />
        <path d="M9 58 L37 41 L61 55 L33 72 Z" fill="var(--logo-b)" />
        <path d="M63 59 L88 44 L88 73 L63 88 Z" fill="var(--logo-a)" />
      </svg>
      <span className="logo-word" aria-hidden="true">
        NEXIO
      </span>
    </span>
  );
}
