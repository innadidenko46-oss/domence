import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ClipboardList, Phone, Send } from 'lucide-react';
import { SITE, CTA, telHref } from '../config/site.ts';

// Pages that already are the form the bar points to
const FORM_PAGES = ['/zapytanie'];

export const MobileStickyBar: React.FC = () => {
  const { pathname } = useLocation();
  // On the home page the hero already has the same button: show the bar once it scrolls away
  const [pastHero, setPastHero] = useState(false);

  useEffect(() => {
    const onScroll = () => setPastHero(window.scrollY > 480);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (FORM_PAGES.includes(pathname)) return null;
  if (pathname === '/' && !pastHero) return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden border-t p-3 bg-gray-50/95 backdrop-blur-xl border-gray-200 shadow-2xl">
      <div className="flex items-center gap-2">
        {SITE.phone && (
          <a
            href={telHref(SITE.phone)}
            className="min-h-11 px-4 rounded-[2px] border text-sm font-semibold flex items-center justify-center gap-1.5 bg-white border-gray-300 text-gray-900 active:bg-gray-100 focus-visible:ring-2 focus-visible:ring-petrol-600"
          >
            <Phone className="w-4 h-4 text-petrol-700" aria-hidden="true" />
            <span>Zadzwoń</span>
          </a>
        )}
        {SITE.telegram && (
          <a
            href={SITE.telegram}
            target="_blank"
            rel="noopener noreferrer"
            className="min-h-11 px-4 rounded-[2px] border text-sm font-semibold flex items-center justify-center gap-1.5 bg-white border-gray-300 text-gray-900 active:bg-gray-100 focus-visible:ring-2 focus-visible:ring-petrol-600"
          >
            <Send className="w-4 h-4 text-petrol-700" aria-hidden="true" />
            <span>Telegram</span>
          </a>
        )}
        <Link
          to="/zapytanie"
          className="flex-1 min-w-0 min-h-11 px-3 rounded-[2px] bg-petrol-700 hover:bg-petrol-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
        >
          <ClipboardList className="w-4 h-4 shrink-0" aria-hidden="true" />
          <span className="truncate">{CTA.short}</span>
        </Link>
      </div>
    </div>
  );
};
