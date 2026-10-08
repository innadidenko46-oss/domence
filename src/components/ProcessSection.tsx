import React from 'react';
import { motion } from 'motion/react';
import { WORKFLOW_STEPS } from '../data/content.ts';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {

  return (
    <section className="py-16 relative overflow-hidden border-t transition-colors duration-300 bg-white border-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-copper-600 mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Jak działamy krok po kroku</span>
          </div>
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-gray-900">
            Od pierwszej rozmowy do gotowego domu
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
            Wiesz, co dzieje się na każdym etapie. Masz jednego człowieka do kontaktu, umówiony termin i sprawdzenie prac na końcu.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 items-stretch">
          {/* 5-step Horizontal Process Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4 relative">
            {WORKFLOW_STEPS.map((step, idx) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.08 }}
                className="p-5 rounded-[2px] border transition-all flex flex-col justify-between bg-white border-gray-200 shadow-sm hover:border-copper-500/50"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="w-10 h-10 rounded-[2px] bg-copper-600 text-white text-lg font-mono font-bold flex items-center justify-center shrink-0">
                      {step.number}
                    </span>
                    <CheckCircle2 className="w-4 h-4 text-copper-600 opacity-60" />
                  </div>
                  <h3 className="text-sm font-bold leading-snug text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm mt-2.5 leading-relaxed text-gray-600">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-5 pt-3 border-t flex items-center justify-between text-xs font-mono text-gray-500 border-gray-200">
                  <span>Etap {idx + 1} z 5</span>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side photo banner */}
          <div className="relative rounded-[2px] overflow-hidden border border-gray-200 shadow-sm min-h-[240px]">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=85"
              alt="Biuro projektowe z planami instalacji i tabletem do sterowania domem"
              loading="lazy"
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </div>
        </div>

      </div>
    </section>
  );
};
