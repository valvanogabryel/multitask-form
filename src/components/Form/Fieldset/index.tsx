import { Input } from '@/components/Input';
import { formatPhone } from '../utils/formatPhone';
import { FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form';
import { IFormData } from '@/interfaces/IFormData';

interface FieldsetProps {
  register: UseFormRegister<IFormData>;
  errors: FieldErrors<IFormData>;
  setValue: UseFormSetValue<IFormData>;
}

export function Fieldset({
  register,
  errors,
  setValue,
}: Readonly<FieldsetProps>) {
  return (
    <fieldset className="flex flex-col space-y-4 mt-4 md:mt-6 lg:mt-8">
      <Input
        label="Nome"
        register={register}
        name="name"
        placeholder="John Doe"
        error={errors ?? ''}
      />
      <Input
        label="Endereço de email"
        register={register}
        name="email"
        placeholder="johndoe@lorem.com"
        error={errors ?? ''}
      />
      <Input
        label="Número de telefone"
        register={register}
        placeholder="(12) 34568-1011"
        {...register('phone', {
          onChange: (e) => formatPhone(e, setValue),
        })}
        error={errors ?? ''}
      />
    </fieldset>
  );
}
