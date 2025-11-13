import type { SpecializationsResponse } from '@/shared/types';

import { baseApi } from './api';

export const specializationsApi = baseApi.injectEndpoints({
	endpoints: builder => ({
		getSpecializations: builder.query<SpecializationsResponse, void>({
			query: () => '/specializations',
			providesTags: ['Specializations']
		})
	}),
	overrideExisting: false
});

export const { useGetSpecializationsQuery } = specializationsApi;
