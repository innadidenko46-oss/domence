import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TELETECHNIC_SERVICES } from '../data/content.ts';
import { 
  Network,
  Camera, 
  ChevronDown, 
  ChevronUp, 
  Video, 
  Server, 
  ShieldAlert, 
  KeyRound, 
  CheckCircle2, 
  HardDrive 
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const TeletechnicsSection: React.FC = () => {
  const [expandedServiceId, setExpandedServiceId] = useState<string>('cctv');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Video':
        return <Video className="w-6 h-6 text-[#B87333]" />;
      case 'Server':
        return <Server className="w-6 h-6 text-[#B87333]" />;
      case 'Camera':
        return <Video className="w-6 h-6 text-[#B87333]" />;
      case 'Network':
        return <Network className="w-6 h-6 text-[#B87333]" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-[#B87333]" />;
      default:
        return <KeyRound className="w-6 h-6 text-[#B87333]" />;
    }
  };

  return (
    <section id="teletechnika" className="py-16 relative overflow-hidden transition-colors duration-300 border-t bg-white border-[#E5E7EB] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] text-xs font-mono font-bold uppercase tracking-wider mb-3 bg-[#B87333]/15 text-[#B87333] border border-[#B87333]/30">
            <Network className="w-4 h-4" />
            <span>Kamery i internet w domu</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-[#111827]">
            Szybki internet, kamery i domofon — wszystko działa u Ciebie w domu.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-[#4B5563]">
            Zaczynamy od podstaw: metalowa szafka na sprzęt, dobre kable, zasilanie awaryjne i domofon z kamerą. Nagrania zostają u Ciebie, bez abonamentu.
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
                    ? 'bg-white border-[#B87333] shadow-md ring-1 ring-[#B87333]': 'bg-[#F9FAFB] border-[#E5E7EB] hover:border-[#D1D5DB]'}`}
              >
                {/* Header of the card */}
                <button
                  type="button"
                  onClick={() => setExpandedServiceId(isExpanded ? '' : service.id)}
                  aria-expanded={isExpanded}
                  aria-label={isExpanded ? 'Zwiń szczegóły' : 'Rozwiń szczegóły'}
                  className="cursor-pointer flex items-start justify-between gap-4 w-full text-left focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 mt-0.5 border bg-[#B87333]/10 border-[#B87333]/25">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold leading-snug text-[#111827]">
                        {service.title}
                      </h3>
                      <p className="text-xs font-mono font-medium mt-1 text-[#B87333]">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className="p-2 rounded-[2px] shrink-0 border bg-[#F3F4F6] border-[#D1D5DB] text-[#4B5563]"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Practical insight box */}
                <div className="mt-5 p-4 pl-5 rounded-[2px] border border-l-4 border-l-[#B87333] text-sm leading-relaxed flex items-start gap-3 bg-[#F9FAFB] border-[#E5E7EB] text-[#374151]">
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
                      className="overflow-hidden mt-6 pt-5 border-t space-y-5 border-[#E5E7EB]"
                    >
                      <p className="text-sm leading-relaxed text-[#4B5563]">
                        {service.description}
                      </p>

                      {/* Equipment List */}
                      <div>
                        <div className="text-[11px] font-mono font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-[#6B7280]">
                          <HardDrive className="w-4 h-4 text-[#B87333]" />
                          <span>Co montujemy:</span>
                        </div>
                        <ul className="space-y-2">
                          {service.equipment.map((item, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2.5 text-[#374151]">
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
                            className="text-[10px] font-mono px-2.5 py-1 rounded-[2px] border bg-[#B87333]/10 border-[#B87333]/30 text-[#7C4A1F]"
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
        <div className="mt-12 rounded-[2px] border overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_240px] bg-white border-[#E5E7EB] shadow-sm">
          <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center shrink-0">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-base text-[#111827]">
                  Szafka na sprzęt z dokumentacją i schematami
                </div>
                <div className="text-sm mt-1 leading-relaxed text-[#6B7280]">
                  Wszystkie kable opisujemy i sprawdzamy miernikiem. Dostajesz schematy.
                </div>
              </div>
            </div>

            <Link
              to="/kalkulator"
              className="btn-engineering-primary whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
            >
              Wypełnij ankietę (2 min)
            </Link>
          </div>
          <div className="relative min-h-[160px]">
            <img
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"
              alt="Osprzęt sieciowy i moduły sterujące w szafce teletechnicznej"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
};
