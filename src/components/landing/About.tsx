import { Building2, Target, Users } from 'lucide-react';

const TEAM_EXPERTISE = [
  'Digital transaction architecture',
  'AI & machine learning engineering',
  'Blockchain infrastructure',
  'Business process consulting',
  'Cloud & distributed systems',
  'Security & compliance',
] as const;

export function About() {
  return (
    <section id="about" className="relative border-y border-border/60 bg-muted/30">
      <div className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Narrative */}
          <div>
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
              About CMF.digital
            </p>
            <h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-foreground sm:text-4xl">
              Evolving businesses through digital and AI solutions
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-muted-foreground">
              <p>
                CMF.digital began as a community management firm, but we saw a
                bigger opportunity. As businesses across every industry
                struggled with digital transformation, we evolved our
                expertise into what companies needed most: seamless digital
                transactions and intelligent AI workflows.
              </p>
              <p>
                Today, we help businesses of all sizes leverage technology for
                growth. From secure payment processing to AI-driven process
                automation, our solutions are built to make operations faster,
                smarter, and more efficient.
              </p>
            </div>

            {/* Mission */}
            <div className="mt-8 rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-blue-700 text-white shadow-lg shadow-blue-500/30">
                <Target className="size-6" />
              </div>
              <h3 className="mt-4 text-sm font-semibold uppercase tracking-wider text-blue-600">
                Our Mission
              </h3>
              <p className="mt-2 text-lg font-semibold leading-snug text-foreground">
                Helping businesses leverage technology for growth.
              </p>
            </div>
          </div>

          {/* Team expertise */}
          <div className="flex flex-col gap-5">
            <article className="rounded-2xl border border-border/70 bg-card p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600">
                <Users className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Team Expertise</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Our team brings together deep technical capabilities across
                multiple disciplines to deliver end-to-end digital solutions.
              </p>
              <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                {TEAM_EXPERTISE.map((skill) => (
                  <li key={skill} className="flex items-center gap-2 text-sm text-foreground/90">
                    <span className="size-1.5 shrink-0 rounded-full bg-blue-500" />
                    {skill}
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-2xl border border-border/70 bg-card p-6">
              <div className="flex size-11 items-center justify-center rounded-xl bg-blue-500/15 text-blue-600">
                <Building2 className="size-6" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">Who We Serve</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Retail, healthcare, financial services, manufacturing, and
                professional services. If your business needs digital
                transformation, we have the solutions.
              </p>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
