interface QuizProgressProps {
	currentIndex: number;
	totalQuestions: number;
}

export function QuizProgress({ currentIndex, totalQuestions }: QuizProgressProps) {
	const progress = ((currentIndex + 1) / totalQuestions) * 100;

	return (
		<div className="mb-6 rounded-2xl bg-white p-4 sm:p-6">
			<div className="mb-3 flex items-center justify-between sm:mb-4">
				<h1 className="text-xl font-medium">Вопросы собеседования</h1>
				<span className="text-sm text-gray-600 sm:text-base">
					{currentIndex + 1}/{totalQuestions}
				</span>
			</div>
			<div className="h-1 w-full overflow-hidden rounded-full bg-gray-200">
				<div className="bg-primary h-full transition-all duration-300" style={{ width: `${progress}%` }} />
			</div>
		</div>
	);
}
