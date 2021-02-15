import React from "react";
import ArticleItem from "../components/ArticleItem";

const AllArticles = ({ articles }) => {
  return (
    <div>
      {articles?.allArticles.map((article) => (
        <ArticleItem key={article.id} article={article} />
      ))}
    </div>
  );
};

export default AllArticles;
