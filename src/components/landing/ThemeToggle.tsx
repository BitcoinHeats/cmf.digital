import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/hooks/useTheme';
import { cn } from '@/lib/utils';

/**
 * Compact light/dark theme toggle. Cycles between the two themes and exposes
 * the current state via aria-pressed for assistive tech.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const { theme, setTheme } = useTheme();
  const resolved = theme === 'system' ? 'dark' : theme;
  const isDark = resolved === 'dark';

  return (
    <button
      type="button"
      aria-label={`Switch to ${isDark ? 'light' : 'dark'} theme`}
      aria-pressed={isDark}
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      className={cn(
        'relative inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:text-foreground hover:border-border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50',
        className,
      )}
    >
      <Sun
        className={cn(
          'size-[18px] transition-all duration-300',
          isDark ? 'rotate-0 scale-0 opacity-0' : 'rotate-0 scale-100 opacity-100',
        )}
      />
      <Moon
        className={cn(
          'absolute size-[18px] transition-all duration-300',
          isDark ? 'scale-100 opacity-100' : 'scale-0 opacity-0',
        )}
      />
    </button>
  );
}
