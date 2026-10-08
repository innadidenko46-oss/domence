import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { CalculatorSection } from '../components/CalculatorSection.tsx';
import { Calculator } from 'lucide-react';
import { PropertyState } from '../types.ts';

export const CalculatorPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stateParam = searchParams.get('state') as PropertyState | null;
  const isDay = true;

  const [propertyState, setPropertyState] = useState<PropertyState>(
    stateParam && ['deweloperski', 'retro', 'security', 'commercial'].includes(stateParam)
      ? stateParam
      : 'retro'
  );

  useEffect(() => {
    if (stateParam && ['deweloperski', 'retro', 'security', 'commercial'].includes(stateParam)) {
      setPropertyState(stateParam);
    }
  }, [stateParam]);

  const handleStateChange = (newState: PropertyState) => {
    setPropertyState(newState);
    setSearchParams({ state: newState });
  };

  return (
    <div className={`transition-colors duration-300 ${
      isDay ? 'bg-[#F9FAFB] text-[#111827]' : 'bg-[#18181B] text-[#F3F4F6]'
    }`}>
      <PageHeader
        badge="Krótka ankieta"
        title="Krótka ankieta: dobierzemy zestaw pod Twój dom"
        description="3 pytania + kontakt (ok. 2 minuty). Bez cen na stronie — po ankiecie oddzwonimy z konkretną propozycją. Odpowiadamy w 24 godziny robocze (pon–pt, 8:00–18:00)."
        icon={<Calculator className="w-4 h-4 text-[#B87333]" />}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=85"
      />

      {/* Main Calculator Component */}
      <CalculatorSection
        selectedPropertyState={propertyState}
        onStateChange={handleStateChange}
      />
    </div>
  );
};
