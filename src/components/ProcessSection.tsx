import React from 'react';
import { motion } from 'motion/react';
import { WORKFLOW_STEPS } from '../data/content.ts';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const isDay = true;

  return (
    <section className={`py-20 relative overflow-hidden border-t transition-colors duration-300 ${
      isDay ? 'bg-white border-[#E5E7EB] text-[#111827]' : 'bg-[#18181B] border-[#27272A] text-[#F3F4F6]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#B87333] mb-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Harmonogram i Standard Realizacji</span>
          </div>
          <h2 className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] ${
            isDay ? 'text-[#111827]' : 'text-white'
          }`}>
            Od analizy projektu po przekazanie kluczy
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-[1.7] ${
            isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
          }`}>
            Eliminujemy niespodzianki na budowie. Każdy etap ma przypisanego imiennego inżyniera prowadzącego, ustalony termin i precyzyjną procedurę odbiorową.
          </p>
        </div>

        {/* 5-step Horizontal Process Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
          {WORKFLOW_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: idx * 0.08 }}
              className={`p-5 rounded-[2px] border transition-all flex flex-col justify-between ${
                isDay
                  ? 'bg-[#F9FAFB] border-[#E5E7EB] hover:border-[#B87333]/50'
                  : 'bg-[#27272A]/40 border-white/10 hover:border-[#B87333]/40'
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl font-mono font-bold text-[#B87333]">
                    {step.number}
                  </span>
                  <CheckCircle2 className="w-4 h-4 text-[#B87333] opacity-60" />
                </div>
                <h3 className={`text-sm font-bold leading-snug ${
                  isDay ? 'text-[#111827]' : 'text-white'
                }`}>
                  {step.title}
                </h3>
                <p className={`text-xs mt-2.5 leading-[1.65] ${
                  isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
                }`}>
                  {step.desc}
                </p>
              </div>

              <div className={`mt-5 pt-3 border-t flex items-center justify-between text-[11px] font-mono text-[#6B7280] ${isDay ? 'border-[#E5E7EB]' : 'border-white/5'}`}>
                <span>Etap {idx + 1} z 5</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
