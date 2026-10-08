import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SHELLY_PRO_CAPABILITIES } from '../data/content.ts';
import {
  Sun,
  SlidersHorizontal,
  Flame,
  Volume2,
  Radar,
  Smartphone,
  CheckCircle2,
  Cpu,
  ArrowRight,
  Layers,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ShellyShowcase: React.FC = () => {
  const [activeCapId, setActiveCapId] = useState<string>(SHELLY_PRO_CAPABILITIES[0].id);
  const isDay = true;

  const activeCap =
    SHELLY_PRO_CAPABILITIES.find((c) => c.id === activeCapId) || SHELLY_PRO_CAPABILITIES[0];

  const getCapIcon = (id: string) => {
    switch (id) {
      case 'cap-lighting':
        return <Sun className="w-4 h-4" />;
      case 'cap-blinds':
        return <SlidersHorizontal className="w-4 h-4" />;
      case 'cap-climate':
        return <Flame className="w-4 h-4" />;
      case 'cap-audio':
        return <Volume2 className="w-4 h-4" />;
      case 'cap-sensors':
        return <Radar className="w-4 h-4" />;
      case 'cap-interface':
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section className={`py-24 border-t transition-colors ${
      isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-mono font-semibold uppercase tracking-wider mb-3 border ${
              isDay
                ? 'bg-[#F3F4F6] text-[#374151] border-[#D1D5DB]'
                : 'bg-[#27272A] text-[#A1A1AA] border-white/10'
            }`}>
              <Layers className="w-3.5 h-3.5 text-[#B87333]" />
              <span>Możliwości Systemowe • Shelly Pro & Plus</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              isDay ? 'text-[#111827]' : 'text-[#F3F4F6]'
            }`}>
              Shelly Pro & Plus: Precyzja rozdzielnicy i wygoda bezprzewodowa
            </h2>
            <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
            }`}>
              Połączenie przemysłowej serii <strong>Shelly Pro (szyna DIN)</strong> z elastycznymi mikromodułami <strong>Shelly Plus & BLU</strong>. 
              Stabilna praca w lokalnej sieci LAN bez konieczności wysyłania komend do zewnętrznej chmury.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className={`px-2.5 py-1 rounded-[2px] border font-mono font-medium ${
              isDay ? 'bg-white border-[#E5E7EB] text-[#374151]' : 'bg-[#27272A] border-white/10 text-[#D4D4D8]'
            }`}>
              Przewodowy LAN RJ45
            </span>
            <span className={`px-2.5 py-1 rounded-[2px] border font-mono font-medium ${
              isDay ? 'bg-white border-[#E5E7EB] text-[#374151]' : 'bg-[#27272A] border-white/10 text-[#D4D4D8]'
            }`}>
              Szyna DIN Rozdzielnicy
            </span>
            <span className={`px-2.5 py-1 rounded-[2px] border font-mono font-medium ${
              isDay ? 'bg-white border-[#E5E7EB] text-[#374151]' : 'bg-[#27272A] border-white/10 text-[#D4D4D8]'
            }`}>
              Praca lokalna bez chmury
            </span>
          </div>
        </div>

        {/* Feature Interactive Selector Tabs - Max 4px Radius */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
          {SHELLY_PRO_CAPABILITIES.map((cap) => {
            const isSelected = cap.id === activeCapId;
            return (
              <button
                key={cap.id}
                onClick={() => setActiveCapId(cap.id)}
                className={`p-3 rounded-[2px] text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? isDay
                      ? 'bg-white border-2 border-[#B87333] shadow-sm'
                      : 'bg-[#27272A] border-2 border-[#B87333] shadow-sm'
                    : isDay
                      ? 'bg-[#F3F4F6] border-[#E5E7EB] hover:border-[#D1D5DB]'
                      : 'bg-[#202024] border-[#2E2E33] hover:border-[#3F3F46]'
                }`}
              >
                <div className={`w-7 h-7 rounded-[2px] flex items-center justify-center mb-2.5 ${
                  isSelected
                    ? 'bg-[#B87333] text-white'
                    : isDay
                      ? 'bg-white text-[#4B5563] border border-[#E5E7EB]'
                      : 'bg-[#18181B] text-[#A1A1AA] border border-white/5'
                }`}>
                  {getCapIcon(cap.id)}
                </div>
                <div>
                  <div className={`text-[10px] font-mono font-semibold uppercase tracking-wider line-clamp-1 ${
                    isSelected
                      ? 'text-[#B87333]'
                      : isDay ? 'text-[#6B7280]' : 'text-[#71717A]'
                  }`}>
                    {cap.badge}
                  </div>
                  <div className={`text-xs font-bold mt-0.5 leading-snug line-clamp-2 ${
                    isDay ? 'text-[#111827]' : 'text-[#F4F4F5]'
                  }`}>
                    {cap.title.split('(')[0]}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Content Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCap.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className={`rounded-[2px] border p-6 sm:p-8 lg:p-10 shadow-sm ${
              isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#27272A]/90 border-white/10'
            }`}
          >
            {/* Header of Active Feature */}
            <div className={`flex flex-col md:flex-row md:items-center justify-between pb-6 border-b gap-4 mb-8 ${isDay ? 'border-[#E5E7EB]' : 'border-[#2E2E33]'}`}>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B87333]">
                  {activeCap.badge}
                </span>
                <h3 className={`text-2xl sm:text-3xl font-bold mt-1 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  {activeCap.title}
                </h3>
              </div>
            </div>

            {/* Description & Concrete Scenarios Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
              {/* Left: Engineering Overview */}
              <div className="lg:col-span-6 space-y-4">
                <p className={`text-sm sm:text-base leading-relaxed ${isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'}`}>
                  {activeCap.description}
                </p>

                <div className="pt-2 space-y-2">
                  <div className={`text-xs font-mono font-bold uppercase tracking-wider ${isDay ? 'text-[#6B7280]' : 'text-[#A1A1AA]'}`}>
                    Kluczowe parametry wdrożenia:
                  </div>
                  {activeCap.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-xs">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#10B981] shrink-0" />
                      <span className={isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'}>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Real-Life Automation Scenario */}
              <div className={`lg:col-span-6 p-6 rounded-[2px] border flex flex-col justify-between ${
                isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-white/5'
              }`}>
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#B87333]">
                      Scenariusz w codziennym życiu:
                    </span>
                  </div>
                  <p className={`text-sm leading-relaxed ${isDay ? 'text-[#111827]' : 'text-[#F3F4F6]'}`}>
                    «{activeCap.scenariosExample}»
                  </p>
                </div>

                <div className={`mt-4 pt-4 border-t flex items-center justify-between text-xs ${
                  isDay ? 'border-[#E5E7EB]' : 'border-white/10'
                }`}>
                  <span className={isDay ? 'text-[#6B7280]' : 'text-[#71717A]'}>
                    Autonomia: praca lokalna w sieci LAN
                  </span>
                  <Link
                    to="/scenariusze"
                    className="font-bold text-[#B87333] hover:text-[#A36034] flex items-center gap-1.5 transition-colors"
                  >
                    <span>Wszystkie scenariusze</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Bottom Comparison: Shelly Pro DIN vs Shelly Plus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Shelly Pro DIN Role */}
              <div className={`p-5 rounded-[2px] border ${
                isDay
                  ? 'bg-[#F9FAFB] border-[#E5E7EB]'
                  : 'bg-[#1F1F23] border-white/5'
              }`}>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-6 h-6 rounded-[2px] bg-[#10B981]/20 text-[#10B981] flex items-center justify-center font-mono font-bold text-xs">
                    DIN
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                      Shelly Pro DIN (Rozdzielnica Główna)
                    </h4>
                    <span className="text-[10px] text-[#10B981] font-mono font-semibold uppercase tracking-wider">
                      Przewodowy port LAN RJ45 • Szyna DIN • Pomiar PM
                    </span>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'}`}>
                  {activeCap.proAdvantage}
                </p>
              </div>

              {/* Shelly Plus Role */}
              <div className={`p-5 rounded-[2px] border ${
                isDay
                  ? 'bg-[#F9FAFB] border-[#E5E7EB]'
                  : 'bg-[#1F1F23] border-white/5'
              }`}>
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-6 h-6 rounded-[2px] bg-[#38BDF8]/20 text-[#38BDF8] flex items-center justify-center font-mono font-bold text-xs">
                    BOX
                  </div>
                  <div>
                    <h4 className={`text-sm font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                      Shelly Plus & BLU (Dopuszkowe i Bezprzewodowe)
                    </h4>
                    <span className="text-[10px] text-[#38BDF8] font-mono font-semibold uppercase tracking-wider">
                      Bez kucia tynków • Puszki 60mm & BLE Mesh
                    </span>
                  </div>
                </div>
                <p className={`text-xs leading-relaxed ${isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'}`}>
                  {activeCap.shellyAdvantage}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
