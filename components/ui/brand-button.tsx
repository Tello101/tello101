import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const brandButtonVariants = cva('rounded-full text-base font-medium', {
  variants: {
    variant: {
      default: 'bg-primary text-white hover:bg-primary/90',
      white: 'bg-white text-primary hover:bg-white/95',
      outline: 'border-2 border-primary text-primary hover:bg-blue-50',
      gradient: 'brand-gradient text-white hover:shadow-lg',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

export interface BrandButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof brandButtonVariants> {
  asChild?: boolean;
  size?: 'default' | 'sm' | 'lg' | 'icon' | null;
}

const BrandButton = React.forwardRef<HTMLButtonElement, BrandButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    return (
      <Button
        size={size}
        className={cn(brandButtonVariants({ variant, className }))}
        ref={ref}
        asChild={asChild}
        {...props}
      />
    );
  },
);

BrandButton.displayName = 'BrandButton';

export { BrandButton, brandButtonVariants };
