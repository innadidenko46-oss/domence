import React from 'react';
import { PageHeader } from '../components/PageHeader.tsx';
import { SITE } from '../config/site.ts';
import { analyticsEnabled } from '../lib/analytics.ts';
import { hasFormBackend } from '../lib/leads.ts';

const UPDATED = '20 października 2026';

const H2 = ({ children }: { children: React.ReactNode }) => (
  <h2 className="mt-10 font-display text-xl sm:text-2xl font-bold text-gray-900">{children}</h2>
);

// Privacy policy and the rules of the enquiry form, at their own address (ads and
// search engines need one). Company details come from src/config/site.json.
export const PrivacyPage: React.FC = () => {
  const { legal } = SITE;
  const controller = legal.companyName || SITE.name;
  const controllerDetails = [legal.address, legal.nip && `NIP ${legal.nip}`, legal.regon && `REGON ${legal.regon}`, legal.krs && `KRS ${legal.krs}`].filter(Boolean);

  return (
    <div className="bg-gray-50 text-gray-900">
      <PageHeader
        compact
        badge="Polityka prywatności"
        title="Polityka prywatności"
        description="Jakie dane zbieramy przez formularz, po co, jak długo je przechowujemy i jakie masz prawa. Bez prawniczego żargonu, tam gdzie się da."
      />

      <article className="py-12 lg:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-base leading-relaxed text-gray-700 [&_p]:mt-3 [&_ul]:mt-3 [&_ul]:list-disc [&_ul]:pl-6 [&_li]:mt-1.5">
          <p className="!mt-0 text-sm text-gray-600">Ostatnia zmiana: {UPDATED}</p>

          <H2>1. Kto odpowiada za Twoje dane</H2>
          <p>
            Administratorem danych osobowych i usługodawcą tej strony jest <strong className="text-gray-900">{controller}</strong>
            {controllerDetails.length > 0 && <>, {controllerDetails.join(', ')}</>}. W sprawach danych osobowych napisz na{' '}
            <a href={`mailto:${SITE.email}`} className="font-semibold text-petrol-700 underline underline-offset-2">
              {SITE.email}
            </a>
            .
          </p>

          <H2>2. Jakie dane zbieramy</H2>
          <p>Tylko te, które sam wpiszesz w zapytaniu:</p>
          <ul>
            <li>imię i nazwisko, telefon, e-mail i miejscowość,</li>
            <li>odpowiedzi o domu: co Cię interesuje, etap domu, metraż i planowany termin montażu,</li>
            <li>wiadomość, jeśli ją dopiszesz, i to, czy wolisz kontakt telefoniczny, czy tylko e-mail.</li>
          </ul>

          <H2>3. Po co i na jakiej podstawie</H2>
          <ul>
            <li>
              Żeby odpowiedzieć na zapytanie, umówić bezpłatne sprawdzenie domu i przygotować propozycję: to działania przed zawarciem umowy, na Twoją prośbę (art. 6 ust. 1 lit. b RODO).
            </li>
            <li>
              Żeby skontaktować się z Tobą telefonicznie lub e-mailem w sprawie tego zapytania: na podstawie Twojej zgody z formularza (art. 6 ust. 1 lit. a RODO). Zgodę możesz w każdej chwili cofnąć, pisząc na {SITE.email}.
            </li>
          </ul>
          <p>Nie wysyłamy newsletterów, nie sprzedajemy danych i nie przekazujemy ich firmom marketingowym. Nie podejmujemy decyzji automatycznie ani nie profilujemy.</p>

          <H2>4. Kto jeszcze może mieć dostęp do danych</H2>
          <p>Tylko firmy, które technicznie obsługują stronę i pocztę, na nasze zlecenie:</p>
          <ul>
            <li>dostawca hostingu strony (Vercel Inc., USA),</li>
            <li>dostawca naszej poczty e-mail,</li>
            {hasFormBackend && <li>dostawca usługi, która przesyła formularz na naszą skrzynkę e-mail.</li>}
            {analyticsEnabled && <li>Plausible Analytics (UE): liczy odwiedziny bez cookies i bez danych osobowych.</li>}
          </ul>
          <p>
            Jeśli dostawca przetwarza dane poza Europejskim Obszarem Gospodarczym, robi to na podstawie standardowych klauzul umownych Komisji Europejskiej albo decyzji o odpowiednim stopniu ochrony.
          </p>

          <H2>5. Jak długo przechowujemy dane</H2>
          <p>
            Przez czas rozmów o Twoim domu. Jeśli nie zawrzemy umowy, usuwamy dane z zapytania najpóźniej 12 miesięcy po ostatnim kontakcie. Jeśli zawrzemy umowę, przechowujemy je tak długo, jak wymagają tego przepisy, np. podatkowe.
          </p>

          <H2>6. Twoje prawa</H2>
          <p>Masz prawo:</p>
          <ul>
            <li>dostępu do swoich danych i otrzymania ich kopii,</li>
            <li>sprostowania, usunięcia lub ograniczenia przetwarzania,</li>
            <li>przeniesienia danych i sprzeciwu wobec przetwarzania,</li>
            <li>cofnięcia zgody w dowolnym momencie (bez wpływu na to, co zrobiliśmy wcześniej zgodnie z prawem),</li>
            <li>skargi do Prezesa Urzędu Ochrony Danych Osobowych (ul. Stawki 2, 00-193 Warszawa).</li>
          </ul>
          <p>Podanie danych jest dobrowolne, ale bez telefonu albo e-maila nie będziemy mogli odpowiedzieć.</p>

          <H2>7. Przeglądarka, cookies i statystyki</H2>
          <p>
            Strona nie używa cookies i nie zapisuje niczego w Twojej przeglądarce. Odpowiedzi z zapytania pamięta tylko do odświeżenia strony.
            {analyticsEnabled
              ? ' Odwiedziny liczymy narzędziem Plausible, które nie używa cookies i nie zbiera danych osobowych.'
              : ' Nie prowadzimy statystyk odwiedzin.'}
          </p>
          <p>
            Czcionki ładujemy z naszego serwera. Część zdjęć wnętrz pochodzi z serwisu Unsplash i ładuje się z jego serwerów (images.unsplash.com), które widzą adres IP przeglądarki, jak każda strona internetowa.
          </p>

          <H2>8. Kamery, które montujemy</H2>
          <p>
            Kamery i wideodomofony nagrywają na dysk w Twoim domu. Obraz nie trafia na nasze serwery. Podgląd w telefonie łączy się z Twoim rejestratorem.
          </p>

          <H2>9. Zasady korzystania z formularza</H2>
          <ul>
            <li>Korzystanie ze strony i formularza jest bezpłatne. Potrzebna jest przeglądarka z włączonym JavaScriptem.</li>
            <li>
              Zapytanie wysłane przez stronę nie jest zamówieniem ani ofertą w rozumieniu art. 66 Kodeksu cywilnego. Zakres, cenę i termin potwierdzamy na piśmie po rozmowie i sprawdzeniu domu.
            </li>
            <li>Nie wpisuj w formularzu danych innych osób bez ich zgody.</li>
            <li>Uwagi do działania strony wyślij na {SITE.email}. Odpowiemy w ciągu 14 dni.</li>
          </ul>
        </div>
      </article>
    </div>
  );
};
