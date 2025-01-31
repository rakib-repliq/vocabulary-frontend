'use client';

import { registerSchema } from '@/lib/schemas';
import VForm from '@/components/common/VForm';

const RegisterForm = () => {
  const initialValues = {
    name: '',
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

      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 w-full rounded-md"
      >
        Submit
      </button>
    </VForm>
  );
};
export default RegisterForm;
