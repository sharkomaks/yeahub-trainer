import { RouterProvider } from 'react-router-dom';

import { AppProvider } from './providers';
import { router } from './router';

/**
 * Root application component
 * Wraps the router with all application providers (Redux, nuqs)
 * @returns The main App component with routing configured
 */
export function App() {
	return (
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	);
}
