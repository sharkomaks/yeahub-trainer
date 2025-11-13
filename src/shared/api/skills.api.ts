import type { SkillsResponse } from '@/shared/types';

import { baseApi } from './api';

export const skillsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getSkills: builder.query<SkillsResponse, number>({
			query: specializationId => ({
				url: '/skills',
				params: {
					specializations: specializationId
				}
			}),
			providesTags: ['Skills']
		})
	}),
	overrideExisting: false
});

export const { useGetSkillsQuery } = skillsApi;
