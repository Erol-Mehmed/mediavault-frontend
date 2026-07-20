import { ReactNode } from 'react';
import { AuthHeader } from '@/shared/components/header';
import Link from 'next/link';

interface SignupLayoutProps {
  children: ReactNode;
}

export default function SignupLayout({ children }: SignupLayoutProps) {
  return (
    <>
      <AuthHeader>
        <Link href="/login">Login</Link>
      </AuthHeader>

      {children}
    </>
  );
}
