'use client';

import { loginSchema } from '@/lib/schemas';
import VForm from '@/components/common/VForm';

const LoginForm = () => {
  const initialValues = {
    email: '',
    password: '',
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleSubmit = async (values: Record<string, any>) => {
    console.log(values);
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

      <button
        type="submit"
        className="w-full bg-green-500 text-white rounded-md py-2 px-4"
      >
        Submit
      </button>
    </VForm>
  );
};
export default LoginForm;
