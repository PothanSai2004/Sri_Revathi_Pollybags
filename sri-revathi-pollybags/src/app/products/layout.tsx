import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Products',
  description: 'Explore our complete range of PP woven bags - rice bags, cement bags, fertilizer bags, laminated bags, custom printed bags, and bulk packaging solutions.',
  keywords: ['PP woven bags', 'rice bags manufacturer', 'cement bags', 'fertilizer bags', 'custom printed PP bags', 'laminated bags'],
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
