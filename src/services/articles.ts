import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { baseUrl, endpoints } from './endpoints';

export type TArticle = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export const articlesApi = createApi({
  reducerPath: 'articlesApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getArticles: builder.query({
      query: () => endpoints.articles
    })
  })
});

export const { useGetArticlesQuery } = articlesApi;
