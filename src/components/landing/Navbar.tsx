import { useState } from 'react';
import { Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
import { LoginArea } from '@/components/auth/LoginArea';
import { ThemeToggle } from './ThemeToggle';
import { BrandWordmark, BrandMark } from './BrandMark';
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { CONSULTATION_URL } from './constants';

const NAV_LINKS = [
  { label: 'Features', href: '#features' },
  { label: 'Why CMF', href: '#why-cmf' },
  { label: 'Treasury', href: '#treasury' },
  { label: 'Results', href: '#results' },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <Link to="/" className="group" aria-label="CMF.digital home">
          <BrandWordmark />
        </Link>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 lg:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle />
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-9 items-center rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 px-4 text-sm font-semibold text-white shadow-lg shadow-orange-500/30 transition-all hover:-translate-y-0.5 hover:shadow-orange-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Free Consultation
          </a>
          <LoginArea className="max-w-40" />
        </div>

        {/* Mobile actions */}
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <button
                type="button"
                aria-label="Open menu"
                className="inline-flex size-9 items-center justify-center rounded-full border border-border/60 text-muted-foreground transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
              >
                <Menu className="size-5" />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              {/* Accessible title for screen readers (visually hidden) */}
              <SheetTitle className="sr-only">CMF.digital navigation menu</SheetTitle>

              {/* Visible brand header */}
              <div className="flex items-center gap-2 px-4 pt-4 text-base">
                <BrandMark className="size-7" />
                <span className="font-bold tracking-tight text-foreground">
                  CMF<span className="text-orange-500">.digital</span>
                </span>
              </div>
              <nav className="flex flex-col gap-1 px-2">
                {NAV_LINKS.map((link) => (
                  <SheetClose asChild key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        'rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground',
                      )}
                    >
                      {link.label}
                    </a>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a
                    href={CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className="mt-2 rounded-lg bg-gradient-to-br from-amber-500 to-orange-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-orange-500/30"
                  >
                    Free Consultation
                  </a>
                </SheetClose>
              </nav>
              <div className="mt-auto border-t border-border/60 p-4">
                <LoginArea className="w-full" />
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
