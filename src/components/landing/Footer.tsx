import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { BrandMark } from './BrandMark';
import { CONSULTATION_URL } from './constants';

const FOOTER_NAV: { label: string; href: string; external?: boolean }[] = [
  { label: 'Home', href: '/' },
  { label: 'Digital Transactions', href: '/services/digital-transactions' },
  { label: 'AI Workflows', href: '/services/ai-workflows' },
  { label: 'Industries', href: '/services/industries' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Consultation', href: CONSULTATION_URL, external: true },
];

export function Footer() {
  return (
    <footer className="border-t border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row md:items-start">
          {/* Brand */}
          <div className="max-w-sm text-center md:text-left">
            <Link to="/" className="flex items-center justify-center gap-2 md:justify-start" aria-label="CMF.digital home">
              <BrandMark className="size-8 text-[11px]" />
              <span className="text-lg font-bold tracking-tight text-foreground">
                CMF<span className="text-blue-600">.digital</span>
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              Transforming business operations through digital innovation.
              Seamless digital transactions and intelligent AI workflows for
              modern businesses.
            </p>
          </div>

          {/* Nav */}
          <nav aria-label="Footer">
            <ul className="flex flex-col items-center gap-3 md:items-start">
              {FOOTER_NAV.map((link) => (
                <li key={link.label}>
                  {link.href.startsWith('/') && !link.external ? (
                    <Link
                      to={link.href}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </Link>
                  ) : (
                    <a
                      href={link.href}
                      {...(link.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                    </a>
                  )}
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
