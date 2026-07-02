'use client';

import { AuthGuard } from '@/shared/components/auth';
import React from 'react';

export default function ProtectedLayout({
  children,
}: Readonly<React.PropsWithChildren>) {
  return <AuthGuard>{children}</AuthGuard>;
}
