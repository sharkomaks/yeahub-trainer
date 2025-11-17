export const ApiErrorType = {
	SPECIALIZATIONS: 'SPECIALIZATIONS',
	SKILLS: 'SKILLS',
	QUIZ: 'QUIZ',
	GENERIC: 'GENERIC'
} as const;

export type ApiErrorType = (typeof ApiErrorType)[keyof typeof ApiErrorType];

const ERROR_MESSAGES: Record<ApiErrorType, string> = {
	[ApiErrorType.SPECIALIZATIONS]: 'Ошибка загрузки специализаций. Попробуйте перезагрузить страницу.',
	[ApiErrorType.SKILLS]: 'Ошибка загрузки навыков. Попробуйте перезагрузить страницу.',
	[ApiErrorType.QUIZ]: 'Ошибка создания квиза. Попробуйте ещё раз.',
	[ApiErrorType.GENERIC]: 'Ошибка загрузки данных. Попробуйте перезагрузить страницу.'
};

export function getErrorMessage(type: ApiErrorType): string {
	return ERROR_MESSAGES[type];
}
