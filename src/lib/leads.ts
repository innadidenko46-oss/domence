// Lead delivery for the enquiry form.
//
// With a form service (VITE_FORM_ENDPOINT, and VITE_FORM_ACCESS_KEY for Web3Forms) the
// enquiry is sent directly. Without one the form says so honestly and offers a ready
// e-mail to send from the visitor's own mail program: nothing opens by surprise and
// nothing is counted as sent. See docs/launch-checklist.md.

import { track } from './analytics.ts';
import { SITE } from '../config/site.ts';

export const CONTACT_EMAIL = SITE.email;

const ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT as string | undefined)?.trim() || '';
const ACCESS_KEY = (import.meta.env.VITE_FORM_ACCESS_KEY as string | undefined)?.trim() || '';

export const hasFormBackend = ENDPOINT !== '';

// Mail clients reject very long mailto: URLs, so the prefilled body is capped.
const MAILTO_BODY_LIMIT = 1800;

/** 'sent': the form service accepted it. 'manual': the visitor still has to send the e-mail. */
export type LeadResult = 'sent' | 'manual';

export interface Lead {
  subject: string;
  body: string;
  fields: Record<string, string>;
  /** Hidden field only bots fill in */
  honeypot: string;
}

export const mailtoHref = (subject: string, body: string) =>
  `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    body.slice(0, MAILTO_BODY_LIMIT),
  )}`;

export async function sendLead(lead: Lead): Promise<LeadResult> {
  // A bot filled the hidden field: look successful, send nothing
  if (lead.honeypot) return 'sent';
  if (!hasFormBackend) return 'manual';

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
