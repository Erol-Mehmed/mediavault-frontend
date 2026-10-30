import {
  AuthCard,
  AuthLayout,
  AuthSwitch,
  SignupForm,
  AuthDivider
} from '@/features/auth/components';
import React from 'react';

export default function SignUpPage() {
  return (
    <AuthLayout>
      <AuthCard
        featuresText="Build Your Entertainment Universe. Organise. Discover. Connect."
        title="Create Your Account"
        subtitle="Start building your entertainment library today."
      >
        <SignupForm />

        <AuthDivider />

        <AuthSwitch
          context="card-context"
          text="Already have an account?"
          linkText="LogIn"
          href="/login"
        />
      </AuthCard>
    </AuthLayout>
  );
}
