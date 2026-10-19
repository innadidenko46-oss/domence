// Company details for the template. Leave a field empty and the parts of the
// site that use it stay hidden, so nothing shows a fake number or name.

export const SITE = {
  url: 'https://domence-o9s1.vercel.app',
  email: 'kontakt@domence.pl',
  // Leave empty until the real number is confirmed: the phone buttons hide themselves.
  phone: '',
  // Replace with the real Telegram handle before launch: the button hides itself when empty.
  telegram: 'https://t.me/domence_pl',
  engineer: {
    name: 'Yevhen Mukha',
    role: 'Inżynier prowadzący',
    // Leave empty until a real photo is added under public/: the photo hides itself.
    photo: '',
  },
};

export const telHref = (phone: string) => `tel:${phone.replace(/[^\d+]/g, '')}`;

// Asked in both forms so the team can see who is ready to start.
// No prices anywhere on the site for now: scope and price come after a call.
export const INSTALL_TIMELINES = [
  'W ciągu 3 miesięcy',
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
