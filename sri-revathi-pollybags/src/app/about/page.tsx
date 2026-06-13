'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Heart,
  Award,
  Users,
  Target,
  Leaf,
  Globe,
  Lightbulb,
  Shield,
  Factory,
  Package,
  GraduationCap,
  HandHeart,
  CheckCircle2,
  Briefcase,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const timeline = [
  { year: '2020', title: 'Foundation', desc: 'Sri Revathi Pollybags was established in Chittoor by T. Muninagaraju with a vision to create sustainable packaging solutions.' },
  { year: '2021', title: 'Growth Phase', desc: 'Expanded production capacity and established partnerships with agricultural businesses across Andhra Pradesh.' },
  { year: '2022', title: 'Women Empowerment', desc: 'Launched DWAKRA women employment program, providing jobs to women from self-help groups in rural communities.' },
  { year: '2023', title: 'Multi-State Expansion', desc: 'Extended operations to Tamil Nadu and Karnataka, serving over 50+ business clients across South India.' },
  { year: '2024', title: 'Production Milestone', desc: 'Achieved 10,000+ bags per day production capacity with upgraded machinery and expanded workforce.' },
  { year: '2025', title: 'Innovation & Quality', desc: 'Introduced multi-color printing capabilities and advanced quality assurance systems for premium packaging.' },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Us"
        subtitle="Discover the story behind Sri Revathi Pollybags — our mission, values, and commitment to manufacturing excellence."
        breadcrumbs={[{ label: 'About Us' }]}
      />

      {/* ===== COMPANY STORY ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="right">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/about-company.png"
                    alt="Sri Revathi Pollybags Facility"
                    width={600}
                    height={450}
                    className="w-full h-auto object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 md:bottom-6 md:right-6 bg-gradient-to-br from-primary-900 to-primary-800 text-white p-6 rounded-2xl shadow-xl">
                  <div className="text-3xl font-bold font-heading">Since</div>
                  <div className="text-2xl font-bold text-secondary-400">2020</div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500 mb-3">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-6 leading-tight">
                A Legacy of Manufacturing <span className="gradient-text">Excellence</span>
              </h2>
              <p className="text-neutral-600 leading-relaxed mb-4">
                Sri Revathi Pollybags, a proud subsidiary of Sri Revathi Enterprises, was founded in 2020 in
                Chittoor, Andhra Pradesh, with a clear vision: to deliver premium packaging solutions while
                creating a positive social impact.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-6">
                Today, we are a GST and MSME registered manufacturer producing over 10,000 polypropylene woven
                bags daily. Our reach extends across three states — Andhra Pradesh, Tamil Nadu, and Karnataka —
                serving diverse industries from agriculture to construction.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { icon: Shield, label: 'GST Registered' },
                  { icon: Award, label: 'MSME Registered' },
                  { icon: Factory, label: '10K+ Daily Capacity' },
                  { icon: Globe, label: '3 States Served' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center gap-2 text-sm font-medium text-neutral-700">
                    <item.icon className="w-5 h-5 text-secondary-500 shrink-0" />
                    {item.label}
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== VISION & MISSION ===== */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Purpose"
            title="Our Vision & Mission"
            description="Guided by a commitment to quality, sustainability, and social responsibility."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <ScrollReveal>
              <div className="card-hover bg-white rounded-2xl p-10 border border-neutral-100 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-900 to-primary-800 flex items-center justify-center mb-6">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-neutral-900 mb-4">Our Vision</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To become South India&apos;s most trusted polypropylene packaging manufacturer, known for
                  innovation, quality, and our commitment to empowering women and communities through
                  sustainable employment.
                </p>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={0.15}>
              <div className="card-hover bg-white rounded-2xl p-10 border border-neutral-100 h-full">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary-500 to-secondary-600 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-2xl font-bold font-heading text-neutral-900 mb-4">Our Mission</h3>
                <p className="text-neutral-600 leading-relaxed">
                  To deliver high-quality, customizable polypropylene woven bags at competitive prices,
                  while maintaining sustainable manufacturing practices and creating meaningful employment
                  opportunities for women in rural communities.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== FOUNDER ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <ScrollReveal direction="right" className="order-2 lg:order-1">
              <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500 mb-3">
                Leadership
              </span>
              <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-2 leading-tight">
                T. Muninagaraju
              </h2>
              <p className="text-lg text-secondary-500 font-medium mb-6">Founder & Managing Director</p>
              <p className="text-neutral-600 leading-relaxed mb-4">
                A visionary entrepreneur with a B.Tech in Mechanical Engineering, Mr. T. Muninagaraju
                established Sri Revathi Pollybags with a mission to create a sustainable manufacturing
                ecosystem while generating employment opportunities for women from rural communities.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                His vision combines industrial growth, product quality, environmental responsibility,
                and women empowerment — creating a business that doesn&apos;t just generate profit,
                but transforms lives and strengthens communities.
              </p>

              <div className="bg-primary-50 rounded-xl p-6 border border-primary-100">
                <h4 className="font-bold font-heading text-primary-900 mb-3">Manufacturing Philosophy</h4>
                <blockquote className="text-neutral-600 italic text-sm leading-relaxed">
                  &ldquo;True manufacturing excellence isn&apos;t just about producing quality products —
                  it&apos;s about building an ecosystem where quality, sustainability, and community upliftment
                  go hand in hand. Every bag we produce represents our commitment to this vision.&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-primary-900" />
                <span className="text-sm font-medium text-neutral-700">B.Tech Mechanical Engineering</span>
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left" className="order-1 lg:order-2">
              <div className="relative">
                <div className="rounded-2xl overflow-hidden shadow-2xl">
                  <Image
                    src="/images/founder.png"
                    alt="T. Muninagaraju - Founder of Sri Revathi Pollybags"
                    width={500}
                    height={600}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ===== JOURNEY TIMELINE ===== */}
      <section className="py-20 md:py-28 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Our Journey"
            title="Growing Stronger Every Year"
            description="From a vision to a thriving manufacturing enterprise — our journey of growth, innovation, and impact."
          />

          <div className="relative max-w-3xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-900 via-primary-600 to-secondary-500 md:-translate-x-0.5" />

            {timeline.map((item, i) => (
              <ScrollReveal key={item.year} delay={i * 0.1}>
                <div className={`relative flex items-start gap-8 mb-12 last:mb-0 ${
                  i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}>
                  {/* Dot */}
                  <div className="absolute left-6 md:left-1/2 w-3 h-3 rounded-full bg-secondary-500 border-4 border-white shadow-lg -translate-x-1.5 md:-translate-x-1.5 mt-2 z-10" />

                  {/* Content */}
                  <div className={`ml-14 md:ml-0 md:w-[calc(50%-2rem)] ${i % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'}`}>
                    <span className="inline-block text-sm font-bold text-secondary-500 mb-1">{item.year}</span>
                    <h3 className="text-lg font-bold font-heading text-neutral-900 mb-2">{item.title}</h3>
                    <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== WOMEN EMPOWERMENT (Detailed) ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Social Impact"
            title="Women Empowerment Initiative"
            description="Our commitment to creating meaningful employment opportunities for women from DWAKRA Self Help Groups is at the heart of everything we do."
          />

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/women-empowerment.png"
                  alt="Women empowerment at Sri Revathi Pollybags"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <p className="text-neutral-600 leading-relaxed mb-6 text-lg">
                We believe that when women thrive, communities prosper. Sri Revathi Pollybags is more
                than a manufacturing company — we are a catalyst for social change.
              </p>
              <p className="text-neutral-600 leading-relaxed mb-8">
                By partnering with DWAKRA (Development of Women and Children in Rural Areas) Self Help Groups,
                we provide stable, dignified employment to women from rural communities, helping them achieve
                financial independence and personal growth.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Briefcase, title: 'Financial Independence', desc: 'Providing stable income sources that enable women to support their families and invest in their futures.' },
              { icon: GraduationCap, title: 'Skill Development', desc: 'Comprehensive training in modern manufacturing techniques, quality control, and professional development.' },
              { icon: HandHeart, title: 'Community Development', desc: 'Strengthening rural economies by creating local employment opportunities and supporting community growth.' },
              { icon: Heart, title: 'Sustainable Employment', desc: 'Long-term career opportunities with growth potential, ensuring lasting impact on women\'s lives.' },
            ].map((item, i) => (
              <ScrollReveal key={item.title} delay={i * 0.1}>
                <div className="card-hover bg-neutral-50 rounded-2xl p-8 border border-neutral-100 h-full text-center">
                  <div className="w-14 h-14 rounded-xl bg-secondary-100 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-7 h-7 text-secondary-600" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-neutral-900 mb-3">{item.title}</h3>
                  <p className="text-sm text-neutral-600 leading-relaxed">{item.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SUSTAINABILITY ===== */}
      <section className="py-20 md:py-28 bg-gradient-to-br from-primary-950 via-primary-900 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Environmental Commitment"
            title="Sustainability at Our Core"
            description="We're committed to manufacturing practices that protect our planet for future generations."
            light
          />

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <ScrollReveal direction="right">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/sustainability.png"
                  alt="Sustainable manufacturing practices"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                />
              </div>
            </ScrollReveal>

            <ScrollReveal direction="left">
              <div className="space-y-6">
                {[
                  { icon: Leaf, title: 'Eco-Friendly PP Bags', desc: 'Our polypropylene bags are fully recyclable, reducing environmental impact while maintaining superior quality.' },
                  { icon: Package, title: 'Reduced Packaging Waste', desc: 'Optimized cutting and manufacturing processes minimize material waste and maximize resource efficiency.' },
                  { icon: Factory, title: 'Sustainable Manufacturing', desc: 'Energy-efficient production methods and responsible resource usage across our entire facility.' },
                  { icon: CheckCircle2, title: 'Responsible Materials', desc: 'We source raw materials from certified suppliers who share our commitment to environmental responsibility.' },
                ].map((item, i) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1, duration: 0.5 }}
                    className="flex items-start gap-4 group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/10 group-hover:bg-secondary-500/20 flex items-center justify-center shrink-0 transition-colors duration-300">
                      <item.icon className="w-6 h-6 text-secondary-400" />
                    </div>
                    <div>
                      <h3 className="font-bold font-heading text-lg mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
