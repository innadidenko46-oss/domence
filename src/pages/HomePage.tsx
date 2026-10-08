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
import { useTheme } from '../context/ThemeContext.tsx';

export const HomePage: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const chapters = [
    {
      id: 'systemy',
      path: '/systemy',
      title: 'Technologie i standardy smart home',
      subtitle: 'Sterowanie domem • Oświetlenie • Rolety • Mikroklimat',
      description:
        'Sterowanie oświetleniem, roletami, mikroklimatem i scenami relaksu z poziomu włączników ściennych i telefonu — przewodowo lub bezprzewodowo, w zależności od stanu instalacji.',
      icon: Layers,
      badge: 'Sterowanie & Automatyka',
      image:
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Minimalistyczne wnętrze z ciepłym światłem smart home',
    },
    {
      id: 'teletechnika',
      path: '/teletechnika',
      title: 'Monitoring CCTV, wideodomofony IP i sieci LAN',
      subtitle: 'Kamery 4K ColorVu & AcuSense • Wideorozmowy w telefonie • Szafy RACK',
      description:
        'Szybka identyfikacja ludzi i pojazdów AI bez fałszywych alarmów. Prywatny rejestrator w szafie RACK bez opłat chmurowych, zdalne otwieranie furtki kurierowi i stabilny zasięg Wi-Fi w całym domu.',
      icon: Network,
      badge: 'Prywatność & Zero Abonamentów',
      image:
        'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Dyskretna kamera zewnętrzna na nowoczesnej elewacji o zmierzchu',
    },
    {
      id: 'multimedia-kino',
      path: '/multimedia',
      title: 'Dźwięk multiroom i kino domowe',
      subtitle: 'Bezramkowe głośniki sufitowe • Sceny filmowe • Dolby Atmos',
      description:
        'Dyskretne nagłośnienie wtopione w architekturę sufitu, zintegrowane ściemnianie światła, rolety blackout i automatyczna cisza podczas dzwonienia wideodomofonu.',
      icon: Volume2,
      badge: 'Multimedia & Atmosfera',
      image: `${import.meta.env.BASE_URL}images/living_room_cinema.svg`,
      imageAlt: 'Domowa sala kinowa z nastrojowym oświetleniem i dźwiękiem surround',
    },
    {
      id: 'scenariusze',
      path: '/scenariusze',
      title: 'Scenariusze i codzienna automatyka',
      subtitle: 'Wyjście z domu • Ochrona przed zalaniem • Oświetlenie nocne',
      description:
        'Dotykowy klawisz przy drzwiach wyłącza oświetlenie i wybrane obwody gniazd. Sensory zalania natychmiast zamykają główny elektrozawór wody przy nieszczelności.',
      icon: Sparkles,
      badge: 'Ergonomia & Bezpieczeństwo',
      image:
        'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Ciepłe, przytulne wnętrze o poranku ze zautomatyzowanym oświetleniem',
    },
    {
      id: 'pakiety',
      path: '/pakiety',
      title: 'Pakiety wdrożeniowe „pod klucz”',
      subtitle: 'Kompletny sprzęt i montaż • Przejrzysta wycena • Gwarancja',
      description:
        'Sprawdzone konfiguracje wdrożeniowe: od gotowych lokali bez ingerencji w tynki, po pełne rezydencje w profesjonalnym standardzie modułowym Shelly Pro na szynę DIN.',
      icon: Package,
      badge: 'Pakiety & Wyceny',
      image:
        'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Zbliżenie układów elektronicznych na płytce drukowanej',
    },
    {
      id: 'faq',
      path: '/faq',
      title: 'Baza wiedzy i odpowiedzi na pytania',
      subtitle: 'Wszystko o działaniu offline, kosztach i obsłudze dla rodziny',
      description:
        'Sprawdź, jak instalacja zachowuje się podczas wyładowań i braku internetu, jak szybko zwraca się inwestycja i jak wygląda codzienna obsługa.',
      icon: BookOpen,
      badge: 'Wiedza & FAQ',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Czyste biuro projektowe z planami architektonicznymi i tabletem',
    },
    {
      id: 'kalkulator',
      path: '/kalkulator',
      title: 'Konfigurator wyceny instalacji',
      subtitle: 'Wybierz metraż i moduły • Sprawdź szacunkowy koszt',
      description:
        'Narzędzie do oszacowania budżetu na urządzenia i montaż.',
      icon: Calculator,
      badge: 'Wycena Online',
      image:
        'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85',
      imageAlt: 'Cyfrowy tablet wyświetlający przejrzyste sterowanie domem',
    },
  ];


  return (
    <div className={`transition-colors duration-500 ${isDay ? 'bg-[#F8FAFC] text-slate-800' : 'bg-[#040A10] text-slate-200'}`}>
      
      {/* Hero Section with Dreamy Ambient Background */}
      <section className="relative min-h-[85vh] flex items-center pt-24 pb-20 overflow-hidden">
        {/* Dreamy Background effects & Photography */}
        <div className="absolute inset-0 -z-10">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2400&q=85"
            alt="Nowoczesny dom jednorodzinny z dużymi przeszkleniami"
            className={`w-full h-full object-cover object-center scale-105 transition-opacity duration-700 ${
              isDay ? 'opacity-15 filter brightness-110 contrast-95' : 'opacity-30 filter brightness-90 contrast-110'
            }`}
          />
          <div className={`absolute inset-0 transition-colors duration-700 ${
            isDay 
              ? 'bg-gradient-to-r from-white via-white/95 to-slate-50/80' 
              : 'bg-gradient-to-r from-[#040A10] via-[#040A10]/95 to-[#040A10]/70'
          }`} />
          <div className={`absolute inset-0 ${
            isDay ? 'bg-gradient-to-t from-[#F8FAFC] via-transparent to-transparent' : 'bg-gradient-to-t from-[#040A10] via-transparent to-transparent'
          }`} />
          <div className="absolute -top-32 -left-32 w-[600px] h-[600px] rounded-full bg-[#B87333]/10 blur-[150px] pointer-events-none" />
          <div className="hidden sm:block absolute top-1/3 -right-32 w-[650px] h-[650px] rounded-full bg-sky-500/10 blur-[170px] pointer-events-none" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="max-w-3xl">
            {/* Top Badge */}
            <div className={`inline-flex items-center gap-2.5 px-4 py-1.5 rounded-[2px] text-xs font-semibold mb-6 backdrop-blur-md border ${
              isDay 
                ? 'bg-[#B87333]/10 text-[#7C4A1F] border-[#B87333]/30' 
                : 'bg-[#B87333]/10 text-[#C27A4E] border-[#B87333]/30'
            }`}>
              <span className="w-2 h-2 rounded-full bg-[#B87333] animate-ping" />
              <span>Wdrożenia Inżynierskie • Smart Home, Wideodomofony & Monitoring</span>
            </div>

            {/* Main Headline */}
            <h1 className={`font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              Nowoczesny dom, który wspiera Twój spokój, wygodę i prywatność.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#B87333] via-[#C27A4E] to-[#A36034]">
                Działa stabilnie — również bez internetu.
              </span>
            </h1>

            {/* Subtitle */}
            <p className={`mt-5 text-base sm:text-lg leading-relaxed font-light ${
              isDay ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Projektujemy i montujemy instalacje automatyki budynkowej, kamery 4K z analityką ludzi i pojazdów, 
              wideodomofony IP oraz szybkie sieci Wi-Fi. Bez zewnętrznych abonamentów, 
              z czytelną rozdzielnicą i czystym montażem bez pyłu w wykończonych wnętrzach.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/kalkulator"
                className="btn-engineering-primary shadow-xl shadow-[#B87333]/20 active:scale-95 text-center gap-2 focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
              >
                <span>Wyceń w kalkulatorze</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/systemy"
                className={`focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 py-4 px-8 rounded-[2px] font-bold text-xs uppercase tracking-wider transition-all border text-center flex items-center justify-center gap-2 ${
                  isDay 
                    ? 'bg-white hover:bg-slate-100 text-slate-800 border-slate-300 shadow-sm' 
                    : 'bg-white/5 hover:bg-white/10 text-white border-white/10'
                }`}
              >
                <span>Poznaj Technologie Smart Home</span>
              </Link>
            </div>

            {/* Key Trust Badges */}
            <div className={`mt-10 pt-6 border-t grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs ${
              isDay ? 'border-slate-200 text-slate-700' : 'border-white/10 text-slate-300'
            }`}>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Praca lokalna bez chmury</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
                <span>Zero Abonamentów</span>
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
      <section className={`py-20 border-t ${
        isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#051119] border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl mb-14">
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDay ? 'text-slate-900' : 'text-white'
            }`}>
              Obszary instalacji i technologie
            </h2>
            <p className={`mt-3 text-sm sm:text-base font-light ${
              isDay ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Do każdego obszaru dobieramy konkretny zestaw: np. do wejścia — wideodomofon IP i 2 kamery 4K z zapisem lokalnym.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {chapters.map((ch) => {
              const Icon = ch.icon;
              return (
                <Link
                  key={ch.id}
                  to={ch.path}
                  className={`focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 group rounded-[2px] border overflow-hidden transition-all duration-500 flex flex-col justify-between hover:shadow-2xl hover:-translate-y-1 ${
                    isDay 
                      ? 'bg-white border-slate-200 hover:border-[#C27A4E] hover:shadow-slate-300/70' 
                      : 'bg-[#0A2230]/70 border-white/10 hover:border-[#C27A4E]/50 hover:shadow-[#B87333]/10'
                  }`}
                >
                  {/* Photography Header */}
                  <div>
                    <div className="relative h-44 sm:h-48 overflow-hidden bg-slate-900">
                      <img
                        src={ch.image}
                        alt={ch.imageAlt}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 filter brightness-85 group-hover:brightness-100"
                        loading="lazy"
                      />
                      <div className={`absolute inset-0 ${
                        isDay 
                          ? 'bg-gradient-to-t from-black/60 via-black/20 to-transparent' 
                          : 'bg-gradient-to-t from-[#0A2230] via-[#0A2230]/40 to-transparent'
                      }`} />
                      
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
                      <h3 className={`font-display text-xl font-bold transition-colors ${
                        isDay ? 'text-slate-900 group-hover:text-[#A36034]' : 'text-white group-hover:text-[#C27A4E]/60'
                      }`}>
                        {ch.title}
                      </h3>
                      <div className={`text-xs font-semibold mt-1 ${
                        isDay ? 'text-[#A36034]' : 'text-[#C27A4E]/90'
                      }`}>
                        {ch.subtitle}
                      </div>

                      <p className={`text-xs mt-3 leading-relaxed font-light ${
                        isDay ? 'text-slate-600' : 'text-slate-300'
                      }`}>
                        {ch.description}
                      </p>
                    </div>
                  </div>

                  <div className="px-6 pb-6 pt-2">
                    <div className={`pt-4 border-t flex items-center justify-between text-xs font-bold transition-colors ${
                      isDay 
                        ? 'border-slate-100 text-[#A36034] group-hover:text-[#7C4A1F]' 
                        : 'border-white/10 text-[#C27A4E] group-hover:text-[#C27A4E]/60'
                    }`}>
                      <span>Zobacz szczegóły</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>

        </div>
      </section>

      {/* Why DOMENCE Trust Pillars */}
      <section className={`py-20 border-t ${
        isDay ? 'bg-white border-slate-200' : 'bg-[#030A10] border-white/10'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-14">
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDay ? 'text-slate-900' : 'text-white'
            }`}>
              Zasady montażu i bezpieczeństwo
            </h2>
            <p className={`mt-3 text-sm sm:text-base font-light ${
              isDay ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Trzy filary, które odróżniają profesjonalną instalację od amatorskich zestawów ze sklepu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`p-7 rounded-[2px] border transition-all ${
              isDay 
                ? 'bg-slate-50 border-slate-200 hover:border-[#C27A4E] shadow-sm' 
                : 'bg-[#0A2230]/60 border-white/10 hover:border-[#C27A4E]/30'
            }`}>
              <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/10 text-[#B87333] flex items-center justify-center mb-4">
                <Lock className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDay ? 'text-slate-900' : 'text-white'}`}>
                Prywatność i praca bez internetu
              </h3>
              <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>
                Obraz z kamer i dane domowników zostają w Twoim domu. Żadne zewnętrzne serwery nie mają dostępu
                do Twoich pomieszczeń i nie ponosisz żadnych miesięcznych opłat.
              </p>
            </div>

            <div className={`p-7 rounded-[2px] border transition-all ${
              isDay 
                ? 'bg-slate-50 border-slate-200 hover:border-[#C27A4E] shadow-sm' 
                : 'bg-[#0A2230]/60 border-white/10 hover:border-[#C27A4E]/30'
            }`}>
              <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/10 text-[#B87333] flex items-center justify-center mb-4">
                <Cpu className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDay ? 'text-slate-900' : 'text-white'}`}>
                Przejrzysta rozdzielnica i ochrona AGD
              </h3>
              <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>
                Każdy bezpiecznik ma jasny opis i schemat. Zastosowane ograniczniki przepięć chronią pompę ciepła,
                sprzęt kuchenny, telewizory i komputery przed wyładowaniami burzowymi.
              </p>
            </div>

            <div className={`p-7 rounded-[2px] border transition-all ${
              isDay 
                ? 'bg-slate-50 border-slate-200 hover:border-[#C27A4E] shadow-sm' 
                : 'bg-[#0A2230]/60 border-white/10 hover:border-[#C27A4E]/30'
            }`}>
              <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/10 text-[#B87333] flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6" />
              </div>
              <h3 className={`text-lg font-bold mb-2 ${isDay ? 'text-slate-900' : 'text-white'}`}>
                Czysty i precyzyjny montaż
              </h3>
              <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-300'}`}>
                Pracujemy w wykończonych domach i mieszkaniach. Każde wiercenie wykonujemy z odsysaniem pyłu,
                zabezpieczamy podłogi i zostawiamy nienaganny porządek.
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
      <section className={`relative py-20 border-t overflow-hidden ${
        isDay 
          ? 'bg-gradient-to-r from-slate-900 to-slate-800 text-white' 
          : 'bg-gradient-to-r from-[#0C2D3F] to-[#081F2C] border-white/10'
      }`}>
        <div className="absolute inset-0 -z-10 opacity-20">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80"
            alt="Nowoczesne wnętrze domu w świetle dziennym"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
              Planujesz budowę, remont lub modernizację?
            </h2>
            <p className="text-sm text-slate-300 mt-2 max-w-xl font-light">
              Skonsultuj się z nami bezpłatnie. Doradzimy odpowiednie rozwiązania dla Twojego budynku
              i przygotujemy kosztorys wstępny — wysyłamy go w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00) po otrzymaniu rzutów.
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/kalkulator"
                className="btn-engineering-primary shadow-lg shadow-[#B87333]/20 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
              >
                Wyceń w kalkulatorze
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
