import React from 'react';
import { HOME_MULTIMEDIA } from '../data/content.ts';
import {
  Volume2,
  Film,
  Music2,
  CheckCircle2,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const MultiroomGardenSection: React.FC = () => {

  return (
    <section id="multimedia-kino" className="py-16 relative overflow-hidden border-t transition-colors duration-300 bg-white border-[#E5E7EB] text-[#111827]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-[#B87333]/15 border border-[#B87333]/30 text-[#B87333] text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Volume2 className="w-4 h-4" />
            <span>Muzyka i nagłośnienie</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-[#111827]">
            Muzyka w pokojach. Kino w salonie.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-[#4B5563]">
            Dostajesz muzykę tam, gdzie jesteś, i film jednym przyciskiem. Głośników prawie nie widać, bo chowają się w suficie.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Multiroom Audio */}
          <div className="rounded-[2px] border overflow-hidden flex flex-col justify-between bg-[#F9FAFB] border-[#E5E7EB]">
            <div className="relative h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
                alt="Detal jasnego wnętrza z dyskretnym nagłośnieniem sufitowym"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center shrink-0">
                  <Music2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                    {HOME_MULTIMEDIA.audio.title}
                  </h3>
                  <div className="text-xs text-[#B87333] font-mono mt-0.5">Apple AirPlay 2 • Spotify Connect • Multi-Zone</div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5 text-[#4B5563]">
                {HOME_MULTIMEDIA.audio.desc}
              </p>

              <div className="p-4 pl-5 rounded-[2px] border border-l-4 border-l-[#B87333] text-sm leading-relaxed mb-6 bg-white border-[#E5E7EB] text-[#374151]">
                <span className="font-bold text-[#B87333] font-mono text-[11px] uppercase block mb-1">W praktyce:</span>
                {HOME_MULTIMEDIA.audio.humanNote}
              </div>

              <div className="space-y-2.5">
                {HOME_MULTIMEDIA.audio.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <CheckCircle2 className="w-4 h-4 text-[#B87333] mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t flex items-center justify-between border-[#E5E7EB]">
              <span className="text-xs text-[#9CA3AF] font-mono">Sprawdzony zestaw</span>
              <Link
                to="/kalkulator"
                className="text-xs font-mono font-bold text-[#B87333] hover:text-[#A36034] transition-colors"
              >
                Wypełnij ankietę (2 min)
              </Link>
            </div>
            </div>
          </div>

          {/* Card 2: Home Cinema */}
          <div className="rounded-[2px] border overflow-hidden flex flex-col justify-between bg-[#F9FAFB] border-[#E5E7EB]">
            <div className="relative h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85"
                alt="Dom o zmierzchu — wieczór filmowy w ciepłym świetle salonu"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 bg-[#B87333]/20 text-[#B87333]">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-[#111827]">
                    {HOME_MULTIMEDIA.cinema.title}
                  </h3>
                  <div className="text-xs font-mono mt-0.5 text-[#B87333]">Dolby Atmos • Rolety Blackout • HDMI eARC</div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5 text-[#4B5563]">
                {HOME_MULTIMEDIA.cinema.desc}
              </p>

              <div className="p-4 pl-5 rounded-[2px] border border-l-4 border-l-[#B87333] text-sm leading-relaxed mb-6 bg-white border-[#E5E7EB] text-[#374151]">
                <span className="font-bold font-mono text-[11px] uppercase block mb-1 text-[#B87333]">W praktyce:</span>
                {HOME_MULTIMEDIA.cinema.humanNote}
              </div>

              <div className="space-y-2.5">
                {HOME_MULTIMEDIA.cinema.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-[#374151]">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-[#B87333]" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t flex items-center justify-between border-[#E5E7EB]">
              <span className="text-xs text-[#9CA3AF] font-mono">Sceny do filmu</span>
              <Link
                to="/kalkulator"
                className="text-xs font-mono font-bold transition-colors text-[#B87333] hover:text-[#A36034]"
              >
                Wypełnij ankietę (2 min)
              </Link>
            </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
