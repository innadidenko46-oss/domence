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
    <section id="systemy" className="py-16 relative overflow-hidden border-t transition-colors bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-copper-500/10 border border-copper-500/30 text-copper-600 text-xs font-mono font-semibold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5" />
            <span>Porównanie</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-bold tracking-tight text-gray-900">
            Nasze realizacje, a typowe tańsze rozwiązania
          </h2>
          <p className="mt-3 text-sm sm:text-base max-w-prose leading-relaxed text-gray-600">
            Porównaj, co dostajesz. Bez nazw marek — liczy się to, jak dom działa na co dzień.
          </p>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-6 items-stretch">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="rounded-[2px] border-2 border-copper-500 bg-gray-50 p-6 sm:p-8 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">Tak robimy my</h3>
                <ul className="mt-5 space-y-3">
                  {OUR_WAY.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-700">
                      <span className="mt-0.5 w-5 h-5 rounded-[2px] bg-copper-500/15 border border-copper-500/30 flex items-center justify-center shrink-0">
                        <Check className="w-3.5 h-3.5 text-copper-600" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[2px] border bg-gray-50 border-gray-200 p-6 sm:p-8">
                <h3 className="text-base font-bold text-gray-900">Tak bywa gdzie indziej</h3>
                <ul className="mt-5 space-y-3">
                  {ELSEWHERE.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm leading-relaxed text-gray-600">
                      <span className="mt-0.5 w-5 h-5 rounded-[2px] bg-gray-100 border border-gray-200 flex items-center justify-center shrink-0">
                        <Minus className="w-3.5 h-3.5 text-gray-400" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="relative rounded-[2px] overflow-hidden border border-gray-200 shadow-sm min-h-[280px]">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=85"
                alt="Ciepłe wnętrze domu z dobrze wykonaną instalacją elektryczną"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
            </div>
          </div>

          <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 rounded-[2px] border bg-gray-50 border-gray-200 p-6">
            <p className="text-sm text-gray-600 leading-relaxed">
              Chcesz wiedzieć, co pasuje do Twojego domu? Opisz dom w krótkiej ankiecie.
            </p>
            <Link
              to="/kalkulator"
              className="btn-engineering-primary gap-2 focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 focus-visible:outline-none"
            >
              <span>Dobierz zestaw (2 min)</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
