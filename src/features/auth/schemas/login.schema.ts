import { z } from 'zod';

const loginSchema = z.object({
  email: z.email('Invalid email address'),
  password: z
    .string()
    .min(6, 'Password must be at least 6 characters')
    .max(64, 'Password must be at most 64 characters'),
});

export type LoginFormValues = z.infer<typeof loginSchema>;
