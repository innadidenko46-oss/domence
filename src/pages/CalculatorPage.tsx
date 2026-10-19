import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { CalculatorSection } from '../components/CalculatorSection.tsx';
import { ClipboardList } from 'lucide-react';
import { PropertyState, Interest } from '../types.ts';

export const CalculatorPage: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  // ?chce=dom|kamery|oba opens the enquiry at step 2; ?etap=budowa|gotowy presets the stage.
  // Old links with ?state=… still work: "security" meant cameras, the rest was the stage.
  const legacy = searchParams.get('state');
  const chce = searchParams.get('chce');
  const etap = searchParams.get('etap');
  const initialInterest: Interest | undefined =
    chce === 'dom' || chce === 'kamery' || chce === 'oba' ? chce : legacy === 'security' ? 'kamery' : undefined;
  const initialStage: PropertyState | undefined =
    etap === 'budowa' || legacy === 'deweloperski' ? 'deweloperski' : etap === 'gotowy' || legacy === 'retro' ? 'retro' : undefined;

  const handleInterestChange = (i: Interest) => {
    const next = new URLSearchParams(searchParams);
    next.delete('state');
    next.set('chce', i);
    setSearchParams(next, { replace: true });
  };

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <PageHeader
        compact
        badge="Zapytanie"
        title="Opowiedz nam o swoim domu"
        description="Zaznacz, co Cię interesuje, i zostaw kontakt — około 2 minut. Odezwiemy się z propozycją dopasowaną do Twojego domu, telefonicznie albo tylko e-mailem, zwykle w 24 godziny robocze (pon–pt, 8:00–18:00)."
        icon={<ClipboardList className="w-4 h-4 text-petrol-700" />}
        image="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85"
      />

      {/* Enquiry: a few choices, then contact details */}
      <CalculatorSection
        initialInterest={initialInterest}
        initialStage={initialStage}
        onInterestChange={handleInterestChange}
      />
    </div>
  );
};
