import { Brain, BarChart3, Bot, Code2 } from 'lucide-react';
import { ServicePage, type ServicePageData } from '@/components/landing/ServicePage';

const data: ServicePageData = {
  eyebrow: 'AI Workflow Solutions',
  title: 'Intelligent Process Automation & Predictive Analytics',
  subtitle:
    'Transform your operations with AI-powered workflow automation. From process automation to predictive modeling, our solutions help you work smarter, not harder.',
  description:
    'Our AI workflow solutions harness the power of artificial intelligence to automate repetitive tasks, analyze data, predict outcomes, and drive better business decisions. Whether you need process automation, data analysis, or custom AI development, we build solutions tailored to your specific needs.',
  seoTitle: 'AI Workflow Solutions | CMF.digital',
  seoDescription:
    'Process automation, data analysis and insights, predictive modeling, and custom AI development for modern businesses.',
  features: [
    {
      icon: Bot,
      title: 'Process Automation',
      description:
        'Automate repetitive workflows and free your team to focus on high-value work. From data entry to document processing, our AI agents handle tasks 24/7 without human bottlenecks.',
    },
    {
      icon: BarChart3,
      title: 'Data Analysis & Insights',
      description:
        'Turn raw data into actionable insights. Our AI-powered analytics tools process large datasets in real-time, identifying trends, anomalies, and opportunities you might otherwise miss.',
    },
    {
      icon: Brain,
      title: 'Predictive Modeling',
      description:
        "Anticipate what's next with predictive analytics. Forecast demand, identify risks, and optimize operations using machine learning models trained on your business data.",
    },
    {
      icon: Code2,
      title: 'Custom AI Development',
      description:
        'Need something bespoke? We build custom AI solutions tailored to your unique business challenges. From natural language processing to computer vision, we bring your ideas to life.',
    },
  ],
};

export default function AIWorkflowsPage() {
  return <ServicePage data={data} />;
}
