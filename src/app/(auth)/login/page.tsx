import {
  AuthLayout,
  AuthCard,
  AuthSwitch,
  LoginForm,
} from '@/features/auth/components';
import AuthDivider from '../../../features/auth/components/AuthDivider';
import AuthFeaturesChecklist from '../../../features/auth/components/AuthFeaturesChecklist';
import React from 'react';

export default function LoginPage() {
  const features = ['Your collection', 'Your favorites', 'Your watchlist'];

  return (
    <AuthLayout>
      <AuthCard
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

        <AuthFeaturesChecklist features={features} />
      </AuthCard>
    </AuthLayout>
  );
}
