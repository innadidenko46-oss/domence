import React from 'react';
import { Link } from 'react-router-dom';
import { PageHeader } from '../components/PageHeader.tsx';
import { ScenariosSection } from '../components/ScenariosSection.tsx';
import { Seo } from '../components/Seo.tsx';
import { SlidersHorizontal, ArrowRight, Film, BellRing, CheckCircle2 } from 'lucide-react';

export const ScenariosPage: React.FC = () => {

  return (
    <div className="transition-colors duration-300 bg-gray-50 text-gray-900">
      <Seo
        title="Scenariusze — co dom robi za Ciebie — DOMENCE"
        description="Wyjście z domu gasi światło, czujnik pod pralką zakręca wodę, wieczorem dom zapala światła. Przykłady na co dzień."
        canonical="https://domence-o9s1.vercel.app/scenariusze"
      />
      <PageHeader
        badge="Przykłady z życia"
        title="Dom, który robi część rzeczy za Ciebie"
        description="Światło, rolety i ogrzewanie działają same. Sterujesz zwykłym włącznikiem albo telefonem. Gdy pęknie wężyk, woda sama się zakręca."
        icon={<SlidersHorizontal className="w-4 h-4 text-petrol-700" />}
        image="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85"
      />

      {/* Main Scenarios Section Component */}
      <ScenariosSection />

      {/* Multimedia: cinema scene and visitor at the gate */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h2 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-gray-900">
              Multimedia w domu: kino jednym przyciskiem
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Do filmu rolety same się zamykają, a światło gaśnie. Gdy ktoś dzwoni do furtki, widzisz go na panelu w salonie.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="rounded-[2px] border overflow-hidden flex flex-col justify-between bg-gray-50 border-gray-200">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85"
                  alt="Jasny salon z kanapą i lampą"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/40 via-transparent to-transparent" />
              </div>
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-[2px] bg-amber-500/20 text-amber-800 flex items-center justify-center shrink-0">
                      <BellRing className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Gość przy furtce
                      </h3>
                      <div className="text-xs text-amber-700 mt-0.5">Furtka • Panel w domu • Telefon</div>
                    </div>
                  </div>

                  <div className="p-4 pl-5 rounded-[2px] border border-l-4 border-l-amber-500 text-sm leading-relaxed mb-6 bg-white border-gray-200 text-gray-700">
                    <span className="font-bold text-amber-700 text-xs uppercase block mb-1">W praktyce:</span>
                    Otwierasz furtkę z telefonu, kiedy jesteś w pracy albo na urlopie. Gość czeka, a Ty widzisz go na panelu w domu.
                  </div>

                  <div className="space-y-2.5">
                    {[
                      'Furtka otwierana z telefonu, kartą albo kodem',
                      'Gość przy furtce widziany na panelu w salonie',
                      'Brama i garaż otwierane z telefonu',
                    ].map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-petrol-700 mt-0.5 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t flex items-center justify-between border-gray-200">
                  <span className="text-xs text-gray-600">Furtka i brama z telefonu</span>
                  <Link
                    to="/zapytanie"
                    className="inline-flex items-center min-h-11 text-xs font-bold text-amber-700 hover:text-amber-800 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                  >
                    Otrzymaj propozycję dla swojego domu
                  </Link>
                </div>
              </div>
            </div>

            <div className="rounded-[2px] border overflow-hidden flex flex-col justify-between bg-gray-50 border-gray-200">
              <div className="relative h-40 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1000&q=85"
                  alt="Salon wieczorem, okna zasłonięte roletami"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-petrol-950/40 via-transparent to-transparent" />
              </div>
              <div className="p-7 sm:p-8 flex flex-col justify-between flex-1">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-[2px] flex items-center justify-center shrink-0 bg-amber-500/20 text-amber-800">
                      <Film className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                        Kino w salonie
                      </h3>
                      <div className="text-xs mt-0.5 text-amber-700">Rolety • Światło • Ekran</div>
                    </div>
                  </div>

                  <div className="p-4 pl-5 rounded-[2px] border border-l-4 border-l-amber-500 text-sm leading-relaxed mb-6 bg-white border-gray-200 text-gray-700">
                    <span className="font-bold text-xs uppercase block mb-1 text-amber-700">W praktyce:</span>
                    Naciskasz jeden przycisk na ścianie albo w telefonie. Rolety same się zamykają, światło gaśnie, a ekran zjeżdża.
                  </div>

                  <div className="space-y-2.5">
                    {[
                      'Rolety zjeżdżają do końca, nie ma odblasków',
                      'Światło gasnie, zostaje delikatne światło przy podłodze',
                      'Ekran projekcyjny sam zjeżdża do podłogi',
                      'Gość przy furtce widziany na panelu w salonie',
                      'Po filmie ten sam przycisk przywraca zwykłe światło',
                    ].map((feat, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <CheckCircle2 className="w-4 h-4 mt-0.5 shrink-0 text-petrol-700" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t flex items-center justify-between border-gray-200">
                  <span className="text-xs text-gray-600">Sceny do filmu</span>
                  <Link
                    to="/zapytanie"
                    className="inline-flex items-center min-h-11 text-xs font-bold transition-colors text-amber-700 hover:text-amber-800 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                  >
                    Otrzymaj propozycję dla swojego domu
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

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
            to="/zapytanie"
            className="btn-accent self-start md:self-auto focus-visible:ring-2 focus-visible:ring-amber-400 focus-visible:ring-offset-2 focus-visible:ring-offset-petrol-900"
          >
            <span>Otrzymaj propozycję dla swojego domu</span>
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
};
