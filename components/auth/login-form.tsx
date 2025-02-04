'use client';

import { toast } from 'sonner';
import { useMutation } from '@tanstack/react-query';

import VForm from '@/components/common/VForm';
import { Button } from '@/components/ui/button';

import { login } from '@/lib/api/auth/auth-api';
import { loginSchema } from '@/lib/schemas';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };

  const { mutate, isPending } = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem('accessToken', data.data.accessToken);
    },
    onError: (error: unknown) => {
      if (error && typeof error === 'object' && 'response' in error) {
        const axiosError = error as {
          response?: { data?: { message?: string } };
        };
        console.error('Login error:', axiosError.response?.data?.message);
        toast.error(axiosError.response?.data?.message);
      }
    },
  });

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: Record<string, any>) => {
    const { email, password } = values;
    mutate({ email, password });
  };

  return (
    <VForm
      initialValues={initialValues}
      validationSchema={loginSchema}
      onSubmit={handleSubmit}
    >
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

      {/* {isError && (
        <div className="text-red-500 text-sm mb-4">
          {error?.response?.data?.message || 'An error occurred during login'}
        </div>
      )} */}

      <Button
        type="submit"
        className="w-full py-6 text-lg font-semibold"
        disabled={isPending}
      >
        {isPending ? 'Logging in...' : 'Login'}
      </Button>
    </VForm>
  );
};
export default LoginForm;
