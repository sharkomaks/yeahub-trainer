import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

export function Layout() {
	return (
		<div className='flex min-h-screen flex-col'>
			<Header />
			<main className='bg-background flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
}
