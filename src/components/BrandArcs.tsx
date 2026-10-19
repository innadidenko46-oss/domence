import React from 'react';
import { motion, useReducedMotion } from 'motion/react';

// The O from the DOMENCE logo, drawn as a quarter ring from the corner of the hero photo,
// with the amber status light set into it.
// Decorative only: hidden from assistive tech, static under reduced motion.
const R = 84;
const STROKE = 9;
const LIGHT_R = 8;
const GAP_DEG = 8; // half of the gap cut around the light

const point = (deg: number) => {
  const a = (deg * Math.PI) / 180;
  return `${(R * Math.cos(a)).toFixed(2)} ${(R * Math.sin(a)).toFixed(2)}`;
};

const SEGMENTS = [
  `M ${point(0)} A ${R} ${R} 0 0 1 ${point(45 - GAP_DEG)}`,
  `M ${point(45 + GAP_DEG)} A ${R} ${R} 0 0 1 ${point(90)}`,
];

export const BrandArcs: React.FC<{ className?: string }> = ({ className }) => {
  const reduce = useReducedMotion();
  const light = (R * Math.SQRT1_2).toFixed(2);
  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true" fill="none">
      {SEGMENTS.map((d, i) => (
        <motion.path
          key={d}
          d={d}
          stroke="var(--color-petrol-700)"
          strokeWidth={STROKE}
          initial={reduce ? false : { pathLength: 0, opacity: 0 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 + i * 0.4, ease: [0.16, 1, 0.3, 1] }}
        />
      ))}
      <motion.circle
        cx={light}
        cy={light}
        r={LIGHT_R}
        fill="var(--color-amber-500)"
        initial={reduce ? false : { scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 1.3, ease: [0.16, 1, 0.3, 1] }}
        style={{ transformOrigin: `${light}px ${light}px` }}
      />
    </svg>
  );
};
