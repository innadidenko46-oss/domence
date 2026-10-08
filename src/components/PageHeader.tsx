import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

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
  const isDay = true;

  return (
    <header
      aria-label={title}
      className={`relative isolate py-14 md:py-20 border-b overflow-hidden transition-colors duration-300 ${
        isDay ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#111827]' : 'bg-[#18181B] border-[#27272A] text-white'
      }`}
    >
      {/* Architectural background photo (decorative) */}
      <div className="absolute inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <img
          src={
            image ||
            'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80'
          }
          alt=""
          loading="lazy"
          className={`w-full h-full object-cover object-center filter scale-105 transition-opacity duration-300 ${
            isDay ? 'opacity-10 brightness-110 contrast-105' : 'opacity-25 brightness-75 contrast-125'
          }`}
        />
        <div className={`absolute inset-0 ${
          isDay
            ? 'bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/90 to-[#F9FAFB]/75'
            : 'bg-gradient-to-r from-[#18181B] via-[#18181B]/95 to-[#18181B]/80'
        }`} />
        <div className={`absolute inset-0 ${
          isDay
            ? 'bg-gradient-to-t from-[#F9FAFB] via-transparent to-transparent'
            : 'bg-gradient-to-t from-[#18181B] via-transparent to-transparent'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Nawigacja" className={`flex items-center gap-2 text-xs mb-6 ${
          isDay ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
        }`}>
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
          isDay ? 'text-[#111827]' : 'text-white'
        }`}>
          {title}
        </h1>

        {/* Description */}
        <p className={`mt-4 text-base sm:text-lg max-w-3xl leading-[1.7] font-normal ${
          isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
        }`}>
          {description}
        </p>
      </div>
    </header>
  );
};
