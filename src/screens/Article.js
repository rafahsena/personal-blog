import React from "react";
import { Box, Flex, Heading, useStyleConfig, VStack } from "@chakra-ui/react";
import Image from "next/image";
import ReactMarkdown from "react-markdown";

const Article = ({ article }) => {
  const { title, ...styles } = useStyleConfig("Article");
  const [{ text }, { image }] = article.content;

  return (
    <Flex {...styles}>
      <VStack>
        <Heading as="h3" color={title} marginY={8}>
          {article.title}
        </Heading>
        {image && (
          <Image src={image.url} alt={image.alt} width={400} height={312} />
        )}
        <Box maxWidth={800} lineHeight={1.6}>
          <ReactMarkdown>{text}</ReactMarkdown>
        </Box>
      </VStack>
    </Flex>
  );
};

export default Article;
