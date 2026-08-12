import { ArrowRight } from 'lucide-react';
import { BitcoinMark } from './BitcoinMark';

const PILLARS = [
  'AI Agent Workflows',
  'Bitcoin Payments',
  'Mining for Heat',
  'Treasury Optimization',
] as const;

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40">
      {/* Ambient glow — Bitcoin orange + AI indigo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(247,147,26,0.18), transparent 60%)',
        }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-70 dark:opacity-100"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 85% 15%, rgba(99,102,241,0.16), transparent 55%)',
        }}
      />

      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-border/70 bg-background/60 px-4 py-1.5 text-sm text-muted-foreground backdrop-blur">
          <BitcoinMark className="size-4 text-orange-500" />
          <span>Bitcoin + AI Property Management</span>
        </div>

        <h1 className="mt-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-foreground sm:text-6xl">
          The future of{' '}
          <span className="bg-gradient-to-br from-amber-400 via-orange-500 to-orange-600 bg-clip-text text-transparent">
            property management.
          </span>
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          AI agent workflows. Bitcoin payments. Mining for heat. Treasury
          optimization. Enterprise capabilities without enterprise lock-in.
          Sovereignty over your assets, operations, and balance sheet.
        </p>

        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#consultation"
            className="inline-flex h-12 items-center gap-2 rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 px-7 text-base font-semibold text-white shadow-lg shadow-orange-500/40 transition-all hover:-translate-y-0.5 hover:shadow-xl hover:shadow-orange-500/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Free Consultation
            <ArrowRight className="size-4" />
          </a>
          <a
            href="#features"
            className="inline-flex h-12 items-center rounded-xl border border-border bg-background/60 px-7 text-base font-semibold text-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-orange-500/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Explore the Platform
          </a>
        </div>

        {/* Pillar pills */}
        <ul className="mt-10 flex flex-wrap items-center justify-center gap-2.5">
          {PILLARS.map((pillar) => (
            <li
              key={pillar}
              className="rounded-full border border-border/60 bg-card/60 px-3.5 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur sm:text-sm"
            >
              {pillar}
            </li>
          ))}
        </ul>
      </div>

      <HeroPreview />
    </section>
  );
}

/** Stylized platform dashboard preview — property + Bitcoin treasury motifs. */
function HeroPreview() {
  return (
    <div className="mx-auto mt-16 max-w-5xl px-4 sm:px-6">
      <div className="rounded-2xl border border-border/70 bg-card/60 p-2 shadow-2xl shadow-orange-500/10 backdrop-blur">
        {/* Window chrome */}
        <div className="flex items-center gap-1.5 px-3 py-2">
          <span className="size-3 rounded-full bg-red-400/80" />
          <span className="size-3 rounded-full bg-amber-400/80" />
          <span className="size-3 rounded-full bg-green-400/80" />
          <span className="ml-3 hidden h-6 flex-1 items-center rounded-md bg-background/60 px-3 text-xs text-muted-foreground sm:flex">
            app.cmf.digital
          </span>
        </div>

        {/* Faux dashboard */}
        <div className="grid gap-4 rounded-xl border border-border/60 bg-background/40 p-5 sm:grid-cols-12">
          {/* Treasury balance card */}
          <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card/50 p-4 sm:col-span-4">
            <div className="flex items-center justify-between">
              <span className="flex items-center gap-1.5 text-xs font-medium text-muted-foreground">
                <BitcoinMark className="size-3.5 text-orange-500" />
                Treasury
              </span>
              <span className="size-2 rounded-full bg-green-400/80" />
            </div>
            <div className="text-2xl font-bold text-foreground">₿ 12.84</div>
            <div className="flex items-center gap-1.5 text-xs text-green-500">
              <span>&#9650;</span> +4.2% yield
            </div>
            <div className="mt-auto h-16 rounded-md bg-gradient-to-br from-amber-500/20 to-orange-600/10" />
          </div>

          {/* AI agent status */}
          <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card/50 p-4 sm:col-span-4">
            <span className="text-xs font-medium text-muted-foreground">
              AI Agents
            </span>
            {[
              { label: 'Tenant comms', status: 'Active' },
              { label: 'Rent collection', status: 'Running' },
              { label: 'Maintenance', status: 'Dispatched' },
            ].map((row) => (
              <div key={row.label} className="flex items-center justify-between text-sm">
                <span className="text-foreground/80">{row.label}</span>
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <span className="size-1.5 rounded-full bg-indigo-400" />
                  {row.status}
                </span>
              </div>
            ))}
          </div>

          {/* Mining / heat card */}
          <div className="flex flex-col gap-3 rounded-lg border border-border/50 bg-card/50 p-4 sm:col-span-4">
            <span className="text-xs font-medium text-muted-foreground">
              Mining &amp; Heat
            </span>
            <div className="flex items-end justify-between">
              <div>
                <div className="text-2xl font-bold text-foreground">38&deg;C</div>
                <div className="text-xs text-muted-foreground">Common area</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-semibold text-orange-500">+₿ 0.004</div>
                <div className="text-xs text-muted-foreground">today</div>
              </div>
            </div>
            <div className="mt-auto flex gap-1">
              {[0, 1, 2, 3, 4, 5, 6, 7].map((i) => (
                <div
                  key={i}
                  className="h-8 flex-1 rounded-sm bg-gradient-to-t from-orange-600/40 to-amber-400/60"
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
