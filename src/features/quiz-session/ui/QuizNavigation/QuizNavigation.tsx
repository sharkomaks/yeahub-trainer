import { FaChevronLeft, FaChevronRight } from 'react-icons/fa6';

interface QuizNavigationProps {
	onPrev: () => void;
	onNext: () => void;
	isFirstQuestion: boolean;
	isLastQuestion: boolean;
	canGoNext: boolean;
}

export function QuizNavigation({ onPrev, onNext, isFirstQuestion, isLastQuestion, canGoNext }: QuizNavigationProps) {
	return (
		<div className="mb-5 flex items-center justify-between">
			<button
				onClick={onPrev}
				disabled={isFirstQuestion}
				className="text-primary border-primary flex size-7 cursor-pointer items-center justify-center rounded-full border-2 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:border-gray-500 disabled:text-gray-500 disabled:opacity-30 disabled:hover:bg-white"
				aria-label="Предыдущий вопрос"
			>
				<FaChevronLeft className="h-5 w-5" />
			</button>

			<button
				onClick={onNext}
				disabled={isLastQuestion || !canGoNext}
				className="text-primary border-primary flex size-7 cursor-pointer items-center justify-center rounded-full border-2 transition-colors hover:bg-gray-200 disabled:cursor-not-allowed disabled:border-gray-500 disabled:text-gray-500 disabled:opacity-30 disabled:hover:bg-white"
				aria-label="Следующий вопрос"
			>
				<FaChevronRight className="h-5 w-5" />
			</button>
		</div>
	);
}
