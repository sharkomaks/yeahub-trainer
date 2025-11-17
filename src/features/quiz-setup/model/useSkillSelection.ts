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
