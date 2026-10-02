import React from 'react';
import { ShieldCheck, CheckCircle2, MapPin, Camera } from 'lucide-react';
import { useTheme } from '../context/ThemeContext.tsx';

// TODO: dane poniżej to przykładowe szablony — zastąp je prawdziwymi realizacjami,
// zdjęciami z obiektu i cytatami klientów (wyłącznie za ich pisemną zgodą).
interface RealCaseStudy {
  id: string;
  clientName: string;
  clientRole: string;
  location: string;
  projectType: string;
  imageUrl: string;
  photoTitle: string;
  problemBefore: string;
  solutionImplemented: string;
  measurableResult: string;
  quoteHighlight: string;
  date: string;
}

const CASE_STUDIES: RealCaseStudy[] = [
  {
    id: 'case-piaseczno',
    clientName: 'Tomasz Kamiński',
    clientRole: 'Właściciel domu jednorodzinnego 240 m²',
    location: 'Piaseczno k. Warszawy',
    projectType: 'Kontrola strefy wejścia i monitoring (Hikvision IP + Shelly Pro)',
    imageUrl: '/images/hikvision_gate.svg',
    photoTitle: 'Stacja bramowa wideodomofonu Hikvision ze stali nierdzewnej na betonowym słupku',
    problemBefore:
      'Poprzednia ekipa zostawiła plątaninę kabli w rozdzielnicy i aplikację, która co drugi dzień gubiła połączenie z bramą. Żona bała się wracać po zmroku, bo kamery dawały tylko ciemne, zaszumione plamy.',
    solutionImplemented:
      'DOMENCE uporządkowało szafę w 2 dni robocze, zamontowało stację bramową ze stali nierdzewnej z biometrią twarzy 0.2s oraz kamery Hikvision ColorVu 3.0 działające w 100% lokalnej pętli bez chmury.',
    measurableResult:
      'Zero zawieszeń od 14 miesięcy. Otwieranie bramy trwa 0.8 sekundy z odczytu tablicy rejestracyjnej, a kurier zostawia paczki po zdalnym uchyleniu furtki jednym kliknięciem.',
    quoteHighlight:
      '"Wreszcie system, do którego nie muszę wołać informatyka w niedzielę wieczorem. Działa sam z siebie."',
    date: 'Listopad 2025',
  },
  {
    id: 'case-konstancin',
    clientName: 'dr n. med. Anna Zawadzka',
    clientRole: 'Inwestorka, Rezydencja 380 m²',
    location: 'Konstancin-Jeziorna',
    projectType: 'Przewodowa automatyka rozdzielnicy (Shelly Pro DIN + Szafa RACK 19")',
    imageUrl: '/images/rack_installation.svg',
    photoTitle: 'Szafa teletechniczna RACK z modułami Shelly Pro na szynie DIN i zasilaczem UPS',
    problemBefore:
      'Projektant zaplanował po 5 włączników przy każdych drzwiach – prawdziwa "bateria klawiszy", która szpeciła ściany. Zależało mi na kinie domowym, ciszy w rozdzielnicy i braku awarii.',
    solutionImplemented:
      'Zredukowaliśmy 42 tradycyjne puszki do 8 minimalistycznych paneli dotykowych Shelly Wall Display z termostatem, a sterowanie obwodami przenieśliśmy do modułów Shelly Pro w rozdzielnicy RACK.',
    measurableResult:
      'Ściany są wolne od chaosu przełączników. Scena filmowa uruchamia się jednym dotknięciem, a woda w razie wycieku zamyka się poniżej 3 sekund z natychmiastowym powiadomieniem PUSH.',
    quoteHighlight:
      '"Inżynierska precyzja, która oszczędziła mi kłótni z architektem. Czysty montaż bez grama pyłu na nowych parkietach."',
    date: 'Styczeń 2026',
  },
  {
    id: 'case-lomianki',
    clientName: 'Michał Rybicki',
    clientRole: 'Przedsiębiorca (branża logistyczna)',
    location: 'Łomianki Dolne',
    projectType: 'Montaż bez kucia ścian (Shelly Plus 1PM + Pomiar Zużycia Energii)',
    imageUrl: '/images/shelly_box.svg',
    photoTitle: 'Montaż modułu Shelly Plus 1PM w puszce 60mm za włącznikiem światła',
    problemBefore:
      'Fotowoltaika produkowała prąd, który w 70% oddawałem do sieci po niekorzystnych stawkach, a wykończone płytki i gładzie wykluczały jakiekolwiek prucie ścian pod kable.',
    solutionImplemented:
      'Bezpyłowy montaż mikromodułów Shelly Plus 1PM w puszkach pod włącznikami oraz 3-fazowego analizatora Shelly 3EM-63T Gen3 w rozdzielnicy.',
    measurableResult:
      'Autokonsumpcja zielonej energii wzrosła z 31% do 79%. Rachunki za prąd spadły o 430 zł miesięcznie bez wywiercenia ani jednej nowej dziury w ścianie.',
    quoteHighlight:
      '"Liczby mówią same za siebie: instalacja zwróci się w 18 miesięcy, a mieszkanie wygląda dokładnie tak samo jak przed montażem."',
    date: 'Luty 2026',
  },
  {
    id: 'case-wilanow',
    clientName: 'Arch. Paweł Wiśniewski',
    clientRole: 'Inwestor i architekt, Dom stodoła 310 m²',
    location: 'Warszawa Wilanów',
    projectType: 'Monitoring CCTV 4K ColorVu zintegrowany z bryłą budynku',
    imageUrl: '/images/hikvision_facade.svg',
    photoTitle: 'Dyskretna kamera Hikvision ColorVu wtopiona w podbitkę elewacji',
    problemBefore:
      'Klienci architekta odrzucali monitoring, bo typowe białe kamery przemysłowe wyglądały na elewacji nowoczesnej willi jak tanie punkty ze stacji benzynowej.',
    solutionImplemented:
      'Wdrożenie matowo-czarnych kamer Hikvision ColorVu 4K AcuSense wpuszczonych w podbitkę dachową bez widocznych peszli ani puszek natynkowych.',
    measurableResult:
      'Pełna identyfikacja twarzy i pojazdów w nocy w kolorze (obiektyw F1.0), zero fałszywych alarmów od liści czy deszczu i nienaganna estetyka bryły.',
    quoteHighlight:
      '"Pierwszy system bezpieczeństwa, który nie niszczy kompozycji architektonicznej nowoczesnego domu."',
    date: 'Marzec 2026',
  },
];

