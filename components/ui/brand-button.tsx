import * as React from 'react';
import { Button } from '@/components/ui/button';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const brandButtonVariants = cva(
	'inline-flex text-base items-center rounded-[6px] justify-center gap-2 whitespace-nowrap font-bold transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
	{
		variants: {
			variant: {
				default: 'bg-primary text-white hover:bg-primary/90 hover:-translate-y-1',
				gradient: 'brand-gradient text-white hover:shadow-lg hover:-translate-y-1',
				white: 'bg-white text-primary hover:bg-white/90 hover:-translate-y-1',
				outline: 'border-2 border-primary text-primary bg-white hover:bg-blue-50 hover:-translate-y-1',
			},
		},
		defaultVariants: {
			variant: 'default',
		},
	}
);

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
	}
);

BrandButton.displayName = 'BrandButton';

export { BrandButton, brandButtonVariants };
