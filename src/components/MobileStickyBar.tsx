import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Calculator } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

export const MobileStickyBar: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <div className={`fixed bottom-0 inset-x-0 z-40 md:hidden backdrop-blur-xl border-t p-3 shadow-2xl transition-colors duration-200 ${
      isDay ? 'bg-[#F9FAFB]/95 border-[#E5E7EB]' : 'bg-[#18181B]/95 border-[#27272A]'
    }`}>
      <div className="flex items-center gap-2">
        <Link
          to="/kontakt"
          className={`flex-1 py-3 px-3 rounded-[2px] border text-xs font-semibold flex items-center justify-center gap-2 transition-colors ${
            isDay
              ? 'bg-white border-[#D1D5DB] text-[#111827] active:bg-[#F3F4F6]'
              : 'bg-[#27272A] border-white/10 text-white active:bg-[#3F3F46]'
          }`}
        >
          <Phone className="w-4 h-4 text-[#B87333]" />
          <span>Kontakt</span>
        </Link>

        <Link
          to="/kalkulator"
          className="flex-[1.5] py-3 px-4 rounded-[2px] bg-[#B87333] hover:bg-[#A36034] text-white font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm active:scale-95 transition-all text-center"
        >
          <Calculator className="w-4 h-4" />
          <span>Wycena Kosztorysu</span>
        </Link>
      </div>
    </div>
  );
};
