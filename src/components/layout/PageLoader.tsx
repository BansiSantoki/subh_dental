import React from 'react';
import { LogoMark } from '../shared/Logo';

export function PageLoader() {
  return (
    <div className="flex min-h-[70vh] items-center justify-center" role="status" aria-live="polite">
      <div className="animate-pulse">
        <LogoMark size={44} />
      </div>
      <span className="sr-only">Loading page…</span>
    </div>);

}