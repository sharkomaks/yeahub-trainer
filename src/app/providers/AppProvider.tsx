import { NuqsAdapter } from 'nuqs/adapters/react';
import type { ReactNode } from 'react';

import { StoreProvider } from './StoreProvider';
import { ToastProvider } from './ToastProvider';

interface AppProviderProps {
	children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
	return (
		<NuqsAdapter>
			<StoreProvider>
				<ToastProvider>{children}</ToastProvider>
			</StoreProvider>
		</NuqsAdapter>
	);
}
