import React from 'react';
import { motion } from 'motion/react';
import { PACKAGES } from '../data/content.ts';
import { CheckCircle2, Clock, ArrowRight } from 'lucide-react';
import { PropertyState } from '../types.ts';
import { Link } from 'react-router-dom';

const PACKAGE_IMAGES: Record<string, { src: string; alt: string }> = {
  security_intercom: {
    src: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85',
    alt: 'Dyskretna kamera monitoringu na elewacji domu',
  },
  retrofit_smart: {
    src: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    alt: 'Jasne gotowe wnętrze z automatyką bez kucia ścian',
  },
  developer_din: {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
    alt: 'Szafa teletechniczna RACK z okablowaniem i rejestratorem',
  },
};

interface PackagesSectionProps {
  onSelectPackage: (type: PropertyState) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {

  return (
    <section id="pakiety" className="py-16 border-t transition-colors bg-[#F3F4F6] border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B87333] mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]" />
            <span>Ceny i gwarancja</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#111827]">
            Gotowe zestawy z montażem i gwarancją
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed max-w-prose mx-auto text-[#4B5563]">
            Sprzęt, montaż i ustawienie plus 24 miesiące gwarancji. Cenę dostajesz na piśmie.
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
                className={`relative rounded-[2px] overflow-hidden flex flex-col justify-between transition-all ${
                  isBestseller
                    ? 'bg-white border-2 border-[#B87333] shadow-md': 'bg-white border border-[#E5E7EB] hover:border-[#D1D5DB] shadow-sm'}`}
              >
                {/* Photo top */}
                {PACKAGE_IMAGES[pkg.id] && (
                  <div className="relative h-40 overflow-hidden">
                    <img
                      src={PACKAGE_IMAGES[pkg.id].src}
                      alt={PACKAGE_IMAGES[pkg.id].alt}
                      loading="lazy"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                  </div>
                )}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
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
                          : 'bg-[#F3F4F6] text-[#4B5563] border-[#E5E7EB]'}`}
                    >
                      {pkg.categoryBadge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-[#6B7280]">
                      <Clock className="w-3.5 h-3.5 text-[#B87333]" />
                      <span>{pkg.timeframe}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-[#111827]">
                    {pkg.title}
                  </h3>
                  <p className="text-sm mt-2 leading-relaxed text-[#4B5563]">
                    {pkg.description}
                  </p>

                  {/* Summary Box */}
                  <div className="mt-3 p-3 pl-4 rounded-[2px] border border-l-4 border-l-[#B87333] text-sm leading-relaxed bg-[#F9FAFB] border-[#E5E7EB] text-[#374151]">
                    <span className="font-bold text-[#B87333] block mb-0.5">Co robimy:</span>
                    {pkg.humanSummary}
                  </div>

                  {/* Price Box */}
                  <div className="mt-6 pb-6 border-b border-[#E5E7EB]">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-[#71717A]">od</span>
                      <span className="font-display text-3xl sm:text-4xl font-extrabold text-[#111827]">
                        {pkg.priceNetto.toLocaleString('pl-PL')}
                      </span>
                      <span className="text-xs font-semibold text-[#71717A]">PLN netto</span>
                    </div>
                    <div className="text-[11px] mt-1 font-mono text-[#6B7280]">
                      {pkg.priceBrutto.toLocaleString('pl-PL')} PLN brutto (z VAT 23%)
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#4B5563]">
                      Co zawiera zestaw:
                    </div>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-[#374151]">
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
                      : 'bg-[#F3F4F6] hover:bg-[#E5E7EB] text-[#111827] border-[#D1D5DB]'}`}
                >
                  <span>Wybierz pakiet</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Custom Solution Note */}
        <div className="mt-12 text-center">
          <p className="text-xs text-[#6B7280]">
            Masz pompę ciepła, panele albo nietypową bramę?{' '}
            <Link to="/kalkulator" className="text-[#B87333] underline hover:text-[#A36034]">
              Wypełnij ankietę (2 min)
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};
