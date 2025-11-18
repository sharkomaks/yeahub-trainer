import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import { QuizResultCard } from '@/features/quiz-session';

import { selectQuestions, selectQuizResults } from '@/entities/quiz';

import { useAppSelector } from '@/shared/lib/hooks';
import { Container } from '@/shared/ui/Container';

export function QuizResultPage() {
	const navigate = useNavigate();
	const questions = useAppSelector(selectQuestions);
	const quizResults = useAppSelector(selectQuizResults);

	useEffect(() => {
		if (!questions.length || !quizResults) {
			navigate('/quiz');
		}
	}, [questions.length, quizResults, navigate]);

	if (!questions.length || !quizResults) {
		return null;
	}

	return (
		<Container className='py-7'>
			<h1 className='mb-8 text-center text-2xl font-bold text-gray-900 md:text-3xl'>
				Список пройденных вопросов собеседования
			</h1>

			<div className='grid gap-4 md:grid-cols-2'>
				{questions.map(question => {
					const userAnswer = quizResults[question.id];
					if (!userAnswer) return null;

					return <QuizResultCard key={question.id} question={question} userAnswer={userAnswer} />;
				})}
			</div>
		</Container>
	);
}

export const Component = QuizResultPage;
