import type { Skill } from './skills.types';
import type { Specialization } from './specializations.types';

/**
 * Параметры запроса для создания mock квиза
 */
export interface QuizParams {
	specialization: number;
	skills: number[];
	limit: number;
}

/**
 * Автор вопроса
 */
export interface QuizAuthor {
	id: string;
	username: string;
}

/**
 * Ответ пользователя в квизе
 */
export interface QuizAnswer {
	questionId: number;
	questionTitle: string;
}

/**
 * Информация об ответах в квизе
 */
export interface QuizAnswersInfo {
	answers: QuizAnswer[];
}

/**
 * Вопрос в квизе
 */
export interface Question {
	id: number;
	title: string;
	description: string;
	code?: string;
	imageSrc?: string;
	keywords: string[];
	longAnswer: string;
	shortAnswer: string;
	status: string;
	rate: number;
	complexity: number;
	createdAt: string;
	updatedAt: string;
	createdById: string;
	updatedById: string;
	createdBy: QuizAuthor;
	updatedBy: QuizAuthor;
	questionSpecializations: Specialization[];
	questionSkills: Skill[];
}

/**
 * Ответ API с квизом
 */
export interface QuizResponse {
	fullCount: number;
	skills: string[];
	questions: Question[];
	response: QuizAnswersInfo;
	startDate: string;
}
