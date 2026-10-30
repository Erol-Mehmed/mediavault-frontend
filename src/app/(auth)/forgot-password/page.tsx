import {
  AuthLayout,
  AuthCard,
  ForgotPasswordForm
} from '@/features/auth/components';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowIcon } from '@/shared/components';

export default function ForgotPasswordPage() {
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
        title="Forgot your password?"
        subtitle="No worries. Enter the email address associated with your account and we'll send you a link to reset your password."
        className="forgot-password"
      >
        {/*<ForgotPasswordForm />*/}

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
