import React from 'react';
import { Loader2Icon } from 'lucide-react';
import { Field } from './Field';
import { InquiryReady } from './InquiryReady';
import { selectChevron } from './AppointmentForm';
import { useInquiryForm } from '../../hooks/useInquiryForm';
import { services } from '../../data/services';
import { inputClass } from '../../utils/formStyles';
import { buttonClass } from '../../utils/buttonStyles';
import { todayISO } from '../../utils/validation';

const contactMethods = ['WhatsApp', 'Phone call', 'Email'];

/** Full consultation inquiry form used in the contact section. */
export function InquiryForm({ initialTreatment = '' }: {initialTreatment?: string;}) {
  const p = 'inquiry';
  const { values, errors, status, message, waUrl, setField, handleSubmit, reset } = useInquiryForm(
    { treatment: initialTreatment },
    { idPrefix: p, requireConsent: true, requireMessage: true, includeContactDetails: true }
  );

  if (status === 'ready') {
    return <InquiryReady name={values.name} message={message} waUrl={waUrl} onEdit={reset} />;
  }

  const err = (key: keyof typeof errors) => errors[key] ? `${p}-${key}-error` : undefined;

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-5 sm:grid-cols-2" aria-label="Consultation inquiry form">
      <Field id={`${p}-name`} label="Full name" error={errors.name}>
        <input
          id={`${p}-name`}
          type="text"
          autoComplete="name"
          value={values.name}
          onChange={(e) => setField('name', e.target.value)}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={err('name')}
          aria-required="true"
          className={inputClass(Boolean(errors.name), 'h-12')} />
        
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
          aria-describedby={err('phone')}
          aria-required="true"
          className={inputClass(Boolean(errors.phone), 'h-12')}
          placeholder="+91" />
        
      </Field>
      <Field id={`${p}-email`} label="Email address" optional error={errors.email}>
        <input
          id={`${p}-email`}
          type="email"
          autoComplete="email"
          value={values.email}
          onChange={(e) => setField('email', e.target.value)}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={err('email')}
          className={inputClass(Boolean(errors.email), 'h-12')} />
        
      </Field>
      <fieldset>
        <legend className="mb-2 text-[13.5px] font-semibold text-charcoal">Preferred contact method</legend>
        <div className="flex flex-wrap gap-2">
          {contactMethods.map((m) => {
            const selected = values.contactMethod === m;
            return (
              <label
                key={m}
                className={`cursor-pointer rounded-full border px-4 py-2.5 text-[13px] font-medium transition-colors duration-200 has-[:focus-visible]:ring-2 has-[:focus-visible]:ring-forest ${
                selected ? 'border-forest bg-forest text-ivory' : 'border-charcoal/15 bg-white text-charcoal hover:border-charcoal/30'}`
                }>
                
                <input
                  type="radio"
                  name={`${p}-contactMethod`}
                  value={m}
                  checked={selected}
                  onChange={() => setField('contactMethod', m)}
                  className="sr-only" />
                
                {m}
              </label>);

          })}
        </div>
      </fieldset>
      <Field id={`${p}-treatment`} label="Treatment of interest" error={errors.treatment}>
        <select
          id={`${p}-treatment`}
          value={values.treatment}
          onChange={(e) => setField('treatment', e.target.value)}
          aria-invalid={Boolean(errors.treatment)}
          aria-describedby={err('treatment')}
          aria-required="true"
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
      <Field id={`${p}-date`} label="Preferred appointment date" optional error={errors.date}>
        <input
          id={`${p}-date`}
          type="date"
          min={todayISO()}
          value={values.date}
          onChange={(e) => setField('date', e.target.value)}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={err('date')}
          className={inputClass(Boolean(errors.date), 'h-12')} />
        
      </Field>
      <Field
        id={`${p}-message`}
        label="Message"
        error={errors.message}
        hint="A short note is enough. Please avoid sharing detailed medical information here."
        className="sm:col-span-2">
        
        <textarea
          id={`${p}-message`}
          rows={4}
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? `${p}-message-error` : `${p}-message-hint`}
          aria-required="true"
          className={inputClass(Boolean(errors.message), 'resize-none py-3')} />
        
      </Field>
      <div className="sm:col-span-2">
        <label className="flex cursor-pointer items-start gap-3 text-[14px] leading-relaxed text-charcoal/80">
          <input
            id={`${p}-consent`}
            type="checkbox"
            checked={values.consent}
            onChange={(e) => setField('consent', e.target.checked)}
            aria-invalid={Boolean(errors.consent)}
            aria-describedby={err('consent')}
            className="mt-1 h-[18px] w-[18px] shrink-0 rounded border-charcoal/30 accent-forest" />
          
          <span>I agree to be contacted by Dr. Naik\'s Shubh Smile Multispeciality Dental Clinic regarding this inquiry.</span>
        </label>
        {errors.consent &&
        <p id={`${p}-consent-error`} role="alert" className="mt-1.5 pl-[30px] text-[12.5px] font-medium text-[#A23F34]">
            {errors.consent}
          </p>
        }
      </div>
      <div className="flex flex-col gap-3 sm:col-span-2 sm:flex-row sm:items-center sm:justify-between">
        <button type="submit" disabled={status === 'preparing'} className={buttonClass('primary', 'lg', 'w-full sm:w-auto')}>
          {status === 'preparing' ?
          <>
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" /> Preparing…
            </> :

          'Send Inquiry'
          }
        </button>
        <p className="text-[12.5px] leading-relaxed text-muted sm:max-w-[260px]">
          Your inquiry is prepared for WhatsApp. It does not confirm an appointment.
        </p>
      </div>
    </form>);

}