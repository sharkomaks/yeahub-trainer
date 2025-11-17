import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';

import type { UserAnswer } from '../../model/types';

interface QuizFeedbackProps {
	currentAnswer: UserAnswer | undefined;
	onAnswer: (answer: UserAnswer) => void;
}

export function QuizFeedback({ currentAnswer, onAnswer }: QuizFeedbackProps) {
	return (
		<div className='mb-6 flex items-center gap-4 border-b border-gray-200 pb-6 sm:gap-6'>
			<button
				onClick={() => onAnswer('dontKnow')}
				className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors sm:text-base ${
					currentAnswer === 'dontKnow' ? 'bg-red-100 text-red-700' : 'text-gray-600 hover:bg-gray-100'
				}`}
			>
				<FaRegThumbsDown className='h-4 w-4 sm:h-5 sm:w-5' />
				<span>Не знаю</span>
			</button>

			<button
				onClick={() => onAnswer('know')}
				className={`flex items-center gap-2 rounded-lg px-4 py-2 text-sm transition-colors sm:text-base ${
					currentAnswer === 'know' ? 'bg-green-100 text-green-700' : 'text-gray-600 hover:bg-gray-100'
				}`}
			>
				<FaRegThumbsUp className='h-4 w-4 sm:h-5 sm:w-5' />
				<span>Знаю</span>
			</button>
		</div>
	);
}
