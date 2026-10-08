import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { FileQuestion } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  const isDay = true;

  return (
    <div
      className={`transition-colors duration-300 ${
        isDay ? 'bg-[#F9FAFB] text-[#111827]' : 'bg-[#18181B] text-[#F3F4F6]'
      }`}
    >
      <PageHeader
        badge="Błąd 404"
        title="Nie znaleziono strony"
        description="Adres, którego szukasz, nie istnieje lub został przeniesiony."
        icon={<FileQuestion className="w-4 h-4 text-[#B87333]" />}
      />
      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p
            className={`text-sm mb-8 ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}
          >
            Sprawdź poprawność adresu albo skorzystaj z nawigacji.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="px-6 py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-bold text-xs uppercase tracking-wider transition-colors"
            >
              Wróć na stronę główną
            </Link>
            <Link
              to="/kalkulator"
              className={`px-6 py-3 rounded-[2px] border text-xs font-semibold uppercase tracking-wider transition-colors ${
                isDay
                  ? 'bg-white border-[#D1D5DB] text-[#111827] hover:bg-[#F3F4F6]'
                  : 'bg-[#27272A] border-white/10 text-white hover:bg-[#3F3F46]'
              }`}
            >
              Przejdź do kalkulatora
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
