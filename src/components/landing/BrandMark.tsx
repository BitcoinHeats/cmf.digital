import { cn } from '@/lib/utils';
import { BitcoinMark } from './BitcoinMark';

/**
 * The CMF.digital brand mark: a Bitcoin-orange gradient rounded square
 * containing the ₿ glyph. Reused by the Navbar and Footer so the logo
 * stays consistent everywhere.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'flex items-center justify-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/30',
        className,
      )}
    >
      <BitcoinMark className="size-[60%]" />
    </span>
  );
}

/** Wordmark pairing the BrandMark with the "CMF.digital" gradient text. */
export function BrandWordmark({
  className,
  markClassName,
  textClassName,
}: {
  className?: string;
  markClassName?: string;
  textClassName?: string;
}) {
  return (
    <span className={cn('flex items-center gap-2', className)}>
      <BrandMark className={cn('size-8', markClassName)} />
      <span
        className={cn(
          'text-lg font-bold tracking-tight text-foreground',
          textClassName,
        )}
      >
        CMF<span className="text-orange-500">.digital</span>
      </span>
    </span>
  );
}
