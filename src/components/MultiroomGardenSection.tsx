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
    <section id="multimedia-kino" className="pt-16 pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden border-t transition-colors duration-300 bg-white border-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-[2px] bg-copper-500/15 border border-copper-500/30 text-copper-600 text-xs font-mono font-bold uppercase tracking-wider mb-3">
            <Volume2 className="w-4 h-4" />
            <span>Kino w salonie</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-gray-900">
            Kino w salonie. Swoje głośniki też podłączymy.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
            Film jednym przyciskiem: rolety, światło i scena. A jeśli masz już głośniki, które pasują do Shelly albo Hikvision, podepniemy je do scen — montażu audio nie robimy.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: Twoje głośniki */}
          <div className="rounded-[2px] border overflow-hidden flex flex-col justify-between bg-gray-50 border-gray-200">
            <div className="relative h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
                alt="Jasny salon — tu podepniemy Twoje głośniki do scen"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>
            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center shrink-0">
                  <Music2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {HOME_MULTIMEDIA.audio.title}
                  </h3>
                  <div className="text-xs text-copper-600 font-mono mt-0.5">Twoje głośniki • Sceny • Dzwonek</div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5 text-gray-600">
                {HOME_MULTIMEDIA.audio.desc}
              </p>

              <div className="p-4 pl-5 rounded-[2px] border border-l-4 border-l-copper-500 text-sm leading-relaxed mb-6 bg-white border-gray-200 text-gray-700">
                <span className="font-bold text-copper-600 font-mono text-xs uppercase block mb-1">W praktyce:</span>
                {HOME_MULTIMEDIA.audio.humanNote}
              </div>

              <div className="space-y-2.5">
                {HOME_MULTIMEDIA.audio.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-copper-600 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t flex items-center justify-between border-gray-200">
              <span className="text-xs text-gray-400 font-mono">Bez montażu audio</span>
              <Link
                to="/kalkulator"
                className="text-xs font-mono font-bold text-copper-600 hover:text-copper-800 transition-colors"
              >
                Dobierz zestaw (2 min)
              </Link>
            </div>
            </div>
          </div>

          {/* Card 2: Home Cinema */}
          <div className="rounded-[2px] border overflow-hidden flex flex-col justify-between bg-gray-50 border-gray-200">
            <div className="relative h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85"
                alt="Dom o zmierzchu — wieczór filmowy w ciepłym świetle salonu"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
            </div>
            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 bg-copper-500/20 text-copper-600">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {HOME_MULTIMEDIA.cinema.title}
                  </h3>
                  <div className="text-xs font-mono mt-0.5 text-copper-600">Dolby Atmos • Rolety Blackout • HDMI eARC</div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5 text-gray-600">
                {HOME_MULTIMEDIA.cinema.desc}
              </p>

              <div className="p-4 pl-5 rounded-[2px] border border-l-4 border-l-copper-500 text-sm leading-relaxed mb-6 bg-white border-gray-200 text-gray-700">
                <span className="font-bold font-mono text-xs uppercase block mb-1 text-copper-600">W praktyce:</span>
                {HOME_MULTIMEDIA.cinema.humanNote}
              </div>

              <div className="space-y-2.5">
                {HOME_MULTIMEDIA.cinema.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-copper-600" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t flex items-center justify-between border-gray-200">
              <span className="text-xs text-gray-400 font-mono">Sceny do filmu</span>
              <Link
                to="/kalkulator"
                className="text-xs font-mono font-bold transition-colors text-copper-600 hover:text-copper-800"
              >
                Dobierz zestaw (2 min)
              </Link>
            </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
