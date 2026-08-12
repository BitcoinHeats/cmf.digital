import { Target, Compass } from 'lucide-react';

export function WhoWeAre() {
  return (
    <section id="who-we-are" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] lg:gap-16">
        {/* Narrative */}
        <div>
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Who we are
          </p>
          <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
            We built CMF because we were tired of overpaying for underpowered
            software.
          </h2>

          <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
            <p>
              CMF.digital was founded by property professionals who lived through
              the frustration of legacy platforms — bloated pricing, locked-in
              dashboards, hidden fees, and zero innovation. We watched the
              property management industry stagnate while AI and Bitcoin
              transformed every other sector.
            </p>
            <p>So we built the alternative.</p>
            <p>
              Our team spans property management operations, AI agent
              architecture, Bitcoin infrastructure, and decentralized hosting.
              We don't patch legacy systems. We replace them.
            </p>
          </div>
        </div>

        {/* Mission + Why we exist cards */}
        <div className="flex flex-col gap-5">
          <article className="rounded-2xl border border-orange-500/30 bg-gradient-to-br from-orange-500/10 to-transparent p-6">
            <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/30">
              <Target className="size-6" />
            </div>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-orange-500">
              Mission
            </h3>
            <p className="mt-2 text-lg font-semibold leading-snug text-foreground">
              Sovereignty and efficiency for property professionals.
            </p>
          </article>

          <article className="rounded-2xl border border-border/70 bg-card p-6">
            <div className="flex size-11 items-center justify-center rounded-xl border border-indigo-500/30 bg-indigo-500/10 text-indigo-500">
              <Compass className="size-6" />
            </div>
            <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-indigo-500">
              Why we exist
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              There's a massive gap between what property managers need and what
              legacy platforms charge for it. CMF closes that gap by building on
              Bitcoin and AI — not 2010-era SaaS architecture.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
