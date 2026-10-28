import { useCallback, useRef, useState, type FormEvent } from 'react';
import { emptyInquiry, validateInquiry, type InquiryErrors, type InquiryValues } from '../utils/validation';
import { appointmentMessage, whatsappUrl } from '../utils/whatsapp';

type Status = 'idle' | 'preparing' | 'ready';

interface Options {
  idPrefix: string;
  requireConsent?: boolean;
  requireMessage?: boolean;
  includeContactDetails?: boolean;
}

const fieldOrder: (keyof InquiryValues)[] = ['name', 'phone', 'email', 'contactMethod', 'treatment', 'date', 'message', 'consent'];

export function useInquiryForm(initial: Partial<InquiryValues>, options: Options) {
  const [values, setValues] = useState<InquiryValues>({ ...emptyInquiry, ...initial });
  const [errors, setErrors] = useState<InquiryErrors>({});
  const [status, setStatus] = useState<Status>('idle');
  const [message, setMessage] = useState('');
  const timer = useRef<number>();

  const setField = useCallback(<K extends keyof InquiryValues,>(key: K, value: InquiryValues[K]) => {
    setValues((v) => ({ ...v, [key]: value }));
    setErrors((e) => e[key] ? { ...e, [key]: undefined } : e);
  }, []);

  const handleSubmit = useCallback(
    (event: FormEvent) => {
      event.preventDefault();
      const found = validateInquiry(values, options);
      setErrors(found);
      const firstInvalid = fieldOrder.find((k) => found[k]);
      if (firstInvalid) {
        document.getElementById(`${options.idPrefix}-${firstInvalid}`)?.focus();
        return;
      }
      setStatus('preparing');
      const text = appointmentMessage({
        name: values.name,
        treatment: values.treatment,
        date: values.date,
        note: values.message,
        ...(options.includeContactDetails ?
        { phone: values.phone, email: values.email, contactMethod: values.contactMethod } :
        { phone: values.phone })
      });
      window.clearTimeout(timer.current);
      timer.current = window.setTimeout(() => {
        setMessage(text);
        setStatus('ready');
      }, 650);
    },
    [values, options]
  );

  const reset = useCallback(() => {
    setStatus('idle');
  }, []);

  return {
    values,
    errors,
    status,
    message,
    waUrl: message ? whatsappUrl(message) : '',
    setField,
    handleSubmit,
    reset
  };
}