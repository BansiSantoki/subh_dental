import React, { createContext, useCallback, useContext, useMemo, useState } from 'react';

interface AppointmentContextValue {
  isOpen: boolean;
  treatment: string;
  openAppointment: (treatment?: string) => void;
  closeAppointment: () => void;
}

const AppointmentContext = createContext<AppointmentContextValue | null>(null);

export function AppointmentProvider({ children }: {children: React.ReactNode;}) {
  const [isOpen, setIsOpen] = useState(false);
  const [treatment, setTreatment] = useState('');

  const openAppointment = useCallback((t?: string) => {
    setTreatment(t ?? '');
    setIsOpen(true);
  }, []);

  const closeAppointment = useCallback(() => setIsOpen(false), []);

  const value = useMemo(
    () => ({ isOpen, treatment, openAppointment, closeAppointment }),
    [isOpen, treatment, openAppointment, closeAppointment]
  );

  return <AppointmentContext.Provider value={value}>{children}</AppointmentContext.Provider>;
}

export function useAppointment() {
  const ctx = useContext(AppointmentContext);
  if (!ctx) throw new Error('useAppointment must be used within AppointmentProvider');
  return ctx;
} 