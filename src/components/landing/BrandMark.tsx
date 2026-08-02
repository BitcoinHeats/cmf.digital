import { cn } from '@/lib/utils';

/**
 * The 1of1 brand mark: a gradient rounded square containing a bold "1/1".
 * Reused by the Navbar and Footer so the logo stays consistent everywhere.
 */
export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      aria-hidden
      className={cn(
        'flex items-center justify-center rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-400 font-extrabold leading-none text-white shadow-lg shadow-indigo-500/30',
        className,
      )}
    >
      1/1
    </span>
  );
}

/** Wordmark pairing the BrandMark with the "1of1" gradient text. */
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
      <BrandMark className={cn('size-8 text-sm', markClassName)} />
      <span
        className={cn(
          'bg-gradient-to-br from-indigo-500 to-cyan-400 bg-clip-text text-lg font-bold text-transparent',
          textClassName,
        )}
      >
        1of1
      </span>
    </span>
  );
}
