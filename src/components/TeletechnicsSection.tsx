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
        return <Video className="w-6 h-6 text-copper-600" />;
      case 'Server':
        return <Server className="w-6 h-6 text-copper-600" />;
      case 'Camera':
        return <Video className="w-6 h-6 text-copper-600" />;
      case 'Network':
        return <Network className="w-6 h-6 text-copper-600" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-6 h-6 text-copper-600" />;
      default:
        return <KeyRound className="w-6 h-6 text-copper-600" />;
    }
  };

  return (
    <section id="teletechnika" className="py-16 relative overflow-hidden transition-colors duration-300 border-t bg-white border-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] text-xs font-mono font-bold uppercase tracking-wider mb-3 bg-copper-500/15 text-copper-600 border border-copper-500/30">
            <Network className="w-4 h-4" />
            <span>Kamery i internet w domu</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-gray-900">
            Szybki internet, kamery i domofon — wszystko działa u Ciebie w domu.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
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
                    ? 'bg-white border-copper-500 shadow-md ring-1 ring-copper-500': 'bg-gray-50 border-gray-200 hover:border-gray-300'}`}
              >
                {/* Header of the card */}
                <button
                  type="button"
                  onClick={() => setExpandedServiceId(isExpanded ? '' : service.id)}
                  aria-expanded={isExpanded}
                  aria-label={isExpanded ? 'Zwiń szczegóły' : 'Rozwiń szczegóły'}
                  className="cursor-pointer flex items-start justify-between gap-4 w-full text-left focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 mt-0.5 border bg-copper-500/10 border-copper-500/25">
                      {getIcon(service.icon)}
                    </div>
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold leading-snug text-gray-900">
                        {service.title}
                      </h3>
                      <p className="text-xs font-mono font-medium mt-1 text-copper-600">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <span
                    className="p-2 rounded-[2px] shrink-0 border bg-gray-100 border-gray-300 text-gray-600"
                  >
                    {isExpanded ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </span>
                </button>

                {/* Practical insight box */}
                <div className="mt-5 p-4 pl-5 rounded-[2px] border border-l-4 border-l-copper-500 text-sm leading-relaxed flex items-start gap-3 bg-gray-50 border-gray-200 text-gray-700">
                  <div className="w-2 h-2 rounded-full bg-copper-600 mt-1.5 shrink-0" />
                  <div>
                    <span className="font-bold block mb-1 text-copper-600 font-mono text-xs uppercase">
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
                      className="overflow-hidden mt-6 pt-5 border-t space-y-5 border-gray-200"
                    >
                      <p className="text-sm leading-relaxed text-gray-600">
                        {service.description}
                      </p>

                      {/* Equipment List */}
                      <div>
                        <div className="text-xs font-mono font-bold uppercase tracking-wider mb-2.5 flex items-center gap-1.5 text-gray-500">
                          <HardDrive className="w-4 h-4 text-copper-600" />
                          <span>Co montujemy:</span>
                        </div>
                        <ul className="space-y-2">
                          {service.equipment.map((item, idx) => (
                            <li key={idx} className="text-sm flex items-start gap-2.5 text-gray-700">
                              <CheckCircle2 className="w-4 h-4 text-copper-600 mt-0.5 shrink-0" />
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
                            className="text-xs font-mono px-2.5 py-1 rounded-[2px] border bg-copper-500/10 border-copper-500/30 text-copper-800"
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
        <div className="mt-12 rounded-[2px] border overflow-hidden grid grid-cols-1 md:grid-cols-[1fr_240px] bg-white border-gray-200 shadow-sm">
          <div className="p-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center shrink-0">
                <Server className="w-6 h-6" />
              </div>
              <div>
                <div className="font-bold text-base text-gray-900">
                  Szafka na sprzęt z dokumentacją i schematami
                </div>
                <div className="text-sm mt-1 leading-relaxed text-gray-500">
                  Wszystkie kable opisujemy i sprawdzamy miernikiem. Dostajesz schematy.
                </div>
              </div>
            </div>

            <Link
              to="/kalkulator"
              className="btn-engineering-primary whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
            >
              Dobierz zestaw (2 min)
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
