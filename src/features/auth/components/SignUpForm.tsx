'use client';

import { useAppDispatch } from '@/store/hooks';
import React, { useState } from 'react';
import { authService } from '@/features/auth/authService';
import { setCredentials } from '@/features/auth/authSlice';
import { redirect } from 'next/navigation';
import AuthBtn from './AuthBtn';
import { InputField } from '@/shared/components';
import { EyeIcon } from '@/shared/components/ui/icons';

export default function SignUpForm() {
  const dispatch = useAppDispatch();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      const data = await authService.login({ email, password });
      dispatch(setCredentials(data));
    } catch (error) {
      console.log(`Sign up failed with error: ${error}`);
    } finally {
      setLoading(false);
      redirect('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="auth-form">
      <InputField
        label="User Name"
        name="username"
        type="text"
        placeholder="John Doe"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        className="input-field-mb"
      />

      <InputField
        label="Email Address"
        name="email"
        type="text"
        placeholder="name@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="input-field-mb"
      />

      <InputField
        label="Password"
        eyeIcon={<EyeIcon />}
        name="password"
        type="password"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="input-field-mb"
      />

      <InputField
        label="Confirm Password"
        eyeIcon={<EyeIcon />}
        name="confirm password"
        type="password"
        placeholder="••••••••"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />

      <AuthBtn
        text="Create Account"
        loadingText="Creating account..."
        loading={loading}
      />
    </form>
  );
}
