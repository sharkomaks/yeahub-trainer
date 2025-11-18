export { useGetNewMockQuizQuery, useLazyGetNewMockQuizQuery } from './api/quizApi';
export {
	quizReducer,
	clearQuizData,
	setQuizData,
	setQuizResults,
	selectQuestions,
	selectQuizResults
} from './model/quizSlice';
export type {
	QuizParams,
	QuizResponse,
	Question,
	UserAnswer,
	QuizAuthor,
	QuizAnswer,
	QuizAnswersInfo
} from './model/types';
