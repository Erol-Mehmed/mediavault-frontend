'use client';

import { useAppSelector } from '@/store/hooks';
import Logo from '../Logo';
import AuthenticatedNavigation from './AuthenticatedNavigation';
import GuestNavigationMid from './GuestNavigationMid';
import GuestNavigationRight from './GuestNavigationRight';

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
            {user ? <AuthenticatedNavigation /> : <GuestNavigationMid />}
          </nav>

          {user ? (
            <span className="badge">
              {user.is_premium ? 'Premium' : 'Free'}
            </span>
          ) : (
            <GuestNavigationRight />
          )}
        </div>
      </div>
    </header>
  );
}
