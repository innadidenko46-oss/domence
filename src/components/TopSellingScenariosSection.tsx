import React from 'react';
import { TOP_SELLING_SCENARIOS } from '../data/content.ts';
import { Wind, ShieldAlert, Zap, Car, Activity, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const getScenarioIcon = (iconName: string) => {
  switch (iconName) {
    case 'Wind':
      return <Wind className="w-5 h-5 text-copper-600" />;
    case 'ShieldAlert':
      return <ShieldAlert className="w-5 h-5 text-copper-600" />;
    case 'Zap':
      return <Zap className="w-5 h-5 text-copper-600" />;
    case 'Car':
      return <Car className="w-5 h-5 text-copper-600" />;
    default:
      return <Activity className="w-5 h-5 text-copper-600" />;
  }
};

export const TopSellingScenariosSection: React.FC = () => {
  return (
    <section id="top-scenariusze" className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-gray-100 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow mb-3">
            Scenariusze
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            4 rzeczy, które dom robi za Ciebie.
          </h2>
          <p className="mt-4 text-base sm:text-lg leading-relaxed max-w-prose text-gray-600">
            Cztery przykłady z gotowych domów. Każdy działa u Ciebie, także bez internetu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {TOP_SELLING_SCENARIOS.map((sc) => (
            <article
              key={sc.id}
              className="rounded-[2px] bg-gray-50 border border-gray-200 overflow-hidden flex flex-col shadow-sm"
            >
              <div className="relative h-40 overflow-hidden">
                <img
                  src={sc.image}
                  alt={`${sc.title} — przykład automatyki domowej`}
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/40 via-transparent to-transparent" />
              </div>
              <div className="p-6 flex flex-col flex-1">
              <h3 className="flex items-start gap-2.5 text-lg font-bold text-gray-900">
                <span className="mt-1 shrink-0" aria-hidden="true">{getScenarioIcon(sc.icon)}</span>
                {sc.title}
              </h3>
              <p className="mt-1 text-sm font-medium text-copper-700">
                {sc.subtitle}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600">
                {sc.humanNote}
              </p>
              </div>
            </article>
          ))}
        </div>

        <Link
          to="/scenariusze"
          className="mt-8 inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-copper-700 hover:text-copper-800 transition-colors focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 rounded-[2px]"
        >
          <span>Zobacz wszystkie scenariusze</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};
