import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { ArrowDown, CheckCircle2, ChevronRight, Video, Cpu, Hammer, FileText } from 'lucide-react';
import { PropertyState } from '../types.ts';
import { useTheme } from '../context/ThemeContext.tsx';

interface HeroProps {
  onSelectCategory: (category: PropertyState) => void;
  onScrollToCalculator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onSelectCategory, onScrollToCalculator }) => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <section className={`relative min-h-[88vh] flex items-center pt-24 pb-16 overflow-hidden transition-colors ${
      isDay ? 'bg-[#F9FAFB]' : 'bg-[#18181B]'
    }`}>
      {/* Background Architectural Subtle Backdrop */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=85"
          alt="Nowoczesna rezydencja z instalacją DOMENCE"
          className={`w-full h-full object-cover object-center ${
            isDay ? 'opacity-10 mix-blend-multiply' : 'opacity-15 mix-blend-luminosity'
          }`}
        />
        <div className={`absolute inset-0 ${
          isDay
            ? 'bg-gradient-to-r from-[#F9FAFB] via-[#F9FAFB]/95 to-[#F9FAFB]/80'
            : 'bg-gradient-to-r from-[#18181B] via-[#18181B]/95 to-[#18181B]/75'
        }`} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          
          {/* Engineering Badge */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`inline-flex items-center gap-2 px-3 py-1 rounded-[2px] border text-xs font-mono mb-6 ${
              isDay
                ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#374151]'
                : 'bg-[#27272A] border-white/10 text-[#A1A1AA]'
            }`}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#B87333]" />
            <span className="tracking-wide">Sprzęt w Twoim domu • Praca offline bez chmury</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] ${
              isDay ? 'text-[#111827]' : 'text-[#F3F4F6]'
            }`}
          >
            Automatyka budynkowa Shelly i wideodomofony IP.{' '}
            <span className="text-[#B87333]">
              Inżynieryjny spokój.
            </span>
          </motion.h1>

          {/* Subtitle with generous line-height to let text breathe */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`mt-6 text-lg sm:text-xl font-normal leading-[1.75] max-w-3xl ${
              isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
            }`}
          >
            Projektujemy i wdrażamy systemy automatyki domowej oraz wideodomofony IP w standardzie rezydencjalnym.
            Moduły Shelly Pro na szynie DIN w rozdzielnicy, ochrona przed zalaniem poniżej 3 sekund i pełna prywatność nagrań w Twoim domu.
          </motion.p>

          {/* Key Trust Points */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className={`mt-6 flex flex-wrap items-center gap-y-2 gap-x-6 text-xs font-medium ${
              isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'
            }`}
          >
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
              <span>Czysty montaż bezpyłowy (odciąg HEPA)</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
              <span>Gwarancja 24 miesiące & Polisa OC firmy</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#B87333] shrink-0" />
              <span>Warszawa & Województwo Mazowieckie</span>
            </div>
          </motion.div>

          {/* CTA Buttons - Solid Flat Engineering Style */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-8"
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <button
                onClick={onScrollToCalculator}
                className="btn-engineering-primary cursor-pointer gap-2"
              >
                <span>Zamów bezpłatną wycenę</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <Link
                to="/pakiety"
                className="btn-engineering-secondary gap-2"
              >
                <FileText className="w-4 h-4 text-[#B87333]" />
                <span>Pakiety & Specyfikacje</span>
              </Link>
            </div>

            {/* CRO Microcopy - Eliminacja ryzyka i natręctwa */}
            <p className={`mt-3 text-[11px] flex items-center gap-2 font-normal ${
              isDay ? 'text-[#6B7280]' : 'text-[#71717A]'
            }`}>
              <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] shrink-0" />
              <span>Dbamy o Twoją prywatność. Bez spamu, oddzwania bezpośrednio inżynier instalator w 15 minut (pon–pt 8:00–18:00).</span>
            </p>
          </motion.div>
        </div>

        {/* 3 Entry Cards reflecting the 3 core client scenarios */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {/* Card 1: Stan Deweloperski */}
          <div
            onClick={() => onSelectCategory('deweloperski')}
            className={`group p-6 sm:p-7 rounded-[2px] border transition-all cursor-pointer ${
              isDay
                ? 'bg-white border-[#E5E7EB] hover:border-[#B87333] shadow-sm'
                : 'bg-[#27272A]/80 border-white/10 hover:border-[#B87333] shadow-sm'
            }`}
          >
            <div className="h-44 rounded-[2px] overflow-hidden mb-5 relative">
              <img
                src="/images/rack_cabinet_clean.svg"
                alt="Rozdzielnica i szafa RACK Shelly Pro w nowym budynku"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-black/80 text-[#E4E4E7] border border-white/15 flex items-center gap-1.5">
                <Hammer className="w-3.5 h-3.5 text-[#B87333]" />
                <span>Stan Deweloperski / Nowy Dom</span>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h3 className={`text-base font-bold transition-colors ${
                isDay ? 'text-[#111827] group-hover:text-[#B87333]' : 'text-[#F4F4F5] group-hover:text-[#B87333]'
              }`}>
                Przewodowa Rozdzielnica Shelly Pro
              </h3>
              <ChevronRight className="w-4 h-4 text-[#71717A] group-hover:text-[#B87333] group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className={`text-xs mt-3 leading-[1.65] font-normal ${
              isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
            }`}>
              Moduły na szynie DIN w szafie rozdzielczej, bezpośrednie porty LAN RJ45 i niezawodne sterowanie ogrzewaniem podłogowym.
            </p>
          </div>

          {/* Card 2: Wykończone Wnętrze */}
          <div
            onClick={() => onSelectCategory('retro')}
            className={`group p-6 sm:p-7 rounded-[2px] border transition-all cursor-pointer ${
              isDay
                ? 'bg-white border-[#E5E7EB] hover:border-[#B87333] shadow-sm'
                : 'bg-[#27272A]/80 border-white/10 hover:border-[#B87333] shadow-sm'
            }`}
          >
            <div className="h-44 rounded-[2px] overflow-hidden mb-5 relative">
              <img
                src="/images/shelly_box.svg"
                alt="Montaż modułu Shelly za włącznikiem bez kucia"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-black/80 text-[#E4E4E7] border border-white/15 flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-[#38BDF8]" />
                <span>Bez Kucia Ścian (Puszki 60mm)</span>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h3 className={`text-base font-bold transition-colors ${
                isDay ? 'text-[#111827] group-hover:text-[#B87333]' : 'text-[#F4F4F5] group-hover:text-[#B87333]'
              }`}>
                Modernizacja Wykończonego Domu
              </h3>
              <ChevronRight className="w-4 h-4 text-[#71717A] group-hover:text-[#B87333] group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className={`text-xs mt-3 leading-[1.65] font-normal ${
              isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
            }`}>
              Mikromoduły Shelly Plus chowane za istniejącymi włącznikami. Ochrona przed zalaniem Fail-Safe montowana w 24 godziny bez pyłu.
            </p>
          </div>

          {/* Card 3: Wideodomofon IP & Kamery */}
          <div
            onClick={() => onSelectCategory('security')}
            className={`group p-6 sm:p-7 rounded-[2px] border transition-all cursor-pointer ${
              isDay
                ? 'bg-white border-[#E5E7EB] hover:border-[#B87333] shadow-sm'
                : 'bg-[#27272A]/80 border-white/10 hover:border-[#B87333] shadow-sm'
            }`}
          >
            <div className="h-44 rounded-[2px] overflow-hidden mb-5 relative">
              <img
                src="/images/facade_dome_camera.svg"
                alt="Dyskretna kamera kopułkowa ColorVu w elewacji rezydencji"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
              <span className="absolute bottom-2.5 left-2.5 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-[2px] bg-black/80 text-[#E4E4E7] border border-white/15 flex items-center gap-1.5">
                <Video className="w-3.5 h-3.5 text-[#B87333]" />
                <span>Intercom IP & Monitoring 4K</span>
              </span>
            </div>

            <div className="flex items-center justify-between">
              <h3 className={`text-base font-bold transition-colors ${
                isDay ? 'text-[#111827] group-hover:text-[#B87333]' : 'text-[#F4F4F5] group-hover:text-[#B87333]'
              }`}>
                Wideodomofon IP & Kamery ColorVu
              </h3>
              <ChevronRight className="w-4 h-4 text-[#71717A] group-hover:text-[#B87333] group-hover:translate-x-0.5 transition-all" />
            </div>
            <p className={`text-xs mt-3 leading-[1.65] font-normal ${
              isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
            }`}>
              Stacja bramowa ze stali nierdzewnej, otwieranie furtki telefonem oraz rejestrator NVR w szafie RACK bez wysyłania obrazu do chmury.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
