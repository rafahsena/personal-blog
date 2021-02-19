import React from "react";
import {
  Box,
  Code,
  Flex,
  Heading,
  useStyleConfig,
  VStack,
} from "@chakra-ui/react";
import ReactMarkdown from "react-markdown";
import readTime from "../helpers/readTime";

import Link from "next/link";

import dayjs from "dayjs";

const Article = React.memo(({ article, previousArticle, nextArticle }) => {
  const { title, ...styles } = useStyleConfig("Article");

  return (
    <Flex {...styles}>
      <VStack>
        <Heading alignSelf="flex-start" as="h3" color={title} marginY={4}>
          {article.title}
        </Heading>
        <Code marginY={4} alignSelf="flex-start">{`Publicado em ${dayjs(
          article._publishedAt
        ).format("LL")} • ☕️ ${readTime(
          article.content
        )} min de leitura`}</Code>
        <Box width={800} lineHeight={1.6} className="custom-markdown">
          <ReactMarkdown parserOptions={{ commonmark: true }}>
            {article.content}
          </ReactMarkdown>
          <Flex justifyContent="space-between" marginTop={8}>
            <span>
              {previousArticle && (
                <Link href={`/articles/${previousArticle.slug}`}>
                  {`← ${previousArticle.title}`}
                </Link>
              )}
            </span>
            <span>
              {nextArticle && (
                <Link href={`/articles/${nextArticle.slug}`}>
                  {`${nextArticle.title} →`}
                </Link>
              )}
            </span>
          </Flex>
        </Box>
      </VStack>
    </Flex>
  );
});

export default Article;
