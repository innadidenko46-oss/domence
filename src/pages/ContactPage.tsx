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

export const ContactPage: React.FC = () => {

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    location: '',
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
    <div className="transition-colors duration-300 bg-[#F9FAFB] text-[#111827]">
      <PageHeader
        badge="Bezpośredni Kontakt"
        title="Skonsultuj projekt instalacji z inżynierem"
        description="Dysponujesz rzutem instalacji elektrycznej lub budujesz dom? Prześlij nam dokumentację do bezpłatnej weryfikacji — odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00)."
        icon={<Phone className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Contact Details & Office */}
            <div className="lg:col-span-5 space-y-6">
              <div>
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight mb-2 text-[#111827]">
                  Dział inżynierii i prefabrykacji
                </h2>
                <p className="text-xs sm:text-sm leading-[1.7] text-[#4B5563]">
                  Realizujemy instalacje na terenie Warszawy, Konstancina, Wilanowa i Podkowy Leśnej. Większe rezydencje realizujemy w całej Polsce po zdalnym audycie.
                </p>
              </div>

              {/* Direct Info Cards with 2px radius */}
              <div className="space-y-3">
                <div
                  className="flex items-start gap-4 p-5 rounded-[2px] border transition-colors group bg-white border-[#E5E7EB]"
                >
                  <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/15 text-[#B87333] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Kontakt z inżynierem
                    </div>
                    <div className="text-base font-bold font-mono transition-colors mt-0.5 text-[#111827] group-hover:text-[#B87333]">
                      Kontakt przez formularz lub e-mail
                    </div>
                    <div className="text-[11px] text-[#B87333] font-mono mt-0.5">
                      Poniedziałek – Piątek: 08:00 – 18:00
                    </div>
                  </div>
                </div>

                <a
                  href="mailto:kontakt@domence.pl"
                  className="focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 flex items-start gap-4 p-5 rounded-[2px] border transition-colors group bg-white border-[#E5E7EB] hover:border-[#B87333]"
                >
                  <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/15 text-[#B87333] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Analiza Projektów Budowlanych
                    </div>
                    <div className="text-base font-bold group-hover:text-[#B87333] transition-colors mt-0.5 text-[#111827]">
                      kontakt@domence.pl
                    </div>
                    <div className="text-[11px] text-[#9CA3AF] mt-0.5 font-mono">
                      Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00)
                    </div>
                  </div>
                </a>

                <div className="flex items-start gap-4 p-5 rounded-[2px] border bg-white border-[#E5E7EB]">
                  <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/15 text-[#B87333] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase tracking-wider text-[#9CA3AF]">
                      Obszar realizacji
                    </div>
                    <div className="text-sm font-bold text-[#111827]">
                      Warszawa i okolice; większe rezydencje — cała Polska
                    </div>
                    <div className="text-xs text-[#9CA3AF] mt-0.5">
                      Projekty prowadzimy na miejscu u inwestora oraz zdalnie na podstawie rzutów.
                    </div>
                  </div>
                </div>
              </div>

              {/* Authority and Trust Guarantee Box */}
              <div className="p-6 rounded-[2px] border bg-white border-[#E5E7EB]">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-[#B87333] mb-3 flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4" />
                  <span>Standard Współpracy DOMENCE</span>
                </h4>
                <ul className="space-y-2 text-xs text-[#374151]">
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
              <div className="p-8 sm:p-10 rounded-[2px] border shadow-xl bg-white border-[#E5E7EB]">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-14 h-14 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>
                    <h3 className="text-2xl font-bold mb-2 text-[#111827]">
                      Dziękujemy za kontakt!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#9CA3AF] max-w-md mx-auto leading-relaxed">
                      Otworzyliśmy Twój program pocztowy z przygotowaną wiadomością do wysłania na kontakt@domence.pl.
                      Jeśli okno się nie otworzyło, napisz do nas bezpośrednio. Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00).
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="btn-engineering-primary mt-6 focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                    >
                      Wyślij kolejne zapytanie
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-1 text-[#111827]">
                        Wyślij zapytanie o projekt instalacji
                      </h3>
                      <p className="text-xs text-[#9CA3AF]">
                        Wypełnij poniższe pola – przygotujemy bezpłatną analizę techniczną.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-name" className="block text-xs font-semibold mb-1 text-[#374151]">
                          Imię i Nazwisko *
                        </label>
                        <input
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          type="text"
                          required
                          minLength={3}
                          maxLength={60}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value.trimStart() })}
                          placeholder="np. Jan Kowalski"
                          className="w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-phone" className="block text-xs font-semibold mb-1 text-[#374151]">
                          Numer Telefonu *
                        </label>
                        <input
                          id="contact-phone"
                          name="phone"
                          autoComplete="tel"
                          inputMode="tel"
                          type="tel"
                          required
                          pattern="^[+\d][\d\s\-/.]{5,19}$"
                          maxLength={25}
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value.trim() })}
                          placeholder="np. 500 600 700"
                          className="w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="contact-email" className="block text-xs font-semibold mb-1 text-[#374151]">
                          Adres E-mail *
                        </label>
                        <input
                          id="contact-email"
                          name="email"
                          autoComplete="email"
                          type="email"
                          required
                          maxLength={254}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="inwestor@dom.pl"
                          className="w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]"
                        />
                      </div>

                      <div>
                        <label htmlFor="contact-location" className="block text-xs font-semibold mb-1 text-[#374151]">
                          Lokalizacja Inwestycji
                        </label>
                        <input
                          id="contact-location"
                          name="location"
                          type="text"
                          maxLength={120}
                          value={formData.location}
                          onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                          placeholder="np. Warszawa / Konstancin"
                          className="w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-semibold mb-1 text-[#374151]">
                        Wiadomość / Krótki opis założeń projektu
                      </label>
                      <textarea
                        rows={4}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Napisz, jaki jest metraż domu, czy posiadasz już projekt elektryczny i na czym najbardziej Ci zależy (oświetlenie, kamery, kino, rolety)..."
                        className="w-full px-4 py-3 rounded-[2px] text-xs border focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B87333]/60 leading-relaxed bg-[#F9FAFB] border-[#D1D5DB] text-[#111827] focus:border-[#B87333]"
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn-engineering-primary w-full gap-2 cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                    >
                      <Send className="w-4 h-4" />
                      <span>Prześlij Zapytanie do Inżyniera</span>
                    </button>
                    <p className="text-[11px] text-center text-[#6B7280]">
                      * Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). Dane nie są przekazywane firmom marketingowym.
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
