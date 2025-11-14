import { NuqsAdapter } from 'nuqs/adapters/react';
import type { ReactNode } from 'react';

import { StoreProvider } from './StoreProvider';
import { ToastProvider } from './ToastProvider';

/**
 * Props for AppProvider component
 */
interface AppProviderProps {
	children: ReactNode;
}

/**
 * Root application provider that composes all app-level providers
 *
 * Provider composition order:
 * 1. NuqsAdapter - URL state management
 * 2. StoreProvider - Redux store
 * 3. ToastProvider - Toast notifications
 *
 * @param children - Child components to wrap with providers
 * @returns Composed provider tree
 */
export function AppProvider({ children }: AppProviderProps) {
	return (
		<NuqsAdapter>
			<StoreProvider>
				<ToastProvider>{children}</ToastProvider>
			</StoreProvider>
		</NuqsAdapter>
	);
}
