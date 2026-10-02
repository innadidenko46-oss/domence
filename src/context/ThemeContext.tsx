import React, { createContext, useContext, useState, useEffect } from 'react';

export type SiteTheme = 'dusk' | 'day';

interface ThemeContextType {
  theme: SiteTheme;
  toggleTheme: () => void;
  setTheme: (theme: SiteTheme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<SiteTheme>(() => {
    try {
      const saved = localStorage.getItem('domence_theme');
      if (saved === 'day' || saved === 'dusk') return saved;
    } catch {
      // ignore
    }
    return 'dusk';
  });

  useEffect(() => {
    try {
      localStorage.setItem('domence_theme', theme);
    } catch {
      // ignore
    }
    const root = document.documentElement;
    if (theme === 'day') {
      root.classList.add('theme-day');
      root.classList.remove('theme-dusk');
    } else {
      root.classList.add('theme-dusk');
      root.classList.remove('theme-day');
    }
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dusk' ? 'day' : 'dusk'));
  };

  const setTheme = (newTheme: SiteTheme) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      <div className={theme === 'day' ? 'theme-day text-slate-800 bg-[#F8FAFC]' : 'theme-dusk text-slate-200 bg-[#040A10]'}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
