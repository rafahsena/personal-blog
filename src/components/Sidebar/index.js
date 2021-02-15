import React from "react";
import {
  Flex,
  useStyleConfig,
  VStack,
  Link,
  Input,
  IconButton,
  HStack,
  Icon,
} from "@chakra-ui/react";

import { SearchIcon } from "@chakra-ui/icons";

import { GrGithub, GrSpotify, GrLinkedin } from "react-icons/gr";

const Sidebar = () => {
  const styles = useStyleConfig("Sidebar");

  return (
    <Flex {...styles}>
      <VStack spacing={4}>
        <Link
          href="https://blog.rafahsena.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          Página Inicial
        </Link>
        <Link
          href="https://portfolio.rafahsena.dev"
          target="_blank"
          rel="noreferrer noopener"
        >
          Portfólio
        </Link>
        <HStack>
          <Input
            _placeholder={{ color: styles.color }}
            variant="filled"
            placeholder="Buscar por texto ou tag"
          />
          <IconButton
            colorScheme="blue"
            aria-label="Search articles"
            icon={<SearchIcon />}
          />
        </HStack>
        <HStack marginTop={4} spacing={4}>
          <Link
            href="https://github.com/rafahsena"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon h={6} w={6} as={GrGithub} />
          </Link>
          <Link
            href="https://www.linkedin.com/in/rafahsena/"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon h={6} w={6} as={GrLinkedin} />
          </Link>
          <Link
            href="https://open.spotify.com/user/rafa_sena?si=BkKmFbkpTSSBktjVkdk66A"
            target="_blank"
            rel="noreferrer noopener"
          >
            <Icon h={6} w={6} as={GrSpotify} />
          </Link>
        </HStack>
      </VStack>
    </Flex>
  );
};

export default Sidebar;
