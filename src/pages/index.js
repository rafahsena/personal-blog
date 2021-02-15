import AllArticles from "../screens/Articles";
import { request } from "../lib/api";
import { ALL_ARTICLES } from "../queries/queries";

const Index = ({ articles }) => {
  return <AllArticles articles={articles} />;
};

export async function getServerSideProps() {
  const articles = await request({ query: ALL_ARTICLES });
  
  return { props: { articles } };
}

export default Index;
