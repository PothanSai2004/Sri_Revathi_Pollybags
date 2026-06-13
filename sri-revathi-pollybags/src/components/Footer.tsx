import Link from 'next/link';
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  ArrowUpRight,
  ChevronRight,
} from 'lucide-react';

const footerLinks = {
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Manufacturing', href: '/manufacturing' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'Contact', href: '/contact' },
  ],
  products: [
    { label: 'PP Woven Bags', href: '/products' },
    { label: 'Rice & Cement Bags', href: '/products' },
    { label: 'Laminated Bags', href: '/products' },
    { label: 'Custom Printed Bags', href: '/products' },
  ],
  services: [
    { label: 'Custom Dimensions', href: '/products' },
    { label: 'Bulk Manufacturing', href: '/products' },
    { label: 'Multi-Color Printing', href: '/products' },
    { label: 'Brand Printing', href: '/products' },
  ],
};

export default function Footer() {
  const phone = process.env.NEXT_PUBLIC_PHONE || '+919876543210';
  const email = process.env.NEXT_PUBLIC_EMAIL || 'info@srirevathipollybags.com';
  const address = process.env.NEXT_PUBLIC_ADDRESS || 'Chittoor, Andhra Pradesh, India - 517002';
  const facebook = process.env.NEXT_PUBLIC_FACEBOOK_URL || '#';
  const instagram = process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#';
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_URL || '#';
  const twitter = process.env.NEXT_PUBLIC_TWITTER_URL || '#';

  return (
    <footer className="bg-neutral-950 text-white">
      {/* Top CTA Banner */}
      <div className="bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold font-heading mb-2">
                Ready to Start Your Order?
              </h3>
              <p className="text-white/70 text-base">
                Get custom packaging solutions tailored to your business needs.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-secondary-500/30 shrink-0"
            >
              Request a Quote
              <ArrowUpRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-600 to-secondary-500 flex items-center justify-center">
                <span className="text-white font-bold text-xl font-heading">SR</span>
              </div>
              <div>
                <div className="font-heading font-bold text-lg">Sri Revathi Pollybags</div>
                <div className="text-sm text-neutral-400">A Subsidiary of Sri Revathi Enterprises</div>
              </div>
            </div>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6 max-w-md">
              Manufacturing premium polypropylene woven bags and customized packaging solutions
              while creating sustainable employment opportunities for women.
            </p>
            <div className="space-y-3 text-sm">
              <a href={`tel:${phone}`} className="flex items-center gap-3 text-neutral-400 hover:text-secondary-400 transition-colors">
                <Phone className="w-4 h-4 shrink-0" />
                {phone}
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-3 text-neutral-400 hover:text-secondary-400 transition-colors">
                <Mail className="w-4 h-4 shrink-0" />
                {email}
              </a>
              <div className="flex items-start gap-3 text-neutral-400">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                {address}
              </div>
            </div>
            {/* Social */}
            <div className="flex items-center gap-3 mt-6">
              {[
                { icon: Facebook, href: facebook },
                { icon: Instagram, href: instagram },
                { icon: Linkedin, href: linkedin },
                { icon: Twitter, href: twitter },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg bg-white/5 hover:bg-secondary-500 flex items-center justify-center text-neutral-400 hover:text-white transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-heading font-semibold text-sm uppercase tracking-wider text-white mb-5">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="group flex items-center gap-2 text-sm text-neutral-400 hover:text-secondary-400 transition-colors"
                    >
                      <ChevronRight className="w-3 h-3 opacity-0 -ml-5 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300" />
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
            <p>© {new Date().getFullYear()} Sri Revathi Pollybags. All rights reserved.</p>
            <div className="flex items-center gap-4">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                GST Registered
              </span>
              <span>•</span>
              <span>MSME Registered</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
