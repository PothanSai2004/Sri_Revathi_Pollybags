'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  Package,
  Wheat,
  Building2,
  Leaf,
  Factory,
  ShoppingBag,
  Megaphone,
  Palette,
  Layers,
  Printer,
  Ruler,
  Weight,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const productCategories = [
  { name: 'PP Woven Bags', desc: 'Standard polypropylene woven bags with superior tensile strength for versatile industrial applications.', icon: Package, features: ['High tensile strength', 'UV resistant', 'Moisture proof'] },
  { name: 'Rice Bags', desc: 'Food-grade PP bags designed specifically for safe rice and grain storage and transportation.', icon: Wheat, features: ['Food-grade material', 'Breathable fabric', 'Custom sizes'] },
  { name: 'Cement Bags', desc: 'Heavy-duty reinforced bags engineered to handle cement, sand, and construction materials.', icon: Building2, features: ['Heavy-duty', 'Tear resistant', 'Block bottom'] },
  { name: 'Fertilizer Bags', desc: 'Chemical-resistant bags designed for safe storage and transport of agricultural fertilizers.', icon: Leaf, features: ['Chemical resistant', 'UV stabilized', 'Inner liner'] },
  { name: 'Agricultural Bags', desc: 'Versatile bags for seeds, animal feed, and other agricultural products with optimal protection.', icon: Wheat, features: ['Breathable weave', 'Pest resistant', 'Stackable'] },
  { name: 'Industrial Packaging', desc: 'Custom industrial packaging bags for minerals, chemicals, and bulk materials.', icon: Factory, features: ['Custom dimensions', 'High capacity', 'Durable'] },
  { name: 'Laminated Bags', desc: 'Premium laminated bags with enhanced moisture barrier and superior printing quality.', icon: Layers, features: ['Moisture barrier', 'High print quality', 'Premium finish'] },
  { name: 'Shopping Bags', desc: 'Eco-friendly reusable shopping bags with custom branding and attractive designs.', icon: ShoppingBag, features: ['Reusable', 'Eco-friendly', 'Brand printing'] },
  { name: 'Promotional Bags', desc: 'Custom branded bags for promotional events, trade shows, and marketing campaigns.', icon: Megaphone, features: ['Custom designs', 'Multi-color', 'Brand visibility'] },
  { name: 'Custom Printed Bags', desc: 'Multi-color printed bags with your brand logo, design, and custom artwork.', icon: Printer, features: ['Up to 4 colors', 'Brand identity', 'Sharp printing'] },
  { name: 'Multi-Color Printed', desc: 'Vibrant multi-color printed bags that make your brand stand out on store shelves.', icon: Palette, features: ['Tri-color printing', 'Vibrant colors', 'Fade resistant'] },
  { name: 'Bulk Order Solutions', desc: 'Large-scale packaging solutions with dedicated production capacity for bulk orders.', icon: Package, features: ['Dedicated capacity', 'Volume pricing', 'Priority production'] },
];

const customizationOptions = [
  { icon: Ruler, title: 'Custom Dimensions', desc: 'Any width, height, and gusset size to perfectly fit your products.' },
  { icon: Weight, title: 'Custom Weight Capacity', desc: 'Bags engineered for specific weight loads from 5kg to 100kg+.' },
  { icon: Printer, title: 'Single Color Printing', desc: 'Clean, professional single-color branding on your bags.' },
  { icon: Palette, title: 'Double Color Printing', desc: 'Two-color designs for enhanced visual appeal and branding.' },
  { icon: Layers, title: 'Tri Color Printing', desc: 'Full tri-color printing for vibrant, eye-catching packaging.' },
  { icon: Megaphone, title: 'Brand Printing', desc: 'Your logo, tagline, and brand elements printed with precision.' },
  { icon: Palette, title: 'Custom Designs', desc: 'Bespoke artwork and designs created to your exact specifications.' },
  { icon: Factory, title: 'Bulk Manufacturing', desc: 'High-volume production runs with consistent quality guaranteed.' },
];

export default function ProductsPage() {
  return (
    <>
      <PageHero
        title="Our Products"
        subtitle="Comprehensive range of polypropylene woven bags and customized packaging solutions for every industry."
        breadcrumbs={[{ label: 'Products' }]}
      />

      {/* ===== PRODUCT CATEGORIES ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Product Range"
            title="Premium Packaging Solutions"
            description="We manufacture all types of PP woven bags and customized packaging solutions to meet diverse industrial and commercial needs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {productCategories.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.06}>
                <div className="card-hover group bg-white rounded-2xl border border-neutral-100 overflow-hidden h-full flex flex-col">
                  <div className="p-8 flex-1">
                    <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-6 group-hover:from-primary-900 group-hover:to-primary-800 transition-all duration-500">
                      <product.icon className="w-7 h-7 text-primary-900 group-hover:text-white transition-colors duration-500" />
                    </div>
                    <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">{product.name}</h3>
                    <p className="text-neutral-600 text-sm leading-relaxed mb-4">{product.desc}</p>
                    <div className="space-y-2">
                      {product.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                          <CheckCircle2 className="w-3.5 h-3.5 text-secondary-500 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CUSTOMIZATION OPTIONS ===== */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Customization"
            title="Tailored to Your Needs"
            description="Every business has unique packaging requirements. We offer comprehensive customization options to match your exact specifications."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {customizationOptions.map((option, i) => (
              <ScrollReveal key={option.title} delay={i * 0.08}>
                <div className="card-hover group bg-white rounded-2xl p-8 border border-neutral-100 text-center h-full">
                  <div className="w-14 h-14 rounded-xl bg-secondary-50 group-hover:bg-secondary-500 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <option.icon className="w-7 h-7 text-secondary-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-neutral-900 mb-2">{option.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{option.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== PRODUCT SHOWCASE ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/products-showcase.png"
                  alt="PP woven bags product showcase"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500 mb-3">
                Quality Assurance
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6 leading-tight">
                Every Bag Meets the <span className="gradient-text">Highest Standards</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Our rigorous quality control process ensures every bag that leaves our facility meets
                the highest standards of strength, durability, and print quality.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  'Raw material quality inspection',
                  'In-process quality checks at every stage',
                  'Tensile strength and tear resistance testing',
                  'Print quality and color consistency verification',
                  'Final inspection before packaging',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-sm text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== BULK ORDER CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }} />
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Need a <span className="text-secondary-400">Bulk Order</span>?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              We specialize in large-scale production with dedicated capacity for bulk orders.
              Get competitive pricing and priority production for your packaging needs.
            </p>
            <Link
              href="/contact"
              className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-secondary-500/30"
            >
              Request Bulk Quote
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
