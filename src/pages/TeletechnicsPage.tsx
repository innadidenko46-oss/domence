import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { TeletechnicsSection } from '../components/TeletechnicsSection.tsx';
import { HikvisionShowcase } from '../components/HikvisionShowcase.tsx';
import { Network, ShieldCheck, ArrowRight, Video, HardDrive } from 'lucide-react';

export const TeletechnicsPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-[#F9FAFB] text-[#111827]">
      <PageHeader
        badge="Kamery i domofony"
        title="Kamery, domofon z kamerą i szybki internet"
        description="Kamery z kolorowym obrazem w nocy, domofon z kamerą (wideodomofon), z którym pogadasz z kurierem przez telefon. Nagrania zapisuje rejestrator nagrań (NVR) w metalowej szafce na sprzęt (RACK) — u Ciebie w domu, bez abonamentu."
        icon={<Network className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Security & Networks */}
      <section className="py-16 border-b bg-[#F3F4F6] border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-[#E5E7EB]">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85"
                  alt="Dyskretna kamera 4K z rozpoznawaniem osób"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-[#E8B07D] border border-white/10">
                  Dyskrecja na elewacji
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-[#111827]">
                  Kamery schowane w elewacji
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed text-[#4B5563]">
                  Małe obudowy w kolorze ściany. Kamera odróżnia człowieka od psa czy gałęzi i nie wysyła fałszywych alarmów.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-[#E5E7EB]">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                  alt="Szafa RACK i bezpieczny rejestrator danych"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-[#E8B07D] border border-white/10">
                  Szafka ze sprzętem
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-[#111827]">
                  Serce domowego internetu
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed text-[#4B5563]">
                  Wszystkie kable schodzą się do jednej zamykanej szafki. Porządek, zasilanie awaryjne i szybki internet.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-[#E5E7EB]">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85"
                  alt="Dom z ogrodem o zmierzchu z szybkim internetem w każdym miejscu"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-[#18181B]/80 backdrop-blur-md text-[11px] font-mono font-semibold text-[#E8B07D] border border-white/10">
                  Szybki internet bez zrywania
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-[#111827]">
                  Zasięg w ogrodzie i garażu
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed text-[#4B5563]">
                  Internet działa w ogrodzie i w garażu. Telefon sam przełącza się między punktami, a rozmowa nie zrywa się.
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
      <section className="py-16 border-t bg-white border-[#E5E7EB]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#111827]">
              Nagrania u Ciebie w domu, nie u obcej firmy
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed max-w-prose text-[#4B5563]">
              Niektóre kamery wysyłają obraz na serwery producenta. U nas nagrania zostają w Twoim domu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-[#B87333]/20 text-[#B87333] flex items-center justify-center">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    Nasz standard: rejestrator nagrań w domu
                  </h3>
                  <span className="text-xs text-[#B87333] font-mono font-semibold">Twoje dane u Ciebie</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#374151]">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                  <span><strong>Bez abonamentu:</strong> nie płacisz co miesiąc za przechowywanie nagrań.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                  <span><strong>Prywatność:</strong> obraz z kamer nie wychodzi z Twojej szafki. Nikt obcy nie ma do niego dostępu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                  <span><strong>Jeden kabel do kamery:</strong> prąd i obraz idą jednym kablem.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-[#B87333] shrink-0 mt-0.5" />
                  <span><strong>Dyski do pracy ciągłej:</strong> zapisują 24 godziny na dobę. Ile dni wstecz zobaczysz, zależy od liczby kamer.</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-[2px] border bg-[#F9FAFB] border-[#E5E7EB]">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-rose-500/20 text-rose-400 flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#111827]">
                    Kamery na Wi-Fi z obcą chmurą
                  </h3>
                  <span className="text-xs text-rose-400 font-mono font-semibold">Zależność od dostawcy</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-[#4B5563]">
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Historia nagrań zwykle wymaga płatnego abonamentu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Pełne archiwum często wymaga dopłaty (sprawdź cennik producenta).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Sygnał Wi-Fi potrafi zrywać, zwłaszcza przez grube ściany.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-rose-400 font-bold shrink-0">✕</span>
                  <span>Bez internetu nie podejrzysz domu z telefonu ani nie dostaniesz powiadomienia.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="py-16 border-t bg-[#0B1F2A] text-white border-[#0B1F2A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-[#E8B07D] font-mono">Kolejny obszar instalacji:</div>
            <div className="text-base font-bold text-white">
              Dźwięk i kino w domu
            </div>
          </div>
          <Link
            to="/multimedia"
            className="gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 inline-flex items-center justify-center py-3.5 px-8 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-bold text-xs uppercase tracking-wider transition-colors"
          >
            <span>Zobacz multimedia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
