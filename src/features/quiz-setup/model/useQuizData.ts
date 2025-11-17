import { useGetSkillsQuery } from '@/entities/skill';
import { useGetSpecializationsQuery } from '@/entities/specialization';

import { useApiError } from '@/shared/lib/hooks';
import { ApiErrorType, getErrorMessage } from '@/shared/types';

export function useQuizData(specializationId: number) {
	const {
		data: specializationsData,
		isLoading: isLoadingSpecializations,
		isError: isSpecializationsError
	} = useGetSpecializationsQuery();

	const {
		data: skillsData,
		isLoading: isLoadingSkills,
		isError: isSkillsError
	} = useGetSkillsQuery(specializationId);

	useApiError(isSpecializationsError, getErrorMessage(ApiErrorType.SPECIALIZATIONS));

	useApiError(isSkillsError, getErrorMessage(ApiErrorType.SKILLS));

	return {
		specializations: specializationsData?.data ?? [],
		skills: skillsData?.data ?? [],
		isLoadingSpecializations,
		isLoadingSkills
	};
}
