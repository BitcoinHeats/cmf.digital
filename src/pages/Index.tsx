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
    ogUrl: 'https://1of1.digital/',
    ogSiteName: 'YourBrand',
    ogImage: 'https://blossom.ditto.pub/7a04b59d9b0d0d27f6c55dc4b1f5fa6003947b53d58ee3debfd669f9a561a92a.svg',
    ogImageAlt: 'YourBrand — Build Something Modern',
    twitterCard: 'summary_large_image',
    twitterTitle: 'YourBrand — Build Something Modern',
    twitterDescription:
      'A clean, fast, responsive starting point for your new domain. Ship your next idea without the boilerplate.',
    twitterImage: 'https://blossom.ditto.pub/7a04b59d9b0d0d27f6c55dc4b1f5fa6003947b53d58ee3debfd669f9a561a92a.svg',
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
