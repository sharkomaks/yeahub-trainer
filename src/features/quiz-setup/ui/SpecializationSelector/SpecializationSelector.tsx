import { useState } from 'react';

import type { Specialization } from '@/shared/types';
import { ExpandableSection } from '@/shared/ui/ExpandableSection';
import { SelectableCard } from '@/shared/ui/SelectableCard';
import { SkeletonCard } from '@/shared/ui/SkeletonCard';

interface SpecializationSelectorProps {
	selectedId: number;
	onSelect: (id: number) => void;
	specializations: Specialization[];
	isLoading: boolean;
	initialDisplayCount?: number;
}

export function SpecializationSelector({
	selectedId,
	onSelect,
	specializations,
	isLoading,
	initialDisplayCount = 5
}: SpecializationSelectorProps) {
	const [isExpanded, setIsExpanded] = useState(false);

	const displayedSpecializations = isExpanded ? specializations : specializations.slice(0, initialDisplayCount);

	return (
		<div>
			<h2 className='mb-2 text-sm text-gray-500'>Специализация</h2>
			<div className='flex flex-wrap gap-3'>
				{isLoading ? (
					<>
						{Array.from({ length: 5 }).map((_, i) => (
							<SkeletonCard key={i} className='w-40' />
						))}
					</>
				) : (
					displayedSpecializations.map(spec => (
						<SelectableCard key={spec.id} isSelected={selectedId === spec.id} onClick={() => onSelect(spec.id)}>
							{spec.title}
						</SelectableCard>
					))
				)}
			</div>
			<ExpandableSection
				totalCount={specializations.length}
				displayCount={initialDisplayCount}
				isExpanded={isExpanded}
				onToggle={() => setIsExpanded(!isExpanded)}
			/>
		</div>
	);
}
