import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { PackagesSection } from '../components/PackagesSection.tsx';
import { Package, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Clock } from 'lucide-react';
import { PropertyState } from '../types.ts';

export const PackagesPage: React.FC = () => {
  const navigate = useNavigate();

  const handleSelectPackage = (propertyState: PropertyState) => {
    navigate(`/kalkulator?state=${propertyState}`);
  };

  return (
    <div className="transition-colors duration-300 bg-[#F9FAFB] text-[#111827]">
      <PageHeader
        badge="Pakiety Wdrożeniowe"
        title="Pakiety automatyki i teletechniki dla domu"
        description="Trzy gotowe zakresy: wideodomofon z monitoringiem, retrofit bez kucia oraz pełna rozdzielnica modułowa. Każdy z pisemną wyceną ryczałtową."
        icon={<Package className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Main Packages Section Component */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* What every package includes */}
      <section className="py-16 border-t bg-white border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
              Co gwarantuje każdy pakiet DOMENCE?
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-[1.7] text-[#4B5563]">
              Stała, pisemna wycena ryczałtowa — zakres i wyłączenia potwierdzamy pisemnie przed startem.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center mb-4">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2 text-[#111827]">
                Projekt wykonawczy
              </h3>
              <p className="text-xs leading-[1.65] text-[#4B5563]">
                Indywidualny rzut instalacji, schemat jednokreskowy rozdzielnicy i bilans mocy urządzeń.
              </p>
            </div>

            <div className="p-6 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="w-10 h-10 rounded-[2px] bg-sky-500/20 text-sky-400 flex items-center justify-center mb-4">
                <Sparkles className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2 text-[#111827]">
                Czysty montaż
              </h3>
              <p className="text-xs leading-[1.65] text-[#4B5563]">
                Zabezpieczenie posadzek i mebli, odkurzanie przemysłowe z filtrem HEPA i estetyczne wykończenie.
              </p>
            </div>

            <div className="p-6 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="w-10 h-10 rounded-[2px] bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2 text-[#111827]">
                Pomiary odbiorowe
              </h3>
              <p className="text-xs leading-[1.65] text-[#4B5563]">
                Pomiary impedancji pętli zwarcia, testy wyłączników RCD oraz protokół podpisany przez inżyniera z uprawnieniami SEP.
              </p>
            </div>

            <div className="p-6 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="w-10 h-10 rounded-[2px] bg-purple-500/20 text-purple-400 flex items-center justify-center mb-4">
                <Clock className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold mb-2 text-[#111827]">
                24 miesiące gwarancji
              </h3>
              <p className="text-xs leading-[1.65] text-[#4B5563]">
                Pisemna umowa gwarancyjna, bezpośredni kontakt z kierownikiem projektu i bezpłatna optymalizacja scen po 30 dniach.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="py-12 border-t bg-[#F9FAFB] border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#9CA3AF] font-mono">Następny krok:</div>
            <div className="text-base font-bold text-[#111827]">
              Baza Wiedzy, Odpowiedzi na Pytania Techniczne &amp; FAQ
            </div>
          </div>
          <Link
            to="/faq"
            className="btn-engineering-primary gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
          >
            <span>Zobacz FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
