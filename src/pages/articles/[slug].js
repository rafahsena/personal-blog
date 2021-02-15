import React from "react";
import Article from "../../screens/Article";
import { request } from "../../lib/api";
import { GET_ARTICLE } from "../../queries/queries";

const GetArticle = ({ article }) => {
  return <Article article={article} />;
};

export async function getServerSideProps(context) {
  const articleSlug = { slug: { eq: context.query.slug } };

  const article = await request({
    query: GET_ARTICLE,
    variables: { filter: articleSlug },
  });
  return { props: article };
}

export default GetArticle;
