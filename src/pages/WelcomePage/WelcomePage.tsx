import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';

export function WelcomePage() {
	const navigate = useNavigate();

	const handleGoToQuiz = () => {
		navigate('/quiz');
	};

	return (
		<Container className="flex min-h-[calc(100vh-200px)] flex-col items-center justify-center text-center">
			<h1 className="mb-6 text-7xl font-bold text-primary">Добро пожаловать</h1>
			<p className="mb-12 max-w-2xl text-xl text-gray-600">
				Откройте для себя мир знаний и проверьте свои навыки с нашей коллекцией вопросов
			</p>
			<Button onClick={handleGoToQuiz} className="px-8 py-4 text-lg">
				Перейти к тренажеру →
			</Button>
		</Container>
	);
}

export const Component = WelcomePage;
