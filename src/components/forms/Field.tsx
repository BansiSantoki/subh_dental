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
      <label htmlFor={id} className="mb-1.5 flex items-baseline justify-between gap-3 text-[13px] font-semibold text-[#123B59]">
        <span>{label}</span>
        {optional && <span className="text-[11.5px] font-medium text-[#34465A]/60">Optional</span>}
      </label>
      {children}
      {hint && !error && (
        <p id={`${id}-hint`} className="mt-1 text-[12px] text-[#34465A]/70">
          {hint}
        </p>
      )}
      {error && (
        <p id={`${id}-error`} role="alert" className="mt-1 text-[12px] font-medium text-[#B4483C]">
          {error}
        </p>
      )}
    </div>
  );
}