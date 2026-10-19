import {
  SmartModule,
  LifeScenario,
  TeletechnicService,
  FaqItem,
  ShellyProCapability,
  HikvisionProductLine,
} from '../types.ts';

export const SHELLY_PRO_CAPABILITIES: ShellyProCapability[] = [
  {
    id: 'cap-lighting',
    title: 'Światło nastrojowe i ściemnianie',
    category: 'lighting',
    badge: 'Ściemnianie i barwa światła',
    description:
      'Każdą lampę możesz przyciemnić tak, jak lubisz, a barwa światła zmienia się w ciągu dnia: rano jest jaśniejsze, wieczorem cieplejsze.',
    proAdvantage:
      'Moduły siedzą w rozdzielnicy i łączą się kablem. To najpewniejsze rozwiązanie do nowego domu.',
    shellyAdvantage:
      'Małe moduły chowamy za zwykłymi włącznikami. Działa z lampami, które już masz, bez kucia ścian.',
    scenariosExample:
      'Rano światło powoli się rozjaśnia. W nocy przy podłodze zapala się delikatne, ciepłe światło, które nie rozbudza.',
    features: [
      'Płynne ściemnianie od bardzo słabego do pełnego światła',
      'Ciepła barwa wieczorem, jaśniejsza w ciągu dnia',
      'Sceny na kolację, czytanie i film',
      'Światło bez męczącego migotania',
    ],
  },
  {
    id: 'cap-blinds',
    title: 'Rolety i żaluzje, które same wiedzą, kiedy się zamknąć',
    category: 'blinds',
    badge: 'Rolety i żaluzje',
    description:
      'Rolety i żaluzje ustawiają się według pory dnia i słońca: wpuszczają światło, a w upał chronią pokój przed nagrzaniem.',
    proAdvantage:
      'Moduły w rozdzielnicy mierzą pracę silnika i zatrzymują roletę, gdy coś ją blokuje.',
    shellyAdvantage:
      'Moduły za zwykłymi włącznikami rolet. Działa z roletami, które już masz.',
    scenariosExample:
      'Rano żaluzje powoli się uchylają. O zmierzchu rolety same się zamykają i dają prywatność.',
    features: [
      'Ustawianie według pory dnia i słońca',
      'Ochrona pokoju przed upałem',
      'Zamykanie o zmierzchu i po wyjściu z domu',
      'Zatrzymanie rolety, gdy coś ją blokuje',
    ],
  },
  {
    id: 'cap-climate',
    title: 'Osobna temperatura w każdym pokoju',
    category: 'climate',
    badge: 'Komfort i oszczędność',
    description:
      'W sypialni chłodniej do snu, w łazience cieplej rano. Ogrzewanie podłogowe i grzejniki trzymają temperaturę ustawioną dla każdego pokoju.',
    proAdvantage:
      'Przy ogrzewaniu podłogowym moduły sterują każdą pętlą osobno, prosto z szafki rozdzielacza.',
    shellyAdvantage:
      'Na grzejnikach montujemy głowice, a w pokojach małe czujniki temperatury. Bez kucia.',
    scenariosExample:
      'W sypialni na noc jest 18,5°C, a w łazience rano 23°C. Gdy otwierasz okno, grzejnik w tym pokoju sam się wyłącza.',
    features: [
      'Osobna temperatura w każdym pokoju',
      'Ogrzewanie podłogowe bez przegrzewania',
      'Wyłączenie grzania przy otwartym oknie',
      'Podgląd temperatury i wilgotności w telefonie',
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
    title: 'Panel na ścianie, zwykły włącznik albo telefon',
    category: 'interface',
    badge: 'Sterowanie',
    description:
      'Jeden panel na ścianie może zastąpić rząd włączników, termostat i sterowanie roletami. Zwykłe włączniki dalej działają jak zawsze.',
    proAdvantage:
      'Szklany panel dotykowy pokazuje temperaturę i steruje światłem oraz roletami.',
    shellyAdvantage:
      'Moduły działają z włącznikami, które wybierze architekt. Nie musisz zmieniać osprzętu.',
    scenariosExample:
      'Przy wejściu do pokoju naciskasz jeden klawisz „Relaks”: światło przygasa, a rolety się zamykają.',
    features: [
      'Panel dotykowy na ścianie',
      'Działa z włącznikami, które już masz',
      'Sterowanie z panelu, włącznika albo telefonu',
      'Aplikacja dla wszystkich domowników',
    ],
  },
];

export const HIKVISION_PRODUCTS: HikvisionProductLine[] = [
  {
    id: 'hik-colorvu',
    series: 'Kamera z kolorowym obrazem w nocy',
    category: 'cctv_colorvu',
    tagline: 'Kolorowy, ostry obraz przez całą noc',
    keyTech: 'Bardzo jasny obiektyw i ostry obraz 4K, także w nocy',
    bestUse: 'Elewacja budynku, drzwi wejściowe, strefa wjazdu, ciągi komunikacyjne',
    highlights: [
      'Kolorowy obraz o zmierzchu i w nocy',
      'Po wykryciu człowieka kamera sama włącza miękkie światło',
      'Ostry obraz, który mniej zajmuje na dysku',
      'Metalowa obudowa odporna na uderzenia, mróz i ulewy',
    ],
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hik-acusense',
    series: 'Kamera, która odstrasza światłem i dźwiękiem',
    category: 'cctv_acusense',
    tagline: 'Odróżnia ludzi i auta od zwierząt, a nieproszonego gościa odstrasza światłem i komunikatem',
    keyTech: 'Rozpoznaje ludzi i auta, a w nocy sama włącza światło i komunikat dźwiękowy',
    bestUse: 'Wejście do domu, brama wjazdowa i garaż',
    highlights: [
      'Odróżnia ludzi i auta od zwierząt, gałęzi i deszczu',
      'Gdy ktoś podchodzi w nocy, kamera włącza światło i komunikat głosowy',
      'Rozmowa przez kamerę prosto z telefonu',
      'Powiadomienie ze zdjęciem na telefon',
    ],
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hik-tandemvu',
    series: 'Kamera z szerokim widokiem i zoomem',
    category: 'cctv_tandemvu',
    tagline: 'Widzisz całe podwórko, a zoom sam podąża za osobą',
    keyTech: 'Szeroki widok całego podwórka i zoom, który sam podąża za osobą',
    bestUse: 'Teren wokół domu, wejście główne, brama wjazdowa i podjazd',
    highlights: [
      'Górny obiektyw stale widzi cały teren przed domem',
      'Dolny obiektyw sam przybliża i śledzi idącą osobę',
      'Odczytuje tablice rejestracyjne aut na podjeździe',
      'Jedna kamera zamiast kilku zwykłych',
    ],
    image: 'https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hik-intercom-modular',
    series: 'Panel przy furtce z kamerą',
    category: 'intercom_modular',
    tagline: 'Elegancka stacja bramowa ze stali nierdzewnej lub aluminium anodowanego',
    keyTech: 'Szeroka kamera, klawiatura na kod i czytnik breloków w jednym panelu',
    bestUse: 'Furtka wejściowa, brama frontowa domu, główne wejście do budynku',
    highlights: [
      'Panel składasz z modułów: kamera, klawiatura na kod, czytnik breloków',
      'Szeroka kamera widzi całą osobę przed furtką i paczkę na ziemi',
      'Otwiera furtkę i bramę wjazdową',
      'Odporny na uderzenia i mróz',
    ],
    image: `${import.meta.env.BASE_URL}images/hero-wideodomofon.jpg`,
  },
  {
    id: 'hik-minmoe-face',
    series: 'Otwieranie drzwi twarzą',
    category: 'intercom_face',
    tagline: 'Otwieranie furtki i drzwi za pomocą biometrii twarzy bez kluczy',
    keyTech: 'Rozpoznawanie twarzy, które trudno oszukać zdjęciem',
    bestUse: 'Furtka wejściowa, drzwi główne do domu, wejście do strefy prywatnej',
    highlights: [
      'Wchodzisz z zakupami bez szukania kluczy: czytnik rozpoznaje twarz i otwiera drzwi',
      'Trudno go oszukać zdjęciem albo filmem',
      'Działa w ciemności i w pełnym słońcu',
      'Jednorazowy kod na telefon dla gościa lub kuriera',
    ],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'hik-android-screen',
    series: 'Ekran w domu do domofonu i kamer',
    category: 'intercom_android',
    tagline: 'Dotykowy ekran do rozmów z furtką, podglądu kamer i sterowania domem',
    keyTech: 'Dotykowy ekran w domu: domofon, kamery i sterowanie domem',
    bestUse: 'Ściana w holu, kuchnia, salon, gabinet – centralny punkt sterowania domem',
    highlights: [
      'Odbierasz domofon i sterujesz światłem, roletami i ogrzewaniem',
      'Podgląd na żywo ze wszystkich kamer',
      'Rozmowy między pokojami, np. kuchnia z piętrem',
      'Jeden kabel do zasilania i danych',
    ],
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1000&q=80',
  },
];

export const TELETECHNIC_SERVICES: TeletechnicService[] = [
  {
    id: 'cctv_ai',
    title: 'Kamery wokół domu z kolorowym obrazem w nocy',
    subtitle: 'Kolorowy obraz w nocy i powiadomienia tylko wtedy, gdy trzeba',
    icon: 'Camera',
    description:
      'Kamery pokazują kolorowy obraz w nocy, odróżniają ludzi i auta od zwierząt, a nieproszonego gościa odstraszają światłem i komunikatem. Nagrania zostają w domu.',
    humanExplanation:
      'Kamera nagrywa w nocy obraz w kolorze i odróżnia człowieka czy auto od kota albo gałęzi, więc telefon nie dzwoni bez powodu. Nagrania zapisują się na dysku w szafce w domu, bez abonamentu.',
    equipment: [
      'Kamery na elewację, odporne na deszcz, mróz i uderzenia',
      'Rejestrator z dyskiem, który nagrywa przez całą dobę',
      'Jeden kabel do każdej kamery: idzie nim i obraz, i zasilanie',
      'Darmowa aplikacja do podglądu w telefonie',
    ],
    specs: [
      'Kolor w nocy',
      'Rozpoznaje ludzi i auta',
      'Nagrania w domu',
      'Działa w mróz i upał',
    ],
  },
  {
    id: 'access_control',
    title: 'Wideodomofon i wejście twarzą lub kartą',
    subtitle: 'Panel przy furtce, wejście twarzą, kartą lub kodem i otwieranie z telefonu',
    icon: 'KeyRound',
    description:
      'Panel przy furtce, monitor w domu i aplikacja w telefonie. Furtkę otwierasz twarzą, kartą, kodem albo z telefonu, a bramę i garaż jednym przyciskiem.',
    humanExplanation:
      'Wchodzisz na posesję bez szukania kluczy: furtka otwiera się na widok twarzy, na kod albo brelok. Gdy dzwoni kurier, odbierasz wideo w telefonie, otwierasz furtkę i widzisz, jak zostawia paczkę.',
    equipment: [
      'Panel przy furtce ze stali nierdzewnej, z kamerą, która widzi szeroko także pod słońce',
      'Czytnik twarzy, którego nie oszuka zdjęcie',
      'Monitor w domu z ekranem dotykowym',
      'Elektrozaczep w furtce, otwierany z panelu, telefonu i czytnika',
    ],
    specs: [
      'Wejście twarzą, kartą lub kodem',
      'Aplikacja dla wszystkich domowników bez opłat',
      'Kody czasowe dla gości i kurierów',
      'Dzwonek po zmroku zapala światło przed furtką',
    ],
  },
  {
    id: 'structured_lan',
    title: 'Sieć dla kamer i automatyki',
    subtitle: 'Kable do kamer, szafka na sprzęt i pewne połączenie dla modułów',
    icon: 'Network',
    description:
      'Do kamer i wideodomofonu prowadzimy kable, a moduły automatyki łączymy z Twoją domową siecią. Rejestrator nagrań i sprzęt sieciowy stoją w jednej uporządkowanej szafce. Łącze internetowe zostaje u Twojego operatora.',
    humanExplanation:
      'Kamery i moduły mają pewne połączenie, więc obraz się nie zacina, a światło reaguje od razu. Wszystkie kable są opisane i schowane w szafce.',
    equipment: [
      'Szafka na sprzęt z wentylacją, w której każdy kabel jest opisany',
      'Osobny kabel do każdej kamery i panelu przy furtce',
      'Sprzęt, który tym samym kablem zasila kamery',
      'Rejestrator nagrań w szafce, w domu',
    ],
    specs: [
      'Osobna sieć dla kamer i automatyki',
      'Kabel do każdej kamery',
      'Nagrania w domu',
    ],
  },
];

export const SCENARIOS: LifeScenario[] = [
  {
    id: 'sc-yoga',
    number: '01',
    title: '„Joga”: spokojny pokój jednym przyciskiem',
    tag: 'Relaks',
    tagColor: '#8B5CF6',
    trigger: 'Przycisk na ścianie albo w telefonie',
    description:
      'Naciskasz jeden przycisk. Główne światło gaśnie, zostaje ciepłe i przygaszone, rolety się zamykają, a ogrzewanie trzyma przyjemne ciepło.',
    humanNote:
      'Nie musisz chodzić po pokoju i zasłaniać okien. Naciskasz przycisk, rozkładasz matę i ćwiczysz.',
    detailPoints: [
      'Główne światło gaśnie, zostaje ciepłe, przygaszone podświetlenie',
      'Rolety się opuszczają, więc nikt nie zagląda przez okno',
      'Ogrzewanie trzyma w pokoju stałą temperaturę',
      'Po ćwiczeniach ten sam przycisk przywraca zwykłe światło',
    ],
    actionSteps: [
      { icon: 'Sun', label: 'Światło', detail: 'Ciepłe i przygaszone' },
      { icon: 'SlidersHorizontal', label: 'Rolety', detail: 'Zamknięte, nikt nie zagląda' },
      { icon: 'Thermometer', label: 'Ciepło', detail: 'Stała, przyjemna temperatura' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sparkles',
  },
  {
    id: 'sc-sunrise',
    number: '02',
    title: 'Łagodne budzenie',
    tag: 'Poranek',
    tagColor: '#F59E0B',
    trigger: 'Godzina, którą ustawisz',
    description:
      'Przed budzikiem rolety powoli się podnoszą, a światło w sypialni stopniowo się rozjaśnia, jak o świcie. W łazience jest już ciepło.',
    humanNote:
      'Budzisz się łagodniej, bo światło narasta powoli. Wchodzisz do ciepłej łazienki.',
    detailPoints: [
      'Rolety podnoszą się stopniowo',
      'Światło w sypialni powoli się rozjaśnia',
      'Łazienka dogrzewa się, zanim wstaniesz',
      'W kuchni zapala się światło nad blatem',
    ],
    actionSteps: [
      { icon: 'SunMedium', label: 'Światło', detail: 'Powoli się rozjaśnia' },
      { icon: 'SlidersHorizontal', label: 'Rolety', detail: 'Podnoszą się stopniowo' },
      { icon: 'Flame', label: 'Łazienka', detail: 'Ciepło, zanim wstaniesz' },
      { icon: 'Lightbulb', label: 'Kuchnia', detail: 'Delikatne światło nad blatem' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1507652313519-d4e9174996dd?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sun',
  },
  {
    id: 'sc-masteroff',
    number: '03',
    title: 'Wyjście z domu („wyłącz wszystko”)',
    tag: 'Codziennie',
    tagColor: '#EF4444',
    trigger: 'Przycisk przy drzwiach albo w telefonie',
    description:
      'Jeden przycisk przy drzwiach gasi wszystkie światła, wyłącza wybrane gniazdka, np. żelazka i ekspresu, opuszcza rolety i przełącza ogrzewanie na oszczędne.',
    humanNote:
      'Nie musisz wracać z połowy drogi, żeby sprawdzić żelazko. Naciskasz przycisk i wiesz, że dom jest wyłączony.',
    detailPoints: [
      'Wszystkie światła gasną',
      'Wybrane gniazdka, np. żelazka, przestają dostawać prąd',
      'Rolety się opuszczają',
      'Ogrzewanie przechodzi na oszczędne',
    ],
    actionSteps: [
      { icon: 'Power', label: 'Gniazdka', detail: 'Żelazko i ekspres bez prądu' },
      { icon: 'LightbulbOff', label: 'Światła', detail: 'Gasną w całym domu' },
      { icon: 'SlidersHorizontal', label: 'Rolety', detail: 'Opuszczają się' },
      { icon: 'Thermometer', label: 'Ogrzewanie', detail: 'Przechodzi na oszczędne' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=85',
    icon: 'LogOut',
  },
  {
    id: 'sc-cinema',
    number: '04',
    title: 'Wieczór filmowy',
    tag: 'Wieczór',
    tagColor: '#3B82F6',
    trigger: 'Przycisk „Kino” przy kanapie albo w telefonie',
    description:
      'Gdy włączasz film, rolety zjeżdżają do końca, lampy gasną i zostaje tylko delikatne światło przy podłodze. Ekran projekcyjny zjeżdża sam, jeśli go masz.',
    humanNote:
      'Kino bez wstawania z kanapy. Jeden przycisk zamiast kilku pilotów.',
    detailPoints: [
      'Rolety zasłaniają okna, więc na ekranie nie ma odblasków',
      'Delikatne światło przy podłodze, żeby przejść po napój',
      'Ekran projekcyjny zjeżdża i po filmie sam się chowa',
      'Dzwonek z furtki widać na panelu w salonie',
    ],
    actionSteps: [
      { icon: 'SlidersHorizontal', label: 'Rolety', detail: 'Zasłaniają okna do końca' },
      { icon: 'Sun', label: 'Światło', detail: 'Zostaje tylko przy podłodze' },
      { icon: 'Tv', label: 'Ekran', detail: 'Zjeżdża sam' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=1000&q=85',
    icon: 'Tv',
  },
  {
    id: 'sc-courier',
    number: '05',
    title: 'Kurier i furtka pod kontrolą',
    tag: 'Wejście',
    tagColor: '#F97316',
    trigger: 'Ktoś dzwoni do furtki',
    description:
      'Dzwonek przychodzi jako rozmowa wideo na telefon. Rozmawiasz z kurierem, otwierasz mu furtkę i widzisz, jak zostawia paczkę.',
    humanNote:
      'Nie musisz prosić sąsiada o odbiór przesyłki. Otwierasz furtkę z daleka, a nagranie wizyty zostaje na dysku w domu.',
    detailPoints: [
      'Rozmowa z gościem w obie strony',
      'Kody czasowe dla kuriera albo ekipy',
      'Nagranie wizyty na dysku w domu',
      'Światło przed furtką zapala się samo po zmroku',
    ],
    actionSteps: [
      { icon: 'Video', label: 'Obraz', detail: 'Furtka na żywo w telefonie' },
      { icon: 'KeyRound', label: 'Otwarcie', detail: 'Jedno dotknięcie otwiera furtkę' },
      { icon: 'HardDrive', label: 'Nagranie', detail: 'Zostaje w domu, bez abonamentu' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
    icon: 'Video',
  },
  {
    id: 'sc-water',
    number: '06',
    title: 'Ochrona przed zalaniem',
    tag: 'Woda',
    tagColor: '#0284C7',
    trigger: 'Czujnik pod pralką, zmywarką albo przy kotle wykryje wodę',
    description:
      'Gdy pęknie wężyk pod umywalką, czujnik wykrywa wodę, a napęd na głównym zaworze od razu ją zakręca. W telefonie widzisz, gdzie był wyciek.',
    humanNote:
      'Zalanie kończy się na kałuży, a nie na zniszczonej podłodze i suficie sąsiada. Także gdy śpisz albo jesteś na wakacjach.',
    detailPoints: [
      'Działa w domu, także bez internetu',
      'Powiadomienie w telefonie, gdzie jest wyciek',
      'Po usunięciu wycieku odkręcasz wodę jednym przyciskiem',
      'Czujnik gazu przy kuchence może tak samo zakręcić gaz',
    ],
    actionSteps: [
      { icon: 'Droplets', label: 'Czujnik', detail: 'Wykrywa wodę na podłodze' },
      { icon: 'ShieldAlert', label: 'Zawór', detail: 'Zakręca wodę od razu' },
      { icon: 'Phone', label: 'Telefon', detail: 'Pokazuje, gdzie jest wyciek' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    icon: 'Droplets',
  },
  {
    id: 'sc-sleep',
    number: '07',
    title: 'Spokojny sen',
    tag: 'Noc',
    tagColor: '#10B981',
    trigger: 'Wstajesz w nocy z łóżka',
    description:
      'Gdy wstajesz w nocy, czujnik ruchu przy łóżku zapala słabe, ciepłe światło przy podłodze. Widzisz drogę do łazienki i nie oślepiasz się.',
    humanNote:
      'Nie szukasz włącznika po omacku i nie mrużysz oczu przed ostrym światłem. Gdy wrócisz do łóżka, światło samo gaśnie.',
    detailPoints: [
      'Słabe, ciepłe światło, które nie razi oczu',
      'Światło gaśnie samo, gdy wrócisz do łóżka',
      'Działa tylko w godzinach, które ustawisz',
      'Na noc ogrzewanie w sypialni obniża temperaturę',
    ],
    actionSteps: [
      { icon: 'Moon', label: 'Światło przy podłodze', detail: 'Słabe i ciepłe, nie razi' },
      { icon: 'Thermometer', label: 'Sypialnia', detail: 'Ogrzewanie obniżone na noc' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80',
    icon: 'Moon',
  },
  {
    id: 'sc-dinner',
    number: '08',
    title: '„Przytulna kolacja”',
    tag: 'Wieczór',
    tagColor: '#F59E0B',
    trigger: 'Przycisk w jadalni albo w telefonie',
    description:
      'Lampy pod sufitem gasną, nad stołem zostaje ciepłe, przygaszone światło, a rolety się zamykają.',
    humanNote:
      'Jeden przycisk zmienia salon w miejsce na spokojną kolację. Bez chodzenia od włącznika do włącznika.',
    detailPoints: [
      'Ciepłe, przygaszone światło nad stołem',
      'Rolety w salonie i kuchni się zamykają',
      'Delikatne podświetlenie blatów w kuchni',
      'Ogrzewanie w jadalni trzyma przyjemne ciepło',
    ],
    actionSteps: [
      { icon: 'Sun', label: 'Nad stołem', detail: 'Ciepłe, przygaszone światło' },
      { icon: 'SlidersHorizontal', label: 'Rolety', detail: 'Zamykają się' },
      { icon: 'Lightbulb', label: 'Blaty', detail: 'Delikatne podświetlenie' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80',
    icon: 'Sparkles',
  },
  {
    id: 'sc-vacation',
    number: '09',
    title: 'Wyjazd na urlop: dom wygląda na zamieszkały',
    tag: 'Wyjazd',
    tagColor: '#10B981',
    trigger: 'Włączasz w aplikacji przed wyjazdem',
    description:
      'Wieczorami światła w kilku pokojach zapalają się i gasną o różnych porach, jakby ktoś był w domu. Woda jest zakręcona, a kamery pilnują wejścia.',
    humanNote:
      'Odpoczywasz spokojniej. Z ulicy widać światła w oknach, woda jest zakręcona, a obraz z kamer masz w telefonie.',
    detailPoints: [
      'Światła zapalają się w różnych pokojach o różnych porach',
      'Główny zawór wody zostaje zakręcony',
      'Ogrzewanie przechodzi na oszczędne, ale dom się nie wychładza',
      'Kamery przy wejściu wysyłają powiadomienie, gdy pojawi się człowiek',
    ],
    actionSteps: [
      { icon: 'Lightbulb', label: 'Światła', detail: 'Jakby ktoś był w domu' },
      { icon: 'Droplets', label: 'Woda', detail: 'Zakręcona na czas wyjazdu' },
      { icon: 'ShieldCheck', label: 'Kamery', detail: 'Powiadomią, gdy ktoś podejdzie' },
    ],
    imageUrl: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
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
    desc: 'Inżynier sprawdza rozdzielnicę, puszki i kable i to, czy w puszkach są potrzebne przewody.',
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
    title: 'Start, konfiguracja i nauka obsługi',
    desc: 'Bezpłatnie konfigurujemy system pod Twój dom i uczymy domowników obsługi.',
    humanNote: 'Sprawdzamy, czy każdy domownik umie zapalić światło, otworzyć furtkę i podejrzeć kamery.',
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    category: 'dzialanie',
    question: 'Czy dom działa, gdy zabraknie internetu?',
    simpleAnswer:
      'Tak. Włączniki, rolety, ogrzewanie, czujniki wody i kamery działają w domu bez internetu. Bez niego nie zobaczysz tylko domu z daleka i nie dostaniesz powiadomień poza domem.',
    technicalDetails:
      'Moduły rozmawiają ze sobą przez domową sieć (router), nie przez serwer w internecie. Dlatego harmonogramy, sceny i czujniki działają dalej, gdy internet zniknie.',
  },
  {
    category: 'bezpieczenstwo',
    question: 'Czy nagrania z kamer i domofonu są bezpieczne?',
    simpleAnswer:
      'Tak. Nagrania nie trafiają na serwery chmurowe. Obraz z kamer i wideodomofonu zapisuje się na dysku w rejestratorze w szafce na sprzęt.',
    technicalDetails:
      'Kamery podłączamy do osobnej sieci, oddzielonej od domowych komputerów i telefonów. Podgląd w aplikacji jest szyfrowany, a logowanie zabezpieczamy dodatkowym kodem.',
  },
  {
    category: 'remont',
    question: 'Mam już wykończone mieszkanie (płytki, gładzie). Czy trzeba kuć ściany lub zrywać tynki?',
    simpleAnswer:
      'Zwykle nie. W gotowym mieszkaniu małe moduły chowamy w puszkach za włącznikami, a czujniki działają na baterie. Pracujemy z odkurzaczem, więc nie zostaje pył.',
    technicalDetails:
      'Moduły mają wielkość pudełka zapałek i mieszczą się za zwykłym włącznikiem. Jeśli w puszce brakuje jednego przewodu, dokładamy mały element, dzięki któremu żarówki LED nie migają. Napęd zakręcający wodę zakładamy na istniejący zawór.',
  },
  {
    category: 'dzialanie',
    question: 'Czy obsługa systemu nie będzie za trudna dla dzieci lub starszych rodziców?',
    simpleAnswer:
      'Wszystkie tradycyjne włączniki na ścianach działają tak samo jak w zwykłym domu. Dziecko lub senior po prostu wciska klawisz na ścianie, a światło się zapala. Aplikacja to tylko wygodny dodatek dla chętnych.',
    technicalDetails:
      'Każde światło i każdą roletę da się obsłużyć zwykłym włącznikiem na ścianie. Jeśli moduł przestanie działać, włącznik dalej robi to, co zawsze.',
  },
  {
    category: 'bezpieczenstwo',
    question: 'Czy w rozdzielnicy nie powstanie pożar?',
    simpleAnswer:
      'Ryzyko ograniczamy do minimum. Montujemy atestowane moduły, które same wyłączają obwód przy przegrzaniu lub przeciążeniu, a każdy obwód ma osobny bezpiecznik.',
    technicalDetails:
      'Moduły w rozdzielnicy mają wbudowany czujnik temperatury i same się wyłączają, gdy za bardzo się nagrzeją. Każdy obwód ma też swój zwykły bezpiecznik.',
  },
  {
    category: 'dzialanie',
    question: 'Co się stanie, gdy w całej okolicy zabraknie prądu?',
    simpleAnswer:
      'Bez prądu nie działa nic, co jest zasilane z sieci, także automatyka. Gdy prąd wraca, system sam startuje w kilka sekund, bez udziału domowników.',
    technicalDetails:
      'Dla każdego modułu ustawiamy, co ma się stać po powrocie prądu: zostać wyłączony albo wrócić do ostatniego stanu. Dzięki temu po nocnej awarii światła nie zapalą się same.',
  },
  {
    category: 'koszty',
    question: 'Czy mądry dom naprawdę obniża rachunki?',
    simpleAnswer:
      'Najwięcej daje ogrzewanie pokój po pokoju: dom grzeje mniej w nocy i tam, gdzie nikogo nie ma. Pomagają też rolety, które latem zatrzymują słońce, zanim nagrzeje wnętrze. Ile zaoszczędzisz, zależy od domu i przyzwyczajeń.',
    technicalDetails:
      'W telefonie widzisz, ile prądu zużywa dom i co pobiera go najwięcej. Rolety od strony słońca mogą opuszczać się same o ustalonej porze.',
  },
  {
    category: 'remont',
    question: 'Czy mogę zacząć od kilku rzeczy, a resztę dodać później?',
    simpleAnswer:
      'Tak. Możesz zacząć na przykład od świateł i rolet, a kamery, wideodomofon czy kolejne pokoje dodać później. Planujemy instalację tak, żeby dało się ją rozbudować bez kucia od nowa.',
    technicalDetails:
      'Nowe urządzenia łączą się z tymi, które już masz, i działają w tych samych scenach i w tej samej aplikacji. Przy pierwszym montażu zostawiamy miejsce w rozdzielnicy i w szafce na sprzęt na rozbudowę.',
  },
  {
    category: 'remont',
    question: 'Ile trwa montaż?',
    simpleAnswer:
      'To zależy od zakresu prac. Termin podajemy na piśmie razem z planem i ceną, zanim zaczniemy.',
    technicalDetails:
      'Na czas montażu wpływa wielkość domu, liczba pomieszczeń i to, czy dom jest w budowie, czy już wykończony i umeblowany.',
  },
];

export const SMART_MODULES: SmartModule[] = [
  {
    id: 'water_shield',
    name: 'Zawór, który sam zakręca wodę przy wycieku',
    badge: 'Kluczowe',
    description: 'Zakręcenie głównego zaworu wody po wykryciu wycieku. Działa bez internetu.',
    humanExplanation: 'Czujnik pod pralką po wykryciu wycieku zakręca główny zawór wody. Ogranicza to ryzyko zalania podłogi.',
    price: 1250,
    category: 'safety',
    icon: 'ShieldCheck',
  },
  {
    id: 'master_off',
    name: 'Scenariusz „Wyłącz wszystko” (jeden przycisk przy drzwiach)',
    badge: 'Must have',
    description: 'Jeden przycisk przy drzwiach gasi światła i wyłącza wybrane gniazdka, np. żelazka i ekspresu.',
    humanExplanation: 'Naciskasz przycisk przy drzwiach: gasną światła, wybrane gniazdka przestają dostawać prąd, a rolety się zamykają.',
    price: 850,
    category: 'safety',
    icon: 'Power',
  },
  {
    id: 'cctv_starter',
    name: 'Kamery wokół domu, kolorowe także w nocy',
    badge: 'Kamery i wideodomofon',
    description: 'Kamery z kolorowym obrazem w nocy, które rozpoznają ludzi i auta. Nagrania na dysku w domu, bez abonamentu.',
    humanExplanation: 'Kamery odróżniają psa od człowieka. Obraz nagrywa się na dysk w domu, w nocy też w kolorze. Podgląd w telefonie bez abonamentu.',
    price: 3400,
    category: 'teletechnics',
    icon: 'Camera',
  },
  {
    id: 'blinds_control',
    name: 'Rolety i żaluzje, które same się zamykają',
    description: 'Rolety zamykają się same o zmierzchu i otwierają rano, z włącznika lub telefonu.',
    humanExplanation: 'Rano słońce budzi Cię, do jogi rolety tworzą prywatność, a latem żaluzje blokują upał.',
    price: 1400,
    category: 'comfort',
    icon: 'SlidersHorizontal',
  },
  {
    id: 'hvac_control',
    name: 'Osobna temperatura w każdym pokoju',
    description: 'Osobna temperatura w każdym pokoju i plan na cały tydzień.',
    humanExplanation: 'W sypialni masz 18.5°C do snu, w łazience 23°C. Grzejniki nie pracują, gdy wietrzysz pokój.',
    price: 1800,
    category: 'comfort',
    icon: 'Flame',
  },
  {
    id: 'intercom_poe',
    name: 'Wideodomofon: rozmowa z furtki w telefonie',
    badge: 'Standard DOMENCE',
    description: 'Rozmowa z gościem w telefonie, otwieranie furtki i podgląd kuriera bez abonamentu.',
    humanExplanation: 'Kurier dzwoni do furtki? Odbierasz na telefonie, otwierasz furtkę i widzisz, jak kładzie paczkę pod drzwiami.',
    price: 2900,
    category: 'access',
    icon: 'Video',
  },
  {
    id: 'rack_network_pack',
    name: 'Szafka na sprzęt i sieć dla kamer',
    badge: 'Infrastruktura',
    description: 'Kable do kamer, szafka na sprzęt i osobna sieć dla urządzeń.',
    humanExplanation: 'Kamery i moduły mają pewne połączenie, a kable są uporządkowane w szafce. Łącze internetowe zostaje u Twojego operatora.',
    price: 3200,
    category: 'teletechnics',
    icon: 'Network',
  },
  {
    id: 'dimming_scenes',
    name: 'Ściemnianie światła i nastrojowe sceny',
    description: 'Rozjaśnianie rano, słabe nocne światło przy podłodze i sceny do filmu.',
    humanExplanation: 'W nocy światło w korytarzu nie razi po oczach, zapala się na 5%. Scena jogi tworzy relaksujący klimat.',
    price: 1100,
    category: 'comfort',
    icon: 'Sun',
  },
  {
    id: 'gate_control',
    name: 'Brama wjazdowa i garaż z telefonu',
    description: 'Otwieranie z telefonu i podgląd, czy brama i garaż są zamknięte.',
    humanExplanation: 'Bramę i garaż otwierasz z telefonu albo przycisku w domu. Nie pamiętasz, czy garaż jest zamknięty? Sprawdzisz w aplikacji.',
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
    description: 'Czytnik przy furtce otwiera ją twarzą, kartą albo kodem. Możesz też otworzyć z telefonu.',
    humanExplanation: 'Wracasz z zakupami w obu rękach i nie szukasz kluczy: furtka otwiera się na widok twarzy, na kartę, kod albo z telefonu.',
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
    humanExplanation: 'Lepiej wykorzystujesz własny prąd ze słońca: dom sam grzeje wodę i dogrzewa wnętrze wtedy, gdy panele produkują najwięcej.',
    price: 1350,
    category: 'power',
    icon: 'Zap',
  },
  {
    id: 'shelly_hazard_leak_pack',
    name: 'Czujniki gazu i zalania z zakręceniem zaworu',
    badge: 'Bezpieczeństwo',
    description: 'Czujniki gazu i zalania, które same zakręcają zawór i wysyłają powiadomienie.',
    humanExplanation: 'Gdy czujnik wykryje wodę albo gaz, dom sam zakręca zawór i wysyła powiadomienie na telefon.',
    price: 1450,
    category: 'safety',
    icon: 'ShieldAlert',
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
    desc: 'Światło na ścieżkach i tarasie włącza się o zmierzchu, a kamera pilnuje ogrodu w nocy.',
    humanNote:
      'Wychodzisz na taras — światło już jest. Wyjeżdżasz na urlop — widzisz w telefonie, co dzieje się przy domu.',
    features: [
      'Światło w ogrodzie zapala się o zmierzchu i gaśnie o ustalonej porze',
      'Światło przy furtce zapala się, gdy ktoś się zbliża',
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
    badge: 'Kolor w nocy • Mniej zbędnych powiadomień',
    techStack: 'ColorVu CMOS 1/1.2" / AcuSense / Audio dwukierunkowe',
    summary:
      'Kamery pokazują kolorowy, ostry obraz nawet przy bardzo słabym świetle. Odróżniają ludzi i auta od zwierząt, liści czy deszczu, więc telefon nie wibruje bez powodu. Przez kamerę możesz też porozmawiać z gościem przy furtce.',
    humanBenefit:
      'W nocy widzisz kolor kurtki i markę samochodu zamiast szarego ziarna. Kamera podświetla scenę miękkim światłem dopiero wtedy, gdy wykryje człowieka.',
    keyPoints: [
      'Ostry, kolorowy obraz w nocy',
      'Mniej zbędnych powiadomień: kot ani liście nie budzą Cię w nocy',
      'Rozmowa przez kamerę, bez szumu wiatru',
      'Światło kamery włącza się dopiero, gdy podejdzie człowiek',
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
      'Mniej zbędnych powiadomień niż przy zwykłych czujnikach',
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
      'Otwarcie drzwi zapala światło w korytarzu',
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
      'Otwierasz okno w sypialni, a grzejnik sam się zakręca. Zamykasz okno i ciepło wraca. Nie grzejesz ulicy.',
    actionSequence: [
      { step: 'Otwarcie okna', icon: 'SlidersHorizontal', detail: 'Czujnik Shelly BLU rejestruje rozszczelnienie ramy' },
      { step: 'Odcięcie grzania', icon: 'Flame', detail: 'Głowica Shelly BLU TRV domyka zawór na 0%' },
      { step: 'Powrót do komfortu', icon: 'CheckCircle2', detail: 'Po zamknięciu okna grzejnik automatycznie wznawia dogrzewanie' },
    ],
    image: 'https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'top-sc-hazard-defense',
    icon: 'ShieldAlert',
    badge: 'Reakcja na awarie',
    title: 'Ochrona przed zalaniem i gazem',
    subtitle: 'Czujniki gazu i zalania, zawór na wodzie',
    trigger: 'Wykrycie ulatniającego się gazu lub wilgoci pod pralką/zmywarką',
    devicesUsed: ['Czujnik Shelly Gas', 'Czujniki zalania Shelly Flood S Gen4', 'Siłownik zaworu kulowego Fail-Safe 230V', 'Moduł Shelly Pro 1PM'],
    reactionTime: 'zamknięcie zaworu zwykle w kilka sekund',
    economicBenefit: 'Ochrona przed zniszczeniem podłóg za dziesiątki tysięcy złotych i bezpieczeństwo życia',
    description:
      'W przypadku wykrycia nieszczelności gazu przez Shelly Gas lub pierwszych kropel wody przez sensory Shelly Flood S, system w ciągu kilku sekund mechanicznie zamyka główny zawór odcinający i odłącza zasilanie z gniazd pralki, zmywarki czy pieca.',
    humanNote:
      'Pęknięty wężyk pralki nie zaleje parkietu ani sąsiada, także gdy jesteś w pracy albo na wakacjach. Gdy czujnik wyczuje gaz, zawór może sam go zakręcić.',
    actionSequence: [
      { step: 'Wykrycie wycieku', icon: 'Droplets', detail: 'Sensory Shelly Flood / Gas wykrywają zagrożenie w kilka sekund' },
      { step: 'Zamknięcie zaworu', icon: 'ShieldCheck', detail: 'Siłownik odcina główny dopływ wody/gazu w kilka sekund' },
      { step: 'Zrzut zasilania', icon: 'Power', detail: 'Przekaźniki Shelly natychmiast odcinają prąd w strefie awarii' },
      { step: 'Wiadomość na telefon', icon: 'Bell', detail: 'Sygnał dźwiękowy czujnika i wiadomość na telefon' },
    ],
    image: 'https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: 'top-sc-solar-3em',
    icon: 'Zap',
    badge: 'Inteligentne zarządzanie energią',
    title: 'Prąd ze słońca zostaje w domu',
    subtitle: 'Licznik prądu i panele fotowoltaiczne',
    trigger: 'Ciągły pomiar prądu, napięcia oraz nadwyżki produkcji z falownika PV',
    devicesUsed: ['Licznik prądu w rozdzielnicy', 'Przekaźniki w rozdzielnicy', 'Sterowanie pompą ciepła i bojlerem'],
    reactionTime: 'W czasie rzeczywistym',
    economicBenefit: 'Wyższa autokonsumpcja darmowej energii ze słońca — mniej oddawania do sieci',
    description:
      'Licznik 3-fazowy Shelly 3EM-63T Gen3 mierzy w czasie rzeczywistym zużycie i oddawanie energii do sieci. Gdy pojawia się nadwyżka darmowego prądu z fotowoltaiki, dom sam uruchamia grzałkę bojlera, podbija zadaną temperaturę pompy ciepła lub włącza ładowanie samochodu elektrycznego.',
    humanNote:
      'Gdy panele dają więcej prądu, niż zużywasz, dom sam grzeje nim wodę. Mniej prądu oddajesz do sieci po niskiej cenie.',
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
    title: 'Brama otwiera się przed Twoim autem',
    subtitle: 'Kamera przy bramie, brama i światło na podjeździe',
    trigger: 'Rozpoznanie tablicy rejestracyjnej auta domownika',
    devicesUsed: ['Kamera Hikvision ANPR (odczyt tablic LPR)', 'Moduł bramowy Shelly Plus 1', 'Ściemniacze oświetlenia korytarza Shelly Pro Dimmer'],
    reactionTime: 'Kilka sekund',
    economicBenefit: 'Pełna wygoda: koniec z szukaniem pilota po ciemku i kliksaniem w telefon za kółkiem',
    description:
      'Kamera Hikvision z funkcją ANPR odczytuje tablicę rejestracyjną samochodu podczas dojazdu do posesji. Brama wjazdowa otwiera się automatycznie, w korytarzu rozjaśnia się światło 2700K, a parter domu rozbraja strefę alarmową.',
    humanNote:
      'Nie szukasz pilota po ciemku ani telefonu w trakcie parkowania. Kamera przy bramie rozpoznaje tablicę Twojego auta, brama sama się otwiera, a na podjeździe zapala się światło.',
    actionSequence: [
      { step: 'Odczyt tablicy LPR', icon: 'Camera', detail: 'Kamera Hikvision identyfikuje numer rejestracyjny' },
      { step: 'Otwarcie bramy', icon: 'DoorClosed', detail: 'Moduł Shelly Plus 1 podaje impuls na sterownik bramy wjazdowej' },
      { step: 'Ścieżka świetlna', icon: 'Sun', detail: 'Rozświetlenie korytarza ciepłym światłem 2700K' },
      { step: 'Światło w domu', icon: 'Lightbulb', detail: 'W korytarzu zapala się światło' },
    ],
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80',
  },
];
