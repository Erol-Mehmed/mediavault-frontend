import Link from 'next/link';

export default function GuestNavigationMid() {
  return (
    <>
      <Link href="/media">Media</Link>
      <Link href="/discover">Discover</Link>
      <Link href="/search">Search</Link>
    </>
  );
}
