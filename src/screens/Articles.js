import React from "react";
import ArticleItem from "../components/ArticleItem";
import { useRouter } from "next/router";

const AllArticles = ({ articles }) => {
  const router = useRouter();

  const handleArticleClick = (slug) => {
    router.push(`/articles/${slug}`);
  };

  return (
    <div>
      {articles?.allArticles.map((article) => (
        <ArticleItem
          key={article.id}
          article={article}
          onClick={() => handleArticleClick(article.slug)}
        />
      ))}
    </div>
  );
};

export default AllArticles;
