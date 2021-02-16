import AllArticles from "../screens/Articles";
import { request } from "../lib/api";
import { ALL_ARTICLES } from "../queries/queries";

const Index = ({ articles }) => {
  return <AllArticles articles={articles} />;
};

export async function getServerSideProps(context) {
  const search = context?.query?.search || "";
  const variables = { filter: { title: { matches: { pattern: search } } } };
  const articles = await request({
    query: ALL_ARTICLES,
    variables,
  });

  return { props: { articles } };
}

export default Index;
