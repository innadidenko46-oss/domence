import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { PackagesSection } from '../components/PackagesSection.tsx';
import { Package, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { PropertyState } from '../types.ts';
import { useTheme } from '../context/ThemeContext.tsx';

export const PackagesPage: React.FC = () => {
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const handleSelectPackage = (propertyState: PropertyState) => {
    navigate(`/kalkulator?state=${propertyState}`);
  };

  return (
    <div className={`transition-colors duration-300 ${
      isDay ? 'bg-[#F9FAFB] text-[#111827]' : 'bg-[#18181B] text-[#F3F4F6]'
    }`}>
      <PageHeader
        badge="Standardy Wdrożeniowe"
        title="Kompleksowe Realizacje z Gwarancją Stałej Ceny i Certyfikowanym Montażem"
        description="Komponenty Shelly i Hikvision, prefabrykacja rozdzielnic, bezpyłowy montaż oraz 24-miesięczna gwarancja."
        icon={<Package className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase */}
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
                  alt="Domy w budowie i stan surowy"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-[#B87333] border border-white/10">
                  Nowa Rezydencja
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Rozdzielnica Modułowa na Szynie DIN
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Projekt okablowania i prefabrykacja szafy z bezpośrednimi portami Ethernet LAN przed tynkami.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                  alt="Wnętrza w trakcie wykańczania"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-sky-400 border border-white/10">
                  Wykończenie Wnętrz
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Adaptacja Obwodów Oświetleniowych
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Wykorzystanie istniejących puszek elektrycznych. Dyskretne sterowanie roletami, temperaturą i scenami.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=85"
                  alt="Wnętrza zamieszkane bez niszczenia ścian"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-emerald-400 border border-white/10">
                  Wnętrza Gotowe
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Wdrożenie Bezpyłowe
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Montaż za włącznikami ściennymi bez kurzu i bez konieczności ponownego malowania ścian.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Packages Section Component */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* What every package includes */}
      <section className={`py-16 border-t ${
        isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDay ? 'text-[#111827]' : 'text-white'
            }`}>
              Co gwarantuje każdy pakiet DOMENCE?
            </h2>
            <p className={`mt-2 text-sm sm:text-base leading-[1.7] ${
              isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
            }`}>
              Stała, pisemna wycena ryczałtowa bez niespodziewanych dopłat za drobne materiały instalacyjne.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className={`p-6 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                Projekt Wykonawczy
              </h3>
              <p className={`text-xs leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                Indywidualny rzut instalacji, schemat jednokreskowy rozdzielnicy i bilans mocy urządzeń.
              </p>
            </div>

            <div className={`p-6 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="w-10 h-10 rounded-[2px] bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                Czysty Montaż
              </h3>
              <p className={`text-xs leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                Zabezpieczenie posadzek i mebli, odkurzanie przemysłowe z filtrem HEPA i estetyczne wykończenie.
              </p>
            </div>

            <div className={`p-6 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="w-10 h-10 rounded-[2px] bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                Pomiary Odbiorowe
              </h3>
              <p className={`text-xs leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                Pomiary impedancji pętli zwarcia, testy wyłączników RCD oraz protokół podpisany przez inżyniera z uprawnieniami SEP.
              </p>
            </div>

            <div className={`p-6 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="w-10 h-10 rounded-[2px] bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className={`text-base font-bold mb-2 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                24 Miesiące Gwarancji
              </h3>
              <p className={`text-xs leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                Pisemna umowa gwarancyjna, bezpośredni kontakt z kierownikiem projektu i bezpłatna optymalizacja scen po 30 dniach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className={`py-12 border-t ${
        isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#9CA3AF] font-mono">Następny krok:</div>
            <div className={`text-base font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
              Baza Wiedzy, Odpowiedzi na Pytania Techniczne &amp; FAQ
            </div>
          </div>
          <Link
            to="/faq"
            className="px-6 py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
          >
            <span>Zobacz FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
