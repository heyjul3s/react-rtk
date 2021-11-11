import { articlesActions } from './articlesSlice';
import { endpoints, request } from '@/api';
import type { AppThunk } from '@/store';
import type { TArticle } from './types';

export const getArticles = (): AppThunk => async (dispatch) => {
  dispatch(articlesActions.setLoading(true));
  dispatch(articlesActions.setError(''));

  try {
    const response = await request<TArticle[]>(endpoints.ARTICLES);
    dispatch(articlesActions.getArticles(response?.data));
  } catch (error) {
    dispatch(articlesActions.setError(error.message));
  } finally {
    dispatch(articlesActions.setLoading(false));
  }
};
