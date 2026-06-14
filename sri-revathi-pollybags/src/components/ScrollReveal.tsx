'use client';

import { useRef, ReactNode, useEffect, useState } from 'react';
import { motion, useInView } from 'framer-motion';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
  duration?: number;
  className?: string;
  once?: boolean;
}

const directionMap = {
  up: { y: 60, x: 0 },
  down: { y: -60, x: 0 },
  left: { y: 0, x: 60 },
  right: { y: 0, x: -60 },
};

const reducedDirectionMap = {
  up: { y: 10, x: 0 },
  down: { y: -10, x: 0 },
  left: { y: 0, x: 10 },
  right: { y: 0, x: -10 },
};

function usePrefersReducedMotion() {
  const [prefersReduced, setPrefersReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setPrefersReduced(mq.matches);
    const handler = (e: MediaQueryListEvent) => setPrefersReduced(e.matches);
    mq.addEventListener('change', handler);
    return () => mq.removeEventListener('change', handler);
  }, []);
  return prefersReduced;
}

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  duration = 0.7,
  className = '',
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: '200px' });
  const prefersReduced = usePrefersReducedMotion();

  const map = prefersReduced ? reducedDirectionMap : directionMap;
  const { x, y } = map[direction];
  const actualDuration = prefersReduced ? Math.min(duration, 0.3) : duration;
  const actualDelay = prefersReduced ? 0 : delay;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x, y }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : { opacity: 0, x, y }}
      transition={{
        duration: actualDuration,
        delay: actualDelay,
        ease: [0.25, 0.46, 0.45, 0.94],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
