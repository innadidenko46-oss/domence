import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TOP_SELLING_SCENARIOS, TopSellingScenario } from '../data/content.ts';
import {
  Wind,
  ShieldAlert,
  Zap,
  Car,
  CheckCircle2,
  Play,
  SlidersHorizontal,
  Flame,
  Droplets,
  Power,
  Bell,
  Sun,
  BatteryCharging,
  Gauge,
  Camera,
  DoorClosed,
  ShieldCheck,
  ArrowRight,
  Activity,
  Check,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Link } from 'react-router-dom';

export const TopSellingScenariosSection: React.FC = () => {
  const [activeScenarioId, setActiveScenarioId] = useState<string>('top-sc-airing-trv');
  const { lang } = useLanguage();
  const isUa = lang === 'ua';

  // Interactive Simulation states for the 4 scenarios
  const [windowOpen, setWindowOpen] = useState<boolean>(false);
  const [hazardTriggered, setHazardTriggered] = useState<boolean>(false);
  const [solarPeakActive, setSolarPeakActive] = useState<boolean>(false);
  const [carArriving, setCarArriving] = useState<boolean>(false);

  const { theme } = useTheme();
  const isDay = theme === 'day';

  const currentScenario =
    TOP_SELLING_SCENARIOS.find((s) => s.id === activeScenarioId) ||
    TOP_SELLING_SCENARIOS[0];

  const getScenarioIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wind':
        return <Wind className="w-5 h-5 text-sky-400" />;
      case 'ShieldAlert':
        return <ShieldAlert className="w-5 h-5 text-rose-400" />;
      case 'Zap':
        return <Zap className="w-5 h-5 text-amber-500" />;
      case 'Car':
        return <Car className="w-5 h-5 text-emerald-400" />;
      default:
        return <Activity className="w-5 h-5 text-amber-500" />;
    }
  };

  const getScTitle = (s: TopSellingScenario) => (isUa && s.title_ua ? s.title_ua : s.title);
  const getScSubtitle = (s: TopSellingScenario) => (isUa && s.subtitle_ua ? s.subtitle_ua : s.subtitle);
  const getScBadge = (s: TopSellingScenario) => (isUa && s.badge_ua ? s.badge_ua : s.badge);
  const getScTrigger = (s: TopSellingScenario) => (isUa && s.trigger_ua ? s.trigger_ua : s.trigger);
  const getScDevices = (s: TopSellingScenario) => (isUa && s.devicesUsed_ua ? s.devicesUsed_ua : s.devicesUsed);
  const getScDescription = (s: TopSellingScenario) => (isUa && s.description_ua ? s.description_ua : s.description);
  const getScHumanNote = (s: TopSellingScenario) => (isUa && s.humanNote_ua ? s.humanNote_ua : s.humanNote);

  return (
    <section
      id="top-scenariusze"
      className={`py-20 relative overflow-hidden transition-colors duration-500 border-t ${
        isDay
          ? 'bg-white border-slate-200 text-slate-800'
          : 'bg-[#03090F] border-white/10 text-slate-200'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header - Clean Typography */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-amber-500 mb-3 font-semibold">
            <span>{isUa ? 'Інженерні Сценарії 2026' : 'Scenariusze Inżynieryjne 2026'}</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span>Shelly Europe & Hikvision</span>
            <span aria-hidden="true" className="text-slate-400 dark:text-slate-600">·</span>
            <span>{isUa ? 'Повна автономія' : '100% Autonomii w sieci domowej'}</span>
          </div>
          <h2
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight ${
              isDay ? 'text-slate-950' : 'text-white'
            }`}
          >
            {isUa
              ? 'Сценарії життя в розумному домі.'
              : 'Scenariusze codziennego komfortu i bezpieczeństwa.'}
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-relaxed font-light ${
              isDay ? 'text-slate-600' : 'text-slate-300'
            }`}
          >
            {isUa
              ? 'Справжній комфорт не вимагає натискання кнопок. Дім самостійно економить до 30% тепла при провітрюванні, ліквідує аварії, оптимізує енергію та зустрічає ваш автомобіль.'
              : 'Prawdziwy komfort nie wymaga pamiętania o włącznikach. Dom samoczynnie odcina ogrzewanie przy wietrzeniu, zabezpiecza przed skutkami pękniętych wężyków, optymalizuje zużycie fotowoltaiki i rozpoznaje Twój samochód.'}
          </p>
        </div>

        {/* 4 Scenario Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {TOP_SELLING_SCENARIOS.map((sc) => {
            const isSelected = activeScenarioId === sc.id;
            return (
              <button
                key={sc.id}
                onClick={() => setActiveScenarioId(sc.id)}
                className={`p-5 rounded-2xl text-left transition-all border flex flex-col justify-between min-h-[220px] cursor-pointer relative overflow-hidden group ${
                  isSelected
                    ? isDay
                      ? 'bg-slate-50 border-amber-500 shadow-sm ring-1 ring-amber-500'
                      : 'bg-[#081B26] border-amber-400/80 shadow-md ring-1 ring-amber-400/30'
                    : isDay
                    ? 'bg-slate-50/60 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                    : 'bg-[#05141E]/60 border-white/5 hover:border-white/15 hover:bg-[#071822]'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                        isSelected
                          ? isDay
                            ? 'bg-amber-100 text-amber-800'
                            : 'bg-amber-500/20 text-amber-300'
                          : isDay
                          ? 'bg-slate-200 text-slate-700'
                          : 'bg-white/5 text-slate-400'
                      }`}
                    >
                      {getScenarioIcon(sc.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400 font-bold">
                      {sc.reactionTime}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono uppercase tracking-wider text-amber-500 mb-1 font-semibold">
                    {getScBadge(sc)}
                  </div>
                  <h3
                    className={`font-display text-base font-extrabold leading-snug ${
                      isSelected
                        ? isDay
                          ? 'text-slate-950'
                          : 'text-white'
                        : isDay
                        ? 'text-slate-800'
                        : 'text-slate-200'
                    }`}
                  >
                    {getScTitle(sc)}
                  </h3>
                  <div className="text-xs text-slate-400 mt-1 line-clamp-2 font-light">
                    {getScSubtitle(sc)}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-white/5 flex items-center justify-between text-[11px]">
                  <span className="text-slate-400 font-medium">
                    {isUa ? 'Переглянути логіку' : 'Szczegóły logiki'}
                  </span>
                  <ArrowRight
                    className={`w-3.5 h-3.5 transition-transform ${
                      isSelected ? 'translate-x-1 text-amber-400' : 'text-slate-500 group-hover:translate-x-0.5'
                    }`}
                  />
                </div>
              </button>
            );
          })}
        </div>

        {/* Detailed Walkthrough of Selected Scenario */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentScenario.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`rounded-3xl border p-6 sm:p-10 ${
              isDay
                ? 'bg-slate-50 border-slate-200 shadow-md'
                : 'bg-[#061722]/95 border-white/10 shadow-xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Full Scenario Breakdown & Devices */}
              <div className="lg:col-span-7 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-amber-500 mb-2 font-medium">
                    <span>{isUa ? 'Wyzwalacz' : 'Wyzwalacz'}: {getScTrigger(currentScenario)}</span>
                  </div>
                  <h3
                    className={`font-display text-2xl sm:text-3xl font-extrabold tracking-tight ${
                      isDay ? 'text-slate-900' : 'text-white'
                    }`}
                  >
                    {getScTitle(currentScenario)}
                  </h3>
                  <p
                    className={`mt-3 text-sm sm:text-base leading-relaxed ${
                      isDay ? 'text-slate-600' : 'text-slate-300'
                    }`}
                  >
                    {getScDescription(currentScenario)}
                  </p>
                </div>

                {/* Practical note */}
                <div
                  className={`p-4 rounded-2xl border ${
                    isDay
                      ? 'bg-white border-slate-200 text-slate-800'
                      : 'bg-[#040E16] border-white/10 text-slate-300'
                  }`}
                >
                  <div className="text-xs font-bold uppercase tracking-wider text-amber-500 mb-1 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-500" />
                    <span>{isUa ? 'Jak to działa w praktyce:' : 'Praktyczne odczucie w codziennym życiu:'}</span>
                  </div>
                  <p className="text-xs leading-relaxed font-light">
                    {getScHumanNote(currentScenario)}
                  </p>
                </div>

                {/* Devices Used in this setup */}
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2.5">
                    {isUa ? 'Użyte komponenty:' : 'Użyte urządzenia instalacyjne:'}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {getScDevices(currentScenario).map((dev, idx) => (
                      <span
                        key={idx}
                        className={`text-xs px-3 py-1.5 rounded-lg border font-mono ${
                          isDay
                            ? 'bg-white border-slate-200 text-slate-700 shadow-sm'
                            : 'bg-white/5 border-white/10 text-slate-300'
                        }`}
                      >
                        {dev}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Sequence Steps */}
                <div className="space-y-2.5 pt-2">
                  <div className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1">
                    {isUa ? 'Kolejność reakcji automatyki:' : 'Kolejność reakcji automatyki:'}
                  </div>
                  {currentScenario.actionSequence.map((act, i) => (
                    <div
                      key={i}
                      className={`p-3 rounded-xl border flex items-center justify-between text-xs ${
                        isDay ? 'bg-white border-slate-200' : 'bg-[#041018] border-white/5'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="w-5 h-5 rounded-md bg-amber-500/10 text-amber-500 flex items-center justify-center font-mono font-bold text-[10px]">
                          0{i + 1}
                        </span>
                        <div>
                          <span className="font-bold text-white block">
                            {isUa && act.step_ua ? act.step_ua : act.step}
                          </span>
                          <span className="text-slate-400 text-[11px]">
                            {isUa && act.detail_ua ? act.detail_ua : act.detail}
                          </span>
                        </div>
                      </div>
                      <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: Status Monitor of Installation State */}
              <div className="lg:col-span-5">
                <div
                  className={`rounded-2xl p-6 border ${
                    isDay ? 'bg-white border-slate-200 shadow-sm' : 'bg-[#040F16] border-white/10'
                  }`}
                >
                  <div className="flex items-center justify-between pb-3 mb-5 border-b border-white/10">
                    <div className="text-xs font-bold text-amber-500 uppercase tracking-wider flex items-center gap-2">
                      <Gauge className="w-4 h-4" />
                      <span>{isUa ? 'Монітор стану автоматики' : 'Stan obwodów instalacji'}</span>
                    </div>
                    <span className="text-[10px] font-mono text-emerald-400">
                      LAN Active
                    </span>
                  </div>

                  {/* 1. Airing Simulation */}
                  {currentScenario.id === 'top-sc-airing-trv' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl border border-white/10 bg-[#071924] text-center">
                        <div className="text-xs text-slate-400 mb-1">{isUa ? 'Stan skrzydła okna:' : 'Stan skrzydła okiennego:'}</div>
                        <div className={`text-base font-extrabold ${windowOpen ? 'text-amber-400' : 'text-emerald-400'}`}>
                          {windowOpen
                            ? isUa ? 'OKNO UCHYLONE NA WIETRZENIE' : 'OKNO UCHYLONE NA WIETRZENIE'
                            : isUa ? 'OKNO SZCZELNIE ZAMKNIĘTE' : 'OKNO SZCZELNIE ZAMKNIĘTE'}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl border border-white/5 bg-white/5">
                          <span className="text-slate-400 text-[11px] block mb-1">Kontaktron Shelly BLU:</span>
                          <span className="font-mono font-bold text-white">
                            {windowOpen
                              ? isUa ? 'OBWÓD ROZSZCZELNIONY' : 'ROZSZCZELNIONE'
                              : isUa ? 'ZAMKNIĘTE (OK)' : 'ZAMKNIĘTE (OK)'}
                          </span>
                        </div>
                        <div className="p-3.5 rounded-xl border border-white/5 bg-white/5">
                          <span className="text-slate-400 text-[11px] block mb-1">Głowica Shelly BLU TRV:</span>
                          <span className={`font-mono font-bold ${windowOpen ? 'text-rose-400' : 'text-emerald-400'}`}>
                            {windowOpen
                              ? isUa ? 'ZAWÓR 0% (ODCIĘCIE)' : 'ZAWÓR 0% (ODCIĘCIE)'
                              : isUa ? 'ZAWÓR 100% (22.0°C)' : 'ZAWÓR 100% (22.0°C)'}
                          </span>
                        </div>
                      </div>

                      <div className="p-3 rounded-xl bg-emerald-950/20 border border-emerald-500/20 text-xs text-emerald-200">
                        {windowOpen
                          ? isUa ? 'Ochrona przed stratami ciepła: głowica odcięła dopływ gorącej wody do grzejnika.' : 'Ochrona przed stratami ciepła: głowica odcięła dopływ gorącej wody do grzejnika.'
                          : isUa ? 'Ogrzewanie w normie według harmonogramu strefowego.' : 'Ogrzewanie w normie według harmonogramu strefowego.'}
                      </div>

                      <button
                        onClick={() => setWindowOpen(!windowOpen)}
                        className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          windowOpen
                            ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-sm'
                            : 'bg-amber-500 hover:bg-amber-400 text-slate-950 shadow-sm'
                        }`}
                      >
                        <Wind className="w-4 h-4" />
                        <span>
                          {windowOpen
                            ? isUa ? 'Zamknij okno' : 'Zamknij okno (przywróć grzanie)'
                            : isUa ? 'Uchyl okno' : 'Uchyl okno na wietrzenie'}
                        </span>
                      </button>
                    </div>
                  )}

                  {/* 2. Hazard Leak Simulation */}
                  {currentScenario.id === 'top-sc-hazard-defense' && (
                    <div className="space-y-4">
                      <div className={`p-4 rounded-xl border transition-all text-center ${
                        hazardTriggered
                          ? 'border-rose-500/60 bg-rose-950/40'
                          : 'border-white/10 bg-[#071924]'
                      }`}>
                        <div className="text-xs text-slate-400 mb-1">{isUa ? 'Status magistrali:' : 'Status magistrali wody i gazu:'}</div>
                        <div className={`text-base font-extrabold ${hazardTriggered ? 'text-rose-400' : 'text-emerald-400'}`}>
                          {hazardTriggered
                            ? isUa ? 'ALARM: WYKRYTO ZAGROŻENIE!' : 'ALARM: ZAGROŻENIE WYKRYTE'
                            : isUa ? 'MAGISTRALE SZCZELNE (OK)' : 'MAGISTRALE SZCZELNE (OK)'}
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div className="p-3.5 rounded-xl border border-white/5 bg-white/5">
                          <span className="text-slate-400 text-[11px] block mb-1">Zawór kulowy odcinający:</span>
                          <span className={`font-mono font-bold ${hazardTriggered ? 'text-rose-400' : 'text-emerald-400'}`}>
                            {hazardTriggered
                              ? isUa ? 'ZAMKNIĘTY (<2.8s)' : 'ZAMKNIĘTY (<2.8s)'
                              : isUa ? 'OTWARTY (Dopływ OK)' : 'OTWARTY (Dopływ OK)'}
                          </span>
                        </div>
                        <div className="p-3.5 rounded-xl border border-white/5 bg-white/5">
                          <span className="text-slate-400 text-[11px] block mb-1">Zasilanie urządzeń:</span>
                          <span className={`font-mono font-bold ${hazardTriggered ? 'text-rose-400' : 'text-emerald-400'}`}>
                            {hazardTriggered
                              ? isUa ? 'ODCIĘTE (Pralka, Piec)' : 'ODCIĘTE (Pralka, Piec)'
                              : isUa ? 'ZASILANIE W NORMIE' : 'ZASILANIE W NORMIE'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setHazardTriggered(!hazardTriggered)}
                        className={`w-full py-3 rounded-xl font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer ${
                          hazardTriggered
                            ? 'bg-emerald-500 hover:bg-emerald-400 text-slate-950'
                            : 'bg-rose-500 hover:bg-rose-600 text-white'
                        }`}
                      >
                        <ShieldAlert className="w-4 h-4" />
                        <span>
                          {hazardTriggered
                            ? isUa ? 'Przywróć stan normalny' : 'Resetuj alarm (otwórz zawory)'
                            : isUa ? 'Symuluj wyciek wody pod pralką' : 'Symuluj nieszczelność pod pralką'}
                        </span>
                      </button>
                    </div>
                  )}

                  {/* 3. Solar PV 3EM Simulation */}
                  {currentScenario.id === 'top-sc-solar-3em' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl border border-white/10 bg-[#071924] text-center">
                        <div className="text-xs text-slate-400 mb-1">{isUa ? 'Licznik 3-fazowy Shelly 3EM-63T:' : 'Odczyt licznika 3-fazowego Shelly 3EM-63T:'}</div>
                        <div className="text-lg font-mono font-extrabold text-amber-500">
                          {solarPeakActive
                            ? isUa ? 'NADWYŻKA PV: +5.4 kW · SIEĆ: 0 W' : 'NADWYŻKA PV: +5.4 kW · SIEĆ: 0 W'
                            : isUa ? 'POBÓR DOMU: 1.1 kW · SIEĆ: 1.1 kW' : 'POBÓR DOMU: 1.1 kW · SIEĆ: 1.1 kW'}
                        </div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Grzałka zasobnika CWU (2.0 kW):</span>
                          <span className={`font-mono font-bold ${solarPeakActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                            {solarPeakActive ? 'ZAŁĄCZONA (Darmowe słońce)' : 'Czuwanie'}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Ładowarka pojazdu EV:</span>
                          <span className={`font-mono font-bold ${solarPeakActive ? 'text-emerald-400' : 'text-slate-500'}`}>
                            {solarPeakActive ? 'ŁADOWANIE DYNAMICZNE 16A' : 'Czuwanie'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setSolarPeakActive(!solarPeakActive)}
                        className="w-full py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <Zap className="w-4 h-4" />
                        <span>
                          {solarPeakActive
                            ? isUa ? 'Zmniejsz produkcję PV' : 'Wyłącz szczyt słoneczny'
                            : isUa ? 'Włącz szczyt fotowoltaiki' : 'Włącz szczyt fotowoltaiki (+5.4 kW)'}
                        </span>
                      </button>
                    </div>
                  )}

                  {/* 4. Car Welcome Simulation */}
                  {currentScenario.id === 'top-sc-welcome-car' && (
                    <div className="space-y-4">
                      <div className="p-4 rounded-xl border border-white/10 bg-[#071924] text-center">
                        <div className="text-xs text-slate-400 mb-1">{isUa ? 'Kamera Hikvision ANPR:' : 'Kamera Hikvision ANPR przy bramie:'}</div>
                        <div className={`text-base font-extrabold ${carArriving ? 'text-emerald-400' : 'text-slate-300'}`}>
                          {carArriving
                            ? isUa ? 'ODCZYTANO TABLICĘ: WI 7777X' : 'ODCZYTANO TABLICĘ: WI 7777X (Domownik)'
                            : isUa ? 'Oczekiwanie na zbliżenie pojazdu' : 'Oczekiwanie na zbliżenie pojazdu'}
                        </div>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Napęd bramy (Shelly Plus 1):</span>
                          <span className={`font-mono font-bold ${carArriving ? 'text-emerald-400' : 'text-slate-500'}`}>
                            {carArriving ? 'OTWIERANIE AUTOMATYCZNE' : 'Zamknięta'}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Ścieżka świetlna wejścia:</span>
                          <span className={`font-mono font-bold ${carArriving ? 'text-amber-500' : 'text-slate-500'}`}>
                            {carArriving ? 'Ciepły bursztyn 2700K (100%)' : '0%'}
                          </span>
                        </div>
                        <div className="p-3 rounded-xl bg-white/5 flex items-center justify-between">
                          <span className="text-slate-300">Strefa alarmowa parteru:</span>
                          <span className={`font-mono font-bold ${carArriving ? 'text-emerald-400' : 'text-rose-400'}`}>
                            {carArriving ? 'ROZBROJONA' : 'Czuwanie'}
                          </span>
                        </div>
                      </div>

                      <button
                        onClick={() => setCarArriving(!carArriving)}
                        className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                      >
                        <Car className="w-4 h-4" />
                        <span>
                          {carArriving
                            ? isUa ? 'Resetuj symulację' : 'Resetuj symulację dojazdu'
                            : isUa ? 'Dojazd auta pod bramę' : 'Dojazd auta domownika pod bramę'}
                        </span>
                      </button>
                    </div>
                  )}

                  <div className="mt-5 pt-4 border-t border-white/10 text-center">
                    <Link
                      to="/kalkulator"
                      className="inline-flex items-center gap-2 text-xs font-bold text-amber-500 hover:text-amber-400 transition-colors"
                    >
                      <span>{isUa ? 'Wycena w konfiguratorze' : 'Wycena tego scenariusza w kalkulatorze'}</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
