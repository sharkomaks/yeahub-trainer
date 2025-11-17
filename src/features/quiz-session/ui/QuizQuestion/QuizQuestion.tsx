import parse from 'html-react-parser';

import type { Question } from '@/entities/quiz/model/types';

interface QuizQuestionProps {
	question: Question;
	showAnswer: boolean;
	onToggleAnswer: () => void;
}

export function QuizQuestion({ question, showAnswer, onToggleAnswer }: QuizQuestionProps) {
	return (
		<div>
			<h2 className="mb-4 flex items-start gap-3 text-base font-medium sm:text-lg md:text-xl">
				<span className="text-primary">•</span>
				<span>{question.title}</span>
			</h2>

			<button onClick={onToggleAnswer} className="text-primary mb-4 text-sm hover:underline sm:text-base">
				{showAnswer ? 'Скрыть ответ' : 'Посмотреть ответ'}
			</button>

			{showAnswer && (
				<div className="mb-4 rounded-lg bg-gray-50 p-4 text-sm text-gray-700 sm:p-6 sm:text-base">
					{question.shortAnswer && <p className="whitespace-pre-wrap">{parse(question.shortAnswer)}</p>}
				</div>
			)}
		</div>
	);
}
