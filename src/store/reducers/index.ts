import { combineReducers } from '@reduxjs/toolkit';
import { articlesReducer } from './articles';

export type RootState = ReturnType<typeof rootReducer>;

export const rootReducer = combineReducers({
  articles: articlesReducer
});
