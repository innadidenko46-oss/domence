import { useState, useEffect, useRef, FormEvent } from 'react';
import { PropertyState, AreaRange, Interest } from '../types.ts';
import { INTEREST_OPTIONS } from '../data/interests.ts';
import { CONTACT_EMAIL, mailtoHref, sendLead, LeadResult } from '../lib/leads.ts';
import { track } from '../lib/analytics.ts';
import { getDraft, saveDraft, clearDraft, EnquiryDraft } from '../lib/enquiryDraft.ts';
import { INSTALL_TIMELINES, RESPONSE_LINE } from '../config/site.ts';
import { ContactChoice, contactByLine } from './ContactChoice.tsx';
import { Hammer, Home, ArrowLeft, ArrowRight, CheckCircle2, ShieldCheck, Phone, Mail, User, MapPin, Copy } from 'lucide-react';

interface EnquiryFormProps {
  /** Chosen on another page (home, a landing page): start at step 2 */
  initialInterest?: Interest;
  /** Stage already known from the link, e.g. the no-chiselling page */
  initialStage?: PropertyState;
  onInterestChange?: (interest: Interest) => void;
}

const STAGE_OPTIONS: { value: PropertyState; title: string; sub: string; icon: typeof Home }[] = [
  { value: 'deweloperski', title: 'W budowie albo remoncie', sub: 'Kable poprowadzimy, zanim zamkniesz ściany.', icon: Hammer },
  { value: 'retro', title: 'Gotowy i wykończony', sub: 'Montujemy bez kucia ścian i bez kurzu.', icon: Home },
];

const AREA_OPTIONS: { value: AreaRange; label: string }[] = [
  { value: 'do_60', label: 'do 60 m²' },
  { value: '61_110', label: '61–110 m²' },
  { value: '111_180', label: '111–180 m²' },
  { value: 'ponad_180', label: 'powyżej 180 m²' },
];

const interestLabel = (i: Interest) => INTEREST_OPTIONS.find((o) => o.value === i)!.title.replace(/ /g, ' ');
const areaLabel = (a: AreaRange) => AREA_OPTIONS.find((o) => o.value === a)!.label;
const stageLabel = (s: PropertyState) => (s === 'deweloperski' ? 'Dom w budowie albo remoncie' : 'Gotowy, wykończony dom');

type Field = 'name' | 'phone' | 'email' | 'agreement';
type FieldErrors = Partial<Record<Field, string>>;

// 9–15 digits, written with spaces, dashes, brackets or a leading +
const phoneOk = (v: string) => /^\+?[\d\s()-]+$/.test(v) && (v.match(/\d/g)?.length ?? 0) >= 9 && (v.match(/\d/g)?.length ?? 0) <= 15;
const emailOk = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v);

const optionClass = (active: boolean) =>
  `rounded-[2px] text-left transition-colors border cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 ${
    active ? 'bg-amber-500/15 border-amber-600 ring-1 ring-amber-600' : 'bg-white border-gray-300 hover:border-petrol-700'
  }`;

const inputClass = (invalid?: boolean) =>
  `w-full px-4 py-3 rounded-[2px] text-base border bg-gray-50 text-gray-900 placeholder:text-gray-500 focus:outline-none focus:border-petrol-700 focus-visible:ring-2 focus-visible:ring-petrol-600/50 ${
    invalid ? 'border-red-600' : 'border-gray-300'
  }`;

