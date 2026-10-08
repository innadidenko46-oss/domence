import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { MultiroomGardenSection } from '../components/MultiroomGardenSection.tsx';
import { Volume2, ArrowRight, Film, Music2, Tv } from 'lucide-react';

export const MultiroomGardenPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-[#F9FAFB] text-[#111827]">
      <PageHeader
        badge="Multimedia &amp; Kino Domowe"
        title="Dźwięk Wielostrefowy Multiroom &amp; Prywatna Sala Kinowa"
        description="Dyskretna technologia służąca Twojemu relaksowi. Muzyka płynąca z bezramkowych głośników sufitowych wpuszczonych w tynk, automatyczne sceny kinowe z zaciemnieniem roletami blackout oraz synchronizacja ze stacją bramową."
        icon={<Volume2 className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Audio & Cinema */}
      <section className="py-12 border-b bg-white border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[2px] overflow-hidden border group bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=85"
                  alt="Dyskretne głośniki architektoniczne w suficie"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-[2px] bg-black/80 backdrop-blur-md text-xs font-mono font-semibold text-[#B87333] border border-white/10">
                  Dźwięk bez kabli na widoku
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-bold text-lg text-[#111827]">
                  Głośniki schowane w suficie
                </h3>
                <p className="text-sm mt-3 leading-[1.7] text-[#4B5563]">
                  Magnetyczne bezramkowe maskownice malowane pod kolor sufitu sprawiają, że źródło dźwięku w salonie, sypialni czy łazience staje się zupełnie niewidoczne dla oczu.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border group bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Nowoczesny dom jednorodzinny z dużymi przeszkleniami"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-[2px] bg-black/80 backdrop-blur-md text-xs font-mono font-semibold text-sky-400 border border-white/10">
                  Scena kinowa 1 kliknięcie
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-bold text-lg text-[#111827]">
                  Atmosfera sali kinowej
                </h3>
                <p className="text-sm mt-3 leading-[1.7] text-[#4B5563]">
                  Rolety blackout zjeżdżają w dół, światła powoli wygaszają się do 5%, a dźwięk Dolby Atmos wypełnia przestrzeń jak w prywatnej sali kinowej.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border group bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85"
                  alt="Dyskretna kamera monitoringu przy wejściu na posesję"
                  loading="lazy"
                  className="w-full h-full object-contain bg-[#18181B] p-4 duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-[2px] bg-black/80 backdrop-blur-md text-xs font-mono font-semibold text-[#B87333] border border-white/10">
                  Integracja ze stacją bramową
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-bold text-lg text-[#111827]">
                  Automatyczne wyciszanie przy dzwonku
                </h3>
                <p className="text-sm mt-3 leading-[1.7] text-[#4B5563]">
                  Gdy kurier dzwoni do furtki, muzyka w strefach automatycznie cichnie, a na ściennym panelu dotykowym pojawia się podgląd wideo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Multiroom Section Component */}
      <MultiroomGardenSection />

      {/* Deep-dive into Cinema & Multiroom Logic */}
      <section className="py-16 border-t bg-white border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
              Kino domowe i strefy audio zintegrowane w jednym systemie
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-[1.7] text-[#4B5563]">
              Zamiast osobnych pilotów do telewizora, rolet, amplitunera i ściemniaczy – w DOMENCE wszystko działa w oparciu o naturalne sceny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    Scena „Seans kinowy” – 1 kliknięcie
                  </h3>
                  <span className="text-xs text-[#B87333] font-mono font-semibold">Pełna koordynacja salonu</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed mb-4 text-[#4B5563]">
                Po wybraniu sceny kinowej (przyciskiem na ścianie, pilotem lub ze smartfona):
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#374151]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]" />
                  <span>Rolety i żaluzje zjeżdżają w 100%, eliminując wszelkie odblaski światła dziennego.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]" />
                  <span>Główne oświetlenie wygasza się, a subtelne taśmy LED COB przy podłodze ściemniają się do 5%.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]" />
                  <span>Amplituner audio Dolby Atmos uruchamia się z optymalnym źródłem dźwięku.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]" />
                  <span>Rekuperacja przechodzi w bezszelestny tryb nocny, aby szum nie zakłócał dialogów.</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Music2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    Niezależne strefy dźwięku w rezydencji
                  </h3>
                  <span className="text-xs text-sky-400 font-mono font-semibold">Muzyka dokładnie tam, gdzie przebywasz</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm leading-relaxed mb-4 text-[#4B5563]">
                Każdy domownik słucha ulubionych utworów bez kłótni o głośność i repertuar:
              </p>
              <ul className="space-y-2.5 text-xs sm:text-sm text-[#374151]">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>W strefie kąpielowej relaksacyjna muzyka włącza się wraz ze sceną oświetleniową.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>W kuchni poranny podcast i wiadomości podczas przygotowywania śniadania.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>W sypialni łagodne budzenie ulubioną playlistą zsynchronizowaną z zegarem astronomicznym.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                  <span>Pełna obsługa Apple AirPlay 2, Spotify Connect, Tidal i bezstratnego strumienia Hi-Res.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dedicated Home Multimedia Feature Card */}
          <div className="mt-8 p-8 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB]">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E5E7EB]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center shrink-0">
                  <Tv className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#111827]">
                    Inżynieryjne wdrożenie dźwięku i sali kinowej
                  </h3>
                  <div className="text-xs text-[#B87333] font-mono mt-0.5">
                    Głośniki sufitowe bezramkowe • Amplitunery AV • Automatyka rolet blackout • Sceny nastrojowe
                  </div>
                </div>
              </div>
              <Link
                to="/kalkulator"
                className="btn-engineering-primary text-center shrink-0 shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
              >
                Wyceń w kalkulatorze
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="py-12 border-t bg-[#F9FAFB] border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#9CA3AF] font-mono">Kolejny obszar instalacji:</div>
            <div className="text-base font-bold text-[#111827]">
              Praktyczne Scenariusze Codziennego Dnia
            </div>
          </div>
          <Link
            to="/scenariusze"
            className="btn-engineering-primary gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
          >
            <span>Zobacz scenariusze</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
