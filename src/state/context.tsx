// DataContext.tsx
import { createContext, useContext, ReactNode } from 'react';
import CreditData from '@/types';

interface DataContextProps {
  value: CreditData;
  children: ReactNode;
}

const DataContext = createContext<CreditData | undefined>(undefined);

export const useData = (): CreditData => {
  const context = useContext(DataContext);
  if (!context) {
    throw new Error('useData must be used within a DataProvider');
  }
  return context;
};

export const DataProvider = ({ value, children }: DataContextProps) => (
  <DataContext.Provider value={value}>{children}</DataContext.Provider>
);