import { lazy, type ComponentType, type ReactElement } from 'react';

// Every page of the site. Each path also needs an entry in src/data/pages.json (title and
// description): the build prerenders exactly those paths and fails when the two lists differ.
const page = (load: () => Promise<Record<string, unknown>>, name: string) =>
  lazy(() => load().then((m) => ({ default: m[name] as ComponentType })));

const HomePage = page(() => import('./pages/HomePage.tsx'), 'HomePage');
const SystemsPage = page(() => import('./pages/SystemsPage.tsx'), 'SystemsPage');
const TeletechnicsPage = page(() => import('./pages/TeletechnicsPage.tsx'), 'TeletechnicsPage');
const ScenariosPage = page(() => import('./pages/ScenariosPage.tsx'), 'ScenariosPage');
const StartPage = page(() => import('./pages/StartPage.tsx'), 'StartPage');
const FaqPage = page(() => import('./pages/FaqPage.tsx'), 'FaqPage');
const EnquiryPage = page(() => import('./pages/EnquiryPage.tsx'), 'EnquiryPage');
const ContactPage = page(() => import('./pages/ContactPage.tsx'), 'ContactPage');
const PrivacyPage = page(() => import('./pages/PrivacyPage.tsx'), 'PrivacyPage');
const LandingPage = lazy(() => import('./pages/LandingPage.tsx').then((m) => ({ default: m.LandingPage })));
export const NotFoundPage = page(() => import('./pages/NotFoundPage.tsx'), 'NotFoundPage');

const landing = (slug: string) => ({ path: `/${slug}`, element: <LandingPage slug={slug} /> });

export const ROUTES: { path: string; element: ReactElement }[] = [
  { path: '/', element: <HomePage /> },
  { path: '/systemy', element: <SystemsPage /> },
  { path: '/teletechnika', element: <TeletechnicsPage /> },
  { path: '/scenariusze', element: <ScenariosPage /> },
  { path: '/jak-zaczac', element: <StartPage /> },
  { path: '/faq', element: <FaqPage /> },
  landing('inteligentny-dom-warszawa'),
  landing('wideodomofon-i-kamery-warszawa'),
  landing('ochrona-przed-zalaniem'),
  landing('automatyka-bez-kucia'),
  { path: '/zapytanie', element: <EnquiryPage /> },
  { path: '/kontakt', element: <ContactPage /> },
  { path: '/polityka-prywatnosci', element: <PrivacyPage /> },
];

// Old addresses that still get shared. vercel.json answers them with a 308 redirect;
// the build checks that both lists match.
export const REDIRECTS: Record<string, string> = {
  '/pakiety': '/jak-zaczac',
  '/multimedia': '/scenariusze',
  '/kalkulator': '/zapytanie',
};
