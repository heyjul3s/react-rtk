import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { IArticlesState, TArticle } from './types';

const initialState: IArticlesState = {
  articles: [],
  loading: false,
  error: undefined
};

const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {
    setLoading(state, action: PayloadAction<boolean>) {
      state.loading = action.payload;
    },

    setError(state, action: PayloadAction<string>) {
      state.error = action.payload;
    },

    getArticles(state, action: PayloadAction<TArticle[]>) {
      state.articles = action.payload;
    }
  }
});

export const { actions: articlesActions, reducer: articlesReducer } =
  articlesSlice;
