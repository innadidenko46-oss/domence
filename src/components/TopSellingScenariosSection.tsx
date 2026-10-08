import React from 'react';
import { TOP_SELLING_SCENARIOS } from '../data/content.ts';
import { Wind, ShieldAlert, Zap, Car, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const getScenarioIcon = (iconName: string) => {
  switch (iconName) {
    case 'Wind':
      return <Wind className="w-5 h-5 text-[#B87333]" />;
    case 'ShieldAlert':
      return <ShieldAlert className="w-5 h-5 text-[#B87333]" />;
    case 'Zap':
      return <Zap className="w-5 h-5 text-[#B87333]" />;
    case 'Car':
      return <Car className="w-5 h-5 text-[#B87333]" />;
    default:
      return <Activity className="w-5 h-5 text-[#B87333]" />;
  }
};

export const TopSellingScenariosSection: React.FC = () => {
  return (
    <section id="top-scenariusze" className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-mono uppercase tracking-widest text-[#B87333] mb-3 font-semibold">
            Scenariusze • Shelly i Hikvision
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Scenariusze codziennego komfortu i bezpieczeństwa.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed text-slate-600">
            Cztery gotowe pomysły na automatykę. Każdy działa lokalnie, w sieci
            domowej. Wybierz ten, który pasuje do Twojego domu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOP_SELLING_SCENARIOS.map((sc) => (
            <article
              key={sc.id}
              className="p-6 rounded-[2px] bg-[#F9FAFB] border border-slate-200 flex flex-col"
            >
              <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/10 flex items-center justify-center mb-4">
                {getScenarioIcon(sc.icon)}
              </div>
              <h3 className="text-lg font-bold text-slate-900">{sc.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {sc.description}
              </p>
              <p className="mt-3 text-xs text-slate-600">
                <span className="font-semibold text-slate-900">Kiedy działa: </span>
                {sc.trigger}
              </p>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                <span className="font-semibold text-slate-900">Po co Ci to: </span>
                {sc.humanNote}
              </p>
              <div className="mt-5 pt-4 border-t border-slate-200">
                <Link
                  to="/kontakt"
                  className="inline-flex items-center gap-2 text-sm font-bold text-[#B87333] hover:text-[#A36034] transition-colors focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 rounded-[2px]"
                >
                  <span>Zapytaj o ten scenariusz</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
