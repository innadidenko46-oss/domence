import { Home, Video, Layers } from 'lucide-react';
import { Interest } from '../types.ts';

// First question: what the visitor wants. The house stage comes next, on step 2.
export const INTEREST_OPTIONS: { value: Interest; title: string; sub: string; icon: typeof Home }[] = [
  {
    value: 'dom',
    title: 'Mądry dom',
    sub: 'Światło, rolety, ogrzewanie i\u00a0ochrona przed zalaniem.',
    icon: Home,
  },
  {
    value: 'kamery',
    title: 'Kamery i\u00a0wideodomofon',
    sub: 'Obraz z\u00a0kamer w\u00a0telefonie, rozmowa z\u00a0furtki i\u00a0wejście bez kluczy.',
    icon: Video,
  },
  {
    value: 'oba',
    title: 'Jedno i\u00a0drugie',
    sub: 'Wszystko w\u00a0jednym planie, od jednej firmy.',
    icon: Layers,
  },
];
