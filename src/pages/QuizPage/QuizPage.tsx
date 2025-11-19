import cn from 'classnames';
import { FaArrowRightLong } from 'react-icons/fa6';
import { LuLoaderCircle } from 'react-icons/lu';

import { QuizSetupForm } from '@/widgets/QuizSetupForm';

import { useQuizData, useQuizNavigation, useQuizSetupState, useSkillSelection } from '@/features/quiz-setup';

import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';

function QuizPage() {
	const { specializationId, setSpecializationId, skillIds, setSkillIds, count, setCount } = useQuizSetupState();

	const { specializations, skills, isLoadingSpecializations, isLoadingSkills } = useQuizData(specializationId);

	const { toggleSkill } = useSkillSelection(skillIds, setSkillIds);

	const { handleStart, isValid, isLoading } = useQuizNavigation({ specializationId, skillIds, count });

	return (
		<Container className='bg-background min-h-screen py-12'>
			<div className='flex flex-col rounded-2xl bg-white p-6'>
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

				<Button onClick={handleStart} className={cn('self-end px-8 py-2')} disabled={!isValid}>
					{isLoading ? (
						<LuLoaderCircle className='mx-7 size-6 animate-spin' />
					) : (
						<>
							<span>Начать</span>
							<FaArrowRightLong />
						</>
					)}
				</Button>
			</div>
		</Container>
	);
}

export const Component = QuizPage;
