import { Box, useColorModeValue, Text } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  const sidebarBackground = useColorModeValue("#E2E8F0", "#202225");
  return (
    <Box padding={8} backgroundColor={sidebarBackground}>
      <Text>Sidebar</Text>
    </Box>
  );
};

export default Sidebar;
