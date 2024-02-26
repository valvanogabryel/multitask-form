'use client';

import { useForm } from 'react-hook-form';
import { useRouter, useSearchParams } from 'next/navigation';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { formSchema } from './schema';
import { useAppState } from '@/context/state';
import { Fieldset } from './Fieldset';
import { StepNavigation } from '../StepNavigation';
import AppState, { SetAppState } from '@/interfaces/AppState';

interface FormDataSchema extends z.infer<typeof formSchema> {}

export function Form() {
  const [state, setState] = useAppState() as [AppState, SetAppState];
  const searchParams = useSearchParams();
  const plan = searchParams.get('plan');
  const option = searchParams.get('option');

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<FormDataSchema>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: state.name ?? '',
      email: state.email ?? '',
      phone: state.phone ?? '',
    },
  });

  const router = useRouter();

  const saveData = (data: FormDataSchema) => {
    setState({ ...state, ...data });
    router.push(
      `/plans?plan=${plan ?? 'arcade'}&option=${option ?? 'montlhy'}`
    );
  };

  return (
    <form onSubmit={handleSubmit(saveData)}>
      <Fieldset register={register} errors={errors} setValue={setValue} />

      <StepNavigation className="justify-end" toPath="" step={1} />
    </form>
  );
}
