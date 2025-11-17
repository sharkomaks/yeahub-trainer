import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';

/**
 * React Router v7 browser router configuration
 * Defines application route structure with lazy loading for code splitting
 * Root route uses Layout component, child routes are lazy-loaded
 */
export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				index: true,
				lazy: () => import('@/pages/WelcomePage')
			},
			{
				path: '/quiz',
				lazy: () => import('@/pages/QuizPage')
			},
			{
				path: '*',
				lazy: () => import('@/pages/NotFoundPage')
			}
		]
	}
]);
