import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { MultiroomGardenSection } from '../components/MultiroomGardenSection.tsx';
import { Seo } from '../components/Seo.tsx';
import { ArrowRight, Film } from 'lucide-react';

export const MultiroomGardenPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <Seo
        title="Kino w salonie — DOMENCE"
        description="Jeden przycisk: rolety zamykają się, światło gaśnie, ekran zjeżdża. Dzwonek z furtki widzisz na panelu w salonie i w telefonie."
        canonical="https://domence-o9s1.vercel.app/multimedia"
      />
      <PageHeader
        badge="Kino w salonie"
        title="Kino w salonie jednym przyciskiem"
        description="Rolety same się zamykają, światło przygasa, a gościa przy furtce widzisz na panelu w domu i w telefonie."
        icon={<Film className="w-4 h-4 text-petrol-700" />}
        image="https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=85"
      />

      {/* Film scene and a visitor at the gate */}
      <MultiroomGardenSection />

      {/* How the film scene works, step by step */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Jak działa scena „Kino”
            </h2>
            <p className="mt-4 text-base leading-relaxed text-gray-600 max-w-prose">
              Naciskasz jeden przycisk na ścianie, pilocie albo w telefonie. Resztę dom robi sam.
            </p>
            <Link
              to="/zapytanie"
              className="btn-engineering-primary mt-8 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
            >
              <span>Otrzymaj propozycję dla swojego domu</span>
              <ArrowRight className="w-4 h-4" aria-hidden="true" />
            </Link>
          </div>
          <ol className="lg:col-span-8 divide-y divide-gray-300 border-y border-gray-300">
                <li className="flex gap-4 py-4">
                  <span className="font-display text-sm font-bold tabular-nums text-amber-700 pt-0.5">01</span>
                  <span className="text-base leading-relaxed text-gray-700">Rolety zjeżdżają do końca, więc na ekranie nie ma odblasków.</span>
                </li>
                <li className="flex gap-4 py-4">
                  <span className="font-display text-sm font-bold tabular-nums text-amber-700 pt-0.5">02</span>
                  <span className="text-base leading-relaxed text-gray-700">Lampy gasną, zostaje tylko delikatne światło przy podłodze, żeby bezpiecznie przejść po napój.</span>
                </li>
                <li className="flex gap-4 py-4">
                  <span className="font-display text-sm font-bold tabular-nums text-amber-700 pt-0.5">03</span>
                  <span className="text-base leading-relaxed text-gray-700">Ekran projekcyjny sam zjeżdża, jeśli masz go w salonie.</span>
                </li>
                <li className="flex gap-4 py-4">
                  <span className="font-display text-sm font-bold tabular-nums text-amber-700 pt-0.5">04</span>
                  <span className="text-base leading-relaxed text-gray-700">Gdy ktoś dzwoni do furtki, widzisz go na panelu w salonie i w telefonie.</span>
                </li>
                <li className="flex gap-4 py-4">
                  <span className="font-display text-sm font-bold tabular-nums text-amber-700 pt-0.5">05</span>
                  <span className="text-base leading-relaxed text-gray-700">Po filmie ten sam przycisk przywraca zwykłe światło.</span>
                </li>
          </ol>
        </div>
      </section>

      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-petrol-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Co jeszcze dom może robić sam?</h2>
            <p className="mt-2 text-base text-gray-300 max-w-xl">Wyjście z domu, ochrona przed zalaniem, spokojny sen: przykłady na co dzień.</p>
          </div>
          <Link
            to="/scenariusze"
            className="btn-accent self-start md:self-auto focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-900"
          >
            <span>Zobacz scenariusze</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};
