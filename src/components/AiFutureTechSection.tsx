import React from 'react';
import { AI_FUTURE_TECH } from '../data/content.ts';
import { Search, Eye, Cpu, Radio, Lock, Bot, Sparkles, CheckCircle2 } from 'lucide-react';

const getTechIcon = (iconName: string) => {
  switch (iconName) {
    case 'Search':
      return <Search className="w-5 h-5 text-copper-600" />;
    case 'Eye':
      return <Eye className="w-5 h-5 text-copper-600" />;
    case 'Cpu':
      return <Cpu className="w-5 h-5 text-copper-600" />;
    case 'Radio':
      return <Radio className="w-5 h-5 text-copper-600" />;
    case 'Lock':
      return <Lock className="w-5 h-5 text-copper-600" />;
    case 'Bot':
      return <Bot className="w-5 h-5 text-copper-600" />;
    default:
      return <Sparkles className="w-5 h-5 text-copper-600" />;
  }
};

export const AiFutureTechSection: React.FC = () => {
  return (
    <section id="ai-technologie" className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <div className="text-xs font-mono uppercase tracking-widest text-copper-600 mb-3">
            Technologie • Hikvision i Shelly
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Co potrafią nowe kamery i sterowniki.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-prose text-gray-600">
            Dostajesz 6 sprawdzonych rzeczy do domu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {AI_FUTURE_TECH.map((tech) => (
            <article
              key={tech.id}
              className="p-6 rounded-[2px] bg-white border border-gray-200 shadow-sm"
            >
              <div className="w-10 h-10 rounded-[2px] bg-copper-500/10 flex items-center justify-center mb-4">
                {getTechIcon(tech.icon)}
              </div>
              <h3 className="text-base font-bold text-gray-900 leading-snug">
                {tech.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600">
                {tech.summary}
              </p>
              <ul className="mt-4 space-y-2">
                {tech.keyPoints.slice(0, 3).map((point, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm leading-relaxed text-gray-700">
                    <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-sm text-gray-600 border-t border-gray-200 pt-6">
          Przykłady możliwości — dokładny dobór po bezpłatnym audycie.
        </p>
      </div>
    </section>
  );
};
