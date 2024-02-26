'use client';

import { cn } from '@/lib/utils';
import { toast } from 'sonner';
import { ComponentProps } from 'react';
import { Button } from './ui/button';
import { useWindowSize } from '@/hooks/useWindowSize';
import { useRouter } from 'next/navigation';

interface MobileStepNavigationProps extends ComponentProps<'section'> {
  onSubmit?: () => void;
  toPath: string;
  step: number;
  confirm?: boolean;
}

export function StepNavigation({
  onSubmit,
  toPath,
  step,
  confirm = false,
  ...props
}: Readonly<MobileStepNavigationProps>) {
  const router = useRouter();
  const windowWidth = useWindowSize().width;
  if (!windowWidth) return;

  const handleConfirm = async () => {
    toast.promise(new Promise((resolve) => setTimeout(resolve, 1500)), {
      loading: 'Carregando informações...',
      success: () => {
        router?.push('/thanks');
        return `Usuário cadastrado com sucesso!`;
      },
    });
  };

  return (
    <section
      className={cn(
        windowWidth < 768
          ? 'bg-white left-0 absolute bottom-0 md:hidden'
          : 'absolute bottom-0 left-0',
        'flex p-4 w-full justify-between items-center md:px-0',
        props.className
      )}
    >
      {step > 1 && (
        <Button variant={'link'} onClick={() => router?.back()}>
          Voltar
        </Button>
      )}

      {!confirm ? (
        <Button variant={'default'} onClick={onSubmit} size={'lg'}>
          Avançar
        </Button>
      ) : (
        <Button variant={'highlight'} onClick={handleConfirm} size={'lg'}>
          Confirmar
        </Button>
      )}
    </section>
  );
}
