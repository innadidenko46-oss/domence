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

  return (
    <header
      aria-label={title}
      className="relative isolate py-20 border-b overflow-hidden transition-colors duration-300 bg-white border-[#E5E7EB] text-[#111827]"
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
          className="w-full h-full object-cover object-center filter transition-opacity duration-300 opacity-10 brightness-110 contrast-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/90 to-white/75" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Breadcrumb Navigation */}
        <nav aria-label="Nawigacja" className="flex items-center gap-2 text-xs mb-6 text-[#6B7280]">
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
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight max-w-4xl leading-[1.2] text-[#111827]">
          {title}
        </h1>

        {/* Description */}
        <p className="mt-4 text-base sm:text-lg max-w-3xl leading-[1.7] font-normal text-[#4B5563]">
          {description}
        </p>
      </div>
    </header>
  );
};
