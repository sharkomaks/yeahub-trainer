import { SelectableCard } from '@/shared/ui/SelectableCard';
import { Tooltip } from '@/shared/ui/Tooltip';

interface DifficultySelectorProps {
	disabled?: boolean;
	tooltipContent?: string;
}

const DIFFICULTY_RANGES = ['1-3', '4-6', '7-8', '9-10'];

export function DifficultySelector({ disabled = true, tooltipContent = 'Доступно для участников' }: DifficultySelectorProps) {
	return (
		<div>
			<h2 className='mb-2 text-sm text-gray-500'>Сложность вопросов</h2>
			<Tooltip content={tooltipContent}>
				<div className='flex flex-wrap gap-2'>
					{DIFFICULTY_RANGES.map(range => (
						<SelectableCard key={range} disabled={disabled}>
							{range}
						</SelectableCard>
					))}
				</div>
			</Tooltip>
		</div>
	);
}
