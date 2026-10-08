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
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <PageHeader
        badge="Gotowe zestawy"
        title="Gotowe zestawy do domu — ze sprzętem i montażem"
        description="Trzy zakresy: domofon z kamerą i monitoring, gotowe mieszkanie bez kucia oraz pełna rozdzielnica w nowym domu. Każdy z ceną na piśmie."
        icon={<Package className="w-4 h-4 text-copper-600" />}
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Main Packages Section Component */}
      <PackagesSection onSelectPackage={handleSelectPackage} />

      {/* What every package includes */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Co zawiera każdy zestaw?
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Cenę i zakres potwierdzamy na piśmie przed startem.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-stretch">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 rounded-[2px] border bg-gray-50 border-gray-200">
                <div className="w-10 h-10 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-900">
                  Projekt wykonawczy
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Rysunek instalacji i schemat rozdzielnicy.
                </p>
              </div>

              <div className="p-6 rounded-[2px] border bg-gray-50 border-gray-200">
                <div className="w-10 h-10 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center mb-4">
                  <Sparkles className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-900">
                  Czysty montaż
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Zabezpieczamy podłogi i meble, wiercimy z odsysaniem pyłu i sprzątamy po sobie.
                </p>
              </div>

              <div className="p-6 rounded-[2px] border bg-gray-50 border-gray-200">
                <div className="w-10 h-10 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-900">
                  Pomiary odbiorowe
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Sprawdzamy instalację miernikami i dajemy protokół podpisany przez inżyniera.
                </p>
              </div>

              <div className="p-6 rounded-[2px] border bg-gray-50 border-gray-200">
                <div className="w-10 h-10 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center mb-4">
                  <Clock className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold mb-2 text-gray-900">
                  24 miesiące gwarancji
                </h3>
                <p className="text-sm leading-relaxed text-gray-600">
                  Umowa na piśmie, kontakt do kierownika i bezpłatna poprawka ustawień po 30 dniach.
                </p>
              </div>
            </div>

            <div className="relative rounded-[2px] overflow-hidden border border-gray-200 shadow-sm min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
                alt="Ciepłe wnętrze domu po czystym montażu z gwarancją"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-navy-900 text-white border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-copper-200 font-mono">Następny krok:</div>
            <div className="text-base font-bold text-white">
              Pytania i odpowiedzi techniczne
            </div>
          </div>
          <Link
            to="/faq"
            className="gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 inline-flex items-center justify-center py-3.5 px-8 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Zobacz FAQ</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
