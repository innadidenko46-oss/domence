import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { CalculatorSection } from '../components/CalculatorSection.tsx';
import { Calculator } from 'lucide-react';
import { PropertyState } from '../types.ts';
import { useTheme } from '../context/ThemeContext.tsx';

export const CalculatorPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stateParam = searchParams.get('state') as PropertyState | null;
  const { theme } = useTheme();
  const isDay = theme === 'day';

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
        badge="Konfigurator Inwestycji"
        title="Wycena instalacji: kosztorys sprzętu i montażu"
        description="Wybierz stan nieruchomości, metraż i pożądane moduły automatyki, wideodomofonu oraz monitoringu wideo. Otrzymasz szacunkowy kosztorys ryczałtowy bez ukrytych kosztów."
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
