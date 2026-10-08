import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Smartphone,
  ShieldCheck,
  Zap,
  Sliders,
  BellRing,
  Video,
  Sun,
  Droplets,
  Gauge,
  Lock,
  ArrowRight,
  Eye,
  CheckCircle2,
  Clock,
  SlidersHorizontal,
  KeyRound,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { Link, useNavigate } from 'react-router-dom';

interface AppTab {
  id: 'shelly' | 'hikvision';
  name: string;
  tagline: string;
  badge: string;
  brandColor: string;
  icon: React.ReactNode;
}

export const AppsShowcaseSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'shelly' | 'hikvision'>('shelly');
  const navigate = useNavigate();
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const apps: AppTab[] = [
    {
      id: 'shelly',
      name: 'Aplikacja do automatyki domowej',
      tagline: 'Centrum zarządzania światłem, mikroklimatem, bezpieczeństwem i energią (aplikacja Shelly Smart Control)',
      badge: 'Sterowanie & Automatyzacje',
      brandColor: 'text-[#B87333]',
      icon: <Zap className="w-5 h-5 text-[#B87333]" />,
    },
    {
      id: 'hikvision',
      name: 'Aplikacja do wideodomofonów i kamer',
      tagline: 'Podgląd na żywo 4K, rozmowy wideo z furtki i natychmiastowe alerty o ludziach/pojazdach (aplikacja Hik-Connect)',
      badge: 'Monitoring & Kontrola Wejścia',
      brandColor: 'text-sky-500',
      icon: <Video className="w-5 h-5 text-sky-500" />,
    },
  ];

  return (
    <section className={`py-20 relative overflow-hidden transition-colors duration-500 border-t ${
      isDay ? 'bg-slate-50 border-slate-200 text-slate-800' : 'bg-[#05111A] border-white/10 text-slate-200'
    }`}>
      {/* Background radial glow */}
      <div className="hidden sm:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#B87333]/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-[2px] text-xs font-semibold uppercase tracking-wider mb-3 border ${
            isDay
              ? 'bg-[#B87333]/10 text-[#7C4A1F] border-[#B87333]/30'
              : 'bg-[#B87333]/10 text-[#C27A4E] border-[#B87333]/30'
          }`}>
            <Smartphone className="w-3.5 h-3.5" />
            <span>Aplikacje Mobilne i Kontrola w Telefonie</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
            isDay ? 'text-slate-900' : 'text-white'
          }`}>
            Sterowanie światłem, roletami i klimatem z telefonu.
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
            isDay ? 'text-slate-600' : 'text-slate-300'
          }`}>
            Konfiguracja jest opisana krok po kroku. Dostarczamy intuicyjne, przejrzyste aplikacje na iOS i Android, 
            z którymi poradzi sobie każdy domownik – od podglądu furtki w pracy po sceny relaksu i ochronę przed zalaniem.
          </p>
        </div>

        {/* Tab Switcher */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10 max-w-2xl">
          {apps.map((tab) => {
            const isSelected = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 p-4 rounded-[2px] text-left transition-all border flex items-center gap-3.5 ${
                  isSelected
                    ? isDay
                      ? 'bg-white border-[#B87333] shadow-md ring-2 ring-[#B87333]/20'
                      : 'bg-[#0B2535] border-[#B87333]/50 shadow-xl ring-2 ring-[#B87333]/20'
                    : isDay
                      ? 'bg-white/70 border-slate-200 hover:border-slate-300'
                      : 'bg-[#0A2230]/40 border-white/5 hover:border-white/15'
                }`}
              >
                <div className={`w-10 h-10 rounded-[2px] flex items-center justify-center shrink-0 ${
                  isDay ? 'bg-slate-100' : 'bg-white/5'
                }`}>
                  {tab.icon}
                </div>
                <div>
                  <div className={`text-[10px] font-bold uppercase tracking-wider ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
                    {tab.badge}
                  </div>
                  <div className={`text-sm font-bold ${
                    isSelected
                      ? isDay ? 'text-[#A36034]' : 'text-[#C27A4E]'
                      : isDay ? 'text-slate-800' : 'text-white'
                  }`}>
                    {tab.name}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Tab Content Display */}
        <AnimatePresence mode="wait">
          {activeTab === 'shelly' ? (
            <motion.div
              key="shelly-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Visual Mockup / Feature Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className={`p-7 rounded-[2px] border ${
                  isDay ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0A2230]/70 border-white/10'
                }`}>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-[#B87333] mb-2">
                    <Sun className="w-4 h-4" />
                    <span>Zdolności aplikacji automatyki domowej</span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDay ? 'text-slate-900' : 'text-white'}`}>
                    Co potrafi aplikacja w codziennym życiu?
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${
                    isDay ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    Aplikacja łączy w jednym miejscu oświetlenie, rolety, ogrzewanie, ochronę przed zalaniem, sceny nastrojowe i gniazda zasilania. Działa z kanapy przez sieć Wi-Fi, a zdalnie przez internet.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-[2px] border ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/5'
                    }`}>
                      <div className="flex items-center gap-2 text-[#C27A4E] font-bold text-xs mb-1.5">
                        <Clock className="w-4 h-4 shrink-0" />
                        <span>Harmonogramy Wschód / Zachód</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                        Światło wejściowe zapala się dokładnie o zachodzie słońca (korygowanym astronomicznie każdego dnia), a rolety rano łagodnie wpuszczają pierwsze promienie słońca.
                      </p>
                    </div>

                    <div className={`p-4 rounded-[2px] border ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/5'
                    }`}>
                      <div className={`flex items-center gap-2 font-bold text-xs mb-1.5 ${isDay ? 'text-sky-700' : 'text-sky-400'}`}>
                        <SlidersHorizontal className="w-4 h-4 shrink-0" />
                        <span>Sceny «Jedno Kliknięcie»</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                        Scena «Wieczorny Relaks i Kolacja» jednocześnie przygasza światło w salonie do 30%, zamyka rolety odcinając zmrok za oknem i włącza ulubioną playlistę.
                      </p>
                    </div>

                    <div className={`p-4 rounded-[2px] border ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/5'
                    }`}>
                      <div className={`flex items-center gap-2 font-bold text-xs mb-1.5 ${isDay ? 'text-emerald-700' : 'text-emerald-400'}`}>
                        <Gauge className="w-4 h-4 shrink-0" />
                        <span>Pomiar Zużycia Energii na Żywo</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                        Widzisz w watach i złotówkach, ile prądu pobiera pompa ciepła, oświetlenie czy klimatyzacja. Wykresy dobowe, tygodniowe i miesięczne bez niespodzianek.
                      </p>
                    </div>

                    <div className={`p-4 rounded-[2px] border ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/5'
                    }`}>
                      <div className={`flex items-center gap-2 font-bold text-xs mb-1.5 ${isDay ? 'text-rose-600' : 'text-rose-400'}`}>
                        <ShieldCheck className="w-4 h-4 shrink-0" />
                        <span>Alerty i Ochrona w Tle</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                        Powiadomienie PUSH, jeśli zostawiłeś otwarte okno przy włączonym grzaniu, albo gdy czujnik zalania wykryje wilgoć przy zaworze pralki.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Local vs Cloud Callout */}
                <div className={`p-5 rounded-[2px] border flex items-start gap-4 ${
                  isDay ? 'bg-emerald-50 border-emerald-200 text-emerald-950' : 'bg-emerald-950/20 border-emerald-500/30 text-emerald-200'
                }`}>
                  <Lock className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <span className="font-bold block mb-1">Działa lokalnie, także bez internetu</span>
                    Jeśli operator odetnie kabel internetowy do Twojego domu, włączniki na ścianie i aplikacja w domowej sieci Wi-Fi nadal w pełni sterują światłem, roletami i klimatem. Nie ma żadnego uzależnienia od awarii serwerów zewnętrznych. Powiadomienia PUSH poza domem i podgląd zdalny wymagają internetu.
                  </div>
                </div>
              </div>

              {/* Right Column: Phone Screen Feature Showcase */}
              <div className="lg:col-span-5">
                <div className={`rounded-[2px] p-6 sm:p-7 border ${
                  isDay ? 'bg-white border-slate-200 shadow-lg' : 'bg-[#091D29] border-white/15'
                }`}>
                  <div className={`flex items-center justify-between pb-4 mb-5 border-b ${isDay ? 'border-[#E5E7EB]' : 'border-white/10'}`}>
                    <div className={`text-xs font-bold uppercase tracking-wider ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
                      Podgląd funkcji w telefonie
                    </div>
                    <span className="px-2.5 py-0.5 rounded-[2px] bg-[#B87333]/20 text-[#C27A4E] font-mono text-[10px]">
                      Shelly Smart Control
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className={`p-3.5 rounded-[2px] border flex items-center justify-between ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/10'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Droplets className={`w-4 h-4 ${isDay ? 'text-sky-700' : 'text-sky-400'}`} />
                        <div>
                          <div className={`font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>Ochrona przed zalaniem (Zawór Główny)</div>
                          <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Czujniki: Łazienka, Kuchnia, Kotłownia</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 rounded bg-sky-500/20 text-sky-300">
                        Fail-Safe Aktywny
                      </span>
                    </div>

                    <div className={`p-3.5 rounded-[2px] border flex items-center justify-between ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/10'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Sun className="w-4 h-4 text-[#C27A4E]" />
                        <div>
                          <div className={`font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>Oświetlenie Nastrojowe Salonu</div>
                          <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Ciepły bursztyn 2400K • Ściemnienie 35%</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 rounded bg-[#B87333]/20 text-[#C27A4E]">
                        Aktywna Scena
                      </span>
                    </div>

                    <div className={`p-3.5 rounded-[2px] border flex items-center justify-between ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/10'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Sliders className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className={`font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>Scena «Joga & Mindfulness»</div>
                          <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Rolety 100% • LED 15% • Wentylacja cicha</div>
                        </div>
                      </div>
                      <button
                        className="text-[10px] font-bold px-3 py-1 rounded-[2px] bg-purple-500 hover:bg-purple-600 text-white transition-colors focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                        onClick={() => navigate('/kalkulator')}
                      >
                        Uruchom
                      </button>
                    </div>

                    <div className={`p-3.5 rounded-[2px] border flex items-center justify-between ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/10'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Gauge className={`w-4 h-4 ${isDay ? 'text-emerald-700' : 'text-emerald-400'}`} />
                        <div>
                          <div className={`font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>Bieżący pobór posesji</div>
                          <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Pompa ciepła, oświetlenie, rekuperator</div>
                        </div>
                      </div>
                      <span className="font-mono text-xs font-bold text-emerald-400">np. 480 W</span>
                    </div>
                  </div>

                  <div className={`mt-6 pt-4 border-t text-center ${isDay ? 'border-[#E5E7EB]' : 'border-white/10'}`}>
                    <Link
                      to="/kalkulator"
                      className="inline-flex items-center gap-2 text-xs font-bold text-[#C27A4E] hover:text-[#C27A4E] transition-colors focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                    >
                      <span>Wyceń w kalkulatorze</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="hikvision-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start"
            >
              {/* Left Column: Visual Mockup / Feature Highlights */}
              <div className="lg:col-span-7 space-y-6">
                <div className={`p-7 rounded-[2px] border ${
                  isDay ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#0A2230]/70 border-white/10'
                }`}>
                  <div className="flex items-center gap-2 text-xs font-bold uppercase text-sky-400 mb-2">
                    <Video className="w-4 h-4" />
                    <span>Zdolności aplikacji wideodomofonów i kamer 4K</span>
                  </div>
                  <h3 className={`text-2xl font-bold mb-3 ${isDay ? 'text-slate-900' : 'text-white'}`}>
                    Bezpieczeństwo posesji bez zmartwień i wygodne odbieranie furtki
                  </h3>
                  <p className={`text-xs sm:text-sm leading-relaxed mb-6 font-light ${
                    isDay ? 'text-slate-600' : 'text-slate-300'
                  }`}>
                    Aplikacja wideodomofonu łączy Cię bezpośrednio ze stacją bramową i kamerami ColorVu. 
                    Nawet gdy stoisz w korku w centrum miasta lub odpoczywasz za granicą, masz pełną kontrolę nad tym, kto zbliża się do domu.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className={`p-4 rounded-[2px] border ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/5'
                    }`}>
                      <div className={`flex items-center gap-2 font-bold text-xs mb-1.5 ${isDay ? 'text-sky-700' : 'text-sky-400'}`}>
                        <BellRing className="w-4 h-4 shrink-0" />
                        <span>Szybkie połączenie wideo</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                        Gdy kurier dzwoni do furtki, Twój telefon dzwoni jak zwykłe połączenie wideo. Widzisz rozmówcę w jakości Full HD/4K i słyszysz go z redukcją szumu wiatru.
                      </p>
                    </div>

                    <div className={`p-4 rounded-[2px] border ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/5'
                    }`}>
                      <div className="flex items-center gap-2 text-[#C27A4E] font-bold text-xs mb-1.5">
                        <KeyRound className="w-4 h-4 shrink-0" />
                        <span>Otwieranie Furtki i Bramy</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                        Jeden przycisk na ekranie rozmowy zwalnia elektrozaczep furtki lub uchyla bramę wjazdową. Kurier może bezpiecznie położyć paczkę pod wiatą.
                      </p>
                    </div>

                    <div className={`p-4 rounded-[2px] border ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/5'
                    }`}>
                      <div className={`flex items-center gap-2 font-bold text-xs mb-1.5 ${isDay ? 'text-rose-600' : 'text-rose-400'}`}>
                        <Eye className="w-4 h-4 shrink-0" />
                        <span>Podgląd na Żywo w Kolorze 24/7</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                        Dzięki przetwornikowi ColorVu F1.0 widzisz nocny obraz wejścia i podjazdu w żywych, naturalnych kolorach, a nie w ponurej szarości podczerwieni.
                      </p>
                    </div>

                    <div className={`p-4 rounded-[2px] border ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/5'
                    }`}>
                      <div className={`flex items-center gap-2 font-bold text-xs mb-1.5 ${isDay ? 'text-emerald-700' : 'text-emerald-400'}`}>
                        <CheckCircle2 className="w-4 h-4 shrink-0" />
                        <span>Redukcja fałszywych alarmów</span>
                      </div>
                      <p className={`text-xs leading-relaxed font-light ${isDay ? 'text-slate-600' : 'text-slate-400'}`}>
                        Sztuczna inteligencja odróżnia sylwetkę człowieka i samochodu od przebiegającego kota, psa, deszczu czy kołyszących się na wietrze gałęzi drzew.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Storage Callout */}
                <div className={`p-5 rounded-[2px] border flex items-start gap-4 ${
                  isDay ? 'bg-sky-50 border-sky-200 text-sky-950' : 'bg-sky-950/20 border-sky-500/30 text-sky-200'
                }`}>
                  <ShieldCheck className="w-5 h-5 text-sky-400 shrink-0 mt-0.5" />
                  <div className="text-xs leading-relaxed">
                    <span className="font-bold block mb-1">Aplikacja Hik-Connect — podgląd na telefonie bez opłat abonamentowych</span>
                    Wszystkie nagrania wideo zapisują się na fizycznym, bezpiecznym dysku twardym rejestratora w Twoim domu. Nie płacisz co miesiąc za miejsce w chmurze ani za dostęp do archiwum nagrań.
                  </div>
                </div>
              </div>

              {/* Right Column: Phone Screen Feature Showcase */}
              <div className="lg:col-span-5">
                <div className={`rounded-[2px] p-6 sm:p-7 border ${
                  isDay ? 'bg-white border-slate-200 shadow-lg' : 'bg-[#091D29] border-white/15'
                }`}>
                  <div className={`flex items-center justify-between pb-4 mb-5 border-b ${isDay ? 'border-[#E5E7EB]' : 'border-white/10'}`}>
                    <div className={`text-xs font-bold uppercase tracking-wider ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>
                      Podgląd funkcji w telefonie
                    </div>
                    <span className="px-2.5 py-0.5 rounded-[2px] bg-sky-500/20 text-sky-300 font-mono text-[10px]">
                      Hik-Connect
                    </span>
                  </div>

                  <div className="space-y-3 text-xs">
                    <div className={`p-3.5 rounded-[2px] border flex items-center justify-between ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/10'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Video className={`w-4 h-4 ${isDay ? 'text-sky-700' : 'text-sky-400'}`} />
                        <div>
                          <div className={`font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>Stacja Bramowa (Furtka Wejściowa)</div>
                          <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Kamera 180° WDR • Status: Online</div>
                        </div>
                      </div>
                      <button
                        className="text-[10px] font-bold px-3 py-1 rounded-[2px] bg-emerald-500 hover:bg-emerald-600 text-slate-950 transition-colors focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                        onClick={() => navigate('/teletechnika')}
                      >
                        Otwórz Furtkę
                      </button>
                    </div>

                    <div className={`p-3.5 rounded-[2px] border flex items-center justify-between ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/10'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Eye className="w-4 h-4 text-[#C27A4E]" />
                        <div>
                          <div className={`font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>Kamera Podjazd & Brama (ColorVu 4K)</div>
                          <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Żywy kolor w nocy • Detekcja pojazdu</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-[#B87333]/20 text-[#C27A4E]">
                        LIVE 4K
                      </span>
                    </div>

                    <div className={`p-3.5 rounded-[2px] border flex items-center justify-between ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/10'
                    }`}>
                      <div className="flex items-center gap-3">
                        <ShieldCheck className={`w-4 h-4 ${isDay ? 'text-rose-600' : 'text-rose-400'}`} />
                        <div>
                          <div className={`font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>Wejście Główne & Fasada (AcuSense AI)</div>
                          <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Ochrona wejścia aktywna • Redukcja fałszywych alarmów</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-bold px-2 py-1 rounded bg-rose-500/20 text-rose-300">
                        Strzeżone
                      </span>
                    </div>

                    <div className={`p-3.5 rounded-[2px] border flex items-center justify-between ${
                      isDay ? 'bg-slate-50 border-slate-200' : 'bg-[#071822] border-white/10'
                    }`}>
                      <div className="flex items-center gap-3">
                        <Lock className="w-4 h-4 text-purple-400" />
                        <div>
                          <div className={`font-bold ${isDay ? 'text-slate-900' : 'text-white'}`}>Czasowy kod QR dla kuriera</div>
                          <div className={`text-[11px] ${isDay ? 'text-slate-500' : 'text-slate-400'}`}>Ważny dzisiaj do godziny 18:00</div>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">
                        Aktywny
                      </span>
                    </div>
                  </div>

                  <div className={`mt-6 pt-4 border-t text-center ${isDay ? 'border-[#E5E7EB]' : 'border-white/10'}`}>
                    <Link
                      to="/teletechnika"
                      className="inline-flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                    >
                      <span>Zobacz ofertę monitoringu i wideodomofonów</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
