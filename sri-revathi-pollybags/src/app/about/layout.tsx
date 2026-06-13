import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn about Sri Revathi Pollybags - our story, mission, founder T. Muninagaraju, women empowerment initiative, and commitment to sustainable manufacturing in Chittoor, AP.',
  keywords: ['Sri Revathi Pollybags about', 'PP bags manufacturer Chittoor', 'women empowerment manufacturing', 'sustainable packaging India'],
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
