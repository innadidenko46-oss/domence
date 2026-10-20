import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { TeletechnicsSection } from '../components/TeletechnicsSection.tsx';
import { CameraShowcase } from '../components/CameraShowcase.tsx';
import { ShieldCheck, ArrowRight, HardDrive, Cloud } from 'lucide-react';
import { CTA } from '../config/site.ts';

const AT_HOME = [
  ['Bez abonamentu', 'nie płacisz co miesiąc za przechowywanie nagrań.'],
  ['Prywatność', 'obraz z kamer nie wychodzi z Twojej szafki na sprzęt.'],
  ['Jeden kabel do kamery', 'prąd i obraz idą jednym kablem, więc obraz się nie zacina.'],
  ['Dyski do pracy ciągłej', 'zapisują całą dobę. Ile dni wstecz zobaczysz, zależy od liczby kamer.'],
];

const IN_CLOUD = [
  'Historia nagrań często wymaga płatnego abonamentu.',
  'Kamera na Wi-Fi potrafi tracić zasięg, zwłaszcza za grubymi ścianami.',
  'Bez internetu nie zapisuje nagrań w chmurze.',
];

export const TeletechnicsPage: React.FC = () => (
  <div className="bg-gray-50 text-gray-900">
    <PageHeader
      badge="Kamery i wideodomofon"
      title="Kamery i wideodomofon, z nagraniami w domu"
      description="Kamery z kolorowym obrazem w nocy i wideodomofon, z którym porozmawiasz z kurierem przez telefon. Nagrania zapisuje rejestrator w szafce na sprzęt, u Ciebie w domu, bez abonamentu."
      image="photo-1600585154340-be6161a56a0c"
    />

    <TeletechnicsSection />
    <CameraShowcase />

    {/* Recordings at home vs. in a cloud */}
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-24 border-t bg-white border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-10">
          <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">Nagrania u Ciebie w domu, nie w obcej chmurze</h2>
          <p className="mt-2 text-base leading-relaxed max-w-prose text-gray-600">
            Wiele kamer na Wi-Fi wysyła obraz na serwery producenta. Montujemy kamery na kablu z rejestratorem w domu.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-7 rounded-[2px] border-2 border-amber-500 bg-gray-50">
            <h3 className="flex items-center gap-3 text-lg font-bold text-gray-900">
              <HardDrive className="w-5 h-5 text-petrol-700" aria-hidden="true" />
              Rejestrator nagrań w domu
            </h3>
            <ul className="mt-5 space-y-3 text-base text-gray-700">
              {AT_HOME.map(([title, text]) => (
                <li key={title} className="flex items-start gap-2.5">
                  <ShieldCheck className="w-5 h-5 text-petrol-700 shrink-0 mt-0.5" aria-hidden="true" />
                  <span>
                    <strong className="text-gray-900">{title}:</strong> {text}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-7 rounded-[2px] border bg-gray-50 border-gray-200">
            <h3 className="flex items-center gap-3 text-lg font-bold text-gray-900">
              <Cloud className="w-5 h-5 text-gray-600" aria-hidden="true" />
              Kamery na Wi-Fi z nagraniami w chmurze
            </h3>
            <ul className="mt-5 space-y-3 text-base text-gray-700">
              {IN_CLOUD.map((t) => (
                <li key={t} className="flex items-start gap-2.5">
                  <span className="mt-2.5 w-1.5 h-1.5 rounded-full bg-gray-500 shrink-0" aria-hidden="true" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>

    <section className="py-14 lg:py-16 bg-petrol-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <p className="font-display text-2xl font-bold">Zacznij od wejścia i kamer</p>
          <p className="mt-1 text-base text-gray-200">Światło czy rolety dołożysz później, bez wymiany tego, co już masz.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-3">
          <Link
            to="/zapytanie?chce=kamery"
            className="btn-accent focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-900"
          >
            {CTA.label}
          </Link>
          <Link
            to="/scenariusze"
            className="min-h-11 inline-flex items-center justify-center gap-2 px-5 rounded-[2px] border border-white/25 text-white font-semibold text-sm hover:bg-white/10 focus-visible:ring-2 focus-visible:ring-amber-400"
          >
            <span>Scenariusze</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  </div>
);
