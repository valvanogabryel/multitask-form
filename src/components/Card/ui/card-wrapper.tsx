import { ComponentProps, ReactNode } from 'react';

interface CardWrapperProps
  extends Omit<ComponentProps<'section'>, 'className'> {
  children: ReactNode;
}

export function CardWrapper({ children, ...props }: Readonly<CardWrapperProps>) {
  return (
    <section
      className="md:py-8 md:w-full md:relative lg:col-span-2 xl:w-[90%]"
      {...props}
    >
      {children}
    </section>
  );
}
