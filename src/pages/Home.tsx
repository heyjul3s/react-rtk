import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Layout, H1, P } from '@/components';

import {
  getArticles,
  selectArticles,
  TArticle
} from '@/store/reducers/articles';

export function Home() {
  const dispatch = useDispatch();
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
              <div>
                <h2>{article.title}</h2>
                <p>{article.body}</p>
              </div>
            );
          })}
      </div>
    </Layout>
  );
}
