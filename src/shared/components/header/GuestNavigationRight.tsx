import Link from 'next/link';

export default function GuestNavigationRight() {
  return (
    <div className="guest-navigation-right">
      <Link href="/login">Login</Link>
      <Link href="/signup">Get Started</Link>
    </div>
  );
}
