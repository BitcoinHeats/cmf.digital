import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const FAQS = [
  {
    q: 'Is this template free to use?',
    a: 'Yes. It is a clean, production-ready starting point you can adapt for personal or commercial projects without licensing friction.',
  },
  {
    q: 'Do I need to know how to code?',
    a: 'Not much. The layout is component-based and well-documented, so most changes are copy edits and class tweaks. For deeper customization, a little React and Tailwind goes a long way.',
  },
  {
    q: 'How fast is it, really?',
    a: 'The page ships with minimal dependencies and optimized CSS. On a typical connection it loads in well under a second, with no render-blocking frameworks.',
  },
  {
    q: 'Can I change the colors and fonts?',
    a: 'Absolutely. Colors are driven by design tokens and Tailwind utilities, and the font is a single import you can swap for any variable font you like.',
  },
  {
    q: 'Does it work on mobile?',
    a: 'It is fully responsive and tested from 360px up to ultrawide displays. Navigation collapses into a slide-out menu on small screens.',
  },
] as const;

export function FAQ() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-indigo-500">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Questions, answered
        </h2>
      </div>

      <Accordion type="single" collapsible className="mt-10">
        {FAQS.map((faq, i) => (
          <AccordionItem
            key={faq.q}
            value={`item-${i}`}
            className="rounded-lg border border-border/60 bg-card px-5 data-[state=open]:border-indigo-500/40 [&:not(:last-child)]:mb-3 [&:not(:last-child)]:border-b"
          >
            <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}
