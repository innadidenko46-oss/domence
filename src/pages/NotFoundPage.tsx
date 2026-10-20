import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { NAV_LINKS } from '../components/Navbar.tsx';
import { CTA } from '../config/site.ts';

// data-not-found lets the build notice a page that renders this by mistake
export const NotFoundPage: React.FC = () => (
  <div data-not-found className="bg-gray-50 text-gray-900">
    <PageHeader compact badge="Błąd 404" title="Nie ma takiej strony" description="Adres jest błędny albo strona została przeniesiona." />
    <section className="pt-12 pb-20 lg:pt-16 lg:pb-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row gap-3">
          <Link to="/" className="btn-engineering-primary focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
            Strona główna
          </Link>
          <Link to="/zapytanie" className="btn-secondary focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
            {CTA.label}
          </Link>
        </div>
        <h2 className="mt-12 font-display text-lg font-bold text-gray-900">Może szukasz:</h2>
        <ul className="mt-3 space-y-1">
          {NAV_LINKS.map((l) => (
            <li key={l.path}>
              <Link to={l.path} className="inline-flex min-h-11 items-center text-base font-semibold text-petrol-700 underline underline-offset-4 hover:text-amber-800">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  </div>
);
