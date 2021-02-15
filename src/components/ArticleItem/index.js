import {
  Heading,
  Box,
  Flex,
  useStyleConfig,
  VStack,
  Code,
} from "@chakra-ui/react";
import Tag from "../Tag";
import { useRouter } from "next/router";

import dayjs from "dayjs";

const ArticleItem = ({ article }) => {
  const { title, ...style } = useStyleConfig("Articles");
  
  const router = useRouter();

  const handleArticleClick = () => {
    router.push(`/articles/${article.slug}`);
  };

  return (
    <Flex {...style} onClick={handleArticleClick}>
      <VStack spacing={4} align="flex-start">
        <Box flexGrow={1}>
          <Heading as="h3" size="lg" color={title}>
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

export default ArticleItem;
