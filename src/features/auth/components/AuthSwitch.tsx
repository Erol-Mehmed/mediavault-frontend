import Link from 'next/link';
import GradientBtn from '@/shared/components/ui/buttons/GradientBtn';

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
    <div className={`auth-switch ${context ?? ''}`}>
      <p className="text">{text}</p>

      {context === 'card-context' ? (
        <Link href={href} className="link">
          {linkText}
        </Link>
      ) : (
        <GradientBtn linkText={linkText} href={href} />
      )}
    </div>
  );
}
