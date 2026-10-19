import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { KnowledgeBaseSection } from '../components/KnowledgeBaseSection.tsx';
import { Seo } from '../components/Seo.tsx';
import { BookOpen, ArrowRight } from 'lucide-react';

export const FaqPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <Seo
        title="Pytania i odpowiedzi — DOMENCE"
        description="Jak dom działa bez internetu, czy trzeba kuć ściany, czy nagrania z kamer zostają w domu. Odpowiedzi zwykłymi słowami."
        canonical="https://domence-o9s1.vercel.app/faq"
      />
      <PageHeader
        badge="Pytania i odpowiedzi"
        title="Pytania i odpowiedzi — prosto i konkretnie"
        description="Jak dom działa bez internetu, czy trzeba kuć ściany i czy nagrania z kamer zostają w domu. Zwykłymi słowami."
        icon={<BookOpen className="w-4 h-4 text-petrol-700" />}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85"
      />

      {/* Main Knowledge Base & FAQ Section Component */}
      <KnowledgeBaseSection />

      {/* Direct Engineer Contact Banner */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-petrol-900 text-white border-petrol-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-[2px] border border-white/10 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/5">
            <div className="max-w-xl">
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
                Porozmawiaj z inżynierem
              </h3>
              <p className="text-sm mt-2 leading-relaxed text-gray-300">
                Masz nietypowy dom albo mieszkanie? Odpisuje inżynier, który montuje takie instalacje, a nie infolinia.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                to="/kontakt"
                className="inline-flex items-center justify-center py-3.5 px-8 rounded-[2px] bg-amber-400 hover:bg-amber-300 text-petrol-950 font-semibold text-sm transition-colors shadow-sm focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
              >
                Zapytaj inżyniera
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-gray-600">Następny krok:</div>
            <div className="text-base font-bold text-gray-900">
              Opisz swój dom, a inżynier oddzwoni z propozycją
            </div>
          </div>
          <Link
            to="/zapytanie"
            className="btn-engineering-primary gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
          >
            <span>Odbierz propozycję dla swojego domu</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
