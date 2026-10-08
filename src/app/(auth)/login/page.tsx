import {
  AuthLayout,
  AuthCard,
  AuthSwitch,
  LoginForm,
} from '@/features/auth/components';
import AuthDivider from '../../../features/auth/components/AuthDivider';
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
