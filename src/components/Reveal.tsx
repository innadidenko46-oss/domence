import React from 'react';

// Rises a block as it scrolls into view (CSS scroll-driven animation, see .reveal in
// index.css). Content is always in the HTML and visible: browsers without scroll-driven
// animations and reduced-motion users simply see it.
export const Reveal: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <div className={`reveal ${className}`}>{children}</div>
);
