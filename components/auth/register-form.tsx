'use client';

import { useFormik } from 'formik';
import { registerSchema } from '@/lib/schemas';
import InputField from '../common/InputField';

const RegisterForm = () => {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
    },

    validationSchema: registerSchema,

    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, handleChange, values, handleBlur, touched, errors } =
    formik;

  return (
    <form onSubmit={handleSubmit}>
      <InputField
        htmlFor="name"
        label="Name"
        touched={touched.name}
        errors={errors.name}
      >
        <InputField.TextInput
          id="name"
          placeholder="Enter your name"
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
        />
      </InputField>

      <InputField
        htmlFor="email"
        label="Email"
        touched={touched.email}
        errors={errors.email}
      >
        <InputField.TextInput
          id="email"
          placeholder="Enter your email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
        />
      </InputField>

      <InputField
        htmlFor="password"
        label="Password"
        touched={touched.password}
        errors={errors.password}
      >
        <InputField.PasswordInput
          id="password"
          placeholder="Enter your password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
        />
      </InputField>

      <button
        type="submit"
        className="bg-green-500 text-white py-2 px-4 w-full rounded-md"
      >
        Submit
      </button>
    </form>
  );
};
export default RegisterForm;
