import type { Specialization } from '@/entities/specialization';

import type { PaginatedResponse } from '@/shared/types/api';

export interface Skill {
	id: number;
	title: string;
	description: string;
	imageSrc: string;
	createdAt: string;
	updatedAt: string;
	specializations: Specialization[];
}

export interface SkillsResponse extends PaginatedResponse {
	data: Skill[];
}
