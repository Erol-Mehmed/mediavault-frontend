import Link from 'next/link';

interface AuthSwitchProps {
  text: string;
  linkText: string;
  href: string;
}

export default function AuthSwitch({ text, linkText, href }: AuthSwitchProps) {
  return (
    <p>
      {text} <Link href={href}>{linkText}</Link>
    </p>
  );
}
