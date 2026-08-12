import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';
import { BitcoinMark } from './BitcoinMark';

const FOOTER_NAV = [
  { label: 'Features', href: '#features' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'Why Bitcoin', href: '#treasury' },
  { label: 'Why AI', href: '#why-cmf' },
  { label: 'Free Consultation', href: '#consultation' },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="max-w-sm text-center md:text-left">
            <Link to="/" className="flex items-center justify-center gap-2 md:justify-start" aria-label="CMF.digital home">
              <BrandMark className="size-8" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                CMF<span className="text-orange-500">.digital</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              The future of property management. AI agent workflows, Bitcoin
              payments, mining for heat, and treasury optimization — enterprise
              capabilities without enterprise lock-in.
            </p>
            <div className="mt-5 flex items-center justify-center gap-3 md:justify-start">
              <span
                aria-hidden
                className="flex size-9 items-center justify-center rounded-full border border-orange-500/30 bg-orange-500/10 text-orange-500"
              >
                <BitcoinMark className="size-4" />
              </span>
            </div>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <ul className="flex flex-col items-center gap-3 md:items-start">
              {FOOTER_NAV.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border/60 pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} CMF.digital. All rights reserved.
          </p>
          <a
            href="https://shakespeare.diy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Vibed with
            <Heart className="size-3.5 fill-rose-500 text-rose-500" />
            Shakespeare
          </a>
        </div>
      </div>
    </footer>
  );
}
