import Link from 'next/link';

export default function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Link href="/" className="header__logo">
            MediaVault
          </Link>

          <nav className="header__nav">
            <Link href="/">Home</Link>
            <Link href="/media">Media</Link>
            <Link href="/login">Login</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
