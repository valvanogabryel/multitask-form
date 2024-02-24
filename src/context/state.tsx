import { ReactNode, createContext, useContext, useState } from 'react';

export const AppContext = createContext({});

export function AppProvider({ children }: { children: ReactNode }) {
  const value = useState({});

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
}

export function useAppState() {
  const context = useContext(AppContext);

  if (!context)
    throw new Error('useAppState deve ser usado dentro do AppProvider');

  return context;
}
