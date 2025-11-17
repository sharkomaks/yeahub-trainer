import { Link } from 'react-router-dom';

export function Logo() {
	return (
		<Link to='/' className='flex items-center gap-2 text-2xl font-extrabold text-gray-900 transition-colors'>
			<img src='/logo.svg' alt='YeaHub' className='size-8 rounded-full' />
			<span className='hidden sm:inline'>Yeahub</span>
		</Link>
	);
}
