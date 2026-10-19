import { useState, useEffect, useRef, FormEvent } from 'react';
import { motion, AnimatePresence, type Variants } from 'motion/react';
import { PropertyState, AreaRange, Interest } from '../types.ts';
import { INTEREST_OPTIONS } from '../data/interests.ts';
import { CONTACT_EMAIL, mailtoHref, sendLead, LeadResult } from '../lib/leads.ts';
import { INSTALL_TIMELINES } from '../config/site.ts';
import { ContactChoice, ContactBy, contactByLine } from './ContactChoice.tsx';
import { canRemember, ENQUIRY_KEY } from '../lib/storage.ts';
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
  ClipboardList,
} from 'lucide-react';

interface CalculatorSectionProps {
  /** Chosen on another page (home, a landing page): start at step 2 */
  initialInterest?: Interest;
  /** Stage already known from the link, e.g. the no-chiselling page */
  initialStage?: PropertyState;
  onInterestChange?: (interest: Interest) => void;
}

const STAGE_OPTIONS: { value: PropertyState; title: string; sub: string; icon: typeof Home }[] = [
  {
    value: 'deweloperski',
    title: 'W\u00a0budowie albo remoncie',
    sub: 'Kable poprowadzimy, zanim zamkniesz ściany.',
    icon: Hammer,
  },
  {
    value: 'retro',
    title: 'Gotowy i\u00a0wykończony',
    sub: 'Montujemy bez kucia ścian i\u00a0bez kurzu.',
    icon: Home,
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

export const CalculatorSection: React.FC<CalculatorSectionProps> = ({
  initialInterest,
  initialStage,
  onInterestChange,
}) => {
  const [step, setStep] = useState<number>(initialInterest ? 2 : 1);
  const [interest, setInterest] = useState<Interest>(initialInterest ?? 'oba');
  const [dir, setDir] = useState(1);
  const sectionRef = useRef<HTMLElement>(null);
  const movedRef = useRef(false);
  const goTo = (next: number) => {
    movedRef.current = true;
    setDir(next >= step ? 1 : -1);
    setStep(next);
  };
  const [propertyState, setPropertyState] = useState<PropertyState>(initialStage ?? 'retro');
  const [areaRange, setAreaRange] = useState<AreaRange>(() => {
    try {
      const raw = canRemember() ? localStorage.getItem(ENQUIRY_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as { areaRange?: AreaRange };
        if (parsed.areaRange && ['do_60', '61_110', '111_180', 'ponad_180'].includes(parsed.areaRange)) {
          return parsed.areaRange;
        }
      }
    } catch { /* blocked storage: defaults */ }
    return '61_110';
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

  const [contactBy, setContactBy] = useState<ContactBy>('phone');
  type FieldErrors = Partial<Record<'name' | 'phone' | 'email' | 'agreement', string>>;
  const [errors, setErrors] = useState<FieldErrors>({});

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (formData.name.trim().length < 2) next.name = 'Podaj imię (min. 2 litery).';
    if ((contactBy === 'phone' || formData.phone) && !/^[+\d][\d\s\-/.]{5,19}$/.test(formData.phone)) next.phone = 'Wpisz numer w formacie +48 601 234 567.';
    if (contactBy === 'email' && !formData.email.trim()) next.email = 'Podaj e-mail, na który mamy odpisać.';
    else if (formData.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(formData.email)) next.email = 'Wpisz poprawny adres e-mail.';
    if (!formData.agreement) next.agreement = 'Zaznacz zgodę, żebyśmy mogli się odezwać.';
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
    if (!canRemember()) return;
    try {
      localStorage.setItem(
        ENQUIRY_KEY,
        JSON.stringify({ interest, propertyState, areaRange })
      );
    } catch { /* blocked storage: skip persistence */ }
  }, [interest, propertyState, areaRange]);

  const [answered, setAnswered] = useState({ interest: Boolean(initialInterest), stage: Boolean(initialStage), area: false });
  const [timeline, setTimeline] = useState('');

  const handleSelectInterest = (val: Interest) => {
    setAnswered((a) => ({ ...a, interest: true }));
    setInterest(val);
    onInterestChange?.(val);
  };

  const handleSelectStage = (val: PropertyState) => {
    setAnswered((a) => ({ ...a, stage: true }));
    setPropertyState(val);
  };

  const handleSelectArea = (val: AreaRange) => {
    setAnswered((a) => ({ ...a, area: true }));
    setAreaRange(val);
  };

  const getInterestLabel = (i: Interest) => INTEREST_OPTIONS.find((o) => o.value === i)!.title.replace(/\u00a0/g, ' ');

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

  const getPropertyLabel = (state: PropertyState) =>
    state === 'deweloperski' ? 'Dom w budowie albo remoncie' : 'Gotowy, wykończony dom';

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
    const subject = `Zapytanie ze strony — ${formData.name}`;
    const body = [
      `Imię i nazwisko: ${formData.name}`,
      `Preferowany kontakt: ${contactByLine(contactBy)}`,
      `Telefon: ${formData.phone || '—'}`,
      `E-mail: ${formData.email}`,
      '',
      `Interesuje: ${getInterestLabel(interest)}`,
      `Etap: ${getPropertyLabel(propertyState)}`,
      `Metraż: ${getAreaLabel(areaRange)}`,
      `Planowany montaż: ${timeline || '—'}`,
      '',
      formData.message ? `Wiadomość: ${formData.message}` : 'Wiadomość: —',
      '',
      contactBy === 'email' ? 'To nie jest wycena — odpiszemy z propozycją na e-mail.' : 'To nie jest wycena — oddzwonimy z propozycją.',
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
          contact_preference: contactByLine(contactBy),
          phone: formData.phone,
          email: formData.email,
          interest: getInterestLabel(interest),
          property: getPropertyLabel(propertyState),
          area: getAreaLabel(areaRange),
          timeline,
        },
      });
      setDelivery(result);
      setIsSubmitted(true);
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  useEffect(() => {
    if (!movedRef.current && !isSubmitted) return;
    const t = window.setTimeout(() => {
      sectionRef.current?.querySelector<HTMLElement>('[data-step-heading]')?.focus();
    }, 260);
    return () => window.clearTimeout(t);
  }, [step, isSubmitted]);

  const handleCopyBody = async () => {
    try {
      await navigator.clipboard.writeText(mailBody);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  return (
    <section ref={sectionRef} id="zapytanie" className="pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pt-10 lg:pb-28 relative overflow-hidden border-t bg-gray-100 border-gray-200 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        <div className="rounded-[2px] border p-6 sm:p-10 lg:p-12 shadow-xl bg-white border-gray-200">

          {!isSubmitted && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-xs font-semibold mb-3">
                <span className="flex items-center gap-1.5 text-petrol-700 uppercase tracking-wider font-bold">
                  <ClipboardList className="w-4 h-4" />
                  <span>Twoje zapytanie</span>
                </span>
                <span className="text-gray-600">Krok {step} z 3</span>
              </div>

              <div className="w-full h-1 rounded-[2px] overflow-hidden bg-gray-200">
                <motion.div
                  className="h-full bg-petrol-700"
                  animate={{ width: `${step * 33.33}%` }}
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
                <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-gray-900 focus:outline-none">
                  Co Cię interesuje?
                </h2>
                <p className="text-xs sm:text-sm mb-8 leading-relaxed text-gray-600">
                  Wybierz jedną odpowiedź. Szczegóły zaznaczysz za chwilę.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  {INTEREST_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    const active = answered.interest && interest === opt.value;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleSelectInterest(opt.value)}
                        aria-pressed={active}
                        className={`p-6 rounded-[2px] text-left transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 ${
                          active
                            ? 'bg-amber-500/15 border-amber-500 ring-1 ring-petrol-600'
                            : 'bg-white border-gray-200 hover:border-gray-300'
                        }`}
                      >
                        <Icon className="w-6 h-6 text-petrol-700 mb-4" aria-hidden="true" />
                        <div className="text-base font-bold text-gray-900">{opt.title}</div>
                        <div className="text-xs text-gray-600 mt-1.5 leading-relaxed">{opt.sub}</div>
                      </button>
                    );
                  })}
                </div>

                <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => goTo(2)}
                    disabled={!answered.interest}
                    className="btn-engineering-primary gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                  >
                    <span>Dalej</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
                <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-gray-900 focus:outline-none">
                  Twój dom
                </h2>
                <p className="text-xs sm:text-sm mb-8 leading-relaxed text-gray-600">
                  Od tego zależy, jak montujemy: z nowymi kablami czy bez kucia ścian.
                </p>

                <fieldset>
                  <legend className="text-sm font-semibold mb-3 text-gray-900">Na jakim etapie jest dom?</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {STAGE_OPTIONS.map((opt) => {
                      const Icon = opt.icon;
                      const active = answered.stage && propertyState === opt.value;
                      return (
                        <button
                          key={opt.value}
                          type="button"
                          onClick={() => handleSelectStage(opt.value)}
                          aria-pressed={active}
                          className={`p-5 rounded-[2px] text-left transition-all border cursor-pointer flex items-start gap-3.5 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 ${
                            active
                              ? 'bg-amber-500/15 border-amber-500 ring-1 ring-petrol-600'
                              : 'bg-white border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <Icon className="w-5 h-5 text-petrol-700 shrink-0 mt-0.5" aria-hidden="true" />
                          <span>
                            <span className="block text-sm font-bold text-gray-900">{opt.title}</span>
                            <span className="block text-xs text-gray-600 mt-1 leading-relaxed">{opt.sub}</span>
                          </span>
                        </button>
                      );
                    })}
                  </div>
                </fieldset>

                <fieldset className="mt-8">
                  <legend className="text-sm font-semibold mb-3 text-gray-900">Jaki metraż, mniej więcej?</legend>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    {AREA_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => handleSelectArea(opt.value)}
                        aria-pressed={answered.area && areaRange === opt.value}
                        className={`p-4 min-h-11 rounded-[2px] text-center font-bold text-sm transition-all border cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 ${
                          answered.area && areaRange === opt.value
                            ? 'bg-petrol-700 text-white border-amber-500 shadow-md'
                            : 'bg-white border-gray-200 hover:border-gray-300 text-gray-900'
                        }`}
                      >
                        {opt.short}
                      </button>
                    ))}
                  </div>
                </fieldset>

                <fieldset className="mt-8">
                  <legend className="text-sm font-semibold mb-3 text-gray-900">Kiedy planujesz montaż?</legend>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {INSTALL_TIMELINES.map((opt) => (
                      <button
                        key={opt}
                        type="button"
                        onClick={() => setTimeline(opt)}
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
                </fieldset>

                <div className="mt-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
                  <button
                    type="button"
                    onClick={() => goTo(1)}
                    className="inline-flex items-center gap-2 min-h-11 text-xs font-semibold text-gray-600 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 hover:text-gray-900"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Wstecz</span>
                  </button>
                  <div className="flex items-center gap-4">
                    {!(answered.stage && answered.area && timeline) && (
                      <span className="text-xs text-gray-600" aria-live="polite">Zaznacz etap, metraż i termin</span>
                    )}
                    <button
                      type="button"
                      disabled={!(answered.stage && answered.area && timeline)}
                      onClick={() => goTo(3)}
                      className="btn-engineering-primary gap-1 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                    >
                      <span>Dalej</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
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
                <div className="text-center mb-8">
                  <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 focus:outline-none">
                    Jak mamy się z Tobą skontaktować?
                  </h2>

                  <p className="mt-3 text-sm text-gray-600 max-w-lg mx-auto">
                    Twoje odpowiedzi: {getInterestLabel(interest).toLowerCase()}, {getPropertyLabel(propertyState).toLowerCase()}, {getAreaLabel(areaRange)}, {timeline.toLowerCase()}.{' '}
                    <button
                      type="button"
                      onClick={() => goTo(1)}
                      className="inline-flex items-center min-h-11 font-semibold text-petrol-700 underline underline-offset-4 hover:text-amber-800 cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                    >
                      Zmień
                    </button>
                  </p>
                </div>

                {/* Trust badges */}
                <div className="flex flex-wrap items-center justify-center gap-6 mb-8 py-4 border-y border-gray-200">
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <ShieldCheck className="w-4 h-4 text-petrol-700" />
                    <span>Bezpłatna konsultacja</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <CheckCircle2 className="w-4 h-4 text-petrol-700" />
                    <span>Odpowiedź w 24 godziny</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <ShieldCheck className="w-4 h-4 text-petrol-700" />
                    <span>Bez spamu</span>
                  </div>
                </div>

                <form onSubmit={handleSubmit} noValidate className="space-y-4 max-w-lg mx-auto">
                  <div>
                    <label htmlFor="calc-name" className="block text-xs font-semibold mb-2 text-gray-700">
                      Imię i nazwisko
                    </label>
                    <div className="relative">
                      <input
                        id="calc-name"
                        name="name"
                        autoComplete="name"
                        type="text"
                        required
                        minLength={2}
                        maxLength={60}
                        value={formData.name}
                        onChange={(e) => { setFormData({ ...formData, name: e.target.value.trimStart() }); clearError('name'); }}
                        placeholder="np. Marek Wiśniewski"
                        aria-invalid={!!errors.name}
                        aria-describedby={errors.name ? 'calc-name-error' : undefined}
                        className={`w-full pl-10 pr-4 py-3 rounded-[2px] text-base border focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol-600/60 bg-gray-50 text-gray-900 focus:border-amber-500 ${errors.name ? 'border-red-600' : 'border-gray-300'}`}
                      />
                      <User className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                    </div>
                    {errors.name && (
                      <p id="calc-name-error" className="mt-1.5 text-xs font-medium text-red-700">{errors.name}</p>
                    )}
                  </div>

                  <ContactChoice
                    idPrefix="calc"
                    value={contactBy}
                    onChange={(v) => { setContactBy(v); clearError('phone'); clearError('email'); }}
                  />

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="calc-phone" className="block text-xs font-semibold mb-2 text-gray-700">
                        {contactBy === 'email' ? 'Telefon (opcjonalnie)' : 'Telefon kontaktowy'}
                      </label>
                      <div className="relative">
                        <input
                          id="calc-phone"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          type="tel"
                          required={contactBy === 'phone'}
                          pattern="^[+\d][\d\s\-/.]{5,19}$"
                          maxLength={25}
                          value={formData.phone}
                          onChange={(e) => { setFormData({ ...formData, phone: e.target.value.trim() }); clearError('phone'); }}
                          placeholder="+48 601 234 567"
                          aria-invalid={!!errors.phone}
                          aria-describedby={errors.phone ? 'calc-phone-error' : undefined}
                          className={`w-full pl-10 pr-4 py-3 rounded-[2px] text-base border focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol-600/60 bg-gray-50 text-gray-900 focus:border-amber-500 ${errors.phone ? 'border-red-600' : 'border-gray-300'}`}
                        />
                        <Phone className="w-4 h-4 text-gray-400 absolute left-3.5 top-3.5" />
                      </div>
                      {errors.phone && (
                        <p id="calc-phone-error" className="mt-1.5 text-xs font-medium text-red-700">{errors.phone}</p>
                      )}
                    </div>

                    <div>
                      <label htmlFor="calc-email" className="block text-xs font-semibold mb-2 text-gray-700">
                        {contactBy === 'email' ? 'Adres e-mail' : 'Adres e-mail (opcjonalnie)'}
                      </label>
                      <div className="relative">
                        <input
                          id="calc-email"
                          name="email"
                          autoComplete="email"
                          type="email"
                          required={contactBy === 'email'}
                          maxLength={254}
                          value={formData.email}
                          onChange={(e) => { setFormData({ ...formData, email: e.target.value }); clearError('email'); }}
                          placeholder="twoj@email.pl"
                          aria-invalid={!!errors.email}
                          aria-describedby={errors.email ? 'calc-email-error' : undefined}
                          className={`w-full pl-10 pr-4 py-3 rounded-[2px] text-base border focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol-600/60 bg-gray-50 text-gray-900 focus:border-amber-500 ${errors.email ? 'border-red-600' : 'border-gray-300'}`}
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
                      placeholder={contactBy === 'email' ? 'Np. o co chcesz zapytać?' : 'Np. kiedy najlepiej oddzwonić?'}
                      className="w-full px-4 py-3 rounded-[2px] text-base border focus:outline-none focus-visible:ring-2 focus-visible:ring-petrol-600/60 bg-gray-50 border-gray-300 text-gray-900 focus:border-amber-500"
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
                        className="mt-0.5 accent-petrol-700 w-5 h-5 shrink-0 rounded-[2px] focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                      />
                      <span className="leading-snug">
                        Wyrażam zgodę na kontakt w sprawie zapytania i propozycji. <button type="button" onClick={(e) => { e.preventDefault(); window.dispatchEvent(new CustomEvent('domence:legal', { detail: 'rodo' })); }} className="underline underline-offset-2 font-semibold text-petrol-700 hover:text-petrol-800 cursor-pointer">Polityka prywatności</button>
                      </span>
                    </label>
                    {errors.agreement && (
                      <p id="calc-agreement-error" className="mt-1.5 text-xs font-medium text-red-700">{errors.agreement}</p>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-3">
                    <button
                      type="button"
                      onClick={() => goTo(2)}
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
                    <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold mb-2 text-gray-900 focus:outline-none">
                      Dziękujemy{formData.name ? `, ${formData.name.split(' ')[0]}` : ''}. Zapytanie dotarło.
                    </h2>
                    <p className="text-sm text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
                      {contactBy === 'email'
                        ? 'Odpiszemy na e-mail z propozycją dobraną do Twoich odpowiedzi, zwykle w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). Nie będziemy dzwonić. To nie jest wycena.'
                        : 'Oddzwonimy z propozycją dobraną do Twoich odpowiedzi, zwykle w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). To nie jest wycena.'}
                    </p>
                  </>
                ) : (
                  <>
                    <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold mb-2 text-gray-900 focus:outline-none">
                      Jeszcze jeden krok: wyślij wiadomość
                    </h2>
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
