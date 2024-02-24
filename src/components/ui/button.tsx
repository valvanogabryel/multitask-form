import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-lg text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default:
          'bg-marine-blue text-white px-4 py-2 self-end hover:bg-opacity-95',
        link: 'text-cool-gray font-medium text-base px-4 py-2 self-end hover:text-marine-blue',
        highlight:
          'bg-purplish-blue text-magnolia p-0 antialiased font-medium hover:bg-purplish-blue/90',
      },
      size: {
        default: 'h-9 px-4 py-2 lg:px-6 lg:h-12',
        sm: 'h-8 px-3 text-xs',
        lg: 'h-10 px-4 text-base lg:px-6 lg:h-12',
        icon: 'h-9 w-9',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = 'button';
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = 'Button';

export { Button, buttonVariants };
