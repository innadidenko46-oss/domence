import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { FileQuestion } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <PageHeader
        badge="Błąd 404"
        title="Nie znaleziono strony"
        description="Adres, którego szukasz, nie istnieje lub został przeniesiony."
        icon={<FileQuestion className="w-4 h-4 text-copper-600" />}
      />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm mb-8 text-gray-600">
            Sprawdź poprawność adresu albo skorzystaj z nawigacji.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="px-6 py-3 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Wróć na stronę główną
            </Link>
            <Link
              to="/kalkulator"
              className="px-6 py-3 rounded-[2px] border text-xs font-semibold uppercase tracking-wider transition-colors bg-white border-gray-300 text-gray-900 hover:bg-gray-100"
            >
              Dobierz zestaw
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
