import {
	QuizActions,
	QuizFeedback,
	QuizNavigation,
	QuizProgress,
	QuizQuestion,
	useQuizSession
} from '@/features/quiz-session';

import { Container } from '@/shared/ui/Container';

export function QuizNewPage() {
	const session = useQuizSession();

	if (!session) {
		return null;
	}

	const {
		currentQuestion,
		currentIndex,
		totalQuestions,
		hasAnswer,
		isFirstQuestion,
		isLastQuestion,
		showAnswer,
		userAnswers,
		handlePrev,
		handleNext,
		handleAnswer,
		handleFinish,
		toggleAnswer
	} = session;

	return (
		<Container className="py-7">
			<QuizProgress currentIndex={currentIndex} totalQuestions={totalQuestions} />

			<div className="rounded-2xl bg-white p-4 sm:p-6 md:p-8">
				<QuizNavigation
					onPrev={handlePrev}
					onNext={handleNext}
					isFirstQuestion={isFirstQuestion}
					isLastQuestion={isLastQuestion}
					canGoNext={hasAnswer}
				/>

				<QuizQuestion question={currentQuestion} showAnswer={showAnswer} onToggleAnswer={toggleAnswer} />

				<QuizFeedback currentAnswer={userAnswers[currentQuestion.id]} onAnswer={handleAnswer} />

				<QuizActions
					onNext={handleNext}
					onFinish={handleFinish}
					hasAnswer={hasAnswer}
					isLastQuestion={isLastQuestion}
				/>
			</div>
		</Container>
	);
}

export const Component = QuizNewPage;
