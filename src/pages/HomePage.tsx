import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowRight, CheckCircle2, Lock, Cpu } from 'lucide-react';
import { ProcessSection } from '../components/ProcessSection.tsx';
import { LightingAtmosphereShowcase } from '../components/LightingAtmosphereShowcase.tsx';
import { AppsShowcaseSection } from '../components/AppsShowcaseSection.tsx';
import { AiFutureTechSection } from '../components/AiFutureTechSection.tsx';
import { TopSellingScenariosSection } from '../components/TopSellingScenariosSection.tsx';

export const HomePage: React.FC = () => {

  const chapters = [
    {
      id: 'systemy',
      path: '/systemy',
      title: 'Sterowanie domem: światło, rolety, ogrzewanie',
      subtitle: 'Włączniki i telefon • Z kablami albo bez kucia',
      description:
        'Światło, rolety i ogrzewanie sterowane z włączników na ścianie i z telefonu. Do nowego domu i do gotowego mieszkania.',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Minimalistyczne wnętrze z ciepłym światłem smart home',
    },
    {
      id: 'teletechnika',
      path: '/teletechnika',
      title: 'Kamery, domofon z kamerą i internet w domu',
      subtitle: 'Kolor w nocy • Rozmowa z furtki w telefonie • Szafka ze sprzętem',
      description:
        'Kamera odróżnia człowieka od kota i nie budzi Cię w nocy bez powodu. Nagrania zostają w domu, furtkę otworzysz z telefonu, a internet działa w każdym pokoju.',
      image:
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Dyskretna kamera zewnętrzna na nowoczesnej elewacji o zmierzchu',
    },
    {
      id: 'multimedia-kino',
      path: '/multimedia',
      title: 'Kino w salonie — jeden przycisk',
      subtitle: 'Rolety • Światło • Dzwonek z furtki',
      description:
        'Do filmu rolety same się zamykają, a światło gaśnie. Dzwonek z furtki słyszysz od razu. Masz już głośniki? Podepniemy je do scen.',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Salon wieczorem przygotowany na seans: opuszczone rolety i ciepłe światło',
    },
    {
      id: 'scenariusze',
      path: '/scenariusze',
      title: 'Dom, który sam gasi światło i pilnuje wody',
      subtitle: 'Wyjście z domu • Woda • Światło w nocy',
      description:
        'Jeden przycisk przy drzwiach gasi światła i odcina żelazko. Czujnik pod pralką sam zakręca wodę, zanim zaleje podłogę.',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Ciepłe, przytulne wnętrze o poranku ze zautomatyzowanym oświetleniem',
    },
    {
      id: 'pakiety',
      path: '/pakiety',
      title: 'Gotowe zestawy z montażem',
      subtitle: 'Sprzęt i montaż • Cena na piśmie • Gwarancja',
      description:
        'Sprawdzone zestawy: do gotowego mieszkania bez kucia ścian i do nowego domu z pełną rozdzielnicą. Z wyceną na piśmie.',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Zbliżenie układów elektronicznych na płytce drukowanej',
    },
    {
      id: 'faq',
      path: '/faq',
      title: 'Pytania i odpowiedzi',
      subtitle: 'Czy działa bez internetu • Ile to kosztuje • Czy obsłuży to babcia',
      description:
        'Sprawdź, co dzieje się bez internetu i bez prądu, czy trzeba kuć ściany i czy każdy domownik da sobie radę z obsługą.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Czyste biuro projektowe z planami architektonicznymi i tabletem',
    },
    {
      id: 'kalkulator',
      path: '/kalkulator',
      title: 'Krótka ankieta o Twoim domu',
      subtitle: 'Wybierz metraż i potrzeby • Oddzwonimy z propozycją',
      description:
        'Trzy pytania i kontakt. Zajmie Ci to około 2 minut.',
      image:
        'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Jasny salon z nowoczesnym oświetleniem i sterowaniem domem',
    },
  ];


  return (
    <div className="transition-colors duration-500 bg-white text-gray-800">
      
      {/* Hero */}
      <section className="relative flex items-center pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 hero-stagger">
            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-[-0.015em] leading-[1.05] text-gray-950">
              Nowoczesny dom, którym sterujesz telefonem.{' '}
              <span className="text-copper-600">
                Działa też bez internetu.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600">
              Światło, rolety, ogrzewanie i kamery — montujemy, ustawiamy i pokazujemy, jak z tego korzystać.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/kalkulator"
                className="btn-engineering-primary shadow-sm active:scale-[0.98] text-center focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
              >
                <span>Dobierz zestaw (2 min)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/systemy"
                className="btn-secondary shadow-sm focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
              >
                <span>Zobacz, jak to działa</span>
              </Link>
            </div>

            {/* Key Trust Badges */}
            <div className="mt-10 pt-6 border-t grid grid-cols-2 gap-4 text-sm border-gray-200 text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                <span>Praca w domu, bez obcych serwerów</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                <span>Bez abonamentu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                <span>Bezpieczna instalacja</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0" />
                <span>Czysty montaż</span>
              </div>
            </div>
          </div>

          <div className="hidden lg:block lg:col-span-5 hero-media">
            <div className="rounded-[2px] overflow-hidden border border-gray-200 shadow-xl aspect-[4/5]">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-wideodomofon.jpg`}
                alt="Dłoń z telefonem pokazującym obraz z kamery przy furtce, obok drzwi wejściowych panel sterowania domem"
                width={1136}
                height={1408}
                fetchPriority="high"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Solutions Grid with High-Res Photography */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Obszary instalacji — co montujemy
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Do każdego miejsca w domu dobieramy konkretny zestaw: na przykład do wejścia — domofon z kamerą i 2 kamery z zapisem w domu.
            </p>
          </div>

          {/* Bento rhythm on desktop: 2 wide, 3 narrow, 2 wide */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {chapters.map((ch, i) => {
              const wide = i < 2 || i > 4;
              return (
                <Link
                  key={ch.id}
                  to={ch.path}
                  className={`focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 group rounded-[2px] border overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] bg-white border-gray-200 hover:border-copper-400 ${
                    wide ? 'lg:col-span-3' : 'lg:col-span-2'
                  } ${i === chapters.length - 1 ? 'md:col-span-2 lg:col-span-3' : ''}`}
                >
                  {/* Photography Header */}
                  <div>
                    <div className={`relative overflow-hidden bg-gray-900 ${wide ? 'h-52 lg:h-64' : 'h-44 lg:h-48'}`}>
                      <img
                        src={ch.image}
                        alt={ch.imageAlt}
                        className="w-full h-full object-cover object-center duration-700 filter brightness-85 group-hover:brightness-100"
                        loading="lazy"
                      />
                      
                    </div>

                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold transition-colors text-gray-900 group-hover:text-copper-800">
                        {ch.title}
                      </h3>
                      <div className="text-xs font-semibold mt-1 text-copper-600">
                        {ch.subtitle}
                      </div>

                      <p className="text-sm mt-3 leading-relaxed text-gray-600">
                        {ch.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="pt-4 border-t flex items-center justify-between text-xs font-bold transition-colors border-gray-200 text-copper-600 group-hover:text-copper-800">
                      <span>Zobacz szczegóły</span>
                      <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why DOMENCE: asymmetric photo mosaic + numbered pillars */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Photo mosaic: one tall image, two stacked */}
          <div className="order-2 lg:order-1 lg:col-span-6 grid grid-cols-2 grid-rows-2 gap-3 h-80 sm:h-[28rem] lg:h-[34rem]">
            <div className="row-span-2 rounded-[2px] overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=900&q=85"
                alt="Szafa serwerowa z rejestratorem — nagrania zostają w domu"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-[2px] overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=85"
                alt="Bezpieczny dom o zmierzchu z włączonym oświetleniem"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-[2px] overflow-hidden shadow-md">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&q=85"
                alt="Czysta łazienka po montażu bez kurzu i kucia"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Jak montujemy i dlaczego to bezpieczne
            </h2>
            <p className="mt-3 text-base leading-relaxed max-w-prose text-gray-600">
              Trzy rzeczy, które robimy inaczej niż zestawy ze sklepu.
            </p>

            <ol className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {[
                {
                  icon: Lock,
                  title: 'Prywatność i działanie bez internetu',
                  text: 'Obraz z kamer i dane zostają w Twoim domu. Nic nie wysyłamy na obce serwery i nie płacisz miesięcznego abonamentu.',
                },
                {
                  icon: Cpu,
                  title: 'Porządna rozdzielnica i ochrona sprzętu',
                  text: 'Każdy bezpiecznik ma jasny opis i schemat. Ograniczniki przepięć chronią pompę ciepła, sprzęt kuchenny, telewizory i komputery przed burzą.',
                },
                {
                  icon: Wrench,
                  title: 'Czysty montaż bez kurzu',
                  text: 'Pracujemy też w gotowych, umeblowanych domach. Wiercimy z odsysaniem pyłu, zabezpieczamy podłogi i sprzątamy po sobie.',
                },
              ].map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <li key={pillar.title} className="py-7 grid grid-cols-[auto_1fr] gap-x-5">
                    <span className="font-display text-sm font-semibold tabular-nums text-copper-600 pt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="flex items-center gap-2.5 text-lg font-bold text-gray-900">
                        <Icon className="w-5 h-5 text-copper-500 shrink-0" aria-hidden="true" />
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 max-w-prose">
                        {pillar.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* TOP SELLING SCENARIOS (TRV AIRING, HAZARD LEAK CUT, SOLAR 3EM, CAR WELCOME) */}
      <TopSellingScenariosSection />

      {/* INTERACTIVE 24H LIGHTING & ATMOSPHERE SHOWCASE (DAY VS NIGHT) */}
      <LightingAtmosphereShowcase />


      {/* Mobile Apps & Control Showcase (Dom, Wideodomofony) */}
      <AppsShowcaseSection />

      {/* 5-Step Process */}
      <ProcessSection />

      {/* Technical deep-dive: Hikvision and Shelly features */}
      <AiFutureTechSection />

      {/* Direct Contact Banner */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-t overflow-hidden bg-navy-900 text-white border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Planujesz budowę albo remont?
            </h2>
            <p className="text-sm text-gray-300 mt-2 max-w-xl">
              Napisz, co chcesz mieć w domu. Oddzwonimy z konkretną propozycją — zwykle w 24 godziny robocze (pon–pt, 8:00–18:00).
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/kalkulator"
                className="btn-engineering-primary shadow-lg shadow-copper-500/20 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
              >
                <span>Dobierz zestaw (2 min)</span>
              </Link>

              <Link
                to="/kontakt"
                className="min-h-11 inline-flex items-center px-6 py-3.5 rounded-[2px] bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
              >
                Zapytaj inżyniera
              </Link>
            </div>
            <p className="text-xs text-gray-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). Bez spamu.</span>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
