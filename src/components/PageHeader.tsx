import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  icon,
  image,
}) => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <header className={`py-20 border-b overflow-hidden transition-colors duration-300 ${
      isDay ? 'bg-[color:var(--color-anthracite-950)]' : 'bg-[color:var(--color-anthracite-850)]'}
        aria-label="${title}"`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Architectural background photo */}
        {image && (
          <img
            src={image}
            alt={title || 'DOMENCE - automatyka domowa'}
            className="w-full h-96 object-cover object-center md:h-[500px] lg:h-[400px] opacity-5 transition-opacity duration-500"
          />
        )}
        <div className="absolute inset-0 select-none">
          {isDay
            ? ''
            : <div className="bg-[#18181B]/80 absolute inset-0" />}
        </div>

        <div className="flex flex-col pt-8 pb-6">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Nawigacja" className={`flex items-center gap-2 text-xs mb-6 ${
            isDay ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}
          `}>
            <Link
              to="/"
              className="flex items-center gap-1.5 hover:text-[#B87333] transition-colors"
            >
              <Home className="w-4 h-4" />
              <span>Strona Główna</span>
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50" />
            <span className="text-[#B87333] font-medium font-mono">{badge}</span>
          </nav>

          {/* Minimalist 2px Badge */}
          <div className="flex items-center gap-2.5 mb-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#B87333]/15 border border-[#B87333]/30 text-[#B87333] text-xs font-mono font-semibold uppercase tracking-wider backdrop-blur-md">
              {icon}
              <span>{badge}</span>
            </div>
          </div>

          {/* Title */}
          <h1 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-4xl leading-[1.2] ${
            isDay ? 'text-[#111827]' : 'text-white'}
          `}>
            {title}
          </h1>

          {/* Description */}
          <p className={`mt-4 text-base sm:text-lg max-w-3xl leading-[1.7] font-normal ${
            isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}
          `}>
            {description}
          </p>
        </div>
      </div>
    </header>
  );
};