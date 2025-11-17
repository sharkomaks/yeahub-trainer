import cn from 'classnames';
import type { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
	children: ReactNode;
	className?: string;
	variant?: 'primary' | 'outline' | 'destructive';
}

export function Button({ children, className, variant = 'primary', ...props }: ButtonProps) {
	const baseStyles =
		'cursor-pointer font-medium rounded-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2';

	const variantStyles = {
		primary: 'bg-primary text-white hover:bg-primary-hover active:bg-primary-dark shadow-sm',
		outline: 'text-primary bg-transparent hover:bg-primary-light active:bg-primary-light',
		destructive: 'bg-destructive text-red-600 hover:bg-destructive-hover'
	};

	return (
		<button className={cn(baseStyles, variantStyles[variant], className)} {...props}>
			{children}
		</button>
	);
}
