import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { TeletechnicsSection } from '../components/TeletechnicsSection.tsx';
import { HikvisionShowcase } from '../components/HikvisionShowcase.tsx';
import { Network, ShieldCheck, ArrowRight, Video, HardDrive } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const TeletechnicsPage: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <div className={`transition-colors duration-300 ${
      isDay ? 'bg-[#F9FAFB] text-[#111827]' : 'bg-[#18181B] text-[#F3F4F6]'
    }`}>
      <PageHeader
        badge="Teletechnika &amp; CCTV"
        title="Monitoring Wizyjny 4K, Bezpieczeństwo i Szafy RACK 19''"
        description="Projektujemy i wykonujemy infrastrukturę teletechniczną dla rezydencji. Monitoring 4K z przeszukiwaniem nagrań, lokalny zapis NVR bez abonamentów i okablowanie strukturalne kat. 6A."
        icon={<Network className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Security & Networks */}
      <section className={`py-12 border-b ${
        isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85"
                  alt="Dyskretna kamera 4K z rozpoznawaniem osób"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-[#B87333] border border-white/10">
                  Dyskrecja na elewacji
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Kamery 4K wtopione w architekturę
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Kompaktowe obudowy w kolorze elewacji z inteligentnym filtrem – natychmiastowa reakcja na ludzi i auta bez fałszywych alarmów od deszczu czy drzew.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                  alt="Szafa RACK i bezpieczny rejestrator danych"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-emerald-400 border border-white/10">
                  Szafa RACK 19"
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Serce Domowej Sieci LAN
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Wszystkie przewody schodzą się do jednej zamykanej szafy technicznej. Certyfikowane patchcordy, switche PoE+ i zasilacz awaryjny UPS.
                </p>
              </div>
            </div>

            <div className={`rounded-[2px] overflow-hidden border group ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1000&q=85"
                  alt="Ilustracja przedstawiająca kobietę z dokumentacją projektu"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-sky-400 border border-white/10">
                  Szybki Roaming Wi-Fi
                </span>
              </div>
              <div className="p-5">
                <h3 className={`font-bold text-base ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                  Zasięg w Ogrodzie i Garażu
                </h3>
                <p className={`text-xs mt-1.5 leading-[1.65] ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                  Sufitowe punkty dostępowe z roamingiem 802.11k/v/r zapewniają nieprzerwane połączenie podczas poruszania się po całej posesji.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Teletechnics Section Component */}
      <TeletechnicsSection />

      {/* Latest Hikvision Series Showcase */}
      <HikvisionShowcase />

      {/* Deep-dive into Local Security vs Cloud Cameras */}
      <section className={`py-16 border-t ${
        isDay ? 'bg-white border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className={`text-2xl sm:text-3xl font-bold tracking-tight ${
              isDay ? 'text-[#111827]' : 'text-white'
            }`}>
              Dlaczego lokalny rejestrator NVR zamiast kamer z obcą chmurą?
            </h2>
            <p className={`mt-2 text-sm sm:text-base leading-[1.7] ${
              isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'
            }`}>
              Część kamer z chmurą wysyła strumień na serwery producenta. W standardzie DOMENCE Twoje prywatne życie pozostaje w Twoim domu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className={`p-7 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/40 border-white/10'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                    Standard DOMENCE: Rejestrator NVR PoE
                  </h3>
                  <span className="text-xs text-emerald-400 font-mono font-semibold">Twoje dane u Ciebie</span>
                </div>
              </div>
              <ul className={`space-y-3 text-xs sm:text-sm ${isDay ? 'text-[#374151]' : 'text-[#D1D5DB]'}`}>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Brak abonamentów:</strong> Nie ponosisz comiesięcznych opłat za przechowywanie nagrań w chmurze.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Prywatność i bezpieczeństwo:</strong> Obraz z kamer nie opuszcza Twojej szafy RACK – nikt postronny nie ma do niego wglądu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Przewodowe zasilanie PoE:</strong> Zasilanie i transmisja 4K odbywają się po jednym odpornym kablu ethernetowym.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span><strong>Dyski WD Purple:</strong> Przystosowane do ciągłego zapisu 24/7; retencja zależy od liczby kamer i bitrate'u.</span>
                </li>
              </ul>
            </div>

            <div className={`p-7 rounded-[2px] border ${
              isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#27272A]/20 border-rose-500/20'
            }`}>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className={`text-lg font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                    Kamery Chmurowe (Consumer Wi-Fi)
                  </h3>
                  <span className="text-xs text-rose-400 font-mono font-semibold">Zależność od dostawcy</span>
                </div>
              </div>
              <ul className={`space-y-3 text-xs sm:text-sm ${isDay ? 'text-[#4B5563]' : 'text-[#9CA3AF]'}`}>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Przechowywanie historii w chmurze zwykle wymaga płatnego abonamentu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Ryzyko wycieku prywatnych nagrań domowników do zagranicznych serwerów.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Zaniki sygnału bezprzewodowego i podatność na zakłócenia fal radiowych.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Bez internetu przestaje działać podgląd zdalny i powiadomienia w chmurze (zapis lokalny zależy od modelu).</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className={`py-12 border-t ${
        isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#9CA3AF] font-mono">Kolejny obszar instalacji:</div>
            <div className={`text-base font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
              Dźwięk Multiroom &amp; Domowa Sala Kinowa
            </div>
          </div>
          <Link
            to="/multimedia"
            className="px-6 py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-medium text-xs uppercase tracking-wider transition-all flex items-center gap-2 shadow-sm"
          >
            <span>Zobacz multimedia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
