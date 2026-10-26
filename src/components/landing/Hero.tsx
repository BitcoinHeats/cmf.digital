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

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-5xl lg:text-6xl">
          Transforming Business Operations Through{' '}
          <span className="text-blue-600 sm:bg-gradient-to-br sm:from-blue-500 sm:to-cyan-500 sm:bg-clip-text sm:[-webkit-text-fill-color:transparent]">
            Digital Innovation
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Seamless Digital Transactions &amp; Intelligent AI Workflows for
          Modern Businesses
        </p>

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

      <HeroPreview />
    </section>
  );
}

/** Stylized dashboard preview. */
function HeroPreview() {
  return (
    <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-border/70 bg-card/60 p-2 shadow-2xl shadow-blue-500/10 backdrop-blur">
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-green-400/80" />
          <span className="ml-3 hidden h-6 flex-1 items-center rounded-md bg-background/60 px-3 text-xs text-muted-foreground sm:flex">
            app.cmf.digital
          </span>
        </div>
        <div className="grid gap-4 rounded-xl border border-border/60 bg-background/40 p-5 sm:grid-cols-12">
          {/* Transaction card */}
          <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card/50 p-4 sm:col-span-4">
            <span className="text-xs font-medium text-muted-foreground">Transactions</span>
            <div className="text-2xl font-bold text-foreground">$1.2M</div>
            <div className="flex items-center gap-1.5 text-xs text-blue-500">
              <span>&#9650;</span> +12.4% this month
            </div>
            <div className="mt-auto h-16 rounded-md bg-gradient-to-br from-blue-500/20 to-cyan-500/10" />
          </div>
          {/* AI workflow card */}
          <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card/50 p-4 sm:col-span-4">
            <span className="text-xs font-medium text-muted-foreground">AI Workflows</span>
            {[
              { label: 'Data processing', status: 'Active' },
              { label: 'Predictive analysis', status: 'Running' },
              { label: 'Automation', status: 'Optimized' },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between text-sm">
                <span className="text-foreground/80">{row.label}</span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-blue-400" />
                  {row.status}
                </span>
              </div>
            ))}
          </div>
          {/* Efficiency card */}
          <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card/50 p-4 sm:col-span-4">
            <span className="text-xs font-medium text-muted-foreground">Efficiency</span>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-2xl font-bold text-foreground">94%</div>
                <div className="text-xs text-muted-foreground">Optimized</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-blue-500">-32%</div>
                <div className="text-xs text-muted-foreground">costs</div>
              </div>
            </div>
            <div className="mt-auto flex gap-1">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className="h-8 flex-1 rounded-sm bg-gradient-to-t from-blue-700/40 to-blue-400/60"
                  style={{ opacity: 0.4 + (i / 8) * 0.6 }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
