import { ArrowRight, Cpu, CreditCard, Gauge, type LucideIcon } from 'lucide-react';
import { Link } from 'react-router-dom';

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
  features: string[];
}

const SERVICES: Service[] = [
  {
    icon: CreditCard,
    title: 'Digital Transaction Solutions',
    description:
      'Secure, streamlined payment processing and blockchain integration. Process transactions across multiple platforms with enterprise-grade security and compliance.',
    link: '/services/digital-transactions',
    features: ['Secure payment processing', 'Multi-platform integration', 'Blockchain solutions'],
  },
  {
    icon: Cpu,
    title: 'AI Workflow Automation',
    description:
      'Intelligent process automation and predictive analytics. Let AI handle repetitive tasks while you focus on strategy and growth.',
    link: '/services/ai-workflows',
    features: ['Process automation', 'Predictive analytics', 'Custom AI development'],
  },
  {
    icon: Gauge,
    title: 'Business Process Optimization',
    description:
      'Efficiency enhancement and cost reduction through digital transformation. Identify bottlenecks and streamline operations end-to-end.',
    link: '/#contact',
    features: ['Efficiency enhancement', 'Cost reduction', 'Digital transformation'],
  },
];

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
          Three core service areas designed to transform how your business operates.
        </p>
      </div>

      <div className="mt-14 grid gap-6 lg:grid-cols-3">
        {SERVICES.map((service) => (
          <ServiceCard key={service.title} service={service} />
        ))}
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const { icon: Icon, title, description, link, features } = service;
  const isExternal = link.startsWith('/#');
  return (
    <article className="group flex flex-col rounded-2xl border border-border/70 bg-card p-7 transition-all duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/5">
      <div className="flex size-12 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30 transition-transform group-hover:scale-110">
        <Icon className="size-6" />
      </div>
      <h3 className="mt-5 text-xl font-semibold text-foreground">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      <ul className="mt-4 space-y-2">
        {features.map((f) => (
          <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="size-1.5 rounded-full bg-blue-500" />
            {f}
          </li>
        ))}
      </ul>
      {isExternal ? (
        <a
          href={link}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-500"
        >
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </a>
      ) : (
        <Link
          to={link}
          className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 transition-colors hover:text-blue-500"
        >
          Learn more
          <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </Link>
      )}
    </article>
  );
}
