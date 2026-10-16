import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, ClipboardList, Phone } from 'lucide-react';
import { SITE, telHref } from '../config/site.ts';

// Pages that already are the form the bar points to
const FORM_PAGES = ['/zapytanie', '/kontakt'];

export const MobileStickyBar: React.FC = () => {
  const { pathname } = useLocation();
  if (FORM_PAGES.includes(pathname)) return null;

  return (
    <div className="mobile-sticky fixed bottom-0 inset-x-0 z-40 md:hidden backdrop-blur-xl border-t p-3 shadow-2xl transition-colors duration-200 bg-gray-50/95 border-gray-200">
      <div className="flex items-center gap-2">
        {SITE.phone ? (
          <a
            href={telHref(SITE.phone)}
            className="focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 flex-1 py-3 px-3 rounded-[2px] border text-xs font-semibold flex items-center justify-center gap-2 transition-colors bg-white border-gray-300 text-gray-900 active:bg-gray-100"
          >
            <Phone className="w-4 h-4 text-copper-600" />
            <span>Zadzwoń</span>
          </a>
        ) : (
          <Link
            to="/kontakt"
            className="focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 flex-1 py-3 px-3 rounded-[2px] border text-xs font-semibold flex items-center justify-center gap-2 transition-colors bg-white border-gray-300 text-gray-900 active:bg-gray-100"
          >
            <MessageSquare className="w-4 h-4 text-copper-600" />
            <span>Kontakt</span>
          </Link>
        )}

        <Link
          to="/zapytanie"
          className="flex-[1.5] py-3 px-4 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all text-center focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
        >
          <ClipboardList className="w-4 h-4" />
          <span>Dobierz zestaw</span>
        </Link>
      </div>
    </div>
  );
};
