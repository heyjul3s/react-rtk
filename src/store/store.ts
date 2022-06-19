import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { forceReducerReload } from 'redux-injectors';
import { rootReducer } from './reducers';

import type { Store } from '@reduxjs/toolkit';

const store: Store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production'
});

export function configureAppStore() {
  if (module.hot) {
    module.hot.accept('./reducers', () => {
      forceReducerReload(store);
    });
  }

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
