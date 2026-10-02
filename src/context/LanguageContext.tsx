import React, { createContext, useContext, useState, useEffect } from 'react';

export type SiteLanguage = 'pl' | 'ua';

interface LanguageContextType {
  lang: SiteLanguage;
  setLang: (lang: SiteLanguage) => void;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLangState] = useState<SiteLanguage>(() => {
    try {
      const saved = localStorage.getItem('domence_lang');
      if (saved === 'pl' || saved === 'ua') return saved;
    } catch {
      // ignore
    }
    return 'pl';
  });

  useEffect(() => {
    try {
      localStorage.setItem('domence_lang', lang);
    } catch {
      // ignore
    }
    document.documentElement.lang = lang;
  }, [lang]);

  const toggleLang = () => {
    setLangState((prev) => (prev === 'pl' ? 'ua' : 'pl'));
  };

  const setLang = (newLang: SiteLanguage) => {
    setLangState(newLang);
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = (): LanguageContextType => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
