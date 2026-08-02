import { ArrowRight, Sparkles, Star } from 'lucide-react';

const STATS = [
  { value: '10k+', label: 'Builders onboard' },
  { value: '99.9%', label: 'Uptime SLA' },
  { value: '<50ms', label: 'Avg. response' },
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
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(99,102,241,0.25), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-60 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 80% 20%, rgba(6,182,212,0.18), transparent 55%)',
        }}
      />

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          <Sparkles className="size-4 text-indigo-500" />
          <span>Now in public beta</span>
          <span className="text-foreground/30">·</span>
          <span className="inline-flex items-center gap-1 font-medium text-foreground">
            4.9 <Star className="size-3.5 fill-amber-400 text-amber-400" />
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
          Build Something{' '}
          <span className="bg-gradient-to-br from-indigo-500 via-indigo-400 to-cyan-400 bg-clip-text text-transparent">
            Modern
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground sm:text-xl">
          A clean starting point for your new domain. Fast, responsive, and ready to
          customize — ship your next idea without the boilerplate.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#features"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-br from-indigo-500 to-indigo-600 px-7 text-base font-semibold text-white shadow-lg shadow-indigo-500/40 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-indigo-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Get Started
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#how-it-works"
            className="inline-flex h-12 items-center rounded-xl border border-border bg-background/60 px-7 text-base font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-indigo-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Learn More
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

/** Decorative browser-frame mockup to anchor the hero visually. */
function HeroPreview() {
  return (
    <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-border/70 bg-card/60 p-2 shadow-2xl shadow-indigo-500/10 backdrop-blur">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-green-400/80" />
          <span className="ml-3 hidden h-6 flex-1 items-center rounded-md bg-background/60 px-3 text-xs text-muted-foreground sm:flex">
            yourbrand.com
          </span>
        </div>
        {/* Faux content */}
        <div className="grid gap-4 rounded-xl border border-border/60 bg-background/40 p-5 sm:grid-cols-3">
          <div className="h-28 rounded-lg bg-gradient-to-br from-indigo-500/20 to-cyan-400/10 sm:col-span-2" />
          <div className="flex flex-col gap-3">
            <div className="h-4 w-3/4 rounded bg-muted" />
            <div className="h-4 w-1/2 rounded bg-muted" />
            <div className="mt-auto h-9 w-full rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600" />
          </div>
          {[0, 1, 2].map((i) => (
            <div key={i} className="flex flex-col gap-2 rounded-lg border border-border/50 p-4">
              <div className="size-8 rounded-md bg-gradient-to-br from-indigo-500/30 to-cyan-400/20" />
              <div className="h-3 w-2/3 rounded bg-muted" />
              <div className="h-3 w-full rounded bg-muted/70" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
