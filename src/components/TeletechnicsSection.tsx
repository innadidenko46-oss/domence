import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TELETECHNIC_SERVICES } from '../data/content.ts';
import { 
  Network, 
  ChevronDown, 
  ChevronUp, 
  Video, 
  Server, 
  ShieldAlert, 
  KeyRound, 
  CheckCircle2, 
  HardDrive 
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const TeletechnicsSection: React.FC = () => {
  const [expandedServiceId, setExpandedServiceId] = useState<string>('cctv');
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-[#B87333]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-sky-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-emerald-400" />;
      default:
        return <KeyRound className="w-6 h-6 text-[#B87333]" />;
    }
  };

  return (
    <section id="teletechnika" className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
      isDay ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#111827]' : 'bg-[#18181B] border-[#27272A] text-[#F3F4F6]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] text-xs font-mono font-bold uppercase tracking-wider mb-3 bg-[#B87333]/15 text-[#B87333] border border-[#B87333]/30">
            <Network className="w-4 h-4" />
            <span>Teletechnika &amp; Prywatność Rezydencji</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] ${
            isDay ? 'text-[#111827]' : 'text-white'
          }`}>
            Stabilne okablowanie strukturalne i lokalny monitoring 4K.
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-[1.7] ${
            isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
          }`}>
            Fundament każdego inteligentnego domu: szafa RACK 19", certyfikowane patchcordy kat. 6A, zasilacze buforowe UPS oraz stacja bramowa. Bez abonamentów chmurowych – z pełną suwerennością danych w Twojej sieci lokalnej.
          </p>
        </div>

        {/* 4 Interactive Teletechnic Blocks with strict 2px styling */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {TELETECHNIC_SERVICES.map((service) => {
            const isExpanded = expandedServiceId === service.id;

            return (
              <div
                key={service.id}
                className={`rounded-[2px] p-6 sm:p-7 transition-all duration-200 border ${
                  isExpanded
                    ? isDay
                      ? 'bg-white border-[#B87333] shadow-md ring-1 ring-[#B87333]'
                      : 'bg-[#27272A] border-[#B87333] shadow-lg ring-1 ring-[#B87333]'
                    : isDay
                      ? 'bg-white/80 border-[#E5E7EB] hover:border-[#D1D5DB]'
                      : 'bg-[#27272A]/40 border-white/5 hover:border-white/15'
                }`}
              >
                {/* Header of the card */}
                <div
                  onClick={() => setExpandedServiceId(isExpanded ? '' : service.id)}
                  className="cursor-pointer flex items-start justify-between gap-4"
                >
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 mt-0.5 border ${
                      isDay 
                        ? 'bg-[#B87333]/10 border-[#B87333]/25' 
                        : 'bg-[#B87333]/20 border-[#B87333]/30'
                    }`}>
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className={`text-lg sm:text-xl font-bold leading-snug ${
                        isDay ? 'text-[#111827]' : 'text-white'
                      }`}>
                        {service.title}
                      </h3>
                      <p className="text-xs font-mono font-medium mt-1 text-[#B87333]">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <button
                    className={`p-2 rounded-[2px] shrink-0 border ${
                      isDay ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#4B5563]' : 'bg-white/5 border-white/10 text-[#9CA3AF]'
                    }`}
                    aria-label="Rozwiń szczegóły"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </button>
                </div>

                {/* Practical insight box */}
                <div className={`mt-5 p-4 rounded-[2px] border text-xs leading-relaxed flex items-start gap-3 ${
                  isDay 
                    ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#374151]' 
                    : 'bg-[#18181B]/80 border-white/5 text-[#D1D5DB]'
                }`}>
                  <div className="w-2 h-2 rounded-full bg-[#B87333] mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold block mb-1 text-[#B87333] font-mono text-[11px] uppercase">
                      W praktyce:
                    </span>
                    <span className="leading-[1.65]">{service.humanExplanation}</span>
                  </div>
                </div>

                {/* Expanded Technical Details */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      className={`overflow-hidden mt-6 pt-5 border-t space-y-5 ${
                        isDay ? 'border-[#E5E7EB]' : 'border-white/10'
                      }`}
                    >
                      <p className={`text-xs sm:text-sm leading-[1.7] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                        {service.description}
                      </p>

                      {/* Equipment List */}
                      <div>
                        <div className={`text-[11px] font-mono font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 ${
                          isDay ? 'text-[#6B7280]' : 'text-[#9CA3AF]'
                        }`}>
                          <HardDrive className="w-4 h-4 text-[#B87333]" />
                          <span>Zastosowane komponenty sprzętowe:</span>
                        </div>
                        <ul className="space-y-2">
                          {service.equipment.map((item, idx) => (
                            <li key={idx} className={`text-xs flex items-start gap-2.5 ${
                              isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'
                            }`}>
                              <CheckCircle2 className="w-4 h-4 text-[#B87333] mt-0.5 shrink-0" />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Specifications badges */}
                      <div className="flex flex-wrap gap-2 pt-2">
                        {service.specs.map((spec, idx) => (
                          <span
                            key={idx}
                            className={`text-[10px] font-mono px-2.5 py-1 rounded-[2px] border ${
                              isDay
                                ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#374151]'
                                : 'bg-white/5 border-white/10 text-[#D1D5DB]'
                            }`}
                          >
                            {spec}
                          </span>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Teletechnic Standard Banner */}
        <div className={`mt-12 p-6 rounded-[2px] border flex flex-col md:flex-row items-center justify-between gap-6 ${
          isDay
            ? 'bg-white border-[#E5E7EB] shadow-sm'
            : 'bg-[#27272A]/70 border-white/10'
        }`}>
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center shrink-0">
              <Server className="w-6 h-6" />
            </div>
            <div>
              <div className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                Certyfikowana szafa RACK 19" z pełną dokumentacją powykonawczą
              </div>
              <div className={`text-xs mt-1 leading-relaxed ${isDay ? 'text-[#6B7280]' : 'text-[#9CA3AF]'}`}>
                Wszystkie tory transmisyjne zarabiamy na patchpanelach kat. 6A i weryfikujemy certyfikowanym miernikiem okablowania.
              </div>
            </div>
          </div>

          <a
            href="#kalkulator"
            className="px-6 py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-medium text-xs uppercase tracking-wider transition-all whitespace-nowrap shadow-sm"
          >
            Skonfiguruj instalację
          </a>
        </div>

      </div>
    </section>
  );
};
