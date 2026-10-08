import React from 'react';
import { motion } from 'motion/react';
import { Layers, Check, Minus, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const OUR_WAY: string[] = [
  'Światło, rolety i zamek działają też bez internetu',
  'Brak abonamentu za zapis i podgląd — nagrania zostają w domu',
  'Montaż z odciągiem pyłu, bez kucia na gotowo',
  'Pisemna wycena przed startem — wiesz, za co płacisz',
  'Dokumentacja i protokoły pomiarów po montażu',
  'Gwarancja 24 miesiące + opieka po montażu',
  'Jeden kontakt do człowieka, nie infolinia',
];

const ELSEWHERE: string[] = [
  'Światło czy rolety potrafią stanąć, gdy padnie internet',
  'Podgląd i zapis często wymagają płatnej subskrypcji',
  'Montaż bywa z kuciem i kurzem w gotowym mieszkaniu',
  'Cena dopisywana w trakcie, bez pełnej wyceny na piśmie',
  'Po montażu brak schematów i protokołów pomiarów',
  'Krótka gwarancja i brak stałej opieki po montażu',
  'Kontakt przez infolinię, za każdym razem inna osoba',
];

export const SystemsComparisonSection: React.FC = () => {
  return (
    <section id="systemy" className="py-24 relative overflow-hidden border-t transition-colors bg-white border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333] text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Porównanie</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#111827]">
            Nasze realizacje, a typowe tańsze rozwiązania
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-2xl leading-relaxed text-[#4B5563]">
            Porównaj, co dostajesz. Bez nazw marek — liczy się to, jak dom działa na co dzień.
          </p>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="rounded-[2px] border-2 border-[#B87333] bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="text-base font-bold text-[#111827]">Tak robimy my</h3>
              <ul className="mt-5 space-y-3">
                {OUR_WAY.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#374151]">
                    <span className="mt-0.5 w-5 h-5 rounded-[2px] bg-[#B87333]/15 border border-[#B87333]/30 flex items-center justify-center shrink-0">
                      <Check className="w-3.5 h-3.5 text-[#B87333]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB] p-6 sm:p-8">
              <h3 className="text-base font-bold text-[#111827]">Tak bywa gdzie indziej</h3>
              <ul className="mt-5 space-y-3">
                {ELSEWHERE.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-[#4B5563]">
                    <span className="mt-0.5 w-5 h-5 rounded-[2px] bg-[#F3F4F6] border border-[#E5E7EB] flex items-center justify-center shrink-0">
                      <Minus className="w-3.5 h-3.5 text-[#9CA3AF]" />
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB] p-6">
            <p className="text-sm text-[#4B5563] leading-relaxed">
              Chcesz wiedzieć, co pasuje do Twojego domu? Opisz dom w krótkiej ankiecie.
            </p>
            <Link
              to="/kalkulator"
              className="btn-engineering-primary gap-2 focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <span>Wypełnij ankietę (2 min)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
