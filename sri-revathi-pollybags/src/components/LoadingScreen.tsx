'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="loading-screen"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
              className="loading-logo w-20 h-20 rounded-2xl bg-gradient-to-br from-white/20 to-secondary-500/30 border border-white/10 flex items-center justify-center mx-auto mb-6"
            >
              <span className="text-white font-bold text-3xl font-heading">SR</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <div className="text-white font-heading font-bold text-xl mb-1">Sri Revathi Pollybags</div>
              <div className="text-white/50 text-sm">Quality Packaging Solutions</div>
            </motion.div>
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.5, duration: 1.2, ease: 'easeInOut' }}
              className="mt-8 h-0.5 w-32 mx-auto bg-gradient-to-r from-transparent via-secondary-500 to-transparent origin-left"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
