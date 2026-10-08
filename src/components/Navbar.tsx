import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowRight, Calculator } from 'lucide-react';
import { Logo } from './Logo.tsx';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  // All sections laid out on a SINGLE level (no dropdowns or hidden submenus)
  const navLinks = [
    { label: 'Automatyka Domowa', path: '/systemy' },
    { label: 'Kamery & Domofony', path: '/teletechnika' },
    { label: 'Multimedia & Kino', path: '/multimedia' },
    { label: 'Scenariusze', path: '/scenariusze' },
    { label: 'Pakiety', path: '/pakiety' },
    { label: 'FAQ', path: '/faq' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 h-[68px] flex items-center ${
          isScrolled
              ? 'bg-[#F9FAFB]/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm'
              : 'bg-[#F9FAFB]/90 backdrop-blur-sm border-b border-[#E5E7EB]'}`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2 w-full">
          
          {/* Brand Logo - acts as Home Icon / Button */}
          <Link
            to="/"
            className="flex items-center group shrink-0 active:scale-95 focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
            title="DOMENCE - Strona Główna"
            aria-label="DOMENCE - Strona Główna"
          >
            <Logo size="sm" variant={'dark'} showSubtitle={true} />
          </Link>

          {/* Desktop Navigation: ALL ITEMS ON A SINGLE ROW WITHOUT DROPDOWNS */}
          <nav className="hidden xl:flex items-center gap-1 xl:gap-2 text-[11px] xl:text-xs font-semibold uppercase tracking-wider text-[#4B5563]">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3 py-1.5 rounded-[2px] whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? 'text-[#B87333] bg-[#B87333]/10 font-bold border border-[#B87333]/25': 'hover:text-[#111827] hover:bg-[#F3F4F6]'}`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
            <Link
              to="/kontakt"
              className="focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 flex items-center gap-1.5 text-xs font-semibold transition-colors px-3 py-1.5 rounded-[2px] border whitespace-nowrap bg-[#F3F4F6] hover:bg-[#E5E7EB] border-[#D1D5DB] text-[#374151] hover:text-[#B87333]"
            >
              <Phone className="w-3.5 h-3.5 text-[#B87333]" />
              <span>Kontakt</span>
            </Link>

            <Link
              to="/kalkulator"
              className="px-4 py-2 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-bold text-xs uppercase tracking-wider transition-colors border border-[#C27A4E]/40 active:scale-95 flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-sm focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Wyceń w kalkulatorze</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Menu Button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 p-2 rounded-[2px] border bg-[#F3F4F6] border-[#D1D5DB] text-[#111827]"
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
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.2 }}
            id="mobile-menu"
            role="dialog"
            aria-label="Menu mobilne"
            className="fixed inset-x-0 top-[68px] z-40 border-b p-5 xl:hidden shadow-lg max-h-[calc(100vh-68px)] overflow-y-auto bg-[#F9FAFB] border-[#E5E7EB] text-[#111827]"
          >
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `text-xs font-semibold uppercase tracking-wider py-2.5 px-3 rounded-[2px] flex items-center justify-between transition-colors ${
                      isActive
                        ? 'bg-[#B87333]/15 text-[#B87333] font-bold border border-[#B87333]/30'
                        : 'text-[#374151] hover:text-[#111827] hover:bg-[#F3F4F6]'}`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#71717A]" />
                </NavLink>
              ))}

              <div className="pt-3 flex flex-col gap-2 border-t mt-2 border-[#E5E7EB]">
                <Link
                  to="/kalkulator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#C27A4E]/40 focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Wyceń w kalkulatorze</span>
                </Link>

                <Link
                  to="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className="focus-visible:ring-2 focus-visible:ring-[#B87333] focus-visible:ring-offset-2 flex items-center justify-center gap-2 py-3 rounded-[2px] border text-xs font-semibold uppercase tracking-wider bg-[#F3F4F6] border-[#D1D5DB] text-[#374151]"
                >
                  <Phone className="w-3.5 h-3.5 text-[#B87333]" />
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
