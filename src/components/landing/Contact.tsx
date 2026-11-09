import { useState } from 'react';
import { Send, Check } from 'lucide-react';
import { CONSULTATION_URL } from './constants';

export function Contact() {
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>(
    'idle',
  );

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    // Netlify Forms requires the form-name field
    const body = new URLSearchParams({
      'form-name': 'contact',
      ...Object.fromEntries(data.entries()),
    }).toString();

    setStatus('sending');
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      });
      if (!response.ok) throw new Error('Submission failed');
      setStatus('sent');
      form.reset();
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-600">
          Contact Us
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
          Let's transform your business together
        </h2>
        <p className="mt-4 text-lg text-muted-foreground">
          Reach out for a consultation, or send us a message and we'll get back to you.
        </p>
      </div>

      <div className="mt-14 grid gap-8 lg:grid-cols-2">
        {/* Contact form */}
        <div className="rounded-2xl border border-border/70 bg-card p-7">
          <h3 className="text-lg font-semibold text-foreground">Send us a message</h3>
          {status === 'sent' ? (
            <div className="mt-6 flex flex-col items-center justify-center gap-3 py-12 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-600">
                <Check className="size-6" />
              </div>
              <p className="text-base font-medium text-foreground">Message sent!</p>
              <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : status === 'error' ? (
            <div className="mt-6 flex flex-col items-center justify-center gap-3 py-12 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-red-500/15 text-red-600">
                <Send className="size-6" />
              </div>
              <p className="text-base font-medium text-foreground">Something went wrong.</p>
              <p className="text-sm text-muted-foreground">Please email us directly at contact@cmf.digital.</p>
              <button
                type="button"
                onClick={() => setStatus('idle')}
                className="mt-2 text-sm font-semibold text-blue-600 hover:text-blue-500"
              >
                Try again
              </button>
            </div>
          ) : (
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="mt-6 space-y-4"
            >
              {/* Hidden fields for Netlify Forms */}
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden">
                <label>
                  Don't fill this out: <input name="bot-field" />
                </label>
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="company" className="block text-sm font-medium text-foreground">
                  Company
                </label>
                <input
                  id="company"
                  name="company"
                  type="text"
                  className="mt-1.5 h-11 w-full rounded-lg border border-input bg-background px-3.5 text-sm text-foreground outline-none transition-colors focus:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  className="mt-1.5 w-full rounded-lg border border-input bg-background px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-blue-500 focus-visible:ring-2 focus-visible:ring-blue-500/30"
                />
              </div>
              <button
                type="submit"
                disabled={status === 'sending'}
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-60"
              >
                {status === 'sending' ? (
                  <>
                    <span className="size-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="size-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Consultation CTA */}
        <div className="flex flex-col">
          <a
            href={CONSULTATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-2xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 to-transparent p-7 transition-all hover:-translate-y-1 hover:border-blue-500/50"
          >
            <h3 className="text-lg font-semibold text-foreground">Request a Consultation</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Schedule a consultation with our team to discuss your digital
              transformation needs. We'll assess your current operations and
              recommend tailored solutions.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600">
              Book now
              <Send className="size-4 transition-transform group-hover:translate-x-1" />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
