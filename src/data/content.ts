import {
  SmartModule,
  PackageOffer,
  LifeScenario,
  TeletechnicService,
  FaqItem,
  ShellyProCapability,
  HikvisionProductLine,
} from '../types.ts';

export const SHELLY_PRO_CAPABILITIES: ShellyProCapability[] = [
  {
    id: 'cap-lighting',
    title: 'Oświetlenie nastrojowe i ściemnianie (tunable white i HCL)',
    category: 'lighting',
    badge: 'Human Centric Lighting',
    description:
      'Ściemnianie od ok. 1% do 100% (PWM, zależnie od źródła światła), z ograniczeniem widocznego migotania. Regulacja temperatury barwowej (1800K ciepły bursztyn do 6500K światło dzienne) dopasowana do dobowego rytmu człowieka.',
    proAdvantage:
      'Moduły Shelly Pro Dimmer 1/2PM na szynę DIN z portem LAN RJ45 sterują bezpośrednio obwodami oświetleniowymi 230V i szynoprzewodami z centralnej rozdzielnicy.',
    shellyAdvantage:
      'Moduły dopuszkowe Shelly Plus Dimmer montowane za włącznikami w puszkach 60mm pozwalają na automatyzację istniejących lamp z minimalną ingerencją w tynki, z odciągiem pyłu.',
    scenariosExample:
      'Rano światło łagodnie narasta, imitując ciepły blask wschodu słońca. W nocy czujnik w podłodze zapala subtelne światło cokołowe 1800K na 5%, by nie rozbudzać wzroku.',
    features: [
      'Ściemnianie od ok. 1% do 100% (PWM, zależnie od źródła światła)',
      'Tunable White (regulacja barwy 1800K – 6500K)',
      'Dedykowane sceny relaksu, czytania, kolacji i kina',
      'Eliminacja tętnienia i ochrona wzroku',
    ],
  },
  {
    id: 'cap-blinds',
    title: 'Automatyka rolet, żaluzji fasadowych i zasłon (sun-tracking)',
    category: 'blinds',
    badge: 'Pozycja i kąt żaluzji',
    description:
      'Inteligentne sterowanie roletami i żaluzjami fasadowymi. System reguluje położenie zgodnie z pozycją słońca na niebie, wpuszczając naturalne światło i ograniczając nagrzewanie pokoju.',
    proAdvantage:
      'Moduły Shelly Pro 2PM na szynę DIN z bezpośrednim kablem LAN RJ45, pomiarem poboru energii i autokalibracją obciążenia silnika z ochroną przed zablokowaniem.',
    shellyAdvantage:
      'Mikromoduły Shelly Plus 2PM w puszkach pod tradycyjnymi włącznikami roletowymi z obsługą harmonogramów wschodów i zachodów słońca.',
    scenariosExample:
      'Po wypowiedzeniu „Chcę poćwiczyć jogę” rolety zamykają się, dając pełną prywatność. O poranku uchylają się powoli, by wpuścić pierwsze promienie słońca.',
    features: [
      'Śledzenie kąta słońca (Sun Tracking) zapobiegające upałom',
      'Ciche budzenie naturalnym światłem poranka',
      'Automatyczne zamykanie o zmierzchu lub po wyjściu z domu',
      'Ochrona przed silnym wiatrem ze stacji pogodowej',
    ],
  },
  {
    id: 'cap-climate',
    title: 'Klimat strefowy, ogrzewanie podłogowe i rekuperacja',
    category: 'climate',
    badge: 'Komfort i oszczędność',
    description:
      'Niezależna temperatura w każdym pomieszczeniu. Algorytmy PWM sterują bezszelestnymi siłownikami rozdzielacza podłogówki, klimakonwektorami i wentylacją mechaniczną.',
    proAdvantage:
      'Sterowniki Shelly Pro 4PM montowane w szafce rozdzielacza podłogówki z bezpośrednim sterowaniem pętlami grzewczymi i kontrolą obciążenia pomp obiegowych.',
    shellyAdvantage:
      'Bezprzewodowe sensory temperatury i wilgotności Shelly Plus H&T z e-papierowym wyświetlaczem oraz głowice termostatyczne Shelly BLU TRV na grzejnikach.',
    scenariosExample:
      'W sypialni utrzymywane jest rześkie 18.5°C do głębokiego snu, a w łazience 23°C. Podczas wietrzenia okna ogrzewanie w danym pokoju wyłącza się automatycznie.',
    features: [
      'Strefowa regulacja temperatury w każdym pokoju',
      'Algorytm bezwładności podłogówki zapobiegający przegrzewaniu',
      'Automatyczne wyłączenie grzania przy otwartym oknie (kontaktron)',
      'Monitorowanie jakości powietrza (CO2, VOC, wilgotność)',
    ],
  },
  {
    id: 'cap-sensors',
    title: 'Czujniki ruchu: światło zapala się, gdy wchodzisz',
    category: 'sensors',
    badge: 'Czujniki ruchu i okien',
    description:
      'Małe czujniki ruchu zapalają światło, gdy wchodzisz do korytarza, łazienki czy garderoby, i gaszą je, gdy wychodzisz. Mierzą też jasność, więc w dzień światło się nie włącza.',
    proAdvantage:
      'Czujniki działają w domu, bez internetu, i reagują od razu.',
    shellyAdvantage:
      'Bezprzewodowe czujniki montujemy w kilka minut, bez kucia ścian. Bateria wystarcza na długo.',
    scenariosExample:
      'Wstajesz w nocy do łazienki — światło przy podłodze zapala się samo, a po chwili gaśnie.',
    features: [
      'Światło zapala się, gdy wchodzisz, i gaśnie, gdy wychodzisz',
      'Pomiar jasności: w dzień czujnik nie włącza światła',
      'Czujniki w oknach i drzwiach: wiesz, co jest otwarte',
      'Montaż bez kucia ścian',
    ],
  },
  {
    id: 'cap-interface',
    title: 'Minimalistyczne panele dotykowe i sterowanie domem',
    category: 'interface',
    badge: 'Panele dotykowe',
    description:
      'Jeden panel ścienny zamiast rzędu 6 włączników: zastępuje wszystkie klawisze, termostat i sterownik rolet.',
    proAdvantage:
      'Szklane panele dotykowe Shelly Wall Display zintegrowane bezpośrednio z siecią domową, wyświetlające temperaturę, światło i rolety.',
    shellyAdvantage:
      'Mikromoduły Shelly współpracują z dowolnym wybranym przez architekta tradycyjnym osprzętem klawiszowym (np. Jung LS990, Schneider Sedna, Berker Q.7).',
    scenariosExample:
      'Wypowiedz na głos „Chcę poćwiczyć jogę” do asystenta lub naciśnij jeden klawisz „Scena Relaks” przy wejściu do pokoju.',
    features: [
      'Dotykowe panele ścienne 4" z podglądem kamer i klimatu',
      'Współpraca z dowolnymi włącznikami klawiszowymi na rynku',
      'Sterowanie głosowe przez lokalnego asystenta głosowego; asystenci chmurowi wymagają internetu',
      'Nowoczesna aplikacja na smartfony i tablety domowników',
    ],
  },
];

