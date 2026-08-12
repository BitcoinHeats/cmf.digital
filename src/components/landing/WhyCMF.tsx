import { Gauge, Rocket, ShieldCheck, TrendingDown, type LucideIcon } from 'lucide-react';

interface Reason {
  icon: LucideIcon;
  title: string;
  description: string;
  /** Icon container classes. */
  iconClass: string;
}

const REASONS: Reason[] = [
  {
    icon: ShieldCheck,
    title: 'Sovereignty',
    description:
      'You own your data. You own your payments. You own your infrastructure. You own your treasury. No centralized platform can lock you out, freeze your funds, or hold your operations hostage. CMF is built on Bitcoin and decentralized infrastructure — you stay in control.',
    iconClass: 'bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-orange-500/30',
  },
  {
    icon: Gauge,
    title: 'Efficiency',
    description:
      'AI agents operate 24/7 without human bottlenecks. Routine workflows — tenant communications, rent collection, maintenance dispatch, financial reconciliation — happen automatically. Your labor costs drop. Your response times improve. Your portfolio scales without scaling headcount.',
    iconClass: 'bg-indigo-500/15 text-indigo-500',
  },
  {
    icon: TrendingDown,
    title: 'Cost Savings',
    description:
      'Lower fees. No hidden charges. No onboarding fees. No training fees. No support fees. Heating costs offset by mining revenue. Treasury yield offsetting management costs. You keep more of your NOI.',
    iconClass: 'bg-emerald-500/15 text-emerald-500',
  },
  {
    icon: Rocket,
    title: 'Future-Proofing',
    description:
      'Legacy platforms are built on 2010-era SaaS architecture. CMF is built on Bitcoin and AI agent infrastructure. As the industry shifts toward agentic AI and sound money, your operations are already there.',
    iconClass: 'bg-gradient-to-br from-indigo-500 to-violet-500 text-white shadow-indigo-500/30',
  },
];

export function WhyCMF() {
  return (
    <section id="why-cmf" className="relative border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
            Why CMF
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why property managers, owners, and investors choose CMF.
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {REASONS.map((reason) => (
            <ReasonCard key={reason.title} reason={reason} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ReasonCard({ reason }: { reason: Reason }) {
  const { icon: Icon, title, description, iconClass } = reason;
  return (
    <article className="flex flex-col rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:border-orange-500/40 hover:shadow-lg hover:shadow-orange-500/5">
      <div className={`flex size-12 items-center justify-center rounded-xl shadow-lg ${iconClass}`}>
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
