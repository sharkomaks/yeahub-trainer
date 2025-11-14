import { useRef, useState } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { IoPersonAddOutline, IoPersonOutline } from 'react-icons/io5';

import { useClickOutside } from '@/shared/lib/hooks';

/**
 * Mobile menu component with hamburger button and dropdown
 *
 * Features:
 * - Hamburger button with menu icon
 * - Dropdown menu with "Вход" and "Регистрация" options
 * - Closes when clicking outside
 * - Closes when clicking menu item
 *
 * Visible only on screens <768px
 *
 * @returns Mobile menu dropdown with auth options
 */
export function MobileMenu() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

	useClickOutside(menuRef, () => setIsMenuOpen(false), isMenuOpen);

	return (
		<div className='relative md:hidden' ref={menuRef}>
			<button
				onClick={() => setIsMenuOpen(!isMenuOpen)}
				className='flex size-10 items-center justify-center rounded-lg text-gray-900 transition-colors hover:bg-gray-100 cursor-pointer'
				aria-label='Открыть меню'
			>
				<IoIosMenu className='size-6' />
			</button>

			{/* Dropdown menu */}
			{isMenuOpen && (
				<div className='absolute right-0 top-12 z-50 w-56 rounded-lg border border-gray-200 bg-white shadow-lg'>
					<button
						onClick={() => setIsMenuOpen(false)}
						className='flex w-full items-center gap-3 border-b border-gray-100 px-4 py-3 text-left transition-colors hover:bg-gray-50 cursor-pointer'
					>
						<IoPersonOutline className='size-5 text-gray-700' />
						<span className='text-gray-900'>Вход</span>
					</button>
					<button
						onClick={() => setIsMenuOpen(false)}
						className='flex w-full items-center gap-3 px-4 py-3 text-left transition-colors hover:bg-gray-50 cursor-pointer'
					>
						<IoPersonAddOutline className='size-5 text-gray-700' />
						<span className='text-gray-900'>Регистрация</span>
					</button>
				</div>
			)}
		</div>
	);
}
