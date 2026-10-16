import React from 'react';
import { motion } from 'motion/react';
import { WORKFLOW_STEPS } from '../data/content.ts';

export const ProcessSection: React.FC = () => {

  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden border-t transition-colors duration-300 bg-white border-gray-200 text-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] text-gray-900">
            Od pierwszej rozmowy do gotowego domu
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
            Wiesz, co dzieje się na każdym etapie. Masz jednego człowieka do kontaktu, umówiony termin i sprawdzenie prac na końcu.
          </p>
        </div>

        {/* Five steps as one ruled row: number, title, text */}
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-x-8 gap-y-10 border-t border-gray-200 pt-8">
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.li
              key={step.number}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.06, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="font-display text-3xl font-extrabold tabular-nums text-petrol-700" aria-hidden="true">
                {step.number}
              </span>
              <h3 className="mt-3 text-base font-bold leading-snug text-gray-900">
                <span className="sr-only">Krok {idx + 1}: </span>
                {step.title}
              </h3>
              <p className="text-sm mt-2 leading-relaxed text-gray-600">
                {step.desc}
              </p>
            </motion.li>
          ))}
        </ol>

      </div>
    </section>
  );
};
