import React, { useState, useEffect } from 'react';
import { Shield, X, Sliders } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface CookiePreferences {
  necessary: boolean;
  functional: boolean;
  analytics: boolean;
}

export const CookieBanner: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true,
    functional: true,
    analytics: false,
  });

  const persist = (obj: Record<string, unknown>) => {
    try {
      localStorage.setItem('domence_cookie_consent', JSON.stringify(obj));
    } catch {
      // private mode / blocked storage: keep banner-only behaviour
    }
  };

  useEffect(() => {
    let consent: string | null = null;
    try {
      consent = localStorage.getItem('domence_cookie_consent');
    } catch {
      consent = null;
    }
    if (consent) {
      try {
        const parsed = JSON.parse(consent) as Partial<CookiePreferences>;
        setPreferences((prev) => ({
          necessary: true,
          functional: typeof parsed.functional === 'boolean' ? parsed.functional : prev.functional,
          analytics: typeof parsed.analytics === 'boolean' ? parsed.analytics : prev.analytics,
        }));
      } catch {
        // corrupt JSON: show banner again
        const timer = setTimeout(() => setIsVisible(true), 800);
        return () => clearTimeout(timer);
      }
      return;
    }
    // Small delay for smooth entry
    const timer = setTimeout(() => setIsVisible(true), 800);
    return () => clearTimeout(timer);
  }, []);

  // Reopen banner when Footer asks to change preferences
  useEffect(() => {
    const reopen = () => setIsVisible(true);
    window.addEventListener('domence:open-cookie-prefs', reopen);
    return () => window.removeEventListener('domence:open-cookie-prefs', reopen);
  }, []);

  // ESC closes details modal + body scroll lock
  useEffect(() => {
    if (!showDetailsModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setShowDetailsModal(false);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [showDetailsModal]);

  const handleAcceptAll = () => {
    const full = { necessary: true, functional: true, analytics: true, timestamp: new Date().toISOString() };
    persist(full);
    setIsVisible(false);
    setShowDetailsModal(false);
  };

  const handleAcceptNecessary = () => {
    const nec = { necessary: true, functional: false, analytics: false, timestamp: new Date().toISOString() };
    persist(nec);
    setIsVisible(false);
    setShowDetailsModal(false);
  };

  const handleSaveCustom = () => {
    const custom = { ...preferences, necessary: true, timestamp: new Date().toISOString() };
    persist(custom);
    setIsVisible(false);
    setShowDetailsModal(false);
  };

  return (
    <>
      {/* Floating Bottom Banner */}
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 40, scale: 0.96 }}
            transition={{ duration: 0.3 }}
            role="region"
            aria-label="Zgoda na pliki cookies"
            className="fixed bottom-[76px] md:bottom-4 left-4 right-4 md:left-auto md:right-6 md:max-w-2xl z-50"
          >
            <div className="bg-navy-800/95 backdrop-blur-xl border border-white/15 rounded-[2px] px-4 py-3 shadow-2xl shadow-navy-950/60 text-gray-200 flex flex-col sm:flex-row sm:items-center gap-3">
              <p className="text-xs text-gray-300 leading-relaxed flex-1">
                <span className="font-bold text-white">Cookies: </span>
                zapamiętujemy tylko Twoje wybory na stronie. Bez skryptów śledzących.
              </p>

              <div className="flex items-center gap-2 shrink-0">
                <button
                  onClick={handleAcceptNecessary}
                  className="min-h-11 px-3.5 rounded-[2px] bg-white/5 hover:bg-white/10 border border-white/15 text-gray-200 hover:text-white font-medium text-xs transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                >
                  Tylko niezbędne
                </button>

                <button
                  onClick={handleAcceptAll}
                  className="min-h-11 px-4 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-bold text-xs transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                >
                  Akceptuję
                </button>

                <button
                  onClick={() => setShowDetailsModal(true)}
                  aria-label="Ustawienia cookies"
                  className="min-h-11 w-11 flex items-center justify-center rounded-[2px] text-copper-200 hover:bg-white/10 cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                >
                  <Sliders className="w-4 h-4" />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Detailed Modal */}
      <AnimatePresence>
        {showDetailsModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-navy-950/80 backdrop-blur-sm" onClick={() => setShowDetailsModal(false)}>
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Ustawienia prywatności i plików cookies"
              onClick={(e) => e.stopPropagation()}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-navy-800 border border-white/15 rounded-[2px] max-w-lg w-full p-6 md:p-8 shadow-2xl space-y-5"
            >
              <div className="flex items-center justify-between pb-3 border-b border-white/10">
                <div className="flex items-center gap-2.5">
                  <Shield className="w-5 h-5 text-copper-400" />
                  <h3 className="text-base font-bold text-white">Ustawienia prywatności i plików cookies</h3>
                </div>
                <button
                  onClick={() => setShowDetailsModal(false)}
                  aria-label="Zamknij ustawienia"
                  autoFocus
                  className="p-1 rounded-[2px] text-gray-400 hover:text-white hover:bg-white/5 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-4 text-xs text-gray-300">
                <div className="p-3.5 rounded-[2px] bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>1. Cookies techniczne (niezbędne)</span>
                    <span className="text-copper-400 font-mono text-xs">Zawsze aktywne</span>
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Wymagane do działania podstawowych mechanizmów strony: utrzymanie stanu sesji, bezpieczna obsługa formularzy wyceny, zapamiętanie zgody na cookies.
                  </p>
                </div>

                <div className="p-3.5 rounded-[2px] bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>2. Cookies funkcjonalne</span>
                    <input
                      type="checkbox"
                      checked={preferences.functional}
                      onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                      className="w-4 h-4 accent-copper-500 rounded cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                    />
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Umożliwiają zapamiętanie wpisanych w ankiecie odpowiedzi, aby nie tracić ich przy przechodzeniu między stronami.
                  </p>
                </div>

                <div className="p-3.5 rounded-[2px] bg-white/5 border border-white/10 space-y-1.5">
                  <div className="flex items-center justify-between font-bold text-white">
                    <span>3. Anonimowe statystyki</span>
                    <input
                      type="checkbox"
                      checked={preferences.analytics}
                      onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                      className="w-4 h-4 accent-copper-500 rounded cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                    />
                  </div>
                  <p className="text-gray-400 text-xs leading-relaxed">
                    Pomagają nam badać, które działy i narzędzia są najbardziej czytelne dla inwestorów, bez identyfikacji konkretnych osób.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-between pt-3 border-t border-white/10">
                <button
                  onClick={handleAcceptNecessary}
                  className="text-xs text-gray-400 hover:text-white focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                >
                  Odrzuć opcjonalne
                </button>
                <div className="flex gap-2">
                  <button
                    onClick={handleSaveCustom}
                    className="px-4 py-2 rounded-[2px] bg-white/10 hover:bg-white/15 text-white font-semibold text-xs transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                  >
                    Zapisz wybrane
                  </button>
                  <button
                    onClick={handleAcceptAll}
                    className="px-4 py-2 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-bold text-xs transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                  >
                    Zaakceptuj wszystkie
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};
