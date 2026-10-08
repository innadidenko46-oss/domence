import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HIKVISION_PRODUCTS } from '../data/content.ts';
import {
  Video,
  ShieldAlert,
  BellRing,
  UserCheck,
  Tablet,
  ScanFace,
  CheckCircle2,
  Cpu,
  Eye,
} from 'lucide-react';
import { Link } from 'react-router-dom';

export const HikvisionShowcase: React.FC = () => {
  const [activeProductId, setActiveProductId] = useState<string>(HIKVISION_PRODUCTS[0].id);
  const isDay = true;

  const activeProduct =
    HIKVISION_PRODUCTS.find((p) => p.id === activeProductId) || HIKVISION_PRODUCTS[0];

  const getSeriesIcon = (category: string) => {
    switch (category) {
      case 'cctv_colorvu':
        return <Eye className="w-5 h-5 text-[#B87333]" />;
      case 'cctv_acusense':
        return <ShieldAlert className="w-5 h-5 text-red-500" />;
      case 'intercom_modular':
        return <BellRing className="w-5 h-5 text-sky-500" />;
      case 'access_minmoe':
        return <UserCheck className="w-5 h-5 text-emerald-500" />;
      case 'cctv_tandemvu':
        return <Video className="w-5 h-5 text-sky-500" />;
      case 'intercom_face':
        return <ScanFace className="w-5 h-5 text-emerald-500" />;
      case 'intercom_android':
        return <Tablet className="w-5 h-5 text-purple-500" />;
      default:
        return <Tablet className="w-5 h-5 text-purple-500" />;
    }
  };

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-500 border-t ${
      isDay ? 'bg-white border-slate-200 text-slate-800' : 'bg-[#05111A] border-white/10 text-slate-200'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-semibold uppercase tracking-wider mb-3 border ${
              isDay
                ? 'bg-sky-100 text-sky-900 border-sky-300'
                : 'bg-sky-500/10 text-sky-400 border-sky-500/20'
            }`}>
              <Video className="w-3.5 h-3.5" />
              <span>Najnowsze Serie Hikvision</span>
            </div>
            <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}>
              Monitoring ColorVu, AcuSense AI i Domofony IP Hikvision
            </h2>
            <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
              isDay ? 'text-slate-600' : 'text-slate-300'
            }`}>
              Oferujemy wyłącznie najnowsze serie Hikvision. Zobacz, czym różnią się przetworniki F1.0 oraz tryby
              hybrydowego oświetlenia, aktywne odstraszanie Live Guard oraz biometryczne terminale twarzy MinMoe.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className={`px-3 py-1.5 rounded-[2px] border font-mono font-medium ${
              isDay ? 'bg-slate-50 border-slate-300 text-slate-700' : 'bg-white/5 border-white/10 text-slate-300'
            }`}>
              Hikvision ColorVu F1.0
            </span>
            <span className={`px-3 py-1.5 rounded-[2px] border font-mono font-medium ${
              isDay ? 'bg-slate-50 border-slate-300 text-slate-700' : 'bg-white/5 border-white/10 text-slate-300'
            }`}>
              AcuSense Live Guard
            </span>
            <span className={`px-3 py-1.5 rounded-[2px] border font-mono font-medium ${
              isDay ? 'bg-slate-50 border-slate-300 text-slate-700' : 'bg-white/5 border-white/10 text-slate-300'
            }`}>
              MinMoe — rozpoznawanie twarzy
            </span>
          </div>
        </div>

        {/* Product Line Tabs */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-8">
          {HIKVISION_PRODUCTS.map((prod) => {
            const isSelected = prod.id === activeProductId;
            return (
              <button
                key={prod.id}
                onClick={() => setActiveProductId(prod.id)}
                className={`p-4 rounded-[2px] text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 min-h-[110px] ${
                  isSelected
                    ? isDay
                      ? 'bg-sky-50 border-sky-500 shadow-md shadow-sky-500/10 ring-1 ring-sky-500'
                      : 'bg-[#0E2A3C] border-sky-400 shadow-lg shadow-sky-500/15 ring-1 ring-sky-400/40'
                    : isDay
                      ? 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:bg-slate-100'
                      : 'bg-[#0A2230]/50 border-white/5 hover:border-white/15 hover:bg-[#0A2230]'
                }`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`w-8 h-8 rounded-[2px] flex items-center justify-center ${
                    isSelected
                      ? isDay ? 'bg-sky-200 text-sky-900' : 'bg-sky-500/20 text-sky-300'
                      : isDay ? 'bg-white text-slate-600' : 'bg-white/5 text-slate-400'
                  }`}>
                    {getSeriesIcon(prod.category)}
                  </div>
                  <span className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected
                      ? isDay ? 'bg-sky-100 text-sky-800' : 'bg-sky-500/20 text-sky-300'
                      : isDay ? 'bg-slate-200 text-slate-600' : 'bg-white/5 text-slate-400'
                  }`}>
                    Hikvision
                  </span>
                </div>
                <div className={`font-bold text-xs sm:text-sm leading-snug line-clamp-2 ${
                  isSelected
                    ? isDay ? 'text-sky-950 font-extrabold' : 'text-white'
                    : isDay ? 'text-slate-800' : 'text-slate-200'
                }`}>
                  {prod.series}
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Product Line Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeProduct.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className={`rounded-[2px] border overflow-hidden shadow-2xl ${
              isDay
                ? 'bg-white border-slate-200 shadow-slate-200/70'
                : 'bg-[#0A2230]/90 border-white/10 shadow-black/40'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Product Photo & Badge */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[420px] bg-slate-900 overflow-hidden">
                <img
                  src={activeProduct.image}
                  alt={`${activeProduct.series} — kamery i wideodomofony Hikvision`}
                  className="w-full h-full object-cover object-center filter brightness-90 hover:scale-105 transition-transform duration-700"
                />
                <div className={`absolute inset-0 ${
                  isDay
                    ? 'bg-gradient-to-t lg:bg-gradient-to-r from-slate-900/60 via-transparent to-transparent'
                    : 'bg-gradient-to-t lg:bg-gradient-to-r from-[#0A2230] via-transparent to-transparent'
                }`} />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-[2px] bg-[#071822]/85 backdrop-blur-md text-xs font-bold text-sky-400 border border-sky-500/30">
                    Hikvision — oryginalne urządzenia
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[2px] bg-[#071822]/90 backdrop-blur-md border border-white/10 text-xs text-slate-200">
                  <span className="text-[10px] uppercase font-bold text-[#C27A4E] block mb-1">
                    Gdzie najlepiej zastosować:
                  </span>
                  {activeProduct.bestUse}
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className={`text-xs font-bold uppercase tracking-wider ${
                      isDay ? 'text-sky-800' : 'text-sky-400'
                    }`}>
                      Systemy Hikvision w wykonaniu DOMENCE
                    </span>
                  </div>
                  <h3 className={`font-display text-2xl sm:text-3xl font-extrabold ${
                    isDay ? 'text-slate-900' : 'text-white'
                  }`}>
                    {activeProduct.series}
                  </h3>
                  <p className={`mt-2 text-sm sm:text-base font-medium ${
                    isDay ? 'text-[#7C4A1F]' : 'text-[#C27A4E]'
                  }`}>
                    {activeProduct.tagline}
                  </p>

                  {/* Key Tech Box */}
                  <div className={`mt-4 p-4 rounded-[2px] border text-xs leading-relaxed flex items-start gap-3 ${
                    isDay
                      ? 'bg-slate-50 border-slate-200 text-slate-800'
                      : 'bg-[#071822] border-white/10 text-slate-300'
                  }`}>
                    <Cpu className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className={`block mb-0.5 ${isDay ? 'text-slate-900' : 'text-white'}`}>
                        Parametry Optyczne i Przetwornik:
                      </strong>
                      {activeProduct.keyTech}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2.5">
                    {activeProduct.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                        <span className={isDay ? 'text-slate-700' : 'text-slate-300'}>
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer bar inside card */}
                <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 ${
                  isDay ? 'border-slate-200' : 'border-white/10'
                }`}>
                  <div className="text-xs text-slate-400">
                    Współpraca z rejestratorami NVR Hikvision serii I oraz M (PoE 4K)
                  </div>
                  <Link
                    to="/kalkulator"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-[2px] bg-sky-500 hover:bg-sky-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                  >
                    <span>Wyceń w kalkulatorze</span>
                  </Link>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
