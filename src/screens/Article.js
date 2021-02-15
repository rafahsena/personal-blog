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

const Article = ({ article }) => {
  const { title, ...styles } = useStyleConfig("Article");

  return (
    <Flex {...styles}>
      <VStack>
        <Heading as="h3" color={title} marginY={8}>
          {article.title}
        </Heading>
        <Code>{`Publicado em ${dayjs(article._publishedAt).format(
          "LL"
        )} • ☕️ ${readTime(article.content)} min de leitura`}</Code>
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
};

export default Article;
