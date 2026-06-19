'use client';

import Link from 'next/link';
import { authService } from '@/features/auth/authService';
import { useAppDispatch } from '@/store/hooks';
import { logout } from '@/features/auth/authSlice';
import { useState } from 'react';

export default function AuthenticatedNavigation() {
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const onLogoutClick = async () => {
    try {
      setLoading(true);
      await authService.logout();
      dispatch(logout());
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Link href="/vault">My Vault</Link>
      <Link href="/media">Media</Link>
      <Link href="/discover">Discover</Link>
      <Link href="/search">Search</Link>
      <Link href="/account">User</Link>
      <button disabled={loading} onClick={onLogoutClick}>
        Logout
      </button>
    </>
  );
}
