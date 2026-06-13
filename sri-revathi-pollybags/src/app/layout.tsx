import type { Metadata } from 'next';
import { Montserrat, Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppCTA from '@/components/WhatsAppCTA';
import LoadingScreen from '@/components/LoadingScreen';

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-heading',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-body',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://srirevathipollybags.com'),
  title: {
    default: 'Sri Revathi Pollybags | Premium PP Woven Bags Manufacturer in Chittoor',
    template: '%s | Sri Revathi Pollybags',
  },
  description:
    'Leading manufacturer of polypropylene woven bags and custom packaging solutions in Chittoor, Andhra Pradesh. GST & MSME registered. 10,000+ bags daily capacity. Serving AP, Tamil Nadu & Karnataka.',
  keywords: [
    'PP bags manufacturer Chittoor',
    'PP woven bags manufacturer',
    'Custom packaging solutions Andhra Pradesh',
    'Industrial packaging bags',
    'Printed PP bags manufacturer',
    'Polypropylene bags supplier',
    'Packaging solutions South India',
    'Custom printed woven bags',
    'Rice bags manufacturer',
    'Cement bags manufacturer',
  ],
  authors: [{ name: 'Sri Revathi Pollybags' }],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sri Revathi Pollybags',
    title: 'Sri Revathi Pollybags | Premium PP Woven Bags Manufacturer',
    description:
      'Manufacturing premium polypropylene woven bags and customized packaging solutions. GST & MSME registered with 10,000+ daily capacity.',
    images: [{ url: '/images/hero-factory.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sri Revathi Pollybags | PP Bags Manufacturer',
    description: 'Premium PP woven bags & custom packaging solutions in South India.',
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Sri Revathi Pollybags',
    alternateName: 'Sri Revathi Enterprises',
    url: 'https://srirevathipollybags.com',
    logo: '/images/hero-factory.png',
    description:
      'Leading manufacturer of polypropylene woven bags and custom packaging solutions in Chittoor, Andhra Pradesh.',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chittoor',
      addressRegion: 'Andhra Pradesh',
      postalCode: '517002',
      addressCountry: 'IN',
    },
    foundingDate: '2020',
    founder: {
      '@type': 'Person',
      name: 'T. Muninagaraju',
    },
    areaServed: ['Andhra Pradesh', 'Tamil Nadu', 'Karnataka'],
    sameAs: [
      process.env.NEXT_PUBLIC_FACEBOOK_URL,
      process.env.NEXT_PUBLIC_INSTAGRAM_URL,
      process.env.NEXT_PUBLIC_LINKEDIN_URL,
      process.env.NEXT_PUBLIC_TWITTER_URL,
    ].filter(Boolean),
  };

  return (
    <html lang="en" className={`${montserrat.variable} ${inter.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased">
        <LoadingScreen />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppCTA />
      </body>
    </html>
  );
}
