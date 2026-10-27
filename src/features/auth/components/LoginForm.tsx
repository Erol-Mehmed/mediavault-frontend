'use client';

import { useAppDispatch } from '@/store/hooks';
import { authService } from '@/features/auth/authService';
import { setCredentials } from '@/features/auth/authSlice';
import { redirect } from 'next/navigation';
import AuthBtn from './AuthBtn';
import { InputField } from '@/shared/components';
import Link from 'next/link';
import Image from 'next/image';
import { EyeIcon } from '@/shared/components/ui/icons';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  loginSchema,
  LoginFormValues,
} from '@/features/auth/schemas/login.schema';
import { useState } from 'react';

export default function LoginForm() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<LoginFormValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: '',
      password: '',
    },
  });

  const [serverError, setServerError] = useState('');

  const onSubmit = async (values: LoginFormValues) => {
    setServerError('');

    try {
      const data = await authService.login(values);
      dispatch(setCredentials(data));
    } catch {
      setServerError('Invalid email or password.');
    }

    redirect('/');
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
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
        type="text"
        placeholder="name@email.com"
        className="input-field-email-login input-field-mb"
        {...register('email')}
        error={errors.email?.message}
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
        type="password"
        placeholder="••••••••"
        className="input-field-password-login"
        labelAction={
          <Link href="/forgot-password" className="link">
            Forgot password?
          </Link>
        }
        {...register('password')}
        error={errors.password?.message}
      />

      {serverError && (
        <div className="auth-form-error">
          <p>{serverError}</p>
        </div>
      )}

      <AuthBtn
        text="Sign In"
        loadingText="Signing in..."
        loading={isSubmitting}
        className={serverError ? 'server-error' : ''}
      />
    </form>
  );
}
