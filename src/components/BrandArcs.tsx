import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

// The signal arcs from the DOMENCE logo, drawn once from the corner of the hero photo.
// Decorative only: hidden from assistive tech, static under reduced motion.
const ARCS = [
  { r: 56, color: 'var(--color-amber-500)', delay: 0.5 },
  { r: 84, color: 'var(--color-logo-blue)', delay: 0.7 },
  { r: 112, color: 'var(--color-petrol-700)', delay: 0.9 },
];

export const BrandArcs: React.FC<{ className?: string }> = ({ className }) => {
  const reduce = useReducedMotion();
  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true" fill="none">
      {ARCS.map(({ r, color, delay }) => (
        <motion.path
          key={r}
          d={`M ${r} 0 A ${r} ${r} 0 0 1 0 ${r}`}
          stroke={color}
          strokeWidth={9}
          strokeLinecap="round"
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 1.1, delay, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
    </svg>
  );
};
