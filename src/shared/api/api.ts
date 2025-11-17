import { createApi, fetchBaseQuery, retry } from '@reduxjs/toolkit/query/react';

/**
 * Determine the base URL for API requests based on environment
 * - Development: uses '/api' which is proxied through Vite dev server
 * - Production: uses VITE_SERVER_URL from environment variables
 */
const getBaseUrl = (): string => {
	const isDevelopment = import.meta.env.DEV;

	if (isDevelopment) {
		return '/api';
	}

	const serverUrl = import.meta.env.VITE_SERVER_URL;

	if (!serverUrl) {
		console.error('VITE_SERVER_URL is not defined in environment variables');
		return '/api'; // Fallback to proxy path
	}

	return serverUrl;
};

const baseQueryWithRetry = retry(
	fetchBaseQuery({
		baseUrl: getBaseUrl(),
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
