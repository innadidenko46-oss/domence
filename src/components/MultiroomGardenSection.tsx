import React from 'react';
import { HOME_MULTIMEDIA } from '../data/content.ts';
import {
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
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-gray-900">
            Kino w salonie i gość przy furtce bez wstawania.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
            Film jednym przyciskiem: rolety, światło i ekran. A gdy ktoś dzwoni do furtki, widzisz go na panelu w domu i w telefonie.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* Card 1: who is at the gate */}
          <div className="rounded-[2px] border overflow-hidden flex flex-col justify-between bg-gray-50 border-gray-200">
            <div className="relative h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
                alt="Jasny salon z kanapą i lampą"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/40 via-transparent to-transparent" />
            </div>
            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[2px] bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0">
                  <Music2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {HOME_MULTIMEDIA.audio.title}
                  </h3>
                  <div className="text-xs text-amber-700 font-mono mt-0.5">Furtka • Panel w domu • Telefon</div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5 text-gray-600">
                {HOME_MULTIMEDIA.audio.desc}
              </p>

              <div className="p-4 pl-5 rounded-[2px] border border-l-4 border-l-amber-500 text-sm leading-relaxed mb-6 bg-white border-gray-200 text-gray-700">
                <span className="font-bold text-amber-700 font-mono text-xs uppercase block mb-1">W praktyce:</span>
                {HOME_MULTIMEDIA.audio.humanNote}
              </div>

              <div className="space-y-2.5">
                {HOME_MULTIMEDIA.audio.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-petrol-700 mt-0.5 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t flex items-center justify-between border-gray-200">
              <span className="text-xs text-gray-600 font-mono">Gość przy furtce</span>
              <Link
                to="/zapytanie"
                className="text-xs font-mono font-bold text-amber-700 hover:text-amber-800 transition-colors"
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
                src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85"
                alt="Salon wieczorem, okna zasłonięte roletami"
                loading="lazy"
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/40 via-transparent to-transparent" />
            </div>
            <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 bg-amber-500/20 text-amber-800">
                  <Film className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                    {HOME_MULTIMEDIA.cinema.title}
                  </h3>
                  <div className="text-xs font-mono mt-0.5 text-amber-700">Rolety • Światło • Ekran</div>
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-5 text-gray-600">
                {HOME_MULTIMEDIA.cinema.desc}
              </p>

              <div className="p-4 pl-5 rounded-[2px] border border-l-4 border-l-amber-500 text-sm leading-relaxed mb-6 bg-white border-gray-200 text-gray-700">
                <span className="font-bold font-mono text-xs uppercase block mb-1 text-amber-700">W praktyce:</span>
                {HOME_MULTIMEDIA.cinema.humanNote}
              </div>

              <div className="space-y-2.5">
                {HOME_MULTIMEDIA.cinema.features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-petrol-700" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 pt-4 border-t flex items-center justify-between border-gray-200">
              <span className="text-xs text-gray-600 font-mono">Sceny do filmu</span>
              <Link
                to="/zapytanie"
                className="text-xs font-mono font-bold transition-colors text-amber-700 hover:text-amber-800"
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
