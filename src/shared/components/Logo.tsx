import Link from 'next/link';

export default function Logo() {
  return (
    <Link href="/" className="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        width="28"
        height="28"
        className="logo__icon"
        fill="none"
      >
        {/* circle border */}
        <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="1.8" />

        {/* play icon */}
        <path d="M10 8l6 4-6 4V8z" fill="white" />
      </svg>

      <span className="logo__text">MediaVault</span>
    </Link>
  );
}
