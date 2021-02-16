const headerTheme = {
    baseStyle: ({ colorMode }) => ({
      justifyContent: "space-evenly",
      flex: 1,
      marginY: 8,
      color: colorMode === "light" ? "blog.title.light" : "blog.title.dark",
    }),
  };
  
  export default headerTheme;
  