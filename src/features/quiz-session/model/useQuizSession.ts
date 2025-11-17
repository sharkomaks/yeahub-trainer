import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { clearQuizData, selectQuestions, setQuizResults } from '@/entities/quiz/model/quizSlice';
import type { Question } from '@/entities/quiz/model/types';

import { useAppDispatch, useAppSelector } from '@/shared/lib/hooks';

import type { UserAnswer } from './types';

export function useQuizSession() {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();
	const questions = useAppSelector(selectQuestions);

	const [currentIndex, setCurrentIndex] = useState(0);
	const [userAnswers, setUserAnswers] = useState<Record<number, UserAnswer>>({});
	const [showAnswer, setShowAnswer] = useState(false);

	useEffect(() => {
		if (questions.length === 0) {
			navigate('/quiz');
		}
	}, [questions.length, navigate]);

	if (questions.length === 0) {
		return null;
	}

	const currentQuestion: Question = questions[currentIndex];
	const totalQuestions = questions.length;
	const progress = ((currentIndex + 1) / totalQuestions) * 100;
	const hasAnswer = !!userAnswers[currentQuestion.id];
	const isFirstQuestion = currentIndex === 0;
	const isLastQuestion = currentIndex === totalQuestions - 1;

	const handlePrev = () => {
		if (!isFirstQuestion) {
			setCurrentIndex(prev => prev - 1);
			setShowAnswer(false);
		}
	};

	const handleNext = () => {
		if (!isLastQuestion && hasAnswer) {
			setCurrentIndex(prev => prev + 1);
			setShowAnswer(false);
		}
	};

	const handleAnswer = (answer: UserAnswer) => {
		setUserAnswers(prev => ({
			...prev,
			[currentQuestion.id]: answer
		}));
	};

	const handleSubmitResults = () => {
		dispatch(setQuizResults(userAnswers));
		navigate('/quiz/result');
	};

	const handleFinish = () => {
		dispatch(clearQuizData());
		navigate('/');
	};

	const toggleAnswer = () => {
		setShowAnswer(prev => !prev);
	};

	return {
		currentQuestion,
		currentIndex,
		totalQuestions,
		progress,
		hasAnswer,
		isFirstQuestion,
		isLastQuestion,
		showAnswer,
		userAnswers,
		handlePrev,
		handleNext,
		handleAnswer,
		handleSubmitResults,
		handleFinish,
		toggleAnswer
	};
}
