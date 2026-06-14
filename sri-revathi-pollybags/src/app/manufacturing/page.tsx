'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Package,
  ClipboardCheck,
  Factory,
  Scissors,
  Printer,
  Zap,
  CheckCircle2,
  PackageCheck,
  Truck,
  Cog,
  Users,
  Award,
  Globe,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCounter from '@/components/AnimatedCounter';

const processSteps = [
  {
    step: 1,
    title: 'Raw Material Procurement',
    desc: 'We source premium-grade polypropylene granules and materials from certified suppliers, ensuring the foundation of quality starts at the very beginning.',
    icon: Package,
    color: 'from-blue-500 to-blue-600',
  },
  {
    step: 2,
    title: 'Fabric Roll Inspection',
    desc: 'Every incoming fabric roll undergoes thorough quality inspection for weave consistency, tensile strength, and material integrity.',
    icon: ClipboardCheck,
    color: 'from-cyan-500 to-cyan-600',
  },
  {
    step: 3,
    title: 'Fabric Preparation',
    desc: 'The inspected fabric is prepared for cutting through alignment, cleaning, and conditioning processes to ensure optimal processing.',
    icon: Factory,
    color: 'from-teal-500 to-teal-600',
  },
  {
    step: 4,
    title: 'Precision Cutting',
    desc: 'Automated fabric cutting machines cut the material to exact specifications with millimeter precision, minimizing waste and maximizing consistency.',
    icon: Scissors,
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    step: 5,
    title: 'Printing Operations',
    desc: 'Our multi-color printing machines produce vibrant, fade-resistant prints with sharp brand logos and custom designs on each bag.',
    icon: Printer,
    color: 'from-orange-500 to-orange-600',
  },
  {
    step: 6,
    title: 'Stitching Process',
    desc: 'High-precision stitching machines create durable seams that can withstand heavy loads, ensuring every bag performs reliably.',
    icon: Zap,
    color: 'from-amber-500 to-amber-600',
  },
  {
    step: 7,
    title: 'Quality Assurance',
    desc: 'Rigorous multi-point quality checks including tensile testing, visual inspection, and dimensional accuracy verification.',
    icon: CheckCircle2,
    color: 'from-green-500 to-green-600',
  },
  {
    step: 8,
    title: 'Packaging',
    desc: 'Finished bags are carefully counted, bundled, and packaged to prevent damage during transportation and storage.',
    icon: PackageCheck,
    color: 'from-violet-500 to-violet-600',
  },
  {
    step: 9,
    title: 'Dispatch',
    desc: 'Timely dispatch to clients across Andhra Pradesh, Tamil Nadu, and Karnataka with reliable logistics partners.',
    icon: Truck,
    color: 'from-rose-500 to-rose-600',
  },
];

const machinery = [
  {
    title: 'Automated Fabric Cutting Machines',
    desc: 'High-speed cutting systems that deliver precise dimensions with every cut, ensuring consistency across thousands of bags daily.',
    features: ['Computer-controlled precision', 'Minimal material waste', 'High-speed processing'],
  },
  {
    title: 'High Precision Stitching Machines',
    desc: 'Industrial-grade stitching equipment producing durable seams capable of handling heavy loads without failure.',
    features: ['Chain stitch technology', 'Adjustable tension', 'Multi-pattern capability'],
  },
  {
    title: 'Multi-Color Printing Machines',
    desc: 'Advanced printing equipment delivering vibrant, consistent multi-color prints with sharp detail and lasting quality.',
    features: ['Up to 4-color printing', 'Fade-resistant inks', 'Quick changeover'],
  },
  {
    title: 'Quality Inspection Units',
    desc: 'Dedicated quality control stations equipped for comprehensive testing of material strength, print quality, and dimensions.',
    features: ['Tensile testing', 'Visual inspection', 'Dimensional verification'],
  },
];

