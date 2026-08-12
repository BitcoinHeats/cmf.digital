import { ArrowRight, Flame, Percent, Quote, TrendingDown, Zap } from 'lucide-react';

const STATS = [
  { icon: TrendingDown, value: 'XX%', label: 'Reduction in administrative labor hours' },
  { icon: Flame, value: '$XX,XXX', label: 'Annual savings on heating costs via Bitcoin mining' },
  { icon: Percent, value: 'XX%', label: 'Treasury yield generated on operating reserves' },
  { icon: Zap, value: 'XX%', label: 'Faster rent collection and reconciliation' },
] as const;

const CASE_STUDIES = [
  {
    tag: 'Case Study',
    title: 'How [Client] reduced operational costs by XX% while adding Bitcoin treasury yield with CMF.',
  },
  {
    tag: 'Case Study',
    title:
      "How [Client] replaced their legacy platform and saved $XX,XXX annually with CMF's AI agent workflows.",
  },
] as const;

export function SocialProof() {
  return (
    <section id="results" className="relative border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Results
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Results that speak for themselves.
          </h2>
        </div>

        {/* Stats band */}
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STATS.map((stat) => {
            const { icon: Icon, value, label } = stat;
            return (
              <div
                key={label}
                className="rounded-2xl border border-border/70 bg-card p-6 text-center"
              >
                <div className="mx-auto flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/15 to-orange-600/10 text-orange-500">
                  <Icon className="size-5" />
                </div>
                <div className="mt-4 text-3xl font-extrabold tracking-tight text-foreground">
                  {value}
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  {label}
                </p>
              </div>
            );
          })}
        </div>

        {/* Testimonial */}
        <figure className="mt-10 rounded-2xl border border-dashed border-border/70 bg-card/50 p-8 text-center sm:p-10">
          <Quote className="mx-auto size-8 text-orange-500/40" />
          <blockquote className="mx-auto mt-5 max-w-2xl text-lg font-medium leading-relaxed text-foreground sm:text-xl">
            "Quote from early client about cost savings, efficiency gains, or
            treasury yield."
          </blockquote>
          <figcaption className="mt-5 text-sm text-muted-foreground">
            — Client Name, Property Type, Portfolio Size
          </figcaption>
        </figure>

        {/* Case studies */}
        <div className="mt-6 grid gap-5 md:grid-cols-2">
          {CASE_STUDIES.map((cs) => (
            <a
              key={cs.title}
              href="#consultation"
              className="group flex flex-col rounded-2xl border border-dashed border-border/70 bg-card/50 p-7 transition-all hover:-translate-y-1 hover:border-orange-500/40 hover:bg-card"
            >
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-500">
                {cs.tag}
              </span>
              <p className="mt-3 flex-1 text-base font-medium leading-relaxed text-foreground">
                {cs.title}
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange-500">
                Read more
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
