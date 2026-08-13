import { ArrowRight, Check } from 'lucide-react';
import { CONSULTATION_URL } from './constants';

const CONSULTATION_ITEMS = [
  'Bottom-line analysis',
  'Efficiency audit',
  'Bitcoin integration assessment',
  'Treasury optimization review',
] as const;

export function CTA() {
  return (
    <section id="consultation" className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-orange-500/20 bg-gradient-to-br from-orange-600 via-orange-600 to-amber-500 px-6 py-16 text-center shadow-2xl shadow-orange-500/30 sm:px-12">
        {/* Decorative glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-amber-300/25 blur-3xl"
        />

        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            See what CMF can do for your bottom line.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-orange-50 sm:text-lg">
            A free consultation covers:
          </p>

          {/* Checklist */}
          <ul className="mx-auto mt-6 grid max-w-xl gap-3 text-left sm:grid-cols-2">
            {CONSULTATION_ITEMS.map((item) => (
              <li
                key={item}
                className="flex items-center gap-3 rounded-xl bg-white/10 px-4 py-3 backdrop-blur-sm"
              >
                <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-white text-orange-600">
                  <Check className="size-4" />
                </span>
                <span className="text-sm font-medium text-white">{item}</span>
              </li>
            ))}
          </ul>

          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-9 inline-flex h-12 items-center gap-2 rounded-xl bg-white px-8 text-base font-semibold text-orange-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-orange-600"
          >
            Free Consultation
            <ArrowRight className="size-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
