import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';

interface PageHeaderProps {
  badge: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  image?: string;
  /** Smaller header without photo, for task pages like the enquiry */
  compact?: boolean;
}

export const PageHeader: React.FC<PageHeaderProps> = ({
  badge,
  title,
  description,
  icon,
  image,
  compact = false,
}) => {
  // Each page gets its own browser tab title (helps search results and open tabs)
  useEffect(() => {
    const previous = document.title;
    document.title = `${title.replace(/\u00a0/g, ' ')} | DOMENCE`;
    return () => {
      document.title = previous;
    };
  }, [title]);

  return (
    <header
      aria-label={title}
      className="border-b bg-white border-gray-200 text-gray-900"
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center ${compact ? 'py-6 sm:py-8' : 'py-10 sm:py-14 lg:py-16'}`}>
        <div className="lg:col-span-7">
          {/* Breadcrumb */}
          <nav aria-label="Nawigacja" className={`flex items-center gap-2 text-xs text-gray-600 ${compact ? 'mb-3' : 'mb-6'}`}>
            <Link
              to="/"
              className="flex items-center gap-1.5 min-h-11 hover:text-amber-700 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600"
            >
              <Home className="w-4 h-4" />
              <span>Strona główna</span>
            </Link>
            <ChevronRight className="w-4 h-4 opacity-50" aria-hidden="true" />
            <span className="eyebrow inline-flex items-center gap-2" aria-current="page">
              {icon}
              {badge}
            </span>
          </nav>

          <h1 className={`font-display ${compact ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl'} font-extrabold tracking-[-0.015em] max-w-3xl leading-[1.1] text-gray-900`}>
            {title}
          </h1>

          <p className="mt-3 text-base sm:text-lg max-w-[60ch] leading-relaxed text-gray-600">
            {description}
          </p>
        </div>

        {image && !compact && (
          <div className="hidden lg:block lg:col-span-5">
            <div className="rounded-[2px] overflow-hidden border border-gray-200 shadow-lg aspect-[4/3]">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        )}
      </div>
    </header>
  );
};
