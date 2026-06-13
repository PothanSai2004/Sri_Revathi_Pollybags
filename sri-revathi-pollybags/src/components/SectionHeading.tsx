'use client';

import ScrollReveal from './ScrollReveal';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
  className?: string;
}

export default function SectionHeading({
  title,
  subtitle,
  description,
  centered = true,
  light = false,
  className = '',
}: SectionHeadingProps) {
  return (
    <ScrollReveal className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      {subtitle && (
        <span className={`inline-block text-sm md:text-base font-semibold uppercase tracking-[0.2em] mb-3 ${
          light ? 'text-secondary-400' : 'text-secondary-500'
        }`}>
          {subtitle}
        </span>
      )}
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-4 leading-tight ${
        light ? 'text-white' : 'text-neutral-900'
      }`}>
        {title}
      </h2>
      <div className={`section-divider ${centered ? 'mx-auto' : ''} mb-6`} />
      {description && (
        <p className={`text-base md:text-lg max-w-3xl leading-relaxed ${
          centered ? 'mx-auto' : ''
        } ${light ? 'text-white/70' : 'text-neutral-600'}`}>
          {description}
        </p>
      )}
    </ScrollReveal>
  );
}
