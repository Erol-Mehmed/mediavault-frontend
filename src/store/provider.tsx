'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import React from 'react';
import { AuthInitializer } from '@/store/authInitalizer';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  return (
    <Provider store={store}>
      <AuthInitializer />
      {children}
    </Provider>
  );
};
