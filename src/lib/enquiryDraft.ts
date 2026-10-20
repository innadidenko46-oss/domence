// What the visitor already answered in the enquiry, so it survives moving to another
// page and back. Kept in memory only: nothing is written to the browser (no cookies,
// no localStorage), and a reload starts fresh.
import { AreaRange, Interest, PropertyState } from '../types.ts';

export type ContactBy = 'phone' | 'email';

export interface EnquiryDraft {
  interest?: Interest;
  stage?: PropertyState;
  area?: AreaRange;
  timeline: string;
  name: string;
  phone: string;
  email: string;
  location: string;
  message: string;
  contactBy: ContactBy;
  agreement: boolean;
}

const EMPTY: EnquiryDraft = {
  timeline: '',
  name: '',
  phone: '',
  email: '',
  location: '',
  message: '',
  contactBy: 'phone',
  agreement: false,
};

let draft: EnquiryDraft = { ...EMPTY };

export const getDraft = (): EnquiryDraft => draft;

export const saveDraft = (patch: Partial<EnquiryDraft>) => {
  draft = { ...draft, ...patch };
};

export const clearDraft = () => {
  draft = { ...EMPTY };
};
