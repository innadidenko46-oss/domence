import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SHELLY_PRO_CAPABILITIES } from '../data/content.ts';
import {
  Sun,
  SlidersHorizontal,
  Flame,
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
      case 'cap-sensors':
        return <Radar className="w-4 h-4" />;
      case 'cap-interface':
        return <Smartphone className="w-4 h-4" />;
      default:
        return <Cpu className="w-4 h-4" />;
    }
  };

  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t transition-colors bg-gray-100 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-mono font-semibold uppercase tracking-wider mb-3 border bg-gray-100 text-gray-700 border-gray-300">
              <Layers className="w-3.5 h-3.5 text-copper-600" />
              <span>Co potrafi • Shelly Pro i Plus</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-gray-900">
              Shelly Pro i Plus: światło i rolety bez kucia i z rozdzielnicy
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Dostajesz światło, rolety i ogrzewanie sterowane z telefonu i zwykłych włączników. Do nowego domu wkładamy moduły do rozdzielnicy, do gotowego mieszkania — małe moduły pod włączniki.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-2.5 py-1 rounded-[2px] border font-mono font-medium bg-white border-gray-200 text-gray-700">
              Kabel do rozdzielnicy
            </span>
            <span className="px-2.5 py-1 rounded-[2px] border font-mono font-medium bg-white border-gray-200 text-gray-700">
              Szyna DIN w rozdzielnicy
            </span>
            <span className="px-2.5 py-1 rounded-[2px] border font-mono font-medium bg-white border-gray-200 text-gray-700">
              Działa w domu, bez obcych serwerów
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
                    ? 'bg-white border-2 border-copper-500 shadow-sm': 'bg-gray-100 border-gray-200 hover:border-gray-300'}`}
              >
                <div className={`w-7 h-7 rounded-[2px] flex items-center justify-center mb-2.5 ${
                  isSelected
                    ? 'bg-copper-600 text-white'
                    : 'bg-white text-gray-600 border border-gray-200'}`}>
                  {getCapIcon(cap.id)}
                </div>
                <div>
                  <div className={`text-xs font-mono font-semibold uppercase tracking-wider line-clamp-1 ${
                    isSelected
                      ? 'text-copper-600'
                      : 'text-gray-500'}`}>
                    {cap.badge}
                  </div>
                  <div className="text-xs font-bold mt-0.5 leading-snug line-clamp-2 text-gray-900">
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
            className="rounded-[2px] border p-6 sm:p-8 lg:p-10 shadow-sm bg-white border-gray-200"
          >
            {/* Header of Active Feature */}
            <div className="flex flex-col md:flex-row md:items-center justify-between pb-6 border-b gap-4 mb-8 border-gray-200">
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-copper-600">
                  {activeCap.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-gray-900">
                  {activeCap.title}
                </h3>
              </div>
            </div>

            {/* Description & Concrete Scenarios Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-8">
              {/* Left: Engineering Overview */}
              <div className="lg:col-span-6 space-y-4">
                <p className="text-sm sm:text-base leading-relaxed text-gray-700">
                  {activeCap.description}
                </p>

                <div className="pt-2 space-y-2">
                  <div className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500">
                    Kluczowe parametry:
                  </div>
                  {activeCap.features.map((feat, idx) => (
                    <div key={idx} className="flex items-center gap-2.5 text-sm">
                      <CheckCircle2 className="w-3.5 h-3.5 text-copper-600 shrink-0" />
                      <span className="text-gray-700">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Real-Life Automation Scenario */}
              <div className="lg:col-span-6 rounded-[2px] border flex flex-col justify-between overflow-hidden bg-gray-50 border-gray-200">
                <div className="relative h-40 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85"
                    alt="Moduły elektroniki automatyki domowej z bliska"
                    loading="lazy"
                    className="w-full h-full object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                </div>
                <div className="p-6 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-copper-600">
                      Tak to wygląda u Ciebie w domu:
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-900">
                    „{activeCap.scenariosExample}”
                  </p>
                </div>

                <div className="mt-4 pt-4 border-t flex items-center justify-between text-xs border-gray-200">
                  <span className="text-gray-500">
                    Działa w domu, także bez internetu
                  </span>
                  <Link
                    to="/scenariusze"
                    className="font-bold text-copper-600 hover:text-copper-800 flex items-center gap-1.5 transition-colors"
                  >
                    <span>Wszystkie scenariusze</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
                </div>
              </div>
            </div>

            {/* Bottom Comparison: Shelly Pro DIN vs Shelly Plus */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Shelly Pro DIN Role */}
              <div className="p-5 rounded-[2px] border bg-gray-50 border-gray-200">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-6 h-6 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center font-mono font-bold text-xs">
                    DIN
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      Shelly Pro do rozdzielnicy
                    </h4>
                    <span className="text-xs text-copper-600 font-mono font-semibold uppercase tracking-wider">
                      Kabel • Szyna DIN • Pomiar prądu
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
                  {activeCap.proAdvantage}
                </p>
              </div>

              {/* Shelly Plus Role */}
              <div className="p-5 rounded-[2px] border bg-gray-50 border-gray-200">
                <div className="flex items-center gap-2.5 mb-2.5">
                  <div className="w-6 h-6 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center font-mono font-bold text-xs">
                    BOX
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-gray-900">
                      Shelly Plus i BLU (pod włącznik, bez kucia)
                    </h4>
                    <span className="text-xs text-copper-600 font-mono font-semibold uppercase tracking-wider">
                      Bez kucia tynków • Puszki 60 mm i BLE Mesh
                    </span>
                  </div>
                </div>
                <p className="text-sm leading-relaxed text-gray-600">
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
