import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight } from 'lucide-react';
import { Photo } from './Photo.tsx';

interface PageHeaderProps {
  /** Short name of the page in the breadcrumb */
  badge: string;
  title: string;
  description: React.ReactNode;
  /** Unsplash photo id, shown only on wide screens */
  image?: string;
  /** Smaller header without photo, for task pages like the enquiry */
  compact?: boolean;
  children?: React.ReactNode;
}

// The page title is set from src/data/pages.json (RouteMeta and the build), not here.
export const PageHeader: React.FC<PageHeaderProps> = ({ badge, title, description, image, compact = false, children }) => (
  <header className="border-b bg-white border-gray-200 text-gray-900">
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-12 items-center ${
        compact ? 'py-6 sm:py-8' : 'py-10 sm:py-14 lg:py-16'
      }`}
    >
      <div className="lg:col-span-7">
        <nav aria-label="Jesteś tutaj" className={compact ? 'mb-2' : 'mb-5'}>
          <ol className="flex items-center gap-2 text-sm text-gray-600">
            <li>
              <Link
                to="/"
                className="flex items-center gap-1.5 min-h-11 hover:text-amber-700 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600"
              >
                <Home className="w-4 h-4" aria-hidden="true" />
                <span>Strona główna</span>
              </Link>
            </li>
            <li aria-hidden="true">
              <ChevronRight className="w-4 h-4 opacity-50" />
            </li>
            <li aria-current="page" className="font-semibold text-gray-900">
              {badge}
            </li>
          </ol>
        </nav>

        <h1
          className={`font-display ${
            compact ? 'text-2xl sm:text-3xl lg:text-4xl' : 'text-3xl sm:text-4xl lg:text-5xl'
          } font-extrabold tracking-[-0.015em] max-w-3xl leading-[1.1] text-gray-900`}
        >
          {title}
        </h1>

        <p className="mt-3 text-base sm:text-lg max-w-[60ch] leading-relaxed text-gray-600">{description}</p>
        {children}
      </div>

      {image && !compact && (
        <div className="hidden lg:block lg:col-span-5">
          <div className="rounded-[2px] overflow-hidden border border-gray-200 shadow-lg aspect-[4/3]">
            {/* Wide screens only: phones don't download it */}
            <Photo id={image} alt="" widths={[640, 960]} sizes="40vw" desktopOnly className="w-full h-full object-cover object-center" />
          </div>
        </div>
      )}
    </div>
  </header>
);
