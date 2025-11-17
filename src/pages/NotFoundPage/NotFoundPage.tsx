import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';

export function NotFoundPage() {
	const navigate = useNavigate();

	const handleGoToHome = () => {
		navigate('/');
	};

	return (
		<Container className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center">
			<h1 className="mb-8 text-9xl font-bold text-primary">404</h1>
			<h2 className="mb-4 text-3xl font-semibold text-gray-800">Страница не найдена</h2>
			<p className="mb-12 max-w-xl text-lg text-gray-600">
				Ой, кажется, вы забрели не туда. Давайте вернёмся на главную!
			</p>
			<Button onClick={handleGoToHome} className="px-8 py-4 text-lg">
				На главную
			</Button>
		</Container>
	);
}

export const Component = NotFoundPage;
