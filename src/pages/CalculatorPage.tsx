import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { CalculatorSection } from '../components/CalculatorSection.tsx';
import { ClipboardList } from 'lucide-react';
import { PropertyState } from '../types.ts';

export const CalculatorPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const stateParam = searchParams.get('state') as PropertyState | null;

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
    setSearchParams({ state: newState }, { replace: true });
  };

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <PageHeader
        compact
        badge="Zapytanie"
        title="Opowiedz nam o swoim domu"
        description="Zaznacz, co Cię interesuje, i zostaw kontakt — około 2 minut. Oddzwonimy z propozycją dopasowaną do Twojego domu, zwykle w 24 godziny robocze (pon–pt, 8:00–18:00)."
        icon={<ClipboardList className="w-4 h-4 text-petrol-700" />}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
      />

      {/* Enquiry: a few choices, then contact details */}
      <CalculatorSection
        selectedPropertyState={propertyState}
        onStateChange={handleStateChange}
      />
    </div>
  );
};
