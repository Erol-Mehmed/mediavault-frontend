import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <Image
        src="/images/logo.svg"
        alt="MediaVault logo"
        width={51}
        height={43.42}
      />

      <span className="logo__text">MediaVault</span>
    </Link>
  );
}
