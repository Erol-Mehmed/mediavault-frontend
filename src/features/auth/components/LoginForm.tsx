'use client';

import { useAppDispatch } from '@/store/hooks';
import React, { useState } from 'react';
import { authService } from '@/features/auth/authService';
import { setCredentials } from '@/features/auth/authSlice';
import { redirect } from 'next/navigation';
import AuthBtn from './AuthBtn';
import { InputField } from '@/shared/components';
import Link from 'next/link';
import Image from 'next/image';
import { EyeIcon } from '@/shared/components/ui/icons';

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await authService.login({ email, password });
      dispatch(setCredentials(data));
    } catch (error) {
      console.log(`Login failed with error: ${error}`);
    } finally {
      setLoading(false);
      redirect('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="login-form">
      <InputField
        label="Email Address"
        icon={
          <Image
            src="/images/auth/email.svg"
            alt="Email image."
            width={20}
            height={16}
          />
        }
        name="email"
        type="text"
        placeholder="name@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field-email"
      />

      <InputField
        label="Password"
        icon={
          <Image
            src="/images/auth/padlock.svg"
            alt="Padlock image."
            width={16}
            height={21}
          />
        }
        eyeIcon={<EyeIcon />}
        name="password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field-password-login"
        labelAction={
          <Link href="/forgot-password" className="link">
            Forgot password?
          </Link>
        }
      />

      <AuthBtn text="Sign In" loadingText="Signing in..." loading={loading} />
    </form>
  );
}
