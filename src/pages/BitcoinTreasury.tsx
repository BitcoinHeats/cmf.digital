import { BitcoinIcon } from '@/components/landing/KeyServices';
import { Home, Banknote, TrendingUp, ArrowRight } from 'lucide-react';
import { ServicePage, type ServicePageData } from '@/components/landing/ServicePage';
import { ArrowRight as ArrowRightIcon } from 'lucide-react';

const data: ServicePageData = {
  eyebrow: 'Bitcoin Treasury',
  title: 'Put Your Bitcoin to Work',
  subtitle:
    'We help individuals, families, and businesses put bitcoin to work as a true treasury asset, so you can access real-world liquidity without selling the BTC you have worked to accumulate.',
  description:
    'Instead of triggering a taxable sale and giving up future upside, you pledge bitcoin as collateral and keep your position while it continues working for you. Whether you are buying a home, funding growth, or building generational wealth, we help you turn your bitcoin into a strategic financial foundation instead of an idle holding.',
  seoTitle: 'Bitcoin Treasury Solutions | CMF.digital',
  seoDescription:
    'Put bitcoin to work as a true treasury asset. Self-repaying mortgages, flexible lines of credit, and preferred stock products tied to bitcoin. Access liquidity without selling your BTC.',
  theme: 'orange',
  features: [
    {
      icon: Home,
      title: 'Self-Repaying Mortgages',
      description:
        'Bitcoin-linked collateral is structured to help pay down your home loan over time. Buy a home without liquidating your bitcoin position, letting your collateral work toward eliminating your mortgage.',
    },
    {
      icon: Banknote,
      title: 'Flexible Lines of Credit',
      description:
        'Access liquidity for personal, family, or business needs by borrowing against your bitcoin. Keep your position and future upside while unlocking the capital you need today.',
    },
    {
      icon: TrendingUp,
      title: 'Preferred Stock Products',
      description:
        'Income-oriented exposure tied to bitcoin, similar to the approach pioneered by bitcoin treasury companies like Strategy. Earn yield on your bitcoin without selling it.',
    },
    {
      icon: BitcoinIcon,
      title: 'Keep Your Position',
      description:
        'Pledge bitcoin as collateral instead of selling. Avoid triggering taxable events, preserve your long-term upside, and let your bitcoin continue working for you while you access real-world liquidity.',
    },
  ],
};

export default function BitcoinTreasuryPage() {
  return <ServicePage data={data} />;
}
