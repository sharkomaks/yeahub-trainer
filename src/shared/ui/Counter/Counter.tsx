import cn from 'classnames';

interface CounterProps {
	value: number;
	onChange: (value: number) => void;
	min?: number;
	max?: number;
	className?: string;
}

export function Counter({ value, onChange, min = 1, max = 100, className }: CounterProps) {
	const handleDecrement = () => {
		if (value > min) {
			onChange(value - 1);
		}
	};

	const handleIncrement = () => {
		if (value < max) {
			onChange(value + 1);
		}
	};

	return (
		<div className={cn('inline-flex items-center gap-3 rounded-xl border border-gray-300 px-3 py-2', className)}>
			<button
				onClick={handleDecrement}
				disabled={value <= min}
				className='text-primary hover:text-primary-hover cursor-pointer text-2xl font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-30'
				aria-label='Decrease count'
			>
				−
			</button>
			<span className='min-w-[2rem] text-center text-lg font-semibold'>{value}</span>
			<button
				onClick={handleIncrement}
				disabled={value >= max}
				className='text-primary hover:text-primary-hover cursor-pointer text-2xl font-bold transition-colors disabled:cursor-not-allowed disabled:opacity-30'
				aria-label='Increase count'
			>
				+
			</button>
		</div>
	);
}
