import React from 'react';
import { motion } from 'motion/react';
import { PACKAGES } from '../data/content.ts';
import { Check, Clock, ArrowRight } from 'lucide-react';
import { PropertyState } from '../types.ts';
import { Link } from 'react-router-dom';

interface PackagesSectionProps {
  onSelectPackage: (type: PropertyState) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {
  const isDay = true;

  return (
    <section id="pakiety" className={`py-24 border-t transition-colors ${
      isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B87333] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]" />
            <span>Kalkulacja Kosztów • Gwarancja Stałej Ceny</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-5xl font-bold tracking-tight ${
            isDay ? 'text-[#111827]' : 'text-[#F3F4F6]'
          }`}>
            Pakiety wdrożeniowe „pod klucz”
          </h2>
          <p className={`mt-4 text-sm sm:text-base ${
            isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
          }`}>
            Osprzęt Shelly i Hikvision + montaż DOMENCE + rozdzielnica + 24 miesiące gwarancji.
          </p>
        </div>

        {/* 3 Packages Cards - Strictly max 4px radius */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-stretch">
          {PACKAGES.map((pkg) => {
            const isBestseller = pkg.badgeType === 'bestseller';
            return (
              <motion.div
                key={pkg.id}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.15 }}
                className={`relative rounded-[2px] p-7 sm:p-8 flex flex-col justify-between transition-all ${
                  isBestseller
                    ? isDay
                      ? 'bg-white border-2 border-[#B87333] shadow-md'
                      : 'bg-[#27272A] border-2 border-[#B87333] shadow-md'
                    : isDay
                      ? 'bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] shadow-sm'
                      : 'bg-[#202024] border border-[#2E2E33] hover:border-[#3F3F46] shadow-sm'
                }`}
              >
                {/* Top Bestseller Badge */}
                {isBestseller && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-[2px] bg-[#B87333] text-white font-mono font-bold text-[10px] uppercase tracking-wider shadow-sm">
                    Bestseller: Bez Kucia Ścian
                  </div>
                )}

                <div>
                  {/* Category & Timeframe */}
                  <div className="flex justify-between items-center mb-4 mt-1">
                    <span
                      className={`text-[10px] font-mono font-semibold uppercase px-2.5 py-0.5 rounded-[2px] border ${
                        isBestseller
                          ? 'bg-[#B87333]/15 text-[#B87333] border-[#B87333]/30'
                          : isDay
                            ? 'bg-[#F3F4F6] text-[#4B5563] border-[#E5E7EB]'
                            : 'bg-white/5 text-[#A1A1AA] border-white/10'
                      }`}
                    >
                      {pkg.categoryBadge}
                    </span>
                    <div className={`flex items-center gap-1.5 text-xs font-mono ${
                      isDay ? 'text-[#6B7280]' : 'text-[#71717A]'
                    }`}>
                      <Clock className="w-3.5 h-3.5 text-[#B87333]" />
                      <span>{pkg.timeframe}</span>
                    </div>
                  </div>

                  <h3 className={`font-display text-xl sm:text-2xl font-bold ${
                    isDay ? 'text-[#111827]' : 'text-[#F4F4F5]'
                  }`}>
                    {pkg.title}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${
                    isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
                  }`}>
                    {pkg.description}
                  </p>

                  {/* Summary Box */}
                  <div className={`mt-3 p-3 rounded-[2px] border text-[11px] leading-relaxed ${
                    isDay
                      ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#374151]'
                      : 'bg-[#18181B] border-white/5 text-[#D4D4D8]'
                  }`}>
                    <span className="font-bold text-[#B87333] block mb-0.5">Co robimy:</span>
                    {pkg.humanSummary}
                  </div>

                  {/* Price Box */}
                  <div className={`mt-6 pb-6 border-b ${
                    isDay ? 'border-[#E5E7EB]' : 'border-[#2E2E33]'
                  }`}>
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-[#71717A]">od</span>
                      <span className={`font-display text-3xl sm:text-4xl font-extrabold ${
                        isDay ? 'text-[#111827]' : 'text-[#FFFFFF]'
                      }`}>
                        {pkg.priceNetto.toLocaleString('pl-PL')}
                      </span>
                      <span className="text-xs font-semibold text-[#71717A]">PLN netto</span>
                    </div>
                    <div className={`text-[11px] mt-1 font-mono ${
                      isDay ? 'text-[#6B7280]' : 'text-[#A1A1AA]'
                    }`}>
                      {pkg.priceBrutto.toLocaleString('pl-PL')} PLN brutto (z VAT 23%)
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-2.5">
                    <div className={`text-[11px] font-mono font-bold uppercase tracking-wider ${
                      isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
                    }`}>
                      Zakres wdrożenia:
                    </div>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs">
                        <Check className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                        <span className={`leading-snug ${isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'}`}>
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Button - Solid Flat Architectural CTA */}
                <button
                  onClick={() => onSelectPackage(pkg.recommendedFor)}
                  className={`mt-8 w-full py-3.5 rounded-[2px] font-bold text-xs uppercase tracking-wider text-center transition-colors flex items-center justify-center gap-2 cursor-pointer border ${
                    isBestseller
                      ? 'bg-[#B87333] hover:bg-[#A36034] text-white border-[#C27A4E]/40'
                      : isDay
                        ? 'bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#111827] border-[#D1D5DB]'
                        : 'bg-[#27272A] hover:bg-[#3F3F46] text-[#F4F4F5] border-white/10'
                  }`}
                >
                  <span>Wybierz pakiet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution Note */}
        <div className="mt-12 text-center">
          <p className={`text-xs ${isDay ? 'text-[#6B7280]' : 'text-[#71717A]'}`}>
            Potrzebujesz integracji z pompą ciepła, modułami Shelly Pro, monitoringiem 4K lub nietypowym systemem bramowym?{' '}
            <Link to="/kalkulator" className="text-[#B87333] underline hover:text-[#A36034]">
              Wyceń w kalkulatorze
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};
