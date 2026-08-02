import { Code2, Rocket, Wand2, type LucideIcon } from 'lucide-react';

interface Step {
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    icon: Code2,
    step: '01',
    title: 'Describe your idea',
    description:
      'Start from a clean, modern template and shape the copy, colors, and layout to match a vision like no other.',
  },
  {
    icon: Wand2,
    step: '02',
    title: 'Customize & connect',
    description:
      'Swap sections, wire up your data, and tweak the theme. Every piece is composable and typed.',
  },
  {
    icon: Rocket,
    step: '03',
    title: 'Ship to the world',
    description:
      'Build once and deploy anywhere. Responsive, accessible, and fast — ready for real visitors.',
  },
];

export function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative border-y border-border/60 bg-muted/30"
    >
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-widest text-cyan-500">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            From blank page to launch in three steps
          </h2>
        </div>

        <ol className="mt-14 grid gap-8 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <StepCard key={step.step} step={step} isLast={i === STEPS.length - 1} />
          ))}
        </ol>
      </div>
    </section>
  );
}

function StepCard({ step, isLast }: { step: Step; isLast: boolean }) {
  const { icon: Icon, step: num, title, description } = step;
  return (
    <li className="relative">
      {/* Connector line (desktop) */}
      {!isLast && (
        <div
          aria-hidden
          className="absolute left-[60px] top-12 hidden h-px w-[calc(100%-3rem)] bg-gradient-to-r from-indigo-500/40 to-transparent md:block"
        />
      )}
      <div className="flex items-start gap-4">
        <div className="relative flex size-12 shrink-0 items-center justify-center rounded-xl border border-indigo-500/30 bg-background text-indigo-500 shadow-sm">
          <Icon className="size-6" />
          <span className="absolute -right-2 -top-2 flex size-6 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-cyan-400 text-[11px] font-bold text-white shadow-md">
            {num}
          </span>
        </div>
        <div>
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            {description}
          </p>
        </div>
      </div>
    </li>
  );
}
