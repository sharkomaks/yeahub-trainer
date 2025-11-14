import { Counter } from '@/shared/ui/Counter';

interface QuestionCountSelectorProps {
	value: number;
	onChange: (value: number) => void;
	min?: number;
	max?: number;
}

export function QuestionCountSelector({ value, onChange, min = 1, max = 50 }: QuestionCountSelectorProps) {
	return (
		<div>
			<h2 className='mb-2 text-sm text-gray-500'>Количество вопросов</h2>
			<Counter value={value} onChange={onChange} min={min} max={max} />
		</div>
	);
}
