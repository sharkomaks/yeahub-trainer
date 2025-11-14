import { useState } from 'react';

import type { Skill } from '@/shared/types';
import { ExpandableSection } from '@/shared/ui/ExpandableSection';
import { SelectableCard } from '@/shared/ui/SelectableCard';
import { SkeletonCard } from '@/shared/ui/SkeletonCard';

interface SkillSelectorProps {
	selectedIds: number[];
	onToggle: (skillId: number) => void;
	skills: Skill[];
	isLoading: boolean;
	initialDisplayCount?: number;
}

export function SkillSelector({ selectedIds, onToggle, skills, isLoading, initialDisplayCount = 5 }: SkillSelectorProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const displayedSkills = isExpanded ? skills : skills.slice(0, initialDisplayCount);

	return (
		<div>
			<h2 className='mb-2 text-sm text-gray-500'>Выберите навыки</h2>
			<div className='flex flex-wrap gap-3'>
				{isLoading ? (
					<>
						{Array.from({ length: 5 }).map((_, i) => (
							<SkeletonCard key={i} className='w-32' />
						))}
					</>
				) : skills.length === 0 ? (
					<p className='text-gray-500'>Навыки не найдены для выбранной специализации</p>
				) : (
					displayedSkills.map(skill => (
						<SelectableCard
							key={skill.id}
							isSelected={selectedIds.includes(skill.id)}
							onClick={() => onToggle(skill.id)}
							icon={
								skill.imageSrc ? (
									<img src={skill.imageSrc} alt={skill.title} className='size-5 rounded object-cover' />
								) : undefined
							}
						>
							{skill.title}
						</SelectableCard>
					))
				)}
			</div>
			<ExpandableSection
				totalCount={skills.length}
				displayCount={initialDisplayCount}
				isExpanded={isExpanded}
				onToggle={() => setIsExpanded(!isExpanded)}
			/>
		</div>
	);
}
