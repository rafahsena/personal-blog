import { Flex, useStyleConfig, Heading } from "@chakra-ui/react";
import { useRouter } from "next/router";
import React from "react";
import { DarkModeSwitch } from "../components/DarkModeSwitch";

const Header = () => {
  const styles = useStyleConfig("Header");
  const router = useRouter();

  const handleHeadingClick = () => {
    router.push("/");
  };

  return (
    <Flex {...styles}>
      <Heading cursor="pointer" onClick={handleHeadingClick}>
        Reactive Dev
      </Heading>
      <DarkModeSwitch />
    </Flex>
  );
};

export default Header;
