import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { KnowledgeBaseSection } from '../components/KnowledgeBaseSection.tsx';
import { BookOpen, ArrowRight, MessageSquare } from 'lucide-react';

export const FaqPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-[#F9FAFB] text-[#111827]">
      <PageHeader
        badge="Pytania i odpowiedzi"
        title="Pytania i odpowiedzi — prosto i konkretnie"
        description="Jak dom działa bez internetu, czy trzeba kuć ściany i czy nagrania z kamer zostają w domu. Zwykłymi słowami."
        icon={<BookOpen className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Main Knowledge Base & FAQ Section Component */}
      <KnowledgeBaseSection />

      {/* Direct Engineer Contact Banner */}
      <section className="py-16 border-t bg-white border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 rounded-[2px] border flex flex-col md:flex-row items-center justify-between gap-6 bg-[#F9FAFB] border-[#E5E7EB]">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#B87333]/15 text-[#B87333] border border-[#B87333]/30 text-xs font-mono font-semibold mb-3">
                <MessageSquare className="w-3.5 h-3.5" />
                <span>Dziwny układ mieszkania albo domu?</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-[#111827]">
                Porozmawiaj z inżynierem
              </h3>
              <p className="text-xs sm:text-sm mt-2 leading-[1.7] text-[#4B5563]">
                Nie dzwonisz na infolinię. Odpisuje inżynier, który montuje takie instalacje.
              </p>
            </div>

            <div className="flex items-center gap-4 shrink-0">
              <Link
                to="/kontakt"
                className="btn-engineering-primary shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
              >
                Zapytaj inżyniera
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="py-12 border-t bg-[#F9FAFB] border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#9CA3AF] font-mono">Następny krok:</div>
            <div className="text-base font-bold text-[#111827]">
              Sprawdź, ile mniej więcej kosztuje zestaw do Twojego metrażu
            </div>
          </div>
          <Link
            to="/kalkulator"
            className="btn-engineering-primary gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
          >
            <span>Wypełnij ankietę (2 min)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
