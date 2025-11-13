import type { QuizParams, QuizResponse } from '@/shared/types';

import { baseApi } from './api';

export const quizApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getNewMockQuiz: builder.query<QuizResponse, QuizParams>({
			query: params => ({
				url: '/interview-preparation/quizzes/mock/new',
				params
			}),
			providesTags: ['NewQuiz']
		})
	}),
	overrideExisting: false
});

export const { useGetNewMockQuizQuery } = quizApi;
