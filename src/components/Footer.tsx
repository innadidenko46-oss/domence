import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.tsx';
import { Mail, MapPin, Cookie, FileText, X, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  const [activeModal, setActiveModal] = useState<'rodo' | 'regulamin' | 'certyfikaty' | null>(null);

  const openCookiePreferences = () => {
    try {
      localStorage.removeItem('domence_cookie_consent');
    } catch {
      // blocked storage: just reopen the banner
    }
    window.dispatchEvent(new Event('domence:open-cookie-prefs'));
  };

  // ESC closes legal modal + body scroll lock
  // Other parts of the page (e.g. the enquiry consent) can open a legal modal
  useEffect(() => {
    const open = (e: Event) => setActiveModal((e as CustomEvent).detail);
    window.addEventListener('domence:legal', open);
    return () => window.removeEventListener('domence:legal', open);
  }, []);

  useEffect(() => {
    if (!activeModal) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveModal(null);
    };
    document.addEventListener('keydown', onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = prev;
    };
  }, [activeModal]);

  return (
    <footer className="bg-petrol-950 border-t border-white/10 pt-16 pb-24 md:pb-16 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Legal Registry */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" aria-label="DOMENCE, strona główna">
                <Logo size="md" variant="light" showSubtitle={true} />
              </Link>
              <p className="mt-4 text-gray-400 max-w-sm leading-relaxed text-sm">
                Wdrożenia Shelly Pro, domofonów z kamerą oraz kamer 4K.
                Wszystko działa w domu, bez miesięcznego abonamentu. Montujemy bez kucia, gdzie się da, a po montażu uczymy domowników obsługi.
              </p>
            </div>
          </div>

          {/* Chapters & Services */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            <div>
              <h2 className="font-display text-sm font-semibold text-white mb-4">
                Rozwiązania
              </h2>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link to="/systemy" className="inline-block py-1.5 md:py-0 hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                    Automatyka domu
                  </Link>
                </li>
                <li>
                  <Link to="/teletechnika" className="inline-block py-1.5 md:py-0 hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                    Kamery i domofon z kamerą
                  </Link>
                </li>
                <li>
                  <Link to="/multimedia" className="inline-block py-1.5 md:py-0 hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                    Kino w salonie
                  </Link>
                </li>
                <li>
                  <Link to="/scenariusze" className="inline-block py-1.5 md:py-0 hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                    Przykłady z życia
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="font-display text-sm font-semibold text-white mb-4">
                Wdrożenia i narzędzia
              </h2>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link to="/jak-zaczac" className="inline-block py-1.5 md:py-0 hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                    Jak zacząć
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="inline-block py-1.5 md:py-0 hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                    Pytania i odpowiedzi
                  </Link>
                </li>
                <li>
                  <Link to="/zapytanie" className="hover:text-amber-400 transition-colors font-semibold text-amber-400 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                    Dobierz zestaw (2 min)
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="inline-block py-1.5 md:py-0 hover:text-amber-400 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                    Zapytaj inżyniera
                  </Link>
                </li>
                <li>
                  <button
                    onClick={openCookiePreferences}
                    className="hover:text-amber-400 transition-colors flex items-center gap-1.5 text-gray-400 text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                  >
                    <Cookie className="w-3.5 h-3.5 text-amber-400" />
                    <span>Ustawienia plików cookies</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <h2 className="font-display text-sm font-semibold text-white mb-4">
              Kontakt z inżynierem
            </h2>

            <a
              href="mailto:kontakt@domence.pl"
              className="flex items-center gap-2.5 text-xs text-gray-200 hover:text-amber-400 transition-colors font-mono focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
            >
              <Mail className="w-4 h-4 text-amber-400 shrink-0" />
              <span>kontakt@domence.pl</span>
            </a>

            <div className="flex items-start gap-2.5 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
              <span>Warszawa i okolice</span>
            </div>

            <div className="pt-2">
              <Link
                to="/kontakt"
                className="inline-block px-4 py-2.5 rounded-[2px] bg-petrol-700 hover:bg-petrol-800 text-white font-bold text-xs transition-colors shadow-md shadow-amber-500/10 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
              >
                Zapytaj inżyniera
              </Link>
              <p className="text-xs text-gray-400 mt-1.5">
                Odpowiadamy w 24 godziny robocze (pon–pt, 8:00–18:00). Bez spamu.
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar with Real Legal Modals */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400">
          <div>
            © {new Date().getFullYear()} DOMENCE. Wszelkie prawa zastrzeżone.
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => setActiveModal('rodo')}
              className="hover:text-amber-400 transition-colors cursor-pointer text-gray-300 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
            >
              Polityka prywatności i RODO
            </button>
            <button
              onClick={() => setActiveModal('regulamin')}
              className="hover:text-amber-400 transition-colors cursor-pointer text-gray-300 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
            >
              Regulamin świadczenia usług
            </button>
            <button
              onClick={openCookiePreferences}
              className="hover:text-amber-400 transition-colors flex items-center gap-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
            >
              <Cookie className="w-3 h-3 text-amber-400 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2" />
              <span>Cookies</span>
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-petrol-950/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveModal(null)}>
          <div role="dialog" aria-modal="true" aria-label="Informacje prawne" onClick={(e) => e.stopPropagation()} className="bg-petrol-950 border border-white/15 rounded-[2px] max-w-2xl w-full p-6 text-gray-300 text-xs max-h-[85vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Zamknij"
              autoFocus
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-[2px] bg-white/5 border border-white/10 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'rodo' && (
              <div>
                <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-amber-400" />
                  <span>Polityka prywatności i dane osobowe (RODO)</span>
                </h2>
                <div className="space-y-3 leading-relaxed text-gray-300">
                  <p>
                    1. <strong>Administrator Danych:</strong> Administratorem Twoich danych osobowych jest właściciel serwisu DOMENCE. Kontakt w sprawie danych osobowych: kontakt@domence.pl.
                  </p>
                  <p>
                    2. <strong>Cel przetwarzania:</strong> Dane wprowadzone w konfiguratorze i formularzu kontaktowym (imię, telefon, e-mail, metraż nieruchomości) przetwarzane są wyłącznie w celu sporządzenia kosztorysu technicznego i kontaktu inżyniera z klientem (art. 6 ust. 1 lit. b RODO).
                  </p>
                  <p>
                    3. <strong>Brak handlu danymi:</strong> Twoje dane nie są odsprzedawane firmom telemarketingowym, bankom ani zewnętrznym podmiotom reklamowym.
                  </p>
                  <p>
                    4. <strong>Lokalność danych wideo:</strong> Systemy kamer i rejestratorów montowane przez DOMENCE pracują w architekturze Local-First. Wideo z Twojego domu nie trafia do chmury zagranicznych korporacji.
                  </p>
                  <p>
                    5. <strong>Prawa klienta:</strong> Masz prawo wglądu, sprostowania oraz żądania usunięcia swoich danych w dowolnym momencie przez e-mail: kontakt@domence.pl.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'regulamin' && (
              <div>
                <h2 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-amber-400" />
                  <span>Regulamin świadczenia usług montażowych i projektowych</span>
                </h2>
                <div className="space-y-3 leading-relaxed text-gray-300">
                  <p>
                    1. <strong>Zakres usług:</strong> DOMENCE projektuje i montuje automatykę domu (światło, rolety, ogrzewanie, czujniki), kamery, wideodomofony i sieć w domu.
                  </p>
                  <p>
                    2. <strong>Standard montażu:</strong> Prace wykonujemy z jak najmniejszą ingerencją w tynki, z odsysaniem pyłu i zabezpieczeniem podłóg.
                  </p>
                  <p>
                    3. <strong>Wycena:</strong> Zapytanie wysłane przez stronę nie jest wyceną ani ofertą w rozumieniu art. 66 Kodeksu cywilnego. Zakres i cenę potwierdzamy na piśmie po rozmowie i sprawdzeniu domu.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-[2px] bg-petrol-700 hover:bg-petrol-800 text-white font-bold text-xs focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
              >
                Zamknij
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
