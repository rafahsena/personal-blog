import React from "react";
import ArticleItem from "../components/ArticleItem";

const AllArticles = ({ articles }) => {
  return (
    <>
      {articles?.allArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </>
  );
};

export default AllArticles;
