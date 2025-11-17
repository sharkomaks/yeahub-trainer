import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

const baseQueryWithRetry = retry(
	fetchBaseQuery({
		baseUrl: 'api',
		timeout: 10000
	}),
	{ maxRetries: 2 }
);

export const baseApi = createApi({
	reducerPath: 'api',
	baseQuery: baseQueryWithRetry,
	tagTypes: ['Specializations', 'Skills', 'NewQuiz'],
	endpoints: () => ({})
});
