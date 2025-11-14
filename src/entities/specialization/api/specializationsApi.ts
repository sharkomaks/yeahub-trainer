import { baseApi } from '@/shared/api/api';

import type { SpecializationsResponse } from '../model/types';

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
