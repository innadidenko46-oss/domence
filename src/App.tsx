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
const MultiroomGardenPage = lazy(() => import('./pages/MultiroomGardenPage.tsx').then((m) => ({ default: m.MultiroomGardenPage })));
const ScenariosPage = lazy(() => import('./pages/ScenariosPage.tsx').then((m) => ({ default: m.ScenariosPage })));
const PackagesPage = lazy(() => import('./pages/PackagesPage.tsx').then((m) => ({ default: m.PackagesPage })));
const FaqPage = lazy(() => import('./pages/FaqPage.tsx').then((m) => ({ default: m.FaqPage })));
const CalculatorPage = lazy(() => import('./pages/CalculatorPage.tsx').then((m) => ({ default: m.CalculatorPage })));
const ContactPage = lazy(() => import('./pages/ContactPage.tsx').then((m) => ({ default: m.ContactPage })));

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
        <Suspense fallback={<div className="min-h-[60vh]" aria-busy="true" />}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/systemy" element={<SystemsPage />} />
          <Route path="/teletechnika" element={<TeletechnicsPage />} />
          <Route path="/multimedia" element={<MultiroomGardenPage />} />
          <Route path="/scenariusze" element={<ScenariosPage />} />
          <Route path="/pakiety" element={<PackagesPage />} />
          <Route path="/faq" element={<FaqPage />} />
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
