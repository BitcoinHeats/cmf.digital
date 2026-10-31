import { ArrowRight, Sparkles } from 'lucide-react';
import { CONSULTATION_URL } from './constants';

const STATS = [
  { value: '24/7', label: 'Automated workflows' },
  { value: '99.9%', label: 'Transaction uptime' },
  { value: '<50ms', label: 'Avg. response time' },
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(59,130,246,0.18), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 85% 15%, rgba(6,182,212,0.12), transparent 55%)',
        }}
      />

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          <Sparkles className="size-4 text-blue-500" />
          <span>Digital Transactions &amp; AI Workflows</span>
        </div>

        <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-foreground sm:text-7xl lg:text-8xl">
          Community Management Firm
        </h1>

        <h2 className="mt-4 text-xl font-bold leading-tight tracking-tight text-blue-600 sm:text-3xl sm:bg-gradient-to-br sm:from-blue-500 sm:to-cyan-500 sm:bg-clip-text sm:[-webkit-text-fill-color:transparent]">
          Transforming Business Operations Through Digital Innovation
        </h2>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 px-7 text-base font-semibold text-white shadow-lg shadow-blue-500/40 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-blue-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Request a Consultation
            <ArrowRight className="size-4" />
          </a>
          <a
            href="/#services"
            className="inline-flex h-12 items-center rounded-xl border border-border bg-background/60 px-7 text-base font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-blue-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Explore Services
          </a>
        </div>

        <dl className="mx-auto mt-14 grid max-w-lg grid-cols-3 gap-4">
          {STATS.map((s) => (
            <div key={s.label} className="text-center">
              <dt className="sr-only">{s.label}</dt>
              <dd className="text-2xl font-bold text-foreground sm:text-3xl">{s.value}</dd>
              <p className="mt-1 text-xs text-muted-foreground sm:text-sm">{s.label}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
