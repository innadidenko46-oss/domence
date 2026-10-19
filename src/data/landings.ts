import { PropertyState } from '../types.ts';

// Landing pages for what people search in Warsaw. Plain words, no prices or model names:
// the same rules as the rest of the site (CLAUDE.md). Each one is also listed in
// scripts/spa-routes.mjs (title, description) and routed in src/App.tsx.

export interface Landing {
  slug: string;
  badge: string;
  title: string;
  description: string;
  image: string;
  /** Opens the enquiry with this situation already chosen */
  state?: PropertyState;
  benefitsTitle: string;
  intro: string;
  benefits: [title: string, text: string][];
  faq: [question: string, answer: string][];
  related: string[];
}

export const LANDINGS: Record<string, Landing> = {
  'inteligentny-dom-warszawa': {
    slug: 'inteligentny-dom-warszawa',
    badge: "Warszawa i okolice",
    title: "Inteligentny dom w Warszawie i okolicach",
    description: "Światło, rolety, ogrzewanie i bezpieczeństwo, które działają same i z telefonu. Do nowego domu i do gotowego mieszkania, także bez kucia ścian.",
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80',
    benefitsTitle: "Co dom robi za Ciebie",
    intro: "Nie musisz znać się na technice. Mówisz, co ma się dziać w domu, a my dobieramy urządzenia i montujemy je tak, żeby działały razem.",
    benefits: [
      ["Światło", "Zwykłe włączniki zostają. Dochodzi telefon i sceny, np. „Wieczór”, który jednym przyciskiem przygasza lampy w salonie."],
      ["Rolety", "Podnoszą się rano i opuszczają po zmroku. Wszystkie naraz albo pokój po pokoju."],
      ["Ogrzewanie", "Osobna temperatura w każdym pokoju i plan na cały tydzień. Gdy nikogo nie ma, dom grzeje mniej."],
      ["Woda i gaz", "Czujnik pod pralką wykrywa wyciek i sam zakręca wodę. O wszystkim dowiesz się z telefonu."],
      ["Prąd", "Widzisz w telefonie, ile prądu zużywa dom i co pobiera go najwięcej."],
      ["Wejście i brama", "Wideodomofon w telefonie, furtka otwierana twarzą, kartą albo kodem, brama i garaż z telefonu."],
    ],
    faq: [
      ["Czy dom działa bez internetu?", "Tak. Światło, rolety, ogrzewanie i czujniki działają w domu także bez internetu. Bez niego nie zobaczysz tylko domu z daleka."],
      ["Czy trzeba kuć ściany?", "W gotowym mieszkaniu zwykle nie. Małe moduły chowamy w puszkach za włącznikami. W nowym domu planujemy wszystko razem z elektryką."],
      ["Ile to kosztuje?", "To zależy od wielkości domu i tego, ile rzeczy ma działać samo. Cenę dostajesz na piśmie po bezpłatnej rozmowie i sprawdzeniu domu."],
      ["Gdzie montujecie?", "W Warszawie i miejscowościach wokół niej. Napisz, gdzie jest dom, a potwierdzimy, czy dojedziemy."],
    ],
    related: ['/ochrona-przed-zalaniem', '/automatyka-bez-kucia', '/jak-zaczac'],
  },
  'wideodomofon-i-kamery-warszawa': {
    slug: 'wideodomofon-i-kamery-warszawa',
    badge: "Warszawa i okolice",
    title: "Wideodomofon i kamery w Warszawie i okolicach",
    description: "Widzisz, kto stoi przy furtce, i rozmawiasz z nim z telefonu. Kamery pokazują kolorowy obraz także w nocy, a nagrania zostają na dysku w domu.",
    image: 'https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80',
    state: 'security',
    benefitsTitle: "Co dostajesz",
    intro: "Dobieramy kamery i wideodomofon do Twojego domu: ile ich potrzeba, gdzie je powiesić i jak poprowadzić kable.",
    benefits: [
      ["Gość przy furtce", "Dzwonek odbierasz na panelu w domu albo w telefonie, nawet gdy jesteś w pracy."],
      ["Wejście bez kluczy", "Furtkę otwierasz twarzą, kartą albo kodem, a bramę i garaż z telefonu."],
      ["Obraz w nocy", "Kamery pokazują kolory także po zmroku, więc widać, kto stoi przy bramie."],
      ["Powiadomienia z sensem", "Kamera odróżnia człowieka i samochód od kota czy liści, więc telefon nie dzwoni bez powodu."],
      ["Nagrania w domu", "Obraz zapisuje się na dysku w domu. Bez abonamentu i bez opłat co miesiąc."],
      ["Internet w całym domu", "Dobra sieć to podstawa kamer. Zakładamy ją tak, żeby działała w każdym pokoju."],
    ],
    faq: [
      ["Czy potrzebny jest abonament?", "Nie. Nagrania zapisują się na dysku w domu, a podgląd w telefonie nie wymaga opłat co miesiąc."],
      ["Czy kamery działają bez internetu?", "Tak, nagrywają na dysk w domu także bez internetu. Bez niego nie obejrzysz tylko obrazu z daleka."],
      ["Czy mogę dołożyć automatykę później?", "Tak. Możesz zacząć od wejścia i kamer, a światło czy rolety dołożyć później, bez wymiany tego, co już masz."],
      ["Ile to kosztuje?", "Zależy od liczby kamer, długości kabli i tego, co ma się dziać przy wejściu. Cenę dostajesz na piśmie po bezpłatnym sprawdzeniu domu."],
    ],
    related: ['/teletechnika', '/inteligentny-dom-warszawa', '/jak-zaczac'],
  },
  'ochrona-przed-zalaniem': {
    slug: 'ochrona-przed-zalaniem',
    badge: "Woda i gaz",
    title: "Ochrona przed zalaniem: czujnik sam zakręca wodę",
    description: "Gdy czujnik wykryje wodę, zawór od razu zakręca dopływ, nawet gdy nikogo nie ma w domu. Ty dostajesz powiadomienie w telefonie.",
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1200&q=80',
    benefitsTitle: "Jak to działa",
    intro: "Zalanie zwykle zaczyna się po cichu: wąż od pralki, zmywarka, kocioł. Czujnik na podłodze wyczuwa wodę wcześniej, niż Ty ją zauważysz.",
    benefits: [
      ["Czujniki tam, gdzie leje się woda", "Pod pralką, zmywarką, w łazience i przy kotle. Są małe, działają na baterie i nie potrzebują kabli."],
      ["Zawór na wejściu wody", "Montujemy go na rurze za głównym zaworem. Gdy czujnik wykryje wodę, zawór sam zakręca dopływ."],
      ["Powiadomienie w telefonie", "Wiesz, gdzie i kiedy pojawiła się woda. Po usunięciu wycieku odkręcasz wodę jednym przyciskiem."],
      ["Czujnik gazu", "Przy kuchence lub kotle gazowym. Gdy wyczuje gaz, głośno piszczy, wysyła powiadomienie i może sam zakręcić zawór gazu."],
      ["Działa bez internetu", "Czujnik i zawór porozumiewają się w domu. Woda zakręci się także wtedy, gdy internet nie działa."],
      ["Do gotowego mieszkania", "Zwykle bez kucia. Potrzebny jest dostęp do rury z wodą, co sprawdzamy przy bezpłatnych oględzinach."],
    ],
    faq: [
      ["Co się stanie, jeśli wyciek będzie w nocy?", "Zawór zakręci wodę od razu, a telefon pokaże powiadomienie. Rano zobaczysz, gdzie był wyciek."],
      ["Czy da się to zrobić w bloku?", "Tak, jeśli w mieszkaniu jest dostęp do rury z wodą, np. przy wodomierzu. Sprawdzamy to przy oględzinach."],
      ["Czy mogę zamówić tylko to?", "Tak. Ochronę przed zalaniem można zamówić osobno, bez reszty automatyki, a inne rzeczy dołożyć później."],
      ["Gdzie montujecie?", "W Warszawie i okolicach. Cenę dostajesz na piśmie po bezpłatnej rozmowie."],
    ],
    related: ['/inteligentny-dom-warszawa', '/automatyka-bez-kucia', '/scenariusze'],
  },
  'automatyka-bez-kucia': {
    slug: 'automatyka-bez-kucia',
    badge: "Gotowe mieszkanie",
    title: "Inteligentne mieszkanie bez kucia ścian",
    description: "Masz gotowe wnętrze i nie chcesz remontu? Małe moduły chowamy za zwykłymi włącznikami, a ściany, płytki i gładzie zostają całe.",
    image: 'https://images.unsplash.com/photo-1584622781564-1d987f7333c1?auto=format&fit=crop&w=1200&q=80',
    state: 'retro',
    benefitsTitle: "Co da się zrobić bez kucia",
    intro: "Większość rzeczy montujemy w miejscach, które już są: w puszkach za włącznikami, przy grzejnikach i w skrzynce z bezpiecznikami.",
    benefits: [
      ["Światło", "Moduł mieści się w puszce za włącznikiem. Włącznik zostaje ten sam, a dochodzi sterowanie z telefonu i sceny."],
      ["Rolety", "Jeśli rolety mają silniki, podłączamy je bez nowych kabli. Sterujesz nimi z włącznika, z telefonu i według pory dnia."],
      ["Grzejniki", "Zamiast zwykłych pokręteł zakładamy głowice, które same pilnują temperatury w każdym pokoju."],
      ["Czujniki", "Czujniki zalania i ruchu działają na baterie, więc nie potrzebują kabli."],
      ["Wideodomofon", "Często da się go podłączyć do kabla po starym domofonie."],
      ["Krok po kroku", "Możesz zacząć od kilku pokoi, a kolejne dołożyć później. Nic nie trzeba wymieniać."],
    ],
    faq: [
      ["Czy zwykłe włączniki dalej działają?", "Tak. Domownicy włączają światło jak dawniej, a telefon jest dodatkiem."],
      ["Czy po montażu zostaje bałagan?", "Nie kujemy ścian, więc nie ma pyłu z bruzd. Pracujemy przy włącznikach, grzejnikach i w skrzynce z bezpiecznikami."],
      ["Czy to działa bez internetu?", "Tak. Włączniki, harmonogramy i czujniki działają w domu. Bez internetu nie sterujesz tylko z daleka."],
      ["Ile trwa montaż?", "Zależy od liczby pokoi i urządzeń. Termin dostajesz na piśmie razem z planem i ceną."],
    ],
    related: ['/systemy', '/ochrona-przed-zalaniem', '/jak-zaczac'],
  },
};

// Labels for links to other pages from a landing
export const PAGE_LABELS: Record<string, string> = {
  '/systemy': "Światło, rolety i ogrzewanie",
  '/teletechnika': "Kamery, wideodomofon i internet",
  '/scenariusze': "Co dom robi za Ciebie",
  '/jak-zaczac': "Od czego zacząć",
  '/inteligentny-dom-warszawa': "Inteligentny dom w Warszawie i okolicach",
  '/wideodomofon-i-kamery-warszawa': "Wideodomofon i kamery w Warszawie i okolicach",
  '/ochrona-przed-zalaniem': "Ochrona przed zalaniem: czujnik sam zakręca wodę",
  '/automatyka-bez-kucia': "Inteligentne mieszkanie bez kucia ścian",
};
