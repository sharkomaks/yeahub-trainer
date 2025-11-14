/**
 * Types of API errors that can occur in the application
 */
export const ApiErrorType = {
	/** Error loading specializations list */
	SPECIALIZATIONS: 'SPECIALIZATIONS',
	/** Error loading skills list */
	SKILLS: 'SKILLS',
	/** Error creating/generating quiz */
	QUIZ: 'QUIZ',
	/** Generic API error */
	GENERIC: 'GENERIC'
} as const;

export type ApiErrorType = (typeof ApiErrorType)[keyof typeof ApiErrorType];

/**
 * Error messages mapped to error types
 */
const ERROR_MESSAGES: Record<ApiErrorType, string> = {
	[ApiErrorType.SPECIALIZATIONS]: 'Ошибка загрузки специализаций. Попробуйте перезагрузить страницу.',
	[ApiErrorType.SKILLS]: 'Ошибка загрузки навыков. Попробуйте перезагрузить страницу.',
	[ApiErrorType.QUIZ]: 'Ошибка создания квиза. Попробуйте ещё раз.',
	[ApiErrorType.GENERIC]: 'Ошибка загрузки данных. Попробуйте перезагрузить страницу.'
};

/**
 * Get user-friendly error message for a specific error type
 *
 * @param type - Type of API error
 * @returns Localized error message in Russian
 *
 * @example
 * ```typescript
 * const message = getErrorMessage(ApiErrorType.SPECIALIZATIONS);
 * // "Ошибка загрузки специализаций. Попробуйте перезагрузить страницу."
 * ```
 */
export function getErrorMessage(type: ApiErrorType): string {
	return ERROR_MESSAGES[type];
}
