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
    <section id="scenariusze" className="py-16 relative overflow-hidden transition-colors duration-500 border-t bg-white border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-copper-600 mb-3 font-semibold">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Przykłady z życia</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gray-950">
            Przykłady: co dom robi za Ciebie
          </h2>
          <p className="mt-4 text-sm sm:text-base max-w-prose leading-relaxed text-gray-600">
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
                className={`p-3.5 rounded-[2px] text-left transition-all relative border flex flex-col justify-between min-h-[110px] cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 ${
                  isActive
                    ? 'bg-copper-500/10 border-copper-400/80 shadow-md shadow-copper-500/10': 'bg-gray-50 border-gray-200 hover:border-copper-500/30 hover:bg-gray-100'}`}
              >
                <div className="flex items-center justify-between w-full">
                  <span
                    className={`text-xs font-mono font-bold ${
                      isActive ? ('text-copper-800') : 'text-gray-400'
                    }`}
                  >
                    {sc.number}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-[2px] flex items-center justify-center ${
                      isActive
                        ? 'bg-copper-600 text-white font-bold'
                        : 'bg-gray-200 text-gray-600'}`}
                  >
                    {getIcon(sc.icon)}
                  </div>
                </div>

                <div className="mt-2.5">
                  <div className={`text-xs font-semibold uppercase tracking-wider line-clamp-1 ${
                    isActive ? ('text-copper-800') : ('text-gray-500')
                  }`}>
                    {sc.tag}
                  </div>
                  <div className="text-xs font-bold leading-snug line-clamp-2 mt-0.5 text-gray-900">
                    {sc.title}
                  </div>
                </div>

                {isActive && (
                  <motion.div
                    layoutId="activeScenarioIndicator"
                    className="absolute bottom-0 inset-x-3 h-[2px] bg-copper-600 rounded-[2px]"
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
            className="rounded-[2px] border overflow-hidden shadow-2xl bg-white border-gray-200 shadow-gray-200/60"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Scenario Image */}
              <div className="lg:col-span-5 relative min-h-[280px] lg:min-h-[500px] overflow-hidden bg-gray-900">
                <img
                  src={activeScenario.imageUrl}
                  alt={`${activeScenario.title} — scenariusz automatyki domowej`}
                  className="w-full h-full object-cover object-center duration-700 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900/50 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-[2px] backdrop-blur-md text-xs font-bold uppercase tracking-wider border bg-white/95 text-copper-800 border-copper-500/30">
                    {activeScenario.tag}
                  </span>
                </div>

                {/* Activation Trigger Pill on bottom of image */}
                {activeScenario.trigger && (
                  <div className="absolute bottom-4 left-4 right-4 p-3.5 rounded-[2px] bg-navy-950/90 backdrop-blur-md border border-white/10 text-xs text-gray-200 flex items-start gap-2.5">
                    <Mic className="w-4 h-4 text-copper-400 shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs uppercase font-bold text-copper-400 block mb-0.5">
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
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-copper-800">
                      Scenariusz {activeScenario.number}
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {activeScenario.title}
                  </h3>
                  <p className="mt-3 text-sm sm:text-base leading-relaxed text-gray-600">
                    {activeScenario.description}
                  </p>

                  {/* Step-by-Step Action Sequence */}
                  {activeScenario.actionSteps && activeScenario.actionSteps.length > 0 && (
                    <div className="mt-5">
                      <div className="text-xs font-bold uppercase tracking-wider mb-2.5 text-gray-700">
                        Co robi dom, zwykle w 1–2 sekundy:
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                        {activeScenario.actionSteps.map((step, sIdx) => (
                          <div
                            key={sIdx}
                            className="p-3 rounded-[2px] border flex items-start gap-2.5 text-sm bg-gray-50 border-gray-200 text-gray-700"
                          >
                            <div className="w-7 h-7 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center shrink-0">
                              {getIcon(step.icon)}
                            </div>
                            <div>
                              <div className="font-bold text-gray-900">
                                {step.label}
                              </div>
                              <div className="text-xs text-gray-400 mt-0.5 leading-snug">
                                {step.detail}
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Practical insight Box */}
                  <div className="mt-5 p-4 pl-5 rounded-[2px] border border-l-4 border-l-copper-500 text-sm leading-relaxed bg-copper-500/10 border-copper-500/30 text-gray-800">
                    <span className="font-bold block mb-1 text-copper-800">
                      Tak to działa u Ciebie:
                    </span>
                    {activeScenario.humanNote}
                  </div>

                  {/* Detail Bullet Points */}
                  <div className="mt-5 space-y-2">
                    {activeScenario.detailPoints.map((point, i) => (
                      <div key={i} className="flex items-start gap-2.5">
                        <div className="w-4 h-4 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3" />
                        </div>
                        <span className="text-xs sm:text-sm font-medium text-gray-700">
                          {point}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-6 border-t flex items-center justify-between border-gray-200">
                  <span className="text-xs text-gray-500">
                    Działa w domu, bez obcych serwerów
                  </span>
                  <Link
                    to="/kalkulator"
                    className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-copper-600 hover:text-copper-800 transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                  >
                    <span>Dobierz zestaw (2 min)</span>
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
