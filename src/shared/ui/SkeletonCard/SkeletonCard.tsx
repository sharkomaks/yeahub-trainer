import cn from 'classnames';
import type { ComponentProps } from 'react';


type SkeletonCardProps = ComponentProps<'div'>;

export function SkeletonCard({ className, ...props }: SkeletonCardProps) {
	return <div className={cn('h-10 animate-pulse rounded-xl bg-gray-300', className)} {...props} />;
}
