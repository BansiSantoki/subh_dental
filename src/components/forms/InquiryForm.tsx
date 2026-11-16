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

export function InquiryForm({ initialTreatment = '' }: { initialTreatment?: string }) {
  const p = 'inquiry';
  const { values, errors, status, message, waUrl, setField, handleSubmit, reset } = useInquiryForm(
    { treatment: initialTreatment },
    { idPrefix: p, requireConsent: true, requireMessage: true, includeContactDetails: true }
  );

  if (status === 'ready') {
    return <InquiryReady name={values.name} message={message} waUrl={waUrl} onEdit={reset} />;
  }

  const err = (key: keyof typeof errors) => (errors[key] ? `${p}-${key}-error` : undefined);

  return (
    <form noValidate onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2" aria-label="Consultation inquiry form">
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
          className={inputClass(Boolean(errors.name), 'h-11 sm:h-12')}
          placeholder="e.g. Priyanshu Sharma"
        />
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
          className={inputClass(Boolean(errors.phone), 'h-11 sm:h-12')}
          placeholder="+91 98765 43210"
        />
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
          className={inputClass(Boolean(errors.email), 'h-11 sm:h-12')}
          placeholder="name@example.com"
        />
      </Field>

      <Field id={`${p}-date`} label="Preferred date" optional error={errors.date}>
        <input
          id={`${p}-date`}
          type="date"
          min={todayISO()}
          value={values.date}
          onChange={(e) => setField('date', e.target.value)}
          aria-invalid={Boolean(errors.date)}
          aria-describedby={err('date')}
          className={inputClass(Boolean(errors.date), 'h-11 sm:h-12')}
        />
      </Field>

      <div className="sm:col-span-2">
        <fieldset>
          <legend className="mb-2 text-xs font-semibold text-[#123B59]">Preferred contact method</legend>
          <div className="flex flex-wrap gap-2">
            {contactMethods.map((m) => {
              const selected = values.contactMethod === m;
              return (
                <label
                  key={m}
                  className={`cursor-pointer rounded-full border px-4 py-2 text-xs font-semibold transition-colors duration-200 ${
                    selected
                      ? 'border-[#087FAE] bg-[#087FAE] text-white shadow-2xs'
                      : 'border-[#E2EAF0] bg-white text-[#34465A] hover:border-[#087FAE]/50'
                  }`}
                >
                  <input
                    type="radio"
                    name={`${p}-contactMethod`}
                    value={m}
                    checked={selected}
                    onChange={() => setField('contactMethod', m)}
                    className="sr-only"
                  />
                  {m}
                </label>
              );
            })}
          </div>
        </fieldset>
      </div>

      <Field id={`${p}-treatment`} label="Treatment of interest" error={errors.treatment} className="sm:col-span-2">
        <select
          id={`${p}-treatment`}
          value={values.treatment}
          onChange={(e) => setField('treatment', e.target.value)}
          aria-invalid={Boolean(errors.treatment)}
          aria-describedby={err('treatment')}
          className={inputClass(
            Boolean(errors.treatment),
            'h-11 sm:h-12 appearance-none bg-[length:16px] bg-[right_1rem_center] bg-no-repeat pr-10'
          )}
          style={{ backgroundImage: selectChevron }}
        >
          <option value="">Choose a treatment</option>
          <option value="a general consultation">General consultation & check-up</option>
          {services.map((s) => (
            <option key={s.slug} value={s.name}>
              {s.name}
            </option>
          ))}
          <option value="a consultation (not sure yet)">Other / Not sure yet</option>
        </select>
      </Field>

      <Field id={`${p}-message`} label="Message" error={errors.message} className="sm:col-span-2">
        <textarea
          id={`${p}-message`}
          rows={3}
          value={values.message}
          onChange={(e) => setField('message', e.target.value)}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={err('message')}
          className={inputClass(Boolean(errors.message), 'resize-none py-2.5')}
          placeholder="Briefly describe your symptoms or what you would like help with"
        />
      </Field>

      <div className="sm:col-span-2 pt-2">
        <button
          type="submit"
          disabled={status === 'preparing'}
          className={buttonClass('primary', 'lg', 'w-full shadow-md')}
        >
          {status === 'preparing' ? (
            <>
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Preparing inquiry…</span>
            </>
          ) : (
            'Continue to WhatsApp'
          )}
        </button>
        <p className="mt-2 text-center text-xs text-[#34465A]/70">
          Sending an inquiry does not book an appointment. Our Nashik clinic team will reply promptly.
        </p>
      </div>
    </form>
  );
}
