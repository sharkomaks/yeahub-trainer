/**
 * Application entry point
 * Renders the App component in React StrictMode for highlighting potential problems
 */
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './app';
import './app/styles/index.css';

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<App />
	</StrictMode>
);
