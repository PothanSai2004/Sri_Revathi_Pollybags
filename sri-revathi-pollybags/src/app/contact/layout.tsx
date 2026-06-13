import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'Contact Sri Revathi Pollybags for custom packaging solutions, bulk orders, and business inquiries. Located in Chittoor, Andhra Pradesh.',
  keywords: ['contact PP bags manufacturer', 'packaging supplier Chittoor', 'PP bags bulk order inquiry'],
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
