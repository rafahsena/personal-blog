const containerTheme = {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === "light" ? "gray.50" : "gray.900",
      color: colorMode === "light" ? "black" : "white",
    }),
  };
  
  export default containerTheme;
  