/**
 * Inline Bitcoin logo mark (₿).
 *
 * lucide-react 1.x removed brand icons, and Bitcoin is central to CMF's
 * identity, so we inline the canonical ₿ glyph as an SVG component instead.
 */
export function BitcoinMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M14.24 10.56c.16-1.3-.78-1.94-2.12-2.4l.43-1.74-1.05-.26-.42 1.7-.83-.2.42-1.71-1.05-.26-.43 1.74c-.23-.05-.45-.1-.66-.16l-1.45-.36-.28 1.12s.78.18.76.19c.43.1.5.38.49.6l-.49 1.97c.03.01.06.02.1.03l-.1-.02L6.4 14.1c-.05.13-.19.33-.48.26.01.02-.76-.19-.76-.19l-.52 1.2 1.37.34c.25.06.5.13.75.2l-.44 1.76 1.05.26.43-1.74.83.21-.43 1.73 1.05.26.44-1.76c1.82.35 3.19.21 3.77-1.44.46-1.33-.02-2.1-1.02-2.6.72-.17 1.26-.64 1.41-1.62zM11.5 16.27c-.96.24-2.47-.2-2.97-.35l.59-2.37c.5.13 2.04.6 2.16 1.5.08.6-.34 1.02-.78 1.22zm.77-3.82c-.79.2-2.06-.2-2.48-.31l.54-2.15c.42.11 1.8.42 1.9 1.22.09.64-.36.98-.96 1.24z" />
    </svg>
  );
}
