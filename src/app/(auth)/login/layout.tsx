import { ReactNode } from 'react';
import { AuthHeader } from '@/shared/components/header';
import Link from 'next/link';

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <>
      <AuthHeader>
        Don't have an account? <Link href="/signup">Sign up</Link>
      </AuthHeader>

      {children}
    </>
  );
}
