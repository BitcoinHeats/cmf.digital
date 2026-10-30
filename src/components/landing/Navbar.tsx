import { useState } from 'react';
import { ChevronDown, Menu } from 'lucide-react';
import { Link } from 'react-router-dom';
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

const SERVICES = [
  { label: 'Digital Transactions', href: '/services/digital-transactions' },
  { label: 'AI Workflow Solutions', href: '/services/ai-workflows' },
  { label: 'Industry Solutions', href: '/services/industries' },
  { label: 'Bitcoin Treasury', href: '/services/bitcoin-treasury' },
] as const;

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="group" aria-label="CMF.digital home">
          <BrandWordmark />
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-7 lg:flex">
          <li>
            <Link to="/" className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground">
              Home
            </Link>
          </li>
          {/* Services dropdown */}
          <li className="relative group">
            <button
              type="button"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              Services
              <ChevronDown className="size-4" />
            </button>
            <div className="absolute left-0 top-full pt-3 opacity-0 invisible transition-all group-hover:visible group-hover:opacity-100">
              <div className="w-56 rounded-xl border border-border/60 bg-popover p-2 shadow-xl">
                {SERVICES.map((s) => (
                  <Link
                    key={s.href}
                    to={s.href}
                    className="block rounded-lg px-4 py-2.5 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                  >
                    {s.label}
                  </Link>
                ))}
              </div>
            </div>
          </li>
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
            className="inline-flex h-9 items-center rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 px-4 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Consultation
          </a>
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
              <SheetTitle className="sr-only">CMF.digital navigation menu</SheetTitle>
              <div className="flex items-center gap-2 px-4 pt-4 text-base">
                <BrandMark className="size-7 text-[10px]" />
                <span className="font-bold tracking-tight text-foreground">
                  CMF<span className="text-blue-600">.digital</span>
                </span>
              </div>
              <nav className="flex flex-col gap-1 px-2">
                <SheetClose asChild>
                  <Link to="/" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                    Home
                  </Link>
                </SheetClose>
                {SERVICES.map((s) => (
                  <SheetClose asChild key={s.href}>
                    <Link
                      to={s.href}
                      onClick={() => setOpen(false)}
                      className="rounded-lg px-4 py-3 pl-6 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
                    >
                      {s.label}
                    </Link>
                  </SheetClose>
                ))}
                <SheetClose asChild>
                  <a href="/#about" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                    About
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a href="/#contact" onClick={() => setOpen(false)} className="rounded-lg px-4 py-3 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground">
                    Contact
                  </a>
                </SheetClose>
                <SheetClose asChild>
                  <a
                    href={CONSULTATION_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    className={cn('mt-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-blue-500/30')}
                  >
                    Consultation
                  </a>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </nav>
    </header>
  );
}
