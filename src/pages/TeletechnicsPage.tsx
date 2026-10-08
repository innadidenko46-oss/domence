import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { TeletechnicsSection } from '../components/TeletechnicsSection.tsx';
import { HikvisionShowcase } from '../components/HikvisionShowcase.tsx';
import { Network, ShieldCheck, ArrowRight, Video, HardDrive, X } from 'lucide-react';

export const TeletechnicsPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <PageHeader
        badge="Kamery i domofony"
        title="Kamery, domofon z kamerą i szybki internet"
        description="Kamery z kolorowym obrazem w nocy, domofon z kamerą (wideodomofon), z którym pogadasz z kurierem przez telefon. Nagrania zapisuje rejestrator nagrań (NVR) w metalowej szafce na sprzęt (RACK) — u Ciebie w domu, bez abonamentu."
        icon={<Network className="w-4 h-4 text-copper-600" />}
        image="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Visual Atmosphere Showcase for Security & Networks */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-b bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-[1.6fr_1fr_1fr] gap-6">
            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85"
                  alt="Dyskretna kamera 4K z rozpoznawaniem osób"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-navy-950/80 backdrop-blur-md text-xs font-mono font-semibold text-copper-200 border border-white/10">
                  Dyskrecja na elewacji
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-gray-900">
                  Kamery schowane w elewacji
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed text-gray-600">
                  Małe obudowy w kolorze ściany. Kamera odróżnia człowieka od psa czy gałęzi i nie wysyła fałszywych alarmów.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85"
                  alt="Szafa RACK i bezpieczny rejestrator danych"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-navy-950/80 backdrop-blur-md text-xs font-mono font-semibold text-copper-200 border border-white/10">
                  Szafka ze sprzętem
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-gray-900">
                  Serce domowego internetu
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed text-gray-600">
                  Wszystkie kable schodzą się do jednej zamykanej szafki. Porządek, zasilanie awaryjne i szybki internet.
                </p>
              </div>
            </div>

            <div className="rounded-[2px] overflow-hidden border shadow-sm group bg-white border-gray-200">
              <div className="h-48 overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85"
                  alt="Dom z ogrodem o zmierzchu z szybkim internetem w każdym miejscu"
                  loading="lazy"
                  className="w-full h-full object-cover duration-500 filter brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-3 py-1 rounded-[2px] bg-navy-950/80 backdrop-blur-md text-xs font-mono font-semibold text-copper-200 border border-white/10">
                  Szybki internet bez zrywania
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-bold text-base text-gray-900">
                  Zasięg w ogrodzie i garażu
                </h3>
                <p className="text-sm mt-1.5 leading-relaxed text-gray-600">
                  Internet działa w ogrodzie i w garażu. Telefon sam przełącza się między punktami, a rozmowa nie zrywa się.
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
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Nagrania u Ciebie w domu, nie u obcej firmy
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Niektóre kamery wysyłają obraz na serwery producenta. U nas nagrania zostają w Twoim domu.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="p-7 rounded-[2px] border bg-gray-50 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-copper-500/20 text-copper-600 flex items-center justify-center">
                  <HardDrive className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Nasz standard: rejestrator nagrań w domu
                  </h3>
                  <span className="text-xs text-copper-600 font-mono font-semibold">Twoje dane u Ciebie</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-700">
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper-600 shrink-0 mt-0.5" />
                  <span><strong>Bez abonamentu:</strong> nie płacisz co miesiąc za przechowywanie nagrań.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper-600 shrink-0 mt-0.5" />
                  <span><strong>Prywatność:</strong> obraz z kamer nie wychodzi z Twojej szafki. Nikt obcy nie ma do niego dostępu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper-600 shrink-0 mt-0.5" />
                  <span><strong>Jeden kabel do kamery:</strong> prąd i obraz idą jednym kablem.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck className="w-4 h-4 text-copper-600 shrink-0 mt-0.5" />
                  <span><strong>Dyski do pracy ciągłej:</strong> zapisują 24 godziny na dobę. Ile dni wstecz zobaczysz, zależy od liczby kamer.</span>
                </li>
              </ul>
            </div>

            <div className="p-7 rounded-[2px] border bg-gray-50 border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-[2px] bg-rose-500/20 text-rose-600 flex items-center justify-center">
                  <Video className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Kamery na Wi-Fi z obcą chmurą
                  </h3>
                  <span className="text-xs text-rose-600 font-mono font-semibold">Zależność od dostawcy</span>
                </div>
              </div>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Historia nagrań zwykle wymaga płatnego abonamentu.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Pełne archiwum często wymaga dopłaty (sprawdź cennik producenta).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Sygnał Wi-Fi potrafi zrywać, zwłaszcza przez grube ściany.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <X className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>Bez internetu nie podejrzysz domu z telefonu ani nie dostaniesz powiadomienia.</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Next Area Banner */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-navy-900 text-white border-navy-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="text-xs text-copper-200 font-mono">Kolejny obszar instalacji:</div>
            <div className="text-base font-bold text-white">
              Kino w salonie
            </div>
          </div>
          <Link
            to="/multimedia"
            className="gap-2 shadow-sm focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 inline-flex items-center justify-center py-3.5 px-8 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-semibold text-sm transition-colors"
          >
            <span>Zobacz multimedia</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};
