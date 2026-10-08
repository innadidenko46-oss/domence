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
    alt: 'Jasne gotowe wnętrze z automatyką bez kucia ścian',
  },
  developer_din: {
    src: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
    alt: 'Szafa teletechniczna RACK z okablowaniem i rejestratorem',
  },
};

interface PackagesSectionProps {
  onSelectPackage: (type: PropertyState) => void;
}

export const PackagesSection: React.FC<PackagesSectionProps> = ({ onSelectPackage }) => {

  return (
    <section id="pakiety" className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t transition-colors bg-gray-100 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-600 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-copper-600" />
            <span>Ceny i gwarancja</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Gotowe zestawy z montażem i gwarancją
          </h2>
          <p className="mt-4 text-sm sm:text-base leading-relaxed max-w-prose mx-auto text-gray-600">
            Sprzęt, montaż i ustawienie plus 24 miesiące gwarancji. Cenę dostajesz na piśmie.
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
                    ? 'bg-white border-2 border-copper-500 shadow-md': 'bg-white border border-gray-200 hover:border-gray-300 shadow-sm'}`}
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
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
                  </div>
                )}
                <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                {/* Top Bestseller Badge */}
                {isBestseller && (
                  <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-[2px] bg-copper-600 text-white font-mono font-semibold text-sm shadow-sm">
                    Bestseller: Bez Kucia Ścian
                  </div>
                )}

                <div>
                  {/* Category & Timeframe */}
                  <div className="flex justify-between items-center mb-4 mt-1">
                    <span
                      className={`text-xs font-mono font-semibold uppercase px-2.5 py-0.5 rounded-[2px] border ${
                        isBestseller
                          ? 'bg-copper-500/15 text-copper-600 border-copper-500/30'
                          : 'bg-gray-100 text-gray-600 border-gray-200'}`}
                    >
                      {pkg.categoryBadge}
                    </span>
                    <div className="flex items-center gap-1.5 text-xs font-mono text-gray-500">
                      <Clock className="w-3.5 h-3.5 text-copper-600" />
                      <span>{pkg.timeframe}</span>
                    </div>
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
                    {pkg.title}
                  </h3>
                  <p className="text-sm mt-2 leading-relaxed text-gray-600">
                    {pkg.description}
                  </p>

                  {/* Summary Box */}
                  <div className="mt-3 p-3 pl-4 rounded-[2px] border border-l-4 border-l-copper-500 text-sm leading-relaxed bg-gray-50 border-gray-200 text-gray-700">
                    <span className="font-bold text-copper-600 block mb-0.5">Co robimy:</span>
                    {pkg.humanSummary}
                  </div>

                  {/* Price Box */}
                  <div className="mt-6 pb-6 border-b border-gray-200">
                    <div className="flex items-baseline gap-1.5">
                      <span className="text-xs text-gray-500">od</span>
                      <span className="font-display text-3xl sm:text-4xl font-extrabold tabular-nums text-gray-900">
                        {pkg.priceNetto.toLocaleString('pl-PL')}
                      </span>
                      <span className="text-xs font-semibold text-gray-500">PLN netto</span>
                    </div>
                    <div className="text-xs mt-1 font-mono text-gray-500">
                      {pkg.priceBrutto.toLocaleString('pl-PL')} PLN brutto (z VAT 23%)
                    </div>
                  </div>

                  {/* Features List */}
                  <div className="mt-6 space-y-2.5">
                    <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-600">
                      Co zawiera zestaw:
                    </div>
                    {pkg.features.map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed text-gray-700">
                          {feat}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Select Button - Solid Flat Architectural CTA */}
                <button
                  onClick={() => onSelectPackage(pkg.recommendedFor)}
                  className={`mt-8 w-full py-3.5 rounded-[2px] font-semibold text-sm text-center transition-colors flex items-center justify-center gap-2 cursor-pointer border ${
                    isBestseller
                      ? 'bg-copper-600 hover:bg-copper-700 text-white border-copper-400/40'
                      : 'bg-gray-100 hover:bg-gray-200 text-gray-900 border-gray-300'}`}
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
          <p className="text-xs text-gray-500">
            Masz pompę ciepła, panele albo nietypową bramę?{' '}
            <Link to="/kalkulator" className="text-copper-600 underline hover:text-copper-800">
              Dobierz zestaw (2 min)
            </Link>
          </p>
        </div>

      </div>
    </section>
  );
};
