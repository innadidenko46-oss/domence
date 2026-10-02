import React from 'react';
import { ShieldCheck, Award, Wrench, UserCheck, Phone, CheckCircle2, FileCheck, HardHat, Clock } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';
import { Link } from 'react-router-dom';

export const TeamStandardsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const certifications = [
    {
      title: 'Shelly Certified Pro Integrator',
      issuer: 'Allterco Robotics / Shelly Europe',
      desc: 'Autoryzowany montaż i konfiguracja modułów szynowych Shelly Pro z bezpośrednim portem LAN RJ45 oraz redundancją 100% offline.',
      badge: 'PRO PARTNER',
      code: '[NUMER CERTYFIKATU]',
    },
    {
      title: 'Hikvision Certified Partner',
      issuer: 'Hikvision Digital Technology Europe',
      desc: 'Certyfikowane projektowanie i instalacja systemów wizyjnych 4K ColorVu, wideodomofonii IP oraz lokalnych rejestratorów NVR DeepinMind.',
      badge: 'PARTNER CCTV',
      code: '[NUMER CERTYFIKATU]',
    },
    {
      title: 'Uprawnienia Państwowe SEP Grupy G1 (E + D)',
      issuer: 'Stowarzyszenie Elektryków Polskich',
      desc: 'Pełne uprawnienia eksploatacji (E) oraz dozoru (D) instalacji elektrycznych i teletechnicznych do 1 kV wraz z pomiarami odbiorczymi.',
      badge: 'PAŃSTWOWE E+D',
      code: '[NUMER UPOWAŻNIEŃ]',
    },
    {
      title: 'Certyfikacja Okablowania Fluke Networks',
      issuer: 'Fluke Networks Calibrated Test',
      desc: 'Pomiary reflektometryczne każdego toru transmisyjnego skrętki CAT6A z protokołem pomiarowym dołączanym do dokumentacji powdrożeniowej.',
      badge: 'ISO/IEC 11801',
      code: '[RAPORT POMIARÓW]',
    },
  ];

  return (
    <section id="o-zespole" className={`py-24 border-t transition-colors ${
      isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-[2px] bg-[#B87333]/10 border border-[#B87333]/30 text-[#B87333] text-xs font-mono font-semibold uppercase tracking-wider mb-4">
            <ShieldCheck className="w-4 h-4 text-[#B87333]" />
            <span>Ludzie, Odpowiedzialność &amp; Standardy</span>
          </div>
          
          <h2 className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] ${
            isDay ? 'text-[#111827]' : 'text-[#F3F4F6]'
          }`}>
            O zespole. Bezpośredni kontakt z inżynierem prowadzącym.
          </h2>

          <p className={`mt-4 text-base sm:text-lg leading-[1.75] font-normal ${
            isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
          }`}>
            W DOMENCE nie trafiasz na infolinię ani anonimowych podwykonawców z łapanki. Każdy projekt od pierwszego szkicu rozdzielnicy po odbiór techniczny prowadzi imiennie dedykowany inżynier elektryk i certyfikowany automatyk.
          </p>
        </div>

        {/* Lead Engineer Spotlight Card + Team Commitments */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Direct Engineer Profile */}
          <div className={`lg:col-span-5 p-7 sm:p-9 rounded-[2px] border flex flex-col justify-between ${
            isDay
              ? 'bg-[#F9FAFB] border-[#E5E7EB] shadow-sm'
              : 'bg-[#202024] border-[#2E2E33] shadow-sm'
          }`}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-[2px] bg-[#27272A] border border-[#3F3F46] flex items-center justify-center shrink-0 relative">
                  <HardHat className="w-8 h-8 text-[#B87333]" />
                  <span className="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#10B981] border-2 border-[#18181B]" title="Inżynier na dyżurze" />
                </div>
                <div>
                  <div className={`text-base font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                    Inż. [Imię i Nazwisko] {/* TODO: wstaw prawdziwe imię i nazwisko inżyniera */}
                  </div>
                  <div className="text-xs text-[#B87333] font-mono mt-0.5">
                    Główny Integrator &amp; Kierownik Wdrożeń
                  </div>
                  <div className={`text-[11px] font-mono ${isDay ? 'text-[#6B7280]' : 'text-[#71717A]'}`}>
                    14 lat doświadczenia w rezydencjach
                  </div>
                </div>
              </div>

              <blockquote className={`text-sm leading-relaxed italic p-4 rounded-[2px] border mb-6 ${
                isDay
                  ? 'bg-white border-[#E5E7EB] text-[#374151]'
                  : 'bg-[#18181B] border-white/5 text-[#D4D4D8]'
              }`}>
                "Znam każdy kabel w Twojej szafie i wiem, dlaczego dana złączka WAGO jest wpięta w tym konkretnym miejscu. Jeśli w niedzielę masz pytanie o nastawy strefy ogrzewania, dzwonisz do mnie na numer bezpośredni, a nie do bota."
              </blockquote>

              <div className="space-y-3 text-xs">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className={isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'}>
                    Osobisty nadzór na budowie i odbiór każdego obwodu
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className={isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'}>
                    Czysty montaż bezpyłowy z odciągiem klasy przemysłowej HEPA
                  </span>
                </div>
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-[#10B981] shrink-0" />
                  <span className={isDay ? 'text-[#374151]' : 'text-[#D4D4D8]'}>
                    Dokumentacja powykonawcza z etykietami termotransferowymi
                  </span>
                </div>
              </div>
            </div>

            <div className={`mt-8 pt-6 border-t flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 ${
              isDay ? 'border-[#E5E7EB]' : 'border-white/10'
            }`}>
              <div className={`text-xs ${isDay ? 'text-[#6B7280]' : 'text-[#71717A]'}`}>
                <span className="font-semibold block text-[#111827] dark:text-white">Bezpośrednia linia:</span>
                +48 22 000 00 00 {/* TODO: wstaw prawdziwy numer */}
              </div>

              <Link
                to="/kontakt"
                className="btn-engineering-primary gap-2 text-center"
              >
                <Phone className="w-3.5 h-3.5" />
                <span>Porozmawiaj z inżynierem</span>
              </Link>
            </div>
          </div>

          {/* Right Column: 4 Real Engineering Certifications */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {certifications.map((cert, idx) => (
              <div
                key={idx}
                className={`p-6 rounded-[2px] border flex flex-col justify-between transition-all ${
                  isDay
                    ? 'bg-white border-[#E5E7EB] hover:border-[#B87333] shadow-sm'
                    : 'bg-[#202024] border-[#2E2E33] hover:border-[#B87333] shadow-sm'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="px-2 py-0.5 rounded-[2px] text-[10px] font-mono font-bold bg-[#B87333]/15 text-[#B87333] border border-[#B87333]/30">
                      {cert.badge}
                    </span>
                    <span className={`text-[10px] font-mono ${isDay ? 'text-[#9CA3AF]' : 'text-[#71717A]'}`}>
                      {cert.code}
                    </span>
                  </div>

                  <h3 className={`text-sm font-bold leading-snug mb-1 ${
                    isDay ? 'text-[#111827]' : 'text-white'
                  }`}>
                    {cert.title}
                  </h3>

                  <div className="text-[11px] font-medium text-[#C27A4E] mb-3">
                    {cert.issuer}
                  </div>

                  <p className={`text-xs leading-relaxed ${
                    isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
                  }`}>
                    {cert.desc}
                  </p>
                </div>

                <div className={`mt-5 pt-3 border-t flex items-center gap-2 text-[11px] font-mono ${
                  isDay ? 'border-[#E5E7EB] text-[#10B981]' : 'border-white/10 text-[#10B981]'
                }`}>
                  <FileCheck className="w-3.5 h-3.5 shrink-0" />
                  <span>Status do potwierdzenia z producentem</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
