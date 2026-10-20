import { Suspense } from 'react';
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { ScrollToTop } from './components/ScrollToTop.tsx';
import { RouteMeta } from './components/RouteMeta.tsx';
import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';
import { MobileStickyBar } from './components/MobileStickyBar.tsx';
import { ErrorBoundary } from './components/ErrorBoundary.tsx';
import { ROUTES, REDIRECTS, NotFoundPage } from './routes.tsx';

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

// Keeps ?chce=… and other answers when an old address forwards to the new one
function Redirect({ to }: { to: string }) {
  const { search } = useLocation();
  return <Navigate to={`${to}${search}`} replace />;
}

// The whole site without the router, so the browser (BrowserRouter) and the build
// (StaticRouter, see entry-server.tsx) render the same tree.
export function AppShell() {
  return (
    <div className="min-h-screen font-sans selection:bg-amber-500 selection:text-white flex flex-col bg-gray-50 text-gray-900">
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

      <ScrollToTop />
      <RouteMeta />
      <Navbar />

      <ErrorBoundary>
        <main id="main" tabIndex={-1} className="flex-1 pt-[68px] focus:outline-none">
          <Suspense fallback={<PageSkeleton />}>
            <Routes>
              {ROUTES.map(({ path, element }) => (
                <Route key={path} path={path} element={element} />
              ))}
              {Object.entries(REDIRECTS).map(([from, to]) => (
                <Route key={from} path={from} element={<Redirect to={to} />} />
              ))}
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </Suspense>
        </main>
      </ErrorBoundary>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
