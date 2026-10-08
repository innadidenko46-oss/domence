import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Menu, X, ArrowRight, Calculator, Sun, Moon } from 'lucide-react';
import { Logo } from './Logo.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const isDay = theme === 'day';

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-200 ${
          isDay
            ? isScrolled
              ? 'bg-[#F9FAFB]/95 backdrop-blur-md border-b border-[#E5E7EB] shadow-sm py-2.5'
              : 'bg-[#F9FAFB]/90 backdrop-blur-sm border-b border-[#E5E7EB] py-3.5'
            : isScrolled
              ? 'bg-[#18181B]/95 backdrop-blur-md border-b border-[#27272A] shadow-sm py-2.5'
              : 'bg-[#18181B]/90 backdrop-blur-sm border-b border-[#27272A] py-3.5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-3 sm:px-4 lg:px-6 flex items-center justify-between gap-2">
          
          {/* Brand Logo - acts as Home Icon / Button */}
          <Link
            to="/"
            className="flex items-center group shrink-0 transition-transform active:scale-98"
            title="DOMENCE - Strona Główna"
            aria-label="DOMENCE - Strona Główna"
          >
            <Logo size="sm" variant={isDay ? 'dark' : 'light'} showSubtitle={true} />
          </Link>

          {/* Desktop Navigation: ALL ITEMS ON A SINGLE ROW WITHOUT DROPDOWNS */}
          <nav className={`hidden lg:flex items-center gap-1 xl:gap-2 text-[11px] xl:text-xs font-semibold uppercase tracking-wider ${
            isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
          }`}>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `px-2.5 xl:px-3 py-1.5 rounded-[2px] whitespace-nowrap transition-all duration-150 ${
                    isActive
                      ? isDay
                        ? 'text-[#B87333] bg-[#B87333]/10 font-bold border border-[#B87333]/25'
                        : 'text-[#C27A4E] bg-[#B87333]/15 font-bold border border-[#B87333]/30'
                      : isDay
                        ? 'hover:text-[#111827] hover:bg-[#F3F4F6]'
                        : 'hover:text-[#F4F4F5] hover:bg-[#27272A]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          {/* Desktop Actions + Day/Night Atmosphere Switcher */}
          <div className="hidden sm:flex items-center gap-2 xl:gap-2.5 shrink-0">
            {/* Ambiance Switcher: Day (Dzień) vs Dreamy Dusk (Zmierzch) */}
            <button
              onClick={toggleTheme}
              className={`px-3 py-1.5 rounded-[2px] border text-xs font-medium flex items-center gap-1.5 transition-all cursor-pointer ${
                isDay
                  ? 'bg-[#F3F4F6] hover:bg-[#E5E7EB] border-[#D1D5DB] text-[#374151]'
                  : 'bg-[#27272A] hover:bg-[#3F3F46] border-white/10 text-[#D4D4D8]'
              }`}
              title={isDay ? 'Włącz nastrojowy tryb wieczorny (Zmierzch)' : 'Włącz jasny tryb architektoniczny (Dzień)'}
              aria-label="Przełącz atmosferę dzień / zmierzch"
            >
              {isDay ? (
                <>
                  <Moon className="w-3.5 h-3.5 text-[#334E68]" />
                  <span>Zmierzch</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5 text-[#B87333]" />
                  <span>Dzień</span>
                </>
              )}
            </button>

            <Link
              to="/kontakt"
              className={`flex items-center gap-1.5 text-xs font-semibold transition-colors px-3 py-1.5 rounded-[2px] border whitespace-nowrap ${
                isDay
                  ? 'bg-[#F3F4F6] hover:bg-[#E5E7EB] border-[#D1D5DB] text-[#374151] hover:text-[#B87333]'
                  : 'bg-[#27272A] hover:bg-[#3F3F46] border-white/10 text-[#D4D4D8] hover:text-[#C27A4E]'
              }`}
            >
              <Phone className="w-3.5 h-3.5 text-[#B87333]" />
              <span>Kontakt</span>
            </Link>

            <Link
              to="/kalkulator"
              className="px-4 py-2 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-bold text-xs uppercase tracking-wider transition-colors border border-[#C27A4E]/40 active:scale-98 flex items-center gap-1.5 cursor-pointer whitespace-nowrap shadow-sm"
            >
              <Calculator className="w-3.5 h-3.5" />
              <span>Wycena</span>
            </Link>
          </div>

          {/* Mobile Right Controls: Ambiance Button + Menu Button */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-[2px] border text-xs flex items-center justify-center transition-all ${
                isDay
                  ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#374151]'
                  : 'bg-[#27272A] border-white/10 text-[#B87333]'
              }`}
              aria-label="Przełącz tryb dzień / zmierzch"
            >
              {isDay ? <Moon className="w-4 h-4 text-[#334E68]" /> : <Sun className="w-4 h-4 text-[#B87333]" />}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-[2px] border ${
                isDay
                  ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#111827]'
                  : 'bg-[#27272A] border-white/10 text-[#F4F4F5] hover:text-white'
              }`}
              aria-label="Otwórz menu"
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
            className={`fixed inset-x-0 top-[60px] z-40 border-b p-5 lg:hidden shadow-lg max-h-[calc(100vh-65px)] overflow-y-auto ${
              isDay
                ? 'bg-[#F9FAFB] border-[#E5E7EB] text-[#111827]'
                : 'bg-[#18181B] border-[#27272A] text-[#F3F4F6]'
            }`}
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
                        : isDay
                          ? 'text-[#374151] hover:text-[#111827] hover:bg-[#F3F4F6]'
                          : 'text-[#D4D4D8] hover:text-white hover:bg-[#27272A]'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#71717A]" />
                </NavLink>
              ))}

              <div className={`pt-3 flex flex-col gap-2 border-t mt-2 ${isDay ? 'border-[#E5E7EB]' : 'border-[#27272A]'}`}>
                <Link
                  to="/kalkulator"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-full py-3 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#C27A4E]/40"
                >
                  <Calculator className="w-4 h-4" />
                  <span>Kalkulator Wyceny</span>
                </Link>

                <Link
                  to="/kontakt"
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-center gap-2 py-3 rounded-[2px] border text-xs font-semibold uppercase tracking-wider ${
                    isDay
                      ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#374151]'
                      : 'bg-[#27272A] border-white/10 text-[#D4D4D8]'
                  }`}
                >
                  <Phone className="w-3.5 h-3.5 text-[#B87333]" />
                  <span>Kontakt i Konsultacja</span>
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
