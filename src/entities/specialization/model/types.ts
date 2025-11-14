import type { PaginatedResponse } from '@/shared/types/api';

/**
 * Специализация (направление обучения)
 */
export interface Specialization {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
}

/**
 * Ответ API со списком специализаций
 */
export interface SpecializationsResponse extends PaginatedResponse {
	data: Specialization[];
}
