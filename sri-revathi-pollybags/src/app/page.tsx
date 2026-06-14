'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Package,
  Factory,
  Users,
  TrendingUp,
  Shield,
  Truck,
  Award,
  CheckCircle2,
  Star,
  Leaf,
  Heart,
  Zap,
  Clock,
  Globe,
  Palette,
  DollarSign,
  Target,
  Scissors,
  Printer,
  PackageCheck,
  ClipboardCheck,
  ChevronRight,
} from 'lucide-react';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCounter from '@/components/AnimatedCounter';

const products = [
  { name: 'PP Woven Bags', desc: 'High-strength polypropylene woven bags for diverse industrial applications', icon: Package },
  { name: 'Rice & Grain Bags', desc: 'Food-grade packaging solutions for rice, wheat, and other grains', icon: PackageCheck },
  { name: 'Cement Bags', desc: 'Heavy-duty bags engineered for cement and construction materials', icon: Factory },
  { name: 'Fertilizer Bags', desc: 'Chemical-resistant bags for agricultural fertilizers and nutrients', icon: Leaf },
  { name: 'Laminated Bags', desc: 'Premium laminated bags with enhanced moisture barrier protection', icon: Shield },
  { name: 'Custom Printed Bags', desc: 'Multi-color printed bags with your brand identity and designs', icon: Palette },
];

const processSteps = [
  { step: 1, title: 'Raw Material Procurement', desc: 'Sourcing premium PP granules', icon: Package },
  { step: 2, title: 'Fabric Inspection', desc: 'Quality verification of rolls', icon: ClipboardCheck },
  { step: 3, title: 'Fabric Preparation', desc: 'Preparing fabric for cutting', icon: Factory },
  { step: 4, title: 'Precision Cutting', desc: 'Automated precision cutting', icon: Scissors },
  { step: 5, title: 'Printing Operations', desc: 'Multi-color printing process', icon: Printer },
  { step: 6, title: 'Stitching Process', desc: 'Durable stitching operations', icon: Zap },
  { step: 7, title: 'Quality Assurance', desc: 'Rigorous quality checks', icon: CheckCircle2 },
  { step: 8, title: 'Packaging', desc: 'Secure packaging for transit', icon: PackageCheck },
  { step: 9, title: 'Dispatch', desc: 'Timely delivery to clients', icon: Truck },
];

const whyChooseUs = [
  { title: 'GST Registered', desc: 'Fully compliant with government regulations', icon: CheckCircle2 },
  { title: 'MSME Registered', desc: 'Recognized micro, small & medium enterprise', icon: Award },
  { title: '10,000+ Daily Capacity', desc: 'High-volume production capability', icon: TrendingUp },
  { title: 'Custom Manufacturing', desc: 'Tailored solutions for every need', icon: Target },
  { title: 'Multi-Color Printing', desc: 'Vibrant, precise color reproduction', icon: Palette },
  { title: 'Competitive Pricing', desc: 'Best value without compromising quality', icon: DollarSign },
  { title: 'Timely Delivery', desc: 'On-schedule delivery, every time', icon: Clock },
  { title: 'Experienced Workforce', desc: 'Skilled team with deep expertise', icon: Users },
  { title: 'Quality Assurance', desc: 'Stringent quality control standards', icon: Shield },
  { title: 'Customer Focused', desc: 'Dedicated to client satisfaction', icon: Heart },
];

const testimonials = [
  {
    name: 'Rajesh Kumar',
    company: 'Kumar Agro Industries',
    quote: 'Sri Revathi Pollybags has been our trusted packaging partner for over 3 years. Their quality and reliability are unmatched.',
    rating: 5,
  },
  {
    name: 'Srinivas Reddy',
    company: 'AP Rice Mills',
    quote: 'The custom printing quality and timely delivery make them stand out. Highly recommend their packaging solutions.',
    rating: 5,
  },
  {
    name: 'Venkatesh Naidu',
    company: 'Southern Fertilizers Ltd.',
    quote: 'Exceptional quality PP bags at competitive prices. Their team is professional and always ready to help.',
    rating: 5,
  },
];

