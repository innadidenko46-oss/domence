import React, { useState, useEffect, useRef } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, Menu, X, ArrowRight, ClipboardList } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [pastHero, setPastHero] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setPastHero(window.scrollY > 520);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const drawerRef = useRef<HTMLDivElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);

  // While the drawer is open: page doesn't scroll, focus stays inside, and goes back to the toggle on close
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    const first = drawerRef.current?.querySelector<HTMLElement>('a, button');
    first?.focus();
    const trap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !drawerRef.current) return;
      const items = [...drawerRef.current.querySelectorAll<HTMLElement>('a, button')];
      if (!items.length) return;
      const firstEl = items[0], lastEl = items[items.length - 1];
      if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
      else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
    };
    document.addEventListener('keydown', trap);
    const toggle = toggleRef.current;
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener('keydown', trap);
      toggle?.focus();
    };
  }, [mobileMenuOpen]);

  // ESC closes mobile drawer
  useEffect(() => {
    if (!mobileMenuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [mobileMenuOpen]);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  // On the home page the hero already shows the main CTA: until the visitor scrolls past it,
  // the header offers the secondary contact link in that slot instead
  const hideHeaderCta = location.pathname === '/' && !pastHero;

  // All sections laid out on a SINGLE level (no dropdowns or hidden submenus)
  const navLinks = [
    { label: 'Automatyka', path: '/systemy' },
    { label: 'Kamery i domofony', path: '/teletechnika' },
    { label: 'Kino w salonie', path: '/multimedia' },
    { label: 'Scenariusze', path: '/scenariusze' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 h-[68px] flex items-center ${
          isScrolled
              ? 'bg-gray-50/95 backdrop-blur-md border-b border-gray-200 shadow-sm'
              : 'bg-gray-50/90 backdrop-blur-sm border-b border-gray-200'}`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2 w-full">
          
          {/* Brand Logo - acts as Home Icon / Button */}
          <Link
            to="/"
            className="flex items-center group shrink-0 active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
            title="DOMENCE - Strona Główna"
            aria-label="DOMENCE - Strona Główna"
          >
            <Logo size="sm" variant={'dark'} showSubtitle={true} />
          </Link>

          {/* Desktop Navigation: ALL ITEMS ON A SINGLE ROW WITHOUT DROPDOWNS */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium text-gray-600">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3 py-3 rounded-[2px] whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'text-amber-700 bg-amber-500/10 font-semibold border border-amber-500/25': 'hover:text-gray-900 hover:bg-gray-100'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0 ml-auto xl:ml-0">
            <Link
              to="/kontakt"
              className={`${hideHeaderCta ? 'flex' : 'flex xl:hidden 2xl:flex'} focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 items-center gap-2 min-h-11 text-sm font-semibold transition-colors px-4 rounded-[2px] border whitespace-nowrap bg-white hover:bg-gray-100 border-gray-300 text-gray-800`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-petrol-700" />
              <span>Zapytaj inżyniera</span>
            </Link>

            <Link
              to="/zapytanie"
              className={`${hideHeaderCta ? 'hidden' : 'flex animate-[rise-in_0.3s_cubic-bezier(0.16,1,0.3,1)] motion-reduce:animate-none'} transition-colors min-h-11 px-4 py-2 rounded-[2px] bg-petrol-700 hover:bg-petrol-800 text-white font-semibold text-sm border border-amber-400/40 active:scale-[0.98] items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2`}
            >
              <ClipboardList className="w-4 h-4" />
              <span>Otrzymaj propozycję dla swojego domu</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Menu Button */}
          <div className="flex xl:hidden items-center gap-1.5">
            <button
              ref={toggleRef}
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 w-11 h-11 flex items-center justify-center rounded-[2px] border bg-gray-100 border-gray-300 text-gray-900"
              aria-label={mobileMenuOpen ? "Zamknij menu" : "Otwórz menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Animated Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.15 } }}
            transition={{ duration: 0.2 }}
            onClick={() => setMobileMenuOpen(false)}
            aria-hidden="true"
            className="fixed inset-0 top-[68px] z-40 bg-petrol-950/40 xl:hidden"
          />
        )}
        {mobileMenuOpen && (
          <motion.div
            key="drawer"
            ref={drawerRef}
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10, transition: { duration: 0.15, ease: [0.55, 0.085, 0.68, 0.53] } }}
            transition={{ duration: 0.22, ease: [0.23, 1, 0.32, 1] }}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu mobilne"
            className="fixed inset-x-0 top-[68px] z-50 border-b p-5 xl:hidden shadow-lg max-h-[calc(100vh-68px)] overflow-y-auto bg-gray-50 border-gray-200 text-gray-900"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-sm font-medium py-3.5 px-3 rounded-[2px] flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-amber-500/15 text-petrol-700 font-bold border border-amber-500/30'
                        : 'text-gray-700 hover:text-gray-900 hover:bg-gray-100'}`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-500" />
                </NavLink>
              ))}

              <div className="pt-3 flex flex-col gap-2 border-t mt-2 border-gray-200">
                <Link
                  to="/zapytanie"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-[2px] bg-petrol-700 hover:bg-petrol-800 text-white font-semibold text-sm flex items-center justify-center gap-2 border border-amber-400/40 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                >
                  <ClipboardList className="w-4 h-4" />
                  <span>Opisz swój dom (2 min)</span>
                </Link>

                <Link
                  to="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 flex items-center justify-center gap-2 py-3 rounded-[2px] border text-sm font-semibold bg-gray-100 border-gray-300 text-gray-700"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-petrol-700" />
                  <span>Zapytaj inżyniera</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
