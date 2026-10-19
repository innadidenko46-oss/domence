// What the site keeps in the visitor's browser, and whether they allowed it.
// The only thing we remember is the enquiry answers, so the visitor does not lose
// them between pages. Nothing is stored for tracking or advertising.

export const CONSENT_KEY = 'domence_cookie_consent';
export const ENQUIRY_KEY = 'domence_calc_v1';

/** True only after the visitor chose "Zapamiętuj" in the banner. */
export function canRemember(): boolean {
  try {
    const raw = localStorage.getItem(CONSENT_KEY);
    if (!raw) return false;
    return (JSON.parse(raw) as { functional?: boolean }).functional === true;
  } catch {
    return false;
  }
}

export function saveChoice(remember: boolean) {
  try {
    localStorage.setItem(CONSENT_KEY, JSON.stringify({ functional: remember, timestamp: new Date().toISOString() }));
    if (!remember) localStorage.removeItem(ENQUIRY_KEY);
  } catch {
    // private mode or blocked storage: nothing is remembered anyway
  }
}
