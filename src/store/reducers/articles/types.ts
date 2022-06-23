export type TArticle = {
  userId: number;
  id: number;
  title: string;
  body: string;
};

export interface IArticlesState {
  articles: TArticle[];
  loading: boolean;
  error?: string;
}