export default function ManufacturingPage() {
  return (
    <>
      <PageHero
        title="Manufacturing Excellence"
        subtitle="Explore our state-of-the-art manufacturing facility and learn about our meticulous production process."
        breadcrumbs={[{ label: 'Manufacturing' }]}
      />

      {/* ===== PROCESS TIMELINE ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Production Process"
            title="From Raw Material to Delivery"
            description="Every bag goes through our meticulous 9-step manufacturing process, ensuring the highest quality at every stage."
          />

          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <ScrollReveal key={step.step} delay={i * 0.05}>
                <div className="group card-hover bg-white rounded-2xl border border-neutral-100 overflow-hidden">
                  <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8">
                    {/* Step Number */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <span className="text-white font-bold text-2xl font-heading">{step.step}</span>
                    </div>

                    {/* Content */}
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <step.icon className="w-5 h-5 text-neutral-400" />
                        <h3 className="text-xl font-bold font-heading text-neutral-900">{step.title}</h3>
                      </div>
                      <p className="text-neutral-600 text-sm leading-relaxed">{step.desc}</p>
                    </div>

                    {/* Arrow */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:block text-neutral-300">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </div>
                    )}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FACILITY SHOWCASE ===== */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/gallery-factory.png"
                    alt="Sri Revathi Pollybags Manufacturing Facility"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500 mb-3">
                Our Facility
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6 leading-tight">
                Modern Infrastructure for <span className="gradient-text">Superior Manufacturing</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Our manufacturing facility in Chittoor is equipped with modern machinery and
                infrastructure designed for efficient, high-volume production of premium PP woven bags.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                With automated systems and skilled operators, we maintain consistent quality across
                every batch while achieving our 10,000+ bags per day production capacity.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  'Automated cutting systems',
                  'Multi-color printing',
                  'Quality testing lab',
                  'Climate-controlled storage',
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== MACHINERY ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Infrastructure"
            title="Our Machinery"
            description="State-of-the-art equipment designed for precision, efficiency, and consistent quality output."
          />

          <div className="grid md:grid-cols-2 gap-6 md:gap-8">
            {machinery.map((machine, i) => (
              <ScrollReveal key={machine.title} delay={i * 0.1}>
                <div className="card-hover group bg-white rounded-2xl p-8 border border-neutral-100 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-6 group-hover:from-primary-900 group-hover:to-primary-800 transition-all duration-500">
                    <Cog className="w-7 h-7 text-primary-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">{machine.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed mb-4">{machine.desc}</p>
                  <div className="space-y-2">
                    {machine.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-xs text-neutral-500">
                        <CheckCircle2 className="w-3.5 h-3.5 text-secondary-500 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== STATS ===== */}
      <section className="py-20 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <AnimatedCounter end={10000} suffix="+" label="Bags Produced Daily" icon={<Package className="w-8 h-8" />} />
            <AnimatedCounter end={2020} suffix="" label="Year Established" icon={<Award className="w-8 h-8" />} />
            <AnimatedCounter end={3} suffix="+" label="States Served" icon={<Globe className="w-8 h-8" />} />
            <AnimatedCounter end={100} suffix="+" label="Business Clients" icon={<Users className="w-8 h-8" />} />
          </div>
        </div>
      </section>

      {/* ===== QUALITY ASSURANCE ===== */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Quality"
            title="Our Quality Commitment"
            description="Quality is not just a goal — it's embedded in every step of our manufacturing process."
          />

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Raw Material Testing',
                desc: 'Every batch of raw materials undergoes rigorous testing for purity, strength, and consistency before entering the production line.',
                icon: ClipboardCheck,
              },
              {
                title: 'In-Process Monitoring',
                desc: 'Continuous quality monitoring at every stage of production ensures defects are caught and corrected immediately.',
                icon: Factory,
              },
              {
                title: 'Final Product Verification',
                desc: 'Comprehensive final inspection including tensile strength testing, print quality checks, and dimensional accuracy.',
                icon: CheckCircle2,
              },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.15}>
                <div className="card-hover bg-white rounded-2xl p-10 border border-neutral-100 text-center h-full">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-900 to-primary-800 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mb-4">{item.title}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
