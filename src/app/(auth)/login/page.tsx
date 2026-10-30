import {
  AuthLayout,
  AuthCard,
  AuthSwitch,
  LoginForm,
  AuthDivider,
} from '@/features/auth/components';
import React from 'react';

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard
        featuresText="Your Entertainment Universe, Organised and Social. Watch. Play. Connect."
        title="Welcome Back"
        subtitle="Sign in to continue your entertainment journey."
      >
        <LoginForm />

        <AuthDivider />

        <AuthSwitch
          context="card-context"
          text="Don't have an account?"
          linkText="Create Account"
          href="/signup"
        />
      </AuthCard>
    </AuthLayout>
  );
}
