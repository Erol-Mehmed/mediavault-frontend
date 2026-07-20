import { ReactNode } from 'react';
import { Logo } from '@/shared/components';

interface AuthHeaderProps {
  children: ReactNode;
}

export default function AuthHeader({ children }: AuthHeaderProps) {
  return (
    <header className="auth-header">
      <Logo />

      <div className="auth-header__action">{children}</div>
    </header>
  );
}
