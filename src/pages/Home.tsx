import { H1, Layout, P } from '@/components';
import { useGetArticlesQuery } from '@/services/articles';

export function Home() {
  const { data, isLoading, error } = useGetArticlesQuery('');

  return (
    <Layout>
      <H1>Welcome</H1>
      <P>Lorem Ipsum Dolor Sit Amet</P>

      {isLoading && <p>Loading</p>}
      {error && <p>Error</p>}

      <div>
        {!isLoading &&
          !error &&
          !!data?.length &&
          data.map((article) => {
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
