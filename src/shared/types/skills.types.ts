import type { PaginatedResponse } from './api';
import type { Specialization } from './specializations.types';

/**
 * Навык (технология, инструмент)
 */
export interface Skill {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
	specializations: Specialization[];
}

/**
 * Ответ API со списком навыков
 */
export interface SkillsResponse extends PaginatedResponse {
	data: Skill[];
}
