import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { ScenariosSection } from '../components/ScenariosSection.tsx';
import { SlidersHorizontal, ArrowRight } from 'lucide-react';

export const ScenariosPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <PageHeader
        badge="Przykłady z życia"
        title="Dom, który robi część rzeczy za Ciebie"
        description="Światło, rolety i ogrzewanie działają same. Sterujesz zwykłym włącznikiem albo telefonem. Gdy pęknie wężyk, woda sama się zakręca."
        icon={<SlidersHorizontal className="w-4 h-4 text-petrol-700" />}
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
      />

      {/* Main Scenarios Section Component */}
      <ScenariosSection />

      {/* What happens when something stops working */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <h2 className="lg:col-span-4 font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
            Co, jeśli coś przestanie działać?
          </h2>
          <dl className="lg:col-span-8 grid sm:grid-cols-3 gap-x-8 gap-y-8">
            <div className="border-t-2 border-petrol-700 pt-4">
              <dt className="font-display text-lg font-bold text-gray-900">Włączniki działają zawsze</dt>
              <dd className="mt-2 text-base leading-relaxed text-gray-600">Światło i rolety obsłużysz zwykłym włącznikiem, także gdy telefon się rozładuje albo zniknie internet.</dd>
            </div>
            <div className="border-t-2 border-petrol-700 pt-4">
              <dt className="font-display text-lg font-bold text-gray-900">Bez internetu dom robi swoje</dt>
              <dd className="mt-2 text-base leading-relaxed text-gray-600">Harmonogramy, sceny i czujniki działają w domu. Internet jest potrzebny tylko do sterowania z daleka.</dd>
            </div>
            <div className="border-t-2 border-petrol-700 pt-4">
              <dt className="font-display text-lg font-bold text-gray-900">Po przerwie w prądzie</dt>
              <dd className="mt-2 text-base leading-relaxed text-gray-600">Gdy prąd wraca, wszystko samo startuje, a światła nie zapalają się w środku nocy.</dd>
            </div>
          </dl>
        </div>
      </section>

      <section className="pt-16 pb-20 lg:pt-20 lg:pb-24 bg-petrol-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-bold">Od czego zacząć w Twoim domu?</h2>
            <p className="mt-2 text-base text-gray-300 max-w-xl">Nowy dom, gotowe mieszkanie albo najpierw wejście i kamery: zobacz, co zwykle robimy.</p>
          </div>
          <Link
            to="/jak-zaczac"
            className="btn-accent self-start md:self-auto focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-900"
          >
            <span>Zobacz, jak zacząć</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};
