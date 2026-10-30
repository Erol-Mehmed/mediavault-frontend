import { ReactNode } from 'react';
import { AuthHeader } from '@/shared/components';

interface ForgotPasswordLayoutProps {
  children: ReactNode;
}

export default function ForgotPasswordLayout({
  children,
}: ForgotPasswordLayoutProps) {
  return (
    <>
      <AuthHeader />

      {children}
    </>
  );
}
