import { useEffect } from 'react';
import toast from 'react-hot-toast';

export function useApiError(isError: boolean, errorMessage: string) {
	useEffect(() => {
		if (isError) {
			toast.error(errorMessage);
		}
	}, [isError, errorMessage]);
}
