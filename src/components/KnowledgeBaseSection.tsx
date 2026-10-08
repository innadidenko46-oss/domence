import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/content.ts';
import { ChevronDown, Search, X } from 'lucide-react';

export const KnowledgeBaseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [query, setQuery] = useState('');
  const [openIds, setOpenIds] = useState<string[]>(() =>
    FAQ_ITEMS.length > 0 ? [FAQ_ITEMS[0].question] : []
  );

  const categories = [
    { id: 'all', label: 'Wszystkie pytania' },
    { id: 'dzialanie', label: 'Czy działa bez awarii' },
    { id: 'koszty', label: 'Koszty' },
    { id: 'bezpieczenstwo', label: 'Prywatność' },
    { id: 'remont', label: 'Montaż i remont' },
  ];

  const needle = query.trim().toLowerCase();
  const filteredItems = FAQ_ITEMS.filter(
    (item) =>
      (selectedCategory === 'all' || item.category === selectedCategory) &&
      (!needle ||
        `${item.question} ${item.simpleAnswer} ${item.technicalDetails}`.toLowerCase().includes(needle))
  );

  const toggleId = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const resetFilters = () => {
    setQuery('');
    setSelectedCategory('all');
  };

  return (
    <section id="baza-wiedzy" className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-gray-100 border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-start">

        {/* Left: header, search and filters stay in view while reading */}
        <div className="lg:col-span-4 lg:sticky lg:top-28">
          <div className="text-xs font-mono uppercase tracking-widest text-copper-600 mb-3">
            Baza wiedzy
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Pytania i odpowiedzi
          </h2>
          <p className="mt-3 text-base leading-relaxed max-w-prose text-gray-600">
            Co dzieje się bez internetu i przy burzy, ile kosztuje utrzymanie i czy każdy domownik da sobie radę z obsługą.
          </p>

          <label htmlFor="faq-search" className="block mt-8 mb-2 text-xs font-semibold text-gray-700">
            Szukaj w pytaniach
          </label>
          <div className="relative">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" aria-hidden="true" />
            <input
              id="faq-search"
              type="search"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="np. burza, abonament, kucie"
              className="w-full min-h-11 pl-10 pr-10 rounded-[2px] text-sm border bg-white border-gray-300 text-gray-900 focus:outline-none focus:border-copper-500 focus-visible:ring-2 focus-visible:ring-copper-500/60"
            />
            {query && (
              <button
                type="button"
                onClick={() => setQuery('')}
                aria-label="Wyczyść wyszukiwanie"
                className="absolute right-1 top-1/2 -translate-y-1/2 w-9 h-9 flex items-center justify-center rounded-[2px] text-gray-500 hover:text-gray-900 hover:bg-gray-100 cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          <div className="mt-5 flex flex-wrap gap-2" role="group" aria-label="Kategorie pytań">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                aria-pressed={selectedCategory === cat.id}
                className={`min-h-11 px-4 rounded-[2px] text-xs font-semibold transition-colors cursor-pointer active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 ${
                  selectedCategory === cat.id
                    ? 'bg-copper-600 text-white'
                    : 'bg-white text-gray-700 border border-gray-200 hover:border-gray-300 hover:bg-gray-50'}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Right: ruled question list */}
        <div className="lg:col-span-8">
          <p className="text-xs text-gray-500 mb-3 tabular-nums" aria-live="polite">
            {filteredItems.length === 1 ? '1 pytanie' : `Pytań: ${filteredItems.length}`}
          </p>

          {filteredItems.length === 0 ? (
            <div className="border-y border-gray-300 py-12">
              <h3 className="font-display text-lg font-bold text-gray-900">Nie mamy jeszcze takiego pytania</h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-600 max-w-prose">
                Spróbuj innego słowa albo zadaj pytanie inżynierowi — odpowiemy w ciągu 24 godzin roboczych.
              </p>
              <button
                type="button"
                onClick={resetFilters}
                className="mt-5 text-sm font-semibold text-copper-600 hover:text-copper-800 underline underline-offset-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500"
              >
                Pokaż wszystkie pytania
              </button>
            </div>
          ) : (
            <ul className="border-y border-gray-300 divide-y divide-gray-300">
              {filteredItems.map((item, index) => {
                const isOpen = openIds.includes(item.question);

                return (
                  <li key={item.question}>
                    <button
                      onClick={() => toggleId(item.question)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${index}`}
                      className="group w-full text-left py-6 flex items-start justify-between gap-6 cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                    >
                      <h3 className={`font-display text-base sm:text-lg font-bold transition-colors ${isOpen ? 'text-copper-700' : 'text-gray-900 group-hover:text-copper-700'}`}>
                        {item.question}
                      </h3>
                      <ChevronDown
                        className={`w-5 h-5 mt-0.5 shrink-0 text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                        aria-hidden="true"
                      />
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                          id={`faq-panel-${index}`}
                          role="region"
                          className="overflow-hidden"
                        >
                          <div className="pb-7 grid gap-4 max-w-prose">
                            <p className="text-base leading-relaxed text-gray-800">
                              {item.simpleAnswer}
                            </p>
                            <div className="pl-4 border-l-2 border-copper-500/50">
                              <div className="text-xs font-semibold text-gray-500 mb-1">Więcej szczegółów</div>
                              <p className="text-sm leading-relaxed text-gray-600">
                                {item.technicalDetails}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </li>
                );
              })}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
};
