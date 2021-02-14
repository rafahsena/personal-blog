import { useColorMode, Switch, Box } from "@chakra-ui/react";
import { SunIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === "dark";

  const color = { light: "black", dark: "white" };

  return (
    <Box position="fixed" top="1rem" right="1rem">
      <SunIcon color={color[colorMode]} />
      <Switch marginLeft={4} isChecked={isDark} onChange={toggleColorMode} />
    </Box>
  );
};
