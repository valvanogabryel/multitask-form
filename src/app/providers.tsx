'use client';

import { AppProvider } from '@/context/state';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';

export function Providers({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <AppProvider>
      <Toaster richColors />
      {children}
    </AppProvider>
  );
}
