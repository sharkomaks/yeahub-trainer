import { createBrowserRouter } from 'react-router-dom';

import { Layout } from '../layout';

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
