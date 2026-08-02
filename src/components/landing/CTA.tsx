import { ArrowRight } from 'lucide-react';

export function CTA() {
  return (
    <section className="px-4 py-24 sm:px-6 lg:px-8">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-3xl border border-indigo-500/20 bg-gradient-to-br from-indigo-600 via-indigo-600 to-cyan-500 px-6 py-16 text-center shadow-2xl shadow-indigo-500/30 sm:px-12">
        {/* Decorative glows */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-16 -top-16 size-64 rounded-full bg-white/10 blur-3xl"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-20 -right-10 size-72 rounded-full bg-cyan-300/20 blur-3xl"
        />

        <div className="relative">
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Ready to build something modern?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-base text-indigo-100 sm:text-lg">
            Grab the template, make it yours, and ship today. No setup headaches,
            no boilerplate — just a clean canvas for your next idea.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#features"
              className="inline-flex h-12 items-center gap-2 rounded-xl bg-white px-7 text-base font-semibold text-indigo-600 shadow-lg transition-all hover:-translate-y-0.5 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
            >
              Get Started
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#faq"
              className="inline-flex h-12 items-center rounded-xl border border-white/40 px-7 text-base font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-indigo-600"
            >
              Read the FAQ
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
