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
    title: 'Oświetlenie nastrojowe i ściemnianie (tunable white i HCL)',
    category: 'lighting',
    badge: 'Human Centric Lighting',
    description:
      'Ściemnianie od ok. 1% do 100% (PWM, zależnie od źródła światła), z ograniczeniem widocznego migotania. Regulacja temperatury barwowej (1800K ciepły bursztyn do 6500K światło dzienne) dopasowana do dobowego rytmu człowieka.',
    proAdvantage:
      'Moduły Shelly Pro Dimmer 1/2PM na szynę DIN z portem LAN RJ45 sterują bezpośrednio obwodami oświetleniowymi 230V i szynoprzewodami z centralnej rozdzielnicy.',
    shellyAdvantage:
      'Moduły dopuszkowe Shelly Plus Dimmer montowane za włącznikami w puszkach 60mm pozwalają na automatyzację istniejących lamp z minimalną ingerencją w tynki, z odciągiem pyłu.',
    scenariosExample:
      'Rano światło łagodnie narasta, imitując ciepły blask wschodu słońca. W nocy czujnik w podłodze zapala subtelne światło cokołowe 1800K na 5%, by nie rozbudzać wzroku.',
    features: [
      'Ściemnianie od ok. 1% do 100% (PWM, zależnie od źródła światła)',
      'Tunable White (regulacja barwy 1800K – 6500K)',
      'Dedykowane sceny relaksu, czytania, kolacji i kina',
      'Eliminacja tętnienia i ochrona wzroku',
    ],
  },
  {
    id: 'cap-blinds',
    title: 'Automatyka rolet, żaluzji fasadowych i zasłon (sun-tracking)',
    category: 'blinds',
    badge: 'Pozycja i Kąt Żaluzji',
    description:
      'Inteligentne sterowanie roletami i żaluzjami fasadowymi. System reguluje położenie zgodnie z pozycją słońca na niebie, wpuszczając naturalne światło i ograniczając nagrzewanie pokoju.',
    proAdvantage:
      'Moduły Shelly Pro 2PM na szynę DIN z bezpośrednim kablem LAN RJ45, pomiarem poboru energii i autokalibracją obciążenia silnika z ochroną przed zablokowaniem.',
    shellyAdvantage:
      'Mikromoduły Shelly Plus 2PM w puszkach pod tradycyjnymi włącznikami roletowymi z obsługą harmonogramów wschodów i zachodów słońca.',
    scenariosExample:
      'Po wypowiedzeniu „Chcę poćwiczyć jogę” rolety zamykają się, dając pełną prywatność. O poranku uchylają się powoli, by wpuścić pierwsze promienie słońca.',
    features: [
      'Śledzenie kąta słońca (Sun Tracking) zapobiegające upałom',
      'Ciche budzenie naturalnym światłem poranka',
      'Automatyczne zamykanie o zmierzchu lub po wyjściu z domu',
      'Ochrona przed silnym wiatrem ze stacji pogodowej',
    ],
  },
  {
    id: 'cap-climate',
    title: 'Klimat strefowy, ogrzewanie podłogowe i rekuperacja',
    category: 'climate',
    badge: 'Komfort & Oszczędność',
    description:
      'Niezależna temperatura w każdym pomieszczeniu. Algorytmy PWM sterują bezszelestnymi siłownikami rozdzielacza podłogówki, klimakonwektorami i wentylacją mechaniczną.',
    proAdvantage:
      'Sterowniki Shelly Pro 4PM montowane w szafce rozdzielacza podłogówki z bezpośrednim sterowaniem pętlami grzewczymi i kontrolą obciążenia pomp obiegowych.',
    shellyAdvantage:
      'Bezprzewodowe sensory temperatury i wilgotności Shelly Plus H&T z e-papierowym wyświetlaczem oraz głowice termostatyczne Shelly BLU TRV na grzejnikach.',
    scenariosExample:
      'W sypialni utrzymywane jest rześkie 18.5°C do głębokiego snu, a w łazience 23°C. Podczas wietrzenia okna ogrzewanie w danym pokoju wyłącza się automatycznie.',
    features: [
      'Strefowa regulacja temperatury w każdym pokoju',
      'Algorytm bezwładności podłogówki zapobiegający przegrzewaniu',
      'Automatyczne wyłączenie grzania przy otwartym oknie (kontaktron)',
      'Monitorowanie jakości powietrza (CO2, VOC, wilgotność)',
    ],
  },
  {
    id: 'cap-audio',
    title: 'Nagłośnienie multiroom i dźwięk przestrzenny',
    category: 'audio',
    badge: 'Nagłośnienie Wielostrefowe',
    description:
      'Bezramkowe głośniki sufitowe w strefie dziennej, sypialni, kuchni i łazience. Niezależna muzyka ze Spotify, Apple Music lub radia w każdym pomieszczeniu.',
    proAdvantage:
      'Centralne wzmacniacze wielostrefowe w szafie RACK 19" zintegrowane przewodowo ze switchem LAN i lokalnym serwerem muzycznym.',
    shellyAdvantage:
      'Wyzwalanie strumieniowania i automatyzacji audio przez skrypty Shelly i integrację z lokalnymi odtwarzaczami sieciowymi (AirPlay 2, Linkplay, Sonos).',
    scenariosExample:
      'Gdy włączasz scenę jogi, w pokoju natychmiast płynie uspokajający ambient. Gdy dzwoni domofon Hikvision, muzyka w salonie automatycznie wycisza się.',
    features: [
      'Niezależne strefy dźwięku (Salon, Kuchnia, Sypialnia, Łazienka)',
      'Apple AirPlay 2, Spotify Connect, Tidal i radio internetowe',
      'Przyciszanie muzyki podczas dzwonienia domofonu lub alarmu',
      'Bezstopniowe przejścia dźwięku i budzenie ulubioną playlistą',
    ],
  },
  {
    id: 'cap-sensors',
    title: 'Sensoryka obecności True Presence i radary mmWave',
    category: 'sensors',
    badge: 'Czujniki Obecności',
    description:
      'Nowoczesne czujniki radarowe fal milimetrowych wykrywają mikroruchy (oddychanie człowieka). Światło nie gaśnie, gdy siedzisz nieruchomo, czytasz książkę lub medytujesz na macie.',
    proAdvantage:
      'Sufitowe sensory obecności zasilane ze stałych linii zasilających lub PoE z szafy RACK, pracujące w lokalnej pętli bez opóźnień radiowych.',
    shellyAdvantage:
      'Integracja radarów mmWave z mikromodułami Shelly pozwala przekształcić zwykłą lampę w inteligentne źródło światła reagujące natychmiast.',
    scenariosExample:
      'Czujnik wie, że jesteś w pokoju, nawet gdy leżysz nieruchomo podczas odpoczynku po jodze – światło nie zgaśnie i nie musisz machać ręką.',
    features: [
      'Detekcja mikroruchów (oddychanie, czytanie, medytacja)',
      'Podział pomieszczenia na strefy (np. sofa, biurko, łóżko)',
      'Pomiar natężenia światła dziennego (regulacja stałego oświetlenia)',
      'Kontaktrony ukryte w ramach okien i drzwi wejściowych',
    ],
  },
  {
    id: 'cap-interface',
    title: 'Minimalistyczne panele dotykowe i sterowanie domem',
    category: 'interface',
    badge: 'Panele Dotykowe',
    description:
      'Jeden panel ścienny zamiast rzędu 6 włączników: zastępuje wszystkie klawisze, termostat i sterownik rolet.',
    proAdvantage:
      'Szklane panele dotykowe Shelly Wall Display zintegrowane bezpośrednio z siecią domową, wyświetlające temperaturę, sterowanie muzyką i podgląd z kamer.',
    shellyAdvantage:
      'Mikromoduły Shelly współpracują z dowolnym wybranym przez architekta tradycyjnym osprzętem klawiszowym (np. Jung LS990, Schneider Sedna, Berker Q.7).',
    scenariosExample:
      'Wypowiedz na głos „Chcę poćwiczyć jogę” do asystenta lub naciśnij jeden klawisz „Scena Relaks” przy wejściu do pokoju.',
    features: [
      'Dotykowe panele ścienne 4" z podglądem kamer i klimatu',
      'Współpraca z dowolnymi włącznikami klawiszowymi na rynku',
      'Sterowanie głosowe przez lokalnego asystenta głosowego; asystenci chmurowi wymagają internetu',
      'Nowoczesna aplikacja na smartfony i tablety domowników',
    ],
  },
];

