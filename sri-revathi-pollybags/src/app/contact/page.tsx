'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Send,
  MessageCircle,
  CheckCircle2,
  Loader2,
} from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const contactInfo = [
  {
    icon: Phone,
    title: 'Phone',
    value: process.env.NEXT_PUBLIC_PHONE || '+919876543210',
    href: `tel:${process.env.NEXT_PUBLIC_PHONE || '+919876543210'}`,
    color: 'from-blue-500 to-blue-600',
  },
  {
    icon: Mail,
    title: 'Email',
    value: process.env.NEXT_PUBLIC_EMAIL || 'info@srirevathipollybags.com',
    href: `mailto:${process.env.NEXT_PUBLIC_EMAIL || 'info@srirevathipollybags.com'}`,
    color: 'from-purple-500 to-purple-600',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: process.env.NEXT_PUBLIC_ADDRESS || 'Chittoor, Andhra Pradesh, India - 517002',
    href: '#map',
    color: 'from-emerald-500 to-emerald-600',
  },
  {
    icon: Clock,
    title: 'Business Hours',
    value: 'Mon - Sat: 9:00 AM - 6:00 PM',
    href: '#',
    color: 'from-orange-500 to-orange-600',
  },
];

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const whatsapp = process.env.NEXT_PUBLIC_WHATSAPP || '+919876543210';
  const mapsUrl = process.env.NEXT_PUBLIC_GOOGLE_MAPS_EMBED_URL || 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d124410.30095938572!2d79.0539004!3d13.2172!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad38e5c8e0e6d7%3A0x7b1b5e5e5e5e5e5e!2sChittoor%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1234567890';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setIsSubmitting(false);
    setSubmitted(true);
    setFormState({ name: '', email: '', phone: '', subject: '', message: '' });
    setTimeout(() => setSubmitted(false), 5000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <>
      <PageHero
        title="Contact Us"
        subtitle="Get in touch with our team for custom packaging solutions, bulk orders, or any inquiries."
        breadcrumbs={[{ label: 'Contact' }]}
      />

      {/* ===== CONTACT INFO CARDS ===== */}
      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {contactInfo.map((info, i) => (
              <ScrollReveal key={info.title} delay={i * 0.1}>
                <a
                  href={info.href}
                  className="card-hover group block bg-white rounded-2xl p-8 border border-neutral-100 text-center h-full"
                >
                  <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${info.color} flex items-center justify-center mx-auto mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <info.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold font-heading text-neutral-900 mb-2">{info.title}</h3>
                  <p className="text-sm text-neutral-600">{info.value}</p>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {/* ===== CONTACT FORM + MAP ===== */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Form */}
            <ScrollReveal direction="right">
              <div>
                <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500 mb-3">
                  Get in Touch
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-4 leading-tight">
                  Send Us a Message
                </h2>
                <p className="text-neutral-600 mb-8">
                  Fill out the form below and our team will get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Full Name *
                      </label>
                      <input
                        id="contact-name"
                        name="name"
                        type="text"
                        required
                        value={formState.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-neutral-50 focus:bg-white"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-email" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Email Address *
                      </label>
                      <input
                        id="contact-email"
                        name="email"
                        type="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-neutral-50 focus:bg-white"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="contact-phone" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Phone Number
                      </label>
                      <input
                        id="contact-phone"
                        name="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-neutral-50 focus:bg-white"
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                    <div>
                      <label htmlFor="contact-subject" className="block text-sm font-medium text-neutral-700 mb-1.5">
                        Subject *
                      </label>
                      <select
                        id="contact-subject"
                        name="subject"
                        required
                        value={formState.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-neutral-50 focus:bg-white"
                      >
                        <option value="">Select subject</option>
                        <option value="quote">Request a Quote</option>
                        <option value="bulk">Bulk Order Inquiry</option>
                        <option value="custom">Custom Packaging</option>
                        <option value="general">General Inquiry</option>
                        <option value="partnership">Business Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block text-sm font-medium text-neutral-700 mb-1.5">
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      name="message"
                      required
                      rows={5}
                      value={formState.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-neutral-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20 outline-none transition-all text-sm bg-neutral-50 focus:bg-white resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>

                  <div className="flex flex-wrap gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="magnetic-btn inline-flex items-center gap-2 px-8 py-3.5 bg-primary-900 hover:bg-primary-800 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-primary-900/20 disabled:opacity-50"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          Send Message
                        </>
                      )}
                    </button>

                    <a
                      href={`https://wa.me/${whatsapp.replace(/[^0-9]/g, '')}?text=Hi%2C%20I%20would%20like%20to%20inquire%20about%20your%20packaging%20solutions.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#25D366] hover:bg-[#20BD5A] text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-[#25D366]/20"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Us
                    </a>
                  </div>

                  {submitted && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center gap-2 p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-sm"
                    >
                      <CheckCircle2 className="w-5 h-5 shrink-0" />
                      Thank you! Your message has been sent successfully. We&apos;ll get back to you soon.
                    </motion.div>
                  )}
                </form>
              </div>
            </ScrollReveal>

            {/* Map */}
            <ScrollReveal direction="left">
              <div>
                <span className="inline-block text-sm font-semibold uppercase tracking-[0.2em] text-secondary-500 mb-3">
                  Location
                </span>
                <h2 className="text-3xl md:text-4xl font-bold font-heading text-neutral-900 mb-4 leading-tight">
                  Find Us Here
                </h2>
                <p className="text-neutral-600 mb-8">
                  Visit our manufacturing facility in Chittoor, Andhra Pradesh.
                </p>

                <div id="map" className="rounded-2xl overflow-hidden shadow-lg border border-neutral-100 h-[400px]">
                  <iframe
                    src={mapsUrl}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Sri Revathi Pollybags Location"
                  />
                </div>

                <div className="mt-6 bg-neutral-50 rounded-xl p-6 border border-neutral-100">
                  <h3 className="font-bold font-heading text-neutral-900 mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between text-neutral-600">
                      <span>Monday - Saturday</span>
                      <span className="font-medium text-neutral-900">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-neutral-600">
                      <span>Sunday</span>
                      <span className="font-medium text-red-500">Closed</span>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
