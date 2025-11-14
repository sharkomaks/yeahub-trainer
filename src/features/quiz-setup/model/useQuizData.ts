import { useGetSkillsQuery, useGetSpecializationsQuery } from '@/shared/api';

/**
 * Custom hook for fetching quiz setup data (specializations and skills)
 * @param specializationId - Selected specialization ID for fetching skills
 * @returns Specializations, skills, and loading states
 */
export function useQuizData(specializationId: number) {
	const { data: specializationsData, isLoading: isLoadingSpecializations } = useGetSpecializationsQuery();
	const { data: skillsData, isLoading: isLoadingSkills } = useGetSkillsQuery(specializationId);

	return {
		specializations: specializationsData?.data ?? [],
		skills: skillsData?.data ?? [],
		isLoadingSpecializations,
		isLoadingSkills
	};
}
