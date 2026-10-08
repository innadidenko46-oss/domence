import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Sun, Sunset, Moon, Sliders, Eye, ShieldCheck, Thermometer } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface AtmosphereScene {
  id: 'day' | 'dusk' | 'night';
  time: string;
  name: string;
  kelvin: string;
  lux: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const SCENES: AtmosphereScene[] = [
  {
    id: 'day',
    time: '12:00 • Południe',
    name: 'Naturalne Światło Dzienne',
    kelvin: '5000K (Biel dzienna)',
    lux: '750 lx na blatach',
    title: 'Światło, które wspiera koncentrację i chroni przed przegrzaniem',
    description:
      'Czujniki nasłonecznienia na dachu automatycznie sterują kątem lameli żaluzji fasadowych. Wnętrze pozostaje jasne i przestronne, podczas gdy promienie słoneczne nie nagrzewają salonu.',
    image:
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85',
    features: [
      'Automatyczna ochrona termiczna bez zaciemniania widoku',
      'Neutralne światło ułatwiające pracę i czytanie',
      'Integracja z rekuperacją i pompą ciepła w godzinach szczytu PV',
    ],
  },
  {
    id: 'dusk',
    time: '19:45 • Złota Godzina',
    name: 'Ciepły Zmierzch',
    kelvin: '2700K (Ciepły bursztyn)',
    lux: '220 lx (Światło relaksu)',
    title: 'Bezszelestne przejście w tryb wypoczynku i prywatności',
    description:
      'Gdy słońce chowa się za horyzontem, oświetlenie sufitowe powoli ustępuje miejsca liniom LED i lampom stołowym. Rolety opuszczają się bezszelestnie, zapewniając pełną intymność.',
    image:
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1600&q=85',
    features: [
      'Dyskretne podświetlenie strefy wejściowej i korytarzy',
      'Temperatura barwowa schodzi do 2700K – wzrok natychmiast odpoczywa',
      'Jeden dotyk przycisku przy kanapie przygotowuje scenę kinową',
    ],
  },
  {
    id: 'night',
    time: '23:30 • Cisza Nocna',
    name: 'Spokojna Noc',
    kelvin: '2000K (Bursztynowa poświata)',
    lux: '15 lx (Bezpieczna orientacja)',
    title: 'Orientacja bez oślepiania domowników',
    description:
      'Wstajesz w nocy do kuchni lub pokoju dziecka? Czujniki ruchu włączają jedynie subtelne podświetlenie przy podłodze o jasności 5%. Brak nagłego błysku i brak wybudzania organizmu.',
    image:
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85',
    features: [
      'Miękkie światło cokołowe prowadzące do łazienki i schodów',
      'Czuwanie obwodowe czujników okiennych i drzwiowych',
      'Automatyczne wygaszenie wszystkich zbędnych zasilaczy i ekranów',
    ],
  },
];

export const LightingAtmosphereShowcase: React.FC = () => {
  const [activeId, setActiveId] = useState<'day' | 'dusk' | 'night'>('dusk');
  const { theme, toggleTheme } = useTheme();
  const isDayTheme = theme === 'day';

  const currentScene = SCENES.find((s) => s.id === activeId) || SCENES[1];

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-500 border-t ${
      isDayTheme 
        ? 'bg-slate-50 border-slate-200 text-slate-800' 
        : 'bg-[#03080D] border-white/10 text-slate-200'
    }`}>
      {/* Subtle architectural ambient light */}
      <div className={`absolute top-0 right-1/4 w-96 h-96 rounded-full blur-3xl pointer-events-none transition-opacity duration-700 ${
        activeId === 'day' 
          ? 'bg-sky-400/10' 
          : activeId === 'dusk' 
            ? 'bg-[#B87333]/10' 
            : 'bg-indigo-500/10'
      }`} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-semibold uppercase tracking-wider mb-3 border ${
              isDayTheme
                ? 'bg-[#B87333]/10 text-[#7C4A1F] border-[#B87333]/30'
                : 'bg-[#B87333]/10 text-[#C27A4E] border-[#B87333]/30'
            }`}>
              <Eye className="w-3.5 h-3.5" />
              <span>Światło & Dobowy Rytm</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight ${
              isDayTheme ? 'text-slate-900' : 'text-white'
            }`}>
              Jak Twój dom żyje za dnia, o zmierzchu i w nocy.
            </h2>
            <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isDayTheme ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Dobre oświetlenie nie polega na dużej liczbie lamp. Polega na odpowiedniej temperaturze barwowej 
              i natężeniu, które podążają za Twoim naturalnym biorytmem bez potrzeby ręcznego klikania.
            </p>
          </div>

          {/* Quick atmosphere buttons */}
          <div className={`flex flex-wrap items-center p-1.5 rounded-[2px] border shrink-0 w-full lg:w-auto ${
            isDayTheme ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#07151F] border-white/10'
          }`}>
            <button
              onClick={() => setActiveId('day')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-[2px] text-xs font-semibold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                activeId === 'day'
                  ? isDayTheme
                    ? 'bg-sky-500 text-white shadow-sm'
                    : 'bg-sky-500 text-slate-950 font-bold shadow-md shadow-sky-500/20'
                  : isDayTheme ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sun className="w-3.5 h-3.5" />
              <span>Dzień (12:00)</span>
            </button>

            <button
              onClick={() => setActiveId('dusk')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-[2px] text-xs font-semibold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                activeId === 'dusk'
                  ? 'bg-[#B87333] text-white font-bold shadow-md shadow-[#B87333]/20'
                  : isDayTheme ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Sunset className="w-3.5 h-3.5" />
              <span>Zmierzch (19:45)</span>
            </button>

            <button
              onClick={() => setActiveId('night')}
              className={`flex items-center gap-2 px-3.5 py-2 rounded-[2px] text-xs font-semibold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                activeId === 'night'
                  ? isDayTheme
                    ? 'bg-slate-900 text-white shadow-sm'
                    : 'bg-indigo-500 text-white font-bold shadow-md shadow-indigo-500/20'
                  : isDayTheme ? 'text-slate-600 hover:text-slate-900' : 'text-slate-400 hover:text-white'
              }`}
            >
              <Moon className="w-3.5 h-3.5" />
              <span>Noc (23:30)</span>
            </button>
          </div>
        </div>

        {/* Interactive Presentation Canvas */}
        <div className={`rounded-[2px] border overflow-hidden transition-all duration-500 ${
          isDayTheme 
            ? 'bg-white border-slate-200 shadow-xl shadow-slate-200/60' 
            : 'bg-[#071822] border-white/10 shadow-2xl'
        }`}>
          <div className="grid grid-cols-1 lg:grid-cols-12">
            
            {/* Visual Image Stage */}
            <div className="lg:col-span-7 relative min-h-[360px] lg:min-h-[460px] overflow-hidden bg-slate-900">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentScene.id}
                  initial={{ opacity: 0, scale: 1.03 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0"
                >
                  <img
                    src={currentScene.image}
                    alt={`${currentScene.name} — scena oświetlenia i atmosfery`}
                    className="w-full h-full object-cover"
                  />
                  {/* Atmospheric overlay tint */}
                  <div
                    className={`absolute inset-0 transition-all duration-700 ${
                      currentScene.id === 'day'
                        ? 'bg-sky-500/5'
                        : currentScene.id === 'dusk'
                          ? 'bg-gradient-to-t from-black/80 via-[#7C4A1F]/20 to-transparent'
                          : 'bg-gradient-to-t from-black/90 via-indigo-950/40 to-transparent'
                    }`}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Badges on top of image */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2 z-10">
                <div className="px-3 py-1.5 rounded-[2px] bg-black/60 backdrop-blur-md border border-white/15 text-white text-xs font-mono font-bold flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C27A4E] animate-pulse" />
                  <span>{currentScene.time}</span>
                </div>
                <div className="px-3 py-1.5 rounded-[2px] bg-black/60 backdrop-blur-md border border-white/15 text-[#C27A4E] text-xs font-mono font-medium">
                  {currentScene.kelvin}
                </div>
              </div>

              {/* Bottom Light Metric */}
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between p-3 rounded-[2px] bg-black/70 backdrop-blur-md border border-white/10 text-white text-xs z-10">
                <div className="flex items-center gap-2">
                  <Sliders className="w-4 h-4 text-[#C27A4E]" />
                  <span className="font-semibold">{currentScene.name}</span>
                </div>
                <div className="text-slate-300 font-mono">
                  {currentScene.lux}
                </div>
              </div>
            </div>

            {/* Content & Architectural Details */}
            <div className={`lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between ${
              isDayTheme ? 'bg-white text-slate-800' : 'bg-[#071822] text-slate-200'
            }`}>
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Thermometer className="w-4 h-4 text-[#B87333]" />
                  <span className={`text-xs font-mono uppercase tracking-wider ${
                    isDayTheme ? 'text-[#A36034]' : 'text-[#C27A4E]'
                  }`}>
                    Scena: {currentScene.name}
                  </span>
                </div>

                <h3 className={`text-xl sm:text-2xl font-bold tracking-tight mb-4 ${
                  isDayTheme ? 'text-slate-900' : 'text-white'
                }`}>
                  {currentScene.title}
                </h3>

                <p className={`text-sm leading-relaxed mb-6 font-light ${
                  isDayTheme ? 'text-slate-600' : 'text-slate-300'
                }`}>
                  {currentScene.description}
                </p>

                {/* Bullets */}
                <div className="space-y-2.5 mb-8">
                  {currentScene.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                      <div className="w-5 h-5 rounded-[2px] bg-[#B87333]/15 text-[#B87333] flex items-center justify-center shrink-0 mt-0.5">
                        <ShieldCheck className="w-3.5 h-3.5" />
                      </div>
                      <span className={isDayTheme ? 'text-slate-700' : 'text-slate-300'}>
                        {feat}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sync theme CTA */}
              <div className={`pt-4 border-t flex items-center justify-between gap-4 ${
                isDayTheme ? 'border-slate-200' : 'border-white/10'
              }`}>
                <div className="text-xs text-slate-500">
                  Motyw całej strony:
                </div>
                <button
                  onClick={toggleTheme}
                  role="switch"
                  aria-checked={!isDayTheme}
                  className={`text-xs font-semibold px-3 py-1.5 rounded-[2px] border transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                    isDayTheme
                      ? 'bg-slate-100 hover:bg-slate-200 border-slate-200 text-slate-800'
                      : 'bg-white/5 hover:bg-white/10 border-white/10 text-[#C27A4E]'
                  }`}
                >
                  {isDayTheme ? 'Przełącz stronę na tryb nocny' : 'Przełącz stronę na tryb jasny'}
                </button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
