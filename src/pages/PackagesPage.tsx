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
        badge="Pakiety Wdrożeniowe"
        title="Pakiety automatyki i teletechniki dla domu"
        description="Trzy gotowe zakresy: wideodomofon z monitoringiem, retrofit bez kucia oraz pełna rozdzielnica modułowa. Każdy z pisemną wyceną ryczałtową."
        icon={<Package className="w-4 h-4 text-[#B87333]" />}
        image={`${import.meta.env.BASE_URL}images/rack_cabinet_clean.svg`}
      />

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
