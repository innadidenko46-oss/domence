import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo.tsx';
import { Mail, MapPin, Cookie, FileText, Award, X, ShieldCheck } from 'lucide-react';

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
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-24 md:pb-16 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Info & Legal Registry */}
          <div className="md:col-span-4 flex flex-col justify-between">
            <div>
              <Link to="/" aria-label="DOMENCE Strona Główna">
                <Logo size="md" variant="light" showSubtitle={true} />
              </Link>
              <p className="mt-4 text-gray-400 max-w-sm leading-relaxed text-xs focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2">
                Wdrożenia Shelly Pro, domofonów z kamerą oraz kamer 4K.
                Wszystko działa w domu, bez miesięcznego abonamentu. Montujemy bez kucia, gdzie się da, i dajemy schematy po zakończeniu prac.
              </p>
            </div>

            <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono text-copper-400">
              <span className="px-2.5 py-1 rounded-[2px] bg-white/5 border border-white/10">
                Norma PN-HD 60364
              </span>
              <span className="px-2.5 py-1 rounded-[2px] bg-white/5 border border-white/10">
                Działa bez internetu
              </span>
              <span className="px-2.5 py-1 rounded-[2px] bg-white/5 border border-white/10">
                Nagrania w domu, bez abonamentu
              </span>
            </div>
          </div>

          {/* Chapters & Services */}
          <div className="md:col-span-5 grid grid-cols-2 gap-6">
            <div>
              <h4 className="font-display text-sm font-semibold text-white mb-4">
                Rozwiązania
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link to="/systemy" className="hover:text-copper-400 transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2">
                    Automatyka domu
                  </Link>
                </li>
                <li>
                  <Link to="/teletechnika" className="hover:text-copper-400 transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2">
                    Kamery i domofon z kamerą
                  </Link>
                </li>
                <li>
                  <Link to="/multimedia" className="hover:text-copper-400 transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2">
                    Kino w salonie
                  </Link>
                </li>
                <li>
                  <Link to="/scenariusze" className="hover:text-copper-400 transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2">
                    Przykłady z życia
                  </Link>
                </li>
                <li>
                  <button
                    onClick={() => setActiveModal('certyfikaty')}
                    className="hover:text-copper-400 transition-colors text-left flex items-center gap-1.5 text-gray-300 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                  >
                    <Award className="w-3.5 h-3.5 text-copper-400" />
                    <span>Normy i dokumenty</span>
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-display text-sm font-semibold text-white mb-4">
                Wdrożenia i narzędzia
              </h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <Link to="/pakiety" className="hover:text-copper-400 transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2">
                    Gotowe zestawy z montażem
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="hover:text-copper-400 transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2">
                    Pytania i odpowiedzi
                  </Link>
                </li>
                <li>
                  <Link to="/kalkulator" className="hover:text-copper-400 transition-colors font-semibold text-copper-400 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2">
                    Dobierz zestaw (2 min)
                  </Link>
                </li>
                <li>
                  <Link to="/kontakt" className="hover:text-copper-400 transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2">
                    Zapytaj inżyniera
                  </Link>
                </li>
                <li>
                  <button
                    onClick={openCookiePreferences}
                    className="hover:text-copper-400 transition-colors flex items-center gap-1.5 text-gray-400 text-left cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                  >
                    <Cookie className="w-3.5 h-3.5 text-copper-400" />
                    <span>Ustawienia plików cookies</span>
                  </button>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Direct */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-display text-sm font-semibold text-white mb-4">
              Kontakt z inżynierem
            </h4>

            <a
              href="mailto:kontakt@domence.pl"
              className="flex items-center gap-2.5 text-xs text-gray-200 hover:text-copper-400 transition-colors font-mono focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
            >
              <Mail className="w-4 h-4 text-copper-400 shrink-0" />
              <span>kontakt@domence.pl</span>
            </a>

            <div className="flex items-start gap-2.5 text-xs text-gray-400">
              <MapPin className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
              <span>Warszawa i okolice; większe domy — cała Polska</span>
            </div>

            <div className="pt-2">
              <Link
                to="/kontakt"
                className="inline-block px-4 py-2.5 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-bold text-xs transition-colors shadow-md shadow-copper-500/10 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
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
              className="hover:text-copper-400 transition-colors cursor-pointer text-gray-300 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
            >
              Polityka prywatności i RODO
            </button>
            <button
              onClick={() => setActiveModal('regulamin')}
              className="hover:text-copper-400 transition-colors cursor-pointer text-gray-300 underline underline-offset-4 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
            >
              Regulamin Świadczenia Usług
            </button>
            <button
              onClick={openCookiePreferences}
              className="hover:text-copper-400 transition-colors flex items-center gap-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
            >
              <Cookie className="w-3 h-3 text-copper-400 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2" />
              <span>Cookies</span>
            </button>
          </div>
        </div>

      </div>

      {/* Legal Modals */}
      {activeModal && (
        <div className="fixed inset-0 z-50 bg-navy-950/80 backdrop-blur-sm flex items-center justify-center p-4" onClick={() => setActiveModal(null)}>
          <div role="dialog" aria-modal="true" aria-label="Informacje prawne" onClick={(e) => e.stopPropagation()} className="bg-navy-950 border border-white/15 rounded-[2px] max-w-2xl w-full p-6 text-gray-300 text-xs max-h-[85vh] overflow-y-auto relative shadow-2xl">
            <button
              onClick={() => setActiveModal(null)}
              aria-label="Zamknij"
              autoFocus
              className="absolute top-4 right-4 text-gray-400 hover:text-white p-1 rounded-[2px] bg-white/5 border border-white/10 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
            >
              <X className="w-5 h-5" />
            </button>

            {activeModal === 'rodo' && (
              <div>
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-copper-600" />
                  <span>Polityka Prywatności i Informacja o Danych Osobowych (RODO)</span>
                </h3>
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
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-copper-600" />
                  <span>Regulamin Świadczenia Usług Montażowych i Projektowych</span>
                </h3>
                <div className="space-y-3 leading-relaxed text-gray-300">
                  <p>
                    1. <strong>Zakres usług:</strong> DOMENCE wykonuje projekty okablowania, prefabrykację rozdzielnic elektrycznych, konfigurację modułów Shelly Pro na szynę DIN oraz instalację kamer i wideodomofonów IP Hikvision.
                  </p>
                  <p>
                    2. <strong>Standard montażu:</strong> Wszelkie prace instalacyjne wykonujemy z minimalną ingerencją w tynki, z odciągiem pyłu (odciągi przemysłowe HEPA) i zgodnie z normą PN-HD 60364.
                  </p>
                  <p>
                    3. <strong>Gwarancja:</strong> Na wykonane okablowanie i prace montażowe udzielamy 24 miesięcy gwarancji. Szczegóły oraz ewentualne wydłużenia określa umowa zawierana z klientem.
                  </p>
                  <p>
                    4. <strong>Wycena:</strong> Kosztorys wstępny generowany przez kalkulator ma charakter informacyjny i nie stanowi oferty w rozumieniu art. 66 Kodeksu Cywilnego do czasu weryfikacji rzutów architektonicznych przez inżyniera.
                  </p>
                </div>
              </div>
            )}

            {activeModal === 'certyfikaty' && (
              <div>
                <h3 className="text-base font-bold text-white mb-3 flex items-center gap-2">
                  <Award className="w-5 h-5 text-copper-600" />
                  <span>Standardy i Dokumentacja Wykonawcza</span>
                </h3>
                <div className="space-y-3 leading-relaxed text-gray-300">
                  <p>
                    • <strong>Norma PN-HD 60364:</strong> Instalacje niskonapięciowe projektowane i wykonywane zgodnie z europejskimi standardami bezpieczeństwa, w tym ochroną przeciwprzepięciową.
                  </p>
                  <p>
                    • <strong>Pomiary i odbiory:</strong> Tor transmisyjny sieci LAN weryfikowany certyfikowanym miernikiem okablowania, protokoły pomiarowe przekazywane inwestorowi.
                  </p>
                  <p>
                    • <strong>Dokumentacja powykonawcza:</strong> Po zakończeniu prac przekazujemy schematy, listę urządzeń, konfiguracje oraz instrukcję obsługi systemu.
                  </p>
                  <p>
                    • <strong>Uprawnienia:</strong> Prace elektryczne wykonuje osoba z aktualnymi uprawnieniami SEP; numery i zakres uprawnień przedstawiamy na życzenie wraz z ofertą.
                  </p>
                </div>
              </div>
            )}

            <div className="mt-6 pt-4 border-t border-white/10 text-right">
              <button
                onClick={() => setActiveModal(null)}
                className="px-5 py-2 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-bold text-xs focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
              >
                Rozumiem i Zamykam
              </button>
            </div>
          </div>
        </div>
      )}
    </footer>
  );
};
