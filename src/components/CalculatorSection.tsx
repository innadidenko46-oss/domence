import { useState, useEffect, FormEvent } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { SMART_MODULES } from '../data/content.ts';
import { PropertyState, AreaRange } from '../types.ts';
import { CONTACT_EMAIL, mailtoHref, sendLead, LeadResult } from '../lib/leads.ts';
import { INSTALL_TIMELINES } from '../config/site.ts';
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
    title: 'Nowy dom / remont',
    sub: 'Budowa albo remont — instalację zaplanujemy od zera.',
    icon: Hammer,
  },
  {
    value: 'retro',
    title: 'Gotowe wnętrze bez kucia',
    sub: 'Mieszkasz już w domu — wszystko bez kucia ścian i bez kurzu.',
    icon: Home,
  },
  {
    value: 'security',
    title: 'Bezpieczeństwo i furtka',
    sub: 'Wideodomofon, kamery i kontrola wejścia na posesję.',
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

const stepVariants: Variants = {
  enter: (dir: number) => ({ opacity: 0, x: 24 * dir }),
  center: { opacity: 1, x: 0, transition: { duration: 0.26, ease: [0.23, 1, 0.32, 1] as const } },
  exit: (dir: number) => ({ opacity: 0, x: -24 * dir, transition: { duration: 0.18, ease: [0.55, 0.085, 0.68, 0.53] as const } }),
};

const MODULE_GROUPS: { label: string; categories: string[] }[] = [
  { label: 'Bezpieczeństwo domu', categories: ['safety'] },
  { label: 'Kamery i sieć', categories: ['teletechnics'] },
  { label: 'Wejście i brama', categories: ['access'] },
  { label: 'Komfort na co dzień', categories: ['comfort'] },
  { label: 'Prąd i energia', categories: ['power', 'energy'] },
];

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  selectedPropertyState = 'retro',
  onStateChange,
}) => {
  const [step, setStep] = useState<number>(1);
  const [dir, setDir] = useState(1);
  const goTo = (next: number) => {
    setDir(next >= step ? 1 : -1);
    setStep(next);
  };
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

  type FieldErrors = Partial<Record<'name' | 'phone' | 'email' | 'agreement', string>>;
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (formData.name.trim().length < 3) next.name = 'Podaj imię i nazwisko (min. 3 znaki).';
    if (!/^[+\d][\d\s\-/.]{5,19}$/.test(formData.phone)) next.phone = 'Wpisz numer w formacie +48 601 234 567.';
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) next.email = 'Wpisz poprawny adres e-mail.';
    if (!formData.agreement) next.agreement = 'Zaznacz zgodę, żebyśmy mogli oddzwonić.';
    return next;
  };

  const clearError = (field: keyof FieldErrors) =>
    setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [delivery, setDelivery] = useState<LeadResult>('sent');
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [mailSubject, setMailSubject] = useState('');

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

  // Nothing is shown as chosen until the visitor picks it, so no default slips through unread
  const [answered, setAnswered] = useState({ property: false, area: false });
  const [timeline, setTimeline] = useState('');

  const handleSelectStep1 = (val: PropertyState) => {
    setAnswered((a) => ({ ...a, property: true }));
    setPropertyState(val);
    onStateChange?.(val);
    goTo(2);
  };

  const handleSelectStep2 = (val: AreaRange) => {
    setAnswered((a) => ({ ...a, area: true }));
    setAreaRange(val);
    goTo(3);
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
        return 'Nowy dom / remont';
      case 'retro':
        return 'Gotowe wnętrze bez kucia';
      case 'security':
        return 'Bezpieczeństwo i furtka';
      case 'commercial':
        return 'Biuro / lokal';
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    if (sending) return;
    e.preventDefault();
    const found = validate();
    setErrors(found);
    const firstInvalid = (['name', 'phone', 'email', 'agreement'] as const).find((f) => found[f]);
    if (firstInvalid) {
      document.getElementById(`calc-${firstInvalid}`)?.focus();
      return;
    }
    const selectedNames =
      SMART_MODULES.filter((m) => selectedModuleIds.includes(m.id))
        .map((m) => `• ${m.name}`)
        .join('\n') || '• nie wybrano — proszę o dobór zestawu';
    const subject = `Zapytanie ze strony — ${formData.name}`;
    const body = [
      `Imię i nazwisko: ${formData.name}`,
      `Telefon: ${formData.phone}`,
      `E-mail: ${formData.email}`,
      '',
      `Nieruchomość: ${getPropertyLabel(propertyState)}`,
      `Metraż: ${getAreaLabel(areaRange)}`,
      `Planowany montaż: ${timeline}`,
      '',
      'Zainteresowanie:',
      selectedNames,
      '',
      formData.message ? `Wiadomość: ${formData.message}` : 'Wiadomość: —',
      '',
      'To nie jest wycena — oddzwonimy z propozycją.',
    ].join('\n');
    setMailBody(body);
    setMailSubject(subject);
    setCopied(false);
    setSendError(false);
    setSending(true);
    try {
      const result = await sendLead({
        subject,
        body,
        fields: {
          name: formData.name,
          phone: formData.phone,
          email: formData.email,
          property: getPropertyLabel(propertyState),
          area: getAreaLabel(areaRange),
          timeline,
        },
      });
      setDelivery(result);
      setIsSubmitted(true);
    } catch {
      // Keep everything the visitor typed; they can retry or use e-mail
      setSendError(true);
    } finally {
      setSending(false);
    }
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
    <section id="zapytanie" className="pt-6 pb-16 sm:pt-16 sm:pb-20 lg:pt-24 lg:pb-28 relative overflow-hidden border-t bg-gray-100 border-gray-200 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="hidden sm:block rounded-[2px] overflow-hidden border border-gray-200 shadow-sm mb-6 h-40">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=85"
            alt="Jasne wnętrze domu z planowaną automatyką smart home"
            loading="lazy"
            className="w-full h-full object-cover object-center"
          />
        </div>

        <div className="rounded-[2px] border p-6 sm:p-10 lg:p-12 shadow-xl bg-white border-gray-200">

          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold mb-3">
                <span className="flex items-center gap-1.5 text-petrol-700 font-mono uppercase tracking-wider font-bold">
                  <ClipboardList className="w-4 h-4" />
                  <span>Twoje zapytanie</span>
                </span>
                <span className="font-mono text-gray-600">Krok {step} z 5</span>
              </div>

              <div className="w-full h-1 rounded-[2px] overflow-hidden bg-gray-200">
                <motion.div
                  className="h-full bg-petrol-700"
                  animate={{ width: `${step * 20}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            </div>
          )}

          <AnimatePresence mode="wait" custom={dir} initial={false}>

            {step === 1 && !isSubmitted && (
              <motion.div
                key="step-1"
                custom={dir}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-gray-900">
                  Co najlepiej opisuje Twoją nieruchomość?
                </h3>
                <p className="text-xs sm:text-sm mb-8 leading-relaxed text-gray-600">
                  Wybierz jedną odpowiedź — dopasujemy zestaw do Twojej sytuacji.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PROPERTY_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const active = answered.property && propertyState === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleSelectStep1(opt.value)}
                        aria-pressed={active}
                        className={`p-6 rounded-[2px] text-left transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 ${
                          active
                            ? 'bg-amber-500/15 border-amber-500 ring-1 ring-petrol-600'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <div className="w-10 h-10 rounded-[2px] bg-amber-500/20 text-amber-800 flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div className="text-base font-bold text-gray-900">
                          {opt.title}
                        </div>
                        <div className="text-xs text-gray-600 mt-1.5 leading-relaxed">
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
                custom={dir}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-gray-900">
                  Jaki metraż?
                </h3>
                <p className="text-xs sm:text-sm mb-8 leading-relaxed text-gray-600">
                  Przybliżona powierzchnia pomoże nam dobrać odpowiedni zestaw.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  {AREA_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => handleSelectStep2(opt.value)}
                      aria-pressed={answered.area && areaRange === opt.value}
                      className={`p-5 rounded-[2px] text-center font-bold text-sm transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 ${
                        answered.area && areaRange === opt.value
                          ? 'bg-petrol-700 text-white border-amber-500 shadow-md'
                          : 'bg-white border-gray-200 hover:border-gray-300 text-gray-900'
                      }`}
                    >
                      {opt.short}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => goTo(1)}
                    className="inline-flex items-center gap-2 min-h-11 text-xs font-semibold text-gray-600 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 hover:text-gray-900"
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
                custom={dir}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-gray-900">
                  Co Cię interesuje? (wybierz dowolną liczbę)
                </h3>
                <p className="text-xs sm:text-sm mb-5 leading-relaxed text-gray-600">
                  Zaznacz wszystko, co brzmi ciekawie. Nie musisz się znać — na końcu oddzwonimy i wszystko wyjaśnimy.
                </p>

                <div className="space-y-7">
                  {MODULE_GROUPS.map((group) => {
                    const mods = SMART_MODULES.filter((m) => group.categories.includes(m.category));
                    if (mods.length === 0) return null;
                    return (
                      <fieldset key={group.label}>
                        <legend className="eyebrow mb-3">{group.label}</legend>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {mods.map((mod) => {
                            const isChecked = selectedModuleIds.includes(mod.id);
                            return (
                              <button
                                type="button"
                                key={mod.id}
                                onClick={() => toggleModule(mod.id)}
                                aria-pressed={isChecked}
                                className={`p-4 h-full rounded-[2px] transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 w-full text-left ${
                                  isChecked
                                    ? 'bg-amber-500/15 border-amber-500'
                                    : 'bg-white border-gray-200 hover:border-gray-300'
                                }`}
                              >
                                <div className="flex items-start gap-3.5">
                                  <div
                                    className={`w-5 h-5 rounded-[2px] flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                                      isChecked
                                        ? 'bg-petrol-700 text-white'
                                        : 'border border-gray-300 bg-white'
                                    }`}
                                  >
                                    {isChecked && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                                  </div>

                                  <div>
                                    <div className="text-xs sm:text-sm font-bold text-gray-900">
                                      {mod.name}
                                    </div>
                                    <div className="text-xs text-gray-600 mt-1 leading-relaxed">
                                      {mod.humanExplanation}
                                    </div>
                                  </div>
                                </div>
                              </button>
                            );
                          })}
                        </div>
                      </fieldset>
                    );
                  })}
                </div>

                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="text-xs text-gray-600">
                    {selectedModuleIds.length === 0
                      ? 'Nic nie wybrano — możesz też przejść dalej, a my dobierzemy zestaw.'
                      : `Wybrano: ${selectedModuleIds.length}`}
                  </div>
                  <div className="flex items-center gap-3 w-full sm:w-auto">
                    <button
                      type="button"
                      onClick={() => goTo(2)}
                      className="w-1/2 sm:w-auto px-4 min-h-11 text-xs font-semibold text-gray-600 transition-colors flex items-center justify-center gap-1 cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 hover:text-gray-900"
                    >
                      <ArrowLeft className="w-3.5 h-3.5" />
                      <span>Wstecz</span>
                    </button>

                    <button
                      type="button"
                      onClick={() => goTo(4)}
                      className="btn-engineering-primary w-1/2 sm:w-auto gap-1 cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                    >
                      <span>Dalej</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            )}

            {step === 4 && !isSubmitted && (
              <motion.div
                key="step-4"
                custom={dir}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-gray-900">
                  Kiedy planujesz montaż?
                </h3>
                <p className="text-xs sm:text-sm mb-8 leading-relaxed text-gray-600">
                  Dzięki temu wiemy, kiedy się odezwać i czy zdążymy przed Twoim terminem.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {INSTALL_TIMELINES.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => {
                        setTimeline(opt);
                        goTo(5);
                      }}
                      aria-pressed={timeline === opt}
                      className={`p-5 min-h-11 rounded-[2px] text-left font-bold text-sm transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 ${
                        timeline === opt
                          ? 'bg-petrol-700 text-white border-amber-500 shadow-md'
                          : 'bg-white border-gray-200 hover:border-gray-300 text-gray-900'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>

                <div className="mt-8 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => goTo(3)}
                    className="inline-flex items-center gap-2 min-h-11 text-xs font-semibold text-gray-600 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 hover:text-gray-900"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Wstecz</span>
                  </button>
                </div>
              </motion.div>
            )}

            {step === 5 && !isSubmitted && (
              <motion.div
                key="step-5"
                custom={dir}
                variants={stepVariants}
                initial="enter"
                animate="center"
                exit="exit"
              >
                <div className="text-center mb-8">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-amber-500/15 text-amber-800 border border-amber-500/30 text-xs font-mono font-bold uppercase tracking-wider mb-2">
                    <CheckCircle2 className="w-4 h-4" />
                    <span>Twoje odpowiedzi</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
                    Gdzie mamy oddzwonić?
                  </h3>

                  <div className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-1 text-xs text-gray-600">
                    <span>Nieruchomość: <strong>{getPropertyLabel(propertyState)}</strong></span>
                    <span>•</span>
                    <span>Metraż: <strong>{getAreaLabel(areaRange)}</strong></span>
                    <span>•</span>
                    <span>Termin: <strong>{timeline}</strong></span>
                    <span>•</span>
                    <span>Zainteresowania: <strong>{selectedModuleIds.length === 0 ? 'dobór przez nas' : `${selectedModuleIds.length}`}</strong></span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-lg mx-auto">
                  <div>
                    <label htmlFor="calc-name" className="block text-xs font-semibold mb-2 text-gray-700">
                      Imię i nazwisko
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
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value.trimStart() }); clearError('name'); }}
                        placeholder="np. Marek Wiśniewski"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'calc-name-error' : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol-600/60 bg-gray-50 text-gray-900 focus:border-amber-500 ${errors.name ? 'border-red-600' : 'border-gray-300'}`}
                      />
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    </div>
                    {errors.name && (
                      <p id="calc-name-error" className="mt-1.5 text-xs font-medium text-red-700">{errors.name}</p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="calc-phone" className="block text-xs font-semibold mb-2 text-gray-700">
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
                          onChange={(e) => { setFormData({ ...formData, phone: e.target.value.trim() }); clearError('phone'); }}
                          placeholder="+48 601 234 567"
                          aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'calc-phone-error' : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol-600/60 bg-gray-50 text-gray-900 focus:border-amber-500 ${errors.phone ? 'border-red-600' : 'border-gray-300'}`}
                        />
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      </div>
                    {errors.phone && (
                      <p id="calc-phone-error" className="mt-1.5 text-xs font-medium text-red-700">{errors.phone}</p>
                    )}
                    </div>

                    <div>
                      <label htmlFor="calc-email" className="block text-xs font-semibold mb-2 text-gray-700">
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
                          onChange={(e) => { setFormData({ ...formData, email: e.target.value }); clearError('email'); }}
                          placeholder="inwestor@dom.pl"
                          aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'calc-email-error' : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol-600/60 bg-gray-50 text-gray-900 focus:border-amber-500 ${errors.email ? 'border-red-600' : 'border-gray-300'}`}
                        />
                        <Mail className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      </div>
                    {errors.email && (
                      <p id="calc-email-error" className="mt-1.5 text-xs font-medium text-red-700">{errors.email}</p>
                    )}
                    </div>
                  </div>

                  <div>
                    <label htmlFor="calc-message" className="block text-xs font-semibold mb-2 text-gray-700">
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
                      className="w-full px-4 py-3 rounded-[2px] text-sm border focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol-600/60 bg-gray-50 border-gray-300 text-gray-900 focus:border-amber-500"
                    />
                  </div>

                  <div className="pt-2 text-xs text-gray-600">
                    <label className="flex items-start gap-2.5 cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                      <input
                        id="calc-agreement"
                        type="checkbox"
                        aria-invalid={!!errors.agreement}
                        aria-describedby={errors.agreement ? 'calc-agreement-error' : undefined}
                        checked={formData.agreement}
                        onChange={(e) => {
                          setFormData({ ...formData, agreement: e.target.checked });
                          clearError('agreement');
                        }}
                        className="mt-0.5 accent-amber-500 w-4 h-4 rounded-[2px] focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                      />
                      <span className="leading-snug">
                        Wyrażam zgodę na kontakt w sprawie zapytania i propozycji zestawu.
                      </span>
                    </label>
                    {errors.agreement && (
                      <p id="calc-agreement-error" className="mt-1.5 text-xs font-medium text-red-700">{errors.agreement}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => goTo(4)}
                      className="sm:w-1/3 py-4 rounded-[2px] border text-xs font-medium inline-flex items-center justify-center gap-2 transition-all cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 bg-gray-100 border-gray-300 text-gray-700 hover:bg-gray-200"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      <span>Wstecz</span>
                    </button>

                    <button
                      type="submit"
                      disabled={sending}
                      aria-busy={sending}
                      className="btn-engineering-primary sm:w-2/3 shadow-sm cursor-pointer disabled:cursor-wait disabled:opacity-80 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                    >
                      {sending ? 'Wysyłanie…' : 'Wyślij zapytanie'}
                    </button>
                  </div>
                  {sendError && (
                    <p role="alert" className="text-sm text-red-700 border-l-2 border-red-600 pl-3">
                      Nie udało się wysłać zapytania. Twoje odpowiedzi są zapisane — spróbuj ponownie za chwilę albo{' '}
                      <a href={mailtoHref(mailSubject, mailBody)} className="font-semibold underline underline-offset-2">
                        wyślij je e-mailem na {CONTACT_EMAIL}
                      </a>
                      .
                    </p>
                  )}
                  <p className="text-xs text-center text-gray-500 pt-1">
                    * Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). Bez spamu.
                  </p>
                </form>
              </motion.div>
            )}

            {isSubmitted && (
              <motion.div
                key="step-success"
                role="status"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="text-center py-8"
              >
                <div className="w-14 h-14 rounded-full bg-emerald-600/10 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-600/30">
                  <CheckCircle2 className="w-8 h-8" />
                </div>

                {delivery === 'sent' ? (
                  <>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900" tabIndex={-1}>
                      Dziękujemy{formData.name ? `, ${formData.name.split(' ')[0]}` : ''}. Zapytanie dotarło.
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
                      Oddzwonimy z propozycją dobraną do Twoich odpowiedzi — zwykle w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). To nie jest wycena.
                    </p>
                  </>
                ) : (
                  <>
                    <h3 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-900" tabIndex={-1}>
                      Jeszcze jeden krok: wyślij wiadomość
                    </h3>
                    <p className="text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
                      Otworzyliśmy Twój program pocztowy z gotową wiadomością na {CONTACT_EMAIL}. Zapytanie dotrze do nas dopiero po kliknięciu „Wyślij”. Jeśli okno się nie otworzyło, skopiuj treść i wyślij ją z dowolnej poczty.
                    </p>
                    <a
                      href={mailtoHref(mailSubject, mailBody)}
                      className="btn-engineering-primary mb-3 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                    >
                      Otwórz wiadomość ponownie
                    </a>
                  </>
                )}

                <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                  <button
                    type="button"
                    onClick={handleCopyBody}
                    className="px-6 py-2.5 rounded-[2px] border text-sm font-medium transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    {copied ? 'Skopiowano treść' : 'Kopiuj treść zapytania'}
                  </button>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      goTo(1);
                    }}
                    className="px-6 py-2.5 rounded-[2px] border text-sm font-medium transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 bg-white border-gray-300 text-gray-700 hover:bg-gray-100"
                  >
                    Wyślij kolejne zapytanie
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
