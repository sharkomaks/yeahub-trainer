/**
 * Custom hook for managing skill multi-selection logic
 * @param skillIds - Current selected skill IDs
 * @param setSkillIds - Setter for skill IDs
 * @returns Toggle function for skill selection
 */
export function useSkillSelection(skillIds: number[], setSkillIds: (ids: number[]) => void) {
	const toggleSkill = (skillId: number) => {
		if (skillIds.includes(skillId)) {
			setSkillIds(skillIds.filter(id => id !== skillId));
		} else {
			setSkillIds([...skillIds, skillId]);
		}
	};

	return { toggleSkill };
}
