import { Link } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';

export function Header() {
	return (
		<header>
			<Container>
				<div className='flex h-16 items-center justify-between'>
					<Link
						to='/'
						className='flex items-center gap-2 text-2xl font-extrabold text-gray-900 transition-colors'
					>
						<img src='/logo.svg' alt='YeaHub' className='size-8 rounded-full' />
						<span>Yeahub</span>
					</Link>
					<div className='flex items-center gap-6'>
						<Button variant='outline' className={'text-sm'}>
							Вход
						</Button>
						<Button variant='primary' className={'px-8 py-3 text-lg'}>
							Регистрация
						</Button>
					</div>
				</div>
			</Container>
		</header>
	);
}
