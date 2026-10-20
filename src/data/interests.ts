import { Home, Video, Layers } from 'lucide-react';
import { Interest } from '../types.ts';

// First question everywhere: what the visitor wants. The house stage comes next, on step 2.
export const INTEREST_OPTIONS: {
  value: Interest;
  title: string;
  sub: string;
  icon: typeof Home;
  /** Page that explains it */
  path: string;
  /** Unsplash photo id for the home page card */
  image: string;
  imageAlt: string;
}[] = [
  {
    value: 'dom',
    title: 'Mądry dom',
    sub: 'Światło, rolety, ogrzewanie i ochrona przed zalaniem.',
    icon: Home,
    path: '/systemy',
    image: 'photo-1584622781564-1d987f7333c1',
    imageAlt: 'Salon z roletami na oknach i kominkiem',
  },
  {
    value: 'kamery',
    title: 'Kamery i wideodomofon',
    sub: 'Obraz z kamer w telefonie, rozmowa z furtki i wejście bez kluczy.',
    icon: Video,
    path: '/teletechnika',
    image: 'photo-1600585154526-990dced4db0d',
    imageAlt: 'Elewacja domu wieczorem z oświetlonym wejściem',
  },
  {
    value: 'oba',
    title: 'Jedno i drugie',
    sub: 'Wszystko w jednym planie, od jednej firmy.',
    icon: Layers,
    path: '/scenariusze',
    image: 'photo-1600210492486-724fe5c67fb0',
    imageAlt: 'Jasny salon z dużymi oknami',
  },
];
