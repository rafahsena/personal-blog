import {
  Heading,
  Box,
  Flex,
  Text,
  HStack,
  useColorMode,
  useStyleConfig,
} from "@chakra-ui/react";
import Image from "next/image";

const Article = ({ article }) => {
  const [text, image] = article.content;

  const style = useStyleConfig("Article");

  return (
    <Flex
      key={article.id}
      {...style}
    >
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
    </Flex>
  );
};

export default Article;
