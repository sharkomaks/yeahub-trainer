import cn from 'classnames';
import type { ComponentProps } from 'react';

interface ExpandableSectionProps extends ComponentProps<'button'> {
	totalCount: number;
	displayCount: number;
	isExpanded: boolean;
	onToggle: () => void;
}

export function ExpandableSection({
	totalCount,
	displayCount,
	isExpanded,
	onToggle,
	className,
	...props
}: ExpandableSectionProps) {
	if (totalCount <= displayCount) {
		return null;
	}

	return (
		<button
			onClick={onToggle}
			className={cn(
				'text-primary hover:text-primary-hover mt-4 cursor-pointer text-sm font-semibold transition-colors',
				className
			)}
			{...props}
		>
			{isExpanded ? 'Скрыть' : 'Посмотреть все'}
		</button>
	);
}
