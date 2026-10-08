import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ClipboardList } from 'lucide-react';

export const MobileStickyBar: React.FC = () => {

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 md:hidden backdrop-blur-xl border-t p-3 shadow-2xl transition-colors duration-200 bg-gray-50/95 border-gray-200">
      <div className="flex items-center gap-2">
        <Link
          to="/kontakt"
          className="focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2 flex-1 py-3 px-3 rounded-[2px] border text-xs font-semibold flex items-center justify-center gap-2 transition-colors bg-white border-gray-300 text-gray-900 active:bg-gray-100"
        >
          <Phone className="w-4 h-4 text-copper-600" />
          <span>Kontakt</span>
        </Link>

        <Link
          to="/kalkulator"
          className="flex-[1.5] py-3 px-4 rounded-[2px] bg-copper-600 hover:bg-copper-700 text-white font-semibold text-sm flex items-center justify-center gap-2 shadow-sm active:scale-[0.98] transition-all text-center focus-visible:ring-2 focus-visible:ring-copper-500 focus-visible:ring-offset-2"
        >
          <ClipboardList className="w-4 h-4" />
          <span>Dobierz zestaw</span>
        </Link>
      </div>
    </div>
  );
};
