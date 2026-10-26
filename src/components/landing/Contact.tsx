import { useState } from 'react';
import { Mail, MapPin, Phone, Send, Check } from 'lucide-react';
import { CONSULTATION_URL } from './constants';

const CONTACT_INFO = [
  { icon: Phone, label: 'Phone', value: '+1 (555) 123-4567', href: 'tel:+15551234567' },
  { icon: Mail, label: 'Email', value: 'contact@cmf.digital', href: 'mailto:contact@cmf.digital' },
] as const;

const OFFICES = [
  { city: 'Headquarters', address: '123 Innovation Drive, Suite 400, San Francisco, CA 94105' },
  { city: 'East Coast', address: '456 Tech Boulevard, Floor 12, New York, NY 10001' },
] as const;

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
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
          {submitted ? (
            <div className="mt-6 flex flex-col items-center justify-center gap-3 py-12 text-center">
              <div className="flex size-12 items-center justify-center rounded-full bg-blue-500/15 text-blue-600">
                <Check className="size-6" />
              </div>
              <p className="text-base font-medium text-foreground">Message sent!</p>
              <p className="text-sm text-muted-foreground">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
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
                className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-blue-500 to-blue-700 text-sm font-semibold text-white shadow-lg shadow-blue-500/30 transition-all hover:-translate-y-0.5 hover:shadow-blue-500/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Send className="size-4" />
                Send Message
              </button>
            </form>
          )}
        </div>

        {/* Contact info + consultation */}
        <div className="flex flex-col gap-5">
          {/* Consultation CTA */}
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

          {/* Contact details */}
          <div className="rounded-2xl border border-border/70 bg-card p-7">
            <h3 className="text-lg font-semibold text-foreground">Get in touch</h3>
            <div className="mt-5 space-y-4">
              {CONTACT_INFO.map((info) => {
                const { icon: Icon, label, value, href } = info;
                return (
                  <a
                    key={label}
                    href={href}
                    className="flex items-center gap-3 text-sm transition-colors hover:text-blue-600"
                  >
                    <span className="flex size-10 items-center justify-center rounded-lg bg-blue-500/15 text-blue-600">
                      <Icon className="size-5" />
                    </span>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-muted-foreground">{label}</p>
                      <p className="font-medium text-foreground">{value}</p>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Office locations */}
          <div className="rounded-2xl border border-border/70 bg-card p-7">
            <h3 className="text-lg font-semibold text-foreground">Office Locations</h3>
            <div className="mt-5 space-y-4">
              {OFFICES.map((office) => (
                <div key={office.city} className="flex items-start gap-3">
                  <span className="mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-lg bg-blue-500/15 text-blue-600">
                    <MapPin className="size-5" />
                  </span>
                  <div>
                    <p className="font-medium text-foreground">{office.city}</p>
                    <p className="text-sm text-muted-foreground">{office.address}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
