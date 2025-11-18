import type { Skill } from '@/entities/skill';
import type { Specialization } from '@/entities/specialization';

export interface QuizParams {
	specialization: number;
	skills: number[];
	limit: number;
}

export interface QuizAuthor {
	id: string;
	username: string;
}

export interface QuizAnswer {
	questionId: number;
	questionTitle: string;
}

export interface QuizAnswersInfo {
	answers: QuizAnswer[];
}

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

export interface QuizResponse {
	fullCount: number;
	skills: string[];
	questions: Question[];
	response: QuizAnswersInfo;
	startDate: string;
}

export type UserAnswer = 'know' | 'dontKnow';