export default function HomePage() {
  return (
    <>
      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/hero-factory.png"
            alt="Sri Revathi Pollybags Manufacturing Facility"
            fill
            className="object-cover"
            priority
            quality={80}
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-950/90 via-primary-950/80 to-primary-950/95" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-500/5 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 left-1/4 w-72 h-72 bg-primary-400/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-4xl">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-sm text-white/80 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              GST & MSME Registered Manufacturer
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-heading text-white leading-[1.1] mb-6"
            >
              Empowering Industries with{' '}
              <span className="bg-gradient-to-r from-secondary-400 to-secondary-500 bg-clip-text text-transparent">
                Quality Packaging
              </span>{' '}
              Solutions
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed"
            >
              Manufacturing premium polypropylene woven bags and customized packaging solutions
              while creating sustainable employment opportunities for women and supporting
              environmentally responsible growth.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="flex flex-wrap gap-4"
            >
              <Link
                href="/contact"
                className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-secondary-500/30 hover:shadow-xl hover:shadow-secondary-500/40"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-300"
              >
                Explore Products
                <ChevronRight className="w-5 h-5" />
              </Link>
            </motion.div>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 mt-14 pt-8 border-t border-white/10"
            >
              {[
                { value: '10,000+', label: 'Bags Daily' },
                { value: '3+', label: 'States Served' },
                { value: '100+', label: 'Happy Clients' },
              ].map((stat, i) => (
                <div key={i} className="text-center sm:text-left">
                  <div className="text-2xl font-bold text-white font-heading">{stat.value}</div>
                  <div className="text-xs text-white/50 uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-1.5"
          >
            <div className="w-1.5 h-3 rounded-full bg-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="relative py-16 bg-gradient-to-r from-primary-950 via-primary-900 to-primary-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
            <AnimatedCounter end={10000} suffix="+" label="Bags Produced Daily" icon={<Package className="w-8 h-8" />} />
            <AnimatedCounter end={2020} suffix="+" label="Year Established" icon={<Award className="w-8 h-8" />} />
            <AnimatedCounter end={3} suffix="+" label="States Served" icon={<Globe className="w-8 h-8" />} />
            <AnimatedCounter end={100} suffix="+" label="Business Clients" icon={<Users className="w-8 h-8" />} />
          </div>
        </div>
      </section>

      {/* ===== ABOUT PREVIEW ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-company.png"
                    alt="Sri Revathi Pollybags Company"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* Experience Badge */}
                <div className="absolute -bottom-6 -right-6 md:bottom-6 md:right-6 bg-gradient-to-br from-primary-900 to-primary-800 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold font-heading">5+</div>
                  <div className="text-sm text-white/70">Years of Excellence</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500 mb-3">
                About Us
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6 leading-tight">
                Building India&apos;s Packaging Future with <span className="gradient-text">Innovation & Integrity</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Founded in 2020, Sri Revathi Pollybags is a leading manufacturer of polypropylene woven bags
                based in Chittoor, Andhra Pradesh. As a subsidiary of Sri Revathi Enterprises, we bring
                manufacturing excellence and a commitment to quality that sets us apart.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                Our state-of-the-art facility produces 10,000+ bags daily, serving businesses across
                Andhra Pradesh, Tamil Nadu, and Karnataka with customized packaging solutions.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {['GST Registered', 'MSME Certified', '10K+ Daily Output', 'Custom Solutions'].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                    <CheckCircle2 className="w-5 h-5 text-secondary-500 shrink-0" />
                    {item}
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary-900 font-semibold hover:text-secondary-500 transition-colors group"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== PRODUCTS ===== */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Products"
            title="Premium Packaging Solutions"
            description="We manufacture a comprehensive range of polypropylene woven bags tailored to meet diverse industrial and commercial packaging needs."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {products.map((product, i) => (
              <ScrollReveal key={product.name} delay={i * 0.1}>
                <div className="card-hover group bg-white rounded-2xl p-8 border border-neutral-100 h-full">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-50 to-primary-100 flex items-center justify-center mb-6 group-hover:from-primary-900 group-hover:to-primary-800 transition-all duration-500">
                    <product.icon className="w-7 h-7 text-primary-900 group-hover:text-white transition-colors duration-500" />
                  </div>
                  <h3 className="text-xl font-bold font-heading text-neutral-900 mb-3">{product.name}</h3>
                  <p className="text-neutral-600 text-sm leading-relaxed">{product.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/products"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary-900 hover:bg-primary-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary-900/20"
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== MANUFACTURING PROCESS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Process"
            title="Manufacturing Excellence"
            description="Every bag goes through a meticulous 9-step process ensuring the highest quality standards from raw material to final delivery."
          />

          <div className="relative">
            {/* Timeline Line (desktop) */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-primary-200 via-primary-400 to-secondary-400 -translate-y-1/2" />

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {processSteps.map((step, i) => (
                <ScrollReveal key={step.step} delay={i * 0.08}>
                  <div className="relative card-hover bg-white rounded-2xl p-6 border border-neutral-100 group text-center">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center text-white font-bold font-heading text-lg mx-auto mb-4 group-hover:scale-110 transition-transform">
                      {step.step}
                    </div>
                    <step.icon className="w-8 h-8 text-secondary-500 mx-auto mb-3" />
                    <h3 className="text-lg font-bold font-heading text-neutral-900 mb-2">{step.title}</h3>
                    <p className="text-sm text-neutral-600">{step.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>

          <ScrollReveal className="text-center mt-12">
            <Link
              href="/manufacturing"
              className="inline-flex items-center gap-2 text-primary-900 font-semibold hover:text-secondary-500 transition-colors group"
            >
              Explore Our Facility
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ===== WHY CHOOSE US ===== */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Why Choose Us"
            title="Your Trusted Packaging Partner"
            description="With a commitment to quality, innovation, and customer satisfaction, we deliver packaging solutions that exceed expectations."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
            {whyChooseUs.map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.06}>
                <div className="card-hover group bg-white rounded-xl p-5 border border-neutral-100 text-center h-full">
                  <div className="w-12 h-12 rounded-xl bg-primary-50 group-hover:bg-primary-900 flex items-center justify-center mx-auto mb-4 transition-colors duration-300">
                    <item.icon className="w-6 h-6 text-primary-900 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-sm font-bold font-heading text-neutral-900 mb-1">{item.title}</h3>
                  <p className="text-xs text-neutral-500">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WOMEN EMPOWERMENT ===== */}
      <section className="py-20 md:py-28 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="right" className="order-2 lg:order-1">
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500 mb-3">
                Social Impact
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6 leading-tight">
                Empowering Women, <span className="gradient-text">Strengthening Communities</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-6">
                At Sri Revathi Pollybags, we believe that empowering women is the foundation of sustainable
                growth. We proudly provide employment opportunities to women from DWAKRA Self Help Groups,
                enabling financial independence and community development.
              </p>
              <div className="space-y-4 mb-8">
                {[
                  { title: 'Financial Independence', desc: 'Providing stable income sources for rural women' },
                  { title: 'Skill Development', desc: 'Training in modern manufacturing techniques' },
                  { title: 'Community Development', desc: 'Strengthening rural economies through employment' },
                  { title: 'Sustainable Employment', desc: 'Long-term career opportunities in manufacturing' },
                ].map((item) => (
                  <div key={item.title} className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-secondary-100 flex items-center justify-center shrink-0 mt-0.5">
                      <Heart className="w-3.5 h-3.5 text-secondary-500" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 text-sm">{item.title}</h4>
                      <p className="text-xs text-neutral-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 text-primary-900 font-semibold hover:text-secondary-500 transition-colors group"
              >
                Read Our Impact Story
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </ScrollReveal>

            <ScrollReveal direction="left" className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/women-empowerment.png"
                    alt="Women workers at Sri Revathi Pollybags"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                    loading="lazy"
                    quality={80}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                <div className="absolute -bottom-4 -left-4 md:bottom-6 md:left-6 bg-white p-4 rounded-xl shadow-lg border border-neutral-100">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-secondary-100 flex items-center justify-center">
                      <Users className="w-5 h-5 text-secondary-500" />
                    </div>
                    <div>
                      <div className="text-lg font-bold font-heading text-neutral-900">DWAKRA</div>
                      <div className="text-xs text-neutral-500">Women SHG Employment</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Sustainability"
            title="Committed to a Greener Future"
            description="Our sustainable manufacturing practices ensure that every bag we produce contributes to a healthier planet."
            light
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {[
              { icon: Leaf, title: 'Eco-Friendly PP Bags', desc: 'Recyclable polypropylene materials that reduce environmental impact' },
              { icon: Package, title: 'Reduced Waste', desc: 'Optimized manufacturing processes minimizing material waste' },
              { icon: Factory, title: 'Sustainable Manufacturing', desc: 'Energy-efficient production with responsible resource usage' },
              { icon: Globe, title: 'Responsible Sourcing', desc: 'Ethically sourced raw materials from certified suppliers' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="card-hover group bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-white/10 group-hover:bg-secondary-500/20 flex items-center justify-center mx-auto mb-6 transition-colors duration-300">
                    <item.icon className="w-7 h-7 text-secondary-400" />
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-3">{item.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== TESTIMONIALS ===== */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Testimonials"
            title="Trusted by Businesses"
            description="Trusted by businesses across Andhra Pradesh, Tamil Nadu, and Karnataka for premium packaging solutions."
          />

          <div className="grid md:grid-cols-3 gap-6 md:gap-8">
            {testimonials.map((t, i) => (
              <ScrollReveal key={t.name} delay={i * 0.15}>
                <div className="card-hover bg-white rounded-2xl p-8 border border-neutral-100 h-full">
                  <div className="flex items-center gap-1 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-4 h-4 fill-secondary-400 text-secondary-400" />
                    ))}
                  </div>
                  <blockquote className="text-neutral-600 leading-relaxed mb-6 italic">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-900 to-primary-700 flex items-center justify-center text-white font-bold text-sm">
                      {t.name.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 text-sm">{t.name}</div>
                      <div className="text-xs text-neutral-500">{t.company}</div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== FINAL CTA ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-r from-primary-900 via-primary-800 to-primary-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
            backgroundSize: '30px 30px',
          }} />
        </div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl" />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl md:text-5xl font-bold font-heading mb-6 leading-tight">
              Ready to Elevate Your <span className="text-secondary-400">Packaging</span>?
            </h2>
            <p className="text-lg text-white/60 mb-10 max-w-2xl mx-auto">
              Get custom packaging solutions tailored to your business needs. Our team is ready to help
              you find the perfect packaging solution.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="magnetic-btn inline-flex items-center gap-2 px-8 py-4 bg-secondary-500 hover:bg-secondary-600 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-secondary-500/30"
              >
                Request a Quote
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold rounded-full border border-white/20 transition-all duration-300"
              >
                Browse Products
                <ChevronRight className="w-5 h-5" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
