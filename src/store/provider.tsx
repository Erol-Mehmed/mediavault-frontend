'use client';

import { Provider } from 'react-redux';
import { store } from '@/store/store';
import React, { useEffect } from 'react';
import { initializeAuth } from '@/features/auth/initAuth';
import { useAppDispatch } from '@/store/hooks';

interface StoreProviderProps {
  children: React.ReactNode;
}

export const StoreProvider = ({ children }: StoreProviderProps) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    initializeAuth(dispatch).then((r) => r);
  }, []);

  return <Provider store={store}>{children}</Provider>;
};
