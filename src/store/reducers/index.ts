import { combineReducers } from '@reduxjs/toolkit';
import { articlesReducer } from './articles';

const injectedReducers = {
  articles: articlesReducer
};

const rootReducer = combineReducers({
  ...injectedReducers
});

export type RootState = ReturnType<typeof rootReducer>;

export const createReducer = () => rootReducer;
