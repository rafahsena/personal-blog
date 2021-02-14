import {
  Heading,
  Box,
  Flex,
  Text,
  HStack,
  useStyleConfig,
  VStack,
} from "@chakra-ui/react";
import Image from "next/image";
import Tag from "../Tag";

const Article = ({ article }) => {
  const [text, image] = article.content;

  const style = useStyleConfig("Article");

  return (
    <Flex key={article.id} {...style}>
      <VStack spacing={4}>
        <HStack spacing={8}>
          <Image
            src={image.image.url}
            alt={image.image.alt}
            width={90}
            height={70}
          />
          <Box flexGrow={1}>
            <Heading as="h3" size="lg">
              {article.title}
            </Heading>
            <Text>{text.text}</Text>
          </Box>
        </HStack>
        {article.tag.tags.map((tag) => (
          <Tag tagName={tag} />
        ))}
      </VStack>
    </Flex>
  );
};

export default Article;
