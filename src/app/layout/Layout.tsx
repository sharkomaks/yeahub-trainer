import { Outlet } from 'react-router-dom';

import { Footer } from '@/widgets/Footer';
import { Header } from '@/widgets/Header';

/**
 * Main application layout component
 * Provides consistent structure with Header, main content area, and Footer
 * Uses React Router Outlet for rendering nested routes
 * @returns Application layout with header, main content, and footer
 */
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
