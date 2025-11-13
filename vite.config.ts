import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';
import { defineConfig, loadEnv } from 'vite';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
	const env = loadEnv(mode, process.cwd(), '');

	return {
		plugins: [
			react({
				babel: {
					plugins: [['babel-plugin-react-compiler']]
				}
			}),
			tailwindcss()
		],
		server: {
			port: 3000,
			proxy: {
				'/api': {
					target: env.VITE_SERVER_URL,
					changeOrigin: true,
					rewrite: path => path.replace(/^\/api/, ''),
					secure: true
				}
			}
		},
		resolve: {
			alias: {
				'@': path.resolve(__dirname, './src')
			}
		}
	};
});
