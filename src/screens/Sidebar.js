import React, { useState } from "react";
import {
  Flex,
  useStyleConfig,
  VStack,
  Link,
  Input,
  IconButton,
  HStack,
  Icon,
  Drawer,
  DrawerCloseButton,
  DrawerOverlay,
  DrawerContent,
  Box,
  useDisclosure,
} from "@chakra-ui/react";

import { HamburgerIcon, SearchIcon } from "@chakra-ui/icons";

import { GrGithub, GrSpotify, GrLinkedin } from "react-icons/gr";
import { useRouter } from "next/router";

const SidebarContent = ({ titleColor }) => {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const onHomePageClick = () => router.push("/");

  const onSearchClick = () => router.push({ pathname: "/", query: { search } });

  return (
    <VStack spacing={4}>
      <Link onClick={onHomePageClick} as="div">
        Página Inicial
      </Link>
      <Link
        href="https://portfolio.rafahsena.dev"
        target="_blank"
        rel="noreferrer noopener"
      >
        Portfólio
      </Link>
      <HStack paddingX={8}>
        <Input
          _placeholder={{ color: titleColor }}
          variant="filled"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Buscar por texto"
        />
        <IconButton
          colorScheme="blue"
          aria-label="Search articles"
          onClick={onSearchClick}
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
  );
};

const MobileDrawer = React.memo(({ children, ...restProps }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box
      position="fixed"
      sx={{ "@media screen and (min-width: 64em)": { display: "none" } }}
    >
      <IconButton
        aria-label="Open Drawer"
        onClick={onOpen}
        icon={<HamburgerIcon />}
        variant="ghost"
      />
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent {...restProps}>
            <DrawerCloseButton />
            {children}
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
});

const ReponsiveSidebar = React.memo(() => {
  const styles = useStyleConfig("Sidebar");
  return (
    <>
      <Flex
        {...styles}
        sx={{ "@media screen and (max-width: 63em)": { display: "none" } }}
      >
        <SidebarContent titleColor={styles.color} />
      </Flex>
      <MobileDrawer {...styles}>
        <SidebarContent titleColor={styles.color} />
      </MobileDrawer>
    </>
  );
});

export default ReponsiveSidebar;
