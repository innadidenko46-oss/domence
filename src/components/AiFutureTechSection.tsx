import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  AI_FUTURE_TECH,
  AiTechFeature,
} from '../data/content.ts';
import {
  Search,
  Eye,
  Cpu,
  Radio,
  Lock,
  Bot,
  Sparkles,
  CheckCircle2,
  Volume2,
  Check,
  CloudRain,
  KeyRound,
  Fingerprint,
  Send,
  SlidersHorizontal,
  Play,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const AiFutureTechSection: React.FC = () => {
  const [selectedTechId, setSelectedTechId] = useState<string>('ai-acuseek');
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const [acuseekQuery, setAcuseekQuery] = useState<string>(
    'Kurier z paczką przy drzwiach'
  );
  const [isSearchingAcuseek, setIsSearchingAcuseek] = useState<boolean>(false);
  const [acuseekResult, setAcuseekResult] = useState<{
    found: boolean;
    timestamp: string;
    camera: string;
  } | null>({
    found: true,
    timestamp: 'Dzisiaj, 14:22:08',
    camera: 'Kamera 1 (Drzwi wejściowe 4K ColorVu)',
  });

  // Interactive ColorVu toggle: IR vs ColorVu
  const [nightVisionMode, setNightVisionMode] = useState<'ir' | 'colorvu'>('colorvu');

  // Interactive LOQED Lock state
  const [isDoorLocked, setIsDoorLocked] = useState<boolean>(true);
  const [isUnlocking, setIsUnlocking] = useState<boolean>(false);

  // Interactive Shelly AI Assistant chat
  const [assistantInput, setAssistantInput] = useState<string>('');
  const [assistantMessages, setAssistantMessages] = useState<
    { role: 'user' | 'assistant'; text: string; action?: string }[]
  >(() => [
    {
      role: 'assistant',
      text: 'Dzień dobry. Mogę wyregulować temperaturę, sprawdzić stan rozdzielnicy lub ustawić scenę oświetleniową. W czym pomóc?',
    },
    {
      role: 'user',
      text: 'Ustaw nastrojowe światło do kolacji',
    },
    {
      role: 'assistant',
      text: 'Wykonano: rolety opuszczone, taśmy LED ściemnione do 30% w ciepłej barwie 2400K, audio w salonie włączone.',
      action: 'Scena «Kolacja» aktywna • Światło 2400K • Rolety 100%',
    },
  ]);

  const currentTech =
    AI_FUTURE_TECH.find((t) => t.id === selectedTechId) || AI_FUTURE_TECH[0];

  const handleAcuseekSearch = (queryText: string) => {
    setAcuseekQuery(queryText);
    setIsSearchingAcuseek(true);
    setAcuseekResult(null);

    setTimeout(() => {
      setIsSearchingAcuseek(false);
      setAcuseekResult({
        found: true,
        timestamp: 'Dzisiaj, 14:22:08',
        camera: 'Kamera 1 (Drzwi wejściowe 4K ColorVu)',
      });
    }, 750);
  };

  const handleUnlockDoor = () => {
    if (!isDoorLocked) {
      setIsDoorLocked(true);
      return;
    }
    setIsUnlocking(true);
    setTimeout(() => {
      setIsUnlocking(false);
      setIsDoorLocked(false);
    }, 1200);
  };

  const handleSendAssistant = (e: React.FormEvent) => {
    e.preventDefault();
    if (!assistantInput.trim()) return;

    const userText = assistantInput.trim();
    setAssistantInput('');
    setAssistantMessages((prev) => [...prev, { role: 'user', text: userText }]);

    setTimeout(() => {
      let reply = 'Polecenie przetworzone lokalnie na sterowniku, bez zależności od łącza.';
      let action = 'Scenariusz wykonany w szafie RACK';

      const lower = userText.toLowerCase();
      if (lower.includes('kino') || lower.includes('film') || lower.includes('кіно')) {
        reply = 'Aktywowano tryb kinowy: rolety zjeżdżają w dół, światła wygaszają się do 5%, a dźwięk Dolby Atmos wypełnia salon.';
        action = 'Kino Domowe • Wyciemnienie 95% • HDMI CEC On';
      } else if (lower.includes('dobranoc') || lower.includes('sen') || lower.includes('ніч')) {
        reply = 'Wszystkie zamki zaryglowane, obwody oświetlenia wyłączone, monitoring w trybie nocnym.';
        action = 'Tryb Nocny • Zamki Zaryglowane • Perymetria Aktywna';
      }

      setAssistantMessages((prev) => [
        ...prev,
        { role: 'assistant', text: reply, action },
      ]);
    }, 600);
  };

  const getTechIcon = (iconName: string) => {
    switch (iconName) {
      case 'Search':
        return <Search className="w-5 h-5 text-[#B87333]" />;
      case 'Eye':
        return <Eye className="w-5 h-5 text-sky-400" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-400" />;
      case 'Radio':
        return <Radio className="w-5 h-5 text-purple-400" />;
      case 'Lock':
        return <Lock className="w-5 h-5 text-[#B87333]" />;
      case 'Bot':
        return <Bot className="w-5 h-5 text-rose-400" />;
      default:
        return <Sparkles className="w-5 h-5 text-[#B87333]" />;
    }
  };

  const getTechName = (t: AiTechFeature) => t.name;
  const getTechSubtitle = (t: AiTechFeature) => t.subtitle;
  const getTechSummary = (t: AiTechFeature) => t.summary;
  const getTechHumanBenefit = (t: AiTechFeature) => t.humanBenefit;
  const getTechKeyPoints = (t: AiTechFeature) => t.keyPoints;
  const getTechSamplePrompts = (t: AiTechFeature) =>
    t.simulationData?.samplePrompts || [];

  return (
    <section
      id="ai-technologie"
      className={`py-24 relative overflow-hidden transition-colors duration-300 border-t ${
        isDay
          ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#111827]'
          : 'bg-[#18181B] border-[#27272A] text-[#F3F4F6]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B87333] mb-3">
            <span>Jak montujemy systemy</span>
            <span aria-hidden="true">·</span>
            <span>Hikvision &amp; Shelly Europe</span>
            <span aria-hidden="true">·</span>
            <span>Lokalnie, Bez Chmury</span>
          </div>
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-[1.2] ${
              isDay ? 'text-[#111827]' : 'text-white'
            }`}
          >
            Jak szukasz zdarzenia w nagraniach.
          </h2>
          <p
            className={`mt-4 text-base sm:text-lg leading-[1.7] font-normal ${
              isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
            }`}
          >
            Koniec ze żmudnym przewijaniem 48 godzin nagrań. Wpisz po prostu: „kurier zostawił paczkę przy bramie” lub „samochód pod bramą o 21:00”, a system wskaże sekundę nagrania. Czasem trafisz od razu, czasem trzeba powtórzyć hasło innymi słowami – działa lokalnie na Twoim rejestratorze.
          </p>
        </div>

        {/* 6 Technology Selectors with strict 2px styling */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {AI_FUTURE_TECH.map((tech) => {
            const isSelected = selectedTechId === tech.id;
            return (
              <button
                key={tech.id}
                onClick={() => setSelectedTechId(tech.id)}
                className={`p-4 rounded-[2px] text-left transition-all border flex flex-col justify-between min-h-[120px] cursor-pointer ${
                  isSelected
                    ? isDay
                      ? 'bg-white border-[#B87333] shadow-md ring-1 ring-[#B87333]'
                      : 'bg-[#27272A] border-[#B87333] shadow-lg ring-1 ring-[#B87333]'
                    : isDay
                    ? 'bg-white/80 border-[#E5E7EB] hover:border-[#D1D5DB] text-[#374151]'
                    : 'bg-[#27272A]/40 border-white/5 hover:border-white/15 text-[#D4D4D8]'
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`w-9 h-9 rounded-[2px] flex items-center justify-center ${
                      isSelected
                        ? isDay
                          ? 'bg-[#B87333]/15 text-[#B87333]'
                          : 'bg-[#B87333]/20 text-[#B87333]'
                        : isDay
                        ? 'bg-[#F3F4F6] text-[#6B7280]'
                        : 'bg-white/5 text-[#9CA3AF]'
                    }`}
                  >
                    {getTechIcon(tech.icon)}
                  </div>
                </div>
                <div>
                  <div className="text-xs font-bold leading-snug line-clamp-2">
                    {getTechName(tech)}
                  </div>
                  <div className="text-[10px] text-[#9CA3AF] mt-1 truncate font-mono">
                    {getTechSubtitle(tech)}
                  </div>
                </div>
              </button>
            );
          })}
        </div>

        {/* Main Interactive Stage for Selected Technology */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentTech.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className={`rounded-[2px] border overflow-hidden p-6 sm:p-10 ${
              isDay
                ? 'bg-white border-[#E5E7EB] shadow-sm'
                : 'bg-[#27272A]/50 border-white/10 shadow-xl'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left Column: Tech Deep Dive & Benefit Description */}
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <div className="flex items-center gap-2 text-xs font-mono text-[#B87333] mb-2 font-semibold">
                    <span>{currentTech.techStack}</span>
                  </div>
                  <h3
                    className={`text-xl sm:text-2xl font-bold tracking-tight ${
                      isDay ? 'text-[#111827]' : 'text-white'
                    }`}
                  >
                    {getTechName(currentTech)}
                  </h3>
                  <p
                    className={`mt-3 text-sm sm:text-base leading-[1.7] ${
                      isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
                    }`}
                  >
                    {getTechSummary(currentTech)}
                  </p>
                </div>

                {/* Human Benefit Highlight Box */}
                <div
                  className={`p-5 rounded-[2px] border ${
                    isDay
                      ? 'bg-[#B87333]/10 border-[#B87333]/30 text-[#111827]'
                      : 'bg-[#B87333]/10 border-[#B87333]/30 text-[#E5E7EB]'
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <Sparkles className="w-5 h-5 text-[#B87333] shrink-0 mt-0.5" />
                    <div>
                      <div className="text-xs font-bold uppercase tracking-wider font-mono mb-1 text-[#B87333]">
                        Praktyczna korzyść dla inwestora:
                      </div>
                      <p className="text-xs sm:text-sm leading-relaxed">
                        {getTechHumanBenefit(currentTech)}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Key Points List */}
                <div className="space-y-3">
                  {getTechKeyPoints(currentTech).map((point, index) => (
                    <div key={index} className="flex items-start gap-3 text-xs sm:text-sm">
                      <Check className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                      <span className={isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}>{point}</span>
                    </div>
                  ))}
                </div>

                {/* Hardware Spec Note for Enthusiasts (Reduced Jargon on Front) */}
                <div className="pt-2 text-[11px] font-mono text-[#6B7280] border-t border-white/5">
                  Sprzęt: Rejestrator NVR z procesorem NPU w szafie RACK. Dane przetwarzane lokalnie, bez wysyłania ich do chmury.
                </div>
              </div>

              {/* Right Column: APPLE/iOS NATIVE STYLE SIMULATOR */}
              <div className="lg:col-span-6">
                
                {/* 1. iOS STYLE ACUSEEK NATURAL LANGUAGE ARCHIVE SEARCH */}
                {currentTech.id === 'ai-acuseek' && (
                  <div className={`rounded-2xl p-4 sm:p-6 border shadow-2xl transition-all ${
                    isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
                  }`}>
                    {/* iOS App Header Bar */}
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div className="flex items-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-rose-500/80" />
                        <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                        <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                        <span className="text-xs font-semibold text-white ml-2">Archiwum Wideo • Szukaj</span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        Offline LAN
                      </span>
                    </div>

                    {/* Apple-style Minimal Search Bar */}
                    <div className="relative mb-3">
                      <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                        <Search className="w-4 h-4 text-[#9CA3AF]" />
                      </div>
                      <input
                        type="text"
                        value={acuseekQuery}
                        onChange={(e) => setAcuseekQuery(e.target.value)}
                        placeholder="Wpisz np. kurier z paczką..."
                        className={`w-full pl-10 pr-24 py-2.5 rounded-xl text-xs sm:text-sm border focus:outline-none transition-all ${
                          isDay
                            ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#111827] focus:border-[#B87333] focus:bg-white'
                            : 'bg-[#27272A] border-white/10 text-white focus:border-[#B87333] focus:bg-[#27272A]/80'
                        }`}
                      />
                      <button
                        onClick={() => handleAcuseekSearch(acuseekQuery)}
                        disabled={isSearchingAcuseek}
                        className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-lg bg-[#B87333] hover:bg-[#A36034] text-white font-medium text-xs flex items-center gap-1.5 transition-colors cursor-pointer"
                      >
                        {isSearchingAcuseek ? 'Szukanie...' : 'Szukaj'}
                      </button>
                    </div>

                    {/* Quick Smart Filters */}
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {getTechSamplePrompts(currentTech).map((prompt, idx) => (
                        <button
                          key={idx}
                          onClick={() => handleAcuseekSearch(prompt)}
                          className={`text-[11px] px-2.5 py-1 rounded-full border text-left transition-colors cursor-pointer ${
                            acuseekQuery === prompt
                              ? 'bg-[#B87333]/20 border-[#B87333] text-[#E5E7EB] font-medium'
                              : isDay
                              ? 'bg-[#F3F4F6] border-[#E5E7EB] text-[#4B5563] hover:bg-white'
                              : 'bg-white/5 border-white/10 text-[#9CA3AF] hover:text-white'
                          }`}
                        >
                          {prompt}
                        </button>
                      ))}
                    </div>

                    {/* Result Video Preview / iOS Card */}
                    {isSearchingAcuseek ? (
                      <div className="h-52 rounded-xl flex flex-col items-center justify-center gap-2 border border-white/5 bg-black/40">
                        <div className="w-6 h-6 border-2 border-[#B87333] border-t-transparent rounded-full animate-spin" />
                        <span className="text-xs text-[#9CA3AF] font-mono">
                          Analiza lokalnego strumienia 4K w NVR...
                        </span>
                      </div>
                    ) : (
                      acuseekResult && (
                        <div className="rounded-xl overflow-hidden border border-white/10 bg-black/50 shadow-inner">
                          <div className="relative h-52 overflow-hidden group">
                            <img
                              src="/images/facade_dome_camera.svg"
                              alt="Podgląd archiwum nagrań z kamery (symulacja)"
                              className="w-full h-full object-cover filter brightness-90 group-hover:scale-102 transition-transform duration-500"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                            
                            <div className="absolute top-2.5 left-2.5 px-2.5 py-0.5 rounded-full bg-emerald-500/90 text-white font-mono text-[10px] font-bold flex items-center gap-1 backdrop-blur-md">
                              <Check className="w-3 h-3" />
                              <span>Znaleziono w archiwum</span>
                            </div>

                            <div className="absolute top-2.5 right-2.5 px-2.5 py-0.5 rounded-full bg-black/60 backdrop-blur-md text-[10px] font-mono text-white">
                              {acuseekResult.timestamp}
                            </div>

                            {/* Play overlay button */}
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-[#B87333]/90 hover:bg-[#B87333] text-white flex items-center justify-center shadow-lg transition-transform hover:scale-105 cursor-pointer backdrop-blur-sm">
                                <Play className="w-5 h-5 ml-0.5 fill-white" />
                              </div>
                            </div>

                            <div className="absolute bottom-2.5 inset-x-3 flex items-center justify-between text-xs text-white">
                              <span className="font-medium truncate">{acuseekResult.camera}</span>
                              <span className="font-mono text-[10px] text-[#D1D5DB]">podgląd archiwum</span>
                            </div>
                          </div>

                          <div className="p-3 bg-[#27272A]/70 flex items-center justify-between text-[11px] text-[#9CA3AF] border-t border-white/5">
                            <span>Klip: „{acuseekQuery}”</span>
                            <span className="text-[#B87333] font-mono">Zapis na WD Purple (Brak chmury)</span>
                          </div>
                        </div>
                      )
                    )}
                  </div>
                )}

                {/* 2. ColorVu Interactive Visualizer */}
                {currentTech.id === 'ai-colorvu-acusense' && (
                  <div className={`rounded-2xl p-5 sm:p-6 border ${
                    isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
                  }`}>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div className="text-xs font-bold text-sky-400 uppercase tracking-wider flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span>Nocny Podgląd: Zwykłe IR vs ColorVu F1.0</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <button
                        onClick={() => setNightVisionMode('ir')}
                        className={`py-2 px-3 rounded-[2px] border text-xs font-semibold transition-all cursor-pointer ${
                          nightVisionMode === 'ir'
                            ? 'bg-[#27272A] text-white border-white/20'
                            : 'bg-white/5 text-[#9CA3AF] border-transparent hover:border-white/10'
                        }`}
                      >
                        Tradycyjne IR (Szary szum)
                      </button>
                      <button
                        onClick={() => setNightVisionMode('colorvu')}
                        className={`py-2 px-3 rounded-[2px] border text-xs font-semibold transition-all cursor-pointer ${
                          nightVisionMode === 'colorvu'
                            ? 'bg-sky-500/20 text-sky-300 border-sky-400'
                            : 'bg-white/5 text-[#9CA3AF] border-transparent hover:border-white/10'
                        }`}
                      >
                        ColorVu (Pełen Kolor 24/7)
                      </button>
                    </div>

                    <div className="relative h-56 rounded-xl overflow-hidden border border-white/10">
                      <img
                        src="/images/facade_dome_camera.svg"
                        alt="Symulacja obrazu z kamery — porównanie trybu nocnego i kolorowego"
                        className={`w-full h-full object-cover transition-all duration-500 ${
                          nightVisionMode === 'ir'
                            ? 'grayscale contrast-125 brightness-75'
                            : 'contrast-105 brightness-105'
                        }`}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />

                      <div className="absolute top-3 left-3 px-2.5 py-1 rounded-[2px] text-[11px] font-mono font-bold backdrop-blur-md bg-black/60 text-white">
                        {nightVisionMode === 'ir' ? 'Symulacja: tryb nocny' : 'Symulacja: kolor w nocy'}
                      </div>

                      <div className="absolute bottom-3 inset-x-3 flex items-center justify-between text-xs text-white">
                        <span className="font-medium">
                          {nightVisionMode === 'colorvu' ? 'Rozpoznano: Człowiek (Ciemna kurtka)' : 'Nierozpoznany szary kształt'}
                        </span>
                        <span className="font-mono text-[10px] text-sky-300">Dwukierunkowe audio 2.0</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 3. DeepinViewX Multimodal Edge AI */}
                {currentTech.id === 'ai-deepinviewx' && (
                  <div className={`rounded-2xl p-5 sm:p-6 border ${
                    isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
                  }`}>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div className="text-xs font-bold text-emerald-400 uppercase tracking-wider flex items-center gap-2">
                        <Cpu className="w-4 h-4" />
                        <span>Analiza Zdarzeń w Czasie Rzeczywistym</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">Procesor NPU</span>
                    </div>

                    <div className="space-y-3 mb-4">
                      <div className="p-3.5 rounded-[2px] border border-emerald-500/30 bg-emerald-950/20 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                          <div>
                            <div className="font-bold text-white">Wykrycie obecności powyżej 45 sek. przy furtce</div>
                            <div className="text-[#9CA3AF] text-[11px]">Inteligentne powiadomienie bez fałszywych alarmów od kotów/drzew</div>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-emerald-300">Aktywne</span>
                      </div>

                      <div className="p-3.5 rounded-[2px] border border-sky-500/30 bg-sky-950/20 flex items-center justify-between text-xs">
                        <div className="flex items-center gap-3">
                          <div className="w-2.5 h-2.5 rounded-full bg-sky-400" />
                          <div>
                            <div className="font-bold text-white">Klasyfikacja tablic rejestracyjnych (LPR)</div>
                            <div className="text-[#9CA3AF] text-[11px]">Automatyczne otwarcie bramy dla aut domowników w kilka sekund</div>
                          </div>
                        </div>
                        <span className="font-mono text-[10px] text-sky-300">kilka sekund</span>
                      </div>
                    </div>
                  </div>
                )}

                {/* 4. Millimeter Wave Radar Simulation */}
                {currentTech.id === 'ai-mmwave-radar' && (
                  <div className={`rounded-2xl p-5 sm:p-6 border ${
                    isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
                  }`}>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div className="text-xs font-bold text-purple-400 uppercase tracking-wider flex items-center gap-2">
                        <Radio className="w-4 h-4" />
                        <span>Radar milimetrowy mmWave 60–77 GHz</span>
                      </div>
                      <span className="text-[10px] font-mono text-purple-300">Wykrywanie obecności</span>
                    </div>

                    <div className="p-4 rounded-[2px] border border-purple-500/30 bg-[#27272A]/40 mb-4">
                      <div className="grid grid-cols-3 gap-2 text-center text-xs">
                        <div className="p-2.5 rounded-[2px] bg-white/5 border border-white/5">
                          <CloudRain className="w-4 h-4 text-sky-400 mx-auto mb-1" />
                          <div className="text-[11px] font-bold text-white">Ulewa &amp; Wiatr</div>
                          <div className="text-[9px] text-emerald-400">Redukcja fałszywych alarmów</div>
                        </div>
                        <div className="p-2.5 rounded-[2px] bg-white/5 border border-white/5">
                          <Sparkles className="w-4 h-4 text-[#B87333] mx-auto mb-1" />
                          <div className="text-[11px] font-bold text-white">Ciche Czytanie</div>
                          <div className="text-[9px] text-emerald-400">Brak zgaśnięć</div>
                        </div>
                        <div className="p-2.5 rounded-[2px] bg-white/5 border border-white/5">
                          <Check className="w-4 h-4 text-emerald-400 mx-auto mb-1" />
                          <div className="text-[11px] font-bold text-white">Reakcja</div>
                          <div className="text-[9px] text-emerald-400">natychmiast</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {/* 5. LOQED Touch Smart Lock 2s */}
                {currentTech.id === 'ai-loqed-lock' && (
                  <div className={`rounded-2xl p-5 sm:p-6 border ${
                    isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
                  }`}>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div className="text-xs font-bold text-[#B87333] uppercase tracking-wider flex items-center gap-2">
                        <Lock className="w-4 h-4" />
                        <span>Zamek Elektroniczny LOQED Touch (SKG***)</span>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center p-6 rounded-[2px] border border-white/10 bg-[#27272A]/40 mb-4">
                      <div
                        className={`w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300 ${
                          isUnlocking
                            ? 'bg-[#B87333]/20 text-[#B87333] animate-pulse'
                            : isDoorLocked
                            ? 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
                            : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                        }`}
                      >
                        {isUnlocking ? (
                          <div className="w-6 h-6 border-2 border-[#B87333] border-t-transparent rounded-full animate-spin" />
                        ) : isDoorLocked ? (
                          <Lock className="w-6 h-6" />
                        ) : (
                          <KeyRound className="w-6 h-6" />
                        )}
                      </div>

                      <div className="text-center mb-4">
                        <div className="text-sm font-bold text-white mb-0.5">
                          {isUnlocking
                            ? 'Touch to Open: Odryglowywanie...'
                            : isDoorLocked
                            ? 'Drzwi bezpiecznie zaryglowane na 3 punkty'
                            : 'Drzwi otwarte po 2 sekundach!'}
                        </div>
                        <div className="text-xs text-[#9CA3AF] font-mono">
                          {isDoorLocked ? 'Telefon w kieszeni • Dotknij klamki' : 'Scenariusz powitalny aktywny'}
                        </div>
                      </div>

                      <button
                        onClick={handleUnlockDoor}
                        disabled={isUnlocking}
                        className={`px-6 py-2.5 rounded-[2px] font-bold text-xs uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer ${
                          isDoorLocked
                            ? 'bg-[#B87333] hover:bg-[#A36034] text-white shadow-md'
                            : 'bg-white/10 hover:bg-white/20 text-white'
                        }`}
                      >
                        <Fingerprint className="w-4 h-4" />
                        <span>{isDoorLocked ? 'Dotknij klamki (Touch to Open)' : 'Zarygluj drzwi'}</span>
                      </button>
                    </div>
                  </div>
                )}

                {/* 6. Shelly Assistant Chat */}
                {currentTech.id === 'ai-shelly-assistant' && (
                  <div className={`rounded-2xl p-5 sm:p-6 border ${
                    isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
                  }`}>
                    <div className="flex items-center justify-between pb-3 mb-4 border-b border-white/10">
                      <div className="text-xs font-bold text-rose-400 uppercase tracking-wider flex items-center gap-2">
                        <Bot className="w-4 h-4" />
                        <span>Sterownik Shelly Pro LAN • Dialog Inżynieryjny</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400">Offline NPU</span>
                    </div>

                    <div className="h-52 overflow-y-auto space-y-3 mb-4 pr-1 no-scrollbar text-xs">
                      {assistantMessages.map((msg, idx) => (
                        <div
                          key={idx}
                          className={`flex flex-col ${
                            msg.role === 'user' ? 'items-end' : 'items-start'
                          }`}
                        >
                          <div
                            className={`p-3 rounded-[2px] max-w-[85%] leading-relaxed ${
                              msg.role === 'user'
                                ? 'bg-[#B87333] text-white font-medium'
                                : 'bg-[#27272A] text-[#E5E7EB] border border-white/10'
                            }`}
                          >
                            {msg.text}
                          </div>
                          {msg.action && (
                            <div className="mt-1 px-2.5 py-1 rounded-[2px] bg-emerald-500/20 text-emerald-300 text-[10px] font-mono flex items-center gap-1.5">
                              <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                              <span>{msg.action}</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>

                    <form onSubmit={handleSendAssistant} className="relative">
                      <input
                        type="text"
                        value={assistantInput}
                        onChange={(e) => setAssistantInput(e.target.value)}
                        placeholder="Wpisz np. «Kino», «Dobranoc», «Temperatura»..."
                        className={`w-full px-4 py-2.5 pr-14 rounded-[2px] text-xs border focus:outline-none ${
                          isDay
                            ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#111827]'
                            : 'bg-[#27272A] border-white/10 text-white'
                        }`}
                      />
                      <button
                        type="submit"
                        className="absolute right-1.5 top-1.5 bottom-1.5 px-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-bold text-xs flex items-center justify-center transition-colors cursor-pointer"
                      >
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </form>
                  </div>
                )}

              </div>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};
