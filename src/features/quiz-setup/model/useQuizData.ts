import { useGetSkillsQuery } from '@/entities/skill';
import { useGetSpecializationsQuery } from '@/entities/specialization';

import { useApiError } from '@/shared/lib/hooks';
import { ApiErrorType, getErrorMessage } from '@/shared/types';

/**
 * Custom hook for fetching quiz setup data (specializations and skills)
 * @param specializationId - Selected specialization ID for fetching skills
 * @returns Specializations, skills, and loading states
 */
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

	// Show error toast for specializations
	useApiError(isSpecializationsError, getErrorMessage(ApiErrorType.SPECIALIZATIONS));

	// Show error toast for skills
	useApiError(isSkillsError, getErrorMessage(ApiErrorType.SKILLS));

	return {
		specializations: specializationsData?.data ?? [],
		skills: skillsData?.data ?? [],
		isLoadingSpecializations,
		isLoadingSkills
	};
}
