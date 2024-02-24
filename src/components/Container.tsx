import { ComponentProps, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface ContainerProps extends Pick<ComponentProps<'main'>, 'className'> {
  children: ReactNode;
}

export function Container({ children, className }: Readonly<ContainerProps>) {
  return (
    <main
      className={twMerge(
        'bg-white shadow-lg rounded-xl w-11/12 px-6 py-8 mb-20 md:mb-0 md:p-4 md:max-w-screen-sm md:grid md:grid-cols-2 lg:gap-40 lg:grid-cols-3 lg:max-w-screen-md xl:gap-20 xl:max-w-screen-lg',
        className
      )}
    >
      {children}
    </main>
  );
}
