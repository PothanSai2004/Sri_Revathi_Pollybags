import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description: 'Browse photos of our manufacturing facility, products, team, and production process at Sri Revathi Pollybags.',
  keywords: ['PP bags factory photos', 'packaging manufacturing gallery', 'bag production images'],
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
