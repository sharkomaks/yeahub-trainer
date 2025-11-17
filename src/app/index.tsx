import { RouterProvider } from 'react-router-dom';

import { AppProvider } from './providers';
import { router } from './router';

export function App() {
	return (
		<AppProvider>
			<RouterProvider router={router} />
		</AppProvider>
	);
}
