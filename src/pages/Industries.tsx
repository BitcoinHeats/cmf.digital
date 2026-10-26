import { HeartPulse, Factory, Briefcase, ShoppingBag, Landmark } from 'lucide-react';
import { ServicePage, type ServicePageData } from '@/components/landing/ServicePage';

const data: ServicePageData = {
  eyebrow: 'Industry Solutions',
  title: 'Tailored Solutions for Every Industry',
  subtitle:
    'We understand that every industry has unique challenges. Our solutions are customized to meet the specific needs of your sector, from retail to healthcare to financial services.',
  description:
    'Different industries face different operational challenges. That is why we tailor our digital transaction and AI workflow solutions to the specific requirements of each sector we serve. Whether you are in retail, healthcare, financial services, manufacturing, or professional services, we have the expertise to deliver solutions that fit.',
  seoTitle: 'Industry-Specific Solutions | CMF.digital',
  seoDescription:
    'Tailored digital transaction and AI workflow solutions for retail, healthcare, financial services, manufacturing, and professional services.',
  features: [
    {
      icon: ShoppingBag,
      title: 'Retail',
      description:
        'Streamline point-of-sale transactions, inventory management, and customer engagement with digital solutions built for modern retail operations.',
    },
    {
      icon: HeartPulse,
      title: 'Healthcare',
      description:
        'Secure patient data management, automated billing workflows, and HIPAA-compliant transaction processing for healthcare providers and facilities.',
    },
    {
      icon: Landmark,
      title: 'Financial Services',
      description:
        'Enterprise-grade payment processing, regulatory compliance automation, and AI-driven risk analysis for banks, fintech, and financial institutions.',
    },
    {
      icon: Factory,
      title: 'Manufacturing',
      description:
        'Supply chain automation, predictive maintenance workflows, and real-time production analytics to optimize manufacturing operations end-to-end.',
    },
    {
      icon: Briefcase,
      title: 'Professional Services',
      description:
        'Automated billing, client workflow management, and AI-powered document processing for consulting, legal, and other professional service firms.',
    },
  ],
};

export default function IndustriesPage() {
  return <ServicePage data={data} />;
}
