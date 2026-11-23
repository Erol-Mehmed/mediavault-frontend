'use client';

import { authService } from '@/features/auth/authService';
import AuthBtn from './AuthBtn';
import { InputField } from '@/shared/components';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import React, { useState } from 'react';
import {
  resetPasswordSchema,
  ResetPasswordFormValues,
} from '@/features/auth/schemas/resetPassword.schema';
import { EyeIcon } from '@/shared/components/ui/icons';

export default function ForgotPasswordForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ResetPasswordFormValues>({
    resolver: zodResolver(resetPasswordSchema),
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
  });

  const [apiResponseMessage, setApiResponseMessage] = useState('');
  const [serverError, setServerError] = useState('');

  const onSubmit = async (values: ResetPasswordFormValues) => {
    setServerError('');
    setApiResponseMessage('');

    try {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { confirmPassword, ...resetPasswordData } = values;
      const data = await authService.resetPassword(resetPasswordData);

      setApiResponseMessage(data.message);
    } catch {
      setServerError('Something went wrong.');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="auth-form">
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

      {apiResponseMessage && (
        <div className="auth-form-message">
          <p>{apiResponseMessage}</p>
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
