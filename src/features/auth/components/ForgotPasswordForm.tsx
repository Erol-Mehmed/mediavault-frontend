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
import { useState } from 'react';

export default function ForgotPasswordForm() {
  const [serverError, setServerError] = useState('');

  // const onSubmit = async (values: FormValues) => {
  // };

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
