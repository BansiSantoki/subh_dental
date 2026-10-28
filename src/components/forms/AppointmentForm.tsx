import React from 'react';
import { Loader2Icon } from 'lucide-react';
import { Field } from './Field';
import { InquiryReady } from './InquiryReady';
import { useInquiryForm } from '../../hooks/useInquiryForm';
import { services } from '../../data/services';
import { inputClass } from '../../utils/formStyles';
import { buttonClass } from '../../utils/buttonStyles';
import { todayISO } from '../../utils/validation';

/** Compact appointment inquiry used in the booking modal. */
export function AppointmentForm({ initialTreatment = '' }: {initialTreatment?: string;}) {
  const p = 'appt';
  const { values, errors, status, message, waUrl, setField, handleSubmit, reset } = useInquiryForm(
    { treatment: initialTreatment },
    { idPrefix: p }
  );

  if (status === 'ready') {
    return <InquiryReady name={values.name} message={message} waUrl={waUrl} onEdit={reset} />;
  }

  const describedBy = (key: string, hint = false) =>
  errors[key as keyof typeof errors] ? `${p}-${key}-error` : hint ? `${p}-${key}-hint` : undefined;

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2">
      <Field id={`${p}-name`} label="Full name" error={errors.name} className="sm:col-span-2">
        <input
          id={`${p}-name`}
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setField('name', e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={describedBy('name')}
          className={inputClass(Boolean(errors.name), 'h-12')}
          placeholder="Your name" />
        
      </Field>
      <Field id={`${p}-phone`} label="Phone number" error={errors.phone}>
        <input
          id={`${p}-phone`}
          type="tel"
          inputMode="tel"
          autoComplete="tel"
          value={values.phone}
          onChange={(e) => setField('phone', e.target.value)}
          aria-invalid={Boolean(errors.phone)}
          aria-describedby={describedBy('phone')}
          className={inputClass(Boolean(errors.phone), 'h-12')}
          placeholder="+91 98765 43210" />
        
      </Field>
      <Field id={`${p}-date`} label="Preferred date" optional error={errors.date}>
        <input
          id={`${p}-date`}
          type="date"
          min={todayISO()}
          value={values.date}
          onChange={(e) => setField('date', e.target.value)}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={describedBy('date')}
          className={inputClass(Boolean(errors.date), 'h-12')} />
        
      </Field>
      <Field id={`${p}-treatment`} label="Treatment of interest" error={errors.treatment} className="sm:col-span-2">
        <select
          id={`${p}-treatment`}
          value={values.treatment}
          onChange={(e) => setField('treatment', e.target.value)}
          aria-invalid={Boolean(errors.treatment)}
          aria-describedby={describedBy('treatment')}
          className={inputClass(Boolean(errors.treatment), 'h-12 appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10')}
          style={{ backgroundImage: selectChevron }}>
          
          <option value="">Choose a treatment</option>
          <option value="a general consultation">General consultation</option>
          {services.map((s) =>
          <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          )}
          <option value="a consultation (not sure yet)">Not sure yet</option>
        </select>
      </Field>
      <Field id={`${p}-message`} label="Message" optional className="sm:col-span-2">
        <textarea
          id={`${p}-message`}
          rows={3}
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          className={inputClass(false, 'resize-none py-3')}
          placeholder="Anything you would like us to know (please avoid sharing detailed medical information)" />
        
      </Field>
      <div className="sm:col-span-2">
        <button type="submit" disabled={status === 'preparing'} className={buttonClass('primary', 'lg', 'w-full')}>
          {status === 'preparing' ?
          <>
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" /> Preparing your inquiry…
            </> :

          'Continue to WhatsApp'
          }
        </button>
        <p className="mt-3 text-center text-[12.5px] leading-relaxed text-muted">
          Sending an inquiry does not confirm an appointment. Our team will reply with available options.
        </p>
      </div>
    </form>);

}

export const selectChevron =
"url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23173F3A' stroke-width='1.8' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")";