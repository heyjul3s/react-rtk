import { configureStore } from '@reduxjs/toolkit';
import type { Action, Store, ThunkAction } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { articlesApi } from '@/services/articles';

export const store: Store = configureStore({
  devTools: process.env.NODE_ENV !== 'production',
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(articlesApi.middleware),
  reducer: {
    [articlesApi.reducerPath]: articlesApi.reducer
  }
});

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action<string>
>;

setupListeners(store.dispatch);
