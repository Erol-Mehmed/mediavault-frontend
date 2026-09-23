import { ReactNode } from 'react';
import { AuthHeader } from '@/shared/components/header';
import { AuthSwitch } from '@/features/auth/components';

interface LoginLayoutProps {
  children: ReactNode;
}

export default function LoginLayout({ children }: LoginLayoutProps) {
  return (
    <>
      <AuthHeader>
        <AuthSwitch
          context="header-context"
          text="Don't have an account?"
          linkText="Sign Up"
          href="/signup"
        />
      </AuthHeader>

      {children}
    </>
  );
}
