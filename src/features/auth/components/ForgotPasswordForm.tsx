'use client';

import { authService } from '@/features/auth/authService';
import AuthBtn from './AuthBtn';
import { InputField } from '@/shared/components';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useState } from 'react';
import {
  forgotPasswordSchema,
  ForgotPasswordFormValues,
} from '@/features/auth/schemas/forgotPassword.schema';

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ForgotPasswordFormValues>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
    },
  });

  const [serverError, setServerError] = useState('');

  const onSubmit = async (values: ForgotPasswordFormValues) => {
    setServerError('');


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

      {serverError && (
        <div className="auth-form-error">
          <p>{serverError}</p>
        </div>
      )}

      <AuthBtn
        text="Send reset link"
        loadingText="Sending link..."
        loading={isSubmitting}
        className={serverError ? 'server-error' : ''}
      />
    </form>
  );
}
