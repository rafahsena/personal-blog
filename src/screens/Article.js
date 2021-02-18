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

import dayjs from "dayjs";

const Article = React.memo(({ article }) => {
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
        <Box maxWidth={800} lineHeight={1.6}>
          <ReactMarkdown
            className="custom-markdown"
            parserOptions={{ commonmark: true }}
          >
            {article.content}
          </ReactMarkdown>
        </Box>
      </VStack>
    </Flex>
  );
});

export default Article;
