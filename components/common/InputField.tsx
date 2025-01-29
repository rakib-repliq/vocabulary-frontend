'use client';
import { InputHTMLAttributes, ReactNode, useState } from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Eye, EyeOff } from 'lucide-react';

interface InputFieldProps {
  htmlFor: string;
  label: string;
  children: ReactNode;
  touched?: boolean;
  errors?: string;
}

const InputField = ({
  htmlFor,
  label,
  children,
  touched,
  errors,
}: InputFieldProps) => (
  <div className="space-y-1 my-4">
    <Label htmlFor={htmlFor} className="text-base">
      {label}
    </Label>
    {children}
    {touched && errors && <div className="text-red-500 text-sm">{errors}</div>}
  </div>
);

const TextInput = (props: InputHTMLAttributes<HTMLInputElement>) => (
  <Input {...props} className="py-[22px]" />
);

const PasswordInput = (props: InputHTMLAttributes<HTMLInputElement>) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  return (
    <div className="relative">
      <Input
        {...props}
        type={showPassword ? 'text' : 'password'}
        className="py-[22px]"
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
  );
};

InputField.TextInput = TextInput;
InputField.PasswordInput = PasswordInput;

export default InputField;
