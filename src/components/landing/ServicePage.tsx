import { ArrowRight, Check, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONSULTATION_URL } from '@/components/landing/constants';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { useSeoMeta } from '@unhead/react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon | React.ComponentType<{ className?: string }>;
}

export interface ServicePageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  seoTitle: string;
  seoDescription: string;
  theme?: 'blue' | 'orange';
}

const THEMES = {
  blue: {
    glow: 'rgba(59,130,246,0.15)',
    eyebrow: 'text-blue-600',
    btn: 'from-blue-500 to-blue-700 shadow-blue-500/40 hover:shadow-blue-500/50',
    featureHover: 'hover:border-blue-500/50 hover:shadow-blue-500/5',
    featureIcon: 'from-blue-500 to-blue-700 shadow-blue-500/30',
    ctaBorder: 'border-blue-500/20',
    ctaBg: 'from-blue-600 to-blue-800 shadow-blue-500/30',
    ctaText: 'text-blue-100',
    ctaBtn: 'text-blue-700',
  },
  orange: {
    glow: 'rgba(247,147,26,0.15)',
    eyebrow: 'text-orange-600',
    btn: 'from-amber-500 to-orange-600 shadow-orange-500/40 hover:shadow-orange-500/50',
    featureHover: 'hover:border-orange-500/50 hover:shadow-orange-500/5',
    featureIcon: 'from-amber-500 to-orange-600 shadow-orange-500/30',
    ctaBorder: 'border-orange-500/20',
    ctaBg: 'from-orange-600 to-amber-500 shadow-orange-500/30',
    ctaText: 'text-orange-50',
    ctaBtn: 'text-orange-600',
  },
} as const;

export function ServicePage({ data }: { data: ServicePageData }) {
  const t = THEMES[data.theme ?? 'blue'];

  useSeoMeta({
    title: data.seoTitle,
    description: data.seoDescription,
    ogTitle: data.seoTitle,
    ogDescription: data.seoDescription,
  });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden pt-32 pb-16 sm:pt-40">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background: `radial-gradient(ellipse 80% 50% at 50% -10%, ${t.glow}, transparent 60%)`,
            }}
          />
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className={`text-sm font-semibold uppercase tracking-widest ${t.eyebrow}`}>
              {data.eyebrow}
            </p>
            <h1 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl">
              {data.title}
            </h1>
            <p className="mx-auto mt-5 max-w-2xl text-lg text-muted-foreground">
              {data.subtitle}
            </p>
            <div className="mt-8">
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-br px-7 text-base font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${t.btn}`}
              >
                Request a Consultation
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Description */}
        <section className="mx-auto max-w-3xl px-4 pb-8 sm:px-6">
          <p className="text-base leading-relaxed text-muted-foreground">{data.description}</p>
        </section>

        {/* Features grid */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
            {data.features.map((feature) => (
              <article
                key={feature.title}
                className={`flex flex-col rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg ${t.featureHover}`}
              >
                <div className={`flex size-12 items-center justify-center rounded-xl bg-gradient-to-br text-white shadow-lg ${t.featureIcon}`}>
                  <feature.icon className="size-6" />
                </div>
                <h3 className="mt-5 text-lg font-semibold text-foreground">{feature.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </article>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className={`relative mx-auto max-w-4xl overflow-hidden rounded-3xl border bg-gradient-to-br px-6 py-14 text-center shadow-2xl sm:px-12 ${t.ctaBorder} ${t.ctaBg}`}>
            <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className={`mx-auto mt-4 max-w-lg text-base ${t.ctaText}`}>
                Let's discuss how {data.title.toLowerCase()} can transform your business.
              </p>
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-base font-semibold shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl ${t.ctaBtn}`}
              >
                Request a Consultation
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </section>

        {/* Back link */}
        <div className="pb-16 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowRight className="size-4 rotate-180" />
            Back to home
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}

/** Reusable feature bullet list for service pages. */
export function FeatureBullet({ children }: { children: string }) {
  return (
    <li className="flex items-center gap-2 text-sm text-muted-foreground">
      <Check className="size-4 text-blue-500" />
      {children}
    </li>
  );
}
