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

  const activeProduct =
    HIKVISION_PRODUCTS.find((p) => p.id === activeProductId) || HIKVISION_PRODUCTS[0];

  const getSeriesIcon = (category: string) => {
    switch (category) {
      case 'cctv_colorvu':
        return <Eye className="w-5 h-5 text-copper-600" />;
      case 'cctv_acusense':
        return <ShieldAlert className="w-5 h-5 text-copper-600" />;
      case 'intercom_modular':
        return <BellRing className="w-5 h-5 text-copper-600" />;
      case 'access_minmoe':
        return <UserCheck className="w-5 h-5 text-copper-600" />;
      case 'cctv_tandemvu':
        return <Video className="w-5 h-5 text-copper-600" />;
      case 'intercom_face':
        return <ScanFace className="w-5 h-5 text-copper-600" />;
      case 'intercom_android':
        return <Tablet className="w-5 h-5 text-copper-600" />;
      default:
        return <Tablet className="w-5 h-5 text-copper-600" />;
    }
  };

  return (
    <section className="py-16 relative overflow-hidden transition-colors duration-500 border-t bg-gray-100 border-gray-200 text-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-semibold uppercase tracking-wider mb-3 border bg-copper-500/10 text-copper-600 border-copper-500/30">
              <Video className="w-3.5 h-3.5" />
              <span>Najnowsze kamery i domofony Hikvision</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gray-950">
              Kamery, które widzą w nocy w kolorze, i domofon z kamerą
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Dostajesz podgląd domu w telefonie i nagrania u siebie. Kamery ColorVu dają kolorowy obraz w nocy, a system AcuSense rozpoznaje ludzi i auta, więc nie dostajesz fałszywych alarmów.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 text-xs">
            <span className="px-3 py-1.5 rounded-[2px] border font-mono font-medium bg-gray-50 border-gray-300 text-gray-700">
              Kolor w nocy
            </span>
            <span className="px-3 py-1.5 rounded-[2px] border font-mono font-medium bg-gray-50 border-gray-300 text-gray-700">
              Rozpoznawanie ludzi i aut
            </span>
            <span className="px-3 py-1.5 rounded-[2px] border font-mono font-medium bg-gray-50 border-gray-300 text-gray-700">
              Otwarcie twarzą
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
                className={`p-4 rounded-[2px] text-left transition-all duration-200 border flex flex-col justify-between cursor-pointer focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 min-h-[110px] ${
                  isSelected
                    ? 'bg-copper-500/10 border-copper-500 shadow-md shadow-copper-500/10 ring-1 ring-copper-500': 'bg-white border-gray-200 hover:border-copper-500/40'}`}
              >
                <div className="flex items-center justify-between w-full mb-2">
                  <div className={`w-8 h-8 rounded-[2px] flex items-center justify-center ${
                    isSelected
                      ? 'bg-copper-600 text-white': 'bg-gray-100 text-gray-600'}`}>
                    {getSeriesIcon(prod.category)}
                  </div>
                  <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                    isSelected
                      ? 'bg-copper-500/15 text-copper-600': 'bg-gray-200 text-gray-600'}`}>
                    Hikvision
                  </span>
                </div>
                <div className={`font-bold text-xs sm:text-sm leading-snug line-clamp-2 ${
                  isSelected
                    ? 'text-gray-900 font-extrabold': 'text-gray-800'}`}>
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
            className="rounded-[2px] border overflow-hidden shadow-2xl bg-white border-gray-200 shadow-gray-200/70"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              {/* Product Photo & Badge */}
              <div className="lg:col-span-5 relative min-h-[260px] lg:min-h-[420px] bg-gray-900 overflow-hidden">
                <img
                  src={activeProduct.image}
                  alt={`${activeProduct.series} — kamery i wideodomofony Hikvision`}
                  className="w-full h-full object-cover object-center filter brightness-90 duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-gray-900/60 via-transparent to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 rounded-[2px] bg-navy-950/85 backdrop-blur-md text-xs font-bold text-copper-200 border border-copper-500/40">
                    Hikvision — oryginalne urządzenia
                  </span>
                </div>
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-[2px] bg-navy-950/90 backdrop-blur-md border border-white/10 text-xs text-gray-200">
                  <span className="text-xs uppercase font-bold text-copper-400 block mb-1">
                    Gdzie najlepiej zastosować:
                  </span>
                  {activeProduct.bestUse}
                </div>
              </div>

              {/* Product Details */}
              <div className="lg:col-span-7 p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-copper-600">
                      System rozpoznawania ludzi i aut, syrena i światło na intruza
                    </span>
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900">
                    {activeProduct.series}
                  </h3>
                  <p className="mt-2 text-sm sm:text-base font-medium text-copper-800">
                    {activeProduct.tagline}
                  </p>

                  {/* Key Tech Box */}
                  <div className="mt-4 p-4 rounded-[2px] border text-xs leading-relaxed flex items-start gap-3 bg-gray-50 border-gray-200 text-gray-800">
                    <Cpu className="w-5 h-5 text-copper-600 shrink-0 mt-0.5" />
                    <div>
                      <strong className="block mb-0.5 text-gray-900">
                        Co jest w środku:
                      </strong>
                      {activeProduct.keyTech}
                    </div>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="mt-5 space-y-2.5">
                    {activeProduct.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm">
                        <CheckCircle2 className="w-4 h-4 text-copper-600 shrink-0 mt-0.5" />
                        <span className="text-gray-700">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer bar inside card */}
                <div className="mt-8 pt-6 border-t flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-gray-200">
                  <div className="text-xs text-gray-400">
                    Działa z rejestratorem nagrań w domu (zapis bez abonamentu)
                  </div>
                  <Link
                    to="/kalkulator"
                    className="inline-flex items-center justify-center gap-2 py-2.5 px-5 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-bold text-xs uppercase tracking-wider transition-all focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
                  >
                    <span>Dobierz zestaw (2 min)</span>
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
