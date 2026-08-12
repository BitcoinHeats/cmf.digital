import {
  ArrowRight,
  Banknote,
  Boxes,
  Landmark,
  Percent,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from 'lucide-react';
import { BitcoinMark } from './BitcoinMark';

interface TreasuryFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TREASURY_FEATURES: TreasuryFeature[] = [
  {
    icon: TrendingUp,
    title: 'Gain Bitcoin Exposure',
    description:
      'Boost the bottom line of your business by deploying revenues to Bitcoin without being forced to HODL. Property management reserves, escrow holdings, and operating capital generate Bitcoin exposure while maintaining operational liquidity.',
  },
  {
    icon: ShieldCheck,
    title: 'Principal Protection',
    description:
      'With Bitcoin Bonds, even if Bitcoin goes to zero, your business does not lose any money. Principal is protected. Upside is captured. This is the foundation that makes Bitcoin treasury strategies viable for property management operations.',
  },
  {
    icon: Banknote,
    title: 'Cashflow Solutions',
    description:
      'Gain cash flows for your small, medium, and large business treasury. Whether managing a single 48-unit building or a portfolio of commercial properties, CMF structures treasury positions that generate ongoing cash flow.',
  },
  {
    icon: Percent,
    title: 'Bitcoin Powered Yield',
    description:
      'Earn Bitcoin powered yield on revenues without trapping your equity value on your balance sheet. Your reserves work for you instead of sitting idle in a checking account losing value to inflation.',
  },
  {
    icon: Landmark,
    title: 'Borrow Against Your Treasury',
    description:
      'Unlock the purchasing power of your balance sheet without giving up growing equity value. Fund property improvements, acquisitions, or operations by borrowing against your Bitcoin-backed treasury position — no need to sell appreciating assets.',
  },
  {
    icon: Boxes,
    title: 'Tailored Vaults',
    description:
      'Use our tailored vaults strategically designed to fit your corporate needs. Different property types, portfolio sizes, and risk profiles get different treasury structures — not a one-size-fits-all approach.',
  },
];

const FLOW_STEPS = [
  { label: 'Operating Revenues', icon: null },
  { label: 'Bitcoin Exposure', icon: 'bitcoin' as const },
  { label: 'Yield Generation', icon: null },
  { label: 'Borrowing Capacity', icon: null },
  { label: 'Reinvestment', icon: null },
];

export function Treasury() {
  return (
    <section id="treasury" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          Treasury
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Supercharge Your Treasury.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Create cash flow, gain exposure, earn yield, and borrow against your
          treasury — all from one platform.
        </p>
      </div>

      {/* Intro body */}
      <div className="mx-auto mt-8 max-w-3xl space-y-4 text-base leading-relaxed text-muted-foreground">
        <p>
          Most property managers treat their treasury as a passive cost center.
          Reserves sit in checking accounts, losing value to inflation. Escrow
          holdings generate nothing. Operating capital sits idle between
          distributions.
        </p>
        <p>
          CMF changes that. Your treasury becomes an active revenue generator
          using Bitcoin-backed strategies — with principal protection built in.
        </p>
      </div>

      {/* Flow diagram */}
      <FlowDiagram />

      {/* Feature cards */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {TREASURY_FEATURES.map((feature) => (
          <TreasuryCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}

/** Treasury flow diagram with principal-protection floor and appreciation upside. */
function FlowDiagram() {
  return (
    <div className="mt-12 rounded-2xl border border-border/70 bg-gradient-to-br from-card to-muted/30 p-6 sm:p-8">
      {/* Upside label */}
      <div className="mb-4 flex items-center justify-center gap-2 text-xs font-medium text-orange-500">
        <TrendingUp className="size-4" />
        Bitcoin Appreciation — your upside
      </div>

      {/* Flow row */}
      <div className="flex flex-col items-stretch gap-3 lg:flex-row lg:items-center">
        {FLOW_STEPS.map((step, i) => (
          <div key={step.label} className="flex flex-1 items-center gap-3 lg:flex-col lg:gap-3">
            <div className="flex w-full flex-1 items-center gap-3 rounded-xl border border-border/60 bg-background/60 px-4 py-3.5 lg:flex-col lg:justify-center lg:py-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-amber-500/20 to-orange-600/10 text-orange-500">
                {step.icon === 'bitcoin' ? (
                  <BitcoinMark className="size-5" />
                ) : (
                  <span className="text-sm font-bold text-orange-500">{i + 1}</span>
                )}
              </span>
              <span className="text-sm font-semibold text-foreground">{step.label}</span>
            </div>
            {i < FLOW_STEPS.length - 1 && (
              <ArrowRight className="size-5 shrink-0 rotate-90 text-muted-foreground/50 lg:rotate-0" />
            )}
          </div>
        ))}
      </div>

      {/* Floor label */}
      <div className="mt-4 flex items-center justify-center gap-2 text-xs font-medium text-emerald-500">
        <ShieldCheck className="size-4" />
        Principal Protection — your floor
      </div>
    </div>
  );
}

function TreasuryCard({ feature }: { feature: TreasuryFeature }) {
  const { icon: Icon, title, description } = feature;
  return (
    <article className="group flex flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/5">
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-lg shadow-orange-500/30 transition-transform group-hover:scale-110">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </article>
  );
}
