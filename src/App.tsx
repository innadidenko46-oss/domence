import { HashRouter, Routes, Route } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';
import { CookieBanner } from './components/CookieBanner.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import { NotFoundPage } from './pages/NotFoundPage.tsx';

// Separate Section Pages
import { HomePage } from './pages/HomePage.tsx';
import { SystemsPage } from './pages/SystemsPage.tsx';
import { TeletechnicsPage } from './pages/TeletechnicsPage.tsx';
import { ScenariosPage } from './pages/ScenariosPage.tsx';
import { PackagesPage } from './pages/PackagesPage.tsx';
import { FaqPage } from './pages/FaqPage.tsx';
import { CalculatorPage } from './pages/CalculatorPage.tsx';
import { ContactPage } from './pages/ContactPage.tsx';

function AppContent() {
  return (
    <div className="min-h-screen font-sans selection:bg-copper-500 selection:text-white flex flex-col transition-colors duration-300 bg-gray-50 text-gray-900">
      {/* Persistent Global Navigation */}
      <Navbar />

      {/* Dynamic Route Content */}
      <ErrorBoundary>
      <main className="flex-1 pt-[68px]">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/systemy" element={<SystemsPage />} />
          <Route path="/teletechnika" element={<TeletechnicsPage />} />
          <Route path="/scenariusze" element={<ScenariosPage />} />
          <Route path="/pakiety" element={<PackagesPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/kalkulator" element={<CalculatorPage />} />
          <Route path="/kontakt" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
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
    <HashRouter>
      <ScrollToTop />
      <AppContent />
    </HashRouter>
  );
}
