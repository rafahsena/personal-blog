import React from "react";
import Article from "../../screens/Article";
import { request } from "../../lib/api";
import {
  GET_ARTICLE,
  NEXT_ARTICLE,
  PREVIOUS_ARTICLE,
} from "../../queries/queries";

const GetArticle = ({ article, nextArticle, previousArticle }) => {
  return (
    <Article
      article={article}
      nextArticle={nextArticle}
      previousArticle={previousArticle}
    />
  );
};

export async function getServerSideProps(context) {
  const articleSlug = { slug: { eq: context.query.slug } };

  const { article } = await request({
    query: GET_ARTICLE,
    variables: { filter: articleSlug },
  });

  const nextArticleQuery = await request({
    query: NEXT_ARTICLE,
    variables: { date: article._publishedAt, slug: article.slug },
  });

  const previousArticleQuery = await request({
    query: PREVIOUS_ARTICLE,
    variables: { date: article._publishedAt, slug: article.slug },
  });

  const [nextArticle] = nextArticleQuery?.allArticles;
  const [previousArticle] = previousArticleQuery?.allArticles;

  return {
    props: {
      article,
      nextArticle: nextArticle || null,
      previousArticle: previousArticle || null,
    },
  };
}

export default GetArticle;
