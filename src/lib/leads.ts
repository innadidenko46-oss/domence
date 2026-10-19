// Lead delivery for the survey and contact forms.
//
// The site is a template: until a form service is configured it falls back to
// opening the visitor's mail client. Set VITE_FORM_ENDPOINT (and, for services
// that need it, VITE_FORM_ACCESS_KEY) in .env to send leads directly.

import { track } from './analytics.ts';

export const CONTACT_EMAIL = 'kontakt@domence.pl';

const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim() || '';
const ACCESS_KEY = (import.meta.env.VITE_FORM_ACCESS_KEY as string | undefined)?.trim() || '';

export const hasFormBackend = ENDPOINT !== '';

// Mail clients reject very long mailto: URLs, so the prefilled body is capped.
const MAILTO_BODY_LIMIT = 1800;

export type LeadResult = 'sent' | 'mailto';

export interface Lead {
  subject: string;
  body: string;
  fields: Record<string, string>;
}

export const mailtoHref = (subject: string, body: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body.slice(0, MAILTO_BODY_LIMIT)
  )}`;

export async function sendLead(lead: Lead): Promise<LeadResult> {
  if (!hasFormBackend) {
    track('Zapytanie', { sposob: 'e-mail' });
    window.location.href = mailtoHref(lead.subject, lead.body);
    return 'mailto';
  }

  const controller = new AbortController();
  const timeout = window.setTimeout(() => controller.abort(), 15000);
  try {
    const res = await fetch(ENDPOINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({
        ...(ACCESS_KEY ? { access_key: ACCESS_KEY } : {}),
        subject: lead.subject,
        message: lead.body,
        ...lead.fields,
      }),
      signal: controller.signal,
    });
    if (!res.ok) throw new Error(`Form service responded ${res.status}`);
    track('Zapytanie', { sposob: 'formularz' });
    return 'sent';
  } finally {
    window.clearTimeout(timeout);
  }
}
