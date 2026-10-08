import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { SMART_MODULES } from '../data/content.ts';
import { PropertyState, AreaRange } from '../types.ts';
import {
  Hammer,
  Home,
  Video,
  Building2,
  ArrowLeft,
  ArrowRight,
  Check,
  CheckCircle2,
  ShieldCheck,
  Phone,
  Mail,
  User,
  ClipboardList,
} from 'lucide-react';

interface CalculatorSectionProps {
  selectedPropertyState?: PropertyState;
  onStateChange?: (state: PropertyState) => void;
}

const PROPERTY_OPTIONS: { value: PropertyState; title: string; sub: string; icon: typeof Home }[] = [
  {
    value: 'deweloperski',
    title: 'Nowa Rezydencja / Remont',
    sub: 'Budowa albo remont od dewelopera — instalację zaplanujemy od zera.',
    icon: Hammer,
  },
  {
    value: 'retro',
    title: 'Gotowe wnętrze bez kucia',
    sub: 'Mieszkasz już w domu — wszystko bez kucia ścian i bez kurzu.',
    icon: Home,
  },
  {
    value: 'security',
    title: 'Bezpieczeństwo i furtka',
    sub: 'Wideodomofon, kamery i kontrola wejścia na posesję.',
    icon: Video,
  },
  {
    value: 'commercial',
    title: 'Biuro / lokal',
    sub: 'Biuro, gabinet albo lokal usługowy.',
    icon: Building2,
  },
];

