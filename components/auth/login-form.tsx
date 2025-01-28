'use client';
import { useFormik } from 'formik';
import { Input } from '@/components/ui/input';
import { loginSchema } from '@/lib/schemas';

const LoginForm = () => {
  const { handleSubmit, handleChange, values, handleBlur, touched, errors } =
    useFormik({
      initialValues: {
        email: '',
        password: '',
      },

      validationSchema: loginSchema,

      onSubmit: async (values) => {
        console.log(values);
      },
    });
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4 space-y-1">
        <label htmlFor="email">Email</label>
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          name="email"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.email}
          className="block border border-gray-300 rounded-md w-full p-2"
        />
        {touched.email && errors.email ? (
          <div className="text-red-500 text-sm">{errors.email}</div>
        ) : null}
      </div>

      <div className="my-4 space-y-1">
        <label htmlFor="password">Password</label>
        <Input
          id="password"
          placeholder="Enter your password"
          type="password"
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.password}
          className="block border border-gray-300 rounded-md w-full p-2"
        />
        {touched.password && errors.password ? (
          <div className="text-red-500 text-sm">{errors.password}</div>
        ) : null}
      </div>

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
