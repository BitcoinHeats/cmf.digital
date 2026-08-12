import { Bot, Flame, Landmark, Server } from 'lucide-react';
import { BitcoinMark } from './BitcoinMark';

type IconType = React.ComponentType<{ className?: string }>;

interface Feature {
  icon: IconType;
  title: string;
  description: string;
  /** Tailwind col-span class for the bento layout (lg breakpoint). */
  span: string;
}

const FEATURES: Feature[] = [
  {
    icon: Bot,
    title: 'AI Agent Workflows',
    description:
      'Autonomous AI agents handle tenant communications, rent reminders, maintenance dispatch, vendor management, financial reconciliation, and reporting — 24/7, without human bottlenecks. Your team stops doing busywork and starts focusing on strategy.',
    span: 'lg:col-span-2',
  },
  {
    icon: Flame,
    title: 'Bitcoin Mining for Heat',
    description:
      "Turn your biggest liability — heating costs — into a revenue-generating asset. Mining rigs heat common areas, units, and water systems while generating Bitcoin. You offset operating expenses with mined BTC instead of paying utility companies.",
    span: 'lg:col-span-2',
  },
  {
    icon: BitcoinMark,
    title: 'Bitcoin Payments',
    description:
      'Rent collection, vendor payments, and owner distributions via Bitcoin Lightning or traditional rails. Faster settlement. Lower fees. No chargebacks. No reliance on legacy banking infrastructure that can freeze your accounts or delay your funds.',
    span: 'lg:col-span-2',
  },
  {
    icon: Server,
    title: 'Independent Platform',
    description:
      'CMF runs on decentralized infrastructure — not a centralized dashboard you don\'t control. Your data, your payments, your operations. No platform lock-in. No vendor dependency. Your web presence and service layer are yours.',
    span: 'lg:col-span-3',
  },
  {
    icon: Landmark,
    title: 'Bitcoin-Powered Treasury',
    description:
      "Your reserves and escrow holdings shouldn't sit idle. CMF deploys Bitcoin-backed treasury strategies that create cash flow, earn yield, and enable borrowing — all with principal protection. Your balance sheet works for you instead of depreciating in a checking account.",
    span: 'lg:col-span-3',
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-orange-500">
          The platform
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Everything you need. Nothing you don't.
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Five pillars that make CMF the future of property management.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-6">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { icon: Icon, title, description, span } = feature;
  return (
    <article
      className={`group relative flex flex-col rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-orange-500/50 hover:shadow-xl hover:shadow-orange-500/5 ${span}`}
    >
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

