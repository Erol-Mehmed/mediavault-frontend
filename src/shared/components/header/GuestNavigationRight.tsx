import Link from 'next/link';

export default function GuestNavigationRight() {
  return (
    <div className="guest-nav-right">
      <Link href="/login" className="login">
        Log in
      </Link>
      <Link href="/signup" className="get-started">
        Get Started
      </Link>
    </div>
  );
}
