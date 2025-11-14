import { FaArrowRightLong } from 'react-icons/fa6';

import { QuizSetupForm } from '@/widgets/QuizSetupForm';

import { useQuizData, useQuizNavigation, useQuizSetupState, useSkillSelection } from '@/features/quiz-setup/model';

import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';

/**
 * Quiz setup page component
 * Allows users to configure and start a quiz by selecting:
 * - Specialization (required)
 * - Skills (required, multiple selection)
 * - Question count (1-50)
 *
 * Uses URL query parameters for state persistence
 * Validates selections before allowing quiz start
 *
 * @returns Quiz configuration page with form and start button
 */
function QuizPage() {
	// Query state management
	const { specializationId, setSpecializationId, skillIds, setSkillIds, count, setCount } = useQuizSetupState();

	// Fetch data
	const { specializations, skills, isLoadingSpecializations, isLoadingSkills } = useQuizData(specializationId);

	// Skill selection logic
	const { toggleSkill } = useSkillSelection(skillIds, setSkillIds);

	// Navigation logic
	const { handleStart, isValid } = useQuizNavigation({ specializationId, skillIds, count });

	return (
		<div className='bg-background min-h-screen py-12'>
			<Container className='flex flex-col rounded-2xl bg-white p-6'>
				<h1 className='mb-6 text-2xl font-medium'>Собеседование</h1>

				<QuizSetupForm
					specializationId={specializationId}
					onSelectSpecialization={setSpecializationId}
					skillIds={skillIds}
					onToggleSkill={toggleSkill}
					count={count}
					onChangeCount={setCount}
					specializations={specializations}
					skills={skills}
					isLoadingSpecializations={isLoadingSpecializations}
					isLoadingSkills={isLoadingSkills}
				/>

				<Button onClick={handleStart} className='self-end px-8 py-2' disabled={!isValid}>
					<span>Начать</span>
					<FaArrowRightLong />
				</Button>
			</Container>
		</div>
	);
}

export const Component = QuizPage;
