import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Lightbulb, Thermometer, Video, DoorOpen, Droplets, Smartphone, Check, Clock } from 'lucide-react';

// Lets the visitor switch the internet off and see what keeps working.
// Only remote access depends on the internet; everything else runs locally.
const ROWS = [
  { icon: Lightbulb, label: 'Światło i rolety', local: true },
  { icon: Thermometer, label: 'Ogrzewanie', local: true },
  { icon: Video, label: 'Kamery nagrywają na dysk w domu', local: true },
  { icon: DoorOpen, label: 'Furtka z panelu w domu', local: true },
  { icon: Droplets, label: 'Czujniki wody i gazu z zaworem', local: true },
  { icon: Smartphone, label: 'Podgląd i powiadomienia poza domem', local: false },
];

export const OfflineDemo: React.FC = () => {
  const [online, setOnline] = useState(true);
  const reduce = useReducedMotion();

  return (
    <div className="rounded-[2px] bg-petrol-900 text-white p-6 sm:p-8 shadow-xl">
      <div className="flex items-center justify-between gap-4">
        <div>
          <div className="font-display text-lg font-bold">Internet w domu</div>
          <p className="text-sm text-gray-300 mt-0.5">Sprawdź, co się stanie, gdy zniknie.</p>
        </div>
        <button
          type="button"
          role="switch"
          aria-checked={online}
          aria-label="Internet w domu"
          onClick={() => setOnline((v) => !v)}
          className="inline-flex items-center gap-3 min-h-11 px-3 rounded-[2px] border border-white/15 hover:bg-white/5 cursor-pointer focus-visible:ring-2 focus-visible:ring-amber-400"
        >
          <span className={`relative w-11 h-6 rounded-full transition-colors ${online ? 'bg-amber-400' : 'bg-white/20'}`}>
            <span
              className={`absolute top-0.5 left-0.5 w-5 h-5 rounded-full bg-white shadow transition-transform duration-200 ${online ? 'translate-x-5' : ''}`}
            />
          </span>
          <span className="text-sm font-semibold w-20 text-left">{online ? 'Włączony' : 'Wyłączony'}</span>
        </button>
      </div>

      <ul className="mt-6 divide-y divide-white/10 border-y border-white/10">
        {ROWS.map(({ icon: Icon, label, local }) => {
          const works = local || online;
          return (
            <motion.li
              key={label}
              animate={{ opacity: works ? 1 : 0.75 }}
              transition={{ duration: reduce ? 0 : 0.3 }}
              className="flex items-center gap-3 py-3"
            >
              <Icon className="w-5 h-5 text-amber-400 shrink-0" aria-hidden="true" />
              <span className="flex-1 text-sm">{label}</span>
              <span className={`inline-flex items-center gap-1.5 text-xs font-semibold ${works ? 'text-emerald-300' : 'text-gray-300'}`}>
                {works ? <Check className="w-3.5 h-3.5" aria-hidden="true" /> : <Clock className="w-3.5 h-3.5" aria-hidden="true" />}
                {works ? 'Działa' : 'Wróci z internetem'}
              </span>
            </motion.li>
          );
        })}
      </ul>

      <p className="mt-5 text-sm text-gray-300" aria-live="polite">
        {online
          ? 'Kliknij przełącznik i wyłącz internet.'
          : 'Dom działa dalej. Bez internetu nie zobaczysz go tylko z daleka.'}
      </p>
    </div>
  );
};
