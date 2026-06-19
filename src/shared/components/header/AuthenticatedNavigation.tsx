import Link from 'next/link';

export default function AuthenticatedNavigation() {
  return (
    <>
      <Link href="/media">My Vault</Link>
      <Link href="/media">Media</Link>
      <Link href="/discover">Discover</Link>
      <Link href="/search">Search</Link>
      <Link href="/account">User</Link>
      <Link href="/logout">Logout</Link>
    </>
  );
}
