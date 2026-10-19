import React, { useId } from 'react';
import { COLORS, TAGLINE, WORDMARK, WORDMARK_BOX } from '../brand/brand.mjs';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  // 'dark' = petrol letters for light backgrounds, 'light' = white letters for dark bands
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

// Wordmark height in px; the width follows the drawing's proportions.
const HEIGHTS = { sm: 26, md: 30, lg: 38 };

const SUBTITLE_CLASSES = {
  sm: 'text-[11px]',
  md: 'text-xs',
  lg: 'text-sm',
};

// Drawn from src/brand/brand.mjs, the same geometry as the files in public/brand.
export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showSubtitle = true,
}) => {
  const isLight = variant === 'light';
  const height = HEIGHTS[size];
  const { x, y, w, h } = WORDMARK_BOX;
  const { light } = WORDMARK;
  const maskId = `domence-gap-${useId().replace(/[^a-zA-Z0-9]/g, '')}`;

  return (
    <div className={`inline-flex flex-col items-start gap-1.5 select-none ${className}`}>
      <svg
        role="img"
        aria-label="DOMENCE"
        viewBox={`${x} ${y} ${w} ${h}`}
        height={height}
        width={Math.round((height * w) / h)}
        className="block shrink-0"
      >
        {/* Gap cut into the O around the status light */}
        <mask id={maskId} maskUnits="userSpaceOnUse" x={x} y={y} width={w} height={h}>
          <rect x={x} y={y} width={w} height={h} fill="#fff" />
          <circle cx={light.cx} cy={light.cy} r={light.gap} fill="#000" />
        </mask>
        <path fillRule="evenodd" fill={isLight ? COLORS.white : COLORS.petrol} mask={`url(#${maskId})`} d={WORDMARK.d} />
        <circle cx={light.cx} cy={light.cy} r={light.r} fill={COLORS.amber} />
      </svg>

      {showSubtitle && (
        <span
          className={`font-sans font-semibold leading-none whitespace-nowrap ${
            isLight ? 'text-amber-300' : 'text-petrol-700'
          } ${SUBTITLE_CLASSES[size]}`}
        >
          {TAGLINE}
        </span>
      )}
    </div>
  );
};
