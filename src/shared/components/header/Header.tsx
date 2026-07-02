'use client';

import { useAppSelector } from '@/store/hooks';
import Logo from '../Logo';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import GuestNavigation from './GuestNavigation';

export default function Header() {
  const { isInitialized, user } = useAppSelector((state) => state.auth);

  if (!isInitialized) {
    return null;
  }

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner col-10">
          <Logo />

          <nav className="nav">
            {user ? <AuthenticatedNavigation /> : <GuestNavigation />}
          </nav>

          {user ? (
            <span className="badge">
              {user.is_premium ? 'Premium' : 'Free'}
            </span>
          ) : null}
        </div>
      </div>
    </header>
  );
}