export const HumanTestimonialsSection: React.FC = () => {
  const { theme } = useTheme();
  const isDay = theme === 'day';

  return (
    <section className={`py-24 border-t transition-colors ${
      isDay ? 'bg-[#F9FAFB] border-[#E5E7EB]' : 'bg-[#18181B] border-[#27272A]'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#B87333] mb-2">
            <ShieldCheck className="w-4 h-4 text-[#10B981]" />
            <span>Przykłady Wdrożeń • Mierzalne Wyniki</span>
          </div>
          <h2 className={`font-display text-3xl sm:text-4xl font-bold tracking-tight ${
            isDay ? 'text-[#111827]' : 'text-[#F3F4F6]'
          }`}>
            Nie obiecujemy cudów. Pokazujemy fakty z domów naszych klientów.
          </h2>
          <p className={`mt-3 text-sm sm:text-base leading-relaxed ${
            isDay ? 'text-[#4B5563]' : 'text-[#A1A1AA]'
          }`}>
            Każde wdrożenie to konkretny problem właściciela, inżynierskie rozwiązanie oparte na modułach Shelly Europe i Hikvision oraz mierzalny wynik w złotówkach, sekundach i zaoszczędzonym stresie.
          </p>
        </div>

        {/* 2x2 Bento Grid with Full-Width Visual Cards - Max 4px Radius */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className={`rounded-[2px] border overflow-hidden flex flex-col justify-between transition-all ${
                isDay
                  ? 'bg-white border-[#E5E7EB] shadow-sm hover:border-[#B87333]'
                  : 'bg-[#202024] border-[#2E2E33] hover:border-[#B87333] shadow-sm'
              }`}
            >
              <div>
                {/* Visual Frame: High-Fidelity Architectural Photography Viewport */}
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black/80 border-b border-white/10 group">
                  <img
                    src={cs.imageUrl}
                    alt={cs.photoTitle}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-102"
                  />
                  
                  {/* Viewfinder HUD Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/40 pointer-events-none flex flex-col justify-between p-4">
                    <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#C27A4E]">
                      <span className="flex items-center gap-1.5 bg-black/75 backdrop-blur-sm px-2 py-0.5 rounded-[2px] border border-white/10">
                        <Camera className="w-3.5 h-3.5 text-[#10B981]" />
                        <span>FOTOGRAFIA REALIZACJI</span>
                      </span>
                    </div>

                    <div className="bg-black/85 backdrop-blur-sm p-3 rounded-[2px] border border-white/10 text-white">
                      <div className="font-semibold text-xs text-slate-100">
                        {cs.photoTitle}
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body Content & Engineering Quote */}
                <div className="p-6">
                  <div className="text-[#B87333] font-display text-base font-bold leading-relaxed mb-4">
                    {cs.quoteHighlight}
                  </div>

                  {/* Problem -> Solution -> Result Breakdown */}
                  <div className="space-y-2.5 text-xs">
                    <div className={`p-3 rounded-[2px] border ${
                      isDay ? 'bg-[#FEF2F2] border-[#FECACA] text-[#991B1B]' : 'bg-[#1F1719] border-[#7F1D1D]/40 text-[#FCA5A5]'
                    }`}>
                      <span className="font-bold block mb-0.5">
                        Problem przed montażem:
                      </span>
                      <span className={isDay ? 'text-[#7F1D1D]' : 'text-[#FECACA]'}>
                        {cs.problemBefore}
                      </span>
                    </div>

                    <div className={`p-3 rounded-[2px] border ${
                      isDay ? 'bg-[#F0F9FF] border-[#BAE6FD] text-[#075985]' : 'bg-[#141F28] border-[#0369A1]/40 text-[#7DD3FC]'
                    }`}>
                      <span className="font-bold block mb-0.5">
                        Wdrożone rozwiązanie:
                      </span>
                      <span className={isDay ? 'text-[#0369A1]' : 'text-[#BAE6FD]'}>
                        {cs.solutionImplemented}
                      </span>
                    </div>

                    <div className={`p-3 rounded-[2px] border ${
                      isDay ? 'bg-[#F0FDF4] border-[#BBF7D0] text-[#166534]' : 'bg-[#132219] border-[#15803D]/40 text-[#86EFAC]'
                    }`}>
                      <span className="font-bold block mb-0.5">
                        Mierzalny wynik / efekt:
                      </span>
                      <span className={isDay ? 'text-[#15803D]' : 'text-[#BBF7D0]'}>
                        {cs.measurableResult}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Client Footer */}
              <div className="px-6 pb-6 pt-2">
                <div className={`pt-4 border-t flex items-center justify-between text-xs ${
                  isDay ? 'border-[#E5E7EB]' : 'border-[#2E2E33]'
                }`}>
                  <div>
                    <div className={`font-bold ${isDay ? 'text-[#111827]' : 'text-white'}`}>
                      {cs.clientName}
                    </div>
                    <div className={`text-[11px] ${isDay ? 'text-[#6B7280]' : 'text-[#71717A]'}`}>
                      {cs.clientRole}
                    </div>
                  </div>
                  <div className={`text-[11px] font-mono text-right flex items-center gap-1 ${
                    isDay ? 'text-[#6B7280]' : 'text-[#A1A1AA]'
                  }`}>
                    <MapPin className="w-3.5 h-3.5 text-[#B87333]" />
                    <span>{cs.location}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Guarantee Note */}
        <div className={`mt-10 p-4 rounded-[2px] border text-center text-xs ${
          isDay ? 'bg-[#F3F4F6] border-[#D1D5DB] text-[#374151]' : 'bg-[#202024] border-[#2E2E33] text-[#D4D4D8]'
        }`}>
          <span>
            Chcesz porozmawiać z naszym klientem z Twojej okolicy przed podpisaniem umowy? Na życzenie udostępniamy bezpośredni kontakt referencyjny za zgodą inwestora.
          </span>
        </div>

      </div>
    </section>
  );
};
