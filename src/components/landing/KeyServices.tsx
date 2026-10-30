import { ArrowRight, Cpu, CreditCard, Gauge, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

type IconType = React.ComponentType<{ className?: string }>;

interface Service {
  icon: IconType;
  title: string;
  description: string;
  link: string;
  features: string[];
  /** Color theme for this card. */
  theme: 'blue' | 'orange';
}

/** Inline Bitcoin ₿ mark for the Bitcoin Treasury card. */
export function BitcoinIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden className={className}>
      <path d="M14.24 10.56c.16-1.3-.78-1.94-2.12-2.4l.43-1.74-1.05-.26-.42 1.7-.83-.2.42-1.71-1.05-.26-.43 1.74c-.23-.05-.45-.1-.66-.16l-1.45-.36-.28 1.12s.78.18.76.19c.43.1.5.38.49.6l-.49 1.97c.03.01.06.02.1.03l-.1-.02L6.4 14.1c-.05.13-.19.33-.48.26.01.02-.76-.19-.76-.19l-.52 1.2 1.37.34c.25.06.5.13.75.2l-.44 1.76 1.05.26.43-1.74.83.21-.43 1.73 1.05.26.44-1.76c1.82.35 3.19.21 3.77-1.44.46-1.33-.02-2.1-1.02-2.6.72-.17 1.26-.64 1.41-1.62zM11.5 16.27c-.96.24-2.47-.2-2.97-.35l.59-2.37c.5.13 2.04.6 2.16 1.5.08.6-.34 1.02-.78 1.22zm.77-3.82c-.79.2-2.06-.2-2.48-.31l.54-2.15c.42.11 1.8.42 1.9 1.22.09.64-.36.98-.96 1.24z" />
    </svg>
  );
}

const SERVICES: Service[] = [
  {
    icon: CreditCard,
    title: 'Digital Transaction Solutions',
    description:
      'Secure, streamlined payment processing and blockchain integration. Process transactions across multiple platforms with enterprise-grade security and compliance.',
    link: '/services/digital-transactions',
    features: ['Secure payment processing', 'Multi-platform integration', 'Blockchain solutions'],
    theme: 'blue',
  },
  {
    icon: Cpu,
    title: 'AI Workflow Automation',
    description:
      'Intelligent process automation and predictive analytics. Let AI handle repetitive tasks while you focus on strategy and growth.',
    link: '/services/ai-workflows',
    features: ['Process automation', 'Predictive analytics', 'Custom AI development'],
    theme: 'blue',
  },
  {
    icon: Gauge,
    title: 'Business Process Optimization',
    description:
      'Efficiency enhancement and cost reduction through digital transformation. Identify bottlenecks and streamline operations end-to-end.',
    link: '/#contact',
    features: ['Efficiency enhancement', 'Cost reduction', 'Digital transformation'],
    theme: 'blue',
  },
  {
    icon: BitcoinIcon,
    title: 'Bitcoin Treasury',
    description:
      'Put bitcoin to work as a true treasury asset. Access real-world liquidity without selling the BTC you have accumulated. Keep your position while it continues working for you.',
    link: '/services/bitcoin-treasury',
    features: ['Self-repaying mortgages', 'Flexible lines of credit', 'Preferred stock products'],
    theme: 'orange',
  },
];

const THEME_STYLES = {
  blue: {
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-700 shadow-blue-500/30',
    hoverBorder: 'hover:border-blue-500/50',
    hoverShadow: 'hover:shadow-blue-500/5',
    dot: 'bg-blue-500',
    link: 'text-blue-600 hover:text-blue-500',
  },
  orange: {
    iconBg: 'bg-gradient-to-br from-amber-500 to-orange-600 shadow-orange-500/30',
    hoverBorder: 'hover:border-orange-500/50',
    hoverShadow: 'hover:shadow-orange-500/5',
    dot: 'bg-orange-500',
    link: 'text-orange-600 hover:text-orange-500',
  },
} as const;

export function KeyServices() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Key Services
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Solutions that drive your business forward
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Four core service areas designed to transform how your business operates.
        </p>
      </div>

      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, description, link, features, theme } = service;
  const styles = THEME_STYLES[theme];
  const isExternal = link.startsWith('/#');
  return (
    <article className={`group flex flex-col rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 ${styles.hoverBorder} hover:shadow-xl ${styles.hoverShadow}`}>
      <div className={`flex size-12 items-center justify-center rounded-xl text-white shadow-lg transition-transform group-hover:scale-110 ${styles.iconBg}`}>
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className={`size-1.5 rounded-full ${styles.dot}`} />
            {f}
          </li>
        ))}
      </ul>
      {isExternal ? (
        <a
          href={link}
          className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${styles.link}`}
        >
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      ) : (
        <Link
          to={link}
          className={`mt-6 inline-flex items-center gap-1.5 text-sm font-semibold transition-colors ${styles.link}`}
        >
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </article>
  );
}
