import cn from 'classnames';
import { NavLink } from 'react-router-dom';

import { Container } from '@/shared/ui/Container';
import { Logo } from '@/shared/ui/Logo';

import { DesktopAuthButtons } from './ui/DesktopAuthButtons';
import { MobileMenu } from './ui/MobileMenu';

export function Header() {
	return (
		<header>
			<Container>
				<div className='flex h-16 items-center justify-between'>
					<div className='flex items-center gap-6 sm:gap-12'>
						<Logo />
						<NavLink
							to='/quiz'
							className={({ isActive }) =>
								cn(
									'hover:text-primary rounded-xl px-3 py-1.5 transition-colors hover:bg-gray-100',
									isActive && 'bg-gray-100'
								)
							}
						>
							Тренажёр
						</NavLink>
					</div>
					<DesktopAuthButtons />
					<MobileMenu />
				</div>
			</Container>
		</header>
	);
}
