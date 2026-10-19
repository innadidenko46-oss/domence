import React from 'react';
import { Eye, Check } from 'lucide-react';

interface AtmosphereScene {
  id: 'day' | 'dusk' | 'night';
  time: string;
  name: string;
  title: string;
  description: string;
  image: string;
  features: string[];
}

const SCENES: AtmosphereScene[] = [
  {
    id: 'day',
    time: '12:00 • Południe',
    name: 'Naturalne światło dzienne',
    title: 'Światło, które wspiera koncentrację i chroni przed przegrzaniem',
    description:
      'Czujniki nasłonecznienia na dachu sterują kątem lameli żaluzji fasadowych. Wnętrze zostaje jasne, a słońce nie nagrzewa salonu.',
    image:
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Ochrona przed upałem bez zasłaniania widoku',
      'Neutralne światło do pracy i czytania',
      'Współpraca z pompą ciepła w godzinach mocnego słońca',
    ],
  },
  {
    id: 'dusk',
    time: '19:45 • Złota godzina',
    name: 'Ciepły zmierzch',
    title: 'Spokojne przejście w tryb wypoczynku i prywatności',
    description:
      'Gdy słońce zachodzi, sufitowe światło ustępuje miejsca liniom LED i lampom stołowym. Rolety opuszczają się i dają pełną prywatność.',
    image:
      'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1600&q=85',
    features: [
      'Delikatne podświetlenie wejścia i korytarzy',
      'Ciepła barwa światła, która mniej męczy wzrok',
      'Jeden przycisk przy kanapie przygotowuje wieczór filmowy',
    ],
  },
  {
    id: 'night',
    time: '23:30 • Cisza nocna',
    name: 'Spokojna noc',
    title: 'Orientacja w nocy bez oślepiania domowników',
    description:
      'Wstajesz w nocy do kuchni lub pokoju dziecka? Czujniki włączają tylko ciche światło przy podłodze. Bez ostrego błysku.',
    image:
      'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80',
    features: [
      'Miękkie światło przy podłodze do łazienki i schodów',
      'Czuwanie czujników okien i drzwi',
      'Automatyczne gaszenie zbędnych świateł i ekranów',
    ],
  },
];

export const LightingAtmosphereShowcase: React.FC = () => {
  return (
    <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-12">
          <div className="eyebrow inline-flex items-center gap-2 mb-3">
            <Eye className="w-3.5 h-3.5" />
            <span>Światło i rytm dnia</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-gray-900">
            Jak Twój dom żyje za dnia, o zmierzchu i w nocy.
          </h2>
          <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
            Światło samo dopasowuje się do pory dnia — bez klikania w telefon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SCENES.map((scene) => (
            <article
              key={scene.id}
              className="rounded-[2px] border border-gray-200 bg-white shadow-sm overflow-hidden flex flex-col"
            >
              <img
                src={scene.image}
                alt={`${scene.name} — scena oświetlenia`}
                className="w-full h-52 object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="text-xs font-mono text-amber-700 font-semibold mb-1">
                  {scene.time}
                </div>
                <div className="text-sm font-bold text-gray-900">{scene.name}</div>
                <h3 className="mt-2 text-lg font-bold text-gray-900 leading-snug">
                  {scene.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600">
                  {scene.description}
                </p>
                <ul className="mt-4 space-y-2">
                  {scene.features.map((feat, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-sm text-gray-700">
                      <span className="w-5 h-5 rounded-[2px] bg-amber-500/15 text-amber-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3.5 h-3.5" />
                      </span>
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
