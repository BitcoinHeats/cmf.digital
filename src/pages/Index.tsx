import { useSeoMeta } from '@unhead/react';
import { Navbar } from '@/components/landing/Navbar';
import { Hero } from '@/components/landing/Hero';
import { KeyServices } from '@/components/landing/KeyServices';
import { About } from '@/components/landing/About';
import { Contact } from '@/components/landing/Contact';
import { Footer } from '@/components/landing/Footer';

const Index = () => {
  useSeoMeta({
    title: 'CMF.digital | Transforming Business Operations Through Digital Innovation',
    description:
      'Seamless digital transactions and intelligent AI workflows for modern businesses. Digital transformation, AI solutions, transaction processing, and workflow automation.',
    ogTitle: 'CMF.digital | Transforming Business Operations Through Digital Innovation',
    ogDescription:
      'Seamless digital transactions and intelligent AI workflows for modern businesses.',
    ogType: 'website',
    ogUrl: 'https://cmf.digital/',
    ogSiteName: 'CMF.digital',
    ogImage: 'https://cmf.digital/og-image.svg',
    ogImageAlt: 'CMF.digital | Transforming Business Operations',
    twitterCard: 'summary_large_image',
    twitterTitle: 'CMF.digital | Transforming Business Operations Through Digital Innovation',
    twitterDescription:
      'Seamless digital transactions and intelligent AI workflows for modern businesses.',
    twitterImage: 'https://cmf.digital/og-image.svg',
  });

  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Navbar />
      <main>
        <Hero />
        <KeyServices />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
