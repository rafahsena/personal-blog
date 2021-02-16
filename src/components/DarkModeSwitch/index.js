import { useColorMode, Switch, Box } from "@chakra-ui/react";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const color = { light: "black", dark: "white" };
  const isDark = colorMode === "dark";
  const icon = isDark ? (
    <MoonIcon color={color[colorMode]} />
  ) : (
    <SunIcon color={color[colorMode]} />
  );

  return (
    <Box top="1rem" right="1rem">
      {icon}
      <Switch marginLeft={4} isChecked={isDark} onChange={toggleColorMode} />
    </Box>
  );
};
