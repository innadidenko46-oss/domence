import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { MultiroomGardenSection } from '../components/MultiroomGardenSection.tsx';
import { AppsShowcaseSection } from '../components/AppsShowcaseSection.tsx';
import { Volume2, ArrowRight, Film, Music2, Tv } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const MultiroomGardenPage: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <div className={`transition-colors duration-300 ${
      isDay ? 'bg-[#F9FAFB] text-[#111827]' : 'bg-[#18181B] text-[#F3F4F6]'
    }`}>
      <PageHeader
        badge="Multimedia &amp; Kino Domowe"
        title="Dźwięk Wielostrefowy Multiroom &amp; Prywatna Sala Kinowa"
        description="Dyskretna technologia służąca Twojemu relaksowi. Muzyka płynąca z bezramkowych głośników sufitowych wpuszczonych w tynk, automatyczne sceny kinowe z zaciemnieniem roletami blackout oraz synchronizacja ze stacją bramową."
        icon={<Volume2 className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Audio & Cinema */}
      <section className={`py-12 border-b ${
        isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=1000&q=85"
                  alt="Dyskretne głośniki architektoniczne w suficie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-[2px] bg-black/80 backdrop-blur-md text-xs font-mono font-semibold text-[#B87333] border border-white/10">
                  Dźwięk bez kabli na widoku
                </span>
              </div>
              <div className="p-7">
                <h3 className={`font-bold text-lg ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Głośniki Schowane w Suficie
                </h3>
                <p className={`text-sm mt-3 leading-[1.7] ${isDay ? 'text-[#4B5563]' : 'text-[#D4D4D8]'}`}>
                  Magnetyczne bezramkowe maskownice malowane pod kolor sufitu sprawiają, że źródło dźwięku w salonie, sypialni czy łazience staje się zupełnie niewidoczne dla oczu.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Minimalistyczny salon rezydencjalny ze sceną kinową"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-[2px] bg-black/80 backdrop-blur-md text-xs font-mono font-semibold text-sky-400 border border-white/10">
                  Scena kinowa 1 kliknięcie
                </span>
              </div>
              <div className="p-7">
                <h3 className={`font-bold text-lg ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Atmosfera Sali Kinowej
                </h3>
                <p className={`text-sm mt-3 leading-[1.7] ${isDay ? 'text-[#4B5563]' : 'text-[#D4D4D8]'}`}>
                  Rolety blackout zjeżdżają w dół, światła powoli wygaszają się do 5%, a dźwięk Dolby Atmos wypełnia przestrzeń jak w prywatnej sali kinowej.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                  alt="Dyskretny wideodomofon i monitoring strefy wejścia"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-[2px] bg-black/80 backdrop-blur-md text-xs font-mono font-semibold text-[#B87333] border border-white/10">
                  Integracja ze stacją bramową
                </span>
              </div>
              <div className="p-7">
                <h3 className={`font-bold text-lg ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Automatyczne Wyciszanie przy Dzwonku
                </h3>
                <p className={`text-sm mt-3 leading-[1.7] ${isDay ? 'text-[#4B5563]' : 'text-[#D4D4D8]'}`}>
                  Gdy kurier dzwoni do furtki, muzyka w strefach automatycznie wycisza się o 80%, a na ściennym panelu dotykowym pojawia się podgląd wideo.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Multiroom Section Component */}
      <MultiroomGardenSection />

      {/* Deep-dive into Cinema & Multiroom Logic */}
      <section className={`py-16 border-t ${
        isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDay ? 'text-[#111827]' : 'text-white'
            }`}>
              Kino domowe i strefy audio zintegrowane w jednym systemie
            </h2>
            <p className={`mt-2 text-sm sm:text-base leading-[1.7] ${
              isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
            }`}>
              Zamiast osobnych pilotów do telewizora, rolet, amplitunera i ściemniaczy – w DOMENCE wszystko działa w oparciu o naturalne sceny.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-7 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                    Scena "Seans Kinowy" – 1 Kliknięcie
                  </h3>
                  <span className="text-xs text-[#B87333] font-mono font-semibold">Pełna koordynacja salonu</span>
                </div>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                Po wybraniu sceny kinowej (przyciskiem na ścianie, pilotem lub ze smartfona):
              </p>
              <ul className={`space-y-2.5 text-xs sm:text-sm ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
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

            <div className={`p-7 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-sky-500/20 text-sky-400 flex items-center justify-center">
                  <Music2 className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                    Niezależne Strefy Dźwięku w Rezydencji
                  </h3>
                  <span className="text-xs text-sky-400 font-mono font-semibold">Muzyka dokładnie tam, gdzie przebywasz</span>
                </div>
              </div>
              <p className={`text-xs sm:text-sm leading-relaxed mb-4 ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                Każdy domownik słucha ulubionych utworów bez kłótni o głośność i repertuar:
              </p>
              <ul className={`space-y-2.5 text-xs sm:text-sm ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
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
          <div className={`mt-8 p-8 rounded-[2px] border ${
            isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/50 border-white/10'
          }`}>
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center shrink-0">
                  <Tv className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                    Inżynieryjne Wdrożenie Dźwięku i Sali Kinowej
                  </h3>
                  <div className="text-xs text-[#B87333] font-mono mt-0.5">
                    Głośniki sufitowe bezramkowe • Amplitunery AV • Automatyka rolet blackout • Sceny nastrojowe
                  </div>
                </div>
              </div>
              <Link
                to="/kalkulator"
                className="px-6 py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-medium text-xs uppercase tracking-wider transition-all text-center shrink-0 shadow-sm"
              >
                Wyceń multimedia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps Showcase */}
      <AppsShowcaseSection />

      {/* Next Area Banner */}
      <section className={`py-12 border-t ${
        isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#9CA3AF] font-mono">Kolejny obszar instalacji:</div>
            <div className={`text-base font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
              Praktyczne Scenariusze Codziennego Dnia
            </div>
          </div>
          <Link
            to="/scenariusze"
            className="px-6 py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
          >
            <span>Zobacz scenariusze</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
