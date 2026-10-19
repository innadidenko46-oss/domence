import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Hammer, Home, Video, CheckCircle2 } from 'lucide-react';
import { PageHeader } from '../components/PageHeader.tsx';
import { ProcessSection } from '../components/ProcessSection.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { PropertyState } from '../types.ts';

// Three starting situations instead of fixed packages: no quantities, dates or prices.
// Each one opens the enquiry with the situation already chosen.
const SITUATIONS: {
  state: PropertyState;
  icon: typeof Home;
  title: string;
  lead: string;
  usually: string[];
  tip: string;
}[] = [
  {
    state: 'deweloperski',
    icon: Hammer,
    title: 'Budujesz dom',
    lead: 'Najlepszy moment, bo wszystko planujemy razem z elektryką.',
    usually: [
      'Moduły w rozdzielnicy, połączone kablem',
      'Osobna temperatura w każdym pokoju',
      'Kamery, wideodomofon i kable do nich w jednym planie',
    ],
    tip: 'Odezwij się, zanim elektryk zamknie ściany.',
  },
  {
    state: 'retro',
    icon: Home,
    title: 'Masz gotowe mieszkanie',
    lead: 'Ściany, płytki i gładzie zostają całe.',
    usually: [
      'Małe moduły chowamy za zwykłymi włącznikami',
      'Światło, rolety i grzejniki z telefonu',
      'Czujniki zalania, które same zakręcają wodę',
    ],
    tip: 'Możesz zacząć od kilku pokoi i dokładać kolejne.',
  },
  {
    state: 'security',
    icon: Video,
    title: 'Zaczynasz od wejścia i kamer',
    lead: 'Najpierw bezpieczeństwo, automatyka może przyjść później.',
    usually: [
      'Wideodomofon: rozmowa z furtki w telefonie',
      'Kamery z kolorowym obrazem w nocy',
      'Nagrania na dysku w domu, bez abonamentu',
    ],
    tip: 'Później dołożysz światło czy rolety, bez wymiany tego, co już masz.',
  },
];

const PRICE_FACTORS = [
  ['Wielkość domu', 'Liczba pomieszczeń i pięter, w których coś sterujemy.'],
  ['Ile rzeczy sterujemy', 'Lampy, rolety, grzejniki, kamery: każdy punkt to osobny moduł albo urządzenie.'],
  ['Nowy dom czy gotowe wnętrze', 'W budowie prowadzimy kable, w gotowym mieszkaniu montujemy moduły bez kucia.'],
  ['Co już masz', 'Rolety z silnikami czy działające lampy często wykorzystujemy bez wymiany.'],
];

export const StartPage: React.FC = () => {
  return (
    <div className="bg-gray-50 text-gray-900">
      <PageHeader
        badge="Jak zacząć"
        title="Od czego zacząć w Twoim domu"
        description="Trzy typowe sytuacje i to, od czego zależy cena. Wybierz swoją, a zapytanie otworzy się z tą odpowiedzią."
        icon={<Compass className="w-4 h-4 text-petrol-700" />}
        image="https://images.unsplash.com/photo-1621905251189-08b45d6a269e?auto=format&fit=crop&w=1200&q=80"
      />

      {/* Three situations as ruled rows: situation, what we usually do, the next step */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 max-w-3xl">
            Która sytuacja jest Twoja?
          </h2>

          <ol className="mt-10 border-t border-gray-300">
            {SITUATIONS.map(({ state, icon: Icon, title, lead, usually, tip }, i) => (
              <li key={state} className="border-b border-gray-300">
                <Reveal delay={i * 0.06} className="grid md:grid-cols-12 gap-6 md:gap-10 py-8 lg:py-10">
                  <div className="md:col-span-4">
                    <div className="flex items-center gap-3">
                      <Icon className="w-6 h-6 text-amber-600 shrink-0" aria-hidden="true" />
                      <h3 className="font-display text-2xl font-bold text-gray-900">{title}</h3>
                    </div>
                    <p className="mt-3 text-base leading-relaxed text-gray-600 max-w-[34ch]">{lead}</p>
                  </div>

                  <div className="md:col-span-5">
                    <div className="text-sm font-semibold text-gray-900">Zwykle robimy:</div>
                    <ul className="mt-3 space-y-2.5">
                      {usually.map((u) => (
                        <li key={u} className="flex items-start gap-2.5 text-base leading-relaxed text-gray-700">
                          <CheckCircle2 className="w-5 h-5 text-petrol-700 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>{u}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:col-span-3 flex flex-col justify-between gap-5">
                    <p className="text-sm leading-relaxed text-gray-600 border-l-2 border-amber-500 pl-3">{tip}</p>
                    <Link
                      to={`/zapytanie?state=${state}`}
                      className="btn-engineering-primary self-start focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                    >
                      <span>To moja sytuacja</span>
                      <ArrowRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Honest answer to "how much": what the price depends on, without numbers */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Od czego zależy cena
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-prose">
              Cenę dostajesz na piśmie po bezpłatnej rozmowie i sprawdzeniu domu. Wiesz, co i za ile montujemy, zanim zaczniemy.
            </p>
          </div>
          <Reveal className="lg:col-span-8">
            <dl className="grid sm:grid-cols-2 gap-x-10 gap-y-8">
              {PRICE_FACTORS.map(([term, desc], i) => (
                <div key={term} className="border-t-2 border-petrol-700 pt-4">
                  <dt className="flex items-baseline gap-3 font-display text-lg font-bold text-gray-900">
                    <span className="text-sm tabular-nums text-amber-700">0{i + 1}</span>
                    {term}
                  </dt>
                  <dd className="mt-2 text-base leading-relaxed text-gray-600">{desc}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <ProcessSection />

      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-petrol-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Nie wiesz, która sytuacja pasuje?</h2>
            <p className="mt-2 text-base text-gray-300 max-w-xl">Opisz krótko swój dom, a inżynier podpowie, od czego zacząć.</p>
          </div>
          <Link
            to="/kontakt"
            className="btn-accent self-start md:self-auto focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-900"
          >
            Zapytaj inżyniera
          </Link>
        </div>
      </section>
    </div>
  );
};
