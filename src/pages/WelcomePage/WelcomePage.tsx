import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';

export function WelcomePage() {
	const navigate = useNavigate();

	const handleGoToQuiz = () => {
		navigate('/quiz');
	};

	return (
		<Container className='flex min-h-[calc(100vh-200px)] flex-col items-center justify-center px-4 text-center sm:px-6 md:px-8'>
			<h1 className='text-primary mb-6 text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl'>
				Добро пожаловать
			</h1>
			<p className='mb-8 max-w-2xl text-base text-gray-600 sm:mb-10 sm:text-lg md:mb-12 md:text-xl'>
				Откройте для себя мир знаний и проверьте свои навыки с нашей коллекцией вопросов
			</p>
			<Button onClick={handleGoToQuiz} className='group px-6 py-3 text-base sm:px-8 sm:py-4 sm:text-lg'>
				<span>Перейти к тренажеру</span>
				<FaArrowRightLong className={'group-hover:translate-x-2.5'} />
			</Button>
		</Container>
	);
}

export const Component = WelcomePage;
