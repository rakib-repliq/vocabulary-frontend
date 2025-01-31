'use client';

import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';

import VForm from '@/components/common/VForm';
import { Button } from '@/components/ui/button';

import { register } from '@/lib/api/auth/auth-api';
import { registerSchema } from '@/lib/schemas';

const RegisterForm = () => {
  const initialValues = {
    name: '',
    email: '',
    password: '',
  };

  const { mutate, isPending } = useMutation({
    mutationFn: register,
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (error: unknown) => {
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as {
          response?: { data?: { errorMessage?: string } };
        };
        toast.error(axiosError.response?.data?.errorMessage);
      }
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: Record<string, any>) => {
    const { name, email, password } = values;
    mutate({ name, email, password });
  };

  return (
    <VForm
      initialValues={initialValues}
      validationSchema={registerSchema}
      onSubmit={handleSubmit}
    >
      <VForm.VTextInput
        label="Name"
        name="name"
        placeholder="Full Name"
        type="text"
      />

      <VForm.VTextInput
        label="Email"
        name="email"
        type="email"
        placeholder="Enter your email"
      />

      <VForm.VPasswordInput
        label="Password"
        name="password"
        placeholder="Enter your password"
      />

      <Button type="submit" className="w-full" disabled={isPending}>
        {isPending ? 'Signing up...' : 'Sign up'}
      </Button>
    </VForm>
  );
};
export default RegisterForm;
