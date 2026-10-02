import React, { useState, useEffect } from 'react';
import {
  Layers,
  Network,
  Zap,
  Volume2,
  Sparkles,
  Calculator,
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext.tsx';
import { useTheme } from '../context/ThemeContext.tsx';

export const ChapterNavigation: React.FC = () => {
  const [activeChapter, setActiveChapter] = useState<string>('systemy');
  const { lang } = useLanguage();
  const { theme } = useTheme();
  const isDay = theme === 'day';

  const chapters = [
    {
      id: 'ai-technologie',
      label: lang === 'ua' ? 'ШІ-Технології' : 'Analityka AI',
      icon: Zap,
    },
    {
      id: 'top-scenariusze',
      label: lang === 'ua' ? 'Сценарії Життя' : 'Scenariusze Domowe',
      icon: Sparkles,
    },
    {
      id: 'systemy',
      label: lang === 'ua' ? 'Автоматика Оселі' : 'Automatyka Rezydencji',
      icon: Layers,
    },
    {
      id: 'teletechnika',
      label: lang === 'ua' ? 'Камери & Домофони' : 'Kamery & Domofony',
      icon: Network,
    },
    {
      id: 'multimedia-kino',
      label: lang === 'ua' ? 'Мультимедіа & Кіно' : 'Multimedia & Audio',
      icon: Volume2,
    },
    {
      id: 'kalkulator',
      label: lang === 'ua' ? 'Конфігуратор' : 'Kalkulator Wyceny',
      icon: Calculator,
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveChapter(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -70% 0px' }
    );

    chapters.forEach((ch) => {
      const el = document.getElementById(ch.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToChapter = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav aria-label="Spis działów" className={`sticky top-[58px] z-30 backdrop-blur-md border-y shadow-sm py-2 transition-colors duration-200 ${
      isDay ? 'bg-[#F9FAFB]/95 border-[#E5E7EB]' : 'bg-[#18181B]/95 border-[#27272A]'
    }`}>
      <div className="max-w-[1440px] mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-start sm:justify-center gap-1.5 sm:gap-2 overflow-x-auto no-scrollbar scroll-smooth">
        {chapters.map((ch) => {
          const Icon = ch.icon;
          const isActive = activeChapter === ch.id;

          return (
            <button
              key={ch.id}
              onClick={() => scrollToChapter(ch.id)}
              className={`px-3 py-1.5 rounded-[2px] text-xs font-semibold whitespace-nowrap transition-all flex items-center gap-1.5 cursor-pointer border ${
                isActive
                  ? 'bg-[#B87333] text-white border-[#B87333] shadow-sm font-bold'
                  : isDay
                  ? 'text-[#4B5563] hover:text-[#111827] hover:bg-[#F3F4F6] border-transparent'
                  : 'text-[#9CA3AF] hover:text-white hover:bg-white/5 border-transparent'
              }`}
            >
              <Icon className={`w-3.5 h-3.5 shrink-0 ${isActive ? 'text-white' : 'text-[#B87333]'}`} />
              <span>{ch.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
};
