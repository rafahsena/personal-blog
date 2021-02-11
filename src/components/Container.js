import { useColorMode, Grid } from "@chakra-ui/react";

export const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };
  return (
    <Grid
      direction="row"
      templateColumns="20% 80%"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};
