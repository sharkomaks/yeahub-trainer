import type { PaginatedResponse } from '@/shared/types/api';

export interface Specialization {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
}

export interface SpecializationsResponse extends PaginatedResponse {
	data: Specialization[];
}
