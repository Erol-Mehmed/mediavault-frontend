import Link from 'next/link';

interface AuthSwitchProps {
  context: string;
  text: string;
  linkText: string;
  href: string;
}

export default function AuthSwitch({
  context,
  text,
  linkText,
  href,
}: AuthSwitchProps) {
  return (
    <p className="auth-switch">
      {text}{' '}
      <Link href={href} className={context}>
        {linkText}
      </Link>
    </p>
  );
}
