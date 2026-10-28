export interface InquiryValues {
  name: string;
  phone: string;
  email: string;
  contactMethod: string;
  treatment: string;
  date: string;
  message: string;
  consent: boolean;
}

export type InquiryErrors = Partial<Record<keyof InquiryValues, string>>;

export const emptyInquiry: InquiryValues = {
  name: '',
  phone: '',
  email: '',
  contactMethod: 'WhatsApp',
  treatment: '',
  date: '',
  message: '',
  consent: false
};

interface ValidateOptions {
  requireConsent?: boolean;
  requireMessage?: boolean;
}

export function validateInquiry(values: InquiryValues, options: ValidateOptions = {}): InquiryErrors {
  const errors: InquiryErrors = {};
  const name = values.name.trim();
  if (!name) errors.name = 'Please enter your full name.';else
  if (name.length < 2) errors.name = 'Please enter at least 2 characters.';

  const digits = values.phone.replace(/\D/g, '');
  if (!values.phone.trim()) errors.phone = 'Please enter a phone number we can reach you on.';else
  if (!/^[+\d\s()-]+$/.test(values.phone) || digits.length < 10 || digits.length > 13)
  errors.phone = 'Please enter a valid phone number, e.g. +91 98765 43210.';

  if (values.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
  errors.email = 'Please enter a valid email address or leave it blank.';

  if (!values.treatment) errors.treatment = 'Please choose a treatment of interest.';

  if (values.date) {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    if (new Date(values.date) < today) errors.date = 'Please choose today or a future date.';
  }

  if (options.requireMessage && !values.message.trim())
  errors.message = 'Please add a short message about how we can help.';

  if (options.requireConsent && !values.consent)
  errors.consent = 'Please confirm we may contact you about this inquiry.';

  return errors;
}

export function todayISO(): string {
  const d = new Date();
  const offset = d.getTimezoneOffset();
  return new Date(d.getTime() - offset * 60000).toISOString().split('T')[0];
}