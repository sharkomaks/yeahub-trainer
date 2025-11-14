import { Link } from 'react-router-dom';

/**
 * Application logo component with responsive text
 *
 * Features:
 * - Logo image (visible on all screens)
 * - Text "Yeahub" (hidden on <512px, visible on ≥512px)
 * - Links to home page
 *
 * @returns Clickable logo with responsive text
 */
export function Logo() {
	return (
		<Link to='/' className='flex items-center gap-2 text-2xl font-extrabold text-gray-900 transition-colors'>
			<img src='/logo.svg' alt='YeaHub' className='size-8 rounded-full' />
			<span className='hidden sm:inline'>Yeahub</span>
		</Link>
	);
}
