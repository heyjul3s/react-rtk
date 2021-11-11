import { createSelector } from '@reduxjs/toolkit';

export const selectArticlesState = (state) => state.articles;

export const selectArticles = createSelector(
  selectArticlesState,
  (articlesState) => articlesState.articles
);
