const containerTheme = {
    baseStyle: ({ colorMode }) => ({
      bg: colorMode === "light" ? "gray.50" : "gray.900",
      color: colorMode === "light" ? "rgba(0, 0, 0, 0.87)" : "rgba(255, 255, 255, 0.87)",
    }),
  };
  
  export default containerTheme;
  