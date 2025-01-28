import { object, string } from 'yup';

export const loginSchema = object({
  email: string().email('Invalid email address!').required('Email is required'),

  password: string().required('Password is required'),
});

export const registerSchema = object({
  name: string()
    .min(3, 'Must be at least 2 characters')
    .required('Name is required'),
  email: string().email('Invalid email address!').required('Email is required'),
  password: string()
    .min(6, 'Must be at least 6 characters')
    .required('Password is required'),
});
