import type { Skill, Specialization } from '@/shared/types';
import {
	DifficultySelector,
	ModeSelector,
	QuestionCountSelector,
	SkillSelector,
	SpecializationSelector
} from '@/features/quiz-setup/ui';

interface QuizSetupFormProps {
	specializationId: number;
	onSelectSpecialization: (id: number) => void;
	skillIds: number[];
	onToggleSkill: (id: number) => void;
	count: number;
	onChangeCount: (count: number) => void;
	specializations: Specialization[];
	skills: Skill[];
	isLoadingSpecializations: boolean;
	isLoadingSkills: boolean;
}

export function QuizSetupForm({
	specializationId,
	onSelectSpecialization,
	skillIds,
	onToggleSkill,
	count,
	onChangeCount,
	specializations,
	skills,
	isLoadingSpecializations,
	isLoadingSkills
}: QuizSetupFormProps) {
	return (
		<div className='mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]'>
			{/* Left Section */}
			<div className='flex flex-col gap-8'>
				<SpecializationSelector
					selectedId={specializationId}
					onSelect={onSelectSpecialization}
					specializations={specializations}
					isLoading={isLoadingSpecializations}
				/>

				<SkillSelector
					selectedIds={skillIds}
					onToggle={onToggleSkill}
					skills={skills}
					isLoading={isLoadingSkills}
				/>
			</div>

			{/* Right Section */}
			<div className='flex flex-col items-start gap-6'>
				<DifficultySelector />
				<ModeSelector />
				<QuestionCountSelector value={count} onChange={onChangeCount} />
			</div>
		</div>
	);
}
