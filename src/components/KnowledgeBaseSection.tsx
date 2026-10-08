import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { FAQ_ITEMS } from '../data/content.ts';
import { BookOpen, ChevronDown, ChevronUp, Cpu, HelpCircle, ShieldCheck } from 'lucide-react';

export const KnowledgeBaseSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [openIds, setOpenIds] = useState<string[]>(() =>
    FAQ_ITEMS.length > 0 ? [FAQ_ITEMS[0].question] : []
  );

  const categories = [
    { id: 'all', label: 'Wszystkie Zagadnienia' },
    { id: 'dzialanie', label: 'Niezawodność & Działanie' },
    { id: 'koszty', label: 'Koszty & Oszczędności' },
    { id: 'bezpieczenstwo', label: 'Prywatność & Ochrona' },
    { id: 'remont', label: 'Instalacja & Remont' },
  ];

  const filteredItems =
    selectedCategory === 'all'
      ? FAQ_ITEMS
      : FAQ_ITEMS.filter((item) => item.category === selectedCategory);

  const toggleId = (id: string) => {
    setOpenIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  return (
    <section id="baza-wiedzy" className="py-24 relative overflow-hidden transition-colors duration-500 border-t bg-white border-slate-200 text-slate-800">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-semibold uppercase tracking-wider mb-3 border bg-[#B87333]/10 text-[#7C4A1F] border-[#B87333]/30">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Baza wiedzy i FAQ</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900">
            Odpowiedzi na kluczowe pytania techniczne.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed text-slate-600">
            Konkretne informacje o stabilności instalacji offline, zachowaniu urządzeń podczas burzy, 
            kosztach eksploatacji i ergonomii codziennego użytkowania.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-4 py-2 rounded-[2px] text-xs font-semibold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                selectedCategory === cat.id
                  ? 'bg-[#B87333] text-white font-bold shadow-md shadow-[#B87333]/20'
                  : 'bg-slate-100 text-slate-700 border border-slate-200 hover:bg-slate-200'}`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {filteredItems.map((item, index) => {
            const isOpen = openIds.includes(item.question);

            return (
              <div
                key={index}
                className={`rounded-[2px] transition-all duration-200 border overflow-hidden ${
                  isOpen
                    ? 'bg-slate-50/80 border-[#C27A4E] shadow-md': 'bg-white border-slate-200 hover:border-slate-300'}`}
              >
                {/* Accordion Question Header */}
                <button
                  onClick={() => toggleId(item.question)}
                  aria-expanded={isOpen}
                  aria-controls={`faq-panel-${index}`}
                  className="w-full text-left p-6 sm:p-7 flex items-center justify-between gap-4 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-9 h-9 rounded-[2px] flex items-center justify-center shrink-0 ${
                        isOpen
                          ? 'bg-[#B87333] text-white'
                          : 'bg-slate-100 text-slate-600'}`}
                    >
                      <HelpCircle className="w-5 h-5" />
                    </div>
                    <h3 className="font-display text-base sm:text-lg font-bold text-slate-900">
                      {item.question}
                    </h3>
                  </div>

                  <div
                    className="p-2 rounded-[2px] shrink-0 bg-slate-100 text-slate-600"
                  >
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {/* Answers: Human Summary + Detailed Engineering */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.25 }}
                      id={`faq-panel-${index}`}
                      role="region"
                      className="overflow-hidden px-6 pb-7 sm:px-7 sm:pb-8 border-t space-y-4 border-slate-200"
                    >
                      {/* Human-Friendly Direct Answer */}
                      <div className="p-4 rounded-[2px] border text-sm leading-relaxed bg-white border-[#B87333]/30 text-slate-700">
                        <div className="flex items-center gap-2 mb-1.5">
                          <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0" />
                          <span className="text-xs font-bold uppercase tracking-wider text-[#7C4A1F]">
                            Odpowiedź w pigułce:
                          </span>
                        </div>
                        <p className="font-light">
                          {item.simpleAnswer}
                        </p>
                      </div>

                      {/* Deep-Dive Engineering Details */}
                      <div className="p-4 rounded-[2px] border text-xs leading-relaxed bg-slate-100/70 border-slate-200 text-slate-600">
                        <div className="flex items-center gap-2 mb-1.5">
                          <Cpu className="w-3.5 h-3.5 shrink-0 text-slate-600" />
                          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-700">
                            Aspekty techniczne & integracja:
                          </span>
                        </div>
                        <p className="font-mono text-[11px] leading-relaxed">
                          {item.technicalDetails}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
