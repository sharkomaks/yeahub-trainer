import { parseAsArrayOf, parseAsInteger, useQueryState } from 'nuqs';
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

import { useGetSkillsQuery, useGetSpecializationsQuery } from '@/shared/api';
import { Button } from '@/shared/ui/Button';
import { Container } from '@/shared/ui/Container';
import { Counter } from '@/shared/ui/Counter';
import { SelectableCard } from '@/shared/ui/SelectableCard';
import { Tooltip } from '@/shared/ui/Tooltip';

export function QuizPage() {
	const navigate = useNavigate();

	// Query state management with nuqs
	const [specializationId, setSpecializationId] = useQueryState('specialization', parseAsInteger.withDefault(11));
	const [skillIds, setSkillIds] = useQueryState('skills', parseAsArrayOf(parseAsInteger).withDefault([]));
	const [count, setCount] = useQueryState('count', parseAsInteger.withDefault(10));

	// Local state for accordions
	const [isSpecializationsExpanded, setIsSpecializationsExpanded] = useState(false);
	const [isSkillsExpanded, setIsSkillsExpanded] = useState(false);

	// Fetch data
	const { data: specializationsData, isLoading: isLoadingSpecializations } = useGetSpecializationsQuery();
	const { data: skillsData, isLoading: isLoadingSkills } = useGetSkillsQuery(specializationId);

	const specializations = specializationsData?.data ?? [];
	const skills = skillsData?.data ?? [];

	// Display logic for accordion
	const displayedSpecializations = isSpecializationsExpanded ? specializations : specializations.slice(0, 5);
	const displayedSkills = isSkillsExpanded ? skills : skills.slice(0, 5);

	// Toggle skill selection
	const toggleSkill = (skillId: number) => {
		if (skillIds.includes(skillId)) {
			setSkillIds(skillIds.filter(id => id !== skillId));
		} else {
			setSkillIds([...skillIds, skillId]);
		}
	};

	// Handle start button click
	const handleStart = () => {
		const params = new URLSearchParams({
			specialization: specializationId.toString(),
			count: count.toString()
		});

		if (skillIds.length > 0) {
			params.set('skills', skillIds.join(','));
		}

		navigate(`/test?${params.toString()}`);
	};

	return (
		<div className='bg-background min-h-screen py-12'>
			<Container>
				<h1 className='mb-8 text-4xl font-extrabold text-gray-900'>Собеседование</h1>

				<div className='grid grid-cols-1 gap-8 lg:grid-cols-[1fr_400px]'>
					{/* Left Section */}
					<div className='flex flex-col gap-8'>
						{/* Specializations */}
						<div>
							<h2 className='text-primary mb-4 text-xl font-semibold'>Специализация</h2>
							<div className='flex flex-wrap gap-3'>
								{isLoadingSpecializations ? (
									<p className='text-gray-500'>Загрузка...</p>
								) : (
									displayedSpecializations.map(spec => (
										<SelectableCard
											key={spec.id}
											isSelected={specializationId === spec.id}
											onClick={() => setSpecializationId(spec.id)}
										>
											{spec.title}
										</SelectableCard>
									))
								)}
							</div>
							{specializations.length > 5 && (
								<button
									onClick={() => setIsSpecializationsExpanded(!isSpecializationsExpanded)}
									className='text-primary hover:text-primary-hover mt-4 text-sm font-semibold transition-colors'
								>
									{isSpecializationsExpanded ? 'Скрыть' : 'Посмотреть все'}
								</button>
							)}
						</div>

						{/* Skills */}
						<div>
							<h2 className='text-primary mb-4 text-xl font-semibold'>Выберите навыки</h2>
							<div className='flex flex-wrap gap-3'>
								{isLoadingSkills ? (
									<p className='text-gray-500'>Загрузка...</p>
								) : skills.length === 0 ? (
									<p className='text-gray-500'>Навыки не найдены для выбранной специализации</p>
								) : (
									displayedSkills.map(skill => (
										<SelectableCard
											key={skill.id}
											isSelected={skillIds.includes(skill.id)}
											onClick={() => toggleSkill(skill.id)}
											icon={
												skill.imageSrc ? (
													<img
														src={skill.imageSrc}
														alt={skill.title}
														className='size-5 rounded object-cover'
													/>
												) : undefined
											}
										>
											{skill.title}
										</SelectableCard>
									))
								)}
							</div>
							{skills.length > 5 && (
								<button
									onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
									className='text-primary hover:text-primary-hover mt-4 text-sm font-semibold transition-colors'
								>
									{isSkillsExpanded ? 'Скрыть' : 'Посмотреть все'}
								</button>
							)}
						</div>
					</div>

					{/* Right Section */}
					<div className='flex flex-col gap-6'>
						{/* Difficulty - Disabled with Tooltip */}
						<div>
							<h3 className='text-primary mb-3 text-lg font-semibold'>Сложность вопросов</h3>
							<Tooltip content='Доступно для участников'>
								<div className='flex flex-wrap gap-2'>
									{['1-3', '4-6', '7-8', '9-10'].map(range => (
										<SelectableCard key={range} disabled>
											{range}
										</SelectableCard>
									))}
								</div>
							</Tooltip>
						</div>

						{/* Mode - Disabled with Tooltip */}
						<div>
							<h3 className='text-primary mb-3 text-lg font-semibold'>Выберите режим</h3>
							<Tooltip content='Доступно для участников'>
								<div className='flex flex-col gap-2'>
									{['Повторение', 'Только новые', 'Случайные'].map(mode => (
										<SelectableCard key={mode} disabled>
											{mode}
										</SelectableCard>
									))}
								</div>
							</Tooltip>
						</div>

						{/* Count - Active */}
						<div>
							<h3 className='text-primary mb-3 text-lg font-semibold'>Количество вопросов</h3>
							<Counter value={count} onChange={setCount} min={1} max={50} />
						</div>

						{/* Start Button */}
						<Button
							onClick={handleStart}
							className='mt-4 px-8 py-4 text-lg'
							disabled={!specializationId}
						>
							<span>Начать</span>
							<FaArrowRightLong />
						</Button>
					</div>
				</div>
			</Container>
		</div>
	);
}
