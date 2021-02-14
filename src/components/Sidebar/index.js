import { Box, Text, useStyleConfig } from "@chakra-ui/react";
import React from "react";

const Sidebar = () => {
  
  const style = useStyleConfig("Sidebar");

  return (
    <Box padding={8} {...style}>
      <Text>Sidebar</Text>
    </Box>
  );
};

export default Sidebar;
