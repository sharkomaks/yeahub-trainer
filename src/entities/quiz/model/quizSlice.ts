import { type PayloadAction, createSlice } from '@reduxjs/toolkit';

import type { Question, QuizResponse } from './types';

interface QuizState {
	questions: Question[];
}

const initialState: QuizState = {
	questions: []
};

const quizSlice = createSlice({
	name: 'quiz',
	initialState,
	reducers: {
		setQuizData: (state, action: PayloadAction<QuizResponse>) => {
			state.questions = action.payload.questions;
		},
		clearQuizData: state => {
			state.questions = [];
		}
	}
});

export const { setQuizData, clearQuizData } = quizSlice.actions;
export const quizReducer = quizSlice.reducer;

export const selectQuestions = (state: { quiz: QuizState }) => state.quiz.questions;
