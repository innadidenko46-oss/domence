import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, Droplets, Zap, Car, ArrowRight } from 'lucide-react';
import { EVERYDAY_SCENARIOS } from '../data/content.ts';
import { Photo } from './Photo.tsx';

const ICONS = { Wind, Droplets, Zap, Car } as const;

// Four everyday examples on the home page; the full list is on /scenariusze
export const EverydaySection: React.FC = () => (
  <section className="pt-16 pb-20 lg:pt-24 lg:pb-24 bg-gray-100 border-t border-gray-200">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mb-10">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Cztery rzeczy, które dom robi za Ciebie</h2>
        <p className="mt-3 text-base sm:text-lg leading-relaxed text-gray-600">Tak to wygląda na co dzień. Wszystko działa w domu, także bez internetu.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {EVERYDAY_SCENARIOS.map((sc) => {
          const Icon = ICONS[sc.icon as keyof typeof ICONS];
          return (
            <article key={sc.id} className="rounded-[2px] bg-white border border-gray-200 overflow-hidden flex flex-col sm:flex-row md:flex-col lg:flex-row">
              <div className="hidden sm:block sm:w-2/5 md:w-auto md:h-40 lg:h-auto lg:w-2/5 shrink-0 bg-gray-200">
                <Photo id={sc.image} alt="" widths={[400, 700]} sizes="(min-width: 1024px) 20vw, (min-width: 640px) 40vw, 100vw" className="w-full h-full object-cover" />
              </div>
              <div className="p-6 flex flex-col">
                <h3 className="flex items-start gap-2.5 text-lg font-bold text-gray-900">
                  <Icon className="w-5 h-5 text-petrol-700 mt-0.5 shrink-0" aria-hidden="true" />
                  {sc.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-amber-800">{sc.subtitle}</p>
                <p className="mt-3 text-base leading-relaxed text-gray-600">{sc.humanNote}</p>
              </div>
            </article>
          );
        })}
      </div>

      <Link
        to="/scenariusze"
        className="mt-8 inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-amber-800 hover:text-amber-700 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600"
      >
        <span>Zobacz wszystkie scenariusze</span>
        <ArrowRight className="w-4 h-4" aria-hidden="true" />
      </Link>
    </div>
  </section>
);
