import { FaRegThumbsDown, FaRegThumbsUp } from 'react-icons/fa';

import type { Question, UserAnswer } from '@/entities/quiz/model/types';

interface QuizResultCardProps {
	question: Question;
	userAnswer: UserAnswer;
}

export function QuizResultCard({ question, userAnswer }: QuizResultCardProps) {
	const isKnown = userAnswer === 'know';

	return (
		<div className='flex gap-4 rounded-lg bg-white p-4 shadow-sm'>
			<div className='bg-bg-result flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'>
				<img src='/mongoose.svg' alt='' className='h-10 w-10' />
			</div>

			<div className='flex flex-1 flex-col gap-2'>
				<h3 className='text-base font-medium text-gray-900'>{question.title}</h3>

				<div
					className={`flex w-fit items-center gap-1.5 rounded-md px-3 py-1.5 text-sm font-medium ${
						isKnown ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
					}`}
				>
					{isKnown ? <FaRegThumbsUp className='h-4 w-4' /> : <FaRegThumbsDown className='h-4 w-4' />}
					<span>{isKnown ? 'Знаю' : 'Не знаю'}</span>
				</div>
			</div>
		</div>
	);
}
