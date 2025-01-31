'use client';

/* eslint-disable @typescript-eslint/no-explicit-any */
import { useFormik, FormikHelpers, FormikTouched } from 'formik';
import {
  ChangeEvent,
  createContext,
  FocusEvent,
  PropsWithChildren,
  useContext,
  useState,
} from 'react';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';

interface VFormContextProps {
  handleSubmit: () => void;
  handleChange: (e: ChangeEvent<any>) => void;
  values: { [key: string]: any };
  handleBlur: (e: FocusEvent<any>) => void;
  touched: FormikTouched<Record<string, any>>;
  errors: Record<string, any>;
}

const VFormContext = createContext<VFormContextProps | undefined>(undefined);

interface VFormProps extends PropsWithChildren {
  initialValues: Record<string, any>;
  validationSchema: any;
  onSubmit: (
    values: Record<string, any>,
    formikHelpers: FormikHelpers<Record<string, any>>
  ) => void | Promise<any>;
}

const VForm = ({
  children,
  initialValues,
  validationSchema,
  onSubmit,
}: VFormProps) => {
  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit,
  });

  const { handleSubmit, handleChange, values, handleBlur, touched, errors } =
    formik;

  return (
    <VFormContext.Provider
      value={{
        handleSubmit,
        handleChange,
        handleBlur,
        values,
        touched,
        errors,
      }}
    >
      <form onSubmit={handleSubmit}>{children}</form>
    </VFormContext.Provider>
  );
};

interface VTextInputProps {
  label: string;
  name: string;
  type: string;
  placeholder?: string;
}

const VTextInput = ({ label, name, type, placeholder }: VTextInputProps) => {
  const context = useContext(VFormContext);

  if (!context) {
    throw new Error('VTextInput must be used within a VForm');
  }

  const { handleChange, handleBlur, values, touched, errors } = context;
  const hasError = touched[name] && errors[name];

  return (
    <div className="space-y-1 my-4">
      <label className="text-lg" htmlFor={name}>
        {label}
      </label>
      <Input
        id={name}
        placeholder={placeholder}
        type={type}
        name={name}
        onChange={handleChange}
        onBlur={handleBlur}
        value={values[name]}
        className={`py-[22px] ${hasError ? 'border-red-500' : ''}`}
      />
      {hasError && <div className="text-red-500 text-sm">{errors[name]}</div>}
    </div>
  );
};

interface VTPasswordInputProps {
  label: string;
  name: string;
  placeholder?: string;
}

const VPasswordInput = ({ label, name, placeholder }: VTPasswordInputProps) => {
  const context = useContext(VFormContext);
  const [showPassword, setShowPassword] = useState(false);
  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  if (!context) {
    throw new Error('VTextInput must be used within a VForm');
  }

  const { handleChange, handleBlur, values, touched, errors } = context;
  const hasError = touched[name] && errors[name];

  return (
    <div className="space-y-1 my-4 ">
      <label className="text-lg" htmlFor={name}>
        {label}
      </label>
      <div className="relative">
        <Input
          id={name}
          placeholder={placeholder}
          type={showPassword ? 'text' : 'password'}
          name="password"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          className={`py-[22px]  ${hasError ? 'border-red-500' : ''}`}
        />
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute inset-y-0 right-0 flex items-center pr-[14px]"
        >
          {showPassword ? (
            <EyeOff className="h-5 w-5 text-gray-500" />
          ) : (
            <Eye className="h-5 w-5 text-gray-500" />
          )}
        </button>
      </div>
      {hasError && <div className="text-red-500 text-sm">{errors[name]}</div>}
    </div>
  );
};

VForm.VPasswordInput = VPasswordInput;
VForm.VTextInput = VTextInput;
export default VForm;
