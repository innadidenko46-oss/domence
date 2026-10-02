import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { ScenariosSection } from '../components/ScenariosSection.tsx';
import { AppsShowcaseSection } from '../components/AppsShowcaseSection.tsx';
import { SlidersHorizontal, ArrowRight, Droplets, LogOut, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const ScenariosPage: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <div className={`transition-colors duration-300 ${
      isDay ? 'bg-[#F9FAFB] text-[#111827]' : 'bg-[#18181B] text-[#F3F4F6]'
    }`}>
      <PageHeader
        badge="Scenariusze Codziennego Dnia"
        title="Automatyka, Która Zdejmuje Obowiązki z Twojej Głowy"
        description="Prawdziwy inteligentny dom to nie aplikacja w telefonie, lecz przestrzeń działająca w tle. Mechaniczne odcięcie wody w 3 sekundy po detekcji wycieku, bezpieczny odbiór przesyłek od kuriera i automatyczne wygaszanie obwodów przy wyjściu."
        icon={<SlidersHorizontal className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Scenarios */}
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
                  src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
                  alt="Spokojny poranek i automatyczne światło"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-[#B87333] border border-white/10">
                  Budzenie światłem
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Komfortowy Poranek
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Żaluzje bezszelestnie unoszą się o określonej godzinie, a światło w strefie prywatnej rozjaśnia się stopniowo do poziomu 20%.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                  alt="Jeden przycisk wyjścia z domu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-sky-400 border border-white/10">
                  Przycisk Master-Off
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Spokój Przy Wyjściu
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Koniec ze sprawdzaniem żelazka czy okien w pośpiechu. Pojedyncze dotknięcie przycisku przy drzwiach gasi oświetlenie i uzbraja czujniki.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                  alt="Bezpieczeństwo wodne i ochrona przed zalaniem"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-emerald-400 border border-white/10">
                  Zamknięcie wody w 3 sekundy
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Ochrona Przed Zalaniem
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Zawór ze sprężyną mechaniczną odcina główny dopływ wody natychmiast po wykryciu wilgoci pod urządzeniami AGD.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Scenarios Section Component */}
      <ScenariosSection />

      {/* Fail-Safe Engineering */}
      <section className={`py-16 border-t ${
        isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDay ? 'text-[#111827]' : 'text-white'
            }`}>
              Standard Fail-Safe: Bezpieczeństwo nawet przy braku zasilania
            </h2>
            <p className={`mt-2 text-sm sm:text-base leading-[1.7] ${
              isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
            }`}>
              Profesjonalna inżynieria przewiduje awarię zasilania w trakcie zdarzenia losowego.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-6 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                Zawór ze Sprężyną Powrotną
              </h3>
              <p className={`text-xs leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                Stosujemy zawory kulowe z mechaniczną sprężyną. Nawet przy całkowitym zaniku prądu w budynku zawór zamyka się samoczynnie.
              </p>
            </div>

            <div className={`p-6 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="w-10 h-10 rounded-[2px] bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <LogOut className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                Fizyczny Przycisk Ścienny
              </h3>
              <p className={`text-xs leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                Przycisk "Wyjście" przy drzwiach wejściowych jest połączony przewodem bezpośrednio z rozdzielnicą. Działa natychmiast bez udziału telefonu.
              </p>
            </div>

            <div className={`p-6 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="w-10 h-10 rounded-[2px] bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                Autonomia 24/7/365
              </h3>
              <p className={`text-xs leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                Wszystkie reguły logiczne wykonują się na sterowniku w rozdzielnicy. Brak łączności ze światem zewnętrznym nie wpływa na działanie domu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps & Control Showcase */}
      <AppsShowcaseSection />

      {/* Next Area Banner */}
      <section className={`py-12 border-t ${
        isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#9CA3AF] font-mono">Następny krok:</div>
            <div className={`text-base font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
              Pakiety Wdrożeniowe z Gwarancją Stałej Ceny
            </div>
          </div>
          <Link
            to="/pakiety"
            className="px-6 py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
          >
            <span>Zobacz pakiety</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
