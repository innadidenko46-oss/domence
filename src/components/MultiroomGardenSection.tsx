import React from 'react';
import { HOME_MULTIMEDIA } from '../data/content.ts';
import {
  Volume2,
  Film,
  Music2,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../context/ThemeContext.tsx';

export const MultiroomGardenSection: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <section id="multimedia-kino" className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
      isDay ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#111827]' : 'bg-[#18181B] border-[#27272A] text-[#F3F4F6]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#B87333]/15 border border-[#B87333]/30 text-[#B87333] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Volume2 className="w-4 h-4" />
            <span>Multimedia &amp; Nagłośnienie</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] ${
            isDay ? 'text-[#111827]' : 'text-white'
          }`}>
            Muzyka w każdym pomieszczeniu. Prywatna sala kinowa w salonie.
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-[1.7] ${
            isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
          }`}>
            Dyskretne, bezramkowe głośniki sufitowe wpuszczane w tynk, automatyczne sceny kinowe z zaciemnieniem roletami blackout oraz bezpośrednie sterowanie jednym dotknięciem.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Multiroom Audio */}
          <div className={`rounded-[2px] border p-7 sm:p-8 flex flex-col justify-between ${
            isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
          }`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center shrink-0">
                  <Music2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                    {HOME_MULTIMEDIA.audio.title}
                  </h3>
                  <div className="text-xs text-[#B87333] font-mono mt-0.5">Apple AirPlay 2 • Spotify Connect • Multi-Zone</div>
                </div>
              </div>

              <p className={`text-xs sm:text-sm leading-[1.7] mb-5 ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                {HOME_MULTIMEDIA.audio.desc}
              </p>

              <div className={`p-4 rounded-[2px] border text-xs leading-relaxed mb-6 ${
                isDay ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#374151]' : 'bg-[#18181B] border-white/5 text-[#D1D5DB]'
              }`}>
                <span className="font-bold text-[#B87333] font-mono text-[11px] uppercase block mb-1">W praktyce:</span>
                {HOME_MULTIMEDIA.audio.humanNote}
              </div>

              <div className="space-y-2.5">
                {HOME_MULTIMEDIA.audio.features.map((feat, i) => (
                  <div key={i} className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                    isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-[#B87333] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-8 pt-4 border-t flex items-center justify-between ${isDay ? 'border-[#E5E7EB]' : 'border-white/5'}`}>
              <span className="text-xs text-[#9CA3AF] font-mono">Standard architektoniczny</span>
              <Link
                to="/kalkulator"
                className="text-xs font-mono font-bold text-[#B87333] hover:text-[#A36034] transition-colors"
              >
                Wyceń Multiroom →
              </Link>
            </div>
          </div>

          {/* Card 2: Home Cinema */}
          <div className={`rounded-[2px] border p-7 sm:p-8 flex flex-col justify-between ${
            isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
          }`}>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[2px] bg-sky-500/20 text-sky-400 flex items-center justify-center shrink-0">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h3 className={`text-xl sm:text-2xl font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                    {HOME_MULTIMEDIA.cinema.title}
                  </h3>
                  <div className="text-xs text-sky-400 font-mono mt-0.5">Dolby Atmos • Rolety Blackout • HDMI eARC</div>
                </div>
              </div>

              <p className={`text-xs sm:text-sm leading-[1.7] mb-5 ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                {HOME_MULTIMEDIA.cinema.desc}
              </p>

              <div className={`p-4 rounded-[2px] border text-xs leading-relaxed mb-6 ${
                isDay ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#374151]' : 'bg-[#18181B] border-white/5 text-[#D1D5DB]'
              }`}>
                <span className="font-bold text-sky-400 font-mono text-[11px] uppercase block mb-1">W praktyce:</span>
                {HOME_MULTIMEDIA.cinema.humanNote}
              </div>

              <div className="space-y-2.5">
                {HOME_MULTIMEDIA.cinema.features.map((feat, i) => (
                  <div key={i} className={`flex items-start gap-2.5 text-xs sm:text-sm ${
                    isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'
                  }`}>
                    <CheckCircle2 className="w-4 h-4 text-sky-400 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`mt-8 pt-4 border-t flex items-center justify-between ${isDay ? 'border-[#E5E7EB]' : 'border-white/5'}`}>
              <span className="text-xs text-[#9CA3AF] font-mono">Dedykowane sceny kinowe</span>
              <Link
                to="/kalkulator"
                className="text-xs font-mono font-bold text-sky-400 hover:text-sky-300 transition-colors"
              >
                Wyceń Salę Kinową →
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
