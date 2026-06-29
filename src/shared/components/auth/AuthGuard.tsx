'use client';

import { ReactNode, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAppSelector } from '@/store/hooks';

interface AuthGuardProps {
  children: ReactNode;
}

export default function AuthGuard({ children }: AuthGuardProps) {
  const router = useRouter();
  const user = useAppSelector((state) => state.auth.user);
  const isInitialized = useAppSelector((state) => state.auth.isInitialized);

  useEffect(() => {
    if (isInitialized && !user) {
      void router.replace('/login');
    }
  }, [router, user, isInitialized]);

  if (!isInitialized || !user) {
    return null;
  }

  return children;
}
