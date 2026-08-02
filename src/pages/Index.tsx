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
    title: 'YourBrand — Build Something Modern',
    description:
      'A clean, fast, responsive starting point for your new domain. Ship your next idea without the boilerplate.',
    ogTitle: 'YourBrand — Build Something Modern',
    ogDescription:
      'A clean, fast, responsive starting point for your new domain. Ship your next idea without the boilerplate.',
    ogType: 'website',
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
