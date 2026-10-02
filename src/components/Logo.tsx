import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  variant?: 'light' | 'dark';
  showSubtitle?: boolean;
}

export const DomenceLogoMark: React.FC<{ size?: number; className?: string }> = ({ size = 48, className = '' }) => {
  return (
    <svg
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
        <linearGradient id="domenceAmberGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FBBF24" />
          <stop offset="50%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#EA580C" />
        </linearGradient>

        {/* Petrol Blue / Navy Gradient */}
        <linearGradient id="domencePetrolGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="60%" stopColor="#0B374D" />
          <stop offset="100%" stopColor="#071E2B" />
        </linearGradient>

        <linearGradient id="domenceTealGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#0369A1" />
          <stop offset="100%" stopColor="#38BDF8" />
        </linearGradient>
      </defs>

      {/* Chimney on the left */}
      <path
        d="M34 42V60L28 64.5V42H34Z"
        fill="#0D3B51"
      />

      {/* Main Roof left slope */}
      <path
        d="M22 68L78 26L88 33.5L34 74H22V68Z"
        fill="#0E384D"
      />

      {/* House Left Column Base */}
      <path
        d="M32 72V124H44V72H32Z"
        fill="#0B2D3E"
      />

      {/* Outer Amber Wave 1 (Upper Right Roof to Arch) */}
      <path
        d="M80 27C94 30 106 37 114 47C124 59 126 73 124 87"
        stroke="url(#domenceAmberGrad)"
        strokeWidth="9"
        strokeLinecap="round"
      />

      {/* Outer Amber Wave 2 (Middle Arc) */}
      <path
        d="M74 38C86 42 96 48 103 57C110 66 112 76 110 88C108 97 101 106 92 112"
        stroke="url(#domenceAmberGrad)"
        strokeWidth="8.5"
        strokeLinecap="round"
      />

      {/* Intertwining Petrol Navy Loop (Doorway & Smart Loop) */}
      <path
        d="M50 120V80C50 63 64 50 81 50C97 50 110 63 110 80C110 96 97 108 81 108C69 108 59 99 59 87C59 75 69 66 81 66C88 66 94 71 94 78"
        stroke="url(#domencePetrolGrad)"
        strokeWidth="9"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Inner Amber Telemetry Loop (Accent Wave inside the aperture) */}
      <path
        d="M86 52C96 56 102 65 102 76C102 87 94 96 83 96C74 96 68 90 68 81"
        stroke="url(#domenceAmberGrad)"
        strokeWidth="7.5"
        strokeLinecap="round"
      />

      {/* Base Foundation Bar */}
      <path
        d="M32 120H96"
        stroke="#0E384D"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Central Smart Camera / Sensor Aperture Dot */}
      <circle cx="80" cy="80" r="4.5" fill="#0284C7" />
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
    sm: 'text-[8px] tracking-[0.2em]',
    md: 'text-[9.5px] tracking-[0.22em]',
    lg: 'text-[11px] tracking-[0.25em]',
  };

  const isLight = variant === 'light';

  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      <div className="shrink-0 transition-transform duration-300 hover:scale-105">
        <DomenceLogoMark size={iconSizes[size]} />
      </div>

      <div className="flex flex-col justify-center">
        {/* Brand Name "DOMENCE" with curved smart beacon over O */}
        <div className="flex items-baseline leading-none font-display font-black tracking-wider">
          <span className={isLight ? 'text-white' : 'text-[#071822]'}>D</span>
          
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
                stroke="#F59E0B"
                strokeWidth="2.4"
                strokeLinecap="round"
              />
              <circle cx="10" cy="6" r="1.2" fill="#F59E0B" />
            </svg>
            <span className={isLight ? 'text-white' : 'text-[#071822]'}>O</span>
          </span>

          <span className={isLight ? 'text-white' : 'text-[#071822]'}>MENCE</span>
        </div>

        {/* Subtitle: SMART HOME & INTERCOM SYSTEMS */}
        {showSubtitle && (
          <span
            className={`font-sans font-bold uppercase mt-1 leading-none ${
              isLight ? 'text-[#38BDF8]' : 'text-[#0E384D]'
            } ${subtitleClasses[size]}`}
          >
            SMART HOME & INTERCOM SYSTEMS
          </span>
        )}
      </div>
    </div>
  );
};
