import * as z from 'zod';

export const RegisterSchema = z.object({
  name: z
    .string({
      message: 'Invalid name',
    })
    .min(1, {
      message: 'Name is required',
    }),
  username: z
    .string({
      message: 'Invalid username',
    })
    .min(1, {
      message: 'Username is required',
    })
    .regex(
      /^[a-z0-9_]{1,15}$/,
      'Username must contain only letters, numbers and underscores'
    ),
  email: z
    .string({
      message: 'Invalid email',
    })
    .email({
      message: 'Invalid email',
    }),
  password: z
    .string({
      message: 'Invalid password',
    })
    .min(8, {
      message: 'Minimum 8 characters required',
    })
    .regex(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
      'Password must contain at least 1 uppercase letter, 1 lowercase letter, 1 number and 1 special character'
    ),
  terms: z
    .boolean({
      message: 'You must agree to the terms and conditions',
    })
    .refine((val) => val === true, {
      message: 'You must agree to the terms and conditions',
    }),
});

export const LoginSchema = z.object({
  emailOrUsername: z
    .string({
      required_error: 'Email or username is required',
    })
    .refine(
      (val) =>
        /^[a-z0-9_]{1,15}$/.test(val) ||
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(val),
      {
        message: 'Must be a valid username or email address',
      }
    ),
  password: z
    .string({
      required_error: 'Password is required',
      message: 'Invalid password',
    })
    .min(1, {
      message: 'Password is required',
    }),
  remember: z.boolean({
    message: 'Invalid remember',
  }),
});
