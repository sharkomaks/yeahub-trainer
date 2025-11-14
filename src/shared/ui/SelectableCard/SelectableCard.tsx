import cn from 'classnames';
import type { ReactNode } from 'react';

interface SelectableCardProps {
	children: ReactNode;
	isSelected?: boolean;
	onClick?: () => void;
	disabled?: boolean;
	icon?: ReactNode;
	className?: string;
}

export function SelectableCard({
	children,
	isSelected = false,
	onClick,
	disabled = false,
	icon,
	className
}: SelectableCardProps) {
	return (
		<button
			onClick={onClick}
			disabled={disabled}
			className={cn(
				'flex items-center gap-2 rounded-xl border-2 px-4 py-2.5 text-left text-sm font-medium transition-all duration-200',
				{
					'hover:bg-primary border-primary bg-primary/7 cursor-pointer text-gray-900 hover:text-white':
						isSelected,
					'hover:bg-primary hover:border-primary cursor-pointer border-gray-300 bg-white text-gray-700 hover:text-white':
						!isSelected && !disabled,
					'cursor-not-allowed border-gray-200 bg-gray-50 text-gray-400 opacity-60': disabled
				},
				className
			)}
		>
			{icon && <span className='flex-shrink-0'>{icon}</span>}
			<span className='flex-1'>{children}</span>
		</button>
	);
}
