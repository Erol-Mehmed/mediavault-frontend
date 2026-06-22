'use client';

import { useAppDispatch } from '@/store/hooks';
import { useEffect } from 'react';
import { initializeAuth } from '@/features/auth/initAuth';

export const AuthInitializer = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    void initializeAuth(dispatch);
  }, [dispatch]);

  return null;
};
