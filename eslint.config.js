import js from '@eslint/js';
import boundaries from 'eslint-plugin-boundaries';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import { defineConfig, globalIgnores } from 'eslint/config';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
	globalIgnores(['dist']),
	{
		files: ['**/*.{ts,tsx}'],
		extends: [
			js.configs.recommended,
			tseslint.configs.recommended,
			reactHooks.configs.flat.recommended,
			reactRefresh.configs.vite
		],
		languageOptions: {
			ecmaVersion: 2020,
			globals: globals.browser
		}
	},
	// Feature-Sliced Design rules
	{
		files: ['src/**/*.{ts,tsx}'],
		plugins: {
			boundaries,
			import: importPlugin
		},
		settings: {
			'import/resolver': {
				typescript: {
					alwaysTryTypes: true,
					project: './tsconfig.app.json'
				}
			},
			'boundaries/elements': [
				{
					type: 'app',
					pattern: 'app',
					mode: 'folder',
					basePattern: 'src'
				},
				{
					type: 'pages',
					pattern: 'pages',
					mode: 'folder',
					basePattern: 'src'
				},
				{
					type: 'widgets',
					pattern: 'widgets',
					mode: 'folder',
					basePattern: 'src'
				},
				{
					type: 'features',
					pattern: 'features',
					mode: 'folder',
					basePattern: 'src'
				},
				{
					type: 'entities',
					pattern: 'entities',
					mode: 'folder',
					basePattern: 'src'
				},
				{
					type: 'shared',
					pattern: 'shared',
					mode: 'folder',
					basePattern: 'src'
				}
			],
			'boundaries/ignore': ['**/*.test.*', '**/*.spec.*', '**/*.stories.*']
		},
		rules: {
			// FSD layer imports rule
			'boundaries/element-types': [
				'error',
				{
					default: 'disallow',
					rules: [
						{
							from: 'app',
							allow: ['pages', 'widgets', 'features', 'entities', 'shared']
						},
						{
							from: 'pages',
							allow: ['widgets', 'features', 'entities', 'shared']
						},
						{
							from: 'widgets',
							allow: ['features', 'entities', 'shared']
						},
						{
							from: 'features',
							allow: ['entities', 'shared']
						},
						{
							from: 'entities',
							allow: ['shared']
						},
						{
							from: 'shared',
							allow: []
						}
					]
				}
			],
			// No cross-imports between slices
			'import/no-internal-modules': 'off'
		}
	}
]);
