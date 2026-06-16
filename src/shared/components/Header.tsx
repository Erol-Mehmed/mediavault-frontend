import Link from 'next/link';
import { useAppSelector } from '@/store/hooks';
import Logo from './Logo';

export default function Header() {
  const user = useAppSelector((state) => state.auth.user);

  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Logo />

          <nav className="header__nav">
            {user ? (
              <>
                <Link href="/media">My Vault</Link>
                <Link href="/media">Media</Link>
                <Link href="/discover">Discover</Link>
                <Link href="/search">Search</Link>
                <Link href="/account">User</Link>
              </>
            ) : (
              <>
                <Link href="/login">Login</Link>
                <Link href="/signup">Sign Up</Link>
              </>
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
