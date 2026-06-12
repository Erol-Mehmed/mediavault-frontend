'use client';

import { useAppDispatch } from '@/store/hooks';
import React, { useState } from 'react';
import { authService } from '@/features/auth/authService';
import { setCredentials } from '@/features/auth/authSlice';

export default function LoginForm() {
  const dispatch = useAppDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    const data = await authService.login({ email, password });
    dispatch(setCredentials(data));

    console.log('logged in');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Email"
        value={email}
        onChange={(e) => setPassword(e.target.value)}
        required
      />

      <button type="submit">Login</button>
    </form>
  );
}
