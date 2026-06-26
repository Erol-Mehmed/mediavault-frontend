'use client';

import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { initializeAuth } from '@/features/auth/initAuth';
import { setupAuthInterceptor } from '@/shared/services/authInterceptor';

export const AuthInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setupAuthInterceptor(dispatch);
    void initializeAuth(dispatch);
  }, [dispatch]);

  return null;
};
