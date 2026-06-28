'use client';

import { useAppDispatch } from './hooks';
import { useEffect } from 'react';
import { initializeAuth } from '@/features/auth/initAuth';
import { setupAuthInterceptor } from '@/shared/services/authInterceptor';
import { store } from './store';

export const AuthInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setupAuthInterceptor(dispatch, store.getState);
    void initializeAuth(dispatch);
  }, [dispatch]);

  return null;
};
