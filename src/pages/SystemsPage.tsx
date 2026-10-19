import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { SystemsComparisonSection } from '../components/SystemsComparisonSection.tsx';
import { ShellyShowcase } from '../components/ShellyShowcase.tsx';
import { LightingAtmosphereShowcase } from '../components/LightingAtmosphereShowcase.tsx';
import { Layers, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';

export const SystemsPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <PageHeader
        badge="Automatyka i sterowanie"
        title="Światło, rolety i ogrzewanie — co pasuje do Twojego domu"
        description="Pokażemy Ci zwykłymi słowami, co wybrać do nowego domu, a co do gotowego mieszkania. Bez kucia, jeśli nie trzeba."
        icon={<Layers className="w-4 h-4 text-petrol-700" />}
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85"
      />

      {/* The first decision: modules in the switchboard or behind switches */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Kiedy wybrać moduły do rozdzielnicy, a kiedy bez kucia?
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Podpowiemy, co pasuje do Twojej budowy albo gotowego mieszkania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl">
            <div className="p-6 rounded-[2px] border flex flex-col justify-between bg-white border-gray-200">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                  Stan surowy / nowa rozdzielnica
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Moduły w rozdzielnicy
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-gray-600">
                  Jeśli budujesz dom od zera. Moduły siedzą w rozdzielnicy, łączą się kablem i mierzą zużycie prądu.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-petrol-700 shrink-0" />
                    <span>Pewne połączenie po kablu</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-petrol-700 shrink-0" />
                    <span>Moduły same się wyłączają przy przegrzaniu i przeciążeniu</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/zapytanie"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
              >
                <span>Opisz swój dom (2 min)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-[2px] border flex flex-col justify-between bg-white border-gray-200">
              <div>
                <div className="text-xs font-bold uppercase tracking-wider text-amber-700 mb-2">
                  Gotowe mieszkanie / bez kucia
                </div>
                <h3 className="text-lg font-bold mb-3 text-gray-900">
                  Małe moduły i aplikacja w domu
                </h3>
                <p className="text-sm leading-relaxed mb-4 text-gray-600">
                  Masz już pomalowane ściany. Małe moduły chowamy pod włącznikami i łączą się z domowym sterownikiem.
                </p>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-petrol-700 shrink-0" />
                    <span>Montaż bez kucia, z odsysaniem pyłu</span>
                  </li>
                  <li className="flex items-center gap-2 text-gray-700">
                    <CheckCircle2 className="w-3.5 h-3.5 text-petrol-700 shrink-0" />
                    <span>Działa w domu, bez obcych serwerów</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/zapytanie"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 hover:text-amber-800"
              >
                <span>Opisz swój dom (2 min)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Local-First Principle Banner */}
          <div className="mt-12 p-6 pl-7 rounded-[2px] border border-l-4 border-l-amber-500 flex items-start gap-4 bg-amber-500/10 border-amber-500/30">
            <AlertTriangle className="w-6 h-6 text-petrol-700 shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-gray-900">
                Dlaczego dom działa też bez internetu?
              </h4>
              <p className="text-sm mt-1 leading-relaxed text-gray-600">
                Zwykłe gadżety potrzebują stałego łącza z serwerami producenta. Gdy pada internet, nie zapalą światła. U nas sterowanie działa w domowej sieci, więc światło i ogrzewanie słuchają Cię dalej.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Systems Comparison Matrix Component */}
      <SystemsComparisonSection />

      {/* Deep Dive: Full Capabilities of Shelly System */}
      <ShellyShowcase />

      {/* How the light changes through the day */}
      <LightingAtmosphereShowcase />


      {/* Next Area Banner */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-petrol-900 text-white border-petrol-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-amber-200">Kolejny obszar instalacji:</div>
            <div className="text-base font-bold text-white">
              Kamery, wideodomofon i szafka ze sprzętem
            </div>
          </div>
          <Link
            to="/teletechnika"
            className="gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 inline-flex items-center justify-center py-3.5 px-8 rounded-[2px] bg-amber-400 hover:bg-amber-300 text-petrol-950 font-semibold text-sm transition-colors"
          >
            <span>Przejdź do kamer i domofonów</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
