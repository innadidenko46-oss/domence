import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { MotionConfig } from 'motion/react';
import { lazy, Suspense } from 'react';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
const NotFoundPage = lazy(() => import('./pages/NotFoundPage.tsx').then((m) => ({ default: m.NotFoundPage })));

// Separate Section Pages
const HomePage = lazy(() => import('./pages/HomePage.tsx').then((m) => ({ default: m.HomePage })));
const SystemsPage = lazy(() => import('./pages/SystemsPage.tsx').then((m) => ({ default: m.SystemsPage })));
const TeletechnicsPage = lazy(() => import('./pages/TeletechnicsPage.tsx').then((m) => ({ default: m.TeletechnicsPage })));
// Multimedia page removed — content merged into /scenariusze
const ScenariosPage = lazy(() => import('./pages/ScenariosPage.tsx').then((m) => ({ default: m.ScenariosPage })));
const StartPage = lazy(() => import('./pages/StartPage.tsx').then((m) => ({ default: m.StartPage })));
const LandingPage = lazy(() => import('./pages/LandingPage.tsx').then((m) => ({ default: m.LandingPage })));
const FaqPage = lazy(() => import('./pages/FaqPage.tsx').then((m) => ({ default: m.FaqPage })));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage.tsx').then((m) => ({ default: m.CalculatorPage })));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx').then((m) => ({ default: m.ContactPage })));

// Shown for a split second while a page's code loads: the shape of a page header
function PageSkeleton() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 min-h-[60vh]" aria-busy="true" aria-label="Ładowanie strony">
      <div className="animate-pulse motion-reduce:animate-none space-y-5 max-w-3xl">
        <div className="h-3 w-40 rounded-[2px] bg-gray-200" />
        <div className="h-10 w-4/5 rounded-[2px] bg-gray-200" />
        <div className="h-10 w-3/5 rounded-[2px] bg-gray-200" />
        <div className="h-4 w-full rounded-[2px] bg-gray-100" />
        <div className="h-4 w-2/3 rounded-[2px] bg-gray-100" />
      </div>
    </div>
  );
}

function AppContent() {
  return (
    <div className="min-h-screen font-sans selection:bg-amber-500 selection:text-white flex flex-col transition-colors duration-300 bg-gray-50 text-gray-900">
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          // Move focus instead of changing the URL
          e.preventDefault();
          document.getElementById('main')?.focus();
        }}
      >
        Przejdź do treści
      </a>

      {/* Persistent Global Navigation */}
      <Navbar />

      {/* Dynamic Route Content */}
      <ErrorBoundary>
      <main id="main" tabIndex={-1} className="flex-1 pt-[68px] focus:outline-none">
        <Suspense fallback={<PageSkeleton />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/systemy" element={<SystemsPage />} />
          <Route path="/teletechnika" element={<TeletechnicsPage />} />
          <Route path="/multimedia" element={<Navigate to="/scenariusze" replace />} />
          <Route path="/scenariusze" element={<ScenariosPage />} />
          <Route path="/jak-zaczac" element={<StartPage />} />
          <Route path="/pakiety" element={<Navigate to="/jak-zaczac" replace />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/inteligentny-dom-warszawa" element={<LandingPage slug="inteligentny-dom-warszawa" />} />
          <Route path="/wideodomofon-i-kamery-warszawa" element={<LandingPage slug="wideodomofon-i-kamery-warszawa" />} />
          <Route path="/ochrona-przed-zalaniem" element={<LandingPage slug="ochrona-przed-zalaniem" />} />
          <Route path="/automatyka-bez-kucia" element={<LandingPage slug="automatyka-bez-kucia" />} />
          <Route path="/zapytanie" element={<CalculatorPage />} />
          {/* Old address kept working for links already shared */}
          <Route path="/kalkulator" element={<Navigate to="/zapytanie" replace />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        </Suspense>
      </main>
      </ErrorBoundary>

      {/* Global Footer */}
      <Footer />

      {/* Persistent Mobile Quick-Bar */}
      <MobileStickyBar />

      {/* Cookie Consent Banner */}
      <CookieBanner />
    </div>
  );
}

export default function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL.replace(/\/$/, '')}>
      <MotionConfig reducedMotion="user">
      <ScrollToTop />
      <AppContent />
      </MotionConfig>
    </BrowserRouter>
  );
}
