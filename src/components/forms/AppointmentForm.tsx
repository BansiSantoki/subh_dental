import React from 'react';
import { Loader2Icon } from 'lucide-react';
import { Field } from './Field';
import { InquiryReady } from './InquiryReady';
import { WhatsAppIcon } from '../shared/WhatsAppIcon';
import { useInquiryForm } from '../../hooks/useInquiryForm';
import { services } from '../../data/services';
import { inputClass } from '../../utils/formStyles';
import { buttonClass } from '../../utils/buttonStyles';
import { todayISO } from '../../utils/validation';

export const selectChevron =
  "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%23087FAE' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='m6 9 6 6 6-6'/%3E%3C/svg%3E\")";

/** Compact, responsive appointment inquiry form with sticky footer. */
export function AppointmentForm({ initialTreatment = '' }: { initialTreatment?: string }) {
  const p = 'appt';
  const { values, errors, status, message, waUrl, setField, handleSubmit, reset } = useInquiryForm(
    { treatment: initialTreatment },
    { idPrefix: p }
  );

  if (status === 'ready') {
    return (
      <div className="flex-1 min-h-0 overflow-y-auto p-5 sm:p-7 modal-scrollbar">
        <InquiryReady name={values.name} message={message} waUrl={waUrl} onEdit={reset} />
      </div>
    );
  }

  const describedBy = (key: string, hint = false) =>
    errors[key as keyof typeof errors] ? `${p}-${key}-error` : hint ? `${p}-${key}-hint` : undefined;

  return (
    <form noValidate onSubmit={handleSubmit} className="flex flex-1 flex-col min-h-0 min-w-0 h-full">
      {/* Scrollable Form Fields */}
      <div className="flex-1 min-h-0 overflow-y-auto overscroll-contain px-5 py-3.5 sm:px-7 sm:py-4 space-y-3 modal-scrollbar">
        {/* Full Name */}
        <Field id={`${p}-name`} label="Patient full name" error={errors.name}>
          <input
            id={`${p}-name`}
            type="text"
            autoComplete="name"
            value={values.name}
            onChange={(e) => setField('name', e.target.value)}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy('name')}
            className={inputClass(Boolean(errors.name), 'h-10 sm:h-11 text-sm')}
            placeholder="e.g. Rahul Sharma"
          />
        </Field>

        {/* Phone & Email (2 columns on sm+) */}
        <div className="grid gap-3.5 sm:grid-cols-2">
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
              className={inputClass(Boolean(errors.phone), 'h-10 sm:h-11 text-sm')}
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
              aria-describedby={describedBy('email')}
              className={inputClass(Boolean(errors.email), 'h-10 sm:h-11 text-sm')}
              placeholder="name@example.com"
            />
          </Field>
        </div>

        {/* Preferred Date */}
        <Field id={`${p}-date`} label="Preferred appointment date" optional error={errors.date}>
          <input
            id={`${p}-date`}
            type="date"
            min={todayISO()}
            value={values.date}
            onChange={(e) => setField('date', e.target.value)}
            aria-invalid={Boolean(errors.date)}
            aria-describedby={describedBy('date')}
            className={inputClass(Boolean(errors.date), 'h-10 sm:h-11 text-sm')}
          />
        </Field>

        {/* Treatment of Interest */}
        <Field id={`${p}-treatment`} label="Treatment of interest" error={errors.treatment}>
          <select
            id={`${p}-treatment`}
            value={values.treatment}
            onChange={(e) => setField('treatment', e.target.value)}
            aria-invalid={Boolean(errors.treatment)}
            aria-describedby={describedBy('treatment')}
            className={inputClass(
              Boolean(errors.treatment),
              'h-10 sm:h-11 text-sm appearance-none bg-[length:16px] bg-[right_0.875rem_center] bg-no-repeat pr-10'
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

        {/* Message / Symptoms */}
        <Field id={`${p}-message`} label="Message or symptoms" optional>
          <textarea
            id={`${p}-message`}
            rows={2}
            value={values.message}
            onChange={(e) => setField('message', e.target.value)}
            className={inputClass(false, 'resize-none py-2 text-sm leading-relaxed')}
            placeholder="Briefly describe your dental query or preferred time of day (Morning/Evening)"
          />
        </Field>
      </div>

      {/* Fixed/Sticky Footer: Always Visible and Clickable */}
      <div className="shrink-0 border-t border-[#E2EAF0] bg-[#F8FBFC] px-5 pt-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] sm:px-7 sm:py-3.5 z-10">
        <button
          type="submit"
          disabled={status === 'preparing'}
          className={buttonClass(
            'primary',
            'lg',
            'w-full shadow-sm font-semibold flex items-center justify-center gap-2 h-11 sm:h-11.5 text-sm sm:text-base cursor-pointer'
          )}
        >
          {status === 'preparing' ? (
            <>
              <Loader2Icon className="h-4 w-4 animate-spin" aria-hidden="true" />
              <span>Preparing inquiry…</span>
            </>
          ) : (
            <>
              <WhatsAppIcon className="h-4 w-4" />
              <span>Continue to WhatsApp</span>
            </>
          )}
        </button>
        <p className="mt-1.5 text-center text-[11px] sm:text-xs leading-relaxed text-[#34465A]/75">
          Our clinic care coordinator will review and reply with available appointment slots on WhatsApp.
        </p>
      </div>
    </form>
  );
}
