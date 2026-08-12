import { useSeoMeta } from '@unhead/react';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { WhoWeAre } from '@/components/landing/WhoWeAre';
import { Features } from '@/components/landing/Features';
import { WhyCMF } from '@/components/landing/WhyCMF';
import { Treasury } from '@/components/landing/Treasury';
import { SocialProof } from '@/components/landing/SocialProof';
import { CTA } from '@/components/landing/CTA';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  useSeoMeta({
    title: 'CMF.digital — The Future of Property Management',
    description:
      'AI agent workflows. Bitcoin payments. Mining for heat. Treasury optimization. Enterprise capabilities without enterprise lock-in. Sovereignty over your assets, operations, and balance sheet.',
    ogTitle: 'CMF.digital — The Future of Property Management',
    ogDescription:
      'AI agent workflows. Bitcoin payments. Mining for heat. Treasury optimization. Enterprise capabilities without enterprise lock-in.',
    ogType: 'website',
    ogUrl: 'https://cmf.digital/',
    ogSiteName: 'CMF.digital',
    ogImage: 'https://cmf.digital/og-image.svg',
    ogImageAlt: 'CMF.digital — The Future of Property Management',
    twitterCard: 'summary_large_image',
    twitterTitle: 'CMF.digital — The Future of Property Management',
    twitterDescription:
      'AI agent workflows. Bitcoin payments. Mining for heat. Treasury optimization. Enterprise capabilities without enterprise lock-in.',
    twitterImage: 'https://cmf.digital/og-image.svg',
  });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <WhoWeAre />
        <Features />
        <WhyCMF />
        <Treasury />
        <SocialProof />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
