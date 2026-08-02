import { Gauge, Layers, Palette, ShieldCheck, Smartphone, Zap, type LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

const FEATURES: Feature[] = [
  {
    icon: Zap,
    title: 'Fast Loading',
    description:
      'Minimal dependencies and optimized CSS keep payloads tiny. No bloated frameworks, just speed.',
  },
  {
    icon: Smartphone,
    title: 'Fully Responsive',
    description:
      'Looks great on desktop, tablet, and mobile out of the box — tested down to 360px wide.',
  },
  {
    icon: Palette,
    title: 'Customizable',
    description:
      'Clean design tokens, a layered theme system, and composable components you can reshape in minutes.',
  },
  {
    icon: ShieldCheck,
    title: 'Accessible',
    description:
      'Keyboard navigation, focus rings, and WCAG AA contrast baked in — usable by everyone, by default.',
  },
  {
    icon: Layers,
    title: 'Composable',
    description:
      'Modular sections you can rearrange, remove, or duplicate. Build the page your idea actually needs.',
  },
  {
    icon: Gauge,
    title: 'Performance First',
    description:
      'Lazy-loaded assets, hardware-accelerated motion, and reduced-motion support for a buttery feel.',
  },
];

export function Features() {
  return (
    <section id="features" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          Features
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Everything you need to launch
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Thoughtful defaults and a polished foundation, so you spend time on your
          product — not your scaffold.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature) => (
          <FeatureCard key={feature.title} feature={feature} />
        ))}
      </div>
    </section>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  const { icon: Icon, title, description } = feature;
  return (
    <article className="group relative rounded-2xl border border-border/70 bg-card p-6 transition-all duration-300 hover:-translate-y-1 hover:border-indigo-500/50 hover:shadow-xl hover:shadow-indigo-500/5">
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500 to-cyan-400 text-white shadow-lg shadow-indigo-500/30 transition-transform group-hover:scale-110">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-lg font-semibold text-foreground">{title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{description}</p>
    </article>
  );
}
