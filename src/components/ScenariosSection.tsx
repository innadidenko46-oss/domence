import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SCENARIOS } from '../data/content.ts';
import {
  Check,
  ShieldAlert,
  ShieldCheck,
  LogOut,
  Droplets,
  Video,
  Moon,
  ChevronRight,
  Sparkles,
  Sun,
  SunMedium,
  SlidersHorizontal,
  Volume2,
  Wind,
  Power,
  Flame,
  Radio,
  Bell,
  Film,
  Zap,
  Mic,
  Clock,
  Coffee,
  Tv,
  KeyRound,
  Lock,
  Eye,
  Phone,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { Link } from 'react-router-dom';

export const ScenariosSection: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(SCENARIOS[0].id);
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const activeScenario = SCENARIOS.find((s) => s.id === activeScenarioId) || SCENARIOS[0];

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'LogOut':
        return <LogOut className="w-4 h-4" />;
      case 'Droplets':
        return <Droplets className="w-4 h-4" />;
      case 'Video':
        return <Video className="w-4 h-4" />;
      case 'Moon':
        return <Moon className="w-4 h-4" />;
      case 'Sun':
        return <Sun className="w-4 h-4" />;
      case 'SunMedium':
        return <SunMedium className="w-4 h-4" />;
      case 'SlidersHorizontal':
        return <SlidersHorizontal className="w-4 h-4" />;
      case 'Volume2':
        return <Volume2 className="w-4 h-4" />;
      case 'Wind':
        return <Wind className="w-4 h-4" />;
      case 'Power':
        return <Power className="w-4 h-4" />;
      case 'Flame':
        return <Flame className="w-4 h-4" />;
      case 'Radio':
        return <Radio className="w-4 h-4" />;
      case 'Bell':
        return <Bell className="w-4 h-4" />;
      case 'Film':
        return <Film className="w-4 h-4" />;
      case 'Tv':
        return <Tv className="w-4 h-4" />;
      case 'Zap':
        return <Zap className="w-4 h-4" />;
      case 'Sparkles':
        return <Sparkles className="w-4 h-4" />;
      case 'Coffee':
        return <Coffee className="w-4 h-4" />;
      case 'KeyRound':
        return <KeyRound className="w-4 h-4" />;
      case 'Lock':
        return <Lock className="w-4 h-4" />;
      case 'Eye':
        return <Eye className="w-4 h-4" />;
      case 'Phone':
        return <Phone className="w-4 h-4" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4" />;
      case 'Check':
        return <Check className="w-4 h-4" />;
      default:
        return <ShieldAlert className="w-4 h-4" />;
    }
  };

  return (
    <section id="scenariusze" className={`py-24 relative overflow-hidden transition-colors duration-500 border-t ${
      isDay ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#06121A] border-white/10 text-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500 mb-3 font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Scenariusze Automatyki Budynkowej</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDay ? 'text-slate-950' : 'text-white'
          }`}>
            Gotowe sekwencje dla domu i rezydencji
          </h2>
          <p className={`mt-4 text-sm sm:text-base max-w-2xl leading-relaxed ${
            isDay ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Automatyka bez skomplikowanych instrukcji: inteligentne wietrzenie bez strat ciepła, natychmiastowe odcięcie wycieków wody i gazu, bilansowanie energii fotowoltaicznej oraz rozpoznawanie auta domownika.
          </p>
        </div>

        {/* Interactive Scenario Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-9 gap-2 mb-8">
          {SCENARIOS.map((sc) => {
            const isActive = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`p-3.5 rounded-2xl text-left transition-all relative border flex flex-col justify-between min-h-[110px] cursor-pointer ${
                  isActive
                    ? isDay
                      ? 'bg-amber-50 border-amber-400/80 shadow-md shadow-amber-500/10'
                      : 'bg-[#0E2B3C] border-amber-400/80 shadow-xl shadow-amber-500/10'
                    : isDay
                      ? 'bg-slate-50 border-slate-200 hover:border-amber-300 hover:bg-slate-100/70'
                      : 'bg-[#0A2230]/60 border-white/5 hover:border-white/20 hover:bg-[#0A2230]'
                }`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-[11px] font-mono font-bold ${
                      isActive ? (isDay ? 'text-amber-800' : 'text-amber-400') : 'text-slate-400'
                    }`}
                  >
                    {sc.number}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-lg flex items-center justify-center ${
                      isActive
                        ? 'bg-amber-500 text-slate-950 font-bold'
                        : isDay
                          ? 'bg-slate-200/80 text-slate-600'
                          : 'bg-white/5 text-slate-400'
                    }`}
                  >
                    {getIcon(sc.icon)}
                  </div>
                </div>

                <div className="mt-2.5">
                  <div className={`text-[10px] font-semibold uppercase tracking-wider line-clamp-1 ${
                    isActive ? (isDay ? 'text-amber-800' : 'text-amber-400') : (isDay ? 'text-slate-500' : 'text-slate-400')
                  }`}>
                    {sc.tag}
                  </div>
                  <div className={`text-xs font-bold leading-snug line-clamp-2 mt-0.5 ${
                    isDay ? 'text-slate-900' : 'text-white'
                  }`}>
                    {sc.title}
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeScenarioIndicator"
                    className="absolute bottom-0 inset-x-3 h-[2px] bg-amber-500 rounded-full"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Active Scenario Showcase Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScenario.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.35 }}
            className={`rounded-3xl border overflow-hidden shadow-2xl ${
              isDay ? 'bg-white border-slate-200 shadow-slate-200/60' : 'bg-[#0A2230]/80 border-white/10'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Scenario Image */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[500px] overflow-hidden bg-slate-900">
                <img
                  src={activeScenario.imageUrl}
                  alt={activeScenario.title}
                  className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105 filter brightness-90"
                />
                <div className={`absolute inset-0 ${
                  isDay
                    ? 'bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/50 via-transparent to-transparent'
                    : 'bg-gradient-to-t lg:bg-gradient-to-r from-[#06121A] via-[#06121A]/40 to-transparent'
                }`} />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full backdrop-blur-md text-xs font-bold uppercase tracking-wider border ${
                    isDay 
                      ? 'bg-white/95 text-amber-900 border-amber-300' 
                      : 'bg-[#071822]/85 text-amber-400 border-amber-500/30'
                  }`}>
                    {activeScenario.tag}
                  </span>
                </div>

                {/* Activation Trigger Pill on bottom of image */}
                {activeScenario.trigger && (
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-2xl bg-[#071822]/90 backdrop-blur-md border border-white/10 text-xs text-slate-200 flex items-start gap-2.5">
                    <Mic className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-amber-400 block mb-0.5">
                        Wyzwalacz scenariusza:
                      </span>
                      {activeScenario.trigger}
                    </div>
                  </div>
                )}
              </div>

              {/* Scenario Content */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className={`text-xs font-mono font-bold uppercase tracking-widest ${
                      isDay ? 'text-amber-800' : 'text-amber-400'
                    }`}>
                      Scenariusz {activeScenario.number}
                    </span>
                  </div>
                  <h3 className={`font-display text-2xl sm:text-3xl font-extrabold ${
                    isDay ? 'text-slate-900' : 'text-white'
                  }`}>
                    {activeScenario.title}
                  </h3>
                  <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
                    isDay ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    {activeScenario.description}
                  </p>

                  {/* Step-by-Step Action Sequence */}
                  {activeScenario.actionSteps && activeScenario.actionSteps.length > 0 && (
                    <div className="mt-5">
                      <div className={`text-xs font-bold uppercase tracking-wider mb-2.5 ${
                        isDay ? 'text-slate-700' : 'text-slate-300'
                      }`}>
                        Sekwencja automatycznych działań w ułamku sekundy:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeScenario.actionSteps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className={`p-3 rounded-2xl border flex items-start gap-2.5 text-xs ${
                              isDay
                                ? 'bg-slate-50 border-slate-200 text-slate-700'
                                : 'bg-[#071822] border-white/5 text-slate-300'
                            }`}
                          >
                            <div className="w-7 h-7 rounded-xl bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0">
                              {getIcon(step.icon)}
                            </div>
                            <div>
                              <div className={`font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>
                                {step.label}
                              </div>
                              <div className="text-[11px] text-slate-400 mt-0.5 leading-snug">
                                {step.detail}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Practical insight Box */}
                  <div className={`mt-5 p-4 rounded-2xl border text-xs leading-relaxed ${
                    isDay 
                      ? 'bg-amber-50/60 border-amber-200/80 text-slate-800' 
                      : 'bg-[#071822] border-white/5 text-slate-200'
                  }`}>
                    <span className={`font-bold block mb-1 ${isDay ? 'text-amber-900' : 'text-amber-300'}`}>
                      Działanie w praktyce:
                    </span>
                    {activeScenario.humanNote}
                  </div>

                  {/* Detail Bullet Points */}
                  <div className="mt-5 space-y-2">
                    {activeScenario.detailPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-full bg-amber-500/20 text-amber-500 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className={`text-xs sm:text-sm font-medium ${
                          isDay ? 'text-slate-700' : 'text-slate-300'
                        }`}>
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className={`mt-8 pt-6 border-t flex items-center justify-between ${
                  isDay ? 'border-slate-200' : 'border-white/10'
                }`}>
                  <span className={`text-xs ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
                    Local-First • Brak zależności od chmury
                  </span>
                  <Link
                    to="/kalkulator"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-amber-500 hover:text-amber-600 transition-colors"
                  >
                    <span>Skonfiguruj ten scenariusz</span>
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
