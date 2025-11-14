import { SelectableCard } from '@/shared/ui/SelectableCard';
import { Tooltip } from '@/shared/ui/Tooltip';

interface ModeSelectorProps {
	disabled?: boolean;
	tooltipContent?: string;
}

const QUIZ_MODES = ['Повторение', 'Только новые', 'Случайные'];

export function ModeSelector({ disabled = true, tooltipContent = 'Доступно для участников' }: ModeSelectorProps) {
	return (
		<div>
			<h2 className='mb-2 text-sm text-gray-500'>Выберите режим</h2>
			<Tooltip content={tooltipContent}>
				<div className='flex gap-2'>
					{QUIZ_MODES.map(mode => (
						<SelectableCard key={mode} disabled={disabled}>
							{mode}
						</SelectableCard>
					))}
				</div>
			</Tooltip>
		</div>
	);
}
