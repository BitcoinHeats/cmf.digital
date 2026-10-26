import { cn } from '@/lib/utils';

/**
 * The CMF.digital brand mark: a blue gradient rounded square containing "CMF".
 * Reused by the Navbar and Footer so the logo stays consistent everywhere.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'flex items-center justify-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 font-extrabold leading-none text-white shadow-lg shadow-blue-500/30',
        className,
      )}
    >
      CMF
    </span>
  );
}

/** Wordmark pairing the BrandMark with the "CMF.digital" text. */
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
      <BrandMark className={cn('size-8 text-[11px]', markClassName)} />
      <span
        className={cn(
          'text-lg font-bold tracking-tight text-foreground',
          textClassName,
        )}
      >
        CMF<span className="text-blue-600">.digital</span>
      </span>
    </span>
  );
}
