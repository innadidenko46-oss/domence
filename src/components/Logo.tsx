import React, { useId } from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

// 'dark' draws the house in petrol for light backgrounds,
// 'light' draws it in white for dark petrol bands (e.g. the footer).
const MARK_INK = {
  dark: { house: '#0F4352', houseBase: '#0B3340', loop: ['#2A9DCB', '#0F4352', '#0B3340'] },
  light: { house: '#FFFFFF', houseBase: '#FFFFFF', loop: ['#2A9DCB', '#BFE3F2', '#FFFFFF'] },
} as const;

export const DomenceLogoMark: React.FC<{ size?: number; className?: string; variant?: 'light' | 'dark' }> = ({
  size = 48,
  className = '',
  variant = 'dark',
}) => {
  const uid = useId().replace(/[^a-zA-Z0-9]/g, '');
  const amberId = `domenceAmberGrad-${uid}`;
  const petrolId = `domencePetrolGrad-${uid}`;
  const ink = MARK_INK[variant];
  return (
    <svg role="img"
      width={size}
      height={size}
      viewBox="0 0 160 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="DOMENCE Brand Mark"
    >
      <defs>
        {/* Amber - Orange Brand Gradient */}
        <linearGradient id={amberId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#F7B23B" />
          <stop offset="50%" stopColor="#F29A1F" />
          <stop offset="100%" stopColor="#E3810C" />
        </linearGradient>

        {/* Petrol Blue / Navy Gradient */}
        <linearGradient id={petrolId} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor={ink.loop[0]} />
          <stop offset="60%" stopColor={ink.loop[1]} />
          <stop offset="100%" stopColor={ink.loop[2]} />
        </linearGradient>
      </defs>

      {/* Chimney on the left */}
      <path
        d="M34 42V60L28 64.5V42H34Z"
        fill={ink.house}
      />

      {/* Main Roof left slope */}
      <path
        d="M22 68L78 26L88 33.5L34 74H22V68Z"
        fill={ink.house}
      />

      {/* House Left Column Base */}
      <path
        d="M32 72V124H44V72H32Z"
        fill={ink.houseBase}
      />

      {/* Outer Amber Wave 1 (Upper Right Roof to Arch) */}
      <path
        d="M80 27C94 30 106 37 114 47C124 59 126 73 124 87"
        stroke={`url(#${amberId})`}
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Outer Amber Wave 2 (Middle Arc) */}
      <path
        d="M74 38C86 42 96 48 103 57C110 66 112 76 110 88C108 97 101 106 92 112"
        stroke={`url(#${amberId})`}
        strokeWidth="8.5"
        strokeLinecap="round"
      />

      {/* Intertwining Petrol Navy Loop (Doorway & Smart Loop) */}
      <path
        d="M50 120V80C50 63 64 50 81 50C97 50 110 63 110 80C110 96 97 108 81 108C69 108 59 99 59 87C59 75 69 66 81 66C88 66 94 71 94 78"
        stroke={`url(#${petrolId})`}
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner Amber Telemetry Loop (Accent Wave inside the aperture) */}
      <path
        d="M86 52C96 56 102 65 102 76C102 87 94 96 83 96C74 96 68 90 68 81"
        stroke={`url(#${amberId})`}
        strokeWidth="7.5"
        strokeLinecap="round"
      />

      {/* Base Foundation Bar */}
      <path
        d="M32 120H96"
        stroke={ink.house}
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Central Smart Camera / Sensor Aperture Dot */}
      <circle cx="80" cy="80" r="4.5" fill="#2A9DCB" />
    </svg>
  );
};

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  variant = 'light',
  showSubtitle = true,
}) => {
  const iconSizes = {
    sm: 36,
    md: 46,
    lg: 58,
  };

  const textClasses = {
    sm: 'text-lg',
    md: 'text-2xl',
    lg: 'text-3xl',
  };

  const subtitleClasses = {
    sm: 'text-[11px] tracking-[0.08em]',
    md: 'text-[11px] tracking-[0.1em]',
    lg: 'text-xs tracking-[0.25em]',
  };

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="shrink-0">
        <DomenceLogoMark size={iconSizes[size]} variant={variant} />
      </div>

      <div className="flex flex-col justify-center">
        {/* Brand Name "DOMENCE" with curved smart beacon over O */}
        <div className="flex items-baseline leading-none font-display font-black tracking-wider">
          <span className={isLight ? 'text-white' : 'text-petrol-900'}>D</span>
          
          {/* Letter O with WiFi / Smart Signal Arch */}
          <span className="relative inline-flex flex-col items-center mx-[0.5px]">
            {/* Curved Amber Smart Beacon Arc over O */}
            <svg
              className="absolute -top-[7px] w-full h-[7px] overflow-visible"
              viewBox="0 0 20 8"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 6.5C5.5 3 14.5 3 17 6.5"
                stroke="#F29A1F"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle cx="10" cy="6" r="1.4" fill="#2A9DCB" />
            </svg>
            <span className={isLight ? 'text-white' : 'text-petrol-900'}>O</span>
          </span>

          <span className={isLight ? 'text-white' : 'text-petrol-900'}>MENCE</span>
        </div>

        {/* Subtitle: AUTOMATYKA DOMU I TELETECHNIKA */}
        {showSubtitle && (
          <span
            className={`font-sans font-semibold uppercase mt-1 leading-none whitespace-nowrap ${
              isLight ? 'text-amber-300' : 'text-petrol-700'
            } ${subtitleClasses[size]}`}
          >
            AUTOMATYKA DOMU I TELETECHNIKA
          </span>
        )}
      </div>
    </div>
  );
};
