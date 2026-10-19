import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { CONSENT_KEY, saveChoice } from '../lib/storage.ts';

// A plain notice: the site only remembers the enquiry answers, and only if the
// visitor agrees. No tracking cookies, so there is nothing else to consent to.
export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Lets the mobile CTA bar step aside while the banner is on screen
  useEffect(() => {
    document.documentElement.toggleAttribute('data-cookie-open', isVisible);
    return () => document.documentElement.removeAttribute('data-cookie-open');
  }, [isVisible]);

  useEffect(() => {
    let decided = false;
    try {
      decided = Boolean(localStorage.getItem(CONSENT_KEY));
    } catch {
      decided = false;
    }
    if (decided) return;
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // The footer link "Pamięć przeglądarki" asks to show the choice again
  useEffect(() => {
    const reopen = () => setIsVisible(true);
    window.addEventListener('domence:open-cookie-prefs', reopen);
    return () => window.removeEventListener('domence:open-cookie-prefs', reopen);
  }, []);

  const choose = (remember: boolean) => {
    saveChoice(remember);
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 24, transition: { duration: 0.2, ease: [0.55, 0.085, 0.68, 0.53] } }}
          transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
          role="region"
          aria-label="Pamięć przeglądarki"
          className="fixed bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-2xl z-50"
        >
          <div className="bg-petrol-800/95 backdrop-blur-xl border border-white/15 rounded-[2px] px-4 py-3 shadow-2xl shadow-petrol-950/60 text-gray-200 flex flex-col sm:flex-row sm:items-center gap-3">
            <p className="text-xs text-gray-300 leading-relaxed flex-1">
              <span className="font-bold text-white">Bez śledzenia. </span>
              Czy zapamiętać odpowiedzi z{' '}zapytania w{' '}tej przeglądarce, żeby nie zginęły przy zmianie strony?
            </p>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => choose(false)}
                className="min-h-11 px-3.5 rounded-[2px] bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 hover:text-white font-medium text-xs transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400"
              >
                Nie zapamiętuj
              </button>
              <button
                onClick={() => choose(true)}
                className="min-h-11 px-4 rounded-[2px] bg-amber-400 hover:bg-amber-300 text-petrol-950 font-bold text-xs transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-800"
              >
                Zapamiętuj
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