export const HIKVISION_PRODUCTS: HikvisionProductLine[] = [
  {
    id: 'hik-colorvu',
    series: 'Kamera z kolorowym obrazem w nocy',
    category: 'cctv_colorvu',
    tagline: 'Kolorowy, ostry obraz przez całą noc',
    keyTech: 'Obiektyw o super-aperturze F1.0 + matryca 4K Ultra HD 1/1.2" CMOS',
    bestUse: 'Elewacja budynku, drzwi wejściowe, strefa wjazdu, ciągi komunikacyjne',
    highlights: [
      'Pełnokolorowy obraz o zmierzchu i w nocy bez sztucznego naświetlania',
      'Smart Hybrid Light: dyskretny tryb IR, który kamera automatycznie przełącza na miękkie światło białe po wykryciu człowieka',
      'Rozdzielczość 4K (8 Megapikseli) z kompresją H.265+ oszczędzającą miejsce na dysku',
      'Metalowa obudowa IK10 (wandaloodporna) i IP67 (odporność na mróz i ulewy)',
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-acusense',
    series: 'Kamera, która odstrasza światłem i dźwiękiem',
    category: 'cctv_acusense',
    tagline: 'Odróżnia ludzi i auta od zwierząt, a intruza odstrasza syreną',
    keyTech: 'Klasyfikacja celów Człowiek / Pojazd + zintegrowany stroboskop i głośnik audio',
    bestUse: 'Wejście do budynku, brama wjazdowa, strefa garażu, ochrona przed intruzami',
    highlights: [
      'Precyzyjne odróżnianie ludzi i samochodów od zwierząt, kołyszących się gałęzi czy ulewnego deszczu',
      'Live Guard: wbudowany stroboskop i komunikat głosowy ("Strefa chroniona, proszę opuścić teren") odstraszający intruza przy próbie podejścia pod budynek',
      'Dwukierunkowe audio: możliwość rozmowy przez kamerę bezpośrednio z poziomu telefonu',
      'Natychmiastowe powiadomienia PUSH ze zdjęciem zdarzenia na smartfon',
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-tandemvu',
    series: 'Kamera z szerokim widokiem i zoomem',
    category: 'cctv_tandemvu',
    tagline: 'Widzisz całe podwórko, a zoom sam podąża za osobą',
    keyTech: 'Kanał panoramiczny do ogólnego widoku + moduł obrotowy PTZ z auto-trackingiem',
    bestUse: 'Teren wokół domu, wejście główne, brama wjazdowa i podjazd',
    highlights: [
      'Górny obiektyw stale monitoruje całą przestrzeń 180° – ograniczenie martwych stref w monitorowanym obszarze',
      'Dolny moduł PTZ z zoomem optycznym 32x automatycznie namierza i podąża za poruszającą się osobą (Smart Tracking 3.0)',
      'Odczytywanie tablic rejestracyjnych pojazdów wjeżdżających na posesję',
      'Zastępuje kilka tradycyjnych kamer statycznych w jednym punkcie montażowym',
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-intercom-modular',
    series: 'Panel przy furtce z kamerą',
    category: 'intercom_modular',
    tagline: 'Elegancka stacja bramowa ze stali nierdzewnej lub aluminium anodowanego',
    keyTech: 'Kamera 2MP Fisheye 180° WDR + moduły zbliżeniowe Mifare/NFC/Bluetooth + zamek szyfrowy',
    bestUse: 'Furtka wejściowa, brama frontowa domu, główne wejście do budynku',
    highlights: [
      'Modułowa budowa: zestawienie modułu kamery z klawiaturą PIN, czytnikiem breloków i ekranem lokatorów',
      'Szerokokątna kamera 180° widzi całą sylwetkę osoby stojącej przed furtką oraz paczkę na ziemi',
      'Bezpośrednie sterowanie elektrozaczepem furtki i automatyką bramy wjazdowej z dwóch niezależnych przekaźników',
      'Wandaloodporna obudowa IK08/IK09 odporna na trudne warunki atmosferyczne od -40°C do +60°C',
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-minmoe-face',
    series: 'Otwieranie drzwi twarzą',
    category: 'intercom_face',
    tagline: 'Otwieranie furtki i drzwi za pomocą biometrii twarzy bez kluczy',
    keyTech: 'Algorytm Deep Learning Face Recognition z podwójną kamerą antyspoofing 3D',
    bestUse: 'Furtka wejściowa, drzwi główne do domu, wejście do strefy prywatnej',
    highlights: [
      'Wchodzisz do domu z siatkami z zakupami bez szukania kluczy – stacja rozpoznaje Twoją twarz i otwiera drzwi',
      'Rozpoznawanie z ochroną antyspoofingową utrudnia otwarcie zdjęciem czy filmem (zgodnie z deklaracją producenta)',
      'Kamera z doświetleniem IR działa niezawodnie w kompletnych ciemnościach i w pełnym słońcu',
      'Możliwość generowania tymczasowych kodów QR na smartfon dla gości i kurierów',
    ],
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-android-screen',
    series: 'Ekran w domu do domofonu i kamer',
    category: 'intercom_android',
    tagline: 'Dotykowy ekran do rozmów z furtką, podglądu kamer i sterowania domem',
    keyTech: 'System Android + aplikacja do domu + podgląd kamer na żywo',
    bestUse: 'Ściana w holu, kuchnia, salon, gabinet – centralny punkt sterowania domem',
    highlights: [
      'Wielofunkcyjny ekran: oprócz odbierania domofonu uruchamia aplikację sterowania domem (światło, rolety, klimat)',
      'Podgląd na żywo ze wszystkich kamer posesji w pełnej rozdzielczości',
      'Interkom domowy: rozmowy głosowe między pokojami (np. kuchnia z piętrem)',
      'Zasilanie PoE (jeden cienki przewód sieciowy dostarcza prąd i dane)',
    ],
    image: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
  },
];

export const TELETECHNIC_SERVICES: TeletechnicService[] = [
  {
    id: 'cctv_ai',
    title: 'Kamery wokół domu z kolorowym obrazem w nocy',
    subtitle: 'Kamery 4K / 8MP, pełen kolor w nocy F1.0, rozpoznawanie ludzi i aut, eliminacja fałszywych alarmów',
    icon: 'Camera',
    description:
      'Cyfrowa telewizja przemysłowa IP oparta na przetwornikach Hikvision ColorVu z technologią Smart Hybrid Light i analityką AcuSense AI. Obraz w nocy, aktywny stroboskop Live Guard i prywatność bez wysyłania nagrań do chmury.',
    humanExplanation:
      'Kamera rejestruje w nocy obraz w kolorze i odróżnia człowieka oraz auto od zwierzęcia czy gałęzi, dzięki czemu ogranicza zbędne powiadomienia w telefonie. Wszystkie nagrania zapisują się w domowej szafce na twardym dysku, bez opłat abonamentowych.',
    equipment: [
      'Kamery kopułkowe lub tubowe Hikvision 4K ColorVu / AcuSense w obudowach IK10/IP67',
      'Rejestrator NVR Hikvision Pro z dyskami serwerowymi (WD Purple / Seagate SkyHawk) do pracy ciągłej 24/7',
      'Zasilanie PoE (jeden kabel sieciowy dostarcza obraz i prąd do kamery na odległość do 100m)',
      'Aplikacja Hik-Connect: szyfrowany podgląd w telefonie bez stałego publicznego adresu IP i bez opłat',
    ],
    specs: [
      'Przetworniki ultra-czułe F1.0 z technologią ColorVu (obraz w kolorze 24/7)',
      'Algorytmy Deep Learning (filtracja fałszywych alarmów)',
      'Kompresja H.265+ (oszczędność miejsca na twardym dysku)',
      'Odporność na skrajne temperatury od -40°C do +60°C',
    ],
  },
  {
    id: 'access_control',
    title: 'Wideodomofony IP Hikvision Modular i rozpoznawanie twarzy MinMoe',
    subtitle: 'Moduły ze stali nierdzewnej, biometria twarzy, zdalne otwieranie furtki i bramy w smartfonie',
    icon: 'KeyRound',
    description:
      'Kontrola strefy wejścia oparta na modułowych panelach zewnętrznych Hikvision 2nd Gen (DS-KD8003/KD9203) oraz terminalach biometrycznych MinMoe Face Recognition. Wejście bez kluczy, wideorozmowy w aplikacji Hik-Connect i dotykowe ekrany Android w domu.',
    humanExplanation:
      'Wchodzisz na posesję bez szukania kluczy – furtka otwiera się na widok twarzy, na kod lub brelok. Gdy dzwoni kurier, odbierasz wideo na telefonie, uchylasz furtkę i widzisz, jak zostawia paczkę.',
    equipment: [
      'Modułowa stacja bramowa Hikvision ze stali nierdzewnej z kamerą szerokokątną 180° WDR',
      'Terminale rozpoznawania twarzy Hikvision MinMoe z podwójną kamerą antyspoofingową',
      'Dotykowy monitor wewnętrzny 7" lub 10" ze szkłem 2.5D z obsługą aplikacji Smart Home',
      'Atestowane elektrozaczepy rewersyjne i zamki silnikowe ze sterowaniem dwustopniowym',
    ],
    specs: [
      'Rozpoznanie twarzy z ochroną przed zdjęciami (antyspoofing)',
      'Darmowa aplikacja Hik-Connect na nielimitowaną liczbę telefonów domowników',
      'Czasowe kody PIN i kody QR dla kurierów i serwisantów',
      'Współpraca z automatyką: dzwonek po zmroku zapala światło przed furtką',
    ],
  },
  {
    id: 'structured_lan',
    title: 'Szybki internet w całym domu i szafka na sprzęt',
    subtitle: 'Kable do pokoi, Wi-Fi na każdym piętrze i porządek w szafce',
    icon: 'Network',
    description:
      'Projekt i wykonanie okablowania teleinformatycznego. Centralna szafa serwerowa RACK 19", organizery kabli, patchpanele krosowe, zasilacze awaryjne UPS oraz punkty dostępowe Wi-Fi montowane podtynkowo i podsufitowo.',
    humanExplanation:
      'Stabilny internet bez przerywania wideorozmów czy oglądania filmów w 4K. Kable doprowadzone do biurek i telewizorów, a punkty Wi-Fi na suficie przełączają telefon między piętrami i pokojami.',
    equipment: [
      'Szafa RACK 19" z wentylacją termostatyczną i szklanymi drzwiami dymionymi',
      'Przewody teleinformatyczne S/FTP kat. 6A / 7 — do 10 Gbit/s na krótkich odcinkach (kat. 6A, po pomiarach)',
      'Switche zarządzalne PoE+ z podziałem na bezpieczne sieci VLAN (Kamery, IoT, Dom, Goście)',
      'Punkty dostępowe Wi-Fi 6/7 podsufitowe z szybkim roamingiem 802.11k/v/r',
    ],
    specs: [
      'Pomiary toru transmisyjnego miernikiem certyfikacyjnym Fluke',
      'Zasilanie gwarantowane UPS (monitoring i internet działają bez prądu)',
      'Pełna izolacja kamer i automatyki od domowych komputerów (VLAN IoT)',
    ],
  },
  {
    id: 'alarm_sswin',
    title: 'Alarm i ochrona wokół domu',
    subtitle: 'Czujniki w oknach i drzwiach, powiadomienia na telefon i współpraca z automatyką',
    icon: 'ShieldAlert',
    description:
      'Wdrożenia oparte na centralach alarmowych ze zintegrowanymi kontaktronami okiennymi, czujkami kurtynowymi zewnętrznymi i czujkami dualnymi PIR+MW. Współpraca z kamerami Hikvision AcuSense.',
    humanExplanation:
      'Czujniki okienne pracują podwójnie: w nocy pilnują domu przed włamaniem, a w dzień wyłączają grzejnik przy wietrzeniu. Kiedy uzbrajasz alarm kodem przy wyjściu, system gasi światła i zamyka rolety.',
    equipment: [
      'Centrala alarmowa ze zintegrowanym powiadomieniem GSM LTE i łącznością IP',
      'Czujki kurtynowe zewnętrzne (ochrona posesji zanim ktoś dotknie okna)',
      'Szklane dotykowe manipulatory ścienne z czytnikiem breloków zbliżeniowych',
      'Syreny zewnętrzne z własnym zasilaniem akumulatorowym',
    ],
    specs: [
      'Atesty ubezpieczeniowe EN 50131 Grade 2 / Grade 3',
      'Podział na niezależne strefy (np. parter, piętro, garaż, piwnica)',
      'Opcjonalne powiadomienie wybranej agencji ochrony',
    ],
  },
];

export const SCENARIOS: LifeScenario[] = [
  {
    id: 'sc-yoga',
    number: '01',
    title: '„Joga” — spokojny pokój jednym przyciskiem',
    tag: 'Relaks i prywatność',
    tagColor: '#8B5CF6',
    trigger: 'Przycisk sceny na ścianie albo w telefonie',
    description:
      'Naciskasz jeden przycisk. Światło przygasa, rolety się zamykają, a ogrzewanie utrzymuje przyjemne ciepło. Zwykle wszystko ustawia się w 1–2 sekundy.',
    humanNote:
      'Nie musisz chodzić po pokoju i zaciągać rolet. Naciskasz przycisk, rozkładasz matę i przechodzisz do ćwiczeń.',
    detailPoints: [
      'Główne światło wygasza się w ciągu 2 sekund, zapalają się ciepłe cokoły LED 2200K na 15% jasności',
      'Rolety lub żaluzje fasadowe bezszelestnie opuszczają się, zapewniając prywatność',
      'Ogrzewanie podłogowe w tym pokoju utrzymuje stałą temperaturę',
      'Czujnik okna przypomina, jeśli zostało otwarte',
      'Dzwonek domofonu w tym pokoju milknie na czas ćwiczeń',
    ],
    actionSteps: [
      { icon: 'Sun', label: 'Światło nastrojowe', detail: 'Ciepły bursztyn 2200K na 15% (linie cokołowe i podsufitowe)' },
      { icon: 'SlidersHorizontal', label: 'Rolety i żaluzje', detail: 'Zamknięcie dla pełnej dyskrecji przed okiem sąsiadów' },
      { icon: 'Thermometer', label: 'Ciepło', detail: 'Stała, przyjemna temperatura w pokoju' },
      { icon: 'BellOff', label: 'Cisza', detail: 'Dzwonek domofonu w tym pokoju milknie' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sparkles',
  },
  {
    id: 'sc-sunrise',
    number: '02',
    title: 'Łagodne budzenie',
    tag: 'Zdrowy sen i energia',
    tagColor: '#F59E0B',
    trigger: 'Harmonogram biologiczny lub godzina budzika w telefonie',
    description:
      '20 minut przed planowanym wstaniem rolety unoszą się wpuszczając światło, oświetlenie w sypialni symuluje świt, a podłoga w łazience staje się ciepła.',
    humanNote:
      'Wstajesz wypoczęty, bo ciało reaguje na narastające światło. Wchodzisz bosymi stopami na ciepłe płytki w łazience.',
    detailPoints: [
      'Stopniowe unoszenie rolet i lameli o 10-20% wpuszczające naturalne słońce',
      'Światło w sypialni naśladuje świt, przechodząc z 2000K do rześkiego 3500K',
      'Klimat: podgrzanie podłogi w łazience do 23.5°C przed wejściem pod prysznic',
      'W kuchni zapala się światło nad blatem',
      'Ogrzewanie wraca z trybu nocnego do dziennego',
    ],
    actionSteps: [
      { icon: 'SunMedium', label: 'Światło świtu', detail: 'Stopniowe rozjaśnianie od ciepłego bursztynu do światła dziennego' },
      { icon: 'SlidersHorizontal', label: 'Rolety', detail: 'Stopniowe uchylenie wpuszczające pierwsze promienie poranka' },
      { icon: 'Flame', label: 'Ciepła podłoga', detail: 'Automatyczne dogrzanie łazienki do komfortowych 23.5°C' },
      { icon: 'Lightbulb', label: 'Światło w kuchni', detail: 'Delikatne światło nad blatem, gdy schodzisz rano' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sun',
  },
  {
    id: 'sc-masteroff',
    number: '03',
    title: 'Wyjście z domu („wyłącz wszystko”)',
    tag: 'Bezpieczeństwo i wygoda',
    tagColor: '#EF4444',
    trigger: 'Jeden przycisk przy drzwiach albo pilot do alarmu',
    description:
      'Jeden przycisk przy drzwiach odcina zasilanie gniazd żelazka, ekspresu i płyty indukcyjnej, gasi światła, opuszcza żaluzje fasadowe, przełącza ogrzewanie w tryb oszczędny i uzbraja monitoring.',
    humanNote:
      'Nie musisz wracać z połowy drogi, by sprawdzić, czy żelazko jest wyjęte z gniazdka. Wciskasz guzik i wiesz, że dom jest wyłączony.',
    detailPoints: [
      'Koniec z zastanawianiem się "czy na pewno wyłączyłam / wyłączyłem żelazko"',
      'Automatyczne obniżenie temperatury do trybu Eco',
      'Dioda LED przy drzwiach potwierdza, że wszystkie okna są zamknięte',
      'Kamery zaczynają pilnować wejścia i podjazdu',
    ],
    actionSteps: [
      { icon: 'Power', label: 'Obwody ryzyka', detail: 'Mechaniczne odcięcie zasilania gniazd żelazka i płyty' },
      { icon: 'LightbulbOff', label: 'Wszystkie światła', detail: 'Automatyczne wygaszenie oświetlenia we wszystkich pokojach' },
      { icon: 'ShieldCheck', label: 'Bezpieczeństwo', detail: 'Alarm się uzbraja, a kamery pilnują wejścia' },
      { icon: 'SlidersHorizontal', label: 'Zacienienie', detail: 'Opuszczenie rolet chroniące wnętrza przed spojrzeniami' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    icon: 'LogOut',
  },
  {
    id: 'sc-cinema',
    number: '04',
    title: 'Wieczór filmowy',
    tag: 'Multimedia i atmosfera',
    tagColor: '#3B82F6',
    trigger: 'Przycisk „Kino” przy kanapie albo w telefonie',
    description:
      'Gdy włączasz film, żaluzje zjeżdżają tworząc zaciemnienie blackout, oświetlenie gaśnie zostawiając akcent 5%, a ekran projekcyjny sam zjeżdża.',
    humanNote:
      'Klimat kinowy bez wstawania z kanapy. Jeden dotyk przycisku przygaśnia światło.',
    detailPoints: [
      '100% zaciemnienia roletami lub zasłonami z tkaniną blackout',
      'Dyskretne oświetlenie przypodłogowe 5% w barwie kinowej indygo/ciepłej',
      'Ekran projekcyjny zjeżdża i po filmie sam się chowa',
      'Dzwonek z furtki widać na panelu w salonie — bez wstawania',
    ],
    actionSteps: [
      { icon: 'SlidersHorizontal', label: 'Zacienienie', detail: 'Całkowite zaryglowanie rolet i zasłon blackout' },
      { icon: 'Sun', label: 'Światło kinowe', detail: 'Automatyczne przygaśnięcie do 5% pod kanapą i szafką RTV' },
      { icon: 'Tv', label: 'Ekran', detail: 'Ekran projekcyjny zjeżdża jednym przyciskiem' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85',
    icon: 'Tv',
  },
  {
    id: 'sc-courier',
    number: '05',
    title: 'Kurier i furtka pod kontrolą',
    tag: 'Wideodomofon i dostęp',
    tagColor: '#F97316',
    trigger: 'Ktoś dzwoni do furtki',
    description:
      'Dzwonek przychodzi jako rozmowa wideo na Twój telefon. Rozmawiasz z kurierem, uchylasz furtkę i widzisz na żywo, jak kładzie paczkę.',
    humanNote:
      'Nie musisz prosić sąsiada o odbiór przesyłki. Otwierasz furtkę na odległość, a nagranie zapisuje się na rejestratorze w domu.',
    detailPoints: [
      'Dźwięk dwukierunkowy z redukcją szumów wiatru i ulicy',
      'Możliwość generowania tymczasowych kodów PIN/QR dla kurierów i ekip',
      'Zapis obrazu na lokalnym dysku w domu',
      'Światło przed furtką zapala się samo po zmroku',
    ],
    actionSteps: [
      { icon: 'Video', label: 'Połączenie HD', detail: 'Obraz z furtki na żywo w telefonie' },
      { icon: 'KeyRound', label: 'Zdalne otwarcie', detail: 'Jedno dotknięcie zwalnia elektrozaczep furtki' },
      { icon: 'HardDrive', label: 'Nagranie w domu', detail: 'Wizyta zapisana na dysku w domu, bez abonamentu' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    icon: 'Video',
  },
  {
    id: 'sc-water',
    number: '06',
    title: 'Jak chronimy dom przed zalaniem',
    tag: 'Ochrona majątku',
    tagColor: '#0284C7',
    trigger: 'Wykrycie wilgoci przez czujnik pod pralką, zmywarką lub w kotłowni',
    description:
      'Gdy pęka wężyk pod umywalką, sensor wykrywa wodę i wysyła sygnał do zaworu silnikowego. Zawór ze sprężyną powrotną zamyka się samoczynnie przy zaniku zasilania; sterowanie elektroniczne wymaga zasilania.',
    humanNote:
      'Skala zalania sąsiada i zniszczeń podłogi wartych kilkadziesiąt tysięcy złotych zostaje ograniczona, nawet gdy śpisz lub jesteś na wakacjach.',
    detailPoints: [
      'Działa w domu, także bez internetu i bez prądu (zawór sam się zamyka)',
      'Zawory kulowe ze sprężyną powrotną odcinające wodę nawet przy braku zasilania',
      'Wiadomość na telefon z informacją, gdzie jest wyciek',
      'Raz w tygodniu zawór sam się porusza, żeby nie zarósł kamieniem',
    ],
    actionSteps: [
      { icon: 'Droplets', label: 'Detekcja wycieku', detail: 'zamknięcie zaworu zwykle w kilka sekund' },
      { icon: 'ShieldAlert', label: 'Mechaniczne odcięcie', detail: 'Zamknięcie głównego zaworu wody' },
      { icon: 'Phone', label: 'Wiadomość na telefon', detail: 'Powiadomienie, w którym miejscu jest wyciek' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    icon: 'Droplets',
  },
  {
    id: 'sc-sleep',
    number: '07',
    title: 'Spokojny sen',
    tag: 'Zdrowie i biorytm',
    tagColor: '#10B981',
    trigger: 'Wykrycie ruchu stopą przy łóżku w godzinach 23:00 - 06:00',
    description:
      'Gdy wstajesz w nocy do łazienki, czujnik ruchu przy łóżku zapala podświetlenie cokołowe na 5% w barwie ciepłego bursztynu 1800K. Światło prowadzi Cię bez oślepiania.',
    humanNote:
      'Nie musisz szukać po omacku włącznika ani mrużyć oczu przed ostrym światłem. Idziesz oświetloną ścieżką, a po powrocie do łóżka zasypiasz z powrotem.',
    detailPoints: [
      'Barwa 1800 K (bursztynowa), o ograniczonej emisji światła niebieskiego',
      'Temperatura w sypialni automatycznie obniżana do 18.5°C na czas snu',
      'Cicha praca siłowników ogrzewania i bezgłośne wygaszanie',
      'Dzwonek domofonu w sypialni w nocy milczy',
    ],
    actionSteps: [
      { icon: 'Moon', label: 'Cokoły bursztynowe', detail: 'Światło 1800K na 5% prowadzi do celu bez oślepiania' },
      { icon: 'Thermometer', label: 'Klimat nocny', detail: 'Rześkie 18.5°C sprzyjające zasypianiu' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    icon: 'Moon',
  },
  {
    id: 'sc-dinner',
    number: '08',
    title: '„Przytulna kolacja”',
    tag: 'Komfort i atmosfera',
    tagColor: '#F59E0B',
    trigger: 'Przycisk sceny w jadalni albo w telefonie',
    description:
      'W porze wieczornej oświetlenie sufitowe wygasza się, stół jadalniany oświetla ciepłe światło 2400K, a rolety i zasłony zamykają się.',
    humanNote:
      'Jeden przycisk zmienia salon w miejsce na spokojną kolację. Bez biegania po włącznikach.',
    detailPoints: [
      'Ściemnienie światła nad stołem do 35% o barwie ciepłego bursztynu 2400K',
      'Automatyczne zamknięcie rolet i żaluzji we wszystkich oknach salonu i kuchni',
      'Uruchomienie subtelnego podświetlenia blatów kuchennych i witryn szklanych',
      'Ogrzewanie w jadalni utrzymuje przyjemne ciepło',
    ],
    actionSteps: [
      { icon: 'Sun', label: 'Światło kolacji', detail: 'Ciepły blask 2400K nad stołem jadalnym i wyspą' },
      { icon: 'SlidersHorizontal', label: 'Rolety i zasłony', detail: 'Zamknięcie przed zmierzchem chroniące prywatność' },
      { icon: 'Lightbulb', label: 'Podświetlenie blatów', detail: 'Ciepłe światło pod szafkami i w witrynach' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sparkles',
  },
  {
    id: 'sc-vacation',
    number: '09',
    title: 'Tryb urlopowy (symulacja obecności)',
    tag: 'Maksymalne bezpieczeństwo',
    tagColor: '#10B981',
    trigger: 'Aktywacja w aplikacji przed wyjazdem na wakacje',
    description:
      'Gdy wyjeżdżasz na urlop, system losowo zapala i gasi światła w salonie, sypialni i gabinecie, imitując obecność lokatorów. Główny zawór wody zostaje odcięty, a kamery chronią wejście do budynku.',
    humanNote:
      'Wypoczynek z dala od domu. Potencjalny intruz z ulicy widzi światła w oknach, woda jest odcięta, a Ty masz podgląd na żywo.',
    detailPoints: [
      'Inteligentna symulacja obecności – realistyczne zapalanie świateł w różnych pokojach wieczorami',
      'Mechaniczne odcięcie głównego dopływu wody w celu ochrony przed zalaniem',
      'Ogrzewanie przechodzi w tryb oszczędny, ale dom się nie wychładza',
      'Kamery przy wejściu wykrywają obcą osobę i od razu wysyłają powiadomienie',
    ],
    actionSteps: [
      { icon: 'Lightbulb', label: 'Symulacja ruchu', detail: 'Realistyczne sceny świetlne wieczorem w różnych pokojach' },
      { icon: 'Droplets', label: 'Zawór wody', detail: 'Pełne fizyczne odcięcie dopływu wody do budynku' },
      { icon: 'ShieldCheck', label: 'Kamery na straży', detail: 'Kamera odróżnia człowieka od kota i wysyła powiadomienie' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=80',
    icon: 'ShieldCheck',
  },
];

export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Zapytanie o Twój dom',
    desc: 'Zaznaczasz, co Cię interesuje i kiedy planujesz montaż, i zostawiasz kontakt — oddzwaniamy z propozycją.',
    humanNote: 'Zajmie Ci to około 2 minut. Nic nie płacisz i do niczego się nie zobowiązujesz.',
  },
  {
    number: '02',
    title: 'Sprawdzenie domu — za darmo',
    desc: 'Inżynier sprawdza rozdzielnicę, puszki i kable oraz to, czy jest przewód neutralny.',
    humanNote: 'Nie zgadujemy — sprawdzamy instalację miernikami, żeby nie było niespodzianek.',
  },
  {
    number: '03',
    title: 'Plan i cena na piśmie',
    desc: 'Lista urządzeń, cena i terminy.',
    humanNote: 'Wiesz, co i za ile montujemy, zanim zaczniemy.',
  },
  {
    number: '04',
    title: 'Montaż bez kurzu',
    desc: 'Wiercimy z odsysaniem pyłu, zabezpieczamy podłogi i opisujemy obwody.',
    humanNote: 'Wkładamy ochraniacze na buty. Po pracy sprzątamy.',
  },
  {
    number: '05',
    title: 'Start, sprawdzenie awarii i nauka obsługi',
    desc: 'Pokazujemy, jak wszystko działa, ustawiamy aplikacje i dajemy proste instrukcje.',
    humanNote: 'Sprawdzamy, czy każdy domownik umie zapalić światło, otworzyć furtkę i podejrzeć kamery.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'dzialanie',
    question: 'Czy system Shelly i monitoring działają, gdy w domu zabraknie internetu?',
    simpleAnswer:
      'Tak. Wszystkie funkcje domowe (włączniki, moduły Shelly, zawory wody, rolety, ogrzewanie, podgląd z kamer Hikvision) działają bezpośrednio w sieci domowej, bez połączenia z internetem.',
    technicalDetails:
      'Moduły Shelly Pro i Plus w sieci lokalnej komunikują się bezpośrednio przez protokół CoAP/MQTT z domowym serwerem. Brak internetu oznacza jedynie brak powiadomień poza domem – cały budynek pracuje dalej lokalnie (Local-First).',
  },
  {
    category: 'bezpieczenstwo',
    question: 'Czy kamery Hikvision i nagrania z wideodomofonu są zabezpieczone przed hakerami?',
    simpleAnswer:
      'Tak. Nagrania nie trafiają na serwery chmurowe. Obraz z kamer i wideodomofonu zapisuje się na dysku w rejestratorze w szafce na sprzęt.',
    technicalDetails:
      'Instalacje DOMENCE izolują urządzenia wizyjne w dedykowanej podsieci VLAN bez bezpośredniego dostępu do publicznego internetu. Zdalny dostęp w aplikacji Hik-Connect odbywa się przez szyfrowany strumień z uwierzytelnianiem dwuskładnikowym (2FA) i lokalnym kodem weryfikacyjnym.',
  },
  {
    category: 'remont',
    question: 'Mam już wykończone mieszkanie (płytki, gładzie). Czy trzeba kuć ściany lub zrywać tynki?',
    simpleAnswer:
      'Często nie jest to konieczne. W wykończonych obiektach stosujemy mikromoduły Shelly Plus, montowane w puszkach pod włącznikami światła, oraz sensory bezprzewodowe. Montaż wykonujemy z odsysaniem pyłu.',
    technicalDetails:
      'Instalujemy miniaturowe mikromoduły Shelly Plus 1PM / 2PM / Dimmer za tradycyjnym osprzętem klawiszowym. W przypadku braku przewodu neutralnego N stosujemy moduły z bypassami rezystancyjnymi zapobiegającymi żarzeniu się diod LED. Zawór odcinający wodę montowany jest bezpośrednio na istniejącym zaworze kulowym.',
  },
  {
    category: 'dzialanie',
    question: 'Czy obsługa systemu nie będzie za trudna dla dzieci lub starszych rodziców?',
    simpleAnswer:
      'Wszystkie tradycyjne włączniki na ścianach działają tak samo jak w zwykłym domu. Dziecko lub senior po prostu wciska klawisz na ścianie, a światło się zapala. Aplikacja to tylko wygodny dodatek dla chętnych.',
    technicalDetails:
      'Projektujemy automatykę z zachowaniem zasady Fail-Safe. Każdy obwód posiada fizyczny interfejs manualny. W przypadku awarii sterownika, obwody powracają do stanu bezpiecznego i można nimi sterować ręcznie za pomocą tradycyjnego klawisza.',
  },
  {
    category: 'bezpieczenstwo',
    question: 'Czy w rozdzielnicy nie powstanie pożar i czy montaż jest zgodny z warunkami polisy domu?',
    simpleAnswer:
      'Ryzyko ograniczamy do minimum: stosujemy wyłącznie atestowane moduły i protokoły pomiarowe. Stosujemy wyłącznie atestowane moduły Shelly Pro z certyfikatem niepalności obudowy V-0 i wbudowanym zabezpieczeniem termicznym OTP. Na koniec prac wykonujemy pomiary odbiorcze i wystawiamy oficjalny protokół do polisy ubezpieczeniowej.',
    technicalDetails:
      'Wszystkie moduły na szynie DIN posiadają wewnętrzny czujnik temperatury – w przypadku przekroczenia 95°C obwód wyłącza się automatycznie. Instalacja wykonywana jest zgodnie z normą PN-HD 60364, a każdy obwód chroniony jest dedykowanym wyłącznikiem nadprądowym i ogranicznikiem przepięć T1+T2.',
  },
  {
    category: 'dzialanie',
    question: 'Co się stanie, gdy w całej okolicy zabraknie prądu?',
    simpleAnswer:
      'Główny monitoring posesji, rejestrator NVR w szafie RACK oraz zasilanie wideodomofonu podtrzymywane są przez zasilacz awaryjny UPS przez co najmniej 3–4 godziny. Po powrocie prądu cały system wznawia pracę w ciągu 1–2 sekund w sieci lokalnej, zwykle bez ingerencji domowników.',
    technicalDetails:
      'Zasilacz UPS on-line z czystą sinusoidą zabezpiecza urządzenia sieciowe przed przepięciami i skokami napięcia przy ponownym włączeniu faz przez zakład energetyczny. Stan przekaźników Shelly po zaniku prądu jest w pełni konfigurowalny (domyślnie wyłączony lub przywrócenie ostatniego stanu).',
  },
  {
    category: 'koszty',
    question: 'Czy inteligentny dom z systemem Shelly realnie obniża rachunki?',
    simpleAnswer:
      'Realne oszczędności pochodzą z dwóch źródeł: strefowego ogrzewania (obniżanie temperatury o 2-3°C w nieużywanych pokojach i w nocy) oraz automatyki rolet (latem zatrzymują upał przed szybą, zmniejszając potrzebę pracy klimatyzatorów).',
    technicalDetails:
      'Korzystamy z algorytmów predykcyjnych opartych na bezwładności cieplnej budynku i czujnikach nasłonecznienia. System opuszcza żaluzje fasadowe od strony południowej, zanim wnętrze się przegrzeje.',
  },
];

export const SMART_MODULES: SmartModule[] = [
  {
    id: 'water_shield',
    name: 'Zawór, który sam zakręca wodę przy wycieku',
    badge: 'Kluczowe',
    description: 'Mechaniczne odcięcie głównego zaworu wody po wykryciu wycieku. Działa bez internetu.',
    humanExplanation: 'Czujnik pod pralką po wykryciu wycieku zakręca główny zawór wody. Ogranicza to ryzyko zalania podłogi.',
    price: 1250,
    category: 'safety',
    icon: 'ShieldCheck',
  },
  {
    id: 'master_off',
    name: 'Scenariusz „Wyłącz wszystko” (jeden przycisk przy drzwiach)',
    badge: 'Must have',
    description: 'Jeden przycisk przy drzwiach gasi oświetlenie i odłącza zasilanie żelazka, płyty i ekspresu.',
    humanExplanation: 'Po naciśnięciu klawisza przy drzwiach, wyłączane jest oświetlenie, odcinane zasilanie wybranych urządzeń i zamykane rolety.',
    price: 850,
    category: 'safety',
    icon: 'Power',
  },
  {
    id: 'cctv_starter',
    name: 'Kamery wokół domu, kolorowe także w nocy',
    badge: 'Kamery i wideodomofon',
    description: 'Kamery 4K z kolorowym obrazem w nocy, które rozpoznają ludzi i auta. Dysk 2 TB i zapis w domu, bez abonamentu.',
    humanExplanation: 'Kamery odróżniają psa od intruza. Obraz nagrywa się na dysk w szafie w nocy w kolorze. Podgląd w telefonie bez opłat abonamentowych.',
    price: 3400,
    category: 'teletechnics',
    icon: 'Camera',
  },
  {
    id: 'alarm_satel_pack',
    name: 'Alarm z czujnikami w oknach i drzwiach',
    badge: 'Bezpieczeństwo',
    description: 'Centrala hybrydowa, klawiatura szklana, 4 czujki ruchu PIR+MW i powiadomienie LTE.',
    humanExplanation: 'Alarm z atestem. Te same czujki w dzień sterują oświetleniem, a po wyjściu z domu strzegą posesji.',
    price: 3900,
    category: 'teletechnics',
    icon: 'ShieldAlert',
  },
  {
    id: 'blinds_control',
    name: 'Rolety i żaluzje, które same się zamykają',
    description: 'Regulacja kąta lameli, automatyczne zamykanie o zmierzchu, wietrze lub komendzie.',
    humanExplanation: 'Rano słońce budzi Cię, do jogi rolety tworzą prywatność, a latem żaluzje blokują upał.',
    price: 1400,
    category: 'comfort',
    icon: 'SlidersHorizontal',
  },
  {
    id: 'hvac_control',
    name: 'Osobna temperatura w każdym pokoju',
    description: 'Niezależna temperatura w każdym pokoju, algorytmy histerezy i oszczędność energii.',
    humanExplanation: 'W sypialni masz 18.5°C do snu, w łazience 23°C. Grzejniki nie pracują, gdy wietrzysz pokój.',
    price: 1800,
    category: 'comfort',
    icon: 'Flame',
  },
  {
    id: 'intercom_poe',
    name: 'Wideodomofon: rozmowa z furtki w telefonie',
    badge: 'Standard DOMENCE',
    description: 'Wideo rozmowy na smartfonie, sterowanie elektrozaczepem furtki i podgląd kuriera bez abonamentu.',
    humanExplanation: 'Kurier dzwoni do furtki? Odbierasz na telefonie, otwierasz furtkę i widzisz, jak kładzie paczkę pod drzwiami.',
    price: 2900,
    category: 'access',
    icon: 'Video',
  },
  {
    id: 'rack_network_pack',
    name: 'Szafka na sprzęt i szybki internet w całym domu',
    badge: 'Infrastruktura',
    description: 'Okablowanie, szafa serwerowa z patchpanelem i roaming Wi-Fi w całym domu.',
    humanExplanation: 'Koniec z zawieszającym się internetem i martwymi strefami w sypialni czy gabinecie. Wszystkie kable uporządkowane w szafce.',
    price: 3200,
    category: 'teletechnics',
    icon: 'Network',
  },
  {
    id: 'switchboard_protection_pack',
    name: 'Ochrona sprzętu przed przepięciami i burzą',
    badge: 'Ochrona AGD',
    description: 'Ograniczniki przepięć chroniące elektronikę, pompę ciepła i sprzęt przed burzą.',
    humanExplanation: 'Ochrona przed wyładowaniami atmosferycznymi. Każdy obwód oznaczony etykietą i schematem.',
    price: 950,
    category: 'power',
    icon: 'Cpu',
  },
  {
    id: 'dimming_scenes',
    name: 'Ściemnianie światła i nastrojowe sceny',
    description: 'Rozjaśnianie rano, nocne podświetlenie cokołowe 1800K na 5% i kinowe sceny.',
    humanExplanation: 'W nocy światło w korytarzu nie razi po oczach, zapala się na 5%. Scena jogi tworzy relaksujący klimat.',
    price: 1100,
    category: 'comfort',
    icon: 'Sun',
  },
  {
    id: 'gate_control',
    name: 'Brama wjazdowa i garaż z telefonu',
    description: 'Otwieranie geolokalizacją, kontrola stanu zamknięcia i powiadomienia o niedomknięciu.',
    humanExplanation: 'Zbliżasz się do posesji – brama sama się otwiera. Wyjeżdżasz i nie pamiętasz, czy zamknąłeś garaż? Sprawdzasz w aplikacji lub dom sam zamknie go za Tobą.',
    price: 750,
    category: 'access',
    icon: 'DoorClosed',
  },
  {
    id: 'cinema_multimedia_pack',
    name: 'Scena „Kino”: rolety, światło i ekran',
    badge: 'Rozrywka w domu',
    description: 'Jeden przycisk zamyka rolety, przygasza światło i opuszcza ekran projekcyjny.',
    humanExplanation: 'Włączasz film: światło przygasa, rolety się zamykają, ekran zjeżdża. Po filmie jeden przycisk wszystko przywraca.',
    price: 1950,
    category: 'comfort',
    icon: 'Tv',
  },
  {
    id: 'loqed_smart_lock',
    name: 'Wejście bez kluczy: twarz, karta lub telefon',
    badge: 'Touch-to-Open 2s',
    description: 'Otwieranie drzwi w 2 sekundy od lekkiego dotknięcia klamki (telefon w kieszeni), smartfonem lub kodem PIN. Certyfikat SKG***.',
    humanExplanation: 'Wracasz z zakupami w obu rękach – dotykasz klamki łokciem i drzwi same się otwierają. Koniec z szukaniem kluczy po kieszeniach.',
    price: 1850,
    category: 'access',
    icon: 'Lock',
  },
  {
    id: 'shelly_trv_airing_pack',
    name: 'Wietrzenie bez strat ciepła',
    badge: 'Komfort wietrzenia',
    description: 'Odcięcie zaworu grzejnika po otwarciu okna na wietrzenie i automatyczny powrót do komfortowej temperatury po zamknięciu.',
    humanExplanation: 'Otwierasz okno, by wpuścić świeże powietrze – grzejnik natychmiast wyłącza się, by nie ogrzewać ulicy. Zamykasz okno – ciepło natychmiast wraca.',
    price: 890,
    category: 'comfort',
    icon: 'Wind',
  },
  {
    id: 'shelly_3em_solar_pack',
    name: 'Licznik prądu i lepsze wykorzystanie fotowoltaiki',
    badge: 'Energia z PV',
    description: 'Widzisz, ile prądu zużywasz i produkujesz. Nadwyżkę z paneli dom sam kieruje do bojlera i pompy ciepła.',
    humanExplanation: 'Maksymalizujesz zysk z własnego prądu ze słońca: dom sam ładuje samochód i grzeje wodę dokładnie wtedy, gdy panele produkują darmową energię.',
    price: 1350,
    category: 'power',
    icon: 'Zap',
  },
  {
    id: 'shelly_hazard_leak_pack',
    name: 'Czujniki gazu i zalania z zakręceniem zaworu',
    badge: 'Bezpieczeństwo',
    description: 'Wykrywanie ulatniającego się gazu i wycieków wody z natychmiastowym mechanicznym odcięciem zaworu i zrzuceniem zasilania gniazd.',
    humanExplanation: 'Gdy pęknie rura lub zawór kuchenki, dom sam odcina dopływ — zamknięcie zaworu zwykle w kilka sekund i wyłącza prąd w strefie zagrożenia, chroniąc przed zalaniem i wybuchem.',
    price: 1450,
    category: 'safety',
    icon: 'ShieldAlert',
  },
];

export const PACKAGES: PackageOffer[] = [
  {
    id: 'security_intercom',
    title: 'Wideodomofon IP Hikvision i monitoring posesji',
    categoryBadge: 'Teletechnika i kontrola wejścia',
    badgeType: 'standard',
    timeframe: '1–2 dni robocze',
    description: 'Całościowa kontrola bramy i furtki, mniej fałszywych alarmów, bezpłatny podgląd wideo 4K bez abonamentu.',
    humanSummary: 'Wiesz, kto dzwoni do furtki, otwierasz ją telefonem, a kamery zapisują obraz w domu.',
    priceNetto: 5300,
    priceBrutto: 6519,
    recommendedFor: 'security',
    features: [
      'Stacja bramowa IP Hikvision ze stali nierdzewnej z kamerą 180° i stykami do furtki',
      'Dotykowy monitor wewnętrzny 7" Android ze szkłem 2.5D i podglądem kamer',
      '2 kamery na elewacji z kolorowym obrazem w nocy, które odróżniają ludzi i auta od zwierząt',
      'Rejestrator w domu z dyskiem 2 TB — bez opłat za chmurę',
      'Czysty montaż z minimalną ingerencją w tynki, z odciągiem pyłu w wykończonych wnętrzach',
      'Bez ukrytych abonamentów — darmowa aplikacja na telefon',
      'Możliwość otwierania furtki z poziomu smartfona z dowolnego miejsca z dostępem do internetu',
    ],
  },
  {
    id: 'retrofit_smart',
    title: 'Smart retrofit Shelly (wykończone wnętrze bez kucia)',
    categoryBadge: 'Bestseller: Bez ingerencji w tynki',
    badgeType: 'bestseller',
    timeframe: '1–2 dni robocze',
    description: 'Kompletna automatyka Shelly Plus bez kurzu i bez niszczenia gładzi. Zabezpieczenie przed zalaniem, oświetlenie, rolety i sceny jogi.',
    humanSummary: 'Z gotowego mieszkania robimy dom sterowany telefonem w 1–2 dni. Ściany i płytki zostają całe.',
    priceNetto: 6900,
    priceBrutto: 8487,
    recommendedFor: 'retro',
    features: [
      '6x mikromodułów dopuszkowych Shelly Plus z pomiarem zużycia prądu',
      '2x cyfrowe ściemniacze oświetlenia LED bez efektu migotania z trybem nocnym',
      'Ochrona przed zalaniem (bezpieczna przy awarii): 3 czujniki zalania + siłownik zaworu (zamknięcie zaworu zwykle w kilka sekund)',
      'Sterowanie roletami ze sceną „Chcę poćwiczyć jogę” i „Budzenie słońcem”',
      'Lokalna centrala sterująca (przetwarzanie w domu, bez chmury)',
      'Przycisk „Wyjdź z domu” przy drzwiach wejściowych',
      'Czysty montaż z minimalną ingerencją w tynki, z odciągiem z filtrem HEPA H13 w 1–2 dni robocze',
    ],
  },
  {
    id: 'developer_din',
    title: 'Shelly Pro do nowego domu (moduły w rozdzielnicy)',
    categoryBadge: 'Pełny standard inżynieryjny',
    badgeType: 'premium',
    timeframe: '3–5 dni roboczych',
    description: 'Moduły w rozdzielnicy, sterowanie roletami i oświetleniem oraz szafka na sprzęt sieciowy.',
    humanSummary: 'Dobre rozwiązanie do nowego domu: połączenia po kablu, czytelna rozdzielnica i schematy na końcu.',
    priceNetto: 13900,
    priceBrutto: 17097,
    recommendedFor: 'deweloperski',
    features: [
      'Moduły przekaźnikowe i ściemniacze Shelly Pro na szynę DIN w rozdzielnicy',
      'Bezpośrednia łączność sieciowa Ethernet LAN RJ45 dla każdego modułu automatyki',
      'Sterownik strefowego ogrzewania podłogowego dla 6-8 niezależnych obwodów',
      '2x zawory ze stali nierdzewnej 230V z samoczynnym zamknięciem bez prądu',
      'Szafka na sprzęt sieciowy z uporządkowanymi kablami',
      'Czytelnie opisana rozdzielnica z ochroną przed przepięciami',
      'Pełne ustawienie przykładów: joga, pobudka, wyjście z domu, kino',
    ],
  },
];

export const HOME_MULTIMEDIA = {
  audio: {
    title: 'Kto dzwoni do furtki — widzisz w salonie',
    desc: 'Gdy oglądasz film, dzwonek z furtki pojawia się na panelu w domu i w telefonie. Widzisz gościa, rozmawiasz z nim i otwierasz furtkę bez wstawania z kanapy.',
    humanNote:
      'Nie musisz zatrzymywać filmu i biec do drzwi, żeby sprawdzić, kto przyszedł.',
    features: [
      'Obraz z furtki na panelu w domu i w telefonie',
      'Rozmowa z gościem i otwarcie furtki jednym dotknięciem',
      'Światło przed furtką zapala się samo po zmroku',
      'Nagranie wizyty zostaje w domu, nie w chmurze',
    ],
  },
  cinema: {
    title: 'Scena „Kino” jednym przyciskiem',
    desc: 'Rolety zamykają się do pełnego zaciemnienia, światło przygasa do delikatnego podświetlenia, a ekran projekcyjny sam zjeżdża.',
    humanNote:
      'Nie musisz osobno gasić lamp i opuszczać rolet. Jeden przycisk przy kanapie albo w telefonie przygotowuje salon do filmu.',
    features: [
      'Rolety i żaluzje zamykają się do pełnego zaciemnienia',
      'Delikatne światło przy podłodze, żeby bezpiecznie przejść po napój',
      'Ekran projekcyjny zjeżdża i po filmie sam się chowa',
      'Po filmie jeden przycisk przywraca zwykłe światło',
    ],
  },
  garden: {
    title: 'Taras i ogród wieczorem',
    desc: 'Światło na ścieżkach i tarasie włącza się o zmierzchu, ogród podlewa się według harmonogramu, a kamera pilnuje ogrodu w nocy.',
    humanNote:
      'Wychodzisz na taras — światło już jest. Wyjeżdżasz na urlop — ogród jest podlany, a Ty widzisz, co dzieje się przy domu.',
    features: [
      'Światło w ogrodzie zapala się o zmierzchu i gaśnie o ustalonej porze',
      'Podlewanie ogrodu według harmonogramu',
      'Kamera nad tarasem z kolorowym obrazem w nocy',
      'Scena „Wieczór na tarasie”: światło w ogrodzie jednym przyciskiem',
    ],
  },
};


export interface AiTechFeature {
  id: string;
  name: string;
  subtitle: string;
  badge: string;
  techStack: string;
  summary: string;
  humanBenefit: string;
  keyPoints: string[];
  simulationData?: {
    samplePrompts?: string[];
  };
  icon: string;
  image: string;
}

export const AI_FUTURE_TECH: AiTechFeature[] = [
  {
    id: 'ai-acuseek',
    name: 'Szukanie w nagraniach zwykłym zdaniem',
    subtitle: 'Wpisz opis i znajdź klip bez przewijania osi czasu',
    badge: 'Wyszukiwanie naturalnym językiem',
    techStack: 'Lokalny rejestrator NVR • Wyszukiwanie semantyczne bez opłat',
    summary:
      'Zamiast przewijać godziny nagrań, wpisz w wyszukiwarce zdanie zwykłym językiem: "kurier z paczką przy bramie" albo "auto podjeżdżające pod bramę o 20:00". Rejestrator w domu sam odnajduje właściwy fragment — wideo nie opuszcza Twojego domu.',
    humanBenefit:
      'Oszczędzasz czas, który wcześniej spędzałeś na przeglądaniu archiwum. Znaleziony klip możesz od razu wyeksportować na telefon lub e-mail.',
    keyPoints: [
      'Szukasz po kolorze ubrania, rodzaju auta albo kierunku ruchu',
      'Szukanie w nagraniach na rejestratorze w domu — wideo nie opuszcza posesji',
      'Eksport znalezionego klipu jednym kliknięciem',
      'Przykłady poniżej.',
    ],
    simulationData: {
      samplePrompts: [
        'Kurier z paczką przy drzwiach wejściowych',
        'Samochód, który podjechał pod bramę o 20:00',
        'Osoba z paczką przy wejściu około 15 minut temu',
        'Nieznany pojazd na podjeździe po godzinie 23:00',
      ],
    },
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'ai-colorvu-acusense',
    name: 'Kolorowy obraz także w nocy',
    subtitle: 'Kolor przy bardzo słabym świetle + dźwięk dwukierunkowy',
    badge: 'Obiektyw F1.0 • Filtracja fałszywych alarmów',
    techStack: 'ColorVu CMOS 1/1.2" / AcuSense / Audio dwukierunkowe',
    summary:
      'Kamery pokazują kolorowy, ostry obraz nawet przy bardzo słabym świetle. Odróżniają ludzi i auta od zwierząt, liści czy deszczu, więc telefon nie wibruje bez powodu. Przez kamerę możesz też porozmawiać z gościem przy furtce.',
    humanBenefit:
      'W nocy widzisz kolor kurtki i markę samochodu zamiast szarego ziarna. Kamera podświetla scenę miękkim światłem dopiero wtedy, gdy wykryje człowieka.',
    keyPoints: [
      'Ostry, kolorowy obraz w nocy',
      'Mniej fałszywych alarmów: kot ani liście nie budzą Cię w nocy',
      'Rozmowa przez kamerę, bez szumu wiatru',
      'Smart Hybrid Light: podświetlenie aktywuje się przy podejściu człowieka',
    ],
    icon: 'Eye',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'ai-deepinviewx',
    name: 'Kamera, która rozumie, co widzi',
    subtitle: 'Modele AI działają w procesorze kamery, nie w chmurze',
    badge: 'On-device AI • Bez chmury',
    techStack: 'Hikvision DeepinViewX / modele Edge AI',
    summary:
      'Kamera sama ocenia, co dzieje się przy wejściu do domu — bez internetu i bez wysyłania obrazu na obce serwery.',
    humanBenefit:
      'Kamera odróżnia domownika wracającego z pracy od kogoś, kto długo kręci się pod drzwiami.',
    keyPoints: [
      'Obraz analizuje sama kamera — nic nie trafia do chmury',
      'Powiadomienie, gdy ktoś długo stoi przy wejściu lub garażu',
      'Reakcja od razu, bez opóźnień z internetu',
      'Reakcja na zdarzenia z reakcją lokalną, bez opóźnień chmury',
    ],
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'ai-mmwave-radar',
    name: 'Ochrona podjazdu także we mgle i w deszczu',
    subtitle: 'Radar obwodowy 60–77 GHz, odporny na pogodę',
    badge: 'Odporność na pogodę • Detekcja mikroruchów',
    techStack: 'mmWave Radar 60/77 GHz / sensory Shelly BLU Radar',
    summary:
      'Radar pilnuje wejścia i podjazdu. W przeciwieństwie do zwykłych czujników ruchu działa pewnie w gęstej mgle, śnieżycy i ulewnym deszczu.',
    humanBenefit:
      'Gdy zwykłe czujniki zawodzą we mgle lub zamieci, radar dalej widzi, kto zbliża się do domu.',
    keyPoints: [
      'Działa we mgle, w śnieżycy i w ulewie',
      'Kamera sama obraca się w stronę wykrytej osoby',
      'Mniej fałszywych alarmów niż przy zwykłych czujnikach',
      'Światło na podjeździe zapala się, gdy ktoś się zbliża',
    ],
    icon: 'Radio',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'ai-loqed-lock',
    name: 'Wejście bez kluczy: twarz, karta lub telefon',
    subtitle: 'Drzwi i furtka otwierają się bez szukania kluczy',
    badge: 'Twarz • Karta • Kod • Telefon',
    techStack: 'Czytnik przy drzwiach + elektrozaczep',
    summary:
      'Drzwi lub furtkę otwierasz twarzą, kartą, kodem albo z telefonu. Czytnik przy wejściu współpracuje z wideodomofonem i resztą domu.',
    humanBenefit:
      'Wracasz z zakupami w obu rękach — patrzysz w czytnik i drzwi się otwierają. Gościom lub ekipie remontowej dajesz jednorazowy kod.',
    keyPoints: [
      'Otwieranie twarzą, kartą lub kodem',
      'Jednorazowy kod dla gościa lub ekipy remontowej',
      'Historia wejść widoczna w telefonie',
      'Otwarcie drzwi wyłącza alarm i zapala światło w korytarzu',
    ],
    icon: 'Lock',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'ai-shelly-assistant',
    name: 'Powiadomienia, które mają znaczenie',
    subtitle: 'Telefon informuje tylko o ważnych sprawach',
    badge: 'Woda • Furtka • Okna',
    techStack: 'Powiadomienia z czujników i kamer',
    summary:
      'Dom wysyła Ci wiadomość wtedy, gdy coś naprawdę się dzieje: wyciek wody, gość przy furtce, otwarte okno przy włączonym ogrzewaniu.',
    humanBenefit:
      'Nie przeglądasz aplikacji co chwilę. Telefon odzywa się tylko wtedy, gdy powinieneś zareagować.',
    keyPoints: [
      'Wiadomość, gdy czujnik wykryje wodę lub gaz',
      'Zdjęcie osoby przy furtce prosto na telefon',
      'Przypomnienie o otwartym oknie przy włączonym ogrzewaniu',
      'Lokalne reguły automatyki — bez przekazywania danych profilowych',
    ],
    simulationData: {
      samplePrompts: [
        'Ustaw nastrojowe światło na kolację i opuść żaluzje',
        'Przygotuj gabinet do pracy na temperaturę 22°C',
        'Czy wszystkie okna są zamknięte i czy wyłączono żelazko?',
        'Czy brama garażowa jest zamknięta?',
      ],
    },
    icon: 'Bell',
    image: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
  },
];

export interface TopSellingScenario {
  id: string;
  icon: string;
  badge: string;
  title: string;
  subtitle: string;
  trigger: string;
  devicesUsed: string[];
  reactionTime: string;
  economicBenefit: string;
  description: string;
  humanNote: string;
  actionSequence: { step: string; icon: string; detail: string }[];
  image: string;
}

export const TOP_SELLING_SCENARIOS: TopSellingScenario[] = [
  {
    id: 'top-sc-airing-trv',
    icon: 'Wind',
    badge: 'Oszczędność ciepła przy wietrzeniu',
    title: 'Wietrzenie bez strat ciepła',
    subtitle: 'Czujnik okna i głowica na grzejniku',
    trigger: 'Otwarcie lub uchylenie skrzydła okiennego',
    devicesUsed: ['Czujnik Shelly BLU Door/Window', 'Termostat Shelly BLU TRV', 'Bramka Shelly Smart Gateway'],
    reactionTime: 'Natychmiast',
    economicBenefit: 'Niższe rachunki za ogrzewanie w sezonie — dom nie grzeje ulicy podczas wietrzenia',
    description:
      'W momencie otwarcia okna bezprzewodowy czujnik Shelly BLU wysyła komendę Bluetooth do głowicy termostatycznej na grzejniku. Zawór domyka się, żeby nie ogrzewać ulicy, a po zamknięciu okna grzejnik wznawia dogrzewanie pokoju.',
    humanNote:
      'Wpuszczasz rześkie powietrze do sypialni bez marnowania energii i pieniędzy. Grzejnik nie rozgrzewa się bez sensu do maksymalnej mocy, gdy wietrzysz pomieszczenie.',
    actionSequence: [
      { step: 'Otwarcie okna', icon: 'SlidersHorizontal', detail: 'Czujnik Shelly BLU rejestruje rozszczelnienie ramy' },
      { step: 'Odcięcie grzania', icon: 'Flame', detail: 'Głowica Shelly BLU TRV domyka zawór na 0%' },
      { step: 'Powrót do komfortu', icon: 'CheckCircle2', detail: 'Po zamknięciu okna grzejnik automatycznie wznawia dogrzewanie' },
    ],
    image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'top-sc-hazard-defense',
    icon: 'ShieldAlert',
    badge: 'Reakcja na awarie',
    title: 'Jak lokalizujemy awarie',
    subtitle: 'Czujniki gazu i zalania, zawór na wodzie',
    trigger: 'Wykrycie ulatniającego się gazu lub wilgoci pod pralką/zmywarką',
    devicesUsed: ['Czujnik Shelly Gas', 'Czujniki zalania Shelly Flood S Gen4', 'Siłownik zaworu kulowego Fail-Safe 230V', 'Moduł Shelly Pro 1PM'],
    reactionTime: 'zamknięcie zaworu zwykle w kilka sekund',
    economicBenefit: 'Ochrona przed zniszczeniem podłóg za dziesiątki tysięcy złotych i bezpieczeństwo życia',
    description:
      'W przypadku wykrycia nieszczelności gazu przez Shelly Gas lub pierwszych kropel wody przez sensory Shelly Flood S, system w ciągu kilku sekund mechanicznie zamyka główny zawór odcinający i odłącza zasilanie z gniazd pralki, zmywarki czy pieca.',
    humanNote:
      'Pełen spokój, gdy jesteś w pracy lub na wakacjach. Pęknięty wężyk pralki nie zaleje parkietu ani sąsiada, a ewentualny wyciek gazu zostaje odcięty w zarodku bez udziału człowieka.',
    actionSequence: [
      { step: 'Wykrycie wycieku', icon: 'Droplets', detail: 'Sensory Shelly Flood / Gas wykrywają zagrożenie w kilka sekund' },
      { step: 'Zamknięcie zaworu', icon: 'ShieldCheck', detail: 'Siłownik odcina główny dopływ wody/gazu w kilka sekund' },
      { step: 'Zrzut zasilania', icon: 'Power', detail: 'Przekaźniki Shelly natychmiast odcinają prąd w strefie awarii' },
      { step: 'Alarm na telefon', icon: 'Bell', detail: 'Syrena akustyczna oraz powiadomienie alarmowe PUSH na smartfon' },
    ],
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'top-sc-solar-3em',
    icon: 'Zap',
    badge: 'Inteligentne zarządzanie energią',
    title: 'Kontrola energii i paneli PV',
    subtitle: 'Licznik prądu i panele fotowoltaiczne',
    trigger: 'Ciągły pomiar prądu, napięcia oraz nadwyżki produkcji z falownika PV',
    devicesUsed: ['Licznik prądu w rozdzielnicy', 'Przekaźniki w rozdzielnicy', 'Sterowanie pompą ciepła i bojlerem'],
    reactionTime: 'W czasie rzeczywistym',
    economicBenefit: 'Wyższa autokonsumpcja darmowej energii ze słońca — mniej oddawania do sieci',
    description:
      'Licznik 3-fazowy Shelly 3EM-63T Gen3 mierzy w czasie rzeczywistym zużycie i oddawanie energii do sieci. Gdy pojawia się nadwyżka darmowego prądu z fotowoltaiki, dom sam uruchamia grzałkę bojlera, podbija zadaną temperaturę pompy ciepła lub włącza ładowanie samochodu elektrycznego.',
    humanNote:
      'Twoja fotowoltaika zwraca się szybciej. Zamiast oddawać prąd do sieci za ułamek ceny, dom sam wykorzystuje go na podgrzanie wody i ogrzewanie.',
    actionSequence: [
      { step: 'Pomiar 3-fazowy', icon: 'Gauge', detail: 'Precyzyjny odczyt poboru i oddawania energii na każdej z 3 faz' },
      { step: 'Wykrycie nadwyżki PV', icon: 'Sun', detail: 'Automatyczne wykrycie nadwyżki produkcji powyżej 2.5 kW' },
      { step: 'Załączenie odbiorników', icon: 'BatteryCharging', detail: 'Uruchomienie bojlera lub pompy ciepła' },
    ],
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'top-sc-welcome-car',
    icon: 'Car',
    badge: 'Bezdotykowe powitanie gospodarza',
    title: 'Inteligentne powitanie gospodarza',
    subtitle: 'Kamera przy bramie, brama i światło na podjeździe',
    trigger: 'Rozpoznanie tablicy rejestracyjnej auta domownika',
    devicesUsed: ['Kamera Hikvision ANPR (odczyt tablic LPR)', 'Moduł bramowy Shelly Plus 1', 'Ściemniacze oświetlenia korytarza Shelly Pro Dimmer'],
    reactionTime: 'Kilka sekund',
    economicBenefit: 'Pełna wygoda: koniec z szukaniem pilota po ciemku i kliksaniem w telefon za kółkiem',
    description:
      'Kamera Hikvision z funkcją ANPR odczytuje tablicę rejestracyjną samochodu podczas dojazdu do posesji. Brama wjazdowa otwiera się automatycznie, w korytarzu rozjaśnia się światło 2700K, a parter domu rozbraja strefę alarmową.',
    humanNote:
      'Nie musisz szukać pilota po ciemku w schowku ani klikać w aplikację podczas manewrowania autem. System rozpoznaje tablicę Twojego auta przy podjeździe (dystans zależy od obiektywu i montażu) i otwiera bramę.',
    actionSequence: [
      { step: 'Odczyt tablicy LPR', icon: 'Camera', detail: 'Kamera Hikvision identyfikuje numer rejestracyjny' },
      { step: 'Otwarcie bramy', icon: 'DoorClosed', detail: 'Moduł Shelly Plus 1 podaje impuls na sterownik bramy wjazdowej' },
      { step: 'Ścieżka świetlna', icon: 'Sun', detail: 'Rozświetlenie korytarza ciepłym światłem 2700K' },
      { step: 'Rozbrojenie strefy', icon: 'ShieldCheck', detail: 'Automatyczne wyłączenie czuwania alarmu na parterze budynku' },
    ],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
  },
];
