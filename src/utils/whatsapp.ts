import { format, parseISO, isValid } from 'date-fns';
import { siteConfig } from '../data/siteConfig';

/** Strip control characters / angle brackets, collapse whitespace and cap length. */
export function sanitizeText(value: string, maxLength = 500): string {
  return value.
  replace(/[\u0000-\u001F\u007F<>]/g, ' ').
  replace(/\s+/g, ' ').
  trim().
  slice(0, maxLength);
}

export function whatsappUrl(message: string = siteConfig.defaultWhatsAppMessage): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function treatmentMessage(treatmentName: string): string {
  return `Hello, I would like to know more about ${sanitizeText(treatmentName, 120)} at ${siteConfig.name} in ${siteConfig.city}.`;
}

export function formatPreferredDate(isoDate: string): string {
  if (!isoDate) return '';
  const parsed = parseISO(isoDate);
  return isValid(parsed) ? format(parsed, 'd MMMM yyyy') : '';
}

interface AppointmentMessageInput {
  name: string;
  treatment: string;
  date?: string;
  note?: string;
  phone?: string;
  email?: string;
  contactMethod?: string;
}

export function appointmentMessage(input: AppointmentMessageInput): string {
  const name = sanitizeText(input.name, 80);
  const treatment = sanitizeText(input.treatment || 'a general consultation', 120);
  const date = formatPreferredDate(input.date ?? '') || 'flexible';
  const lines = [
  `Hello, I would like to inquire about an appointment at ${siteConfig.name} in ${siteConfig.city}. My name is ${name}. I am interested in ${treatment}. My preferred date is ${date}. Please let me know the available options.`];

  if (input.phone) lines.push(`Phone: ${sanitizeText(input.phone, 20)}`);
  if (input.email) lines.push(`Email: ${sanitizeText(input.email, 120)}`);
  if (input.contactMethod) lines.push(`Preferred contact method: ${sanitizeText(input.contactMethod, 40)}`);
  if (input.note) lines.push(`Message: ${sanitizeText(input.note, 600)}`);
  return lines.join('\n');
}