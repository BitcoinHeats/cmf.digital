import { ArrowRight, Check, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CONSULTATION_URL } from '@/components/landing/constants';
import { Navbar } from '@/components/landing/Navbar';
import { Footer } from '@/components/landing/Footer';
import { useSeoMeta } from '@unhead/react';

export interface ServiceFeature {
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface ServicePageData {
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  seoTitle: string;
  seoDescription: string;
}

export function ServicePage({ data }: { data: ServicePageData }) {
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
              background:
                'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.15), transparent 60%)',
            }}
          />
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
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
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 px-7 text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/50"
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
                className="flex flex-col rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5"
              >
                <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30">
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
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-3xl border border-blue-500/20 bg-gradient-to-br from-blue-600 to-blue-800 px-6 py-14 text-center shadow-2xl shadow-blue-500/30 sm:px-12">
            <div aria-hidden className="pointer-events-none absolute -right-10 -top-10 size-64 rounded-full bg-white/10 blur-3xl" />
            <div className="relative">
              <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
                Ready to get started?
              </h2>
              <p className="mx-auto mt-4 max-w-lg text-base text-blue-100">
                Let's discuss how {data.title.toLowerCase()} can transform your business.
              </p>
              <a
                href={CONSULTATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-blue-700 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl"
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
