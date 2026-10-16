// Company details for the template. Leave a field empty and the parts of the
// site that use it stay hidden, so nothing shows a fake number or name.

export const SITE = {
  email: 'kontakt@domence.pl',
  // Displayed as written, dialled as digits only, e.g. '+48 601 234 567'
  phone: '',
  engineer: {
    name: '',
    role: 'Inżynier prowadzący',
    // Path under public/, e.g. 'images/inzynier.jpg'
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
