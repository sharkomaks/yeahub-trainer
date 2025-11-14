import { useEffect } from 'react';
import toast from 'react-hot-toast';

/**
 * Hook for automatic API error handling with toast notifications
 *
 * Displays a toast notification when an API error occurs.
 * Automatically tracks error state and shows notification only once per error.
 *
 * @param isError - Boolean flag indicating if error occurred (from RTK Query)
 * @param errorMessage - User-friendly error message to display
 *
 * @example
 * ```typescript
 * const { data, isError } = useGetSpecializationsQuery();
 * useApiError(isError, 'Ошибка загрузки специализаций');
 * ```
 */
export function useApiError(isError: boolean, errorMessage: string) {
	useEffect(() => {
		if (isError) {
			toast.error(errorMessage);
		}
	}, [isError, errorMessage]);
}