export const HIKVISION_PRODUCTS: HikvisionProductLine[] = [
  {
    id: 'hik-colorvu',
    series: 'Hikvision ColorVu & Smart Hybrid Light',
    category: 'cctv_colorvu',
    tagline: 'Kolor 24/7 w nocy z przetwornikiem F1.0',
    keyTech: 'Obiektyw o super-aperturze F1.0 + matryca 4K Ultra HD 1/1.2" CMOS',
    bestUse: 'Elewacja budynku, drzwi wejściowe, strefa wjazdu, ciągi komunikacyjne',
    highlights: [
      'Pełnokolorowy obraz o zmierzchu i w nocy bez sztucznego naświetlania',
      'Smart Hybrid Light: dyskretny tryb IR, który kamera automatycznie przełącza na miękkie światło białe po wykryciu człowieka',
      'Rozdzielczość 4K (8 Megapikseli) z kompresją H.265+ oszczędzającą miejsce na dysku',
      'Metalowa obudowa IK10 (wandaloodporna) i IP67 (odporność na mróz i ulewy)',
    ],
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-acusense',
    series: 'Hikvision AcuSense & Live Guard',
    category: 'cctv_acusense',
    tagline: 'Analityka AI Deep Learning: filtracja fałszywych alarmów + aktywna syrena',
    keyTech: 'Klasyfikacja celów Człowiek / Pojazd + zintegrowany stroboskop i głośnik audio',
    bestUse: 'Wejście do budynku, brama wjazdowa, strefa garażu, ochrona przed intruzami',
    highlights: [
      'Precyzyjne odróżnianie ludzi i samochodów od zwierząt, kołyszących się gałęzi czy ulewnego deszczu',
      'Live Guard: wbudowany stroboskop i komunikat głosowy ("Strefa chroniona, proszę opuścić teren") odstraszający intruza przy próbie podejścia pod budynek',
      'Dwukierunkowe audio: możliwość rozmowy przez kamerę bezpośrednio z poziomu telefonu',
      'Natychmiastowe powiadomienia PUSH ze zdjęciem zdarzenia na smartfon',
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-tandemvu',
    series: 'Hikvision TandemVu Dual-Lens PTZ',
    category: 'cctv_tandemvu',
    tagline: 'Dwa obiektywy w jednej kamerze: stały podgląd 180° + obrotowy zoom 32x ze śledzeniem celu',
    keyTech: 'Kanał panoramiczny do ogólnego widoku + moduł obrotowy PTZ z auto-trackingiem',
    bestUse: 'Teren wokół domu, wejście główne, brama wjazdowa i podjazd',
    highlights: [
      'Górny obiektyw stale monitoruje całą przestrzeń 180° – ograniczenie martwych stref w monitorowanym obszarze',
      'Dolny moduł PTZ z zoomem optycznym 32x automatycznie namierza i podąża za poruszającą się osobą (Smart Tracking 3.0)',
      'Odczytywanie tablic rejestracyjnych pojazdów wjeżdżających na posesję',
      'Zastępuje kilka tradycyjnych kamer statycznych w jednym punkcie montażowym',
    ],
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-intercom-modular',
    series: 'Hikvision IP Modular Intercom 2nd Gen (KD8 / KD9 Series)',
    category: 'intercom_modular',
    tagline: 'Elegancka stacja bramowa ze stali nierdzewnej lub aluminium anodowanego',
    keyTech: 'Kamera 2MP Fisheye 180° WDR + moduły zbliżeniowe Mifare/NFC/Bluetooth + zamek szyfrowy',
    bestUse: 'Furtka wejściowa, brama frontowa domu, główne wejście do budynku',
    highlights: [
      'Modułowa budowa: zestawienie modułu kamery z klawiaturą PIN, czytnikiem breloków i ekranem lokatorów',
      'Szerokokątna kamera 180° widzi całą sylwetkę osoby stojącej przed furtką oraz paczkę na ziemi',
      'Bezpośrednie sterowanie elektrozaczepem furtki i automatyką bramy wjazdowej z dwóch niezależnych przekaźników',
      'Wandaloodporna obudowa IK08/IK09 odporna na trudne warunki atmosferyczne od -40°C do +60°C',
    ],
    image: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-minmoe-face',
    series: 'Hikvision MinMoe Face Recognition Terminals',
    category: 'intercom_face',
    tagline: 'Otwieranie furtki i drzwi za pomocą biometrii twarzy bez kluczy',
    keyTech: 'Algorytm Deep Learning Face Recognition z podwójną kamerą antyspoofing 3D',
    bestUse: 'Furtka wejściowa, drzwi główne do domu, wejście do strefy prywatnej',
    highlights: [
      'Wchodzisz do domu z siatkami z zakupami bez szukania kluczy – stacja rozpoznaje Twoją twarz i otwiera drzwi',
      'Rozpoznawanie z ochroną antyspoofingową utrudnia otwarcie zdjęciem czy filmem (zgodnie z deklaracją producenta)',
      'Kamera z doświetleniem IR działa niezawodnie w kompletnych ciemnościach i w pełnym słońcu',
      'Możliwość generowania tymczasowych kodów QR na smartfon dla gości i kurierów',
    ],
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'hik-android-screen',
    series: 'Hikvision Android Touch Station (DS-KH9510 / KH9310)',
    category: 'intercom_android',
    tagline: 'Dotykowy ekran 10" IPS ze szkłem 2.5D z wbudowaną obsługą Smart Home',
    keyTech: 'System Android + aplikacja do domu + podgląd kamer na żywo',
    bestUse: 'Ściana w holu, kuchnia, salon, gabinet – centralny punkt sterowania domem',
    highlights: [
      'Wielofunkcyjny ekran: oprócz odbierania domofonu uruchamia aplikację sterowania domem (światło, rolety, klimat)',
      'Podgląd na żywo ze wszystkich kamer posesji w pełnej rozdzielczości',
      'Interkom domowy: rozmowy głosowe między pokojami (np. kuchnia z piętrem)',
      'Zasilanie PoE (jeden cienki przewód sieciowy dostarcza prąd i dane)',
    ],
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
  },
];

export const TELETECHNIC_SERVICES: TeletechnicService[] = [
  {
    id: 'cctv_ai',
    title: 'Monitoring wizyjny Hikvision ColorVu i AcuSense AI',
    subtitle: 'Kamery 4K / 8MP, pełen kolor w nocy F1.0, rozpoznawanie ludzi i aut, eliminacja fałszywych alarmów',
    icon: 'Camera',
    description:
      'Cyfrowa telewizja przemysłowa IP oparta na przetwornikach Hikvision ColorVu z technologią Smart Hybrid Light i analityką AcuSense AI. Obraz w nocy, aktywny stroboskop Live Guard i prywatność bez wysyłania nagrań do chmury.',
    humanExplanation:
      'Kamera rejestruje w nocy obraz w kolorze i odróżnia człowieka oraz auto od zwierzęcia czy gałęzi, dzięki czemu ogranicza zbędne powiadomienia w telefonie. Wszystkie nagrania zapisują się w domowej szafce na twardym dysku, bez opłat abonamentowych.',
    equipment: [
      'Kamery kopułkowe lub tubowe Hikvision 4K ColorVu / AcuSense w obudowach IK10/IP67',
      'Rejestrator NVR Hikvision Pro z dyskami serwerowymi (WD Purple / Seagate SkyHawk) do pracy ciągłej 24/7',
      'Zasilanie PoE (jeden kabel sieciowy dostarcza obraz i prąd do kamery na odległość do 100m)',
      'Aplikacja Hik-Connect: szyfrowany podgląd w telefonie bez stałego publicznego adresu IP i bez opłat',
    ],
    specs: [
      'Przetworniki ultra-czułe F1.0 z technologią ColorVu (obraz w kolorze 24/7)',
      'Algorytmy Deep Learning (filtracja fałszywych alarmów)',
      'Kompresja H.265+ (oszczędność miejsca na twardym dysku)',
      'Odporność na skrajne temperatury od -40°C do +60°C',
    ],
  },
  {
    id: 'access_control',
    title: 'Wideodomofony IP Hikvision Modular i rozpoznawanie twarzy MinMoe',
    subtitle: 'Moduły ze stali nierdzewnej, biometria twarzy, zdalne otwieranie furtki i bramy w smartfonie',
    icon: 'KeyRound',
    description:
      'Kontrola strefy wejścia oparta na modułowych panelach zewnętrznych Hikvision 2nd Gen (DS-KD8003/KD9203) oraz terminalach biometrycznych MinMoe Face Recognition. Wejście bez kluczy, wideorozmowy w aplikacji Hik-Connect i dotykowe ekrany Android w domu.',
    humanExplanation:
      'Wchodzisz na posesję bez szukania kluczy – furtka otwiera się na widok twarzy, na kod lub brelok. Gdy dzwoni kurier, odbierasz wideo na telefonie, uchylasz furtkę i widzisz, jak zostawia paczkę.',
    equipment: [
      'Modułowa stacja bramowa Hikvision ze stali nierdzewnej z kamerą szerokokątną 180° WDR',
      'Terminale rozpoznawania twarzy Hikvision MinMoe z podwójną kamerą antyspoofingową',
      'Dotykowy monitor wewnętrzny 7" lub 10" ze szkłem 2.5D z obsługą aplikacji Smart Home',
      'Atestowane elektrozaczepy rewersyjne i zamki silnikowe ze sterowaniem dwustopniowym',
    ],
    specs: [
      'Rozpoznanie twarzy z ochroną przed zdjęciami (antyspoofing)',
      'Darmowa aplikacja Hik-Connect na nielimitowaną liczbę telefonów domowników',
      'Czasowe kody PIN i kody QR dla kurierów i serwisantów',
      'Integracja z automatyką: dzwonek wycisza muzykę multiroom i włącza światło przed furtką',
    ],
  },
  {
    id: 'structured_lan',
    title: 'Sieci strukturalne LAN, światłowody i szafy RACK 19"',
    subtitle: 'Szybki internet w całym domu: okablowanie kat. 6A/7, switche PoE+ i Wi-Fi 6/7 Mesh',
    icon: 'Network',
    description:
      'Projekt i wykonanie okablowania teleinformatycznego. Centralna szafa serwerowa RACK 19", organizery kabli, patchpanele krosowe, zasilacze awaryjne UPS oraz punkty dostępowe Wi-Fi montowane podtynkowo i podsufitowo.',
    humanExplanation:
      'Stabilny internet bez przerywania wideorozmów czy oglądania filmów w 4K. Kable doprowadzone do biurek i telewizorów, a punkty Wi-Fi na suficie przełączają telefon między piętrami i pokojami.',
    equipment: [
      'Szafa RACK 19" z wentylacją termostatyczną i szklanymi drzwiami dymionymi',
      'Przewody teleinformatyczne S/FTP kat. 6A / 7 — do 10 Gbit/s na krótkich odcinkach (kat. 6A, po pomiarach)',
      'Switche zarządzalne PoE+ z podziałem na bezpieczne sieci VLAN (Kamery, IoT, Dom, Goście)',
      'Punkty dostępowe Wi-Fi 6/7 podsufitowe z szybkim roamingiem 802.11k/v/r',
    ],
    specs: [
      'Pomiary toru transmisyjnego miernikiem certyfikacyjnym Fluke',
      'Zasilanie gwarantowane UPS (monitoring i internet działają bez prądu)',
      'Pełna izolacja kamer i automatyki od domowych komputerów (VLAN IoT)',
    ],
  },
  {
    id: 'alarm_sswin',
    title: 'Systemy alarmowe SSWiN i ochrona obwodowa',
    subtitle: 'Certyfikowane centrale alarmowe Grade 2 / Grade 3 zintegrowane z automatyką Shelly',
    icon: 'ShieldAlert',
    description:
      'Wdrożenia oparte na centralach alarmowych ze zintegrowanymi kontaktronami okiennymi, czujkami kurtynowymi zewnętrznymi i czujkami dualnymi PIR+MW. Współpraca z kamerami Hikvision AcuSense.',
    humanExplanation:
      'Czujniki okienne pracują podwójnie: w nocy pilnują domu przed włamaniem, a w dzień wyłączają klimatyzację i grzejnik przy wietrzeniu. Kiedy uzbrajasz alarm kodem przy wyjściu, system gasi światła i zamyka rolety.',
    equipment: [
      'Centrala alarmowa ze zintegrowanym powiadomieniem GSM LTE i łącznością IP',
      'Czujki kurtynowe zewnętrzne (ochrona posesji zanim ktoś dotknie okna)',
      'Szklane dotykowe manipulatory ścienne z czytnikiem breloków zbliżeniowych',
      'Syreny zewnętrzne z własnym zasilaniem akumulatorowym',
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
    title: '„Chcę poćwiczyć jogę” (Joga & Medytacja)',
    tag: 'Relaks & Prywatność',
    tagColor: '#8B5CF6',
    trigger: 'Komenda głosowa: „Chcę poćwiczyć jogę” lub dedykowany przycisk sceny na ścianie',
    description:
      'Powiedz „Chcę poćwiczyć jogę” lub naciśnij jeden przycisk. Światło przygasa, rolety się zamykają, a z głośników płynie spokojna muzyka. Zwykle wszystko ustawia się w 1–2 sekundy.',
    humanNote:
      'Nie musisz chodzić po pokoju, zaciągać rolet, szukać pilota od klimatyzacji ani włączać głośnika w telefonie. Wypowiadasz jedno zdanie, rozkładasz matę i przechodzisz do ćwiczeń.',
    detailPoints: [
      'Główne światło wygasza się w ciągu 2 sekund, zapalają się ciepłe cokoły LED 2200K na 15% jasności',
      'Rolety lub żaluzje fasadowe bezszelestnie opuszczają się, zapewniając prywatność',
      'W strefie ćwiczeń multiroom włącza uspokajający ambient, mantry lub dźwięki lasu',
      'Wentylacja mechaniczna/rekuperacja bezgłośnie zwiększa dopływ świeżego tlenu',
      'Dzwonek domofonu i powiadomienia w tym pokoju zostają wyciszone (tryb Zen)',
    ],
    actionSteps: [
      { icon: 'Sun', label: 'Światło Nastrojowe', detail: 'Ciepły bursztyn 2200K na 15% (linie cokołowe i podsufitowe)' },
      { icon: 'SlidersHorizontal', label: 'Rolety i Żaluzje', detail: 'Zamknięcie dla pełnej dyskrecji przed okiem sąsiadów' },
      { icon: 'Volume2', label: 'Akustyka Multiroom', detail: 'Spokojny ambient lub playlista Joga & Zen ze Spotify/Tidal' },
      { icon: 'Wind', label: 'Mikroklimat', detail: 'Cichy napływ natlenionego powietrza, temperatura 21.5°C' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1545205597-3d9d02c29597?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sparkles',
  },
  {
    id: 'sc-sunrise',
    number: '02',
    title: 'Łagodne Budzenie (Sunrise Wake-Up)',
    tag: 'Zdrowy Sen & Energia',
    tagColor: '#F59E0B',
    trigger: 'Harmonogram biologiczny lub godzina budzika w telefonie',
    description:
      '20 minut przed planowanym wstaniem rolety unoszą się wpuszczając światło, oświetlenie w sypialni symuluje świt, podłoga w łazience staje się ciepła, a z głośników płynie podcast.',
    humanNote:
      'Wstajesz wypoczęty, bo ciało reaguje na narastające światło. Wchodzisz bosymi stopami na ciepłe płytki w łazience.',
    detailPoints: [
      'Stopniowe unoszenie rolet i lameli o 10-20% wpuszczające naturalne słońce',
      'Światło w sypialni naśladuje świt, przechodząc z 2000K do rześkiego 3500K',
      'Klimat: podgrzanie podłogi w łazience do 23.5°C przed wejściem pod prysznic',
      'Cicha poranna playlista lub wiadomości w głośnikach sufitowych',
      'Uruchomienie ekspresu do kawy w kuchni dokładnie o ustalonej porze',
    ],
    actionSteps: [
      { icon: 'SunMedium', label: 'Światło Świtu', detail: 'Stopniowe rozjaśnianie od ciepłego bursztynu do światła dziennego' },
      { icon: 'SlidersHorizontal', label: 'Rolety', detail: 'Stopniowe uchylenie wpuszczające pierwsze promienie poranka' },
      { icon: 'Flame', label: 'Ciepła Podłoga', detail: 'Automatyczne dogrzanie łazienki do komfortowych 23.5°C' },
      { icon: 'Coffee', label: 'Ekspres', detail: 'Świeża kawa gotowa w momencie zejścia do kuchni' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sun',
  },
  {
    id: 'sc-masteroff',
    number: '03',
    title: 'Wyjście z domu („Wyłącz wszystko”)',
    tag: 'Bezpieczeństwo & Wygoda',
    tagColor: '#EF4444',
    trigger: 'Pojedynczy klawisz przy drzwiach wejściowych lub zbliżenie breloka',
    description:
      'Jeden przycisk przy drzwiach odcina zasilanie gniazd żelazka, ekspresu i płyty indukcyjnej, gasi światła, opuszcza żaluzje fasadowe, przełącza ogrzewanie w tryb oszczędny i uzbraja monitoring.',
    humanNote:
      'Nie musisz wracać z połowy drogi, by sprawdzić, czy żelazko jest wyjęte z gniazdka. Wciskasz guzik i wiesz, że dom jest wyłączony.',
    detailPoints: [
      'Koniec z zastanawianiem się "czy na pewno wyłączyłam / wyłączyłem żelazko"',
      'Automatyczne obniżenie temperatury do trybu Eco',
      'Dioda LED przy drzwiach potwierdza, że wszystkie okna są zamknięte',
      'Kamery Hikvision AcuSense przechodzą w aktywny tryb obrony obwodowej',
    ],
    actionSteps: [
      { icon: 'Power', label: 'Obwody Ryzyka', detail: 'Mechaniczne odcięcie zasilania gniazd żelazka i płyty' },
      { icon: 'LightbulbOff', label: 'Wszystkie Światła', detail: 'Automatyczne wygaszenie oświetlenia we wszystkich pokojach' },
      { icon: 'ShieldCheck', label: 'Bezpieczeństwo', detail: 'Uzbrojenie stref alarmu i aktywacja analityki sylwetek AI' },
      { icon: 'SlidersHorizontal', label: 'Zacienienie', detail: 'Opuszczenie rolet chroniące wnętrza przed spojrzeniami' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=85',
    icon: 'LogOut',
  },
  {
    id: 'sc-cinema',
    number: '04',
    title: 'Kino Domowe (Movie Night)',
    tag: 'Multimedia & Atmosfera',
    tagColor: '#3B82F6',
    trigger: 'Komenda „Włącz kino”, przycisk w salonie lub włączenie telewizora/projektora',
    description:
      'Gdy włączasz film, żaluzje zjeżdżają tworząc zaciemnienie blackout, oświetlenie gaśnie zostawiając akcent 5%, opuszcza się ekran projektora, a nagłośnienie wypełnia przestrzeń.',
    humanNote:
      'Klimat kinowy bez wstawania z kanapy. Jeden dotyk przycisku przygaśnia światło.',
    detailPoints: [
      '100% zaciemnienia roletami lub zasłonami z tkaniną blackout',
      'Dyskretne oświetlenie przypodłogowe 5% w barwie kinowej indygo/ciepłej',
      'Uruchomienie projektora, ekranu elektrycznego i amplitunera AV',
      'Wyciszenie zbędnych powiadomień w strefie salonu',
    ],
    actionSteps: [
      { icon: 'SlidersHorizontal', label: 'Zacienienie', detail: 'Całkowite zaryglowanie rolet i zasłon blackout' },
      { icon: 'Sun', label: 'Światło Kinowe', detail: 'Automatyczne przygaśnięcie do 5% pod kanapą i szafką RTV' },
      { icon: 'Tv', label: 'Projekcja', detail: 'Opuszczenie windy projektora i włączenie nagłośnienia kinowego' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
    icon: 'Tv',
  },
  {
    id: 'sc-courier',
    number: '05',
    title: 'Kurier i Furtka pod Kontrolą (Hikvision IP)',
    tag: 'Wideodomofon & Dostęp',
    tagColor: '#F97316',
    trigger: 'Naciśnięcie dzwonka na stacji bramowej Hikvision KD8003 / KD9613',
    description:
      'Dzwonek przekierowuje wideorozmowę na smartfon w aplikacji Hik-Connect. Rozmawiasz z kurierem, uchylasz furtkę i widzisz na żywo, jak kładzie paczkę.',
    humanNote:
      'Nie musisz prosić sąsiada o odbiór przesyłki. Otwierasz furtkę na odległość, a nagranie zapisuje się na dysku NVR.',
    detailPoints: [
      'Dźwięk dwukierunkowy z redukcją szumów wiatru i ulicy',
      'Możliwość generowania tymczasowych kodów PIN/QR dla kurierów i ekip',
      'Zapis obrazu na lokalnym dysku w domu',
      'Wyciszenie muzyki multiroom w domu na czas dzwonienia furtki',
    ],
    actionSteps: [
      { icon: 'Video', label: 'Połączenie HD', detail: 'Wideo 180° w telefonie w aplikacji Hik-Connect' },
      { icon: 'KeyRound', label: 'Zdalne Otwarcie', detail: 'Jedno dotknięcie zwalnia elektrozaczep furtki' },
      { icon: 'HardDrive', label: 'Zapis NVR', detail: 'Zdarzenie zapisane na dysku bez opłat abonamentowych' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1558036117-15d82a90b9b1?auto=format&fit=crop&w=1200&q=80',
    icon: 'Video',
  },
  {
    id: 'sc-water',
    number: '06',
    title: 'Jak zabezpieczamy dom przed zalaniem (Zawór + Czujniki)',
    tag: 'Ochrona Majątku',
    tagColor: '#0284C7',
    trigger: 'Wykrycie wilgoci przez czujnik pod pralką, zmywarką lub w kotłowni',
    description:
      'Gdy pęka wężyk pod umywalką, sensor wykrywa wodę i wysyła sygnał do zaworu silnikowego. Zawór ze sprężyną powrotną zamyka się samoczynnie przy zaniku zasilania; sterowanie elektroniczne wymaga zasilania.',
    humanNote:
      'Skala zalania sąsiada i zniszczeń podłogi wartych kilkadziesiąt tysięcy złotych zostaje ograniczona, nawet gdy śpisz lub jesteś na wakacjach.',
    detailPoints: [
      'Działa w domu, także bez internetu i bez prądu (zawór sam się zamyka)',
      'Zawory kulowe ze sprężyną powrotną odcinające wodę nawet przy braku zasilania',
      'Powiadomienie PUSH na telefon z lokalizacją wycieku',
      'Cykliczne auto-odkamienianie zaworów raz w tygodniu w nocy',
    ],
    actionSteps: [
      { icon: 'Droplets', label: 'Detekcja Wycieku', detail: 'zamknięcie zaworu zwykle w kilka sekund' },
      { icon: 'ShieldAlert', label: 'Mechaniczne Odcięcie', detail: 'Zamknięcie głównego zaworu wody' },
      { icon: 'Phone', label: 'Alarm PUSH', detail: 'Powiadomienie na telefony domowników z mapą wycieku' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    icon: 'Droplets',
  },
  {
    id: 'sc-sleep',
    number: '07',
    title: 'Biorytmiczny Sen (Bio-Sleep)',
    tag: 'Zdrowie & Biorytm',
    tagColor: '#10B981',
    trigger: 'Wykrycie ruchu stopą przy łóżku w godzinach 23:00 - 06:00',
    description:
      'Gdy wstajesz w nocy do łazienki, radar pod łóżkiem zapala podświetlenie cokołowe na 5% w barwie ciepłego bursztynu 1800K. Światło prowadzi Cię bez oślepiania.',
    humanNote:
      'Nie musisz szukać po omacku włącznika ani mrużyć oczu przed ostrym światłem. Idziesz oświetloną ścieżką, a po powrocie do łóżka zasypiasz z powrotem.',
    detailPoints: [
      'Barwa 1800 K (bursztynowa), o ograniczonej emisji światła niebieskiego',
      'Temperatura w sypialni automatycznie obniżana do 18.5°C na czas snu',
      'Cicha praca siłowników ogrzewania i bezgłośne wygaszanie',
      'Brak dźwięków powiadomień i pukania domofonu w strefie sypialnej',
    ],
    actionSteps: [
      { icon: 'Moon', label: 'Cokoły Bursztynowe', detail: 'Światło 1800K na 5% prowadzi do celu bez oślepiania' },
      { icon: 'Thermometer', label: 'Klimat Nocny', detail: 'Rześkie 18.5°C sprzyjające zasypianiu' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
    icon: 'Moon',
  },
  {
    id: 'sc-dinner',
    number: '08',
    title: '„Przytulna Kolacja”',
    tag: 'Komfort & Atmosfera',
    tagColor: '#F59E0B',
    trigger: 'Komenda głosowa: „Włącz kolację” lub przycisk sceny w jadalni',
    description:
      'W porze wieczornej oświetlenie sufitowe wygasza się, stół jadalniany oświetla ciepłe światło 2400K, rolety i zasłony zamykają się, a w tle płynie jazz.',
    humanNote:
      'Jeden dotyk przycisku lub komenda zmienia przestrzeń dzienną w restaurację. Zero biegania po włącznikach i pilotach.',
    detailPoints: [
      'Ściemnienie światła nad stołem do 35% o barwie ciepłego bursztynu 2400K',
      'Automatyczne zamknięcie rolet i żaluzji we wszystkich oknach salonu i kuchni',
      'Uruchomienie subtelnego podświetlenia blatów kuchennych i witryn szklanych',
      'Cicha, elegancka playlista z głośników sufitowych w strefie jadalni',
    ],
    actionSteps: [
      { icon: 'Sun', label: 'Światło Kolacji', detail: 'Ciepły blask 2400K nad stołem jadalnym i wyspą' },
      { icon: 'SlidersHorizontal', label: 'Rolety & Zasłony', detail: 'Zamknięcie przed zmierzchem chroniące prywatność' },
      { icon: 'Volume2', label: 'Akustyka Tła', detail: 'Cichy jazz lub chillout z głośników w salonie i jadalni' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sparkles',
  },
  {
    id: 'sc-vacation',
    number: '09',
    title: 'Tryb Urlopowy (Symulacja Obecności)',
    tag: 'Maksymalne Bezpieczeństwo',
    tagColor: '#10B981',
    trigger: 'Aktywacja w aplikacji przed wyjazdem na wakacje',
    description:
      'Gdy wyjeżdżasz na urlop, system losowo zapala i gasi światła w salonie, sypialni i gabinecie, imitując obecność lokatorów. Główny zawór wody zostaje odcięty, a kamery chronią wejście do budynku.',
    humanNote:
      'Wypoczynek z dala od domu. Potencjalny intruz z ulicy widzi światła w oknach, woda jest odcięta, a Ty masz podgląd na żywo.',
    detailPoints: [
      'Inteligentna symulacja obecności – realistyczne zapalanie świateł w różnych pokojach wieczorami',
      'Mechaniczne odcięcie głównego dopływu wody w celu ochrony przed zalaniem',
      'Przełączenie klimatyzacji i ogrzewania w oszczędny tryb ochrony przed wychłodzeniem/przegrzaniem',
      'Kamery Hikvision AcuSense na wejściu aktywnie wykrywają obecność intruza i natychmiast wysyłają powiadomienie',
    ],
    actionSteps: [
      { icon: 'Lightbulb', label: 'Symulacja Ruchu', detail: 'Realistyczne sceny świetlne wieczorem w różnych pokojach' },
      { icon: 'Droplets', label: 'Zawór Wody', detail: 'Pełne fizyczne odcięcie dopływu wody do budynku' },
      { icon: 'ShieldCheck', label: 'Strażnik Hikvision', detail: 'Analityka AI sylwetek ludzkich przy wejściu do domu' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80',
    icon: 'ShieldCheck',
  },
];

export const WORKFLOW_STEPS = [
  {
    number: '01',
    title: 'Krótka ankieta o domu',
    desc: 'Odpowiadasz na 3 pytania i zostawiasz kontakt — oddzwaniamy z propozycją.',
    humanNote: 'Zajmie Ci to około 2 minut. Nic nie płacisz i do niczego się nie zobowiązujesz.',
  },
  {
    number: '02',
    title: 'Sprawdzenie domu — za darmo',
    desc: 'Inżynier sprawdza rozdzielnicę, puszki i kable oraz to, czy jest przewód neutralny.',
    humanNote: 'Nie zgadujemy — sprawdzamy instalację miernikami, żeby nie było niespodzianek.',
  },
  {
    number: '03',
    title: 'Plan i cena na piśmie',
    desc: 'Lista urządzeń, cena i terminy.',
    humanNote: 'Wiesz, co i za ile montujemy, zanim zaczniemy.',
  },
  {
    number: '04',
    title: 'Montaż bez kurzu',
    desc: 'Wiercimy z odsysaniem pyłu, zabezpieczamy podłogi i opisujemy obwody.',
    humanNote: 'Wkładamy ochraniacze na buty. Po pracy sprzątamy.',
  },
  {
    number: '05',
    title: 'Start, sprawdzenie awarii i nauka obsługi',
    desc: 'Pokazujemy, jak wszystko działa, ustawiamy aplikacje i dajemy proste instrukcje.',
    humanNote: 'Sprawdzamy, czy każdy domownik umie zapalić światło, otworzyć furtkę i podejrzeć kamery.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'dzialanie',
    question: 'Czy system Shelly i monitoring działają, gdy w domu zabraknie internetu?',
    simpleAnswer:
      'Tak. Wszystkie funkcje domowe (włączniki, moduły Shelly, zawory wody, rolety, ogrzewanie, podgląd z kamer Hikvision) działają bezpośrednio w sieci domowej, bez połączenia z internetem.',
    technicalDetails:
      'Moduły Shelly Pro i Plus w sieci lokalnej komunikują się bezpośrednio przez protokół CoAP/MQTT z domowym serwerem. Brak internetu oznacza jedynie brak powiadomień poza domem – cały budynek pracuje dalej lokalnie (Local-First).',
  },
  {
    category: 'bezpieczenstwo',
    question: 'Czy kamery Hikvision i nagrania z wideodomofonu są zabezpieczone przed hakerami?',
    simpleAnswer:
      'Tak. Nagrania nie trafiają na serwery chmurowe. Obraz z kamer ColorVu, AcuSense i wideodomofonu zapisuje się na dysku w rejestratorze NVR w szafie RACK.',
    technicalDetails:
      'Instalacje DOMENCE izolują urządzenia wizyjne w dedykowanej podsieci VLAN bez bezpośredniego dostępu do publicznego internetu. Zdalny dostęp w aplikacji Hik-Connect odbywa się przez szyfrowany strumień z uwierzytelnianiem dwuskładnikowym (2FA) i lokalnym kodem weryfikacyjnym.',
  },
  {
    category: 'remont',
    question: 'Mam już wykończone mieszkanie (płytki, gładzie). Czy trzeba kuć ściany lub zrywać tynki?',
    simpleAnswer:
      'Często nie jest to konieczne. W wykończonych obiektach stosujemy mikromoduły Shelly Plus, montowane w puszkach pod włącznikami światła, oraz sensory bezprzewodowe. Montaż wykonujemy z odsysaniem pyłu.',
    technicalDetails:
      'Instalujemy miniaturowe mikromoduły Shelly Plus 1PM / 2PM / Dimmer za tradycyjnym osprzętem klawiszowym. W przypadku braku przewodu neutralnego N stosujemy moduły z bypassami rezystancyjnymi zapobiegającymi żarzeniu się diod LED. Zawór odcinający wodę montowany jest bezpośrednio na istniejącym zaworze kulowym.',
  },
  {
    category: 'dzialanie',
    question: 'Czy obsługa systemu nie będzie za trudna dla dzieci lub starszych rodziców?',
    simpleAnswer:
      'Wszystkie tradycyjne włączniki na ścianach działają tak samo jak w zwykłym domu. Dziecko lub senior po prostu wciska klawisz na ścianie, a światło się zapala. Aplikacja czy asystent głosowy to tylko wygodny dodatek dla chętnych.',
    technicalDetails:
      'Projektujemy automatykę z zachowaniem zasady Fail-Safe. Każdy obwód posiada fizyczny interfejs manualny. W przypadku awarii sterownika, obwody powracają do stanu bezpiecznego i można nimi sterować ręcznie za pomocą tradycyjnego klawisza.',
  },
  {
    category: 'bezpieczenstwo',
    question: 'Czy w rozdzielnicy nie powstanie pożar i czy montaż jest zgodny z warunkami polisy domu?',
    simpleAnswer:
      'Ryzyko ograniczamy do minimum: stosujemy wyłącznie atestowane moduły i protokoły pomiarowe. Stosujemy wyłącznie atestowane moduły Shelly Pro z certyfikatem niepalności obudowy V-0 i wbudowanym zabezpieczeniem termicznym OTP. Na koniec prac wykonujemy pomiary odbiorcze i wystawiamy oficjalny protokół do polisy ubezpieczeniowej.',
    technicalDetails:
      'Wszystkie moduły na szynie DIN posiadają wewnętrzny czujnik temperatury – w przypadku przekroczenia 95°C obwód wyłącza się automatycznie. Instalacja wykonywana jest zgodnie z normą PN-HD 60364, a każdy obwód chroniony jest dedykowanym wyłącznikiem nadprądowym i ogranicznikiem przepięć T1+T2.',
  },
  {
    category: 'dzialanie',
    question: 'Co się stanie, gdy w całej okolicy zabraknie prądu?',
    simpleAnswer:
      'Główny monitoring posesji, rejestrator NVR w szafie RACK oraz zasilanie wideodomofonu podtrzymywane są przez zasilacz awaryjny UPS przez co najmniej 3–4 godziny. Po powrocie prądu cały system wznawia pracę w ciągu 1–2 sekund w sieci lokalnej, zwykle bez ingerencji domowników.',
    technicalDetails:
      'Zasilacz UPS on-line z czystą sinusoidą zabezpiecza urządzenia sieciowe przed przepięciami i skokami napięcia przy ponownym włączeniu faz przez zakład energetyczny. Stan przekaźników Shelly po zaniku prądu jest w pełni konfigurowalny (domyślnie wyłączony lub przywrócenie ostatniego stanu).',
  },
  {
    category: 'koszty',
    question: 'Czy inteligentny dom z systemem Shelly realnie obniża rachunki?',
    simpleAnswer:
      'Realne oszczędności pochodzą z dwóch źródeł: strefowego ogrzewania (obniżanie temperatury o 2-3°C w nieużywanych pokojach i w nocy) oraz automatyki rolet (latem zatrzymują upał przed szybą, zmniejszając potrzebę pracy klimatyzatorów).',
    technicalDetails:
      'Korzystamy z algorytmów predykcyjnych opartych na bezwładności cieplnej budynku i czujnikach nasłonecznienia. System opuszcza żaluzje fasadowe od strony południowej, zanim wnętrze się przegrzeje.',
  },
];

export const SMART_MODULES: SmartModule[] = [
  {
    id: 'water_shield',
    name: 'Zawór odcinający wodę + czujniki (bezpieczny przy awarii)',
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
    description: 'Jeden przycisk przy drzwiach gasi oświetlenie i odłącza zasilanie żelazka, płyty i ekspresu.',
    humanExplanation: 'Po naciśnięciu klawisza przy drzwiach, wyłączane jest oświetlenie, odcinane zasilanie wybranych urządzeń i zamykane rolety.',
    price: 850,
    category: 'safety',
    icon: 'Power',
  },
  {
    id: 'cctv_starter',
    name: 'Monitoring Hikvision 4K z analityką AcuSense AI',
    badge: 'Nowość ColorVu',
    description: 'Kamery 4K ColorVu z detekcją ludzi/pojazdów, obraz w nocy, dysk serwerowy 2TB, zapis w domu bez abonamentu.',
    humanExplanation: 'Kamery odróżniają psa od intruza. Obraz nagrywa się na dysk w szafie w nocy w kolorze. Podgląd w telefonie bez opłat abonamentowych.',
    price: 3400,
    category: 'teletechnics',
    icon: 'Camera',
  },
  {
    id: 'alarm_satel_pack',
    name: 'Certyfikowany Alarm SSWiN Grade 2',
    badge: 'Bezpieczeństwo',
    description: 'Centrala hybrydowa, klawiatura szklana, 4 czujki ruchu PIR+MW i powiadomienie LTE.',
    humanExplanation: 'Alarm z atestem. Te same czujki w dzień sterują oświetleniem, a po wyjściu z domu strzegą posesji.',
    price: 3900,
    category: 'teletechnics',
    icon: 'ShieldAlert',
  },
  {
    id: 'blinds_control',
    name: 'Automatyka rolet i żaluzji fasadowych',
    description: 'Regulacja kąta lameli, automatyczne zamykanie o zmierzchu, wietrze lub komendzie.',
    humanExplanation: 'Rano słońce budzi Cię, do jogi rolety tworzą prywatność, a latem żaluzje blokują upał.',
    price: 1400,
    category: 'comfort',
    icon: 'SlidersHorizontal',
  },
  {
    id: 'hvac_control',
    name: 'Strefowa regulacja ogrzewania podłogowego',
    description: 'Niezależna temperatura w każdym pokoju, algorytmy histerezy i oszczędność energii.',
    humanExplanation: 'W sypialni masz 18.5°C do snu, w łazience 23°C. Grzejniki nie pracują, gdy wietrzysz pokój.',
    price: 1800,
    category: 'comfort',
    icon: 'Flame',
  },
  {
    id: 'intercom_poe',
    name: 'Wideodomofon IP Hikvision Modular',
    badge: 'Standard DOMENCE',
    description: 'Wideo rozmowy na smartfonie, sterowanie elektrozaczepem furtki i podgląd kuriera bez abonamentu.',
    humanExplanation: 'Kurier dzwoni do furtki? Odbierasz na telefonie, otwierasz furtkę i widzisz, jak kładzie paczkę pod drzwiami.',
    price: 2900,
    category: 'access',
    icon: 'Video',
  },
  {
    id: 'rack_network_pack',
    name: 'Szafa Teletechniczna RACK 19" + Switch PoE + Wi-Fi 6',
    badge: 'Infrastruktura',
    description: 'Okablowanie, szafa serwerowa z patchpanelem i roaming Wi-Fi w całym domu.',
    humanExplanation: 'Koniec z zawieszającym się internetem i martwymi strefami w sypialni czy gabinecie. Wszystkie kable uporządkowane w szafce.',
    price: 3200,
    category: 'teletechnics',
    icon: 'Network',
  },
  {
    id: 'switchboard_protection_pack',
    name: 'Ochrona przeciwprzepięciowa T1+T2',
    badge: 'Ochrona AGD',
    description: 'Ograniczniki przepięć chroniące elektronikę, pompę ciepła i sprzęt przed burzą.',
    humanExplanation: 'Ochrona przed wyładowaniami atmosferycznymi. Każdy obwód oznaczony etykietą i schematem.',
    price: 950,
    category: 'power',
    icon: 'Cpu',
  },
  {
    id: 'dimming_scenes',
    name: 'Ściemnianie LED DALI-2 & sceny nastrojowe',
    description: 'Rozjaśnianie rano, nocne podświetlenie cokołowe 1800K na 5% i kinowe sceny.',
    humanExplanation: 'W nocy światło w korytarzu nie razi po oczach, zapala się na 5%. Scena jogi tworzy relaksujący klimat.',
    price: 1100,
    category: 'comfort',
    icon: 'Sun',
  },
  {
    id: 'gate_control',
    name: 'Integracja bramy wjazdowej i garażu',
    description: 'Otwieranie geolokalizacją, kontrola stanu zamknięcia i powiadomienia o niedomknięciu.',
    humanExplanation: 'Zbliżasz się do posesji – brama sama się otwiera. Wyjeżdżasz i nie pamiętasz, czy zamknąłeś garaż? Sprawdzasz w aplikacji lub dom sam zamknie go za Tobą.',
    price: 750,
    category: 'access',
    icon: 'DoorClosed',
  },
  {
    id: 'cinema_multimedia_pack',
    name: 'Kino domowe & nagłośnienie multiroom w domu (salon + sypialnia)',
    badge: 'Rozrywka w domu',
    description: 'Dyskretne głośniki sufitowe bezramkowe, integracja amplitunera, synchronizacja światła kinowego i rolet blackout.',
    humanExplanation: 'Włączasz film: światła gasną do 5%, rolety zamykają się, a dźwięk wypełnia pokój.',
    price: 1950,
    category: 'comfort',
    icon: 'Tv',
  },
  {
    id: 'loqed_smart_lock',
    name: 'LOQED Touch Smart Lock 2s (Powered by Shelly) – Dostęp bezkluczykowy',
    badge: 'Touch-to-Open 2s',
    description: 'Otwieranie drzwi w 2 sekundy od lekkiego dotknięcia klamki (telefon w kieszeni), smartfonem lub kodem PIN. Certyfikat SKG***.',
    humanExplanation: 'Wracasz z zakupami w obu rękach – dotykasz klamki łokciem i drzwi same się otwierają. Koniec z szukaniem kluczy po kieszeniach.',
    price: 1850,
    category: 'access',
    icon: 'Lock',
  },
  {
    id: 'shelly_trv_airing_pack',
    name: 'Pakiet "Wietrzenie bez strat ciepła": Shelly BLU Door/Window + Shelly BLU TRV',
    badge: 'Komfort Wietrzenia',
    description: 'Odcięcie zaworu grzejnika po otwarciu okna na wietrzenie i automatyczny powrót do komfortowej temperatury po zamknięciu.',
    humanExplanation: 'Otwierasz okno, by wpuścić świeże powietrze – grzejnik natychmiast wyłącza się, by nie ogrzewać ulicy. Zamykasz okno – ciepło natychmiast wraca.',
    price: 890,
    category: 'comfort',
    icon: 'Wind',
  },
  {
    id: 'shelly_3em_solar_pack',
    name: 'Licznik 3-fazowy Shelly 3EM-63T Gen3 & optymalizacja autokonsumpcji PV',
    badge: 'Energia z PV',
    description: 'Pomiar w czasie rzeczywistym zużycia i produkcji z fotowoltaiki, automatyczne uruchamianie pompy ciepła, bojlera i ładowarki EV.',
    humanExplanation: 'Maksymalizujesz zysk z własnego prądu ze słońca: dom sam ładuje samochód i grzeje wodę dokładnie wtedy, gdy panele produkują darmową energię.',
    price: 1350,
    category: 'power',
    icon: 'Zap',
  },
  {
    id: 'shelly_hazard_leak_pack',
    name: 'Wykrywanie gazu i zalania: Shelly Gas + Shelly Flood S Gen4 — zamknięcie zaworu zwykle w kilka sekund',
    badge: 'Bezpieczeństwo',
    description: 'Wykrywanie ulatniającego się gazu i wycieków wody z natychmiastowym mechanicznym odcięciem zaworu i zrzuceniem zasilania gniazd.',
    humanExplanation: 'Gdy pęknie rura lub zawór kuchenki, dom sam odcina dopływ — zamknięcie zaworu zwykle w kilka sekund i wyłącza prąd w strefie zagrożenia, chroniąc przed zalaniem i wybuchem.',
    price: 1450,
    category: 'safety',
    icon: 'ShieldAlert',
  },
];

export const PACKAGES: PackageOffer[] = [
  {
    id: 'security_intercom',
    title: 'Wideodomofon IP Hikvision & Monitoring Posesji',
    categoryBadge: 'Teletechnika & Kontrola Wejścia',
    badgeType: 'standard',
    timeframe: '1–2 dni robocze',
    description: 'Całościowa kontrola bramy i furtki, eliminacja fałszywych alarmów z AcuSense AI, bezpłatny podgląd wideo 4K bez abonamentu.',
    humanSummary: 'Wiesz, kto dzwoni do furtki, otwierasz ją telefonem, a kamery zapisują obraz w domu.',
    priceNetto: 5300,
    priceBrutto: 6519,
    recommendedFor: 'security',
    features: [
      'Stacja bramowa IP Hikvision ze stali nierdzewnej z kamerą 180° i stykami do furtki',
      'Dotykowy monitor wewnętrzny 7" Android ze szkłem 2.5D i podglądem kamer',
      '2x kamery fasadowe 4K Hikvision ColorVu z analityką ludzi i aut AcuSense AI',
      'Rejestrator NVR z dyskiem serwerowym 2TB bez opłat chmurowych',
      'Czysty montaż z minimalną ingerencją w tynki, z odciągiem pyłu w wykończonych wnętrzach',
      'Brak ukrytych abonamentów – darmowa aplikacja Hik-Connect',
      'Możliwość otwierania furtki z poziomu smartfona z dowolnego miejsca z dostępem do internetu',
    ],
  },
  {
    id: 'retrofit_smart',
    title: 'Smart Retrofit Shelly (Wykończone Wnętrze Bez Kucia)',
    categoryBadge: 'Bestseller: Bez Ingerencji w Tynki',
    badgeType: 'bestseller',
    timeframe: '1–2 dni robocze',
    description: 'Kompletna automatyka Shelly Plus bez kurzu i bez niszczenia gładzi. Zabezpieczenie przed zalaniem, oświetlenie, rolety i sceny jogi.',
    humanSummary: 'Z gotowego mieszkania robimy dom sterowany telefonem w 1–2 dni. Ściany i płytki zostają całe.',
    priceNetto: 6900,
    priceBrutto: 8487,
    recommendedFor: 'retro',
    features: [
      '6x mikromodułów dopuszkowych Shelly Plus z pomiarem zużycia prądu',
      '2x cyfrowe ściemniacze oświetlenia LED bez efektu migotania z trybem nocnym',
      'Ochrona przed zalaniem (bezpieczna przy awarii): 3 czujniki zalania + siłownik zaworu (zamknięcie zaworu zwykle w kilka sekund)',
      'Sterowanie roletami ze sceną „Chcę poćwiczyć jogę” i „Budzenie słońcem”',
      'Lokalna centrala sterująca (przetwarzanie w domu, bez chmury)',
      'Przycisk „Wyjdź z domu” przy drzwiach wejściowych',
      'Czysty montaż z minimalną ingerencją w tynki, z odciągiem z filtrem HEPA H13 w 1–2 dni robocze',
    ],
  },
  {
    id: 'developer_din',
    title: 'Shelly Pro do nowego domu (moduły w rozdzielnicy)',
    categoryBadge: 'Pełny Standard Inżynieryjny',
    badgeType: 'premium',
    timeframe: '3–5 dni roboczych',
    description: 'Przewodowe moduły Shelly Pro DIN w rozdzielnicy elektrycznej, serwer automatyki, sterowanie roletami i oświetlenia oraz szafa teletechniczna RACK.',
    humanSummary: 'Dobre rozwiązanie do nowego domu: połączenia po kablu, czytelna rozdzielnica i schematy na końcu.',
    priceNetto: 13900,
    priceBrutto: 17097,
    recommendedFor: 'deweloperski',
    features: [
      'Moduły przekaźnikowe i ściemniacze Shelly Pro na szynę DIN w rozdzielnicy',
      'Bezpośrednia łączność sieciowa Ethernet LAN RJ45 dla każdego modułu automatyki',
      'Sterownik strefowego ogrzewania podłogowego dla 6-8 niezależnych obwodów',
      '2x zawory ze stali nierdzewnej 230V z samoczynnym zamknięciem bez prądu',
      'Kompletna szafka teletechniczna RACK 19" z panelem krosowym i switchem PoE',
      'Prefabrykacja i czytelne znakowanie rozdzielnicy z ochroną przeciwprzepięciową T1+T2',
      'Pełne ustawienie przykładów: joga, pobudka, wyjście z domu, kino',
    ],
  },
];

export const HOME_MULTIMEDIA = {
  audio: {
    title: 'Multiroom audio i domowe nagłośnienie',
    desc: 'Dyskretne głośniki sufitowe bezramkowe i nagłośnienie strefowe w całym domu. Muzyka ze Spotify, Apple Music lub radia internetowego gra dokładnie w tych pokojach, w których przebywasz.',
    humanNote:
      'W łazience relaksujesz się przy spokojnej muzyce, w kuchni cicho gra poranny podcast, a w salonie leci ulubiona playlista. Wszystkim sterujesz intuicyjnie ze smartfona lub przycisku na ścianie.',
    features: [
      'Niezależne strefy dźwięku (Salon, Kuchnia, Sypialnia, Łazienka, Gabinet)',
      'Wsparcie dla Apple AirPlay 2, Spotify Connect, Tidal i Bluetooth',
      'Scena "Kino Domowe": jedno dotknięcie opuszcza rolety blackout, przygasza światła do 5%, włącza projektor i nagłośnienie surround',
      'Automatyczne przyciszanie dźwięku w całym domu podczas wywołania wideodomofonu Hikvision',
    ],
  },
  cinema: {
    title: 'Sala kinowa i akustyka wnętrz',
    desc: 'Połączenie inteligentnego zaciemnienia roletami blackout, wielostrefowego ściemniania oświetlenia nastrojowego oraz integracji projektora i nagłośnienia kinowego w jednym scenariuszu.',
    humanNote:
      'Nie musisz oddzielnie gasić lamp, szukać pilotów do projektora ani opuszczać zasłon. Jeden klawisz „Kino” lub polecenie głosowe natychmiast przenosi Cię w atmosferę prawdziwej sali filmowej.',
    features: [
      'Automatyczne zamykanie rolet i żaluzji blackout po włączeniu projektora lub TV',
      'Światło cokołowe i podszafkowe 5% w barwie kinowej – bezpieczne poruszanie się po napoje bez oślepiania',
      'Integracja zasilania sprzętu audio-wideo (brak poboru prądu w trybie czuwania)',
      'Sterowanie głosem lub jednym panelem ściennym bez potrzeby używania kilku pilotów',
    ],
  },
  garden: {
    title: 'Multimedia i nagłośnienie ogrodu',
    desc: 'Wodoodporne głośniki ogrodowe i oświetlenie ścieżek zsynchronizowane z muzyką. Taras jako osobna strefa audio z automatycznym harmonogramem wieczornym i integracją ze strefą wejścia.',
    humanNote:
      'Wieczorem na tarasie włącza się subtelne oświetlenie ogrodowe i cicha muzyka. Wystarczy jeden klawisz "Wieczór na tarasie" lub komenda głosowa.',
    features: [
      'Osobna strefa audio dla tarasu i ogrodu (głośniki wodoodporne IP65)',
      'Scena "Wieczór na tarasie": oświetlenie ogrodowe, muzyka i ciepło podłogi',
      'Automatyczne wyciszanie audio w domu przy otwarciu drzwi tarasowych',
      'Sterowanie głosem lub jednym panelem ściennym',
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
    name: 'Wyszukiwanie zdarzeń w nagraniach opisem słownym',
    subtitle: 'Wpisz opis i znajdź klip bez przewijania osi czasu',
    badge: 'Wyszukiwanie naturalnym językiem',
    techStack: 'Lokalny rejestrator NVR • Wyszukiwanie semantyczne bez opłat',
    summary:
      'Zamiast przewijać godziny nagrań, wpisz w wyszukiwarce zdanie zwykłym językiem: "kurier z paczką przy bramie" albo "auto podjeżdżające pod bramę o 20:00". System odnajduje odpowiedni fragment w lokalnym archiwum NVR — wideo nie opuszcza Twojego domu.',
    humanBenefit:
      'Oszczędzasz czas, który wcześniej spędzałeś na przeglądaniu archiwum. Znaleziony klip możesz od razu wyeksportować na telefon lub e-mail.',
    keyPoints: [
      'Zapytania w języku naturalnym: kolor ubioru, typ pojazdu, kierunek ruchu',
      'Przeszukiwanie archiwum na lokalnym NVR — wideo nie opuszcza posesji (RODO)',
      'Eksport znalezionego klipu jednym kliknięciem',
      'Przykłady poniżej.',
    ],
    simulationData: {
      samplePrompts: [
        'Kurier z paczką przy drzwiach wejściowych',
        'Samochód, który podjechał pod bramę o 20:00',
        'Osoba z paczką przy wejściu około 15 minut temu',
        'Nieznany pojazd na podjeździe po godzinie 23:00',
      ],
    },
    icon: 'Search',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'ai-colorvu-acusense',
    name: 'Nocne widzenie w kolorze (ColorVu) z analityką AcuSense',
    subtitle: 'Kolor przy bardzo słabym świetle + dźwięk dwukierunkowy',
    badge: 'Obiektyw F1.0 • Filtracja fałszywych alarmów',
    techStack: 'ColorVu CMOS 1/1.2" / AcuSense / Audio dwukierunkowe',
    summary:
      'Kamery przekazują kolorowy obraz 4K przy minimalnym oświetleniu (Parametr producenta dla serii ColorVu (wartość lux zależy od warunków otoczenia)). Analityka AcuSense odróżnia ludzi i pojazdy od zwierząt, liści czy opadów, więc telefon nie wibruje bez powodu. Audio dwukierunkowe pozwala porozmawiać z gościem przy furtce.',
    humanBenefit:
      'W nocy widzisz kolor kurtki i markę samochodu zamiast szarego ziarna. Kamera podświetla scenę miękkim światłem dopiero wtedy, gdy wykryje człowieka.',
    keyPoints: [
      'Jasny obiektyw F1.0 + przetwornik 4K (seria ColorVu)',
      'AcuSense: filtrowanie fałszywych alarmów od zwierząt, liści, opadów',
      'Audio dwukierunkowe z redukcją szumu wiatru',
      'Smart Hybrid Light: podświetlenie aktywuje się przy podejściu człowieka',
    ],
    icon: 'Eye',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'ai-deepinviewx',
    name: 'Analityka DeepinViewX z modelami AI na krawędzi',
    subtitle: 'Modele AI działają w procesorze kamery, nie w chmurze',
    badge: 'On-device AI • Bez chmury',
    techStack: 'Hikvision DeepinViewX / modele Edge AI',
    summary:
      'Zaawansowane modele sztucznej inteligencji pracują bezpośrednio w procesorze kamery. Analizują zachowanie i trajektorię ruchu wokół wejścia do domu — bez połączenia z internetem i bez wysyłania obrazu na zewnętrzne serwery.',
    humanBenefit:
      'Kamera rozumie kontekst: odróżnia domownika wracającego z pracy od osoby kręcącej się pod drzwiami (loitering), co pomaga chronić prywatność rodziny.',
    keyPoints: [
      'Obliczenia AI na urządzeniu — dane nie trafiają do chmury',
      'Wykrywanie podejrzego przebywania (loitering) przy wejściu i garażu',
      'Wykrywanie upadku osoby — przydatne przy starszych domownikach',
      'Reakcja na zdarzenia z reakcją lokalną, bez opóźnień chmury',
    ],
    icon: 'Cpu',
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'ai-mmwave-radar',
    name: 'Ochrona radarem milimetrowym (mmWave)',
    subtitle: 'Radar obwodowy 60–77 GHz, odporny na pogodę',
    badge: 'Odporność na pogodę • Detekcja mikroruchów',
    techStack: 'mmWave Radar 60/77 GHz / sensory Shelly BLU Radar',
    summary:
      'Radar milimetrowy pilnuje strefy wejścia i podjazdu. W przeciwieństwie do tradycyjnych czujek PIR działa rzetelnie w gęstej mgle, śnieżnicy i ulewnym deszczu, a czujniki obecności rejestrują nawet spokojne oddychanie osoby w pokoju.',
    humanBenefit:
      'Gdy zwykłe czujniki zawodzą we mgle lub zamieci, radar nadal śledzi cel i nie gasi światła, gdy odpoczywasz w pokoju bez ruchu.',
    keyPoints: [
      'Praca w trudnych warunkach: mgła, śnieżyca, ulewny deszcz',
      'Detekcja mikroruchów: obecność i oddech bez machania rękami',
      'Współpraca z kamerami obrotowymi PTZ do automatycznego zoomu',
      'Czujniki obecności Shelly BLU do automatyki oświetlenia',
    ],
    icon: 'Radio',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=85',
  },
  {
    id: 'ai-loqed-lock',
    name: 'Dostęp bezkluczykowy LOQED Touch Smart Lock 2s',
    subtitle: 'Powered by Shelly — otwarcie dotknięciem klamki',
    badge: 'Touch-to-Open • Atest SKG***',
    techStack: 'LOQED Touch Smart Lock 2s / Shelly BLE Mesh / Bluetooth 5.3',
    summary:
      'Drzwi otwierasz dotykiem klamki, gdy telefon masz w kieszeni, albo ze smartfona i kodem PIN na zamku. Zamek współpracuje z modułami Shelly, a europejski certyfikat SKG*** potwierdza wysoką odporność na włamania.',
    humanBenefit:
      'Wracasz z zakupami w obu rękach — dotykasz klamki łokciem i drzwi się otwierają. Możesz też nadać jednorazowy kod PIN gościom lub ekipie remontowej.',
    keyPoints: [
      'Touch to Open: otwarcie bez wyjmowania telefonu z kieszeni',
      'Klawiatura PIN z zabezpieczeniem przed podglądaniem kodu',
      'Certyfikat antywłamaniowy SKG*** (najwyższy poziom)',
      'Integracja ze scenami Shelly: otwarcie zamka rozbraja alarm i zapala światło',
    ],
    icon: 'Lock',
    image: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'ai-shelly-assistant',
    name: 'Asystent głosowy Shelly AI Assistant',
    subtitle: 'Sterowanie domem prostymi zdaniami w aplikacji Shelly',
    badge: 'Generative AI • Rozumienie intencji',
    techStack: 'Shelly AI Core / Shelly Smart Control App / lokalne sceny',
    summary:
      'Sterujesz domem naturalnymi zdaniami w aplikacji Shelly — nie musisz uczyć się sztywnych komend. Asystent rozumie intencje: "ustaw przyjemne światło na kolację", "oglądamy film", "wyłącz zbędne obwody".',
    humanBenefit:
      'Rozmawiasz z domem zwykłym językiem, a sam dobiera temperaturę, kąt żaluzji i nastrojowe oświetlenie. Podpowiada też, które urządzenia warto wyłączyć w szczycie taryfy.',
    keyPoints: [
      'Obsługa głosowa i tekstowa w aplikacji Shelly Smart Control',
      'Optymalizacja kosztów: podpowiedzi w szczycie taryfy energetycznej',
      'Tworzenie złożonych scenariuszy jednym zapytaniem',
      'Lokalne reguły automatyki — bez przekazywania danych profilowych',
    ],
    simulationData: {
      samplePrompts: [
        'Ustaw nastrojowe światło na kolację i opuść żaluzje',
        'Przygotuj gabinet do pracy na temperaturę 22°C',
        'Czy wszystkie okna są zamknięte i czy wyłączono żelazko?',
        'Zoptymalizuj ładowanie auta energią z fotowoltaiki',
      ],
    },
    icon: 'Bot',
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
    subtitle: 'Shelly BLU Door/Window + głowica termostatyczna Shelly BLU TRV',
    trigger: 'Otwarcie lub uchylenie skrzydła okiennego',
    devicesUsed: ['Czujnik Shelly BLU Door/Window', 'Termostat Shelly BLU TRV', 'Bramka Shelly Smart Gateway'],
    reactionTime: 'Natychmiast',
    economicBenefit: 'Niższe rachunki za ogrzewanie w sezonie — dom nie grzeje ulicy podczas wietrzenia',
    description:
      'W momencie otwarcia okna bezprzewodowy czujnik Shelly BLU wysyła komendę Bluetooth do głowicy termostatycznej na grzejniku. Zawór domyka się, żeby nie ogrzewać ulicy, a po zamknięciu okna grzejnik wznawia dogrzewanie pokoju.',
    humanNote:
      'Wpuszczasz rześkie powietrze do sypialni bez marnowania energii i pieniędzy. Grzejnik nie rozgrzewa się bez sensu do maksymalnej mocy, gdy wietrzysz pomieszczenie.',
    actionSequence: [
      { step: 'Otwarcie okna', icon: 'SlidersHorizontal', detail: 'Czujnik Shelly BLU rejestruje rozszczelnienie ramy' },
      { step: 'Odcięcie grzania', icon: 'Flame', detail: 'Głowica Shelly BLU TRV domyka zawór na 0%' },
      { step: 'Powrót do komfortu', icon: 'CheckCircle2', detail: 'Po zamknięciu okna grzejnik automatycznie wznawia dogrzewanie' },
    ],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=85',
  },
  {
    id: 'top-sc-hazard-defense',
    icon: 'ShieldAlert',
    badge: 'Reakcja na awarie',
    title: 'Jak lokalizujemy awarie',
    subtitle: 'Shelly Gas + Shelly Flood S Gen4 + elektrozawór kulowy',
    trigger: 'Wykrycie ulatniającego się gazu lub wilgoci pod pralką/zmywarką',
    devicesUsed: ['Czujnik Shelly Gas', 'Czujniki zalania Shelly Flood S Gen4', 'Siłownik zaworu kulowego Fail-Safe 230V', 'Moduł Shelly Pro 1PM'],
    reactionTime: 'zamknięcie zaworu zwykle w kilka sekund',
    economicBenefit: 'Ochrona przed zniszczeniem podłóg za dziesiątki tysięcy złotych i bezpieczeństwo życia',
    description:
      'W przypadku wykrycia nieszczelności gazu przez Shelly Gas lub pierwszych kropel wody przez sensory Shelly Flood S, system w ciągu kilku sekund mechanicznie zamyka główny zawór odcinający i odłącza zasilanie z gniazd pralki, zmywarki czy pieca.',
    humanNote:
      'Pełen spokój, gdy jesteś w pracy lub na wakacjach. Pęknięty wężyk pralki nie zaleje parkietu ani sąsiada, a ewentualny wyciek gazu zostaje odcięty w zarodku bez udziału człowieka.',
    actionSequence: [
      { step: 'Wykrycie wycieku', icon: 'Droplets', detail: 'Sensory Shelly Flood / Gas wykrywają zagrożenie w kilka sekund' },
      { step: 'Zamknięcie zaworu', icon: 'ShieldCheck', detail: 'Siłownik odcina główny dopływ wody/gazu w kilka sekund' },
      { step: 'Zrzut zasilania', icon: 'Power', detail: 'Przekaźniki Shelly natychmiast odcinają prąd w strefie awarii' },
      { step: 'Alarm na telefon', icon: 'Bell', detail: 'Syrena akustyczna oraz powiadomienie alarmowe PUSH na smartfon' },
    ],
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'top-sc-solar-3em',
    icon: 'Zap',
    badge: 'Inteligentne zarządzanie energią',
    title: 'Kontrola energii i paneli PV',
    subtitle: 'Licznik 3-fazowy Shelly 3EM-63T Gen3 + autokonsumpcja fotowoltaiki',
    trigger: 'Ciągły pomiar prądu, napięcia oraz nadwyżki produkcji z falownika PV',
    devicesUsed: ['Analizator sieci Shelly 3EM-63T Gen3', 'Przekaźniki DIN Shelly Pro 4PM', 'Sterowanie pompą ciepła i ładowarką EV'],
    reactionTime: 'W czasie rzeczywistym',
    economicBenefit: 'Wyższa autokonsumpcja darmowej energii ze słońca — mniej oddawania do sieci',
    description:
      'Licznik 3-fazowy Shelly 3EM-63T Gen3 mierzy w czasie rzeczywistym zużycie i oddawanie energii do sieci. Gdy pojawia się nadwyżka darmowego prądu z fotowoltaiki, dom sam uruchamia grzałkę bojlera, podbija zadaną temperaturę pompy ciepła lub włącza ładowanie samochodu elektrycznego.',
    humanNote:
      'Twoja fotowoltaika zwraca się szybciej. Zamiast oddawać prąd do sieci za ułamek ceny, dom sam wykorzystuje go na naładowanie auta i podgrzanie wody do wieczornej kąpieli.',
    actionSequence: [
      { step: 'Pomiar 3-fazowy', icon: 'Gauge', detail: 'Precyzyjny odczyt poboru i oddawania energii na każdej z 3 faz' },
      { step: 'Wykrycie nadwyżki PV', icon: 'Sun', detail: 'Automatyczne wykrycie nadwyżki produkcji powyżej 2.5 kW' },
      { step: 'Załączenie odbiorników', icon: 'BatteryCharging', detail: 'Uruchomienie bojlera, pompy ciepła lub ładowarki samochodu EV' },
    ],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'top-sc-welcome-car',
    icon: 'Car',
    badge: 'Bezdotykowe powitanie gospodarza',
    title: 'Inteligentne powitanie gospodarza',
    subtitle: 'Kamera Hikvision ANPR + przekaźnik bramy Shelly + ścieżka świetlna',
    trigger: 'Rozpoznanie tablicy rejestracyjnej auta domownika',
    devicesUsed: ['Kamera Hikvision ANPR (odczyt tablic LPR)', 'Moduł bramowy Shelly Plus 1', 'Ściemniacze oświetlenia korytarza Shelly Pro Dimmer'],
    reactionTime: 'Kilka sekund',
    economicBenefit: 'Pełna wygoda: koniec z szukaniem pilota po ciemku i kliksaniem w telefon za kółkiem',
    description:
      'Kamera Hikvision z funkcją ANPR odczytuje tablicę rejestracyjną samochodu podczas dojazdu do posesji. Brama wjazdowa otwiera się automatycznie, w korytarzu rozjaśnia się światło 2700K, a parter domu rozbraja strefę alarmową.',
    humanNote:
      'Nie musisz szukać pilota po ciemku w schowku ani klikać w aplikację podczas manewrowania autem. System rozpoznaje tablicę Twojego auta przy podjeździe (dystans zależy od obiektywu i montażu) i otwiera bramę.',
    actionSequence: [
      { step: 'Odczyt tablicy LPR', icon: 'Camera', detail: 'Kamera Hikvision identyfikuje numer rejestracyjny' },
      { step: 'Otwarcie bramy', icon: 'DoorClosed', detail: 'Moduł Shelly Plus 1 podaje impuls na sterownik bramy wjazdowej' },
      { step: 'Ścieżka świetlna', icon: 'Sun', detail: 'Rozświetlenie korytarza ciepłym światłem 2700K' },
      { step: 'Rozbrojenie strefy', icon: 'ShieldCheck', detail: 'Automatyczne wyłączenie czuwania alarmu na parterze budynku' },
    ],
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80',
  },
];
