import Link from 'next/link';

export default function GuestNavigation() {
  return (
    <>
      <Link href="/media">Media</Link>
      <Link href="/discover">Discover</Link>
      <Link href="/search">Search</Link>
      <Link href="/login">Login</Link>
      <Link href="/signup">Sign Up</Link>
    </>
  );
}
