import React from 'react';
import { useSelector } from 'react-redux';
import { H1, Layout, P } from '@/components';
import { useAppDispatch } from '@/hooks';
import {
  getArticles,
  selectArticles,
  TArticle
} from '@/store/reducers/articles';

export function Home() {
  const dispatch = useAppDispatch();
  const articles: TArticle[] = useSelector(selectArticles);

  React.useEffect(() => {
    dispatch(getArticles());
  }, []);

  return (
    <Layout>
      <H1>Welcome</H1>
      <P>Lorem Ipsum Dolor Sit Amet</P>

      <div>
        {!!articles?.length &&
          articles.map((article) => {
            return (
              <div key={`${article.id}`}>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}
