import { useNavigate } from 'react-router-dom';

interface UseQuizNavigationParams {
	specializationId: number;
	skillIds: number[];
	count: number;
}

export function useQuizNavigation({ specializationId, skillIds, count }: UseQuizNavigationParams) {
	const navigate = useNavigate();

	const isValid = !!specializationId && skillIds.length > 0;

	const handleStart = () => {
		const params = new URLSearchParams({
			specialization: specializationId.toString(),
			count: count.toString()
		});

		if (skillIds.length > 0) {
			params.set('skills', skillIds.join(','));
		}

		navigate(`/quiz/new`);
	};

	return {
		handleStart,
		isValid
	};
}
