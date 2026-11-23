import {
  AuthLayout,
  AuthCard,
  ResetPasswordForm,
} from '@/features/auth/components';
import React, { Suspense } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/shared/components';

export default function ResetPasswordPage() {
  return (
    <AuthLayout>
      <AuthCard
        icon={
          <Image
            src="/images/auth/padlock.svg"
            alt="Padlock image."
            width={40}
            height={50}
          />
        }
        title="Reset Your Password?"
        subtitle="Enter your new password below."
        className="reset-password"
      >
        <Suspense fallback={<p>Loading...</p>}>
          <ResetPasswordForm />
        </Suspense>

        <div className="back-btn">
          <Link href="/login">
            <ArrowIcon />
            <span>Back to Sign In</span>
          </Link>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
