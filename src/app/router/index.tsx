import { createBrowserRouter } from 'react-router-dom';

import { QuizPage } from '@/pages/QuizPage';

import { Layout } from '../layout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		children: [
			{
				path: '/quiz',
				element: <QuizPage />
			}
		]
	}
]);
