import { createAsyncThunk } from '@reduxjs/toolkit';
import { endpoints, request } from '@/requests';
import type { TArticle } from './types';

export const getArticles = createAsyncThunk(
  'articles/list',
  async (_, { rejectWithValue }) => {
    try {
      const response = await request<TArticle[]>(endpoints.ARTICLES);

      return {
        data: response?.data
      };
    } catch (error) {
      const errorResponse = error?.response?.data?.errors?.data?.[0];
      return rejectWithValue(errorResponse || error.message);
    }
  }
);
