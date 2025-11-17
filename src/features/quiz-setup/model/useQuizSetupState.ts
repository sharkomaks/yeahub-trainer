import { parseAsArrayOf, parseAsInteger, useQueryState } from 'nuqs';
import { useCallback } from 'react';

export function useQuizSetupState() {
	const [specializationId, setSpecializationIdRaw] = useQueryState('specialization', parseAsInteger.withDefault(11));
	const [skillIds, setSkillIds] = useQueryState('skills', parseAsArrayOf(parseAsInteger).withDefault([]));
	const [count, setCount] = useQueryState('count', parseAsInteger.withDefault(10));

	const setSpecializationId = useCallback(
		(newId: number) => {
			if (newId !== specializationId) {
				setSkillIds([]);
			}
			setSpecializationIdRaw(newId);
		},
		[specializationId, setSpecializationIdRaw, setSkillIds]
	);

	return {
		specializationId,
		setSpecializationId,
		skillIds,
		setSkillIds,
		count,
		setCount
	};
}
