// Company details live in site.json, so the build scripts (prerender, sitemap) and the
// site read the same values. Leave a field empty and the parts of the site that use it
// stay hidden, so nothing shows a fake number, name or address.
import site from './site.json';

export interface SiteConfig {
  name: string;
  /** Address of the live site, no trailing slash. Change it here when the own domain is ready. */
  url: string;
  /** The only contact address on the site and where the mail fallback sends enquiries. */
  email: string;
  /** Leave empty until the real number is confirmed: the phone buttons hide themselves. */
  phone: string;
  /** Link to a real, existing Telegram account. Empty hides the button. */
  telegram: string;
  region: string;
  hours: string;
  responseTime: string;
  engineer: { name: string; role: string; /** Path under public/, empty hides the photo */ photo: string };
  /** Business details required on a Polish company site (UŚUDE art. 5) and in the privacy policy. */
  legal: { companyName: string; address: string; nip: string; regon: string; krs: string };
}

export const SITE: SiteConfig = site;

/** "zwykle w ciągu 24 godzin roboczych (pon–pt, 8:00–18:00)" */
export const RESPONSE_LINE = `${SITE.responseTime} (${SITE.hours})`;

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

// The main call to action, the same words everywhere. The short form is for tight spots
// (header, mobile bar). It opens /zapytanie.
export const CTA = {
  label: 'Odbierz propozycję dla swojego domu',
  short: 'Odbierz propozycję',
  note: 'Około 2 minut, bez zobowiązań',
};

// Asked in the enquiry so the team can see who is ready to start.
// No prices anywhere on the site for now: scope and price come after a call.
export const INSTALL_TIMELINES = [
  'W ciągu 3 miesięcy',
  'Za 3–6 miesięcy',
  'Za ponad 6 miesięcy',
  'Na razie zbieram informacje',
] as const;

// Real finished homes and real client words. Both lists start empty and their block
// on the home page stays hidden until something is added. Add only homes we actually
// finished and words the client agreed in writing to publish, with their own photos.
export interface ClientQuote {
  quote: string;
  /** First name and initial, e.g. 'Marta K.' */
  name: string;
  /** Town and kind of home, e.g. 'Ząbki, dom w budowie' */
  place: string;
}

export interface FinishedHome {
  title: string;
  place: string;
  /** What we did, in plain words: 'Światło i rolety z telefonu', 'Wideodomofon przy furtce' */
  done: string[];
  /** Path under public/, e.g. 'images/domy/zabki.jpg'. A photo of this home only. */
  photo: string;
  photoAlt: string;
}

export const CLIENT_QUOTES: ClientQuote[] = [];
export const FINISHED_HOMES: FinishedHome[] = [];
