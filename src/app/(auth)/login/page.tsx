import {
  AuthLayout,
  AuthCard,
  AuthSwitch,
  LoginForm,
} from '@/features/auth/components';

export default function LoginPage() {
  return (
    <AuthLayout>
      <AuthCard
        title="Welcome Back"
        subtitle="Sign in to continue your entertainment journey."
      >
        <LoginForm />

        <AuthSwitch
          text="Don't have an account?"
          linkText="Create Account"
          href="/signup"
        />
      </AuthCard>
    </AuthLayout>
  );
}
