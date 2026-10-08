import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SMART_MODULES } from '../data/content.ts';
import { PropertyState, AreaRange } from '../types.ts';
import {
  Hammer,
  Home,
  Video,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  User,
  SlidersHorizontal,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

interface CalculatorSectionProps {
  selectedPropertyState?: PropertyState;
  onStateChange?: (state: PropertyState) => void;
}

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  selectedPropertyState = 'retro',
  onStateChange,
}) => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const [step, setStep] = useState<number>(1);
  const [propertyState, setPropertyState] = useState<PropertyState>(selectedPropertyState);
  const [areaRange, setAreaRange] = useState<AreaRange>(() => {
    try {
      const raw = localStorage.getItem('domence_calc_v1');
      if (raw) {
        const parsed = JSON.parse(raw) as { areaRange?: AreaRange };
        if (parsed.areaRange && ['do_60', '61_110', '111_180', 'ponad_180'].includes(parsed.areaRange)) {
          return parsed.areaRange;
        }
      }
    } catch { /* blocked storage: defaults */ }
    return '61_110';
  });
  const [activeModuleCategory, setActiveModuleCategory] = useState<string>('all');
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>(() => {
    const defaults = [
      'water_shield',
      'master_off',
      'intercom_poe',
      'cctv_starter',
      'switchboard_protection_pack',
    ];
    try {
      const raw = localStorage.getItem('domence_calc_v1');
      if (raw) {
        const parsed = JSON.parse(raw) as { selectedModuleIds?: string[] };
        if (Array.isArray(parsed.selectedModuleIds) && parsed.selectedModuleIds.length > 0) {
          const valid = parsed.selectedModuleIds.filter((id) =>
            SMART_MODULES.some((m) => m.id === id)
          );
          if (valid.length > 0) return valid;
        }
      }
    } catch { /* blocked storage: defaults */ }
    return defaults;
  });
  const [mailBody, setMailBody] = useState('');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    agreement: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (selectedPropertyState) {
      setPropertyState(selectedPropertyState);
    }
  }, [selectedPropertyState]);

  useEffect(() => {
    try {
      localStorage.setItem(
        'domence_calc_v1',
        JSON.stringify({ propertyState, areaRange, selectedModuleIds })
      );
    } catch { /* blocked storage: skip persistence */ }
  }, [propertyState, areaRange, selectedModuleIds]);

  const handleSelectStep1 = (val: PropertyState) => {
    setPropertyState(val);
    onStateChange?.(val);
    setStep(2);
  };

  const handleSelectStep2 = (val: AreaRange) => {
    setAreaRange(val);
    setStep(3);
  };

  const toggleModule = (id: string) => {
    setSelectedModuleIds((prev) =>
      prev.includes(id) ? prev.filter((m) => m !== id) : [...prev, id]
    );
  };

  // Price Calculation Logic
  const calculateTotal = () => {
    let baseInfrastructure = 3800; // Retrofit base
    if (propertyState === 'security') baseInfrastructure = 2400;
    if (propertyState === 'deweloperski') baseInfrastructure = 7200; // DIN distribution prefabrication
    if (propertyState === 'commercial') baseInfrastructure = 5900;

    let modulesSum = 0;
    selectedModuleIds.forEach((id) => {
      const mod = SMART_MODULES.find((m) => m.id === id);
      if (mod) modulesSum += mod.price;
    });

    let subTotal = baseInfrastructure + modulesSum;

    // Area Multiplier
    let areaMult = 1.0;
    if (areaRange === '61_110') areaMult = 1.15;
    if (areaRange === '111_180') areaMult = 1.35;
    if (areaRange === 'ponad_180') areaMult = 1.65;

    return Math.round((subTotal * areaMult) / 50) * 50;
  };

  const totalPrice = calculateTotal();
  const grossPrice = Math.round(totalPrice * 1.23);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const moduleList =
      SMART_MODULES.filter((m) => selectedModuleIds.includes(m.id))
        .map((m) => `• ${m.name} (${m.price.toLocaleString('pl-PL')} zł)`)
        .join('\n') || '• brak wybranych modułów';
    const subject = `Wycena wstępna — ${formData.name}`;
    const body = [
      `Inwestor: ${formData.name}`,
      `Telefon: ${formData.phone}`,
      `E-mail: ${formData.email}`,
      '',
      `Typ nieruchomości: ${getPropertyLabel(propertyState)}`,
      `Metraż: ${getAreaLabel(areaRange)}`,
      '',
      'Wybrane moduły:',
      moduleList,
      '',
      `Szacunkowa wartość: ${totalPrice.toLocaleString('pl-PL')} PLN netto / ${grossPrice.toLocaleString('pl-PL')} PLN brutto`,
      '',
      'Uwaga: kalkulacja ma charakter poglądowy i nie stanowi oferty w rozumieniu art. 66 Kodeksu Cywilnego.',
    ].join('\n');
    let finalBody = body;
    if (finalBody.length > 1800) {
      const shortList =
        SMART_MODULES.filter((m) => selectedModuleIds.includes(m.id))
          .map((m) => `• ${m.name}`)
          .join('\n') || '• brak wybranych modułów';
      finalBody = finalBody.replace(moduleList, shortList);
    }
    setMailBody(finalBody);
    setCopied(false);
    window.location.href = `mailto:kontakt@domence.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(finalBody)}`;
    setIsSubmitted(true);
  };

  const handleCopyBody = async () => {
    try {
      await navigator.clipboard.writeText(mailBody);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const getAreaLabel = (range: AreaRange) => {
    switch (range) {
      case 'do_60':
        return 'do 60 m²';
      case '61_110':
        return '61 – 110 m²';
      case '111_180':
        return '111 – 180 m²';
      case 'ponad_180':
        return '> 180 m²';
    }
  };

  const getPropertyLabel = (state: PropertyState) => {
    switch (state) {
      case 'deweloperski':
        return 'Nowa Rezydencja / Remont Generalny';
      case 'retro':
        return 'Istniejące Wnętrze (Bez Ingerencji w Ściany)';
      case 'security':
        return 'Bezpieczeństwo & Stacja Bramowa';
      case 'commercial':
        return 'Biuro / Lokal komercyjny';
    }
  };

  const filteredModules =
    activeModuleCategory === 'all'
      ? SMART_MODULES
      : SMART_MODULES.filter((m) => m.category === activeModuleCategory);

  const moduleCategories = [
    { id: 'all', label: 'Wszystkie moduły' },
    { id: 'safety', label: 'Bezpieczeństwo & Woda' },
    { id: 'teletechnics', label: 'CCTV & Teletechnika' },
    { id: 'comfort', label: 'Komfort & Multimedia' },
    { id: 'access', label: 'Wejście & Furtka' },
    { id: 'power', label: 'Zasilanie & Rozdzielnica' },
  ];

  return (
    <section id="kalkulator" className={`py-24 relative overflow-hidden border-t transition-colors duration-300 ${
      isDay ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#111827]' : 'bg-[#18181B] border-[#27272A] text-[#F3F4F6]'
    }`}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Main Card Container with strict 2px radius */}
        <div className={`rounded-[2px] border p-6 sm:p-10 lg:p-12 shadow-xl ${
          isDay
            ? 'bg-white border-[#E5E7EB]'
            : 'bg-[#27272A]/40 border-white/10'
        }`}>
          
          {/* Progress Bar & Header */}
          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold mb-3">
                <span className="flex items-center gap-1.5 text-[#B87333] font-mono uppercase tracking-wider font-bold">
                  <SlidersHorizontal className="w-4 h-4" />
                  <span>Kalkulator Inwestycji DOMENCE</span>
                </span>
                <span className="font-mono text-[#9CA3AF]">Krok {step} z 4</span>
              </div>
              
              <div className={`w-full h-1 rounded-[2px] overflow-hidden ${isDay ? 'bg-[#E5E7EB]' : 'bg-white/10'}`}>
                <motion.div
                  className="h-full bg-[#B87333]"
                  animate={{ width: `${step * 25}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          {/* Steps Content */}
          <AnimatePresence mode="wait">
            
            {/* STEP 1: Property Stage */}
            {step === 1 && !isSubmitted && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                  isDay ? 'text-[#111827]' : 'text-white'
                }`}>
                  Jaki jest charakter Twojej inwestycji?
                </h3>
                <p className={`text-xs sm:text-sm mb-8 leading-relaxed ${
                  isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
                }`}>
                  Wybierz etap realizacji, abyśmy dobrali odpowiednią architekturę instalacji: dedykowaną rozdzielnicę lub dyskretną instalację bez naruszania wykończonych ścian.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <button
                    type="button"
                    onClick={() => handleSelectStep1('deweloperski')}
                    className={`p-6 rounded-[2px] text-left transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                      propertyState === 'deweloperski'
                        ? 'bg-[#B87333]/15 border-[#B87333] ring-1 ring-[#B87333]'
                        : isDay
                        ? 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB]'
                        : 'bg-[#27272A]/40 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center mb-4">
                      <Hammer className="w-5 h-5" />
                    </div>
                    <div className={`text-base font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                      Nowa Rezydencja
                    </div>
                    <div className="text-xs text-[#9CA3AF] mt-1.5 leading-relaxed">
                      Etap budowy lub remont generalny. Centralna szafa RACK i automatyka na szynie DIN w rozdzielnicy.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectStep1('retro')}
                    className={`p-6 rounded-[2px] text-left transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                      propertyState === 'retro'
                        ? 'bg-[#B87333]/15 border-[#B87333] ring-1 ring-[#B87333]'
                        : isDay
                        ? 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB]'
                        : 'bg-[#27272A]/40 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center mb-4">
                      <Home className="w-5 h-5" />
                    </div>
                    <div className={`text-base font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                      Istniejące Wnętrze
                    </div>
                    <div className="text-xs text-[#9CA3AF] mt-1.5 leading-relaxed">
                      Z minimalną ingerencją w tynki, z odciągiem pyłu. Dyskretne mikromoduły instalowane za osprzętem oświetleniowym.
                    </div>
                  </button>

                  <button
                    type="button"
                    onClick={() => handleSelectStep1('security')}
                    className={`p-6 rounded-[2px] text-left transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                      propertyState === 'security'
                        ? 'bg-[#B87333]/15 border-[#B87333] ring-1 ring-[#B87333]'
                        : isDay
                        ? 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB]'
                        : 'bg-[#27272A]/40 border-white/10 hover:border-white/20'
                    }`}
                  >
                    <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center mb-4">
                      <Video className="w-5 h-5" />
                    </div>
                    <div className={`text-base font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                      Wejście &amp; Bezpieczeństwo
                    </div>
                    <div className="text-xs text-[#9CA3AF] mt-1.5 leading-relaxed">
                      Stacja bramowa IP, panel ścienny, lokalny rejestrator NVR i inteligentne kamery zewnętrzne.
                    </div>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 2: Square Footage */}
            {step === 2 && !isSubmitted && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight mb-2 ${
                  isDay ? 'text-[#111827]' : 'text-white'
                }`}>
                  Jaka jest przybliżona powierzchnia?
                </h3>
                <p className={`text-xs sm:text-sm mb-8 leading-relaxed ${
                  isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
                }`}>
                  Metraż pozwala precyzyjnie oszacować wymaganą liczbę punktów dostępowych Wi-Fi, obwodów oświetlenia oraz stref klimatycznych.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {(['do_60', '61_110', '111_180', 'ponad_180'] as AreaRange[]).map((range) => (
                    <button
                      key={range}
                      type="button"
                      onClick={() => handleSelectStep2(range)}
                      className={`p-5 rounded-[2px] text-center font-bold text-sm transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                        areaRange === range
                          ? 'bg-[#B87333] text-white border-[#B87333] shadow-md'
                          : isDay
                          ? 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB] text-[#111827]'
                          : 'bg-[#27272A]/40 text-[#D4D4D8] border-white/10 hover:border-white/20'
                      }`}
                    >
                      {getAreaLabel(range)}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className={`inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${isDay ? 'hover:text-[#111827]' : 'hover:text-white'}`}
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Wstecz</span>
                  </button>
                </div>
              </motion.div>
            )}

            {/* STEP 3: Modules Selector with Live Price */}
            {step === 3 && !isSubmitted && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-1 mb-2">
                  <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                    isDay ? 'text-[#111827]' : 'text-white'
                  }`}>
                    Wybierz elementy wyposażenia
                  </h3>
                  <span className="text-xs font-mono text-[#B87333] font-semibold">
                    Kalkulacja w czasie rzeczywistym
                  </span>
                </div>
                <p className={`text-xs sm:text-sm mb-5 leading-relaxed ${
                  isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
                }`}>
                  Zaznacz interesujące Cię funkcjonalności. Wycena obejmuje markowe komponenty, montaż zespołu z uprawnieniami SEP oraz testy poprawności instalacji.
                </p>

                {/* Categories Tab Filter */}
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {moduleCategories.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => setActiveModuleCategory(c.id)}
                      className={`px-3 py-1.5 rounded-[2px] text-xs font-semibold transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                        activeModuleCategory === c.id
                          ? 'bg-[#B87333] text-white font-bold'
                          : isDay
                          ? 'bg-[#F3F4F6] text-[#4B5563] hover:bg-[#E5E7EB]'
                          : 'bg-[#27272A] text-[#9CA3AF] hover:text-white border border-white/5'
                      }`}
                    >
                      {c.label}
                    </button>
                  ))}
                </div>

                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                  {filteredModules.map((mod) => {
                    const isChecked = selectedModuleIds.includes(mod.id);
                    return (
                      <button
                        type="button"
                        key={mod.id}
                        onClick={() => toggleModule(mod.id)}
                        aria-pressed={isChecked}
                        className={`p-4 rounded-[2px] transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 w-full text-left ${
                          isChecked
                            ? 'bg-[#B87333]/15 border-[#B87333]'
                            : isDay
                            ? 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB]'
                            : 'bg-[#27272A]/40 border-white/5 hover:border-white/15'
                        }`}
                      >
                        <div className="flex items-start justify-between gap-3">
                          <div className="flex items-start gap-3.5">
                            <div
                              className={`w-5 h-5 rounded-[2px] flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                isChecked
                                  ? 'bg-[#B87333] text-white'
                                  : isDay
                                  ? 'border border-[#D1D5DB] bg-white'
                                  : 'border border-white/30 bg-white/5'
                              }`}
                            >
                              {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                            </div>

                            <div>
                              <div className={`text-xs sm:text-sm font-bold flex flex-wrap items-center gap-2 ${
                                isDay ? 'text-[#111827]' : 'text-white'
                              }`}>
                                <span>{mod.name}</span>
                                {mod.badge && (
                                  <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded-[2px] bg-[#B87333]/20 text-[#B87333] border border-[#B87333]/30">
                                    {mod.badge}
                                  </span>
                                )}
                              </div>
                              <div className="text-[11px] text-[#9CA3AF] mt-1 leading-relaxed">
                                {mod.description}
                              </div>
                            </div>
                          </div>

                          <div className="text-right shrink-0 ml-2">
                            <span className={`text-xs sm:text-sm font-mono font-bold ${
                              isDay ? 'text-[#111827]' : 'text-white'
                            }`}>
                              +{mod.price.toLocaleString('pl-PL')} zł
                            </span>
                            <span className="block text-[9px] text-[#6B7280]">z montażem (ceny netto, orientacyjne)</span>
                          </div>
                        </div>

                        {/* Practical Benefit Explanation */}
                        <div className={`mt-2.5 pt-2 border-t text-[11px] flex items-start gap-2 p-2 rounded-[2px] ${
                          isDay ? 'border-[#E5E7EB] bg-[#F9FAFB] text-[#4B5563]' : 'border-white/5 bg-[#18181B]/60 text-[#D1D5DB]'
                        }`}>
                          <span className="text-[#B87333] font-bold shrink-0">W praktyce:</span>
                          <span className="leading-normal">{mod.humanExplanation}</span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Real-time Subtotal bar */}
                <div className={`mt-6 p-4 rounded-[2px] border sticky bottom-0 z-10 flex flex-col sm:flex-row items-center justify-between gap-4 ${
                  isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-white/10'
                }`}>
                  <div className="text-center sm:text-left">
                    <span className="text-[11px] text-[#9CA3AF] block font-mono">
                      Bieżący szacunek (baza + {selectedModuleIds.length} wybranych pozycji):
                    </span>
                    <span className="text-2xl font-bold font-mono text-[#B87333]">
                      {totalPrice.toLocaleString('pl-PL')} PLN netto
                    </span>
                  </div>

                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className={`w-1/2 sm:w-auto px-4 py-3 text-xs text-[#9CA3AF] transition-colors flex items-center justify-center gap-1 font-mono cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${isDay ? 'hover:text-[#111827]' : 'hover:text-white'}`}
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Wstecz</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="btn-engineering-primary w-1/2 sm:w-auto gap-1 cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                    >
                      <span>Wyceń w kalkulatorze</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* STEP 4: Summary & Contact Form */}
            {step === 4 && !isSubmitted && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.25 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#B87333]/15 text-[#B87333] border border-[#B87333]/30 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Zestawienie Konfiguracji</span>
                  </div>

                  <h3 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
                    isDay ? 'text-[#111827]' : 'text-white'
                  }`}>
                    Szacowany koszt inwestycji DOMENCE:
                  </h3>

                  <div className={`mt-4 p-5 rounded-[2px] border inline-block shadow-md ${
                    isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#B87333]/40'
                  }`}>
                    <div className="text-3xl sm:text-4xl font-bold font-mono text-[#B87333]">
                      od {totalPrice.toLocaleString('pl-PL')} PLN netto
                    </div>
                    <div className="text-xs text-[#9CA3AF] mt-1">
                      {grossPrice.toLocaleString('pl-PL')} PLN brutto (z 23% VAT)
                    </div>
                    <div className="text-[11px] font-mono text-[#9CA3AF] mt-1">
                      (sprzęt + montaż zespołu z uprawnieniami SEP + dokumentacja powykonawcza)
                    </div>
                  </div>

                  <div className="mt-3 flex items-center justify-center gap-4 text-xs text-[#9CA3AF]">
                    <span>Etap: <strong>{getPropertyLabel(propertyState)}</strong></span>
                    <span>•</span>
                    <span>Metraż: <strong>{getAreaLabel(areaRange)}</strong></span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                  <div>
                    <label className={`block text-xs font-semibold mb-1 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                      Imię i nazwisko
                    </label>
                    <div className="relative">
                      <input
                        id="calc-name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        required
                        minLength={3}
                        maxLength={60}
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value.trimStart() })}
                        placeholder="np. Marek Wiśniewski"
                        className={`w-full pl-10 pr-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 ${
                          isDay
                            ? 'bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]'
                            : 'bg-[#18181B] border-white/10 text-white focus:border-[#B87333]'
                        }`}
                      />
                      <User className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="calc-phone" className={`block text-xs font-semibold mb-1 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                        Telefon kontaktowy
                      </label>
                      <div className="relative">
                        <input
                          id="calc-phone"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          type="tel"
                          required
                          pattern="^[+\d][\d\s\-/.]{5,19}$"
                          maxLength={25}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.trim() })}
                          placeholder="+48 601 234 567"
                          className={`w-full pl-10 pr-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 ${
                            isDay
                              ? 'bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]'
                              : 'bg-[#18181B] border-white/10 text-white focus:border-[#B87333]'
                          }`}
                        />
                        <Phone className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="calc-email" className={`block text-xs font-semibold mb-1 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                        Adres e-mail
                      </label>
                      <div className="relative">
                        <input
                          id="calc-email"
                          name="email"
                          autoComplete="email"
                          type="email"
                          required
                          maxLength={254}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="inwestor@dom.pl"
                          className={`w-full pl-10 pr-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 ${
                            isDay
                              ? 'bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]'
                              : 'bg-[#18181B] border-white/10 text-white focus:border-[#B87333]'
                          }`}
                        />
                        <Mail className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                      </div>
                    </div>
                  </div>

                  <div className="pt-2 text-[11px] text-[#9CA3AF]">
                    <label className="flex items-start gap-2.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2">
                      <input
                        type="checkbox"
                        required
                        checked={formData.agreement}
                        onChange={(e) =>
                          setFormData({ ...formData, agreement: e.target.checked })
                        }
                        className="mt-0.5 accent-[#B87333] w-4 h-4 rounded-[2px] focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                      />
                      <span className="leading-snug">
                        Wyrażam zgodę na kontakt w celu weryfikacji założeń projektowych i przekazania szczegółowego kosztorysu.
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className={`sm:w-1/3 py-4 rounded-[2px] border text-xs font-medium text-center transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                        isDay
                          ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#374151] hover:bg-[#E5E7EB]'
                          : 'bg-white/5 border-white/10 text-[#D4D4D8] hover:bg-white/10'
                      }`}
                    >
                      ← Popraw Moduły
                    </button>

                    <button
                      type="submit"
                      className="btn-engineering-primary sm:w-2/3 shadow-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                    >
                      Zapytaj inżyniera
                    </button>
                  </div>
                  <p className="text-[11px] text-center text-[#6B7280] pt-1">
                    * Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). Gwarancja braku spamu i przekazywania danych podmiotom trzecim.
                  </p>
                </form>
              </motion.div>
            )}

            {/* STEP SUCCESS: Confirmation */}
            {isSubmitted && (
              <motion.div
                key="step-success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="text-center py-8"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>

                <h3 className={`text-2xl sm:text-3xl font-bold mb-2 ${
                  isDay ? 'text-[#111827]' : 'text-white'
                }`}>
                  Dziękujemy, {formData.name || 'Inwestorze'}!
                </h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md mx-auto mb-6 leading-relaxed">
                  Otworzyliśmy Twój program pocztowy z gotową wiadomością na kontakt@domence.pl. Jeśli okno się nie otworzyło, napisz do nas bezpośrednio. Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00).
                </p>

                <div className={`p-5 rounded-[2px] border max-w-md mx-auto mb-6 text-left ${
                  isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-white/10'
                }`}>
                  <div className="text-xs font-bold text-[#B87333] mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Dalsze kroki realizacji:</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    Aby omówić założenia instalacyjne, napisz na kontakt@domence.pl — odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00) i proponujemy bezpłatny audyt techniczny.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyBody}
                    className={`px-6 py-2.5 rounded-[2px] border text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                      isDay
                        ? 'bg-white border-[#D1D5DB] text-[#374151] hover:bg-[#F3F4F6]'
                        : 'bg-white/5 border-white/10 text-[#D4D4D8] hover:bg-white/10'
                    }`}
                  >
                    {copied ? 'Skopiowano treść' : 'Kopiuj treść wiadomości'}
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                  className={`px-6 py-2.5 rounded-[2px] border text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                    isDay
                      ? 'bg-white border-[#D1D5DB] text-[#374151] hover:bg-[#F3F4F6]'
                      : 'bg-white/5 border-white/10 text-[#D4D4D8] hover:bg-white/10'
                  }`}
                >
                  Skonfiguruj kolejny obiekt
                  </button>
                </div>
              </motion.div>
            )}

          </AnimatePresence>

        </div>
      </div>
    </section>
  );
};
