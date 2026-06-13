'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight, ZoomIn } from 'lucide-react';
import PageHero from '@/components/PageHero';
import ScrollReveal from '@/components/ScrollReveal';
import SectionHeading from '@/components/SectionHeading';

const categories = ['All', 'Factory', 'Products', 'Process', 'Team'] as const;
type Category = (typeof categories)[number];

const galleryItems = [
  { src: '/images/hero-factory.png', alt: 'Manufacturing facility overview', category: 'Factory' as Category },
  { src: '/images/products-showcase.png', alt: 'PP woven bags product range', category: 'Products' as Category },
  { src: '/images/manufacturing-process.png', alt: 'Cutting and printing process', category: 'Process' as Category },
  { src: '/images/women-empowerment.png', alt: 'Our skilled workforce', category: 'Team' as Category },
  { src: '/images/gallery-factory.png', alt: 'Factory production floor', category: 'Factory' as Category },
  { src: '/images/sustainability.png', alt: 'Eco-friendly packaging', category: 'Products' as Category },
  { src: '/images/about-company.png', alt: 'Company facility exterior', category: 'Factory' as Category },
  { src: '/images/founder.png', alt: 'Company leadership', category: 'Team' as Category },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filteredItems = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory);

  const openLightbox = (index: number) => setLightbox(index);
  const closeLightbox = () => setLightbox(null);

  const navigate = (direction: 'prev' | 'next') => {
    if (lightbox === null) return;
    if (direction === 'prev') {
      setLightbox(lightbox === 0 ? filteredItems.length - 1 : lightbox - 1);
    } else {
      setLightbox(lightbox === filteredItems.length - 1 ? 0 : lightbox + 1);
    }
  };

  return (
    <>
      <PageHero
        title="Gallery"
        subtitle="A visual journey through our manufacturing facility, products, and the people who make it all possible."
        breadcrumbs={[{ label: 'Gallery' }]}
      />

      <section className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            subtitle="Visual Showcase"
            title="Our World in Pictures"
            description="Explore our factory, products, manufacturing process, and the talented team behind Sri Revathi Pollybags."
          />

          {/* Category Tabs */}
          <ScrollReveal className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-primary-900 text-white shadow-lg shadow-primary-900/20'
                    : 'bg-neutral-100 text-neutral-600 hover:bg-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </ScrollReveal>

          {/* Masonry Grid */}
          <motion.div layout className="masonry-grid">
            <AnimatePresence mode="popLayout">
              {filteredItems.map((item, i) => (
                <motion.div
                  key={`${item.src}-${item.category}`}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="group cursor-pointer relative overflow-hidden rounded-2xl"
                  onClick={() => openLightbox(i)}
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white text-sm font-medium">{item.alt}</p>
                      <span className="text-white/60 text-xs uppercase tracking-wider">{item.category}</span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white" />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="lightbox-overlay"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <X className="w-5 h-5" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate('prev'); }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); navigate('next'); }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            <motion.div
              key={lightbox}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl max-h-[85vh] mx-4"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={filteredItems[lightbox].src}
                alt={filteredItems[lightbox].alt}
                width={1200}
                height={800}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              <div className="text-center mt-4">
                <p className="text-white text-sm">{filteredItems[lightbox].alt}</p>
                <p className="text-white/50 text-xs mt-1">{lightbox + 1} / {filteredItems.length}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
