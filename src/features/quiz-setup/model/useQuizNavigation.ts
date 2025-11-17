import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { useGetNewMockQuizQuery } from '@/entities/quiz/api/quizApi';
import { clearQuizData, setQuizData } from '@/entities/quiz/model/quizSlice';

import { useApiError, useAppDispatch } from '@/shared/lib/hooks';
import { ApiErrorType, getErrorMessage } from '@/shared/types/errors';

interface UseQuizNavigationParams {
	specializationId: number;
	skillIds: number[];
	count: number;
}

export function useQuizNavigation({ specializationId, skillIds, count }: UseQuizNavigationParams) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const isValid = !!specializationId && skillIds.length > 0;

	const { data, isLoading, isError } = useGetNewMockQuizQuery(
		{
			specialization: specializationId,
			skills: skillIds,
			limit: count
		},
		{
			skip: !isValid
		}
	);

	useApiError(isError, getErrorMessage(ApiErrorType.QUIZ));

	const handleStart = () => {
		if (data) {
			dispatch(clearQuizData());
			dispatch(setQuizData(data));
			toast.success('Успешно! Новое собеседование создано');
			navigate(`/quiz/new`);
		}
	};

	return {
		handleStart,
		isValid: isValid && !!data && !isLoading && !isError,
		isLoading
	};
}
