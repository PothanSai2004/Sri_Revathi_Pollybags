import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Manufacturing',
  description: 'Explore our state-of-the-art manufacturing facility in Chittoor. Learn about our 9-step production process, machinery, and quality assurance standards.',
  keywords: ['PP bags manufacturing process', 'packaging factory Chittoor', 'bag manufacturing facility', 'quality assurance packaging'],
};

export default function ManufacturingLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
