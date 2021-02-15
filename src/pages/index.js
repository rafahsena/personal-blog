import Article from "../components/Article";
import { request } from "../lib/api";
import { ALL_ARTICLES_QUERY } from "../queries/queries";

const Index = ({ posts }) => {
  return (
    <div>
      {posts?.allArticles.map((article) => (
        <Article article={article} />
      ))}
    </div>
  );
};

export async function getServerSideProps() {
  const posts = await request({ query: ALL_ARTICLES_QUERY });
  return { props: { posts } };
}

export default Index;
