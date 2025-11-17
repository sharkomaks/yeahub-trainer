import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';

export function NotFoundPage() {
	const navigate = useNavigate();

	const handleGoToHome = () => {
		navigate('/');
	};

	return (
		<Container className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 text-center sm:px-6 md:px-8">
			<h1 className="mb-6 text-6xl font-bold text-primary sm:mb-8 sm:text-7xl md:text-8xl lg:text-9xl">
				404
			</h1>
			<h2 className="mb-4 text-xl font-semibold text-gray-800 sm:text-2xl md:text-3xl">
				Страница не найдена
			</h2>
			<p className="mb-8 max-w-xl text-base text-gray-600 sm:mb-10 sm:text-lg md:mb-12">
				Ой, кажется, вы забрели не туда. Давайте вернёмся на главную!
			</p>
			<Button onClick={handleGoToHome} className="px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg">
				На главную
			</Button>
		</Container>
	);
}

export const Component = NotFoundPage;
