import React from 'react';

interface FieldProps {
  id: string;
  label: string;
  optional?: boolean;
  error?: string;
  hint?: string;
  className?: string;
  children: React.ReactNode;
}

export function Field({ id, label, optional, error, hint, className = '', children }: FieldProps) {
  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 flex items-baseline justify-between gap-3 text-[13.5px] font-semibold text-charcoal">
        <span>{label}</span>
        {optional && <span className="text-[12px] font-medium text-muted">Optional</span>}
      </label>
      {children}
      {hint && !error &&
      <p id={`${id}-hint`} className="mt-1.5 text-[12.5px] text-muted">
          {hint}
        </p>
      }
      {error &&
      <p id={`${id}-error`} role="alert" className="mt-1.5 text-[12.5px] font-medium text-[#A23F34]">
          {error}
        </p>
      }
    </div>);

}