import { ReactNode } from 'react';
import { AuthHeader } from '@/shared/components/header';
import { AuthSwitch } from '@/features/auth/components';

interface SignupLayoutProps {
  children: ReactNode;
}

export default function SignupLayout({ children }: SignupLayoutProps) {
  return (
    <>
      <AuthHeader>
        <AuthSwitch
          context="auth-switch__header"
          text="Already have an account?"
          linkText="Login"
          href="/login"
        />
      </AuthHeader>

      {children}
    </>
  );
}
