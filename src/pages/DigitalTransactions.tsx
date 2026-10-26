import { CreditCard, Database, Lock, Network, ShieldCheck } from 'lucide-react';
import { ServicePage, type ServicePageData } from '@/components/landing/ServicePage';

const data: ServicePageData = {
  eyebrow: 'Digital Transactions',
  title: 'Secure Payment Processing & Blockchain Integration',
  subtitle:
    'Streamlined, secure digital transaction solutions for modern businesses. Process payments across multiple platforms with enterprise-grade security and compliance.',
  description:
    'From secure payment processing to blockchain integration, our digital transaction solutions are designed to handle the most demanding business requirements. We provide multi-platform integration, compliance features, and the security infrastructure your business needs to operate with confidence.',
  seoTitle: 'Digital Transaction Solutions | CMF.digital',
  seoDescription:
    'Secure payment processing, multi-platform integration, blockchain and cryptocurrency solutions, and compliance features for modern businesses.',
  features: [
    {
      icon: CreditCard,
      title: 'Secure Payment Processing',
      description:
        'Process transactions with confidence using our enterprise-grade payment infrastructure. End-to-end encryption, fraud detection, and real-time processing ensure every transaction is secure and reliable.',
    },
    {
      icon: Network,
      title: 'Multi-Platform Integration',
      description:
        'Connect seamlessly with your existing systems. Our solutions integrate with major payment platforms, e-commerce systems, and accounting software for a unified transaction experience.',
    },
    {
      icon: Database,
      title: 'Blockchain & Cryptocurrency',
      description:
        'Leverage blockchain technology for transparent, immutable transaction records. Accept cryptocurrency payments and explore smart contract automation for your business.',
    },
    {
      icon: ShieldCheck,
      title: 'Compliance & Security',
      description:
        'Stay compliant with industry standards including PCI DSS, SOC 2, and regional regulations. Our security infrastructure includes audit trails, access controls, and continuous monitoring.',
    },
  ],
};

export default function DigitalTransactionsPage() {
  return <ServicePage data={data} />;
}
