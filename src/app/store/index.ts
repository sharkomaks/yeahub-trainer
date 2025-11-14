import { configureStore } from '@reduxjs/toolkit';

import { baseApi } from '@/shared/api/api';

/**
 * Redux store configuration with RTK Query integration
 * Includes baseApi reducer and middleware for data fetching/caching
 */
export const store = configureStore({
	reducer: {
		[baseApi.reducerPath]: baseApi.reducer
	},
	middleware: getDefaultMiddleware => getDefaultMiddleware().concat(baseApi.middleware)
});

/**
 * Root state type derived from store
 * Use for typing useSelector hooks
 */
export type RootState = ReturnType<typeof store.getState>;

/**
 * App dispatch type derived from store
 * Use for typing useDispatch hooks
 */
export type AppDispatch = typeof store.dispatch;
