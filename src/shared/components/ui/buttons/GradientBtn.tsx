import Link from 'next/link';

interface GradientBtnProps {
  linkText: string;
  href: string;
}

export default function GradientBtn({ linkText, href }: GradientBtnProps) {
  return (
    <Link href={href} className="gradient-btn">
      {linkText}
    </Link>
  );
}