const AREA_OPTIONS: { value: AreaRange; short: string }[] = [
  { value: 'do_60', short: 'do 60 m²' },
  { value: '61_110', short: '61 – 110 m²' },
  { value: '111_180', short: '111 – 180 m²' },
  { value: 'ponad_180', short: 'powyżej 180 m²' },
];

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  selectedPropertyState = 'retro',
  onStateChange,
}) => {
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
  const [selectedModuleIds, setSelectedModuleIds] = useState<string[]>(() => {
    try {
      const raw = localStorage.getItem('domence_calc_v1');
      if (raw) {
        const parsed = JSON.parse(raw) as { selectedModuleIds?: string[] };
        if (Array.isArray(parsed.selectedModuleIds)) {
          const valid = parsed.selectedModuleIds.filter((id) =>
            SMART_MODULES.some((m) => m.id === id)
          );
          return valid;
        }
      }
    } catch { /* blocked storage: empty */ }
    return [];
  });
  const [mailBody, setMailBody] = useState('');
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: '',
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

  const getAreaLabel = (range: AreaRange) => {
    switch (range) {
      case 'do_60':
        return 'do 60 m²';
      case '61_110':
        return '61 – 110 m²';
      case '111_180':
        return '111 – 180 m²';
      case 'ponad_180':
        return 'powyżej 180 m²';
    }
  };

  const getPropertyLabel = (state: PropertyState) => {
    switch (state) {
      case 'deweloperski':
        return 'Nowa Rezydencja / Remont (deweloperski)';
      case 'retro':
        return 'Gotowe wnętrze bez kucia (retro)';
      case 'security':
        return 'Bezpieczeństwo i furtka (security)';
      case 'commercial':
        return 'Biuro / lokal (commercial)';
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const selectedNames =
      SMART_MODULES.filter((m) => selectedModuleIds.includes(m.id))
        .map((m) => `• ${m.name}`)
        .join('\n') || '• nie wybrano — proszę o dobór zestawu';
    const subject = `Wstępne zapytanie z ankiety — ${formData.name}`;
    const body = [
      `Imię i nazwisko: ${formData.name}`,
      `Telefon: ${formData.phone}`,
      `E-mail: ${formData.email}`,
      '',
      `Nieruchomość: ${getPropertyLabel(propertyState)}`,
      `Metraż: ${getAreaLabel(areaRange)}`,
      '',
      'Zainteresowanie:',
      selectedNames,
      '',
      formData.message ? `Wiadomość: ${formData.message}` : 'Wiadomość: —',
      '',
      'Ankieta nie jest wyceną — oddzwonimy z propozycją.',
    ].join('\n');
    let finalBody = body;
    if (finalBody.length > 1800) {
      finalBody = finalBody.slice(0, 1800);
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

  return (
    <section id="kalkulator" className="py-24 relative overflow-hidden border-t bg-[#F9FAFB] border-[#E5E7EB] text-[#111827]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="rounded-[2px] border p-6 sm:p-10 lg:p-12 shadow-xl bg-white border-[#E5E7EB]">

          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold mb-3">
                <span className="flex items-center gap-1.5 text-[#B87333] font-mono uppercase tracking-wider font-bold">
                  <ClipboardList className="w-4 h-4" />
                  <span>Krótka ankieta DOMENCE</span>
                </span>
                <span className="font-mono text-[#9CA3AF]">Krok {step} z 4</span>
              </div>

              <div className="w-full h-1 rounded-[2px] overflow-hidden bg-[#E5E7EB]">
                <motion.div
                  className="h-full bg-[#B87333]"
                  animate={{ width: `${step * 25}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait">

            {step === 1 && !isSubmitted && (
              <motion.div
                key="step-1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-[#111827]">
                  Co najlepiej opisuje Twoją nieruchomość?
                </h3>
                <p className="text-xs sm:text-sm mb-8 leading-relaxed text-[#4B5563]">
                  Wybierz jedną odpowiedź — dopasujemy zestaw do Twojej sytuacji.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROPERTY_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const active = propertyState === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleSelectStep1(opt.value)}
                        className={`p-6 rounded-[2px] text-left transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                          active
                            ? 'bg-[#B87333]/15 border-[#B87333] ring-1 ring-[#B87333]'
                            : 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB]'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-base font-bold text-[#111827]">
                          {opt.title}
                        </div>
                        <div className="text-xs text-[#9CA3AF] mt-1.5 leading-relaxed">
                          {opt.sub}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {step === 2 && !isSubmitted && (
              <motion.div
                key="step-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-[#111827]">
                  Jaki metraż?
                </h3>
                <p className="text-xs sm:text-sm mb-8 leading-relaxed text-[#4B5563]">
                  Przybliżona powierzchnia pomoże nam dobrać odpowiedni zestaw.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {AREA_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelectStep2(opt.value)}
                      className={`p-5 rounded-[2px] text-center font-bold text-sm transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 ${
                        areaRange === opt.value
                          ? 'bg-[#B87333] text-white border-[#B87333] shadow-md'
                          : 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB] text-[#111827]'
                      }`}
                    >
                      {opt.short}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setStep(1)}
                    className="inline-flex items-center gap-2 text-xs font-semibold text-[#9CA3AF] transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 hover:text-[#111827]"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Wstecz</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 3 && !isSubmitted && (
              <motion.div
                key="step-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-[#111827]">
                  Co Cię interesuje? (wybierz dowolną liczbę)
                </h3>
                <p className="text-xs sm:text-sm mb-5 leading-relaxed text-[#4B5563]">
                  Zaznacz wszystko, co brzmi ciekawie. Nie musisz się znać — na końcu oddzwonimy i wszystko wyjaśnimy.
                </p>

                <div className="space-y-3 max-h-[460px] overflow-y-auto pr-1">
                  {SMART_MODULES.map((mod) => {
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
                            : 'bg-white border-[#E5E7EB] hover:border-[#D1D5DB]'
                        }`}
                      >
                        <div className="flex items-start gap-3.5">
                          <div
                            className={`w-5 h-5 rounded-[2px] flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                              isChecked
                                ? 'bg-[#B87333] text-white'
                                : 'border border-[#D1D5DB] bg-white'
                            }`}
                          >
                            {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                          </div>

                          <div>
                            <div className="text-xs sm:text-sm font-bold text-[#111827]">
                              {mod.name}
                            </div>
                            <div className="text-[11px] text-[#9CA3AF] mt-1 leading-relaxed">
                              {mod.description}
                            </div>
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-[#9CA3AF]">
                    {selectedModuleIds.length === 0
                      ? 'Nic nie wybrano — możesz też przejść dalej, a my dobierzemy zestaw.'
                      : `Wybrano: ${selectedModuleIds.length}`}
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => setStep(2)}
                      className="w-1/2 sm:w-auto px-4 py-3 text-xs text-[#9CA3AF] transition-colors flex items-center justify-center gap-1 font-mono cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 hover:text-[#111827]"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Wstecz</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setStep(4)}
                      className="btn-engineering-primary w-1/2 sm:w-auto gap-1 cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                    >
                      <span>Dalej — kontakt</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && !isSubmitted && (
              <motion.div
                key="step-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#B87333]/15 text-[#B87333] border border-[#B87333]/30 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Twoje odpowiedzi</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
                    Gdzie mamy oddzwonić?
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-[#9CA3AF]">
                    <span>Nieruchomość: <strong>{getPropertyLabel(propertyState)}</strong></span>
                    <span>•</span>
                    <span>Metraż: <strong>{getAreaLabel(areaRange)}</strong></span>
                    <span>•</span>
                    <span>Zainteresowania: <strong>{selectedModuleIds.length === 0 ? 'dobór przez nas' : `${selectedModuleIds.length}`}</strong></span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-4 max-w-lg mx-auto">
                  <div>
                    <label htmlFor="calc-name" className="block text-xs font-semibold mb-1 text-[#374151]">
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
                        className="w-full pl-10 pr-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]"
                      />
                      <User className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="calc-phone" className="block text-xs font-semibold mb-1 text-[#374151]">
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
                          className="w-full pl-10 pr-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]"
                        />
                        <Phone className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="calc-email" className="block text-xs font-semibold mb-1 text-[#374151]">
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
                          className="w-full pl-10 pr-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]"
                        />
                        <Mail className="w-4 h-4 text-[#9CA3AF] absolute left-3.5 top-3.5" />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="calc-message" className="block text-xs font-semibold mb-1 text-[#374151]">
                      Wiadomość (opcjonalnie)
                    </label>
                    <textarea
                      id="calc-message"
                      name="message"
                      rows={3}
                      maxLength={500}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Np. kiedy najlepiej oddzwonić?"
                      className="w-full px-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]"
                    />
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
                        Wyrażam zgodę na kontakt w sprawie ankiety i propozycji zestawu.
                      </span>
                    </label>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => setStep(3)}
                      className="sm:w-1/3 py-4 rounded-[2px] border text-xs font-medium text-center transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 bg-[#F3F4F6] border-[#D1D5DB] text-[#374151] hover:bg-[#E5E7EB]"
                    >
                      ← Wstecz
                    </button>

                    <button
                      type="submit"
                      className="btn-engineering-primary sm:w-2/3 shadow-sm cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                    >
                      Wyślij ankietę
                    </button>
                  </div>
                  <p className="text-[11px] text-center text-[#6B7280] pt-1">
                    * Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). Bez spamu.
                  </p>
                </form>
              </motion.div>
            )}

            {isSubmitted && (
              <motion.div
                key="step-success"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-center py-8"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                  <CheckCircle2 className="w-8 h-8 stroke-[2.5]" />
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-[#111827]">
                  Dziękujemy, {formData.name || 'Inwestorze'}!
                </h3>
                <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md mx-auto mb-6 leading-relaxed">
                  Otworzyliśmy Twój program pocztowy z gotową wiadomością na kontakt@domence.pl. Jeśli okno się nie otworzyło, napisz do nas bezpośrednio. Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00).
                </p>

                <div className="p-5 rounded-[2px] border max-w-md mx-auto mb-6 text-left bg-[#F9FAFB] border-[#E5E7EB]">
                  <div className="text-xs font-bold text-[#B87333] mb-2 flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Dalsze kroki:</span>
                  </div>
                  <p className="text-xs text-[#9CA3AF] leading-relaxed">
                    Oddzwonimy z propozycją dobraną do Twoich odpowiedzi. Ankieta nie jest wyceną.
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyBody}
                    className="px-6 py-2.5 rounded-[2px] border text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 bg-white border-[#D1D5DB] text-[#374151] hover:bg-[#F3F4F6]"
                  >
                    {copied ? 'Skopiowano treść' : 'Kopiuj treść wiadomości'}
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setStep(1);
                    }}
                    className="px-6 py-2.5 rounded-[2px] border text-xs font-medium uppercase tracking-wider transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 bg-white border-[#D1D5DB] text-[#374151] hover:bg-[#F3F4F6]"
                  >
                    Wypełnij kolejną ankietę
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
