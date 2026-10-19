import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { CLIENT_QUOTES, FINISHED_HOMES } from '../config/site.ts';
import { Reveal } from './Reveal.tsx';

// Finished homes and client words from src/config/site.ts.
// Renders nothing while both lists are empty, so the site never shows invented proof.
export const ProofSection: React.FC = () => {
  if (FINISHED_HOMES.length === 0 && CLIENT_QUOTES.length === 0) return null;
  const base = import.meta.env.BASE_URL;

  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-gray-50 border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 max-w-3xl">
          {FINISHED_HOMES.length > 0 ? 'Domy, w których już pracowaliśmy' : 'Co mówią domownicy'}
        </h2>

        {FINISHED_HOMES.length > 0 && (
          <ol className="mt-10 border-t border-gray-300">
            {FINISHED_HOMES.map((home, i) => (
              <li key={home.title} className="border-b border-gray-300">
                <Reveal delay={i * 0.06} className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 lg:py-10">
                  <img
                    src={`${base}${home.photo}`}
                    alt={home.photoAlt}
                    loading="lazy"
                    decoding="async"
                    className="md:col-span-5 w-full aspect-[4/3] object-cover rounded-[2px] bg-gray-200"
                  />
                  <div className="md:col-span-7">
                    <div className="text-sm font-semibold text-amber-700">{home.place}</div>
                    <h3 className="mt-1 font-display text-2xl font-bold text-gray-900">{home.title}</h3>
                    <ul className="mt-4 space-y-2.5">
                      {home.done.map((d) => (
                        <li key={d} className="flex items-start gap-2.5 text-base leading-relaxed text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-petrol-700 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        )}

        {CLIENT_QUOTES.length > 0 && (
          <div className={`grid md:grid-cols-2 gap-x-10 gap-y-10 ${FINISHED_HOMES.length > 0 ? 'mt-14' : 'mt-10'}`}>
            {CLIENT_QUOTES.map((q) => (
              <Reveal key={q.name + q.place}>
                <figure className="border-l-2 border-amber-500 pl-5">
                  <blockquote className="text-lg leading-relaxed text-gray-900">„{q.quote}”</blockquote>
                  <figcaption className="mt-3 text-sm text-gray-600">
                    <span className="font-semibold text-gray-900">{q.name}</span>, {q.place}
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
