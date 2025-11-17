import type { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface ToastProviderProps {
	/** Child components to render */
	children: ReactNode;
}

export function ToastProvider({ children }: ToastProviderProps) {
	return (
		<>
			{children}
			<Toaster
				position='top-center'
				toastOptions={{
					duration: 4000,
					style: {
						background: '#fff',
						color: '#1f2937',
						border: '1px solid #e5e7eb',
						padding: '12px 16px',
						borderRadius: '8px',
						fontSize: '14px',
						boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
					},
					error: {
						duration: 5000,
						style: {
							background: '#fef2f2',
							color: '#991b1b',
							border: '1px solid #fecaca'
						},
						iconTheme: {
							primary: '#dc2626',
							secondary: '#fff'
						}
					},
					success: {
						style: {
							background: '#f0fdf4',
							color: '#166534',
							border: '1px solid #bbf7d0'
						},
						iconTheme: {
							primary: '#16a34a',
							secondary: '#fff'
						}
					}
				}}
			/>
		</>
	);
}
