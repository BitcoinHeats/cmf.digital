import { useSeoMeta } from '@unhead/react';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { Features } from '@/components/landing/Features';
import { HowItWorks } from '@/components/landing/HowItWorks';
import { FAQ } from '@/components/landing/FAQ';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  useSeoMeta({
    title: '1of1 — Build Something One of One',
    description:
      'A clean, fast, responsive starting point for ideas that refuse to be a copy. Ship something unmistakably yours.',
    ogTitle: '1of1 — Build Something One of One',
    ogDescription:
      'A clean, fast, responsive starting point for ideas that refuse to be a copy. Ship something unmistakably yours.',
    ogType: 'website',
    ogUrl: 'https://1of1.digital/',
    ogSiteName: '1of1',
    ogImage: 'https://blossom.ditto.pub/e71d9a4f904caa603a3046c389982a32d6e2c858a5a2dbc00c76bcddffb0d37b.svg',
    ogImageAlt: '1of1 — Build Something One of One',
    twitterCard: 'summary_large_image',
    twitterTitle: '1of1 — Build Something One of One',
    twitterDescription:
      'A clean, fast, responsive starting point for ideas that refuse to be a copy. Ship something unmistakably yours.',
    twitterImage: 'https://blossom.ditto.pub/e71d9a4f904caa603a3046c389982a32d6e2c858a5a2dbc00c76bcddffb0d37b.svg',
  });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