export const EnquiryForm: React.FC<EnquiryFormProps> = ({ initialInterest, initialStage, onInterestChange }) => {
  const saved = getDraft();
  const [interest, setInterest] = useState<Interest | undefined>(initialInterest ?? saved.interest);
  const [step, setStep] = useState<number>(initialInterest ? 2 : 1);
  const [form, setForm] = useState<EnquiryDraft>({ ...saved, stage: initialStage ?? saved.stage });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(false);
  const [result, setResult] = useState<LeadResult | null>(null);
  const [mail, setMail] = useState({ subject: '', body: '' });
  const [copied, setCopied] = useState(false);
  const [honeypot, setHoneypot] = useState('');
  const sectionRef = useRef<HTMLElement>(null);
  const movedRef = useRef(false);

  const update = (patch: Partial<EnquiryDraft>) => {
    setForm((prev) => ({ ...prev, ...patch }));
    saveDraft(patch);
  };

  const goTo = (next: number) => {
    movedRef.current = true;
    setStep(next);
    if (next > 1) track('Zapytanie: krok', { krok: String(next) });
  };

  const chooseInterest = (val: Interest) => {
    setInterest(val);
    saveDraft({ interest: val });
    onInterestChange?.(val);
    goTo(2);
  };

  // A new step or the result: move focus to its heading so screen readers announce it
  useEffect(() => {
    if (!movedRef.current) return;
    sectionRef.current?.querySelector<HTMLElement>('[data-step-heading]')?.focus();
  }, [step, result]);

  const step2Done = Boolean(form.stage && form.area && form.timeline);

  const validate = (): FieldErrors => {
    const next: FieldErrors = {};
    if (form.name.trim().length < 2) next.name = 'Podaj imię (co najmniej 2 litery).';
    if (form.contactBy === 'phone' && !form.phone.trim()) next.phone = 'Podaj numer, pod który mamy zadzwonić.';
    else if (form.phone.trim() && !phoneOk(form.phone.trim())) next.phone = 'Wpisz numer telefonu, np. 601 234 567.';
    if (form.contactBy === 'email' && !form.email.trim()) next.email = 'Podaj e-mail, na który mamy odpisać.';
    else if (form.email.trim() && !emailOk(form.email.trim())) next.email = 'Wpisz poprawny adres e-mail.';
    if (!form.agreement) next.agreement = 'Zaznacz zgodę, żebyśmy mogli się odezwać.';
    return next;
  };

  const clearError = (field: Field) => setErrors((prev) => (prev[field] ? { ...prev, [field]: undefined } : prev));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (sending || !interest || !form.stage || !form.area) return;
    const found = validate();
    setErrors(found);
    const firstInvalid = (['name', 'phone', 'email', 'agreement'] as const).find((f) => found[f]);
    if (firstInvalid) {
      document.getElementById(`enq-${firstInvalid}`)?.focus();
      return;
    }

    const subject = `Zapytanie ze strony — ${form.name.trim()}`;
    const body = [
      `Imię i nazwisko: ${form.name.trim()}`,
      `Preferowany kontakt: ${contactByLine(form.contactBy)}`,
      `Telefon: ${form.phone.trim() || '—'}`,
      `E-mail: ${form.email.trim() || '—'}`,
      `Miejscowość: ${form.location.trim() || '—'}`,
      '',
      `Interesuje: ${interestLabel(interest)}`,
      `Etap: ${stageLabel(form.stage)}`,
      `Metraż: ${areaLabel(form.area)}`,
      `Planowany montaż: ${form.timeline}`,
      '',
      `Wiadomość: ${form.message.trim() || '—'}`,
    ].join('\n');
    setMail({ subject, body });
    setCopied(false);
    setSendError(false);
    setSending(true);
    try {
      const res = await sendLead({
        subject,
        body,
        honeypot,
        fields: {
          name: form.name.trim(),
          contact_preference: contactByLine(form.contactBy),
          phone: form.phone.trim(),
          email: form.email.trim(),
          location: form.location.trim(),
          interest: interestLabel(interest),
          property: stageLabel(form.stage),
          area: areaLabel(form.area),
          timeline: form.timeline,
        },
      });
      movedRef.current = true;
      setResult(res);
      if (res === 'sent') clearDraft();
    } catch {
      setSendError(true);
    } finally {
      setSending(false);
    }
  };

  const copyBody = async () => {
    try {
      await navigator.clipboard.writeText(`${mail.subject}\n\n${mail.body}`);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };

  const restart = () => {
    setResult(null);
    setStep(1);
    setInterest(undefined);
    setForm({ ...getDraft() });
  };

  const firstName = form.name.trim().split(' ')[0];

  return (
    <section ref={sectionRef} id="zapytanie" aria-label="Formularz zapytania" className="pt-6 pb-16 sm:pt-10 sm:pb-20 lg:pb-24 border-t bg-gray-100 border-gray-200 text-gray-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-[2px] border p-5 sm:p-10 lg:p-12 shadow-xl bg-white border-gray-200">
          {!result && (
            <div className="mb-8">
              <div className="flex items-center justify-between text-sm mb-3">
                <span className="font-semibold text-petrol-700">Twoje zapytanie</span>
                <span className="text-gray-600" aria-live="polite">
                  Krok {step} z 3
                </span>
              </div>
              <div className="w-full h-1 rounded-[2px] overflow-hidden bg-gray-200" aria-hidden="true">
                <div className="h-full bg-petrol-700 transition-[width] duration-300" style={{ width: `${(step / 3) * 100}%` }} />
              </div>
            </div>
          )}

          {step === 1 && !result && (
            <div key="step-1" className="animate-fade-up">
              <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-gray-900 focus:outline-none">
                Co Cię interesuje?
              </h2>
              <p className="text-sm sm:text-base mb-6 leading-relaxed text-gray-600">Wybierz jedną odpowiedź. Szczegóły zaznaczysz w następnym kroku.</p>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                {INTEREST_OPTIONS.map((opt) => {
                  const Icon = opt.icon;
                  return (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => chooseInterest(opt.value)}
                      aria-pressed={interest === opt.value}
                      className={`p-5 sm:p-6 flex sm:block items-start gap-4 ${optionClass(interest === opt.value)}`}
                    >
                      <Icon className="w-6 h-6 text-petrol-700 shrink-0 sm:mb-4" aria-hidden="true" />
                      <span>
                        <span className="block text-base font-bold text-gray-900">{opt.title}</span>
                        <span className="block text-sm text-gray-600 mt-1.5 leading-relaxed">{opt.sub}</span>
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {step === 2 && !result && (
            <div key="step-2" className="animate-fade-up">
              <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold tracking-tight mb-2 text-gray-900 focus:outline-none">
                Twój dom
              </h2>
              <p className="text-sm sm:text-base mb-6 leading-relaxed text-gray-600">
                {interest && (
                  <>
                    Interesuje Cię: <strong className="font-semibold text-gray-900">{interestLabel(interest).toLowerCase()}</strong>.{' '}
                  </>
                )}
                Od etapu domu zależy, jak montujemy: z nowymi kablami czy bez kucia ścian.
              </p>

              <fieldset>
                <legend className="text-sm font-semibold mb-3 text-gray-900">Na jakim etapie jest dom?</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {STAGE_OPTIONS.map((opt) => {
                    const Icon = opt.icon;
                    return (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => update({ stage: opt.value })}
                        aria-pressed={form.stage === opt.value}
                        className={`p-4 flex items-start gap-3.5 ${optionClass(form.stage === opt.value)}`}
                      >
                        <Icon className="w-5 h-5 text-petrol-700 shrink-0 mt-0.5" aria-hidden="true" />
                        <span>
                          <span className="block text-sm font-bold text-gray-900">{opt.title}</span>
                          <span className="block text-sm text-gray-600 mt-1 leading-relaxed">{opt.sub}</span>
                        </span>
                      </button>
                    );
                  })}
                </div>
              </fieldset>

              <fieldset className="mt-7">
                <legend className="text-sm font-semibold mb-3 text-gray-900">Jaki metraż, mniej więcej?</legend>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                  {AREA_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      type="button"
                      onClick={() => update({ area: opt.value })}
                      aria-pressed={form.area === opt.value}
                      className={`p-3 min-h-11 text-center font-semibold text-sm ${optionClass(form.area === opt.value)}`}
                    >
                      {opt.label}
                    </button>
                  ))}
                </div>
              </fieldset>

              <fieldset className="mt-7">
                <legend className="text-sm font-semibold mb-3 text-gray-900">Kiedy planujesz montaż?</legend>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {INSTALL_TIMELINES.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => update({ timeline: opt })}
                      aria-pressed={form.timeline === opt}
                      className={`p-3.5 min-h-11 font-semibold text-sm ${optionClass(form.timeline === opt)}`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
              </fieldset>

              <div className="mt-8 flex flex-col-reverse sm:flex-row items-stretch sm:items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => goTo(1)}
                  className="inline-flex items-center justify-center gap-2 min-h-11 px-3 text-sm font-semibold text-gray-700 hover:text-gray-900 cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600"
                >
                  <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                  <span>Wstecz</span>
                </button>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                  {!step2Done && (
                    <span className="text-sm text-gray-600 text-center" aria-live="polite">
                      Zaznacz etap, metraż i termin
                    </span>
                  )}
                  <button
                    type="button"
                    disabled={!step2Done}
                    onClick={() => goTo(3)}
                    className="btn-engineering-primary cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                  >
                    <span>Dalej: kontakt</span>
                    <ArrowRight className="w-4 h-4" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </div>
          )}

          {step === 3 && !result && interest && form.stage && form.area && (
            <div key="step-3" className="animate-fade-up">
              <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-900 focus:outline-none">
                Jak mamy się z Tobą skontaktować?
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Twoje odpowiedzi: {interestLabel(interest).toLowerCase()}, {stageLabel(form.stage).toLowerCase()}, {areaLabel(form.area)}, {form.timeline.toLowerCase()}.{' '}
                <button
                  type="button"
                  onClick={() => goTo(2)}
                  className="inline-flex items-center min-h-11 font-semibold text-petrol-700 underline underline-offset-4 hover:text-amber-800 cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600"
                >
                  Zmień
                </button>
              </p>

              <ul className="flex flex-wrap gap-x-6 gap-y-2 my-6 py-4 border-y border-gray-200 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-petrol-700" aria-hidden="true" />
                  Bezpłatne sprawdzenie domu
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-petrol-700" aria-hidden="true" />
                  To nie jest zamówienie ani wycena
                </li>
              </ul>

              <form onSubmit={handleSubmit} noValidate className="space-y-5 max-w-xl">
                <div>
                  <label htmlFor="enq-name" className="block text-sm font-semibold mb-2 text-gray-800">
                    Imię i nazwisko
                  </label>
                  <div className="relative">
                    <input
                      id="enq-name"
                      name="name"
                      autoComplete="name"
                      type="text"
                      maxLength={60}
                      value={form.name}
                      onChange={(e) => {
                        update({ name: e.target.value.trimStart() });
                        clearError('name');
                      }}
                      placeholder="np. Marek Wiśniewski"
                      aria-invalid={!!errors.name}
                      aria-describedby={errors.name ? 'enq-name-error' : undefined}
                      className={`${inputClass(!!errors.name)} pl-10`}
                    />
                    <User className="w-4 h-4 text-gray-500 absolute left-3.5 top-4" aria-hidden="true" />
                  </div>
                  {errors.name && (
                    <p id="enq-name-error" className="mt-1.5 text-sm font-medium text-red-700">
                      {errors.name}
                    </p>
                  )}
                </div>

                <ContactChoice
                  idPrefix="enq"
                  value={form.contactBy}
                  onChange={(v) => {
                    update({ contactBy: v });
                    clearError('phone');
                    clearError('email');
                  }}
                />

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="enq-phone" className="block text-sm font-semibold mb-2 text-gray-800">
                      {form.contactBy === 'email' ? 'Telefon (opcjonalnie)' : 'Telefon'}
                    </label>
                    <div className="relative">
                      <input
                        id="enq-phone"
                        name="phone"
                        autoComplete="tel"
                        inputMode="tel"
                        type="tel"
                        maxLength={25}
                        value={form.phone}
                        onChange={(e) => {
                          update({ phone: e.target.value });
                          clearError('phone');
                        }}
                        placeholder="601 234 567"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'enq-phone-error' : undefined}
                        className={`${inputClass(!!errors.phone)} pl-10`}
                      />
                      <Phone className="w-4 h-4 text-gray-500 absolute left-3.5 top-4" aria-hidden="true" />
                    </div>
                    {errors.phone && (
                      <p id="enq-phone-error" className="mt-1.5 text-sm font-medium text-red-700">
                        {errors.phone}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="enq-email" className="block text-sm font-semibold mb-2 text-gray-800">
                      {form.contactBy === 'email' ? 'E-mail' : 'E-mail (opcjonalnie)'}
                    </label>
                    <div className="relative">
                      <input
                        id="enq-email"
                        name="email"
                        autoComplete="email"
                        type="email"
                        maxLength={254}
                        value={form.email}
                        onChange={(e) => {
                          update({ email: e.target.value });
                          clearError('email');
                        }}
                        placeholder="twoj@email.pl"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'enq-email-error' : undefined}
                        className={`${inputClass(!!errors.email)} pl-10`}
                      />
                      <Mail className="w-4 h-4 text-gray-500 absolute left-3.5 top-4" aria-hidden="true" />
                    </div>
                    {errors.email && (
                      <p id="enq-email-error" className="mt-1.5 text-sm font-medium text-red-700">
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="enq-location" className="block text-sm font-semibold mb-2 text-gray-800">
                    Miejscowość (opcjonalnie)
                  </label>
                  <div className="relative">
                    <input
                      id="enq-location"
                      name="location"
                      autoComplete="address-level2"
                      type="text"
                      maxLength={80}
                      value={form.location}
                      onChange={(e) => update({ location: e.target.value })}
                      placeholder="np. Warszawa, Ząbki, Piaseczno"
                      className={`${inputClass()} pl-10`}
                    />
                    <MapPin className="w-4 h-4 text-gray-500 absolute left-3.5 top-4" aria-hidden="true" />
                  </div>
                </div>

                <div>
                  <label htmlFor="enq-message" className="block text-sm font-semibold mb-2 text-gray-800">
                    Wiadomość (opcjonalnie)
                  </label>
                  <textarea
                    id="enq-message"
                    name="message"
                    rows={3}
                    maxLength={500}
                    value={form.message}
                    onChange={(e) => update({ message: e.target.value })}
                    placeholder={form.contactBy === 'email' ? 'Np. o co chcesz zapytać?' : 'Np. kiedy najlepiej zadzwonić?'}
                    className={inputClass()}
                  />
                </div>

                {/* Only bots see and fill this field */}
                <div aria-hidden="true" className="absolute -left-[9999px] w-px h-px overflow-hidden">
                  <label htmlFor="enq-website">Strona internetowa</label>
                  <input
                    id="enq-website"
                    name="website"
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <div>
                  <label htmlFor="enq-agreement" className="flex items-start gap-3 cursor-pointer text-sm text-gray-700">
                    <input
                      id="enq-agreement"
                      type="checkbox"
                      checked={form.agreement}
                      onChange={(e) => {
                        update({ agreement: e.target.checked });
                        clearError('agreement');
                      }}
                      aria-invalid={!!errors.agreement}
                      aria-describedby={errors.agreement ? 'enq-agreement-error' : undefined}
                      className="mt-0.5 accent-petrol-700 w-5 h-5 shrink-0 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                    />
                    <span className="leading-snug">
                      Zgadzam się na kontakt telefoniczny lub e-mailowy w sprawie tego zapytania. Dane wykorzystamy tylko do odpowiedzi.{' '}
                      <a
                        href="/polityka-prywatnosci"
                        target="_blank"
                        rel="noopener"
                        className="underline underline-offset-2 font-semibold text-petrol-700 hover:text-petrol-800"
                      >
                        Polityka prywatności
                      </a>
                    </span>
                  </label>
                  {errors.agreement && (
                    <p id="enq-agreement-error" className="mt-1.5 text-sm font-medium text-red-700">
                      {errors.agreement}
                    </p>
                  )}
                </div>

                <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => goTo(2)}
                    className="btn-secondary sm:w-1/3 cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                  >
                    <ArrowLeft className="w-4 h-4" aria-hidden="true" />
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
                    Nie udało się wysłać zapytania. Twoje odpowiedzi są w formularzu: spróbuj ponownie za chwilę albo{' '}
                    <a href={mailtoHref(mail.subject, mail.body)} className="font-semibold underline underline-offset-2">
                      wyślij je e-mailem na {CONTACT_EMAIL}
                    </a>
                    .
                  </p>
                )}
                <p className="text-sm text-gray-600">Odpowiadamy {RESPONSE_LINE}.</p>
              </form>
            </div>
          )}

          {result === 'sent' && (
            <div role="status" className="text-center py-6 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-emerald-600/10 text-emerald-700 flex items-center justify-center mx-auto mb-4 border border-emerald-600/30">
                <CheckCircle2 className="w-8 h-8" aria-hidden="true" />
              </div>
              <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold mb-2 text-gray-900 focus:outline-none">
                Dziękujemy{firstName ? `, ${firstName}` : ''}. Zapytanie dotarło.
              </h2>
              <p className="text-base text-gray-600 max-w-md mx-auto mb-6 leading-relaxed">
                {form.contactBy === 'email'
                  ? `Odpiszemy na e-mail z propozycją ${RESPONSE_LINE}. Nie będziemy dzwonić.`
                  : `Zadzwonimy z propozycją ${RESPONSE_LINE}.`}
              </p>
              <button type="button" onClick={restart} className="btn-secondary focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                Wyślij kolejne zapytanie
              </button>
            </div>
          )}

          {result === 'manual' && (
            <div role="status" className="py-2 animate-fade-in">
              <div className="w-14 h-14 rounded-full bg-petrol-50 text-petrol-700 flex items-center justify-center mb-4 border border-petrol-100">
                <Mail className="w-7 h-7" aria-hidden="true" />
              </div>
              <h2 data-step-heading tabIndex={-1} className="font-display text-2xl sm:text-3xl font-bold mb-2 text-gray-900 focus:outline-none">
                Ostatni krok: wyślij nam tę wiadomość
              </h2>
              <p className="text-base text-gray-600 max-w-xl mb-6 leading-relaxed">
                Zapytanie jeszcze do nas nie dotarło. Otwórz gotową wiadomość w{' '}swojej poczcie i{' '}kliknij „Wyślij”. Jeśli
                poczta się nie otworzy, skopiuj treść i{' '}wyślij ją na <strong className="text-gray-900">{CONTACT_EMAIL}</strong>.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <a
                  href={mailtoHref(mail.subject, mail.body)}
                  onClick={() => track('Zapytanie e-mailem')}
                  className="btn-engineering-primary focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                >
                  <Mail className="w-4 h-4" aria-hidden="true" />
                  Otwórz wiadomość w poczcie
                </a>
                <button type="button" onClick={copyBody} className="btn-secondary cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2">
                  <Copy className="w-4 h-4" aria-hidden="true" />
                  {copied ? 'Skopiowano' : 'Kopiuj treść'}
                </button>
              </div>
              <pre className="mt-6 p-4 rounded-[2px] border border-gray-200 bg-gray-50 text-sm text-gray-700 whitespace-pre-wrap font-sans max-h-72 overflow-auto">
                {mail.body}
              </pre>
              <button
                type="button"
                onClick={() => setResult(null)}
                className="mt-4 inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-gray-700 hover:text-gray-900 cursor-pointer focus-visible:ring-2 focus-visible:ring-petrol-600"
              >
                <ArrowLeft className="w-4 h-4" aria-hidden="true" />
                Wróć do formularza
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
