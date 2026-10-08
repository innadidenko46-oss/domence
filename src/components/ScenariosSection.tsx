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
  Coffee,
  Tv,
  KeyRound,
  Lock,
  Eye,
  Phone,
  Lightbulb,
  LightbulbOff,
  Thermometer,
  HardDrive,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const ScenariosSection: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState(SCENARIOS[0].id);

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
      case 'Lightbulb':
        return <Lightbulb className="w-4 h-4" />;
      case 'LightbulbOff':
        return <LightbulbOff className="w-4 h-4" />;
      case 'Thermometer':
        return <Thermometer className="w-4 h-4" />;
      case 'HardDrive':
        return <HardDrive className="w-4 h-4" />;
      default:
        return <ShieldAlert className="w-4 h-4" />;
    }
  };

  return (
    <section id="scenariusze" className="py-16 relative overflow-hidden transition-colors duration-500 border-t bg-white border-[#E5E7EB] text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B87333] mb-3 font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Przykłady z życia</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-950">
            Przykłady: co dom robi za Ciebie
          </h2>
          <p className="mt-4 text-sm sm:text-base max-w-prose leading-relaxed text-slate-600">
            Dom robi część rzeczy sam: zakręca wodę, gasi światła i otwiera bramę Twojemu autu. Bez skomplikowanych instrukcji.
          </p>
        </div>

        {/* Interactive Scenario Selector Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2 mb-8">
          {SCENARIOS.map((sc) => {
            const isActive = sc.id === activeScenarioId;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`p-3.5 rounded-[2px] text-left transition-all relative border flex flex-col justify-between min-h-[110px] cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-[#B87333]/10 border-[#C27A4E]/80 shadow-md shadow-[#B87333]/10': 'bg-[#F9FAFB] border-[#E5E7EB] hover:border-[#B87333]/30 hover:bg-[#F3F4F6]'}`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-[11px] font-mono font-bold ${
                      isActive ? ('text-[#7C4A1F]') : 'text-slate-400'
                    }`}
                  >
                    {sc.number}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-[2px] flex items-center justify-center ${
                      isActive
                        ? 'bg-[#B87333] text-white font-bold'
                        : 'bg-[#E5E7EB] text-slate-600'}`}
                  >
                    {getIcon(sc.icon)}
                  </div>
                </div>

                <div className="mt-2.5">
                  <div className={`text-[10px] font-semibold uppercase tracking-wider line-clamp-1 ${
                    isActive ? ('text-[#7C4A1F]') : ('text-slate-500')
                  }`}>
                    {sc.tag}
                  </div>
                  <div className="text-xs font-bold leading-snug line-clamp-2 mt-0.5 text-slate-900">
                    {sc.title}
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeScenarioIndicator"
                    className="absolute bottom-0 inset-x-3 h-[2px] bg-[#B87333] rounded-[2px]"
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
            className="rounded-[2px] border overflow-hidden shadow-2xl bg-white border-[#E5E7EB] shadow-slate-200/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Scenario Image */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[500px] overflow-hidden bg-slate-900">
                <img
                  src={activeScenario.imageUrl}
                  alt={`${activeScenario.title} — scenariusz automatyki domowej`}
                  className="w-full h-full object-cover object-center duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-[2px] backdrop-blur-md text-xs font-bold uppercase tracking-wider border bg-white/95 text-[#7C4A1F] border-[#B87333]/30">
                    {activeScenario.tag}
                  </span>
                </div>

                {/* Activation Trigger Pill on bottom of image */}
                {activeScenario.trigger && (
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-[2px] bg-[#071822]/90 backdrop-blur-md border border-white/10 text-xs text-slate-200 flex items-start gap-2.5">
                    <Mic className="w-4 h-4 text-[#C27A4E] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-[10px] uppercase font-bold text-[#C27A4E] block mb-0.5">
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
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#7C4A1F]">
                      Scenariusz {activeScenario.number}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                    {activeScenario.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
                    {activeScenario.description}
                  </p>

                  {/* Step-by-Step Action Sequence */}
                  {activeScenario.actionSteps && activeScenario.actionSteps.length > 0 && (
                    <div className="mt-5">
                      <div className="text-xs font-bold uppercase tracking-wider mb-2.5 text-slate-700">
                        Co robi dom, zwykle w 1–2 sekundy:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeScenario.actionSteps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 rounded-[2px] border flex items-start gap-2.5 text-sm bg-[#F9FAFB] border-[#E5E7EB] text-slate-700"
                          >
                            <div className="w-7 h-7 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center shrink-0">
                              {getIcon(step.icon)}
                            </div>
                            <div>
                              <div className="font-bold text-slate-900">
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
                  <div className="mt-5 p-4 pl-5 rounded-[2px] border border-l-4 border-l-[#B87333] text-sm leading-relaxed bg-[#B87333]/10 border-[#B87333]/30 text-slate-800">
                    <span className="font-bold block mb-1 text-[#7C4A1F]">
                      Tak to działa u Ciebie:
                    </span>
                    {activeScenario.humanNote}
                  </div>

                  {/* Detail Bullet Points */}
                  <div className="mt-5 space-y-2">
                    {activeScenario.detailPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-slate-700">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t flex items-center justify-between border-[#E5E7EB]">
                  <span className="text-xs text-slate-500">
                    Działa w domu, bez obcych serwerów
                  </span>
                  <Link
                    to="/kalkulator"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#B87333] hover:text-[#A36034] transition-colors focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                  >
                    <span>Wypełnij ankietę (2 min)</span>
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
