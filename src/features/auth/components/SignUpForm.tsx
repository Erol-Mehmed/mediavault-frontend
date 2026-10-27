'use client';

import React, { useState } from 'react';
import { authService } from '@/features/auth/authService';
import { redirect } from 'next/navigation';
import AuthBtn from './AuthBtn';
import { InputField } from '@/shared/components';
import { EyeIcon } from '@/shared/components/ui/icons';
import { useForm } from 'react-hook-form';
import { signUpSchema, SignUpFormValues } from '../schemas/signup.schema';
import { zodResolver } from '@hookform/resolvers/zod';

export default function SignUpForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignUpFormValues>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
  });

  const [serverError, setServerError] = useState('');

  const onSubmit = async (values: SignUpFormValues) => {
    setServerError('');

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...submitData } = values;

      await authService.signUp(submitData);
    } catch {
      setServerError('Sign up failed.');
    }

    redirect('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
      <InputField
        label="User Name"
        type="text"
        placeholder="John Doe"
        className="input-field-mb"
        {...register('username')}
        error={errors.username?.message}
      />

      <InputField
        label="Email Address"
        type="text"
        placeholder="name@email.com"
        className="input-field-mb"
        {...register('email')}
        error={errors.email?.message}
      />

      <InputField
        label="Password"
        eyeIcon={<EyeIcon />}
        type="password"
        placeholder="••••••••"
        className="input-field-mb"
        {...register('password')}
        error={errors.password?.message}
      />

      <InputField
        label="Confirm Password"
        eyeIcon={<EyeIcon />}
        type="password"
        placeholder="••••••••"
        {...register('confirmPassword')}
        error={errors.confirmPassword?.message}
      />

      {serverError && (
        <div className="auth-form-error">
          <p>{serverError}</p>
        </div>
      )}

      <AuthBtn
        text="Create Account"
        loadingText="Creating account..."
        loading={isSubmitting}
        className={serverError ? 'server-error' : ''}
      />
    </form>
  );
}
