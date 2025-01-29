'use client';
import { useFormik } from 'formik';
import { loginSchema } from '@/lib/schemas';
import InputField from '@/components/common/InputField';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: loginSchema,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  const { handleSubmit, handleChange, values, handleBlur, touched, errors } =
    formik;
  return (
    <form onSubmit={handleSubmit}>
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
        className="w-full bg-green-500 text-white rounded-md py-2 px-4"
      >
        Submit
      </button>
    </form>
  );
};
export default LoginForm;
