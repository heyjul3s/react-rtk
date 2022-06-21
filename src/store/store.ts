import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

import type { Store } from '@reduxjs/toolkit';

const store: Store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export function configureAppStore() {
  return store;
}

export type AppDispatch = typeof store.dispatch;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;

export type RootState = ReturnType<typeof store.getState>;
