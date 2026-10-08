import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { SystemsComparisonSection } from '../components/SystemsComparisonSection.tsx';
import { ShellyShowcase } from '../components/ShellyShowcase.tsx';
import { Layers, CheckCircle2, ArrowRight, AlertTriangle } from 'lucide-react';

export const SystemsPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-[#F9FAFB] text-[#111827]">
      <PageHeader
        badge="Automatyka i sterowanie"
        title="Światło, rolety i ogrzewanie — co pasuje do Twojego domu"
        description="Pokażemy Ci zwykłymi słowami, co wybrać do nowego domu, a co do gotowego mieszkania. Bez kucia, jeśli nie trzeba."
        icon={<Layers className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Lighting & Systems */}
      <section className="py-12 border-b bg-white border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[2px] overflow-hidden border group bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85"
                  alt="Nowoczesny dom jednorodzinny z dużymi przeszkleniami w świetle dziennym"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-[#B87333] border border-white/10">
                  Ciepłe światło jak przy świecach
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-[#111827]">
                  Miękkie światło wieczorem
                </h3>
                <p className="text-xs mt-1.5 leading-[1.65] text-[#4B5563]">
                  Ukryte listwy LED w suficie dają ciepłe światło, które nie razi w oczy.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border group bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=85"
                  alt="Minimalistyczne włączniki ścienne i panele dotykowe"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-sky-400 border border-white/10">
                  Jeden przycisk na ścianie
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-[#111827]">
                  Jeden panel zamiast wielu włączników
                </h3>
                <p className="text-xs mt-1.5 leading-[1.65] text-[#4B5563]">
                  Zamiast 6 klawiszy obok siebie masz jeden panel: światło, temperatura i rolety w jednym miejscu.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border group bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                  alt="Szafa serwerowa RACK z okablowaniem sieciowym"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-emerald-400 border border-white/10">
                  Szafka ze sprzętem
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-[#111827]">
                  Działa po kablu, także bez internetu
                </h3>
                <p className="text-xs mt-1.5 leading-[1.65] text-[#4B5563]">
                  Moduły w rozdzielnicy łączą się kablem, więc światło i rolety działają nawet, gdy padnie internet.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Systems Comparison Matrix Component */}
      <SystemsComparisonSection />

      {/* Deep Dive: Full Capabilities of Shelly System */}
      <ShellyShowcase />

      {/* Detailed Architectural Comparison Guidance */}
      <section className="py-16 border-t bg-white border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
              Kiedy wybrać moduły do rozdzielnicy, a kiedy bez kucia?
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-[1.7] text-[#4B5563]">
              Podpowiemy, co pasuje do Twojej budowy albo gotowego mieszkania.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[2px] border flex flex-col justify-between bg-[#F9FAFB] border-[#E5E7EB]">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B87333] mb-2">
                  Stan surowy / nowa rozdzielnica
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#111827]">
                  Shelly Pro do rozdzielnicy
                </h3>
                <p className="text-xs leading-[1.65] mb-4 text-[#4B5563]">
                  Jeśli budujesz dom od zera. Moduły siedzą w rozdzielnicy, łączą się kablem i mierzą zużycie prądu.
                </p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center gap-2 text-[#374151]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Pewne połączenie po kablu</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#374151]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Ochrona termiczna, przeciążeniowa i przepięciowa</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/kalkulator"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-[#B87333] hover:text-[#A36034]"
              >
                <span>Wypełnij ankietę (2 min)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-[2px] border flex flex-col justify-between bg-[#F9FAFB] border-[#E5E7EB]">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-sky-400 mb-2">
                  System przewodowy
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#111827]">
                  Automatyka po kablu (system przewodowy)
                </h3>
                <p className="text-xs leading-[1.65] mb-4 text-[#4B5563]">
                  Sterowanie prowadzi kabel w ścianie, więc działa stabilnie: bez baterii do wymiany i bez zależności od internetu w domu.
                </p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center gap-2 text-[#374151]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Stabilne połączenie po kablu, bez baterii</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#374151]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Światło, rolety i zamek działają też bez internetu</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/kalkulator"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-sky-400 hover:text-sky-300"
              >
                <span>Wypełnij ankietę (2 min)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="p-6 rounded-[2px] border flex flex-col justify-between bg-[#F9FAFB] border-[#E5E7EB]">
              <div>
                <div className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-400 mb-2">
                  Gotowe mieszkanie / bez kucia
                </div>
                <h3 className="text-lg font-bold mb-3 text-[#111827]">
                  Małe moduły i aplikacja w domu
                </h3>
                <p className="text-xs leading-[1.65] mb-4 text-[#4B5563]">
                  Masz już pomalowane ściany. Małe moduły chowamy pod włącznikami i łączą się z domowym sterownikiem.
                </p>
                <ul className="space-y-2 text-xs">
                  <li className="flex items-center gap-2 text-[#374151]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Montaż bez kucia, z odsysaniem pyłu</span>
                  </li>
                  <li className="flex items-center gap-2 text-[#374151]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Działa w domu, bez obcych serwerów</span>
                  </li>
                </ul>
              </div>
              <Link
                to="/kalkulator"
                className="mt-6 inline-flex items-center gap-1.5 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300"
              >
                <span>Wypełnij ankietę (2 min)</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Local-First Principle Banner */}
          <div className="mt-12 p-6 rounded-[2px] border flex items-start gap-4 bg-[#B87333]/10 border-[#B87333]/30">
            <AlertTriangle className="w-6 h-6 text-[#B87333] shrink-0 mt-0.5" />
            <div>
              <h4 className="text-sm font-bold text-[#111827]">
                Dlaczego dom działa też bez internetu?
              </h4>
              <p className="text-xs mt-1 leading-[1.65] text-[#4B5563]">
                Zwykłe gadżety potrzebują stałego łącza z serwerami producenta. Gdy pada internet, nie zapalą światła. U nas sterowanie działa w domowej sieci, więc światło i ogrzewanie słuchają Cię dalej.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="py-12 border-t bg-[#F9FAFB] border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#9CA3AF] font-mono">Kolejny obszar instalacji:</div>
            <div className="text-base font-bold text-[#111827]">
              Kamery, internet i szafka ze sprzętem
            </div>
          </div>
          <Link
            to="/teletechnika"
            className="btn-engineering-primary gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
          >
            <span>Zobacz szczegóły</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
