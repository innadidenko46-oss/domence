import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { SystemsComparisonSection } from '../components/SystemsComparisonSection.tsx';
import { ShellyShowcase } from '../components/ShellyShowcase.tsx';
import { AppsShowcaseSection } from '../components/AppsShowcaseSection.tsx';
import { TopSellingScenariosSection } from '../components/TopSellingScenariosSection.tsx';
import { Layers, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const SystemsPage: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <div className={`transition-colors duration-300 ${
      isDay ? 'bg-[#F9FAFB] text-[#111827]' : 'bg-[#18181B] text-[#F3F4F6]'
    }`}>
      <PageHeader
        badge="Automatyka & Sterowanie"
        title="Dobór Systemu Automatyki dla Rezydencji: Shelly Pro, KNX &amp; Loxone"
        description="Porównanie technologii. Dobieramy technologię do etapu budowy: od modułów DIN w centralnej szafie elektrycznej po wdrożenia w zamieszkałych wnętrzach."
        icon={<Layers className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Lighting & Systems */}
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
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Światło architektoniczne i inteligentne sceny"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-[#B87333] border border-white/10">
                  Ciepłe światło 2400K
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Światło Bez Olśnień
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Niewidoczne linie LED COB w sufitach podwieszanych i cokołach tworzą miękki, nastrojowy klimat o zmierzchu.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=85"
                  alt="Minimalistyczne włączniki ścienne i panele dotykowe"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-sky-400 border border-white/10">
                  Jeden przycisk na ścianie
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Koniec z Baterią Włączników
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Zamiast 6 oddzielnych klawiszy obok siebie montujemy panel dotykowy zintegrowany ze sterowaniem temperaturą i scenami.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                  alt="Niezawodna rozdzielnica przewodowa Shelly Pro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-emerald-400 border border-white/10">
                  Szyna DIN Rozdzielnicy
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Stabilność i Przewodowy LAN
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Przemysłowa seria modułów DIN w rozdzielnicy gwarantuje bezpośrednie połączenie kablowe Ethernet i 100% redundancji offline.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Systems Comparison Matrix Component */}
      <SystemsComparisonSection onConsultSystem={() => {}} />

      {/* Deep Dive: Full Capabilities of Shelly System */}
      <ShellyShowcase />

      {/* Top Selling Real-Life Automation Scenarios */}
      <TopSellingScenariosSection />

      {/* Detailed Architectural Comparison Guidance */}
      <section className={`py-16 border-t ${
        isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDay ? 'text-[#111827]' : 'text-white'
            }`}>
              Kiedy wybrać Shelly Pro DIN, a kiedy moduły dopuszkowe?
            </h2>
            <p className={`mt-2 text-sm sm:text-base leading-[1.7] ${
              isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
            }`}>
              Jako niezależny inżynier doradzamy technologie dopasowane do stopnia wykończenia ścian oraz założeń projektowych.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-[2px] border flex flex-col justify-between ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B87333] mb-2">
                  Stan surowy / Nowa rozdzielnica
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Shelly Pro DIN (Rozdzielnica)
                </h3>
                <p className={`text-xs leading-[1.65] mb-4 ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Wybierz serię Shelly Pro, jeśli budujesz dom od podstaw. Każdy moduł montowany jest na szynie DIN w rozdzielnicy, posiada port Ethernet LAN oraz sprzętowy pomiar zużycia prądu.
                </p>
                <ul className="space-y-2 text-xs">
                  <li className={`flex items-center gap-2 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Niezawodne połączenie kablowe Ethernet LAN</span>
                  </li>
                  <li className={`flex items-center gap-2 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Ochrona termiczna, przeciążeniowa i przepięciowa</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/kalkulator"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B87333] hover:text-[#A36034]"
              >
                <span>Wycena instalacji rozdzielnicy</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className={`p-6 rounded-[2px] border flex flex-col justify-between ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-2">
                  Kompletny ekosystem PLC
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  KNX / Loxone (Magistrala)
                </h3>
                <p className={`text-xs leading-[1.65] mb-4 ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Rozwiązanie dla inwestorów oczekujących jednolitego ekosystemu jednej marki: strefowego audio, integracji pomp ciepła i stacji meteo z centralnym sterownikiem logicznym.
                </p>
                <ul className="space-y-2 text-xs">
                  <li className={`flex items-center gap-2 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Magistrala przewodowa o najwyższej trwałości</span>
                  </li>
                  <li className={`flex items-center gap-2 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-400 shrink-0" />
                    <span>Integracja z rekuperacją i pompami ciepła</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/kalkulator"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 hover:text-sky-300"
              >
                <span>Wycena instalacji magistralnej</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className={`p-6 rounded-[2px] border flex flex-col justify-between ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Wykończone wnętrza / Bez kucia
                </div>
                <h3 className={`text-lg font-bold mb-3 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Home Assistant &amp; Mikromoduły
                </h3>
                <p className={`text-xs leading-[1.65] mb-4 ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Idealne rozwiązanie, jeśli masz już pomalowane ściany. Montujemy mikromoduły w puszkach pod włącznikami, które komunikują się lokalnie z domowym serwerem.
                </p>
                <ul className="space-y-2 text-xs">
                  <li className={`flex items-center gap-2 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Montaż bezpyłowy i bez niszczenia gładzi</span>
                  </li>
                  <li className={`flex items-center gap-2 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>Niezależność od chmury (100% lokalna baza)</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/kalkulator"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>Wycena bezinwazyjna</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Local-First Principle Banner */}
          <div className={`mt-12 p-6 rounded-[2px] border flex items-start gap-4 ${
            isDay
              ? 'bg-[#B87333]/10 border-[#B87333]/30'
              : 'bg-[#B87333]/10 border-[#B87333]/30'
          }`}>
            <AlertTriangle className="w-6 h-6 text-[#B87333] shrink-0 mt-0.5" />
            <div>
              <h4 className={`text-sm font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                Dlaczego w DOMENCE nie instalujemy rozwiązań uzależnionych od zewnętrznej chmury?
              </h4>
              <p className={`text-xs mt-1 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#D1D5DB]'}`}>
                Typowe urządzenia z marketu wymagają stałego połączenia z obcymi serwerami. W przypadku awarii łącza internetowego tracisz kontrolę nad oświetleniem i ogrzewaniem. W DOMENCE wdrażamy architekturę pracującą w 100% w lokalnej sieci LAN.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps & Control Systems */}
      <AppsShowcaseSection />

      {/* Next Area Banner */}
      <section className={`py-12 border-t ${
        isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#9CA3AF] font-mono">Kolejny obszar instalacji:</div>
            <div className={`text-base font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
              Monitoring Wizyjny CCTV AI, Sieci LAN i Szafy RACK
            </div>
          </div>
          <Link
            to="/teletechnika"
            className="px-6 py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
          >
            <span>Zobacz szczegóły</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
