import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { MultiroomGardenSection } from '../components/MultiroomGardenSection.tsx';
import { ArrowRight, Film, Tv } from 'lucide-react';

export const MultiroomGardenPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <PageHeader
        badge="Kino w salonie"
        title="Kino w salonie — jeden przycisk"
        description="Rolety same się zamykają, światło gaśnie, a dzwonek z furtki słyszysz od razu. Głośników nie montujemy — ale Twoje podepniemy do scen."
        icon={<Film className="w-4 h-4 text-copper-600" />}
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Audio & Cinema */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
                  alt="Ciepły salon wieczorem przygotowany na seans filmowy"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-[2px] bg-black/80 backdrop-blur-md text-xs font-mono font-semibold text-copper-200 border border-white/10">
                  Kino jednym przyciskiem
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-bold text-lg text-gray-900">
                  Wieczór filmowy bez szukania pilotów
                </h3>
                <p className="text-sm mt-3 leading-relaxed text-gray-600">
                  Rolety same się zamykają, światło gaśnie do 5%, a dźwięk wypełnia pokój.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                  alt="Jasny salon z panelem ściennym i podglądem furtki"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3.5 left-3.5 px-3 py-1 rounded-[2px] bg-black/80 backdrop-blur-md text-xs font-mono font-semibold text-copper-200 border border-white/10">
                  Dzwonek z furtki
                </span>
              </div>
              <div className="p-7">
                <h3 className="font-bold text-lg text-gray-900">
                  Dzwonek słyszysz od razu — i widzisz, kto przyszedł
                </h3>
                <p className="text-sm mt-3 leading-relaxed text-gray-600">
                  Gdy kurier dzwoni do furtki, na panelu na ścianie i w telefonie widzisz, kto przyszedł, i otwierasz jednym dotknięciem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Multiroom Section Component */}
      <MultiroomGardenSection />

      {/* Deep-dive into Cinema & Multiroom Logic */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Jeden przycisk do filmu: rolety i światło
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Koniec z kilkoma pilotami. Rolety i światło ustawiają się same.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 max-w-3xl">
            <div className="p-7 rounded-[2px] border shadow-sm bg-white border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center">
                  <Film className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    „Seans” — jeden przycisk
                  </h3>
                  <span className="text-xs text-copper-600 font-mono font-semibold">Pełna koordynacja salonu</span>
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 text-gray-600">
                Po wybraniu sceny kinowej (przyciskiem na ścianie, pilotem lub ze smartfona):
              </p>
              <ul className="space-y-2.5 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-600" />
                  <span>Rolety i żaluzje zjeżdżają w 100%, eliminując wszelkie odblaski światła dziennego.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-600" />
                  <span>Główne oświetlenie wygasza się, a subtelne taśmy LED COB przy podłodze ściemniają się do 5%.</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-copper-600" />
                  <span>Rekuperacja przechodzi w bezszelestny tryb nocny, aby szum nie zakłócał dialogów.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Dedicated Home Multimedia Feature Card */}
          <div className="mt-8 p-8 rounded-[2px] border shadow-sm bg-white border-gray-200">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-gray-200">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center shrink-0">
                  <Tv className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Sceny kinowe — ustawiamy od początku do końca
                  </h3>
                  <div className="text-xs text-copper-600 font-mono mt-0.5">
                    Automatyka rolet blackout • Sceny nastrojowe • Jeden przycisk
                  </div>
                </div>
              </div>
              <Link
                to="/kalkulator"
                className="btn-engineering-primary text-center shrink-0 shadow-sm focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
              >
                Dobierz zestaw (2 min)
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-navy-900 text-white border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-copper-200 font-mono">Kolejny obszar instalacji:</div>
            <div className="text-base font-bold text-white">
              Przykłady z życia wzięte
            </div>
          </div>
          <Link
            to="/scenariusze"
            className="gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 inline-flex items-center justify-center py-3.5 px-8 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Zobacz scenariusze</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
