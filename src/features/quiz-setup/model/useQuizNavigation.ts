import { useNavigate } from 'react-router-dom';

import { useGetNewMockQuizQuery } from '@/entities/quiz/api/quizApi';
import { setQuizData } from '@/entities/quiz/model/quizSlice';

import { useAppDispatch } from '@/shared/lib/hooks';

interface UseQuizNavigationParams {
	specializationId: number;
	skillIds: number[];
	count: number;
}

export function useQuizNavigation({ specializationId, skillIds, count }: UseQuizNavigationParams) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const isValid = !!specializationId && skillIds.length > 0;

	const { data, isLoading } = useGetNewMockQuizQuery(
		{
			specialization: specializationId,
			skills: skillIds,
			limit: count
		},
		{
			skip: !isValid
		}
	);

	const handleStart = () => {
		if (data) {
			dispatch(setQuizData(data));
			navigate(`/quiz/new`);
		}
	};

	return {
		handleStart,
		isValid: isValid && !!data && !isLoading,
		isLoading
	};
}
