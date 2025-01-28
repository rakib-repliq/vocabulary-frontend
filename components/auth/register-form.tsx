'use client';

import { useFormik } from 'formik';
import { Input } from '@/components/ui/input';
import { registerSchema } from '@/lib/schemas';

const RegisterForm = () => {
  const { handleSubmit, handleChange, values, handleBlur, touched, errors } =
    useFormik({
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
  return (
    <form onSubmit={handleSubmit}>
      <div className="my-4">
        <label htmlFor="name">Name</label>
        <Input
          id="name"
          placeholder="Enter your name"
          type="text"
          name="name"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.name}
          className="block border border-gray-300 rounded-md w-full p-2"
        />
        {touched.name && errors.name ? (
          <div className="text-red-500 text-sm">{errors.name}</div>
        ) : null}
      </div>

      <div className="my-4">
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

      <div className="my-4">
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
        className="bg-green-500 text-white py-2 px-4 w-full rounded-md"
      >
        Submit
      </button>
    </form>
  );
};
export default RegisterForm;
