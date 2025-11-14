import cn from 'classnames';
import type { ReactNode } from 'react';

interface ContainerProps {
	children: ReactNode;
	className?: string;
}

export function Container({ children, className }: ContainerProps) {
	return <div className={cn('mx-auto max-w-7xl px-8', className)}>{children}</div>;
}
