import cn from 'classnames';
import type { IconType } from 'react-icons';

interface IconLinkProps {
	href: string;
	Icon: IconType;
	className?: string;
}

export function IconLink({ href, Icon, className }: IconLinkProps) {
	return (
		<a
			href={href}
			target='_blank'
			rel='noopener noreferrer'
			className={cn('size-6 rounded-full bg-white p-[3px] transition-colors hover:bg-gray-300', className)}
		>
			<Icon className={'text-footer h-full w-full'} />
		</a>
	);
}
