import type { ReactNode } from 'react';
import { Provider } from 'react-redux';

import { store } from '../store';

/**
 * Props for StoreProvider component
 */
interface StoreProviderProps {
	children: ReactNode;
}

/**
 * Redux store provider wrapper
 * Provides Redux store to all child components using React-Redux Provider
 * @param children - Child components that need access to Redux store
 * @returns Redux Provider with configured store
 */
export function StoreProvider({ children }: StoreProviderProps) {
	return <Provider store={store}>{children}</Provider>;
}
