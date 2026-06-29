'use client';

import { Provider } from 'react-redux';
import { store } from './store';
import React from 'react';
import AuthInitializer from './authInitalizer';

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
