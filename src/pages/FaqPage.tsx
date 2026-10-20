import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { FaqSection } from '../components/FaqSection.tsx';
import { ArrowRight } from 'lucide-react';
import { CTA } from '../config/site.ts';

export const FaqPage: React.FC = () => (
  <div className="bg-gray-50 text-gray-900">
    <PageHeader
      badge="Pytania i odpowiedzi"
      title="Pytania i odpowiedzi"
      description="Czy dom działa bez internetu, ile to kosztuje, czy trzeba kuć ściany i czy nagrania z kamer zostają w domu. Zwykłymi słowami."
    />

    <FaqSection />

    <section className="py-14 lg:py-16 bg-petrol-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-display text-2xl sm:text-3xl font-bold">Nie ma tu Twojego pytania?</h2>
          <p className="mt-2 text-base leading-relaxed text-gray-200">
            Zadaj je w zapytaniu. Odpisuje inżynier, który montuje takie instalacje, a nie infolinia.
          </p>
        </div>
        <Link
          to="/zapytanie"
          className="btn-accent self-start md:self-auto focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-900"
        >
          <span>{CTA.label}</span>
          <ArrowRight className="w-4 h-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  </div>
);
