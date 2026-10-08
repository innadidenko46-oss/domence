import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { ScenariosSection } from '../components/ScenariosSection.tsx';
import { SlidersHorizontal, ArrowRight, Droplets, LogOut, Moon } from 'lucide-react';

export const ScenariosPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <PageHeader
        badge="Przykłady z życia"
        title="Dom, który robi część rzeczy za Ciebie"
        description="Światło, rolety i ogrzewanie działają same. Sterujesz telefonem, przyciskiem albo głosem. Gdy pęknie wężyk, zawór sam zakręca wodę w kilka sekund."
        icon={<SlidersHorizontal className="w-4 h-4 text-copper-600" />}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Scenarios */}
      <section className="py-16 border-b bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
                  alt="Spokojny poranek i automatyczne światło"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-anthracite-900/80 backdrop-blur-md text-xs font-mono font-semibold text-copper-200 border border-white/10">
                  Budzenie światłem
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-gray-900">
                  Spokojny poranek
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed text-gray-600">
                  Rolety same podnoszą się o ustawionej godzinie, a światło powoli się rozjaśnia.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85"
                  alt="Jasne wnętrze domu z automatycznym oświetleniem i sterowaniem przy wyjściu"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-anthracite-900/80 backdrop-blur-md text-xs font-mono font-semibold text-copper-200 border border-white/10">
                  Przycisk przy drzwiach
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-gray-900">
                  Spokój przy wyjściu
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed text-gray-600">
                  Nie sprawdzasz żelazka ani okien w pośpiechu. Jeden przycisk przy drzwiach gasi światła i uzbraja czujniki.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
                  alt="Łazienka z armaturą narażoną na zalanie — strefa ochrony przed wodą"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-anthracite-900/80 backdrop-blur-md text-xs font-mono font-semibold text-copper-200 border border-white/10">
                  Woda odcięta w kilka sekund
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-gray-900">
                  Ochrona przed zalaniem
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed text-gray-600">
                  Zawór sam zakręca wodę w kilka sekund, gdy czujnik pod pralką wykryje wilgoć.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Scenarios Section Component */}
      <ScenariosSection />

      {/* Fail-Safe Engineering */}
      <section className="py-16 border-t bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Bezpieczny przy awarii — także bez prądu
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Fail-safe znaczy: bezpieczny przy awarii. Dom sam przechodzi w bezpieczny stan, nawet gdy zabraknie prądu.
            </p>
          </div>

          <div className="rounded-[2px] overflow-hidden border border-gray-200 shadow-sm mb-6 h-48">
            <img
              src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85"
              alt="Sterownik automatyki w rozdzielnicy — dom działa bez internetu"
              loading="lazy"
              className="w-full h-full object-cover object-center"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-[2px] border shadow-sm bg-white border-gray-200">
              <div className="w-10 h-10 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center mb-4">
                <Droplets className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Zawór ze sprężyną powrotną
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Stosujemy zawory ze sprężyną. Gdy zabraknie prądu, zawór sam się zamyka i woda nie leci dalej.
              </p>
            </div>

            <div className="p-6 rounded-[2px] border shadow-sm bg-white border-gray-200">
              <div className="w-10 h-10 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center mb-4">
                <LogOut className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Fizyczny przycisk ścienny
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Przycisk przy drzwiach łączy się kablem prosto z rozdzielnicą. Działa od razu, bez telefonu.
              </p>
            </div>

            <div className="p-6 rounded-[2px] border shadow-sm bg-white border-gray-200">
              <div className="w-10 h-10 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center mb-4">
                <Moon className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-gray-900">
                Autonomia lokalna
              </h3>
              <p className="text-sm leading-relaxed text-gray-600">
                Zasady działania siedzą w sterowniku w rozdzielnicy. Bez internetu dom dalej robi swoje.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="py-16 border-t bg-navy-900 text-white border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-copper-200 font-mono">Następny krok:</div>
            <div className="text-base font-bold text-white">
              Gotowe zestawy z ceną na piśmie
            </div>
          </div>
          <Link
            to="/pakiety"
            className="gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 inline-flex items-center justify-center py-3.5 px-8 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Zobacz pakiety</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
