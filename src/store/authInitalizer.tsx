'use client';

import { useAppDispatch } from './hooks';
import { useEffect } from 'react';
import { initializeAuth } from '@/features/auth/initAuth';
import { setupAuthInterceptor } from '@/shared/services/authInterceptor';
import { store } from './store';

/**
 * Initializes authentification on application startup.
 *
 * Registers Axios interceptors and restores the user's session
 * from the backend using the refresh token stored in an httpOnly cookie.
 *
 * This component should be mounted once near the root of the application.
 */
export default function AuthInitializer() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    setupAuthInterceptor(dispatch, store.getState);
    void initializeAuth(dispatch);
  }, [dispatch]);

  return null;
}
