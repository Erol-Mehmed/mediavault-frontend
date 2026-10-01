'use client';

import { useAppDispatch } from '@/store/hooks';
import React, { useState } from 'react';
import { authService } from '@/features/auth/authService';
import { setCredentials } from '@/features/auth/authSlice';
import { redirect } from 'next/navigation';
import InputField from '@/shared/components/ui/InputField';

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
        name="email"
        type="text"
        placeholder="name@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <InputField
        name="password"
        type="text"
        placeholder="••••••••"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button disabled={loading} type="submit">
        {loading ? 'Logging in...' : 'Login'}
      </button>
    </form>
  );
}
