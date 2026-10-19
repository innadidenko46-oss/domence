import React from 'react';
import { Link } from 'react-router-dom';
import { Wrench, ArrowRight, CheckCircle2, Lock, Cpu, Phone, MapPin, BookOpen } from 'lucide-react';
import { ProcessSection } from '../components/ProcessSection.tsx';
import { ProofSection } from '../components/ProofSection.tsx';
import { TopSellingScenariosSection } from '../components/TopSellingScenariosSection.tsx';
import { FAQ_ITEMS } from '../data/content.ts';
import { INTEREST_OPTIONS } from '../data/interests.ts';
import { OfflineDemo } from '../components/OfflineDemo.tsx';
import { BrandArcs } from '../components/BrandArcs.tsx';
import { Reveal } from '../components/Reveal.tsx';
import { Seo } from '../components/Seo.tsx';
import { SITE, telHref } from '../config/site.ts';

export const HomePage: React.FC = () => {

  const chapters = [
    {
      id: 'systemy',
      path: '/systemy',
      title: 'Sterowanie domem: światło, rolety, ogrzewanie',
      subtitle: 'Włączniki i telefon • Z kablami albo bez kucia',
      description:
        'Światło, rolety i ogrzewanie sterowane z włączników na ścianie i z telefonu. Do nowego domu i do gotowego mieszkania.',
      image:
        'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Salon z białymi roletami na oknach i kominkiem',
      cta: 'Zobacz automatykę',
    },
    {
      id: 'teletechnika',
      path: '/teletechnika',
      title: 'Kamery i domofon z kamerą',
      subtitle: 'Kolor w nocy • Rozmowa z furtki w telefonie • Szafka ze sprzętem',
      description:
        'Kamera odróżnia człowieka od kota i nie budzi Cię w nocy bez powodu. Nagrania zostają w domu, a furtkę otworzysz z telefonu.',
      image:
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Nowoczesna elewacja domu wieczorem z oświetlonym wejściem',
      cta: 'Zobacz kamery i domofony',
    },
    {
      id: 'scenariusze',
      path: '/scenariusze',
      title: 'Dom, który sam gasi światło i pilnuje wody',
      subtitle: 'Wyjście z domu • Woda • Światło w nocy • Multimedia',
      description:
        'Jeden przycisk przy drzwiach gasi światła i odcina żelazko. Czujnik pod pralką sam zakręca wodę. Kino w salonie jednym przyciskiem.',
      image:
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
      imageAlt: 'Jasny salon z dużymi oknami i roślinami',
      cta: 'Zobacz scenariusze',
    },
  ];


  return (
    <div className="transition-colors duration-500 bg-white text-gray-800">
      <Seo
        title="DOMENCE — inteligentny dom, kamery i wideodomofony, Warszawa"
        description="Inteligentny dom, kamery i wideodomofony w Warszawie i okolicach. Montaż także bez kucia, dom działa bez internetu, a domowników uczymy obsługi."
        canonical="https://domence-o9s1.vercel.app/"
        ogImage="https://domence-o9s1.vercel.app/images/og-domence.jpg"
      />

      {/* Hero */}
      <section className="relative flex items-center pt-12 pb-20 lg:pt-20 lg:pb-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          <div className="lg:col-span-7 hero-stagger">
            {/* Main Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-5xl 2xl:text-6xl font-extrabold tracking-[-0.015em] leading-[1.05] text-gray-950">
              Nowoczesny dom, którym sterujesz telefonem.{' '}
              <span className="text-amber-600">
                Działa też bez internetu.
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mt-5 text-base sm:text-lg leading-relaxed text-gray-600">
              Światło, rolety, ogrzewanie i kamery — montujemy, ustawiamy i pokazujemy, jak z tego korzystać.
            </p>

            {/* CTA Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Link
                to="/zapytanie"
                className="btn-engineering-primary shadow-sm active:scale-[0.98] text-center focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
              >
                <span>Otrzymaj propozycję dla swojego domu</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                to="/systemy"
                className="btn-secondary shadow-sm focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
              >
                <span>Zobacz, jak to działa</span>
              </Link>
            </div>

            {/* Key Trust Badges */}
            <div className="mt-10 pt-6 border-t grid grid-cols-2 gap-4 text-sm border-gray-200 text-gray-700">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-petrol-700 shrink-0" />
                <span>Działa w domu, bez obcych serwerów</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-petrol-700 shrink-0" />
                <span>Bez abonamentu</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-petrol-700 shrink-0" aria-hidden="true" />
                <span>Warszawa i okolice</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-petrol-700 shrink-0" />
                <span>Czysty montaż</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 hero-media relative">
            <BrandArcs className="hidden lg:block absolute right-0 bottom-0 translate-x-[calc(100%-1rem)] translate-y-[calc(100%-1rem)] w-36 h-36 pointer-events-none" />
            <div className="rounded-[2px] overflow-hidden border border-gray-200 shadow-xl aspect-[4/3] sm:aspect-[16/10] lg:aspect-[4/5]">
              <img
                src={`${import.meta.env.BASE_URL}images/hero-wideodomofon.jpg`}
                alt="Dłoń z telefonem pokazującym obraz z kamery przy furtce, obok drzwi wejściowych panel sterowania domem"
                width={1136}
                height={1408}
                fetchPriority="high"
                className="w-full h-full object-cover object-[35%_55%] lg:object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Visual Solutions Grid with High-Res Photography */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="max-w-3xl mb-14">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-4xl font-extrabold tracking-tight text-gray-900">
              Co montujemy
            </h2>
            <p className="mt-3 text-sm sm:text-base leading-relaxed max-w-prose text-gray-600">
              Urządzenia dobieramy do Twojego domu, np. do wejścia: wideodomofon i kamery, które nagrywają na dysk w domu.
            </p>
          </div>

          {/* Two by two on desktop */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
            {chapters.map((ch) => (
              <Link
                key={ch.id}
                to={ch.path}
                className="focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 group rounded-[2px] border overflow-hidden transition-[transform,box-shadow,border-color] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col justify-between hover:shadow-xl hover:-translate-y-1 active:scale-[0.99] bg-white border-gray-200 hover:border-amber-400 lg:col-span-3"
              >
                {/* Photography Header */}
                <div>
                  <div className="relative overflow-hidden bg-gray-900 h-52 lg:h-64">
                    <img
                      src={ch.image}
                      alt={ch.imageAlt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-[1.04] motion-reduce:transition-none motion-reduce:group-hover:scale-100"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-bold transition-colors text-gray-900 group-hover:text-amber-800">
                      {ch.title}
                    </h3>
                    <div className="text-xs font-semibold mt-1 text-amber-700">
                      {ch.subtitle}
                    </div>

                    <p className="text-sm mt-3 leading-relaxed text-gray-600">
                      {ch.description}
                    </p>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-2">
                  <div className="pt-4 border-t flex items-center justify-between text-xs font-bold transition-colors border-gray-200 text-amber-700 group-hover:text-amber-800">
                    <span>{ch.cta}</span>
                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" />
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Three ways in: what the visitor wants opens the enquiry at step 2 */}
          <div className="mt-14 border-t-2 border-petrol-700 pt-8 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-4">
              <h3 className="font-display text-2xl font-bold text-gray-900">Od czego zaczynasz?</h3>
              <p className="mt-2 text-base leading-relaxed text-gray-600">
                Wybierz, co Cię interesuje, a{'\u00a0'}zapytanie otworzy się z{'\u00a0'}tą odpowiedzią.
              </p>
            </div>
            <div className="lg:col-span-8 grid sm:grid-cols-3 gap-3">
              {INTEREST_OPTIONS.map(({ value, title, sub, icon: Icon }) => (
                <Link
                  key={value}
                  to={`/zapytanie?chce=${value}`}
                  className="group flex flex-col justify-between gap-5 p-5 rounded-[2px] border border-gray-300 bg-white hover:border-petrol-700 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                >
                  <span>
                    <Icon className="w-6 h-6 text-petrol-700" aria-hidden="true" />
                    <span className="block mt-3 font-display text-lg font-bold text-gray-900">{title}</span>
                    <span className="block mt-1 text-sm leading-relaxed text-gray-600">{sub}</span>
                  </span>
                  <ArrowRight className="w-4 h-4 text-petrol-700 transition-transform duration-300 group-hover:translate-x-1 motion-reduce:transition-none" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Why DOMENCE: asymmetric photo mosaic + numbered pillars */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">

          {/* Try it: switch the internet off and see what keeps working */}
          <Reveal className="order-2 lg:order-1 lg:col-span-6">
            <OfflineDemo />
          </Reveal>

          <div className="order-1 lg:order-2 lg:col-span-6">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Jak montujemy i dlaczego to bezpieczne
            </h2>
            <p className="mt-3 text-base leading-relaxed max-w-prose text-gray-600">
              Trzy rzeczy, które robimy inaczej niż zestawy ze sklepu.
            </p>

            <ol className="mt-10 divide-y divide-gray-200 border-y border-gray-200">
              {[
                {
                  icon: Lock,
                  title: 'Prywatność i działanie bez internetu',
                  text: 'Obraz z kamer i dane zostają w Twoim domu. Nic nie wysyłamy na obce serwery i nie płacisz miesięcznego abonamentu.',
                },
                {
                  icon: Cpu,
                  title: 'Porządek w rozdzielnicy',
                  text: 'Moduły montujemy w rozdzielnicy starannie, a każdy obwód ma czytelny opis. Po latach każdy elektryk od razu wie, co jest czym.',
                },
                {
                  icon: Wrench,
                  title: 'Czysty montaż bez kurzu',
                  text: 'Pracujemy też w gotowych, umeblowanych domach. Wiercimy z odsysaniem pyłu, zabezpieczamy podłogi i sprzątamy po sobie.',
                },
              ].map((pillar, i) => {
                const Icon = pillar.icon;
                return (
                  <li key={pillar.title} className="py-7 grid grid-cols-[auto_1fr] gap-x-5">
                    <span className="font-display text-sm font-semibold tabular-nums text-petrol-700 pt-1">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="flex items-center gap-2.5 text-lg font-bold text-gray-900">
                        <Icon className="w-5 h-5 text-amber-600 shrink-0" aria-hidden="true" />
                        {pillar.title}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-gray-600 max-w-prose">
                        {pillar.text}
                      </p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </div>
      </section>

      {/* Four everyday scenarios */}
      <TopSellingScenariosSection />

      {/* 5-Step Process */}
      <ProcessSection />

      {/* Finished homes and client words: hidden until real ones are added in site.ts */}
      <ProofSection />

      {/* Who we work with and what you get: sets expectations so decided buyers self-select */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-gray-100 border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <div className="eyebrow mb-3">Czy to dla Ciebie?</div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Najlepiej pomożemy, gdy wiesz, że chcesz mądry dom
            </h2>
          </div>

          <Reveal className="grid lg:grid-cols-2 gap-10 lg:gap-16">
            <div>
              <h3 className="font-display text-lg font-bold text-gray-900">Najlepiej pasujemy, jeśli:</h3>
              <ul className="mt-5 space-y-4">
                {[
                  'Budujesz dom albo remontujesz mieszkanie w Warszawie i okolicach.',
                  'Chcesz, żeby światło, rolety, ogrzewanie i kamery działały razem — i bez internetu.',
                  'Planujesz montaż w najbliższych miesiącach.',
                  'Wolisz jedną firmę od wszystkiego zamiast kilku wykonawców.',
                ].map((t) => (
                  <li key={t} className="flex items-start gap-3 text-base leading-relaxed text-gray-700">
                    <CheckCircle2 className="w-5 h-5 text-petrol-700 shrink-0 mt-0.5" aria-hidden="true" />
                    <span>{t}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="lg:border-l lg:border-gray-300 lg:pl-16">
              <h3 className="font-display text-lg font-bold text-gray-900">Co dostajesz:</h3>
              <ol className="mt-5 space-y-4">
                {[
                  ['Bezpłatna rozmowa i sprawdzenie domu', 'Przyjeżdżamy, oglądamy instalację i słuchamy, czego potrzebujesz.'],
                  ['Plan i cena na piśmie', 'Wiesz, co i za ile montujemy, zanim zaczniemy.'],
                  ['Czysty montaż', 'Bez kurzu, z zabezpieczeniem podłóg i sprzątaniem po sobie.'],
                  ['Nauka obsługi dla domowników', 'Każdy w domu wie, jak zapalić światło, otworzyć furtkę i podejrzeć kamery.'],
                  ['Bezpłatna konfiguracja', 'Ustawiamy sceny i aplikacje pod Twój dom.'],
                ].map(([title, text], i) => (
                  <li key={title} className="grid grid-cols-[auto_1fr] gap-x-4">
                    <span className="font-display text-sm font-semibold tabular-nums text-amber-700 pt-0.5">0{i + 1}</span>
                    <div>
                      <div className="text-base font-bold text-gray-900">{title}</div>
                      <p className="mt-1 text-sm leading-relaxed text-gray-600">{text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </Reveal>

          <p className="mt-12 pt-6 border-t border-gray-300 text-sm leading-relaxed text-gray-600 max-w-2xl">
            Dopiero zbierasz informacje? Zajrzyj do{' '}
            <Link to="/faq" className="font-semibold text-amber-700 underline underline-offset-2 hover:text-amber-800">
              pytań i odpowiedzi
            </Link>
            {' '}— odezwij się, gdy będziesz gotowy na rozmowę o swoim domu.
          </p>
        </div>
      </section>

      {/* FAQ teaser: the three questions people ask first */}
      <section className="pt-16 pb-20 lg:pt-24 lg:pb-28 border-t bg-white border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16">
          <div className="lg:col-span-4">
            <div className="eyebrow mb-3">Najczęstsze pytania</div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">
              Zanim napiszesz
            </h2>
            <Link
              to="/faq"
              className="mt-6 inline-flex items-center gap-2 min-h-11 text-sm font-semibold text-amber-700 hover:text-amber-800 transition-colors focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2 rounded-[2px]"
            >
              <span>Wszystkie pytania i odpowiedzi</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <Reveal className="lg:col-span-8">
          <dl className="border-y border-gray-300 divide-y divide-gray-300">
            {FAQ_ITEMS.slice(0, 3).map((item) => (
              <div key={item.question} className="py-6">
                <dt className="font-display text-lg font-bold text-gray-900">{item.question}</dt>
                <dd className="mt-2 text-base leading-relaxed text-gray-700 max-w-[34rem]">{item.simpleAnswer}</dd>
              </div>
            ))}
          </dl>
          </Reveal>
        </div>
      </section>

      {/* Direct Contact Banner */}
      <section className="relative pt-16 pb-20 lg:pt-24 lg:pb-28 border-t overflow-hidden bg-petrol-900 text-white border-petrol-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
          <div className="flex items-start gap-5">
            {SITE.engineer.name && SITE.engineer.photo && (
              <img
                src={`${import.meta.env.BASE_URL}${SITE.engineer.photo}`}
                alt={SITE.engineer.name}
                className="w-20 h-20 rounded-[2px] object-cover shrink-0 border border-white/20"
                loading="lazy"
              />
            )}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
                Planujesz budowę albo remont?
              </h2>
              <p className="text-base text-gray-300 mt-2 max-w-xl">
                Napisz, co chcesz mieć w domu. Odezwiemy się z konkretną propozycją, telefonicznie albo tylko e-mailem — zwykle w 24 godziny robocze (pon–pt, 8:00–18:00). Dokładny dobór robimy po bezpłatnym sprawdzeniu domu.
              </p>
              {SITE.engineer.name && (
                <p className="mt-3 text-sm text-gray-300">
                  Rozmawiasz z: <span className="font-semibold text-white">{SITE.engineer.name}</span>, {SITE.engineer.role.toLowerCase()}
                </p>
              )}
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2 shrink-0">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                to="/zapytanie"
                className="btn-accent active:scale-[0.98] focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
              >
                <span>Otrzymaj propozycję dla swojego domu</span>
              </Link>

              {SITE.phone && (
                <a
                  href={telHref(SITE.phone)}
                  className="min-h-11 inline-flex items-center gap-2 px-6 py-3.5 rounded-[2px] bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
                >
                  <Phone className="w-4 h-4" aria-hidden="true" />
                  {SITE.phone}
                </a>
              )}
              <Link
                to="/kontakt"
                className="min-h-11 inline-flex items-center px-6 py-3.5 rounded-[2px] bg-white/10 hover:bg-white/20 text-white font-semibold text-sm transition-all border border-white/20 focus-visible:ring-2 focus-visible:ring-petrol-600 focus-visible:ring-offset-2"
              >
                Zapytaj inżyniera
              </Link>
            </div>
            <p className="text-xs text-gray-400 flex items-center gap-1.5">
              <span>Odpowiadamy w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00). Bez spamu.</span>
            </p>
          </div>
        </div>
      </section>

    </div>
  );
};
