import React from 'react';
import { AI_FUTURE_TECH } from '../data/content.ts';
import { Search, Eye, Cpu, Radio, Lock, Bot, Sparkles, Check } from 'lucide-react';

const getTechIcon = (iconName: string) => {
  switch (iconName) {
    case 'Search':
      return <Search className="w-5 h-5 text-[#B87333]" />;
    case 'Eye':
      return <Eye className="w-5 h-5 text-[#B87333]" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-[#B87333]" />;
    case 'Radio':
      return <Radio className="w-5 h-5 text-[#B87333]" />;
    case 'Lock':
      return <Lock className="w-5 h-5 text-[#B87333]" />;
    case 'Bot':
      return <Bot className="w-5 h-5 text-[#B87333]" />;
    default:
      return <Sparkles className="w-5 h-5 text-[#B87333]" />;
  }
};

export const AiFutureTechSection: React.FC = () => {
  return (
    <section id="ai-technologie" className="py-24 bg-[#F9FAFB] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B87333] mb-3">
            Technologie • Hikvision i Shelly
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Co potrafią nowe kamery i sterowniki.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Dostajesz 6 sprawdzonych rzeczy do domu. Opisujemy je zwykłymi słowami, bez obietnic bez pokrycia.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
          <img
            src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80"
            alt="Kamera monitoringu na budynku"
            className="w-full h-52 object-cover rounded-[2px] border border-[#E5E7EB]"
            loading="lazy"
          />
          <img
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
            alt="Szafa serwerowa z rejestratorem nagrań"
            className="w-full h-52 object-cover rounded-[2px] border border-[#E5E7EB]"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AI_FUTURE_TECH.map((tech) => (
            <article
              key={tech.id}
              className="p-6 rounded-[2px] bg-white border border-[#E5E7EB] shadow-sm"
            >
              <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/10 flex items-center justify-center mb-4">
                {getTechIcon(tech.icon)}
              </div>
              <h3 className="text-base font-bold text-slate-900 leading-snug">
                {tech.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {tech.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {tech.keyPoints.slice(0, 3).map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                    <Check className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-slate-600 border-t border-[#E5E7EB] pt-6">
          Przykłady możliwości — dokładny dobór po bezpłatnym audycie.
        </p>
      </div>
    </section>
  );
};
