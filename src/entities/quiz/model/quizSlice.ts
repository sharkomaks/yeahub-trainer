import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Question, QuizResponse, UserAnswer } from './types';

interface QuizState {
	questions: Question[];
	quizResults: Record<number, UserAnswer> | null;
}

const initialState: QuizState = {
	questions: [],
	quizResults: null
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		setQuizData: (state, action: PayloadAction<QuizResponse>) => {
			state.questions = action.payload.questions;
		},
		setQuizResults: (state, action: PayloadAction<Record<number, UserAnswer>>) => {
			state.quizResults = action.payload;
		},
		clearQuizData: state => {
			state.questions = [];
			state.quizResults = null;
		}
	}
});

export const { setQuizData, setQuizResults, clearQuizData } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;

export const selectQuestions = (state: { quiz: QuizState }) => state.quiz.questions;
export const selectQuizResults = (state: { quiz: QuizState }) => state.quiz.quizResults;
