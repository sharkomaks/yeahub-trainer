import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

import { useLazyGetNewMockQuizQuery } from '@/entities/quiz/api/quizApi';
import { clearQuizData, setQuizData } from '@/entities/quiz/model/quizSlice';

import { useAppDispatch } from '@/shared/lib/hooks';
import { ApiErrorType, getErrorMessage } from '@/shared/types/errors';

interface UseQuizNavigationParams {
	specializationId: number;
	skillIds: number[];
	count: number;
}

export function useQuizNavigation({ specializationId, skillIds, count }: UseQuizNavigationParams) {
	const navigate = useNavigate();
	const dispatch = useAppDispatch();

	const [trigger, { isLoading }] = useLazyGetNewMockQuizQuery();

	const isValid = !!specializationId && skillIds.length > 0;

	const handleStart = async () => {
		if (!isValid) return;

		try {
			const data = await trigger({
				specialization: specializationId,
				skills: skillIds,
				limit: count
			}).unwrap();

			dispatch(clearQuizData());
			dispatch(setQuizData(data));
			toast.success('Успешно! Новое собеседование создано');
			navigate(`/quiz/new`);
		} catch {
			toast.error(getErrorMessage(ApiErrorType.QUIZ));
		}
	};

	return {
		handleStart,
		isValid,
		isLoading
	};
}
