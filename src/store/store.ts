import { Action, configureStore, ThunkAction } from '@reduxjs/toolkit';
import type { Store } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';

const store: Store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export function configureAppStore() {
  return store;
}

export type AppDispatch = typeof store.dispatch;
export type ReduxState = ReturnType<typeof store.getState>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  ReduxState,
  unknown,
  Action<string>
>;
