import {
  Heading,
  Box,
  Flex,
  useStyleConfig,
  VStack,
  Code,
} from "@chakra-ui/react";
import Tag from "../Tag";

import dayjs from "dayjs";

const Article = ({ article }) => {
  const { title, ...style } = useStyleConfig("Article");

  return (
    <Flex key={article.id} {...style}>
      <VStack spacing={4} align="flex-start">
        <Box flexGrow={1}>
          <Heading as="h4" size="md" color={title}>
            {article.title}
          </Heading>
        </Box>
        <small>
          <Code variant="subtle">
            {`Publicado em ${dayjs(article._publishedAt).format("LL")}`}
          </Code>
        </small>
        <Box>
          {article.tag.tags.map((tag) => (
            <Tag tagName={tag} key={tag} />
          ))}
        </Box>
      </VStack>
    </Flex>
  );
};

export default Article;
