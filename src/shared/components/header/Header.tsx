'use client';

import { useAppSelector } from '@/store/hooks';
import Logo from '../Logo';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import GuestNavigation from './GuestNavigation';

export default function Header() {
  const user = useAppSelector((state) => state.auth.user);

  console.log('user>>>', user);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />

          <nav className="header__nav">
            {user ? <AuthenticatedNavigation /> : <GuestNavigation />}
          </nav>

          {user ? (
            <span className="header-badge">
              {user.is_premium ? 'Premium' : 'Free'}
            </span>
          ) : null}
        </div>
      </div>
    </header>
  );
}
