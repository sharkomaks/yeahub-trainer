import * as TooltipPrimitive from '@radix-ui/react-tooltip';
import cn from 'classnames';
import type { ReactNode } from 'react';

interface TooltipProps {
	children: ReactNode;
	content: string;
	side?: 'top' | 'right' | 'bottom' | 'left';
	className?: string;
}

export function Tooltip({ children, content, side = 'top', className }: TooltipProps) {
	return (
		<TooltipPrimitive.Provider delayDuration={200}>
			<TooltipPrimitive.Root>
				<TooltipPrimitive.Trigger asChild>{children}</TooltipPrimitive.Trigger>
				<TooltipPrimitive.Portal>
					<TooltipPrimitive.Content
						side={side}
						sideOffset={5}
						className={cn(
							'z-50 rounded-2xl border border-gray-200 bg-white px-4 py-2 text-sm text-gray-700 shadow-lg',
							'animate-in fade-in-0 zoom-in-95',
							className
						)}
					>
						{content}
						<TooltipPrimitive.Arrow className='fill-white' />
					</TooltipPrimitive.Content>
				</TooltipPrimitive.Portal>
			</TooltipPrimitive.Root>
		</TooltipPrimitive.Provider>
	);
}
