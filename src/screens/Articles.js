import React from "react";
import ArticleItem from "../components/ArticleItem";
import { useRouter } from "next/router";
import { Flex, Heading } from "@chakra-ui/layout";

const AllArticles = React.memo(({ articles }) => {
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
      {(!articles?.allArticles || articles.allArticles.length === 0) && (
        <Flex justifyContent="center" alignItems="center">
          <Heading size="sm">
            Não foi possível encontrar nenhum artigo :(
          </Heading>
        </Flex>
      )}
    </div>
  );
});

export default AllArticles;
