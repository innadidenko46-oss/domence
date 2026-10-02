import React, { useState } from 'react';
import { motion } from 'motion/react';
import { SYSTEM_COMPARISONS } from '../data/content.ts';
import {
  Layers,
  Check,
  X,
  ShieldCheck,
  HelpCircle,
  Cable,
  ArrowRight,
  Info,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { Link } from 'react-router-dom';

export const SystemsComparisonSection: React.FC<{ onConsultSystem?: (systemName: string) => void }> = ({
  onConsultSystem,
}) => {
  const [activeSystemId, setActiveSystemId] = useState<string>('shelly_pro');
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const activeSystem = SYSTEM_COMPARISONS.find((s) => s.id === activeSystemId) || SYSTEM_COMPARISONS[0];

  return (
    <section id="systemy" className={`py-24 relative overflow-hidden border-t transition-colors ${
      isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Chapter Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#334E68]/15 border border-[#334E68]/30 text-[#486581] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Systemy & Standardy Technologiczne</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              isDay ? 'text-[#111827]' : 'text-[#F3F4F6]'
            }`}>
              Rzetelne porównanie architektur
            </h2>
            <p className={`mt-3 text-sm sm:text-base max-w-2xl leading-relaxed ${
              isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
            }`}>
              Dobieramy technologię ściśle do etapu inwestycji: rozdzielnica modułowa Shelly Pro na szynie DIN w nowym domu lub bezpyłowe mikromoduły Shelly Plus w wykończonym lokalu.
            </p>
          </div>

          <div className={`mt-6 md:mt-0 flex items-center gap-2 text-xs p-3 rounded-[2px] border ${
            isDay ? 'bg-[#F3F4F6] border-[#E5E7EB] text-[#4B5563]' : 'bg-[#27272A] border-white/10 text-[#A1A1AA]'
          }`}>
            <Info className="w-4 h-4 text-[#B87333] shrink-0" />
            <span>Wybierz technologię, aby sprawdzić specyfikację</span>
          </div>
        </div>

        {/* System Selector Tabs - Max 4px radius */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          {SYSTEM_COMPARISONS.map((system) => {
            const isSelected = system.id === activeSystemId;
            return (
              <button
                key={system.id}
                onClick={() => setActiveSystemId(system.id)}
                className={`p-4 rounded-[2px] text-left transition-all border flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? isDay
                      ? 'bg-white border-2 border-[#B87333] shadow-sm'
                      : 'bg-[#27272A] border-2 border-[#B87333] shadow-sm'
                    : isDay
                      ? 'bg-[#F3F4F6] border-[#E5E7EB] hover:border-[#D1D5DB]'
                      : 'bg-[#202024] border-[#2E2E33] hover:border-[#3F3F46]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span
                      className={`text-[10px] font-mono font-semibold uppercase tracking-wider px-2 py-0.5 rounded-[2px] border ${
                        isSelected
                          ? 'bg-[#B87333]/15 text-[#B87333] border-[#B87333]/30'
                          : isDay
                            ? 'bg-white text-[#4B5563] border-[#E5E7EB]'
                            : 'bg-white/5 text-[#A1A1AA] border-white/10'
                      }`}
                    >
                      {system.estimatedCostScale}
                    </span>
                    {system.id === 'shelly_pro' && (
                      <span className="text-[9px] font-mono text-[#10B981] bg-[#10B981]/10 px-1.5 py-0.5 rounded-[2px] border border-[#10B981]/30">
                        STANDARD INŻYNIERSKI
                      </span>
                    )}
                  </div>
                  <div className={`font-display font-bold text-base sm:text-lg ${
                    isDay ? 'text-[#111827]' : 'text-[#F4F4F5]'
                  }`}>
                    {system.name}
                  </div>
                </div>
                <div className={`text-[11px] mt-2 line-clamp-1 font-mono ${
                  isDay ? 'text-[#6B7280]' : 'text-[#71717A]'
                }`}>
                  {system.cableType}
                </div>
              </button>
            );
          })}
        </div>

        {/* In-depth System Detailed Panel */}
        <motion.div
          key={activeSystem.id}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className={`rounded-[2px] border p-6 sm:p-8 lg:p-10 shadow-sm relative ${
            isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#27272A]/90 border-white/10'
          }`}
        >
          {/* Top Banner with Human Translation */}
          <div className={`p-4 rounded-[2px] border mb-8 flex flex-col sm:flex-row items-start sm:items-center gap-4 ${
            isDay
              ? 'bg-[#F9FAFB] border-[#B87333]/30 text-[#111827]'
              : 'bg-[#18181B] border-[#B87333]/40 text-[#F3F4F6]'
          }`}>
            <div className="w-9 h-9 rounded-[2px] bg-[#B87333]/15 text-[#B87333] flex items-center justify-center shrink-0 border border-[#B87333]/30">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#B87333]">
                Wnioski dla inwestora:
              </div>
              <p className={`text-sm mt-1 leading-relaxed ${isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'}`}>
                {activeSystem.humanVerdict}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Specs Column */}
            <div className="lg:col-span-4 space-y-4">
              <div className={`p-4 rounded-[2px] border ${
                isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#1F1F23] border-white/5'
              }`}>
                <div className={`text-xs font-semibold mb-1 ${isDay ? 'text-[#6B7280]' : 'text-[#71717A]'}`}>Dla jakiego typu budynku?</div>
                <div className={`text-sm font-medium leading-relaxed ${isDay ? 'text-[#111827]' : 'text-[#F4F4F5]'}`}>{activeSystem.bestFor}</div>
              </div>

              <div className={`p-4 rounded-[2px] border ${
                isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#1F1F23] border-white/5'
              }`}>
                <div className={`text-xs font-semibold mb-1 ${isDay ? 'text-[#6B7280]' : 'text-[#71717A]'}`}>Typ połączenia i magistrala</div>
                <div className="text-sm font-semibold text-[#38BDF8] flex items-center gap-2">
                  <Cable className="w-4 h-4" />
                  <span>{activeSystem.cableType}</span>
                </div>
              </div>

              <div className={`p-4 rounded-[2px] border ${
                isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#1F1F23] border-white/5'
              }`}>
                <div className={`text-xs font-semibold mb-1 ${isDay ? 'text-[#6B7280]' : 'text-[#71717A]'}`}>Działanie offline bez internetu</div>
                <div className="text-sm font-semibold text-[#10B981] flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>{activeSystem.autonomyOffline}</span>
                </div>
              </div>
            </div>

            {/* Right Pros & Cons Column */}
            <div className="lg:col-span-8 flex flex-col justify-between">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {/* Pros */}
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#10B981] mb-3 flex items-center gap-1.5">
                    <Check className="w-4 h-4" />
                    <span>Zalety rozwiązania:</span>
                  </div>
                  <ul className="space-y-2 text-xs">
                    {activeSystem.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#10B981] shrink-0 mt-0.5" />
                        <span className={isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'}>{pro}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Cons */}
                <div>
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-[#F87171] mb-3 flex items-center gap-1.5">
                    <X className="w-4 h-4" />
                    <span>Wymagania i ograniczenia:</span>
                  </div>
                  <ul className="space-y-2 text-xs">
                    {activeSystem.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <X className="w-3.5 h-3.5 text-[#F87171] shrink-0 mt-0.5" />
                        <span className={isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'}>{con}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Consultation CTA */}
              <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 ${
                isDay ? 'border-[#E5E7EB]' : 'border-white/10'
              }`}>
                <div>
                  <div className={`text-sm font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                    Nie wiesz, który standard sprawdzi się na Twojej budowie?
                  </div>
                  <div className={`text-xs ${isDay ? 'text-[#6B7280]' : 'text-[#71717A]'}`}>
                    Prześlij projekt elektryczny lub rzut budynku – inżynier wskaże optymalną architekturę.
                  </div>
                </div>

                <Link
                  to="/kontakt"
                  className="btn-engineering-primary gap-2 cursor-pointer"
                >
                  <span>Skonsultuj projekt</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
};
