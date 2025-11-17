import { Button } from '@/shared/ui/Button';

interface QuizActionsProps {
	onNext: () => void;
	onFinish: () => void;
	hasAnswer: boolean;
	isLastQuestion: boolean;
}

export function QuizActions({ onNext, onFinish, hasAnswer, isLastQuestion }: QuizActionsProps) {
	return (
		<div className='flex flex-col justify-between gap-4 sm:flex-row'>
			<Button
				onClick={!isLastQuestion ? onNext : undefined}
				disabled={!hasAnswer}
				className='order-2 px-8 py-2 text-base sm:order-1'
			>
				{!isLastQuestion ? 'Далее' : 'Проверить'}
			</Button>

			<Button onClick={onFinish} variant='destructive' className='order-2 px-8 py-2 text-base sm:order-1'>
				Завершить
			</Button>
		</div>
	);
}
