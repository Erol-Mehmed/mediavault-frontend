import {
  AuthCard,
  AuthLayout,
  AuthSwitch,
  SignupForm,
} from '@/features/auth/components';
import AuthDivider from '../../../features/auth/components/AuthDivider';
import React from 'react';

export default function LoginPage() {
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
