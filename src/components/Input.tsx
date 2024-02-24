import { IFormData } from '@/interfaces/IFormData';
import { ComponentProps } from 'react';
import { FieldErrors, UseFormRegister } from 'react-hook-form';

interface InputProps extends ComponentProps<'input'> {
  label: string;
  error: FieldErrors<IFormData>;
  register: UseFormRegister<IFormData>;
}

export function Input({
  label,
  error,
  register,
  ...props
}: Readonly<InputProps>) {
  return (
    <div className="flex flex-col gap-0.5 md:gap-1">
      <label
        htmlFor={props.name}
        className="text-sm text-marine-blue select-none"
      >
        {label}
      </label>
      <input
        className="border px-4 py-2 border-light-gray rounded-lg transition-all outline-none hover:border-cool-gray focus:border-cool-gray focus:shadow placeholder:font-medium md:py-2.5"
        type={props.type}
        id={props.name}
        placeholder={props.placeholder}
        {...register(props.name as 'name' | 'email')}
        {...props}
      />
      {error && (
        <span className="text-xs text-strawberry-red animate-accordion-down ">
          {error[props.name as 'name' | 'email' | 'phone']?.message}
        </span>
      )}
    </div>
  );
}
