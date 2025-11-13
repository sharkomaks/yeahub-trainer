import type { ReactNode } from 'react';

import { StoreProvider } from './StoreProvider';

interface StoreProviderProps {
	children: ReactNode;
}

export function AppProvider({ children }: StoreProviderProps) {
	return <StoreProvider>{children}</StoreProvider>;
}
