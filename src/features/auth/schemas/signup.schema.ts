import { z } from 'zod';

export const signUpSchema = z
  .object({
    username: z
      .string()
      .min(3, 'Username must be at least 3 characters')
      .max(30, 'Username must be at most 30 characters'),
    email: z.email('Invalid email address'),
    password: z
      .string()
      .min(6, 'Password must be at least 6 characters')
      .max(64, 'Password must be at most 64 characters'),
    confirmPassword: z.string(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  });

export type SignUpFormValues = z.infer<typeof signUpSchema>;
