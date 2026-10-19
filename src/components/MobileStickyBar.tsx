import React, { useState } from 'react';
import { useScroll, useMotionValueEvent } from 'motion/react';
import { Link, useLocation } from 'react-router-dom';
import { MessageSquare, ClipboardList, Phone, Send } from 'lucide-react';
import { SITE, telHref } from '../config/site.ts';

// Pages that already are the form the bar points to
const FORM_PAGES = ['/zapytanie', '/kontakt'];

export const MobileStickyBar: React.FC = () => {
  const { pathname } = useLocation();
  // On the home page the hero already has the same CTA: show the bar once it scrolls away
  const { scrollY } = useScroll();
  const [pastHero, setPastHero] = useState(false);
  useMotionValueEvent(scrollY, 'change', (y) => setPastHero(y > 480));
  if (FORM_PAGES.includes(pathname)) return null;
  if (pathname === '/' && !pastHero) return null;

  return (
    <div className="mobile-sticky fixed bottom-0 inset-x-0 z-40 md:hidden backdrop-blur-xl border-t p-3 shadow-2xl transition-colors duration-200 bg-gray-50/95 border-gray-200">
      <div className="flex items-center gap-2">
        <a
          href="https://t.me/domence_pl"
          target="_blank"
          rel="noopener noreferrer"
          className="focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 min-h-11 px-3 rounded-[2px] border text-xs font-semibold flex items-center justify-center gap-1.5 transition-colors bg-white border-gray-300 text-gray-900 active:bg-gray-100"
        >
          <Send className="w-4 h-4 text-petrol-700" />
          <span>Telegram</span>
        </a>

        {SITE.phone ? (
          <a
            href={telHref(SITE.phone)}
            className="focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 flex-1 min-w-0 min-h-11 py-3 px-2 rounded-[2px] border text-xs font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors bg-white border-gray-300 text-gray-900 active:bg-gray-100"
          >
            <Phone className="w-4 h-4 text-petrol-700" />
            <span>Zadzwoń</span>
          </a>
        ) : (
          <Link
            to="/kontakt"
            className="focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 flex-1 min-w-0 min-h-11 py-3 px-2 rounded-[2px] border text-xs font-semibold flex items-center justify-center gap-1.5 whitespace-nowrap transition-colors bg-white border-gray-300 text-gray-900 active:bg-gray-100"
          >
            <MessageSquare className="w-4 h-4 text-petrol-700" />
            <span>Zapytaj inżyniera</span>
          </Link>
        )}

        <Link
          to="/zapytanie"
          className="flex-1 min-w-0 whitespace-nowrap py-3 px-2 rounded-[2px] bg-petrol-700 hover:bg-petrol-800 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all text-center focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
        >
          <ClipboardList className="w-4 h-4" />
          <span>Отримай пропозицію</span>
        </Link>
      </div>
    </div>
  );
};
