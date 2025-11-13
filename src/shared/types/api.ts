/**
 * Базовый тип для пагинированных ответов API
 */
export interface PaginatedResponse {
	page: number;
	limit: number;
	total: number;
}
