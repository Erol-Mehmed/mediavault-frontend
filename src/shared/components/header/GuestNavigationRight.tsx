import Link from 'next/link';
import { GradientBtn } from '@/shared/components';

export default function GuestNavigationRight() {
  return (
    <div className="guest-nav-right">
      <Link href="/login" className="login">
        Log in
      </Link>

      <GradientBtn href="/signup" linkText="Get Started" />
    </div>
  );
}
