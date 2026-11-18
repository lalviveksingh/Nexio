/**
 * Supplied Concept 01 artwork: negative-space architectural N + NEXIO wordmark.
 * Symbol geometry is unchanged from Brand/NEXIO-Symbol.svg; colours are tokenised
 * (ink = currentColor, ribbon = --logo-accent) so it adapts to light/dark themes.
 */
export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`logo ${className}`} role="img" aria-label="NEXIO">
      <svg className="logo-symbol" viewBox="0 0 96 96" aria-hidden="true" focusable="false">
        <path d="M10 8 H31 L70 58 V8 H88 V88 H67 L28 38 V88 H10 Z" fill="currentColor" />
        <path d="M31 8 L70 58" fill="none" stroke="var(--logo-accent)" strokeWidth="7" strokeLinecap="square" />
      </svg>
      <span className="logo-word" aria-hidden="true">
        NEXIO
      </span>
    </span>
  );
}
