import React from 'react';
import { Link } from 'react-router-dom';
import {
  Layers,
  Network,
  Volume2,
  Sparkles,
  Wrench,
  Package,
  BookOpen,
  Calculator,
  ArrowRight,
  CheckCircle2,
  Lock,
  Cpu,
} from 'lucide-react';
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
      subtitle: 'Włączniki i telefon • Z kablami albo bez kucia',
      description:
        'Światło, rolety i ogrzewanie sterowane z włączników na ścianie i z telefonu. Do nowego domu i do gotowego mieszkania.',
      icon: Layers,
      badge: 'Sterowanie & Automatyka',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Minimalistyczne wnętrze z ciepłym światłem smart home',
    },
    {
      id: 'teletechnika',
      path: '/teletechnika',
      title: 'Kamery, domofon z kamerą i internet w domu',
      subtitle: 'Kolor w nocy • Rozmowa z furtki w telefonie • Szafka ze sprzętem',
      description:
        'Kamera odróżnia człowieka od kota i nie budzi Cię w nocy bez powodu. Nagrania zostają w domu, furtkę otworzysz z telefonu, a internet działa w każdym pokoju.',
      icon: Network,
      badge: 'Prywatność & Zero Abonamentów',
      image:
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Dyskretna kamera zewnętrzna na nowoczesnej elewacji o zmierzchu',
    },
    {
      id: 'multimedia-kino',
      path: '/multimedia',
      title: 'Muzyka w pokojach i kino w salonie',
      subtitle: 'Głośniki w suficie • Jeden przycisk do filmu',
      description:
        'Muzyka gra tam, gdzie jesteś. Do filmu rolety same się zamykają, a światło gaśnie. Gdy ktoś dzwoni do furtki, dźwięk sam się ścisza.',
      icon: Volume2,
      badge: 'Multimedia & Atmosfera',
      image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Domowa sala kinowa z nastrojowym oświetleniem i dźwiękiem surround',
    },
    {
      id: 'scenariusze',
      path: '/scenariusze',
      title: 'Dom, który sam gasi światło i pilnuje wody',
      subtitle: 'Wyjście z domu • Woda • Światło w nocy',
      description:
        'Jeden przycisk przy drzwiach gasi światła i odcina żelazko. Czujnik pod pralką sam zakręca wodę, zanim zaleje podłogę.',
      icon: Sparkles,
      badge: 'Ergonomia & Bezpieczeństwo',
      image:
        'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Ciepłe, przytulne wnętrze o poranku ze zautomatyzowanym oświetleniem',
    },
    {
      id: 'pakiety',
      path: '/pakiety',
      title: 'Gotowe zestawy z montażem',
      subtitle: 'Sprzęt i montaż • Cena na piśmie • Gwarancja',
      description:
        'Sprawdzone zestawy: do gotowego mieszkania bez kucia ścian i do nowego domu z pełną rozdzielnicą. Z wyceną na piśmie.',
      icon: Package,
      badge: 'Pakiety & Wyceny',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Zbliżenie układów elektronicznych na płytce drukowanej',
    },
    {
      id: 'faq',
      path: '/faq',
      title: 'Pytania i odpowiedzi',
      subtitle: 'Czy działa bez internetu • Ile to kosztuje • Czy obsłuży to babcia',
      description:
        'Sprawdź, co dzieje się bez internetu i bez prądu, czy trzeba kuć ściany i czy każdy domownik da sobie radę z obsługą.',
      icon: BookOpen,
      badge: 'Wiedza & FAQ',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Czyste biuro projektowe z planami architektonicznymi i tabletem',
    },
    {
      id: 'kalkulator',
      path: '/kalkulator',
      title: 'Krótka ankieta o Twoim domu',
      subtitle: 'Wybierz metraż i potrzeby • Oddzwonimy z propozycją',
      description:
        'Trzy pytania i kontakt. Zajmie Ci to około 2 minut.',
      icon: Calculator,
      badge: 'Ankieta (2 min)',
      image:
        'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Jasny salon z nowoczesnym oświetleniem i sterowaniem domem',
    },
  ];


  return (
    <div className="transition-colors duration-500 bg-white text-slate-800">
      
      {/* Hero Section with Dreamy Ambient Background */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 overflow-hidden">
        {/* Dreamy Background effects & Photography */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="Nowoczesny dom jednorodzinny z dużymi przeszkleniami"
            className="w-full h-full object-cover object-center opacity-15"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/95 to-slate-50/80" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[2px] text-xs font-semibold mb-6 backdrop-blur-md border bg-[#B87333]/10 text-[#7C4A1F] border-[#B87333]/30">
              <span className="w-2 h-2 rounded-full bg-[#B87333]" />
              <span>Wdrożenia • Smart home, kamery i domofony</span>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] text-slate-950">
              Nowoczesny dom, którym sterujesz telefonem.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B87333] via-[#C27A4E] to-[#A36034]">
                Działa też bez internetu.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed font-light text-slate-600">
              Światło, rolety, ogrzewanie i kamery — montujemy, ustawiamy i pokazujemy, jak z tego korzystać.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/kalkulator"
                className="btn-engineering-primary shadow-xl shadow-[#B87333]/20 active:scale-95 text-center gap-2 focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
              >
                <span>Wypełnij ankietę (2 min)</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/systemy"
                className="focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 py-4 px-8 rounded-[2px] font-bold text-xs uppercase tracking-wider transition-all border text-center flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm"
              >
                <span>Zobacz, jak to działa</span>
              </Link>
            </div>

            {/* Key Trust Badges */}
            <div className="mt-10 pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs border-slate-200 text-slate-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Praca w domu, bez obcych serwerów</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Bez abonamentu</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Bezpieczna instalacja</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Czysty montaż</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI TECHNOLOGIES OF THE FUTURE (HIKVISION & SHELLY EUROPE) */}
      <AiFutureTechSection />

      {/* TOP SELLING SCENARIOS (TRV AIRING, HAZARD LEAK CUT, SOLAR 3EM, CAR WELCOME) */}
      <TopSellingScenariosSection />

      {/* INTERACTIVE 24H LIGHTING & ATMOSPHERE SHOWCASE (DAY VS NIGHT) */}
      <LightingAtmosphereShowcase />


      {/* Visual Solutions Grid with High-Res Photography */}
      <section className="py-16 border-t bg-white border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Obszary instalacji — co montujemy
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed max-w-prose text-slate-600">
              Do każdego miejsca w domu dobieramy konkretny zestaw: na przykład do wejścia — domofon z kamerą i 2 kamery z zapisem w domu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {chapters.map((ch) => {
              const Icon = ch.icon;
              return (
                <Link
                  key={ch.id}
                  to={ch.path}
                  className="focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 group rounded-[2px] border overflow-hidden transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 bg-[#F9FAFB] border-[#E5E7EB] hover:border-[#C27A4E] hover:shadow-slate-300/70"
                >
                  {/* Photography Header */}
                  <div>
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                      <img
                        src={ch.image}
                        alt={ch.imageAlt}
                        className="w-full h-full object-cover object-center duration-700 filter brightness-85 group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                      
                      {/* Floating Badge */}
                      <div className="absolute top-3.5 left-3.5">
                        <span className="text-[11px] font-semibold text-white px-3 py-1 rounded-[2px] bg-black/60 backdrop-blur-md border border-white/20 shadow-sm">
                          {ch.badge}
                        </span>
                      </div>

                      {/* Icon overlay */}
                      <div className="absolute bottom-3 right-3.5 w-10 h-10 rounded-[2px] bg-black/70 backdrop-blur-md border border-white/20 flex items-center justify-center text-[#C27A4E] shadow-md">
                        <Icon className="w-5 h-5" />
                      </div>
                    </div>

                    <div className="p-6">
                      <h3 className="font-display text-xl font-bold transition-colors text-slate-900 group-hover:text-[#A36034]">
                        {ch.title}
                      </h3>
                      <div className="text-xs font-semibold mt-1 text-[#A36034]">
                        {ch.subtitle}
                      </div>

                      <p className="text-sm mt-3 leading-relaxed font-light text-slate-600">
                        {ch.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className="pt-4 border-t flex items-center justify-between text-xs font-bold transition-colors border-[#E5E7EB] text-[#A36034] group-hover:text-[#7C4A1F]">
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

      {/* Why DOMENCE Trust Pillars */}
      <section className="py-16 border-t bg-[#F3F4F6] border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-10">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
              Jak montujemy i dlaczego to bezpieczne
            </h2>
            <p className="mt-3 text-sm sm:text-base font-light leading-relaxed max-w-prose text-slate-600">
              Trzy rzeczy, które robimy inaczej niż zestawy ze sklepu.
            </p>
          </div>

          {/* 3-photo strip */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
            <div className="rounded-[2px] overflow-hidden border border-[#E5E7EB] shadow-sm h-44">
              <img
                src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                alt="Szafa serwerowa z rejestratorem — nagrania zostają w domu"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-[2px] overflow-hidden border border-[#E5E7EB] shadow-sm h-44">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85"
                alt="Bezpieczny dom o zmierzchu z włączonym oświetleniem"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
            <div className="rounded-[2px] overflow-hidden border border-[#E5E7EB] shadow-sm h-44">
              <img
                src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=85"
                alt="Czysta łazienka po montażu bez kurzu i kucia"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-7 rounded-[2px] border transition-all bg-white border-[#E5E7EB] hover:border-[#C27A4E] shadow-sm">
              <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/10 text-[#B87333] flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                Prywatność i działanie bez internetu
              </h3>
              <p className="text-sm leading-relaxed font-light text-slate-600">
                Obraz z kamer i dane zostają w Twoim domu. Nic nie wysyłamy na obce serwery i nie płacisz miesięcznego abonamentu.
              </p>
            </div>

            <div className="p-7 rounded-[2px] border transition-all bg-white border-[#E5E7EB] hover:border-[#C27A4E] shadow-sm">
              <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/10 text-[#B87333] flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                Porządna rozdzielnica i ochrona sprzętu
              </h3>
              <p className="text-sm leading-relaxed font-light text-slate-600">
                Każdy bezpiecznik ma jasny opis i schemat. Ograniczniki przepięć chronią pompę ciepła,
                sprzęt kuchenny, telewizory i komputery przed burzą.
              </p>
            </div>

            <div className="p-7 rounded-[2px] border transition-all bg-white border-[#E5E7EB] hover:border-[#C27A4E] shadow-sm">
              <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/10 text-[#B87333] flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-bold mb-2 text-slate-900">
                Czysty montaż bez kurzu
              </h3>
              <p className="text-sm leading-relaxed font-light text-slate-600">
                Pracujemy też w gotowych, umeblowanych domach. Wiercimy z odsysaniem pyłu,
                zabezpieczamy podłogi i sprzątamy po sobie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mobile Apps & Control Showcase (Dom, Wideodomofony) */}
      <AppsShowcaseSection />

      {/* 5-Step Process */}
      <ProcessSection />

      {/* Direct Contact Banner */}
      <section className="relative py-16 border-t overflow-hidden bg-[#0B1F2A] text-white border-[#0B1F2A]">
        <div className="absolute inset-0 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=2000&q=85"
            alt="Dom jednorodzinny o zmierzchu z oświetlonym wnętrzem"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Planujesz budowę albo remont?
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl font-light">
              Napisz, co chcesz mieć w domu. Oddzwonimy z konkretną propozycją — zwykle w 24 godziny robocze (pon–pt, 8:00–18:00).
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/kalkulator"
                className="btn-engineering-primary shadow-lg shadow-[#B87333]/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
              >
                <span>Wypełnij ankietę (2 min)</span>
              </Link>

              <Link
                to="/kontakt"
                className="px-6 py-3.5 rounded-[2px] bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider transition-all border border-white/20 focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
              >
                Zapytaj inżyniera
              </Link>
            </div>
            <p className="text-[11px] text-slate-400 font-light flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              <span>Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). Bez spamu.</span>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
