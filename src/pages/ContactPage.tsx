import React, { useState } from 'react';
import { PageHeader } from '../components/PageHeader.tsx';
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle2,
  ShieldCheck,
  Send,
} from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const ContactPage: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
    propertyType: 'Nowa Rezydencja (stan surowy)',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = `Zapytanie o projekt instalacji — ${formData.name}`;
    const body = [
      `Imię i nazwisko: ${formData.name}`,
      `Telefon: ${formData.phone}`,
      `E-mail: ${formData.email}`,
      `Lokalizacja inwestycji: ${formData.location}`,
      '',
      'Opis założeń:',
      formData.message,
    ].join('\n');
    window.location.href = `mailto:kontakt@domence.pl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  return (
    <div className={`transition-colors duration-300 ${
      isDay ? 'bg-[#F9FAFB] text-[#111827]' : 'bg-[#18181B] text-[#F3F4F6]'
    }`}>
      <PageHeader
        badge="Bezpośredni Kontakt"
        title="Skonsultuj Projekt instalacji z inżynierem"
        description="Dysponujesz rzutem instalacji elektrycznej lub budujesz dom? Prześlij nam dokumentację do bezpłatnej weryfikacji — odpowiadamy w ciągu 24 godzin w dni robocze."
        icon={<Phone className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Office */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className={`text-xl sm:text-2xl font-bold tracking-tight mb-2 ${
                  isDay ? 'text-[#111827]' : 'text-white'
                }`}>
                  Dział Inżynierii i Prefabrykacji
                </h2>
                <p className={`text-xs sm:text-sm leading-[1.7] ${
                  isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
                }`}>
                  Realizujemy instalacje na terenie Warszawy, Konstancina, Wilanowa, Podkowy Leśnej oraz indywidualne projekty rezydencjalne w całej Polsce.
                </p>
              </div>

              {/* Direct Info Cards with 2px radius */}
              <div className="space-y-3">
                <div
                  className={`flex items-start gap-4 p-5 rounded-[2px] border transition-colors group ${
                    isDay
                      ? 'bg-white border-[#E5E7EB]'
                      : 'bg-[#27272A]/40 border-white/10'
                  }`}
                >
                  <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/15 text-[#B87333] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Kontakt z inżynierem
                    </div>
                    <div className={`text-base font-bold font-mono transition-colors mt-0.5 ${isDay ? 'text-[#111827]' : 'text-white'} group-hover:text-[#B87333]`}>
                      Kontakt przez formularz lub e-mail
                    </div>
                    <div className="text-[11px] text-[#B87333] font-mono mt-0.5">
                      Poniedziałek – Piątek: 08:00 – 18:00
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:kontakt@domence.pl"
                  className={`flex items-start gap-4 p-5 rounded-[2px] border transition-colors group ${
                    isDay
                      ? 'bg-white border-[#E5E7EB] hover:border-[#B87333]'
                      : 'bg-[#27272A]/40 border-white/10 hover:border-[#B87333]'
                  }`}
                >
                  <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/15 text-[#B87333] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Analiza Projektów Budowlanych
                    </div>
                    <div className={`text-base font-bold group-hover:text-[#B87333] transition-colors mt-0.5 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                      kontakt@domence.pl
                    </div>
                    <div className="text-[11px] text-[#9CA3AF] mt-0.5 font-mono">
                      Odpowiadamy w ciągu 24h
                    </div>
                  </div>
                </a>

                <div className={`flex items-start gap-4 p-5 rounded-[2px] border ${
                  isDay
                    ? 'bg-white border-[#E5E7EB]'
                    : 'bg-[#27272A]/40 border-white/10'
                }`}>
                  <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/15 text-[#B87333] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Obszar realizacji
                    </div>
                    <div className={`text-sm font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                      Warszawa i cała Polska
                    </div>
                    <div className="text-xs text-[#9CA3AF] mt-0.5">
                      Projekty prowadzimy na miejscu u inwestora oraz zdalnie na podstawie rzutów.
                    </div>
                  </div>
                </div>
              </div>

              {/* Authority and Trust Guarantee Box */}
              <div className={`p-6 rounded-[2px] border ${
                isDay
                  ? 'bg-white border-[#E5E7EB]'
                  : 'bg-[#27272A]/40 border-white/10'
              }`}>
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B87333] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Standard Współpracy DOMENCE</span>
                </h4>
                <ul className={`space-y-2 text-xs ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Bezpłatna analiza przesłanych rzutów i dokumentacji</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Zakres prac i wycena potwierdzone pisemnie przed startem</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#B87333] shrink-0" />
                    <span>Dokumentacja powykonawcza i protokoły pomiarowe po odbiorze</span>
                  </li>
                </ul>
              </div>

            </div>

            {/* Direct Form */}
            <div className="lg:col-span-7">
              <div className={`p-8 sm:p-10 rounded-[2px] border shadow-xl ${
                isDay
                  ? 'bg-white border-[#E5E7EB]'
                  : 'bg-[#27272A]/50 border-white/10'
              }`}>
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className={`text-2xl font-bold mb-2 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                      Dziękujemy za kontakt!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
                      Otworzyliśmy Twój program pocztowy z przygotowaną wiadomością do wysłania na kontakt@domence.pl.
                      Jeśli okno się nie otworzyło, napisz do nas bezpośrednio. Odpowiadamy w ciągu 24 godzin w dni robocze.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 px-6 py-2.5 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white text-xs font-medium uppercase tracking-wider transition-all"
                    >
                      Wyślij kolejne zapytanie
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className={`text-xl font-bold mb-1 ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                        Wyślij zapytanie o projekt instalacji
                      </h3>
                      <p className="text-xs text-[#9CA3AF]">
                        Wypełnij poniższe pola – przygotujemy bezpłatną analizę techniczną.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-semibold mb-1 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                          Imię i Nazwisko *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="np. Jan Kowalski"
                          className={`w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none ${
                            isDay
                              ? 'bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]'
                              : 'bg-[#18181B] border-white/15 text-white focus:border-[#B87333]'
                          }`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs font-semibold mb-1 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                          Numer Telefonu *
                        </label>
                        <input
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          placeholder="np. 500 600 700"
                          className={`w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none ${
                            isDay
                              ? 'bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]'
                              : 'bg-[#18181B] border-white/15 text-white focus:border-[#B87333]'
                          }`}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className={`block text-xs font-semibold mb-1 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                          Adres E-mail *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="inwestor@dom.pl"
                          className={`w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none ${
                            isDay
                              ? 'bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]'
                              : 'bg-[#18181B] border-white/15 text-white focus:border-[#B87333]'
                          }`}
                        />
                      </div>

                      <div>
                        <label className={`block text-xs font-semibold mb-1 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                          Lokalizacja Inwestycji
                        </label>
                        <input
                          type="text"
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="np. Warszawa / Konstancin"
                          className={`w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none ${
                            isDay
                              ? 'bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]'
                              : 'bg-[#18181B] border-white/15 text-white focus:border-[#B87333]'
                          }`}
                        />
                      </div>
                    </div>

                    <div>
                      <label className={`block text-xs font-semibold mb-1 ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                        Wiadomość / Krótki opis założeń projektu
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Napisz, jaki jest metraż domu, czy posiadasz już projekt elektryczny i na czym najbardziej Ci zależy (oświetlenie, kamery, kino, rolety)..."
                        className={`w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none leading-relaxed ${
                          isDay
                            ? 'bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]'
                            : 'bg-[#18181B] border-white/15 text-white focus:border-[#B87333]'
                        }`}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-4 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prześlij Zapytanie do Inżyniera</span>
                    </button>
                    <p className="text-[11px] text-center text-[#6B7280]">
                      * Odpowiadamy w ciągu 24h. Dane nie są przekazywane firmom marketingowym.
                    </p>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
};
