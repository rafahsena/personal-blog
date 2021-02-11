import { Flex } from "@chakra-ui/react";
import React from "react";
import { DarkModeSwitch } from "../DarkModeSwitch";

const Header = () => {
  return (
    <Flex justifyContent="flex-end">
      <DarkModeSwitch />
    </Flex>
  );
};

export default Header;
